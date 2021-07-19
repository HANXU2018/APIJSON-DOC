module.exports = {
    port: "3000",
    dest: "docs",
    ga: "UA-xxxxxxxxxxx-1",
    base: "/APIJSON-DOC/",
    markdown: {
        lineNumbers: true,
        externalLinks: {
            target: '_blank', rel: 'noopener noreferrer'
        }
    },
    locales: {
        "/": {
            lang: "zh-CN",
            title: "APIJSON 文档",
            description: "🏆码云最有价值开源项目🚀后端接口和文档自动化，前端(客户端) 定制返回 JSON 的数据和结构！"
        }
    },
    head: [
        // ico
        ["link", {rel: "icon", href: `/favicon.ico`}],
        // meta
        ["meta", {name: "robots", content: "all"}],
        ["meta", {name: "author", content: "HANXU2018"}],
        ["meta", {name: "keywords", content: "API-JSON 文档"}],
        ["meta", {name: "apple-mobile-web-app-capable", content: "yes"}],
        // baidu statstic
        ["script", {src: "https://hm.baidu.com/hm.js?xxxxxxxxxxx"}],

        // <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        ["meta", {"http-equiv": "Cache-Control", content: "no-cache, no-store, must-revalidate"}],
        // <meta http-equiv="Pragma" content="no-cache" />
        ["meta", {"http-equiv": "Pragma", content: "no-cache"}],
        // <meta http-equiv="Expires" content="0" />
        ["meta", {"http-equiv": "Expires", content: "0"}]
    ],
    plugins: [
        ['@vuepress/back-to-top', true],
        ['@vuepress/medium-zoom', {
            selector: 'img',
            // See: https://github.com/francoischalifour/medium-zoom#options
            options: {
              margin: 16
            }
        }],
        // see: https://vssue.js.org/guide/vuepress.html#usage
        ['@vssue/vuepress-plugin-vssue', {
            // set `platform` rather than `api`
            platform: 'github',
            // all other options of Vssue are allowed
            owner: 'realpdai',
            repo: 'tech-arch-doc-comments',
            clientId: 'xxxxxxxxxxx',
            clientSecret: 'xxxxxxxxxxxxxxxxxxxxxx',
        }],
        // see: https://vuepress.github.io/zh/plugins/copyright/#%E5%AE%89%E8%A3%85
        ['copyright', {
            noCopy: false, // false表示允许复制内容
            minLength: 100, // 如果长度超过 100 个字符
            authorName: "APIJSON-DOC_@HANXU2018",
            clipboardComponent: "请注明文章出处, [文章出处](https://www.github.com)"
        }],
        // see: https://github.com/IOriens/vuepress-plugin-baidu-autopush
        ['vuepress-plugin-baidu-autopush', {

        }],
        // see: https://github.com/znicholasbrown/vuepress-plugin-code-copy
        [['vuepress-plugin-code-copy', true]],
        [
            'vuepress-plugin-mygitalk', {
            // 是否启用(关闭请设置为false)(default: true)
            enable: true,
            // 是否开启首页评论(default: true)
            home: true,
            // Gitalk配置
            gitalk: {
                // GitHub Application Client ID.
                clientID: 'a4ac7ef92dc615fc8bb7',
                // GitHub Application Client Secret.
                clientSecret: '3266b968980a1b1f376c3b008a3c40d9ad57b05a',
                // GitHub repository. 存储评论的 repo
                repo: 'apijson-doc-Comment',
                // GitHub repository 所有者，可以是个人或者组织。
                owner: 'HANXU2018',
                // 设置语言(default: zh-CN)
                language: 'zh-CN',
                title: '「Comment」<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>',
                body: '<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>',
                distractionFreeMode: false,
                pagerDirection: 'last',
            }
        }
        ],
        ['vuepress-plugin-toolbar', {
            'pageNav': {
                name: '导航'
            },
            opts: [
                {
                    icon: '',
                    name: 'QQ群二维码',
                    link: '',
                    popover: {
                        title: '734652054',
                        type: 'image',
                        imageUrl: '/images/index-read.gif',
                        more: {
                            newWindow: false,
                            link: '/about',
                            name: '了解更多'
                        }
                    }
                },
            ]
        }
        ],
        ['@vuepress/active-header-links', {
            sidebarLinkSelector: '.sidebar-link',
            headerAnchorSelector: '.header-anchor'
          }]
        // ...
    ],
    themeConfig: {
        repo: "Tencent/APIJSON",
        repoLabel: '查看源码',
        docsRepo: "HANXU2018/APIJSON-DOC",
        docsBranch: 'main',
        docsDir: 'apijson-doc',
        logo: "/logo.png",
        editLinks: true,
         // 默认为 "Edit this page"
        editLinkText: '帮助我们改善此页面！',
        lastUpdated: 'Last Updated', // string | boolean
        smoothScroll: true,
        sidebarDepth:4,
        locales: {
            "/": {
                label: "简体中文",
                selectText: "Languages",
                editLinkText: "在 GitHub 上编辑此页",
                lastUpdated: "上次更新",
                nav:[{text: "主页", link: "/"},
                    { text: "快速上手", link: "/md/start/"},
                    { text: "接口文档", link: "/md/api/"},
                    { text: "开发文档", link: "/md/dev/"},
                    { text: "文档工程", link: "/md/doc/"},
                    { text: "关于", link: "/md/about/"},
                ],
                sidebar: {
                    '/md/about/': [
                        '', 
                    ],
                    '/md/api/': [
                        '',
                    ],
                    '/md/dev/': [
                        '',
                    ],
                    '/md/doc/': [
                        '', 
                        'feature',
                    ],
                    '/md/start/': [
                        '',     
                    ],
                    '/':[
                        '',
                    ],
                }
            }
        },
        //algolia 搜索
        algolia: {
            apiKey: '<API_KEY>',
            indexName: '<INDEX_NAME>'
        }
    }
};
