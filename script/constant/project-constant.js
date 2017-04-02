/**
 * Created by Administrator on 2017/4/1.
 */
app.constant("searchInfo",{
    province:[
        {name:"不限",choose:true},
        {type:1,name:"北京",choose:false}
    ],
    category: [
        {name: '不限', choose: true},
        {type: 1, name: '产品', choose: false},
        {type: 2, name: 'UI', choose: false},
        {type: 3, name: 'QA', choose: false},
        {type: 4, name: 'Android', choose: false},
        {type: 5, name: 'IOS', choose: false},
        {type: 6, name: 'WEB', choose: false},
        {type: 7, name: 'OP', choose: false},
        {type: 8, name: 'Java', choose: false},
        {type: 9, name: 'NLP', choose: false},
        {type: 10, name: 'DM', choose: false},
        {type: 11, name: 'DL', choose: false}
    ],
    subCategory: [
        {
            name: "产品",
            data: [{name: '不限', choose: true},
                {type: 1, name: '助理', choose: false},
                {type: 2, name: '初级', choose: false},
                {type: 3, name: '中级', choose: false},
                {type: 4, name: '高级', choose: false},
                {type: 5, name: '总监', choose: false}]
        },
        {
            name: "UI",
            data: [{name: '不限', choose: true},
                {type: 1, name: '初级', choose: false},
                {type: 2, name: '中级', choose: false},
                {type: 3, name: '高级', choose: false},
                {type: 4, name: '总监', choose: false}
            ]
        },
        {
            name: "QA",
            data: [{name: '不限', choose: true},
                {type: 1, name: '初级', choose: false},
                {type: 2, name: '中级', choose: false},
                {type: 3, name: '高级', choose: false}
            ]
        },
        {
            name: "Android",
            data: [{name: '不限', choose: true},
                {type: 1, name: '初级', choose: false},
                {type: 2, name: '中级', choose: false},
                {type: 3, name: '高级', choose: false}
            ]
        },
        {
            name: "IOS",
            data: [{name: '不限', choose: true},
                {type: 1, name: '初级', choose: false},
                {type: 2, name: '中级', choose: false},
                {type: 3, name: '高级', choose: false}
            ]
        },
        {
            name: "WEB",
            data: [{name: '不限', choose: true},
                {type: 1, name: '初级', choose: false},
                {type: 2, name: '中级', choose: false},
                {type: 3, name: '高级', choose: false}
            ]
        },
        {
            name: "OP",
            data: [{name: '不限', choose: true},
                {type: 1, name: '初级', choose: false},
                {type: 2, name: '中级', choose: false},
                {type: 3, name: '高级', choose: false}
            ]
        },
        {
            name: "Java",
            data: [{name: '不限', choose: true},
                {type: 1, name: '初级', choose: false},
                {type: 2, name: '中级', choose: false},
                {type: 3, name: '高级', choose: false},
                {type: 4, name: '总监', choose: false}
            ]
        },
        {
            name: "NLP",
            data: [{name: '不限', choose: true},
                {type: 1, name: '初级', choose: false},
                {type: 2, name: '中级', choose: false},
                {type: 3, name: '高级', choose: false}
            ]
        },
        {
            name: "DM",
            data: [{name: '不限', choose: true},
                {type: 1, name: '初级', choose: false},
                {type: 2, name: '中级', choose: false},
                {type: 3, name: '高级', choose: false}
            ]
        },
        {
            name: "DL",
            data: [{name: '不限', choose: true},
                {type: 1, name: '初级', choose: false},
                {type: 2, name: '中级', choose: false},
                {type: 3, name: '高级', choose: false}
            ]
        }
    ],
    education: [
        {name: '不限', choose: true},
        {type: 0, name: '大专', choose: false},
        {type: 1, name: '本科', choose: false},
        {type: 2, name: '硕士', choose: false},
        {type: 3, name: '博士及以上', choose: false}
    ],
    compensation: [
        {name: '不限', choose: true},
        {type: 0, name: '8K以下', choose: false},
        {type: 1, name: '8K-15K', choose: false},
        {type: 2, name: '16K-25K', choose: false},
        {type: 3, name: '25K以上', choose: false}
    ],
    experience: [
        {name: '不限', choose: true},
        {type: 0, name: '应届', choose: false},
        {type: 1, name: '1~2年', choose: false},
        {type: 2, name: '3~5年', choose: false},
        {type: 3, name: '6～9年', choose: false},
        {type: 4, name: '10年及以上', choose: false}
    ],
    updateAt: [
        {name: '不限', choose: true},
        {type: 0, name: '24h内', choose: false},
        {type: 1, name: '三天内', choose: false},
        {type: 2, name: '七天内', choose: false}
    ]
})