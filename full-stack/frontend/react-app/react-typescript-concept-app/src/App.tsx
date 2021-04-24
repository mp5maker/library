import React from "react";
import "./App.css";
import widgets from "./mock-data/widgets";
import get from "lodash/get";
import people from "./mock-data/people";
import genericSearch from "./utilities/genericSearch";
import { SearchInput } from "./components/SearchInput";

function App() {
  const [query, setSearchQuery] = React.useState<string>("");

  return (
    <>
      <div>
        <SearchInput setSearchQuery={setSearchQuery} />
      </div>

      <div>
        <h2> Widgets</h2>
        {widgets
          .filter((widget) =>
            genericSearch(widget, ["title", "description"], query)
          )
          .map((widget) => {
            const id = get(widget, "id", "");
            return <p key={String(id)}>{widget.title}</p>;
          })}
      </div>
      <div>
        <h2> People</h2>
        {people
          .filter((widget) =>
            genericSearch(widget, ["firstName", "lastName", "eyeColor"], query)
          )
          .map((person, index) => {
            return (
              <p key={String(index)}>
                {person.firstName} {person.lastName}
              </p>
            );
          })}
      </div>
    </>
  );
}

export default App;
