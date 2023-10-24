import React,  { useState } from 'react';

export default function Login({ onLogin }) {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleLogin = () => {
        if(username === 'Polina Stoyanova' && password === 'Polina') {
            onLogin(true);
        }else {
            onLogin(false);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <input
                type='text'
                placeholder='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
             />
             <input
                type='text'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
             />
             <button onClick={handleLogin}>Login</button>
        </div>
    );
}