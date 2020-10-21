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
  const [episodeTitle, setEpisodeTitle] = useState();
  const [isSending, setIsSending] = useState(false);

  const getEpisode = useCallback(async (episode) => {
    await fetch("http://localhost:8080/api/episode/" + episode, {
      method: "GET",
      headers: new Headers({}),
    })
      .then((res) => res.json())
      .then((res) => {
        // do some shit here
      })
      .catch((error) => console.log(error));
  }, []);

  const handleDialogOpen = useCallback(async (row) => {
    if (isSending) return;
    setIsSending(true);
    console.log("==========row==========", row);
    await getEpisode(row.number);
    // logic to get episode
    setIsSending(false);
    setEpisodeTitle(row.title);
    setIsOpen(true);
  }, []);

  const handleDialogClose = () => setIsOpen(false);

  return (
    <>
      <CustomDialog
        isOpen={isOpen}
        fullScreen={true}
        handleClose={handleDialogClose}
        title={episodeTitle}
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
                  onClick={() => handleDialogOpen(row)}
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
