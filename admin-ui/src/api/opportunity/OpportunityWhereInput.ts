import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type OpportunityWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  lastContact?: StringNullableFilter;
  mainContact?: StringNullableFilter;
  nextAction?: StringNullableFilter;
  title?: StringNullableFilter;
};
