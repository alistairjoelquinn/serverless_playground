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
    const { datePosted, wordType, definition, example, learnMoreLink } = props;
    const shareHandler = () => {
        if (navigator.share) {
            navigator.share({
                title: 'Word of the Day',
                date: datePosted,
                word: `${props.w1 ? props.w1 : ''}${props.w2 ? props.w2 : ''}${props.w3 ? props.w3 : ''}${props.w4 ? props.w4 : ''}${props.w5 ? props.w5 : ''}${props.w6 ? props.w6 : ''}${props.w7 ? props.w7 : ''}`,
                type: wordType, 
                definition, 
                example, 
                url: window.location.href
            }).then(() => {
                console.log('share was successful');
            })
            .catch(err => {
                console.log('error attempting to share: ', err.message);
            });
        } else {
            console.log('web share not supported, need to build alternative');
        }
    }

    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar aria-label="word-of-the-day" className={classes.avatar}>
                        A
                    </Avatar>
                }
                action={
                    <IconButton 
                        aria-label="share" 
                        onClick={() => shareHandler()}
                    >
                        <ShareIcon  />
                    </IconButton>
                }
                title="Word of the Day"
                subheader={datePosted}
            />
            <CardContent>
                <Typography variant="h5" component="h2">
                    {props.w1 && props.w1}{props.w1 && props.w2 && bull}
                    {props.w2 && props.w2}{props.w2 && props.w3 && bull}
                    {props.w3 && props.w3}{props.w3 && props.w4 && bull}
                    {props.w4 && props.w4}{props.w4 && props.w5 && bull}
                    {props.w5 && props.w5}{props.w5 && props.w6 && bull}
                    {props.w6 && props.w6}{props.w6 && props.w7 && bull}
                    {props.w7 && props.w7}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {wordType}
                </Typography>
                <Typography variant="body2" component="p">
                    {definition}
                    <br />
                    {example}
                </Typography>
            </CardContent>
            <CardActions>
                <Button 
                    size="small" 
                    color="secondary" 
                    href={learnMoreLink}
                    target="_blank"
                >
                    Learn More
                </Button>
            </CardActions>
      </Card>
    );
};

export default LandingCard;