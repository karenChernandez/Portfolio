import Home from './components/HomePage/HomePage';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

export const Routes = () => {
    
    return (
        <AnimatePresence exitBeforeEnter>
            <Switch key={useLocation().pathname}>
                <Route exact path='/' component={Home} />
                <Route path='/AboutMe' component={AboutMe} />
                <Route path='/Projects' component={Projects} />
                <Route path='/Skills' component={Skills} />
                <Route path='/Education' component={Education} />
                <Route path='/Contact' component={Contact} />
                <Route path='/Resume' component={Resume} />
            </Switch>
        </AnimatePresence>
    );
};

// export default (
//     <AnimatePresence exitBeforeEnter>

//     <Switch >
//         <Route exact path='/' component={Home} />
//         <Route path='/AboutMe' component={AboutMe} />
//         <Route path='/Projects' component={Projects} />
//         <Route path='/Skills' component={Skills} />
//         <Route path='/Education' component={Education} />
//         <Route path='/Contact' component={Contact} />
//         <Route path='/Resume' component={Resume} />
//     </Switch>
//     </AnimatePresence>

// );
