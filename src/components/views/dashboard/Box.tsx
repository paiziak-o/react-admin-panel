import React, { FC } from 'react';
import { Col, Row, } from 'react-bootstrap';

interface Props {
  title: string;
  icon: string;
  price: string;
}

const Box: FC<Props> = ({ title, icon, price }) => {
  return (
    <Col xl={3} md={6} className="mb-4">
      <div className="card border-left-primary shadow h-100 py-2">
        <div className="card-body">
          <Row className="no-gutters align-items-center">
            <div className="col mr-2">
              <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                {title}
              </div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">
                {price}
              </div>
            </div>
            <div className="col-auto">
              <i className={`fa-2x text-gray-300 ${icon}`}></i>
            </div>
          </Row>
        </div>
      </div>
    </Col>
  );
}

export default Box;
