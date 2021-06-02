import express from 'express';

const app = express();

app.get('/', (req, res) => {
  return res.json({ ok: 'opa' });
});

app.listen(3333, () => console.log('Backend Stated! 🔥'));
