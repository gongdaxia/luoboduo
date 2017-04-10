/**
 * Created by Administrator on 2017/4/4.
 */
app.controller("companyCtrl",function ($scope,$rootScope,$state,professionService,searchInfo,commonUtil,searchUtil) {
    var vm=this;
    // 读取本地记录
    //跳转到本页面保持顶部
    commonUtil.scrollTo(0, 0);
    vm.option = commonUtil.judegesessionStorage(sessionStorage.searchCompanyOptions, searchInfo);
    vm.checkboxMulti = searchUtil.checkboxMulti;
    // 选出tag标签中选中的数据，将数据拼接成数组
    vm.data = searchUtil.dataConvert(vm.option);
    // console.log(vm.data);
    // console.log(vm.option);
    sessionStorage.searchJobOptions = JSON.stringify(vm.option);
    // 拼凑字段
    vm.data.name = $state.params.name;
    vm.data.size = $state.params.size=9;
    vm.data.page = $state.params.page;
    professionService.getCompany(vm.data).then(function (res) {
        if (res.data.code==0){
            vm.companyInfo = res.data.data;
            // console.log("++++++++++++++++++++++++")
            // console.log(res.data.total)
            vm.total = res.data.total;
            angular.forEach( vm.companyInfo,function (value) {
                if(value.logo==""){
                    value.logo="../images/noInfo.gif"
                }
            })
        }
        else{
            bootbox.alert({
                buttons: {
                    ok: {
                        label: '关闭',
                        className: 'btn-danger'
                    }
                },
                message: '公司搜索：'+res.data.message,
                title: "提示"
            });
        }
        // 判断找不到页面或找不到内容
        vm.isNotFind = commonUtil.judgeNotFind(res.data);
        // 找不到内容时，是否推荐
        vm.isShowRecommend = "company"
    });
    vm.search = function () {
        sessionStorage.searchCompanyOptions = JSON.stringify(vm.option);
        // 刷新当前界面
        $state.go($state.current, {page: 1, size: 9, name:vm.data.name}, {reload: true});
    };
    //清除
    vm.clear = function () {
        sessionStorage.removeItem("searchCompanyOptions");
        sessionStorage.searchCompanyOptions = JSON.stringify(searchInfo);
        $state.go($state.current, {page: 1, size: 9, name: null}, {reload: true});
    };
});
