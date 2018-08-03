### 使用parcel-bundler 打包 react 项目。

- npm install --save parcel-bundler babel-preset-env babel-preset-react
- 配置.babelrc 文件
  `{
    "presets": [
        "env", "react"
    ]
  }`
- 配置命令行
  ` 
  "script" : {
      "start": "parcel ./src/index.html"
  }
  `
- index.html 内容
  `
  <body>
    <div id="app"></div>
    <script src="index.js"></script>
  </body>
  `
- index.js 内容
  `
  import React from 'react';
  import ReactDOM from 'react-dom';

  class HelloMessage extends React.Component {
    componentDidMount(){
        fetch('')
    }
    render() {
        return (
            <div>Hello {this.props.name}</div>
        )
    }
  }
  ReactDOM.render(
    <HelloMessage name='parcel-react' />,
    document.getElementById('app')
  );
  `
  ##### 如果需要配置proxy
  
  - 添加server.js 文件。
  `
  const proxy = require('http-proxy-middleware');
  const Bundler = require('parcel-bundler');
  const express = require('express');

  let bundler = new Bundler('./src/index.html');
  let app = express();

  app.use(
    '/api',
    proxy({
        target: 'http://localhost:80'
    })
  )

  app.use(bundler.middleware())

  app.listen(Number(process.env.PORT || 1234))
  `
- 配置命令行
  `
   "script": {
      "start_proxy": "node server.js"
   }
  `
