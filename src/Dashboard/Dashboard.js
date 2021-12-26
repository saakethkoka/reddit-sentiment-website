import './Dashboard.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line, ResponsiveContainer} from "recharts";
import { Repository } from "../API/repository";


class Dashboard extends Component {
    repository = new Repository();
    state = {
        data : null,
        tickerInput: "",
        uniqueUsers: 0,
    }



    handleGraphChange = () => {
        var ticker = this.state.tickerInput;
        console.log(ticker);
        this.repository.getMentions(ticker).then(x => {
            this.setState({data: x});
        });
    }

    handleTickerInput = (event) => {
        console.log(event.target.value);
        this.setState({tickerInput: event.target.value});
    }

    render() {
        return(
            <React.Fragment>
                <div className='SearchBox'>
                    <input type="text" className='form-control-sm' onChange={(e) => this.handleTickerInput(e)}/>
                    <button onClick={this.handleGraphChange} className='btn btn-primary ms-2'>Plot</button>
                </div>
                <ResponsiveContainer width="95%" height={400}>
                    <LineChart data={this.state.data} margin={{ top: 30, right: 30, left: 20, bottom: 5 }} title="Hello">
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="count" stroke="#8884d8" />
                    </LineChart>
                </ResponsiveContainer>


            </React.Fragment>
        )

    }
}


export default Dashboard;

