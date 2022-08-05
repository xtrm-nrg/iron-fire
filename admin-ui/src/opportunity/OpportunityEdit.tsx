import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const OpportunityEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="last contact" source="lastContact" />
        <TextInput label="main contact" source="mainContact" />
        <TextInput label="next action" source="nextAction" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
