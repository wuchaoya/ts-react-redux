import { REQUEST_ARTICLE } from '../constants';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Article from '../components/Article';

interface IArticle {
  article: Array<object>;
}

const mapStateToProps = (state: IArticle): object => {
  return {
    article: state.article
  };
};

export const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    requestArticle: dispatch({ type: REQUEST_ARTICLE })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);
