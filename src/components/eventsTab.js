/**
 * Created by ekeu on 23/02/17.
 */

import React, {Component} from 'react';

class EventsTab extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        return (
            <div className="tab-detail col-md-4">
                <form>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control" id="title" placeholder="Title e.g. Next Open Platform"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="day">Day</label>
                        <input type="text" className="form-control" id="day" placeholder="Day e.g. Monday"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="date">Date</label>
                        <input type="date" className="form-control" id="date" placeholder="Date e.g. 1st January"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="time">Time</label>
                        <input type="text" className="form-control" id="time" placeholder="Time e.g. 8:30pm"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="desc">Description</label>
                        <input type="text" className="form-control" id="desc" placeholder="Description"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="entry">Entry</label>
                        <input type="text" className="form-control" id="entry" placeholder="Entry e.g. £3 or Free"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="spkr1">Speaker 1</label>
                        <select className="form-control" id="spkr1">
                            <option value="-1">-</option>
                            {Object.keys(this.props.speakers).map((id, i) => {
                                return (
                                    <option key={i} value={id}>{this.props.speakers[id].firstname + ' ' + this.props.speakers[id].lastname}</option>
                                )
                            })}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="spkr2">Speaker 2</label>
                        <select className="form-control" id="spkr2">
                            <option value="-1">-</option>
                            {Object.keys(this.props.speakers).map((id) => {
                                return (
                                    <option value={id}>{this.props.speakers[id].firstname + ' ' + this.props.speakers[id].lastname}</option>
                                )
                            })}
                        </select>
                    </div>

                    <button type="submit" className="btn btn-primary">Add Event</button>
                </form>
            </div>
        );
    }
}

export default EventsTab;