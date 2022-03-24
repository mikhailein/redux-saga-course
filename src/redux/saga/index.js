import { take, takeEvery, takeLatest, put, call, fork, spawn, select, all, delay, apply, cancel , actionChannel} from 'redux-saga/effects'
import loadBasicData from './initialSagas'
import pageLoaderSaga from './pageLoaderSaga'

export function* fetchPlanets(signal) {
    console.log('LOAD_SOME_DATA starts')

    const response = yield call(
        fetch,
        'https://swapi.dev/api/planets/',
        // { signal }
    )
    const data = yield apply(response, response.json)

    console.log('LOAD_SOME_DATA completed', data);

}

export function* loadOnAction() {
    const channel = yield actionChannel('LOAD_SOME_DATA') //buffer actions into queue
    while (true) {
        yield take(channel)
        yield call(fetchPlanets)
    }

    // yield takeLatest('LOAD_SOME_DATA', fetchPlanets)
    // let task
    // let abortController = new AbortController()
    // while (true) {
    //     yield take('LOAD_SOME_DATA');
    //     if (task) {
    //         abortController.abort()
    //         yield cancel(task)
    //         abortController = new AbortController()
    //     }
    //     task=yield fork(fetchPlanets, abortController.signal)
    // }
}

export default function* rootSaga() {
    const sagas = [
        // loadBasicData,
        // pageLoaderSaga,
        loadOnAction
    ]
    const retrySagas = yield sagas.map(saga => {
        return spawn(function* () {
            while (true) {
                try {
                    yield call(saga)
                    break
                } catch (error) {
                    console.log(error);
                }
            }
        })
    })
    yield all(retrySagas)
}