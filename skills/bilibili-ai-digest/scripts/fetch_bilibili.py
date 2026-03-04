#!/usr/bin/env python3
"""
Fetch latest videos from specified Bilibili UP主 (creators).
Usage: python3 fetch_bilibili.py [--hours 24]
"""

import urllib.request
import json
import sys
import time
from datetime import datetime, timezone

# UP主配置：name -> UID
UP_LIST = {
    "硅谷101":        508452265,
    "AI深度研究员":   3546710527707195,
    "KrillinAI小林":  242124650,
    "飞天闪客":       325864133,
    "产品君":         1845434732,
}

HOURS_WINDOW = 48   # 默认抓取最近 48 小时内的视频

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
    "Referer": "https://www.bilibili.com",
}


def fetch_user_videos(uid: int, name: str, hours: int = HOURS_WINDOW):
    """Fetch recent videos from a Bilibili user."""
    url = (
        f"https://api.bilibili.com/x/space/arc/search"
        f"?mid={uid}&ps=10&pn=1&order=pubdate&jsonp=jsonp"
    )
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read().decode())
    except Exception as e:
        return [], f"请求失败: {e}"

    if data.get("code") != 0:
        return [], f"API错误: {data.get('message')}"

    vlist = data.get("data", {}).get("list", {}).get("vlist", [])
    cutoff = time.time() - hours * 3600
    recent = []
    for v in vlist:
        if v.get("created", 0) >= cutoff:
            recent.append({
                "title": v.get("title", ""),
                "bvid":  v.get("bvid", ""),
                "url":   f"https://www.bilibili.com/video/{v.get('bvid','')}",
                "play":  v.get("play", 0),
                "created": datetime.fromtimestamp(v.get("created", 0), tz=timezone.utc)
                              .astimezone().strftime("%m-%d %H:%M"),
                "length": v.get("length", ""),
                "description": v.get("description", "")[:80],
            })
    return recent, None


def main():
    hours = HOURS_WINDOW
    for arg in sys.argv[1:]:
        if arg.startswith("--hours="):
            hours = int(arg.split("=")[1])

    now_str = datetime.now().strftime("%Y-%m-%d %H:%M")
    results = []
    errors = []

    for name, uid in UP_LIST.items():
        if uid is None:
            errors.append(f"⚠️ {name}：UID 未配置，请在脚本中填入正确 UID")
            continue
        videos, err = fetch_user_videos(uid, name, hours)
        if err:
            errors.append(f"❌ {name}：{err}")
        else:
            results.append((name, videos))
        time.sleep(0.5)   # 礼貌延迟

    # 输出 Markdown 摘要
    print(f"## 📺 B站 AI 博主最新视频 · {now_str}\n")
    print(f"> 统计周期：最近 {hours} 小时\n")

    has_video = False
    for name, videos in results:
        if not videos:
            print(f"### {name}\n_最近 {hours} 小时内无新视频_\n")
        else:
            has_video = True
            print(f"### {name}（{len(videos)} 条新视频）\n")
            for v in videos:
                print(f"- **[{v['title']}]({v['url']})**")
                print(f"  🕐 {v['created']}  ⏱ {v['length']}  ▶️ {v['play']} 播放")
                if v['description']:
                    print(f"  _{v['description']}_")
                print()

    if not has_video:
        print("_本周期内所有关注博主均无新视频更新_\n")

    if errors:
        print("---\n**错误信息：**")
        for e in errors:
            print(f"- {e}")


if __name__ == "__main__":
    main()
