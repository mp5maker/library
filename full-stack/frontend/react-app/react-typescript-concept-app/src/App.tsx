import React from "react";
import "./App.css";
import widgets from "./mock-data/widgets";
import get from "lodash/get";
import people from "./mock-data/people";
import genericSearch from "./utilities/genericSearch";
import { SearchInput } from "./components/SearchInput";
import IProperty from "./interfaces/IProperty";
import IWidget from "./interfaces/IWidget";
import genericSort from "./utilities/genericSort";
import IPerson from "./interfaces/IPerson";
import Sorters from "./components/Sorters";
import { WidgetRenderer } from "./components/renderers/WidgetRenderer";

function App() {
  const [query, setSearchQuery] = React.useState<string>("");
  const [widgetSort, setWidgetSort] = React.useState<IProperty<IWidget>>({
    property: "title",
  });
  const [peopleSort, setPeopleSort] = React.useState<IProperty<IPerson>>({
    property: "firstName",
  });

  console.log(widgetSort);

  return (
    <>
      <div>
        <SearchInput setSearchQuery={setSearchQuery} />
      </div>
      <div>
        <Sorters
          setProperty={(property) => setWidgetSort({ property })}
          object={widgets[0]}
        />
      </div>
      <div>
        <Sorters
          setProperty={(property) => setPeopleSort({ property })}
          object={people[0]}
        />
      </div>

      <div>
        <h2> Widgets</h2>
        {widgets
          .filter((widget) =>
            genericSearch(widget, ["title", "description"], query)
          )
          .sort((a, b) => genericSort(a, b, widgetSort.property))
          .map((widget) => {
            const id = get(widget, "id", "");
            return <WidgetRenderer key={id} {...widget} />;
          })}
      </div>
      <div>
        <h2> People</h2>
        {people
          .filter((widget) =>
            genericSearch(widget, ["firstName", "lastName", "eyeColor"], query)
          )
          .sort((a, b) => genericSort(a, b, peopleSort.property))
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
