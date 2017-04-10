/**
 * Created by Administrator on 2017/4/8.
 */
app.controller("recommendProfessionCtrl", function ($scope, $rootScope, $state, professionService, searchInfo, commonUtil, searchUtil) {
    var vm = this;
    vm.params = $state.params;
    vm.option = commonUtil.judegesessionStorage(sessionStorage.searchJobOptions, searchInfo);
    vm.selectedNum = commonUtil.selectNum(vm.option.category);
    //最新/推荐页面
    commonUtil.judegeJobList(vm);
    //标签多选
    vm.checkboxMulti = searchUtil.checkboxMulti;
    //时间标签单选
    vm.radioType = searchUtil.radioType;
    // 选中从其他页面传来的二级类目信息
    // if ($state.params.type) {
    //     vm.option.category[0].choose = false;
    //     vm.option.category[parseInt($state.params.type)].choose = true;
    // }
    // vm.selectSubCategoryFn = function (index) {
    //     // 判断选中的数量
    //     vm.selectedNum = commonUtil.selectNum(vm.option.category);
    //     // 判断需要展开详情的类目
    //     vm.showCategoryNum = commonUtil.judgeShowCategoryDetail(vm.option.category);
    //     // 展开三级类目
    //     if (index > 0 && vm.selectedNum < 2 && vm.showCategoryNum > 0) {
    //         vm.option.subCategory = searchInfoCopy.subCategory[vm.showCategoryNum - 1].data;
    //     }
    //     // 清除三级类目数据
    //     else if (index === 0 || vm.showCategoryNum === 0 || vm.selectedNum > 1) {
    //         vm.option.subCategory = [];
    //     }
    // };
    // 选中从其他页面传来的三级类目信息
    // vm.selectSubCategoryFn(parseInt($state.params.type) + 1);
    // if ($state.params.subType && vm.option.subCategory.length > 0) {
    //     vm.option.subCategory[0].choose = false;
    //     vm.option.subCategory[parseInt($state.params.subType)].choose = true;
    //     console.log(vm.option.subCategory);
    // }
    // 选出tag标签中选中的数据，将数据拼接成数组
    vm.data = searchUtil.dataConvert(vm.option);
    console.log(vm.data);
    console.log(vm.option);
    // 将选出的数据存入本地
    sessionStorage.searchJobOptions = JSON.stringify(vm.option);
    // 拼凑字段
    vm.data.name = $state.params.name;
    vm.data.size = $state.params.size;
    vm.data.page = $state.params.page;
    vm.data.returnTags = 1;
    console.log("q" + vm.data.name);
    professionService.getRecommend(vm.positionType,vm.data).then(function (res) {
        if (res.data.code == 0) {
            // console.log(res.data.data);
            vm.profContent = res.data.data;
            angular.forEach(vm.profContent,function (value) {
                if(value.logo==""){
                    value.logo="../images/noInfo.gif"
                }
            });
            vm.total = res.data.total;
            // console.log(vm.total)
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
        // 判断找不到页面或找不到内容
        vm.isNotFind = commonUtil.judgeNotFind(res.data);
        // 找不到内容时，是否推荐
        vm.isShowRecommend = "position"
    });
    vm.search = function () {
        sessionStorage.searchJobOptions = JSON.stringify(vm.option);
        // 刷新当前界面
        $state.go($state.current, {
            page: 1, size: 10, name: vm.data.name, type: null, subType: null
        }, {reload: true});
    };
    //清除
    vm.clear = function () {
        sessionStorage.removeItem("searchJobOptions");
        sessionStorage.searchJobOptions = JSON.stringify(searchInfo);
        $state.go($state.current, {page: 1, size: 9, name: null}, {reload: true});
    };
});