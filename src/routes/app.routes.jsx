import { Routes, Route } from "react-router-dom";

import { Home } from "../Pages/Home";
import { New } from "../Pages/New";
import { Profile } from "../Pages/Profile";
import { Details } from "../Pages/Details";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
}
