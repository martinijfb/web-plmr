import { SectionHeading, Highlight } from "@/components/section-heading";
import styles from "./mailing-list-section.module.css";

export function MailingListSection() {
  return (
    <section className={styles.section} aria-label="Join our mailing list">
      <div className={styles.card}>
        <div className={styles.content}>
          <SectionHeading className={styles.title}>
            JOIN OUR
            <br />
            <Highlight>MAILING LIST</Highlight>
          </SectionHeading>

          <form>
            <div className={styles.fields}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="ml-name">
                  NAME
                </label>
                <input
                  className={styles.input}
                  type="text"
                  id="ml-name"
                  name="name"
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="ml-email">
                  EMAIL
                </label>
                <input
                  className={styles.input}
                  type="email"
                  id="ml-email"
                  name="email"
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="ml-org">
                  ORGANISATION
                </label>
                <input
                  className={styles.input}
                  type="text"
                  id="ml-org"
                  name="organisation"
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="ml-sector">
                  SECTOR
                </label>
                <input
                  className={styles.input}
                  type="text"
                  id="ml-sector"
                  name="sector"
                />
              </div>
            </div>

            <div className={styles.consent}>
              <input
                type="checkbox"
                id="ml-consent"
                name="consent"
                className={styles.checkbox}
              />
              <label htmlFor="ml-consent" className={styles.consentLabel}>
                I have read, understand and accept the content of the Privacy
                Policy and consent to the processing of my data.
              </label>
            </div>

            <button type="submit" className={styles.submit}>
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
