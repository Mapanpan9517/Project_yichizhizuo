import _ from "lodash/fp";
export default {
    "namespace":"yuancailiao_Chukulist",
    "state":{
        yuancailiao_Chuku:null
    },
    "reducers":{
        changeyuancailiao_Chuku(state,action){
            return _.set("yuancailiao_Chuku",action.Xinxi,state)
        }
    },
    "effects":{
        *init(action,{put,select}){
            var {result}  = yield fetch("/yuancailiao_ChukuGet").then(data=>data.json());
            //改变state
            yield put({"type":"changeyuancailiao_Chuku","Xinxi":result})
        },
        *addXinxi(action,{put,select}){
            var {result} = yield fetch("/yuancailiao_ChukuAdd",{
                "method":"POST",
                "headers" : {'Content-Type' : 'application/json'},
                "body":JSON.stringify({
                    xinxi:action.Xinxi,
                })
            }).then(data=>data.json());
            // console.log(result)

           //改变state
           yield put({"type":"changeyuancailiao_Chuku","Xinxi":result})
        },
        *deleteXinxi(action,{put,select}){
            // console.log(action._id)
            var {result} = yield fetch("/yuancailiao_ChukuDelete/"+action._id).then(data=>data.json());
           //改变state
           yield put({"type":"changeyuancailiao_Chuku","Xinxi":result})
        },
        *changeXinxi(action,{put,select}){
            const {Xinxi,_id} = action;
            // console.log(action)
            var {result} = yield fetch("/yuancailiao_ChukuChange",{
                "method":"POST",
                "headers":{'Content-Type':'application/json'},
                "body":JSON.stringify({
                    Xinxi,
                    _id
                })
            }).then(data=>data.json());
            //改变state
            yield put({"type":"changeyuancailiao_Chuku","Xinxi":result})
        },
        *findXinxi(action,{put,select}){
            const {Tiaojian} = action;
            console.log(Tiaojian)
            var {result} = yield fetch("/yuancailiao_ChukuFind",{
                "method":"POST",
                "headers":{'Content-Type':'application/json'},
                "body":JSON.stringify({
                    Tiaojian
                })
            }).then(data=>data.json());
            //改变state
            yield put({"type":"changeyuancailiao_Chuku","Xinxi":result})
        }
    }

}