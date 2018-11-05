import { REQUEST_INFO, REQUEST_ARTICLES } from '../constants';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { withRouter } from 'react-router-dom';
import { App }from '../components';
import { IPayload } from '../types'

interface IInfo {
  info: object
}

const mapStateToProps = ({ info }: IInfo) => {
  return { info }
};

export const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    actions: dispatch({ type: REQUEST_INFO }),
    fetchArticle: (payload: IPayload) => {
      dispatch({
        payload,
        type: REQUEST_ARTICLES
      })
    }
  }
};

const AppMap: any = connect(mapStateToProps, mapDispatchToProps)(App);
export default withRouter(AppMap)