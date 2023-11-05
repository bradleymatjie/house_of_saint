'use client'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { ChangeEvent, FormEvent, useState } from 'react';
import '../auth.scss';
import Link from 'next/link';

export default function Register() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleFirstName(event: ChangeEvent<HTMLInputElement>): void {
    setFirstname(event.target.value);
  }
  
  function handlelastName(event: ChangeEvent<HTMLInputElement>): void {
    setlastname(event.target.value);
  }
    
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

    
    function goHome() {
        window.location.href = '/'
      }
  
  return (
    <>
    <div className='goBack'
    onClick={goHome}
    style={
        {margin: '50px 20px', 
        display: 'flex', 
        justifyContent: 'flex-end'
        }}>
    <i className="bi bi-chevron-left"></i>back
    </div>

    <section className="signup">
      <div className='signup_container'>
        <form onSubmit={handleSubmit} method='POST'>
        <h1>Sign up</h1>
          <input
            type="text"
            placeholder='First Name'
            name='firstname'
            onChange={handleFirstName}
            value={firstname}
            required/>
            <input
            type="text"
            placeholder='First Name'
            name='firstname'
            onChange={handlelastName}
            value={lastname}
            required/>
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
          <button type="submit" className='submitbutton'>Register</button>
        </form>

        <div className="signUp-login">
          <h2>Already have an account?</h2>
          <Link href='/auth/login'>
            Sign In
          </Link>
        </div>
      </div>

    </section>
    </>
  );
}