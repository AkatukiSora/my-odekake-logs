# 旅の記録 (my-odekake-logs)# Astro Starter Kit: Basics



Markdownで旅の記録を管理し、Astroで静的サイトを生成する個人用旅行記録システムです。```sh

pnpm create astro@latest -- --template basics

## 🚀 機能```



- **Markdownで記録管理**: 1記事=1旅程または1日の記録> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

- **メタデータ管理**: Frontmatterで日付・場所・目的・タグ等を管理

- **全文検索**: Pagefindによる本文・メタデータの検索## 🚀 Project Structure

- **タグ絞り込み**: タグによる記事の絞り込み表示

- **時系列表示**: 日付順での記事一覧表示Inside of your Astro project, you'll see the following folders and files:

- **静的サイト生成**: Astroによる高速な静的サイト

- **自動デプロイ**: GitHub Pagesへの自動デプロイ```text

/

## 📋 技術スタック├── public/

│   └── favicon.svg

| 分類 | 技術 | 用途 |├── src

|------|------|------|│   ├── assets

| 言語/ランタイム | **Node.js (LTS)** | 実行環境 |│   │   └── astro.svg

| パッケージ管理 | **pnpm** | 依存関係・スクリプト実行 |│   ├── components

| 静的サイトジェネレータ | **Astro** | MarkdownからHTML生成 |│   │   └── Welcome.astro

| コンテンツ管理 | **Astro Content Collections** | Frontmatterスキーマ定義・取得 |│   ├── layouts

| 検索 | **Pagefind** | 全文・メタデータ検索 |│   │   └── Layout.astro

| 記法 | **Markdown + YAML Frontmatter** | 記録データ形式 |│   └── pages

| バージョン管理 | **git** | 履歴・差分追跡 |│       └── index.astro

| デプロイ | **GitHub Pages** | 静的サイトホスティング |└── package.json

```

## 🛠️ セットアップ

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

### 前提条件

## 🧞 Commands

- Node.js (LTS版)

- pnpmAll commands are run from the root of the project, from a terminal:



### インストール| Command                   | Action                                           |

| :------------------------ | :----------------------------------------------- |

```bash| `pnpm install`             | Installs dependencies                            |

# リポジトリをクローン| `pnpm dev`             | Starts local dev server at `localhost:4321`      |

git clone https://github.com/AkatukiSora/my-odekake-logs.git| `pnpm build`           | Build your production site to `./dist/`          |

cd my-odekake-logs| `pnpm preview`         | Preview your build locally, before deploying     |

| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |

# 依存関係をインストール| `pnpm astro -- --help` | Get help using the Astro CLI                     |

pnpm install

```## 👀 Want to learn more?



## 📝 使い方Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).


### 開発サーバーの起動

```bash
pnpm dev
```

ブラウザで `http://localhost:4321` を開きます。

### 新しい記事を作成

`src/content/logs/` ディレクトリに新しいMarkdownファイルを作成します。

**ファイル名の形式**: `YYYY-MM-DD-title.md`

**Frontmatterの例**:

```yaml
---
title: 東京観光
date: 2025-11-01
location: 東京
purpose: 友人との観光
tags: [観光, 東京, グルメ]
description: 友人と一緒に東京の主要スポットを巡った一日
---

# 本文

ここに旅の記録を書きます...
```

### ビルド

```bash
pnpm build
```

静的ファイルが `dist/` ディレクトリに生成されます。

### プレビュー

```bash
pnpm preview
```

ビルドしたサイトをローカルでプレビューできます。

## 📂 プロジェクト構造

```
my-odekake-logs/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pagesデプロイ設定
├── src/
│   ├── content/
│   │   ├── config.ts           # Content Collectionsスキーマ定義
│   │   └── logs/               # 旅記録Markdownファイル
│   │       ├── 2025-11-01-tokyo-trip.md
│   │       ├── 2025-10-15-kyoto-autumn.md
│   │       └── 2025-09-20-osaka-food-tour.md
│   ├── components/             # Astroコンポーネント
│   ├── layouts/
│   │   └── Layout.astro        # 基本レイアウト
│   └── pages/
│       ├── index.astro         # 一覧ページ（タグ絞り込み・検索機能付き）
│       └── logs/
│           └── [slug].astro    # 個別記事ページ
├── astro.config.mjs            # Astro設定
├── package.json
└── README.md
```

## 🔍 検索機能

Pagefindによる全文検索機能が組み込まれています。
- トップページの検索ボックスから本文・メタデータを検索可能
- 日本語に対応

## 🏷️ タグ機能

- 記事にタグを付けて分類可能
- トップページでタグによる絞り込み表示
- 個別記事からタグをクリックして関連記事を表示

## 🚀 デプロイ

GitHub Pagesへの自動デプロイが設定されています。

### 初回設定

1. GitHubリポジトリの Settings → Pages を開く
2. Source を「GitHub Actions」に設定

### デプロイ方法

`master` ブランチにプッシュすると自動的にビルド・デプロイされます。

```bash
git add .
git commit -m "新しい記事を追加"
git push origin master
```

デプロイ後、`https://akatukisora.github.io/my-odekake-logs/` でサイトが公開されます。

## 🧞 コマンド一覧

| コマンド | 動作 |
|---------|------|
| `pnpm install` | 依存関係をインストール |
| `pnpm dev` | 開発サーバーを起動 (`localhost:4321`) |
| `pnpm build` | 本番用サイトを `./dist/` にビルド |
| `pnpm preview` | ビルドしたサイトをローカルでプレビュー |

## 📄 ライセンス

このプロジェクトは個人用です。

---

**Happy Traveling! 🌍✈️**
