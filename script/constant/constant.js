/**
 * Created by Administrator on 2017/3/27.
 */
//找职位左侧一级菜单
app.constant("jobType",[
    {type:1,name:"用户体验"},
    {type:2,name:"研发"},
    {type:3,name:"大数据"}
])
    //二级菜单
    .constant('secondType', [
    {type: 1, name: "产品"},
    {type: 2, name: "UI"},
    {type: 3, name: "QA"},
    {type: 4, name: "Android"},
    {type: 5, name: "IOS"},
    {type: 6, name: "WEB"},
    {type: 7, name: "OP"},
    {type: 8, name: "JAVA"},
    {type: 9, name: "NLP"},
    {type: 10, name: "DM"},
    {type: 11, name: "DL"}
])
//    薪资水平
.constant("compensation",{
    0:"0-8K",
    1:"8-15K",
    2:"16-25K",
    3:"26K及以上"
    }
)
//    职业子类
.constant("subCategory",{
    1: "产品经理",
    2: "UI",
    3: "ANDROID",
    4: "IOS",
    5: "CSS",
    6: "JS",
    7: "JAVA",
    8: "QA",
    9: "OP"
})
//    公司行业
.constant("industryInfo", {
    0: "移动互联网",
    1: "电子商务",
    2: "企业服务",
    3: "O2O",
    4: "教育",
    5: "金融",
    6: "游戏"
})
//    融资规模
.constant("financingInfo",{
    0:"无需融资",
    1:"天使轮",
    2:"A轮",
    3:"B轮",
    4:"C轮",
    5:"D轮及以上",
    6:"上市公司"
})
//    城市
.constant("city",{
    1:"北京"
})
//发布时间 updateAt
.constant('updateAttype', [
    {type: 0, name: '今天'},
    {type: 1, name: '昨天'}
])
//  工作经验 experience
.constant('experiencetype', [
    {type: 0, name: '应届'},
    {type: 1, name: '1~2年'},
    {type: 2, name: '3~5年'},
    {type: 3, name: '6～9年'},
    {type: 4, name: '10年及以上'}

])
//     学历要求 education
.constant('educationtype', [
    {type: 0, name: '大专'},
    {type: 1, name: '本科'},
    {type: 2, name: '硕士'},
    {type: 3, name: '博士及以上'}

]);