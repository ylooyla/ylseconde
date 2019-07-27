let express = require('express')
let router = express.Router()
let User = require("../models/user.js")
let Good = require("../models/goods")

// let book = []
// async function callback(){
//     let res =await Good.find({category:"奢侈品"}).limit(3)
//     book.push(res)
// }
// callback()
// console.log(book)

router.get('/',async function(req,res){
   
    let phone = await Good.find({category: "手机"}).limit(3)
    let shezhi = await Good.find({category: "奢侈品"}).limit(3)
    let computer = await Good.find({category: "电脑"}).limit(3)
    let life = await Good.find({category: "生活电器"}).limit(3)
    let music =await Good.find({category: "乐器"}).limit(3)
    let camere = await Good.find({category: "数码影音"}).limit(3)
    res.render('index.html',{
      user:req.session.user,
      phone:phone,
      music:music,
      computer:computer,
      camere:camere,
      life:life,
      shezhi:shezhi
    })
})


router.get("/register",function(req,res){
    res.render("./register.html")
})

router.post("/register",function(req,res){
    let body =req.body
    User.findOne({
        $or:[
            {email:body.email},
            {nickname:body.nickname}
        ]
    },function(err,data){
        if(err){
            console.log(err)
        }
        if(data){
            return res.status(200).json({
                err_code:1,
                message:'Email or nickname already exist'
            })
            return res.send("邮箱或者密码已存在")
        }
        new User(body).save(function(err,user){
            if(err){
                console.log(err)
            }
            console.log(user)
            req.session.user=user
            res.status(200).json({
                err_code:0,
                message:'ok'
            })
        })
    })
})

router.get("/login",function(req,res){
    res.render('./login.html')
})
router.post("/login",function(req,res){
   let body =req.body
//    console.log(body)
   User.findOne({nickname:body.nickname,
password:body.password},function(err,user){
    if(err){
        console.log(err)
    }
    if(!user){
        return res.status(200).json({
            err_code:1,
            message:'email or password is not exist'
        })
    }
    req.session.user=user
    res.status(200).json({
        err_code:0,
        message:'ok'
    })
}) 
})

router.get('/loginout',function(req,res){
    req.session.user=null
    res.redirect('/')
})

router.get("/release",function(req,res){
    if(req.session.user){
        res.render('./release.html',{
        user:req.session.user
        })
    }
    else{
        res.render('./login.html')
    }
})

router.get("/detail",function(req,res){
    let id = req.query.id.replace(/\"/g,"") 
   Good.find({_id:id},function(err,data){
       if(err){
           console.log(err)
       }
       res.render('./detail.html',{
           user:req.session.user,
           data:data[0]
       })
   })
})


router.get('/person',function(req,res){
     let user = req.session.user
    // console.log(id)
    User.findOne(user,function(err,data){
        if(err){
            console.log(err)
        }
        res.render('./person.html',{
            user:data
        })
    })
})


router.post('/person',function(req,res){
    // console.log(req.body._id)

    let id = req.session.user._id.replace(/\"/g,' ')
    User.findByIdAndUpdate(id,req.body,function(err,data){
        if(err){
            console.log(err)
        }
        console.log('更新成功')
        res.redirect('/')
    })

})

router.get('/more',function(req,res){
  let he = req.param('data')
  if(!he){
      he="手机"
  }
   Good.find({name:eval("/"+he+"/i")},function(err,data){
       if(err){
           console.log(err)
       }
    res.render('./more.html',{
        goods:data,
        user:req.session.user
    })
   }).limit(16)
    
})


function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate;
    return currentdate.toString();
}
var datatime = 'public/images/'+getNowFormatDate();
//将图片放到服务器
var multer = require('multer')
var storage = multer.diskStorage({
    // 如果你提供的 destination 是一个函数，你需要负责创建文件夹
    destination: datatime,
    //给上传文件重命名，获取添加后缀名
    filename: function (req, file, cb) {
        cb(null,  file.originalname);
     }
}); 
var upload = multer({
    storage: storage
});
router.get("/test",function(req,res){
    res.render('./test.html')
})
router.post('/release',upload.single('picUrl'),function(req,res,next){
    console.log(req.body)//console.log(req.query.picTitle);//get
    console.log(req.file)//req.file文件的具体信息
    // res.render({date:datatime})
})

module.exports = router