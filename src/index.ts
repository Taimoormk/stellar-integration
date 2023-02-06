import express from 'express';

const port = process.env.PORT || 9000;
const app = express();

app.listen(port, () : void => {
  console.log(`Stellar test app listening on port ${port}!`)
});
