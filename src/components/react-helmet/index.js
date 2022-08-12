import React from 'react';
import { Helmet } from 'react-helmet';

const ReactHelmet = ({ title }) => {
  return (
    <Helmet>
      <meta charSet='utf-8' name='job-finding-sq-5' content='this is job finder website SQ5' />
      <title>{`Job Finding - ${title}`}</title>
    </Helmet>
  );
};

export default ReactHelmet;
