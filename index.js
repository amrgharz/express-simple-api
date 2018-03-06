const express = require ('express')
const app = express ()
app.get('/' , (req , res) => res.send('batata batata'))
app.listen(3000 , ()=>console.log('example 3000 :)'))