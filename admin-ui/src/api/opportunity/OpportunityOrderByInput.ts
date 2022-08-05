import { SortOrder } from "../../util/SortOrder";

export type OpportunityOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  lastContact?: SortOrder;
  mainContact?: SortOrder;
  nextAction?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
