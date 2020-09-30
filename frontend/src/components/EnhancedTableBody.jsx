import React from "react";
import PropTypes from "prop-types";

import { TableCell, TableRow, TableBody } from "@material-ui/core";

function EnhancedTableBody({
  rows,
  order,
  orderBy,
  stableSort,
  getComparator,
}) {
  return (
    <TableBody>
      {stableSort(rows, getComparator(order, orderBy)).map((row) => {
        return (
          <TableRow hover tabIndex={-1} key={row.number}>
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
