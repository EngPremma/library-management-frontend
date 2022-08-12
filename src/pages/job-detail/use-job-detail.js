import { useState } from 'react';
import useSnackbarHook from 'hooks/useSnackbar';
import jobApi from 'api/fetcher/job';

const useJobDetail = () => {
  const { errorSnackbar } = useSnackbarHook();

  const [jobDetail, setJobDetail] = useState(null);
  const [candidateDetail, setCandidateDetail] = useState(null);
  const [candidates, setCandidates] = useState([]);
  const [openCandidateDialog, setOpenCandidateDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // fetch job detail
  const fetchJobDetail = async id => {
    try {
      setIsLoading(true);
      const response = await jobApi.getJobDetail({ id });
      setJobDetail(response.jobDetail);
    } catch (error) {
      console.log('error :>> ', error);
      errorSnackbar(error);
    } finally {
      setIsLoading(false);
    }
  };

  // fetch candidates
  // const fetchCandidates = async () => {};

  const handleOpenCandidateDialog = () => {
    setOpenCandidateDialog(true);
  };

  const handleCloseCandidateDialog = () => {
    setOpenCandidateDialog(false);
  };

  return {
    isLoading,
    jobDetail,
    setJobDetail,

    candidateDetail,
    setCandidateDetail,

    candidates,
    setCandidates,

    openCandidateDialog,
    setOpenCandidateDialog,

    fetchJobDetail,

    handleOpenCandidateDialog,
    handleCloseCandidateDialog,
  };
};

export default useJobDetail;
