import { connect} from 'react-redux';
import { Dispatch } from 'redux';
import { REQUEST_RESUME } from '../constants';
import Resume from '../components/Resume/index';


interface IResume {
  resume: object;
}

const mapStateToProps = ({ resume }: IResume): object => ({ resume })
const mapDispatchToProps = (dispatch: Dispatch) => ({fetchResume: dispatch({ type: REQUEST_RESUME })})

export default connect(mapStateToProps, mapDispatchToProps)(Resume)