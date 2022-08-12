import React, { useState, useEffect } from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import Input from 'components/input';
import InputSelect from 'components/input-select';
import InputDate from 'components/input-date';
import useSnackbarHook from 'hooks/useSnackbar';
import jobTypesSelection from 'utils/jobTypes';
import getCurrentDate from 'utils/get-current-date';
import Spacer from 'components/spacer';
import jobApi from 'api/fetcher/job';
import { useParams, useHistory } from 'react-router-dom';

const CreateJobPage = () => {
  const { control, reset, handleSubmit } = useForm();
  const { successSnackbar, errorSnackbar } = useSnackbarHook();
  const [submitState, setSubmitState] = useState('create');

  const { id } = useParams();
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const fetchJob = async jobId => {
    try {
      setIsFetching(true);
      const response = await jobApi.getJobDetail({ id: jobId });

      const { jobDetail } = response;
      reset({
        jobTitle: jobDetail.jobTitle,
        jobType: jobDetail.jobType,
        industry: jobDetail.industry,
        category: jobDetail.category,
        salaryRange: jobDetail.salaryRange,
        deadLine: jobDetail.deadLine,
        jobDescription: jobDetail.jobDescription,
      });
    } catch (error) {
      console.log('error :>> ', error.response);
      errorSnackbar(error);
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    /**
     * get id
     * set state to edit
     * onsubmit use switch to check if edit or create new
     */
    if (id) {
      fetchJob(id);
      setSubmitState('update');
    } else {
      reset({
        jobTitle: '',
        jobType: jobTypesSelection[0].value,
        industry: '',
        category: '',
        salaryRange: '',
        deadLine: getCurrentDate(),
        jobDescription: '',
      });
    }
  }, [id]);

  const onSubmit = async data => {
    console.log('data :>> ', data);
    switch (submitState) {
      case 'create':
        try {
          setIsLoading(true);
          const response = await jobApi.createJob(data);
          successSnackbar(response);
        } catch (error) {
          console.log(error.response);
          errorSnackbar(error);
        } finally {
          setIsLoading(false);
        }
        break;
      case 'update':
        try {
          data.id = id;
          console.log('data :>> ', data);
          setIsLoading(true);
          const response = await jobApi.updateJob(data);
          successSnackbar(response);
          setIsLoading(false);
          history.push('/dashboard/job/my-list');
        } catch (error) {
          console.log(error.response);
          errorSnackbar(error);
          setIsLoading(false);
        }
        break;
      default:
        console.log('error create job page');
        break;
    }
  };

  return (
    <div>
      <Typography variant='h4' paragraph>
        {id ? 'Edit job' : 'Create job'}
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Input
              disabled={isLoading}
              name='jobTitle'
              label='Job title'
              control={control}
              placeholder='Job title'
              rules={{ required: true }}
            />
          </Grid>
          <Grid item xs={6}>
            <InputSelect
              disabled={isLoading}
              name='jobType'
              label='Job type'
              control={control}
              rules={{ required: true }}
              options={jobTypesSelection}
              defaultValue={jobTypesSelection[0].value}
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              disabled={isLoading}
              label='Industry'
              name='industry'
              control={control}
              placeholder='Industry'
              rules={{ required: true }}
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              disabled={isLoading}
              label='Category'
              name='category'
              control={control}
              placeholder='Category'
              rules={{ required: true }}
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              disabled={isLoading}
              label='Salary range'
              name='salaryRange'
              control={control}
              placeholder='Salary range'
              rules={{ required: true }}
            />
          </Grid>
          <Grid item xs={6}>
            <InputDate
              name='deadLine'
              label='DeadLine'
              disabled={isLoading}
              control={control}
              defaultValue={getCurrentDate()}
              rules={{ required: true }}
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              disabled={isLoading}
              label='Job description'
              name='jobDescription'
              control={control}
              placeholder='Job description'
              multiline={true}
              minRows={6}
              rules={{ required: true }}
            />
          </Grid>
        </Grid>
        <Spacer margin='2rem' />
        <Button
          variant='contained'
          type='submit'
          disableElevation
          color='primary'
          disabled={isLoading || isFetching}
        >
          {id ? 'update' : 'create'}
        </Button>
      </form>
    </div>
  );
};

export default CreateJobPage;
