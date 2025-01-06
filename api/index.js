import express from 'express';
import { postsRouter } from './posts.js';

const app = express();


app.use(express.json());

app.use('/api', postsRouter)

app.get('/', async (req, res) => {
  res.status(200).send(`Success`);
});

// Start the server
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
