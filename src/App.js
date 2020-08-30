import React from 'react';
import Header from './components/Header'
import UpdateSubs from './components/updateSubs';
import FeaturedVideos from './components/featuredVideos'
import NewVideos from './components/newVideos'
import PopularPlay from './components/popularPlayList'
import PopularChannel from './components/popularChannel';
import Footer from './components/footer'

function App() {
  return (
    <div >
      <Header/>
      <UpdateSubs/>
      <FeaturedVideos/>
      <NewVideos/>
      <PopularPlay/>
      <PopularChannel/>
      <Footer/>
      </div>
  );
}

export default App;

// I have used stateless components we are not pulling any data from backend or from any API
// Used bootstrap for UI and also used custom css whenever is necessary
// also added jquery so app might slow to load please wait
// please provide Honest Feedback for it