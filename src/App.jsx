import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Navigation from './components/Navbar.jsx'
import Banner from './components/Banner.jsx'
import SectionOne from './components/Section1.jsx'
import SectionTwo from './components/Section2.jsx'
import SectionThree from './components/Section3.jsx'
import SectionFourth from './components/Section4.jsx'
import SectionFive from './components/Section5.jsx'
import SectionSix from './components/Section6.jsx'
import SectionSeven from './components/Section7.jsx'
import SectionEight from './components/Section8.jsx'
import SectionNine from './components/Section9.jsx'
import SectionTen from './components/Section10.jsx'
import Scroll from './components/ScrollTop.jsx'


function App() {
  return (
    <>
      <Navigation/>
      <Banner/>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFourth/>
      <SectionFive/>
      <SectionSix/>
      <SectionSeven/>
      <SectionEight/>
      <SectionNine/>
      <SectionTen/>
      <Scroll/>
    </>
  )
}

export default App;