import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
  makeStyles,
  useTheme,
  Chip,
} from '@material-ui/core';
import useDisplayDate from 'hooks/useDisplayDate';

const useStyles = makeStyles(theme => ({
  image: {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
  },
  cardContent: {
    '&:last-child': {
      padding: theme.spacing(2),
    },
    display: 'flex',
  },
  content: {
    padding: `0 ${theme.spacing(2.5)}px`,
    flex: 2,
  },
  jobType: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(0.5),
  },
  deadline: {
    background: theme.palette.success.main,
    color: 'white',
  },
}));

const JobCard = ({ id, jobTitle, jobType, category, industry, deadline, handleViewDetail }) => {
  const classes = useStyles();
  const theme = useTheme();

  const deadlineDate = useDisplayDate({ date: deadline });

  return (
    <Card variant='outlined' className={classes.root}>
      <CardActionArea disableRipple onClick={() => handleViewDetail(id)}>
        <CardContent className={classes.cardContent}>
          <CardMedia className={classes.image} image={imageUrl} title={imageUrl} />
          <div className={classes.content}>
            <Typography variant='h6' gutterBottom>
              {jobTitle}
            </Typography>
            <div className={classes.jobType}>
              <Typography
                color='textSecondary'
                variant='body2'
                gutterBottom
                component='div'
                style={{ borderRight: `1px solid ${theme.palette.grey['300']}`, paddingRight: '0.7rem' }}
              >
                Industry: <span style={{ color: 'black' }}>{industry}</span>
              </Typography>
              <div style={{ marginRight: '0.7rem' }}></div>
              <Typography
                color='textSecondary'
                variant='body2'
                gutterBottom
                component='div'
                style={{ borderRight: `1px solid ${theme.palette.grey['300']}`, paddingRight: '0.7rem' }}
              >
                Category: <span style={{ color: 'black' }}>{category}</span>
              </Typography>
              <div style={{ marginRight: '0.7rem' }}></div>
              <Typography color='textSecondary' variant='body2' gutterBottom component='div'>
                Job type:{' '}
                <span style={{ color: 'black' }}>{jobType === 'full-time' ? 'Full Time' : 'Part Time'}</span>
              </Typography>
            </div>
            <Chip className={classes.deadline} size='small' label={deadlineDate} />
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const imageUrl = `https://images.unsplash.com/photo-1621461133947-f63381c2f7f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=877&q=80`;

export default JobCard;
