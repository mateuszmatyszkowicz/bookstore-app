import React from "react";
import { useLocation } from "react-router-dom";

const NotFoundPage = () => {
  const { pathname } = useLocation();

  return <div>Route {`${pathname} not found`}</div>;
};

export default NotFoundPage;