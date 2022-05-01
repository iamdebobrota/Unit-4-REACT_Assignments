import { legacy_createStore as createStore} from "redux"
import rootReducers from "./index"

export const store =createStore(rootReducers);

