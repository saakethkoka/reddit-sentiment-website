import './MentionChart.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line, ResponsiveContainer} from "recharts";
import { Repository } from "../API/repository";
import MentionList from "../MentionList/MentionList";


class MentionChart extends Component {
    repository = new Repository();
    state = {
        data : null,
        tickerInput: "",
        uniqueUsers: 0,
        currTicker: "",
    }



    handleGraphChange = () => {
        var ticker = this.state.tickerInput;
        this.repository.getMentions(ticker).then(x => {
            this.setState({data: x});
        });
        this.setState({currTicker: ticker});
    }

    handleTickerInput = (event) => {
        this.setState({tickerInput: event.target.value});
    }

    render() {
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10">
                        <div className='SearchBox'>
                            <input type="text" className='form-control-sm' placeholder="Ticker" onChange={(e) => this.handleTickerInput(e)}/>
                            <button onClick={this.handleGraphChange} className='btn btn-primary ms-2'>Plot</button>
                        </div>
                        <div className="ChartTitle">
                            <h3>{this.state.currTicker}</h3>
                        </div>
                        <ResponsiveContainer width="95%" height={400}>
                            <LineChart data={this.state.data} margin={{ top: 10, right: 10, left: 10, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="date" />
                                <YAxis/>
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="count" name={this.state.currTicker} stroke="#8884d8" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="col-md-2">
                        <MentionList/>
                    </div>
                </div>
            </div>



        )

    }
}


export default MentionChart;

