import React from 'react';
import { Card, CardContent, Typography, Grid, StylesProvider } from '@material-ui/core';
import styles from './Cards.module.css'
import cx from 'classnames'
import CountUp from 'react-countup';

const Cards = ({ data: { confirmed, deaths, lastUpdate } }) => {

    if (!confirmed) {
        return 'Loading...'
    }

    return (
        <div className={styles.container}>
            <Grid container spacing={2} justifyContent="center">

                {/* 확진 */}
                <Grid item component={Card} xs={12} md={5} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> Infected </Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary"> {new Date(lastUpdate).toDateString()} </Typography>
                        <Typography variant="body2"> Number of Active cases of COVID-19 </Typography>
                    </CardContent>
                </Grid>

                {/* 사망 */}
                <Grid item component={Card} xs={12} md={5} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> Deaths </Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary"> {new Date(lastUpdate).toDateString()} </Typography>
                        <Typography variant="body2"> Number of Deaths by COVID-19 </Typography>
                    </CardContent>
                </Grid>

            </Grid>
        </div>
    )
}

export default Cards;