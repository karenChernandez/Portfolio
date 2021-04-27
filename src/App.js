import './App.css';
import Menu from './components/Menu/Menu';
import { Routes } from './routes';
import { GlobalStyles, AppStyles } from './components/GlobalStyle/GlobalStyles';

function App() {
    return (
        <>
            <GlobalStyles />
            <AppStyles />
            <div className='App'>
                <Menu />
                <Routes />
            </div>
        </>
    );
}

export default App;
