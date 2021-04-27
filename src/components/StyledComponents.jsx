import styled from 'styled-components';

export const Title = styled.h1`
margin:0px;
font-size: 70px;
font-weight: 200;
width: fit-content;
margin-left: 304px;
border-bottom: 4px solid white;
margin-bottom:20px;
color:white;
`
export const Title2= styled(Title)`
margin-left:300px;
margin-top:20px;
`
export const Container = styled.div`
color:white;
font-size:16px;
margin: 20px 30px 20px 220px;
height: auto;
background: radial-gradient(#141515, transparent);
border: 5px solid #5f48266b;
width:100%;
`
export const Container2= styled.div`
color:white;
font-size:16px;
width:100%;
height:100%;
margin: 0px 30px 20px 220px;
overflow-y:scroll;

`
export const Container3= styled.div`
color:white;
font-size:16px;
width:100%;
height: 100%;
margin: 20px 30px 20px 220px;
overflow-y:scroll;
padding-bottom: 20px;
`

export const pageTransition= {
in:{
opacity:1,
// y:0
},
out:{
opacity: 0,
// y:"-100%"
}
}


