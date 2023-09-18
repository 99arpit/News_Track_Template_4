import '../css/style.css';
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { addUser } from "../redux/slices/UserSlice";
import { Link } from "react-router-dom";
function New_Navbar({ page_name }) {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [ad, setAd] = useState();

    const fetchAd = async () => {
        try {
            const response = await axios.get(`http://174.138.101.222:8080/${id}/${page_name}/Topbar/get-Advertisement`)
            // console.log(response.data.data[0])
            setAd(response.data.data[0])
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchAd();
    }, [id, page_name])

    const agencyDetails = useSelector((state) => {
        return state.User;
    });

    const fetchData = async () => {
        try {
            const response = await axios.get(
                `http://174.138.101.222:8080/${id}/get-publication-details`
            );
            dispatch(addUser(response.data.data[0]));
        } catch (error) {
            console.log(error);
        }
    };
    if (!agencyDetails._id) {
        fetchData();
    }
    const [categories, setCategory] = useState();
    const getCategories = async () => {
        try {
            const response = await axios.get(
                "http://174.138.101.222:8080/getmastercategories"
            );
            // console.log(response.data.data, "categories");
            setCategory(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
                <div classname="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 alfaiz">
                        <div className="header_top">
                            <div className="header_top_left">
                                <ul className="top_nav">
                                    <li>
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li>
                                        <a href="#">About</a>
                                    </li>
                                    <li>
                                        <a href="pages/contact.html">Contact</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="header_top_right">
                                <p>Friday, December 05, 2045</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 alfaiz">
                    <div className="header_bottom">
                        <div className="logo_area">
                            <div onClick={() => navigate(`/${id}`)}>
                                <img
                                    src={`http://174.138.101.222:8080${agencyDetails.logo_small}`}
                                    alt=""
                                    width={"120%"}
                                    height={"120px"} />
                            </div>
                        </div>
                        <div className="add_banner">
                            {
                                ad?.script.length > 0 && <p className="mb-0" style={{ border: '1px solid black', width: '100%', height: '100px', overflow: 'hidden' }}>{ad?.script}</p>
                            }
                            {
                                ad?.text.length > 0 && <p className="mb-0" style={{ border: '1px solid black', width: '100%', height: '100px', overflow: 'hidden' }}>{ad?.text}</p>
                            }
                            {
                                ad?.image.length > 0 && <img style={{ width: '100%', height: '120px' }} src={`http://174.138.101.222:8080${ad?.image}`} />
                            }
                        </div>
                    </div>
                </div>

                <section id="navArea">
                    <nav className="navbar navbar-inverse" role="navigation">
                        <div className="navbar-header">
                            <button
                                type="button"
                                className="navbar-toggle collapsed"
                                data-toggle="collapse"
                                data-target="#navbar"
                                aria-expanded="false"
                                aria-controls="navbar"
                            >
                                {" "}
                                <span className="sr-only">Toggle navigation</span>{" "}
                                <span className="icon-bar" /> <span className="icon-bar" />{" "}
                                <span className="icon-bar" />{" "}
                            </button>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                            <ul className="nav navbar-nav main_nav">
                                <li className="active">
                                    <a href="index.html" style={{backgroundColor:"rgb(219, 163, 172)"}}>
                                        <span className="fa fa-home desktop-home" />
                                        <span className="mobile-show">Home</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">SINGLE NEWS</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        href="#"
                                        className="nav-link dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                    >
                                        Categories
                                    </a>
                                    <div className="dropdown-menu rounded-0 m-0">
                                        {categories &&
                                            categories.map((item, index) => {
                                                return (
                                                    <Link
                                                        to={`/${agencyDetails._id}/Category/${item.categories_Name_Url}`}
                                                        state={agencyDetails}
                                                        key={index}
                                                        className="dropdown-item"
                                                    >
                                                        {item.categories_Name_English}
                                                    </Link>
                                                );
                                            })}
                                    </div>
                                </li>

                                <li>
                                    <a href="#">CONTACT US</a>
                                </li>

                            </ul>
                        </div>
                    </nav>
                </section>
            </div>
        </div>
    )
}

export default New_Navbar
