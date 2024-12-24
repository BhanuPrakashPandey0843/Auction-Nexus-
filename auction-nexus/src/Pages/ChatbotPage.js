import React from 'react'

import ResponsiveCarousel from '../Components/ResponsiveCarousel/ResponsiveCarousel'
import FAQSection from '../Components/FAQSection/FAQSection'
import ChattyStats from '../Components/ChattyStats/ChattyStats'
import DownloadSection from '../Components/DownloadSection/DownloadSection'
import  FeaturesSection from '../Components/FeaturesSection/FeaturesSection'
const ChatbotPage = () => {
  return (
    <div>
      <ResponsiveCarousel />
      <FeaturesSection />
      <ChattyStats />
      <FAQSection />
      <DownloadSection />

    </div>
  )
}

export default ChatbotPage
