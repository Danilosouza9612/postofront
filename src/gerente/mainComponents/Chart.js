import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class Chart extends Component{

    constructor(props){
        super(props);
        this.state = {
            chartData: props.chartData
        }
        console.log(props.reage);
    }
    

    static defaultProps ={
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'right'
    }

    render(){
        return (
            <div className="chart">
                <Bar
                    data={this.state.chartData}
                    options={{
                        title:{
                            display:this.props.displayTitle,
                            text: 'Combustíveis Vendidos',
                            fontSize: 25
                        },
                        legend:{
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                        },
                        maintainAspectRatio: false
                    }}
                />
            </div>
        )
    }
}

export default Chart;