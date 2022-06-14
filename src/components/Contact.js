const Contact = () => {
  return (
    <div className=" container contact text-center p-3">
      <div>
        <div className="row justify-content-center">
          <p
            style={{ backgroundColor: "rgb(0, 106, 151)", color: "white" }}
            className="rounded-0 col-lg-10 col-md-6 p-3 card"
          >
            <h1>Important Notice</h1>
            <p style={{ fontSize: "24px" }}>
              All Internship / GRIP related queries are answered only on our
              LinkedIn Network
            </p>
            <a
              className="fw-bold"
              style={{ textDecoration: "none", color: "rgb(85, 253, 155)" }}
              href="https://www.linkedin.com/groups/10379184/"
            >
              JOIN TSF NETWORK HERE
            </a>
          </p>
        </div>
        <div className="row row justify-content-center">
          <div className="col-lg-5 col-md-6 m-2">
            <div >
              <div style={{ backgroundColor: "lightblue" }} className="row p-3">
                <div
                  style={{ color: "blue" }}
                  className="col-auto align-self-center"
                >
                  <i class="fa fa-phone fa-fw w3-xxlarge"></i>
                </div>
                <div className="col py-5">
                  <h4>Contact</h4>
                  <p>
                    (for Non-Internship/GRIP Queries Only) +65-8402-8590,
                    info@thesparksfoundation.sg
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 m-2">
            <div>
              <div
                style={{ backgroundColor: "rgb(247, 255, 96)" }}
                className="row p-3"
              >
                <div
                  style={{ color: "orange" }}
                  className="col-auto  align-self-center"
                >
                  <i class="fa fa-map-marker fa-fw w3-xxlarge"></i>
                </div>
                <div className="col py-5">
                  <h4>Address</h4>
                  <p>
                    THE HANGAR, NUS ENTERPRISE 21 HENG MUI KENG TERRACE,
                    SINGAPORE, 119613
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <form className="col-9" action="/action_page.php" target="_blank">
          <p>
            <input
              className="w3-input"
              type="text"
              placeholder="Name"
              required
              name="Name"
            />
          </p>
          <p>
            <input
            className="w3-input"
              type="text"
              placeholder="Email"
              required
              name="Email"
            />
          </p>
          <p>
            <input
            className="w3-input"
              type="text"
              placeholder="Subject"
              required
              name="Subject"
            />
          </p>
          <p>
            <input
            className="w3-input"
              type="text"
              placeholder="Message"
              required
              name="Message"
            />
          </p>
          <p>
            <button className="w3-button w3-black" type="submit">
              <i class="fa fa-paper-plane"></i> SEND MESSAGE
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Contact;
