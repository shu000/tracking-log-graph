import actionType from '../actionType';

export function onDrop(json) {
  return {
    type: actionType.ON_DROP,
    payLoad: {
      json: json
    }
  }
}
