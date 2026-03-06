#!/usr/bin/env pwsh
$ErrorActionPreference = "Stop"

$ROOT_DIR = Resolve-Path (Join-Path $PSScriptRoot "..")
$HASH_FILE = Join-Path $ROOT_DIR "src/canvas-host/a2ui/.bundle.hash"
$OUTPUT_FILE = Join-Path $ROOT_DIR "src/canvas-host/a2ui/a2ui.bundle.js"
$A2UI_RENDERER_DIR = Join-Path $ROOT_DIR "vendor/a2ui/renderers/lit"
$A2UI_APP_DIR = Join-Path $ROOT_DIR "apps/shared/OpenClawKit/Tools/CanvasA2UI"

# Docker builds exclude vendor/apps via .dockerignore.
# In that environment we can keep a prebuilt bundle only if it exists.
if ((-not (Test-Path $A2UI_RENDERER_DIR)) -or (-not (Test-Path $A2UI_APP_DIR))) {
    if (Test-Path $OUTPUT_FILE) {
        Write-Host "A2UI sources missing; keeping prebuilt bundle."
        exit 0
    }
    Write-Error "A2UI sources missing and no prebuilt bundle found at: $OUTPUT_FILE"
    exit 1
}

$INPUT_PATHS = @(
    (Join-Path $ROOT_DIR "package.json")
    (Join-Path $ROOT_DIR "pnpm-lock.yaml")
    $A2UI_RENDERER_DIR
    $A2UI_APP_DIR
)

function Compute-Hash {
    $files = @()
    foreach ($inputPath in $INPUT_PATHS) {
        if (Test-Path $inputPath -PathType Container) {
            $files += Get-ChildItem -Path $inputPath -Recurse -File | Select-Object -ExpandProperty FullName
        } else {
            $files += $inputPath
        }
    }
    
    $files = $files | Sort-Object
    $sha256 = [System.Security.Cryptography.SHA256]::Create()
    $stream = New-Object System.IO.MemoryStream
    $writer = New-Object System.IO.StreamWriter($stream)
    
    foreach ($file in $files) {
        $relPath = $file.Replace($ROOT_DIR, "").TrimStart("\", "/")
        $writer.Write($relPath)
        $writer.Write("`0")
        $content = [System.IO.File]::ReadAllBytes($file)
        $writer.Write([System.Text.Encoding]::UTF8.GetString($content))
        $writer.Write("`0")
    }
    $writer.Flush()
    $stream.Position = 0
    $hash = $sha256.ComputeHash($stream)
    return [BitConverter]::ToString($hash).Replace("-", "").ToLower()
}

$current_hash = Compute-Hash

if (Test-Path $HASH_FILE) {
    $previous_hash = Get-Content $HASH_FILE -Raw
    if ($previous_hash.Trim() -eq $current_hash -and (Test-Path $OUTPUT_FILE)) {
        Write-Host "A2UI bundle up to date; skipping."
        exit 0
    }
}

Write-Host "Building A2UI bundle..."

# Compile TypeScript
& pnpm -s exec tsc -p (Join-Path $A2UI_RENDERER_DIR "tsconfig.json")
if ($LASTEXITCODE -ne 0) {
    Write-Error "TypeScript compilation failed"
    exit 1
}

# Bundle with rolldown
$rolldownConfig = Join-Path $A2UI_APP_DIR "rolldown.config.mjs"
& pnpm -s dlx rolldown -c $rolldownConfig
if ($LASTEXITCODE -ne 0) {
    Write-Error "Rolldown bundling failed"
    exit 1
}

$current_hash | Out-File -FilePath $HASH_FILE -NoNewline
Write-Host "A2UI bundle built successfully."
