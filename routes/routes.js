var express=require('express')
var router =express.Router()

router.get('/',function(req,res,next){
    res.json({'message':'good morning!'})
})

router.get('/penguin',function (reg,res,next) {
    res.json({'message':'squark!'})

})

module.exports=router
