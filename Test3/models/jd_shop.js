let mongooes = require('mongoose')
var url='mongodb://localhost:27017/shopping';
mongooes.connect(url,function(err,db){
    if(err){
        console.log(err)
        return
    }
    console.log('连接成功')


/*
 Navicat Premium Data Transfer

 Source Server         : local_mongodb
 Source Server Type    : MongoDB
 Source Server Version : 40006
 Source Host           : localhost:27017
 Source Schema         : hello

 Target Server Type    : MongoDB
 Target Server Version : 40006
 File Encoding         : 65001

 Date: 06/06/2019 14:13:06
*/


// ----------------------------
// Collection structure for jd_shop
// ----------------------------
db.getCollection("jd_shop").drop();
db.createCollection("jd_shop");

// ----------------------------
// Documents of jd_shop
// ----------------------------
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf228a80e290c1b88f3eb33"),
    category: "手机",
    name: "荣耀10青春版 幻彩渐变 2400万AI自拍 全网通版4GB+64GB 渐变蓝 移动联通电信4G全面屏手机 双卡双待",
    detail: "领券立减100，成交价1199！6月1日至6月18日全程价保！2400万AI高清自拍，麒麟710处理器，炫光渐变色！荣耀爆品特惠，选品质，购荣耀~",
    price: "￥1299.00",
    "p_url": "https://img14.360buyimg.com/n1/s450x450_jfs/t1/22718/1/12601/168068/5caedd41E05e879b0/865565d919219154.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf228b40e290c1b88f3eb34"),
    category: "手机",
    name: "荣耀畅玩8C两天一充 莱茵护眼 刘海屏 全网通版4GB+32GB 幻夜黑 移动联通电信4G全面屏手机 双卡双待",
    detail: "下单立减50，成交价849！6月1日至6月18日全程价保！高通6系列芯片+4000mAh大电池+指纹识别+4GB大内存！荣耀爆品特惠，选品质，购荣耀~",
    price: "￥899.00",
    "p_url": "https://img12.360buyimg.com/n1/s450x450_jfs/t25696/183/1719981196/90401/bcf6106c/5bbac3c5N8b0bd22b.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf228bd0e290c1b88f3eb35"),
    category: "手机",
    name: "荣耀8X 千元屏霸 91%屏占比 2000万AI双摄 4GB+64GB 幻夜黑 移动联通电信4G全面屏手机 双卡双待",
    detail: "限时优惠1199！6月1日至6月18日全程价保！麒麟710处理器，2000万AI双摄，人脸+指纹双识别！荣耀爆品特惠，选品质，购荣耀~",
    price: "￥1199.00",
    "p_url": "https://img14.360buyimg.com/n1/s450x450_jfs/t1/21333/14/5246/180334/5c3ad7b6Ef7d727c0/c16e93d0bf77a31f.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf228c60e290c1b88f3eb36"),
    category: "手机",
    name: "荣耀V20 胡歌同款 麒麟980芯片 魅眼全视屏 4800万深感相机 8GB+128GB 魅海蓝 移动联通电信4G全面屏手机",
    detail: "限时优惠2899！6月1日至6月18日全程价保！麒麟980芯片，魅眼全视屏，4800万AI超清摄影！荣耀爆品特惠，选品质，购荣耀~",
    price: "￥2899.00",
    "p_url": "https://img12.360buyimg.com/n1/s450x450_jfs/t1/11845/20/13510/383055/5c99f198E39e676da/15b2b70fb3562f50.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf228d00e290c1b88f3eb37"),
    category: "手机",
    name: "Apple iPhone XR (A2108) 128GB 黑色 移动联通电信4G手机 双卡双待",
    detail: "【618盛典开启，抢券立减200元，限量秒杀低至5199元】iPhoneXR支持双卡！优惠券、秒杀，你所需的尽在Apple产品主会场！",
    price: "￥5399.00",
    "p_url": "https://img10.360buyimg.com/n1/s450x450_jfs/t1/48366/33/1180/198155/5cee2e36Ec416b689/408d40be944ec8f2.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf228d70e290c1b88f3eb38"),
    category: "手机",
    name: "vivo iQOO 44W超快闪充 8GB+128GB电光蓝 全面屏拍照手机 骁龙855电竞游戏 全网通4G手机",
    detail: "【618全程价保+直降300元+抢券再减300元+白条6期免息】高通骁龙855，4000mAh大电池，44W超快闪充！点击抢vivo开门红大额券！",
    price: "￥2998.00",
    "p_url": "https://img12.360buyimg.com/n1/s450x450_jfs/t1/31199/14/3993/287777/5c791bb5Ebaa929af/044c52520956ebfb.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf228df0e290c1b88f3eb39"),
    category: "手机",
    name: "小米8SE 全面屏智能游戏拍照手机 6GB+64GB 灰色 骁龙710处理器 全网通4G 双卡双待",
    detail: "【品质特惠】限时优惠150，成交价1249！6.1-18日全程价保！骁龙710处理器，前置2000万柔光自拍，3120mAh长续航！小米618狂欢来袭",
    price: "￥1249.00",
    "p_url": "https://img11.360buyimg.com/n1/s450x450_jfs/t22330/332/515182850/188708/3dbe80f8/5b0fbaabN3229c7a3.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf228e70e290c1b88f3eb3a"),
    category: "手机",
    name: "华为 HUAWEI P30 超感光徕卡三摄麒麟980AI智能芯片全面屏屏内指纹版手机8GB+64GB亮黑色全网通双4G手机双",
    detail: "【开门红劲爆优惠直击底线！享6期免息+大额购物卡，现在购机价保至6月18日，放心购买！】mate20优惠200+6期免息，到手价3299起",
    price: "￥3988.00",
    "p_url": "https://img14.360buyimg.com/n1/jfs/t1/28692/26/12501/332089/5c98cc90E6c89e802/9c3ceb43a54dcb93.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf228f30e290c1b88f3eb3b"),
    category: "手机",
    name: "小米 红米Redmi Note7Pro AI双摄 6GB+128GB 梦幻蓝 全网通4G 双卡双待 水滴屏拍照游戏手机",
    detail: "【品质特惠】1号开门优惠100，到手价1499！P2i整机防泼溅处理，标配18W充电器！红米NOTE7限时优惠，速抢",
    price: "￥1599.00",
    "p_url": "https://img10.360buyimg.com/n1/s450x450_jfs/t1/22746/35/11162/104085/5c8b6a19Eb8e8f34e/9cd57e3a481c7160.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf228fa0e290c1b88f3eb3c"),
    category: "手机",
    name: "Apple iPhone XS Max (A2104) 256GB 金色 移动联通电信4G手机 双卡双待",
    detail: "【618盛典开启，抢券立减400元，限时低至8399元】iPhoneXsMax大屏旗舰，支持双卡。优惠券、秒杀，你所需的尽在Apple产品主会场！",
    price: "￥8599.00",
    "p_url": "https://img12.360buyimg.com/n1/s450x450_jfs/t1/54058/19/1152/340367/5cee275bE31a7c0a5/752d0c106d47814f.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf229000e290c1b88f3eb3d"),
    category: "手机",
    name: "华为 HUAWEI 畅享 9S 6GB+64GB 幻夜黑 全网通 2400万超广角三摄珍珠屏大存储 移动联通电信4G手机 双卡双待",
    detail: "【开门红劲爆价直击底线，优惠140，到手价1459！】2400万超广角AI三摄,AI智慧防抖,GPUTurbo2.0全场优惠高至500",
    price: "￥1449.00",
    "p_url": "https://img12.360buyimg.com/n1/s450x450_jfs/t1/24205/2/14862/179077/5cb6d175E92733807/46e7ace99f41dd41.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf229090e290c1b88f3eb3e"),
    category: "手机",
    name: "荣耀20i 3200万AI自拍 超广角三摄 全网通版6GB+64GB 幻夜黑 移动联通电信4G全面屏手机 双卡双待",
    detail: "限时赠移动电源！6月1日至6月18日全程价保！前置3200万AI相机，后置2400万AI三摄，3D炫光渐变机身！荣耀爆品特惠，选品质，购荣耀~",
    price: "￥1599.00",
    "p_url": "https://img12.360buyimg.com/n1/s450x450_jfs/t11467/256/2884845812/267100/493ed21c/5cdd1018N977740e5.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf229100e290c1b88f3eb3f"),
    category: "手机",
    name: "vivo Z3 6GB+64GB 极光蓝 性能实力派 全面屏游戏手机 移动联通电信全网通4G手机",
    detail: "【618全程价保+直降300+抢券再减150，到手1098元！】骁龙710AIE处理器，4D游戏震撼体验！点击抢vivo开门红大额券！",
    price: "￥1248.00",
    "p_url": "https://img14.360buyimg.com/n1/s450x450_jfs/t27616/251/1425719819/224805/20c2401e/5bc831fdN61f8d9d2.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf229170e290c1b88f3eb40"),
    category: "手机",
    name: "Apple iPhone 7 (A1660) 128G 黑色 移动联通电信4G手机",
    detail: "【6月1日狂欢启幕】iPhone7系列特惠，128GB大内存，经典金属机身，指纹识别！优惠券、秒杀，你所需的尽在Apple产品主会场！",
    price: "￥2799.00",
    "p_url": "https://img12.360buyimg.com/n1/s450x450_jfs/t1/24238/8/12493/163807/5c9996dfE466d616a/ab22cb8d8464e096.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf2291f0e290c1b88f3eb41"),
    category: "手机",
    name: "一加手机6T 8GB+128GB 亮瓷黑 超强城市夜景 光感屏幕指纹 全面屏双摄游戏手机 全网通4G 双卡双待",
    detail: "购机优惠1000元！一加6T轻快流畅，光感屏幕指纹，一键快捷支付，手持城市夜景！一加新品猛戳查看！",
    price: "￥2499.00",
    "p_url": "https://img12.360buyimg.com/n1/s450x450_jfs/t27334/281/1963498891/181861/487dc16e/5bf287b2N5a644a63.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf229250e290c1b88f3eb42"),
    category: "手机",
    name: "华为 HUAWEI P30 Pro 超感光徕卡四摄10倍混合变焦麒麟980芯片屏内指纹 8GB+256GB极光色全网通版双4G手机",
    detail: "【开门红劲爆优惠直击底线！享6期免息+大额购物卡，现在购机价保至6月18日，放心购买！】6.47英寸OLED曲面屏！P30稀缺颜色",
    price: "￥5988.00",
    "p_url": "https://img13.360buyimg.com/n1/s450x450_jfs/t1/11352/31/13456/324178/5c98c88dE9419c2ca/4be2efca1d9e2b38.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf2292b0e290c1b88f3eb43"),
    category: "手机",
    name: "小米 红米6A AI美颜 3GB+32GB 流沙金 全网通4G手机 双卡双待",
    detail: "【品质特惠】1号开门红优惠50，到手价599！1300万高清相机！更有1-18日全程价保！小米618蓄势待发！1号开门红，好物抢不停！",
    price: "￥649.00",
    "p_url": "https://img13.360buyimg.com/n1/s450x450_jfs/t22099/97/2250481418/237159/c4a1502d/5b4edfdcN5a7d6faf.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf229320e290c1b88f3eb44"),
    category: "手机",
    name: "小米 Redmi 7 AI双摄 3GB+32GB 亮黑色 全网通4G 双卡双待 水滴全面屏拍照游戏智能手机",
    detail: "【品质特惠】1号开门红购机送耳机，18个月长质保，1200万AI双摄，康宁第五代大猩猩玻璃盖板！小米618蓄势待发！1号开门红，好物抢不停！",
    price: "￥799.00",
    "p_url": "https://img12.360buyimg.com/n1/s450x450_jfs/t1/29397/16/14664/80814/5cb06a28E3de55670/fb7b968a62eb10ef.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf229390e290c1b88f3eb45"),
    category: "手机",
    name: "小米 红米Redmi Note7 幻彩渐变AI双摄 4GB+64GB 梦幻蓝 全网通4G 双卡双待 水滴全面屏拍照游戏智能手机",
    detail: "【品质特惠】1号开门红购机送耳机，4000mAh大电量，”满血版”骁龙660，品质小金刚，更有1-18日全程价保！小米618蓄势待发！1号开门红，好物抢不停！",
    price: "￥1199.00",
    "p_url": "https://img13.360buyimg.com/n1/s450x450_jfs/t1/9085/2/12381/146200/5c371c5bE08328383/4f4ba51aed682207.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf2293f0e290c1b88f3eb46"),
    category: "手机",
    name: "荣耀Note10 全网通6G+64G 幻夜黑 移动联通电信4G全面屏手机 双卡双待 游戏手机",
    detail: "领券立减100，成交价1899！6月1日至6月18日全程价保！6.95英寸全面屏！液冷双Turbo！荣耀爆品特惠，选品质，购荣耀~",
    price: "￥1999.00",
    "p_url": "https://img10.360buyimg.com/n1/s450x450_jfs/t20140/279/2633113298/113707/57d9da77/5b6018c5N6f80495e.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf229450e290c1b88f3eb47"),
    category: "手机",
    name: "vivo Z3x 4GB+64GB 极光色 全面屏双摄拍照手机 移动联通电信全网通4G手机",
    detail: "【618全程价保+直降200元+领券再减100，到手898元！加赠耳机】骁龙660AIE处理器！1600AI智慧美颜！点击抢vivo开门红大额券！",
    price: "￥998.00",
    "p_url": "https://img13.360buyimg.com/n1/s450x450_jfs/t1/42351/11/593/190176/5cc2d0b5Ede0e520e/22f6b0b07075f1b7.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf2294d0e290c1b88f3eb48"),
    category: "手机",
    name: "荣耀Play 全网通版 6GB+64GB 极光蓝 移动联通电信4G全面屏游戏手机 双卡双待",
    detail: "领券立减100，成交价1599！6月1日至6月18日全程价保！6.3英寸全面屏，1600万后置AI双摄！荣耀爆品特惠，选品质，购荣耀~",
    price: "￥1699.00",
    "p_url": "https://img10.360buyimg.com/n1/s450x450_jfs/t1/24990/27/11853/121739/5c920883E118897b0/bc57c7563eb82aa2.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf229550e290c1b88f3eb49"),
    category: "手机",
    name: "小米9 4800万超广角三摄 8GB+128GB全息幻彩蓝 骁龙855 全网通4G 双卡双待 水滴全面屏拍照游戏智能手机",
    detail: "【品质特惠】6.1-18日全程价保！全曲面玻璃机身，骁龙855旗舰，索尼4800万广角微距三摄，20W无线闪充，屏下指纹解锁！小米618狂欢来袭",
    price: "￥3299.00",
    "p_url": "https://img10.360buyimg.com/n1/s450x450_jfs/t1/16130/39/12690/305219/5caac12aEbb843fa5/ce6c1dee969fb626.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf2295e0e290c1b88f3eb4a"),
    category: "手机",
    name: "诺基亚 NOKIA X6 6GB+64GB 星空黑 全网通 双卡双待 移动联通电信4G手机",
    detail: "诺基亚X6爆款直降，券后到手价低至799！大电池高续航，高占比全面屏！6小时未支付自动删单,速来抢购！点击了解更多产品》》》",
    price: "￥899.00",
    "p_url": "https://img12.360buyimg.com/n1/s450x450_jfs/t19759/338/2338072914/190731/65ba22/5af0647bNca23c27c.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf229650e290c1b88f3eb4b"),
    category: "手机",
    name: "Apple iPhone X (A1865) 64GB 深空灰色 移动联通电信4G手机",
    detail: "【6月1日狂欢启幕】iPhoneX经典全面屏，面容识别，特惠低至5999元！优惠券、秒杀，你所需的尽在Apple产品主会场！",
    price: "￥5999.00",
    "p_url": "https://img13.360buyimg.com/n1/s450x450_jfs/t10675/253/1344769770/66891/92d54ca4/59df2e7fN86c99a27.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf2296b0e290c1b88f3eb4c"),
    category: "手机",
    name: "华为 HUAWEI 畅享9 Plus 4GB+128GB 极光紫 全网通 四摄超清全面屏大电池 移动联通电信4G手机 双卡双待",
    detail: "【开门红劲爆价直击底线，买华为上京东，优惠力度难以想象】6.5英寸超清全面屏畅享9s部分优惠140,6+64版本低至1459",
    price: "￥1489.00",
    "p_url": "https://img14.360buyimg.com/n1/s450x450_jfs/t24604/292/1778644850/208490/a3be6016/5bbc49b8Nb18dc2d5.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf229700e290c1b88f3eb4d"),
    category: "手机",
    name: "华为 HUAWEI P20 AI智慧徕卡双摄全面屏游戏手机 6GB+64GB 极光色 全网通移动联通电信4G手机 双卡双待",
    detail: "【开门红劲爆价直击底线，优惠700，到手价2688】徕卡双摄|智慧防抖|杜比全景声nova4直降高至300+6期免息，到手价2499起！",
    price: "￥2688.00",
    "p_url": "https://img14.360buyimg.com/n1/s450x450_jfs/t18052/318/2334327001/256076/23da5f45/5af13917Naca6cb3d.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf229780e290c1b88f3eb4e"),
    category: "手机",
    name: "Apple iPhone 8 (A1907) 64GB 深空灰色 移动联通4G手机",
    detail: "【6月1日0点狂欢，盛大开启！】此产品支持移动联通4G网络！更多精彩请点击！",
    price: "￥3399.00",
    "p_url": "https://img14.360buyimg.com/n1/s450x450_jfs/t7582/66/3048380492/71753/acde79b5/59b85824N836bb714.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf2297f0e290c1b88f3eb4f"),
    category: "手机",
    name: "OPPO R17 2500万美颜拍照 6.4英寸水滴屏 光感屏幕指纹 8GB+128GB 流光蓝 全网通 双卡双待手机",
    detail: "【6.18全程价保+3期免息+赠蓝牙音箱，低至2499元】2500万AI美颜，科技光感屏幕指纹解锁。新品K3优惠100元，全场优惠高达1000元，",
    price: "￥2499.00",
    "p_url": "https://img13.360buyimg.com/n1/s450x450_jfs/t23005/277/2002221580/215051/d226d2e0/5b6ff426N6634c7de.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf229850e290c1b88f3eb50"),
    category: "手机",
    name: "华为 HUAWEI nova 4e 3200万立体美颜AI超广角三摄珍珠屏6GB+128GB雀翎蓝全网通版双4G手机",
    detail: "【开门红劲爆价直击底线，优惠300+大额购物卡，到手价1999！现在购机价保至6月18日，放心购买！】3200万立体美颜nova3i优惠701，低至,1498",
    price: "￥1989.00",
    "p_url": "https://img10.360buyimg.com/n1/s450x450_jfs/t1/12096/3/9704/238787/5c8083d5E26311ba6/1a3ea555d8ca7e8b.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf2298b0e290c1b88f3eb51"),
    category: "手机",
    name: "Apple iPhone 8 Plus (A1864) 64GB 深空灰色 移动联通电信4G手机",
    detail: "【6月1日狂欢启幕】iPhone8Plus后置双摄，XR128GB限量5199元抢，XSMAX低至6999元！优惠券、秒杀，你所需的尽在Apple产品主会场！",
    price: "￥4699.00",
    "p_url": "https://img10.360buyimg.com/n1/s450x450_jfs/t8107/37/1359438185/72159/a6129e26/59b857f8N977f476c.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf229930e290c1b88f3eb52"),
    category: "手机",
    name: "魅族 16s 骁龙855全面屏拍照游戏手机 8GB+128GB 碳纤黑 全网通移动联通电信4G手机 双卡双待",
    detail: "魅族旗舰系列16S，高通骁龙855，对称式全面屏，新一代屏下指纹，速来抢购！追求不止，只因热爱，魅族16S等你来购！",
    price: "￥3498.00",
    "p_url": "https://img10.360buyimg.com/n1/s450x450_jfs/t1/30765/32/14668/277224/5cbee0bbE6f42bd4b/3036cb94143e16df.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf2299a0e290c1b88f3eb53"),
    category: "手机",
    name: "华为 HUAWEI Mate 20 麒麟980AI智能芯片全面屏超微距影像超大广角徕卡三摄6GB+128GB亮黑色全网通版双4G手机",
    detail: "【开门红劲爆价直击底线，享6期免息+领200券+大额购物卡，到手价3799】麒麟980AI智能芯片nova4e直降高至300，到手价1799起！",
    price: "￥3989.00",
    "p_url": "https://img11.360buyimg.com/n1/s450x450_jfs/t25954/134/1930444050/488286/31587d0d/5bbf1fc9N3ced3749.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf229a00e290c1b88f3eb54"),
    category: "手机",
    name: "努比亚 nubia 红魔3游戏手机 8GB+128GB 玄铁黑 骁龙855 内置风扇 5000mAh大电池 90Hz 全面屏拍照电竞手机",
    detail: "【领券立减300元/白条6期免息/赠原厂保护套（赠完即止）+半年碎屏险】骁龙855/内置离心风扇散热/5000mAh大电池/618狂欢，更多优惠！",
    price: "￥3499.00",
    "p_url": "https://img11.360buyimg.com/n1/s450x450_jfs/t1/35979/14/4669/361147/5cc551aeE17a036eb/6612ea19b14e7dc4.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf229a60e290c1b88f3eb55"),
    category: "手机",
    name: "OPPO A9 全面屏拍照手机 6GB+128GB 萤石紫 全网通 移动联通电信4G 双卡双待手机",
    detail: "【6.18全程价保+3期免息+赠加湿器】精品A系列，4020mAh大电池，128G大存储，后置1600万AI双摄。新品K3优惠100元，全场优惠高达1000元，",
    price: "￥1699.00",
    "p_url": "https://img12.360buyimg.com/n1/s450x450_jfs/t1/39912/12/2405/177041/5cc03eaaE0a20a35e/36d40c1312f2f7b4.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf229ac0e290c1b88f3eb56"),
    category: "手机",
    name: "vivo U1 水滴全面屏 AI智慧拍照手机 3GB+32GB 极光色 移动联通电信全网通4G手机",
    detail: "【618全程价保+直降50+领券再减50，到手699元！】4030mAh大电池，6.2英寸全面水滴屏！点击抢vivo开门红大额券！",
    price: "￥749.00",
    "p_url": "https://img10.360buyimg.com/n1/s450x450_jfs/t1/24899/9/7247/75638/5c678ac7E1afd301b/cd650c965469dce8.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf229b20e290c1b88f3eb57"),
    category: "手机",
    name: "华为 HUAWEI Mate 20 Pro (UD)屏内指纹版麒麟980芯片全面屏超大广角徕卡三摄8GB+128GB亮黑色全网通双4G手机",
    detail: "【开门红劲爆价直击底线，享6期免息+领200券+大额购物卡，到手价5299】麒麟980AI智能芯片nova4e直降高至300，到手价1799起！",
    price: "￥5489.00",
    "p_url": "https://img14.360buyimg.com/n1/s450x450_jfs/t25288/359/1939640863/406912/ff77e158/5bbf17f0N428d505a.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf229ba0e290c1b88f3eb58"),
    category: "手机",
    name: "OPPO K1 光感屏幕指纹 水滴屏拍照手机 4GB+64GB 摩卡红 全网通 移动联通电信4GB 双卡双待手机",
    detail: "【6.18全程价保+直降200元+用券100元，低至1099元】屏幕指纹解锁手机，前置2500万，AI智慧美颜。新品K3优惠100元，全场优惠高达1000元，",
    price: "￥1199.00",
    "p_url": "https://img14.360buyimg.com/n1/s450x450_jfs/t28060/311/116648663/262308/9d2b10d4/5be84358Nbc650d88.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf229c10e290c1b88f3eb59"),
    category: "手机",
    name: "华为 HUAWEI 畅享9  4GB+64GB 幻夜黑 高清珍珠屏 AI长续航 全网通高配版 移动联通电信4G手机",
    detail: "【开门红劲爆优惠直击底线，购机智能运动手环】购机赠智能运动手环，6.26英寸全面屏，AI智慧双摄畅享9e新版本特惠上市，优惠50，到手价749",
    price: "￥1189.00",
    "p_url": "https://img10.360buyimg.com/n1/s450x450_jfs/t28822/194/897534616/151785/6edd523f/5c00df9bN52171b33.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf229c80e290c1b88f3eb5a"),
    category: "手机",
    name: "OPPO Reno 4800万超清像素 NFC 超清夜景 6GB+128GB 极夜黑 全网通 双卡双待手机 全面屏拍照游戏智能手机",
    detail: "【6.18全程价保+6期免息+蓝牙音箱+一年京东碎屏保】4800万超清像素，全景屏，NFC，全隐藏式摄像头，新品K3优惠100元，全场优惠高达1000元，",
    price: "￥2999.00",
    "p_url": "https://img12.360buyimg.com/n1/s450x450_jfs/t1/21306/17/15269/146579/5cae962aEe2e77767/53e98456d98dbbf7.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf229d20e290c1b88f3eb5b"),
    category: "手机",
    name: "vivo S1 冰湖蓝 6GB+64GB 2480万AI高清自拍 超广角后置三摄拍照手机 移动联通电信全网通4G手机",
    detail: "【618全程价保！直降200元，到手1798元！享6期免息+赠智能手环！】3940mAh大电池强续航，升降摄像头！点击抢vivo开门红大额券！",
    price: "￥1798.00",
    "p_url": "https://img12.360buyimg.com/n1/s450x450_jfs/t1/43581/23/23/617518/5cc01e78E81d37178/968d624a9381f5b2.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf229d90e290c1b88f3eb5c"),
    category: "手机",
    name: "华为 HUAWEI 畅享 9e 实力大音量高像素珍珠屏3GB+32GB宝石蓝全网通版双4G手机",
    detail: "【开门红劲爆价直击底线，优惠50，到手价749】畅享9e新版本发售，1元抵50，到手价低至750，6.09英寸高清珍珠屏畅享9s部分优惠140，到手价1459",
    price: "￥749.00",
    "p_url": "https://img14.360buyimg.com/n1/s450x450_jfs/t28054/268/1653374437/358746/b7595617/5ce64ceaN5d4ce767.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf229df0e290c1b88f3eb5d"),
    category: "手机",
    name: "华为 HUAWEI nova 3i 全面屏高清四摄游戏手机6GB+128GB 亮黑色 全网通移动联通电信4G手机双卡双待",
    detail: "【开门红劲爆价直击底线，优惠701，到手价1498！】AI智慧美颜，麒麟710芯片，游戏更酣畅。全场优惠高至500",
    price: "￥1488.00",
    "p_url": "https://img12.360buyimg.com/n1/s450x450_jfs/t1/1717/22/4137/189715/5b9b62e1E14bd7f03/c522c2da3c36757a.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf229e60e290c1b88f3eb5e"),
    category: "手机",
    name: "华为 HUAWEI P20 Pro 全面屏徕卡三摄游戏手机 6GB+128GB 亮黑色 全网通移动联通电信4G手机 双卡双待",
    detail: "【开门红劲爆价直击底线，优惠500，到手价3488】4000万徕卡三摄nova4直降高至300+6期免息，到手价2499起！",
    price: "￥3488.00",
    "p_url": "https://img13.360buyimg.com/n1/s450x450_jfs/t19510/195/1236218111/148413/135b5703/5ac1eba8N88880b03.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf229ec0e290c1b88f3eb5f"),
    category: "手机",
    name: "Apple iPhone 7 Plus (A1661) 128G 亮黑色 移动联通电信4G手机",
    detail: "【6月1日狂欢启幕】iPhone7系列经典特惠，XR128GB限量5199元抢，XSMAX低至6999元！优惠券、秒杀，你所需的尽在Apple产品主会场！",
    price: "￥3899.00",
    "p_url": "https://img14.360buyimg.com/n1/s450x450_jfs/t3235/346/1690788774/47000/1730b357/57d11bfbNbb355012.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf229f20e290c1b88f3eb60"),
    category: "手机",
    name: "小米8 全面屏游戏智能手机 6GB+128GB 白色 全网通4G 双卡双待",
    detail: "【品质特惠】到手价1999，6.1-18日全程价保！红外人脸解锁，AI变焦双摄，AI语音助手！小米618狂欢来袭",
    price: "￥1999.00",
    "p_url": "https://img12.360buyimg.com/n1/s450x450_jfs/t20116/25/943017306/279395/cf39bbbf/5b0fcc79N20814888.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf229f80e290c1b88f3eb61"),
    category: "手机",
    name: "vivo U1 水滴全面屏 AI智慧拍照手机 3GB+32GB 星夜黑 移动联通电信全网通4G手机",
    detail: "【618全程价保+直降50+领券再减50，到手699元！】4030mAh大电池，6.2英寸全面水滴屏！点击抢vivo开门红大额券！",
    price: "￥749.00",
    "p_url": "https://img12.360buyimg.com/n1/s450x450_jfs/t1/31176/12/2272/88985/5c678a83Ef2b1eaf6/f18380bacc937016.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf229fd0e290c1b88f3eb62"),
    category: "手机",
    name: "vivo X27 8GB+128GB大内存 雀羽蓝 零界全面屏AI三摄 移动联通电信全网通4G手机",
    detail: "【618全程价保+12期白条免息+赠乐心手环！】4800万广角夜景三摄，4000mAh大电池，升降摄像头！iQOO直降300元，速抢！",
    price: "￥3198.00",
    "p_url": "https://img12.360buyimg.com/n1/s450x450_jfs/t1/10721/2/16125/311461/5c9834f9E584c0d45/d2f85ae6d55977d2.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22a020e290c1b88f3eb63"),
    category: "手机",
    name: "vivo X27Pro 8GB+256GB大内存 黑珍珠 4800万AI三摄全面屏拍照手机 移动联通电信全网通4G手机",
    detail: "【618全程价保+12期白条免息+赠乐心手环！】4800万广角夜景三摄，4000mAh大电池，升降摄像头！iQOO直降300元，速抢！",
    price: "￥3998.00",
    "p_url": "https://img13.360buyimg.com/n1/s450x450_jfs/t1/11399/24/15514/162895/5caaa600E914adbf6/a7ccdc94f46460ed.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22a0b0e290c1b88f3eb64"),
    category: "手机",
    name: "OPPO R15x 光感屏幕指纹手机 6G+128G 冰萃银 全网通 移动联通电信4G 双卡双待手机",
    detail: "【6.18全程价保+直降300元+领券100元低至1599元+3期免息】时尚水滴屏，光感屏幕指纹，前置2500万。新品K3优惠100元，全场优惠高达1000元，",
    price: "￥1699.00",
    "p_url": "https://img14.360buyimg.com/n1/s450x450_jfs/t1/9739/12/1170/225050/5bcd3ab8E5f2f6bf4/ce78af44c283cccf.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22a110e290c1b88f3eb65"),
    category: "手机",
    name: "锤子（smartisan ) 坚果 Pro 2S 6G+64GB 炫光蓝 全面屏双摄 全网通4G手机 双卡双待 游戏手机",
    detail: "6月1日开门红，坚果Pro2S，爆款直降，双系统，无限屏，6小时未支付自动删单，速来抢购！点击了解更多产品》》》",
    price: "￥1298.00",
    "p_url": "https://img10.360buyimg.com/n1/s450x450_jfs/t23359/128/2369309375/207652/6973579a/5b7d05feN6f190d9a.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22a170e290c1b88f3eb66"),
    category: "手机",
    name: "荣耀Magic2魔法手机 麒麟980AI智能芯片 超广角AI三摄 6GB+128GB 渐变黑 移动联通电信4G手机 双卡双待",
    detail: "限时优惠2699！6月1日至6月18日全程价保！荣耀Magic2，麒麟980，6.39英寸全视屏！荣耀爆品特惠，选品质，购荣耀~",
    price: "￥2699.00",
    "p_url": "https://img14.360buyimg.com/n1/s450x450_jfs/t1/1156/8/14017/123589/5bd9a4e8E7dbd4a15/70fbbccdf8811111.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22a2f0e290c1b88f3eb67"),
    category: "奢侈品",
    name: "COACH 蔻驰 奢侈品 女士黑色PVC手拿包 38905GDBLK",
    detail: "",
    price: "￥570.00",
    "p_url": "https://img14.360buyimg.com/n1/jfs/t1/30592/18/2487/312254/5c6bcbabEda95a5bc/82ea2a57094f4d9c.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22a3b0e290c1b88f3eb68"),
    category: "奢侈品",
    name: "施华洛世奇SWAROVSKI新款水晶质感转运螺旋女项链双环水晶吊坠 饰品情人节礼物锁骨链 双环玫瑰金5240525",
    detail: "618全球购物节，部分每满299减30，保价618，爆款直降全球购物节",
    price: "￥ 585.00",
    "p_url": "https:"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22a420e290c1b88f3eb69"),
    category: "奢侈品",
    name: "COACH 蔻驰 奢侈品 女士卡其色PVC手提肩背斜挎桶包 F48729 IME7V",
    detail: "",
    price: "￥2060.00",
    "p_url": "https://img11.360buyimg.com/n1/jfs/t1/15561/8/14982/194662/5cac748eE35107612/c5ea5c41fa71cadd.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22a470e290c1b88f3eb6a"),
    category: "奢侈品",
    name: "MARC JACOBS 马克·雅克布 女士SNAPSHOT系列瓷白色多色拼接小相机包 M0012007287",
    detail: "",
    price: "￥2490.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t26713/274/157866733/52214/b36856e4/5b87638eNab08dbd1.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22a500e290c1b88f3eb6b"),
    category: "奢侈品",
    name: "PRADA 普拉达 女士Galleria系列黑色牛皮杀手包手提单肩斜挎包 1BA863 NZV F0002 V OOO",
    detail: "618奢品年中大促，全场低至3折，叠加使用优惠券立享更低折扣，点击进入活动专场",
    price: "￥16994.00",
    "p_url": "https://img10.360buyimg.com/n1/jfs/t6763/336/1999154857/414022/3a3f2a71/5987d2ffN1f59e849.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22a560e290c1b88f3eb6c"),
    category: "奢侈品",
    name: "COACH 蔻驰 奢侈品 女士黑色皮质手提肩背斜挎包波士顿包 F32202 IMBLK",
    detail: "",
    price: "￥999.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t29155/124/1589524149/366271/f8fd18f6/5ce4e988Na10f78d8.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22a5b0e290c1b88f3eb6d"),
    category: "奢侈品",
    name: "COACH 蔻驰 奢侈品 女士卡其色PVC手提单肩托特包 F58292 IME74",
    detail: "",
    price: "￥999.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t12745/141/1627702593/160709/7420065/5a24ab52N528549b2.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22a620e290c1b88f3eb6e"),
    category: "奢侈品",
    name: "VERSACE JEANS 范思哲 奢侈品 19春夏新款 男士黑色棉质短袖POLO衫 B3GTB7P0 36571 Y6A 52码",
    detail: "此商品将于2019-06-04,00点结束闪购特卖，范思哲奢侈品专场",
    price: "￥599.00",
    "p_url": "https://img11.360buyimg.com/n1/jfs/t1/34272/12/8665/178916/5ccfaf58E44f7601e/5ef175af2bc18ab3.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22a680e290c1b88f3eb6f"),
    category: "奢侈品",
    name: "COACH 蔻驰 奢侈品 女士卡其粉色PVC手提肩背斜挎桶包 F32203 SVAVK",
    detail: "",
    price: "￥1700.00",
    "p_url": "https://img14.360buyimg.com/n1/jfs/t1/16718/8/11635/188544/5c91cc38E53fd1a3c/45d41f243f2f5bea.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22a730e290c1b88f3eb70"),
    category: "奢侈品",
    name: "海囤全球\n                                SWAROVSKI(施华洛世奇) SPARKLING DANCE ROUND 跳动的心项链 蓝色 5279425",
    detail: "海囤全球时尚，6月1日限时抢购，爆款直降，点击进入",
    price: "￥ 569.00",
    "p_url": "https:"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22a7a0e290c1b88f3eb71"),
    category: "奢侈品",
    name: "Givenchy 纪梵希 球形碎钻项链 60252574-9DH",
    detail: "国际奢品，大牌低至3折点击抢购~",
    price: "￥594.00",
    "p_url": "https://img11.360buyimg.com/n1/jfs/t1/31573/24/3873/109116/5c78ddd5E762f1c7f/8d189d3fef5bcb75.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22a810e290c1b88f3eb72"),
    category: "奢侈品",
    name: "FENDI 芬迪 女士Y THE WAY系列灰色牛皮手提单肩斜跨包波士顿包 8BL124 5QJ F15Z4",
    detail: "",
    price: "￥12490.00",
    "p_url": "https://img11.360buyimg.com/n1/jfs/t1/17562/8/15260/94782/5cae9ffbE3c4aa30e/87afea20a2505222.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22a870e290c1b88f3eb73"),
    category: "奢侈品",
    name: "COACH 蔻驰 奢侈品 女士深咖色PVC手提单肩包 F58292 IMAA8",
    detail: "",
    price: "￥1490.00",
    "p_url": "https://img10.360buyimg.com/n1/jfs/t11092/63/807257810/133496/b8242d0b/59f92fdcN5a4fe492.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22a8d0e290c1b88f3eb74"),
    category: "奢侈品",
    name: "COACH 蔻驰 奢侈品 女士卡其藕色PVC单肩手提包 F57842 IMDQC",
    detail: "",
    price: "￥1460.00",
    "p_url": "https://img10.360buyimg.com/n1/jfs/t10642/157/1266325660/148266/1422b99c/59ddd55bN81c49a17.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22a920e290c1b88f3eb75"),
    category: "奢侈品",
    name: "Kenzo 高田贤三虎头圆领棉质T恤 奢侈品男装Tiger T恤 黑色虎头 S",
    detail: "",
    price: "￥880.00",
    "p_url": "https://img14.360buyimg.com/n1/jfs/t1/47279/18/992/84057/5ceb686fE33323934/21e15241fa2bb1c5.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22a990e290c1b88f3eb76"),
    category: "奢侈品",
    name: "MCM 女士玫瑰金色侧钉人造革印logo超迷你双肩包 MMK 8AVE50 TC001",
    detail: "此商品将于2019-06-04,00点结束闪购特卖，MCM奢侈品专场",
    price: "￥5202.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t1/16344/2/15023/188373/5cac64f6E5f065f61/90dce06c033564e2.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22aa20e290c1b88f3eb77"),
    category: "奢侈品",
    name: "MICHAEL KORS 迈克·科尔斯 MK女包 MERCER系列黑色牛皮女士大号手提斜挎单肩包 30F6GM9T3L BLACK",
    detail: "此商品将于2019-06-03,10点结束闪购特卖，MK奢侈品专场",
    price: "￥2380.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t5914/192/6860373421/163205/7e20d60d/5976e336N2d49faed.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22aa80e290c1b88f3eb78"),
    category: "奢侈品",
    name: "PANDORA 潘多拉 璀璨星辰静谧夜空吊坠时尚蓝色雪花串珠925银手链 XZT0058-17",
    detail: "潘多拉年中大促，低至80元超长价保15天，点击抢购~",
    price: "￥1615.00",
    "p_url": "https://img11.360buyimg.com/n1/jfs/t1/46983/6/203/166195/5cd3a23fE625fec74/08c607f32e00b5e6.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22ab10e290c1b88f3eb79"),
    category: "奢侈品",
    name: "PINKO 2019春夏新品包袋 1P21DTY5EU Z99 U",
    detail: "PINKO闪购场热卖中，618年中大促火热来袭，心水好货，低至5折》(此商品不参加上述活动)",
    price: "￥1680.00",
    "p_url": "https://img11.360buyimg.com/n1/jfs/t1/20079/9/12438/62247/5c98af5aEa2f28108/597d4382055e6178.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22ab70e290c1b88f3eb7a"),
    category: "奢侈品",
    name: "BURBERRY 巴宝莉 女士绯红牛皮织物拼接格纹迷你斜背包 40799671",
    detail: "",
    price: "￥",
    "p_url": "https://img12.360buyimg.com/n1/jfs/t1/4622/4/14192/233433/5bdacd2bE19c29f40/e11229b56c260897.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22abe0e290c1b88f3eb7b"),
    category: "奢侈品",
    name: "COACH 蔻驰 奢侈品 女士黑色皮质小号双肩背包 F28995 IMBLK",
    detail: "",
    price: "￥1480.00",
    "p_url": "https://img14.360buyimg.com/n1/jfs/t27775/344/2103918260/387006/4f8dea60/5bf7cd26N27798ab1.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22ac40e290c1b88f3eb7c"),
    category: "奢侈品",
    name: "BURBERRY 巴宝莉 女士绯红牛皮聚氨酯拼接格纹单肩斜挎包 40800661",
    detail: "BURBERRY年中大促，部分商品6.1号超值秒杀，15天超长价保，好货不用等！",
    price: "￥6180.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t1/4492/22/14561/225618/5bdacd8bE3a3932e8/c3d6bf8767c2e8ce.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22acb0e290c1b88f3eb7d"),
    category: "奢侈品",
    name: "COACH 蔻驰 奢侈品 女士卡其白色PVC配皮手提单肩斜挎贝壳包 F27583 IMDQC",
    detail: "",
    price: "￥1480.00",
    "p_url": "https://img12.360buyimg.com/n1/jfs/t19210/102/835956684/196395/f3f7ebe5/5aa9e11dNcf424fe2.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22ad20e290c1b88f3eb7e"),
    category: "奢侈品",
    name: "LONGCHAMP 珑骧 2019新品 女士LE PLIAGE系列浆果紫织物小号短柄可折叠手提包 1621 619 645",
    detail: "",
    price: "￥780.00",
    "p_url": "https://img14.360buyimg.com/n1/jfs/t1/24627/14/7604/83309/5c6cade4E24613d88/42303de96b629004.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22ad80e290c1b88f3eb7f"),
    category: "奢侈品",
    name: "VERSACE范思哲 经典款 男士黑色皮革美杜莎头像手拿包DP84725 DGOVV D41OH",
    detail: "此商品将于2019-06-04,00点结束闪购特卖，范思哲奢侈品专场",
    price: "￥2618.00",
    "p_url": "https://img14.360buyimg.com/n1/jfs/t1/19840/23/5941/162462/5c451b4dE36f1795c/3de2240cffdb7f4d.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22ade0e290c1b88f3eb80"),
    category: "奢侈品",
    name: "COACH 蔻驰 奢侈品 男士黑色单肩斜挎包 F54782 BLK",
    detail: "",
    price: "￥799.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t4228/217/3282593822/300176/a39ca66/58de0a78Nd5ee4c03.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22ae50e290c1b88f3eb81"),
    category: "奢侈品",
    name: "MCM 女士银色边缘铆钉牛皮革印logo迷你双肩包 MMK 9SVE47 SB001",
    detail: "此商品将于2019-06-04,00点结束闪购特卖，MCM奢侈品专场",
    price: "￥5202.00",
    "p_url": "https://img12.360buyimg.com/n1/jfs/t1/30328/11/10102/189162/5cac6596E534da0b3/06af084e4f7ddca2.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22aeb0e290c1b88f3eb82"),
    category: "奢侈品",
    name: "BALLY 巴利 奢侈品 男士黑色白条合成面料手拿包 SKID.OF/00 6224070",
    detail: "巴利（BALLY）618超级秒杀日，甄选钱包，皮带，鞋履等好货，低至三折。",
    price: "￥2399.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t1/25234/2/11898/128228/5c94aa0dEd37def61/9ee1f36339d4e74e.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22af20e290c1b88f3eb83"),
    category: "奢侈品",
    name: "RIMOWA 32寸托运箱拉杆箱 CLASSIC FLIGHT系列银色 971.77.00.4 银色 32寸",
    detail: "RIMOWA年中大促，部分商品6.1号超值秒杀，15天超长价保，好货不用等！",
    price: "￥5999.00",
    "p_url": "https://img11.360buyimg.com/n1/jfs/t1/26939/36/7540/100630/5c6cc7ceE561feed7/030fb57e14964fdd.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22af80e290c1b88f3eb84"),
    category: "奢侈品",
    name: "RIMOWA 26寸托运箱拉杆箱 SALSA AIR系列果绿色 820.63.36.4",
    detail: "RIMOWA年中大促，部分商品6.1号超值秒杀，15天超长价保，好货不用等！",
    price: "￥4880.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t6832/88/1235477654/89070/e792dddc/597ecd07N03d468c2.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22afe0e290c1b88f3eb85"),
    category: "奢侈品",
    name: "PANDORA 潘多拉 Moments优雅迷人银手镯 590713-19",
    detail: "潘多拉年中大促，低至80元超长价保15天，点击抢购~",
    price: "￥502.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t14155/351/528683544/26416/4b3a5cf8/5a0e5c6aN9493d433.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22b040e290c1b88f3eb86"),
    category: "奢侈品",
    name: "COACH 蔻驰 奢侈品 女士深棕色PVC配皮单肩手提包托特包TOTE大号 F36658 IMAA8",
    detail: "",
    price: "￥",
    "p_url": "https://img11.360buyimg.com/n1/jfs/t6526/62/69680644/285559/7a443ca0/5938af9aN5dcd0f12.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22b230e290c1b88f3eb87"),
    category: "奢侈品",
    name: "COACH蔻驰女包 托特包购物袋大号时尚百搭手提包经典C纹单肩包tote F58292卡其棕",
    detail: "",
    price: "￥ 859.00",
    "p_url": "https:"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22b2a0e290c1b88f3eb88"),
    category: "奢侈品",
    name: "COACH 蔻驰 奢侈品 男士黑色/深棕色皮质腰带礼盒款 F65185 AQ0",
    detail: "",
    price: "￥1000.00",
    "p_url": "https://img14.360buyimg.com/n1/jfs/t3178/133/70307282/276326/d9a23c67/57a2ea39N33373693.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22b320e290c1b88f3eb89"),
    category: "奢侈品",
    name: "2019年新款 施华洛世奇Swarovski 粉天鹅项链 胭脂色天鹅耳环时尚女 长耳线 5469990",
    detail: "618全球购物节，部分每满299减30，保价618，爆款直降全球购物节",
    price: "￥ 590.00",
    "p_url": "https:"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22b390e290c1b88f3eb8a"),
    category: "奢侈品",
    name: "施华洛世奇(SWAROVSKI)雪花耳钉女新款耳环防过敏情人节生日礼物 女生 银色 5428430",
    detail: "618提前购，6月1日-6月8日，部分商品满1000减200，首页关注领券更优惠！",
    price: "￥ 520.00",
    "p_url": "https:"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22b410e290c1b88f3eb8b"),
    category: "奢侈品",
    name: "MICHAEL KORS 迈克 科尔斯 MK女包 CYNTHIA系列黑色牛皮时尚女士中号手拎单肩包 30F7GCYS2L BLACK",
    detail: "此商品将于2019-06-03,10点结束闪购特卖，MK奢侈品专场",
    price: "￥2380.00",
    "p_url": "https://img10.360buyimg.com/n1/jfs/t7906/267/4376567993/296228/36485ab6/5a056924N5fe6e323.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22b4b0e290c1b88f3eb8c"),
    category: "奢侈品",
    name: "Swarovski 施华洛世奇跳动的心跃动的心圆形项链女时尚水晶锁骨链 跃动晶彩 情人节女友礼物 蓝色5279425",
    detail: "618全球购物节,狂欢提前购,大促专享价,为您保价护航,优惠满减享不停",
    price: "￥ 509.00",
    "p_url": "https:"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22b520e290c1b88f3eb8d"),
    category: "奢侈品",
    name: "MCM 女士黑色链条单肩斜挎包中号 MYZ8AME05BK001",
    detail: "此商品将于2019-06-04,00点结束闪购特卖，MCM奢侈品专场",
    price: "￥3861.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t1/4160/38/9923/102600/5bc9502fE58011389/6dddaab912ce23e8.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22b580e290c1b88f3eb8e"),
    category: "奢侈品",
    name: "COACH 蔻驰 奢侈品 女士黑色皮质小号单肩斜挎包 87401 LIBLK",
    detail: "",
    price: "￥1150.00",
    "p_url": "https://img11.360buyimg.com/n1/jfs/t9301/85/2655015759/212714/67dbaeda/59dc69b0N21d002ae.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22b5f0e290c1b88f3eb8f"),
    category: "奢侈品",
    name: "COACH 蔻驰 奢侈品 女士粉色皮质手提单肩斜挎贝壳包 F27591 SV/ET",
    detail: "",
    price: "￥1530.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t1/16177/17/8330/188864/5c73947aE44389391/cd4ec5a62e03a2e7.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22b670e290c1b88f3eb90"),
    category: "奢侈品",
    name: "COACH蔻驰女包 经典波士顿包 奢侈品手提单肩斜挎包时尚水桶包 F32203咖啡色现货",
    detail: "",
    price: "￥ 829.00",
    "p_url": "https:"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22b6f0e290c1b88f3eb91"),
    category: "奢侈品",
    name: "GUCCI 古驰 GUCCI 腰带 黑色牛皮双G带扣男士腰带 414516 AP00T 1000 105",
    detail: "GUCCI京东专区，6月1日海量商品秒杀价，低至下单五折，领券更优惠，今日下单享30天价保》》》仅限今日》》》",
    price: "￥3096.00",
    "p_url": "https://img14.360buyimg.com/n1/jfs/t1/41831/11/20/68779/5cc01c27E873388ba/b03846b54f7edc97.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22b740e290c1b88f3eb92"),
    category: "奢侈品",
    name: "COACH 蔻驰 奢侈品 男士灰色PVC印花针扣腰带皮带 F64825 CQ/BK",
    detail: "",
    price: "￥490.00",
    "p_url": "https://img11.360buyimg.com/n1/jfs/t5269/198/430384212/92256/f2ac4097/58ff0720Nbad32a46.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22b7a0e290c1b88f3eb93"),
    category: "奢侈品",
    name: "COACH 蔻驰 奢侈品 女士白色印花皮质手提单肩双面托特包 F45317 SV0E7",
    detail: "",
    price: "￥1790.00",
    "p_url": "https://img12.360buyimg.com/n1/jfs/t1/16260/7/8077/188900/5c739970E005c2eb5/b36c0ae0d9ca5648.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22b800e290c1b88f3eb94"),
    category: "奢侈品",
    name: "COACH 蔻驰 奢侈品 女士粉色印花PVC手提单肩托特包 F29487 SVM05",
    detail: "",
    price: "￥1500.00",
    "p_url": "https://img11.360buyimg.com/n1/jfs/t18385/291/2558774998/146566/c5108208/5afe96f8Ncc77112e.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22b910e290c1b88f3eb95"),
    category: "奢侈品",
    name: "COACH蔻驰女包 贝壳包经典手提包时尚单肩斜挎包 F27591小号黑色",
    detail: "",
    price: "￥ 859.00",
    "p_url": "https:"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22b990e290c1b88f3eb96"),
    category: "奢侈品",
    name: "COACH 蔻驰 奢侈品 女士黑色皮质双肩背包 F29004 IMBLK",
    detail: "",
    price: "￥1680.00",
    "p_url": "https://img11.360buyimg.com/n1/jfs/t24505/156/1064617492/181656/abeda3d3/5b4f0ebcN222a1e56.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22b9f0e290c1b88f3eb97"),
    category: "奢侈品",
    name: "PRADA/普拉达男女同款尼龙材质带牛皮手柄手拿包 小号15*24cm 2NH004 黑色 均码",
    detail: "此商品将于2019-06-04,10点结束闪购特卖，618奢品提前购",
    price: "￥1770.00",
    "p_url": "https://img11.360buyimg.com/n1/jfs/t20941/144/1403688600/136918/f114a029/5b275fd9N35d371f6.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22ba40e290c1b88f3eb98"),
    category: "奢侈品",
    name: "GUCCI 古驰 GUCCI 男鞋 牛仔蓝织物男士休闲鞋 548644 9B5D0 4380 8/42",
    detail: "GUCCI京东专区，6月1日海量商品秒杀价，低至下单五折，领券更优惠，今日下单享30天价保》》》仅限今日》》》",
    price: "￥5100.00",
    "p_url": "https://img14.360buyimg.com/n1/jfs/t1/43409/29/24/105247/5cc0220eE08a0a870/cb77571612fa0171.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22baa0e290c1b88f3eb99"),
    category: "奢侈品",
    name: "COACH 蔻驰 奢侈品 女士藏蓝色单肩斜挎手提包 波士顿桶包 F57521IMMID 藏蓝色",
    detail: "",
    price: "￥1270.00",
    "p_url": "https://img14.360buyimg.com/n1/jfs/t7522/167/4561169122/248969/beea45cc/59eabc10N41460753.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22bc40e290c1b88f3eb9a"),
    category: "电脑",
    name: "荣耀MagicBook 2019 14英寸轻薄窄边框笔记本电脑（AMD锐龙5 3500U 8G 512G FHD IPS 指纹解锁）冰河银",
    detail: "【6.1开门红预约抢购价3999元】金属轻薄机身，微边框护眼全高清IPS屏，一键指纹全“芯”升级，薄至15.8mm。预约限量赠原装背包",
    price: "￥3999.00",
    "p_url": "https://img11.360buyimg.com/n1/jfs/t1/31510/5/8986/283616/5ca22287E39f7d685/fef97a4ccc084e40.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22bca0e290c1b88f3eb9b"),
    category: "电脑",
    name: "戴尔(DELL)成就3470 英特尔酷睿i3 高性能 商用办公 台式电脑整机(i3-8100 8G 1T 键鼠 WIFI 蓝牙)21.5英寸",
    detail: "戴尔618钜惠狂欢,6.1-6.18期间限时低至5折秒,爆款至高直降5000元限量抢,更有至高12期免息，更多惊喜低价都在这里",
    price: "￥2899.00",
    "p_url": "https://img11.360buyimg.com/n1/s450x450_jfs/t1/26835/29/11088/216896/5c8b3156E82f10500/849f42e81c3eed4f.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22bd00e290c1b88f3eb9c"),
    category: "电脑",
    name: "联想（Lenovo）天逸510S  第八代英特尔酷睿i3  个人商务台式电脑整机 （i3-8100 8G 1T win10）19.5英寸",
    detail: "【6.1日超级秒杀】仅限6.1日超级秒杀，酷睿i3，8G大内存更多详情请点击",
    price: "￥2899.00",
    "p_url": "https://img11.360buyimg.com/n1/s450x450_jfs/t1/18626/4/7286/236104/5c6a2667E904ea157/5428b1a085f0a6b6.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22bd80e290c1b88f3eb9d"),
    category: "电脑",
    name: "戴尔(DELL)成就3470 英特尔酷睿i5 高性能 商用办公 台式电脑整机(i5-8400 8G 1T 四年上门 WIFI)21.5英寸",
    detail: "戴尔618钜惠狂欢,6.1-6.18期间限时低至5折秒,爆款至高直降5000元限量抢,更有至高12期免息，更多惊喜低价都在这里",
    price: "￥3999.00",
    "p_url": "https://img12.360buyimg.com/n1/s450x450_jfs/t1/41870/28/5359/215722/5cee523cE1fbed8c5/0ab111044747d1f7.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22bdf0e290c1b88f3eb9e"),
    category: "电脑",
    name: "武极 i7 8700/华硕GTX1660-6G/256G 游戏台式吃鸡电脑主机/DIY组装机",
    detail: "【6.1开门红，0点抢券到手价4388，抢升256GM.2高速SSD！整点抢购再享好礼！】京东DIY行业机皇！更多惊喜点我》》",
    price: "￥4688.00",
    "p_url": "https://img10.360buyimg.com/n1/jfs/t1/65519/5/861/383823/5cf0f6cfE476e7481/5ec0d06ef6daad2f.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22be60e290c1b88f3eb9f"),
    category: "电脑",
    name: "戴尔(DELL)灵越3670 英特尔酷睿i5 台式电脑整机(i5-8400 8G 128GSSD 1T 2G独显 WIFI 蓝牙 键鼠)23.6英寸",
    detail: "戴尔618钜惠狂欢,6.1-6.18期间限时低至5折秒,爆款至高直降5000元限量抢,更有至高12期免息，更多惊喜低价都在这里",
    price: "￥4799.00",
    "p_url": "https://img10.360buyimg.com/n1/jfs/t1/19887/24/10969/219004/5c8b2717E68463ca9/37f624088e68f400.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22bf00e290c1b88f3eba0"),
    category: "电脑",
    name: "外星人Alienware Aurora英特尔酷睿i9水冷游戏台式主机(九代i9-9900k 32G 512GSSD 2T RTX2080Ti 11G独显)",
    detail: "外星人618厚礼相赠，购指定产品赠外星人专属定制拉杆箱，至高可享12期免息，更有爆款限时直降5000元拼手速",
    price: "￥32999.00",
    "p_url": "https://img14.360buyimg.com/n1/s450x450_jfs/t1/10931/35/9960/179833/5c525732Eabf32e15/f2422d4d4b67216b.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22bf70e290c1b88f3eba1"),
    category: "电脑",
    name: "戴尔DELL游匣G3 英特尔酷睿i5 15.6英寸游戏笔记本电脑(九代i5-9300H 8G 128GSSD 1T GTX1650 4G独显 IPS)",
    detail: "【6月1日5499抢】618钜惠狂欢,6.1-6.18期间爆款低至5折秒,至高直降5000限量抢,至高12期免息猛戳",
    price: "￥5499.00",
    "p_url": "https://img12.360buyimg.com/n1/jfs/t1/38309/39/6833/304817/5cd4dab1Ec5ffce5e/8da0d7cc58142c35.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22bfd0e290c1b88f3eba2"),
    category: "电脑",
    name: "联想(Lenovo)扬天M5900d商用办公台式电脑整机(AMD A4 4G 1T 集成 office 四年上门)19.5英寸",
    detail: "精致外观，匠心设计，丰富接口，扩展性强！四年上门售后服务，用的放心！！！戳我查看更多优选办公电脑》》》",
    price: "￥2199.00",
    "p_url": "https://img13.360buyimg.com/n1/s450x450_jfs/t1/77298/31/239/275330/5ce67824E500f4309/6eda6eaf9a15f563.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22c030e290c1b88f3eba3"),
    category: "电脑",
    name: "联想(Lenovo)天逸510 Pro英特尔酷睿i5 个人商务台式电脑整机(i5-8400 8G 128G SSD+1T GT730 2G独显)23英寸",
    detail: "【6.1日超级秒杀】仅限6.1日超级秒杀，酷睿i5，8G大内存，双硬盘，2G独显更多详情请点击",
    price: "￥4799.00",
    "p_url": "https://img14.360buyimg.com/n1/s450x450_jfs/t1/11047/30/8095/169126/5c6a2fb8Edb81d018/bc5b24223b66ed35.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22c090e290c1b88f3eba4"),
    category: "电脑",
    name: "联想（Lenovo）天逸510Pro英特尔酷睿i5个人商务台式机电脑整机（i5-9400F 8G 1T+256G SSD 2G独显 ）23英寸",
    detail: "【九代酷睿，真“芯”实意】,酷睿i5,8G内存，双硬盘，2G独显更多详情请点击",
    price: "￥4998.00",
    "p_url": "https://img11.360buyimg.com/n1/s450x450_jfs/t29275/348/1199492920/180021/e1a5e7d6/5cd905ceNae9f3a11.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22c0e0e290c1b88f3eba5"),
    category: "电脑",
    name: "华为HUAWEI MateBook 14 全面屏轻薄性能笔记本电脑(英特尔酷睿i5 8G 512G MX250 office 2K 一碰传)灰",
    detail: "[1号0点开抢]MateBook13全新MX250新品上市晒单赢双肩包券》",
    price: "￥5999.00",
    "p_url": "https://img10.360buyimg.com/n1/jfs/t1/31203/23/9994/197564/5cab210dE64e20358/d94e70571c1fd455.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22c170e290c1b88f3eba6"),
    category: "电脑",
    name: "联想(Lenovo)拯救者Y7000P 2019英特尔酷睿i715.6英寸游戏笔记本电脑(i7-9750H 8G 1T SSD GTX1660Ti 144Hz)",
    detail: "【6.1日专享3期免息，晒单返100e卡】到手价8799，开启1TB大固态硬盘时代，英特尔9代CPU，144Hz电竞屏72%NTSC高色域更多活动，点我看看！",
    price: "￥8899.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t1/35562/10/6806/203496/5cc51727E0c380820/3c8d1fe491d19fba.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22c1d0e290c1b88f3eba7"),
    category: "电脑",
    name: "机械革命(MECHREVO)Z2 Air 九代英特尔酷睿i7 15.6英寸轻薄游戏笔记本电脑(i7-9750H 8G 512G SSD GTX1650 72%高色域）",
    detail: "【6.1惊爆价5999】全新九代酷睿i7标压，新GTX1650显卡，轻薄电竞游戏本，72%高色域广视角窄边框，炫彩灯效背光键盘猛戳更多优惠",
    price: "￥5969.00",
    "p_url": "https://img11.360buyimg.com/n1/jfs/t29800/283/1500222321/142890/7a40aa2c/5ce2831fN4e0ebf00.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22c250e290c1b88f3eba8"),
    category: "电脑",
    name: "AOC AIO734 21.5英寸超薄高清一体机台式电脑(升级Intel四核J3160 4G 120G固态 内置WiFi 三年上门 送键鼠)",
    detail: "【京东自营】热销爆款四核四线程一体机流畅办公影音娱乐！AOC电脑价保618，爆款低至1799，开门大促享5重好礼！",
    price: "￥1848.00",
    "p_url": "https://img14.360buyimg.com/n1/s450x450_jfs/t1/31520/38/35/326450/5c36de36Ebad42c60/fc55f48c6807e2ab.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22c2b0e290c1b88f3eba9"),
    category: "电脑",
    name: "外星人 m17 17.3英寸轻薄游戏笔记本电脑(i9-8950HK 16G 512G固态 1T RTX2080MQ 8G独显)红",
    detail: "外星人618厚礼相赠，购指定产品赠外星人专属定制拉杆箱，至高可享12期免息，更有爆款限时直降5000元拼手速",
    price: "￥37989.00",
    "p_url": "https://img10.360buyimg.com/n1/s450x450_jfs/t1/22880/32/5756/107583/5c41b67aE73aa697a/84c46725a591d693.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22c330e290c1b88f3ebaa"),
    category: "电脑",
    name: "硕扬 i7 8700升十核/GTX10606G升8G/16G内存/游戏台式吃鸡电脑主机/DIY组装机",
    detail: "2.5万好评认证，行业爆款主机，抢升八核处理器，升8G独显，升16G内存【6.1开门红】6月1日5个整点准开抢，送24英寸电竞曲面屏",
    price: "￥2480.00",
    "p_url": "https://img10.360buyimg.com/n1/jfs/t1/82952/2/917/519859/5cf1cda6Efa5f9783/14d397a7861f5004.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22c390e290c1b88f3ebab"),
    category: "电脑",
    name: "Apple Macbook Pro 15.4【带触控栏】Core i7 16G 512G RP560X深空灰 苹果笔记本电脑轻薄本工作站MR942CH/A",
    detail: "【京东6.1超级秒杀日！】【MacBookPro2019年新品官网价直降1000元！】【历史低价限时限量秒杀！】历史震撼力度！走过路过千万不要错过！",
    price: "￥18888.00",
    "p_url": "https://img10.360buyimg.com/n1/s450x450_jfs/t23386/9/1066712099/277967/615ccafb/5b4f0e3aN262237fc.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22c3e0e290c1b88f3ebac"),
    category: "电脑",
    name: "惠普(HP)暗影精灵4代 英特尔酷睿i5 15.6英寸游戏笔记本电脑(i5 8G 512G GTX1050Ti 4G独显 IPS FHD)",
    detail: "【2019玩所未玩】微边框游戏本搭载8代处理器》【京东618\"价\"到】九代酷睿暗影游戏本震撼来袭",
    price: "￥5399.00",
    "p_url": "https://img10.360buyimg.com/n1/s450x450_jfs/t29656/242/1597576087/99370/ff360176/5ce4fc80N0921068d.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22c440e290c1b88f3ebad"),
    category: "电脑",
    name: "联想ThinkPad 翼480（0VCD） 英特尔酷睿i5 14英寸轻薄窄边框笔记本电脑（i5-8250U 8G 128GSSD+500G 2G独显）冰原银",
    detail: "【6.1超级秒杀价4699元】ThinkPad爆款直降千元，畅销型号每满1000减100，还有精品5折秒杀，更有新品享受12期免息》》真实惠就在6月1日《《",
    price: "￥4699.00",
    "p_url": "https://img12.360buyimg.com/n1/jfs/t1/27091/38/7028/262553/5c677c3dE197fb3ba/07f68ff00084170e.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22c4b0e290c1b88f3ebae"),
    category: "电脑",
    name: "戴尔灵越14燃 14英寸英特尔酷睿i5轻薄窄边框笔记本电脑(i5-8265U 8G 256G MX250 2G独显 背光键盘)冰河银",
    detail: "【6月1日4399抢】618钜惠狂欢,6.1-6.18期间爆款低至5折秒,至高直降5000限量抢,至高12期免息猛戳",
    price: "￥4369.00",
    "p_url": "https://img14.360buyimg.com/n1/jfs/t1/20286/32/9629/405253/5c80d55eE945049e5/66fa7fab6cedd1ab.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22c500e290c1b88f3ebaf"),
    category: "电脑",
    name: "Apple Macbook Air 13.3 | Core i5 8G 128G SSD 苹果笔记本电脑 轻薄本 银色 MQD32CH/A",
    detail: "【京东6.1超级秒杀日！】【MacBookPro2019年新品官网价直降1000元！】【历史低价限时限量秒杀！】历史震撼力度！走过路过千万不要错过！",
    price: "￥5599.00",
    "p_url": "https://img11.360buyimg.com/n1/s450x450_jfs/t1/52589/11/1235/262977/5cf10180E7383a7eb/595c8e48ecc027f0.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22c560e290c1b88f3ebb0"),
    category: "电脑",
    name: "联想ThinkPad E480（2XCD）英特尔酷睿i3 14英寸轻薄窄边框笔记本电脑（i3-7020U 4G 500G FHD Win10）银",
    detail: "【6.1超级秒杀价2999元再叠加每满1000立减100元】ThinkPad爆款直降千元，畅销型号每满1000减100，精品5折秒杀》》真实惠就在6月1日《《",
    price: "￥2999.00",
    "p_url": "https://img14.360buyimg.com/n1/jfs/t1/37722/30/6628/261375/5cc90b1cEdf973dc2/6a1e673641c5791f.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22c5c0e290c1b88f3ebb1"),
    category: "电脑",
    name: "宏碁（Acer）商祺SQX4270 140N 商用办公台式电脑整机（八代G4900 4G 1T Win10 三年上门）20英寸",
    detail: "八代英特尔处理器，20英寸IPS大屏，USB3.1Gen2传输加倍，三年上门更安心！618精彩活动，戳我了解》",
    price: "￥1988.00",
    "p_url": "https://img14.360buyimg.com/n1/s450x450_jfs/t1/20781/1/1869/125356/5c176ba0E2fbceeaa/95b0f6fdd5b304b0.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22c630e290c1b88f3ebb2"),
    category: "电脑",
    name: "小米 (MI)Ruby 2019款 15.6英寸金属轻薄笔记本电脑(第八代英特尔酷睿i5-8250U 8G 512G SSD 2G GDDR5独显 FHD 全键盘 Office Win10) 深空灰",
    detail: "【6.1开门红3899元】【618重磅产品】【国民轻薄本普及风暴】【2G独显】八代酷睿I5处理器、双内存大固态硬盘、带独立数字键盘重磅新品预售",
    price: "￥3898.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t1/42226/18/90/259322/5cc055b9E673cdc91/76ef2f0f283dfef8.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22c6b0e290c1b88f3ebb3"),
    category: "电脑",
    name: "联想(Lenovo)小新14英寸 AMD锐龙版R5（全新12nm）轻薄笔记本电脑(R5-3500U 8G 1TB+256G PCIE IPS)渣渣灰",
    detail: "【6.1日3699元疯抢】爆款新品，升级物理四核CPU，超大双混1T+256G固态PCIE硬盘，丰富接口更便捷猛戳！",
    price: "￥3699.00",
    "p_url": "https://img10.360buyimg.com/n1/jfs/t10696/105/2929909656/163006/4bdb2993/5cdbb57aNa503e4a9.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22c710e290c1b88f3ebb4"),
    category: "电脑",
    name: "Apple Macbook Pro 13.3【带触控栏】Core i5 8G 256G SSD 深空灰 苹果笔记本电脑 轻薄本 MR9Q2CH/A",
    detail: "【京东6.1超级秒杀日！】【MacBookPro2019年新品官网价直降1000元！】【历史低价限时限量秒杀！】历史震撼力度！走过路过千万不要错过！",
    price: "￥12288.00",
    "p_url": "https://img13.360buyimg.com/n1/s450x450_jfs/t1/59891/20/858/255159/5cf13875Eab0bd7e5/3375c214772750ab.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22c770e290c1b88f3ebb5"),
    category: "电脑",
    name: "武极 新i7 9700K/华硕RTX2070猛禽/16G内存 水冷游戏台式吃鸡电脑主机DIY组装机",
    detail: "【6.1开门红，0点抢券到手价8388，抢升酷冷至尊240水冷散热，整点抢购豪礼享不停！】升级华硕RTX2070猛禽三风扇！更多惊喜点我》》",
    price: "￥8688.00",
    "p_url": "https://img12.360buyimg.com/n1/jfs/t1/71903/28/762/443911/5cefc0f0Edb63f89c/54ee54816af4aa10.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22c7e0e290c1b88f3ebb6"),
    category: "电脑",
    name: "华为(HUAWEI) MateBook E 2019款 12英寸ACPC全连接轻薄二合一笔记本平板电脑（ 钛金灰 高通骁龙850 8G 256G）",
    detail: "【6.1开门即高潮】炙手可热“新物种”MatebookE2019至高优惠100元！到手价3899元！稀缺单品火速抢购",
    price: "￥3899.00",
    "p_url": "https://img10.360buyimg.com/n1/jfs/t1/28529/28/14095/308403/5ca5c566E256eed12/42aa00e5b7798ad9.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22c840e290c1b88f3ebb7"),
    category: "电脑",
    name: "联想(Lenovo)小新Air英特尔酷睿i5 13.3英寸超轻薄笔记本电脑(I5-8265U 8G 512G SSD MX250 100%sRGB)轻奢灰",
    detail: "【6.1日4999元疯抢】全新Air13，升级MX250显卡，512G超大固态硬盘存储，丰富接口转换更便捷猛戳！",
    price: "￥4999.00",
    "p_url": "https://img12.360buyimg.com/n1/jfs/t1/56572/1/521/149804/5cdbad79Ea1e88298/53f742ffc41ba306.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22c8b0e290c1b88f3ebb8"),
    category: "电脑",
    name: "戴尔(DELL)灵越3670 英特尔酷睿i5 高性能 台式电脑整机(九代i5-9400 8G 256G 1T 2G独显 三年上门)23.6英寸",
    detail: "戴尔618钜惠狂欢,6.1-6.18期间限时低至5折秒,爆款至高直降5000元限量抢,更有至高12期免息，更多惊喜低价都在这里",
    price: "￥4968.00",
    "p_url": "https://img13.360buyimg.com/n1/s450x450_jfs/t1/84391/37/317/229232/5cd4f9aaE8123fe1d/bff9c917fa7f5caf.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22c910e290c1b88f3ebb9"),
    category: "电脑",
    name: "戴尔DELL游匣G315.6英寸英特尔酷睿i7游戏笔记本电脑(i7-8750H 8G 128G 1T GTX1060MQ 6G独显 背光键盘 IPS)",
    detail: "【6月1日6299抢】618钜惠狂欢,6.1-6.18期间爆款低至5折秒,至高直降5000限量抢,至高12期免息猛戳",
    price: "￥6299.00",
    "p_url": "https://img14.360buyimg.com/n1/s450x450_jfs/t1/23498/2/6086/331642/5c4ab9bfE5b8517c9/cacc9985eb090ac5.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22c960e290c1b88f3ebba"),
    category: "电脑",
    name: "惠普（HP）暗影精灵3代 游戏台式电脑主机（i5-8400 8G高频 1T+128GSSD GTX1060 WiFi蓝牙 三年上门）",
    detail: "【暗影降临，价保618】GTX1060\"十\"力不凡，固态机械双硬盘速容兼顾，LED绿刃灯带锋芒毕露！年中大促全场6期免息，暗影精灵4新品上市》",
    price: "￥4899.00",
    "p_url": "https://img10.360buyimg.com/n1/s450x450_jfs/t1/15524/12/5109/176432/5c385592Ea75dbe81/16594d939165302e.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22c9d0e290c1b88f3ebbb"),
    category: "电脑",
    name: "华为(HUAWEI)MateBook 13 全面屏轻薄性能笔记本(英特尔酷睿i3 8G 256G 集显 office 2K 一碰传)银",
    detail: "[1号0点开抢]MateBook13全新MX250新品上市晒单赢双肩包券》",
    price: "￥4399.00",
    "p_url": "https://img12.360buyimg.com/n1/s450x450_jfs/t1/33953/6/3687/177121/5cb59282Edda47881/3b303091f4172575.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22ca30e290c1b88f3ebbc"),
    category: "电脑",
    name: "逆世界 i7 8700升八核/RX580 8G独显/16G内存吃鸡游戏台式电脑主机组装机送显示器套装 配置三：八核/16G/RX580 8G吃鸡独显",
    detail: "下单即送24英寸曲面高清显示器！限量升级RX580-8G吃鸡游戏战机，助你畅快吃鸡无压力",
    price: "￥2547.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t1/40318/11/7888/339119/5cf1edf6E0288863a/a84a4d80f057cf16.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22ca90e290c1b88f3ebbd"),
    category: "电脑",
    name: "联想(Lenovo)拯救者Y7000英特尔酷睿i5 15.6英寸游戏笔记本电脑( i5-8300H 8G 512G SSD GTX1050 黑)",
    detail: "【6月1日5299】Y7000爆款机型，512G_PCIE固态硬盘海量存储更快捷，舒适调节180度可开合IPS高清屏猛戳！",
    price: "￥5269.00",
    "p_url": "https://img11.360buyimg.com/n1/jfs/t1/17923/10/7179/341741/5c67f16aE6785d392/b9a9fd45b5c0e227.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22cb00e290c1b88f3ebbe"),
    category: "电脑",
    name: "【亮铂金键盘套装】微软（Microsoft）Surface Pro（第五代）二合一平板电脑笔记本（Core M3 4G 128G）",
    detail: "【6月1日--20日价保30天】有价保放心购·6月大促1日开门红·全场6期免息·Surface2788起点击进入微软专场",
    price: "￥4999.00",
    "p_url": "https://img12.360buyimg.com/n1/s450x450_jfs/t1/3397/39/13730/117541/5bd90af9E3c769618/eee98e5ff578d477.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22cb60e290c1b88f3ebbf"),
    category: "电脑",
    name: "华为(HUAWEI) MateBook D(2018版) 15.6英寸轻薄微边框笔记本(i5-8250U 8G 256G MX150 2G独显 FHD office)银",
    detail: "[1号0点开抢]MateBook13全新MX250新品上市晒单赢双肩包券》",
    price: "￥5188.00",
    "p_url": "https://img11.360buyimg.com/n1/s450x450_jfs/t21937/248/436134587/354741/59f6381c/5b0cefeaNe8ccb366.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22cbc0e290c1b88f3ebc0"),
    category: "电脑",
    name: "戴尔(DELL)成就3470 英特尔酷睿i5 商用办公 台式电脑整机(i5-8400 4G 1T 四年上门 WIFI 蓝牙)21.5英寸",
    detail: "戴尔618钜惠狂欢,6.1-6.18期间限时低至5折秒,爆款至高直降5000元限量抢,更有至高12期免息，更多惊喜低价都在这里",
    price: "￥3699.00",
    "p_url": "https://img11.360buyimg.com/n1/s450x450_jfs/t1/7738/2/15311/213951/5c6fbd0cE87c8d5c5/48fa86ce67df4f98.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22cc30e290c1b88f3ebc1"),
    category: "电脑",
    name: "联想(Lenovo)330C 英特尔酷睿i5 15.6英寸商务影音笔记本电脑(i5-8250U 4G 1T+128G SSD 独显MX110)黑",
    detail: "【6.1日3799元疯抢】15.6英寸FHD全高清，看电影更舒适，1T+128G双混高性价比猛戳！",
    price: "￥3799.00",
    "p_url": "https://img11.360buyimg.com/n1/jfs/t1/9743/37/14805/391963/5c67ef84Eaabe9be8/4cedcfc2be643fd7.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22cc90e290c1b88f3ebc2"),
    category: "电脑",
    name: "Apple iPad 平板电脑 2018年新款9.7英寸（128G WLAN版/A10 芯片/Touch ID MRJP2CH/A）金色",
    detail: "【6.1超级秒杀日】限时秒杀价2788！送蓝牙耳机！更有多款产品京东历史低价！指定产品5折抢！【新一代iPad，总有一款适合你】猛戳查看!",
    price: "￥2788.00",
    "p_url": "https://img13.360buyimg.com/n1/s450x450_jfs/t1/49243/40/1328/256021/5cf10c97E321e37a2/df482348e02bf2c0.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22ccf0e290c1b88f3ebc3"),
    category: "电脑",
    name: "机械革命(MECHREVO)X9Ti-R 九代英特尔酷睿i7 17.3英寸游戏笔记本电脑(i7-9750H 16G 512G PCIE+1T RTX2060  144Hz  机械键盘）",
    detail: "【6.1秒杀价9499】17.3英寸大屏窄边框144Hz电竞游戏本，九代酷睿i7标压，GTX2060高性能显卡，双通道内存更快速，双硬盘大存储猛戳更多优惠",
    price: "￥9499.00",
    "p_url": "https://img12.360buyimg.com/n1/jfs/t28156/205/1512617409/138578/fe161b5f/5ce28471N6f1fcbce.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22cd80e290c1b88f3ebc4"),
    category: "电脑",
    name: "荣耀MagicBook 2019 14英寸轻薄窄边框笔记本电脑（AMD锐龙7 3700U 8G 512G FHD IPS 指纹解锁）冰河银",
    detail: "【6.1开门红预约抢购价4399元】R7高性能处理器，微边框金属轻薄机身，一键指纹全“芯”升级，薄至15.8mm。预约限量赠原装背包",
    price: "￥4399.00",
    "p_url": "https://img14.360buyimg.com/n1/jfs/t1/36863/32/10249/283616/5cd53747E5a3c8d3e/6efe62222097d1b1.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22cdd0e290c1b88f3ebc5"),
    category: "电脑",
    name: "机械革命(MECHREVO)X3 九代英特尔酷睿i7 17.3英寸游戏笔记本电脑(i7-9750H 8G 512G PCIE GTX1660Ti 72%高色域)",
    detail: "【6.1秒杀价6999】17.3英寸大屏电竞游戏本，九代酷睿i7标压，新GTX1660Ti显卡，72%高色域广视角窄边框猛戳更多优惠",
    price: "￥6999.00",
    "p_url": "https://img11.360buyimg.com/n1/jfs/t29947/178/1508253200/139859/20477833/5ce2852aN669c9b58.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22ce30e290c1b88f3ebc6"),
    category: "电脑",
    name: "联想(Lenovo)天逸510S 英特尔酷睿i3 个人商务台式机电脑整机(i3-9100 8G 1T WiFi  三年上门 Win10)21.5英寸",
    detail: "【九代酷睿，真“芯”实意】,酷睿i3,8G内存更多详情请点击",
    price: "￥3198.00",
    "p_url": "https://img10.360buyimg.com/n1/s450x450_jfs/t28888/15/1235791945/208337/6d12ad4f/5cda8ce7N2087f852.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22ce90e290c1b88f3ebc7"),
    category: "电脑",
    name: "联想(Lenovo)拯救者Y7000P 2019 英特尔酷睿i7 15.6英寸游戏笔记本电脑(i7-9750H 8G 1T SSD GTX1650 144Hz)",
    detail: "【6.1日专享3期免息，晒单返100e卡】到手价7799，开启1TB大固态硬盘时代，全新英特尔9代CPU，144Hz电竞屏窄边框更多活动，点我看看！",
    price: "￥7899.00",
    "p_url": "https://img14.360buyimg.com/n1/jfs/t1/41573/9/3466/199514/5cce907eE600b1d9d/79a5ac23c4bdd1da.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22cee0e290c1b88f3ebc8"),
    category: "电脑",
    name: "荣耀MagicBook 2019 14英寸轻薄窄边框笔记本电脑（AMD R5 3500U 8G 256G PCIe FHD IPS 指纹Office）冰河银",
    detail: "【6.1开门红预约抢购价3699元】金属轻薄机身，微边框护眼全高清IPS屏，一键指纹全“芯”升级，薄至15.8mm。预约限量赠原装背包",
    price: "￥3699.00",
    "p_url": "https://img11.360buyimg.com/n1/jfs/t1/18294/25/13744/283616/5ca22582E897a5fda/cdc63964f238053d.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22cf40e290c1b88f3ebc9"),
    category: "电脑",
    name: "联想(Lenovo)小新潮7000 英特尔酷睿i5 14英寸轻薄笔记本电脑(I5-8250U 8G 512G PCIE SSD R535独显 )银",
    detail: "【6.1日4599元疯抢】大固态时代，超大512G_PCIE硬盘，丰富接口2*USB3.0+Type-C+HDMI,三边微边框FHD屏猛戳！",
    price: "￥4599.00",
    "p_url": "https://img10.360buyimg.com/n1/jfs/t1/32937/7/15458/180400/5cc13233E8b41d593/4dc58d9c3ad624e0.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22cfd0e290c1b88f3ebca"),
    category: "电脑",
    name: "雷神(ThundeRobot)五代新911耀武 16.6英寸非15.6游戏笔记本电脑i7-9750H 16G 256G+1T 144Hz电竞屏GTX1660Ti",
    detail: "【6月1日领券到手价8696】九代i7，16.6英寸窄边框144Hz电竞屏，16G内存，256GSSD+1T，GTX1660Ti惊喜点击",
    price: "￥8899.00",
    "p_url": "https://img13.360buyimg.com/n1/s450x450_jfs/t1/33104/25/12265/296647/5cebaf7dE11509b76/310d4e41fac85b17.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22d030e290c1b88f3ebcb"),
    category: "电脑",
    name: "联想（Lenovo）GeekPro 英特尔酷睿i7 设计师游戏台式电脑主机(I7-9700 8G 1T+256G GTX1660Ti 三年上门)",
    detail: "【九代酷睿,真“芯”实意】i7-9700处理器,搭载GTX1660Ti,6G显卡,1T+256GSSD大存储更多九代详情,请点击",
    price: "￥6699.00",
    "p_url": "https://img10.360buyimg.com/n1/s450x450_jfs/t1/40012/16/500/137431/5cb99e28Ed4375c3c/d9d752963419cc0c.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22d090e290c1b88f3ebcc"),
    category: "电脑",
    name: "联想(Lenovo)小新潮7000英特尔酷睿i714英寸轻薄笔记本电脑(I7-8550U 8G 512G PCIE SSD 2G独显正版Office)银",
    detail: "【6.1日5099元疯抢】大固态时代，超大512G_PCIE硬盘，丰富接口2*USB3.0+Type-C+HDMI,三边微边框FHD屏猛戳！",
    price: "￥5069.00",
    "p_url": "https://img11.360buyimg.com/n1/jfs/t1/40561/28/5000/215206/5ce762edE78d7fc2d/3894614935516b51.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22d0e0e290c1b88f3ebcd"),
    category: "电脑",
    name: "机械革命（MECHREVO）S1 Pro 14英寸窄边框轻薄笔记本电脑 i5-8265U 8G 512GSSD MX250 灰 OFFICE 背光",
    detail: "【6.1秒杀价3999】全新升级MX250独显轻薄性能更强悍，金属机身抗滑耐磨有质感，窄边框全面屏，背光键盘，丰富接口减少转换猛戳更多优惠",
    price: "￥3999.00",
    "p_url": "https://img10.360buyimg.com/n1/jfs/t28015/247/1384846883/135082/f1a6f5e7/5cde7dd9Nf1f7035a.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22d140e290c1b88f3ebce"),
    category: "电脑",
    name: "戴尔灵越14燃 14英寸英特尔酷睿i7轻薄窄边框笔记本电脑(i7-8565U 8G 256G MX250 2G独显 背光键盘)冰河银",
    detail: "【6月1日5099抢】618钜惠狂欢,6.1-6.18期间爆款低至5折秒,至高直降5000限量抢,至高12期免息猛戳",
    price: "￥5099.00",
    "p_url": "https://img12.360buyimg.com/n1/jfs/t1/25014/28/11622/405008/5c9193e8Eb7c4ee8a/e5043648d8b1b2b6.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22d1a0e290c1b88f3ebcf"),
    category: "电脑",
    name: "联想(Lenovo)小新潮7000 14英寸轻薄窄边框笔记本电脑(AMD锐龙5 8G 512G PCIe FHD IPS)极光银",
    detail: "爆款新品！512G_PCIE固态传输速度高于普通固态2倍,1.3mm键程让您敲击不累办公更舒适，丰富接口办公无需转换更多活动，点我看看！",
    price: "￥3999.00",
    "p_url": "https://img11.360buyimg.com/n1/s450x450_jfs/t1/35445/35/5900/73586/5cc13354Ece9b433b/83e3b0f3bb301e70.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22d320e290c1b88f3ebd0"),
    category: "书籍",
    name: "全8册鬼谷子全集正版墨菲定律狼道羊皮卷人性的弱点卡耐基读心术九型人格人际关系心理学无厚黑学励志图书籍",
    detail: "",
    price: "",
    "p_url": "https:"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22d380e290c1b88f3ebd1"),
    category: "书籍",
    name: "全8册 处世哲学书 鬼谷子 墨菲定律 人性的弱点 羊皮卷 狼道 九型人格 无厚黑学 畅销图书励志书籍",
    detail: "",
    price: "",
    "p_url": "https:"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22d3d0e290c1b88f3ebd2"),
    category: "书籍",
    name: "全8册口才书籍 高情商聊天术 演讲与口才 别输在不会表达上说话 心理学的书 逻辑说服力图书",
    detail: "",
    price: "",
    "p_url": "https:"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22d440e290c1b88f3ebd3"),
    category: "书籍",
    name: "8册 将来的你一定会感谢现在拼命的自己 精进如何成为一个很厉害的人 文学小说图书青春励志书畅销书籍",
    detail: "",
    price: "",
    "p_url": "https:"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22d4b0e290c1b88f3ebd4"),
    category: "书籍",
    name: "余华作品：活着",
    detail: "",
    price: "",
    "p_url": "https:"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22d530e290c1b88f3ebd5"),
    category: "书籍",
    name: "成功学7本 人性的弱点卡耐基正版+鬼谷子+墨菲定律+九型人格+羊皮卷+狼道+方与圆无厚黑学心理学书籍",
    detail: "",
    price: "",
    "p_url": "https:"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22d580e290c1b88f3ebd6"),
    category: "书籍",
    name: "一看就停不下来的中国史(京东定制版)",
    detail: "",
    price: "",
    "p_url": "https:"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22d5e0e290c1b88f3ebd7"),
    category: "书籍",
    name: "浮生六记（畅销300万册，全译本，蝉联京东图书2017，2018年度十大畅销书）【果麦经典】",
    detail: "",
    price: "",
    "p_url": "https:"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22d630e290c1b88f3ebd8"),
    category: "书籍",
    name: "抖音同款书籍7册 人性的弱点墨菲定律羊皮卷狼道全集正版九型人格方与圆鬼谷子全集 成功学书励志图书",
    detail: "",
    price: "",
    "p_url": "https:"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22d690e290c1b88f3ebd9"),
    category: "书籍",
    name: "孤独是生命的礼物",
    detail: "",
    price: "",
    "p_url": "https:"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22d6e0e290c1b88f3ebda"),
    category: "书籍",
    name: "皮囊（畅销300万册的国民读本，韩寒监制，刘德华、李敬泽作序。）",
    detail: "",
    price: "",
    "p_url": "https:"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22d730e290c1b88f3ebdb"),
    category: "书籍",
    name: "美国儿科学会育儿百科（第6版2018增订升级）  [Caring for Your Baby and Young Child]",
    detail: "",
    price: "",
    "p_url": "https:"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22d780e290c1b88f3ebdc"),
    category: "书籍",
    name: "励志书籍6册 你的生活需要仪式感 你不努力谁也给不了你想要的生活 青春文学励志小说 畅销图书排行榜 励志书籍（套装6册）",
    detail: "",
    price: "",
    "p_url": "https:"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22d7d0e290c1b88f3ebdd"),
    category: "书籍",
    name: "正面管教（修订版）",
    detail: "",
    price: "",
    "p_url": "https:"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22d820e290c1b88f3ebde"),
    category: "书籍",
    name: "自在独行：贾平凹的独行世界",
    detail: "",
    price: "",
    "p_url": "https:"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22d880e290c1b88f3ebdf"),
    category: "书籍",
    name: "全8册 高情商聊天术+说话的艺术+演讲与口才+逻辑说服力+别输在不会表达上+幽默与沟通口才训练书籍",
    detail: "",
    price: "",
    "p_url": "https:"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22d8e0e290c1b88f3ebe0"),
    category: "书籍",
    name: "自控力 斯坦福大学广受欢迎心理学课程（新版）",
    detail: "",
    price: "",
    "p_url": "https:"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22d930e290c1b88f3ebe1"),
    category: "书籍",
    name: "别在该吃苦的年纪，选择安逸",
    detail: "",
    price: "",
    "p_url": "https:"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22d980e290c1b88f3ebe2"),
    category: "书籍",
    name: "追风筝的人（2018版）",
    detail: "",
    price: "",
    "p_url": "https:"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22d9f0e290c1b88f3ebe3"),
    category: "书籍",
    name: "平凡的世界：全三册",
    detail: "",
    price: "",
    "p_url": "https:"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22da50e290c1b88f3ebe4"),
    category: "书籍",
    name: "原则（瑞达利欧）  [Principles]",
    detail: "",
    price: "",
    "p_url": "https:"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22daa0e290c1b88f3ebe5"),
    category: "书籍",
    name: "全4册将来的你一定会感谢现在拼命的自己 你不努力谁也给不了你想要的生活 青春文学小说 励志书籍排行榜",
    detail: "",
    price: "",
    "p_url": "https:"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22db00e290c1b88f3ebe6"),
    category: "书籍",
    name: "福尔摩斯探案集全集10册 小学生版 课外阅读书籍 三四五六年级课外书 逻辑思维训练 探案故事书",
    detail: "",
    price: "",
    "p_url": "https:"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22db70e290c1b88f3ebe7"),
    category: "书籍",
    name: "天才在左 疯子在右：完整版(新版)",
    detail: "",
    price: "",
    "p_url": "https:"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22dbc0e290c1b88f3ebe8"),
    category: "书籍",
    name: "世界名著文学小说书籍7册 人间失格+月亮与六便士+瓦尔登湖+罗生门+我是猫+菊与刀+1984",
    detail: "",
    price: "",
    "p_url": "https:"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22dc10e290c1b88f3ebe9"),
    category: "书籍",
    name: "墨菲定律",
    detail: "",
    price: "",
    "p_url": "https:"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22dc60e290c1b88f3ebea"),
    category: "书籍",
    name: "励志三部曲：格局+情商+重塑（套装共三册）",
    detail: "",
    price: "",
    "p_url": "https:"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22dcb0e290c1b88f3ebeb"),
    category: "书籍",
    name: "悦读时光 你若盛开清风自来 心理学书籍 青春文学小说励志畅销书籍 人生哲理 自我提升书籍",
    detail: "",
    price: "",
    "p_url": "https:"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22dd00e290c1b88f3ebec"),
    category: "书籍",
    name: "100层的房子系列（新版4册套装） [3-6岁]",
    detail: "",
    price: "",
    "p_url": "https:"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22dd60e290c1b88f3ebed"),
    category: "书籍",
    name: "摆渡人　【荐书联盟推荐】  [Ferryman]",
    detail: "",
    price: "",
    "p_url": "https:"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22ddc0e290c1b88f3ebee"),
    category: "书籍",
    name: "刻意练习：如何从新手到大师  [PEAK: Secrets from the New Science of Expertise]",
    detail: "",
    price: "",
    "p_url": "https:"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22de20e290c1b88f3ebef"),
    category: "书籍",
    name: "正版12册 人性的弱点+狼道+鬼谷子+孙子兵法+方与圆+羊皮卷+墨菲定律+九型人格 塔木德成功经典书",
    detail: "",
    price: "",
    "p_url": "https:"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22de70e290c1b88f3ebf0"),
    category: "书籍",
    name: "明朝那些事儿（新版套装 全套共7册,两种颜色随机发货）",
    detail: "",
    price: "",
    "p_url": "https:"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22ded0e290c1b88f3ebf1"),
    category: "书籍",
    name: "施瓦辛格健身全书（中文简体字版）   [The New Encyclopedia of Modern Bodybuilding]",
    detail: "",
    price: "",
    "p_url": "https:"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22df40e290c1b88f3ebf2"),
    category: "书籍",
    name: "环球国家地理百科全书（套装共10册） [11-14岁]",
    detail: "",
    price: "",
    "p_url": "https:"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22df90e290c1b88f3ebf3"),
    category: "书籍",
    name: "正版6册 励志书籍 将来的你你不努力谁也给不了你想要的生活 你只是看起来很努力 成功励志图书籍",
    detail: "",
    price: "",
    "p_url": "https:"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22dfe0e290c1b88f3ebf4"),
    category: "书籍",
    name: "一只特立独行的猪",
    detail: "",
    price: "",
    "p_url": "https:"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22e030e290c1b88f3ebf5"),
    category: "书籍",
    name: "人生",
    detail: "",
    price: "",
    "p_url": "https:"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22e080e290c1b88f3ebf6"),
    category: "书籍",
    name: "朗读者（套装1-3辑）",
    detail: "",
    price: "",
    "p_url": "https:"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22e100e290c1b88f3ebf7"),
    category: "书籍",
    name: "粉笔公考2020国考公务员考试教材 行测的思维申论的规矩 2020国家公务员考试用书2019历年真题",
    detail: "",
    price: "",
    "p_url": "https:"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22e180e290c1b88f3ebf8"),
    category: "书籍",
    name: "6册企业管理书籍 不懂带团队你就自己累 人力资源行政酒店餐饮管理学 管理类书籍领导力团队管理 书籍",
    detail: "",
    price: "",
    "p_url": "https:"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22e1f0e290c1b88f3ebf9"),
    category: "书籍",
    name: "马尔克斯：百年孤独（50周年纪念版）",
    detail: "",
    price: "",
    "p_url": "https:"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22e250e290c1b88f3ebfa"),
    category: "书籍",
    name: "思维导图 记忆力训练法 教你简单快速有效的提升记忆快速提高左右脑思维和技巧 可搭配最强大脑书籍",
    detail: "",
    price: "",
    "p_url": "https:"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22e2b0e290c1b88f3ebfb"),
    category: "书籍",
    name: "人间失格",
    detail: "",
    price: "",
    "p_url": "https:"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22e300e290c1b88f3ebfc"),
    category: "书籍",
    name: "精进：如何成为一个很厉害的人",
    detail: "",
    price: "",
    "p_url": "https:"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22e360e290c1b88f3ebfd"),
    category: "书籍",
    name: "作家榜经典文库：月亮与六便士（新版！未删节插图珍藏版，荣获豆瓣阅读年度销量第1名、京东小说桂冠）",
    detail: "",
    price: "",
    "p_url": "https:"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22e3b0e290c1b88f3ebfe"),
    category: "书籍",
    name: "人性的弱点全集（完整全译本）",
    detail: "",
    price: "",
    "p_url": "https:"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22e400e290c1b88f3ebff"),
    category: "书籍",
    name: "深度思考：不断逼近问题的本质",
    detail: "",
    price: "",
    "p_url": "https:"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22e460e290c1b88f3ec00"),
    category: "书籍",
    name: "金庸作品集套装（朗声旧版 套装全36册）",
    detail: "",
    price: "",
    "p_url": "https:"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22e4e0e290c1b88f3ec01"),
    category: "书籍",
    name: "中国科幻基石丛书：三体（套装1-3册）",
    detail: "",
    price: "",
    "p_url": "https:"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22e530e290c1b88f3ec02"),
    category: "书籍",
    name: "中国国家地理百科全书（套装共10册） [11-14岁]",
    detail: "",
    price: "",
    "p_url": "https:"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22e580e290c1b88f3ec03"),
    category: "书籍",
    name: "灰度决策：如何处理复杂、棘手、高风险的难题  [Managing in the Gray: Five Timeless Questions for ]",
    detail: "",
    price: "",
    "p_url": "https:"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22e5f0e290c1b88f3ec04"),
    category: "书籍",
    name: "正版3册 口才三绝+修心三不+为人三会 青春励志心灵鸡汤 自我修养自我完善人际社交说话技巧励志书籍",
    detail: "",
    price: "",
    "p_url": "https:"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22e770e290c1b88f3ec05"),
    category: "无人机",
    name: "宝贝星（BBS） 遥控飞机大型耐摔四轴飞行器无人机航拍高清战斗航模直升儿童玩具 32CM无摄像头（两块机身电池+终身保修）",
    detail: "★京东快递、效率直达、有速度更有温度\n★30天 免费试玩，免费退换\n★免费补发破损配件\n★一键返航，智能悬浮，操作简单， 礼盒包装\n★评论晒图再奖10元",
    price: "￥128.00",
    "p_url": "https://img14.360buyimg.com/n1/jfs/t12664/319/323102678/217550/7dd7ab1d/5a08f934N259304c6.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22e7c0e290c1b88f3ec06"),
    category: "无人机",
    name: "【续航40分钟】遥控飞机大型耐摔四轴飞行器无人机航拍高清战斗航模直升机儿童男孩玩具 (黑)智能定高基础版-无摄像头【终身维修】",
    detail: "*京东配送，闪电发货，效率直达！*智能悬浮，操作简单，礼盒包装！*赠运费险，破损免配件费补发，售后无忧！戳进选购更多精选玩具",
    price: "￥128.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t1/4430/26/11199/99829/5bce7a4eE237dc0bd/d8cdd74ccae03ed1.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22e830e290c1b88f3ec07"),
    category: "无人机",
    name: "SYMA司马无人机遥控飞机男孩玩具感应飞行器自动避障航模四轴定高电动玩具悬浮飞碟男孩礼物X26双电版",
    detail: "【六一儿童节】大牌玩具送礼必备，热销产品部分低至5折，更有精选商品满199减60，满299减100，满399减150，详情请点击》",
    price: "￥198.00",
    "p_url": "https://img11.360buyimg.com/n1/jfs/t1/19870/24/12639/229317/5c99c2a5E19e2dd11/f3105608472fc7d6.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22e8e0e290c1b88f3ec08"),
    category: "无人机",
    name: "DJI 大疆 无人机 御Mavic Air 便携可折叠 4K超清航拍 旅行无人机 （雪域白）",
    detail: "【全能套装直降800，现货抢购！】6月1日当天前500名购买送束口袋（赠完即止，以页面为准），6期免息购买全能套装》",
    price: "￥4199.00",
    "p_url": "https://img12.360buyimg.com/n1/jfs/t1/37331/36/11225/126383/5cf0ff9cE54c15262/8b2a33918e955f97.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22e960e290c1b88f3ec09"),
    category: "无人机",
    name: "DJI 大疆 无人机 “御”Mavic 2 专业版 新一代便携可折叠无人机",
    detail: "【单机降400配件包套装降600！】6月1日当天前500名购买送束口袋（赠完即止，以页面为准），6期免息，每个账号限购1台618直降高至900》",
    price: "￥9488.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t1/65580/26/842/105083/5cf0ff21E5c03aae6/543851d6e87b339a.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22e9d0e290c1b88f3ec0a"),
    category: "无人机",
    name: "【双GPS】定位返航智能跟随无人机航拍飞行器高清专业四轴飞行器遥控飞机男孩玩具航模 双GPS定位 1080P超清 5G实时图传300米",
    detail: "6月1号抢神券199-100\\299-150仅限一天。售后无忧：90天免费换新，30天无理由退换货。6月1号抢玩具神券199-100\\299-150，进入抢券！",
    price: "￥688.00",
    "p_url": "https://img11.360buyimg.com/n1/jfs/t27439/187/2044637302/209950/8636f11/5bf516daN83a0d954.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22ea20e290c1b88f3ec0b"),
    category: "无人机",
    name: "宝贝星（BBS） 遥控飞机大型耐摔四轴飞行器无人机航拍高清战斗航模直升儿童玩具 35CM定高版 200万手机实时摄像（可语音控制）",
    detail: "★京东快递、效率直达、有速度更有温度\n★30天 免费试玩，免费退换\n★免费补发破损配件\n★一键返航，智能悬浮，操作简单， 礼盒包装\n★评论晒图再奖10元",
    price: "￥279.00",
    "p_url": "https://img14.360buyimg.com/n1/jfs/t15676/31/2665945985/255498/7cb1c33d/5abafeb7Na46dd29b.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22ea90e290c1b88f3ec0c"),
    category: "无人机",
    name: "特洛（Tello） 无人机 遥控飞机 益智无人机 小型迷你 高清航拍无人机",
    detail: "【直降80！】6月1日白条6期免息！DJI大疆飞控技术，英特尔高性能处理器618直降高至900》",
    price: "￥619.00",
    "p_url": "https://img10.360buyimg.com/n1/jfs/t1/77378/34/855/112654/5cf100d8E20a66971/5d5db0c90a14cf0f.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22eaf0e290c1b88f3ec0d"),
    category: "无人机",
    name: "大疆（DJI） 【保价6.18】无人机御2 Mavic Pro 2无人机zoom 遥控航拍自拍 【专业版】御Mavic 2主机——标配",
    detail: "【当天发货】【顺丰/京东快递】【专业一对一教学】【六期免息】【Mavic2配件】点击前往",
    price: "￥9488.00",
    "p_url": "https://img10.360buyimg.com/n1/jfs/t1/55328/13/1121/238987/5cee2c38E4727f68c/429bede4f9b63530.png"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22eb70e290c1b88f3ec0e"),
    category: "无人机",
    name: "DJI 大疆 无人机 “御”Mavic 2 变焦版 新一代便携可折叠无人机",
    detail: "【专业版现货抢购，单机降400配件包套装降600！】6月1日当天前500名购买送束口袋，6期免息，每个账号限购1台抢购专业版》",
    price: "￥7288.00",
    "p_url": "https://img11.360buyimg.com/n1/jfs/t1/45082/25/1362/104616/5cf0ff84Eae4a91a2/f87f528fd4c05466.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22ebf0e290c1b88f3ec0f"),
    category: "无人机",
    name: "宝贝星（BBS） 遥控飞机大型耐摔四轴飞行器无人机航拍高清战斗航模直升儿童玩具 35CM定制升级定高版黑色【无摄像头】",
    detail: "★京东快递、效率直达、有速度更有温度\n★30天 免费试玩，免费退换\n★免费补发破损配件\n★一键返航，智能悬浮，操作简单， 礼盒包装\n★评论晒图再奖10元",
    price: "￥148.00",
    "p_url": "https://img12.360buyimg.com/n1/jfs/t16354/319/2629331414/226107/77a25381/5abafe89Nf771fcc4.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22ec60e290c1b88f3ec10"),
    category: "无人机",
    name: "活石(LIVING STONES)  折叠无人机高清航拍飞行器遥控飞机儿童航模玩具男 六一儿童节礼物 720p高清航拍【两块机身电池+配件包+终身保修】",
    detail: "★京东配送，闪电发货\n★便携折叠，一键起飞\n★赠送运费险，免费试玩，免费退换\n★智能定高，炫彩灯光，120度高清广角拍摄",
    price: "￥298.00",
    "p_url": "https://img14.360buyimg.com/n1/jfs/t30754/328/1624143772/125308/483eb8f0/5ce63178N85e79f7d.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22ecd0e290c1b88f3ec11"),
    category: "无人机",
    name: "【续航40分钟】遥控飞机大型耐摔四轴飞行器无人机航拍高清战斗航模直升机儿童男孩玩具 (黑)智能定高航拍版-200W像素【终身维修】",
    detail: "*京东配送，闪电发货，效率直达！*智能悬浮，操作简单，礼盒包装！*赠运费险，破损免配件费补发，售后无忧！戳进选购更多精选玩具",
    price: "￥218.00",
    "p_url": "https://img10.360buyimg.com/n1/jfs/t1/3959/14/10008/165409/5bc99d0aE41d2a2be/44172ff34970d502.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22ed40e290c1b88f3ec12"),
    category: "无人机",
    name: "光流定位悬停【单电22分钟】遥控飞机无人机航拍飞行器高清专业航拍器直升飞机玩具航模折叠定高四轴飞行器 500万广角实时航拍 一电送一电+VR眼镜+收纳袋",
    detail: "6月1号抢神券199-100\\299-150仅限一天。售后无忧：90天免费换新，30天无理由退换货。6月1号抢玩具神券199-100\\299-150，进入抢券！",
    price: "￥388.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t1/17664/40/7878/99363/5c70fe83Eb133de41/46368b82f644137c.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22edb0e290c1b88f3ec13"),
    category: "无人机",
    name: "SYMA司马无人机航拍高清遥控飞机航模四轴飞行器大型电动玩具wifi图传飞碟男孩玩具礼物X5SW",
    detail: "【六一儿童节】大牌玩具送礼必备，热销产品部分低至5折，更有精选商品满199减60，满299减100，满399减150，详情请点击》",
    price: "￥399.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t18685/358/870819043/196862/b09caa7f/5aaf4e59Nb13c6e59.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22ee10e290c1b88f3ec14"),
    category: "无人机",
    name: "大疆 【直降120】特洛tello无人机智能航拍掌上飞行器 DJI技术益智编程玩具遥控飞机不限禁 特洛tello 土豪版（京东仓发货）",
    detail: "【京东本地仓当天发货】大疆技术飞控、英特尔芯片、500万像素、益智编程、质保一年、新手入门航拍无人机，点这里！新手入门航拍无人机，点这里！",
    price: "￥1059.00",
    "p_url": "https://img11.360buyimg.com/n1/jfs/t1/77736/35/687/290369/5cee868bE998eca7d/7f799a673b00e982.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22ee90e290c1b88f3ec15"),
    category: "无人机",
    name: "Holy STONE专业级航拍无人机HS700 大型遥控飞机无刷电机四轴飞行器直升机GPS定位巡航航模双电版 黑色赠背包",
    detail: "【六一儿童节】大牌玩具送礼必备，热销产品部分低至5折，更有精选商品满199减60，满299减100，满399减150，详情请点击》",
    price: "￥1699.00",
    "p_url": "https://img12.360buyimg.com/n1/jfs/t1/42890/36/4050/55485/5cd100c3Ed65505c0/b32439633e414d6e.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22ef00e290c1b88f3ec16"),
    category: "无人机",
    name: "鹰影（YIN）【GPS定位】无人机航拍飞行器遥控飞机一键返航智能跟随高清拍照四轴飞行器男孩玩具航模 【黑色】1080p高清航拍+5G实时图传300米",
    detail: "【1】六一大促，领券减80；【2】GPS定位，一键返航；【3】5G图传300米，1080p高清；【4】赠送原装收纳包+遥控器电池",
    price: "￥699.00",
    "p_url": "https://img14.360buyimg.com/n1/jfs/t28819/36/1606313725/125106/701b3355/5ce6458eN8e8b85af.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22ef70e290c1b88f3ec17"),
    category: "无人机",
    name: "Holy STONE美国专业级HS100定高广角航拍无人机GPS遥控飞机智能拍摄四轴飞行器 小4K双电黑40分钟（1080P）5G信号",
    detail: "【京东仓直发，为您快速送达商品】\n【终身维修服务，赠运费险，晒视频更有好礼回馈】\n【超距/低电自动返航，GPS精准定位，超清画质400米图传】",
    price: "￥1038.00",
    "p_url": "https://img11.360buyimg.com/n1/jfs/t1/9181/15/13870/111333/5c4bc5c6E66b161b6/79ab496e12f8e59b.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22efc0e290c1b88f3ec18"),
    category: "无人机",
    name: "特洛（Tello）益智无人机 遥控飞机 小型迷你航拍无人机 畅飞套装",
    detail: "【直降120！】6月1日白条6期免息！DJI大疆飞控技术，英特尔高性能处理器618直降高至900》",
    price: "￥879.00",
    "p_url": "https://img14.360buyimg.com/n1/jfs/t1/56784/17/1340/121474/5cf100f2Eaa50c645/0d64ae9cf4878081.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22f020e290c1b88f3ec19"),
    category: "无人机",
    name: "小米（MI） 遥控小飞机米兔航拍无人机高清拍照定高四轴飞行器男女孩蓝牙遥控飞机玩具礼物 米兔遥控小飞机",
    detail: "【618开门红】【0元免费拿】\n【京东好店】甄选更严格 选购更简单！\n【官方认证】小米官方授权！【点击直达】",
    price: "￥375.00",
    "p_url": "https://img10.360buyimg.com/n1/jfs/t10948/361/2949680454/79126/61528aa5/5cdbe705N69f73873.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22f070e290c1b88f3ec1a"),
    category: "无人机",
    name: "【抖音玩具】无人机手势遥控飞机男孩玩具ufo感应飞行器自动避障航模四轴定高电动玩具悬浮飞碟男孩礼物 双电池版【手表控制器+充电套装+水滴遥控器】",
    detail: "【京东618大活动】爆款送礼必备。酷炫，彩盒包装，保价618买贵退差价，抖音同款，正品保证！夜航灯，定高悬浮，自动避障碍感应，孩子轻松上手。【四电池套餐推荐】",
    price: "￥138.00",
    "p_url": "https://img10.360buyimg.com/n1/jfs/t1/83182/23/259/101481/5ce78bbaEa0779d48/c2587270c1d566f6.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22f0f0e290c1b88f3ec1b"),
    category: "无人机",
    name: "瑞可（RAKE）智能跟随GPS卫星定位折叠无人机超清航拍四轴飞行器专业摄像遥控飞机航模 四电80分钟+1080P+黑色300米5G实时图传",
    detail: "【618年中大促限时优惠每满200减30上不封顶】售后无忧30天免费试玩，配件破损免费补发终身维护无刷专业4K版点击",
    price: "￥1089.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t1/40469/17/5488/126255/5ceeae1fE538580d4/d0ea43cda8ac7b62.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22f140e290c1b88f3ec1c"),
    category: "无人机",
    name: "【续航40分钟】遥控飞机大型耐摔四轴飞行器无人机航拍高清战斗航模直升机儿童男孩玩具 (白)智能定高基础版-无摄像头【终身维修】",
    detail: "*京东配送，闪电发货，效率直达！*智能悬浮，操作简单，礼盒包装！*赠运费险，破损免配件费补发，售后无忧！戳进选购更多精选玩具",
    price: "￥139.00",
    "p_url": "https://img14.360buyimg.com/n1/jfs/t1/298/21/10276/102064/5bc99d87E16f2a607/5c3071a8b4c68c9f.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22f1a0e290c1b88f3ec1d"),
    category: "无人机",
    name: "畅飞套装 特洛Tello大疆飞控无人机航拍遥控飞机儿童玩具男孩迷你四轴飞行器新年礼物",
    detail: "【六一儿童节】大牌玩具送礼必备，热销产品部分低至5折，更有精选商品满199减60，满299减100，满399减150，详情请点击》",
    price: "￥879.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t1/19650/30/10343/166309/5c861cc5E39e6c5c5/0c30a22a818e0ece.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22f230e290c1b88f3ec1e"),
    category: "无人机",
    name: "DJI 大疆 无人机 晓Spark 掌上智能无人机 高清航拍 自拍神器 全能套装 （白色）",
    detail: "【掌上无人机】手势控制，1200万像素，一键短片，享白条6期免息618直降高至900》",
    price: "￥3999.00",
    "p_url": "https://img13.360buyimg.com/n1/s450x450_jfs/t5800/269/3194853837/78064/e6c79488/5937c3e9N839fcece.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22f2a0e290c1b88f3ec1f"),
    category: "无人机",
    name: "星域传奇【续航50分钟】遥控飞机大型耐摔四轴飞行器无人机航拍高清战斗航模直升机儿童男孩玩具 [黑]智能定高电调航拍版-300W像素（终身维修）",
    detail: "【30天免费试玩，免费退换】免费补发破损配件。一键返航，智能定高，操作简单，附带教学视频。",
    price: "￥268.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t1/27344/14/13033/601755/5c9cd2d8E00eedbc0/70c8ab6722e15a86.png"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22f2f0e290c1b88f3ec20"),
    category: "无人机",
    name: "【定高续航40分钟】遥控飞机大型耐摔四轴飞行器无人机航拍高清战斗航模直升机儿童男孩玩具六一儿童节礼物 33CM定高无摄像头（两电飞40分钟+终身保修）",
    detail: "【促销直降】数量有限赶紧抢购！\n1、操作简单，易上手；2、智能定高悬浮、3D翻滚；3、2.4G远距离操控、20分钟长续航；4、七天无理由退换；",
    price: "￥178.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t29950/229/1529515366/104351/aa5e5c22/5ce39ea6N2f65992f.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22f370e290c1b88f3ec21"),
    category: "无人机",
    name: "DJI 【直降800】大疆无人机御mavic2专业版pro便携可折叠4K高清航拍飞行器变焦zoom 御Mavic 2专业版—全能套装",
    detail: "",
    price: "￥",
    "p_url": "https://img14.360buyimg.com/n1/jfs/t1/67062/29/695/103273/5ceeb1ceE041894d9/ea7b3b9c92e2951f.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22f3c0e290c1b88f3ec22"),
    category: "无人机",
    name: "DJI 大疆 无人机 “御”Mavic 2 专用配件 全能配件包",
    detail: "【搭配主机购买优惠200元！】新一代可折叠航拍旗舰机，Mavic2全能配件包，比单独购买更实惠购买主机配件包套装》",
    price: "￥2399.00",
    "p_url": "https://img12.360buyimg.com/n1/s450x450_jfs/t24166/144/2391398860/96258/cefb3aa1/5b7ebd60N9d0d51a6.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22f420e290c1b88f3ec23"),
    category: "无人机",
    name: "【续航40分钟】遥控飞机大型耐摔四轴飞行器无人机航拍高清战斗航模直升机儿童男孩玩具 (白)智能定高航拍版-200W像素【终身维修】",
    detail: "*京东配送，闪电发货，效率直达！*智能悬浮，操作简单，礼盒包装！*赠运费险，破损免配件费补发，售后无忧！戳进选购更多精选玩具",
    price: "￥228.00",
    "p_url": "https://img11.360buyimg.com/n1/jfs/t1/2040/35/9815/134756/5bc99dadE3ea2eef2/431c288e1317689b.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22f480e290c1b88f3ec24"),
    category: "无人机",
    name: "微羽 手表感应飞行器抖音网红手势控制无人机智能四轴防摔UFO定高感应避让 黄色-【手表操控+智能感应+悬浮定高】 标配 附加两块电池",
    detail: "高速遥控攀爬越野车，合金车身四轮驱动。男孩玩具车优选推荐，请猛戳男孩玩具车优选推荐，请猛戳",
    price: "￥158.00",
    "p_url": "https://img14.360buyimg.com/n1/jfs/t1/30179/14/12140/388980/5cb6ca1aE321bae30/25b05305b19d0297.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22f4d0e290c1b88f3ec25"),
    category: "无人机",
    name: "【智能跟随、手势拍照、续航50分钟】YIN 光流无人机航拍四轴飞行器高清航拍折叠遥控飞机儿童玩具 （黑色2块电池1080P）光流+VR眼镜+收纳包",
    detail: "✅【优惠促销，下单立减50元】 \n✅光流定高悬停 \n✅智能跟随，手势拍照 \n✅赠送VR眼镜+收纳包+原装模块化电池一块",
    price: "￥398.00",
    "p_url": "https://img10.360buyimg.com/n1/jfs/t1/77521/9/159/343052/5ce3e3eaE877cefd4/777a01808374a814.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22f520e290c1b88f3ec26"),
    category: "无人机",
    name: "裕诚 无人机航拍飞行器高清成人专业超长续航户外大型实时传输4K摄像GPS智能四轴遥控定高无人飞机 星耀黑 裸机无人机",
    detail: "买家收到商品以后，请你按照说明书上的指示操作无人机，如有疑问第一时间联系客服，申请技术帮助",
    price: "￥149.00",
    "p_url": "https://img10.360buyimg.com/n1/jfs/t1/65920/23/629/87302/5cee1523Eb9f17430/34a1b34659c18d0b.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22f580e290c1b88f3ec27"),
    category: "无人机",
    name: "诺巴曼X6W折叠大型36CM专业高清无人机航拍器儿童遥控飞机玩具无人飞机航拍无人机四轴飞行器 【推荐】三电套装：60分钟飞行+200万航拍",
    detail: "",
    price: "￥358.00",
    "p_url": "https://img10.360buyimg.com/n1/jfs/t1/16912/32/7641/132274/5c6d1379Eddf6ca63/61587504039c846f.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22f5e0e290c1b88f3ec28"),
    category: "无人机",
    name: "【抖音玩具】无人机手势遥控飞机男孩玩具ufo感应飞行器自动避障航模四轴定高电动玩具悬浮飞碟男孩礼物 手势控制无人机【手表控制器+充电套装+水滴遥控器】",
    detail: "【京东618大活动】爆款送礼必备。酷炫，彩盒包装，保价618买贵退差价，抖音同款，正品保证！夜航灯，定高悬浮，自动避障碍感应，孩子轻松上手。【四电池套餐推荐】",
    price: "￥129.00",
    "p_url": "https://img12.360buyimg.com/n1/jfs/t1/36519/1/9591/194538/5cd3d567E2553f32e/33791a2d6ce7f0d3.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22f660e290c1b88f3ec29"),
    category: "无人机",
    name: "Dwi 【耐摔保护圈】便携迷你无人机手机遥控飞机高清航拍摇控直升机四轴飞行器航模男孩儿童玩具 白色-纸盒包装-无定高-无航拍",
    detail: "【独特圆形保护圈】弹性耐摔撞！\n定高、便携、航拍，多款可选！\n赠运费险，品牌承诺，终身维修！",
    price: "￥79.00",
    "p_url": "https://img12.360buyimg.com/n1/jfs/t21616/207/1514586727/381939/96815e94/5b2afb22N91f860c7.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22f6c0e290c1b88f3ec2a"),
    category: "无人机",
    name: "特洛（Tello）大疆飞控无人机航拍遥控飞机儿童玩具男孩迷你四轴飞行器新年礼物",
    detail: "【六一儿童节】大牌玩具送礼必备，热销产品部分低至5折，更有精选商品满199减60，满299减100，满399减150，详情请点击》",
    price: "￥619.00",
    "p_url": "https://img14.360buyimg.com/n1/jfs/t1/18653/35/10308/171111/5c861b78E26167dca/3b310eab51e5c29b.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22f720e290c1b88f3ec2b"),
    category: "无人机",
    name: "【双GPS】续航40分钟折叠无人机1080P专业高清航拍遥控飞机中小型飞行器耐摔电动航模玩具 尊贵黑1080P航拍版【续航40分钟】",
    detail: "下单赠送专用手提包一个、无人机电池一块、保护罩一套，享受90天免费换新机一次，终身保修售后服务",
    price: "￥795.00",
    "p_url": "https://img12.360buyimg.com/n1/jfs/t1/44015/22/4762/125796/5cdccb1eE8a232b9f/9cc9d694b9ce8c86.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22f7a0e290c1b88f3ec2c"),
    category: "无人机",
    name: "Holy STONE专业级无人机HS700航拍遥控飞机5G无刷电机高清四轴飞行器大型直升机GPS巡航成人航模型双电版",
    detail: "【六一儿童节】大牌玩具送礼必备，热销产品部分低至5折，更有精选商品满199减60，满299减100，满399减150，详情请点击》",
    price: "￥1999.00",
    "p_url": "https://img10.360buyimg.com/n1/jfs/t1/4834/34/5215/176236/5b9f1c8bEfd395e9f/df783a036bcb2259.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22f800e290c1b88f3ec2d"),
    category: "无人机",
    name: "感应飞行器体感无人机手势遥控 ufo飞机四轴智能悬浮",
    detail: "-京东物流发货--京东物流发货--京东物流发货-电池链接请点击这里！详情联系在线客服",
    price: "￥138.00",
    "p_url": "https://img11.360buyimg.com/n1/jfs/t1/31859/34/11287/252454/5cb4286dE6573f94a/335e0859e0a3a486.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22f880e290c1b88f3ec2e"),
    category: "无人机",
    name: "小黑侠 Hover Camera 跟拍折叠无人机豪华版双电套装 智能低空近景4K高清摄像飞行相机",
    detail: "【京东自营 白条6期免息】安全便携 一键放飞 空中摘取 智能跟拍 ”专属于你的跟拍摄影师”",
    price: "￥2499.00",
    "p_url": "https://img11.360buyimg.com/n1/s450x450_jfs/t6019/347/4415889689/254371/7763c0d9/59632d33N1ace3770.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22f8e0e290c1b88f3ec2f"),
    category: "无人机",
    name: "【畅玩60分钟】无人机电动遥控飞机大型耐摔四轴飞行器高清航拍战斗航模儿童玩具男孩礼物 黑色智能定高【三电畅玩60分钟-终身维修】",
    detail: "【配送】全国京东配送到家，服务好，配送快，更省心\n【功能】一键起飞降落，智能定高飞行，操作简单，易上手\n【保障】配件破损免费补发，30天玩坏换新，晒图奖励10元",
    price: "￥199.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t1/72306/36/877/146175/5cf196b4Eb3e3b5aa/a1c5e4b235ab90f5.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22f970e290c1b88f3ec30"),
    category: "无人机",
    name: "【隔日达】双模长续航广角航拍智能无人机GPS遥控飞机 4小K高清800W1080专业拍摄级四轴飞行器 无人机一套1电（8枫叶8护罩4脚架）京自营发货",
    detail: "京东仓发货隔日达或两天内达长续航高清广角摇控像头",
    price: "￥588.00",
    "p_url": "https://img12.360buyimg.com/n1/jfs/t1/759/10/15374/134874/5bdd71f5E241b6229/3c8f1c368f369bcc.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22f9c0e290c1b88f3ec31"),
    category: "无人机",
    name: "【续航40分钟】智想无人机折叠遥控飞机高清航拍飞机儿童节礼物 男孩耐摔四轴飞行器 蓝色定高版【双电40分钟 终身维修】",
    detail: "*新款折叠飞机，方便携带，双电可玩40分钟\n*支持30天保价，可免费补发一次配件，终身免维修费\n*新品福利，晒图5张或晒视频找客服领10元奖励",
    price: "￥165.00",
    "p_url": "https://img12.360buyimg.com/n1/jfs/t1/42994/13/5323/188039/5ceca46bE7d64593d/c0cf41a0d3823bd7.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22fa20e290c1b88f3ec32"),
    category: "无人机",
    name: "寻夏（FSum） 手控遥控UFO双感应飞行器悬浮无人机儿童六一玩具四轴迷你自动避障无人机 一箱十台",
    detail: "",
    price: "￥999.00",
    "p_url": "https://img14.360buyimg.com/n1/jfs/t1/69213/2/104/145597/5ce21d99E613fef11/91157738ffcf0bc1.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22fa80e290c1b88f3ec33"),
    category: "无人机",
    name: "大疆（DJI） 【直降800】DJI大疆无人机 御Mavic AIR全景智能折叠飞行器4K高清三向 Mavic Air 单机白",
    detail: "【当天发货】【一对一教学】【顺丰直达】【6期免息】御Mavic2带屏升级版火爆销售中",
    price: "￥4199.00",
    "p_url": "https://img14.360buyimg.com/n1/jfs/t1/72305/38/660/104542/5cee35eeEe75534a5/1138eead84804747.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22fae0e290c1b88f3ec34"),
    category: "无人机",
    name: "优迪新品i31（可当迷你风扇）智能感应可360旋转抛飞悬停避障四轴飞行器儿童遥控飞机玩具无人机航模 感应飞行器（浅绿）",
    detail: "迷你四轴飞行器（可当迷你风扇）手感飞行、手抛飞行、智能悬浮、360旋转、2.4Ghz遥控技术、低电量警报、自动避障放碰撞",
    price: "￥99.00",
    "p_url": "https://img12.360buyimg.com/n1/jfs/t1/34849/36/5766/205515/5cc084eaEe0bcce5b/1329ad5f0603a1cf.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22fb40e290c1b88f3ec35"),
    category: "无人机",
    name: "众力 专业超长续航无人机航拍高清4K双GPS定位智能返航遥控飞机航模 双电续航60分钟 【无刷】黑色1080P双GPS1000米巡航",
    detail: "【4K超清电调摄像头】【低电量返航】【超距离返航】【一键返航】【赠送专用单肩包】【终身保修】",
    price: "￥1169.00",
    "p_url": "https://img14.360buyimg.com/n1/jfs/t1/44324/22/1460/148583/5cc683b1Ea5cec84d/7e5a043d1725416d.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22fb90e290c1b88f3ec36"),
    category: "无人机",
    name: "诺巴曼折叠大型39CM（智能光流定高）X9专业高清无人机航拍器儿童遥控飞机玩具航模四轴飞行器 三电套装（飞60分钟）-光流定高-200万航拍版",
    detail: "【航拍版：光流定位定高、200W超清航拍】单电池飞20分钟、智能气压定高、一起起飞/降落、一键返航、360特技翻滚、航线飞行、双遥控模式、重力感应",
    price: "￥368.00",
    "p_url": "https://img10.360buyimg.com/n1/jfs/t1/30153/34/12974/189832/5cb85964Eba509d03/5833ce28f5ab8959.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22fbe0e290c1b88f3ec37"),
    category: "无人机",
    name: "DJI 大疆 无人机 御Mavic Air 便携可折叠 4K超清航拍 旅行无人机 全能套装 （曜石黑）",
    detail: "【直降800！】6月1日当天前500名购买送束口袋（赠完即止，以页面为准），6期免息；4K三轴云台相机618直降高至900》",
    price: "￥5599.00",
    "p_url": "https://img10.360buyimg.com/n1/jfs/t1/60910/29/915/130947/5cf149efE1178aaba/e210d981d0cdd609.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22fc40e290c1b88f3ec38"),
    category: "无人机",
    name: "【顺丰发货】瑞可（RAKE）无刷电机折叠无人机4K高清航拍智能便携双GPS遥控飞机长续航四轴飞行器 1080P超清5G实时图传（两电约56分钟续航）",
    detail: "【618年中大促限时优惠每满200减30上不封顶】【无刷，手势拍照、航行规划、定点环绕GPS智能返航】新手专用请点击",
    price: "￥1689.00",
    "p_url": "https://img12.360buyimg.com/n1/jfs/t1/40081/34/1871/99937/5cbe9d60Eeeef2753/12efda7bd756cc14.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22fca0e290c1b88f3ec39"),
    category: "无人机",
    name: "JJR/C智能200万航拍（单电飞25分钟）黑色大型耐摔专业高清无人机航拍器儿童遥控飞机玩具航模四轴飞行器",
    detail: "【六一儿童节】大牌玩具送礼必备，热销产品部分低至5折，更有精选商品满199减60，满299减100，满399减150，详情请点击》",
    price: "￥299.00",
    "p_url": "https://img10.360buyimg.com/n1/jfs/t1/18524/4/1905/241527/5c171d76E6ed53226/ee6fc61331b79377.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22fe30e290c1b88f3ec3a"),
    category: "乐器",
    name: "海之韵 八孔工艺埙 陶埙 黑陶古埙乐器【鹿晗同款】送内部教材书",
    detail: "",
    price: "￥29.90",
    "p_url": "https://img10.360buyimg.com/n1/jfs/t1/25853/21/5922/159630/5c455839E47d557b3/5e3ac2263696aa3a.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22fe90e290c1b88f3ec3b"),
    category: "乐器",
    name: "天鹅SWAN 24孔复音教学口琴C调（音位标注）经典黑",
    detail: "京东自营，618开门红全店每满400减50，上不封顶，库存有限，先到先得",
    price: "￥49.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t18646/135/2540301574/213497/64f1f907/5afc0015Nb0ce16e9.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22fef0e290c1b88f3ec3c"),
    category: "乐器",
    name: "NALU尤克里里23寸初学者入门夏威夷小吉他乐器ukulele",
    detail: "【六一开门红】全场爆款闪购直降，更有大牌乐器每满400减50，库存有限，不要错过~猛戳抢惊喜",
    price: "￥329.00",
    "p_url": "https://img10.360buyimg.com/n1/jfs/t1/22480/18/6367/281774/5c52b398E98009543/e05a3de7c89bb2b9.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22ff60e290c1b88f3ec3d"),
    category: "乐器",
    name: "雅马哈（YAMAHA）印尼进口民谣吉他 雅马哈吉他 初学入门41英寸男女木吉它jita乐器 热销爆款F310",
    detail: "【618疯狂购强势登场,6.1号开始全场闪购直降】经典雅马哈吉他F310到手价仅799元!!!点击查看,自营乐器主会场",
    price: "￥799.00",
    "p_url": "https://img10.360buyimg.com/n1/jfs/t1/46173/12/1324/196742/5cf0c5efEa734b55d/5d2447c4b58cf7c8.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf22ffc0e290c1b88f3ec3e"),
    category: "乐器",
    name: "相思鸟(LOVEBIRD) 八孔陶埙 初学者入门练习梨形埙 民族吹奏乐器工艺埙  黑色 龙 XS3101",
    detail: "相思鸟乐器618年中大促6.1-6.5每满400减50部分商品参加活动专场，点击进入",
    price: "￥49.00",
    "p_url": "https://img14.360buyimg.com/n1/jfs/t14947/71/1671812701/50575/91f13c92/5a55e4edN6f71dae7.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf230030e290c1b88f3ec3f"),
    category: "乐器",
    name: "相思鸟(LOVEBIRD) 葫芦丝乐器 白铜胶木三音C调葫芦丝 民族管弦乐器初学 XS1004",
    detail: "相思鸟乐器618年中大促6.1-6.5每满400减50部分商品参加活动专场，点击进入",
    price: "￥65.00",
    "p_url": "https://img11.360buyimg.com/n1/jfs/t3103/276/1186343166/138741/f7131f13/57c7f752Nd1f6f1a2.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf230090e290c1b88f3ec40"),
    category: "乐器",
    name: "安德鲁（ANDREW） 拇指琴卡林巴琴拇指钢琴17音手指琴乐器 17音- 桃花心单板-咖啡太阳                安德鲁（ANDREW） 拇指琴卡林巴琴拇指钢琴17音非洲手指琴乐器桃花心木单板mbira 17音- 一鹿有你 桃花心单板",
    detail: "【618全球年中大促】6.1同价618-提前购\n【官方专卖】【赠送全套原装配件】抖音网红爆款！【京东配送】【实木单板】【视频教学】【赠送配件】",
    price: "￥98.00",
    "p_url": "https://img10.360buyimg.com/n1/jfs/t1/35850/2/1470/127031/5cb2d0aaEe0bdc945/43cf4db076ab982f.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf2300f0e290c1b88f3ec41"),
    category: "乐器",
    name: "GECKO壁虎拇指琴便携卡林巴琴17音非洲手指琴拇指琴乐器kalimba相思木",
    detail: "【6.18全球年中购物节】6.1号全场闪购，价格直降，叠加满减，点击进入，6.18自营乐器精选会场！",
    price: "￥358.00",
    "p_url": "https://img10.360buyimg.com/n1/jfs/t1/1923/17/4103/415646/5b9b6e6cE9f641673/5a9d6cba4bf389dd.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf230160e290c1b88f3ec42"),
    category: "乐器",
    name: "诺艾（iword）88键手卷钢琴便携电子琴专业级硅胶钢琴键盘加厚S3088",
    detail: "【六一开门红】全场爆款闪购直降，更有大牌乐器每满400减50，库存有限，不要错过~猛戳抢惊喜",
    price: "￥368.00",
    "p_url": "https://img11.360buyimg.com/n1/jfs/t20872/175/2586544796/66259/fec6b5d0/5b5e7bdbN58c88528.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf2301d0e290c1b88f3ec43"),
    category: "乐器",
    name: "美科（MEIRKERGR）MK-8618 61键多功能智能教学电子琴儿童初学乐器 连接手机pad带琴架",
    detail: "此商品将于2019-06-04,00点结束闪购特卖，乐器六一狂欢购",
    price: "￥218.00",
    "p_url": "https://img11.360buyimg.com/n1/jfs/t23305/249/793519251/379290/77009732/5b4466f3N8a9e821a.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf230230e290c1b88f3ec44"),
    category: "乐器",
    name: "相思鸟(LOVEBIRD) 笛子单插黄铜笛 F调笛子苦竹笛横笛学生笛 民族管弦乐器初学 XS1001",
    detail: "相思鸟乐器618年中大促6.1-6.5每满400减50部分商品参加活动专场，点击进入",
    price: "￥38.00",
    "p_url": "https://img14.360buyimg.com/n1/jfs/t13372/16/1654913632/144681/6959af7c/5a24e602N7ab2e90f.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf230290e290c1b88f3ec45"),
    category: "乐器",
    name: "寻音 古筝初学者入门演奏古筝 考试级古筝民族乐器 空谷幽兰（送架子+凳子）",
    detail: "保价618，买贵随时退差价，顺丰送货到家，支持当面验货，专业老师指导，包教会包调音，终身维修服务，售后保障齐全",
    price: "￥1198.00",
    "p_url": "https://img11.360buyimg.com/n1/jfs/t1/81924/17/919/165195/5cf16ad8Ef32bb73f/4f5781665832eec6.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf2302f0e290c1b88f3ec46"),
    category: "乐器",
    name: "美德威 降E调中音萨克斯 萨克斯乐器 500系列萨克斯风管乐 终身维修 标准版 MAS-500",
    detail: "~首页抢卷~6月1号-3号闪购美德威年中大促惊喜来袭，领券+直降+满减，更有更多赠品咨询客服-立即购买",
    price: "￥1980.00",
    "p_url": "https://img10.360buyimg.com/n1/jfs/t1/42251/39/470/111123/5cc276a4Ebef2f9a9/d3b79124fead39d6.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf230350e290c1b88f3ec47"),
    category: "乐器",
    name: "悟音 紫竹笛子一节横笛乐器竹笛（无油漆）  演奏初学习用横笛民族乐器 F调+教材书",
    detail: "赠送：笛子书本教材，笛膜，笛膜胶，中国结/流苏，绒布袋。演奏学习都适用",
    price: "￥98.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t1372/73/442029208/242313/302e58fa/55852079N54436f03.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf2303a0e290c1b88f3ec48"),
    category: "乐器",
    name: "美科（MEIRKERGR）MK-288粉色智能版+琴架 61键多功能教学电子琴儿童初学乐器 连接话筒耳机手机平板带琴架",
    detail: "此商品将于2019-06-04,00点结束闪购特卖，乐器六一狂欢购",
    price: "￥308.00",
    "p_url": "https://img11.360buyimg.com/n1/jfs/t1/22127/16/6028/196487/5c458a95Ecae6856c/d6f9bb783a015ce2.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf230400e290c1b88f3ec49"),
    category: "乐器",
    name: "卢森（Rosen） 卢森Rosen民谣吉他初学者乐器单板吉他40寸41寸G12 41寸 蓝色【单板】",
    detail: "6月1日到手价338仅限1号当天，限时特惠！店铺无门槛20元优惠券仅限1号当天，欲购从速",
    price: "￥388.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t1/70473/13/827/92456/5cf0dc5aEd38c010d/b0d6142b788ee679.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf230470e290c1b88f3ec4a"),
    category: "乐器",
    name: "安德鲁（ANDREW） 民谣吉他单板38寸41寸初学者新手入门木吉它jita乐器 38寸青崖白鹿+全套配件",
    detail: "【618全球年中大促】6.1同价618-提前购\n【官方专卖】【赠送全套原装配件】领券下单更优惠",
    price: "￥168.00",
    "p_url": "https://img11.360buyimg.com/n1/jfs/t29299/255/417276168/230256/816889c3/5bf299faNca2103ad.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf2304e0e290c1b88f3ec4b"),
    category: "乐器",
    name: "相思鸟 纯手工实木小提琴 初学者4/4 新手入门考级练习 自然风干西洋乐器 赠松香随行三角硬盒XS3001",
    detail: "相思鸟乐器618年中大促6.1-6.5每满400减50部分商品参加活动专场，点击进入",
    price: "￥388.00",
    "p_url": "https://img12.360buyimg.com/n1/jfs/t3535/237/2273738517/184627/c748e009/5848fb9dNd78b9dd1.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf230530e290c1b88f3ec4c"),
    category: "乐器",
    name: "相思鸟(LOVEBIRD) 葫芦丝乐器 三音C调 双白铜紫竹梅花扣葫芦丝 民族管弦乐器初学 XS2036",
    detail: "相思鸟乐器618年中大促6.1-6.5每满400减50部分商品参加活动专场，点击进入",
    price: "￥149.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t4537/349/2172717492/314075/5cb78b04/58ec7d37N582e0425.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf230580e290c1b88f3ec4d"),
    category: "乐器",
    name: "美音天使 降E调中音萨克斯乐器风管正品成人初学者专业演奏考级款 正规配置 M22经典考级款-金色【双筋配置+送12礼】",
    detail: "",
    price: "￥1330.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t1/77834/13/889/150112/5cf1f545E6ad9c444/ed34370973635e83.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf2305e0e290c1b88f3ec4e"),
    category: "乐器",
    name: "正音堂 二胡乐器手工专业演奏非洲小叶紫檀 （京东闪购）素杆",
    detail: "【618提前购,6.1.-6.3.闪购直降】爆款正音堂精品紫檀二胡到手价仅1380元!!!",
    price: "￥1380.00",
    "p_url": "https://img10.360buyimg.com/n1/jfs/t1/66923/26/831/128175/5cf08602Ea102d433/9389a3899a41cb6e.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf230640e290c1b88f3ec4f"),
    category: "乐器",
    name: "红棉（Kapok） MV182 考级初学者手工儿童成年人小提琴 民谣实木演奏红棉乐器 MV-182-1/8枣红色 115身高+",
    detail: "【60年老品牌】【下单即送全套配件】【5400支】品质保证入门好货精选支持7天退换",
    price: "￥436.00",
    "p_url": "https://img14.360buyimg.com/n1/jfs/t1/54336/32/613/134763/5ce37db1E7b8c5360/9b899fd118eef768.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf2306a0e290c1b88f3ec50"),
    category: "乐器",
    name: "天鹅口琴儿童学生初学者高级成人男女24孔专业复音c调演奏比赛口风琴乐器 宝石蓝【教学视频+初学礼包】",
    detail: "【官方旗舰店】天鹅乐器，35年专注，专业，乐器有价，音乐无价，价保30天，买贵退差价||更多品质好物&gt;&gt;",
    price: "￥55.00",
    "p_url": "https://img11.360buyimg.com/n1/jfs/t1/77424/31/829/114092/5cf10db7E1df81fec/34ba9c41d5ea3909.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf230700e290c1b88f3ec51"),
    category: "乐器",
    name: "竹霖生三节精制洞箫 专业舞台表演演奏萧 G调",
    detail: "此商品将于2019-06-04,00点结束闪购特卖，乐器六一狂欢购",
    price: "￥133.00",
    "p_url": "https://img10.360buyimg.com/n1/jfs/t5689/346/7392183222/431837/66053174/59707fd6N2d97116e.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf2307c0e290c1b88f3ec52"),
    category: "乐器",
    name: "The ONE智能电子琴 成年人儿童初学乐器 61键电子钢琴 时尚黑",
    detail: "元气电子琴6.1-6.3开门红秒杀中\n劲省200到手￥1499，送547元三重礼\n更多活动请戳",
    price: "￥1599.00",
    "p_url": "https://img14.360buyimg.com/n1/jfs/t1/54195/7/1322/244154/5cf0fdd9E59e08736/2d6c417e3930bd02.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf230830e290c1b88f3ec53"),
    category: "乐器",
    name: "TNG 台湾 故乡的原风景陶笛熏烧12孔AC中音C调千年风雅AF调初学乐器高音SC洋陶埙 【初学推荐】磨砂AC中音+12大豪礼",
    detail: "正品授权TNG陶笛！音色通透圆润，领券下单更优惠",
    price: "￥168.00",
    "p_url": "https://img12.360buyimg.com/n1/jfs/t1/34784/39/3661/110345/5cb94062E0dc19a66/9b0c1ad721992343.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf230890e290c1b88f3ec54"),
    category: "乐器",
    name: "雅马哈（YAMAHA）F600 民谣吉他 雅马哈吉他 初学入门吉他男女木吉它jita乐器 木吉他 圆角 41英寸",
    detail: "",
    price: "￥",
    "p_url": "https://img14.360buyimg.com/n1/jfs/t1/43509/17/5528/209935/5cf0c618E692486db/5ef1f92d50b2ad01.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf2308e0e290c1b88f3ec55"),
    category: "乐器",
    name: "奈乐 伏羲式古琴 老杉木仲尼式初学演奏古琴生漆手工精斫初学入门练习琴考级演奏古琴 老杉木伏羲式",
    detail: "保价618，买贵随时退差价，顺丰送货到家，支持当面验货，专业老师指导，包教会包调音，终身维修服务，售后保障齐全",
    price: "￥1098.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t1/76036/28/875/139965/5cf16b5eE79b46a7e/239589ee98a52d0d.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf230970e290c1b88f3ec56"),
    category: "乐器",
    name: "美音天使 【8大礼品】非洲鼓8寸10寸12寸 儿童初学者丽江演奏山羊皮手鼓乐器 标10寸原木色【6岁以上及成人使用】",
    detail: "买就送8大礼品,需要备注的图案，留言给客服就可以了哦，团购咨询客服有优惠哦",
    price: "￥178.00",
    "p_url": "https://img14.360buyimg.com/n1/jfs/t1/79174/6/759/165312/5cefc88dE80edb166/66f373ca762f13a5.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf2309d0e290c1b88f3ec57"),
    category: "乐器",
    name: "The ONE 智能灯条 智能钢琴电钢琴88键 陪练考级评测纠错 成年人儿童自学陪练",
    detail: "黑科技赋活传统钢琴，让学琴更高效\n88键标准钢琴全适配；蓝牙智能连接\nAI十级评测陪练私教四大福利，起床就想练琴，更多活动",
    price: "￥2680.00",
    "p_url": "https://img14.360buyimg.com/n1/jfs/t1/29898/7/5072/165806/5c384bebE9268e9eb/0a09f5c31c511cb3.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf230a30e290c1b88f3ec58"),
    category: "乐器",
    name: "天鹅24孔复音c调口琴高级成人儿童初学者男女日本进口音簧专业演奏口风琴乐器 亮光黑【送自学礼包+视频教程】",
    detail: "【专业演奏款·日本进口音簧】【赠六大配件+名师教程，支持货到付款】点击选购更多品质好物&gt;&gt;",
    price: "￥109.00",
    "p_url": "https://img10.360buyimg.com/n1/jfs/t1/45676/30/1353/152653/5cf13c92E0984be0d/0eff1fef7a2ff765.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf230a90e290c1b88f3ec59"),
    category: "乐器",
    name: "敦煌 古筝694DQ双鹤朝阳 红木演奏 694DQ出厂配置+套餐一",
    detail: "领券立减！敦煌精品！上海民族乐器一厂！领券下单立减！点击领取优惠券！",
    price: "￥3380.00",
    "p_url": "https://img10.360buyimg.com/n1/jfs/t1/40132/8/7764/504829/5cf0f3a5E6fd0c8ec/7ee4bbb6f87514c5.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf230af0e290c1b88f3ec5a"),
    category: "乐器",
    name: "populele智能尤克里里饼干款23英寸学生成人乌克丽丽初学者小吉他儿童ukulele（附赠琴包）",
    detail: "京东自营，618开门红全店每满400减50，上不封顶，库存有限，先到先得",
    price: "￥489.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t1/45547/16/1322/186728/5cf11544Ef88ffedd/72494fd0e9384b51.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf230b60e290c1b88f3ec5b"),
    category: "乐器",
    name: "相思鸟(LOVEBIRD) 红花梨二胡 初学练习 纯手工蟒皮六方二胡 民族乐器 松香随行布面硬盒 XS8001",
    detail: "相思鸟乐器618年中大促6.1-6.5每满400减50部分商品参加活动专场，点击进入",
    price: "￥328.00",
    "p_url": "https://img14.360buyimg.com/n1/jfs/t26068/231/1274921046/424909/5c31e8f6/5b90f6d2N2785d39f.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf230bc0e290c1b88f3ec5c"),
    category: "乐器",
    name: "FLOFAIR LQ-01成人 初学 柳琴 乐器 红色 硬木 材质 金属品 梧桐木 面板 骨花 练习 红色硬木背板音窗款柳琴LQ-01",
    detail: "厂家直销发货前老师选琴测试音质",
    price: "￥750.00",
    "p_url": "https://img12.360buyimg.com/n1/jfs/t24889/249/2034034429/238737/3b145f34/5bc1a337N4bf9b533.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf230c20e290c1b88f3ec5d"),
    category: "乐器",
    name: "柏姆斯BROMS 中音萨克斯BAS-212 降e调 萨克斯乐器风管 初学 演奏通用 终身维修 香槟色 BAS-212",
    detail: "【新品上市】柏姆斯BROMS-专业萨克斯品牌，全新入驻京东！全场满3000减200，满6000减500，满10000减1000！带你和枯燥SAYGOODBYE",
    price: "￥4390.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t1/34224/23/11103/174404/5cef9ad6E8b11ac03/b593c38fa550702d.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf230c80e290c1b88f3ec5e"),
    category: "乐器",
    name: "美德威MIDWAY  古筝初学演奏考级款 实木黑檀木刻字款 天涯觅知音系列带赠品包 基础款-高山流水+支架+赠课程",
    detail: "7天无理由退货，15天无理由换货，全国保修一年，终身维修~立即抢购",
    price: "￥899.00",
    "p_url": "https://img14.360buyimg.com/n1/jfs/t30451/54/1609027818/402024/a56c2925/5ce66ef7Nd8f77004.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf230cf0e290c1b88f3ec5f"),
    category: "乐器",
    name: "天鹅口琴24孔高级成人儿童学生初学者男女专业复音c调演奏比赛口风琴乐器 24孔c调复音（星光黑）",
    detail: "此商品将于2019-06-04,00点结束闪购特卖，乐器六一狂欢购",
    price: "￥85.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t1/53512/28/1361/141800/5cf10baeE3422e255/756c6ada0619d410.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf230d40e290c1b88f3ec60"),
    category: "乐器",
    name: "Chard 吉他初学者民谣吉他学生新手入门实木吉他jita40寸41寸 4140 云杉木41寸",
    detail: "1白条6期免息2.送全套大礼包3.7天无理由退换货（不影响二次销售）4.联系客服有优惠",
    price: "￥768.00",
    "p_url": "https://img10.360buyimg.com/n1/jfs/t1/36462/32/10610/68559/5ce7d557E2aeda2b8/528be91520237879.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf230db0e290c1b88f3ec61"),
    category: "乐器",
    name: "威柏尔 VIBRA降e中音萨克斯风管乐器 567G升级版-金铜弯脖",
    detail: "一分价钱两种体验，567G双弯脖配置券后到手价仅需2380元！",
    price: "￥2680.00",
    "p_url": "https://img14.360buyimg.com/n1/jfs/t29506/30/1374170265/107540/25d91ee3/5cde1a9eN70905d3e.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf230e00e290c1b88f3ec62"),
    category: "乐器",
    name: "萨伽SAGA 单板民谣吉他面单木吉他41寸40寸吉它初学者乐器 云杉原木色 SF700C 41寸缺角",
    detail: "【618提前购，申请保价30天，当天退差价】【官方授权正品保障】【购物无忧七天无理由退换货】【免费刻字】【优质书本教材配套海量教学视频8G在线观看】",
    price: "￥990.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t1/37199/18/1847/68235/5cb57d7dE10f0ed7e/dfbd79df337f50c8.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf230e60e290c1b88f3ec63"),
    category: "乐器",
    name: "美音天使 手卷钢琴88键便携式专业版加厚版电子琴成人折叠儿童键盘琴乐器 88键尊享版 纯洁白魔音喇叭+精美礼包+可充电",
    detail: "质保六年送12样礼品充电宝供电买贵包退",
    price: "￥333.00",
    "p_url": "https://img11.360buyimg.com/n1/jfs/t1/63274/34/849/130153/5cf14b78E00f2e80e/5b9d33d3c45beb93.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf230eb0e290c1b88f3ec64"),
    category: "乐器",
    name: "敦煌牌古筝696D/696m/694dq双鹤朝阳练习初学者入门演奏古筝 696d原厂标配+A套餐",
    detail: "【顺丰快递】【敦煌古筝官方授权，正品保证，假一罚百，原包装未开封发货】",
    price: "￥2149.00",
    "p_url": "https://img14.360buyimg.com/n1/jfs/t11377/317/2929386373/202503/4f10509c/5cdd1122N1696d29f.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf230f20e290c1b88f3ec65"),
    category: "乐器",
    name: "MOSEN莫森MUC800ukulele尤克里里乌克丽丽23英寸全桃花芯小吉他弹唱",
    detail: "【全场闪购】莫森吉他尤克里里特价疯抢【再来一波】618提前购\n【京东自营】京配次日达【免费教程】AI音乐学院30天VIP课程!\n点击进入活动专场!",
    price: "￥238.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t1/56981/21/1277/210701/5cf097a6E8e05bb39/17520a4336042fc8.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf230f90e290c1b88f3ec66"),
    category: "乐器",
    name: "红木二胡乐器初学者演奏考级成人儿童通用民族乐器胡琴厂家直销 红木骨雕款+全套赠品",
    detail: "手工打造，好木好音色，用的放心用的住礼品全",
    price: "￥286.00",
    "p_url": "https://img10.360buyimg.com/n1/jfs/t1/72369/1/807/172147/5cefc54fE35374f33/e98d30e19a07c2ba.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf230ff0e290c1b88f3ec67"),
    category: "乐器",
    name: "空灵鼓色空鼓钢舌鼓手碟忘忧鼓成人儿童初学者玄空鼓打击乐器无忧鼓8寸/10寸/12寸大全音舌色空鼓 10寸11音 颜色备注",
    detail: "不满意包退京东品质售后无忧",
    price: "￥465.00",
    "p_url": "https://img10.360buyimg.com/n1/jfs/t1/37531/26/5474/201018/5cc2a39bEe8b7a250/410ea6cb54365709.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf231050e290c1b88f3ec68"),
    category: "乐器",
    name: "乐都城敦煌牌 敦煌古筝696D 694DQ 689E双鹤朝阳非檀木普及古筝初学者入门专业学习考级演奏 694KK蕉窗夜语原厂配置",
    detail: "【敦煌正品】+【视频验货发货】+【顺丰到家】+【乐都城视频展示】",
    price: "￥4299.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t1/59760/36/874/204248/5cf1eb21E6820d7a7/b0cf17e48eed611e.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf2310b0e290c1b88f3ec69"),
    category: "乐器",
    name: "卡西欧（CASIO）电子琴 CTK-1500 儿童青少年初学入门级61键  智能舞曲模式三步教学",
    detail: "6月1日0:00-3日23:59，卡西欧开门红闪购特惠，直降50元，到手价低至538\n1、舞曲模式，劲爆音效组合2、晒单可领50元E卡",
    price: "￥538.00",
    "p_url": "https://img12.360buyimg.com/n1/jfs/t1/66618/39/718/175353/5cefa39dE973d3186/b0e641519d440cf2.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf231110e290c1b88f3ec6a"),
    category: "乐器",
    name: "T9民谣吉他38寸新手初学者入门练习琴guitar木吉它乐器jita 38寸黑色",
    detail: "【618全球年中大促提前放价保价30天】【京东超市当日达】【赠送全套原装配件】【进阶单板一步到位】",
    price: "￥188.00",
    "p_url": "https://img10.360buyimg.com/n1/jfs/t1/26949/37/4207/185590/5c2f6409Eb81f9e2d/cf2f0e4c13e82441.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf231170e290c1b88f3ec6b"),
    category: "乐器",
    name: "【原作版】舒怀乐器陈情笛子 学生初学入门竹笛鬼笛 吹奏魔曲 可个性刻字 经典原作款E调+10赠品（默认刻陈情+问灵诗",
    detail: "》》》个性刻字，拥有属于你的专有鬼笛陈情\n》》》不刷评不刷量，感谢每位客户，热心真实好评\n》》》专属品牌，送运费险，品质保障，买的放心，用的开心",
    price: "￥39.00",
    "p_url": "https://img12.360buyimg.com/n1/jfs/t1/25555/13/4469/448212/5c32cec4Ef4034f46/fddc17b6ef510b21.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf231320e290c1b88f3ec6c"),
    category: "钟表",
    name: "康巴丝（COMPAS）挂钟 创意时尚时钟 静音石英客厅卧室简约钟c2855 黑色",
    detail: "【6月1号超级秒杀日】时尚闹挂价保618！部分产品2件8折/3件7折！自动智能对时静音电波钟99元秒杀！更多爆款，超级秒杀",
    price: "￥32.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t748/318/473774427/97646/1765a5a8/54b62e35N70310d2a.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf231380e290c1b88f3ec6d"),
    category: "钟表",
    name: "北极星 挂钟时尚创意客厅钟表 静音简约石英钟11英寸 2842 黑色",
    detail: "【6月1号超级秒杀日】时尚闹挂保价618！部分热销品2件8折/3件7折！更多爆款,超级秒杀",
    price: "￥36.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t1/20274/3/5555/164712/5c405320E69ec93d3/0bf59a8675f54964.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf231400e290c1b88f3ec6e"),
    category: "钟表",
    name: "北极星（POLARIS）挂钟 15英寸静音客厅现代万年历钟表创意石英钟简约挂表日历时钟6816金色",
    detail: "【6月1号超级秒杀日】时尚闹挂保价618！部分热销品2件8折/3件7折！更多爆款,超级秒杀",
    price: "￥138.00",
    "p_url": "https://img12.360buyimg.com/n1/jfs/t1/18587/21/6664/226281/5c626c98E68b58438/ec3ee8ba13f6cbd3.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf231450e290c1b88f3ec6f"),
    category: "钟表",
    name: "天王星（Telesonic）挂钟 客厅创意钟表现代简约静音钟时尚个性3D立体时钟卧室石英钟圆形挂表S9651-2黑色",
    detail: "【6月1号超级秒杀日】时尚闹挂价保618！部分商品两件8折三件7折！更多爆款，超级秒杀",
    price: "￥79.00",
    "p_url": "https://img12.360buyimg.com/n1/jfs/t1/40441/26/3153/268355/5cc40866Ee653db87/7c579a6761db6bcd.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf2314b0e290c1b88f3ec70"),
    category: "钟表",
    name: "北极星（POLARIS）挂钟15英寸静音客厅万年历钟表现代石英钟时尚日历时钟创意挂表2811 木纹日历款",
    detail: "【6月1号超级秒杀日】时尚闹挂保价618！部分热销品2件8折/3件7折！更多爆款,超级秒杀",
    price: "￥109.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t1/7090/17/7886/268332/5c07a292Efbd03c34/d1633fb2173c5ed9.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf231510e290c1b88f3ec71"),
    category: "钟表",
    name: "康巴丝（Compas）挂钟时尚卧室客厅办公静音时钟挂表简约创意石英钟表 黑白色2246c",
    detail: "爆款【破损包赔】【京东配送，时效无忧】【送电池挂钩】静音扫描机芯，环保材质，领优惠券+满立减！",
    price: "￥26.00",
    "p_url": "https://img14.360buyimg.com/n1/jfs/t1/33348/40/12707/207316/5cf19260Ee8dcd6ba/82ba39fedd49eed2.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf231570e290c1b88f3ec72"),
    category: "钟表",
    name: "康巴丝(Compas)挂钟16英寸万年历温湿度钟表创意客厅静音时钟简约挂表方形日历石英钟C2983闪金",
    detail: "【6月1号超级秒杀日】时尚闹挂价保618！部分产品2件8折/3件7折！自动智能对时静音电波钟99元秒杀！更多爆款，超级秒杀",
    price: "￥109.00",
    "p_url": "https://img11.360buyimg.com/n1/jfs/t25870/283/725661644/436879/b2fc76ce/5b7a5cafN92132100.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf2315d0e290c1b88f3ec73"),
    category: "钟表",
    name: "天王星（Telesonic） 挂钟 创意时尚简约钟表客厅时钟 静音挂钟 Q3644-3 黑色",
    detail: "【6月1号超级秒杀日】时尚闹挂价保618！部分商品两件8折三件7折！更多爆款，超级秒杀",
    price: "￥79.00",
    "p_url": "https://img12.360buyimg.com/n1/jfs/t1/24139/4/12663/410556/5c9a1952Eba6a1b6e/9904d506b8e27c82.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf231630e290c1b88f3ec74"),
    category: "钟表",
    name: "北极星（POLARIS）挂钟静音客厅钟表简约创意时钟时尚石英钟17英寸现代办公室挂表 2833 木纹色",
    detail: "【6月1号超级秒杀日】时尚闹挂保价618！部分热销品2件8折/3件7折！更多爆款,超级秒杀",
    price: "￥71.00",
    "p_url": "https://img12.360buyimg.com/n1/jfs/t4189/326/3384610986/117868/d871fb0e/58e0591fN1364f1e2.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf231690e290c1b88f3ec75"),
    category: "钟表",
    name: "康巴丝（Compas）挂钟创意静音客厅钟表时尚简约时钟卧室挂表电子石英钟C2998咖木",
    detail: "【6月1号超级秒杀日】时尚闹挂价保618！部分产品2件8折/3件7折！自动智能对时静音电波钟99元秒杀！更多爆款，超级秒杀",
    price: "￥19.90",
    "p_url": "https://img14.360buyimg.com/n1/jfs/t5965/322/7908624572/271696/7766bdcc/5983df5fN40ae1657.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf2316e0e290c1b88f3ec76"),
    category: "钟表",
    name: "北极星（POLARIS）挂钟 客厅静音简约创意石英钟时尚卧室钟表12英寸现代田园时钟欧式挂表6817香槟金",
    detail: "【6月1号超级秒杀日】时尚闹挂保价618！部分热销品2件8折/3件7折！更多爆款,超级秒杀",
    price: "￥63.00",
    "p_url": "https://img12.360buyimg.com/n1/jfs/t1/36008/25/6118/222102/5cc2a036Ef8b85559/288d67ffc6c6f481.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf231770e290c1b88f3ec77"),
    category: "钟表",
    name: "美世达（MEISD）钟表挂钟客厅艺术表挂墙现代简约时钟静音创意家用个性石英钟 黑色小号：30*40cm",
    detail: "",
    price: "￥138.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t1/14471/19/10433/184868/5c87b3daE9d92bc52/958898bf3b22e018.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf2317d0e290c1b88f3ec78"),
    category: "钟表",
    name: "挂钟静音客厅万年历钟表现代石英钟时尚日历时钟欧式创意挂表13英寸 金色日历液晶款",
    detail: "【6月1号超级秒杀日】【疯狂两小时嗨爆全场】时尚闹挂价保618!领取满300享9折券！更多爆款，超级秒杀。",
    price: "￥88.00",
    "p_url": "https://img10.360buyimg.com/n1/jfs/t10762/22/3192475399/96683/c8493c5a/5ce4e852Ne23e9f44.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf231830e290c1b88f3ec79"),
    category: "钟表",
    name: "康巴丝（Compas）挂钟 创意时尚时钟 静音日历石英钟客厅卧室挂表c2855Y 黑色",
    detail: "【6月1号超级秒杀日】时尚闹挂价保618！部分产品2件8折/3件7折！自动智能对时静音电波钟99元秒杀！更多爆款，超级秒杀",
    price: "￥49.00",
    "p_url": "https://img10.360buyimg.com/n1/jfs/t23881/36/2168963113/292827/ba67b2b0/5b7643baN363fcaa1.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf231890e290c1b88f3ec7a"),
    category: "钟表",
    name: "汉时(Hense)欧式实木挂钟客厅静音时尚创意时钟简约现代田园挂表装饰挂墙石英钟表HW18棕色",
    detail: "【6月1号超级秒杀日】时尚闹挂价保618！全场低至49元！",
    price: "￥137.00",
    "p_url": "https://img11.360buyimg.com/n1/jfs/t11746/227/2678944225/429238/afc92492/5a1cb888N00aca866.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf231900e290c1b88f3ec7b"),
    category: "钟表",
    name: "康巴丝（COMPAS）座钟客厅静音非挂钟简约台钟创意石英钟时尚万年历时钟现代日历温度床头钟2991 咖木色",
    detail: "【6月1号超级秒杀日】时尚闹挂价保618！部分产品2件8折/3件7折！自动智能对时静音电波钟99元秒杀！更多爆款，超级秒杀",
    price: "￥59.00",
    "p_url": "https://img14.360buyimg.com/n1/jfs/t3307/236/1024655804/91165/ea605182/57c4f4afN4bcca1ab.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf231950e290c1b88f3ec7c"),
    category: "钟表",
    name: "北极星（POLARIS）挂钟圆形静音客厅钟表万年历现代石英钟时尚日历时钟创意挂表13英寸6810金色日历款",
    detail: "【6月1号超级秒杀日】时尚闹挂保价618！部分热销品2件8折/3件7折！更多爆款,超级秒杀",
    price: "￥98.00",
    "p_url": "https://img10.360buyimg.com/n1/jfs/t1/7056/26/4833/474452/5bdc2e03Efa5b5976/6f5001bb296f91ef.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf2319b0e290c1b88f3ec7d"),
    category: "钟表",
    name: "天王星（Telesonic）挂钟 客厅卧室时钟3D立体创意简约静音扫描石英钟表S9956-1深蓝",
    detail: "【6月1号超级秒杀日】时尚闹挂价保618！部分商品两件8折三件7折！更多爆款，超级秒杀",
    price: "￥71.00",
    "p_url": "https://img14.360buyimg.com/n1/jfs/t2692/356/3591828272/248297/a481da9e/5795b23fN8cd5f93a.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf231a00e290c1b88f3ec7e"),
    category: "钟表",
    name: "美世达（MEISD）挂钟 客厅创意钟表挂墙个性时尚时钟大气静音家用石英钟挂表卧室装饰墙现代简约艺术钟 大号:40*50cm",
    detail: "",
    price: "￥118.00",
    "p_url": "https://img11.360buyimg.com/n1/jfs/t1/63619/2/729/161841/5cef531bE76839fcc/a7c4d88a56fbcfa4.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf231a60e290c1b88f3ec7f"),
    category: "钟表",
    name: "Timess挂钟 客厅简约静音个性现代创意实木石英12英寸挂表 T7111-1A4",
    detail: "【6月1号超级秒杀日】时尚闹挂价保618！部分商品两件8折三件7折！更多爆款，超级秒杀",
    price: "￥115.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t15223/106/1177471246/59591/c4a660af/5a4723dfN2b72fcaa.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf231ac0e290c1b88f3ec80"),
    category: "钟表",
    name: "康巴丝（Compas）挂钟欧式田园仿古静音客厅石英钟表摇摆钟创意时尚时钟挂表C2955白金",
    detail: "【6月1号超级秒杀日】时尚闹挂价保618！部分产品2件8折/3件7折！自动智能对时静音电波钟99元秒杀！更多爆款，超级秒杀",
    price: "￥79.00",
    "p_url": "https://img12.360buyimg.com/n1/jfs/t4702/177/4239379673/250511/29a91fcb/590c27c4N5d1454fe.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf231b30e290c1b88f3ec81"),
    category: "钟表",
    name: "摩门（Momen）挂钟 客厅静音钟表创欧式意个性时钟银河石英钟14英寸 HJ0021 金属黑",
    detail: "【6月1号超级秒杀日】时尚闹挂价保618！6月1日部分热销品2件8折/3件7折更多爆款",
    price: "￥126.00",
    "p_url": "https://img10.360buyimg.com/n1/jfs/t21673/142/1117727378/89986/957b2e8c/5b20d26cNae047650.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf231b90e290c1b88f3ec82"),
    category: "钟表",
    name: "康巴丝（COMPAS）挂钟静音现代时尚日历时钟表创意挂表电子石英钟 C2979黑金",
    detail: "【6月1号超级秒杀日】时尚闹挂价保618！部分产品2件8折/3件7折！自动智能对时静音电波钟99元秒杀！更多爆款，超级秒杀",
    price: "￥69.00",
    "p_url": "https://img12.360buyimg.com/n1/jfs/t2296/298/1915850051/239978/116e7d99/56e7c5faN5978dfb7.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf231be0e290c1b88f3ec83"),
    category: "钟表",
    name: "北极星（POLARIS）挂钟 现代北欧美式极简主义静音客厅卧室办公简约时钟石英钟挂表12英寸BW12011",
    detail: "【6月1号超级秒杀日】时尚闹挂保价618！部分热销品2件8折/3件7折！更多爆款,超级秒杀",
    price: "￥139.00",
    "p_url": "https://img14.360buyimg.com/n1/jfs/t1/4130/33/8459/118628/5ba99a86Eb7d63660/e95f3303d77907fe.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf231c40e290c1b88f3ec84"),
    category: "钟表",
    name: "康巴丝(Compas)时尚创意客厅钟表挂钟静音简约时钟2559 粉猫",
    detail: "【6月1号超级秒杀日】时尚闹挂价保618！部分产品2件8折/3件7折！自动智能对时静音电波钟99元秒杀！更多爆款，超级秒杀",
    price: "￥45.00",
    "p_url": "https://img10.360buyimg.com/n1/jfs/t973/47/853619590/94968/54a4a030/5555856fN3cfc70ec.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf231cb0e290c1b88f3ec85"),
    category: "钟表",
    name: "摩门 (Momen) 挂钟 创意客厅卧室静音12英寸大挂钟挂表时钟卡通长颈鹿儿童可爱插画石英钟HE0163黑色",
    detail: "【6月1号超级秒杀日】时尚闹挂价保618！6月1日部分热销品2件8折/3件7折更多爆款",
    price: "￥87.00",
    "p_url": "https://img10.360buyimg.com/n1/jfs/t22132/142/1163735087/78345/6e372a2/5b20d29dN1d25b900.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf231d00e290c1b88f3ec86"),
    category: "钟表",
    name: "美世达（MEISD）挂钟 客厅创意diy免打孔欧式钟表挂墙现代时尚家用简约石英钟卧室个性静音装饰时钟 小号黑色:68*60CM",
    detail: "",
    price: "￥89.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t1/67654/8/740/113580/5cef4d7aEcfae329d/1d05056a640df7fb.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf231d60e290c1b88f3ec87"),
    category: "钟表",
    name: "北极星 挂钟14英寸万年历温湿度计静音创意客厅日历挂表钟表 2858 木双液晶",
    detail: "【6月1号超级秒杀日】时尚闹挂保价618！部分热销品2件8折/3件7折！更多爆款,超级秒杀",
    price: "￥116.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t21997/335/2051419735/205288/a20e5258/5b45b1bdNe4bb2919.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf231dc0e290c1b88f3ec88"),
    category: "钟表",
    name: "精工（Seiko）时尚创意欧式静音客厅居家挂钟挂表",
    detail: "",
    price: "￥355.00",
    "p_url": "https://img11.360buyimg.com/n1/jfs/t1/48198/23/1325/137160/5cf14067Ea9a9d2f0/72dc155d7c0ccc13.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf231e20e290c1b88f3ec89"),
    category: "钟表",
    name: "久久达 现代中式钟表挂钟客厅简约壁钟 欧式田园创意电子时钟静音挂表卧室石英钟 JT1558金色",
    detail: "【大促提前购】跨店3件7折/每满99减15上不封顶，叠加店铺优惠券，凑单更优惠，全屋配制，给您一个梦想的家，低至29元秒杀低至29元秒杀",
    price: "￥108.00",
    "p_url": "https://img11.360buyimg.com/n1/jfs/t1/75101/23/851/241175/5cf150dcEde337383/80cfe14a1890717e.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf231e90e290c1b88f3ec8a"),
    category: "钟表",
    name: "美世达挂钟 客厅钟表夜光创意时钟家用挂表现代简约石英钟 静音 大号74*34cm赠送立体英文墙贴",
    detail: "美世达品牌，质量保证，15天无条件退换货，质保十年！",
    price: "￥208.00",
    "p_url": "https://img10.360buyimg.com/n1/jfs/t1/5764/29/11980/446637/5bd186b0E332f053a/fda4855fe22f5984.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf231f10e290c1b88f3ec8b"),
    category: "钟表",
    name: "Timess挂钟 客厅创意静音现代简约石英钟12英寸9658-8灰色",
    detail: "【6月1号超级秒杀日】时尚闹挂价保618！部分商品两件8折三件7折！更多爆款，超级秒杀",
    price: "￥71.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t1/28063/9/11195/378003/5c988fd7Eca035787/232504199e229a4b.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf231f80e290c1b88f3ec8c"),
    category: "钟表",
    name: "摩门（momen)挂钟 创意LCD多功能钟时尚客厅现代时钟个性卧室壁钟挂表石英钟LCD17",
    detail: "【6月1号超级秒杀日】时尚闹挂价保618！6月1日部分热销品2件8折/3件7折更多爆款",
    price: "￥137.00",
    "p_url": "https://img12.360buyimg.com/n1/jfs/t5182/22/519599433/84732/7189fe37/59015e68N1f06b9ce.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf231fe0e290c1b88f3ec8d"),
    category: "钟表",
    name: "康巴丝（Compas）闹钟创意静音懒人机械打铃钟表家居小闹钟个性闹表学生儿童卧室床头时钟DL001黑金",
    detail: "【6月1号超级秒杀日】时尚闹挂价保618！部分产品2件8折/3件7折！自动智能对时静音电波钟99元秒杀！更多爆款，超级秒杀",
    price: "￥35.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t6385/364/1452293480/298881/55a844d9/5951b3f1N12840730.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf232030e290c1b88f3ec8e"),
    category: "钟表",
    name: "客厅超静音太阳牌机芯挂钟 家用创意石英钟表挂墙欧式个性餐厅时钟现代简约美式数字电子钟装饰挂壁钟 9英寸",
    detail: "【年中钜惠】家装软饰品类狂欢，跨店2件8折、3件7折，领券满199减100！更多预售商品等你来抢！",
    price: "￥59.90",
    "p_url": "https://img10.360buyimg.com/n1/jfs/t1/22889/20/13825/236116/5ca1fdbbE71262d50/4cc8a940371bf63e.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf232090e290c1b88f3ec8f"),
    category: "钟表",
    name: "美世达（MEISD）挂钟 客厅个性钟表卧室创意时尚家用静音表挂墙现代简约石英钟大气装饰艺术时钟 中号:40*40CM送墙贴",
    detail: "选择了“美世达”您得到的不仅仅是时间更是一种服务，一种文化，一种亲和力。",
    price: "￥138.00",
    "p_url": "https://img10.360buyimg.com/n1/jfs/t1/57876/8/1225/144868/5cef4cd5Ecc38186d/e87ac4746c41d566.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf232100e290c1b88f3ec90"),
    category: "钟表",
    name: "康巴丝（Compas）挂钟15英寸静音客厅万年历钟表现代石英钟时尚日历时钟创意挂表3128Y仿木",
    detail: "【6月1号超级秒杀日】时尚闹挂价保618！部分产品2件8折/3件7折！自动智能对时静音电波钟99元秒杀！更多爆款，超级秒杀",
    price: "￥88.00",
    "p_url": "https://img12.360buyimg.com/n1/jfs/t1/43709/17/3554/325228/5ccfa149Eaa2d2ba6/1543c0e3298957fa.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf232160e290c1b88f3ec91"),
    category: "钟表",
    name: "康巴丝（Compas）座钟古典欧式座钟表复古静音客厅装饰台钟创意卧室床头时钟石英钟C3099 古金色",
    detail: "【6月1号超级秒杀日】时尚闹挂价保618！部分产品2件8折/3件7折！自动智能对时静音电波钟99元秒杀！更多爆款，超级秒杀",
    price: "￥59.00",
    "p_url": "https://img11.360buyimg.com/n1/jfs/t8434/327/788275388/259111/49d59710/59ae5302N7eebc6d4.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf2321d0e290c1b88f3ec92"),
    category: "钟表",
    name: "天王星（Telesonic）挂钟 客厅创意钟表现代简约静音钟时尚个性3D立体时钟卧室石英钟圆形挂表Q8722-2黑色",
    detail: "【6月1号超级秒杀日】时尚闹挂价保618！部分商品两件8折三件7折！更多爆款，超级秒杀",
    price: "￥99.00",
    "p_url": "https://img12.360buyimg.com/n1/jfs/t1/35631/21/10481/183211/5ce752e7E56e933a8/519a5cba046cd4de.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf232220e290c1b88f3ec93"),
    category: "钟表",
    name: "佳佰 欧式时尚3D立体数字静音创意个性客厅书房卧室家用时钟挂钟11英寸挂表钟表挂墙计时石英钟FX-5853CC",
    detail: "【6月1日06:00准时开抢】满199减100，限时秒杀仅一天！多功能可升降学习桌套组秒杀仅售1498，送货上门免费安装！(此商品不参加上述活动)",
    price: "￥44.50",
    "p_url": "https://img12.360buyimg.com/n1/jfs/t1/7170/6/15036/183500/5c6bc676E9d5573e6/3dd0c36efe5fad93.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf232290e290c1b88f3ec94"),
    category: "钟表",
    name: "汉时(Hense)欧式船舵挂钟创意静音时钟木质艺术挂表现代壁钟客厅摆钟经典石英钟表HP39棕色",
    detail: "【6月1号超级秒杀日】时尚闹挂价保618！全场低至49元！",
    price: "￥397.00",
    "p_url": "https://img11.360buyimg.com/n1/jfs/t1/42931/24/759/468318/5cc3c07cE6b45cbc3/df6808d078591fb0.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf232310e290c1b88f3ec95"),
    category: "钟表",
    name: "康巴丝(Compas)挂钟16英寸创意静音客厅钟表方形简约时钟居家办公挂表电子石英钟C25241仿木",
    detail: "【6月1号超级秒杀日】时尚闹挂价保618！部分产品2件8折/3件7折！自动智能对时静音电波钟99元秒杀！更多爆款，超级秒杀",
    price: "￥69.00",
    "p_url": "https://img11.360buyimg.com/n1/jfs/t28987/24/1305751878/259855/7ce2a934/5cdd13ebNbe09d8f8.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf232370e290c1b88f3ec96"),
    category: "钟表",
    name: "康巴丝（Compas）闹钟创意静音懒人机械打铃钟表家居小闹钟个性闹表学生儿童卧室床头时钟 黑色",
    detail: "【6月1号超级秒杀日】时尚闹挂价保618！时尚简约挂钟秒杀价低至32元！更多爆款，超级秒杀",
    price: "￥30.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t1/7360/40/14359/103543/5c64cca5E592b2747/6eaa48b15c5812d0.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf2323c0e290c1b88f3ec97"),
    category: "钟表",
    name: "北极星 挂钟19英寸客厅静音时尚简约挂钟日历显示LED 2901石英钟 简约款 红木色",
    detail: "【6月1号超级秒杀日】时尚闹挂保价618！部分热销品2件8折/3件7折！更多爆款,超级秒杀",
    price: "￥98.00",
    "p_url": "https://img10.360buyimg.com/n1/jfs/t1/6629/2/8793/289729/5c123475Ee9b18717/ebbfe99f65d5d970.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf232420e290c1b88f3ec98"),
    category: "钟表",
    name: "摩门（Momen）挂钟 客厅现代卡通时钟卧室静音创意挂表个性热气球钟表12英寸 HE0127 金属白",
    detail: "【6月1号超级秒杀日】时尚闹挂价保618！6月1日部分热销品2件8折/3件7折更多爆款",
    price: "￥97.00",
    "p_url": "https://img11.360buyimg.com/n1/jfs/t20950/60/1125827485/69319/c9bec759/5b20d454N99e05ca5.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf232480e290c1b88f3ec99"),
    category: "钟表",
    name: "美世达 MEISD  钟表客厅挂钟现代创意装饰家用挂表墙静音简约艺术个性石英钟 小号：35*35cm",
    detail: "",
    price: "￥138.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t1/35970/8/610/421703/5cab2aebE21a0f54c/f53731e9324fecb8.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf2324d0e290c1b88f3ec9a"),
    category: "钟表",
    name: "码仕 闹钟儿童创意木头夜光静音电子小闹钟卧室钟表座钟 贪睡懒人智能学生闹铃床头钟棕色沙比利木",
    detail: "【6月1号超级秒杀日】【疯狂2小时嗨爆全场】时尚闹挂价保618!部分商品2件8折3件7折！更多爆款，超级秒杀",
    price: "￥72.00",
    "p_url": "https://img14.360buyimg.com/n1/jfs/t1/68988/2/890/441149/5cf15f4bE97147556/3d570a78a5fde0df.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf232530e290c1b88f3ec9b"),
    category: "钟表",
    name: "北极星（POLARIS）挂钟客厅办公室万年历液晶22英寸时尚创意静音日历挂钟电子石英挂钟 2658T2-2 黑夜光双历",
    detail: "【6月1号超级秒杀日】时尚闹挂保价618！部分热销品2件8折/3件7折！更多爆款,超级秒杀",
    price: "￥168.00",
    "p_url": "https://img14.360buyimg.com/n1/jfs/t22777/297/873601785/136591/2f7e6b2f/5b471baeNe5d8d1d9.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf232590e290c1b88f3ec9c"),
    category: "钟表",
    name: "POWER 霸王实木落地钟客厅座钟欧式中式美式北欧机械坐钟创意立钟现代大气摆钟立式钟表赫姆勒红木时钟 MG2510罗马字钟面红木色",
    detail: "【限时特惠】拍下立减 领券再减 优惠可叠加使用",
    price: "￥3980.00",
    "p_url": "https://img11.360buyimg.com/n1/jfs/t1/20771/19/1059/72262/5c0f2070E916a196d/8cde68b80229327d.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf2325f0e290c1b88f3ec9d"),
    category: "钟表",
    name: "北极星（POLARIS）挂钟欧式客厅静音钟表创意木质石英钟仿古个性挂表田园办公室时钟 HD-6017木纹  16英寸",
    detail: "【6月1号超级秒杀日】时尚闹挂保价618！部分热销品2件8折/3件7折！更多爆款,超级秒杀",
    price: "￥179.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t1/34184/11/2662/285436/5cb7cfb2E5657e6fc/a77a0811f5979157.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf232640e290c1b88f3ec9e"),
    category: "钟表",
    name: "TIMESS 挂钟 客厅装饰画钟表 现代欧式沙发背景墙面三联钟画餐厅挂画挂钟Z1-D（38*38CM）",
    detail: "【6月1号超级秒杀日】时尚闹挂价保618！部分商品两件8折三件7折！更多爆款，超级秒杀",
    price: "￥128.00",
    "p_url": "https://img12.360buyimg.com/n1/jfs/t22387/132/2566376359/146800/25c417e0/5b5bfc39Nd3edc8ad.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf2326b0e290c1b88f3ec9f"),
    category: "钟表",
    name: "美世达（MEISD）复古实木时钟欧式钟表挂钟客厅创意现代简约静音家用时尚个性装饰 S8209实木铜盘数字",
    detail: "质保十年",
    price: "￥338.00",
    "p_url": "https://img11.360buyimg.com/n1/jfs/t1/33860/18/11987/115414/5ce4b196Ecf3cffc8/2f65035a59a614f6.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf232700e290c1b88f3eca0"),
    category: "钟表",
    name: "久久达 钟表LED电子闹钟时钟 夜光 时尚床头钟 学生懒人贪睡静音现代简约小闹钟 9901温度版蓝色白灯",
    detail: "【大促提前购】跨店3件7折/每满99减15上不封顶，叠加店铺优惠券，凑单更优惠，全屋配制，给您一个梦想的家，低至25元秒杀低至25元秒杀",
    price: "￥25.00",
    "p_url": "https://img11.360buyimg.com/n1/jfs/t1/44380/17/5646/217059/5cf156d8E7b3ed281/d93e32c7d62e4198.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf232750e290c1b88f3eca1"),
    category: "钟表",
    name: "美世达（MEISD）欧式挂钟客厅艺术装饰时钟创意大气家用时钟静音钟表 S8128A:32*66cm",
    detail: "",
    price: "￥336.00",
    "p_url": "https://img11.360buyimg.com/n1/jfs/t1/60713/14/596/104685/5cecdf31E33aa1aae/2ee3bc0ff1a96bb3.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf2328c0e290c1b88f3eca2"),
    category: "数码影音",
    name: "飞利浦（PHILIPS）SPA311 音箱电脑音响家用台式机usb多媒体低音炮迷你便携小音箱桌面游戏音响",
    detail: "超10万好评用实力霸榜，开门红狂欢与618同价，超多惊喜嗨购不停，早买早享受，关注店铺有礼哦更多神券领不停",
    price: "￥99.00",
    "p_url": "https://img14.360buyimg.com/n1/s450x450_jfs/t17977/185/824132762/334516/8a0103da/5aaa42bbN47e1ef9f.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf232930e290c1b88f3eca3"),
    category: "数码影音",
    name: "飞利浦（PHILIPS）SPA2100 音箱音响电脑手机多媒体台式机笔记本低音炮音响便携迷你音响",
    detail: "嗨购不停开门红狂欢与618同价，高颜值，真正的便携音箱，随心享受音乐味道！早买早享受，关注店铺有礼哦更多神券领不停",
    price: "￥59.00",
    "p_url": "https://img12.360buyimg.com/n1/s450x450_g9/M03/07/07/rBEHalBZhbsIAAAAAAFohbfWMmEAABaYwCB9LQAAWid263.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf232980e290c1b88f3eca4"),
    category: "数码影音",
    name: "先科（SAST）A7钛黑 蓝牙音箱无线迷你音响便携式插卡户外手机电脑微信收款扩音器收音机低音炮小音箱",
    detail: "6.1日京东自营耳机开门红~大牌耳机爆款直降！更多神券299减100，1999减618等你领！~",
    price: "￥99.00",
    "p_url": "https://img11.360buyimg.com/n1/s450x450_jfs/t25555/38/326517052/234221/32357d29/5b6bf296N2933ae0c.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf2329d0e290c1b88f3eca5"),
    category: "数码影音",
    name: "飞利浦（PHILIPS）SPA20  音箱音响家用电脑台式usb笔记本多媒体手机重低音炮迷你小音箱桌面游戏震撼音响",
    detail: "嗨购不停大牌保障，木质箱体超高性价比桌面音响，开门红狂欢与618同价，早买早享受，关注店铺有礼哦更多神券领不停",
    price: "￥59.00",
    "p_url": "https://img10.360buyimg.com/n1/s450x450_jfs/t21034/259/1462440472/324385/9d7ffd5a/5b2a0e86Nddfe5544.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf232a30e290c1b88f3eca6"),
    category: "数码影音",
    name: "飞利浦（PHILIPS）SPA1312 音箱音响电脑台式低音炮家用多媒体2.1音箱桌面笔记本客厅电视通用超重低音音响",
    detail: "嗨购不停开门红狂欢与618同价，百年品牌匠心之作，震撼低音炮，音质出众，独立线控操作更走心！早买早享受，关注店铺有礼哦更多神券领不停",
    price: "￥119.00",
    "p_url": "https://img14.360buyimg.com/n1/s450x450_jfs/t21625/69/1487584355/282384/ee722de/5b2a1677Nb6ccde73.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf232a80e290c1b88f3eca7"),
    category: "数码影音",
    name: "小米（MI） ai小爱同学音箱mini蓝牙网络音响人工智能闹钟语音遥控wifi小艾迷你便携低音炮 小爱音箱mini",
    detail: "能听会说的人工智能音箱；控制家用电器、闹钟提醒、手机蓝牙播放音乐、小巧便携；小米小爱触屏版音箱点此购",
    price: "￥165.00",
    "p_url": "https://img14.360buyimg.com/n1/jfs/t1/47766/38/1347/166848/5cf14f7aE7f4bbc92/ae80e948cde02d3e.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf232ae0e290c1b88f3eca8"),
    category: "数码影音",
    name: "先科（SAST）N-612黑 无线蓝牙音箱迷你音响便携式插卡手机电脑微信收款扩音器收音机低音炮小音箱",
    detail: "6.1日京东自营耳机开门红~大牌耳机爆款直降！更多神券299减100，1999减618等你领！~",
    price: "￥59.00",
    "p_url": "https://img11.360buyimg.com/n1/s450x450_jfs/t1/3360/5/4502/211243/5b9cb1f8Ea523f2bd/7e871eddaf9ac0a9.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf232b50e290c1b88f3eca9"),
    category: "数码影音",
    name: "索爱（soaiy）S-318 便携式数码扩音器 小蜜蜂大功率教学专用教师导游扩音器 插卡播放器 唱戏机 睿智黑",
    detail: "6.1日京东自营耳机开门红~大牌耳机爆款直降！更多神券299减100，1999减618等你领！~",
    price: "￥79.00",
    "p_url": "https://img12.360buyimg.com/n1/s450x450_jfs/t16405/304/2326630498/207544/8d7d3e89/5aa63a0eNa5e46b10.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf232ba0e290c1b88f3ecaa"),
    category: "数码影音",
    name: "Bonks 笔记本小音响家用台式机电脑电视usb桌面迷你有源音箱手机2.0外接重低音炮喇叭游戏小钢炮 黑色迷你音响",
    detail: "电镀金属质感、声音大低音震、多媒体专业小音响-扩音扬声器、不占桌面",
    price: "￥35.00",
    "p_url": "https://img10.360buyimg.com/n1/jfs/t1/5673/33/2394/167414/5b967a90E23062582/b47b0e26d326dc55.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf232c00e290c1b88f3ecab"),
    category: "数码影音",
    name: "先科（SAST）A66黑 蓝牙无线音箱迷你小音响便携式插卡手机电脑微信收款扩音器家用户外防水低音炮",
    detail: "6.1日京东自营耳机开门红~大牌耳机爆款直降！更多神券299减100，1999减618等你领！~",
    price: "￥129.00",
    "p_url": "https://img12.360buyimg.com/n1/s450x450_jfs/t1/11550/22/5952/271855/5c385aceE7e29ff6d/2357f8f298d7c5e2.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf232c50e290c1b88f3ecac"),
    category: "数码影音",
    name: "飞利浦（PHILIPS）SPA2201 音箱音响家用电脑usb笔记本多媒体手机重低音炮迷你小音箱桌面游戏震撼音响",
    detail: "嗨购不停开门红狂欢与618同价，高端环保材料精细做工，小音箱中的战斗机，悦耳音质值得拥有，早买早享受更多神券领不停",
    price: "￥79.00",
    "p_url": "https://img12.360buyimg.com/n1/s450x450_jfs/t21316/26/1460297329/206617/fa110c38/5b2a0b52N4301587d.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf232ca0e290c1b88f3ecad"),
    category: "数码影音",
    name: "小米（MI） 小爱同学触屏版AI蓝牙音箱无线智能语音闹钟小艾便携迷你wifi家用音响网络播放器低音炮 小米小爱触屏音箱",
    detail: "听音乐、语音遥控家电的智能音箱；闹钟提醒、备忘记录、问路况听新闻；小爱同学音箱HD点此购",
    price: "￥299.00",
    "p_url": "https://img12.360buyimg.com/n1/jfs/t1/74372/18/826/213662/5cf14f6dEe2668abf/92835fd7329d99c3.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf232d00e290c1b88f3ecae"),
    category: "数码影音",
    name: "山水Q3家庭影院2.1音响套装家庭KTV家用环绕组合音响蓝牙电视HIFI音箱低音炮",
    detail: "限时抢购！",
    price: "￥3299.00",
    "p_url": "https://img11.360buyimg.com/n1/jfs/t1/52704/37/1207/118329/5cef81e3E66876050/0936ba57721c99e1.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf232d60e290c1b88f3ecaf"),
    category: "数码影音",
    name: "赛达（SADA） V-193电脑音响台式机重低音家用多媒体低音炮有源有线笔记本长条小蓝牙音箱2.0 黑色(基础版)",
    detail: "【HIFI音质】低音环绕音效，独立调节！\n【独特外形】隐藏式设计，节省桌面空间！\n【售后无忧无忧】赠送运费险，一年以换代修！",
    price: "￥69.00",
    "p_url": "https://img14.360buyimg.com/n1/jfs/t1/14936/1/937/281655/5c0e1f2bEfd713f58/6bf801f22f13d894.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf232dc0e290c1b88f3ecb0"),
    category: "数码影音",
    name: "摩托罗拉（Motorola）VA100小蜜蜂扩音器 教学专用 便携式插卡音响 扩音器喇叭 导游话筒 FM收音机 白色",
    detail: "6.1日京东自营耳机开门红~大牌耳机爆款直降！更多神券299减100，1999减618等你领！~",
    price: "￥169.00",
    "p_url": "https://img10.360buyimg.com/n1/s450x450_jfs/t1/26835/15/10368/149203/5c85de2cEed29e63b/849f42e81c3eed4f.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf232e20e290c1b88f3ecb1"),
    category: "数码影音",
    name: "迪奥特莱斯 升级版大容量电池微信收款语音播报器 收款二维码收钱提示音响无线蓝牙音箱支付收款到账扩音器 新升级版黑色",
    detail: "【清晰播报金额，大声无延迟】【超强待机】【老板不在店，添加店员也能收款播报】",
    price: "￥59.00",
    "p_url": "https://img10.360buyimg.com/n1/s450x450_jfs/t29335/319/1255549060/1004444/310d3836/5cda8960Ncb6620db.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf232e70e290c1b88f3ecb2"),
    category: "数码影音",
    name: "小米（MI） 【小米官方授权店】小爱同学AI音箱mini音箱小米小艾智能蓝牙网络音响wifi 小爱同学（不含底座） 标配",
    detail: "",
    price: "￥269.00",
    "p_url": "https://img14.360buyimg.com/n1/jfs/t30898/274/1202450150/95010/734bedbd/5cd9189bN37516641.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf232ed0e290c1b88f3ecb3"),
    category: "数码影音",
    name: "飞利浦（PHILIPS）SPA2341 音箱音响电脑台式低音炮家用多媒体2.1音箱桌面笔记本客厅电视通用超重低音音响",
    detail: "嗨购不停开门红狂欢与618同价，低音炮中的战斗机，可调重低音，50W大功率颤抖吧桌面，早买早享受更多神券领不停",
    price: "￥209.00",
    "p_url": "https://img14.360buyimg.com/n1/s450x450_jfs/t24499/190/244068954/129557/843ebb2c/5b2a1ad1Nf53fef6f.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf232f20e290c1b88f3ecb4"),
    category: "数码影音",
    name: "飞利浦（PHILIPS） 电脑音响 台式 迷你音响 笔记本低音炮小音响 usb供电多媒体手机木质音箱 SPA20 深色",
    detail: "【5月特惠】晒单有礼！15天价保，买贵退差，一年换新！飞利浦国际大品牌，品质值得信赖！赶快下单吧！",
    price: "￥69.00",
    "p_url": "https://img10.360buyimg.com/n1/s450x450_jfs/t1/29531/30/7498/129444/5c6bc2fbE36f96a3e/e3cf2ce0b3512aaf.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf232f80e290c1b88f3ecb5"),
    category: "数码影音",
    name: "赛达 （SADA）电脑音响多媒体蓝牙音箱 音响低音炮重有源2.1台式喇叭家用桌面插卡迷你小钢炮笔记本 黑色-七彩光-(带蓝牙)",
    detail: "◆◆京东仓直发，急速配送，物流不堵车◆◆\n约2万买家之选，正品质量保证！ \n送运费险，对产品不满意？退货运费我买单！ \n再给您5个下单的理由： \n①【退换无忧】30天无理由退货，1年质保，信心保证 \n②【木质箱体】大气时尚外观，三喇叭组合!3D环绕立体音 \n③【悦耳音质】震撼低音,高清音质！独立高低音调节~ \n④【功能超多】支持电脑,手机,蓝牙,U盘,内存卡播放~ \n⑤【点击跳转】领取5元优惠劵",
    price: "￥98.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t1/75924/33/824/446587/5cf12f7cE4c4ba15a/cde4968a60655161.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf232fe0e290c1b88f3ecb6"),
    category: "数码影音",
    name: "好嘢（Haoyes） 无线蓝牙音箱便携重低音炮台式电脑桌面音响户外迷你插卡手机小钢炮家用 黑色标配",
    detail: "推荐指数：⭐⭐⭐⭐⭐\n⚡【升级版☛☛☛点击抢购】\n⚡【只为音质】木质箱体不失真 三喇叭 震撼蓝牙低音炮\n⚡【下单就送】送遥控器+音频线+充电线+遥控器备用电池\n⚡【京仓配送】京东仓库闪电发货，急速送达\n⚡【质保无忧】送运费险、1年免费换新机一次\n⚡【功能齐全】支持蓝牙、音频线、U盘、内存卡、FM收音",
    price: "￥87.00",
    "p_url": "https://img11.360buyimg.com/n1/jfs/t1/64855/39/874/225090/5cf156f3E37bbeb70/e4ef0812d9aeb4ed.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf233030e290c1b88f3ecb7"),
    category: "数码影音",
    name: "小度智能音箱1S 百度人工AI蓝牙音箱wifi语音遥控器小杜网络迷你音响闹钟低音炮 百度小度智能音箱1S 黑色",
    detail: "是人工智能音箱，也是遥控器；海量资源、语音通话、儿童模式、智能灯带、场景服务、语音留言、暖系闹钟；向往的生活同款小度在家1S触屏音箱点此购",
    price: "￥139.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t1/78843/33/814/187710/5cf14266Efd8c70e9/215b43a4f8b6ebde.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf233080e290c1b88f3ecb8"),
    category: "数码影音",
    name: "飞利浦（PHILIPS）SPA1315 音箱音响电脑台式低音炮家用多媒体2.1音箱桌面笔记本客厅电视通用超重低音音响",
    detail: "嗨购不停开门红狂欢与618同价，时尚设计，音质出众，木质低音炮更强劲！早买早享受更多神券领不停",
    price: "￥129.00",
    "p_url": "https://img10.360buyimg.com/n1/s450x450_jfs/t22384/57/1468501641/221191/46e02567/5b2a1794N8c51be98.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf2330e0e290c1b88f3ecb9"),
    category: "数码影音",
    name: "先科（SAST）A66樱花粉 蓝牙无线音箱迷你小音响便携式插卡手机电脑微信收款扩音器家用户外防水低音炮",
    detail: "6.1日京东自营耳机开门红~大牌耳机爆款直降！更多神券299减100，1999减618等你领！~",
    price: "￥139.00",
    "p_url": "https://img10.360buyimg.com/n1/s450x450_jfs/t11122/95/3233469564/202094/f6447e0c/5ce4befdN73055c9c.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf233140e290c1b88f3ecba"),
    category: "数码影音",
    name: "赛达 SADA 电脑音响蓝牙音箱家用桌面笔记本低音炮USB回音壁长条有源双大喇叭台式机迷你长条小音箱 V196品质黑（俩年质保）",
    detail: "【闪购秒杀限时抢购，同价618】\n【质量保证】30天免费试用，退货运费我买单！\n【震撼低音】重低音双喇叭,自带氛围灯,美观不占空间，更多产品点击~更多产品点击~",
    price: "￥45.00",
    "p_url": "https://img11.360buyimg.com/n1/jfs/t1/36810/18/8715/144051/5ccd2d94E0a2be596/c41cc4a70b5167d2.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf233190e290c1b88f3ecbb"),
    category: "数码影音",
    name: "飞利浦（PHILIPS）SPA36B 音箱音响家用电脑台式usb笔记本多媒体手机重低音炮迷你小音箱桌面游戏震撼音响",
    detail: "嗨购不停开门红狂欢与618同价，无设计不音乐，仰角+线控设计，开阔音场震撼音效，木质箱体新旗舰，早买早享受更多神券领不停",
    price: "￥139.00",
    "p_url": "https://img13.360buyimg.com/n1/s450x450_jfs/t14152/32/1170928979/158468/1a02d1e1/5a1bd6f1N50013df2.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf2331e0e290c1b88f3ecbc"),
    category: "数码影音",
    name: "飞利浦（PHILIPS） SD60 广场舞K歌户外蓝牙音箱 便携式拉杆手提音响 无线麦克风扩音器 SD60 黑色",
    detail: "【同价618，买贵退差】一年换新！飞利浦国际大品牌，品质值得信赖！赶快下单吧！",
    price: "￥899.00",
    "p_url": "https://img14.360buyimg.com/n1/s450x450_jfs/t1/21348/14/9357/334426/5c7df33cE629cb8ca/825e8ad50c2b99eb.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf233260e290c1b88f3ecbd"),
    category: "数码影音",
    name: "CAOKEAH 电脑音响家用桌面音箱笔记本超重低音炮USB回音壁长条有源双大喇叭台式机迷你长条小音箱 Q2 炫酷黑-笔记本台式电脑通用",
    detail: "",
    price: "￥79.00",
    "p_url": "https://img14.360buyimg.com/n1/jfs/t1/18831/32/15210/165002/5cadf91fE8941ed98/8c308d333510168b.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf233320e290c1b88f3ecbe"),
    category: "数码影音",
    name: "海囤全球\n                                Bose SoundLink Micro 无线蓝牙音响扬声器 便携蓝牙音箱防水 午夜蓝",
    detail: "【跨境商品，白条3期免息0首付】小巧玲珑，音质依然出色，让你随时随时享受好音乐！",
    price: "￥ 629.00",
    "p_url": "https:"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf2333c0e290c1b88f3ecbf"),
    category: "数码影音",
    name: "飞利浦（PHILIPS）SD60 户外广场舞拉杆音响便携播放器带无线话筒K歌家用舞台演出蓝牙大功率重低音（黑色）",
    detail: "嗨购不停开门红狂欢与618同价，百年品牌匠心之作，年轻活力都市风户外音箱，品质做工凸显品味，含麦克风一支，早买早享受更多神券领不停",
    price: "￥799.00",
    "p_url": "https://img12.360buyimg.com/n1/s450x450_jfs/t22294/249/1456946750/370485/bcdd9392/5b2a1713N2149fe72.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf233420e290c1b88f3ecc0"),
    category: "数码影音",
    name: "先科（SAST） A16蓝牙音箱 蓝牙5.0迷你便携户外小音箱扩音器插卡手机电脑低音炮车载音响 炫酷黑",
    detail: "【闪购秒杀日】【升级版蓝牙5.0】【京东七仓发货，次日达到】【内置喇叭+低音振膜】【蓝牙链接、支持插内存卡播放、音频输入、收付款语音播报等】",
    price: "￥75.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t1/77552/8/797/252809/5cf16e56Eee0184b2/fa19dabd68f04371.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf233480e290c1b88f3ecc1"),
    category: "数码影音",
    name: "拼搏者 无线蓝牙音箱低音炮大音量七彩灯便携式户外插卡小音响微信收款语音播报器广场舞音箱优盘播放 黑色",
    detail: "重低音+3D音效+送运费险；支持蓝牙、插卡、插线、优盘播放，支持收款语音播报【尺寸】235*160*90mm",
    price: "￥68.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t10114/61/2851063955/292309/43b678ee/5cdbbf1aN92b62a17.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf2334f0e290c1b88f3ecc2"),
    category: "数码影音",
    name: "绿联（UGREEN）数码数字光纤音频线 电视DVD投影仪功放机顶盒家庭影院音频线 方口音响连接线1.5米 10542",
    detail: "",
    price: "￥29.00",
    "p_url": "https://img13.360buyimg.com/n1/s450x450_jfs/t18967/42/193787343/282747/18733a40/5a629aceN713d989e.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf233550e290c1b88f3ecc3"),
    category: "数码影音",
    name: "飞利浦 PHILIPS SPA331音箱电脑音响桌面低音炮USB小音箱超重低音喇叭多媒体迷你音响2.1",
    detail: "嗨购不停开门红狂欢与618同价，新品上市，性能卓越，USB2.1低音炮惊艳您的听觉，早买早享受更多神券领不停",
    price: "￥169.00",
    "p_url": "https://img10.360buyimg.com/n1/s450x450_jfs/t1/31286/39/10569/198695/5cb0674aE5cafe7e8/520e6f8b8d7fba5c.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf2335a0e290c1b88f3ecc4"),
    category: "数码影音",
    name: "漫步者（EDIFIER）MF5 便携式数码扩音器 小蜜蜂大功率教学专用教师导游扩音器 插卡播放器 唱戏机 白色",
    detail: "【6.1漫步者超级秒杀日，到手价159】价保618，好货提前抢！新品上市！下单即送TF卡。智能防啸叫，轻巧无压力。长时续航，操作简便，适用多种场合！进店抽大奖",
    price: "￥179.00",
    "p_url": "https://img14.360buyimg.com/n1/s450x450_jfs/t1/17625/15/6495/185664/5c5148adEef0e501a/2a5af81fa4b28c8d.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf2335f0e290c1b88f3ecc5"),
    category: "数码影音",
    name: "飞利浦（PHILIPS） 电脑音响 迷你小音响 家用重低音炮 多媒体USB手机笔记本桌面游戏音箱 SPA311 黑色【线长1.2米】",
    detail: "【同价618，买贵退差】一年换新！飞利浦国际大品牌，品质值得信赖！赶快下单吧！",
    price: "￥119.00",
    "p_url": "https://img14.360buyimg.com/n1/s450x450_jfs/t1/9060/22/14723/91324/5c6cea9dE7ff4e85d/9e3eea991204a9e0.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf233640e290c1b88f3ecc6"),
    category: "数码影音",
    name: "飞利浦（PHILIPS） 无线扩音器 大功率FM收音插卡音响 教学导游会议商务导购专用便携音箱 SBM150【送无线麦】",
    detail: "【同价618，买贵退差】一年换新！飞利浦国际大品牌，品质值得信赖！赶快下单吧！",
    price: "￥299.00",
    "p_url": "https://img14.360buyimg.com/n1/s450x450_jfs/t1/21639/18/9335/171801/5c7e2a17E196258fa/942f26f4dc985fdc.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf2336a0e290c1b88f3ecc7"),
    category: "数码影音",
    name: "拼搏者 复古蓝牙音箱低音炮迷你小音响电脑家用木质户外大音量便携插卡无线手机微信收款 棕木纹",
    detail: "",
    price: "￥99.00",
    "p_url": "https://img12.360buyimg.com/n1/jfs/t1/61515/33/750/184607/5cefd909Eac164532/8f36f1c1d1835547.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf233700e290c1b88f3ecc8"),
    category: "数码影音",
    name: "小米（MI）蓝牙音箱AI小爱同学mini音响低音炮米家小艾同学人工智能迷你便携式无线家用电脑音响 小米AI音箱-官方标配",
    detail: "赠运费险，听音乐、语音遥控家电的AI智能音箱；小米客厅电视音响点击购买",
    price: "￥255.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t1/37665/25/7474/105297/5cd0ee80E3d19d6f3/ecd3a8c281beafcb.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf233750e290c1b88f3ecc9"),
    category: "数码影音",
    name: "先科（SAST）V8黑 广场舞无线蓝牙音箱便携式户外小音响手机电脑移动手提大功率街舞跳舞低音炮",
    detail: "6.1日京东自营耳机开门红~大牌耳机爆款直降！更多神券299减100，1999减618等你领！~",
    price: "￥299.00",
    "p_url": "https://img11.360buyimg.com/n1/s450x450_jfs/t1/25732/31/8329/399080/5c75ed58E6f0b15d6/f5f65471746d6fd3.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf2337a0e290c1b88f3ecca"),
    category: "数码影音",
    name: "小度AI智能音箱 百度人工语音控制蓝牙音箱wifi网络电台小杜迷你音响闹钟低音炮 百度小度智能音箱",
    detail: "小度经典款；能听会说、海量资源、信息查询、儿童模式、联动家电；新升级小度智能音箱1S点此购",
    price: "￥85.00",
    "p_url": "https://img12.360buyimg.com/n1/jfs/t1/45345/30/1337/205412/5cf1424aE5784b720/f00e323d0e79238e.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf233800e290c1b88f3eccb"),
    category: "数码影音",
    name: "飞利浦（PHILIPS） SPA2100 音响音箱 电脑手机多媒体台式机笔记本低音炮 便携迷你音响 SPA2100 黑色",
    detail: "【同价618，买贵退差】一年换新！飞利浦国际大品牌，品质值得信赖！赶快下单吧！",
    price: "￥99.00",
    "p_url": "https://img10.360buyimg.com/n1/s450x450_jfs/t1/26558/21/13924/104266/5ca33195E7ab27ab4/b9637e8fe9bb943a.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf233860e290c1b88f3eccc"),
    category: "数码影音",
    name: "索爱（soaiy）F2 插卡式迷你数码收音机 插卡音箱 便携音响 收音 MP3播放 TF卡 瓦力白",
    detail: "6.1日京东自营耳机开门红~大牌耳机爆款直降！更多神券299减100，1999减618等你领！~",
    price: "￥69.00",
    "p_url": "https://img12.360buyimg.com/n1/s450x450_jfs/t25840/243/553788177/190853/13850d8e/5b73d1b3N2e12f377.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf2338b0e290c1b88f3eccd"),
    category: "数码影音",
    name: "山水M30吸顶喇叭套装吊顶天花音响定压功放蓝牙音箱 背景音乐室内家用嵌入式店餐厅会议公共广播系统 山水吸顶喇叭6.5英寸-SC18",
    detail: "【买贵返差价、价保618】广泛应用场景：家庭，超市，前台，餐饮，教室等；先科手提广场舞音响点击查看",
    price: "￥65.00",
    "p_url": "https://img12.360buyimg.com/n1/jfs/t1/33764/8/2821/263991/5cb1a1efEbbcab36f/388b3553c3e6389b.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf233910e290c1b88f3ecce"),
    category: "数码影音",
    name: "雅兰仕 (EARISE) S19 便携式数码扩音器 大功率扩音教学专用导游扩音器 U盘插卡音箱播放器 唱戏机  黑色",
    detail: "6.1日京东自营耳机开门红~大牌耳机爆款直降！更多神券299减100，1999减618等你领！~",
    price: "￥59.00",
    "p_url": "https://img12.360buyimg.com/n1/s450x450_jfs/t1/16378/38/9822/163808/5c81d2a5E8868da20/4b77971dc67b79cd.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf233970e290c1b88f3eccf"),
    category: "数码影音",
    name: "altay BT618蓝牙音箱电脑音响台式重低音炮2.1声道木质便携手机家用k歌客厅迷你笔记本 雅典黑升级蓝牙版 加关注加购享延保一年",
    detail: "",
    price: "￥149.00",
    "p_url": "https://img10.360buyimg.com/n1/jfs/t1/36749/36/4248/229416/5cbb3c8aE8a5cb49d/34ce7d387b593802.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf233a10e290c1b88f3ecd0"),
    category: "数码影音",
    name: "【到手179】索爱Q22蓝牙音箱广场舞音响电脑台式家用户外便携式低音炮移动收音机手机播报器扩音小音响 炫酷黑【双闹钟】+【LED温度显示】 加关注加购享一年VIP换新服务",
    detail: "推荐指数：⭐⭐⭐⭐⭐\n♥【立体音效】2.1声道3喇叭环绕\n♥【强大续航】待机70小时\n♥【一年质保】30天免费退换货\n♥【镇店之宝 爆款蓝牙耳机】♥",
    price: "￥199.00",
    "p_url": "https://img14.360buyimg.com/n1/jfs/t29482/52/1362732947/189642/2d22ff27/5cde13aeN260d56fd.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf233a80e290c1b88f3ecd1"),
    category: "数码影音",
    name: "索爱 X1无线蓝牙吸顶音响喇叭套装 家用天花吊顶音箱背景音乐 嵌入式有源功放服装店奶茶店公共广播影响 无线蓝牙1拖1套装（1个主音响+1个副音响）",
    detail: "",
    price: "￥299.00",
    "p_url": "https://img10.360buyimg.com/n1/jfs/t1/22407/36/14087/148518/5ca487c9Eb736d91e/9f5cf9822a87bb8c.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf233ad0e290c1b88f3ecd2"),
    category: "数码影音",
    name: "先科（SAST）Q1黑 蓝牙音箱无线智能时钟双闹钟镜面低音炮迷你便携收款手机电脑小音响",
    detail: "6.1日京东自营耳机开门红~大牌耳机爆款直降！更多神券299减100，1999减618等你领！~",
    price: "￥129.90",
    "p_url": "https://img13.360buyimg.com/n1/s450x450_jfs/t1/39060/40/6434/385173/5cd1573bE64d643b8/bf3c3dd85572613e.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf233b30e290c1b88f3ecd3"),
    category: "数码影音",
    name: "纽曼（Newmine） 小蜜蜂扩音器教学专用无线便携式老师讲课导游户外腰带喇叭可插卡U盘迷你小音响 黑色【送有线头戴麦】",
    detail: "",
    price: "￥99.00",
    "p_url": "https://img10.360buyimg.com/n1/jfs/t1/36433/4/9309/148068/5cee1448E02dbf58e/9bbc0f05d9f464d2.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf233ca0e290c1b88f3ecd4"),
    category: "生活电器",
    name: "先锋（SINGFUN）电风扇/落地扇/5叶大风量/家用静音风扇/台地两用扇DLD-D10",
    detail: "【开门红79元尖叫秒杀！0点开抢！五叶大风量，风大音轻！台地两用，极易安装！新工艺电机，使用寿命更长！一级能效，能耗低又环保！开门红尖叫秒杀",
    price: "￥79.00",
    "p_url": "https://img14.360buyimg.com/n1/jfs/t1/53306/9/1360/259922/5cf106bdE4d022ac3/ee25d835a7fd01b5.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf233d00e290c1b88f3ecd5"),
    category: "生活电器",
    name: "艾美特（Airmate）电风扇 家用五叶遥控落地扇 柔风静音 FS40103R",
    detail: "【开门红！秒杀到手价159！价保618】\n——LED大屏显示，智能遥控预约定时，一键静音轻柔睡眠风\n——五片扇叶多档风量，纯铜机芯电机质保十年_全场直降疯狂抢",
    price: "￥159.00",
    "p_url": "https://img11.360buyimg.com/n1/jfs/t1/72398/3/772/144862/5cf0dbadE1693a905/74109affd4711d88.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf233d50e290c1b88f3ecd6"),
    category: "生活电器",
    name: "先锋（Singfun）9叶遥控电风扇 落地扇DLD-D5 家用摇头风扇",
    detail: "【满减到手139！价同618！买贵补差！】【9叶大风量遥控定时落地扇！多档位调节，满足更多需求！智能睡眠风，风力逐级减弱不着凉！开门红尖叫秒杀",
    price: "￥149.00",
    "p_url": "https://img11.360buyimg.com/n1/jfs/t24955/140/791846102/120336/8dec5aed/5b7bb548Nae290dbe.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf233dc0e290c1b88f3ecd7"),
    category: "生活电器",
    name: "戴森(Dyson) 吸尘器 V7 FLUFFY手持吸尘器家用除螨无线宠物家庭适用【官方正品】",
    detail: "【戴森店铺明星强推】V7爆款吸尘器2090元疯抢ing！618同价！直降600元！\n再享3期免息！13万+好评！吸力持续强劲不减弱！",
    price: "￥2090.00",
    "p_url": "https://img12.360buyimg.com/n1/jfs/t1/48183/4/1199/59958/5cef50d8Ed35f8340/23a70382ee8175cd.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf233e40e290c1b88f3ecd8"),
    category: "生活电器",
    name: "格力风扇t1   旗舰款/遥控塔扇/无叶风扇/空气循环电风扇  FL-09X61Bh",
    detail: "【6.1嗨购到手价219！下单减30，限量20000台】特色工艺外观，19W+评论,细腻柔风,风轮可拆洗吹健康风，稳定不摇晃618开门红狂欢疯抢",
    price: "￥249.00",
    "p_url": "https://img12.360buyimg.com/n1/jfs/t1/78759/32/810/71737/5cf152b7E12f10d33/c3bd6c38a025701f.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf233ea0e290c1b88f3ecd9"),
    category: "生活电器",
    name: "莱克（LEXY）吸尘器魔洁M91Pro升级款家用无线无绳除螨充电手持吸尘器VC-SPD503-1",
    detail: "【价保至618！买贵赔差价】到手价仅1999！仅限1号当天！莱克专注高端清洁行业23年！宠物家必备！吸除毛发不缠绕！更多优惠请咨询在线客服",
    price: "￥1999.00",
    "p_url": "https://img14.360buyimg.com/n1/jfs/t1/61135/5/730/169335/5cef3eeaEf796ed00/bddf6e8b02a27077.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf233f00e290c1b88f3ecda"),
    category: "生活电器",
    name: "戴森(Dyson) 吸尘器 V10 Fluffy 手持吸尘器家用除螨无线宠物家庭适用【官方正品】",
    detail: "【戴森V10（经典木地板吸头）3690元疯抢中！618同价提前享！直降300元！再享3期免息】深度整屋清洁大户型，地面运行高达40分钟！》》抢戴森爆款吸尘器",
    price: "￥3690.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t1/76549/26/710/62495/5cef5099E2006ebf0/37979292f019456f.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf233f70e290c1b88f3ecdb"),
    category: "生活电器",
    name: "美的（Midea）新品家用电风扇 遥控塔扇 静音内旋摇头 易拆洗无叶风扇ZAC10BR",
    detail: "【秒杀到手219！抄底价错过不再有】内旋出风，稳定不摇晃！后盖可拆卸易清洁，7h定时预约",
    price: "￥219.00",
    "p_url": "https://img11.360buyimg.com/n1/jfs/t29320/239/1304887789/240734/2a8beb1d/5cdcc082Ncc2b8198.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf233fc0e290c1b88f3ecdc"),
    category: "生活电器",
    name: "爱家乐 （AKIRA ）无叶电风扇 落地扇 塔扇静音 空气循环家用遥控 HA-AZ18镍灰蓝",
    detail: "【爱家乐新加坡国民品牌！】红六月秒杀699。新款上市，无叶提升全新的安全性能。【京东自营，品质保证！】618狂欢节。首年质量问题免费换新机！",
    price: "￥699.00",
    "p_url": "https://img11.360buyimg.com/n1/jfs/t1/83213/26/803/62174/5cefa190E47765fef/a4ee53806d5fb7fb.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf234030e290c1b88f3ecdd"),
    category: "生活电器",
    name: "美的（Midea）家用静音 五叶落地扇/电风扇 FS40-13C",
    detail: "【秒杀到手139！开门红！618提前抢！价保6.18】\n机翼旋风叶静音大风量,33万+好评！\n可伸缩支杆，京东自营极速达！-五叶静音落地扇火热开抢中！",
    price: "￥139.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t1/39693/28/7727/106268/5cee37abE21ba9aa2/d0ff6aa9860ff206.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf234090e290c1b88f3ecde"),
    category: "生活电器",
    name: "艾美特(Airmate) 新品家用卧室大风量遥控节能落地扇 办公宿舍智能定时立式电扇省电风扇 遥控经典款",
    detail: "【京东开门红！拍2台，每台到手价159！】【全网爆售150W台！全国7仓配送！部分地区当天达！】【铝壳纯铜电机！质量保证！全功能遥控！3+1档风速】",
    price: "￥178.90",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t1/63231/18/872/179573/5cf156afEb022675f/4ba548dc639c2428.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf2340f0e290c1b88f3ecdf"),
    category: "生活电器",
    name: "TCL TFS16D 电风扇/空气循环/落地扇/家用静音风扇/五叶大风量风扇定时机械",
    detail: "【秒杀79元！开门红狂欢抢购！限量疯抢24小时手慢无，价保618】【京东自营快速达】首年只换不修;三档调节;120分钟定时更多优惠",
    price: "￥79.00",
    "p_url": "https://img12.360buyimg.com/n1/jfs/t1/74328/5/614/249721/5cecc3fdE0a6d902c/3c9945c9bb64dd4d.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf234150e290c1b88f3ece0"),
    category: "生活电器",
    name: "海尔（Haier）FSJ3503A 电风扇家用落地扇 大风量电扇京东自营五叶风扇",
    detail: "【开门红99】五叶电风扇+轻音底噪+三档调节+自营急速达爆品限量直降中!(此商品不参加上述活动)",
    price: "￥99.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t1/28829/26/15467/118564/5cb1431eE825fdf90/32a43ec5b228fd28.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf2341b0e290c1b88f3ece1"),
    category: "生活电器",
    name: "艾美特（Airmate）电风扇 家用落地扇 五叶静音 FSW65T2-5",
    detail: "【开门红！秒杀到手价158！价保61】\n——五片弦月扇叶切风柔和，风感细腻睡眠更安静\n——优选电机质保十年，一级能效节能省电_全场直降疯狂抢",
    price: "￥158.00",
    "p_url": "https://img14.360buyimg.com/n1/jfs/t1/46580/14/1338/319143/5cf0f7d2Ebebebe14/2b52d6546fee6037.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf234210e290c1b88f3ece2"),
    category: "生活电器",
    name: "艾美特（Airmate）电风扇 家用落地遥控静音 无叶塔扇 空气循环扇 FT41R",
    detail: "【开门红！秒杀到手价198！价保618】\n——时尚设计扇形广角送风，一键静音睡眠风\n——自带香薰功能，防倾倒设计更安全_全场直降疯狂抢",
    price: "￥198.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t1/65871/10/840/301665/5cf0fd1cE431d1e29/f68e6b71522e718f.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf234270e290c1b88f3ece3"),
    category: "生活电器",
    name: "奥克斯（AUX） FS1613  电风扇/空气循环/落地扇/家用静音风扇/五叶大风量风扇",
    detail: "【618全球年中购物节开门红，24小时巅峰抢购！】1.累计销售突破230万台+，71万+评论，京东优选好货2.三档调节，左右摇头，大风量！618开门红狂欢疯抢》",
    price: "￥99.00",
    "p_url": "https://img12.360buyimg.com/n1/jfs/t1/78470/29/866/202661/5cf10bddE068b8cd9/c35727eb252cd51d.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf2342d0e290c1b88f3ece4"),
    category: "生活电器",
    name: "小米（MI）米家直流变频落地扇1X 办公家用电风扇/落地扇 7羽叶设计 模拟自然风 低噪音 小爱同学智能控制",
    detail: "【小米开门红，直降20元，到手仅279元】小米直流变频落地扇更多爆品",
    price: "￥279.00",
    "p_url": "https://img14.360buyimg.com/n1/jfs/t1/34183/27/5302/57741/5cbed103E1ba2de41/7dc6ed1140ca3ccf.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf234330e290c1b88f3ece5"),
    category: "生活电器",
    name: "莱克（LEXY）吸尘器魔洁MJ18家用无线无绳除螨充电手持吸尘器VC-SPD305",
    detail: "【价保至618！买贵赔差价】到手价仅1599！仅限1号当天！机身轻！噪音小！莱克专注高端清洁行业23年！更多优惠请咨询在线客服",
    price: "￥1599.00",
    "p_url": "https://img10.360buyimg.com/n1/jfs/t1/53142/1/1182/165296/5cef3ebfEeaae34d9/044bb7b7dc666c61.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf2343a0e290c1b88f3ece6"),
    category: "生活电器",
    name: "KEHEAL科西逸尔F2负离子空气循环扇 直流温感变频电风扇 摇头扇台立扇 果岭风静音香薰风扇",
    detail: "【6.1日0点开抢：直降60元！享739元破冰价！限时秒杀，不容错过！】保价618！买贵补差！温感变频不易头疼！专利负离子净烟除味！享更多惊喜戳这里！",
    price: "￥739.00",
    "p_url": "https://img12.360buyimg.com/n1/jfs/t1/32271/11/12259/79329/5cb6e09aEa8ba9d21/4035b58763f48e5b.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf234410e290c1b88f3ece7"),
    category: "生活电器",
    name: "美的（Midea）台地两用 三叶大风量家用电风扇/落地扇 台式立式SAB40A",
    detail: "【秒杀到手119！开门红618提前抢！价保6.18】\n3档风速风力强劲，一级能效标识高效又节能，\n台立两用，京东自营极速达-三叶大风量落地扇火热开抢中！",
    price: "￥119.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t1/56194/7/1320/327611/5cf10330Eaa65b095/b5b196a4a022b61a.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf234480e290c1b88f3ece8"),
    category: "生活电器",
    name: "美的（Midea）FS40-13ER 旗舰款电风扇/五叶遥控落地扇/家用静音风扇",
    detail: "【开门红！618提前抢！秒杀179！每100-10！价保整月】\n海洋强劲风！9种风量，静音睡眠风！76万+好评量！\n累计爆售超200万台-爆卖200万台机皇",
    price: "￥189.00",
    "p_url": "https://img10.360buyimg.com/n1/jfs/t1/56197/15/1335/213641/5cf12dc8E96464ef7/1a96d27328a023c1.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf2344d0e290c1b88f3ece9"),
    category: "生活电器",
    name: "戴森(Dyson) 吸尘器 V10 Absolute 手持吸尘器家用除螨无线宠物家庭适用【官方正品】",
    detail: "【618同价，先买先用，3期免息！】戴森V10双主吸头款，深度整屋清洁大户型，深入清洁地毯、呵护硬质地板》》抢戴森爆款吸尘器",
    price: "￥4490.00",
    "p_url": "https://img10.360buyimg.com/n1/jfs/t1/15931/9/11724/116585/5c91eaabE9f92a5b1/fa46a65a804fa9fa.png"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf234530e290c1b88f3ecea"),
    category: "生活电器",
    name: "爱丽思(IRIS)日本 电风扇/空气循环扇  家用台式遥控定时摇头落地迷你小风扇PCF-SC15TC",
    detail: "【开门红到手价不高于328元】日本品质|五档强劲风力|四季可用(上下左右摇头)热新品推荐",
    price: "￥398.00",
    "p_url": "https://img11.360buyimg.com/n1/jfs/t1/32446/1/11164/233914/5cb41dbeE8983bad5/dedfc91f08f72f20.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf234580e290c1b88f3eceb"),
    category: "生活电器",
    name: "格力（GREE）家用塔扇大风量节能电风扇遥控定时落地扇摇头无叶风扇 FL-09S61Bha 白+黑",
    detail: "【开门红疯狂直降、限量晒图赠充电手持小风扇一个】日常价429元、圆美设计、健康柔风、远程遥控、12H预约定时、可拆洗风轮、舒适睡眠风",
    price: "￥299.00",
    "p_url": "https://img12.360buyimg.com/n1/jfs/t1/62159/32/870/168923/5cf1663bE35a8c092/71abb2dbaf072c21.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf234600e290c1b88f3ecec"),
    category: "生活电器",
    name: "小米（MI）米家 手持吸尘器  家用立式吸尘器  除螨无线 100AW大吸力 自带4种刷头",
    detail: "【劲省200元，到手仅需1098元】开门红尖叫低价，限时开秒，还可尊享白条30天免息，小米新品吸尘器上市，大吸力快下单",
    price: "￥1098.00",
    "p_url": "https://img10.360buyimg.com/n1/jfs/t1/17612/17/13176/44101/5c9c8471E8be37c97/cc1f251d70f1c78d.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf234670e290c1b88f3eced"),
    category: "生活电器",
    name: "美的（Midea）家用遥控 静音五叶电风扇/空气循环/欧式简美风落地扇 SAB40BR",
    detail: "【秒杀到手219！开门红！618提前抢！价保6.18】\n8档风速，台地/台式/立式一机三用，\n灵动五叶，远程遥控，京东自营极速达-五叶遥控落地扇火热开抢中！",
    price: "￥219.00",
    "p_url": "https://img10.360buyimg.com/n1/jfs/t1/68680/11/642/107644/5cee3740E7a9177d5/216dd730d1c65902.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf2346d0e290c1b88f3ecee"),
    category: "生活电器",
    name: "美的（Midea）挂烫机家用 熨斗 蒸汽挂烫机 双杆手持熨烫机电熨斗YGD20D7（2L双杆）",
    detail: "【618购物节-狂欢秒杀价299元】仅限1日专享，疯抢1000台！价保618，错峰提前抢！年度新款手持挂烫机，抄底秒杀！",
    price: "￥299.00",
    "p_url": "https://img14.360buyimg.com/n1/jfs/t1/57610/2/1357/127569/5cf17211Ee5a32adf/8d381d3c21c4fff9.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf234730e290c1b88f3ecef"),
    category: "生活电器",
    name: "奥克斯（AUX）FS1608RC 遥控落地扇/电风扇/五叶大风量风扇/家用静音风扇/空气循环扇",
    detail: "【618全球年中购物节开门红，24小时巅峰抢购！】1累计销售突破100万台+，33万+99%好评优选！2定制特惠款测评必选爆款！618开门红狂欢疯抢》",
    price: "￥99.00",
    "p_url": "https://img12.360buyimg.com/n1/jfs/t1/68911/10/685/215670/5cee3f56E0b45d8b7/1d8b401f658e2a92.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf234790e290c1b88f3ecf0"),
    category: "生活电器",
    name: "美菱 MeiLing MY-C13 茶吧机 家用多功能智能温热型立式饮水机",
    detail: "【6月开门红】289元超值秒杀，领券满20-10，下单再减20，到手价259元！限量500台！手慢无！京东自营价保618！爆款饮水机秒杀中，点击查看》",
    price: "￥289.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t1/82888/30/832/109426/5cf09ef4Ef4783b75/f58d94ba9950d32f.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf2347f0e290c1b88f3ecf1"),
    category: "生活电器",
    name: "戴森(Dyson) 吸尘器 V11 ABSOLUTE 智能无绳吸尘器家用除螨无线手持宠物家庭适用【官方正品】",
    detail: "【618同价，先买先用，3期免息！】戴森zui强劲智能无绳吸尘器，吸力提升40%!智能感应，地面运行时间高达60分钟》》抢戴森爆款吸尘器",
    price: "￥5490.00",
    "p_url": "https://img14.360buyimg.com/n1/jfs/t1/32556/17/7632/401608/5c9b61f4Eb556707f/3004d9cfa2f0f265.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf234850e290c1b88f3ecf2"),
    category: "生活电器",
    name: "海尔 Haier FZY8109A 塔扇 家用电风扇 遥控无叶风扇",
    detail: "【开门红259，价保618】9种风感+负离子净化+8小时定时+室温数显+左右摇头送风+自营急速达爆品限量直降中!",
    price: "￥259.00",
    "p_url": "https://img11.360buyimg.com/n1/jfs/t1/30623/17/10673/102578/5cb14373Ecc070a88/0d11120b9d74746b.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf2348b0e290c1b88f3ecf3"),
    category: "生活电器",
    name: "美的( Midea) 饮水机下置式立式温热型热罐 下置水桶 自动上水 YR1801S-X",
    detail: "【1号开门红24小时限时限量抢！京东自营价保618】【晒单送价值398元延保卡】下置水桶，轻松换水；1L大热罐；缺水提醒；推杯取水；304不锈钢加热胆进店抢》》",
    price: "￥899.00",
    "p_url": "https://img14.360buyimg.com/n1/jfs/t1/16092/32/14096/64608/5ca4812dE77140c49/0d299fd432ae304d.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf234920e290c1b88f3ecf4"),
    category: "生活电器",
    name: "美的（Midea）新品塔扇/无叶风扇 内旋出风 静音摇头易拆洗 家用电风扇 ZAC10B",
    detail: "【开门红！618提前抢！到手199！每100-10！价保整月】\n19年新品！自营极速达广角内旋出风，机身稳如泰山！\n后盖可拆卸，易拆洗-内旋出风塔扇！夏日必备",
    price: "￥219.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t1/46057/6/1336/114098/5cf0e19cE72af1270/39f47b683f8f4414.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf2349a0e290c1b88f3ecf5"),
    category: "生活电器",
    name: "亨特（HUNTER）美国品牌电风扇 落地扇 家用办公室台立可摇头非遥控七叶循环扇HTF-F19",
    detail: "【秒杀价69！领券满20减10！每满99减20元！618提前抢！火爆开门红！】美国百年品牌，七叶平网，台立两用，特色全封闭底盘，顶开设计，6月巨惠！限量抢购！",
    price: "￥69.00",
    "p_url": "https://img14.360buyimg.com/n1/jfs/t1/35902/39/11117/112458/5cf0c3a7E7316af4b/d0d72c2fb8b8fe52.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf234a10e290c1b88f3ecf6"),
    category: "生活电器",
    name: "戴森(Dyson) 吸尘器 V11 FLUFFY 无绳吸尘器家用除螨无线手持宠物家庭适用【官方正品】",
    detail: "【618同价，先买先用，3期免息！】戴森V11强劲系列解锁革新科技，强劲吸力提升40%，地面运行时间高达60分钟！》》抢戴森爆款吸尘器",
    price: "￥4990.00",
    "p_url": "https://img10.360buyimg.com/n1/jfs/t1/26590/9/12774/406695/5c9b6249Ee981815c/eea6c0ef0d736b95.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf234a80e290c1b88f3ecf7"),
    category: "生活电器",
    name: "爱丽思 (IRIS)日本 电风扇 空气循环扇 家用迷你静音台式摇头小风扇 PCF-SM12",
    detail: "【开门红到手价不高于178元】日本品质|迷你小巧|空调伴侣|静音节能|通风换气|四季循环（左右摇头）热卖爆款推荐",
    price: "￥178.00",
    "p_url": "https://img11.360buyimg.com/n1/jfs/t1/33957/38/6650/165658/5cbee3c8Ea9e4c157/a94bb1e6495a8f61.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf234b10e290c1b88f3ecf8"),
    category: "生活电器",
    name: "西屋（Westinghouse）无叶风扇 X18/纳米离子群净化除尘/家用电风扇/智能变频静音",
    detail: "【6.1开门红到手价仅639!每满299减30!价保618!先到先得】\n纳米离子净化除尘、杀菌除异味，安全无叶，广角摇头，7.5H定时，可远程遥控6.18专场",
    price: "￥699.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t1/67754/16/818/154505/5cf0f8afE02842bbb/c4542cf79c864093.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf234b90e290c1b88f3ecf9"),
    category: "生活电器",
    name: "大宇(DAEWOO) F1 直流变频电风扇 静音 空气循环风扇 摇头扇台立扇 大宇16叶果岭风循环扇 白色",
    detail: "【6.1开门红低至569】【保价618】5年质保首年换新，16叶26档大风力，专利果岭风，静音低至13.3dB，好评达1.9万+。预约后咨询客服登记",
    price: "￥659.00",
    "p_url": "https://img11.360buyimg.com/n1/jfs/t1/62936/6/793/91423/5cefbd91E1660355d/a520085f4eeab68e.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf234bf0e290c1b88f3ecfa"),
    category: "生活电器",
    name: "爱丽思(IRIS)日本 电风扇/空气循环扇/台扇 家用静音迷你小风扇PCF-HD15NCW 白色",
    detail: "【开门红到手价不高于108元】日本品质|空调伴侣|长远送风|静音节能|四季可用热卖爆款推荐",
    price: "￥79.00",
    "p_url": "https://img11.360buyimg.com/n1/jfs/t1/33214/8/2641/223399/5cb0567dE88bb4c10/638fc11ab0533beb.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf234c50e290c1b88f3ecfb"),
    category: "生活电器",
    name: "志高（CHIGO）饮水机家用立式办公双开门柜式饮水器 香槟金 【保价6.18】秒杀价仅129元，快速制热节能省电",
    detail: "【618开门红】【6.1超级秒杀日，下单仅129】304热胆，高效节能，双门防尘，安全防干烧，升级童锁【限量前100名下单再减10元到手仅119】",
    price: "￥129.00",
    "p_url": "https://img14.360buyimg.com/n1/jfs/t1/58804/40/1191/84908/5cf09a16Eb2ecf122/3bc6167c09c579f6.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf234cc0e290c1b88f3ecfc"),
    category: "生活电器",
    name: "格力（GREE）电风扇家用节能定时落地扇学生立式大风量客厅宿舍机械五叶扇 FD-40X73h5 黑色",
    detail: "【6.1开门红疯狂直降，晒图赠风扇防尘罩一个，送完即止！】新品升级五叶大风量一体式电扇，三挡风速调节，独立摇头按钮，定时关机，静音电机安全稳定，一级能效",
    price: "￥149.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t1/46319/26/1332/159724/5cf0b42eE55201a86/74f24c331c4a7647.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf234d20e290c1b88f3ecfd"),
    category: "生活电器",
    name: "美的（Midea）蒸汽挂烫机熨斗便携手持式电熨斗熨衣机熨衣服熨衣刷YBD15D1",
    detail: "【618购物节-狂欢秒杀价168元】仅限1日专享，每满299元减30元，限量500台！错峰提前抢！年度新款手持挂烫机，抄底秒杀！",
    price: "￥168.00",
    "p_url": "https://img14.360buyimg.com/n1/jfs/t1/56304/31/1364/95908/5cf17204E73b1ecb3/334bf88c5d97b5fc.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf234d80e290c1b88f3ecfe"),
    category: "生活电器",
    name: "大宇（DAEWOO）韩国品牌电风扇/无叶风扇/空气循环扇/台扇 智能遥控 定时儿童摇头壁挂直流电扇DWF-NP01DC",
    detail: "【6.1嗨购爆款秒杀到手价仅459元！每满299-30，领券满20-10！晒图再返30话费】智能数码遥控，无风叶更安全，十档风速可调，台壁两用爆款推荐优惠入口",
    price: "￥499.00",
    "p_url": "https://img10.360buyimg.com/n1/jfs/t1/67538/7/831/265202/5cf0ca1bE70ea8a5a/e4b9bfe11a2bb569.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf234de0e290c1b88f3ecff"),
    category: "生活电器",
    name: "美的（Midea）饮水机下置式立式高端冷热型沸腾胆饮水机 下置水桶 自动上水  YD1316S-X",
    detail: "【1号开门红24小时限时限量抢！京东自营价保618】【晒单送价值398元延保卡】下置水桶空滤技术；外置沸腾胆自动注水；冷热双用；601开门红有胆量玩真的》》",
    price: "￥999.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t28912/233/462221231/95086/b1b48e07/5bf4f925N7a6cd4a3.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf234e50e290c1b88f3ed00"),
    category: "生活电器",
    name: "格力（GREE） 五叶电风扇／落地扇／家用静音风扇 FD-4010-WG",
    detail: "【到手价139！6.1嗨购，下单立减10，静音低至37db】单日销售破W台/19万+优质好评/静音省电/轻薄扇叶切风柔和618开门红狂欢疯抢",
    price: "￥149.00",
    "p_url": "https://img12.360buyimg.com/n1/jfs/t1/43721/24/5644/126052/5cf16787E0f7fe5b8/c09901fd2127cf5f.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf234eb0e290c1b88f3ed01"),
    category: "生活电器",
    name: "长虹（CHANGHONG）电风扇/落地扇/家用风扇/五扇叶大风量摇头落地扇 CFS-LD407F",
    detail: "【秒杀到手价74元！开门红爆款抢购！6月1日零点开抢！价保618】13W好评，强劲风力，升降摇头，晒图视频返5元E卡，1个ID限1台，详情咨询客服！进入会场猛戳",
    price: "￥79.00",
    "p_url": "https://img12.360buyimg.com/n1/jfs/t1/39487/23/7834/149807/5cf133feE8bfb743d/5418fc817d9948da.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf234f00e290c1b88f3ed02"),
    category: "生活电器",
    name: "美的（Midea）挂烫机家用熨斗蒸汽挂烫机手持熨烫机电熨斗YGJ15B3（1.5L小巧）",
    detail: "【618购物节-狂欢秒杀169元】每满299元减30元，疯抢1000台，多买多优惠！价保618，错峰提前抢！年度新款手持挂烫机，抄底秒杀！",
    price: "￥169.00",
    "p_url": "https://img10.360buyimg.com/n1/jfs/t1/58232/34/1374/152024/5cf1c8faEf423478f/8e44225f7478e2c8.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf234f60e290c1b88f3ed03"),
    category: "生活电器",
    name: "戴森（Dyson）无叶电风扇 落地扇 塔扇 强劲气流 原装进口 AM07 风尚紫",
    detail: "【618年中钜惠！限时开抢！6.1-6.3戴森无叶电风扇直降300元！！到手价只要2850元！数量有限，赶快下手带回家！】落地式高颜值你的居家之选！",
    price: "￥2850.00",
    "p_url": "https://img14.360buyimg.com/n1/jfs/t1/48972/4/1172/54138/5cef51b6E8b9b81e9/cd0b18eca19dc7bc.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf234fc0e290c1b88f3ed04"),
    category: "生活电器",
    name: "美的（Midea）饮水机茶香茶吧机家用下置式 多功能智能自主控温 立式温热型饮水机 YR1025S-W",
    detail: "【1号开门红24小时限时限量抢！京东自营价保618】【晒单送398元延保卡】红绿茶专温定制；人性化储物格；可拆卸水管；触控大屏、智能加水；601有胆量玩真的》》",
    price: "￥599.00",
    "p_url": "https://img14.360buyimg.com/n1/jfs/t1/23017/3/11023/47387/5c8b466dE36bb4315/57b6e43f0678fd5a.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf235020e290c1b88f3ed05"),
    category: "生活电器",
    name: "爱丽思(IRIS)日本 电风扇/空气循环扇/台扇 家用静音摇头小风扇PCF-HD15C 白色",
    detail: "【开门红前500名秒杀到手价不高于158元】日本品质|空调伴侣|适用面积14平米|四季可用（左右摇头)热卖爆款推荐",
    price: "￥178.00",
    "p_url": "https://img12.360buyimg.com/n1/jfs/t20671/153/452246198/183091/ef04c25b/5b0d6abcN2fba2240.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf2350a0e290c1b88f3ed06"),
    category: "生活电器",
    name: "澳柯玛（AUCMA）触屏家用电风扇/柱型落地扇塔扇/空气循环无叶风扇静音易清洗FS-08M603(Y)",
    detail: "开门红前300台秒杀159元限量抢！错过等1年！价保618！6万好评见证！触控式远距离遥控塔扇！带香薰盒设计！一键熄屏！8小时定时!更多好价猛戳这里抢",
    price: "￥159.00",
    "p_url": "https://img13.360buyimg.com/n1/jfs/t1/50650/5/1248/145972/5cefa55cE2b54dd6e/c78a3dc76ba8c8cf.jpg"
} ]);
db.getCollection("jd_shop").insert([ {
    _id: ObjectId("5cf2350f0e290c1b88f3ed07"),
    category: "生活电器",
    name: "小狗（puppy）干湿吹三用大功率桶式商用家用吸尘器D-807",
    detail: "【价保618】【6月1日-6月3日,秒杀价359元】\n【20L大容量尘桶,干湿吹三用】【五款刷头】另有新品高性能无线吸尘器震撼上市",
    price: "￥359.00",
    "p_url": "https://img11.360buyimg.com/n1/jfs/t1/62615/20/802/187515/5cf09a32E44d72dd5/874aca970b61533c.jpg"
} ]);
db.close()
})
