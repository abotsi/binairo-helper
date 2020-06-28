import * as React from "react";

export default function Grid() {
  return (
    <div>
      {new Array(6).fill(null).map((_, row) => (
        <div key={row}>hey</div>
      ))}
    </div>
  );
}
