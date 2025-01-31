import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());

app.get("/", (req, res) => {
  const data = {
    email: "opeyemiibrahim667gmail.com",
    current_datetime: new Date(),
    github_url: "https://github.com/dorcax/HngFirstTask",
  };
  res.status(200).json(data);
});

app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
