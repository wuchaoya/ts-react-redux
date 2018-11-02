import * as React from 'react';
import { Link } from 'react-router-dom';
import { Col, Layout, Row } from 'antd';
import './style.less';

const { Header } = Layout;

export interface INavData {
  data: any
}

export interface ICoverTitle {
  title: [string,string];
  subTitle: string
}

const navList = [
  { title: '主页', icon: { __html: '&#xe600;' }, link: '/' },
  { title: '文章', icon: { __html: '&#xe643;' }, link: '/' },
  { title: '归档', icon: { __html: '&#xe660;' }, link: '/time-file' },
  { title: '生活', icon: { __html: '&#xe6a1;' }, link: '/' },
  { title: '简历', icon: { __html: '&#xe60e;' }, link: '/resume' }
]

export default class HeaderDom extends React.PureComponent {

  render () {
    return (
      <div className='header'>
        <Cover title={['react', 'ts']} subTitle={'好好学习，天天向上'}/>
        <Nav data={navList}/>
      </div>
    )
  }
}

class Nav extends  React.PureComponent<INavData> {
  
  constructor (props: INavData) {
    super(props);
  }
  
  render () {
    return (
      <Row className='header-footer'>
        <Col xs={1} sm={1} md={1} lg={1} xl={3} xxl={5} />
        <Col xs={22} sm={22} md={22} lg={20} xl={18} xxl={14}>
          {this.props.data.map((item: any) => (
            <div key={item.title} className='header-title-item'>
              <Link to={item.link}>
                <span className='iconfont' style={{ marginRight: 5 }} dangerouslySetInnerHTML={item.icon}/>
                {item.title}
              </Link>
            </div>
          ))}
        </Col>
        <Col span={4} />
      </Row>
    )
  }
}

class Cover extends React.PureComponent<ICoverTitle> {
  
  constructor (props: ICoverTitle) {
    super(props);
  }
  
  render () {
    return (
      <Header>
        <Row>
          <Col xs={1} sm={1} md={1} lg={1} xl={4} xxl={5} />
          <Col xs={22} sm={22} md={22} lg={22} xl={18} xxl={14}>
            <div className="header-logo">
              <div>
                <span>{this.props.title[0]}</span>
                <span>{this.props.title[1]}</span>
              </div>
              <span>{this.props.subTitle}</span>
            </div>
          </Col>
          <Col span={6} />
        </Row>
      </Header>
    )
  }
}
