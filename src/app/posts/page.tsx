'use client'
import Image from 'next/image';
import saint from '../../assets/saint.jpg';
import stones from  '../../assets/stones.jpg';
import { useState } from 'react';
import Header from '../components/Header/Header';
import './posts.scss';
import { MobileMenu } from '../components/MobileMenu/MobileMenu';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Navbar from '../components/Navbar/Navbar';

export default function Posts() {
    const [menuToggler, setMenuToggler] = useState(false);


    return (
        <>
        <Header 
        menuTogglerFunction={setMenuToggler} 
        menuTogglerValue={menuToggler} 
      />
      <MobileMenu menuToggler={menuToggler} />
        <section className="posts" style={{position: 'relative', top:'60px'}}>
          <h1>Explore</h1>
          <div className="posts-container">
            <div className="postCard">
                <Image src={stones} className='coverImg' alt='img' />
                <div className='secondlayer'>
                    <Image src={saint} alt='pp'className='pp' />
                    <div>
                        <h3>THE HEART PART 4</h3>
                        <p>Bradley Matjie</p>
                    </div>
                </div>
                <div className='reactions'>
                    <div className='love'><i className="bi bi-heart"></i></div>
                    <div className='comment'><i className="bi bi-chat"></i></div>
                </div>
            </div>
            <div className="postCard">
                <Image src={stones} className='coverImg' alt='img' />
                <div className='secondlayer'>
                    <Image src={saint} alt='pp'className='pp' />
                    <div>
                        <h3>THE HEART PART 4</h3>
                        <p>Bradley Matjie</p>
                    </div>
                </div>
                <div className='reactions'>
                    <div className='love'><i className="bi bi-heart"></i></div>
                    <div className='comment'><i className="bi bi-chat"></i></div>
                </div>
            </div>
            <div className="postCard">
                <Image src={stones} className='coverImg' alt='img' />
                <div className='secondlayer'>
                    <Image src={saint} alt='pp'className='pp' />
                    <div>
                        <h3>THE HEART PART 4</h3>
                        <p>Bradley Matjie</p>
                    </div>
                </div>
                <div className='reactions'>
                    <div className='love'><i className="bi bi-heart"></i></div>
                    <div className='comment'><i className="bi bi-chat"></i></div>
                </div>
            </div>
          </div>
         
    
        </section>
        <Navbar />  
        </>
    );
}