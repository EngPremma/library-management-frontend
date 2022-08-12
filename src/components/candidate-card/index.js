import React from 'react';
import { Card, CardContent, CardActionArea, Typography, makeStyles, Avatar } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  cardContent: {
    '&:last-child': {
      padding: theme.spacing(1),
    },
    display: 'flex',
  },
  content: {
    padding: `0 ${theme.spacing(2.5)}px`,
    flex: 2,
  },
  avatar: {
    width: '70px',
    height: '70px',
  },
  name: { textTransform: 'capitalize' },
}));

const CandidateCard = ({ name, email, handleViewCandidate }) => {
  const classes = useStyles();

  return (
    <Card variant='outlined' className={classes.root}>
      <CardActionArea disableRipple onClick={handleViewCandidate}>
        <CardContent className={classes.cardContent}>
          <Avatar src={imageUrl} className={classes.avatar} />
          <div className={classes.content}>
            <Typography variant='h6' className={classes.name}>
              {name}
            </Typography>
            <Typography variant='body2'>{email}</Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const imageUrl = `https://images.unsplash.com/photo-1621461133947-f63381c2f7f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=877&q=80`;

export default CandidateCard;
