import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";

const styles = {
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative",
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px",
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};

const useStyles = makeStyles(styles);

export default function TypographyPage() {
  const [team, setTeam] = useState([
    { nama: "Alfian Fadhil Labib", NPM: "140810180055" },
    { nama: "Sina Mustopa", NPM: "140810180017" },
  ]);
  const classes = useStyles();
  return (
    <>
      <Card>
        <CardHeader style={{ backgroundColor: "#00acc1" }}>
          <h4 className={classes.cardTitleWhite}>About Us</h4>
          <p className={classes.cardCategoryWhite}>
            Datma(Data Mahasiswa) merupakan aplikasi web yang mempermudah pihak
            Fakultas MIPA Unpad untuk mencari data mahasiswa. Aplikasi ini juga
            berguna sebagai repositori data mahasiswa sehingga semua informasi
            yang berkaitan dengan mahasiwa FMIPA Unpad dapat dengan mudah
            didapat dan diolah untuk kepentingan bersama.
          </p>
        </CardHeader>
      </Card>
      <div className="container-fluid">
        <h1>Our Member</h1>
        <div className="row">
          {team.map((e) => (
            <div className="col-lg-4 col-md-6 col-12 ">
              <div className="card mt-3 " style={{ width: "100%" }}>
                <img
                  className="card-img-top"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Hashimoto_Kanna_at_Opening_Ceremony_of_the_Tokyo_International_Film_Festival_2017_(26331546998).jpg/1200px-Hashimoto_Kanna_at_Opening_Ceremony_of_the_Tokyo_International_Film_Festival_2017_(26331546998).jpg"
                  alt="Card image cap"
                  height="250px"
                />
                <div className="card-body">
                  <h5 className="card-title text-center">{e.nama}</h5>
                  <p className="card-text text-center">
                    {e.NPM} <br></br>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
