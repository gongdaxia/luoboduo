/**
 * Created by Administrator on 2017/4/5.
 */
app.controller("companyInfoCtrl",function ($scope, $rootScope, $state,$stateParams,professionService) {
    var vm = this;
    vm.id = $stateParams.id;
    vm.companyId = $stateParams.id;
    console.log($stateParams);
    professionService.getCompanyInfo(vm.id).then(function (res) {
        if(res.data.code===0){
            vm.companyInfo = res.data.data;
            console.log( vm.companyInfo)
        }
        else{
            alert(res.data.message)
        }
    });
    $scope.exchangeJob = function(isChoose){
        if(isChoose==undefined||isChoose==false){
            vm.isChoose=!vm.isChoose;
        }
    }
})