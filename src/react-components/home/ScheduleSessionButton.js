import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import styles from "./ScheduleSessionButton.scss";
import { Button } from "../input/Button";

export function ScheduleSessionButton({ mobile, link = "https://form.jotform.com/231206758046051" }) {
  return (
    <a href={link}>
        <Button className={mobile ? styles.mobileScheduleSession : styles.ScheduleSessionButton}>
          Schedule a Session
        </Button>
    </a>
  );
}

ScheduleSessionButton.propTypes = {
  mobile: PropTypes.bool,
  link: PropTypes.string
};