
app.factory('commonUtil',function () {
    return{
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
                if(item.choose === true){
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
        //搜索单选

    }
});
app.factory('searchUtil',function () {
    return{
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