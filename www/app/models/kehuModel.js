import _ from "lodash/fp";

export default {
    "namespace":"kehulist",
    "state":{
        "kehu":null
    },
    "reducers":{
        changeKehu(state,{kehu}){
            return _.set("kehu",kehu,state)
        },
        //修改单个信息
        // changeXinxiSync(state,{kehu,nowid,nowname,value}){
        //     return _.set("kehu",_.map(item=>item.id==nowid?_.set(nowname,value,item):item,state.kehu),state)
        // }
    },
    "effects":{
        *init(action,{select,put}){           
            //发出Ajax请求
            var {result} = yield fetch("/kehu").then(data=>data.json());
            //改变kehu
            yield put({"type":"changeKehu","kehu":result})
        },
        *addXinxi(action,{put,select}){
            var {kehu} = yield select(state=>state.kehulist)
            var {result} = yield fetch("/kehu",{
                "method":"POST",
                "headers" : {'Content-Type' : 'application/json'},
                "body":JSON.stringify({
                    xinxi:action.Xinxi,
                    kehu
                })
            }).then(data=>data.json());

            // console.log(result)
            
            //改变kehu
            yield put({"type":"changeKehu","kehu":result})
        },
        *deleteXinxi({id},{put,select}){
            var {result} = yield fetch(`/kehudelete/${id}`).then(data=>data.json());
            // console.log(result)
            //改变kehu
            yield put({"type":"changeKehu","kehu":result})
        },
        *changeXinxi(action,{put,select}){
            var {result} = yield fetch("/kehuchange",{
                "method":"POST",
                "headers" : {'Content-Type' : 'application/json'},
                "body":JSON.stringify({
                    action
                })
            }).then(data=>data.json());
            //改变kehu
            yield put({"type":"changeKehu","kehu":result})
        }
    }
}