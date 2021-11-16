import React, {useEffect} from 'react';
import {SearchBlock} from "../../components/SearchBlock";
import {Chip, Divider} from "@mui/material";
import {NewsList} from "../../components/NewsList";
import {useAppDispatch} from "../../store";
import {currentNews, fetchNewsSuccess, filterValue, news} from "../../store/reducers/news-reducer";
import {useSelector} from "react-redux";

type HomeProps = {};

export const Home: React.FC<HomeProps> = (props) => {
    const dispatch = useAppDispatch()
    const data = useSelector(news)
    const value = useSelector(filterValue)
    const filteredNews = data.filter(item => {
        return (
            item.title.toLowerCase().indexOf(value) >= 0 ||
            item.description?.toLowerCase().indexOf(value) >= 0
        )
    })

    useEffect(() => {
        dispatch(fetchNewsSuccess())
    }, [dispatch])

    return (
        <>
            <SearchBlock/>
            <Divider sx={{marginTop: "15px"}}>
                <Chip label={`Results: ${filteredNews.length}`}/>
            </Divider>
            <NewsList data={filteredNews}/>
        </>
    );
};
