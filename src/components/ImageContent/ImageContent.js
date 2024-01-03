import React from 'react'
import './../../App.css';
import '../ImageContent/ImageContent.css';

function ImageContent({ customClassName , imageUrl, title, content , link  }) {
    
  return (
    <div className={`image-content py-20 ${customClassName}`}>
    <div className='container'>
      <div className='grid grid-cols-12 gap-4 items-center'>
        <div className='col-span-6'>
        
        <img src={imageUrl} alt={title} />
        </div>
        <div className='col-span-6 pl-24'>
            <h2>{title}</h2>
            <p>{content}</p>
            <a href='/' title='Audio-call' className='btn text-white font-bold py-3 px-6 rounded-full'>{link} →</a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ImageContent
