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
        companyListUrl:function () {
            return "carrots-ajax/a/company/search"
        },
        //职位搜索
        professionUrl:function (type) {
            return "carrots-ajax/a/profession/search?recommend="+type
        },
        //公司详情
        companyInfoUrl: function (id) {
            return "/carrots-ajax/a/company/" + id
        },
        //职位详情
        professionInfoUrl: function (id) {
            return "/carrots-ajax/a/profession/" + id
        }
    }
});