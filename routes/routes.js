const express = require('express')
const path = require('path')

const router = express.Router()

router.post('/check', (req, res)=>{
    console.log(req.body.url);
    const spawner = require('child_process').spawn;

    //Data to pass
   var data_to_pass = req.body.url;
    const python_process = spawner('python',['./script.py',data_to_pass]);

    python_process.stdout.on('data',(data)=>{
        mystr = data.toString();
        console.log(mystr[60]);
        return res.json(mystr[60]);
    });
    return 1;
})
router.get('/', (req, res)=>{
    return res.render("index");
})


module.exports = router