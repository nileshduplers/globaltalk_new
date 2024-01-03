import React from 'react'
import '../Footer/Footer.css';

function Footer() {
    return (
        <footer className='bg-grey py-10'>
            <div className='container'>
                <div className='top-footer grid grid-flow-col auto-cols-max justify-between border-b border-zinc-200 pb-5 mb-5'>
                    <div >
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
                    </div>
                    <div >
                        <nav>
                            <ul className='flex gap-8 '>
                                <li>
                                    <a href='' title='Alex'>Alex</a>
                                </li>
                                <li>
                                    <a href='' title='Gabriel'>Gabriel</a>
                                </li>
                                <li>
                                    <a href='' title='Marcus'>Marcus</a>
                                </li>

                            </ul>
                        </nav> 
                    </div>
                </div>

                <div className='bottom-footer grid grid-flow-col auto-cols-max justify-between'>
                    <div className='social'>

                    </div>
                    <div className='copyright'><p>&copy;2021 GlobalTalk. Project for <a href='' title='GlobalTalk'>GlobalTalk</a>.</p></div>
                </div>

            </div>
        </footer>
    )
}

export default Footer
