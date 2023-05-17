import React from 'react';
//Styles
import '@styles/global.scss';
//Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//Containers
import { Layout } from '@containers/Layout';
//Pages
import { Home } from '@pages/Home';
import { Login } from '@pages/Login';
import { SetNewPwd } from '@pages/SetNewPwd';
import { RecoveryPwd } from '@pages/RecoveryPwd';
import { NotFound } from '@pages/NotFound';
//Context 
import { AppContext } from '../context/AppContext';
//Hooks
import { useInitialState } from '../hooks/useInitialState';

function App(){
    const appInitialState = useInitialState();
    return(
    <AppContext.Provider value={appInitialState}>
        <BrowserRouter> {/*This is where our app will be wrapped*/}
            <Layout> {/*The template that we are using to wrap all of our containers*/}
                <Routes> {/*This is for every single one of our routes that we will be using throught the app*/}
                    <Route exact path='/' element={ <Home /> } />
                    <Route exact path='/login' element={ <Login /> } />
                    <Route exact path='/recovery-password' element={ <RecoveryPwd />}/>
                    <Route exact path='/new-password' element={ <SetNewPwd /> }/> {/*A single route that represents a part of our applicattion, for example the form 'Forgot my password'*/}
                    <Route path='*' element={ <NotFound /> }/>    
                </Routes>
            </Layout>
        </BrowserRouter>
    </AppContext.Provider>
    
    )
}

export { App };
