import * as React from 'react';
import { ReactHTML } from 'react';
import { BackTop, Col, Layout, Row } from 'antd';
import  Header  from '../Layout/Header';
import Footer from '../Layout/Footer'
import Sidebar, { IInfo } from '../Layout/SideBar';
import { IPayload } from '../../types'
import './style.less';

const { Content } = Layout;

interface ILocation {
  pathname: string
}

interface IProps {
  info: IInfo
  children: ReactHTML
  location: ILocation
  fetchArticle: (payload: IPayload) => void
}

export default class App extends React.PureComponent<IProps> {

  public render () {
    const { info, children, location, fetchArticle} = this.props;
    const isResume = location.pathname === '/resume';
    return !isResume ? (
      <Layout>
        <BackTop />
        <Header fetchArticle={fetchArticle} />
        <Layout>
          <Content>
            <Row>
              <Col xs={1} sm={1} md={1} lg={1} xl={3} xxl={5} />
              <Col xs={22} sm={22} md={22} lg={20} xl={18} xxl={14}>
                <Row>
                  <Col xs={24} sm={24} md={24} lg={17} xl={17} xxl={17}>
                    {children}
                  </Col>
                  <Col
                    xs={24}
                    sm={24}
                    md={24}
                    lg={{ span: 6, offset: 1 }}
                    xl={{ span: 6, offset: 1 }}
                    xxl={{ span: 6, offset: 1 }}>
                    <Sidebar info={info} fetchArticle={fetchArticle} />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Content>
        </Layout>
        <Footer />
      </Layout>
    ) : (
      <div>{children}</div>
    )
  }
  
}