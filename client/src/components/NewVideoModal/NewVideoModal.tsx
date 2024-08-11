import { AutoFixHighTwoTone } from "@mui/icons-material";
import {
  Checkbox,
  FormControlLabel,
  MenuItem,
  Paper,
  Select,
  Slider,
  TextField,
} from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { useState } from "react";
import "./NewVideoModal.css";

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
    setCurrentStep(1);
  };

  return (
    <Dialog
      // fullWidth={true}
      // fullWidth={true}
      maxWidth={"lg"}
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
          <span style={currentStep > 1 ? {} : { opacity: ".49" }}>2</span>
          <span style={currentStep > 2 ? {} : { opacity: ".49" }}>3</span>
          <span style={currentStep > 3 ? {} : { opacity: ".49" }}>4</span>
          <span style={currentStep > 4 ? {} : { opacity: ".49" }}>5</span>
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

              <span style={{ marginLeft: "auto" }}>
                <Button
                  color="info"
                  variant="contained"
                  startIcon={<AutoFixHighTwoTone />}
                >
                  Generar con inteligencia artificial
                </Button>
              </span>
            </div>
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
              <span style={{ marginLeft: "auto" }}>
                <Button
                  color="info"
                  variant="contained"
                  startIcon={<AutoFixHighTwoTone />}
                >
                  Ver ejemplos
                </Button>
              </span>
            </div>
          </Paper>
        )}

        {currentStep === 4 && (
          <Paper elevation={3} square={false}>
            <div className="paperContainer">
              <p className="paperTitle">Escoge cómo crear el curso</p>
              <div className="createCourseOptionsContainer">
                <span className="createCourseOption">
                  <div className="optionHeader">Documentos</div>
                  <div className="optionBody">
                    <p>
                      Crea un curso basado en archivos word, PDF, PowerPoint,
                      etc.
                    </p>
                    <Button
                      color="info"
                      variant="contained"
                      startIcon={<AutoFixHighTwoTone />}
                    >
                      Ver ejemplos
                    </Button>
                    <Button
                      color="info"
                      variant="contained"
                      startIcon={<AutoFixHighTwoTone />}
                    >
                      Ver ejemplos
                    </Button>
                  </div>
                </span>
                <span className="createCourseOption">
                  <div className="optionHeader">Inteligencia Artificial</div>
                  <div className="optionBody">
                    <p>Crea un curso con inteligencia artificial...</p>
                    <div style={{ marginTop: "auto" }}></div>
                    <Button
                      color="info"
                      variant="contained"
                      startIcon={<AutoFixHighTwoTone />}
                    >
                      Ver ejemplos
                    </Button>
                  </div>
                </span>
                <span className="createCourseOption">
                  <div className="optionHeader">Manual</div>
                  <div className="optionBody">
                    <p>Crea un curso manualmente...</p>{" "}
                    <span style={{ marginTop: "auto", marginLeft: "auto" }}>
                      <Button
                        color="info"
                        variant="contained"
                        startIcon={<AutoFixHighTwoTone />}
                      >
                        Test
                      </Button>
                    </span>
                  </div>
                </span>
              </div>
            </div>
          </Paper>
        )}

        {currentStep === 5 && (
          <>
            <div style={{ display: "flex", gap: "1rem" }}>
              <span
                className="createCourseOptionsContainer"
                style={{ flex: 1 }}
              >
                <span
                  className="createCourseOption"
                  style={{ minWidth: "21rem" }}
                >
                  <div className="optionHeader">Tabla de contenidos</div>
                  <div
                    className="optionBody"
                    style={{ maxHeight: "27rem", overflowY: "auto" }}
                  >
                    <p style={{ fontWeight: "600" }}>1 - Introducción</p>
                    <p style={{ marginLeft: "1.4rem" }}>
                      Introducción a la inteligencia artificial
                    </p>
                    <p style={{ marginLeft: "1.4rem" }}>
                      Machine learning e inteligencia artificial
                    </p>
                    <p style={{ fontWeight: "600" }}>
                      2- Optimización de procesos
                    </p>
                    <p style={{ marginLeft: "1.4rem" }}>
                      Optimización de procesos empresariales
                    </p>
                    <p style={{ marginLeft: "1.4rem" }}>Plan de ataque</p>
                    <p style={{ marginLeft: "1.4rem" }}>
                      Reinforcement learning
                    </p>
                    <p style={{ marginLeft: "1.4rem" }}>Q-learning</p>
                    <p style={{ fontWeight: "600" }}>
                      3 - Minimización de costos
                    </p>
                    <p style={{ marginLeft: "1.4rem" }}>Deep Q-learning</p>
                    <p style={{ marginLeft: "1.4rem" }}>Experience replay</p>
                    <p style={{ fontWeight: "600" }}>
                      4 - Maximización de beneficios
                    </p>
                    <p style={{ marginLeft: "1.4rem" }}>Bandido multibrazos</p>
                    <p style={{ marginLeft: "1.4rem" }}>Muestreo Thompson</p>
                  </div>
                </span>
              </span>
              <span style={{ flex: 2 }}>
                <Paper elevation={3} square={false}>
                  <div className="paperContainer" style={{ gap: "0" }}>
                    <p className="paperTitle">Opciones de creación</p>
                    <div className="gridLayout">
                      <span className="createCourseOption">
                        <div className="optionBody purpleTitle">
                          Número de módulos
                        </div>
                        <div className="optionBody">
                          <Slider
                            aria-label="Temperature"
                            defaultValue={7}
                            color="secondary"
                            valueLabelDisplay="on"
                            min={5}
                            max={20}
                          />
                        </div>
                      </span>
                      <span className="createCourseOption">
                        <div className="optionBody purpleTitle">
                          Estilo de salida
                        </div>
                        <div className="optionBody">
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value="10"
                            // label="Age"
                            color="info"
                            // onChange={handleChange}
                          >
                            <MenuItem value={10}>Motion graphics</MenuItem>
                          </Select>
                        </div>
                      </span>
                      <span className="createCourseOption">
                        <div className="optionBody purpleTitle">
                          Idioma y voz
                        </div>
                        <div className="optionBody">
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value="10"
                            // label="Age"
                            color="info"
                            // onChange={handleChange}
                          >
                            <MenuItem value={10}>Motion graphics</MenuItem>
                          </Select>
                        </div>
                      </span>
                      <span className="createCourseOption">
                        <div className="optionBody purpleTitle">
                          Música de fondo
                        </div>
                        <div className="optionBody">
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value="10"
                            // label="Age"
                            color="info"
                            // onChange={handleChange}
                          >
                            <MenuItem value={10}>Motion graphics</MenuItem>
                          </Select>
                        </div>
                      </span>
                      <span className="createCourseOption">
                        <div className="optionBody purpleTitle">Logo</div>
                        <div className="optionBody">
                          <FormControlLabel
                            control={
                              <Checkbox defaultChecked color="secondary" />
                            }
                            label="Incluir logo en el vídeo"
                          />
                        </div>
                      </span>
                      <span className="createCourseOption">
                        <div className="optionBody purpleTitle">
                          Evaluaciones
                        </div>
                        <div className="optionBody">
                          <FormControlLabel
                            control={
                              <Checkbox defaultChecked color="secondary" />
                            }
                            label="Crear evaluaciones con IA"
                          />
                        </div>
                      </span>
                    </div>
                  </div>
                </Paper>
              </span>
            </div>
          </>
        )}

        <div className="dialogButtons">
          {currentStep > 1 && (
            <Button
              color="secondary"
              size="small"
              onClick={() => setCurrentStep(currentStep - 1)}
            >
              Regresar
            </Button>
          )}
          {currentStep < 5 && (
            <span style={{ marginLeft: "auto" }}>
              <Button
                color="secondary"
                size="small"
                onClick={() => setCurrentStep(currentStep + 1)}
              >
                Continuar
              </Button>
            </span>
          )}
        </div>
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
