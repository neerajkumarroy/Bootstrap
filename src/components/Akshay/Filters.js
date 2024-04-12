import React from "react";

// Static imports
// import CloseIcon from "../../assets/Close.png";

const Filters = () => {
  return (
    <div>
      <div
        className="modal show d-block"
        style={{ background: " #00000080" }}
        id="exampleModalCenter"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content position-relative">
            <div
              className="position-absolute"
              style={{ right: "20px", top: "10px" }}
            >
              {/* <img
                src={CloseIcon.src}
                alt="close"
                className="cursor-pointer"
                onClick={props.onClose}
              /> */}
            </div>
            <div className="modal-header">
              <h5 className="modal-header" id="exampleModalLongTitle">
                New Card
              </h5>
            </div>
            <div
              className="modal-body"
              style={{ marginTop: "-20px", padding: "0px 30px" }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-12 col-lg-12 p-0">
                    <div className="mb-5 d-flex">
                      <div className="form-check form-check-inline mt-2">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="representative_yes"
                          checked
                          id="inlineRadio1"
                          value="Yes"
                          // onChange={(e) => {
                          //   setFieldValue('representative_yes', 'True');
                          //   setFieldValue('representative_no', 'False');
                          //   setPersonal(true);
                          // }}
                        />
                        <label
                          className="form-check-label-1"
                          htmlFor="inlineRadio1"
                        >
                          Credit Card
                        </label>
                      </div>
                      <div className="form-check form-check-inline mt-2">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="representative_yes"
                          // checked
                          id="inlineRadio1"
                          value="Yes"
                          // onChange={(e) => {
                          //   setFieldValue('representative_yes', 'True');
                          //   setFieldValue('representative_no', 'False');
                          //   setPersonal(true);
                          // }}
                        />
                        <label
                          className="form-check-label-1"
                          htmlFor="inlineRadio1"
                        >
                          Debit Card
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <>
                  <form>
                    <div>
                      <label className="form-label-custom mt-2" htmlFor="email">
                        <span className="form-label-custom">Card Number</span>
                      </label>
                      <div className="input-group flex-nowrap">
                        <input
                          type="text"
                          id="password"
                          className="form-control custom-input"
                          // placeholder="email@example.com"
                          name="password"
                          // onChange={handleChange}
                          // onBlur={handleBlur}
                          // value={values.password}
                        />
                      </div>
                    </div>

                    <div className="container">
                      <div className="row">
                        <div className="col-6">
                          <div className="row">
                            <div className="col-4 ">
                              {/* <label
                                className="form-label-custom mt-2"
                                htmlFor="email"
                              >
                                <span className="form-label-custom">
                                  Valid Till
                                </span>
                              </label> */}
                              <div className="input-group flex-nowrap">
                                <input
                                  type="text"
                                  id="month"
                                  className="form-control custom-input  mt-4 px-2 "
                                  placeholder="MM"
                                  name="month"
                                />
                              </div>
                            </div>

                            <div className="col-4">
                              <div className="input-group flex-nowrap">
                                <input
                                  type="text"
                                  id="year"
                                  className="form-control custom-input  mt-4"
                                  placeholder="YY"
                                  name="year"
                                />
                              </div>
                            </div>

                            <div className="col-4">
                              <label
                                className="form-label-custom "
                                htmlFor="cvv"
                              >
                                <span className="form-label-custom">CVV</span>
                              </label>
                              <div className="input-group flex-nowrap">
                                <input
                                  type="text"
                                  id="cvv"
                                  className="form-control custom-input"
                                  name="cvv"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="form-label-custom mt-2" htmlFor="email">
                        <span className="form-label-custom">
                          Card Holder Name
                        </span>
                      </label>
                      <div className="input-group flex-nowrap">
                        <input
                          type="text"
                          id="password"
                          className="form-control custom-input"
                          // placeholder="email@example.com"
                          name="password"
                          // onChange={handleChange}
                          // onBlur={handleBlur}
                          // value={values.password}
                        />
                      </div>
                    </div>
                    <div className="w-100">
                      <button
                        type="submit"
                        className="btn-custom mb-8 mt-6 w-100"
                        data-dismiss="modal"
                      >
                        Next
                      </button>
                    </div>
                  </form>
                </>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
