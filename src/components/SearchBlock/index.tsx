import React from 'react';
import {InputAdornment, TextField} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styles from './SearchBlock.module.scss'


type SearchBlockProps = {};

export const SearchBlock: React.FC<SearchBlockProps> = (props) => {
    return (
        <div className={styles.root}>
            <span>Filter by keywords</span>
            <div className={styles.searchBlock}>
                <TextField fullWidth placeholder="Search News" variant="outlined" InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon  />
                        </InputAdornment>
                    ),
                }}/>
            </div>
        </div>
    );
};