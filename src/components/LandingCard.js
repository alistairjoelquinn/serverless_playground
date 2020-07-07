import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, CardHeader, Avatar, IconButton } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles({
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const LandingCard = props => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const { datePosted } = props
    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar aria-label="word-of-the-day" className={classes.avatar}>
                        A
                    </Avatar>
                }
                action={
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                }
                title="Welcome to the Internet"
                subheader={datePosted}
            />
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Word of the Day
                </Typography>
                <Typography variant="h5" component="h2">
                    al{bull}is{bull}tair{bull}quinn
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    noun
                </Typography>
                <Typography variant="body2" component="p">
                    well meaning and lovely.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="secondary">Learn More</Button>
            </CardActions>
      </Card>
    );
};

export default LandingCard;