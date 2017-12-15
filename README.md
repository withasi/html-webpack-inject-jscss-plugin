# html-webpack-inject-jscss-plugin

## 描述
html-webpack-plugin的辅助功能，往html中插入自己的资源，如：脚本和样式"

## 安装
`npm install html-webpack-inject-jscss-plugin --save-dev`

## 使用方法

`主要配置paths`
> 注意，你的脚本需放置到最终打包目录的相对能方位的位置，如最终发布拷贝static到dist中，那放入static目录。即能相对访问到即可

```
const webpackConfig = {
    entry: 'index.js',
    output: {
        path: 'dist',
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackResPlugin({
            paths: [{
                type:"js",
                path: '../static/tt.js'
              },
              {
                type:"css",
                path: '../static/mm.css'
              }
            ]
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html'
        }),

    ]
};
```

## 维护

有任何疑问请联系(withasi@163.com)
