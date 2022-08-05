import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const OpportunityCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="last contact" source="lastContact" />
        <TextInput label="main contact" source="mainContact" />
        <TextInput label="next action" source="nextAction" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
