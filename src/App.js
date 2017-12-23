/**
 * Created by Administrator on 2017/12/23.
 */
import React, {Component} from 'react';

import Map from './components/Map';
import './app.css';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render(){
        return (
            <div id="gameOuter">
                <Map />
            </div>
        )
    }
}