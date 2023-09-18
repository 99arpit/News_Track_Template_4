import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  WhatsappIcon,
  TwitterIcon,
} from "react-share";

const NewPage = ({ prop }) => {
  console.log(prop)
  const dateConverter = (dateStr) => {
    // const dateStr = "2023-07-08";
    const dateObj = new Date(dateStr);

    // Step 2: Format the date object to the desired format
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const formattedDate = dateObj.toLocaleDateString("en-US", options);

    return formattedDate;
  };
  const getCurrentPageURL = window.location.href;
  const { id } = useParams();

  const [breakingNews, setBreakingNews] = useState();
  const fetchBreakingNews = async () => {
    try {
      const response = await axios.get(
        `http://174.138.101.222:8080/${id}/getBreakingNews`
      );
      // console.log(response.data.data, "breaking");
      setBreakingNews(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBreakingNews();
  }, []);

  function formatDate(inputDate) {
    // Step 1: Parse the input string into a JavaScript Date object
    const dateObj = new Date(inputDate);

    // Step 2: Extract day, month, and year from the Date object
    const day = dateObj.getUTCDate();
    const month = dateObj.toLocaleString("default", { month: "long" });
    const year = dateObj.getUTCFullYear();

    // Step 3: Format the values into "day month year" format
    const formattedDate = `${day} ${month} ${year}`;
    return formattedDate;
  }

  return (
    <div className='row'>
      <div className="col-lg-8 col-md-8 col-sm-8" style={{ marginLeft: '30px' }} >
        <div className="left_content" >
          <div className="single_page">
            <ol className="breadcrumb">
              <li>
                <a href="../index.html">New Home</a>
              </li>
              <li>
                <a href="#">{prop.category}</a>
              </li>
              <li className="active">Mobile</li>
            </ol>
            <div className="post_commentbox">
              {" "}
              <a href="#">
                <i className="fa fa-user" />
                Wpfreeware
              </a>{" "}
              <span>
                <i className="fa fa-calendar" />
                {dateConverter(prop.createdAt)}
              </span>{" "}
              <a href="#">
                <i className="fa fa-tags" />
                Technology
              </a>
            </div>
            <div className="single_page_content">
              <img
                src={`http://174.138.101.222:8080${prop.image}`}
                style={{ objectFit: "cover", borderRadius: "1rem" }}
              />

              <div className='paragraph'>
                <h1>{prop.title}</h1>
                <p>
                  {prop.body}
                </p>
              </div>

            </div>

            <div className="pb-3">
              <div className="bg-light py-2 px-4 mb-3">
                <h3 className="tags">Tags</h3>
              </div>
              <div className="d-flex flex-wrap m-n1">
                <button href="" className="tags-button">
                  Politics
                </button>
                <button href="" className="tags-button">
                  Business
                </button>
                <button href="" className="tags-button">
                  Corporate
                </button>
                <button href="" className="tags-button">
                  Sports
                </button>
                <button href="" className="tags-button">
                  Health
                </button>
                <button href="" className="tags-button">
                  Education
                </button>
                <button href="" className="tags-button">
                  Science
                </button>
                <button href="" className="tags-button">
                  Technology
                </button>
                <button href="" className="tags-button">
                  Foods
                </button>
                <button href="" className="tags-button">
                  Entertainment
                </button>
                <button href="" className="tags-button">
                  Travel
                </button>
                <button href="" className="tags-button">
                  Lifestyle
                </button>
              </div>
            </div>


            <div className="social_link">
              <ul className="sociallink_nav">
                <li>
                  <a href="#">
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-brands fa-google"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-pinterest" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: '28%' }} className='col-sm-3'>
        {/* Social Follow Start */}
        <div className="pb-3">
          <div className="latest_post">
            <h2 className="m-0"><a href="">FOLLOW US</a></h2>
          </div>
          <div className="row" style={{ marginTop: '40px' }}>
            <div className="col-sm-6 ">
              <a href="#" className="icon" style={{ backgroundColor: "rgb(57, 86, 158)", padding: "0.7rem 1.9rem", marginLeft: '10px' }}>
                <small class="fa-brands fa-facebook" style={{ color: "white", fontSize: "19px" }}></small>
                <a style={{ color: "white", fontSize: "12px", marginLeft: "8px", textDecoration: "none" }} >12,456 fans</a>
              </a>
            </div>
            <div className="col-sm-6">
              <a href="#" className="icon" style={{ backgroundColor: "rgb(82, 170, 244)", padding: "0.7rem 1.9rem", marginLeft: '10px' }}>
                <small class="fa-brands fa-twitter" style={{ color: "white", fontSize: "19px" }} ></small>
                <a style={{ color: "white", fontSize: "12px", marginLeft: "8px", textDecoration: "none" }} >12,456 fans</a>
              </a>
            </div>
          </div>
          <div className="row" style={{ marginTop: '40px' }}>
            <div className="col-sm-6 ">
              <a href="#" className="icon" style={{ backgroundColor: "rgb(1, 133, 174)", padding: "0.7rem 1.9rem", marginLeft: '10px' }}>
                <small class="fa-brands fa-linkedin-in" style={{ color: "white", fontSize: "19px" }} ></small>
                <a style={{ color: "white", fontSize: "12px", marginLeft: "8px", textDecoration: "none" }} >12,456 fans</a>
              </a>
            </div>
            <div className="col-sm-6">
              <a href="#" className="icon" style={{ backgroundColor: "rgb(200, 53, 157", padding: "0.7rem 1.9rem", marginLeft: '10px' }}>
                <small class="fa-brands fa-instagram" style={{ color: "white", fontSize: "19px" }} ></small>
                <a style={{ color: "white", fontSize: "12px", marginLeft: "8px", textDecoration: "none" }} >12,456 fans</a>
              </a>
            </div>
          </div>
          <div className="row" style={{ marginTop: '40px' }}>
            <div className="col-sm-6 ">
              <a href="#" className="icon" style={{ backgroundColor: "rgb(220, 71, 46)", padding: "0.7rem 1.9rem", marginLeft: '10px' }}>
                <small class="fa-brands fa-youtube" style={{ color: "white", fontSize: "19px" }} ></small>
                <a style={{ color: "white", fontSize: "12px", marginLeft: "8px", textDecoration: "none" }} >12,456 fans</a>
              </a>
            </div>
            <div className="col-sm-6">
              <a href="#" className="icon" style={{ backgroundColor: "rgb(26, 183, 234)", padding: "0.7rem 1.9rem", marginLeft: '10px' }}>
                <small class="fa-solid fa-v" style={{ color: "white", fontSize: "19px" }} ></small>
                <a style={{ color: "white", fontSize: "12px", marginLeft: "8px", textDecoration: "none" }} >12,456 fans</a>
              </a>
            </div>
          </div>
        </div>
        {/* Social Follow End */}
        {/* Newsletter Start */}
        <div className="pb-3">
          <div className="latest_post">
            <h2 className="m-0"><a href="">NEWS LETTER</a></h2>
          </div>
          <div className="bg-light text-center p-4 mb-3">
            <p>
              Aliqu justo et labore at eirmod justo sea erat diam dolor
              diam vero kasd
            </p>
            <div className="input-group" style={{ width: "100%" }}>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Your Email"
              />
              <div className="input-group-append">
                <button className="btn btn-primary space-addon">Sign Up</button>
              </div>
            </div>
            <small>Sit eirmod nonumy kasd eirmod</small>
          </div>
        </div>
        {/* Newsletter End */}
        {/* Ads Start */}
        {/* <div className="mb-3 pb-3">
                  <a href="">
                    <img
                      className="img-fluid"
                      src="img/news-500x280-4.jpg"
                      alt=""
                    />
                  </a>
                </div> */}
        {/* Ads End */}
        {/* Popular News Start */}
        <div className="pb-3">
          <div className="latest_post" style={{ display: "contents" }}>
            <h2 className="m-0"><a href="">TRENDING</a></h2>
          </div>

          {breakingNews &&
            breakingNews.map((news, index) => {
              return (

                <div key={index} className=" mb-3" >

                  <div style={{ display: "flex", marginTop: "5px" }}>
                    <div className="div1">
                      <img
                        src={
                          news.image
                            ? `http://174.138.101.222:8080${news.image}`
                            : `https://www.newsclick.in/sites/default/files/2018-09/xfakenews_0.jpg.pagespeed.ic_.232PSP6q2x_0.jpg`
                        }
                        style={{
                          width: 100,
                          height: 100,
                          objectFit: "fill",
                        }}
                      />
                    </div>
                    <div className="div2" style={{ paddingLeft: "12px", paddingTop: "10px" }}>
                      <div
                        className="w-100 d-flex flex-column justify-content-center bg-light px-3"
                        style={{ height: 100 }}
                      >
                        <div className="mb-1" style={{ fontSize: 13 }}>
                          <p
                            className="mb-0"
                            style={{ display: "inline" }}
                            href=""
                          >
                            {news.category}
                          </p>
                          <span className="px-1">/</span>
                          <span>{formatDate(news.updatedAt)}</span>
                        </div>
                        <Link
                          to={`/${id}/DetailedNews/${news._id}`}
                          className="h6 m-0"
                        >
                          {news.title}
                        </Link>
                      </div>
                    </div>
                  </div>

                </div>

              );
            })}
        </div>
        {/* Popular News End */}
      </div>
    </div>




  )
}

export default NewPage
