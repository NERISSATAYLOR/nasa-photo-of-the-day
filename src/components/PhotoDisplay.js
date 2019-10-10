import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
const useStyles = makeStyles({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function PhotoDisplay(props) {
    const classes = useStyles();

    return (
        <Wrapper>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={props.image}
                        title={props.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            <Title>
                                Title: {props.title}
                            </Title>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.explanation}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Date: {props.date}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Copyright:  {props.copyright}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Wrapper>
    );
}



