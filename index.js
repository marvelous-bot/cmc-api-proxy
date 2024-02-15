const express = require('express');
require('dotenv').config();

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');       /** use "*" for all or replace "*" with the client domain*/
  next();
});

app.get('/', async (req, res) => {

   let response = await fetch(process.env.API_URL,  {
        headers: {

            "Content-Type": "application/json",
            "X-CMC_PRO_API_KEY": process.env.API_KEY,
        },
    });
   res.json(response.data.data);

});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`cmc secure api exposed on ${PORT}`));
