import * as actionTypes from './action-type'

export function getIncreaseAction() {
    return {
        type:actionTypes.INCREASE
    }
}

export function getDecreaseAction() {
    return {
        type:actionTypes.DECREASE
    }
}
export function getSetAction(newNumber) {
    return {
        type:actionTypes.SET,
        payload:newNumber
    }
}