import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => {
  return {
    alignRow: {
      display: "inline-block",
    },
    closeButton: {
      float: "right",
    },
  };
});

function CustomDialog({ isOpen, handleClose, title, subtitle, children }) {
  const classes = useStyles();

  return (
    <>
      <Dialog
        fullWidth
        transitionDuration="0"
        maxWidth="md"
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
        disableBackdropClick
        disableEscapeKeyDown
      >
        <div>
          <DialogTitle className={classes.alignRow} id="max-width-dialog-title">
            {title}
          </DialogTitle>
          <DialogActions className={(classes.alignRow, classes.closeButton)}>
            <Button onClick={handleClose} color="primary">
              <Close />
            </Button>
          </DialogActions>
        </div>
        <DialogContent>
          <DialogContentText>{subtitle}</DialogContentText>
          {children}
        </DialogContent>
      </Dialog>
    </>
  );
}

export default CustomDialog;

CustomDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  children: PropTypes.element.isRequired,
};
