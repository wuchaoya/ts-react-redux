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
  { title: '主页', icon: { __html: '&#xe600;' } },
  { title: '文章', icon: { __html: '&#xe643;' } },
  { title: '归档', icon: { __html: '&#xe660;' } },
  { title: '生活', icon: { __html: '&#xe6a1;' } }
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
        <Col span={6} />
        <Col span={14}>
          {this.props.data.map((item: any) => (
            <div key={item.title} className='header-title-item'>
              <Link to='article'>
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
          <Col span={6} />
          <Col span={12}>
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
