/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";

import React from 'react';
import { Grid } from '@/once-ui/components';
import peopleData from '../data/peopleData';
import LinkCard from '../components/LinkCard';

const LinkGrid = () => {
    return (
        <Grid
            columns="repeat(1, 1fr)"
            tabletColumns="1col"
            mobileColumns="1col"
            fillWidth>
            {peopleData.map((person, index) => (
                <LinkCard
                    key={index}
                    name={person.name}
                    description={person.description}
                    link={person.link}
                />
            ))}
        </Grid>
    );
}

export default LinkGrid;
