import _ from "lodash/fp";
export default {
    "namespace":"chanpingdingyilist",
    "state":{
        chanpingdingyi:null
    },
    "reducers":{
        changeChanpingdingyi(state,action){
            return _.set("chanpingdingyi",action.Xinxi,state)
        }
    },
    "effects":{
        *init(action,{put,select}){
            console.log(action)
            var {result}  = yield fetch("/chanpingdingyiGet").then(data=>data.json());
            //改变state
            yield put({"type":"changeChanpingdingyi","Xinxi":result})
        },
        *addXinxi(action,{put,select}){
            var {result} = yield fetch("/chanpingdingyiAdd",{
                "method":"POST",
                "headers" : {'Content-Type' : 'application/json'},
                "body":JSON.stringify({
                    Xinxi:action.Xinxi,
                })
            }).then(data=>data.json());
            // console.log(result)

           //改变state
           yield put({"type":"changeChanpingdingyi","Xinxi":result})
        },
        *deleteXinxi(action,{put,select}){
            // console.log(action._id)
            var {result} = yield fetch("/chanpingdingyiDelete/"+action._id).then(data=>data.json());
           //改变state
           yield put({"type":"changeChanpingdingyi","Xinxi":result})
        },
        *changeXinxi(action,{put,select}){
            const {Xinxi,_id} = action;
            // console.log(action)
            var {result} = yield fetch("/chanpingdingyiChange",{
                "method":"POST",
                "headers":{'Content-Type':'application/json'},
                "body":JSON.stringify({
                    Xinxi,
                    _id
                })
            }).then(data=>data.json());
            //改变state
            yield put({"type":"changeChanpingdingyi","Xinxi":result})
        },
        *findXinxi(action,{put,select}){
            const {Tiaojian} = action;
            console.log(Tiaojian)
            var {result} = yield fetch("/chanpingdingyiFind",{
                "method":"POST",
                "headers":{'Content-Type':'application/json'},
                "body":JSON.stringify({
                    Tiaojian
                })
            }).then(data=>data.json());
            //改变state
            yield put({"type":"changeChanpingdingyi","Xinxi":result})
        }
    }

}