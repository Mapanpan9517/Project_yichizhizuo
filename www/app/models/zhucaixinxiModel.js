import _ from "lodash/fp";
export default {
    "namespace":"zhucaixinxilist",
    "state":{
        zhucaixinxi:null
    },
    "reducers":{
        changeZhucaixinxi(state,action){
            return _.set("zhucaixinxi",action.Xinxi,state)
        }
    },
    "effects":{
        *init(action,{put,select}){
            var {result}  = yield fetch("/zhucaixinxiGet").then(data=>data.json());
            //改变state
            yield put({"type":"changeZhucaixinxi","Xinxi":result})
        },
        *addXinxi(action,{put,select}){

            var {result} = yield fetch("/zhucaixinxiAdd",{
                "method":"POST",
                "headers" : {'Content-Type' : 'application/json'},
                "body":JSON.stringify({
                    Xinxi:action.Xinxi,
                })
            }).then(data=>data.json());
            // console.log(result)

           //改变state
           yield put({"type":"changeZhucaixinxi","Xinxi":result})
        },
        *deleteXinxi(action,{put,select}){
            // console.log(action._id)
            var {result} = yield fetch("/zhucaixinxiDelete/"+action._id).then(data=>data.json());
           //改变state
           yield put({"type":"changeZhucaixinxi","Xinxi":result})
        },
        *changeXinxi(action,{put,select}){
            const {Xinxi,ChangeBy} = action;
            // console.log(action)
            var {result} = yield fetch("/zhucaixinxiChange",{
                "method":"POST",
                "headers":{'Content-Type':'application/json'},
                "body":JSON.stringify({
                    Xinxi,
                    ChangeBy
                })
            }).then(data=>data.json());
            //改变state
            yield put({"type":"changeZhucaixinxi","Xinxi":result})
        },
        *findXinxi(action,{put,select}){
            const {Tiaojian} = action;
            console.log(Tiaojian)
            var {result} = yield fetch("/zhucaixinxiFind",{
                "method":"POST",
                "headers":{'Content-Type':'application/json'},
                "body":JSON.stringify({
                    Tiaojian
                })
            }).then(data=>data.json());
            //改变state
            yield put({"type":"changeZhucaixinxi","Xinxi":result})
        }
    }

}