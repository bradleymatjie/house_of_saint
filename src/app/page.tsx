'use client'
import Image from 'next/image';
import pointer from '../assets/cursor-fill.svg';
import saint from '../assets/stones.jpg';
import Header from './components/Header/Header';
import { MobileMenu } from './components/MobileMenu/MobileMenu';
import { useEffect, useState } from 'react';
import './homepage.scss';
import bg from '../assets/bg.jpg';
import 'bootstrap-icons/font/bootstrap-icons.css'

import Link from 'next/link';
import Navbar from './components/Navbar/Navbar';

export default function Home() {
  const [menuToggler, setMenuToggler] = useState(false);
  
  function getstarted() {
    window.location.href = '/auth/register';
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/');
        const result = await response.json();
        console.log(result.text);
      } catch (error) {
        console.log(error)
      }
    }

    fetchData();
  }, [])

  return (
    <main>
      <Header 
        menuTogglerFunction={setMenuToggler} 
        menuTogglerValue={menuToggler} 
      />
      <MobileMenu menuToggler={menuToggler} />
      <section className='landing'>
        <div className="top">
          <h1>The New Experience</h1>
          <p>Beyond The Keyboard. Crafting Connections, One Blog at a Time.</p>
          <button>
            Get Started
          </button>
        </div>
        <div className='content'>
          <h2>Recent</h2>
          <div className="container">
            <div className="card">
              <Image src={saint} alt="cover" width={70} height={70} loading='lazy' />
              <div>
                <p>NOV 11,1 2023</p>
                <h3>The Universe And My Self In It</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur 
                  adipisicing elit...
                </p>
                <p>By: Bradley Matjie</p>
              </div>
            </div>
            <div className="card">
              <Image src={saint} alt="cover" width={70} height={70} loading='lazy' />
              <div>
                <p>NOV 11,1 2023</p>
                <h3>The Universe And My Self In It</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur 
                  adipisicing elit...
                </p>
                <p>By: Bradley Matjie</p>
              </div>
            </div>
            <div className="card">
              <Image src={saint} alt="cover" width={70} height={70} loading='lazy' />
              <div>
                <p>NOV 11,1 2023</p>
                <h3>The Universe And My Self In It</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur 
                  adipisicing elit...
                </p>
                <p>By: Bradley Matjie</p>
              </div>
            </div>
            <div className="card">
              <Image src={saint} alt="cover" width={70} height={70} loading='lazy' />
              <div>
                <p>NOV 11,1 2023</p>
                <h3>The Universe And My Self In It</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur 
                  adipisicing elit...
                </p>
                <p>By: Bradley Matjie</p>
              </div>
            </div>
            <div className="card">
              <Image src={saint} alt="cover" width={70} height={70} loading='lazy' />
              <div>
                <p>NOV 11,1 2023</p>
                <h3>The Universe And My Self In It</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur 
                  adipisicing elit...
                </p>
                <p>By: Bradley Matjie</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
