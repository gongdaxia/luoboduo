/**
 * Created by Administrator on 2017/3/27.
 */
app.factory("professionService",function($http,path){
    return{
        //侧栏职位搜索
        getJobList:function () {
            return $http.get(path.jobListUrl())
        },
        //banner
        getBanner:function (type) {
            return $http.get(path.bannerUrl(type))
        }
    }

})
