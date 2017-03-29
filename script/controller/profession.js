/**
 * Created by Administrator on 2017/3/27.
 */
app.controller("professionCtrl",function ($scope,$state,$rootScope,professionService) {
    console.log("+++++++++++++++++++++++++")
    var vm = this;
    vm.params = $state.params;
    vm.params.size = 8;
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
            console.log( res.data)
        }
    })

//最新职位、推荐职位切换

//推荐职位请求
    professionService.getProfession(1,vm.params).then(function (res) {
        if (res.data.code==0){
            vm.professionInfo = res.data.data
            alert(res.data.message)
            console.log(vm.professionInfo[2].companyName)
        }

    })
    professionService.getProfession(0,vm.params).then(function (res) {
        if (res.data.code==0){
            vm.newProfessionInfo = res.data.data;
        }
    })
$scope.exchangeJob = function(isChoose){
    if(isChoose==undefined||isChoose==false){
        vm.isChoose=!vm.isChoose;
    }
}
})