import { DateTime } from 'luxon';

const useDisplayDate = ({ date, formate = 'dd, MMMM, yyyy' }) => {
  return DateTime.fromISO(date).toFormat(formate);
};

export default useDisplayDate;
