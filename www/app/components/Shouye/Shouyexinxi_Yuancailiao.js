import React, { Component } from 'react'

export default class componentName extends Component {
    constructor(){
        super();
    }
    componentDidMount(){
        const {zhucaixinxi} = this.props;
        var mingchengArr = zhucaixinxi.map(item=>item["mingcheng"]+"-"+item["pinpai"])
        var kucunshuliangArr = zhucaixinxi.map(item=>item["kucunshuliang"]);
        console.log(kucunshuliangArr)
        console.log(mingchengArr)
         var myChart = echarts.init(document.getElementById('main'));
         var option = {
            title: {
                text: '原材料信息'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            // legend: {
            //     data: ['2011年', '2012年']
            // },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01]
            },
            yAxis: {
                type: 'category',
                data: mingchengArr
            },
            series: [
                {
                    name: '库存数量',
                    type: 'bar',
                    data: kucunshuliangArr
                }
            ]
        };

        myChart.setOption(option);
    }
    render() {
        return (
            <div>
                <div id="main" style={{"width":" 600px","height":"400px"}}></div>
            </div>
        )
    }
}
