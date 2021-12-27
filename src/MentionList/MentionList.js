import './MentionList.css';
import React, { Component } from 'react';
import { Repository } from "../API/repository";


class MentionList extends Component{
    repository = new Repository();
    state = {
        top_mentions: []
    }

    componentDidMount() {
        this.repository.getTopMentions(10).then(response => {
            this.setState({
                top_mentions: response
            })
        })
    }


    render() {
        return (
            <div className="MentionList">
                <h4>Top Mentions</h4>
                <div className="list-group">
                    {this.state.top_mentions.map(mention => {
                        return (
                            <React.Fragment>
                                <button className="btn btn-outline-secondary" key={mention.ticker}>
                                    ${`${mention.ticker}`} {mention.numMentions}
                                </button>
                                <div className="divider"/>
                            </React.Fragment>
                        )
                    })}
                    </div>
            </div>
        );
    }
}

export default MentionList;