import { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { fetchPartnersFailure, fetchPartnersSuccess, } from './actions';
import { FETCH_PARTNERS_REQUEST, } from './actionTypes';
import $api from '../../http';
import { PartnersResponse } from "../../models/response/PartnersResponse";


const fetchPartners = (): Promise<AxiosResponse<PartnersResponse>> =>
  $api.get<PartnersResponse>(`${process.env.REACT_APP_API_URL}/partners?page[paginate]=0`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  });


function* fetchPartnersSaga() {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const response = yield call(fetchPartners);
    yield put(
      fetchPartnersSuccess({
        partnersList: response.data.data,
      })
    );
  } catch (e: any) {
    yield put(
      fetchPartnersFailure({
        errors: e.response.data.errors,
      })
    );
  }
}


/* eslint-disable  @typescript-eslint/no-explicit-any */
function* expertSaga(): any {
  yield all([takeLatest(FETCH_PARTNERS_REQUEST, fetchPartnersSaga)]);

}

export default expertSaga;
