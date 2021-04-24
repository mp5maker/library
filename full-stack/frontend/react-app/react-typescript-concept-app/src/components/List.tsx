import * as React from "react";

type PropsWithChildrenFunction<P, T> = P & {
  children?(item: T): React.ReactNode;
};

interface IListProps<T> {
  data: Array<T>;
}

const List = <T,>({
  data = [],
  children,
}: PropsWithChildrenFunction<IListProps<T>, T>): JSX.Element => {
  return (
    <>
      {data.map((item, key: number) => {
        return (
          <React.Fragment key={String(key)}>
            {children && children(item)}
          </React.Fragment>
        );
      })}
    </>
  );
};

export default List;
