/**
 * Created by Administrator on 2017/3/27.
 */
app.controller("professionCtrl", function ($scope, $state, $rootScope, professionService, commonUtil) {
    // console.log("+++++++++++++++++++++++++")
    var vm = this;
    commonUtil.scrollTo(0, 0);
    vm.params = $state.params;
    vm.params.size = 8;
    delete sessionStorage.searchCompanyOptions;
    delete sessionStorage.searchJobOptions;
    delete sessionStorage.searchJobOptions;
    professionService.getJobList().then(function (res) {
        if (res.data.code == 0) {
            vm.list = res.data.data;
        }
        else {
            bootbox.alert({
                buttons: {
                    ok: {
                        label: '关闭',
                        className: 'btn-danger'
                    }
                },
                message: '公司搜索：' + res.data.message,
                title: "提示"
            });
        }
    })
    professionService.getBanner(1).then(function (res) {
        if (res.data.code == 0) {
            vm.bannerUrl = res.data.data;
        }
        else {
            bootbox.alert({
                buttons: {
                    ok: {
                        label: '关闭',
                        className: 'btn-danger'
                    }
                },
                message: '公司搜索：' + res.data.message,
                title: "提示"
            });
        }
    })

//最新职位、推荐职位切换

//推荐职位请求
    professionService.getRecommend(1, vm.params).then(function (res) {
        if (res.data.code == 0) {
            vm.professionInfo = res.data.data
            angular.forEach(vm.professionInfo, function (value) {
                if (value.logo == "") {
                    value.logo = "../images/noInfo.gif"
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
                message: '公司搜索：' + res.data.message,
                title: "提示"
            });
        }

    })
    //最新职位
    professionService.getRecommend(0, vm.params).then(function (res) {
        if (res.data.code == 0) {
            vm.newProfessionInfo = res.data.data;
            angular.forEach(vm.newProfessionInfo, function (value) {
                if (value.logo == "") {
                    value.logo = "../images/noInfo.gif"
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
                message: '公司搜索：' + res.data.message,
                title: "提示"
            });
        }
    })
    //行业大图
    professionService.getBanner(3).then(function (res) {
        if (res.data.code == 0) {
            vm.companyImgUrl = res.data.data.articleList[0];
        }
    })
    //优质公司
    professionService.getCompany({size: 1, page: 1}).then(function (res) {
        if (res.data.code == 0) {
            vm.companyInfo = res.data.data;
            // console.log(vm.companyInfo)
        }
        else {
            bootbox.alert({
                buttons: {
                    ok: {
                        label: '关闭',
                        className: 'btn-danger'
                    }
                },
                message: '公司搜索：' + res.data.message,
                title: "提示"
            });
        }
    })
    professionService.getRecommend(0,{size:8,page:1}).then(function (res) {
        if (res.data.code==0) {
            vm.newJob = res.data.data;
            console.log(vm.newJob)
            vm.newJob1=vm.newJob
            vm.carouselJob = vm.newJob1.slice(0,4);
            angular.forEach(vm.carouselJob, function (value) {
                professionService.getCompanyInfo(value.companyId).then(function (mes) {
                    if (mes.data.code == 0) {
                        value.companySlogan = mes.data.data.company.slogan;
                    }
                })
                professionService.getProfession({companyId:value.companyId}).then(function (num) {
                    if(num.data.code==0){
                        value.jobName = num.data.data;
                    }
                })
            })
            console.log( vm.carouselJob)
            console.log( vm.newJob)
            // for(var i=0;i<4;i++){
            //     professionService.getCompanyInfo(vm.newJob[i].companyId).then(function (mes) {
            //         if (mes.data.code==0){
            //             vm.newCompany = mes.data.data;
            //
            //         }
            //     })
            //     setTimeout(function () {
            //         professionService.getProfession({companyId:vm.newJob[i].companyId}).then(function (num) {
            //             if (num.data.code==0){
            //                 vm.newCompany.jobName = num.data.data;
            //                 console.log(vm.newCompany)
            //             }
            //         })
            //     },500)

        }})
    $('.carousel').carousel({
        // 轮播图自动轮播定时器
        interval: 4000
    })
    $scope.exchangeJob = function (isChoose) {
        if (isChoose == undefined || isChoose == false) {
            vm.isChoose = !vm.isChoose;
        }
    }
})