app.factory('commonUtil', function ($rootScope) {
    return {
        pageDefault: {page: 1, size: 10, next: true},
        //跳转界面位置
        scrollTo: function (x, y) {
            window.scrollTo(x, y);
        },
        //推荐职位和最新职位切换
        judegeJobList: function (judegeData) {
            if (judegeData.params.n === "false") {
                $rootScope.recommendAndNewJob = "推荐职位";
                judegeData.params.n = null;
                judegeData.positionType = 1;
            }
            else if (judegeData.params.n === "true") {
                $rootScope.recommendAndNewJob = "最新职位";
                judegeData.params.n = null;
                judegeData.positionType = 0;
            }
            return judegeData;
        },
        //此函数判断进入页面是否有参数，没有为默认值，有获取参数
        judegesessionStorage: function (judge, data) {
            var dataCopy = angular.copy(data);
            if (judge === undefined) {
                var option = dataCopy;
            } else {
                option = JSON.parse(judge);
            }
            return option;
        },
        //选中数量
        selectNum: function (data) {
            var i = 0;
            data.forEach(function (item) {
                if (item.choose === true) {
                    i++;
                }
            });
            return i;
        },
        // 判断需要展开详情的类目
        judgeShowCategoryDetail: function (data) {
            for (var x = 0; x < 12; x++) {
                if (data[x].choose === true) {
                    return x;
                }
            }
        },
        // 判断找不到页面或找不到内容
        judgeNotFind: function (data) {
            if (data.code < 0 || data.data.length === 0) {
                return true;
            }
        },
        //行业属性数据拼接
        industryListCtrl:function (data) {
            var industry=[];
            var obj={};
            if(data!==undefined){
            data.forEach(function (item) {
                obj={industry:item};
                industry.push(obj);
            })
            }
            return industry;
        }
    }
});
app.factory('searchUtil', function () {
    return {
        //搜索多选
        checkboxMulti: function (ind, arr) {
            if (ind === 0) {
                arr.forEach(function (item) {
                    item.choose = false
                });
                arr[0].choose = true
            } else {
                arr[ind].choose = !arr[ind].choose;
                arr[0].choose = false;
                if (arr.every(function (item) {
                        return item.choose === false
                    })) {
                    arr[0].choose = !arr[0].choose;
                }
            }
        },
        //判断单选
        radioType: function (ind, arr) {
            arr[ind].choose = !arr[ind].choose;
            arr.forEach(function (item, index) {
                if (index !== ind) {
                    item.choose = false
                }
                else if (arr.every(function (item) {
                        return item.choose == false
                    })) {
                    arr[0].choose = true;
                }
            })
        },
        //数据转数组
        dataConvert: function (data) {
            //转换为字符串
            var asdas = {};
            var dataname;
            for (dataname in data) {
                asdas[dataname] = data[dataname].filter(function (item, index) {
                    return item.choose === true
                });
                asdas[dataname] = asdas[dataname].map(function (item) {
                    return item.type
                });
                asdas[dataname] = asdas[dataname].toString()
            }
            return asdas;
        },
    }
})