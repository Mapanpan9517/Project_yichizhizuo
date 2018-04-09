import _ from "lodash/fp";
export default {
    "namespace":"yishengxinxilist",
    "state":{
        yishengxinxi:null
    },
    "reducers":{
        changeYishengxinxi(state,action){
            return _.set("yishengxinxi",action.Xinxi,state)
        }
    },
    "effects":{
        *init(action,{put,select}){
            var {result}  = yield fetch("/yishengxinxiGet").then(data=>data.json());
            //改变state
            yield put({"type":"changeYishengxinxi","Xinxi":result})
        },
        *addXinxi(action,{put,select}){

            var {result} = yield fetch("/yishengxinxiAdd",{
                "method":"POST",
                "headers" : {'Content-Type' : 'application/json'},
                "body":JSON.stringify({
                    Xinxi:action.Xinxi,
                })
            }).then(data=>data.json());
            // console.log(result)

           //改变state
           yield put({"type":"changeYishengxinxi","Xinxi":result})
        },
        *deleteXinxi(action,{put,select}){
            // console.log(action._id)
            var {result} = yield fetch("/yishengxinxiDelete/"+action._id).then(data=>data.json());
           //改变state
           yield put({"type":"changeYishengxinxi","Xinxi":result})
        },
        *changeXinxi(action,{put,select}){
            const {Xinxi,ChangeBy} = action;
            // console.log(action)
            var {result} = yield fetch("/yishengxinxiChange",{
                "method":"POST",
                "headers":{'Content-Type':'application/json'},
                "body":JSON.stringify({
                    Xinxi,
                    ChangeBy
                })
            }).then(data=>data.json());
            //改变state
            yield put({"type":"changeYishengxinxi","Xinxi":result})
        },
        *findXinxi(action,{put,select}){
            const {Tiaojian} = action;
            console.log(Tiaojian)
            var {result} = yield fetch("/yishengxinxiFind",{
                "method":"POST",
                "headers":{'Content-Type':'application/json'},
                "body":JSON.stringify({
                    Tiaojian
                })
            }).then(data=>data.json());
            //改变state
            yield put({"type":"changeYishengxinxi","Xinxi":result})
        }
    }

}