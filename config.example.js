// YouTube API設定テンプレート
// このファイルをconfig.jsにコピーして、実際のAPIキーを設定してください

const CONFIG = {
    // YouTube Data API v3 設定
    YOUTUBE: {
        API_KEY: 'YOUR_YOUTUBE_API_KEY_HERE', // 実際のAPIキーに置き換えてください
        CHANNEL_ID: 'UCerBISByAKR3KU9CD9Tz5ZQ',
        
        // API制限設定（Google Cloud Consoleで設定）
        // - HTTPリファラー制限: https://your-domain.com/*
        // - API制限: YouTube Data API v3のみ
        // - 使用量制限: 10,000リクエスト/日
    },
    
    // セキュリティ設定
    SECURITY: {
        // 本番環境でのみAPIキーを使用
        USE_API_IN_PRODUCTION: true,
        
        // 開発環境でのフォールバック値
        FALLBACK_SUBSCRIBER_COUNT: 1000,
        
        // APIエラー時の再試行設定
        RETRY_ATTEMPTS: 3,
        RETRY_DELAY: 2000 // 2秒
    }
};

// 設定を読み取り専用にする
Object.freeze(CONFIG);
Object.freeze(CONFIG.YOUTUBE);
Object.freeze(CONFIG.SECURITY);