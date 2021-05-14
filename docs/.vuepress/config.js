module.exports = {
    title: '接入支持',
    description: 'Just playing around',
    base: '/vuepress/',
    dest:'public',
    themeConfig: {
        // nav: [
        //   { text: 'Home', link: '/' },
        //   { text: 'Guide', link: '/dd' },
        //   { text: 'External', link: 'https://google.com' },
        // ],
        // sidebar:{
        //     '/sdk/': [
        //       '',     /* /foo/ */
        //       'README2',  /* /foo/one.html */
        //       'README3'   /* /foo/two.html */
        //     ]
        //   }
        sidebar: [
            {
                title: '前言',   // 必要的
                path: '/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
            },
            {
                title: '应用取密对接',
                collapsable: false,
                children: [{
                    title: '取密配置文件',
                    path: '/support/README2',
                }, {
                    title: 'RESTful接口',
                    path: '/support/README3',
                }, {
                    title: 'SOAP接口',
                    path: '/support/README4',
                }, {
                    title: 'socket长连接通讯',
                    path: '/support/README5',
                }],
                initialOpenGroupIndex: -1 // 可选的, 默认值是 0
            },
            {
                title: 'SDK',
                collapsable: false,
                children: [{
                    title: 'java sdk',
                    path: '/sdk/java',
                }, {
                    title: 'python sdk',
                    path: '/sdk/README2',
                }, {
                    title: '.net sdk',
                    path: '/sdk/README3',
                }, {
                    title: 'c/c++ sdk',
                    path: '/sdk/README4',
                }, {
                    title: 'go sdk',
                    path: '/sdk/README5',
                }],
                initialOpenGroupIndex: -1 // 可选的, 默认值是 0
            },
            {
               
                title: '中间件',
                collapsable: false,
                children: [{
                    title: '控制台重置密码',
                    path: '/sdk/',
                }, {
                    title: '更新数据库连接池密码',
                    path: '/sdk/',
                }],
                initialOpenGroupIndex: -1 // 可选的, 默认值是 0
            },
            {
                title: 'oracle_db_link重置密码',
                children: [ /* ... */],
                initialOpenGroupIndex: -1 // 可选的, 默认值是 0
            },
            {
                title: 'CLI',
                children: [ /* ... */],
                initialOpenGroupIndex: -1 // 可选的, 默认值是 0
            },

        ]
    }
}