import React from 'react'
import HostelNavbar from '../campusLife/Hostel_navbar.jsx'
import ImageCarousel  from '../campuslife/Newlanding.jsx'
import CardSection from '../campuslife/Third_section.jsx'
import HostelIntro from '../campuslife/HostelGallery.jsx'
import ChancellorSection from '../campuslife/GrievancePortal.jsx'
import HostelList from '../campuslife/Hostel_hostel.jsx'
import JoinHostelCTA from '../campuslife/Hostel_footer.jsx'


function HostelDining() {
  return (
  <> <HostelNavbar/>
    <ImageCarousel />
    <CardSection />
    <HostelIntro />
    <ChancellorSection />
    <HostelList />
    <JoinHostelCTA />

    </>
  )
}

export default HostelDining;