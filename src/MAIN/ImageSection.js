import React from 'react'
import '../css/style.css'
import '../css/li-scroller.css'
import '../css/slick.css'
import trending from './trending.json'
import Trending from './Trending'

const ImageSection = () => {
  return (

    <div className="col-lg-3 col-md-3 col-sm-3" >
      <div className="latest_post">
        <h2>
          <span>CATEGORIES</span>
        </h2>
        <div className="latest_post_container">
          <div id="prev-button">
            <i className="fa fa-chevron-up" />
          </div>
          <ul className="latest_postnav">
            <li>
              <div className="media">
                {" "}

                <div className="media-body">
                  {" "}
                  <a href="pages/single_page.html" className="catg_title">
                    {" "}
                    राजनीति
                  </a>{" "}
                </div>
              </div>
            </li>
            <li>
              <div className="media">
                {" "}

                <div className="media-body">
                  {" "}
                  <a href="pages/single_page.html" className="catg_title">
                    {" "}

                    खेल

                  </a>{" "}
                </div>
              </div>
            </li>
            <li>
              <div className="media">
                {" "}

                <div className="media-body">
                  {" "}
                  <a href="pages/single_page.html" className="catg_title">
                    {" "}
                    मनोरंजन

                  </a>{" "}
                </div>
              </div>
            </li>
            <li>
              <div className="media">
                {" "}

                <div className="media-body">
                  {" "}
                  <a href="pages/single_page.html" className="catg_title">
                    {" "}
                    धर्म

                  </a>{" "}
                </div>
              </div>
            </li>
            <li>
              <div className="media">
                {" "}

                <div className="media-body">
                  {" "}
                  <a href="pages/single_page.html" className="catg_title">
                    {" "}
                    नेशनल न्यूज़

                  </a>{" "}
                </div>
              </div>
            </li>
          </ul>
          <div id="next-button">
            <i className="fa  fa-chevron-down" />
          </div>
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
          </aside>
        </div>
      </div>

    </div>


  )
}

export default ImageSection







