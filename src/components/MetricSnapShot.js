import React, { Component } from 'react';
import { MetricSnapShots } from '../containers/MetricSnapShots';
import { FormattedNumber } from 'react-intl';
import { LineChart, Line, Tooltip } from 'recharts';
import './MetricSnapShot.css';
import Currency from './Currency'

class MetricSnapShot extends Component {

    render() {

        if (this.props != null && (this.props.field != null)) {
            this.findAverage();


        }

        return (
            <div className="Box">
                <Currency value={this.findAverage()}/>

                <LineChart width={200} height={50} data={this.props.metrics}>
                    <Line type='monotone' dataKey={this.props.field} stroke='#8884d8' strokeWidth={2} />
                    <Tooltip />
                </LineChart>
                <div className="label"> {this.props.label} </div>
            </div>
        )
    }

    findAverage() {

        if (!this.props.metrics || this.props.metrics === null)
            return 0;
        var add = 0;
        var avg = 0;


        var arr = this.props.metrics;

        for (var i = 0; i < arr.length; i++) {
            add = add + arr[i][this.props.field];

        }
        avg = add / arr.length;

        return avg;



    }

}

export default MetricSnapShot;