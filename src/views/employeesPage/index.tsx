import React from "react";
import useFetch from "../../hooks/useFetch";
import SortableTable from "../../components/table/SortableTable";
import SearchBar from "../../components/searchBar";

export default function EmployeesPage() {
  const {
    error,
    isPending,
    data: employees,
    searchItems,
  } = useFetch(`${import.meta.env.VITE_APP_API_ROOT}/employees`);
  return (
    <>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {!!employees && (
        <>
          <SearchBar searchItems={searchItems} />
          <SortableTable data={employees ?? []} />
        </>
      )}
    </>
  );
}
