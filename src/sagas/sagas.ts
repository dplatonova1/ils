// import { call, put, takeLatest } from 'redux-saga/effects';
// import {newRouteService} from '../services/route.service';
// import { getRoute, getRouteError, getRouteSuccess } from '../slice/routeSlice';

// function* fetchRoute(action) {
//     const routeService = newRouteService();
//     try {
//       const response = yield call(routeService.getRouteByCoordinates, action.payload);
//       yield put(getRouteSuccess(response));
//     } catch (error) {
//       yield put(getRouteError(error));
//     }
//   }

//   export default function* routerSaga() {
//     yield takeLatest(getRoute.type, fetchRoute);
//   }
