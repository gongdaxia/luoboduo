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
    //二级职位类别
    .filter("jobSecondFilter",function (secondType) {
        return function (type) {
            for(var i=0; i<secondType.length; i++){
                if (type == secondType[i].type){
                    return secondType[i].name
                }
            }
        }
    })
    //薪资水平
    .filter("compensationFilter",function (compensation) {
        return function (type) {
            return compensation[type]
        }
    })
    //职位子类
    .filter("subCategoryFilter",function ( subCategory) {
        return function (type) {
            return subCategory[type]
        }
    })
    //公司行业
    .filter('industryFilter', function (industryInfo) {
        return function (input) {
            var arr=[];
            angular.forEach(input,function (value) {
                arr.push(industryInfo[value])
            })
            return arr.join(' ')
        }
    })
    //数组内包含对象的公司行业
    .filter('industryFilter1', function (industryInfo) {
        return function (input) {
            var arr=[];
            angular.forEach(input,function (value) {
                arr.push(industryInfo[value.industry])
            })
            return arr.join(' ')
        }
    })
    //融资规模
    .filter('financingFilter', function (financingInfo) {
        return function (input) {
            return financingInfo[input];

        }
    })
    //时间
    .filter('updateAtFilter', function (updateAttype, $filter) {
        return function (type) {
            var timestamp = new Date().getTime();
            timestamp = $filter('date')(timestamp, 'yyyyMMdd');
            var time = timestamp - $filter('date')(type, 'yyyyMMdd');
            if (time == 0) {
                return updateAttype[0].name + $filter('date')(type, 'HH:mm');
            } else if (time == 1) {
                return updateAttype[1].name + $filter('date')(type, 'HH:mm');
            } else {
                return $filter('date')(type, 'yyyy-MM-dd HH:mm');
            }
    }
})
    //     学历要求 education
    .filter('educationFilter', function (educationtype) {
        return function (type) {
            for (var i = 0; i < educationtype.length; i++) {
                if (type == educationtype[i].type) {
                    return educationtype[i].name;
                }
            }
        }
    });
//  工作经验 experience
app.filter('experienceFilter', function (experiencetype) {
    return function (type) {
        for (var i = 0; i < experiencetype.length; i++) {
            if (type == experiencetype[i].type) {
                return experiencetype[i].name;
            }
        }
    }
});