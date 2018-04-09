import _ from "lodash/fp";
export default {
    "namespace":"chanpingfenleilist",
    "state":{
        chanpingfenlei:null
    },
    "reducers":{
        changeChanpingfenlei(state,action){
            return _.set("chanpingfenlei",action.Xinxi,state)
        }
    },
    "effects":{
        *init(action,{put,select}){
            console.log(action)
            var {result}  = yield fetch("/chanpingfenleiGet").then(data=>data.json());
            //改变state
            yield put({"type":"changeChanpingfenlei","Xinxi":result})
        },
        *addXinxi(action,{put,select}){

            var {result} = yield fetch("/chanpingfenleiAdd",{
                "method":"POST",
                "headers" : {'Content-Type' : 'application/json'},
                "body":JSON.stringify({
                    Xinxi:action.Xinxi,
                })
            }).then(data=>data.json());
            // console.log(result)

           //改变state
           yield put({"type":"changeChanpingfenlei","Xinxi":result})
        },
        *deleteXinxi(action,{put,select}){
            // console.log(action._id)
            var {result} = yield fetch("/chanpingfenleiDelete/"+action._id).then(data=>data.json());
           //改变state
           yield put({"type":"changeChanpingfenlei","Xinxi":result})
        },
        *changeXinxi(action,{put,select}){
            const {Xinxi,_id} = action;
            // console.log(action)
            var {result} = yield fetch("/chanpingfenleiChange",{
                "method":"POST",
                "headers":{'Content-Type':'application/json'},
                "body":JSON.stringify({
                    Xinxi,
                    _id
                })
            }).then(data=>data.json());
            //改变state
            yield put({"type":"changeChanpingfenlei","Xinxi":result})
        },
        *findXinxi(action,{put,select}){
            const {Tiaojian} = action;
            console.log(Tiaojian)
            var {result} = yield fetch("/chanpingfenleiFind",{
                "method":"POST",
                "headers":{'Content-Type':'application/json'},
                "body":JSON.stringify({
                    Tiaojian
                })
            }).then(data=>data.json());
            //改变state
            yield put({"type":"changeChanpingfenlei","Xinxi":result})
        }
    }

}