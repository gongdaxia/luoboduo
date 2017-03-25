/**
 * Created by Administrator on 2017/3/25.
 */
//定义模块名
var skillApp = angular.module("skillApp",["ui.router","oc.lazyLoad"]);
//懒加载模块
var _lazyLoad = function(loaded){
    return function($ocLazyLoad){
        return $ocLazyLoad.load(loaded,{serie: true});
    }
};
//ui路由模块
skillApp.config(function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.when('',"/home");
    $stateProvider
        //首页
        .state("home",{
            url:"/home",
            templateUrl:"view/home.html",
            resole:{
                loadMyFile:_lazyLoad(
                    []
                )
            }
        })
        //找职位首页
        .state("profession",{
            url:"/profession",
            templateUrl:"view/profession.html",
            resole:{
                loadMyFile:_lazyLoad(
                    []
                )
            }
        })
        //找精英首页
        .state("company",{
            url:"/company",
            templateUrl:"view/company.html",
            resole:{
                loadMyFile:_lazyLoad(
                    []
                )
            }
        })
        //关于我们
        .state("about",{
            url:"/about",
            templateUrl:"view/about.html",
            resole:{
                loadMyFile:_lazyLoad(
                    []
                )
            }
        })
        //搜索结果页
        .state("searchPage",{
            url:"/searchPage",
            templateUrl:"view/profession/searchPage.html",
            resole:{
                loadMyFile:_lazyLoad(
                    []
                )
            }
        })
        // //公司搜索
        // .state("searchPage.companySearch",{
        //     url:"/companySearch",
        //     templateUrl:"view/profession/companySearch.html",
        //     resole:{
        //         loadMyFile:_lazyLoad(
        //             []
        //         )
        //     }
        // })
        // //职位搜索
        // .state("searchPage.professionSearch",{
        //     url:"/professionSearch",
        //     templateUrl:"view/profession/professionSearch.html",
        //     resole:{
        //         loadMyFile:_lazyLoad(
        //             []
        //         )
        //     }
        // })
        // //公司详情
        // .state("companyInfo",{
        //     url:"/companyInfo",
        //     templateUrl:"view/companyInfo.html",
        //     resole:{
        //         loadMyFile:_lazyLoad(
        //             []
        //         )
        //     }
        // })
        // //职位详情
        // .state("professionInfo",{
        //     url:"/professionInfo",
        //     templateUrl:"view/profession/professionInfo.html",
        //     resole:{
        //         loadMyFile:_lazyLoad(
        //             []
        //         )
        //     }
        // })
        //推荐职位列表页
        .state("recommendProfession",{
            url:"/recommendPage",
            templateUrl:"view/profession/recommendPage.html",
            resole:{
                loadMyFile:_lazyLoad(
                    []
                )
            }
        })
        //最新职位列表页
        .state("newProfession",{
            url:"/newProfession",
            templateUrl:"view/profession/newProfession.html",
            resole:{
                loadMyFile:_lazyLoad(
                    []
                )
            }
        })
        //公司列表页
        .state("companyList",{
            url:"/companyList",
            templateUrl:"view/companyList.html",
            resole:{
                loadMyFile:_lazyLoad(
                    []
                )
            }
        })
        //关于我们
        .state("about.aboutOur",{
            url:"/aboutOur",
            templateUrl:"view/aboutOur.html",
            resole:{
                loadMyFile:_lazyLoad(
                    []
                )
            }
        })
        //联系我们
        .state("about.contact",{
            url:"/contact",
            templateUrl:"view/contact.html",
            resole:{
                loadMyFile:_lazyLoad(
                    []
                )
            }
        })
})