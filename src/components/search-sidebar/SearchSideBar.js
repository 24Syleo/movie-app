"use client"

import React from 'react';
import { useSelectedLayoutSegment, useParams, notFound } from 'next/navigation';
import styles from "./SearchSideBar.module.scss";
import Form from './form/Form';


const SearchSideBar = ({ genres }) => {

    const segment = useSelectedLayoutSegment();
    const { id } = useParams();

    const getSideBarTitle = () => {
        if(!segment) {
            return 'Films';
        }
        const genre = genres.find((genre) => genre.id === Number(id));
        if (!genre) {
            return notFound();
        }
        return genre.name
    };

    const title = getSideBarTitle();

    return (
        <div className={styles.sideBar}>
            <h1>Tous les : {title} </h1>
            <Form/>
        </div>
    );
};

export default SearchSideBar;