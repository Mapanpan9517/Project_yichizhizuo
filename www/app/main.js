import React from "react";
import Dva from "dva";
import App from "./containers/App";

import logger from "redux-logger";
//引入路由
import router from "./router.js"

//引入模型
import kehuModel from "./models/kehuModel";
import chanpingdingyiModel from "./models/chanpingdingyiModel";
import yuangongModel from "./models/yuangongModel";
import yuancailiao_RukuModel from "./models/yuancailiao_RukuModel";
import chanpingfenleiModel from "./models/chanpingfenleiModel";
import zhucaixinxiModel from "./models/zhucaixinxiModel";
import yuancailiao_ChukuModel from "./models/yuancailiao_ChukuModel";
import kucunRizhiModel from "./models/kucunRizhiModel";
import yiyuanxinxiModel from "./models/yiyuanxinxiModel";
import yishengxinxiModel from "./models/yishengxinxiModel";
import dingdanxinxiModel from "./models/dingdanxinxiModel";
import dengluModel from "./models/dengluModel";

//创建dva的app对象
const app = Dva({
    // onAction:logger
});
//注册路由
app.router(router);

//注册模型
app.model(kehuModel);
app.model(chanpingdingyiModel);
app.model(yuangongModel);
app.model(yuancailiao_RukuModel);
app.model(chanpingfenleiModel);
app.model(zhucaixinxiModel);
app.model(yuancailiao_ChukuModel);
app.model(kucunRizhiModel);
app.model(yiyuanxinxiModel);
app.model(yishengxinxiModel);
app.model(dingdanxinxiModel);
// app.model(dengluModel);
//挂载上树
app.start("#app");


