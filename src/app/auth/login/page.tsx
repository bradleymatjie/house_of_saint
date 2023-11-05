'use client'
import { ChangeEvent, FormEvent, useState } from 'react';
import '../auth.scss';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Link from 'next/link';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleEmail(event: ChangeEvent<HTMLInputElement>): void {
        setEmail(event.target.value);
    }

    function handlepassword(event: ChangeEvent<HTMLInputElement>): void {
        setPassword(event.target.value)
    }

    const handleSubmit = (event: FormEvent): void => {
        event.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);
      }

    return (
        <>
        <div className='goBack' style={{margin: '50px 20px', display: 'flex', justifyContent: 'flex-end'}}>
            <i className="bi bi-chevron-left"></i>back
        </div>

        <section className="login">
        <div className='login_container'>
          <form method='POST' onSubmit={handleSubmit}>
          <h1>Log in</h1>
            <input
              type="email"
              placeholder='Email'
              name='email'
              onChange={handleEmail}
              value={email}
              required/>
            <input
              type="password"
              placeholder='password'
              name='password'
              onChange={handlepassword}
              value={password}
              required/>
            <button type="submit" className='submitbutton'>Log In</button>
          </form>
          
          <div className="signUp-login">
            <h2>Don't have an Account?</h2>
            <Link href='/auth/register'>
              Sign Up
            </Link>
          </div>
        </div>
      </section>
      </>
    )
}
