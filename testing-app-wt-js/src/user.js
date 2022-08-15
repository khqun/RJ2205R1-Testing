import React, { useState, useEffect } from 'react';
export default function User(props) {
    const [user, setUser] = useState(null);
    async function fetchUserData(id) {
        const response = await fetch('/' + id);
        // console.log(await response.json());
        setUser(await response.json())
    }
    useEffect(() => {
        fetchUserData(props.id)
    });
    if (!user) {
        return "loading..."
    }
    return (
        <details>
            <summary>{user.name}</summary>
            <strong>{user.age}</strong>
            <br />
            livse in {user.address}
        </details>
    )
}