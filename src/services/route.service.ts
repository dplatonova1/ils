import axios from "axios";
import { Route, RouteService } from "../constants/types";
import { mapCoordinatesToLatlong } from "../helpers/coordinatesHelper";

export interface NewRouteService {
  (): RouteService;
}

export const newRouteService: NewRouteService = () => {
  const getRouteByCoordinates = async (route: Route) => {
    const poly = `${parseFloat(
      mapCoordinatesToLatlong(route.route_coordinate_start)[0]
    )},${parseFloat(
      mapCoordinatesToLatlong(route.route_coordinate_start)[1]
    )};${parseFloat(
      mapCoordinatesToLatlong(route.route_coordinate_center)[0]
    )},${parseFloat(
      mapCoordinatesToLatlong(route.route_coordinate_center)[1]
    )};${parseFloat(
      mapCoordinatesToLatlong(route.route_coordinate_finish)[0]
    )},${parseFloat(
      mapCoordinatesToLatlong(route.route_coordinate_finish)[1]
    )}`;

    return await axios.get(
      `http://router.project-osrm.org/route/v1/driving/${poly}?overview=full`
    );
  };

  return { getRouteByCoordinates };
};
