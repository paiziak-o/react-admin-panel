import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Loader from '../elements/Loader';

import { status, url } from '#/constants';

import { selectAuthStatus } from '#/reducers';

export default (AnonymComponent: FunctionComponent): FunctionComponent => {
  const RequiresAuth: React.FC = () => {

    const loginStatus: string = useSelector(selectAuthStatus);
    
    if (loginStatus === status.pending) {
      return (<Loader />);
    }

    if (loginStatus !== status.success) {
      return <Redirect to={url.login} />;
    }

    return (<AnonymComponent />)
  };

  return RequiresAuth;
};
