import { FilterTypes } from "../../enums/filter-types.enum";

const initialState = "";

export const sort = (
  state = initialState,
  { type, payload }: { type: FilterTypes; payload: any }
) => {
  switch (type) {
    case FilterTypes.DEFAULT:
        return FilterTypes.DEFAULT;

  }
};
