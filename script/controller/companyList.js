/**
 * Created by wanwn on 2017/4/7.
 */

app.controller("companyCtrl", function ($scope, $rootScope, $state, professionService, searchInfo, commonUtil, searchUtil) {
    var vm = this;
    // 读取本地记录
    vm.option = commonUtil.judegesessionStorage(sessionStorage.searchCompanyOptions, searchInfo);
    vm.checkboxMulti = function (index, arry) {
        searchUtil.checkboxMulti(index, arry);
        vm.search();
    };
    // 选出tag标签中选中的数据，将数据拼接成数组
    vm.data = searchUtil.dataConvert(vm.option);
    sessionStorage.searchJobOptions = JSON.stringify(vm.option);
    // 拼凑字段
    vm.data.name = $state.params.name;
    vm.data.size = $state.params.size = 9;
    vm.data.page = $state.params.page;
    professionService.getCompany(vm.data).then(function (res) {
        if (res.data.code == 0) {
            vm.companyInfo = res.data.data;
            vm.total = res.data.total;
            console.log(vm.total)
        }
        else {
            alert(res.code.message)
        }
        // 判断找不到页面或找不到内容
        vm.isNotFind = commonUtil.judgeNotFind(res.data);
        // 找不到内容时，是否推荐
        vm.isShowRecommend = "company"
    });
    vm.search = function () {
        sessionStorage.searchCompanyOptions = JSON.stringify(vm.option);
        // 刷新当前界面
        $state.go($state.current, {page: 1, size: 9, name: vm.data.name}, {reload: true});
    };
});
