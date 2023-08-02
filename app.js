const express = require('express');
const app = express();
const itemRoutes = require('./Routes/item')
const bodyParser = require('body-parser')

const port = process.env.port || 3000


app.use(bodyParser.json());

// app.get('/',(req, res)=>{
//    res.send('Hello Akshaya from node')
// });

app.use('/item', itemRoutes);
app.use('/',itemRoutes)


app.listen(port,()=>{
    console.log(`server listening to port ${port}`);
})