import React, { useState, useEffect } from "react";

/**
 * 1. Complete Table and Rows so that they print a 5 x 5 grid in
 *    the browser.
 * 2. Mapping two data arrays.
 */

const Table = ({ data }) => {
  return (
    <table>
      <tbody>
        {data.map((row, r) => (
          <tr key={r}>
            {row.map((cell, c) => (
              <td key={c}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default function App() {
  const data = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
  ];
  return (
    <div>
      <Table data={data} />
    </div>
  );
}
