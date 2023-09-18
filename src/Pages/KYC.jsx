import React, { useEffect, useState } from "react";
import KycHeader from "../Components/KycHeader";
import "../Style/KYC.css";
const KYC = () => {
  const initialFormData = {
    registeredCompanyName: "",
    companyRegisteredAddress: "",
    emailAddress: "",
    corporateDomainName: "",
    ParentCompany: "",
    ContactNumber: "",
    companyWebsite: "",
    NumberOfEmployees: "",
  };

  const [Formvalues, setFormValues] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState({});

  const validateField = (fieldName, value) => {
    let error = "";

    switch (fieldName) {
      case "registeredCompanyName":
        if (value.trim() === "") {
          error = "Registered Company Name is required";
        } else if (value.length < 5) {
          error = "Registered Company Name must be at least 5 characters long";
        } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
          error =
            "registeredCompanyName can only contain letters, numbers, and underscores";
        }
        break;
      case "emailAddress":
        if (!/^\S+@\S+\.\S+$/.test(value)) {
          error = "Invalid email address";
        }
        break;

      case "corporateDomainName":
        if (value.trim() === "") {
          error = "corporate DomainName is required";
        } else if (value.length < 5) {
          error = "corporate Domain Name must be at least 5 characters long";
        } else if (/^[ A-Za-z0-9_@./#&+-]*$/.test(value)) {
          error =
            "corporate Domain Name can only contain letters, numbers, and special charachters";
        }
        break;

      case "companyRegisteredAddress":
        if (value.trim() === "") {
          error = "company Registered Address is required";
        } else if (value.length < 5) {
          error =
            "company Registered Address Name must be at least 5 characters long";
        } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
          error = "corporate Domain Name can only contain letters";
        }
        break;
      case "ParentCompany":
        if (value.trim() === "") {
          error = "Parent Company is required";
        } else if (value.length < 5) {
          error = "Parent Company Name must be at least 5 characters long";
        } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
          error =
            "Parent Company can only contain letters, numbers, and underscores";
        }
        break;
      case "ContactNumber":
        if (value.trim() === "") {
          error = "Contact Number is required";
        } else if (value.length < 10) {
          error = "Contact Number must be at least 5 characters long";
        }
        //  else if (/^\+?[1-9][0-9]{7,14}$/.test(value)) {
        //   error = "Invalid";
        // }
        break;

      case "companyWebsite":
        if (value.trim() === "") {
          error = "company Website is required";
        } else if (value.length < 5) {
          error = "company Website must be at least 5 characters long";
        } else if (/^[ A-Za-z0-9_@./#&+-]*$/.test(value)) {
          error =
            "company Website can only contain letters, numbers, and special charachters";
        }
        break;
      case "NumberOfEmployees":
        if (value.trim() === "") {
          error = "Number of employees is required";
        } else if (value < 1) {
          error = "Number of employee cannnot be less than 1";
        }
        break;
      default:
        break;
    }

    return error;
  };

  const handlChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...Formvalues, [name]: value });
    setFormErrors({ ...formErrors, [name]: validateField(name, value) });
  };

  const handleFocus = (fieldName) => {
    setFormErrors({ ...formErrors, [fieldName]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasErrors = false;
    const newErrors = {};

    for (const field in Formvalues) {
      const value = Formvalues[field];
      const error = validateField(field, value);
      if (error) {
        newErrors[field] = error;
        hasErrors = true;
      }
    }

    // Check for empty fields and add 'required' error
    for (const field in Formvalues) {
      if (Formvalues[field].trim() === "" && !newErrors[field]) {
        newErrors[field] = "This field is required";
        hasErrors = true;
      }
    }

    setFormErrors(newErrors);

    if (!hasErrors) {
      console.log("Form data:", Formvalues);
      // You can submit the form data or perform further actions here
    } else {
      console.log("Form contains errors or empty fields. Please correct them.");
    }
  };

  return (
    <>
      <KycHeader />
      {/* KYC FORM */}
      <form onSubmit={handleSubmit}>
        <div className="kycContainer">
          {/* Company Information Container */}

          <div className="Infocontainer">
            <h3>Company Information</h3>
            <div className="infoFlexContainer">
              <div className="flexItem1">
                <div>
                  <label>Registered Company Name</label>
                  <input
                    type="text"
                    name="registeredCompanyName"
                    value={Formvalues.registeredCompanyName}
                    onChange={handlChange}
                    onFocus={() => handleFocus("registeredCompanyName")}
                  />
                  {formErrors.registeredCompanyName && (
                    <div className="error">
                      {formErrors.registeredCompanyName}
                    </div>
                  )}
                </div>
                <div>
                  <label>Company Registered Address</label>
                  <input
                    type="text"
                    name="companyRegisteredAddress"
                    value={Formvalues.companyRegisteredAddress}
                    onChange={handlChange}
                    onFocus={() => handleFocus("companyRegisteredAddress")}
                  />

                  {formErrors.companyRegisteredAddress && (
                    <div className="error">
                      {formErrors.companyRegisteredAddress}
                    </div>
                  )}
                </div>
                <div>
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="emailAddress"
                    value={Formvalues.emailAddress}
                    onChange={handlChange}
                    onFocus={() => handleFocus("emailAddress")}
                  />
                  {formErrors.emailAddress && (
                    <div className="error">{formErrors.emailAddress}</div>
                  )}
                </div>
                <div>
                  <label>Corporate Domain Name</label>
                  <input
                    type="url"
                    name="corporateDomainName"
                    value={Formvalues.corporateDomainName}
                    onChange={handlChange}
                    onFocus={() => handleFocus("corporateDomainName")}
                  />

                  {formErrors.corporateDomainName && (
                    <div className="error">
                      {formErrors.corporateDomainName}
                    </div>
                  )}
                </div>
              </div>
              <div className="flexItem2">
                <div>
                  <label>Parent Company/Group Company</label>
                  <input
                    type="text"
                    name="ParentCompany"
                    value={Formvalues.ParentCompany}
                    onChange={handlChange}
                    onFocus={() => handleFocus("ParentCompany")}
                  />
                  {formErrors.ParentCompany && (
                    <div className="error">{formErrors.ParentCompany}</div>
                  )}
                </div>
                <div>
                  <label>Contact Number</label>
                  <input
                    type="tel"
                    name="ContactNumber"
                    value={Formvalues.ContactNumber}
                    onChange={handlChange}
                    onFocus={() => handleFocus("ContactNumber")}
                  />
                  {formErrors.ContactNumber && (
                    <div className="error">{formErrors.ContactNumber}</div>
                  )}
                </div>
                <div>
                  <label>Company Website</label>
                  <input
                    type="text"
                    name="companyWebsite"
                    value={Formvalues.companyWebsite}
                    onChange={handlChange}
                    onFocus={() => handleFocus("companyWebsite")}
                  />

                  {formErrors.companyWebsite && (
                    <div className="error">{formErrors.companyWebsite}</div>
                  )}
                </div>
                <div>
                  <label>Number of Employees</label>
                  <input
                    type="number"
                    name="NumberOfEmployees"
                    value={Formvalues.NumberOfEmployees}
                    onChange={handlChange}
                    onFocus={() => handleFocus("NumberOfEmployees")}
                  />
                  {formErrors.NumberOfEmployees && (
                    <div className="error">{formErrors.NumberOfEmployees}</div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Company Structure */}

          <div className="Infocontainer">
            <h3>COMPANY STRUCTURE</h3>
            <div className="infoFlexContainer">
              <div className="flexItem1">
                <div>
                  <label>Business Structure</label>
                  <select>
                    <option>Select</option>
                    <option>Public Company</option>
                    <option>Partnership</option>
                    <option>Private Company</option>
                    <option>Sole Propprietorship</option>
                    <option>Others</option>
                  </select>
                </div>
                <div>
                  <label>Nature of Business</label>
                  <select>
                    <option>Select</option>

                    <option>Refining</option>
                    <option>Trading</option>
                    <option> Shipping </option>
                    <option>Distribution</option>
                    <option>Storage</option>
                    <option>Others</option>
                  </select>
                </div>
                <div>
                  <label>Country of Incorporation </label>
                  <input type="email" />
                </div>
                <div>
                  <label>Company Registration No </label>
                  <input type="text" />
                </div>
                <div>
                  <label>Trade License Expiry Date</label>
                  <input type="text" />
                </div>
              </div>
              <div className="flexItem2">
                <div>
                  <label>If Other Structure (please specify)</label>
                  <input type="text" />
                </div>
                <div>
                  <label>If Other Business (please specify)</label>
                  <input type="number" />
                </div>
                <div>
                  <label>Date of Incorporation</label>
                  <input type="email" />
                </div>
                <div>
                  <label>Trade License Number</label>
                  <input type="text" />
                </div>
                <div>
                  <label>VAT</label>
                  <input type="text" />
                </div>
              </div>
            </div>
          </div>

          {/* Bank Details */}

          <div className="Infocontainer">
            <h3>Bank Details</h3>
            <div className="infoFlexContainer">
              <div className="flexItem1">
                <div>
                  <label>Bank Name</label>
                  <input type="text" />
                </div>
                <div>
                  <label>Bank Branch Address</label>
                  <input type="text" />
                </div>
                <div>
                  <label>Account Name </label>
                  <input type="email" />
                </div>
                <div>
                  <label>Account Number </label>
                  <input type="text" />
                </div>
                <div>
                  <label>Bank Account Manager's Name</label>
                  <input type="text" />
                </div>
                <div>
                  <label>Correspondent Bank Name</label>
                  <input type="text" />
                </div>
              </div>
              <div className="flexItem2">
                <div>
                  <label>Bank Country</label>
                  <input type="text" />
                </div>
                <div>
                  <label>Swift Code</label>
                  <input type="number" />
                </div>
                <div>
                  <label>Account Currency</label>
                  <input type="email" />
                </div>
                <div>
                  <label>IBAN/ABA</label>
                  <input type="text" />
                </div>
                <div>
                  <label>Bank Account Manager's Contact Details</label>
                  <input type="text" />
                </div>

                <div>
                  <label> Correspondent Bank SWIFT Code</label>
                  <input type="text" />
                </div>
              </div>
            </div>
          </div>

          {/* ShareHolders Section */}
          <div className="Infocontainer">
            <h3>SHAREHOLDERS</h3>
            <table style={{ width: "100%" }} cellPadding={20} cellSpacing={13}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>%</th>
                  <th>Country</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="number" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="number" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="number" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="number" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Company Contact Details */}

          <div className="Infocontainer">
            <h3>Company Conatact Details </h3>
            <div className="infoFlexContainer">
              <div className="flexItem1">
                <h5>Primary Contact Details</h5>
                <div>
                  <label>Name</label>
                  <input type="text" />
                </div>
                <div>
                  <label>Designation</label>
                  <input type="text" />
                </div>
                <div>
                  <label>Phone</label>
                  <input type="email" />
                </div>
                <div>
                  <label>Email Address </label>
                  <input type="text" />
                </div>
              </div>
              <div className="flexItem2">
                <h5>Operations Department Contact Details</h5>
                <div>
                  <label>Name</label>
                  <input type="text" />
                </div>
                <div>
                  <label>Designation</label>
                  <input type="number" />
                </div>
                <div>
                  <label>Phone</label>
                  <input type="email" />
                </div>
                <div>
                  <label>Email Address</label>
                  <input type="text" />
                </div>
              </div>
            </div>

            <div className="infoFlexContainer">
              <div className="flexItem1">
                <h5>Credit/Finance Contact Details</h5>
                <div>
                  <label>Name</label>
                  <input type="text" />
                </div>
                <div>
                  <label>Designation</label>
                  <input type="text" />
                </div>
                <div>
                  <label>Phone</label>
                  <input type="email" />
                </div>
                <div>
                  <label>Email Address </label>
                  <input type="text" />
                </div>
              </div>
              <div className="flexItem2">
                <h5>Accounting Department Contact Details</h5>
                <div>
                  <label>Name</label>
                  <input type="text" />
                </div>
                <div>
                  <label>Designation</label>
                  <input type="number" />
                </div>
                <div>
                  <label>Phone</label>
                  <input type="email" />
                </div>
                <div>
                  <label>Email Address</label>
                  <input type="text" />
                </div>
              </div>
            </div>

            <div className="proposedContainer">
              <label style={{ padding: "10px 25px" }}>
                What is the proposed business with Adam Energy FZE?
              </label>
              <input />
            </div>
            <div className="proposedContainer">
              <label style={{ padding: "10px 25px" }}>
                What is the proposed business with Adam Energy FZE?
              </label>
              <input />
            </div>
          </div>

          {/* Trade Reference */}

          <div className="Infocontainer">
            <h3>Trade Reference</h3>
            <p style={{ color: "#666666", padding: "9px 25px" }}>
              Please provide Trade Reference details:
            </p>
            <table
              style={{ width: "100%", textAlign: "center" }}
              cellSpacing={13}
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="number" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="number" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="number" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="number" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Upload KYC Documents */}

          <div className="Infocontainer kycDocumentsContainer">
            <h3>UPLOAD KYC DOCUMENTS</h3>
            <div>
              <label>1) Certificate of Incorporation </label>
              <input type="file" />
            </div>
            <div>
              <label>
                2) Memorandum/Article of Association and Shareholding Structure
                (Evidencing Ultimate Business Owners) signed by company
                authorized signatory, stamped. and documents supporting UBO's.{" "}
              </label>
              <input type="file" />
            </div>
            <div style={{ display: "inline-block" }}>
              <label>3) Trade License </label>
              <input type="file" />
            </div>
            <div style={{ float: "right" }}>
              <label>4) Tax Registration Certificate</label>
              <input type="file" />
            </div>

            <div>
              <label>5) Company Profile ( If Available) </label>
              <input type="file" />
            </div>
            <div style={{ float: "right" }} className="url">
              <label>6) Website URL</label>
              <input type="url" />
            </div>
            <div>
              <label>7) Bank Reference Letter ( Upon Trade or Request) </label>
              <input type="file" />
            </div>
            <div>
              <label>
                8) Passport Copies of the Ultimate Beneficial Owners and
                Authorized Signatory{" "}
              </label>
              <input type="file" />
            </div>

            <div className="declarationContainer">
              <h4>Declaration</h4>
              <p>
                {" "}
                <span>
                  <input type="checkbox" />
                </span>{" "}
                I DECLARE THAT: - This application form was completed by me, a
                representative authorized to submit this form on behalf of the
                registered company. I do hereby declare that the information
                provided herein above and, in the documents, appended herewith
                is true and correct to the best of my knowledge and belief and
                nothing has been falsely stated or concealed therein. I
                understand that if the said information as given by me is proved
                to be false, then I will be held liable under the provisions of
                the applicable UAE Law.
              </p>
            </div>

            <div>
              <label>Authorized Signatory * </label>
              <input type="file" />
            </div>

            <div>
              <label>Authorized Signatory Name </label>
              <input type="text" />
            </div>

            <div className="submit-btn">
              <button>Submit</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default KYC;
