'use client'
import Image from 'next/image';
import pointer from '../assets/cursor-fill.svg';
import saint from '../assets/stones.jpg';
import Header from './components/Header/Header';
import { MobileMenu } from './components/MobileMenu/MobileMenu';
import { useState } from 'react';
import './homepage.scss';
import bg from '../assets/bg.jpg';

import Link from 'next/link';
import Navbar from './components/Navbar/Navbar';

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
        <Navbar />
      </section>
    </main>
  )
}
