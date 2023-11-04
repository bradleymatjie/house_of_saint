'use client'
import Image from 'next/image';
import pointer from '../assets/cursor-fill.svg';
import saint from '../assets/stones.jpg';
import Header from './components/Header/Header';
import { MobileMenu } from './components/MobileMenu/MobileMenu';
import { useState } from 'react';
import bg from '../assets/bg.jpg';
import writer from '../assets/pencil-square.svg';
import Explore from '../assets/compass-fill.svg'
import homeIcon from '../assets/house-fill.svg'
import notifications from '../assets/bell-fill.svg';
import liked from '../assets/heart-fill.svg' 
import Link from 'next/link';

export default function Home() {
  const [menuToggler, setMenuToggler] = useState(false);
  
  return (
    <main>
      <Header 
        menuTogglerFunction={setMenuToggler} 
        menuTogglerValue={menuToggler} 
      />
      <MobileMenu menuToggler={menuToggler} />
      <section className="home">
        <div className="top">
          <Image src={bg} priority={true} alt='bg image' style={{position: 'absolute', left: '0', right: '0', bottom: '0', top: '0'}} />
          <input type="text" placeholder='search by Author or title' />
          <h1>Face The new Experience</h1>
          <p>Beyond the Keyboard: Crafting Connections, One Blog at a Time.</p>
          <button>Get Started</button>   
        </div>
        <div className="bottom">
          <div>
            <h2>New Release</h2>
            <Link href='/'>See all</Link>
          </div>
          <div className="blog-container">
            <div className="card">
              <Image src={saint} className='cover' alt="cover" />
              <Image src={pointer} id='pointer' alt='pointer' />
              <p>Bradley Matjie</p>
              <h4>THE HEART PART 4</h4>
            </div>

            <div className="card">
              <Image src={saint} className='cover' alt="cover" />
              <Image src={pointer} id='pointer' alt='pointer' />
              <p>Bradley Matjie</p>
              <h4>THE HEART PART 4</h4>
            </div>

            <div className="card">
              <Image src={saint} className='cover' alt="cover" />
              <Image src={pointer} id='pointer' alt='pointer' />
              <p>Bradley Matjie</p>
              <h4>THE HEART PART 4</h4>
            </div>

            <div className="card">
              <Image src={saint} className='cover' alt="cover" />
              <Image src={pointer} id='pointer' alt='pointer' />
              <p>Bradley Matjie</p>
              <h4>THE HEART PART 4</h4>
            </div>

            <div className="card">
              <Image src={saint} className='cover' alt="cover" />
              <Image src={pointer} id='pointer' alt='pointer' />
              <p>Bradley Matjie</p>
              <h4>THE HEART PART 4</h4>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="footer-card">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-house-fill" viewBox="0 0 16 16">
  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"/>
  <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"/>
</svg>
          </div>
          <div className="footer-card">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-compass-fill" viewBox="0 0 16 16">
  <path d="M15.5 8.516a7.5 7.5 0 1 1-9.462-7.24A1 1 0 0 1 7 0h2a1 1 0 0 1 .962 1.276 7.503 7.503 0 0 1 5.538 7.24zm-3.61-3.905L6.94 7.439 4.11 12.39l4.95-2.828 2.828-4.95z"/>
</svg>
          </div>
          <div className="footer-card">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg>
          </div>
          <div className="footer-card">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
          </svg>
          </div>
          <div className="footer-card">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16">
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
          </svg>
          </div>
        </div>
      </section>
    </main>
  )
}
