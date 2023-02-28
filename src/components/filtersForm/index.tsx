import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import useForm from "../../hooks/useForm";
import { useSearchParams } from "react-router-dom";

type FiltersFormProps = {
  filterItems: (key: any) => void;
};
export default function FiltersForm(props: FiltersFormProps) {
  const { filterItems } = props;

  const [search, setSearch] = useSearchParams();

  const initialState = {
    phone: "",
    name: "",
    company: "",
  };

  const [inputFields, setInputFields] = useForm(initialState);
  const submitFilters = (e: any) => {
    e.preventDefault();
    let filterParams = Object.fromEntries(
      Object.entries(inputFields).filter(([_, v]) => v != "")
    );

    setSearch(inputFields);
    filterItems({ ...filterParams });
    console.log("filterParams", filterParams);
  };

  return (
    <div className="filter-container">
      <form onSubmit={submitFilters}>
        {Object.keys(initialState).map((input: string, index: number) => {
          return (
            <div key={index}>
              <input
                type={"text"}
                name={input}
                placeholder={input}
                onChange={setInputFields}
              />
            </div>
          );
        })}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
