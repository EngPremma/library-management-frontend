import React, { useEffect } from 'react';
import { Typography, Box, makeStyles } from '@material-ui/core';
import { useParams } from 'react-router-dom/';
import useDisplayDate from 'hooks/useDisplayDate';
// import useSnackbarHook from 'hooks/useSnackbar';
import CandidatesList from './components/candidates-list';
import useJobDetail from './use-job-detail';

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
}));

const JobDetailPage = () => {
  const classes = useStyles();
  const { id, employerId } = useParams();
  // const { errorSnackbar } = useSnackbarHook();
  const { jobDetail, fetchJobDetail } = useJobDetail();
  const deadlineDate = useDisplayDate({ date: jobDetail?.deadLine });

  useEffect(() => {
    fetchJobDetail(id);
  }, [id, employerId]);

  return (
    <>
      <Box>
        <Typography variant='h4' gutterBottom>
          {jobDetail?.jobTitle}
        </Typography>
        <Typography>{deadlineDate}</Typography>
        <Typography variant='body2' color='textSecondary'>
          CLOSE DATE
        </Typography>
        <Box mt='2.6rem' display='flex'>
          <img src={imageUrl} alt={imageUrl} className={classes.img} />
          <Box pl='1rem'>
            <Typography color='primary' gutterBottom>
              {jobDetail?.employer?.company?.name}
            </Typography>
            <Typography gutterBottom variant='body2'>
              {jobDetail?.employer?.company?.address}
            </Typography>
            <Box display='flex' alignItems='center' mb='0.3rem'>
              <Typography variant='body2' color='textSecondary' className={classes.jobType}>
                Job Type: {jobDetail?.jobType}
              </Typography>
              <Typography variant='body2' color='textSecondary'>
                Salary Range: full time
              </Typography>
            </Box>
            <Box display='flex' alignItems='center'>
              <Typography variant='body2' color='textSecondary' className={classes.jobType}>
                Industry: full time
              </Typography>
              <Typography variant='body2' color='textSecondary'>
                Category: full time
              </Typography>
            </Box>
          </Box>
        </Box>
        <CandidatesList />
      </Box>
    </>
  );
};

const imageUrl = `https://images.unsplash.com/photo-1621461133947-f63381c2f7f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=877&q=80`;

export default JobDetailPage;
