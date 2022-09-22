import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import InputForm from "../components/InputForm/InputForm";
import NavBar from "../components/NavBar/NavBar";
import "./signIn.scss";

const SignIn = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      <NavBar />
      {loading ? (
        <div className="container">
          <img
            className="loading"
            src={require("../assets/imgs/loading.gif")}
            alt="gif"
          />
        </div>
      ) : (
        <>
          <InputForm />
          <Footer />
        </>
      )}
    </>
  );
};

export default SignIn;
