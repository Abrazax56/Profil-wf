import React, {useState} from 'react'; 
  
const ScrollButton = () =>{ 
  
  const [visible, setVisible] = useState(false) 
  
  const toggleVisible = () => { 
    const scrolled = document.documentElement.scrollTop; 
    if (scrolled > 300){ 
      setVisible(true) 
    }  
    else if (scrolled <= 300){ 
      setVisible(false) 
    } 
  }; 
  
  const scrollToTop = () =>{ 
    window.scrollTo({ 
      top: 0,  
      behavior: 'smooth'
    }); 
  }; 
  
  window.addEventListener('scroll', toggleVisible); 
  
  return ( 
    <div className="butscroll py-3 px-5"> 
     <button className="start but px-3 py-2 fs-5 text-warning" onClick={scrollToTop}  
     style={{display: visible ? 'inline' : 'none'}}><i className="bi bi-arrow-up"></i></button> 
    </div> 
  ); 
} 
  
export default ScrollButton; 