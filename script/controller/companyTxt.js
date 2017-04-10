/**
 * Created by Administrator on 2017/4/6.
 */
app.controller("companyTxtCtrl",function ($scope, $rootScope, $state,$stateParams,professionService,commonUtil) {
    var vm = this;
    vm.companyId = $stateParams.id;
    // console.log($stateParams);
    professionService.getProfession({companyId:vm.companyId}).then(function (res) {
        if (res.data.code==0){
            vm.companyProfJob = res.data.data;
            vm.total=res.data.total;
            // console.log(vm.companyProfJob)
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
        vm.isShowRecommend = "none"
    })
})