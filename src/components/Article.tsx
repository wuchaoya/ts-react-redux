import * as React from 'react';

interface IArticle {
  article: object
}

export default class Article extends React.PureComponent<IArticle> {

  constructor (props: IArticle) {
    super(props)
  }
  
  render () {
    console.log(this.props)
    return (
      <div>article</div>
    )
  }
  
}