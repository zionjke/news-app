import React from 'react';
import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {NewsType} from "../../types";
import styles from './NewsCard.module.scss'

type NewsCardProps = {
    data: NewsType
};

export const NewsCard: React.FC<NewsCardProps> = (props) => {
    const {data} = props
    return (
        <Link to={"/news/123"}>
            <Card className={styles.card}>
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
                    <Typography sx={{marginTop: "10px"}} variant="body2" color="text.secondary">
                        {data.publishedAt}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    );
};