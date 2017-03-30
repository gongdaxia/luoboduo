/**
 * Created by Administrator on 2017/3/27.
 */
app.constant("jobType",[
    {type:1,name:"用户体验"},
    {type:2,name:"研发"},
    {type:3,name:"大数据"}
]);
app.constant('secondType', [
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
]);
app.constant("compensation",{
    0:"0-8K",
    1:"8-15K",
    2:"16-25K",
    3:"26K及以上"
    }
);
app.constant("subCategory",{
    1: "产品经理",
    2: "UI",
    3: "ANDROID",
    4: "IOS",
    5: "CSS",
    6: "JS",
    7: "JAVA",
    8: "QA",
    9: "OP"
});
app.constant("industryInfo", {
    0: "移动互联网",
    1: "电子商务",
    2: "企业服务",
    3: "O2O",
    4: "教育",
    5: "金融",
    6: "游戏"
});
app.constant("financingInfo",{
    0:"无需融资",
    1:"天使轮",
    2:"A轮",
    3:"B轮",
    4:"C轮",
    5:"D轮及以上",
    6:"上市公司"
})