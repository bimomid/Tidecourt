# Tidecourt

多 AI 协作的桌面工作台：Tauri 2 外壳 + Vite+ 前端 + FastAPI 服务端 + 一等公民 CLI。

> 当前处于**骨架阶段**：工程结构、代码规范、提交门禁已就位，业务功能尚未实现。

## 技术栈

| 层     | 选型                                                                       |
| ------ | -------------------------------------------------------------------------- |
| 桌面壳 | Tauri 2（Windows / Linux / Android，不做 iOS）                             |
| 前端   | TypeScript + Vite+ 1.5（`vp dev/build/check`、oxfmt、Oxlint）+ stylelint |
| 服务端 | Python 3.13 + FastAPI + PostgreSQL（规划中）                               |
| 本地库 | SQLite（桌面 sqlx / CLI better-sqlite3，规划中）                           |
| 工具链 | pnpm 12 · uv · Rust 1.90+（edition 2024）                                |

## 目录结构

```
.
├── frontend/           # 前端（Vite+，TypeScript）
├── client/             # 桌面外壳（Tauri 2）
│   └── src-tauri/      # Rust 侧代码与 tauri.conf.json
├── backend/            # 服务端（uv + Python 3.13）
├── .vite-hooks/        # Git 钩子：pre-commit / commit-msg
├── .github/workflows/  # CI：hygiene / frontend / backend / tauri
└── .vscode/            # 仓库级编辑器配置（在仓库根目录打开即生效）
```
