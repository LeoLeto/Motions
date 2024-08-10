import { Paper, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import "./NewVideoModal.css";
import { useState } from "react";
import { AutoFixHighTwoTone } from "@mui/icons-material";

const emails = ["username@gmail.com", "user02@gmail.com"];

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;
  const [currentStep, setCurrentStep] = useState<number>(1);

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

        {currentStep === 1 && (
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
                placeholder="Ejemplo: La inteligencia artificial"
              />
            </div>
          </Paper>
        )}
        {currentStep === 2 && (
          <Paper elevation={3} square={false}>
            <div className="paperContainer">
              <p className="paperTitle">
                Describe brevemente de qué trata el curso
              </p>
              <TextField
                focused
                id="outlined-basic"
                variant="outlined"
                fullWidth={true}
                color="secondary"
                multiline
                rows={3}
                placeholder="Ejemplo: La inteligencia artificial como herramienta de trabajo para la optimización de procesos en empresas"
              />
            </div>
            <Button
              color="info"
              variant="contained"
              startIcon={<AutoFixHighTwoTone />}
            >
              Generar con inteligencia artificial
            </Button>
          </Paper>
        )}
        {currentStep === 3 && (
          <Paper elevation={3} square={false}>
            <div className="paperContainer">
              <p className="paperTitle">
                Describe para quién está dirigido el curso
              </p>
              <TextField
                focused
                id="outlined-basic"
                variant="outlined"
                fullWidth={true}
                color="secondary"
                multiline
                rows={3}
                placeholder="Ejemplo: Jóvenes con conocimientos básicos en el tema"
              />
            </div>
          </Paper>
        )}

        <span style={{ marginLeft: "auto" }}>
          <Button
            color="secondary"
            size="small"
            onClick={() => setCurrentStep(currentStep + 1)}
          >
            Continuar
          </Button>
        </span>
      </div>
    </Dialog>
  );
}

export default function SimpleDialogDemo() {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(emails[1]);

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
