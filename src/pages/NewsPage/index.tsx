import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {currentNews, setCurrentNews} from "../../store/reducers/news-reducer";
import {useAppDispatch} from "../../store";
import {useNavigate} from 'react-router-dom';
import styles from './NewsPage.module.scss'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Typography} from "@mui/material";

type NewsPageProps = {};
export const NewsPage: React.FC<NewsPageProps> = (props) => {
    const dispatch = useAppDispatch()
    const data = useSelector(currentNews)
    const navigate = useNavigate()

    useEffect(() => {
        return () => {
            dispatch(setCurrentNews(null))
        }
    }, [])

    return (
        <div className={styles.page}>
            <div className={styles.page_button}>
                <ArrowBackIcon onClick={() => navigate('/')}/>
                <Typography>
                    Back to Homepage
                </Typography>
            </div>
            <div className={styles.page_title}>
                <Typography variant={"h4"}>
                    {data && data.title}
                </Typography>
            </div>
            <div className={styles.page_content}>
                <Typography variant={"body2"} color="text.secondary">
                    {data && data.content}
                </Typography>
            </div>
        </div>
    );
};
