import React, { ReactNode } from 'react';
import Header from '../elements/page/Header';

interface Props {
  wrapperClass: string;
  children: ReactNode;
}

const AdminWrapper: React.FC<Props> = ({ children, wrapperClass }: Props) => (
  <div className={`wrapper ${wrapperClass}`}>
    <Header />
    {children}
  </div>
);

export default AdminWrapper;
