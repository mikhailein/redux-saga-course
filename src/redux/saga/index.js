import { take, takeEvery, takeLatest, put, call, fork, spawn, select } from 'redux-saga/effects'

async function swapiGet(pattern) {
    const request = await fetch(`https://swapi.dev/api/${pattern}/`)
    const data = await request.json()
    return data
}

export function* loadPeople() {
    const people = yield call(swapiGet, 'people') //call for async 
    yield put({ type: 'SET_PEOPLE', payload: people.results })
    return people
}
export function* loadPlanets() {
    const planets = yield call(swapiGet, 'planets') //call for async     
    yield put({ type: 'SET_PLANETS', payload: planets.results })
}

export function* workerSaga() {
    yield call(loadPeople)
    yield call(loadPlanets)

    const store = yield select(s => s)
    console.log(store);
}

export function* watchLoadDataSaga() {
    yield takeEvery('LOAD_DATA', workerSaga)

}

export default function* rootSaga() {
    yield fork(watchLoadDataSaga)
}