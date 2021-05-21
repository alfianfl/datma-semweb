import React, { useState } from "react";
// @material-ui/core components
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Search from "@material-ui/icons/Search";
// core components
import CustomInput from "components/CustomInput/CustomInput.js";
import Button2 from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-dashboard-react/components/headerLinksStyle.js";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SwipeableViews from "react-swipeable-views";
import TextField from "@material-ui/core/TextField";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const useStyles = makeStyles(styles);

const useStyles2 = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
export default function AdminNavbarLinks() {
  const classes = useStyles();
  const classes2 = useStyles2();
  const [disable, setDisable] = useState({
    name: true,
    prodi: true,
    angkatan: true,
  });
  const [inputForAll, setInputForAll] = useState(null);
  const [inputData, setInputData] = useState(null);
  const [dataProdi, setDataProdi] = useState(null);
  const [dataAngkatan, setDataAngakatan] = useState(null);
  const [isGoing, setIsGoing] = useState({
    name: false,
    prodi: false,
    angkatan: false,
  });
  const [modal, setModal] = useState(false);
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const toggle = () => {
    setModal(!modal);
  };
  const setCheckBox = (e) => {
    const name = e.target.name;
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;

    if (name === "namaMahasiswa") {
      setIsGoing({ ...value }, value);
      setDisable({ ...disable, name: !disable.name });
      if (value === false) {
        setInputData("");
      }
    } else if (name === "prodi") {
      setIsGoing({ ...value }, value);
      setDisable({ ...disable, prodi: !disable.prodi });
      if (value === false) {
        setDataProdi(null);
      }
    } else {
      setIsGoing({ ...value }, value);
      setDisable({ ...disable, angkatan: !disable.angkatan });
      if (value === false) {
        setDataAngakatan(null);
      }
    }
  };

  const buttonHandlerBasic = () => {
    window.location.href = "hasilPencarian?query=" + inputForAll;
  };
  const buttonHandlerAdvanced = (e) => {
    if (inputData != null) {
      if (inputData != null && dataProdi != null && dataAngkatan != null) {
        window.location.href =
          "hasilPencarian?nama=" +
          inputData +
          "&prodi=" +
          dataProdi +
          "&angkatan=" +
          dataAngkatan;
      } else if (inputData != null && dataProdi != null) {
        window.location.href =
          "hasilPencarian?nama=" + inputData + "&prodi=" + dataProdi;
      } else if (inputData != null && dataAngkatan != null) {
        window.location.href =
          "hasilPencarian?nama=" + inputData + "&angkatan=" + dataAngkatan;
      } else {
        window.location.href = "hasilPencarian?nama=" + inputData;
      }
    } else if (dataProdi != null) {
      if (dataProdi != null && dataAngkatan != null) {
        window.location.href =
          "hasilPencarian?prodi=" + dataProdi + "&angkatan=" + dataAngkatan;
      } else {
        window.location.href = "hasilPencarian?prodi=" + dataProdi;
      }
    } else if (dataAngkatan != null) {
      window.location.href = "hasilPencarian?angkatan=" + dataAngkatan;
    }
  };

  return (
    <div>
      <button onClick={toggle} href="#" className="btn btn-primary btn-search ">
        Search
      </button>
      <div className={classes.searchWrapper}>
        <Modal isOpen={modal} toggle={toggle}>
          <Paper className={classes.root}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="Basic Search" />
              <Tab label="Advanced Search" />
            </Tabs>
          </Paper>

          <div className={classes.root}>
            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={value}
              onChangeIndex={handleChangeIndex}
            >
              <div style={{ padding: 8 }}>
                {" "}
                <ModalBody className="d-flex flex-column">
                  <TextField
                    id="standard-full-width"
                    label="Informasi mahasiswa"
                    placeholder="Search"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={inputForAll}
                    onChange={(e) => setInputForAll(e.target.value)}
                  />
                  <Button2
                    style={{ alignSelf: "flex-end" }}
                    onClick={buttonHandlerBasic}
                    color="white"
                    aria-label="edit"
                    justIcon
                    round
                  >
                    <Search />
                  </Button2>
                </ModalBody>
              </div>
              <div>
                <ModalBody className="d-flex flex-column">
                  <div className="d-flex">
                    <div className="form-check form-check-inline">
                      <input
                        name="namaMahasiswa"
                        checked={isGoing.name}
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        defaultValue="option1"
                        onChange={setCheckBox}
                      />
                    </div>
                    <TextField
                      style={{ width: "100%" }}
                      disabled={disable.name}
                      className="mx-2"
                      label="Nama Mahasiswa"
                      inputProps={{
                        placeholder: "Nama Mahasiswa",
                        inputProps: {
                          "aria-label": "Search",
                        },
                        value: inputData,
                        onChange: (e) => setInputData(e.target.value),
                      }}
                    />
                  </div>
                  <div className="d-flex">
                    <div className="form-check form-check-inline">
                      <input
                        name="prodi"
                        checked={isGoing.prodi}
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        defaultValue="option1"
                        onChange={setCheckBox}
                      />
                    </div>
                    <FormControl
                      style={{ width: "100%" }}
                      className={classes2.formControl}
                    >
                      <InputLabel id="demo-simple-select-helper-label">
                        Program Studi
                      </InputLabel>

                      <Select
                        disabled={disable.prodi}
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={dataProdi}
                        onChange={(e) => setDataProdi(e.target.value)}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={"Teknik Informatika"}>
                          Teknik Informatika
                        </MenuItem>
                        <MenuItem value={"Biologi"}>Biologi</MenuItem>
                        <MenuItem value={"Matematika"}>Matematika</MenuItem>
                        <MenuItem value={"Geofisika"}>Geofisika</MenuItem>
                        <MenuItem value={"Aktuaria"}>Aktuaria</MenuItem>
                        <MenuItem value={"Teknik Elektro"}>
                          Teknik Elektro
                        </MenuItem>
                        <MenuItem value={"Fisika"}>Fisika</MenuItem>
                        <MenuItem value={"Biologi"}>Biologi</MenuItem>
                        <MenuItem value={"Teknik Elektro"}>
                          Teknik Elektro
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className="d-flex">
                    <div className="form-check form-check-inline">
                      <input
                        name="angkatan"
                        checked={isGoing.angkatan}
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        defaultValue="option1"
                        onChange={setCheckBox}
                      />
                    </div>
                    <FormControl
                      style={{ width: "100%" }}
                      className={classes2.formControl}
                    >
                      <InputLabel id="demo-simple-select-helper-label">
                        Angkatan
                      </InputLabel>

                      <Select
                        disabled={disable.angkatan}
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={dataAngkatan}
                        onChange={(e) => setDataAngakatan(e.target.value)}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={"2018"}>2018</MenuItem>
                        <MenuItem value={"2019"}>2019</MenuItem>
                        <MenuItem value={"2020"}>2020</MenuItem>
                        <MenuItem value={"2021"}>2021</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button2
                    onClick={buttonHandlerAdvanced}
                    color="white"
                    aria-label="edit"
                    justIcon
                    round
                    name="advancedSearch"
                  >
                    <Search />
                  </Button2>
                </ModalFooter>
              </div>
            </SwipeableViews>
          </div>
        </Modal>
      </div>
    </div>
  );
}
