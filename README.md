# APIJSON-DOC
APIJSON 文档

### 关于文档 - 文档的搭建
- 为什么使用 vuepress？
  [@pdai](https://www.pdai.tech/)已经实现了很好的轮子
  - [搭建Vuepress博客/文档系统：搭建，PDF导出，SEO，自动编译，自动部署，域名，HTTPS，备案等](https://segmentfault.com/a/1190000020971477)
  - [关于文档 - 文档的搭建](https://www.pdai.tech/md/about/blog/blog-build-vuepress.html)
- 使用列表
  - 返回最上插件
    ```
        npm install -D @vuepress/plugin-back-to-top@next
    ``` 
    使用
    ```
        module.exports = {
            plugins: ['@vuepress/back-to-top']
        }
    ```
  - 添加图片缩放插件
    - 