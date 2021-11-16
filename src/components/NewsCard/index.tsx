import React from 'react';
import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {NewsType} from "../../types";
import styles from './NewsCard.module.scss'
import {useAppDispatch} from "../../store";
import {setCurrentNews} from "../../store/reducers/news-reducer";
import moment from "moment";

type NewsCardProps = {
    data: NewsType
};

export const NewsCard: React.FC<NewsCardProps> = (props) => {
    const {data} = props
    const dispatch = useAppDispatch()

    const setNewsHandler = () => {
        dispatch(setCurrentNews(data))
    }

    return (
        <Link to={`/news/${data.title}`}>
            <Card onClick={setNewsHandler} className={styles.card}>
                <CardMedia
                    component="img"
                    height="140"
                    image={data.urlToImage}
                    alt="News Image"
                />
                <CardContent>
                    <Typography className={styles.card_text} variant="h5">
                        {data.title}
                    </Typography>
                    <Typography sx={{marginTop: "5px"}} className={styles.card_text} variant="body2" color="text.secondary">
                        {data.description}
                    </Typography>
                    <Typography sx={{marginTop: "10px"}} variant="body1" color="text.secondary">
                        {moment(data.publishedAt).format("MMMM Do YYYY")}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    );
};
