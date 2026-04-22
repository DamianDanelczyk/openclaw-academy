interface ComparisonTableProps {
  headers: string[];
  rows: string[][];
  highlightColumn?: number;
}

export function ComparisonTable({
  headers,
  rows,
  highlightColumn,
}: ComparisonTableProps) {
  return (
    <div className="my-8 overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr>
            {headers.map((header, i) => (
              <th
                key={i}
                className={`border border-fd-border px-4 py-3 text-left font-semibold ${
                  i === highlightColumn
                    ? 'bg-[hsl(0,65%,50%)]/10 text-[hsl(0,65%,50%)]'
                    : 'bg-fd-accent text-fd-foreground'
                }`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`border border-fd-border px-4 py-3 ${
                    cellIndex === highlightColumn
                      ? 'bg-[hsl(0,65%,50%)]/5'
                      : ''
                  } text-fd-foreground`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
