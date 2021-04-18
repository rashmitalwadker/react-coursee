import React, { useState, useEffect } from 'react';
import {
    Table
}
from 'react-bootstrap';

function Users() {
    //const [search, setSearch] = useState("banana");
    //const [recipe, setRecipe] = useState();
    const [user, setUser] = useState([])
    useEffect(() => {
        fetch("https://dummy.restapiexample.com/api/v1/employees").then((data) => {
            data.json().then(result => {
                console.log("result", result);
                setUser(result.data);
            })
        })
    }, [])


    return ( < >
        <
        thead >
        <
        tr >
        <
        th scope = "col" > < /th> <
        th scope = "col" > name < /th><hr/ > <
        th scope = "col" > age < /th><hr/ > < hr / > < hr / > < hr / > { "   " } <
        th scope = "col" > salary < /th><hr/ > < hr / > < hr / > < /
        tr > {
            user.map((item, index) =>
                <
                tr key = { index } >
                <
                td > { item.id } < /td> <
                td > { item.employee_name } < /td><hr/ > <
                td > { item.employee_age } < /td><hr/ > < hr / > < hr / > <
                td > { item.employee_salary } < /td><hr/ > < hr / >
                <
                /tr>
            )
        } <
        /thead >  < / >
    )
}
export default Users;