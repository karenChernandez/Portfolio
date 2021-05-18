import React from 'react';
import styled from 'styled-components';
import { Title, Container, pageTransition } from '../StyledComponents';
// import { motion } from 'framer-motion';

export default function AboutMe() {
    return (
        <Container>
            {/* <motion.div initial='out' animate='in' exit='out' variants={pageTransition}> */}
                <Title>About Me</Title>
                <Quote>
                    "The capacity to learn is a gift; the ability to learn is a skill; the
                    willingness to learn is a choice" by Brian Herbert.
                </Quote>
                <Content>
                    Hi my name is Karen, I am a Full-Stack Software Developer with a Bachelors
                    Degree in Business. I recently graduated from DevMoutain, a coding Bootcamp. I
                    have an extensive background in various frontend and backend technologies,
                    developed websites and web applications from the ground up. Specializes in
                    JavaScript, React, Redux, Node.js, PostgreSQL, and Express. Professional
                    strengths include creative problem-solving and time management. A
                    Detail-oriented mindset from 8 years of experience in the Finance industry.
                </Content>
                <Content>
                    I am a motivated, hardworking individual with hands on experience in creating
                    web applications with an emphasis on PERN stack. Seeking a Full-time employment
                    as Entry Level Software Engineer position, where I can use and expand my
                    knowledge. 
                    
                    Please take a look at my <a href={"https://docs.google.com/document/d/1Bs_AcqabonMY9W_fLDuYuoivyalXjxChgdWkyGolXEY/edit"} type="ResumeLink" target="_blank"> Resume</a>.
                </Content>
            {/* </motion.div> */}
        </Container>
    );
}
// const ContainerBox= styled.div`
// font-size:16px;
// @media(min-width:360px) and (max-width:760px){
//     justify-content: center;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     align-content: center;
//     flex-wrap: wrap;
//     }
//     `
const Quote = styled.h1`
    font-family: 'Bad Script', cursive;
    border-bottom: 4px solid #5f48266b;
    padding: 12px;
    font-size:16px;
    line-height:25px;
@media(min-width:360px)and(max-width:760px){
    font-size: 15px;
    margin-top: 0px;
    margin-bottom: 0px;
}
    /* background: radial-gradient(black, transparent); */
`;

const Content = styled.h1`
    padding-top: 16px;
    font-size: 15px;
    padding-left: 10px;
    padding-right: 10px;
    & a{
        text-decoration:none;
        color:#654c29;
        /* color: #bc8c2d; */
        font-size:16px;

    }
    a:hover{
        /* color: #654c29; */
        text-decoration:underline;
        font-size:17px;
        
    }
    
    /* background: radial-gradient(black, transparent); */
`;
