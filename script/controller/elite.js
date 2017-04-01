/**
 * Created by wanwn on 2017/4/1.
 */
app.controller('eliteCtrl', function ($scope, $state, $http, $rootScope, professionService) {
    var vm = this;
    vm.params = $state.params;
    vm.params.size = 10;
    professionService.getBanner(2).then(function (res) {
        // 获取banner图
        if (res.data.code == 0) {
            vm.bannerUrl = res.data.data;
            console.log(res.data);
            $scope.eliteBanner = vm.bannerUrl.articleList[0];
            //由于第二张图是坏的，就先取第一张
            console.log($scope.eliteBanner);
        }
    });
    $('.carousel').carousel({
        // 轮播图自动轮播定时器
        interval: 2500
    });

});