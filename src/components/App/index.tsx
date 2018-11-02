import * as React from 'react';
import { ReactHTML } from 'react';
import { Col, Layout, Row } from 'antd';
import  Header  from '../Layout/Header';
import Sidebar, { IInfo } from '../Layout/SideBar';
import './index.less';

const { Footer, Content } = Layout;

interface ILocation {
  pathname: string
}

interface IProps {
  info: IInfo
  articleTitle: string[]
  children: ReactHTML
  location: ILocation
}

export default class App extends React.PureComponent<IProps> {

  public render () {
    const { info, articleTitle, children, location } = this.props
    const isResume = location.pathname === '/resume'
    return !isResume ? (
      <Layout>
        <Header />
        <Layout>
          <Content>
            <Row>
              <Col span={5} />
              <Col span={14}>
                <Row>
                  <Col span={16}>{children}</Col>
                  <Sidebar info={info} articleTitle={articleTitle} />
                </Row>
              </Col>
            </Row>
          </Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    ) : (
      <div>{children}</div>
    )
  }
}