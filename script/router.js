/**
 * Created by Administrator on 2017/3/25.
 */
//懒加载模块
function projectRouteConfig($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $locationProvider) {
    var _lazyLoad = function (loaded) {
        return function ($ocLazyLoad) {
            return $ocLazyLoad.load(loaded, {serie: true});
        }
    };
    $ocLazyLoadProvider.config({
        debug: false,
        events: true
    });

//ui路由模块
    $urlRouterProvider.when('', "/home");
    $stateProvider
    //首页
        .state("home", {
            url: "/home",
            templateUrl: "view/home.html",
            controller: 'homeCtrl',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    ['style/my/company/home.css', 'script/controller/home.js',
                        'script/directive/jqbootstrap-carouse/jqbootstrap-carouse.css',
                        'script/directive/jqbootstrap-carouse/jqbootstrap-carouse.html',
                        'script/directive/jqbootstrap-carouse/jqbootstrap-carouse.js']
                )
            }
        })
        //找职位首页
        .state("profession", {
            url: "/profession",
            templateUrl: "view/profession.html",
            controller: 'professionCtrl',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    ["style/my/profession/profession.css", "script/controller/profession.js"]
                )
            }
        })
        //找精英首页
        .state("elite", {
            url: "/elite",
            templateUrl: "view/elite.html",
            controller: 'eliteCtrl',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    ['style/my/company/elite.css', 'script/controller/elite.js']
                )
            }
        })
        //关于我们
        .state("about", {
            url: "/about?status",
            templateUrl: "view/about.html",
            controller: 'aboutCtrl',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    ['style/my/company/about.css', 'script/controller/about.js']
                )
            }
        })
        //搜索结果页
        .state("searchPage", {
            url: "/searchPage",
            templateUrl: "view/profession/searchPage.html",
            resolve: {
                loadMyFile: _lazyLoad(
                    ["style/my/profession/searchPage.css"]
                )
            }
        })
        //公司搜索
        .state("searchPage.companySearch", {
            url: "/companySearch?page&size&name",
            templateUrl: "view/profession/companySearch.html",
            controller: "companyCtrl",
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    ["style/my/profession/professionSearch.css",
                        "style/my/profession/companySearch.css",
                        "script/controller/companySearch.js",
                        "notFind",
                        'script/directive/fsp-paging/pagination.html',
                        'script/directive/fsp-paging/pagination.js']
                )
            }
        })
        //职位搜索
        .state("searchPage.professionSearch", {
            url: "/professionSearch?page&size&type&subType&name",
            templateUrl: "view/profession/professionSearch.html",
            controller: "searchJobCtrl",
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    ["style/my/profession/professionSearch.css",
                        "style/my/profession/companySearch.css",
                        "script/controller/professionSearch.js",
                        "notFind",
                        'script/directive/fsp-paging/pagination.html',
                        'script/directive/fsp-paging/pagination.js']
                )
            }
        })
        //公司详情
        .state("companyInfo", {
            url: "/companyInfo?id&companyId",
            templateUrl: "view/profession/companyInfo.html",
            controller: "companyInfoCtrl",
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    ["script/controller/companyInfo.js", "style/my/profession/companyInfo.css"]
                )
            }
        })
        //公司详情。在招职位
        .state("companyInfo.companyTxt", {
            url: "/companyTxt&companyId",
            templateUrl: "view/profession/companyTxt.html",
            controller: "companyTxtCtrl",
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    ["script/controller/companyTxt.js", "style/my/profession/companyTxt.css"]
                )
            }
        })
        // .state("companyInfo",{
        //     url:"/companyInfo?id&companyId",
        //     templateUrl:"view/profession/companyInfo.html",
        //     controller:"companyInfoCtrl",
        //     controllerAs: 'vm',
        //     resolve:{
        //         loadMyFile:_lazyLoad(
        //             ["script/controller/companyInfo.js","style/my/profession/companyInfo.css"]
        //         )
        //     }
        // })
        //职位详情
        .state("professionInfo", {
            url: "/professionInfo?id",
            templateUrl: "view/profession/professionInfo.html",
            controller: "professionInfoCtrl",
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    ["script/controller/pronfessionCtrl.js",
                        "style/my/profession/professionInfo.css"]
                )
            }
        })
        //推荐职位列表页
        .state("recommendProfession", {
            url: "/recommendPage?n&s?page&size&type&subType&name",
            templateUrl: "view/profession/recommendProfession.html",
            controller: "recommendProfessionCtrl",
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    ["script/controller/recommendProfession.js",
                        "style/my/profession/professionSearch.css",
                        "style/my/profession/recommendProfession.css",
                        'script/directive/fsp-paging/pagination.html',
                        'script/directive/fsp-paging/pagination.js',
                        'notFind']
                )
            }
        })
        // //最新职位列表页
        // .state("newProfession", {
        //     url: "/newProfession",
        //     templateUrl: "view/profession/newProfession.html",
        //     controller: "newProfessionCtrl",
        //     controllerAs: 'vm',
        //     resolve: {
        //         loadMyFile: _lazyLoad(
        //             ["script/controller/newProfession.js", "style/my/profession/professionSearch.css"]
        //         )
        //     }
        // })
        //公司列表页
        .state("companyList", {
            url: "/companyList",
            templateUrl: "view/companyList.html",
            controller: "companyCtrl",
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    ["style/my/profession/professionSearch.css",
                        "style/my/profession/companySearch.css",
                        "script/controller/companyList.js",
                        "style/my/company/companyList.css",
                        'script/directive/fsp-paging/pagination.html',
                        'script/directive/fsp-paging/pagination.js',
                        'notFind']
                )
            }
        });
    // //关于我们
    // .state("about.aboutOur", {
    //     url: "/aboutOur",
    //     templateUrl: "view/aboutOur.html",
    //     resolve: {
    //         loadMyFile: _lazyLoad(
    //             []
    //         )
    //     }
    // })
    // //联系我们
    // .state("about.contact", {
    //     url: "/contact",
    //     templateUrl: "view/contact.html",
    //     resolve: {
    //         loadMyFile: _lazyLoad(
    //             []
    //         )
    //     }
    // })
}
