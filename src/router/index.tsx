import CustomRouter from "@src/components/CustomRouter";
import Progress from "@src/components/NProgress";
import Fallback from "@src/components/NProgress/Fallback";
import customHistory from "@src/lib/utils/history";
import React, { Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";

const Router: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState<boolean>(true);

  return (
    <CustomRouter history={customHistory}>
      <Progress isAnimating={isAnimating} />
      <Routes>
        {routes.map(({ component: Component, path }) => {
          return (
            <Route
              key={path}
              element={
                <Suspense
                  fallback={
                    <Fallback
                      isAnimating={isAnimating}
                      setIsAnimating={setIsAnimating}
                    />
                  }
                >
                  <Component />
                </Suspense>
              }
              path={path}
            />
          );
        })}
      </Routes>
    </CustomRouter>
  );
};
export default Router;
