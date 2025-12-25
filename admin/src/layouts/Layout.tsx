import { lazy, Suspense, useMemo } from "react";
import { useAuth } from "../provider/useAuth";

const LAYOUT_DEFAULT = "LAYOUT_DEFAULT";
const layouts = {
  [LAYOUT_DEFAULT]: lazy(() => import("./DefaultLayout")),
};

const Layout = () => {
  const { isAuthenticated } = useAuth();

  const AppLayout = useMemo(() => {
    if (isAuthenticated) {
      return layouts[LAYOUT_DEFAULT];
    }
    return lazy(() => import("./AuthLayout/Login"));
  }, [isAuthenticated]);

  return (
    <Suspense
      fallback={
        <div className="flex flex-auto flex-col h-[100vh]">
          <p>Loading...</p>
        </div>
      }
    >
      <AppLayout />
    </Suspense>
  );
};

export default Layout;
