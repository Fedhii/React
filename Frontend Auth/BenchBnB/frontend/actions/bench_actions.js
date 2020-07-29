import * as BenchAPIUtil from './../util/bench_api_util';
import { RECEIVE_BENCH } from '../../../solution/frontend/actions/bench_actions';

export const RECEIVE_BENCHES = "RECEIVE_BENCHES";
export const CREATE_BENCH = "CREATE_BENCH";
export const RECEIVE_BENCH = "RECEIVE_BENCH";
export const FETCH_BENCH = "FETCH_BENCH";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";

export const receiveBenches = benches => ({
    type: RECEIVE_BENCHES,
    benches
});

export const receiveBench = bench => ({
    type: RECEIVE_BENCH,
    bench
})

export const receiveReview = ({ review, average_rating, author }) => ({
    type: RECEIVE_REVIEW,
    review,
    average_rating,
    author
});

export const fetchBenches = dispatch => (
    BenchAPIUtil.fetchBenches()
        .then(benches => (dispatch(receiveBenches(benches))))
);

export const createBench = bench => dispatch => (
    BenchAPIUtil.createBench(bench)
      .then(bench => (dispatch(receiveBench(bench))))
);

export const fetchBench = benchId => dispatch => (
    BenchAPIUtil.fetchBench(benchId)
      .then(bench => (dispatch(receiveBench(bench))))
);

export const createReview = review => dispatch => (
    BenchAPIUtil.createReview(review)
      .then(review => dispatch(receiveReview(review)))
);