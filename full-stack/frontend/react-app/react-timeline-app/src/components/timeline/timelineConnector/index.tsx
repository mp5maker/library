import classNames from "classnames";
import * as React from "react";

interface ITimelineConnector {
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode | React.ReactNode[] | string;
}

export const TimelineConnector: React.FC<ITimelineConnector> = ({
  style = {},
  className = "",
  children,
}) => {
  return (
    <div
      className={classNames("timeline-connector", { [className]: className })}
      style={style}
    >
      {children}
    </div>
  );
};
