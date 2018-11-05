import { Card } from 'antd';
import Highlight from 'react-highlight'
import * as React from 'react';
import { format } from '../../common'
import './highlight.less'
import './style.less';

interface IArticle {
  _id: string
  title: string
  create_at: string
  updated_at: string
  access: string
  type: string
  content: string
  tag: ITag
}

interface ITag {
  color: string
  title: string
}

interface IParams {
  Id: string
}

interface IMatch {
  params: IParams
}

interface IProps {
  fetchArticle: (Id: string) => any
  article: IArticle
  match: IMatch
}

class Article extends React.Component<IProps> {
  
  constructor(props: IProps) {
    super(props)
  }
  
  public addCode = (content: string) => {
    if (!content) return;
    return content
    .replace('<pre>', '<pre><code>')
    .replace('</pre>', '</pre></code>')
  }
  
  public componentDidMount() {
    this.props.fetchArticle(this.props.match.params.Id)
  }
  
  public render() {
    console.log(this.props)
    const {
      title,
      create_at,
      access,
      type,
      content = '',
      tag = {title: ''}
    } = this.props.article
    return (
      <div className="article">
        <Card hoverable={true} bordered={false}>
          <div>
            <h3>{title}</h3>
            <div className="tag">
              <span>发表于：{format(create_at)}</span>
              <span>分类：{type}</span>
              <span>标签：{tag.title}</span>
              <span>浏览：{access}</span>
            </div>
          </div>
          <Highlight innerHTML={true} className="javascript">
            {this.addCode(content)}
          </Highlight>
        </Card>
      </div>
    )
  }
}

export default Article
