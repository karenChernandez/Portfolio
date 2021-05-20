import React from 'react';
import styled from 'styled-components';
import profilePicII from '../../images/profilePic.jpg';
// import { motion } from 'framer-motion';
import { pageTransition } from '../StyledComponents';

export default function HomePage() {
    
    return (
        // <motion.div initial='out' animate='in' exit='out' variants={pageTransition}>
            <HomeCover>
                <Home>
                    <Me src={profilePicII} />
                    <Intro>
                        <Title>
                            {/* Hello! Welcome <br/>to my personal portfolio! */}
                            Hello World!, Welcome <br />
                            to my portfolio! 
                        </Title>
                        <IntroII>
                            I am full-stack web-developer from PHX, AZ. My tech stack is PERN and I enjoy creating web applications from the ground up.
                            {/* I am a Full-Stack Software Developer with a Bachelors Degree in
                            Business. I recently graduated from DevMoutain, a coding bootcamp. I
                            have an extensive background in various frontend and backend
                            technologies such as JavaScript, React, NodeJS, PostgreSQL, HTML, CSS and more. */}
                            {/* <br /> */}

                            <LearnMore href='/AboutMe'>Learn more</LearnMore>
                        </IntroII>
                    </Intro>
                </Home>
            </HomeCover>
        // </motion.div>
    );
}
const HomeCover = styled.div`
    background-color: #141515;
    margin-left: 190px;
    @media(min-width:360px) and (max-width:760px){
    overflow:hidden;
    margin-top:0px;
    margin: 10px;
    }
    
`;
const Home = styled.div`
    height:100%;
    /* position: relative;
    z-index:2; */
    color:whitesmoke;
    
     & :hover{
        filter:blur(0px);
        transition: 2s; 
    }

     & img { 
        transform:scale(1.2);
        transition: 3s;
    }
    & div:hover ~ img{
        filter:blur(0px);
        /* transform:scale(1.2);
        transition: 3s; */
    }
     @media(min-width:360px) and (max-width:760px){
    z-index:none;
    backdrop-filter: brightness(0.2);
    height: 100%;
    }
   
`;

const Me = styled.img`
    filter:blur(20px);
    transition: 2s;
    height: 93vh;
    width: 54%;
    margin-left: 386px;
    margin-top: 50px;
    background-repeat: no-repeat;
    background-size: cover;
    box-sizing: border-box;
    background-size: cover;
    background-position: center;
   @media(min-width:360px) and (max-width:760px){
    display:none;
    }
`;

const Intro = styled.div`
    /* position: absolute; */
    margin-top: 138px;
    margin-left: 28px;
    transform: translate(0%, -320%);
    font-size: 70px;
    font-style: italic;
    font-weight: 400;
    line-height: 99px;
    width: 633px;
    height: 230px;
    @media(min-width:360px) and (max-width:760px){
            border-top:4px solid #654c29;
            position:relative;
            display:flex;
            align-items:center;
            align-content:center;
            justify-content:flex-start;
            flex-direction:column;
            margin-top:50%;
            width:100%;
            margin-left:0px;
            transform:none;
        }
`;
const IntroII = styled.h3`
    font-size: 16px;
    width: 424px;
    height: 155px;
    line-height: 22px;
    color: white;
    a:hover{
        /* color: #654c29; */
        text-decoration:underline;
        font-size:20px;
    }
    @media(min-width:360px) and (max-width:760px){
    font-size: 15px;
    display:flex;
    flex-direction:column;
    align-items:center;
    align-content:center;
    justify-content:flex-start;
    width: 380px;
    /* height: 178px; */
    line-height: 22px;
    padding-left: 30px;
    padding-right: 30px;
    position: relative;
    /* transform: translate(-8%, 447%); */
    }
`;
const Title = styled.mark`
    background: radial-gradient(black, transparent);
    color:whitesmoke;
    border-radius: 50% 0%;
    box-shadow: 0 0 6px #5f4826, 0 0 3px #0000000a;
    padding: -0.5em 1.3em;
    box-decoration-break: clone;
    font-weight: 700;
    &:nth-of-type(2) span {
        background-clip: content-box;
    }
    @media(min-width:360px) and (max-width:760px){
    flex-direction:column;
    justify-content:start;
    align-items:center;
    align-content:center;
    font-size:20px;
    line-height:30px; 
    margin-top:3%;
    width:95%;
    }
    
`;


const LearnMore = styled.a`
    font-size: 19px;
    font-weight: 600;
    color: #654c29;
    text-decoration:none;
     @media(min-width:360px) and (max-width:760px){
            font-size:15px;
        }
`;
