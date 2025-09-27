// server.js
import express from "express";
import AWS from "aws-sdk";

const app = express();
const s3 = new AWS.S3({ region: "ap-northeast-1" });

app.get("/signed-url", async (req, res) => {
  const params = {
    Bucket: "your-bucket-name",
    Key: "images/original.png",
    Expires: 300, // 5 分鐘有效
  };
  const url = s3.getSignedUrl("getObject", params);
  res.json({ url });
});

app.use(express.static("public")); // 讓 public 內的 index.html 能直接存取

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
