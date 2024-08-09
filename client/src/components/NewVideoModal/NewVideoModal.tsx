import { Paper, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import * as React from "react";
import "./NewVideoModal.css";

const emails = ["username@gmail.com", "user02@gmail.com"];

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog
      fullWidth={true}
      sx={{
        backdropFilter: "blur(8px)",
      }}
      onClose={handleClose}
      open={open}
    >
      <div className="dialogContainer">
        <div className="dialogTitle">Crear un video de E-learning</div>
        <div className="wizardStepCounter" style={{ textAlign: "center" }}>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
        </div>

        <Paper elevation={3} square={false}>
          <div className="paperContainer">
            <p className="paperTitle">Escribe el nombre del curso</p>
            <TextField
              focused
              id="outlined-basic"
              variant="outlined"
              fullWidth={true}
              color="secondary"
              multiline
              rows={3}
            />
          </div>
        </Paper>
        <span style={{ marginLeft: "auto" }}>
          <Button color="secondary" size="small">
            Continuar
          </Button>
        </span>
      </div>
    </Dialog>
  );
}

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <br />
      <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
