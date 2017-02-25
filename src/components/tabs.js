/**
 * Created by ekeu on 23/02/17.
 */
import React, {Component} from 'react';

class Tabs extends Component {
    constructor(props){
        super(props);
        this.state = { activeTab : '0'};
    }

    handleClick = (event) => {
        this.props.handleClick(event);
        this.setState( { activeTab : event.target.id }, () => {this.setActiveClass();});
    };

    setActiveClass = () => {
        this.refs.ul.childNodes.forEach((node, i)=>{
            if (i +'' === this.state.activeTab){
                node.className = "active";
            } else {
                node.className = "";
            }
        });
    };

    render(){
        return (
            <ul ref='ul' className="nav nav-tabs list-inline">
                <li className="active" role="presentation"><a id='0' onClick={this.handleClick} href="#">General</a></li>
                <li role="presentation"><a id='1' onClick={this.handleClick} href="#">Services</a></li>
                <li role="presentation"><a id='2' onClick={this.handleClick} href="#">Events</a></li>
                <li role="presentation"><a id='3' onClick={this.handleClick} href="#">Speakers</a></li>
            </ul>

        );
    }
}

export default Tabs;
