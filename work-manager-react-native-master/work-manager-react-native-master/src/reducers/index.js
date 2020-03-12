import {combineReducers} from 'redux'
import AuthReducer from './AuthReducer';
import DevelopersReducer from './DevelopersReducer';
import ProjectsReducer from './ProjectsReducer';
import CommentsReducer from './CommentsReducer';

export default combineReducers({
    auth: AuthReducer,
    devRed: DevelopersReducer,
    projRed: ProjectsReducer,
    commentRed: CommentsReducer,
})