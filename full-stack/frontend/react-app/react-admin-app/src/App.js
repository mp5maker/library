import * as React from "react";
import {
  ListGuesser,
  // EditGuesser
} from 'react-admin'
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "./data-grid/user-list";
import { PostList } from "./data-grid/post-list"

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="posts" list={PostList}/>
      <Resource name="users" list={UserList} />
      <Resource name="todos" list={ListGuesser} />
    </Admin>
  );
};

export default App;
