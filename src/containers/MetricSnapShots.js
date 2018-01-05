import React, { Component } from 'react';  // React for JSX , component is a class
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { dashBoardAction } from '../actions/index'
import MetricSnapShot from '../components/MetricSnapShot'
import { Link } from 'react-router-dom';

class MetricSnapShots extends Component {


    componentWillMount() {
        { this.props.dashBoardAction() };
    }

    render() {
        if(!this.props.pupd || this.props.pupd === null)
            return <div>Please wait, loading...</div>;

        return (
            <div>
                <Link to={{ pathname: '/drilldown/netWin' }}>
                    <MetricSnapShot
                        metrics={this.props.pupd}
                        field="netWinPUPD"
                        label = "NETWIN PUPD"
                    />
                </Link>

                <Link to={{ pathname: '/drilldown/coinIn' }}>
                    <MetricSnapShot
                        metrics={this.props.pupd}
                        field="coinInPUPD"
                        label = "COININ PUPD"
                    />
                </Link>

                <Link to={{ pathname: '/drilldown/handlePulls' }}>
                    <MetricSnapShot
                        metrics={this.props.pupd}
                        field="handlePullsPUPD"
                        label = "HANDLEPULLS PUPD"
                    />
               </Link>

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