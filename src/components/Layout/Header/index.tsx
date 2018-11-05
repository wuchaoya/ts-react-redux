import * as React from 'react';
import { Link } from 'react-router-dom';
import { Col, Dropdown, Icon, Layout, Menu, Row } from 'antd'
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
  { title: '归档', icon: { __html: '&#xe660;' }, link: '/time-file' },
  { title: '生活', icon: { __html: '&#xe6a1;' }, link: '/say' },
  { title: '收藏', icon: { __html: '&#xe60e;' }, link: '/collect' }
]

export default class HeaderDom extends React.PureComponent {

  render () {
    return (
      <div className='header'>
        <Cover title={['码', '帝']} subTitle={'高产似母猪，辛勤如小三'}/>
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
      <Row className="header-footer">
        <Col lg={1} xl={4} xxl={5} />
        <Col lg={22} xl={18} xxl={14}>
          {this.props.data.map((item: any) => (
            <div key={item.title} className="header-title-item">
              <Link to={item.link}>
                <span
                  className="icon-font"
                  style={{ marginRight: 5 }}
                  dangerouslySetInnerHTML={item.icon}
                />
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
          <Col md={0} lg={1} xl={3} xxl={5} />
          <Col md={22} lg={20} xl={18} xxl={14}>
            <div className="header-logo-wrp">
              <div className="header-logo">
                <div>
                  <span>{this.props.title[0]}</span>
                  <span>{this.props.title[1]}</span>
                </div>
                <span>{this.props.subTitle}</span>
              </div>
              <div className="menu-button-wrp">
                <Dropdown overlay={<_Menu data={navList}/>} trigger={['click']}>
                  <Icon type="bars" className="menu-button" />
                </Dropdown>
              </div>
            </div>
          </Col>
        </Row>
      </Header>
    )
  }
}



class _Menu  extends React.PureComponent<INavData> {
  
  public render () {
    return (
      <Menu className="menu">
        {this.props.data.map((item: any) => (
          <Menu.Item key={item.title} className="header-title-item">
            <Link to={item.link}>
            <span
              className="icon-font"
              style={{ marginRight: 5 }}
              dangerouslySetInnerHTML={item.icon}
            />
              {item.title}
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    )
  }
  
}
