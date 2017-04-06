/**
 * Created by wanwn on 2017/4/6.
 */
app.controller('indexCtrl', function ($scope, $rootScope, $state) {
        var vm = this;
        $rootScope.$state = $state;
        if (document.body.clientWidth < 768) {
            vm.isToggle = "collapse";
        }
        else {
            vm.isToggle = "";
        }
    });