import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import CustomDialog from "./CustomDialog";
import VideoPlayer from "./VideoPlayer";

import { TableCell, TableRow, TableBody } from "@material-ui/core";

function EnhancedTableBody({
  rows,
  order,
  orderBy,
  stableSort,
  getComparator,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDialogOpen = () => {
    setIsOpen(true);
  };

  const handleDialogClose = () => setIsOpen(false);

  return (
    <>
      <CustomDialog
        isOpen={isOpen}
        handleClose={handleDialogClose}
        title={`Episode TEST`}
      >
        <VideoPlayer />
      </CustomDialog>
      <TableBody>
        {stableSort(rows, getComparator(order, orderBy)).map((row) => {
          return (
            <TableRow hover tabIndex={-1} key={row.number}>
              {Object.keys(row).map((property) => (
                <TableCell
                  align={typeof row[property] === "number" ? "right" : "none"}
                  onClick={handleDialogOpen}
                >
                  {row[property]}
                </TableCell>
              ))}
            </TableRow>
          );
        })}
      </TableBody>
    </>
  );
}

EnhancedTableBody.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
};

export default EnhancedTableBody;
