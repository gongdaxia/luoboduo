/**
 * Created by Administrator on 2017/4/3.
 */
app.directive('notFind', function ($state, professionService) {
    return {
        restrict: 'EA',
        templateUrl: 'script/directive/notFind/notFind.html',
        replace: true,
        scope: {
            size: '@',
            showrecommend: '@'
        },
        link: function (scope, element, attrs) {
            var data = {};
            data.size = scope.size;

            //获取推荐数据
            if (scope.showrecommend === "company") {
                professionService. getCompany(data).then(function (res) {
                    if (res.data.code == 0) {
                        scope.eliteCompany = res.data;
                        console.log(scope.eliteCompany)
                    }
                });
            } else if (scope.showrecommend === "position") {
                professionService.getRecommend(1,data).then(function (res) {
                    if (res.data.code == 0) {
                        scope.elitePosition = res.data;
                        angular.forEach(scope.elitePosition.data,function (value) {
                            if(value.logo==""){
                                value.logo="../images/noInfo.gif"
                            }
                        })
                    }
                    else {
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
                });
            }

        }
    }


});