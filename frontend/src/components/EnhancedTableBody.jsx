import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import { TableCell, TableRow, TableBody } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {};
});

function EnhancedTableBody({
  rows,
  order,
  orderBy,
  stableSort,
  getComparator,
}) {
  const classes = useStyles();

  return (
    <TableBody>
      {stableSort(rows, getComparator(order, orderBy)).map((row, index) => {
        return (
          <TableRow
            hover
            // onClick={(event) => handleClick(event, row.name)}
            tabIndex={-1}
            key={row.number}
          >
            {Object.keys(row).map((property) => (
              <TableCell
                align={typeof row[property] === "number" ? "right" : "none"}
              >
                {row[property]}
              </TableCell>
            ))}
          </TableRow>
        );
      })}
    </TableBody>
  );
}

EnhancedTableBody.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
};

export default EnhancedTableBody;
