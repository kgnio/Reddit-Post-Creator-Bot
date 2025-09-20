import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config();

const {
  CLIENT_ID,
  CLIENT_SECRET,
  USERNAME,
  PASSWORD,
  USER_AGENT,
} = process.env;

async function getToken() {
  const headers = {
    "User-Agent": USER_AGENT,
    "Content-Type": "application/x-www-form-urlencoded",
  };

  const auth = {
    username: CLIENT_ID,
    password: CLIENT_SECRET,
  };

  const data = new URLSearchParams({
    grant_type: "password",
    username: USERNAME,
    password: PASSWORD,
  });

  try {
    const response = await axios.post(
      "https://www.reddit.com/api/v1/access_token",
      data,
      {
        headers,
        auth,
      }
    );
    console.log("✅ Access token alındı:", response.data);
  } catch (err) {
    console.error("❌ Token alma hatası:", err.response?.data || err.message);
  }
}

getToken();
