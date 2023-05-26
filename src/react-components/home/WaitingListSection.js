import React from "react";
import { FormattedMessage } from "react-intl";
import styles from "./WaitingListSection.scss";

export function WaitingListSection() {
  return (
    <div className={styles.waitingListSection}>
      <div className={styles.waitingListDescription}>
        <h2 className={styles.waitingListTitle}>
          <FormattedMessage id="home-page.waiting-list-title" defaultMessage="Want to Get a Free Trial?" />
        </h2>
        <p className={styles.waitingListDescription}>
          <FormattedMessage
            id="home-page.waiting-list-description"
            defaultMessage="Sign up to be part of our early beta users where you'll get free perks and early access to features!"
          />
        </p>
      </div>
      <div className={styles.waitingListButtonContainer}>
        <a href="https://forms.gle/ujLCDyB9vHAzULL96">
          <button className={styles.waitingListButton}>
            <FormattedMessage id="home-page.waiting-list-button" defaultMessage="Join Early Access" />
          </button>
        </a>
      </div>
    </div>
  );
}
