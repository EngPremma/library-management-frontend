import React, { useEffect } from 'react';
import { Typography, Box, makeStyles, useTheme, Grid, Button, Divider } from '@material-ui/core';
import { useParams } from 'react-router-dom/';
import useDisplayDate from 'hooks/useDisplayDate';
import useJobDetail from '../use-job-detail';
import Spinner from 'components/spinner';

const useStyles = makeStyles(theme => ({
  img: {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
  },
  jobType: {
    borderRight: `1px solid ${theme.palette.grey['300']}`,
    paddingRight: '0.7rem',
    marginRight: '0.7rem',
  },
  title: {
    textTransform: 'capitalize',
  },
}));

const JobDetailPage = () => {
  const theme = useTheme();
  const classes = useStyles();
  const { id } = useParams();
  const { isLoading, jobDetail, fetchJobDetail } = useJobDetail();
  const deadlineDate = useDisplayDate({ date: jobDetail?.deadLine });

  useEffect(() => {
    fetchJobDetail(id);
  }, [id]);

  return (
    <>
      {isLoading ? (
        <Box mt='2rem' display='flex' alignItems='center' justifyContent='center' width='100%'>
          <Spinner />
        </Box>
      ) : (
        <Box mt='2rem'>
          <Typography variant='h4' gutterBottom className={classes.title}>
            {jobDetail?.jobTitle}
          </Typography>
          <Typography>{deadlineDate}</Typography>
          <Typography variant='body2' color='textSecondary'>
            CLOSE DATE
          </Typography>
          <Box mt='2.6rem' display='flex'>
            <img src={imageUrl} alt={imageUrl} className={classes.img} />
            <Box pl='1rem'>
              <Typography color='primary' gutterBottom style={{ textTransform: 'capitalize' }}>
                {jobDetail?.employer?.company?.name}
              </Typography>
              <Typography gutterBottom variant='body2' style={{ textTransform: 'capitalize' }}>
                {jobDetail?.employer?.company?.address}
              </Typography>
              <Box display='flex' alignItems='center' mb='0.3rem'>
                <Typography variant='body2' color='textSecondary' className={classes.jobType}>
                  Job Type: {jobDetail?.jobType}
                </Typography>
                <Typography variant='body2' color='textSecondary'>
                  Salary Range: {jobDetail?.salaryRange}
                </Typography>
              </Box>
              <Box display='flex' alignItems='center'>
                <Typography variant='body2' color='textSecondary' className={classes.jobType}>
                  Industry: {jobDetail?.industry}
                </Typography>
                <Typography variant='body2' color='textSecondary'>
                  Category: {jobDetail?.category}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box my='2rem'>
            <Divider />
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Box p='2rem' border={`1px solid ${theme.palette.grey['300']}`} borderRadius='5px'>
                <Typography>{jobDetail?.jobDescription}</Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box
                p='2rem'
                border={`1px solid ${theme.palette.grey['300']}`}
                borderRadius='5px'
                display='flex'
                flexDirection='column'
                justifyContent='space-between'
              >
                <Button
                  fullWidth
                  color='primary'
                  variant='contained'
                  disableElevation
                  style={{ marginBottom: '1rem' }}
                  onClick={() => alert('under development')}
                >
                  apply now
                </Button>
                <Button
                  fullWidth
                  color='primary'
                  variant='contained'
                  disableElevation
                  onClick={() => alert('under development')}
                >
                  save to favorite
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
};

const imageUrl = `https://images.unsplash.com/photo-1621461133947-f63381c2f7f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=877&q=80`;

export default JobDetailPage;
