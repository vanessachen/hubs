import React from 'react';
import styles from "./assets/stylesheets/aboutus.scss";
import ReactDOM from "react-dom";
import "./utils/configs";
import "./react-components/styles/global.scss";
import { WrappedIntlProvider } from "./react-components/wrapped-intl-provider";
import { AuthContextProvider } from "./react-components/auth/AuthContext";
import { store } from "./utils/store-instance";
import registerTelemetry from "./telemetry";

registerTelemetry("/about", "About Us Page");

function AboutUs() {
  return (
    <div className={styles.aboutUs}>
      <h1>About Us</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor dapibus justo, vitae fringilla odio facilisis et. Morbi et lacus vel arcu malesuada iaculis.</p>
      {/* Add more content as needed */}
    </div>
  );
};

window.APP = { store };

function Root() {
  return (
    <WrappedIntlProvider>
      <AuthContextProvider store={store}>
        <AboutUs />
      </AuthContextProvider>
    </WrappedIntlProvider>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Root />, document.getElementById("ui-root"));
});
