import express from 'express';
import { middleware } from './middleware';

const port = process.env.PORT || 9000;
const app = express();

middleware(app);

app.listen(port, () : void => {
  console.log(`Stellar test app listening on port ${port}!`)
});
