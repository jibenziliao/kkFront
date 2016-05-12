### kkFrontDemo模板项目


#### 停止维护,仅作参考


>   使用Yeoman脚手架集成gulp的ionic项目.
>   *   参考项目:   [generator-ionic-gulp](https://github.com/tmaximini/generator-ionic-gulp#readme)

>
>   本项目基于ionic+gulp,集成了常用工具方法,如时间格式化,常用过滤器等,以及与后台加密通信的加解密方法等.

- - -

1.  引入指令需要将常量中的配置导入到自己的项目中；
2.  引入指令需要引入指令对应的样式文件；
3.  kkFrontUtils模块中的一些指令依赖于第三方模块（utils目录下）；
4.  更改kkFrontUtils模块名时，应一并更改utils目录下lodash.js中的模块命名。

- - -

运行
``` bash
npm install
bower install
```
再运行
``` bash
gulp
```
即可启动项目
