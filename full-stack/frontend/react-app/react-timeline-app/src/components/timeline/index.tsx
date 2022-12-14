import classNames from "classnames";
import * as React from "react";
import "./Timeline.scss";

export enum TIMELINE_POSITION {
  LEFT = "left",
  RIGHT = "right",
  ALTERNATE = "alternate",
}

interface ITimeline {
  style?: React.CSSProperties;
  className?: string;
  position?: TIMELINE_POSITION;
  children?: React.ReactNode | React.ReactNode[] | string
}

export const Timeline: React.FC<ITimeline> = ({
  style = {},
  className = "",
  position = TIMELINE_POSITION.RIGHT,
  children
}) => {
  return (
    <div
      className={classNames("timeline-container", {
        [className]: className,
        [position]: position,
      })}
      style={style}
    >
    { children }
    </div>
  );
};
