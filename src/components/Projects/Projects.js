import React from 'react';
import myBootcampJournal from './../../images/myBootcampJournal.png';
import zeppi from './../../images/zeppi.png';
import myBookStore from './../../images/myBookStoreApp.png';
import styled from 'styled-components';
import { Title, Container2, pageTransition } from '../StyledComponents';
// import { motion } from 'framer-motion';

export default function Projects() {
    return (
        // <motion.div initial='out' animate='in' exit='out' variants={pageTransition}>
                <Container2>
                <Title1>Projects</Title1>

                <ProjectBox>
                    <div>
                        <a href='https://zeppi.site/'>
                            <ProjectImage src={zeppi} />
                        </a>
                    </div>

                    <ProjectText>
                        <LinkTab href='https://zeppi.site/'>ZEPPI</LinkTab>
                        <p>
                            This is a collaborated project with two fellow students.ZEPPI is a location-based message web application with a twist of
                            creativity. This application uses maps, geolocation and messaging to
                            give users an easy and fun way to communicate. Users send(drop) or
                            receive(loot) messages from friends which can be claimed on a map.
                        </p>
                    </ProjectText>
                </ProjectBox>

                <ProjectBox>
                    <ProjectImage src={myBootcampJournal} />

                    <ProjectText>
                        <LinkTab>My Bootcamp Journal</LinkTab>
                        <p>
                            An EASY-TO-USE Goal Oriented Journal App that helps the user stay
                            organized in a fast-paced environment. Users can register/sign-in to
                            enter their main objective and micro goals. It also provides a section
                            to add to-dos and a Calendar where the to-do lists are being rendered
                            and a section for important notes.
                        </p>
                    </ProjectText>
                </ProjectBox>

                <ProjectBox>
                    <ProjectImage src={myBookStore} />
                    <ProjectText>
                        <LinkTab>My Book Store</LinkTab>
                        <p>
                            This is the first project I worked on while attending DevMountain. Is an
                            e-commerce app with no database. It’s intended to display products and
                            allows you to add or delete items to the cart and complete the
                            transaction.
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
@media(min-width:320px) and (max-width:768px){
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
    transition: opacity 0.25s ease-in-out;
    -moz-transition: opacity 0.25s ease-in-out;
    -webkit-transition: opacity 0.25s ease-in-out;
    /* border: 3px black solid; */
    &:hover {
        width:240px;
        height:237px;
        opacity: 1 ease-in-Out;
        /* @include easeOut; */
    }
`;
const ProjectText = styled.div`
    width: 420px;
    height: 340px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 45px;
    @media(min-width:320px) and (max-width:768px){
    width:100%;
    padding-top:15px;
    justify-content:center;

    }
`;
const LinkTab = styled.a`
    text-decoration: none;
    color: white;
    font-size: 22px;
    font-weight: 700;
`;
