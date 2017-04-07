/**
 * Created by Administrator on 2017/4/6.
 */
app.controller("companyTxtCtrl",function ($scope, $rootScope, $state,$stateParams,professionService) {
    var vm = this;
    vm.companyId = $stateParams.id;
    console.log($stateParams);
    professionService.getProfession(0,{companyId:vm.companyId}).then(function (res) {
        if (res.data.code==0){
            vm.companyProfJob = res.data.data;
            console.log(vm.companyProfJob)
        }
    })
})