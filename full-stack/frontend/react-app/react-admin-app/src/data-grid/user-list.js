import * as React from "react";
// import { List, Datagrid, TextField, EmailField, UrlField } from "react-admin";
import { List, Datagrid, TextField, EmailField } from "react-admin";
import { CompanyField } from '../custom-data-grid/company-field'
import { UrlField } from '../custom-data-grid/url-field'

export const UserList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      {/* <TextField source="username" /> */}
      <EmailField source="email" />
      {/* <TextField source="address.street" /> */}
      <TextField source="phone" />
      <UrlField source="website" />
      <CompanyField source="company" />
    </Datagrid>
  </List>
);
