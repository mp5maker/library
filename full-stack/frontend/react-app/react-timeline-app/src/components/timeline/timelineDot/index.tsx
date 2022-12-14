import classNames from "classnames";
import * as React from "react";

interface ITimelineDot {
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode | React.ReactNode[] | string;
}

export const TimelineDot: React.FC<ITimelineDot> = ({
  style = {},
  className = "",
  children,
}) => {
  return (
    <div
      className={classNames("timeline-dot", { [className]: className })}
      style={style}
    >
      {children}
    </div>
  );
};
