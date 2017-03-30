/**
 * Created by wanwn on 2017/3/30.
 */
app.controller('homeCtrl', function ($scope, $state, $rootScope, professionService) {
    var vm = this;
    vm.params = $state.params;
    vm.params.size = 4;
    professionService.getBanner(0).then(function (res) {
        // 获取banner图
        if (res.data.code == 0) {
            vm.bannerUrl = res.data.data;
            console.log(res.data)
        }
    });
    $('.carousel').carousel({
        // 轮播图自动轮播定时器
        interval: 2000
    })
});