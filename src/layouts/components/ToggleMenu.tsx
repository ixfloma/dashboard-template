import { Bars3Icon } from "@heroicons/react/24/outline";
import {
  MobileMenuContext,
  MobileMenuContextType,
} from "@src/lib/contexts/MobileMenuContext";
import useTheme from "@src/lib/hooks/useTheme";
import React, { useContext } from "react";

const ToggleMenu: React.FC = ({}) => {
  const appTheme = useTheme();
  const { setIsOpenMenu } = useContext(
    MobileMenuContext
  ) as MobileMenuContextType;

  return (
    <button onClick={() => setIsOpenMenu(true)}>
      <Bars3Icon className={`h-8 w-8 mr-5 lg:hidden ${appTheme.text}`} />
    </button>
  );
};
export default ToggleMenu;
