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
import genericFilter from "./utilities/genericFilter";
import { Filters } from "./components/Filters";
import List from "./components/List";

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
  const [widgetFilterProperties, setWidgetFilterProperties] = React.useState<
    Array<keyof IWidget>
  >([]);
  const [personFilterProperties, setPersonFilterProperties] = React.useState<
    Array<keyof IPerson>
  >([]);

  const widgetList = widgets
    .filter((widget) => genericSearch(widget, ["title", "description"], query))
    .filter((widget) => genericFilter(widget, widgetFilterProperties))
    .sort((a, b) =>
      genericSort(a, b, {
        property: widgetSort.property,
        isDescending: false,
      })
    );

  const peopleList = people
    .filter((widget) =>
      genericSearch(widget, ["firstName", "lastName", "eyeColor"], query)
    )
    .filter((widget) => genericFilter(widget, personFilterProperties))
    .sort((a, b) =>
      genericSort(a, b, {
        property: peopleSort.property,
        isDescending: false,
      })
    );

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
        <div>
          <Filters
            properties={widgetFilterProperties}
            object={widgets[0]}
            onChangeFilter={(property) =>
              widgetFilterProperties.includes(property)
                ? setWidgetFilterProperties([
                    ...widgetFilterProperties.filter(
                      (widgetFilterProperty) =>
                        widgetFilterProperty !== property
                    ),
                  ])
                : setWidgetFilterProperties([
                    ...widgetFilterProperties,
                    property,
                  ])
            }
          />
        </div>
        <div>
          <Filters
            properties={personFilterProperties}
            object={people[0]}
            onChangeFilter={(property) =>
              personFilterProperties.includes(property)
                ? setPersonFilterProperties([
                    ...personFilterProperties.filter(
                      (personFilterProperty) =>
                        personFilterProperty !== property
                    ),
                  ])
                : setPersonFilterProperties([
                    ...personFilterProperties,
                    property,
                  ])
            }
          />
        </div>
      </div>

      <div>
        <div className={"p-3"}>
          <h2> Widgets</h2>
        </div>
        <List data={widgetList}>{(item) => <WidgetRenderer {...item} />}</List>
      </div>
      <div>
        <div className="p-3">
          <h2> People</h2>
        </div>
        <List data={peopleList}>{(item) => <PeopleRenderer {...item} />}</List>
      </div>
    </>
  );
}

export default App;
