import _ from "lodash/fp";
export default {
    "namespace":"yuancailiao_Rukulist",
    "state":{
        yuancailiao_Ruku:null
    },
    "reducers":{
        changeyuancailiao_Ruku(state,action){
            return _.set("yuancailiao_Ruku",action.Xinxi,state)
        }
    },
    "effects":{
        *init(action,{put,select}){
            var {result}  = yield fetch("/yuancailiao_RukuGet").then(data=>data.json());
            //改变state
            yield put({"type":"changeyuancailiao_Ruku","Xinxi":result})
        },
        *addXinxi(action,{put,select}){
            var {result} = yield fetch("/yuancailiao_RukuAdd",{
                "method":"POST",
                "headers" : {'Content-Type' : 'application/json'},
                "body":JSON.stringify({
                    xinxi:action.Xinxi,
                })
            }).then(data=>data.json());
            // console.log(result)

           //改变state
           yield put({"type":"changeyuancailiao_Ruku","Xinxi":result})
        },
        *deleteXinxi(action,{put,select}){
            // console.log(action._id)
            var {result} = yield fetch("/yuancailiao_RukuDelete/"+action._id).then(data=>data.json());
           //改变state
           yield put({"type":"changeyuancailiao_Ruku","Xinxi":result})
        },
        *changeXinxi(action,{put,select}){
            const {Xinxi,_id} = action;
            // console.log(action)
            var {result} = yield fetch("/yuancailiao_RukuChange",{
                "method":"POST",
                "headers":{'Content-Type':'application/json'},
                "body":JSON.stringify({
                    Xinxi,
                    _id
                })
            }).then(data=>data.json());
            //改变state
            yield put({"type":"changeyuancailiao_Ruku","Xinxi":result})
        },
        *findXinxi(action,{put,select}){
            const {Tiaojian} = action;
            console.log(Tiaojian)
            var {result} = yield fetch("/yuancailiao_RukuFind",{
                "method":"POST",
                "headers":{'Content-Type':'application/json'},
                "body":JSON.stringify({
                    Tiaojian
                })
            }).then(data=>data.json());
            //改变state
            yield put({"type":"changeyuancailiao_Ruku","Xinxi":result})
        }
    }

}