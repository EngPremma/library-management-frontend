import { useState, useEffect } from 'react';
import useSnackbarHook from 'hooks/useSnackbar';
import job from 'api/fetcher/job';
import { useHistory } from 'react-router-dom/';

const useHomepage = () => {
  const { errorSnackbar } = useSnackbarHook();
  const history = useHistory();

  const [query, setQuery] = useState({ search: '', page: 1, limit: 10, totalPages: 0 });
  const [isLoading, setIsLoading] = useState(false);
  const [jobs, setJobs] = useState([]);

  console.log('query.search :>> ', query.search);

  const handlePaginate = (e, newValue) => {
    setQuery(prev => ({ ...prev, page: newValue }));
  };

  const handleViewDetail = id => {
    history.push(`/job/detail/${id}`);
  };

  const handleSearchQuery = e => {
    console.log('render handleSearchQuery');
    e.preventDefault();
    setQuery(prev => ({ ...prev, search: e.target.value }));
  };

  const fetchJobs = async () => {
    try {
      setIsLoading(true);
      const response = await job.getAllJobs({
        query: `?search=${query.search}&page=${query.page}&limit=${query.limit}`,
      });
      setJobs(response.jobs);
      setQuery(prev => ({ ...prev, totalPages: response.totalPages }));
    } catch (error) {
      console.log('error :>> ', error);
      errorSnackbar(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClickSearch = () => {
    setQuery(prev => ({ ...prev, page: 1 }));
    fetchJobs();
  };

  useEffect(() => {
    fetchJobs();
  }, [query.page]);

  return {
    query,
    setQuery,

    isLoading,
    setIsLoading,

    jobs,
    setJobs,

    handleSearchQuery,
    handleClickSearch,
    handlePaginate,
    handleViewDetail,
  };
};

export default useHomepage;
