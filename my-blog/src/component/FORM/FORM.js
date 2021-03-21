import React, { useState } from 'react'
import style from './form.module.css';

export default function FORM() {

    const [user, setUser] = useState({
        name : '',
        email : '',
        password : ''
    });

    const { name, email, password } = user;


    const handleChange = (e) => {
        setUser({ ...user, [e.target.name] : e.target.value })
    }

    const handleSubmit = (e) => {
        console.log("form submitted");
        console.log(user);
        e.preventDefault();
    }

    return (
        <div>
            <h1>Registration</h1>
            <form action="" onSubmit={handleSubmit}>
                <div className={style.formGroup}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" value={name} onChange={handleChange} id="name" required/>
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email" value={email} onChange={handleChange} id="email" required/>
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" value={password} onChange={handleChange} id="password" required/>
                </div>
                <div>
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    )
}
