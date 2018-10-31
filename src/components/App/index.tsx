import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Col, Layout, Row } from 'antd';
import RouterMap from '../../router'
import  HeaderDom  from '../Layout/Header';
import Sidebar from '../Layout/SideBar';
import './index.less';

const { Footer, Content } = Layout;

const App = (props: any): any => {
  const { info, articleTitle } = props;
  return (
    <Router>
      <Layout>
        <HeaderDom />
        <Layout>
          <Content>
            <Row>
              <Col span={5} />
              <Col span={14}>
                <Row>
                  <Col span={16}>
                    <RouterMap />
                  </Col>
                  <Sidebar info={info} articleTitle={articleTitle} />
                </Row>
              </Col>
            </Row>
          </Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </Router>
  )
};

export default App;