import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.scss';
import {Home} from "./pages/Home";
import {LinearProgress} from "@mui/material";
import {useSelector} from "react-redux";
import {isLoading} from "./store/reducers/news-reducer";
import {NewsPage} from "./pages/NewsPage";


function App() {
    const isLoaded = useSelector(isLoading)
    return (
        <>
            {isLoaded && <LinearProgress/>}
            <div className="App">
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/news/:slug'} element={<NewsPage/>}/>
                </Routes>
            </div>
        </>
    );
}

export default App;
