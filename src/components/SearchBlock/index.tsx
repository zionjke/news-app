import React, { ChangeEvent } from 'react';
import {InputAdornment, TextField, Typography} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styles from './SearchBlock.module.scss'
import {useAppDispatch} from "../../store";
import {setFilterValue} from "../../store/reducers/news-reducer";


type SearchBlockProps = {};

export const SearchBlock: React.FC<SearchBlockProps> = (props) => {
    const dispatch = useAppDispatch()

    const onChangeFilterValueHandler = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        dispatch(setFilterValue(e.currentTarget.value))
    }

    return (
        <div className={styles.root}>
            <div className={styles.searchBlock}>
                <Typography variant={"h5"}>Filter by keywords</Typography>
                <TextField onChange={onChangeFilterValueHandler} sx={{marginTop:"10px"}} fullWidth placeholder="Search News" variant="outlined" InputProps={{
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
