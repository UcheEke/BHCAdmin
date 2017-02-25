/**
 * Created by ekeu on 23/02/17.
 */
import React from 'react';

let truncateString = (str) => {
    if (str.length > 30) {
        return str.slice(0,27) + '...';
    } else {
        return str;
    }
};

let generateSpeakers = (data) => {
    let speakers = [];
    for (let i=0;i<data.count; i++){
        speakers.push(
            <tr key={i}>
                <td>{i}</td>
                <td>{data[i].firstname}</td>
                <td>{data[i].lastname}</td>
                <td>{truncateString(data[i].description)}</td>
                <td>{data[i].photo !== '' ? <a href={data[i].photo}>Photo</a> : 'No Photo'}</td>
                <td>{data[i].website !== '' ? <a href={data[i].website}>Website</a> : 'No Website'}</td>
                <td className="text-center">{data[i].linkable ? <span className="glyphicon glyphicon-ok"></span> : ''}</td>
                <td className="text-center"><button><span className="glyphicon glyphicon-pencil"></span></button></td>
                <td className="text-center"><button className="btn btn-sm btn-danger"><span className="glyphicon glyphicon-remove"></span></button></td>
            </tr>
        );
    }
    return speakers;
};

const TableSpeakers = ({data}) => {
    return (
        <div className="custom-table col-md-8">
            <table className="small table table-condensed table-responsive table-hover">
                <caption>Total number of speakers: {data.count}</caption>
                <thead>
                <tr>
                    <td>ID</td>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td>Description</td>
                    <td>Photo</td>
                    <td>Website</td>
                    <td>Linkable</td>
                    <td>Edit</td>
                    <td className="text-center">Delete</td>
                </tr>
                </thead>
                <tbody>
                    {generateSpeakers(data)}
                </tbody>
            </table>
        </div>
    );
};

export default TableSpeakers;