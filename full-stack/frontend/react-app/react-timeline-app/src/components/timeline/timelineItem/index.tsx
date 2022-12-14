import classNames from "classnames";
import * as React from "react";

interface ITimelineItem {
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode | React.ReactNode[] | string;
}

export const TimelineItem: React.FC<ITimelineItem> = ({
  style = {},
  className = "",
  children,
}) => {
  return (
    <div
      className={classNames("timeline-item", { [className]: className })}
      style={style}
    >
      {children}
    </div>
  );
};
