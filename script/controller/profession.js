/**
 * Created by Administrator on 2017/3/27.
 */
app.controller("professionCtrl",function ($scope,$state,$rootScope,professionService) {
    console.log("+++++++++++++++++++++++++")
    var vm = this;
    vm.params = $state.params;
    vm.params.size = 8;
    delete sessionStorage.searchCompanyOptions;
    delete sessionStorage.searchJobOptions;
    delete sessionStorage.searchJobOptions ;
    professionService.getJobList().then(function (res) {
        if(res.data.code==0){
            vm.list = res.data.data;
        }
        else{
            alert(res.data.message)
        }
    })
    professionService.getBanner(1).then(function (res) {
        if(res.data.code==0){
            vm.bannerUrl = res.data.data;
        }
    })

//最新职位、推荐职位切换

//推荐职位请求
    professionService.getProfession(1,vm.params).then(function (res) {
        if (res.data.code==0){
            vm.professionInfo = res.data.data
            angular.forEach(vm.professionInfo,function (value) {
                if(value.logo==""){
                    value.logo="../images/noInfo.gif"
                }
            })

        }

    })
    professionService.getProfession(0,vm.params).then(function (res) {
        if (res.data.code==0){
            vm.newProfessionInfo = res.data.data;
            angular.forEach(vm.newProfessionInfo,function (value) {
                if(value.logo==""){
                    value.logo="../images/noInfo.gif"
                }
            })

        }
    })
    //行业大图
    professionService.getBanner(3).then(function (res) {
        if(res.data.code==0){
            vm.companyImgUrl = res.data.data.articleList[0];
        }
    })
    //优质公司
    professionService.getCompany({size:4,page:2}).then(function (res) {
        if(res.data.code==0) {
            vm.companyInfo = res.data.data;
            console.log(vm.companyInfo)
            angular.forEach(vm.companyInfo,function (value) {
                professionService.getProfession(0,{size:2,companyId:value.id}).then(function (resp) {
                    console.log("sssssssssssssssss")
                   value.jobList=resp.data.data
                    console.log(value.id)
                    console.log( value.jobList)
                })
            })
            console.log(vm.companyInfo)
        }
        else{
            alert(res.data.message)
        }
    })
    $('.carousel').carousel({
        // 轮播图自动轮播定时器
        interval: 4000
    })
$scope.exchangeJob = function(isChoose){
    if(isChoose==undefined||isChoose==false){
        vm.isChoose=!vm.isChoose;
    }
}
})