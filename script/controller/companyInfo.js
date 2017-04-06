/**
 * Created by Administrator on 2017/4/5.
 */
app.controller("companyInfoCtrl",function ($scope, $rootScope, $state,$stateParams,professionService) {
    var vm = this;
    vm.id = $stateParams.id;
    console.log($stateParams);
    professionService.getCompanyInfo(vm.id).then(function (res) {
        if(res.data.code===-100000){
            vm.jobInfo = res.data.data;
            console.log(vm.jobInfo)
        }
        else{
            alert(res.data.message)
        }
    })
})