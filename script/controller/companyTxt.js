/**
 * Created by Administrator on 2017/4/6.
 */
app.controller("companyTxtCtrl",function ($scope, $rootScope, $state,$stateParams,professionService) {
    var vm = this;
    vm.companyId = $stateParams.id;
    console.log($stateParams);
    professionService.getProfession({companyId:vm.companyId}).then(function (res) {
        if (res.data.code==0){
            vm.companyProfJob = res.data.data;
            vm.total=res.data.total;
            console.log(vm.companyProfJob)
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