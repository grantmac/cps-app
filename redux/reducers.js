import { combineReducers } from "redux";

import app from "./appSlice";
import charge from "./chargeSlice";

export default combineReducers({ app, charge });
