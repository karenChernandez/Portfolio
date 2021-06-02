import styled from 'styled-components';

export const Title = styled.h1`
    font-size: 30px;
    font-weight: 200;
    width: fit-content;
    display: flex;
    align-self: center;
    border-bottom: 4px solid white;
    margin:20px 0px;
    color:white;
    @media(min-width:322px) and (max-width:600px){
    margin:10px 0px;
    }
`
export const Title2= styled(Title)`
    display:flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin:20px 0px;
    @media(min-width:322px) and (max-width:600px){
    margin:10px 0px;
    }
`
export const Container = styled.div`
    color:white;
    font-size:15px;
    padding-right: 20px;
    padding-left:20px;
    background: radial-gradient(#141515, transparent);
    border: 5px solid #5f48266b;
    width:100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: flex-start;
    flex-wrap:nowrap;
    margin: 10px 30px 10px 230px;

@media(min-width:322px) and (max-width:600px){
    backdrop-filter: brightness(0.2);
    
    border-top:4px solid #654c29;
    /* height: 100%; */
    position:relative;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin:0px 20px 10px 20px;
    flex-direction: column;
    flex-wrap: nowrap;
    overflow: scroll;
    }
`
export const Container2= styled.div`
    color:white;
    font-size:16px;
    width:100%;
    /* margin: 45% 10px 10px 10px; */
    margin: 10px 30px 10px 230px;
    overflow-y:scroll;
    display: flex;
    flex-wrap:nowrap;
    flex-direction: column;
    align-content: center;
    align-items:center;

    @media(min-width:322px) and (max-width:600px){
    backdrop-filter: brightness(0.2);
    border-top:4px solid #654c29;
    position: relative;
    margin: 0px 20px 20px;
    padding-left: 15px;
    padding-right: 15px;
    height: auto;
    }


`
export const Container3= styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: stretch;
    justify-content: flex-start;
    flex-wrap:nowrap;
    margin: 10px 30px 10px 230px;
    color:white;
    font-size:15px;
    width:100%;
    overflow-y:scroll;
    padding-bottom: 20px;
    @media(min-width:320px) and (max-width:600px){
    backdrop-filter: brightness(0.2);
    position:relative;
    margin: 0px 20px 20px;
    padding-bottom: 10px;
    }
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


