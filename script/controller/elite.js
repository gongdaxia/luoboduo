/**
 * Created by wanwn on 2017/4/1.
 */
app.controller('eliteCtrl', function ($scope, $state, $http, $rootScope, professionService,commonUtil) {
    var vm = this;
    commonUtil.scrollTo(0, 0);
    vm.params = $state.params;
    vm.params.size = 8;
    professionService.getBanner(2).then(function (res) {
        // 获取banner图
        if (res.data.code == 0) {
            vm.bannerUrl = res.data.data;
            // console.log(res.data);
            $scope.eliteBanner = vm.bannerUrl.articleList[0];
            //由于第二张图是坏的，就先取第一张
            // console.log($scope.eliteBanner);
        }
    });
    // $('.carousel').carousel({
    //     // 轮播图自动轮播定时器
    //     interval: 2500
    // });
    professionService.getCompany(vm.params).then(function (res) {
        if (res.data.code == 0) {
            $scope.elite = res.data.data;
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

});