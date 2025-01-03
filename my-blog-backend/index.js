const express = require('express');
const app = express();
app.use(express.json());

app.get('/', async (req, res) => {
  res.status(200).send('Success');
});

// Start the server
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
