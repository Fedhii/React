import * as StepAPIUtil from './../util/step_api_util';

export const RECEIVE_STEPS = 'RECEIVE_STEPS'
export const RECEIVE_STEP = 'RECEIVE_STEP'
export const REMOVE_STEP = 'REMOVE_STEP'
export const CREATE_STEP = 'CREATE_STEP'

// sync actions
export const receiveSteps = steps => ({
    type: RECEIVE_STEPS,
    steps
});

export const receiveStep = step => ({
    type: RECEIVE_STEP,
    step
});

export const removeStep = step => ({
    type: REMOVE_STEP,
    step
});

// async actions

export const requestSteps = (todo_id) => dispatch => (
    StepAPIUtil.fetchStep(todo_id)
    .then(steps => dispatch(receiveSteps(steps)))
)

export const createStep = (todo_id, step) => dipatch => (
    StepAPIUtil.createStep(todo_id, step)
    .then(step => dispatch(receiveStep(step)))
);

export const updateStep = step => dispatch => (
    StepAPIUtil.updateStep(step)
    .then(step => dispatch(receiveStep(step)))
);

export const destroyStep = step => dispatch => (
    StepApiUtil.destroyStep(step)
    .then(step => dispatch(removeStep(step)))
);