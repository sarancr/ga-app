import React, { Component } from 'react';  // React for JSX , component is a class
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { dashBoardAction } from '../actions/index'
import MetricSnapShot from '../components/MetricSnapShot'

class MetricSnapShots extends Component {


    componentWillMount() {
        { this.props.dashBoardAction() };
    }

    render() {
               if(!this.props.pupd || this.props.pupd === null )
                    <div>Please wait,loading...</div>
        return (
            <div>
                <MetricSnapShot
                    metrics={this.props.pupd}
                    field="netWinPUPD"
                    label = "NETWIN PUPD"
                />
                <MetricSnapShot
                    metrics={this.props.pupd}
                    field="coinInPUPD"
                    label = "COININ PUPD"
                    

                />
                <MetricSnapShot
                    metrics={this.props.pupd}
                    field="handlePullsPUPD"
                    label = "HANDLEPULLS PUPD"
                    
                />
               
            </div>

        );

    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ dashBoardAction }, dispatch)
}

function mapStateToProps(state) {
    console.log(state);
    return { pupd: state.metrics==null ? null : state.metrics.pupd }
    
}



export default connect(mapStateToProps, mapDispatchToProps)(MetricSnapShots);