import { connect} from 'react-redux';
import { Dispatch } from 'redux';
import TimeFile from '../components/TimeFile'
import { REQUEST_ARTICLES } from '../constants'
import { IPayload } from '../types'

interface IState {
  articles: IArticles
}

interface IArticles {
  articles: object[]
  total: number
}

const mapStateToProps = (state: IState): object => {
  return {
    articles: state.articles.articles,
    total: state.articles.total
  }
};

export const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    fetchArticle: (payload: IPayload) => {
      dispatch({
        payload,
        type: REQUEST_ARTICLES
      })
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TimeFile)
