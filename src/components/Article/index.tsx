import { Card } from 'antd';
import * as hljs from 'highlight.js';
import * as marked from 'marked';
import * as React from 'react';
import './style.less';

interface IArticle {
  _id: string
  title: string
  create_at: string
  updated_at: string
  access: string
  type: string
  content: string
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
  
  public componentWillMount() {
    marked.setOptions({
      highlight: code => hljs.highlightAuto(code).value,
      renderer: new marked.Renderer()
    })
  }
  
  public componentDidMount() {
    this.props.fetchArticle(this.props.match.params.Id)
  }
  
  public render() {
    return (
      <Card>
        <div>
          <span>{this.props.article.title}</span>
          <span>{this.props.article.create_at}</span>
          <span>{this.props.article.updated_at}</span>
          <span>{this.props.article.type}</span>
          <span>{this.props.article.access}</span>
        </div>
        <div className="dark" dangerouslySetInnerHTML={{__html: marked(this.props.article.content)}}/>
      </Card>
    )
  }
}

export default Article
