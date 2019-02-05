import { RESET } from './constants';
import Dispatcher from '../Dispatcher';

export const reset = _ => {
    return Dispatcher.dispatch({ type: RESET });
}
