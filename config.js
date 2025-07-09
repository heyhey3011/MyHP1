// YouTube API設定
// セキュリティ向上のため、APIキーは別ファイルで管理
// config.local.js ファイルで window.YOUTUBE_API_KEY を設定してください

const CONFIG = {
    // YouTube Data API v3 設定
    YOUTUBE: {
        API_KEY: window.YOUTUBE_API_KEY || 'DEMO_MODE', // 環境変数から設定される
        CHANNEL_ID: 'UCerBISByAKR3KU9CD9Tz5ZQ',
        
        // ピックアップ動画リスト（recommended-videos.html用）
        PICKUP_LIST_1_IDS: [
            'IwBnAvPYRh0', 'DQA-R_DkEhU', '1xL8CaRDU_Q', 'asWq0vICQ-Q' // 初心者向け動画IDを4つ
        ],
        PICKUP_LIST_2_IDS: [
            'YIuOy8K5GzY', 'dCA1KRYJKHU', 'ZDSFoBrDqUU', 'BG5kIRN7rns' // 中級者向け動画IDを4つ
        ],
        
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