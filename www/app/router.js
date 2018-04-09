import React from "react";
import {ConnectedRouter } from "react-router-redux";
import createHistory from 'history/createHashHistory';
import {Route} from 'react-router';

const history = createHistory();

import Yiyuanxinxi from "./components/GongqiuKehu/Yiyuanxinxi.js";
import Yishengxinxi from "./components/GongqiuKehu/Yishengxinxi.js";

import Denglu from "./containers/Denglu";
//首页
import Shouyexinxi from "./components/Shouye/Shouyexinxi.js";
//订单
import Dingdanxinxi from "./components/Dingdan/Dingdanxinxi.js";

//产品管理
import ChanpingDingyi from "./components/ChanpingGuanli/ChanpingDingyi.js";
import ChanpingFenlei from "./components/ChanpingGuanli/ChanpingFenlei.js";

//原材料管理
import RukuChuku from "./components/YuancailiaoGuanli/RukuChuku.js";
import ZhucaiXinxi from "./components/YuancailiaoGuanli/ZhucaiXinxi.js";
import KucunRizhi from "./components/YuancailiaoGuanli/KucunRizhi.js";

//员工管理
import Yuangongxinxi from "./components/YuangongGuanli/Yuangongxinxi.js";

//数据查询
import DingdanTongji from "./components/ShujuChaxun/DingdanTongji.js"

//帮助
import Bangzhu from "./containers/Bangzhu.js"

export default () => {
	return  <ConnectedRouter history={history}>
        <div>
            <Route exact path="/" component={Denglu}/>
            <Route exact path="/Shouye" component={Shouyexinxi}/>

			
            <Route exact path="/Dingdan/Dingdanxinxi" component={Dingdanxinxi}/>

            <Route exact path="/GongqiuKehu/Yiyuanxinxi" component={Yiyuanxinxi}/>
            <Route exact path="/GongqiuKehu/Yishengxinxi" component={Yishengxinxi}/>


	 	 
			<Route exact path="/ChanpingGuanli/ChanpingDingyi" component={ChanpingDingyi}/>		 	 
			<Route exact path="/ChanpingGuanli/ChanpingFenlei" component={ChanpingFenlei}/>


			<Route exact path="/YuancailiaoGuanli/RukuChuku" component={RukuChuku}/>		 	 
			<Route exact path="/YuancailiaoGuanli/ZhucaiXinxi" component={ZhucaiXinxi}/>		 	 
			<Route exact path="/YuancailiaoGuanli/KucunRizhi" component={KucunRizhi}/>

			<Route exact path="/YuangongGuanli/Yuangongxinxi" component={Yuangongxinxi}/>

			<Route exact path="/ShujuChaxun/DingdanTongji" component={DingdanTongji}/>

			<Route exact path="/Bangzhu" component={Bangzhu}/>		 	 
        </div>
    </ConnectedRouter>
}