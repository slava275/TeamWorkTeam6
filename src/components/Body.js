import React from "react";

const Body = () => {
  return (
    <main style={styles.body}>
      <div style={styles.card}>
              <img src={"Photos/AnnaKysliakPhoto.png"} alt="Anna Kysliak" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Anna Kysliak</h2>
          <p style={styles.position}>Project Manager</p>
        </div>
      </div>
      <div style={styles.card}>
              <img src={"Photos/VladHardetskyyPhoto.png"} alt="Vlad Hardetskyy" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Vlad Hardetskyy</h2>
          <p style={styles.position}>Software Developer</p>
        </div>
          </div>
          <div style={styles.card}>
              <img src={"Photos/ViacheslavSavchukPhoto.jpg"} alt="Viacheslav Savchuk" style={styles.photo} />
              <div style={styles.textContainer}>
                  <h2 style={styles.name}>Viacheslav Savchuk</h2>
                  <p style={styles.position}>Quality Assurance</p>
              </div>
          </div>
          <div style={styles.card}>
              <img src={"Photos/AndriiRodinchukPhoto.jpg"} alt="Andrii Rodinchuk" style={styles.photo} />
              <div style={styles.textContainer}>
                  <h2 style={styles.name}>Andrii Rodinchuk</h2>
                  <p style={styles.position}>Designer</p>
              </div>
          </div>
    </main>
  );
};

const styles = {
  body: {
    display: "flex",
    flexWrap: "wrap",
  },
  card: {
    width: "150px",
    padding: "1em",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    margin: "1em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  photo: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  textContainer: {
    marginTop: "0.5em",
  },
  name: {
    fontSize: "1em",
    fontWeight: "bold",
    color: "#333",
    margin: "0",
  },
  position: {
    fontSize: "0.9em",
    color: "#6a0dad", // Same purple color as header
    margin: "0.5em 0 0 0",
  },
};

export default Body;
