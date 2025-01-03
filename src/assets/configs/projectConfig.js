import { BiGitRepoForked } from "react-icons/bi";
import { AiFillGithub, AiFillEye } from "react-icons/ai";
import { ImBook } from "react-icons/im";

/*import landslideModel from "../images/landslide_model.png";
import penguinSpecies from "../images/penguin_species.png";*/
import portfolioWeb from "../images/portfolio_web.png";

import React from 'react'

const projectConfig = [
    {
        id: "project-5",
        title: "Landslide Prediction",
        links: [
            {
                name: "repo",
                url: "https://github.com/rushi-ace-01/landslide-prediction",
                icon: <AiFillGithub/>,
            },
            {
                name: "fork",
                url: "https://github.com/rushi-ace-01/landslide-prediction/fork",
                icon: <BiGitRepoForked/>,
            }
        ],
        image:"https://upload.wikimedia.org/wikipedia/commons/b/b2/Landslide_in_Cusco%2C_Peru_-_2018.jpg",
        description: "A CNN-based model for landslide prediction using historical data and live weather inputs.",
        target: "_blank"
    },
    {
        id: "project-3",
        title: "Penguin Species App",
        links: [
            {
                name: "repo",
                url: "https://github.com/rushi-ace-01/Penguin-species-App",
                icon: <AiFillGithub/>
            }
        ],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIfOe9CR3Rs1tv0VOyakVUYEjQORfl-L-69A&s",
        description: "Project for Penguin Species Predction",
        target: "_blank"
    },
    {
        id: "project-2",
        title: "UI/UX Projects",
        links: [
            {
                name: "repo",
                url: "https://github.com/rushi-ace-01/UI-UX-projects",
                icon: <AiFillGithub/>
            }
        ],
        image: "https://e7.pngegg.com/pngimages/292/269/png-clipart-logo-user-interface-design-user-experience-design-design-user-interface-design-label.png",
        description: "Designs, prototypes and graphics illustrations",
        target: "_blank"
    },
    {
        id: "project-1",
        title: "Portfolio Web",
        links: [
            {
                name: "repo",
                url: "https://github.com/rushi-ace-01/portfolio",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/rushi-ace-01/portfolio/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/rushi-ace-01/portfolio/subscription",
                icon: <AiFillEye/>
            }
        ],
        image: portfolio,
        description: "Source code of my current portfolio web page as data scientist.",
        target: "_blank"
    }
]

export default projectConfig
