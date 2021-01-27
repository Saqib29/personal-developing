import React, { useState } from 'react'
import style from './form.module.css';

export default function FORM() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleNameCHange = (e) => {
        setName(e.target.value);
    }
    
    const handleEmailCHange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordCHange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        console.log("form submitted");
        let userInfo = {
            name,
            email,
            password
        }
        console.log(userInfo);
        e.preventDefault();
    }

    return (
        <div>
            <h1>Registration</h1>
            <form action="" onSubmit={handleSubmit}>
                <div className={style.formGroup}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" value={name} onChange={handleNameCHange} id="name" required/>
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email" name={email} onChange={handleEmailCHange} id="email" required/>
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" value={password} onChange={handlePasswordCHange} id="password" required/>
                </div>
                <div>
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    )
}
