import React, { Component } from 'react';

import ChanpingGuanli from "../../containers/ChanpingGuanli.js";

export default class FahuoTixing extends Component {
    constructor(){
        super();
    }
    render() {
        return (
            <ChanpingGuanli k="FahuoTixing" c="发货提醒">
                <div>
                    发货提醒
                </div>
            </ChanpingGuanli>
        )
    }
}
