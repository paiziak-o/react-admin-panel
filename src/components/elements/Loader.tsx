import React, { FC } from 'react';
import { Spinner, } from 'react-bootstrap';

const Loader: FC = () => {
  return (
    <div className="loader">
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
}

export default Loader;
