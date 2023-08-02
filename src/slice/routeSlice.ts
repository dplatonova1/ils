import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RouteStateType, Route } from "../constants/types";

const routeInitialState: RouteStateType = {
  route: {
    data: null,
    isLoading: false,
    errors: "",
  },
};

export const routeSlice = createSlice({
  name: "route",
  initialState: routeInitialState,
  reducers: {
    getRoute: (
      state: RouteStateType,
      { payload: id }: PayloadAction<string>
    ) => {
      state.route.isLoading = true;
      state.route.errors = "";
    },
    getRouteSuccess: (
      state: RouteStateType,
      { payload: user }: PayloadAction<Route>
    ) => {
      state.route.isLoading = false;
      state.route.data = user;
    },
    getRouteError: (
      state: RouteStateType,
      { payload: error }: PayloadAction<string>
    ) => {
      state.route.isLoading = false;
      state.route.errors = error;
    },
  },
});

export const { getRoute, getRouteError, getRouteSuccess } = routeSlice.actions;

export default routeSlice.reducer;
