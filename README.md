# 🤖 GPT-4o-mini チャットアプリ

Next.js 15とOpenAI APIを使用したモダンなAIチャットアプリケーションです。

## ✨ 特徴

- 🚀 Next.js 15 (App Router)
- 🎨 Tailwind CSS によるモダンなUI
- 🤖 OpenAI GPT-4o-mini API統合
- 💬 リアルタイムチャット機能
- 📱 レスポンシブデザイン
- ⚡ TypeScript完全対応

## ⚠️ 重要な注意事項

### 🔒 セキュリティ
- **APIキーの管理**: OpenAI APIキーは絶対に公開しないでください
- **環境変数**: `.env.local`ファイルは`.gitignore`に含まれており、Gitにコミットされません
- **本番環境**: デプロイ時は環境変数を適切に設定してください

### 💰 コスト管理
- **API料金**: OpenAI APIは従量課金制です
- **使用量監視**: [OpenAI Usage](https://platform.openai.com/usage)で使用量を定期的に確認してください
- **制限設定**: APIキーに使用制限を設定することを強く推奨します
- **テスト時**: 大量のリクエストを送信しないよう注意してください

## 🛠️ セットアップ手順

### 1. プロジェクトのクローン

```bash
git clone [your-repo-url]
cd gpt5-mini-chat-app
```

### 2. 依存関係のインストール

```bash
npm install
```

### 3. 環境変数の設定

`env.example`をコピーして`.env.local`を作成し、OpenAI APIキーを設定してください：

```bash
cp env.example .env.local
```

`.env.local`ファイルを編集：

```env
OPENAI_API_KEY=your_openai_api_key_here
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. OpenAI APIキーの取得

1. [OpenAI Platform](https://platform.openai.com/)にアクセス
2. アカウントを作成またはログイン
3. API Keysセクションで新しいキーを生成
4. 生成されたキーを`.env.local`に設定

### 5. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) にアクセスしてください。

## 📁 プロジェクト構成

```
gpt5-mini-chat-app/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── chat/
│   │   │       └── route.ts        # ChatGPT API エンドポイント
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx                # メインページ
│   └── components/
│       └── ChatApp.tsx             # チャットコンポーネント
├── env.example                     # 環境変数テンプレート
└── README.md
```

## 🚀 機能

### 基本機能
- ✅ AIとのリアルタイムチャット
- ✅ メッセージ履歴表示
- ✅ ローディング状態表示
- ✅ エラーハンドリング
- ✅ レスポンシブデザイン

### 今後の拡張予定
- [ ] チャット履歴の永続化
- [ ] ストリーミングレスポンス
- [ ] 複数の会話セッション
- [ ] ダークモード対応
- [ ] メッセージのエクスポート機能

## 🔧 技術スタック

- **フレームワーク**: Next.js 15
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **AI API**: OpenAI GPT-4o-mini
- **デプロイ**: Vercel (推奨)

## 📝 使用方法

1. アプリケーションにアクセス
2. テキストボックスにメッセージを入力
3. 送信ボタンをクリックまたはEnterキーを押す
4. AIからの返答を待つ
5. 会話を続ける

## 🌐 デプロイ

### Vercelへのデプロイ

1. [Vercel](https://vercel.com/)にアカウント作成
2. GitHubリポジトリを接続
3. 環境変数を設定：
   - `OPENAI_API_KEY`: OpenAI APIキー
4. デプロイ実行

### その他のプラットフォーム

- Netlify
- Railway
- AWS Amplify
- Google Cloud Platform

## 🤝 コントリビューション

プルリクエストや課題報告を歓迎します！

## 📄 ライセンス

MIT License

## 🙏 謝辞

- [Next.js](https://nextjs.org/) チーム
- [OpenAI](https://openai.com/) チーム
- [Tailwind CSS](https://tailwindcss.com/) チーム
