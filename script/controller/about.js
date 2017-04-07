/**
 * Created by wanwn on 2017/4/5.
 */
app.controller('aboutCtrl', ['$scope', '$rootScope', '$state', 'commonUtil',
        function ($scope, $rootScope, $state, commonUtil) {
            var vm = this;
            commonUtil.scrollTo(0, 0);
            vm.toggle = $state.params.status !== 'false';
            // 关于我们和联系我们切换
            if ($state.params.status === 'false' || undefined) {
                $('.showContact').tab('show');
                console.log($state.params.status)
            } else {
                $('.showAbout').tab('show');
                console.log($state.params.status)
            }
        }
    ]
);