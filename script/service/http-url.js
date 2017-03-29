/**
 * Created by Administrator on 2017/3/27.
 */
app.factory("path",function ($http,$state) {
    return{
        //找职位分类
        jobListUrl:function () {
            return "../script/service/prof-home.json"
        },
        //banner
        bannerUrl:function (type) {
            return "carrots-ajax/a/article/search?type="+type
        },
        //公司列表
        companyListUrl:function (type) {
            return "carrots-ajax/a/company/search?returnPage"+type
        }
        //
    }
})