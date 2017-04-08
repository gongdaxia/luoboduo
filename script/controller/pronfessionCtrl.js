/**
 * Created by Administrator on 2017/4/5.
 */
app.controller("professionInfoCtrl",function ($scope, $rootScope, $state,$stateParams,professionService) {
    var vm = this;
    vm.id = $stateParams.id;
    console.log($stateParams);
    professionService.getProfessionInfo(vm.id).then(function (res) {
        if(res.data.code===0){
            vm.jobInfo = res.data.data;
            if(vm.jobInfo.logo==""){
                vm.jobInfo.logo="../images/noInfo.gif"
            }
        }
        else{
            alert(res.data.message)
        }
    })
})