import React, { ReactNode } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, PieChart, Pie } from 'recharts';

import AdminWrapper from '../AdminWrapper';
import RequiresAuth from '../../hoc/RequiresAuth';
import Box from './Box';

interface Props {
  wrapperClass: string;
  children: ReactNode;
}

const data: any = [
  {name: 'Jan', uv: 400, pv: 2400, amt: 2400},
  {name: 'Feb', uv: 200, pv: 1100, amt: 1200},
  {name: 'Mar', uv: 500, pv: 3100, amt: 4200},
  {name: 'Apr', uv: 100, pv: 100, amt: 200},
  {name: 'May', uv: 300, pv: 2100, amt: 2200},
  {name: 'Jun', uv: 300, pv: 2100, amt: 6200},
];

const data2 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Dashboard: React.FC = () => (
  <AdminWrapper wrapperClass="dashbord">
    
      <Row>
        <Col className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
          <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
            <i className="fas fa-download fa-sm text-white-50"></i> Generate Report
          </a>
        </Col>
      </Row>
      <Row>
        <Box icon="fas fa-calendar" title="EARNINGS (MONTHLY)" price="$40,000" />
        <Box icon="fas fa-dollar-sign" title="EARNINGS (ANNUAL)" price="$215,000" />
        <Box icon="fas fa-clipboard-list" title="TASKS" price="50" />
        <Box icon="fas fa-comments" title="PENDING REQUESTS" price="18" />
      </Row>
      <Row className="row-eq-height">
        <Col xl={8} lg={7}>
          <div className="card shadow mb-4">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary">Earnings Overview</h6>
            </div>
            <div className="card-body">
              <div className="chart-area">
                <ResponsiveContainer width='100%' height={300}>
                  <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </Col>
        <Col xl={4} lg={5}>
          <div className="card shadow mb-4">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary">Some Note</h6>
            </div>
            <div className="card-body">
              <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet.."
              </p>
            </div>
          </div>
        </Col>
      </Row>
  </AdminWrapper>
);

export default Dashboard;
