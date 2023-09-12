import React,{useState,useEffect} from 'react'
import { BsFillArrowUpCircleFill } from "react-icons/bs";

function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);
    const styles = {
        button: {
          position: 'fixed',
          bottom: '100px',
          right: '20px',
          zIndex: 1000,
          border: 'none',
          padding: '10px 20px',
          borderRadius: '50%',
          fontSize: '24px',
          opacity: 0,
          transition: 'opacity 0.3s ease' 
        },
        visible: {
            opacity: 1  // 表示状態のときのopacity
          }
      };

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
            setIsVisible(true);
            } else {
            setIsVisible(false);
            }
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);

    },[]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior:"smooth"
        });
    };
    
    return (
        (
            <button
            onClick={scrollToTop}
            style={isVisible ? {...styles.button, ...styles.visible} : styles.button}
            title = "Go to top"
            >
                <BsFillArrowUpCircleFill/>
            </button>
        )
    )

    
  };


export default ScrollToTopButton