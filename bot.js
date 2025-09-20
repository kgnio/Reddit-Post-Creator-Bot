// bot.js
import { getRedditAccessToken } from "./auth.js";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

async function main() {
  try {
    const token = await getRedditAccessToken();

    const me = await axios.get("https://oauth.reddit.com/api/v1/me", {
      headers: {
        Authorization: `bearer ${token}`,
        "User-Agent": process.env.USER_AGENT,
      },
    });

    console.log(`✅ Başarıyla giriş yapıldı: ${me.data.name}`);
  } catch (err) {
    console.error("❌ Bir hata oluştu:", err.message);
  }
}

main();
