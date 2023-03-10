import { MouseEventHandler, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

type Data = {
  id: number;
  name: string;
  salary: number;
  country: string;
  date: string;
  phone: string;
  company: string;
}[];

type SortKeys = keyof Data[0];

type SortOrder = "ascn" | "desc";

function sortData({
  tableData,
  sortKey,
  reverse,
}: {
  tableData: Data;
  sortKey: SortKeys;
  reverse: boolean;
}) {
  if (!sortKey) return tableData;

  const sortedData = tableData.sort((a, b) => {
    return a[sortKey] > b[sortKey] ? 1 : -1;
  });

  if (reverse) {
    return sortedData.reverse();
  }

  return sortedData;
}

function SortButton({
  sortOrder,
  columnKey,
  sortKey,
  onClick,
}: {
  sortOrder: SortOrder;
  columnKey: SortKeys;
  sortKey: SortKeys;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      onClick={onClick}
      className={`${
        sortKey === columnKey && sortOrder === "desc"
          ? "sort-button sort-reverse"
          : "sort-button"
      }`}
    >
      ▲
    </button>
  );
}

function SortableTable({ data }: { data: Data | [] }) {
  const [sortKey, setSortKey] = useState<SortKeys>("id");
  const [sortOrder, setSortOrder] = useState<SortOrder>("ascn");
  const navigate = useNavigate();
  const headers: { key: SortKeys; label: string }[] = [
    { key: "id", label: "ID" },
    { key: "name", label: "Full name" },
    { key: "company", label: "Company name" },
    { key: "phone", label: "Phone Number " },
    { key: "salary", label: "Salary" },
    { key: "country", label: "Country" },
    { key: "date", label: "Date" },
  ];

  const sortedData = useCallback(
    () => sortData({ tableData: data, sortKey, reverse: sortOrder === "desc" }),
    [data, sortKey, sortOrder]
  );

  function changeSort(key: SortKeys) {
    setSortOrder(sortOrder === "ascn" ? "desc" : "ascn");

    setSortKey(key);
  }

  return (
    <table>
      <thead>
        <tr>
          {headers.map((row) => {
            return (
              <td key={row.key}>
                {row.label}{" "}
                <SortButton
                  columnKey={row.key}
                  onClick={() => changeSort(row.key)}
                  {...{
                    sortOrder,
                    sortKey,
                  }}
                />
              </td>
            );
          })}
        </tr>
      </thead>

      <tbody>
        {sortedData().map((person) => {
          return (
            <tr
              key={person.id}
              onClick={() => navigate(`/employees/${person.id}`)}
            >
              <td>{person.id}</td>
              <td>{person.name}</td>
              <td>{person.company}</td>
              <td>{person.phone}</td>
              <td>{person.salary}</td>
              <td>{person.country}</td>
              <td>{person.date}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default SortableTable;
