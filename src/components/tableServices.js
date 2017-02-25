/**
 * Created by ekeu on 23/02/17.
 */
import React from 'react';

let getSpeakers = (ids, speakers) => {
    return ids.map((id)=>{
            return speakers[id].firstname + ' ' + speakers[id].lastname;
        }).join(', ');
};

let generateServices = (services, day, speakers) => {
    return (
        services[day].map((svc,i)=>{
            return(
                <tr key={i}>
                    <td>{svc.date}</td>
                    <td>{getSpeakers(svc.speakerIDs, speakers)}</td>
                    <td><button><span className="glyphicon glyphicon-pencil"></span></button></td>
                    <td className="text-center"><button className="btn btn-sm btn-danger"><span className="glyphicon glyphicon-remove"></span></button></td>
                </tr>
            );
        })
    );
};

const TableServices = ({services, speakers}) => {
    return (
        <div className="custom-table col-md-6">
            <table className="small table table-condensed table-responsive table-hover">
                <caption>Sunday Services</caption>
                <thead>
                <tr>
                    <td>Date</td>
                    <td>Speaker</td>
                    <td>Edit</td>
                    <td className="text-center">Delete</td>
                </tr>
                </thead>
                <tbody>
                {generateServices(services, 'sunday', speakers)}
                </tbody>
            </table>

            <table className="small table table-condensed table-responsive table-hover">
                <caption>Wednesday Services</caption>
                <thead>
                <tr>
                    <td>Date</td>
                    <td>Speaker</td>
                    <td>Edit</td>
                    <td className="text-center">Delete</td>
                </tr>
                </thead>
                <tbody>
                {generateServices(services, 'wednesday', speakers)}
                </tbody>
            </table>
        </div>
    );
};

export default TableServices;
