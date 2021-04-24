import * as React from "react";
import useDebounce from "../hooks/useDebounce";

export interface ISearchInputProps {
  setSearchQuery: (searchQuery: string) => void;
}

export function SearchInput(props: ISearchInputProps) {
  const [query, setQuery] = React.useState<string>("");
  const { setSearchQuery } = props;
  const debouncedQuery = useDebounce(query, 250);

  React.useEffect(() => {
    setSearchQuery(debouncedQuery);
  }, [debouncedQuery, setSearchQuery]);

  return (
    <>
      <label htmlFor="search" className="mt-3">
        Search| Try me|
      </label>
      <input
        id="search"
        className="form-control full-width"
        type="search"
        placeholder="Search..."
        aria-label="Search"
        onChange={(event) => setQuery(event.target.value)}
      />
    </>
  );
}
