 import React from 'react';
 import logo from '../../logo.svg';
 import '../Header/Header.css';

 function Header() {
   return (
     <header className='py-8'>
       <div className='container mx-auto flex items-center'>

        <div className='logo mr-16'>
        <a href='/' title=''>
                <img src={logo} alt='GlobalTalk' />
        </a>
        </div>
        <nav>
            <ul className='flex gap-8'>
                <li>
                    <a className='active' href='' title='Home'>Home</a>
                </li>
                <li>
                    <a href='' title='Textbook'>Textbook</a>
                </li>
                <li>
                    <a href='' title='Statistics'>Statistics</a>
                </li>
                <li>
                    <a href='' title='Games'>Games</a>
                </li>
            </ul>
        </nav>

        <div className='hedaer-right ml-auto flex'>
            <p><span>A</span>Alex</p>
            <a href='/' className='sign-out-link'>Sign Out →</a>
        </div>
       </div>
     </header>
   )
 }
 
 export default Header
 