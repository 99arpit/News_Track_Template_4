import React from 'react'
import '../css/style.css'
import '../css/li-scroller.css'
import '../css/theme.css'

const LatestNews = () => {
  return (
    <section id="newsSection">
  <div className="row">
    <div className="col-lg-12 col-md-12">
      <div className="latest_newsarea">
        {" "}
        <div><span> Latest News</span></div>
        <div>
       <ul id="ticker01" className="news_sticker">
          <li>
            <a href="#">
              My First News Item
            </a>
          </li>
          <li>
            <a href="#">
              
              My Second News Item
            </a>
          </li>
          <li>
            <a href="#">
              
              My Third News Item
            </a>
          </li>
          <li>
            <a href="#">
              
              My Four News Item
            </a>
          </li>
          <li>
            <a href="#">
              
              My Five News Item
            </a>
          </li>
          <li>
            <a href="#">
              
              My Six News Item
            </a>
          </li>
          <li>
            <a href="#">
              My Seven News Item
            </a>
          </li>

        </ul>
        </div>
        <div className="social_area">
          <ul className="social_nav">
            <li className="facebook">
              <a href="#" />
            </li>
            <li className="twitter">
              <a href="#" />
            </li>
            <li className="flickr">
              <a href="#" />
            </li>
            <li className="pinterest">
              <a href="#" />
            </li>
            <li className="googleplus">
              <a href="#" />
            </li>
            <li className="vimeo">
              <a href="#" />
            </li>
            <li className="youtube">
              <a href="#" />
            </li>
            <li className="mail">
              <a href="#" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default LatestNews
