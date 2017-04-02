/**
 * Created by Administrator on 2017/4/1.
 */
app.controller("searchJobCtrl",function ($scope,$rootScope,$state,professionService,searchInfo,commonUtil,searchUtil) {
    var vm = this;
    var searchInfoCopy = angular.copy(searchInfo);
    vm.option = searchInfoCopy;
    vm.selectedNum = commonUtil.selectNum(vm.option.category);
    //标签多选
    vm.checkboxMulti = searchUtil.checkboxMulti;
})