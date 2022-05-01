import React from 'react'
import './style.css'
import './responsive.css'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import BoxImage from './images/box_img.png'
import BusinessImage from './images/business_img.jpg'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom'

const Home_main = () => {
  return (
<div className="Home_main-layout">
  <header>
    <Container maxWidth={false} className="Home_head_top">
      <Grid container className="Home_banner_main">
        <Grid item sm={6} direction="row" justifyContent="center" alignItems="center">                      
          <div className="Home_text-bg">
            <Container maxWidth="xs">
            <h1 className='Home_Banner_h1'>Live Web Development</h1>
            <p className='Home_Banner_p'>Made for Front end Designers and developers to build,design and test their code.</p>
            <a href="#">Login</a>
            </Container>
          </div>
        </Grid>
        <Grid item sm={6}> 
            <div className="Home_photo_main_div">
                <div className="Home_text-img">
                    <figure><img src={BoxImage} alt="#"/></figure>
                </div>
            </div>
        </Grid>
      </Grid>
    </Container>
  </header>
      <div className="Home_business">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="Home_titlepage">
                     <span>Increase your efficiency for</span>
                     <h2>Better development of Websites</h2>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-md-10 offset-md-1">
                  <div className="row">
                     <div className="col-md-12">
                        <div className="Home_business_box ">
                           <figure><img src={BusinessImage} alt="#"/></figure>
                           <p className='Home_business_box_p'>Every aspiring web developer has faced problems like switching to different files for editing different languages. Another problem faced is switching to a browser again and again to check the look of the website. Our project eliminates these problems by providing you with a work area where you can edit HTML, CSS, and JS simultaneously without switching.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <footer>
         <div className="Home_footer">
            <div className="container">
               <div className="row">
                  <div className="col-md-12">
                     <ul className="Home_social_icon">
                        <li><Link to="#"><FacebookIcon sx={{ fontSize: 30 ,marginTop: 1 }}/></Link></li>
                        <li><Link to="#"><TwitterIcon sx={{ fontSize: 30 ,marginTop: 1 }}/></Link></li>
                        <li><Link to="#"><LinkedInIcon sx={{ fontSize: 30 ,marginTop: 1 }}/></Link></li>
                     </ul>
                  </div>
               </div>
            </div>
            <div className="Home_copyright">
               <div className="container">
                  <div className="row">
                     <div className="col-md-12">
                        <p className='Home_copyright_p'>Made with love in India</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
</div>
  )
}

export default Home_main