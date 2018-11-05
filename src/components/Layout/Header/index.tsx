import * as React from 'react';
import { Link } from 'react-router-dom';
import { Col, Dropdown, Icon, Input, Layout, Menu, Row } from 'antd'
import Texty from 'rc-texty'
import 'rc-texty/assets/index.css'
import TweenOne from 'rc-tween-one'
import './style.less';

const { Header } = Layout;
const { Search } = Input;

export interface INavData {
  data: any
  fetchArticle: (payload: object) => void
}

export interface IMenu {
  data: any
}

export interface ICoverTitle {
  title: [string,string];
  subTitle: string
}

export interface IProps {
  fetchArticle: (payload: object) => void
}

const navList = [
  { title: '主页', icon: { __html: '&#xe600;' }, link: '/' },
  { title: '归档', icon: { __html: '&#xe660;' }, link: '/time-file' },
  { title: '生活', icon: { __html: '&#xe6a1;' }, link: '/say' },
  { title: '收藏', icon: { __html: '&#xe60e;' }, link: '/collect' }
];

const geInterval = (e: any) => {
  switch (e.index) {
    case 0:
      return 0;
    case 1:
      return 150;
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      return 150 + 450 + (e.index - 2) * 10;
    default:
      return 150 + 450 + (e.index - 6) * 150;
  }
};

const getEnter = (e: any) => {
  const t = {
    opacity: 0,
    scale: 0.8,
    y: '-100%'
  };
  if (e.index >= 2 && e.index <= 6) {
    return { ...t, y: '-30%', duration: 150 }
  }
  return t
};

const getSplit = (e: any) => {
  const t = e.split(' ');
  const c: any[] = [];
  t.forEach((str: string, i: number) => {
    c.push(<span key={`${str}-${i}`}>{str}</span>);
    if (i < t.length - 1) {
      c.push(<span key={` -${i}`} />)
    }
  });
  return c;
};

export default class HeaderDom extends React.PureComponent<IProps> {
  
  render () {
    return (
      <div className='header'>
        <Cover title={['码', '帝']} subTitle={'高产似母猪，辛勤如小三'}/>
        <Nav fetchArticle={this.props.fetchArticle}  data={navList}/>
      </div>
    )
  }
  
}

class Nav extends  React.PureComponent<INavData> {
  
  constructor (props: INavData) {
    super(props);
  }
  
  public fetchArticle = (value:any) => {
    this.props.fetchArticle({
      pageIndex: 1,
      pageSize: 10,
      title: value
    })
  };
  
  render () {
    return (
      <Row className="header-footer">
        <Col lg={1} xl={4} xxl={5} />
        <Col lg={22} xl={18} xxl={14}>
          <Row>
            <Col xs={24} sm={24} md={17} lg={17} xl={17} xxl={17}>
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
            <Col
              xs={24}
              sm={0}
              md={{ span: 6, offset: 1 }}
              xl={{ span: 6, offset: 1 }}
              xxl={{ span: 6, offset: 1 }}>
              <Search
                placeholder="输入搜索标题"
                onSearch={this.fetchArticle}
                className="search-input"
              />
            </Col>
          </Row>
        </Col>
        <Col lg={1} xl={4} xxl={5} />
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
              <div className="combined">
                <Texty
                  className="title"
                  type="mask-top"
                  delay={400}
                  enter={getEnter}
                  interval={geInterval}
                  component={TweenOne}
                  componentProps={{
                    animation: [
                      { x: 130, type: 'set' },
                      { x: 100, delay: 500, duration: 450 },
                      {
                        duration: 300,
                        ease: 'easeOutQuart',
                        x: 0
                      },
                      {
                        delay: -300,
                        duration: 1000,
                        ease: 'easeInOutQuint',
                        letterSpacing: 0,
                        scale: 0.9
                      },
                      {
                        delay: -300,
                        duration: 1000,
                        ease: 'easeInOutQuint',
                        scale: 1,
                        width: '100%'
                      }
                    ]
                  }}>
                  {this.props.title.toString()}
                </Texty>
                <TweenOne
                  className="combined-bar"
                  animation={{
                    delay: 2000,
                    ease: 'easeInOutExpo',
                    type: 'from',
                    width: 0,
                    x: 158
                  }}
                />
                <Texty
                  className="content"
                  type="bottom"
                  split={getSplit}
                  delay={2200}
                  interval={30}>
                  {this.props.subTitle}
                </Texty>
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


class _Menu  extends React.PureComponent<IMenu> {
  
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
