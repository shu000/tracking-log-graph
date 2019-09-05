import { ActionType } from '../reducer/toggle';

export function onClick() {
  return {
    type: ActionType.ON_CLICK,
    payload: {}
  }
}
