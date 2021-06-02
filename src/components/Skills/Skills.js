import React from 'react';
import styled from 'styled-components';
import { Title, Container3, pageTransition } from '../StyledComponents';

import { FaHtml5, FaCss3, FaJs, FaNodeJs, FaReact, FaNpm, FaFigma } from 'react-icons/fa';
import { DiBootstrap, DiSass, DiPostgresql, DiVisualstudio } from 'react-icons/di';
import {
    SiMaterialUi,
    SiPostman,
    SiHeroku,
    SiPrettier,
    SiRedux,
    SiStyledComponents,
    SiGit,
    SiGithub
} from 'react-icons/si';
// import { motion } from 'framer-motion';

export default function Skills() {
    return (
        <Container3>
            {/* <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}> */}
             {/* <motion.div initial='out' animate='in' exit='out' variants={pageTransition}> */}
                <Title>My Skill Set</Title>
                <Box>
                    <BoxTitle>HTML</BoxTitle>
                    <Icons>
                        <Icon>
                            <FaHtml5 />
                            <h3>HTML5</h3>
                        </Icon>
                    </Icons>
                </Box>

                <Box>
                    <BoxTitle>CSS</BoxTitle>
                    <Icons>
                        <Icon>
                            <li>
                                <FaCss3 />
                            </li>
                            <h3>CSS3</h3>
                        </Icon>
                        <Icon>
                            <li>
                                <DiBootstrap />
                            </li>
                            <h3>Bootstrap</h3>
                        </Icon>
                        <Icon>
                            <li>
                                <DiSass />
                            </li>
                            <h3>SASS</h3>
                        </Icon>
                        <Icon>
                            <li>
                                <SiMaterialUi />
                            </li>
                            <h3>Material UI</h3>
                        </Icon>
                        <Icon>
                            <li>
                                <SiStyledComponents />
                            </li>
                            <h3>Styled Components</h3>
                        </Icon>
                    </Icons>
                </Box>

                <Box>
                    <BoxTitle>JAVASCRIPT</BoxTitle>
                    <Icons>
                        <Icon>
                            <FaJs />
                            <h3>JavaScript</h3>
                        </Icon>
                        <Icon>
                            <FaReact />
                            <h3>React</h3>
                        </Icon>
                        <Icon>
                            <SiRedux />
                            <h3>Redux</h3>
                        </Icon>
                    </Icons>
                </Box>
                <Box>
                    <BoxTitle>BACKEND</BoxTitle>
                    <Icons>
                        <Icon>
                            <DiPostgresql />
                            <h3>PostgreSQL</h3>
                        </Icon>
                        <Icon>
                            <FaNodeJs />
                            <h3>NodeJS</h3>
                        </Icon>
                        <Icon>
                            <h3>Express</h3>
                        </Icon>
                    </Icons>
                </Box>
                <Box>
                    <BoxTitle>BUILD TOOLS</BoxTitle>
                    <Icons>
                        <Icon>
                            <FaNpm />
                        </Icon>
                    </Icons>
                </Box>
                <Box>
                    <BoxTitle>OTHER</BoxTitle>
                    <Icons>
                        <Icon>
                            <SiPostman />
                            <h3>Postman</h3>
                        </Icon>
                        <Icon>
                            <SiHeroku />
                            <h3>Heroku</h3>
                        </Icon>
                        <Icon>
                            <SiPrettier />
                            <h3>Prettier</h3>
                        </Icon>
                        <Icon>
                            <SiGithub />
                            <h3>Github</h3>
                        </Icon>
                        <Icon>
                            <SiGit />
                            <h3>Git</h3>
                        </Icon>
                        <Icon>
                            <FaFigma />
                            <h3>Figma</h3>
                        </Icon>
                        <Icon>
                            <DiVisualstudio />
                            <h3>VisualStudio</h3>
                        </Icon>
                        <span
                            className='iconify'
                            data-icon='carbon:json'
                            data-inline='false'
                        ></span>
                    </Icons>
                </Box>
            {/* </motion.div> */}
        </Container3>
    );
}

const Box = styled.div`
    border: 4px solid rgb(0 0 0/ 12%);
    padding-bottom: 10px;
    margin-bottom: 20px;
    border: 4px solid #5f48266b;
    @media(min-width:320px) and (max-width:760px){
    backdrop-filter: brightness(0.5);
    margin: 10px;
    }
`;
const BoxTitle = styled.h1`
    border-bottom: 4px solid #5f48266b;
    font-size: 25px;
    text-align: left;
    padding-bottom: 10px;
    margin: 10px;
`;

const Icons = styled.div`
    height: 59px;
    color: white;
    margin-left: 5px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    align-content: stretch;
    list-style: none;
    /* color:#654c29; */
`;
const Icon = styled.div`
    line-height: 0px;
    font-size: 38px;
    & h3 {
        font-size: 10px;
    }
    @media(min-width:322px) and (max-width:600px){
        font-size: 25px;
    }
`;
