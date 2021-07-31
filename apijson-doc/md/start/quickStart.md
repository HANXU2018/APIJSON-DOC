# 快速上手文档（老版）
> 2020年12月最后更新
> 部分功能 可能已经失效 需要重新整理验证

::: tip
目录
[[toc]]
:::

## A.介绍

### A1.关于接口开发

首先是看名字`APIJSON`，API是说这个项目是属于接口开发的项目，JSON是指传输数据格式是JSON格式。介于各位看官的水平高低不齐，这里就先为没有项目经验朋友啰嗦两句接口开发的内容。有经验的朋友可以跳到`A2`继续查看。

（此处内容以后会有的）

### A2.功能说明

一个接口的开发，比如Java用SpringBoot，Mybatis来开发一般来说就像下面这个流程

![1545468341131](./assets/1545468341131.png)

部署上这个项目后，流程变成了这样

![1545468361962](./assets/1545468361962.png)

如果使用 [apijson-framework](https://github.com/APIJSON/apijson-framework)，还可进一步简化流程

![1543975563776](./assets/1543975563776.png)


换句话说，使用这个项目作为后端的支持的话，是不需要对每个表写增删改查等接口的，只需在该项目连接的数据里进行表的创建，以及配置接口权限即可。无需进行过多的开发，哪怕是要改结构也仅仅只需要修改表字段而已。想想仅仅是部署一个后端项目，现在需要些的接口就基本写好了，直接调用就行了，是不是挺爽的。

说这么多，咱们直接开干吧！



## B.安装&使用
>JDK： 1.8+
>
>Maven： 3.0+
>
>数据库：Mysql，Oralce

### B1.下载项目

```bash
git clone https://github.com/TommyLemon/APIJSON.git
```

或者，直接下载ZIP打包好的项目文件。

![1542255627809](./assets/1542255627809.png)



### B2.导入项目

Eclipse导入：

顶部菜单File > Import > Maven > Existing Maven Projects > Next > Browse

`APIJSON-Master/APIJSON-Java-Server/APIJSONBoot`

报依赖错误的时候，同目录下的`lib`里面的`jar`添加到`Build Path`中。

![1542345887787](./assets/1542345887787.png)

为了方便修改源代码，你可以像我一样不添加`libs/apijson-orm-3.5.1.jar`文件到`Build Path`中。而是`libs/apijson-orm-3.5.1.jar`的源码，复制到当前项目里。

源代码在`APIJSON-Master/APIJSON-Java-Server/APIJSONORM`项目中。

### B3. pom.xml的错误修改。
有可能这时候pom.xml中报错，例如：
``` xml
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
```
这段代码中的这一句：
``` xml
xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
```
提示错误。
其实是maven中安装包的问题。
那么在Window->Preference->Maven->User Settings中查找你的包安装目录删除对应的包。
具体操作请自行百度。

## C.开发说明

### C-1.基于Mysql数据库的开发流程

####  C-1-1.修改数据库链接

如我的数据库信息是这样的

| 数据库参数 | 值                  |
| ---------- | ------------------- |
| 地址       | 192.168.71.146:3306 |
| 用户       | root                |
| 密码       | root                |
| 数据库     | thea                |

那么需要在`DemoSQLConfig`，40-61行，改为自己数据库对应的链接

```java
	@Override
	public String getDBUri() {
		//TODO 改成你自己的
		return DATABASE_POSTGRESQL.equalsIgnoreCase(getDatabase()) ? "jdbc:postgresql://localhost:5432/postgres" : "jdbc:mysql://192.168.71.146:3306/";
	}
	@Override
	public String getDBAccount() {
		return DATABASE_POSTGRESQL.equalsIgnoreCase(getDatabase()) ? "postgres" : "root"; //TODO 改成你自己的
	}
	@Override
	public String getDBPassword() {
		return DATABASE_POSTGRESQL.equalsIgnoreCase(getDatabase()) ? null : "root"; //TODO 改成你自己的
	}
	@Override
	public String getSchema() {
		String s = super.getSchema();
		return StringUtil.isEmpty(s, true) ? "thea" : s; //TODO 改成你自己的。例如：将"thea"替换成你自己的“数据库名字”
	}
```

#### C-1-2.导入表

在`APIJSON-Master/MySQL`目录下有一批SQL脚本，他们看起来是这样的

![1542345654422](./assets/1542345654422.png)

导入完成之后。我们可以把项目跑起来看下，以刚刚配置的项目，项目是否能够连上数据库。其中也有一些初始化数据，可以方便我们测试。

### C-1-2-1.更多测试用例

如果需要更多测试用例，请按照以下步骤获取：
1、在浏览器中输入 apijson.org；
2、点击右上角的“登录”按钮登录；
3、点击“测试账号”按钮左边第二个按钮。（也就是“-”左边的第一个）获取各种测试用例
4、欢迎大家踊跃共享自己的测试用例；
5、也欢迎大家踊跃充值，哈哈哈哈~~~~~

#### C-1-3.测试查询

为了方便测试，我这里使用的Chrome浏览器的Restlet Client插件，大家可以根据自己的喜好使用不同的工具测试。

使用` http://localhost:8080/get`测试结果。（请注意 APIJSONApplication.java 中使用 Tomcat 默认的 8080 端口，如果不小心开着PC端的“微信”，8080端口会被占用，建议改成 8081, 9090 等其它应用程序未占用的端口。）

随便找一个表，比如`Moment`表，我们取其中ID为12的一条出来看看

![1542350018926](./assets/1542350018926.png)

对接口地址`http://localhost:8080/get`发送一个JSON格式的请求

![1542350219020](./assets/1542350219020.png)

请求的JSON:

```json
{
  "Moment": {
    "id":12
  }
}
```

响应的JSON：

```json
{
    "Moment": {
        "content": "1111534034",
        "date": "2017-02-08 16:06:11.0",
        "id": 12,
        "pictureList": [
            "http://static.oschina.net/uploads/img/201604/22172508_eGDi.jpg",
            "http://static.oschina.net/uploads/img/201604/22172507_rrZ5.jpg"
        ],
        "praiseUserIdList": [
            70793,
            93793,
            82001
        ],
        "userId": 70793
    },
    "code": 200,
    "msg": "success"
}
```



##### 字段过滤

这里这么多字段，如果我只想要这个`content`字段的信息怎么办？

你可以这样请求：

```json
{
  "Moment": {
    "id":12,
    "@column":"content"
  }
}
```

响应：

```json
{
    "Moment": {
        "content": "1111534034"
    },
    "code": 200,
    "msg": "success"
}
```

`@column`表示你要筛选出的字段，如果是多个字段可以这样写`"@column":"id,date,content"`



##### 字段别名

如果想要使用字段的别名应该这样写：`"@column":"id,date:time,content:text"`

```json
{
    "Moment": {
        "text": "1111534034",
        "time": "2017-02-08 16:06:11.0",
        "id": 12
    }
}
```

这样在返回的数据中`date`字段就变成了`time`，`content`字段变成了`text`。



##### 逻辑运算

如果想要筛选出，ID在`12,15,32`中的这三条数据的`日期`和`内容`怎么办呢？

请求：

```json
{
  "[]": {
      "Moment":{
        "id{}":[12,15,32],
        "@column":"id,date,content"
      }
  }
}
```

响应：

```json
{
    "[]": [
        {
            "Moment": {
                "content": "1111534034",
                "date": "2017-02-08 16:06:11.0",
                "id": 12
            }
        },
        {
            "Moment": {
                "content": "APIJSON is a JSON Transmission Structure Protocol…",
                "date": "2017-02-08 16:06:11.0",
                "id": 15
            }
        },
        {
            "Moment": {
                "date": "2017-02-08 16:06:11.0",
                "id": 32
            }
        }
    ],
    "code": 200,
    "msg": "success"
}
```



如果所要筛选的数据的是在一定范围内的，比如ID是300到400之间的

你可以这样过滤`"id&{}":">=300,<=400"`

&的作用是表明后面的两个过滤条件的逻辑关系

```sql
(ID >= 300 AND ID <= 500)
```



现在的逻辑符号一共有三种，`&`，`|`，`!`

默认的逻辑关系是`|`，也就是说`"id|{}":"<=300,>=400"`和`"id{}":"<=300,>=400"`等价。

`!`主要用于反选，黑名单之类的

`"id!{}":[12,15,32]`表示`id`不在12，15，32内的其他数据。

复杂一些，如果多个条件相互组合，可以写多个关于id的过滤条件

```json
{
  "[]": {
      "Moment":{
        "id&{}":">=10,<=40",
        "id!{}":[12],
        "@column":"id,date,content:text"
      }
  }
}
```

比如这里表示id在10到40之间，但是却不包含12的数据。



##### 模糊查询

```json
{
  "[]": {
      "Moment":{
        "content$":"%APIJSON%",
        "@column":"id,date,content:text"
      }
  }
}
```

使用方式有多种：

`keyword%`，以`keyword`开头的字符串。

`%keyword`，以`keyword`结束的字符串。

`%keyword%`，包含`keyword`的字符串，如：`keyword123`、`123keyword`、`123keyword123`

`%k%e%y%`，包含字母`k`,`e`,`y`的字符串

还有几种比较便捷的方式，我们这里如果使用`"content~":"keyword"`来代替`"content$":"%keyword%"`，同样可以表示包含某字符串



##### 正则匹配

```json
{
  "[]": {
      "Moment":{
        "content~":"^[0-9]+$",
        "@column":"id,date,content:text"
      }
  }
}
```

正则表达式`^[0-9]+$`，查询`content`为纯数字的数据，[MySQL的正则语法](http://www.runoob.com/mysql/mysql-regexp.html)如下：

| 模式       | 描述                                                         |
| ---------- | ------------------------------------------------------------ |
| ^          | 匹配输入字符串的开始位置。如果设置了 RegExp 对象的 Multiline 属性，^ 也匹配 '\n' 或 '\r' 之后的位置。 |
| $          | 匹配输入字符串的结束位置。如果设置了RegExp 对象的 Multiline 属性，$ 也匹配 '\n' 或 '\r' 之前的位置。 |
| .          | 匹配除 "\n" 之外的任何单个字符。要匹配包括 '\n' 在内的任何字符，请使用象 '[.\n]' 的模式。 |
| [...]      | 字符集合。匹配所包含的任意一个字符。例如， '[abc]' 可以匹配 "plain" 中的 'a'。 |
| [^...]     | 负值字符集合。匹配未包含的任意字符。例如， '[^abc]' 可以匹配 "plain" 中的'p'。 |
| p1\|p2\|p3 | 匹配 p1 或 p2 或 p3。例如，'z\|food' 能匹配 "z" 或 "food"。'(z\|f)ood' 则匹配 "zood" 或 "food"。 |
| *          | 匹配前面的子表达式零次或多次。例如，zo* 能匹配 "z" 以及 "zoo"。* 等价于{0,}。 |
| +          | 匹配前面的子表达式一次或多次。例如，'zo+' 能匹配 "zo" 以及 "zoo"，但不能匹配 "z"。+ 等价于 {1,}。 |
| {n}        | n 是一个非负整数。匹配确定的 n 次。例如，'o{2}' 不能匹配 "Bob" 中的 'o'，但是能匹配 "food" 中的两个 o。 |
| {n,m}      | m 和 n 均为非负整数，其中n <= m。最少匹配 n 次且最多匹配 m 次。 |



##### 列表数据

之前我们看到返回的数据是这样的

```json
{
    "Moment": {
        "content": "1111534034",
        "date": "2017-02-08 16:06:11.0",
        "id": 12,
        "pictureList": [
            "http://static.oschina.net/uploads/img/201604/22172508_eGDi.jpg",
            "http://static.oschina.net/uploads/img/201604/22172507_rrZ5.jpg"
        ],
        "praiseUserIdList": [
            70793,
            93793,
            82001
        ],
        "userId": 70793
    },
    "code": 200,
    "msg": "success"
}
```

里面的`pictureList`和`praiseUserIdList`是数组，这种数据在Mysql数据库中是JSON数据格式的。

![1542357146401](./assets/1542357146401.png)

数据库里存储的值是这样的

![1542357265371](./assets/1542357265371.png)

如果我们想过滤出里面有`82001`的数据，我们应该这样请求

```json
{
  "[]": {
      "Moment":{
        "praiseUserIdList<>":82001,
        "@column":"id,date,content,praiseUserIdList"
      }
  }
}
```

结果是类似这样的，为了显示方便剔除了一些数据。

```json
{
    "[]": [
        
        {
            "Moment": {
                "date": "2017-02-08 16:06:11.0",
                "id": 32,
                "praiseUserIdList": [
                    38710,
                    82002,
                    82001
                ]
            }
        },
        {
            "Moment": {
                "content": "This is a Content...-435",
                "date": "2017-02-01 19:14:31.0",
                "id": 58,
                "praiseUserIdList": [
                    38710,
                    82003,
                    82001
                ]
            }
        },
        {
            "Moment": {
                "content": "https://gss2.bdstatic.com/-fo3dSag_xIb.jpg",
                "date": "2018-10-27 17:58:02.0",
                "id": 1540634282433,
                "praiseUserIdList": [
                    82001
                ]
            }
        }
    ],
    "code": 200,
    "msg": "success"
}
```



##### 分页

对于数量太多的数据，我们很多时候都需要分页操作，这时候我们可以用类似下面这样的请求

```json
{
  "[]": {
      "Moment":{
        "@column":"id,date,content,praiseUserIdList"
      },
    "page": 0,
    "count": 5
  }
}
```

请注意，这里的`page`和`count`是放在`[]`内的属性，而不是`Moment`对象里。这里`count`表示每页的数量，`page`表示第几页，页数从0开始算。

也许你想看看这个请求对应的SQL语句

```sql
SELECT `id`,`date`,`content`,`praiseUserIdList` FROM `thea`.`Moment` LIMIT 5 OFFSET 0
```

这里`thea`是我自己的`schema`的名字，你的可能会有所不同。

如果不想分页的，也提供了一套特殊的查询方式。这种查询方式有三种，请求方式类型这样

```json
{
  "[]": {
      "Moment":{
        "@column":"id,date,content,praiseUserIdList"
      },
    "query": 2
  },
  "total@":"/[]/total"
}
```

这里因为`query`的值是2，所有会查询`Moment`表中所有的数据。如果是1的话，则会返回当前表的总数

```json
{"total":59,"code":200,"msg":"success"}
```



数据库中的数量：

![1544515879364](./assets/1544515879364.png)



当然，如果你添加了过滤条件，返回的数量就会是你所过滤的数量，比如：

```json
{
  "[]": {
      "Moment":{
        "@column":"id,date,content,praiseUserIdList",
        "praiseUserIdList<>":38710
      },
    "query": 1
  },
  "total@":"/[]/total"
}
```

返回：

```json
{"total":12,"code":200,"msg":"success"}
```



##### 排序

要使用排序的话，这样操作

```json
{
  "[]": {
      "Moment":{
        "@column":"id,date,content,praiseUserIdList",
        "praiseUserIdList<>":38710,
        "@order":"date-,id,content+"
      }
  }
}
```

`"@order":"date-,id,content+"`其中，字段的前后顺序表示字段排序的优先级。`id`和`id+`是等价的，默认就是升序排列。`date-`表示将`date`字段降序排列。

##### 关联查询

在讲解关联查询的时候，我们需要先了解下表之间的关系

现在有两张表USER和MOMENT，两张表的关系是下面这样

![1545468294295](./assets/1545468294295.png)

MOMENT表示动态，类似微信朋友圈、QQ空间的动态，每一条动态会有一个发表动态的用户USER，所以MOMENT表里会有一个USER表的外键关联

对于这样的数据关系，我们在查询动态时，很多时候我们会连带着用户一起查处来，这样又如何操作呢

```json
{
  "[]": {
    "Moment":{
        "@column":"id,date,userId",
        "id":12
      },
    "User":{
      "id@":"/Moment/userId",
      "@column":"id,name"
    }
  }
}
```

这个请求稍微复杂点，首先我们用`[]`对象表示我们是想查询出一个列表，这个列表包含两个部分`Moment`和`User`。

其中`Moment`是我们想要查询的主要内容，它的写法也和一般查询数据时无异。

`User`是与`Moment`相关联的数据，所以查询的时候我们需要用`id@`来表示他们之间的关联关系

`/Moment/userId`中，最开始的`/`相当于是指明了`[]`的位置，`/Moment`表示`[]`对象下的`Moemnt`对象，`/Moment/userId`表示`Moemnt`的`userId`字段是与`User`的`id`关联的。这是一种缺省引用路径，这里等价于完整引用路径 `[]/Moment/userId`。

响应的数据：

```json
{
    "[]": [
        {
            "Moment": {
                "date": "2017-02-08 16:06:11.0",
                "id": 12,
                "userId": 70793
            },
            "User": {
                "id": 70793,
                "name": "Strong"
            }
        }
    ],
    "code": 200,
    "msg": "success"
}
```



##### 分组查询

在了解分组查询之前，我们需要先了解下APIJSON所支持的函数

| 函数名 | 说明                       |
| ------ | -------------------------- |
| count  | 统计分组下，某字段的个数   |
| sum    | 统计分组下，某字段的和     |
| max    | 统计分组下，某字段的最大值 |
| min    | 统计分组下，某字段的最小值 |
| avg    | 统计分组下，某字段的平均值 |

比如，如果只是单纯的查出最大值，这样请求就可以了

```json
{
  "Moment":{
     "@column":"max(id):maxid"
  }
}
```

响应：

```json
{
  "Moment": {
     "maxid": 1541912160047
  },
  "code": 200,
  "msg": "success"
}
```

这里`maxid`是我们取的别名

如果是有分组条件的，那我们需要使用`@group`

比如，像下面SALE表，这张表表示，2018年1月1日某公司门下的3个店铺（STORE_ID）的营业额（AMT）数据

| ID   | STORE_ID | AMT  |
| ---- | -------- | ---- |
| 1    | 1        | 100  |
| 2    | 1        | 80   |
| 3    | 2        | 30   |
| 4    | 2        | 100  |
| 5    | 3        | 210  |

如果，我们想要计算出这天每个店铺一共卖了多少，我们通过APIJSON可以这样查询

```
{
  "[]": {
      "Sale":{
        "@column":"store_id,sum(amt):totAmt",
        "@group":"store_id"
      }
  }
}
```

#### C-1-4.登录

如果没有登录，由于权限的限制，是需要登录的。

登录地址`http://127.0.0.1:8080/login`，发送请求

```json
{
  "phone": "13000038710",
  "password":"apijson"
}
```

账号和密码，可以到`apijson_user`里面查询

#### C-1-5.测试新增

接口地址：`http://localhost:8080/post`

我们想新增一条备注时，发送这样的请求

请求

```json
{
 "Moment":{
      "content":"今天天气不错，到处都是提拉米苏雪",
      "userId":38710
 },
  "tag":"Moment"
}
```

`tag`是我们在`request`表里面配置的`tag`字段。

响应

```json
{
    "Moment": {
        "code": 200,
        "count": 1,
        "id": 1544520921923,
        "msg": "success"
    },
    "code": 200,
    "msg": "success"
}
```

返回的`id`是新增的数据的新id

#### C-1-4.测试修改

接口地址：`http://localhost:8080/put`

修改备注和新增类似

请求

```json
{
 "Moment":{
      "id":1544520921923,
      "content":"海洋动物数量减少，如果非吃不可，不点杀也是在保护它们"
 },
  "tag":"Moment"
}
```

响应

```json
{
    "Moment": {
        "code": 200,
        "count": 1,
        "id": 1544520921923,
        "msg": "success"
    },
    "code": 200,
    "msg": "success"
}
```

如果要对`json`类型操作的话，这样请求

```json
{
 "Moment":{
      "id":1544520921923,
      "praiseUserIdList+": [123]
 },
  "tag":"Moment"
}
```

这里的`praiseUserIdList`是一个`json`类型的字段，在操作之前它是空的`[]`，提交以后它是`[123]`，如果再添加一个21，则会变成`[123,21]`

要删除其中的值，把`+`变成`-`即可

#### C-1-5.测试删除

接口地址：`http://localhost:8080/delete`

请求

```json
{
 "Moment":{
      "id":1544520921923
 },
  "tag":"Moment"
}
```

### C-2.新增接口

#### 1. 后台添加数据表

在自己的数据库里新增一个表，比如我这里新增`b_stone`

```sql
-- 原石
CREATE TABLE `b_stone` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `cost` int(10) NULL COMMENT '成本',
  `price` int(10) NULL COMMENT '卖价',
  `length` int(10) NULL,
  `width`  int(10) NULL,
  `height` int(10) NULL,
  `weight` float(8,1) NULL,
  `creationdate` datetime default CURRENT_TIMESTAMP COMMENT '创建时间',
  `modifydate` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  `modifier` varchar(80) NULL,
  PRIMARY KEY (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

#### 2. 配置权限

APIJSON 3.7.0  版开始，依赖了 apijson-framework.jar 的不需要写任何代码：

##### 2.1）在 Access 表里加一行记录即可

![](https://raw.githubusercontent.com/TommyLemon/StaticResources/master/APIJSON/APIJSON_access_config-small.jpg) 

<br />
<br />

~~如果低于 3.7.0 或者未依赖 apijson-framework.jar，而是直接依赖 apijson-orm.jar，则需要编写代码：~~

##### ~~2.1）在Model中添加对象并配置权限~~

~~项目的model目录下，新增一个类~~

```java
package apijson.demo.server.model;

import zuo.biao.apijson.MethodAccess;

@MethodAccess
public class Stone {
}
```

~~注解`@MethodAccess`的配置，可以参考其他类~~



~~由于我们的类名和数据库表名不一致，需要注册一下。如果一样就不需要了。~~

~~设置数据库的实际表名`DemoSQLConfig`，38行~~

```java
//表名映射，隐藏真实表名，对安全要求很高的表可以这么做
	static {
		TABLE_KEY_MAP.put(User.class.getSimpleName(), "apijson_user");
		TABLE_KEY_MAP.put(Privacy.class.getSimpleName(), "apijson_privacy");
		TABLE_KEY_MAP.put(Stone.class.getSimpleName(), "b_stone"); // <--这一句
	}
```



~~注册权限是必须的，这样程序才能使用你配置的类权限去管理你的接口~~

~~脚本`DemoVerifier.java`的48行~~

```java
static { //注册权限
		ACCESS_MAP.put(User.class.getSimpleName(), getAccessMap(User.class.getAnnotation(MethodAccess.class)));
....
		ACCESS_MAP.put(Stone.class.getSimpleName(), getAccessMap(Stone.class.getAnnotation(MethodAccess.class)));
	}
```

<br />
<br />

#### 3. 接口管理Request表的配置
![](https://raw.githubusercontent.com/TommyLemon/StaticResources/master/APIJSON/APIJSON_request_config-small.jpg) 
可这样设置 structure 字段来配置自动校验请求 JSON 参数： <br />
```json
"VERIFY":{
  "type{}":[0,1,2]
}
```
就能校验 type 的值是不是 0，1，2中的一个。<br />
还有 <br />
```js
"VERIFY": { "money&{}":">0,<=10000" }              //自动验证是否 money>0 & money<=10000
"TYPE": { "balance": "Double" }                    //自动验证balance类型是否为Double
"UNIQUE": "phone"                                  //强制phone的值为数据库中没有的
"NECESSARY": "id,name"                             //强制传id,name两个字段
"DISALLOW": "balance"                              //禁止传balance字段
"INSERT": { "@role": "OWNER" }                     //如果没传@role就自动添加
"UPDATE": { "id@": "User/id" }                     //强制放入键值对
```
全部操作符见 [Operation.java](https://github.com/APIJSON/APIJSON/blob/master/APIJSON-Java-Server/APIJSONORM/src/main/java/apijson/orm/Operation.java) 的注释
<br />
<br />


:first_quarter_moon_with_face:此处的介绍都只是简要介绍，只是为了引导刚刚接触APIJSON的道友快速了解APIJSON，并不代表APIJSON只有这些功能，具体功能详情参考下列图表

#### 4. 完整功能图表
https://github.com/TommyLemon/APIJSON/blob/master/Document.md#3


