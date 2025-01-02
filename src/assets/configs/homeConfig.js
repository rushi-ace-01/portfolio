import React from 'react'
import {BsClipboardData} from "react-icons/bs";
import {DiCodeigniter} from "react-icons/di";
import {GiCommercialAirplane} from "react-icons/gi";
import {FaMobileAlt} from "react-icons/fa";
import { BiRocket } from "react-icons/bi";

const homeConfig = {

    greeting:
        <h1 className="heading">
            Hi! I'm <strong className="main-name"> Rushikesh Gavhane</strong>
        </h1>,
    titles: [
        "A Data Scientist",
        "A UI/UX designer",
        "A Prompt Engineer",
        "A LLM builder",
        "An Indian"
    ],
    about: {
        start: "I've been practising machine learning from 2 years. " +
            "I'm excited by learning new things, contributing to the data science community," +
            " and spreading the word of data!",
        exit: "I'm fluent at Python, generating prompts, and more " +
            "with a deep interest in machine learning."
    },
    workTimeline: [
        {
            id: "work-2",
            title: "Melanoma Skin Cancer Detection Research",
            company: "Research Project",
            description: "Authored a research paper focusing on non-invasive melanoma detection using hyperspectral imaging and machine learning techniques.",
            date: "2024-Present",
            icon: <FaMicroscope/>,
            tags: ["research", "hyperspectral imaging", "ml", "python", "cancer detection"]
},
        {
            id: "work-3",
            title: "Landslide Prediction Model",
            company: "Academic Project",
            description: "Built a Convolutional Neural Network (CNN) for landslide prediction using historical data and tested it with live inputs.",
            date: "2024",
            icon: <DiCodeigniter/>,
            tags: ["ml", "cnn", "python", "data augmentation"]
        },
        {
            id: "work-2",
            title: "Penguin Species Prediction App",
            company: "Personal Project",
            description: "Created a Streamlit app for predicting penguin species using machine learning, incorporating visualizations for better insights.",
            date: "2024",
            icon: <FaMobileAlt/>,
            tags: ["ml", "streamlit", "python", "data visualization"]
        },
        {
            id: "work-1",
            title: "Mobile App Prototype for Beauty shop",
            company: "Personal Project",
            description: "Designed a mobile app prototype for beauty shop, focusing on an intuitive user experience and seamless navigation.",
            date: "2024",
            icon: <GiCommercialAirplane/>,
            tags: ["ui/ux", "adobe xd", "figma", "prototyping"]
        },
        {
            id: "work-0",
            title: "Website prototype for Zara model",
            company: "Onelink BPO",
            description: "Build website for zara model, with amazing graphics",
            date: "2024",
            icon: <BsClipboardData/>,
            tags: ["python", "mssql", "pbi", "excel"]
        }
    ]
}


export default homeConfig
