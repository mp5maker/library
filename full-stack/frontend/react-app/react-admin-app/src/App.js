import * as React from "react";
import {
  ListGuesser,
  // EditGuesser
} from "react-admin";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "./data-grid/user-list";
import { PostList } from "./data-grid/post-list";
import { PostEdit } from "./data-grid/post-edit";
import { PostCreate } from "./data-grid/post-create";
import Dashboard from "./data-grid/dashboard";
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import authProvider from "./provider/authProvider";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
const App = () => {
  console.log(dataProvider);

  return (
    <Admin
      dashboard={Dashboard}
      dataProvider={dataProvider}
      authProvider={authProvider}
    >
      <Resource
        name="posts"
        list={PostList}
        edit={PostEdit}
        create={PostCreate}
        icon={PostIcon}
      />
      <Resource name="users" list={UserList} icon={UserIcon} />
      <Resource name="todos" list={ListGuesser} />
    </Admin>
  );
};

export default App;
