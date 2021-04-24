import get from "lodash/get";
import * as React from "react";

export interface ISortersProps<T> {
  object: T;
  setProperty: (property: keyof T) => void;
}

// export default function Sorters<T>(props: ISortersProps<T>) {
//   const object = get(props, "object", {});
//   const setProperty = get(props, "setProperty", () => {});

//   return (
//     <>
//       <label htmlFor="sorters" className={"mt-3"}>
//         Sorters! Try us too!
//       </label>
//       <select
//         id="sorters"
//         className={"custom-select"}
//         onChange={(event) => setProperty(event.target.value as any)}
//       >
//         {Object.keys(object).map((key) => {
//           return (
//             <option key={key} value={key}>
//               Sort by {`${key}`}
//             </option>
//           );
//         })}
//       </select>
//     </>
//   );
// }

const Sorters = <T,>(props: ISortersProps<T>) => {
  const object = get(props, "object", {});
  const setProperty = get(props, "setProperty", () => {});

  return (
    <>
      <label htmlFor="sorters" className={"mt-3"}>
        Sorters! Try us too!
      </label>
      <select
        id="sorters"
        className={"custom-select"}
        onChange={(event) => setProperty(event.target.value as any)}
      >
        {Object.keys(object).map((key) => {
          return (
            <option key={key} value={key}>
              Sort by {`${key}`}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default Sorters;
