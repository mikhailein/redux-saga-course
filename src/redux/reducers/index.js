import { connectRouter } from "connected-react-router"
import { createBrowserHistory } from "history"
import { combineReducers } from "redux"

const initial = {
    blog:{}
}

export const history = createBrowserHistory()
export function appReducer(state = initial, action) {
    switch (action.type) {
        case 'BLOG_LOADED':
            return{...state, blog:action.payload}
    
        default:
            return state
    }

}

const rootReducer = combineReducers({
    app: appReducer,
    router: connectRouter(history)
})

export default rootReducer