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
import { PeopleRenderer } from "./components/renderers/PeopleRenderer";

function App() {
  const [query, setSearchQuery] = React.useState<string>("");
  const [widgetSort, setWidgetSort] = React.useState<IProperty<IWidget>>({
    property: "title",
    isDescending: false,
  });
  const [peopleSort, setPeopleSort] = React.useState<IProperty<IPerson>>({
    property: "firstName",
    isDescending: false,
  });

  return (
    <>
      <div className={"p-3"}>
        <div>
          <SearchInput setSearchQuery={setSearchQuery} />
        </div>
        <div>
          <Sorters
            setProperty={(property) =>
              setWidgetSort({ property, isDescending: false })
            }
            object={widgets[0]}
          />
        </div>
        <div>
          <Sorters
            setProperty={(property) =>
              setPeopleSort({ property, isDescending: false })
            }
            object={people[0]}
          />
        </div>
      </div>

      <div>
        <div className={"p-3"}>
          <h2> Widgets</h2>
        </div>
        {widgets
          .filter((widget) =>
            genericSearch(widget, ["title", "description"], query)
          )
          .sort((a, b) =>
            genericSort(a, b, {
              property: widgetSort.property,
              isDescending: false,
            })
          )
          .map((widget) => {
            const id = get(widget, "id", "");
            return <WidgetRenderer key={id} {...widget} />;
          })}
      </div>
      <div>
        <div className="p-3">
          <h2> People</h2>
        </div>
        {people
          .filter((widget) =>
            genericSearch(widget, ["firstName", "lastName", "eyeColor"], query)
          )
          .sort((a, b) =>
            genericSort(a, b, {
              property: peopleSort.property,
              isDescending: false,
            })
          )
          .map((person, index) => {
            return <PeopleRenderer key={index} {...person} />;
          })}
      </div>
    </>
  );
}

export default App;
