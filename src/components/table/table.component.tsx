import React, { useCallback, useEffect } from "react";
import { Table as ANTDTable } from "antd";
import { Route } from "../../constants/types";
import axios from "axios";
import polyline from "@mapbox/polyline";
import { mapCoordinatesToLatlong } from "../../helpers/coordinatesHelper";

const { Column } = ANTDTable;

interface TableProps {
  routes: Route[];
}

export const Table = (props: TableProps) => {
  const { routes } = props;

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

  const handleRowClick = useCallback((route: Route) => {
    console.log(getRouteByCoordinates(route));
  }, []);

  return (
    <ANTDTable
      dataSource={routes}
      style={{ marginRight: 24, marginLeft: 24 }}
      size="large"
      pagination={false}
      onRow={(record) => {
        return {
          onClick: () => {
            handleRowClick(record);
          },
        };
      }}
    >
      <Column title="Маршрут" dataIndex="name" key="name" width={"20%"} />
      <Column
        title="Точка 1 (lat, lng)"
        dataIndex="route_coordinate_start"
        key="route_coordinate_start"
      />
      <Column
        title="Точка 2 (lat, lng)"
        dataIndex="route_coordinate_center"
        key="route_coordinate_center"
      />
      <Column
        title="Точка 3 (lat, lng)"
        dataIndex="route_coordinate_finish"
        key="route_coordinate_finish"
      />
    </ANTDTable>
  );
};
