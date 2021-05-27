import React from 'react';
import myBootcampJournal from './../../images/myBootcampJournal.png';
import zeppi from './../../images/zeppi.png';
import myBookStore from './../../images/myBookStoreApp.png';
import styled from 'styled-components';
import { Title, Container2, pageTransition } from '../StyledComponents';
import {FaGithub} from 'react-icons/fa';
// import { motion } from 'framer-motion';

export default function Projects() {
    return (
        // <motion.div initial='out' animate='in' exit='out' variants={pageTransition}>
                <Container2>
                <Title1>Projects</Title1>

                <ProjectBox>
                    <ImgAndRepoLink>
                        <a href='https://zeppi.site/'>
                            <ProjectImage src={zeppi} />
                        </a>
                        <RepoLink>
                        <FaGithub/>
                        <a href='https://github.com/karenChernandez/zeppi'>Github Repo</a>
                        </RepoLink>
                    </ImgAndRepoLink>

                    <ProjectText>
                        <LinkTab href='https://zeppi.site/'>ZEPPI</LinkTab>
                        <p>
                            Designed a treasure hunt message web application with integrated maps, and geolocation for a fresh and interactive business and user experience. In this App users were enable to send(drop) or receive(loot) messages which can be claimed on a map:<br/>
                            * Geolocation API was used to track device location<br/>
                            * Cube/Earthdistance PostgreSQL extensions used to create a radius and help match a location<br/>
                            Developed components with React for core functionalities and reusability.
                            This project was in collaboration with 2 remote developers using Github and Trello in a remote environment
                            
                            </p>
                            
                            {/* This is a collaborated project with two fellow students.ZEPPI is a location-based message web application with a twist of
                            creativity. This application uses maps, geolocation and messaging to
                            give users an easy and fun way to communicate. Users send(drop) or
                            receive(loot) messages from friends which can be claimed on a map. */}
                    </ProjectText>
                </ProjectBox>

                <ProjectBox>
                     <ImgAndRepoLink>
                    <ProjectImage src={myBootcampJournal} /> 
                    <RepoLink>
                        <FaGithub/>
                        <a href='https://github.com/karenChernandez/firstPersonalProject'>Github Repo</a>
                    </RepoLink>
                     </ImgAndRepoLink>

                    <ProjectText>
                        <LinkTab>My Bootcamp Journal</LinkTab>
                        <p>
                            Developed an easy to use Goal Oriented Journal App using React for core functionalities and reusability.
                            Used Redux and Redux-Promise Middleware for container structure.Integrated RESTful API with Node for route organization, error handling, create, access, query, and editing multiple relational MySQL and PostgreSQL databases.Provided authentication and user credentials using Express Session and Bcrypt allowing users to register/sign-in and enter main objective, micro-goals.Created a calendar component using React- Calendar library and MomentJS to display to-dos and notes that are rendered by a click event.

                            {/* An EASY-TO-USE Goal Oriented Journal App that helps the user stay
                            organized in a fast-paced environment. Users can register/sign-in to
                            enter their main objective and micro goals. It also provides a section
                            to add to-dos and a Calendar where the to-do lists are being rendered
                            and a section for important notes. */}
                        </p>
                    </ProjectText>
                </ProjectBox>

                <ProjectBox>

                    <ImgAndRepoLink>
                    <ProjectImage src={myBookStore} />
                    <RepoLink>
                        <FaGithub/>
                        <a href='https://github.com/karenChernandez/NoDB'>Github Repo</a>
                        </RepoLink>
                     </ImgAndRepoLink>

                    <ProjectText>
                        <LinkTab>My Book Store</LinkTab>
                        <p>
                            Developed an e-commerce site with no database using React for core functionalities and reusability.Developed RESTful API with NodeJS for route organization, error handling and to create, access, query and edit data from a JSON file.
                            Use lifecycles methods such as componentDidMount to fetch data in React and integrated styling using CSS.

                            {/* This is the first project I worked on while attending DevMountain. Is an
                            e-commerce app with no database. It’s intended to display products and
                            allows you to add or delete items to the cart and complete the
                            transaction. */}
                        </p>
                    </ProjectText>
                </ProjectBox>
        </Container2>
            // </motion.div>
    );
}
const Title1 = styled.h1`
    display: flex;
    align-self: center;
    justify-content: center;
    width: fit-content;
    font-size: 30px;
    font-weight: 200;
    margin-bottom: 20px;
    border-bottom: 4px solid white;
`;
const ProjectBox = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    /* background: radial-gradient(black, transparent); */
    margin-bottom: 23px;
    font-size: 15px;
    /* border-bottom: 4px solid #654c29; */
    border-bottom: 4px solid #5f48266b;
@media(min-width:320px) and (max-width:977px){
    margin:20px;
    display: flex;
    flex-direction: column;
    flex-wrap:wrap;
    & p {
        /* width:100%; */
        padding:20px;
        margin:0;
        justify-content:center;
    }
}
`;
const ProjectImage = styled.img`
    width: 287px;
    height: 250px;
    border-radius: 10%;
    opacity: 0.3;
    transition: 0.25s ease-out;
    
    &:hover {
        /* width:240px;
        height:2px; */
        opacity: 1;
        transition:0.25 ease-in-out;
        /* @include easeOut; */
    }
`;
const ProjectText = styled.div`
    width: 420px;
    /* height: 340px; */
    padding:10px 25px;
    @media(min-width:320px) and (max-width:600px){
    width:100%;
    padding-top:15px;
    justify-content:center;

    }
`;
const ImgAndRepoLink = styled.div`
    display:flex;
    flex-direction:column;
    `
const RepoLink = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    align-content:center;
    justify-content:center;
    margin:10px;
    font-size:18px;
& a{
    text-decoration:none;
    color:whitesmoke;
    font-family:bold;
    margin-left:5px;
    
}

`
const LinkTab = styled.a`
    text-decoration: none;
    color: white;
    font-size: 22px;
    font-weight: 700;
`;
