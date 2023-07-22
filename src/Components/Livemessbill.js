import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Livemessbill = ({ loginStatus }) => {
    const [billData, setBillData] = useState([]);
    useEffect(() => {
        // Check if loginStatus is truthy before making the API call
        if (loginStatus && loginStatus.studentid) {
            axios.post('http://localhost:8800/livemessbill', {
                sid: loginStatus.studentid // Use loginStatus.studentid directly here
            })
                .then((response) => {
                    setBillData(response.data[0]);
                })
                .catch((error) => {
                    console.log("Error occurred");
                });
        }
    }, [loginStatus]); // Include loginStatus in the dependency array
    // Function to format date of bill
    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString(undefined, options);
    };


    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>Name</th>
                        <th>Bill Date</th>
                        <th>Bill Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{billData?.studentid}</td>
                        <td>{loginStatus.name}</td>
                        <td>{billData ? formatDate(billData.billdate) : ''}</td>
                        <td>{billData?.billamt} Rs</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Livemessbill;
