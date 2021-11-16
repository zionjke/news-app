import React from 'react';
import styles from './NewsList.module.scss'
import {NewsCard} from "../NewsCard";
import {NewsType} from "../../types";

type NewsListProps = {
    data: NewsType[]
};

export const NewsList: React.FC<NewsListProps> = (props) => {
    const {data} = props
    return (
        <div className={styles.root}>
            {data && data.map(item => (
                <NewsCard key={item.title} data={item}/>
            ))}
        </div>
    );
};
