/**
 * Created by ekeu on 23/02/17.
 */
import React, {Component} from 'react';

class GeneralTab extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="tab-detail col-md-6">
                <form>
                    <div className="form-group">
                        <label htmlFor="msg">Welcome Message</label>
                        <input type="text" className="form-control" id="msg"
                               placeholder="Welcome/Inspirational Message"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="author">Author</label>
                        <input type="text" className="form-control" id="author" placeholder="Author (optional)"/>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox"/> Set as current message?
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary">Add Message</button>
                </form>
            </div>
        );
    }
}

export default GeneralTab;
