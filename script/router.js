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
            url: "/about",
            templateUrl: "view/about.html",
            resolve: {
                loadMyFile: _lazyLoad(
                    []
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
        .state("searchPage.companySearch",{
            url:"/companySearch",
            templateUrl:"view/profession/companySearch.html",
            controller:"companyCtrl",
            controllerAs: 'vm',
            resolve:{
                loadMyFile:_lazyLoad(
                    ["style/my/profession/professionSearch.css","style/my/profession/companySearch.css","script/controller/companySearch.js"]
                )
            }
        })
        //职位搜索
        .state("searchPage.professionSearch",{
            url:"/professionSearch?page&size&type&subType&name",
            templateUrl:"view/profession/professionSearch.html",
            controller:"searchJobCtrl",
            controllerAs: 'vm',
            resolve:{
                loadMyFile:_lazyLoad(  ["style/my/profession/professionSearch.css",
                  "script/controller/professionSearch.js","notFind"]
                )
            }
        })
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
        .state("recommendProfession", {
            url: "/recommendPage",
            templateUrl: "view/profession/recommendPage.html",
            resolve: {
                loadMyFile: _lazyLoad(
                    []
                )
            }
        })
        //最新职位列表页
        .state("newProfession", {
            url: "/newProfession",
            templateUrl: "view/profession/newProfession.html",
            resolve: {
                loadMyFile: _lazyLoad(
                    []
                )
            }
        })
        //公司列表页
        .state("companyList", {
            url: "/companyList",
            templateUrl: "view/companyList.html",
            resolve: {
                loadMyFile: _lazyLoad(
                    []
                )
            }
        })
        //关于我们
        .state("about.aboutOur", {
            url: "/aboutOur",
            templateUrl: "view/aboutOur.html",
            resolve: {
                loadMyFile: _lazyLoad(
                    []
                )
            }
        })
        //联系我们
        .state("about.contact", {
            url: "/contact",
            templateUrl: "view/contact.html",
            resolve: {
                loadMyFile: _lazyLoad(
                    []
                )
            }
        })
}
