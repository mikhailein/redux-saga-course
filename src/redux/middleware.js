import { showAlert } from "./actions"
import { CREATE_POST } from "./types"

const forbidden = ['fuck', 'spam', 'php', 'putin']

export function forbiddenWordsMd({dispatch}) {
    return function (next) {
        return function (action) {
            if (action.type === CREATE_POST) { 
                const found = forbidden.filter(w => action.payload.title.includes(w.toLocaleLowerCase()))
                if (found.length > 0) {
                    return dispatch(showAlert('You are spammer, go to russian warship'))
                }
            }
            return next(action)
        }
    }
}