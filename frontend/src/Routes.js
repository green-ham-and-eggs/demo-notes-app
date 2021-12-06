import React from "react";
import { Route, Routes as Switch } from "react-router-dom";

import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import NewNote from "./containers/NewNote";
import Notes from "./containers/Notes";
import Settings from "./containers/Settings";
import NotFound from "./containers/NotFound";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/notes/new" element={<NewNote />} />
      <Route exact path="/notes/:id" element={<Notes />} />
      <Route exact path="/settings" element={<Settings />} />
      {/* Finally, catch all unmatched routes */}
      <Route element={<NotFound />} />
    </Switch>
  );
}