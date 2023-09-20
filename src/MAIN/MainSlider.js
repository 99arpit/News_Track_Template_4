import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import '../css/style.css'
import '../css/li-scroller.css'
import '../css/slick.css'
function MainSlider({ agencyDetails, breakingNews, page_name }) {
    const navigate = useNavigate();
    const { id } = useParams();

    const [categories, setCategory] = useState([]);
    const getCategories = async () => {
        try {
            const response = await axios.get(
                "http://174.138.101.222:8080/getmastercategories"
            );
            setCategory(response.data.data);
            // console.log(response.data.data)

        } catch (error) {
            console.log(error);
        }
    };

    const [ad, setAd] = useState();

    const fetchAd = async () => {
        try {
            const response = await axios.get(`http://174.138.101.222:8080/${id}/${page_name}/Below_Breaking_News/get-Advertisement`)
            // console.log(response.data.data[0])
            setAd(response.data.data[0])
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchAd();
    }, [id, page_name])

    useEffect(() => {
        getCategories();
    }, []);

    // pagination start here 

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 7; // Number of items to display per page

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToShow = categories.slice(startIndex, endIndex);

    const handleNextPage = () => {
        if (endIndex < categories.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (startIndex > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const totalPages = Math.ceil(categories.length / itemsPerPage);
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="row">
            <div className="col-sm-8" style={{ marginLeft: '30px' }}>
                <div style={{ maxHeight: '400px' }}>
                    <Carousel
                        infiniteLoop
                        showThumbs={false}
                        showStatus={false}
                        autoPlay={true}
                        showIndicators={false}
                        showArrows={true}
                        emulateTouch={true}
                    >
                        {breakingNews.length &&
                            breakingNews.map((news) => {
                                return (
                                    <div
                                        key={news._id}
                                        className="w-100 d-block"

                                        onClick={() => {
                                            navigate(
                                                `/${agencyDetails._id}/DetailedNews/${news._id}`,
                                                {
                                                    state: {
                                                        item: news,
                                                        agencyDetails: agencyDetails,
                                                    },
                                                }
                                            );
                                        }}
                                    >
                                        <img
                                            src={

                                                news.image
                                                    ? `http://174.138.101.222:8080${news.image}`
                                                    : `https://www.newsclick.in/sites/default/files/2018-09/xfakenews_0.jpg.pagespeed.ic_.232PSP6q2x_0.jpg`
                                            }
                                            alt="..."
                                            height={'300px'}
                                        />
                                        <div style={{ width: '100%', height: '100px' }} >
                                            <h5>{news.title}</h5>
                                            <p>{news.short_details}</p>
                                        </div>
                                    </div>
                                );
                            })}
                    </Carousel>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <div style={{ height: '100px' }} >
                        {
                            ad?.script.length > 0 && <p className="mb-0" style={{ border: '1px solid black', width: '100%', height: '100px', overflow: 'hidden' }}>{ad?.script}</p>
                        }
                        {
                            ad?.text.length > 0 && <p className="mb-0" style={{ border: '1px solid black', width: '100%', height: '100px', overflow: 'hidden' }}>{ad?.text}</p>
                        }
                        {
                            ad?.image.length > 0 && <img style={{ width: '100%', height: '100%' }} src={`http://174.138.101.222:8080${ad?.image}`} />
                        }
                    </div>
                </div>
            </div>
            <div style={{ width: '28%' }} className="col-sm-3">
                <div className="latest_post">
                    <h2>
                        <span>CATEGORIES</span>
                    </h2>
                </div>
                {itemsToShow &&
                    itemsToShow.map((item, index) => {
                        return (
                            <div className="media">
                                <div
                                    key={index}
                                    className="media-body"
                                    onClick={() =>
                                        navigate(
                                            `/${agencyDetails._id}/Category/${item.categories_Name_Url}`,
                                            {
                                                state: { agencyDetails },
                                            }
                                        )
                                    }
                                >
                                    <p style={{ color: 'white' }} className="align-items-center justify-content-center h4 mb-0 ">{item.categories_Name_Hindi}</p>
                                </div>
                            </div>
                        );
                    })}

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item">
                                <a className="page-link"
                                    onClick={handlePrevPage}
                                    disabled={currentPage === 1}>
                                    <i className="fa fa-angle-left text-primary mr-2" />
                                    <i className="fa fa-angle-left text-primary mr-2" />
                                </a>
                            </li>
                            {pageNumbers.map((pageNumber) => (
                                <li className="page-item">
                                    <a
                                        key={pageNumber}
                                        className={`page-link page-number-button ${pageNumber === currentPage ? 'active' : ''}`}
                                        onClick={() => handlePageClick(pageNumber)}
                                    >
                                        {pageNumber}
                                    </a>
                                </li>
                            ))}
                            <li className="page-item">
                                <a className="page-link"
                                    onClick={handleNextPage}
                                    disabled={endIndex >= categories.length}>
                                    <i className="fa fa-angle-right text-primary mr-2" />
                                    <i className="fa fa-angle-right text-primary mr-2" />
                                </a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default MainSlider