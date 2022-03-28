import { put, takeEvery } from 'redux-saga/effects'
import { showLoader } from './actions'
import { REQUEST_POSTS } from './types'

export function* sagaWatcher() {
    yield takeEvery(REQUEST_POSTS, sagaWorker)
}

export function* sagaWorker() {
    yield put(showLoader())
    yield
}

