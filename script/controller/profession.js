/**
 * Created by Administrator on 2017/3/27.
 */
app.controller("professionCtrl",function ($scope,$state,$rootScope,professionService) {
    console.log("+++++++++++++++++++++++++")
    var vm = this;
    vm.params = $state.params;
    vm.params.size = 8;
    professionService.getJobList().then(function (res) {
        if(res.data.code==0){
            vm.list = res.data.data;
            console.log(res);
        }
    })
})
