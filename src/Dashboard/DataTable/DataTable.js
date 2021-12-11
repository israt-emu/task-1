import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#701A75",
    color: theme.palette.common.white,
    fontSize: 15,
    lineHeight: 1,
    fontWeight: "bold",
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(even)": {
      // theme.palette.action.hover
      backgroundColor: "#F0F9FF",
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const DataTable = ({ filterData }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead sx={{}}>
          <TableRow>
            <StyledTableCell>Topics</StyledTableCell>
            <StyledTableCell align="center" sx={{ fontWeight: "bold" }}>
              Intensity
            </StyledTableCell>
            <StyledTableCell align="center">Country</StyledTableCell>
            <StyledTableCell align="center">Region</StyledTableCell>
            <StyledTableCell align="center">City</StyledTableCell>
            <StyledTableCell align="center">Likelihood</StyledTableCell>
            <StyledTableCell align="center">Relevance</StyledTableCell>
            <StyledTableCell align="center">End Year</StyledTableCell>
            <StyledTableCell align="center">Start Year</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filterData?.map((d) => (
            <StyledTableRow key={d?._id}>
              <StyledTableCell
                component="th"
                scope="row"
                style={{
                  fontWeight: "bold",
                  textTransform: "capitalize",
                  fontSize: 15,
                }}
              >
                {d?.topic || "---"}
              </StyledTableCell>
              <StyledTableCell
                align="center"
                style={{ borderLeft: "1px solid #2c387e" }}
              >
                {d?.intensity || "---"}
              </StyledTableCell>
              <StyledTableCell
                align="center"
                style={{ borderLeft: "1px solid #2c387e" }}
              >
                {d?.country || "---"}
              </StyledTableCell>
              <StyledTableCell
                align="center"
                style={{ borderLeft: "1px solid #2c387e" }}
              >
                {d?.region || "---"}
              </StyledTableCell>
              <StyledTableCell
                align="center"
                style={{ borderLeft: "1px solid #2c387e" }}
              >
                {d?.city || "---"}
              </StyledTableCell>
              <StyledTableCell
                align="center"
                style={{ borderLeft: "1px solid #2c387e" }}
              >
                {d?.likelihood || "---"}
              </StyledTableCell>
              <StyledTableCell
                align="center"
                style={{ borderLeft: "1px solid #2c387e" }}
              >
                {d?.relevance || "---"}
              </StyledTableCell>
              <StyledTableCell
                align="center"
                style={{ borderLeft: "1px solid #2c387e" }}
              >
                {d?.end_year || "---"}
              </StyledTableCell>
              <StyledTableCell
                align="center"
                style={{ borderLeft: "1px solid #2c387e" }}
              >
                {d?.start_year || "---"}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default DataTable;
