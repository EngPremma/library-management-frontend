import React, { useEffect, useState } from 'react';
import { Typography, Grid } from '@material-ui/core';
import JobCard from 'components/job-card/dashboard';
import job from 'api/fetcher/job';
import useSnackbarHook from 'hooks/useSnackbar';
import Spinner from 'components/spinner';
import PaginationButton from 'components/pagination-button';
import { useHistory } from 'react-router-dom';
import { useUserContext } from 'components/context-providers/user-context';

const DashboardJobsPage = () => {
  const { errorSnackbar } = useSnackbarHook();
  const history = useHistory();
  const { me } = useUserContext();

  const [isLoading, setIsLoading] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [paginate, setPaginate] = useState({ page: 1, limit: 10, totalPages: 0 });

  const fetchJobs = async () => {
    try {
      setIsLoading(true);
      const response = await job.getJobsOwnByEmployer({ page: paginate.page, limit: paginate.limit });

      setJobs(response.jobs);
      setPaginate(prev => ({ ...prev, totalPages: response.totalPages }));
    } catch (error) {
      console.log('error :>> ', error);
      errorSnackbar(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [paginate.page]);

  const handlePaginate = (e, newValue) => {
    setPaginate(prev => ({ ...prev, page: newValue }));
  };

  const handleViewDetail = id => {
    history.push(`/dashboard/job/detail/${id}/employer/${me._id}`);
    // console.log(`/dashboard/job/detail/${id}/employer/${me._id}`);
  };

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
    <div style={{ minHeight: '200px' }}>
      <Typography variant='h4' paragraph>
        Jobs
      </Typography>

      <div style={{ width: '100%' }}>
        {isLoading ? (
          spinner
        ) : jobs.length ? (
          <Grid container spacing={2}>
            {jobs.map(job => {
              return (
                <Grid key={job._id} item xs={12}>
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
          <Typography variant='body2' color='textSecondary' align='center'>
            No item
          </Typography>
        )}
        <div style={{ height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          <PaginationButton
            totalPages={paginate.totalPages}
            page={paginate.page}
            handleChange={handlePaginate}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardJobsPage;
