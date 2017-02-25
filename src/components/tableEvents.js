/**
 * Created by ekeu on 23/02/17.
 */
import React from 'react';

let getSpeakers = (ids, speakers) => {
    return ids.map((id)=>{
        return speakers[id].firstname + ' ' + speakers[id].lastname;
    }).join(', ');
};

let truncateString = (str) => {
    return str.length > 20 ? str.slice(0,17) + '...' : str;
};

let generateEvents = (events, speakers) => {
    return (
        events.map((evt,i)=>{
            return(
                <tr key={i}>
                    <td>{evt.title}</td>
                    <td>{evt.day}</td>
                    <td>{evt.date}</td>
                    <td>{evt.time}</td>
                    <td>{evt.entry}</td>
                    <td>{getSpeakers(evt.speakerIDs, speakers)}</td>
                    <td>{truncateString(evt.description)}</td>
                    <td><button><span className="glyphicon glyphicon-pencil"></span></button></td>
                    <td className="text-center"><button className="btn btn-sm btn-danger"><span className="glyphicon glyphicon-remove"></span></button></td>

                </tr>
            );
        })
    );
};

const TableEvents = ({events, speakers}) => {
    return (
        <div className="custom-table col-md-8">
            <table className="small table table-condensed table-responsive table-hover">
                <caption>Upcoming Events</caption>
                <thead>
                <tr>
                    <td>Title</td>
                    <td>Day</td>
                    <td>Date</td>
                    <td>Time</td>
                    <td>Entry</td>
                    <td>Speakers</td>
                    <td>Description</td>
                    <td>Edit</td>
                    <td>Delete</td>
                </tr>
                </thead>
                <tbody>
                {generateEvents(events, speakers)}
                </tbody>
            </table>
        </div>
    );
};

export default TableEvents;