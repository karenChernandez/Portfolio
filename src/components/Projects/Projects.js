import React from 'react';
import myBootcampJournal from './../../images/myBootcampJournal.png';
import zeppi from './../../images/zeppi.png';
import myBookStore from './../../images/myBookStoreApp.png';
import styled from 'styled-components';
import { Title, Container2, pageTransition } from '../StyledComponents';
import { motion } from 'framer-motion';

export default function Projects() {
    return (
        <motion.div initial='out' animate='in' exit='out' variants={pageTransition}>
                <Container2>
                <Title1>Projects</Title1>

                <ProjectBox>
                    <div>
                        <a href='https://zeppi.io/#/'>
                            <ProjectImage src={zeppi} />
                        </a>
                    </div>

                    <ProjectText>
                        <LinkTab href='https://zeppi.io/#/'>ZEPPI</LinkTab>
                        <p>
                            This is a collaborated project with Brenna Harden and Jacob McFadden.
                            ZEPPI is a location-based message web application with a twist of
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
            </motion.div>
    );
}
const Title1 = styled.h1`
    font-size: 70px;
    font-weight: 200;
    width: 382px;
    margin-left: 29%;
    margin-bottom: 20px;
    border-bottom: 4px solid white;
    margin-top:20px;
`;

// const MainBox = styled.div`
// color:white;
// font-size:12px;
// margin: 40px;
// /* margin-top: 101px; */
// padding: 16px;
// `;
const ProjectBox = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    /* background: radial-gradient(black, transparent); */
    margin-bottom: 23px;
    font-size: 16px;
    /* border-bottom: 4px solid #654c29; */
    border-bottom: 4px solid #5f48266b;
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
        opacity: 1;
        /* @include easeOut; */
    }
`;
const ProjectText = styled.div`
    width: 420px;
    height: 340px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 45px;
`;
const LinkTab = styled.a`
    text-decoration: none;
    color: white;
    font-size: 34px;
    font-weight: 700;
`;
