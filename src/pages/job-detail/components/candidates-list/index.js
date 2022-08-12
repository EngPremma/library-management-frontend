import React from 'react';
import { Typography, Box, makeStyles, Grid } from '@material-ui/core';
import CandidateCard from 'components/candidate-card';
import useJobDetail from 'pages/job-detail/use-job-detail';
import CandidateDialog from '../candidate-dialog';

const useStyles = makeStyles(theme => ({
  title: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));

const CandidatesList = () => {
  const classes = useStyles();
  const {
    candidateDetail,
    setCandidateDetail,

    openCandidateDialog,

    handleOpenCandidateDialog,
    handleCloseCandidateDialog,
  } = useJobDetail();

  return (
    <Box mt='2rem'>
      <Typography paragraph className={classes.title}>
        Candidates:
      </Typography>
      <Grid container spacing={2}>
        {data.map((item, index) => {
          return (
            <Grid key={index} item xs={12}>
              <CandidateCard
                name={item.name}
                email={item.email}
                handleViewCandidate={() => {
                  setCandidateDetail(item);
                  handleOpenCandidateDialog();
                }}
              />
            </Grid>
          );
        })}
      </Grid>
      <CandidateDialog
        data={candidateDetail}
        open={openCandidateDialog}
        onClose={handleCloseCandidateDialog}
        // handleShortListCandidate={ }
      />
    </Box>
  );
};

const data = [
  {
    name: 'Eng Premma',
    email: 'premma@gmail.com',
  },
  {
    name: 'Eng Premma',
    email: 'premma@gmail.com',
  },
  {
    name: 'Eng Premma',
    email: 'premma@gmail.com',
  },
];

export default CandidatesList;
