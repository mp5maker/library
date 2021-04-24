import * as React from "react";

export interface IFilterProps<T> {
  object: T;
  properties: Array<keyof T>;
  onChangeFilter: (property: keyof T) => void;
}

export function Filters<T>(props: IFilterProps<T>) {
  const { object, properties, onChangeFilter } = props;
  return (
    <div className={"p-1 my-2"}>
      <label className={"mt-3"}>Filters! Try us too!</label>
      <div>
        {Object.keys(object).map((key) => {
          return (
            <label className={"mr-3"}>
              <input
                type="checkbox"
                id="key"
                value={key}
                onChange={() => onChangeFilter(key as any)}
                checked={properties.some((property) => property === key)}
              />
              &nbsp;
              {key}
            </label>
          );
        })}
      </div>
    </div>
  );
}
