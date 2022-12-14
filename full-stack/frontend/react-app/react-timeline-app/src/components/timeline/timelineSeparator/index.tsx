import classNames from "classnames";
import * as React from "react";

interface ITimelineSeparator {
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode | React.ReactNode[] | string;
}

export const TimelineSeparator: React.FC<ITimelineSeparator> = ({
  style = {},
  className = "",
  children,
}) => {
  return (
    <div
      className={classNames("timeline-separator", { [className]: className })}
      style={style}
    >
      {children}
    </div>
  );
};
