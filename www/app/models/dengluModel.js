import _ from "lodash/fp";

export default {
    "namespace":"denglulist",
    "state":{
        "denglu":null
    },
    "reducers":{
        changeDenglu(state,{Xinxi}){
            return _.set("denglu",Xinxi,state)
        }
    },
    "effects":{
       *change(action,{put,select}){
            const {denglu} = yield select(item=>item.denglulist)
            const {Xinxi} = action;
            var obj = {
                ...denglu,
                ...Xinxi
            }
            yield put({"type":"changeDenglu","Xinxi":obj})
       }
    }
}