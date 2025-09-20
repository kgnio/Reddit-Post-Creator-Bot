// auth.js
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export async function getRedditAccessToken() {
  const auth = Buffer.from(
    `${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`
  ).toString("base64");

  try {
    const response = await axios.post(
      "https://www.reddit.com/api/v1/access_token",
      new URLSearchParams({
        grant_type: "password",
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
      }),
      {
        headers: {
          Authorization: `Basic ${auth}`,
          "User-Agent": process.env.USER_AGENT,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    return response.data.access_token;
  } catch (err) {
    console.error("🚨 Token alınamadı:", err.response?.data || err.message);
    throw err;
  }
}
