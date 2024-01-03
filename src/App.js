import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ImageContent from './components/ImageContent/ImageContent';
import image1 from '../src/assets/images/playful-way.png';
import image2 from '../src/assets/images/Textbook.png';
import image3 from '../src/assets/images/Statistics.png';

function App() {
  return (
    <>
      <Header />
      <Hero />
      
      <ImageContent
        customClassName=""
        imageUrl={image1}
        title="Learn a language in a playful way"
        content="Make learning words more fun with mini-games"
        link="Audio-call"
      />
      <ImageContent 
        customClassName="bg-grey content-first"
        imageUrl={image2}
        title="Increase your vocabulary"
        content="Traditional and new effective approaches to word study"
        link="Textbook"
         
      />

      <ImageContent 
        customClassName=""
        imageUrl={image3}
        title="Watch your progress every day"
        content="Save statistics on your achievements, words learned, and mistakes"
        link="Statistics"
         
      />

    </>
  );
}

export default App;
