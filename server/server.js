import express from 'express';
import cors from 'cors';
const app = express();
const port = 5000; // Or any port you prefer

app.use(cors());

app.get('/', (req, res) => {
  res.json("Welcome! back end to video gamet treasure box is connected");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});