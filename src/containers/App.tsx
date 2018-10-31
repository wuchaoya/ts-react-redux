import { REQUEST_INFO } from '../constants';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import App from '../components/App/index';

interface ITitle {
  title: string
}

interface IArticles {
  articles: ITitle[]
}

interface IInfo {
  info: object
  articles: IArticles
}

const mapStateToProps = ({ articles, info }: IInfo): object => {
  if (articles.articles) {
    return {
      articleTitle: articles.articles.map(item => item.title),
      info
    }
  }
  return { info }
};

export const mapDispatchToProps = (dispatch: Dispatch) => {
  return { actions: dispatch({ type: REQUEST_INFO }) }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);