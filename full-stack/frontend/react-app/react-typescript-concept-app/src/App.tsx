import React from "react";
import "./App.css";
import widgets from "./mock-data/widgets";
import get from "lodash/get";
import people from "./mock-data/people";

function App() {
  return (
    <>
      <div>
        <h2> Widgets</h2>
        {widgets.map((widget) => {
          const id = get(widget, "id", "");
          return <p key={String(id)}>{widget.title}</p>;
        })}
      </div>
      <div>
        <h2> People</h2>
        {people.map((person, index) => {
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
