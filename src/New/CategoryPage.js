import axios from "axios";
import React from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import { useState } from "react";
// import Footer from "../Template/Footer";
import { useSelector } from "react-redux";
import New_Navbar from "../HEADER/New_Navbar";
import Footer from "../FOOTER/Footer";

const CategoryPage = () => {
    const agencyDetails = useSelector((state) => {
        return state.User;
    });
    const navigate = useNavigate();
    const { category } = useParams();
    const { id } = useParams();
    const [data, setData] = useState();
    const getData = async () => {
        try {
            let response = await axios.get(
                `http://174.138.101.222:8080/${agencyDetails._id}/get-Postnews/${category}`
            );
            console.log("Category API Called");
            setData(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <div style={{ overflowX: "hidden" }} className="container-fluid">
            <New_Navbar page_name={"Categories_Page"} />
            {/* <Navbar /> */}
            <div className="row">
                <div className="col-lg-12 py-3">
                    <div className="bg-light py-2 px-4 mb-3">
                        <h3 className="m-0">{category}</h3>
                    </div>
                </div>
            </div>

            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {data &&
                            data.reverse().map((item, index) => {
                                return (
                                    <div className="col-sm-4">
                                        <div className="card shadow-sm" >
                                            <img
                                                className="bd-placeholder-img card-img-top"
                                                width="100%"
                                                height={225}
                                                src={`http://174.138.101.222:8080${item.image}`}
                                            />

                                            <div className="card-body">
                                                <h5
                                                    style={{ fontSize: "20px", fontWeight: "700" }}
                                                    className="card-title"
                                                >
                                                    {item.title.length > 60
                                                        ? `${item.title.substring(0, 60)}...`
                                                        : item.title}
                                                </h5>
                                                <p className="card-text">
                                                    {item.short_details.length > 100
                                                        ? `${item.short_details.substring(0, 100)}...`
                                                        : item.short_details}
                                                </p>

                                                <div className="d-flex justify-content-between align-items-center">
                                                    <button onClick={() => {
                                                        navigate(`/${id}/DetailedNews/${item._id}`, {
                                                            state: {
                                                                item: item,
                                                                agencyDetails: agencyDetails,
                                                            },
                                                        });
                                                    }} className="btn btn-primary">Read In Detail</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            )}
                    </div>
                </div>
            </div>
            <Footer page_name={"Categories_Page"} />
        </div>
    );
};

export default CategoryPage;
