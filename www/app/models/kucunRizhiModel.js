import _ from "lodash/fp";
export default {
    "namespace":"kucunrizhilist",
    "state":{
        "kucunrizhi":null
    },
    "reducers":{
        change(state,action){
            return _.set("kucunrizhi",action.Xinxi,state)
        }
    },
    "effects":{
        *init(action,{put,select}){
            var {result} = yield fetch("/kucunrizhiGet",{
                "method":"POST",
                "headers" : {'Content-Type' : 'application/json'}
            }).then(data=>data.json());
            //按时间排序
            var arr_Ruku = result.content_Ruku.map(item=>{return {...item,caozuoleixing:"入库"}});
            var arr_Chuku = result.content_Chuku.map(item=>{return {...item,caozuoleixing:"出库"}});
            var arr = [...arr_Ruku,...arr_Chuku];
            var newarr = arr.sort(function(one,two){
                var a =  new Date(one.chuangjianshijian).getTime();
                var b =  new Date(two.chuangjianshijian).getTime();
                if(a === b){
                    return 0;
                }
                return a>b?-1:1
                })
            //更改信息
            yield put({"type":"change","Xinxi":newarr});
        }
    }
}