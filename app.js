const ewelink = require('ewelink-api');


var cors = require('cors')
const express = require('express')
const app = express()
const port = 80
app.use(cors())
app.get("/",(req,res)=>{
  res.send("hello")
})
app.get('/wifi',async (req, res) => {
  try {
 

      const connection = new ewelink({
        email: 'lovleshsingh99@gmail.com',
        password: 'lovleshsingh99',
        region: 'as',
      });

      /* get all devices */
      const devices = await connection.getDevices();
      console.log(devices);

      /* get specific devide info */
      //   const device = await connection.getDevice('<your device id>');
      //   console.log(device);

      /* toggle device */
      const status = await connection.setDevicePowerState('10010e1155', 'toggle');
      /* await connection.toggleDevice('10010e1155'); */
    
    res.json({ status: true })
  } catch (error) {
    res.json({ status: false })
  }

})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})