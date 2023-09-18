import React from 'react'
import '../css/style.css'
import '../css/li-scroller.css'
import '../css/slick.css'
import trending from './trending.json'
import Trending from './Trending'
import NewPage2 from '../New Page/NewPage2'

const ItemSection = () => {
  return (
    <section id="contentSection">
      <div className="row">
      <NewPage2/>
        <div className="col-lg-4 col-md-4 col-sm-4">
          <aside className="right_content">
            <div className="single_sidebar">
              <h2>
                <span>Trending News</span>
              </h2>

              <div className="boxx">
                {
                  trending.map((element, index) => {
                    return (
                      <Trending
                        key={index}
                        catgroius={element.Catgroius}
                        heading={element.Heading}
                        date={element.Date}
                        img={element.Poster}
                      />
                    )
                  })
                }
              </div>
            </div>







            

            <div className="single_sidebar wow fadeInDown">
              <h2>
                <span>Links</span>
              </h2>


              <div className="Social" style={{ padding: "0px 12px 10px 12px" }}>
                
                <div style={{
                  display: "flex",
                  marginTop: "17px",
                  justifyContent: "space-around",
                  textDecoration: "none"
                }}>

                  <a href="#"
                    className="icon"
                    style={{

                      backgroundColor: "rgb(57, 86, 158)",
                      padding: "0.7rem 5.9rem"
                    }}>
                    <small class="fa-brands fa-facebook" style={{ color: "white", fontSize: "19px" }}></small>
                    <a style={{ color: "white", fontSize: "12px", marginLeft: "8px", textDecoration: "none" }} >FACEBOOK</a>
                  </a>
                  <a href="#" className="icon"
                    style={{
                      backgroundColor: "rgb(82, 170, 244)",
                      padding: "0.7rem 5.9rem"
                    }}>
                    <small class="fa-brands fa-twitter"
                      style={{
                        color: "white",
                        fontSize: "19px"
                      }} >

                    </small>
                    <a style={{
                      color: "white",
                      fontSize: "12px",
                      marginLeft: "18px",
                      textDecoration: "none"
                    }} >
                      TWITTER</a>
                  </a>
                </div>
                <div style={{
                  display: "flex",
                  marginTop: "17px",
                  justifyContent: "space-around",
                  textDecoration: "none"
                }}>

                  <a href="#" className="icon"
                    style={{
                      backgroundColor: "rgb(1, 133, 174)",
                      padding: "0.7rem 5.9rem"
                    }}>
                    <small class="fa-brands fa-linkedin-in"
                     style={{
                        color: "white",
                        fontSize: "19px"
                      }} ></small>
                    <a style={{
                      color: "white",
                      fontSize: "12px",
                      marginLeft: "18px",
                      textDecoration: "none"
                    }} >
                      LINKEDIN</a>
                  </a>



                  <a href="#" className="icon"
                    style={{
                      backgroundColor: "rgb(200, 53, 157",
                      padding: "0.7rem 4.9rem"
                    }}>
                    <small class="fa-brands fa-instagram
                    " style={{
                        color: "white",
                        fontSize: "19px"
                      }}
                    ></small>
                    <a style={{
                      color: "white",
                      fontSize: "12px",
                      marginLeft: "18px",
                      textDecoration: "none"
                    }} >
                    INSTAGRAM</a>
                  </a>
                </div>
                <div style={{
                  display: "flex",
                  marginTop: "17px",
                  justifyContent: "space-around",
                  textDecoration: "none"
                }}>

                  <a href="#" className="icon"
                    style={{
                      backgroundColor: "rgb(220, 71, 46)",
                      padding: "0.7rem 5.9rem"
                    }}>

                    <small class="fa-brands fa-youtube"
                      style={{
                        color: "white",
                        fontSize: "19px"
                      }} >

                    </small>
                    <a style={{
                      color: "white",
                      fontSize: "12px",
                      marginLeft: "18px",
                      textDecoration: "none"
                    }} >
                      YOUTUBE</a>
                  </a>
                  <a href="#" className="icon"
                    style={{
                      backgroundColor: "rgb(26, 183, 234)",
                      padding: "0.7rem 5.9rem"
                    }}>

                    <small class="fa-solid fa-v"
                      style={{
                        color: "white",
                        fontSize: "19px"
                      }} >

                    </small>
                    <a
                      style={{
                        color: "white",
                        fontSize: "12px",
                        marginLeft: "18px",
                        textDecoration: "none"
                      }} >
                      V-12456</a>
                  </a>
                </div>
              </div>





            </div>

          </aside>
        </div>
      </div>
    </section>

  )
}

export default ItemSection;
