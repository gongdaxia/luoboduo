/**
 * Created by Administrator on 2017/3/27.
 */
'use strict';
app.filter("jobTypeFilter", function(jobType) {
    return function(type) {
        for (var i = 0; i < jobType.length; i++) {
            if (type == jobType[i].type) {
                return jobType[i].name;
            }
        }
    }
})
    .filter("jobSecondFilter",function (secondType) {
        return function (type) {
            for(var i=0; i<secondType.length; i++){
                if (type == secondType[i].type){
                    return secondType[i].name
                }
            }
        }
    })
    .filter("compensationFilter",function (compensation) {
        return function (type) {
            return compensation[type]
        }
    })
    .filter("subCategoryFilter",function ( subCategory) {
        return function (type) {
            return subCategory[type]
        }
    })
