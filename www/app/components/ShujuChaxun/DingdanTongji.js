import React, { Component } from 'react';

import ShujuChaxun from "../../containers/ShujuChaxun.js";

export default class DingdanTongji extends Component {
    constructor(){
        super();
    }
    render() {
        return (
            <ShujuChaxun k="DingdanTongji" c="订单统计">
                <div>
                    订单统计
                </div>
            </ShujuChaxun>
        )
    }
}