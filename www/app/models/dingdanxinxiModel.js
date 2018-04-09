import _ from "lodash/fp";
export default {
    "namespace":"dingdanxinxilist",
    "state":{
        dingdanxinxi:null
    },
    "reducers":{
        changeDingdanxinxi(state,action){
            return _.set("dingdanxinxi",action.Xinxi,state)
        }
    },
    "effects":{
        *init(action,{put,select}){
            var {result}  = yield fetch("/dingdanxinxiGet").then(data=>data.json());
            //改变state
            yield put({"type":"changeDingdanxinxi","Xinxi":result})
        },
        *addXinxi(action,{put,select}){

            var {result} = yield fetch("/dingdanxinxiAdd",{
                "method":"POST",
                "headers" : {'Content-Type' : 'application/json'},
                "body":JSON.stringify({
                    Xinxi:action.Xinxi,
                })
            }).then(data=>data.json());
            // console.log(result)

           //改变state
           yield put({"type":"changeDingdanxinxi","Xinxi":result})
        },
        *deleteXinxi(action,{put,select}){
            // console.log(action._id)
            var {result} = yield fetch("/dingdanxinxiDelete/"+action._id).then(data=>data.json());
           //改变state
           yield put({"type":"changeDingdanxinxi","Xinxi":result})
        },
        *changeXinxi(action,{put,select}){
            const {Xinxi,ChangeBy} = action;
            // console.log(action)
            var {result} = yield fetch("/dingdanxinxiChange",{
                "method":"POST",
                "headers":{'Content-Type':'application/json'},
                "body":JSON.stringify({
                    Xinxi,
                    ChangeBy
                })
            }).then(data=>data.json());
            //改变state
            yield put({"type":"changeDingdanxinxi","Xinxi":result})
        },
        *findXinxi(action,{put,select}){
            const {Tiaojian} = action;
            console.log(Tiaojian)
            var {result} = yield fetch("/dingdanxinxiFind",{
                "method":"POST",
                "headers":{'Content-Type':'application/json'},
                "body":JSON.stringify({
                    Tiaojian
                })
            }).then(data=>data.json());
            //改变state
            yield put({"type":"changeDingdanxinxi","Xinxi":result})
        }
    }

}