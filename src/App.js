import './App.css';
import Menu from './components/Menu/Menu';
import { Routes } from './routes';
import { GlobalStyles, AppStyles } from './components/GlobalStyle/GlobalStyles';
import styled from 'styled-components';

function App() {
    return (
        <>
            <GlobalStyles />
            <AppStyles />
            <AppBackground>
                <Menu />
                <Routes />
            </AppBackground>
        </>
    );
}
const AppBackground= styled.div`
  background: #0a0d0b;
  text-align: center;
  display: flex;
  height: 100%;
  overflow: scroll;
@media(min-width:322px) and (max-width:600px){
    display: flex;
    height: 100%;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    align-items: center;
    background-image: url('https://images.unsplash.com/photo-1486961927870-395253783824?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTY3fHxjYWN0dXMlMjBncmF5c2NhbGV8ZW58MHx8MHxibGFjaw%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60');
    background-repeat: no-repeat;
    background-size: cover;
}
`

export default App;
