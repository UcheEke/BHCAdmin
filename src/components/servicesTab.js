/**
 * Created by ekeu on 23/02/17.
 */

import React, {Component} from 'react';

class ServicesTab extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        return (
            <div className="tab-detail col-md-6">
                <form>
                    <div className="form-group">
                        <label htmlFor="date">Date</label>
                        <input type="date" className="form-control" id="date" placeholder="Date e.g. 1st January"/>
                    </div>

                    <div className="form-group">
                        <label className="radio-inline"><input type="radio" name="day" value="sunday"/> Sunday</label>
                        <label className="radio-inline"><input type="radio" name="day" value="wednesday"/> Wednesday</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="spkr1">Speaker 1</label>
                        <select className="form-control" id="spkr1">
                            <option value="-1">-</option>
                            {Object.keys(this.props.speakers).map((id) => {
                                return (
                                    <option value={id}>{this.props.speakers[id].firstname + ' ' + this.props.speakers[id].lastname}</option>
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

                    <div className="form-group">
                        <label htmlFor="spkr3">Speaker 3</label>
                        <select className="form-control" id="spkr3">
                            <option value="-1">-</option>
                            {Object.keys(this.props.speakers).map((id) => {
                                return (
                                    <option value={id}>{this.props.speakers[id].firstname + ' ' + this.props.speakers[id].lastname}</option>
                                )
                            })}
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Add Service</button>
                </form>
                <br/>
                <br/>
                <p><small>(If the speaker isn't on the list, please add them in the 'Speakers' tab first)</small></p>
            </div>
        );
    }
}

export default ServicesTab;