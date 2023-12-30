import About from '@/components/shared/About'
import { ContactForm } from '@/components/shared/ContactForm'
import Hero from '@/components/shared/Hero'
import Events from '@/components/shared/Events'
import Mentors from '@/components/shared/Mentors'
import Partners from '@/components/shared/Partners'
import Services from '@/components/shared/Services'
import Footer from '@/components/shared/Footer'

export default function Home() {
  return (
    <> 
    <>
    <Hero />
   
    <Partners/>

    <About />

    <Services/>

    <Events />

    <Mentors />
    </>
      <ContactForm />

      <Footer/>
    </>
  )
}
