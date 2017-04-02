
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
        }
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
    }
})