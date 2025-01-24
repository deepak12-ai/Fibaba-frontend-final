import instaimg1 from '../assets/instagram-1.jpg'
import instaimg2 from '../assets/instagram-2.jpg'
import instaimg3 from '../assets/instagram-3.jpg'
import instaimg4 from '../assets/instagram-4.jpg'
import instaimg5 from '../assets/instagram-5.jpg'
import instaimg6 from '../assets/instagram-6.jpg'


const Footer = () => {
    return (
      <>
      <footer className="section__container footer__container"> 
      <div className="footer_col">
          <h4>CONTACT INFO</h4>
          <p>
              <span><i className="ri-map-pin-2-fill"></i></span>
              456, Gomti Nagar, Lucknow
          </p>
          <p>
              <span><i className="ri-mail-fill"></i></span>
              support@fibaba.com
          </p>
          <p>
              <span><i className="ri-phone-fill"></i></span>
              (0+246) 456 789 123
          </p>
      </div>

      <div className='footer__col'>
            <h4>COMPANY</h4>
            <a href="/">Home</a>
            <a href="/">About us</a>
            <a href="/">Work with us </a>
            <a href="/">Our Blogs </a>
            <a href="/">Terms & Conditions</a>
      </div>
      <div className='footer__col'>
            <h4>Useful Links</h4>
            <a href="/">Help</a>
            <a href="/">Track your order</a>
            <a href="/">Men</a>
            <a href="/">Women</a>
            <a href="/">Dress</a>
      </div>
      <div className='footer__col'>
            <h4>Instagram</h4>
            <div className='instagram__grid'>
                <img src={instaimg1} alt="instaimg"/>
                <img src={instaimg2} alt="instaimg"/>
                <img src={instaimg3} alt="instaimg"/>
                <img src={instaimg4} alt="instaimg"/>
                <img src={instaimg5} alt="instaimg"/>
                <img src={instaimg6} alt="instaimg"/>
            </div>
      </div>
    </footer> 
        <div className='footer__bar'>
        Copyright ⓒ 1995-2025 FIBABA All Rights reserved.
        </div>
      </>
      
    )
  }
  
  export default Footer;
  