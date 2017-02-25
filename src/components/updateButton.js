/**
 * Created by ekeu on 24/02/17.
 */
import React, { Component } from 'react';

class UpdateButton extends Component{
    render(){
        return (
            <div className="floater btn-group">
                <button className="btn btn-warning">Save and Update Page</button>
                <button className="btn btn-info">Reset</button>
            </div>
        );
    }
}

export default UpdateButton;
