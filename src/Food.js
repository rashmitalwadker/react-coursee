import React, { useState, useEffect } from 'react';

function Food() {
    const [search, setSearch] = useState();



    return ( < > <
        input type = "text"
        value = { search }
        onChange = {
            (event) => setSearch(event.target.value)
        }
        / > <
        button onClick = {
            (event) => {
                setSearch(event.target.value)
            }
        }
        className = "btn btn-dark" > < /button>



        <
        />  )

    }
    export default Food;