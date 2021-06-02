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
                            Hello World! 
                            {/* Welcome <br />
                            to my portfolio!  */}
                        </Title>
                        <IntroII>
                            My name is Karen Hernandez, I am full-stack web-developer from PHX, AZ. Welcome to my personal website!<br/> <LearnMore href='/AboutMe'>Learn more</LearnMore>
                            {/* I am a Full-Stack Software Developer with a Bachelors Degree in
                            Business. I recently graduated from DevMoutain, a coding bootcamp. I
                            have an extensive background in various frontend and backend
                            technologies such as JavaScript, React, NodeJS, PostgreSQL, HTML, CSS and more. */}
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
    width:100%;
    @media(max-width:600px) {
    overflow:hidden;
    margin: 0px;
    background-color: inherit;
    backdrop-filter: brightness(0.3);
    height: 100%;

    }
`;
const Home = styled.div`
    height:100%;
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
    }
     @media(min-width:322px) and (max-width:600px){
    z-index:none;
     
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
   @media(min-width:322px) and (max-width:600px){
    display:none;}
   @media(min-width:601px) and (max-width:1024px){
    margin-left:0px;
   }  
    
`;

const Intro = styled.div`
    margin-top: 43%;
    margin-left: 28px;
    transform: translate(0%, -320%);
    width: 341px;
    height: 321px;
    @media(min-width:322px) and (max-width:600px){
            border-top:4px solid #654c29;
            position: unset;
            height: 100%;
            display:flex;
            align-items:center;
            align-content:center;
            justify-content:flex-start;
            flex-direction:column;
            margin-top: 0px;
            width:100%;
            margin-left:0px;
            transform:none;
        }
    @media(min-width:601px) and (max-width:1024px){
    margin-top:0px;
    margin-left:0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translate(5%, -85%);
    }
`;
const IntroII = styled.h3`
    font-size: 16px;
    width: 341px;
    height: 155px;
    line-height: 22px;
    color: white;
    a:hover{
        text-decoration:underline;
        font-size:20px;
    }
    @media(min-width:322px) and (max-width:600px){
        display:flex;
        flex-direction:column;
        align-items:center;
        align-content:center;
        justify-content:flex-start;
        width: 380px;
        font-size: 15px;
        line-height: 22px;
        padding-left: 30px;
        padding-right: 30px;
        position: unset;
    }
`;
const Title = styled.mark`
    font-size:48px;
    line-height:75px;
    font-style: italic;
    font-weight: 400;
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
    @media(min-width:322px) and (max-width:600px){
    flex-direction:column;
    justify-content:start;
    align-items:center;
    align-content:center;
    font-size:20px;
    line-height:30px; 
    margin-top:10%;
    width:95%;
    }
    @media(min-width:601px) and (max-width:1024px){
        font-size:40px;
        line-height:55px;
    }
    
`;


const LearnMore = styled.a`
    font-size: 19px;
    font-weight: 600;
    color: #654c29;
    text-decoration:none;
     @media(min-width:322px) and (max-width:600px){
            font-size:15px;
        }
`;
