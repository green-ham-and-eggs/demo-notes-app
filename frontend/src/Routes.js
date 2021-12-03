import React from "react";
import { Route, Routes as Switch } from "react-router-dom";

import Home from "./containers/Home";
import NotFound from "./containers/NotFound";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" element={<Home />} />
      {/* Finally, catch all unmatched routes */}
      <Route element={<NotFound />} />
    </Switch>
  );
}