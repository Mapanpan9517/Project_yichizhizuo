import _ from "lodash/fp";
export default {
    "namespace":"yuangonglist",
    "state":{
        yuangong:null
    },
    "reducers":{
        changeYuangong(state,action){
            return _.set("yuangong",action.yuangong,state)
        }
    },
    "effects":{
        *init(action,{put,select}){
            var {result}  = yield fetch("/yuangongGet").then(data=>data.json());
            //改变yuangong
            yield put({"type":"changeYuangong","yuangong":result})
        },
        *addXinxi(action,{put,select}){
            // var yuangong = yield select(state=>state.yuangonglist);
            var {result} = yield fetch("/yuangongAdd",{
                "method":"POST",
                "headers" : {'Content-Type' : 'application/json'},
                "body":JSON.stringify({
                    xinxi:action.Xinxi,
                })
            }).then(data=>data.json());
            // console.log(result)

            //改变yuangong
            yield put({"type":"changeYuangong","yuangong":result})
        },
        *deleteXinxi(action,{put,select}){
            // console.log(action._id)
            var {result} = yield fetch("/yuangongDelete/"+action._id).then(data=>data.json());
           //改变yuangong
           yield put({"type":"changeYuangong","yuangong":result})
        },
        *changeXinxi(action,{put,select}){
            const {Xinxi,_id} = action;
            // console.log(action)
            var {result} = yield fetch("/yuangongChange",{
                "method":"POST",
                "headers":{'Content-Type':'application/json'},
                "body":JSON.stringify({
                    Xinxi,
                    _id
                })
            }).then(data=>data.json());
            //改变yuangong
           yield put({"type":"changeYuangong","yuangong":result})
        }
    }
}