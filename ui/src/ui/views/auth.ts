import { html, css, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { t } from "../../i18n/index.ts";
import type { OpenClawApp } from "../app.js";
import { handleLogin, handleRegister, handleForgotPassword } from "../controllers/auth.js";
import type { LoginCredentials, RegisterData } from "../../services/auth.service.js";

@customElement("auth-view")
export class AuthView extends LitElement {
  static styles = css`
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      background: linear-gradient(135deg, #1e3a5f 0%, #2c5282 50%, #1e3a5f 100%);
      padding: 20px;
      font-family: var(--font-sans, system-ui, -apple-system, sans-serif);
    }

    .auth-container {
      width: 100%;
      max-width: 440px;
      background: #ffffff;
      border-radius: 12px;
      padding: 48px 40px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1);
    }

    .logo {
      text-align: center;
      margin-bottom: 36px;
    }

    .logo-icon {
      width: 64px;
      height: 64px;
      margin: 0 auto 16px;
      background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 32px;
      font-weight: 700;
      color: white;
      box-shadow: 0 8px 24px rgba(37, 99, 235, 0.35);
    }

    .logo h1 {
      color: #1e293b;
      font-size: 26px;
      font-weight: 700;
      letter-spacing: -0.01em;
      margin: 0 0 6px 0;
    }

    .logo p {
      color: #64748b;
      font-size: 14px;
      font-weight: 400;
      margin: 0;
    }

    .form-group {
      margin-bottom: 20px;
    }

    .form-group label {
      display: block;
      color: #374151;
      font-size: 14px;
      font-weight: 500;
      margin-bottom: 8px;
    }

    .form-group input {
      width: 100%;
      padding: 12px 16px;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      background: #ffffff;
      color: #1e293b;
      font-size: 15px;
      box-sizing: border-box;
      transition: all 0.2s ease;
    }

    .form-group input:hover {
      border-color: #cbd5e1;
    }

    .form-group input:focus {
      outline: none;
      border-color: #2563eb;
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
    }

    .form-group input::placeholder {
      color: #94a3b8;
    }

    .btn {
      width: 100%;
      padding: 14px 20px;
      border: none;
      border-radius: 8px;
      font-size: 15px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .btn-primary {
      background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
      color: white;
      box-shadow: 0 4px 14px rgba(37, 99, 235, 0.35);
    }

    .btn-primary:hover:not(:disabled) {
      background: linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%);
      transform: translateY(-1px);
      box-shadow: 0 6px 20px rgba(37, 99, 235, 0.45);
    }

    .btn-primary:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .btn-secondary {
      background: transparent;
      color: #475569;
      border: 1px solid #e2e8f0;
    }

    .btn-secondary:hover {
      color: #1e293b;
      border-color: #cbd5e1;
      background: #f8fafc;
    }

    .error-message {
      background: #fef2f2;
      border: 1px solid #fecaca;
      color: #dc2626;
      padding: 12px 16px;
      border-radius: 8px;
      margin-bottom: 20px;
      font-size: 14px;
      font-weight: 500;
    }

    .success-message {
      background: #f0fdf4;
      border: 1px solid #bbf7d0;
      color: #16a34a;
      padding: 12px 16px;
      border-radius: 8px;
      margin-bottom: 20px;
      font-size: 14px;
      font-weight: 500;
    }

    .auth-links {
      text-align: center;
      margin-top: 24px;
      padding-top: 24px;
      border-top: 1px solid #e2e8f0;
    }

    .auth-links a {
      color: #2563eb;
      text-decoration: none;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: color 0.2s;
    }

    .auth-links a:hover {
      color: #1d4ed8;
      text-decoration: none;
    }

    .auth-links span {
      color: #94a3b8;
      margin: 0 12px;
      font-size: 13px;
    }

    .loading-spinner {
      display: inline-block;
      width: 16px;
      height: 16px;
      border: 2px solid rgba(255, 255, 255, 0.4);
      border-top-color: white;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
      margin-right: 8px;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
  `;

  @property({ type: Object }) app!: OpenClawApp;

  @state() private email = "";
  @state() private password = "";
  @state() private confirmPassword = "";
  @state() private name = "";

  private handleSubmit(e: Event) {
    e.preventDefault();

    if (this.app.authView === "login") {
      const credentials: LoginCredentials = {
        email: this.email,
        password: this.password,
      };
      handleLogin(this.app, credentials);
    } else if (this.app.authView === "register") {
      if (this.password !== this.confirmPassword) {
        this.app.authError = "两次输入的密码不一致";
        return;
      }
      const data: RegisterData = {
        email: this.email,
        password: this.password,
        name: this.name || undefined,
      };
      handleRegister(this.app, data);
    } else if (this.app.authView === "forgot-password") {
      handleForgotPassword(this.app, this.email);
    }
  }

  private switchView(view: "login" | "register" | "forgot-password") {
    this.app.authView = view;
    this.app.authError = null;
    this.email = "";
    this.password = "";
    this.confirmPassword = "";
    this.name = "";
  }

  render() {
    const isLogin = this.app.authView === "login";
    const isRegister = this.app.authView === "register";
    const isForgot = this.app.authView === "forgot-password";

    return html`
      <div class="auth-container">
        <div class="logo">
          <div class="logo-icon">算</div>
          <h1>算力作战Skill中心</h1>
          <p>${isLogin ? "欢迎回来" : isRegister ? "创建新账户" : "重置您的密码"}</p>
        </div>

        ${this.app.authError
          ? html`<div class="error-message">${this.app.authError}</div>`
          : null}

        <form @submit=${this.handleSubmit}>
          ${isRegister
            ? html`
                <div class="form-group">
                  <label for="name">姓名（可选）</label>
                  <input
                    type="text"
                    id="name"
                    .value=${this.name}
                    @input=${(e: InputEvent) =>
                      (this.name = (e.target as HTMLInputElement).value)}
                    placeholder="您的姓名"
                    ?disabled=${this.app.authLoading}
                  />
                </div>
              `
            : null}

          <div class="form-group">
            <label for="email">邮箱</label>
            <input
              type="email"
              id="email"
              .value=${this.email}
              @input=${(e: InputEvent) =>
                (this.email = (e.target as HTMLInputElement).value)}
              placeholder="your@email.com"
              required
              ?disabled=${this.app.authLoading}
            />
          </div>

          ${!isForgot
            ? html`
                <div class="form-group">
                  <label for="password">密码</label>
                  <input
                    type="password"
                    id="password"
                    .value=${this.password}
                    @input=${(e: InputEvent) =>
                      (this.password = (e.target as HTMLInputElement).value)}
                    placeholder="请输入密码"
                    required
                    ?disabled=${this.app.authLoading}
                  />
                </div>
              `
            : null}

          ${isRegister
            ? html`
                <div class="form-group">
                  <label for="confirmPassword">确认密码</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    .value=${this.confirmPassword}
                    @input=${(e: InputEvent) =>
                      (this.confirmPassword = (e.target as HTMLInputElement).value)}
                    placeholder="请再次输入密码"
                    required
                    ?disabled=${this.app.authLoading}
                  />
                </div>
              `
            : null}

          <button type="submit" class="btn btn-primary" ?disabled=${this.app.authLoading}>
            ${this.app.authLoading
              ? html`<span class="loading-spinner"></span> 加载中...`
              : isLogin
                ? "登录"
                : isRegister
                  ? "创建账户"
                  : "发送重置链接"}
          </button>
        </form>

        <div class="auth-links">
          ${isLogin
            ? html`
                <a @click=${() => this.switchView("forgot-password")}>忘记密码？</a>
                <span>|</span>
                <a @click=${() => this.switchView("register")}>创建账户</a>
              `
            : html`
                <a @click=${() => this.switchView("login")}>返回登录</a>
              `}
        </div>
      </div>
    `;
  }
}
