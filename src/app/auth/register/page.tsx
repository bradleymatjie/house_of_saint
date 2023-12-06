import { sql } from '@vercel/postgres';
// import { NextResponse } from 'next/server';
import Link from 'next/link';
import '../auth.scss';

export default function Register() {

  const handleSubmit = async (FormData: FormData) => {
    "use server"

    const firstnameEntry = FormData.get('firstname');
    const firstname = firstnameEntry !== null ? firstnameEntry.toString() : '';
    
    const lastnameEntry = FormData.get('lastname');
    const lastname = lastnameEntry !== null ? lastnameEntry.toString() : '';
    
    const emailEntry = FormData.get('email');
    const email = emailEntry !== null ? emailEntry.toString() : '';

    const passwordEntry = FormData.get('firstname');
    const password = passwordEntry !== null ? passwordEntry.toString() : '';

    try {
      const result = await sql`
      INSERT INTO users (firstname, lastname, email, password)
      VALUES (${firstname}, ${lastname}, ${email}, ${password})
      ON CONFLICT (email)
      DO NOTHING
      RETURNING *;
    `;
    
    if (result.rows && result.rows.length > 0) {
      console.log('User created:', result.rows[0]);
    } else {
      console.log('User already exists');
    }
      // window.location.href = '/'
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <section className="signup">
    <Link href='/'>
        <div 
            className='goBack'
            style={{position: 'absolute', right: '30px',top: '50px', display: 'flex', justifyContent: 'flex-end', zIndex: '10'}}>
            
            <i className="bi bi-chevron-left"></i>back
        </div>
          </Link>
      <div className='signup_container'>
        <form action={handleSubmit} method='POST'>
        <h1>Sign up</h1>
          <input
            type="text"
            placeholder='First Name'
            name='firstname'
            required/>

            <input
            type="text"
            placeholder='Last Name'
            name='lastname'
            required/>

          <input
            type="email"
            placeholder='Email'
            name='email'
            required/>

          <input
            type="password"
            placeholder='password'
            name='password'
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
  );
}