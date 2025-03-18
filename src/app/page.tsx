'use client'

import Banner from '../components/Banner'
import WhyChose from '../components/WhyChoose'
import HomeBudget from '../components/HomeBudget'
import WhatWeOffer from '../components/WhatWeOffer'
import TrustedPatner from '../components/TrustedPartner'
import Estimate from '../components/Estimate'
import Broucher from '../components/Broucher'
import Contact from '../components/Conatct'
import HowItWorks from '../components/HowItWorks'
import Gaurantee from '../components/Gaurantee'
import Copyright from '../components/Copyright'
import FixedForm from '../components/FixedForm'
import Testimonial from '../components/Testimonial'
import MobileForm from '../components/MobileForm'
import { useState } from 'react'

export default function Home() {

  const [isFormOpen,setFormOpen] = useState(false)

  return (
    <>
      <Banner/>
      <Gaurantee/>
      <div className='block sm:hidden'>
        <MobileForm/>
      </div>
      <WhyChose/>
      <HomeBudget />
      <WhatWeOffer/>
      <TrustedPatner />
      <Estimate setFormOpen={setFormOpen}/>
      <HowItWorks setFormOpen={setFormOpen}/>
      <Broucher/>
      <Testimonial/>
      <Contact/>
      <Copyright/>

      <FixedForm isFormOpen={isFormOpen} setFormOpen={setFormOpen} />

    </>
  );
}
