import React from 'react';
import { Typography, Grid, Box } from '@material-ui/core';
import JobCard from 'components/job-card/homepage';
import Spinner from 'components/spinner';
import PaginationButton from 'components/pagination-button';
import SearchInput from 'components/search-input';
import useHomepage from './use-homepage';

import PageTitle from 'components/page-title';

const Homepage = () => {
  const {
    query,
    isLoading,
    jobs,

    handleClickSearch,
    handleSearchQuery,
    handlePaginate,
    handleViewDetail,
  } = useHomepage();

  const spinner = (
    <div
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100px',
      }}
    >
      <Spinner />
    </div>
  );

  return (
    <Box mt={2}>
      <PageTitle title="Dashboard" />
      {/* <Typography variant='h4' paragraph align='center' color='primary'>
        Job Finding
      </Typography>
      <Typography color='textSecondary' align='center' paragraph>
        A BETTER CAREER IS OUT THERE, EXPLORING OUR AWESOME TOOLS TO SEARCH YOU THE BEST FIT.
      </Typography>
      <Box mb='3rem'>
        <SearchInput
          value={query.search}
          placeholder='Search Jobs'
          onChange={handleSearchQuery}
          handleSearch={handleClickSearch}
        />
      </Box>

      <div style={{ width: '100%' }}>
        {isLoading ? (
          spinner
        ) : jobs.length ? (
          <Grid container spacing={2}>
            {jobs.map((job, index) => {
              return (
                <Grid key={index} item xs={12}>
                  <JobCard
                    id={job._id}
                    jobTitle={job.jobTitle}
                    jobType={job.jobType}
                    category={job.category}
                    industry={job.industry}
                    deadline={job.deadLine}
                    handleViewDetail={handleViewDetail}
                  />
                </Grid>
              );
            })}
          </Grid>
        ) : (
          <Typography color='textSecondary' align='center'>
            No Job Found
          </Typography>
        )}
        <div style={{ height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          <PaginationButton totalPages={query.totalPages} page={query.page} handleChange={handlePaginate} />
        </div>
      </div> */}
    </Box>
  );
};

export default Homepage;
