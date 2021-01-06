import * as React from "react";
import {
  SimpleForm,
  ReferenceInput,
  Edit,
  SelectInput,
  TextInput,
} from "react-admin";

const PostTitle = ({ record }) => {
  return <span>Post {record ? `${record.title}` : ""}</span>;
};

export const PostEdit = (props) => (
  <Edit title={<PostTitle />} {...props}>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Edit>
);
