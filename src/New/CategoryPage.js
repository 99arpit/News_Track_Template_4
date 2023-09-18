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

            <div className="row">
                <div
                    className="col-lg-12 py-3 d-flex"
                    style={{
                        gap: "15px",
                        flexWrap: "wrap",
                        justifyContent: "flex-start",
                    }}
                >
                    {data &&
                        data.reverse().map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className="card"
                                    style={{ minWidth: "18rem", width: "20rem" }}
                                >
                                    <img
                                        src={`http://174.138.101.222:8080${item.image}`}
                                        className="card-img-top"
                                        alt="..."
                                        style={{ height: "200px" }}
                                    />
                                    <div className="card-body  ">
                                        <h5
                                            style={{ fontSize: "20px", fontWeight: "700" }}
                                            className="card-title"
                                        >
                                            {item.title}
                                        </h5>
                                        <p
                                            style={{
                                                fontSize: "15px",
                                                fontWeight: "500",

                                                lineClamp: "3",
                                                overflow: "hidden",
                                                maxHeight: "80px",
                                                marginBottom: "40px",
                                            }}
                                            className="card-text "
                                        >
                                            {item.short_details}
                                        </p>
                                        <a
                                            style={{
                                                position: "absolute",
                                                bottom: "10px",
                                                left: "50%",
                                                transform: "translate(-50%)",
                                            }}
                                            className="btn btn-primary mx-auto d-flex justify-content-center "
                                            onClick={() => {
                                                navigate(`/${id}/DetailedNews/${item._id}`, {
                                                    state: {
                                                        item: item,
                                                        agencyDetails: agencyDetails,
                                                    },
                                                });
                                            }}
                                        >
                                            Read In Detail
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
            <Footer page_name={"Categories_Page"} />
        </div>
    );
};

export default CategoryPage;
