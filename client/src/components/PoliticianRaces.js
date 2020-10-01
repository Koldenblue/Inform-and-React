import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

    /*--------------------------------------------------------------
# Portfolio
--------------------------------------------------------------*/

function PoliticianRaces() {

.portfolio .portfolio-item {
    margin-bottom: 30px;
  }
  
  .portfolio #portfolio-flters {
    padding: 0;
    margin: 0 auto 35px auto;
    list-style: none;
    text-align: center;
    background: #ecf5f9;
    border-radius: 50px;
    padding: 2px 15px;
  }
  
  .portfolio #portfolio-flters li {
    cursor: pointer;
    display: inline-block;
    padding: 10px 15px 8px 15px;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
    color: #2f4d5a;
    margin-bottom: 5px;
    transition: all 0.3s ease-in-out;
  }
  
  .portfolio #portfolio-flters li:hover, .portfolio #portfolio-flters li.filter-active {
    color: #67b0d1;
  }
  
  .portfolio #portfolio-flters li:last-child {
    margin-right: 0;
  }
  
  .portfolio .portfolio-wrap {
    transition: 0.3s;
    position: relative;
    overflow: hidden;
    z-index: 1;
  }
  
  .portfolio .portfolio-wrap::before {
    content: "";
    background: rgba(255, 255, 255, 0.5);
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    transition: all ease-in-out 0.3s;
    z-index: 2;
    opacity: 0;
  }
  
  .portfolio .portfolio-wrap .portfolio-links {
    opacity: 1;
    left: 0;
    right: 0;
    bottom: -60px;
    z-index: 3;
    position: absolute;
    transition: all ease-in-out 0.3s;
    display: flex;
    justify-content: center;
  }
  
  .portfolio .portfolio-wrap .portfolio-links a {
    color: #fff;
    font-size: 28px;
    text-align: center;
    background: rgba(103, 176, 209, 0.75);
    transition: 0.3s;
    width: 50%;
  }
  
  .portfolio .portfolio-wrap .portfolio-links a:hover {
    background: rgba(103, 176, 209, 0.95);
  }
  
  .portfolio .portfolio-wrap .portfolio-links a + a {
    border-left: 1px solid #8ec4dd;
  }
  
  .portfolio .portfolio-wrap:hover::before {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 1;
  }
  
  .portfolio .portfolio-wrap:hover .portfolio-links {
    opacity: 1;
    bottom: 0;
  }


  
  /*--------------------------------------------------------------
  # Portfolio Details
  --------------------------------------------------------------*/
  .portfolio-details {
    padding-top: 30px;
  }
  
  .portfolio-details .portfolio-details-container {
    position: relative;
  }
  
  .portfolio-details .portfolio-details-carousel {
    position: relative;
    z-index: 1;
  }
  
  .portfolio-details .portfolio-details-carousel .owl-nav, .portfolio-details .portfolio-details-carousel .owl-dots {
    margin-top: 5px;
    text-align: left;
  }
  
  .portfolio-details .portfolio-details-carousel .owl-dot {
    display: inline-block;
    margin: 0 10px 0 0;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #ddd !important;
  }
  
  .portfolio-details .portfolio-details-carousel .owl-dot.active {
    background-color: #67b0d1 !important;
  }
  
  .portfolio-details .portfolio-info {
    padding: 30px;
    position: absolute;
    right: 0;
    bottom: -70px;
    background: #fff;
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
    z-index: 2;
  }
  
  .portfolio-details .portfolio-info h3 {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #eee;
  }
  
  .portfolio-details .portfolio-info ul {
    list-style: none;
    padding: 0;
    font-size: 15px;
  }
  
  .portfolio-details .portfolio-info ul li + li {
    margin-top: 10px;
  }
  
  .portfolio-details .portfolio-description {
    padding-top: 50px;
  }
  
  .portfolio-details .portfolio-description h2 {
    width: 50%;
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  
  .portfolio-details .portfolio-description p {
    padding: 0 0 0 0;
  }
  
  @media (max-width: 768px) {
    .portfolio-details .portfolio-description h2 {
      width: 100%;
    }
    .portfolio-details .portfolio-info {
      position: static;
      margin-top: 30px;
    }
  }


}


return (

    <section id="politicianraces" class="races">
      <div class="container">

        <div class="section-title" data-aos="fade-in" data-aos-delay="100">
          <h2>Portfolio</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="row" data-aos="fade-in">
          <div class="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" class="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div class="row portfolio-container" data-aos="fade-up">

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-1.jpg" class="img-fluid" alt="">
              <div class="portfolio-links">
                <a href="assets/img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" class="venobox" title="App 1"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-2.jpg" class="img-fluid" alt="">
              <div class="portfolio-links">
                <a href="assets/img/portfolio/portfolio-2.jpg" data-gall="portfolioGallery" class="venobox" title="Web 3"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-3.jpg" class="img-fluid" alt="">
              <div class="portfolio-links">
                <a href="assets/img/portfolio/portfolio-3.jpg" data-gall="portfolioGallery" class="venobox" title="App 2"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-4.jpg" class="img-fluid" alt="">
              <div class="portfolio-links">
                <a href="assets/img/portfolio/portfolio-4.jpg" data-gall="portfolioGallery" class="venobox" title="Card 2"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-5.jpg" class="img-fluid" alt="">
              <div class="portfolio-links">
                <a href="assets/img/portfolio/portfolio-5.jpg" data-gall="portfolioGallery" class="venobox" title="Web 2"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-6.jpg" class="img-fluid" alt="">
              <div class="portfolio-links">
                <a href="assets/img/portfolio/portfolio-6.jpg" data-gall="portfolioGallery" class="venobox" title="App 3"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-7.jpg" class="img-fluid" alt="">
              <div class="portfolio-links">
                <a href="assets/img/portfolio/portfolio-7.jpg" data-gall="portfolioGallery" class="venobox" title="Card 1"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-8.jpg" class="img-fluid" alt="">
              <div class="portfolio-links">
                <a href="assets/img/portfolio/portfolio-8.jpg" data-gall="portfolioGallery" class="venobox" title="Card 3"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-9.jpg" class="img-fluid" alt="">
              <div class="portfolio-links">
                <a href="assets/img/portfolio/portfolio-9.jpg" data-gall="portfolioGallery" class="venobox" title="Web 3"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}