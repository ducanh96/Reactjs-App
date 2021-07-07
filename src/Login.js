import React, { useState } from 'react';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (evt) => {
        evt.preventDefault();
    
    }
    return (
        <form onSubmit={handleSubmit}>
        <input name="email" type="text" onChange={evt => setEmail(evt.target.value)} value={email} placeholder="Enter your email" /><br></br>
        <input value={password}
            name="password"
            type="password"
            onChange={evt => setPassword(evt.target.value)}
            placeholder="Enter your password">
        </input>  <br></br>
        <button type="submit" >Login</button>
        </form>
    ); 
};
export default Login