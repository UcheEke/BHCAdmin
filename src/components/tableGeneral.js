/**
 * Created by ekeu on 23/02/17.
 */
import React from 'react';

let generateMessages = (data) => {
    return (data.messages.map((msg, i) => {
        return(
                <tr key={i}>
                    <td>{msg.quote}</td>
                    <td>{msg.author}</td>
                    <td>{i === data.current_message ? <span className="glyphicon glyphicon-ok"></span> : ''}</td>
                    <td><button><span className="glyphicon glyphicon-pencil"></span></button></td>
                    <td className="text-center"><button className="btn btn-sm btn-danger"><span className="glyphicon glyphicon-remove"></span></button></td>

                </tr>
        );
    }));
};

const TableGeneral = ({data}) => {
        return (
            <div className="custom-table col-md-6">
                <table className="small table table-condensed table-responsive table-hover">
                    <caption>Welcome / Inspirational Messages</caption>
                    <thead>
                    <tr>
                        <td>Message</td>
                        <td>Author</td>
                        <td>Current</td>
                        <td>Edit</td>
                        <td>Delete</td>
                    </tr>
                    </thead>
                    <tbody>
                    {generateMessages(data)}
                    </tbody>
                </table>
            </div>
        );
};

export default TableGeneral;