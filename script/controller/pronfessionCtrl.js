/**
 * Created by Administrator on 2017/4/5.
 */
app.controller("professionInfoCtrl",function ($scope, $rootScope, $state,$stateParams,professionService,commonUtil) {
    var vm = this;
    commonUtil.scrollTo(0, 0);
    vm.id = $stateParams.id;
    // console.log($stateParams);
    professionService.getProfessionInfo(vm.id).then(function (res) {
        if(res.data.code===0){
            vm.jobInfo = res.data.data;
            console.log(vm.jobInfo)
            if(vm.jobInfo.logo==""){
                vm.jobInfo.logo="../images/noInfo.gif"
            }
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
    })
})