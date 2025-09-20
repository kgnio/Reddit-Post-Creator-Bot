# Reddit Post Creator Bot

![License](https://img.shields.io/github/license/kgnio/reddit-post-creator-bot)
![Stars](https://img.shields.io/github/stars/kgnio/reddit-post-creator-bot)
![Issues](https://img.shields.io/github/issues/kgnio/reddit-post-creator-bot)
![Last Commit](https://img.shields.io/github/last-commit/kgnio/reddit-post-creator-bot)

A Reddit automation bot that creates and publishes posts automatically.  
Perfect for developers, marketers, or anyone who wants to streamline Reddit posting with templates and scheduling.

---

## 🚀 Features

- 🔑 **OAuth2 Reddit API Authentication**  
- 📝 **Dynamic Post Templates** (title + body with variables)  
- ⏰ **Scheduled Posting** (cron-like jobs)  
- 🌐 **Multi-Subreddit Support**  
- 💾 **JSON/YAML Config Based Setup**  
- 🪝 **Extendable Hooks** for custom logic  

---

## 📦 Installation

```bash
# Clone repo
git clone https://github.com/kgnio/reddit-post-creator-bot.git
cd reddit-post-creator-bot

# Install dependencies
npm install
```

---

## ⚙️ Configuration

1. Create an app at [Reddit Apps](https://www.reddit.com/prefs/apps).
2. Add your credentials to `.env`:

```env
REDDIT_CLIENT_ID=your_id
REDDIT_CLIENT_SECRET=your_secret
REDDIT_USERNAME=your_username
REDDIT_PASSWORD=your_password
USER_AGENT=reddit-post-creator-bot
```

3. Configure your posts in `config.json`:

```json
{
  "subreddit": "test",
  "title": "Hello Reddit! 🚀",
  "body": "This is an automated post created by my bot.",
  "schedule": "0 */6 * * *" 
}
```

---

## ▶️ Usage

```bash
npm start
```

- Bot will run and post according to your `config.json`.  
- Use cron expressions for scheduling.  

---

## 🛠️ Development

Run in dev mode with hot reload:

```bash
npm run dev
```

Lint & format:

```bash
npm run lint
npm run format
```

---

## 📜 License

This project is licensed under the **MIT License** – feel free to use and modify.

---

## ⭐ Contribute

Pull requests are welcome!  
If you find this project helpful, give it a ⭐ on GitHub to support development.
