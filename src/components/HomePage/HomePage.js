import React from 'react';
import styled from 'styled-components';
import profilePicII from '../../images/profilePic.jpg';
import { motion } from 'framer-motion';
import { pageTransition } from '../StyledComponents';

export default function HomePage() {
    return (
        // <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <motion.div initial='out' animate='in' exit='out' variants={pageTransition}>
            <HomeCover>
                <Home>
                    <Me src={profilePicII} />
                    <Intro>
                        <Title>
                            {/* Hi my name is Karen and I'm a Full-Stack Software Engineer. Welcome to my
                        Portfolio! */}
                            Welcome, I'm <br />
                            Karen Hernandez!
                        </Title>
                        <IntroII>
                            I am a Full-Stack Software Developer with a Bachelors Degree in
                            Business. I recently graduated from DevMoutain, a coding bootcamp. I
                            have an extensive background in various frontend and backend
                            technologies such as JavaScript, React, NodeJS, PostgreSQL and more.
                            <br />
                            <LearnMore href='/AboutMe'>Learn more</LearnMore>
                        </IntroII>
                    </Intro>
                </Home>
            </HomeCover>
        </motion.div>
    );
}
const HomeCover = styled.div`
    background-color: #141515;
    margin-left: 190px;
`;
const Home = styled.div`
    height:100%;
    position: relative;
    z-index:2;
    color:whitesmoke;
    /* transition: 2s; */
    /* transform:scale(1.0); */
     & :hover{
        filter:blur(0px);
        transition: 2s;
        /* color:whitesmoke; */
        /* transform:scale(1.2); */
        
    }

     & img {
        /* filter:blur(0px);
        transition: 2s; */
        transform:scale(1.2);
        transition: 3s;
       
    }
    & div:hover ~ img{
        filter:blur(0px);
        /* transform:scale(1.2);
        transition: 3s; */
    }
`;

const Me = styled.img`
    /* position:absolute; */
    /* pointer-events:none;
    filter:blur(10px); */
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
   
`;

const Intro = styled.div`
    position: absolute;
    margin-top: 138px;
    margin-left: 28px;
    transform: translate(0%, -320%);
    font-size: 70px;
    font-style: italic;
    font-weight: 400;
    line-height: 99px;
    width: 633px;
    height: 230px;
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
`;
const Title = styled.mark`
    /* position:relative;
    z-index:2;
    transition: 2s; */

    background: radial-gradient(black, transparent);
    /* color: #654c29; */
    color:whitesmoke;
    border-radius: 50% 0%;
    box-shadow: 0 0 6px #5f4826, 0 0 3px #0000000a;
    padding: -0.5em 1.3em;
    box-decoration-break: clone;
    font-weight: 700;
    &:nth-of-type(2) span {
        background-clip: content-box;
    }
    & 
`;


const LearnMore = styled.a`
    font-size: 19px;
    font-weight: 600;
    color: #654c29;
    text-decoration:none;
`;
