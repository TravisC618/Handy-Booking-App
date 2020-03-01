import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Task = props => {
    const [data, setData] = useState({ tasks: [] });
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://byedust-api-server.herokuapp.com/api/tasks',
            );
            setData(result.data.data);
        };
        fetchData();
    }, [])

    return (
        <div>
            <ul>
                {data.tasks.map(item => (
                    <li key={item.objectID}>
                        <a href={`/tasks/${item.title}`}>{item.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    )


}

export default Task;