import express from 'express';

const app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/health', (req, res) => {
  res.send('the server is workign fine ');
});

const PORT = process.env.PORT || 7000;
const HOST = '0.0.0.0';

const server = app.listen(PORT,HOST,()=>{
console.log('Server is running on http://127.0.0.1:7000');
})