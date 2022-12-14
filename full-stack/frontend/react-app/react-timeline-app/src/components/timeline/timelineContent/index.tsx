import classNames from "classnames";
import * as React from "react";

interface ITimelineContent {
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode | React.ReactNode[] | string;
}

export const TimelineContent: React.FC<ITimelineContent> = ({
  style = {},
  className = "",
  children,
}) => {
  return (
    <div
      className={classNames("timeline-content", { [className]: className })}
      style={style}
    >
      {children}
    </div>
  );
};
