import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Search from "@material-ui/icons/Search";
// core components
import CustomInput from "components/CustomInput/CustomInput.js";
import Button2 from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-dashboard-react/components/headerLinksStyle.js";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

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
  const classes2 = useStyles2();
  const [inputData, setInputData] = useState(null);
  const [dataProdi, setDataProdi] = useState(null);
  const [dataAngkatan, setDataAngakatan] = useState(null);
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  const buttonHandler = () => {
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

  const classes = useStyles();

  return (
    <div>
      <button onClick={toggle} href="#" className="btn btn-primary btn-search ">
        Search
      </button>
      <div className={classes.searchWrapper}>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>
            {" "}
            <strong className="text-center">Informasi Mahasiswa</strong>{" "}
          </ModalHeader>
          <ModalBody className="d-flex flex-column">
            <CustomInput
              formControlProps={{
                className: classes.margin + " " + classes.search,
              }}
              inputProps={{
                placeholder: "Nama Mahasiswa",
                inputProps: {
                  "aria-label": "Search",
                },
                value: inputData,
                onChange: (e) => setInputData(e.target.value),
              }}
            />
            <FormControl className={classes2.formControl}>
              <InputLabel id="demo-simple-select-helper-label">
                Program Studi
              </InputLabel>
              <Select
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
                <MenuItem value={"Teknik Elektro"}>Teknik Elektro</MenuItem>
                <MenuItem value={"Fisika"}>Fisika</MenuItem>
                <MenuItem value={"Biologi"}>Biologi</MenuItem>
                <MenuItem value={"Teknik Elektro"}>Teknik Elektro</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes2.formControl}>
              <InputLabel id="demo-simple-select-helper-label">
                Angkatan
              </InputLabel>
              <Select
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
          </ModalBody>
          <ModalFooter>
            <Button2
              onClick={buttonHandler}
              color="white"
              aria-label="edit"
              justIcon
              round
            >
              <Search />
            </Button2>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
}
