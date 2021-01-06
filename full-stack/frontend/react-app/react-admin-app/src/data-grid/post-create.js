import * as React from "react";
import {
  SimpleForm,
  ReferenceInput,
  Create,
  SelectInput,
  TextInput,
} from "react-admin";

export const PostCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Create>
);
