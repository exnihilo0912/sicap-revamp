import type { Route } from "./+types/BaseLayout";
import { Outlet } from "react-router";

export default function BaseLayout() {
  return (
    <main>
      <Outlet />
    </main>
  );
}
