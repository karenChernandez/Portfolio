import React from 'react';
import devMountain from './../../images/devMountainLogo.jpeg';
import nau from './../../images/NAU1.png';
import styled from 'styled-components';
import { Title, Container3, pageTransition } from './../StyledComponents';
// import { motion } from 'framer-motion';

export default function Education() {
    return (
        <EducationCont>
             {/* <motion.div initial='out' animate='in' exit='out' variants={pageTransition}> */}
                <Title>Education</Title>
                <Box>
                    <img src={devMountain} />
                    <div>
                        <h2>2020</h2>
                        <h1>DevMountain</h1>
                        <h2>Full Stack Software Development</h2>
                    </div>
                </Box>

                <Box>
                    <img src={nau} />
                    <div>
                        <h2>2017</h2>
                        <h1>NAU</h1>
                        <h2>Business Administration</h2>
                    </div>
                </Box>
            {/* </motion.div> */}
        </EducationCont>
    );
}
const EducationCont = styled.div`
    color: white;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin: 10px 30px 10px 230px;
    font-size: 15px;
    background: radial-gradient(#00000052, transparent);
@media(min-width:322px) and (max-width:600px){
    backdrop-filter: brightness(0.2);
    border-top:4px solid #654c29;
    position: relative;
    margin: 180px 20px 20px;
    display: flex;
    justify-content: start;
    align-items: center;
    align-content: center;
    /* height:auto; */
}
`;

const Box = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    align-content: stretch;
    color: white;
    padding-top: 40px;
    padding-bottom: 40px;
    line-height: 13px;
    /* background: radial-gradient(white, transparent); */
    border-bottom: 4px solid #5f48266b;
    & img {
        width: 187px;
        height: 128px;
    }
    & h1 {
        font-size: 22px;
        font-weight: 700;
    }
    & h2 {
        font-size: 15px;
    }
`;
