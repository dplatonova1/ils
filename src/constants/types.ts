export type LatLong = {
  lat: string;
  lon: string;
};

export type Route = {
  key: React.Key;
  name: string;
  route_coordinate_start: string;
  route_coordinate_center: string;
  route_coordinate_finish: string;
};

export type RouteState = {
  data: Route | null;
  isLoading: boolean;
  errors: string;
};

export type RouteStateType = {
  route: RouteState;
};

// (1)
export const ROUTE = "route";
export type ROUTE = typeof ROUTE; // Typescript line

// (2)
export const GET_ROUTE = `${ROUTE}/getRoute`;
export type GET_ROUTE = typeof GET_ROUTE; // Typescript line

export interface RouteService {
  getRouteByCoordinates: (route: Route) => void;
}
