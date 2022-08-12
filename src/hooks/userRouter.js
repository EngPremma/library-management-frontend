import { useHistory, useParams, useLocation } from 'react-router-dom';

const useRouter = () => {
  const history = useHistory();
  const urlParams = useParams();
  const location = useLocation();

  return {
    history,
    urlParams,
    location,
  };
};

export default useRouter;
