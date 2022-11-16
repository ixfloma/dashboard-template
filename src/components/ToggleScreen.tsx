import {
  ArrowsPointingOutIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";
import {
  FullscreenContext,
  FullscreenContextType,
} from "@src/lib/contexts/FullscreenContext";
import useThemeColor from "@src/lib/hooks/useTheme";
import React, { useContext } from "react";

const ToggleScreen: React.FC = ({}) => {
  const appTheme = useThemeColor();
  const { isFullscreen, setIsFullscreen } = useContext(
    FullscreenContext
  ) as FullscreenContextType;

  const RenderedIcon: React.FC<{ className: string }> = ({ className }) => {
    if (isFullscreen) return <Squares2X2Icon className={className} />;
    return <ArrowsPointingOutIcon className={className} />;
  };

  return (
    <button onClick={() => setIsFullscreen(!isFullscreen)} className="ml-3">
      <RenderedIcon className={`${appTheme.text} w-7 h-7`} />
    </button>
  );
};
export default ToggleScreen;