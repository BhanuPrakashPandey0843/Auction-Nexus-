import React from 'react'
import TextAndImage  from '../Components/TextAndImage/TextAndImage'
import AuctionNexus from '../Components/AuctionNexus/AuctionNexus'
import ResponsiveCarousel from '../Components/ResponsiveCarousel/ResponsiveCarousel'
import WhyAuctionNexus from '../Components/WhyAuctionNexus/WhyAuctionNexus'
import AuctionCards from '../Components/AuctionCards/AuctionCards'
import Cardauction from '../Components/Cardauction/Cardauction'
const LandingPage = () => {
  return (
    <div>
        <ResponsiveCarousel />
      <AuctionNexus />
     
      <TextAndImage />
      <WhyAuctionNexus />
      <AuctionCards />
      <Cardauction />
    </div>
  )
}

export default LandingPage       



