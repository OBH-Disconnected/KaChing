import React, { Component } from 'react';
import "./Charts.css";
import Radial from './RadialChart';
import Area from './AreaChart';
import Donout from './DonoutChart';

export class Charts extends Component {
    render() {
        return (
            <div>
                 <div className='row' style={{justifyContent: 'space-around'}}>
                <div className="tileChart">
                    <Radial></Radial>
                </div>
                <div className="tileChart">
                    <Area></Area>
                </div>
                <div className="tileChart">
                   <Donout></Donout>
                </div>
            </div>
            </div>
        )
    }
}

export default Charts
