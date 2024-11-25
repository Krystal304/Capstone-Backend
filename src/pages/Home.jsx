
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Home({ setCorrectAnswers }) {
//   const [userName, setUsername] = useState("");
//   const navigate = useNavigate();

//   const handleSignIn = (e) => {
//     e.preventDefault();
//     setCorrectAnswers(0);
//     if (userName.trim()) {
//       navigate("/trivia", { state: { userName  } });
//     } else {
//       alert("Please enter a name to continue.");
//     }
//   };

//   return (
//     <div style={{backgroundColor: "purple", textAlign: "center", padding: "20px", fontFamily: "Arial, sans-serif" }}>
//       <h1>Welcome to the Trivia Game!</h1>
//       <p>Test your knowledge by answering fun trivia questions. Let's get started!</p>

//       <div style={{ marginTop: "20px" }}>
//         <h2>Please enter your name to play:</h2>
//         <form onSubmit={handleSignIn}>
//           <input
//             type="text"
//             value={userName}
//             onChange={(e) => setUsername(e.target.value)}
//             placeholder="Enter your name"
//             style={{ padding: "10px", fontSize: "16px", marginRight: "10px" }}
//           />
//           <button type="submit" style={{ padding: "10px 20px", fontSize: "16px" 
            
//           }}>
//             Start Trivia
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Home;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home({ setCorrectAnswers }) {
  const [userName, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    setCorrectAnswers(0);
    if (userName.trim()) {
      navigate("/trivia", { state: { userName } });
    } else {
      alert("Please enter a name to continue.");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to the BrainBlitz!</h1>
      <p style={styles.subheading}>Test your knowledge by answering fun trivia questions. Let's get started!</p>

      <div style={styles.formContainer}>
        <h2 style={styles.formTitle}>Please enter your name to play:</h2>
        <form onSubmit={handleSignIn} style={styles.form}>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your name"
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Start Trivia</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#7A5B8C", 
    color: "#fff", 
    textAlign: "center",
    padding: "50px 20px",
    fontFamily: "'Roboto', sans-serif",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    animation: "fadeIn 1s ease-out",
    backgroundImage: "linear-gradient(135deg, rgba(122, 91, 140, 1) 0%, rgba(255, 150, 120, 1) 100%)", // Darker gradient (lavender to peach)
  },
  heading: {
    fontSize: "3rem",
    marginBottom: "20px",
    fontWeight: "bold",
    color: "#FFD700", 
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)", 
  },
  subheading: {
    fontSize: "1.2rem",
    marginBottom: "30px",
    color: "#D3D3D3", 
    fontWeight: "lighter",
    maxWidth: "600px",
    margin: "0 auto",
  },
  formContainer: {
    backgroundColor: "#FFB384", 
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)", 
    width: "100%",
    maxWidth: "400px",
    margin: "0 auto",
    transition: "transform 0.3s ease",
  },
  formTitle: {
    fontSize: "1.5rem",
    marginBottom: "20px",
    color: "#FFD700", 
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    padding: "12px",
    fontSize: "16px",
    marginBottom: "20px",
    borderRadius: "8px",
    border: "none",
    outline: "none",
    width: "80%",
    maxWidth: "300px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#FFF", 
    color: "#333", 
  },
  inputFocus: {
    boxShadow: "0 0 10px rgba(0, 255, 255, 0.6)", 
  },
  button: {
    padding: "12px 25px",
    fontSize: "16px",
    backgroundColor: "#1E90FF", 
    color: "#000", 
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    transition: "background-color 0.3s ease, transform 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#FFD700", 
    transform: "scale(1.05)", 
  },
};

export default Home;
