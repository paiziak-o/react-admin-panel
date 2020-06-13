import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { status, url } from '#/constants';
import Loader from '../elements/Loader';

import { selectAuthStatus } from '#/reducers';

export default (AnonymComponent: FunctionComponent): FunctionComponent => {
  const AnonymOnly: React.FC = () => {

    const loginStatus: string = useSelector(selectAuthStatus);
    if (loginStatus === status.success) {
      return <Redirect to={url.dashboard} />;
    }
    if (loginStatus === status.pending) {
      return (<Loader />);
    }

    return (<AnonymComponent />)
  };

  return AnonymOnly;
};
