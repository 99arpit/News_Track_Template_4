import New_Navbar from '../HEADER/New_Navbar'
import Footer from '../FOOTER/Footer'
import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/slices/UserSlice";
import MainSlider from '../MAIN/MainSlider';
import EducationSports from '../MAIN/EducationSports';

function Template() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const [agencyDetails, setAgencyDetails] = useState();

    const fetchData = async () => {
        try {
            const response = await axios.get(
                `http://174.138.101.222:8080/${id}/get-publication-details`
            );
            setAgencyDetails(response.data.data[0]);
            dispatch(addUser(response.data.data[0]));
            document.title = response.data.data[0].publication_name
            const favicon = document.getElementById("favicon"); 
            favicon.href = `http://174.138.101.222:8080${response.data.data[0].logo_small}`;

        } catch (error) {
            console.log(error);
        }
    };
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
        fetchData();
        fetchBreakingNews();
        // fetchAd()
    }, []);

    return (
        <div>
            {agencyDetails && <New_Navbar page_name={'Home_Page'} agencyDetails={agencyDetails} />}
            {agencyDetails && breakingNews && (<MainSlider page_name={'Home_Page'} agencyDetails={agencyDetails}breakingNews={breakingNews} />)}
            {agencyDetails && breakingNews && (<EducationSports page_name={'Home_Page'} agencyDetails={agencyDetails}breakingNews={breakingNews} />)}
            {agencyDetails && <Footer page_name={'Home_Page'} agencyDetails={agencyDetails} />}
        </div>
    )
}

export default Template