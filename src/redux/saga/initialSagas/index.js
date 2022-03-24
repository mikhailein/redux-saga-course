import { take, takeEvery, takeLatest, put, call, fork, spawn, select, all, delay } from 'redux-saga/effects'

export function* auth() {
    yield delay(2000)
    console.log('auth');
    return true
}

export function* loadUsers() {
    const request = yield call(fetch,'https://swapi.dev/api/people/')
    const data = yield call([request, request.json]) //request.json.bind(request)
    console.log('data', data);
}

export default function* loadBasicData() {
    yield all([
        fork(auth),
        fork(loadUsers)
    ])
}