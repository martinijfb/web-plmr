export function MailingListSection() {
  return (
    <section className="mailing-list" aria-label="Join our mailing list">
      <div className="mailing-list__card">
        <div className="mailing-list__content">
          <h2 className="mailing-list__title">
            JOIN OUR
            <br />
            <span className="mailing-list__title-highlight">MAILING LIST</span>
          </h2>

          <form className="mailing-list__form">
            <div className="mailing-list__fields">
              <div className="mailing-list__field">
                <label className="mailing-list__label" htmlFor="ml-name">
                  NAME
                </label>
                <input
                  className="mailing-list__input"
                  type="text"
                  id="ml-name"
                  name="name"
                />
              </div>
              <div className="mailing-list__field">
                <label className="mailing-list__label" htmlFor="ml-email">
                  EMAIL
                </label>
                <input
                  className="mailing-list__input"
                  type="email"
                  id="ml-email"
                  name="email"
                />
              </div>
              <div className="mailing-list__field">
                <label className="mailing-list__label" htmlFor="ml-org">
                  ORGANISATION
                </label>
                <input
                  className="mailing-list__input"
                  type="text"
                  id="ml-org"
                  name="organisation"
                />
              </div>
              <div className="mailing-list__field">
                <label className="mailing-list__label" htmlFor="ml-sector">
                  SECTOR
                </label>
                <input
                  className="mailing-list__input"
                  type="text"
                  id="ml-sector"
                  name="sector"
                />
              </div>
            </div>

            <div className="mailing-list__consent">
              <input
                type="checkbox"
                id="ml-consent"
                name="consent"
                className="mailing-list__checkbox"
              />
              <label htmlFor="ml-consent" className="mailing-list__consent-label">
                I have read, understand and accept the content of the Privacy
                Policy and consent to the processing of my data.
              </label>
            </div>

            <button type="submit" className="mailing-list__submit">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
