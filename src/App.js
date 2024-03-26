import React from 'react';
import './App.css';
import MenuList from './components/MenuList.jsx';
import Header from './components/Header.jsx';
import SectionOfTrend from './components/SectiionOfTrend.jsx';
import TopArtists from './components/TopArtists.jsx';
import BrowseCategories from './components/BrowseCategories.jsx';
import DiscoverNFT from './components/DiscoverNFT.jsx';
import HowWorks from './components/HowWorks.jsx';
import JoinToUs from './components/JoinToUs.jsx';
import Footer from './components/Footer.jsx';

function App() {

  return (
    <>
     <div className='bg-white dark:bg-[#2B2B2B]'>
      <MenuList/>
      <Header/>
      <SectionOfTrend/>
      <TopArtists/>
      <BrowseCategories/>
      <DiscoverNFT/>
      <HowWorks/>
      <JoinToUs/>
      <Footer/>
      </div>
    </>
  );
};

export default App;
