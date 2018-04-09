import _ from "lodash/fp";
export default {
    "namespace":"yiyuanxinxilist",
    "state":{
        yiyuanxinxi:null
    },
    "reducers":{
        changeYiyuanxinxi(state,action){
            return _.set("yiyuanxinxi",action.Xinxi,state)
        }
    },
    "effects":{
        *init(action,{put,select}){
            var {result}  = yield fetch("/yiyuanxinxiGet").then(data=>data.json());
            //改变state
            yield put({"type":"changeYiyuanxinxi","Xinxi":result})
        },
        *addXinxi(action,{put,select}){

            var {result} = yield fetch("/yiyuanxinxiAdd",{
                "method":"POST",
                "headers" : {'Content-Type' : 'application/json'},
                "body":JSON.stringify({
                    Xinxi:action.Xinxi,
                })
            }).then(data=>data.json());
            // console.log(result)

           //改变state
           yield put({"type":"changeYiyuanxinxi","Xinxi":result})
        },
        *deleteXinxi(action,{put,select}){
            // console.log(action._id)
            var {result} = yield fetch("/yiyuanxinxiDelete/"+action._id).then(data=>data.json());
           //改变state
           yield put({"type":"changeYiyuanxinxi","Xinxi":result})
        },
        *changeXinxi(action,{put,select}){
            const {Xinxi,ChangeBy} = action;
            // console.log(action)
            var {result} = yield fetch("/yiyuanxinxiChange",{
                "method":"POST",
                "headers":{'Content-Type':'application/json'},
                "body":JSON.stringify({
                    Xinxi,
                    ChangeBy
                })
            }).then(data=>data.json());
            //改变state
            yield put({"type":"changeYiyuanxinxi","Xinxi":result})
        },
        *findXinxi(action,{put,select}){
            const {Tiaojian} = action;
            console.log(Tiaojian)
            var {result} = yield fetch("/yiyuanxinxiFind",{
                "method":"POST",
                "headers":{'Content-Type':'application/json'},
                "body":JSON.stringify({
                    Tiaojian
                })
            }).then(data=>data.json());
            //改变state
            yield put({"type":"changeYiyuanxinxi","Xinxi":result})
        }
    }

}