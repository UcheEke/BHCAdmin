/**
 * Created by ekeu on 23/02/17.
 */
import React, {Component} from 'react';

class SpeakersTab extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        return (
            <div className="tab-detail col-md-4">
                <form>
                    <div className="form-group">
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" className="form-control" id="firstname" placeholder="First name"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" className="form-control" id="lastname" placeholder="Last name"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="Description">Description</label>
                        <input type="text" className="form-control" id="description" placeholder="Description"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="photo">Photo URL</label>
                        <input type="text" className="form-control" id="photo" placeholder="Photo URL"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="website">Website URL</label>
                        <input type="text" className="form-control" id="website" placeholder="Website URL"/>
                    </div>

                    <div className="checkbox">
                        <label>
                            <input type="checkbox"/> Linkable?
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary">Add Speaker</button>
                </form>
            </div>
        );
    }
}

export default SpeakersTab;
