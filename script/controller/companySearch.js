/**
 * Created by Administrator on 2017/4/4.
 */
app.controller("companyCtrl",function ($scope,$rootScope,$state,professionService,searchInfo,commonUtil,searchUtil) {
    var vm=this;
    var searchInfoCopy = angular.copy(searchInfo);
    vm.option = searchInfoCopy;
    vm.checkboxMulti = searchUtil.checkboxMulti;
    // 选出tag标签中选中的数据，将数据拼接成数组
    vm.data = searchUtil.dataConvert(vm.option);
    console.log(vm.data);
    console.log(vm.option);
    sessionStorage.searchJobOptions = JSON.stringify(vm.option);
    // 拼凑字段
    vm.data.name = $state.params.name;
    vm.data.size = $state.params.size=9;
    vm.data.page = $state.params.page;
    professionService.getCompany(vm.data).then(function (res) {
        if (res.data.code==0){
            vm.companyInfo = res.data.data;
            console.log("++++++++++++++++++++++++")
            console.log(vm.companyInfo)
        }
    })
    vm.search = function () {
        sessionStorage.searchJobOptions = JSON.stringify(vm.option);
        // 刷新当前界面
        $state.go($state.current, {
            page: 1, size: 10, name: vm.data.name, type: null, subType: null
        }, {reload: true});
    }
})