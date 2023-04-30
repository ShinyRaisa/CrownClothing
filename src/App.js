import React from 'react';
import './App.css';
import { Routes as Switch , Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';


const HatsPage = () => (
    <div>
        <h1>Hat's page</h1>
    </div>
)

function App() {
    return (
        <div>
            <HomePage/>
            <Switch>
                <Route exact={false} path='/' component={HomePage}></Route>
                <Route exact={false} path='/hats' component={HatsPage}></Route>
            </Switch>
        </div>
    );
}

export default App;
