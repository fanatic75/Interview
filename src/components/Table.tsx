"use client";
import { useState } from "react";
import Dropdown from "./Dropdown";
import { sortData } from "../utils/client-utils";

export default function Table({
  data,
}: {
  data: Data[];
}) {
  const [sortState, setSortState] = useState<SortState>("createdAt");
  data = sortData(data, sortState);
  return (
    <div className="flex flex-col items-center h-screen">
      <div>
        <Dropdown sortState={sortState} setSortState={setSortState} />
      </div>
      <div>
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Created At</th>
              <th className="px-4 py-2">File Name</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => {
              return (
                <tr key={i}>
                  <td className="border px-4 py-2">{d.createdAt}</td>
                  <td className="border px-4 py-2">{d.fileName}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
