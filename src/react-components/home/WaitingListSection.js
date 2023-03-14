import React from "react";
import { FormattedMessage } from "react-intl";
import styles from "./WaitingListSection.scss";

export function WaitingListSection() {
  return (
    <div className={styles.waitingListSection}>
      <div className={styles.waitingListDescription}>
        <h2 className={styles.waitingListTitle}>
          <FormattedMessage id="home-page.waiting-list-title" defaultMessage="Want to Get Early Access?" />
        </h2>
        <p className={styles.waitingListDescription}>
          <FormattedMessage
            id="home-page.waiting-list-description"
            defaultMessage="Sign up to be the first to receive exclusive access to new features and releases!"
          />
        </p>
      </div>
      <div className={styles.waitingListButtonContainer}>
        <a href="https://forms.gle/aN5vyx2CeViSiCFDA">
          <button className={styles.waitingListButton}>
            <FormattedMessage id="home-page.waiting-list-button" defaultMessage="Join Waiting List" />
          </button>
        </a>
      </div>
    </div>
  );
}
