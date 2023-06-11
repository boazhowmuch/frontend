import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";


interface Column {
  id:
    | "No"
    | "species"
    | "totQty"
    | "maxAmt"
    | "minAmt"
    | "avgAmt"
    | "mom"
    | "ftn"
    | "date";
  label: string;
  minWidth?: number;
  align?: "left" | "right" | "center";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "No", label: "No.", minWidth: 30, align: "left", },
  {
    id: "species",
    label: "품종",
    minWidth: 90,
		align: "center",
  },
	{
    id: "totQty",
    label: "물량",
    minWidth: 50,
    align: "center",
		format: (value: number) => value.toLocaleString('en-US')
  },
	{
    id: "maxAmt",
    label: "최고가",
    minWidth: 70,
    align: "right",
		format: (value: number) => value.toLocaleString('en-US')
  },
	{
    id: "minAmt",
    label: "최저가",
    minWidth: 70,
    align: "right",
		format: (value: number) => value.toLocaleString('en-US')
  },
	{
    id: "avgAmt",
    label: "평균가",
    minWidth: 70,
    align: "right",
		format: (value: number) => value.toLocaleString('en-US')
  },
	{
    id: "mom",
    label: "전월대비",
    minWidth: 70,
    align: "right",
		format: (value: number) => value.toLocaleString('en-US')
  },
	{
    id: "ftn",
    label: "등락",
    minWidth: 70,
    align: "right",
		format: (value: number) => value.toLocaleString('en-US')
  },
	{
    id: "date",
    label: "날짜",
    minWidth: 120,
		align: "center"
  },
];

interface Data {
	No: number;
	species: string;
	totQty: number;
	maxAmt: number;
	minAmt: number;
	avgAmt: number;
	mom: number;
	ftn: number;
	date: string;
}

function createData(
	No: number,
	species: string,
	totQty: number,
	maxAmt: number,
	minAmt: number,
	avgAmt: number,
	mom: number,
	ftn: number,
	date: string,
): Data {
  return { No, species, totQty, maxAmt, minAmt, avgAmt, mom, ftn, date };
}

const rows = [
  createData(1, "일곱글자까지됨", 100, 10000, 3750, 7650, 8000, 350, "2023-05-14"),
	createData(2, "장미", 10, 10000, 3750, 7650, 8000, 350, "2023-05-14"),
	createData(3, "히야신스", 10, 10000, 3750, 7650, 8000, 350, "2023-05-14"),
	createData(4, "히야신스", 10, 10000, 3750, 7650, 8000, 350, "2023-05-14"),
	createData(5, "히야신스", 10, 10000, 3750, 7650, 8000, 350, "2023-05-14"),
	createData(6, "히야신스", 10, 10000, 3750, 7650, 8000, 350, "2023-05-14"),
	createData(7, "히야신스", 10, 10000, 3750, 7650, 8000, 350, "2023-05-14"),
	createData(8, "히야신스", 10, 10000, 3750, 7650, 8000, 350, "2023-05-14"),
	createData(9, "히야신스", 10, 10000, 3750, 7650, 8000, 350, "2023-05-14"),
	createData(10, "히야신스", 10, 10000, 3750, 7650, 8000, 350, "2023-05-14"),
	createData(11, "히야신스", 10, 10000, 3750, 7650, 8000, 350, "2023-05-14"),
	createData(12, "히야신스", 10, 10000, 3750, 7650, 8000, 350, "2023-05-14"),
	createData(13, "히야신스", 10, 10000, 3750, 7650, 8000, 350, "2023-05-14"),
	createData(14, "히야신스", 10, 10000, 3750, 7650, 8000, 350, "2023-05-14"),
	createData(15, "히야신스", 10, 10000, 3750, 7650, 8000, 350, "2023-05-14"),
];


export default function StickyHeadTable() {
	
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "1410px", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.No}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}