import { ActionType } from '../reducer/sessions';

export function onDrop(json) {
  return {
    //type: actionType.ON_DROP,
    type: ActionType.ON_DROP,
    payload: {
      json: json
    }
  }
}
