const FaqSection = () => {
  return (
    <section className="faq-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="title">
              <h2>Frequently Ask Questions</h2>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    How long until we deliver your first blog post?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Really boy law county she unable her sister. Feet you off
                      its like like six. Among sex are leave law built now. In
                      built table in an rapid blush. Merits behind on afraid or
                      warmly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    How long until we deliver your first blog post?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Really boy law county she unable her sister. Feet you off
                      its like like six. Among sex are leave law built now. In
                      built table in an rapid blush. Merits behind on afraid or
                      warmly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    How long until we deliver your first blog post?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Similique consectetur consequatur provident itaque
                      sapiente? Dolore porro accusantium quia blanditiis quod et
                      velit qui atque culpa!
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    How long until we deliver your first blog post?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ratione, temporibus nemo sequi esse quaerat voluptate
                      eveniet quis quas asperiores natus cumque eaque neque
                      mollitia aperiam.
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    How long until we deliver your first blog post?
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ratione, temporibus nemo sequi esse quaerat voluptate
                      eveniet quis quas asperiores natus cumque eaque neque
                      mollitia aperiam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
