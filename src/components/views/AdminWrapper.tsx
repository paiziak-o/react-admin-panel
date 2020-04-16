import React, { ReactNode } from 'react';
import Header from '../elements/page/Header';
import Sidebar from '../elements/page/Sidebar';

interface Props {
  wrapperClass: string;
  children: ReactNode;
}

const AdminWrapper: React.FC<Props> = ({ children, wrapperClass }: Props) => (
  <div className={`wrapper ${wrapperClass}`}>
    <Header />
    <div className="content">
      <Sidebar />
      {children}
    </div>
  </div>
);

export default AdminWrapper;
