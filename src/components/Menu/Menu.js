import React,{useState}from 'react';
import profilePicII from '../../images/me.jpg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import { motion } from 'framer-motion';


export default function Menu() {
    const [MenuOpen, setMenuOpen]= useState(false);
    return (
        <MenuTap>
            <MenuHeader >
                <ProfilePic src={profilePicII} />
                <Title>Karen Hernandez</Title>
                <SubTitle>Full-Stack Software Developer</SubTitle>
            </MenuHeader>
            <Hamburger onClick={()=>setMenuOpen(!MenuOpen)}>
                <span/>
                <span/>
                <span/>
            </Hamburger>

            <LinkTabs MenuOpen={MenuOpen}>
                <TabList>
                    <ListTap>
                        <TabLink  href='/'>Home</TabLink>
                    </ListTap>

                    <ListTap>
                        <TabLink href='/AboutMe'>About Me</TabLink>
                    </ListTap>

                    <ListTap>
                        <TabLink href='/Projects'>Projects</TabLink>
                    </ListTap>

                    <ListTap>
                        <TabLink href='/Skills'>Skills</TabLink>
                    </ListTap>

                    <ListTap>
                        <TabLink href='/Education'>Education</TabLink>
                    </ListTap>
                    <ListTap>
                        <TabLink href='/Contact'>Contact</TabLink>
                    </ListTap>
                    <ListTap>
                        <TabLink href={"https://docs.google.com/document/d/1Bs_AcqabonMY9W_fLDuYuoivyalXjxChgdWkyGolXEY/edit"} type="ResumeLink" target="_blank"> Download CV</TabLink>
                        {/* <TabLink href='/Resume'>View Resume</TabLink> */}
                    </ListTap>
                </TabList>
            </LinkTabs>
            {/* <div>
                <span className='iconify' data-icon='gg:dark-mode' data-inline='false'></span>
                <Button>Dark Mode</Button>
            </div> */}
        </MenuTap>
    );
}
const Title = styled.h1`
    margin: 0;
    line-height: 25px;
    padding-top: 2px;
    padding-bottom: 15px;
    /* @media(max-width:760px){
        display:none; 
    } */
`;
const ProfilePic = styled.img`
    height: 81px;
    width: 91px;
    border-radius: 37px;
    border: 3px solid #654c29;
 /* @media(max-width:760px){
        display:none; 
    } */
     
`;
const MenuTap = styled.div`
    background-image: url('https://images.unsplash.com/photo-1486961927870-395253783824?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTY3fHxjYWN0dXMlMjBncmF5c2NhbGV8ZW58MHx8MHxibGFjaw%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60');
    background-repeat: no-repeat;
    background-size: cover;
    height: fit-content;
    background-position: center;
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: space-between;
    opacity: 10px;
    height: 100%;
    width: 200px;
    position: fixed;
    background-color: #1f1f1f;
    box-shadow: 0 0 15px 1px #654c29;
    @media(max-width:760px){
        width: 100%;
        position:absolute;
    } 
    
`;

const MenuHeader = styled.span`
    
    width: 100%;
    height: 180px;
    padding-top: 27px;
    padding-right: 10px;
    padding-bottom: 10px;
    
    @media(max-width:760px){
        padding-top:10px;
        height: 0;
        border-top-width: 10px;
    }
    

`;
const SubTitle = styled.span`
    width: 100%;
    font-size: 16px;
    font-weight: bolder;
    margin-bottom: 20px;
    /* @media(max-width:760px){
        display:none; 
    } */
    /* text-shadow: 1px 1px 5px #1f1f1f; */
`;

const Hamburger= styled.div`
    display:none;
    flex-direction:column;
    cursor: pointer;
    margin-bottom:120px;
    margin-left: 90%;
    span{
        /* margin-left: 340px; */
        height:2px;
        width:25px;
        background-color:#654c29;
        margin-bottom:4px;
        border-radius:5px;

    }
    @media(max-width:760px) and (min-width:360px){
        display:flex;
        flex-direction:end;
        /* margin-bottom:120px; */
        /* margin-left:-15px; */
    }
`;

const LinkTabs = styled.nav`
    width: 100%;
    height: 90%;
    z-index: 1000;
    padding-bottom: 10px;
    margin: 51px 0px 10px;

    display:flex;
    justify-content:space-between;
    align-items:center;
    position:relative;
    
    
@media(max-width:760px){
    margin-bottom: 0px;
    overflow:hidden;
    flex-direction:column;
    width:100%;
    background:rgb(95 72 38 / 92%);
    /* background:#654c29; */
    margin-top: 5px;
    padding-bottom: 0px;
    max-height:${({MenuOpen})=>(MenuOpen ? "370px" : "0") };
    transition: max-height 0.3s ease-in;
    z-index:${({MenuOpen})=>(MenuOpen ? "2" : "none" ) };
    position:relative;
};
`;
const TabLink = styled.a`
    text-decoration: none;
    color: white;
    text-shadow: 1px 1px 5px rgb(0 0 0 / 50%);
    &:hover{
       color:#654c29; 
       font-weight:800;
    }

`;
const ListTap = styled.li`
    padding: 22px 0 12px;
    font-size: 21.5px;
    padding-left: 40px;
        @media(max-width:760px){
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 0px;
    }
`;

const TabList = styled.ul`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: space-around;
    padding: 10px 4px 28px 0px;
    font-size: 16.5px;
    backdrop-filter: brightness(0.5);
    border-top-style: solid;
    color: #654c29;
    height: 100%;
    width:100%;
    list-style: none;
    /* & a :hover:after{
        content:'';
        text-decoration: underline;
        transition:0.3s;
    } */
    @media(max-width:760px){
    align-items: stretch;
    width: 100%;
    }
`;
// const ResumeLink=styled.a`
// text-decoration:none;
// color:white;
// font-size:20px;
// `
// const Button = styled.button`
//     background-color: black;
//     color: WHITE;
//     padding: 5px;
//     border-radius: 10%;
//     font-size: 20px;
//     font-family: bold;
// `;
