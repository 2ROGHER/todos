export interface FilterState <T = string> {
    searchTerm: T;
    filterValue: T;
    sortBy: T;

}