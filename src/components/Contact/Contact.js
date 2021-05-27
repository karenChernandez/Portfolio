import React, { useState } from 'react';
import axios from 'axios';
import styled, {keyframes} from 'styled-components';
import { Title2, Container2, pageTransition} from '../StyledComponents';
import { FaGithub, FaLinkedin, FaEnvelope, FaTelegramPlane } from 'react-icons/fa';
// import { motion } from 'framer-motion';

const initialFormState = {
    subject: '',
    name: '',
    email: '',
    text: ''
};

export default function Contact() {
    const [form, setForm] = useState(initialFormState);
    // const [sendEmail, setSendEmail] = useState(null)

    const handleInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('/api/sendEmail', form).then((res) => {
            console.log('res?', res.data);
        });
    };

    console.log('subject?', form.subject);
    console.log('name?', form.name);
    console.log('email?', form.email);
    console.log('text?', form.text);
    console.log('data?', form.data);
    return (
      <Container2>
        {/* <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}> */}
           {/* <motion.div initial='out' animate='in' exit='out' variants={pageTransition}> */}
            <Title2>Contact Info</Title2>

            <ContactBox>
                <Box>
                    <form onSubmit={handleSubmit}>
                        <ContactTitle>Get in Touch</ContactTitle>
                        <Label>Your Name:</Label>
                        <InputBox
                            type='text'
                            id='name'
                            name='name'
                            onChange={handleInput}
                            value={form.name}
                        />
                        <br />
                        <Label>Subject:</Label>
                        <InputBox
                            type='text'
                            id='subject'
                            name='subject'
                            onChange={handleInput}
                            value={form.subject}
                        />
                        <br />
                        <Label>Email:</Label>
                        <InputBox
                            type='email'
                            id='email'
                            name='email'
                            onChange={handleInput}
                            value={form.email}
                        />
                        <br />
                        <Label>You Message:</Label>
                        <TextBox
                            type='text'
                            id='text'
                            name='text'
                            onChange={handleInput}
                            value={form.text}
                            cols='30'
                            rows='10'
                        />
                        <br />
                        <Button type='submit' onClick={handleSubmit}>
                            Send it! 
                            <i>
                                <FaTelegramPlane className='svg' />
                            </i>
                        </Button>
                        <br />
                    </form>
                </Box>

                <Box>
                    <ContactTitle>My contact info!</ContactTitle>
                    <div>
                        <ContactInfo>
                           <SocialMediaIcons><FaEnvelope/></SocialMediaIcons>
                            <h2>Email:</h2>
                            <h3>karenChernandez@live.com</h3>
                        </ContactInfo>

                        <ContactInfo>
                            <SocialMediaIcons>
                                <FaLinkedin/>
                                </SocialMediaIcons>
                            <h2>LinkedIn:</h2>
                            <ALink href='https://www.linkedin.com/in/karen-hernandez-11541311a'>
                                https://www.linkedin.com/in/karen-hernandez-11541311a/
                            </ALink>
                        </ContactInfo>
                        <ContactInfo>
                            <SocialMediaIcons><FaGithub /></SocialMediaIcons>
                            <h2>GitHub:</h2>
                            <ALink href='https://github.com/karenChernandez'>
                                https://github.com/karenChernandez
                            </ALink>
                        </ContactInfo>
                    </div>
                </Box>
            </ContactBox>
        {/* </motion.div> */}
        </Container2>
    );
}

const Label = styled.h1`
    font-size: 16px;
    width: 100%;
    height: 30px;
    text-align: left;
    padding-left: 20px;
`;
const ContactBox = styled.div`
    width: 100%;
    color: white;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    margin-top:3%;
    /* margin: 10px 30px 10px 230px; */
    @media(min-width:322px) and (max-width:768px){
    display: flex;
    flex-wrap:wrap;
    flex-direction: column;
    align-content: center;
    justify-content: flex-start;
    align-items: stretch;
    margin:10px 30px;
    }
`;

const Box = styled.div`
    width: 50%;
    /* padding-bottom: 5%; */
    margin-left: 20px;
    @media(min-width:322px) and (max-width:768px){
        width:100%;
        margin-left:0px;
    }
`;

const ContactTitle = styled.h1`
    font-size:22px;
    font-weight: 700;
`;
const InputBox = styled.input`
    color:whitesmoke;
    font-size:15px;
    width: 90%;
    height: 30px;
    border: none;
    /* background-color: lightgray; */
    background-color: #5f48266b;
`;

const TextBox = styled.textarea`
    width: 90%;
    height: 30%;
    border: none;
    background-color: #5f48266b;
`;

const ContactInfo = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    align-content: space-between;
    & h2 {
        padding-left: 2px;
        font-size:15px;
        margin-right:5px;
    }
    & h3{
        font-size:14px;
    }
    & a:hover{
        text-decoration:underline;
        
    }
    
`;
const ALink = styled.a`
    text-decoration: none;
    color: white;
    padding-left: 2px;
    font-size:14px;
`;
const fly = keyframes`
    0% {transform: translateX(0%)}
    50% {transform: translateX(500%)}
    100% {transform: translateX(0%)}
`;
const Button = styled.button`
    background-color: #654c29;
    border: none;
    color: black;
    padding: 5px;
    border-radius: 4px;
    width: 90%;
    font-size: 15px;
    font-family: bold;
    margin-top: 5px;
    margin-bottom: 5px;
    & .svg {
  display: inline-block;
  vertical-align: middle;
  padding-right: 2px;
  margin-left: 10px;
}
    &:hover .svg {
  animation: ${fly} 2s ease 1;
}
  
    
`;
const SocialMediaIcons= styled.i`
font-size:20px;
margin-right:3px;
color:#5f48266b
`
