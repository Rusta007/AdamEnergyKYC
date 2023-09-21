import React, { useEffect, useState } from "react";
import KycHeader from "../Components/KycHeader";
import "../Style/KYC.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

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
    countryOfIncorporation: "",
    companyRegistrationNumber: "",
    TradeLicenseExpiryData: "",
    DateOfIncorporation: "",
    TradeLicenseNumber: "",
    VAT: "",
    BankName: "",
    BankBranchAddress: "",
    AccountName: "",
    AccountNumber: "",
    BankAccountMangersName: "",
    CorrespondentBankName: "",
    BankCountry: "",
    SwiftCode: "",
    AccountCurrency: "",
    IBAN: "",
    BankAccountManagersContactDetails: "",
    CorrespondentBankSwiftCode: "",
    PrimaryContactName: "",
    PrimaryContactDesignation: "",
    PrimaryContactPhone: "",
    PrimaryContactEmail: "",
    OperationDepartmentName: "",
    OperationDepartmentDesignation: "",
    OperationDepartMentPhone: "",
    OperationDepartmentEmail: "",
    CreditNAME: "",
    CreditDesignation: "",
    CreditPhone: "",
    CreditEmail: "",
    AccountDepartName: "",
    AcoountDepartDesignation: "",
    AccountDepartmentPhone: "",
    AccountDepartmentEmail: "",
    ProposedBusiness: "",
    ContactPerson: "",
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
        } else if (!/[a-zA-Z]/.test(value)) {
          error = "Registered Company Name must contain at least one letter";
        } else if (!/^[a-zA-Z0-9_\s]+$/.test(value)) {
          error =
            "Registered Company Name can only contain letters, numbers, and underscores";
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
        } else if (/^([a-zA-Z0-9.-]+)$/.test(value)) {
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
        } else if (!/[a-zA-Z]/.test(value)) {
          error = "ParentCompany must contain at least one letter";
        } else if (!/^[a-zA-Z0-9_\s]+$/.test(value)) {
          error =
            "ParentCompany can only contain letters, numbers, and underscores";
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

      case "countryOfIncorporation":
        if (value.trim() === "") {
          error = "country Of Incorporation is required";
        } else if (value.length < 3) {
          error = "country Of Incorporation must be at least 3 characters long";
        } else if (!/^[a-zA-Z]+$/.test(value)) {
          error = "country Of Incorporation can only contain letters";
        }
        break;

      case "companyRegistrationNumber":
        if (value.trim() === "") {
          error = "company Registration Number is required";
        } else if (value.length < 5) {
          error =
            "company Registration Number must be at least 5 characters long";
        } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
          error =
            "registeredCompanyName can only contain letters, numbers, and underscores";
        }
        break;

      case "TradeLicenseExpiryData":
        if (value.trim() === "") {
          error = "Date is Required";
        }
        break;
      case "DateOfIncorporation":
        if (value.trim() === "") {
          error = "Date is Required";
        }
        break;
      case "TradeLicenseNumber":
        if (value.trim() === "") {
          error = "Trade License Number is required";
        } else if (value.length < 5) {
          error = "Trade License Number must be at least 5 characters long";
        } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
          error =
            "Trade License Number can only contain letters, numbers, and underscores";
        }
        break;

      case "VAT":
        if (value.length > 0) {
          if (value.length < 5) {
            error =
              "VAT Registration Number must be at least 5 characters long";
          } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
            error =
              "VAT Registration Number can only contain letters, numbers, and underscores";
          }
        }

        break;

      case "BankName":
        if (value.trim() === "") {
          error = "BankName is required";
        } else if (value.length < 2) {
          error = "BankName must be at least 2 characters long";
        } else if (!/[a-zA-Z]/.test(value)) {
          error = "BankName must contain at least one letter";
        } else if (!/^[a-zA-Z0-9_\s]+$/.test(value)) {
          error =
            "BankName can only contain letters, numbers, and underscores";
        }
        break;
      case "BankBranchAddress":
        if (value.trim() === "") {
          error = "BankBranchAddress is required";
        } else if (value.length < 5) {
          error = "BankBranchAddress must be at least 5 characters long";
        } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
          error = "BankBranchAddress can only contain letters";
        }
        break;

      case "AccountName":
        if (value.trim() === "") {
          error = "AccountName is required";
        } else if (value.length < 5) {
          error = "AccountName must be at least 5 characters long";
        } else if (!/^[a-zA-Z]+$/.test(value)) {
          error = "AccountName can only contain letters";
        }
        break;

      case "AccountNumber":
        if (value.trim() === "") {
          error = "AccountNumber is required";
        } else if (value.length < 5) {
          error = "AccountNumber must be at least 5 characters long";
        } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
          error =
            "AccountNumber can only contain letters, numbers, and underscores";
        }
        break;

      case "BankAccountMangersName":
        if (value.length > 0) {
          if (value.length < 5) {
            error =
              "Bank Account Mangers Name must be at least 5 characters long";
          } else if (!/^[a-zA-Z]+$/.test(value)) {
            error = "Bank Account Mangers Name can only contain letters";
          }
        }

        break;
      case "CorrespondentBankName":
        if (value.length > 0) {
          if (value.length < 5) {
            error =
              "Correspondent Bank Name must be at least 5 characters long";
          } else if (!/[a-zA-Z]/.test(value)) {
            error = "Correspondent Bank Name must contain at least one letter";
          }  else if (!/^[a-zA-Z0-9_\s]+$/.test(value)) {
            error =
              "Correspondent Bank Name can only contain letters, numbers, and underscores";
          }
        }

        break;

      case "BankCountry":
        if (value.trim() === "") {
          error = "Bank Country is required";
        } else if (value.length < 5) {
          error = "Bank Country must be at least 5 characters long";
        } else if (!/^[a-zA-Z]+$/.test(value)) {
          error = "Bank Country can only contain letters";
        }
        break;
      case "SwiftCode":
        if (value.trim() === "") {
          error = "SwiftCode is required";
        } else if (value.length < 5) {
          error = "SwiftCode must be at least 5 characters long";
        } else if (!/[a-zA-Z]/.test(value)) {
          error = "SwiftCode must contain at least one letter";
        } else if (!/\d/.test(value)) {
          error = "SwiftCode must contain at least one number";
        } else if (!/^[a-zA-Z0-9_\s]+$/.test(value)) {
          error =
            "SwiftCode can only contain letters, numbers, and underscores";
        }
        break;
      case "AccountCurrency":
        if (value.trim() === "") {
          error = "Account Currency is required";
        } else if (value.length < 5) {
          error = "Account Currency must be at least 3 characters long";
        } else if (!/^[a-zA-Z]+$/.test(value)) {
          error = "Account Currency can only contain letters";
        }
        break;
      case "IBAN":
        if (value.trim() === "") {
          error = "IBAN/ABA is required";
        } else if (value.length < 9) {
          error = "IBAN/ABA must be at least 9 characters long";
        } else if (!/[a-zA-Z]/.test(value)) {
          error = "IBAN/ABA must contain at least one letter";
        } else if (!/\d/.test(value)) {
          error = "IBAN/ABA must contain at least one number";
        } else if (!/^[a-zA-Z0-9_\s]+$/.test(value)) {
          error = "IBAN/ABA can only contain letters, numbers, and underscores";
        }
        break;

      case "BankAccountManagersContactDetails":
        if (value.length > 0) {
          if (value.length < 10) {
            error =
              "Bank Account Managers Contact Details must be at least 10 characters long";
          }
        }

        break;
      case "CorrespondentBankSwiftCode":
        if (value.length > 0) {
          if (value.length < 8) {
            error =
              "Correspondent Bank SwiftCode must be at least 8 characters long";
          } else if (!/[a-zA-Z]/.test(value)) {
            error =
              "Correspondent Bank SwiftCode must contain at least one letter";
          } else if (!/\d/.test(value)) {
            error =
              "Correspondent Bank SwiftCode must contain at least one number";
          } else if (!/^[a-zA-Z0-9_\s]+$/.test(value)) {
            error =
              "Correspondent Bank SwiftCode can only contain letters, numbers, and underscores";
          }
        }

        break;
      case "PrimaryContactName":
        if (value.trim() === "") {
          error = "Primary Contact Name is required";
        } else if (value.length < 3) {
          error = "Primary Contact Name must be at least 5 characters long";
        } else if (!/^[a-zA-Z]+$/.test(value)) {
          error = "Primary Contac tName can only contain letters";
        }
        break;

      case "PrimaryContactDesignation":
        if (value.trim() === "") {
          error = " Designation is required";
        } else if (value.length < 3) {
          error = "Designation must be at least 5 characters long";
        } else if (!/^[a-zA-Z]+$/.test(value)) {
          error = "Designation can only contain letters";
        }
        break;
      case "PrimaryContactEmail":
        if (value.trim() === "") {
          error = " email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(value)) {
          error = "Invalid email address";
        }
        break;

      case "PrimaryContactPhone":
        if (value.trim() === "") {
          error = "Invalid";
        } else if (value.length < 10) {
          error = "Contact Number must be at least 10 characters long";
        }
        break;
      case "OperationDepartmentName":
        if (value.trim() === "") {
          error = "Name is required";
        } else if (value.length < 5) {
          error = "Name must be at least 5 characters long";
        } else if (!/^[a-zA-Z]+$/.test(value)) {
          error = "Name can only contain letters";
        }
        break;
      case "OperationDepartmentDesignation":
        if (value.trim() === "") {
          error = " Designation is required";
        } else if (value.length < 2) {
          error = "Designation must be at least 2 characters long";
        } else if (!/^[a-zA-Z]+$/.test(value)) {
          error = "Designation can only contain letters";
        }
        break;

      case "OperationDepartMentPhone":
        if (value.trim() === "") {
          error = "Invalid";
        } else if (value.length < 10) {
          error = "Contact Number must be at least 10 characters long";
        }
        break;
      case "OperationDepartmentEmail":
        if (value.trim() === "") {
          error = " email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(value)) {
          error = "Invalid email address";
        }
        break;

      case "CreditNAME":
        if (value.trim() === "") {
          error = "Name is required";
        } else if (value.length < 5) {
          error = "Name must be at least 5 characters long";
        } else if (!/^[a-zA-Z]+$/.test(value)) {
          error = "Name can only contain letters";
        }
        break;

      case "CreditDesignation":
        if (value.trim() === "") {
          error = "Designation is required";
        } else if (value.length < 5) {
          error = "Designation must be at least 5 characters long";
        } else if (!/^[a-zA-Z]+$/.test(value)) {
          error = "Designation can only contain letters";
        }
        break;

      case "CreditPhone":
        if (value.trim() === "") {
          error = "Invalid";
        } else if (value.length < 10) {
          error = "Contact Number must be at least 10 characters long";
        }
        break;
      case "CreditEmail":
        if (value.trim() === "") {
          error = " email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(value)) {
          error = "Invalid email address";
        }
        break;
      case "AccountDepartName":
        if (value.trim() === "") {
          error = "Name is required";
        } else if (value.length < 5) {
          error = "Name must be at least 5 characters long";
        } else if (!/^[a-zA-Z]+$/.test(value)) {
          error = "Name can only contain letters";
        }

        break;

      case "AcoountDepartDesignation":
        if (value.trim() === "") {
          error = "Designation is required";
        } else if (value.length < 5) {
          error = "Designation must be at least 5 characters long";
        } else if (!/^[a-zA-Z]+$/.test(value)) {
          error = "Designation can only contain letters";
        }
        break;

      case "AccountDepartmentPhone":
        if (value.trim() === "") {
          error = "Invalid";
        } else if (value.length < 10) {
          error = "Contact Number must be at least 10 characters long";
        }
        break;

      case "AccountDepartmentEmail":
        if (value.trim() === "") {
          error = " email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(value)) {
          error = "Invalid email address";
        }
        break;

      case "ProposedBusiness":
        if (value.trim() === "") {
          error = "Designation is required";
        } else if (value.length < 5) {
          error = "Proposed Business must be at least 5 characters long";
        } else if (!/^[a-zA-Z]+$/.test(value)) {
          error = "Proposed Business can only contain letters";
        }
        break;
      case "ContactPerson":
        if (value.trim() === "") {
          error = "Contact Person is required";
        } else if (value.length < 5) {
          error = "Contact Person must be at least 5 characters long";
        } else if (!/^[a-zA-Z]+$/.test(value)) {
          error = "Contact Person  can only contain letters";
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
    // for (const field in Formvalues) {
    //   // console.log(Formvalues)
    //   if ( !newErrors[field]) {
    //     newErrors[field] = "This field is required";
    //     hasErrors = true;
    //   }
    // }

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
                    type="number"
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
                  <input
                    type="text"
                    name="countryOfIncorporation"
                    value={Formvalues.countryOfIncorporation}
                    onChange={handlChange}
                    onFocus={() => handleFocus("countryOfIncorporation")}
                  />

                  {formErrors.countryOfIncorporation && (
                    <div className="error">
                      {formErrors.countryOfIncorporation}
                    </div>
                  )}
                </div>
                <div>
                  <label>Company Registration No </label>
                  <input
                    type="text"
                    name="companyRegistrationNumber"
                    value={Formvalues.companyRegistrationNumber}
                    onChange={handlChange}
                    onFocus={() => handleFocus("companyRegistrationNumber")}
                  />

                  {formErrors.companyRegistrationNumber && (
                    <div className="error">
                      {formErrors.companyRegistrationNumber}
                    </div>
                  )}
                </div>
                <div>
                  <label>Trade License Expiry Date</label>
                  <input
                    type="date"
                    name="TradeLicenseExpiryData"
                    value={Formvalues.TradeLicenseExpiryData}
                    onChange={handlChange}
                    onFocus={() => handleFocus("TradeLicenseExpiryData")}
                  />

                  {formErrors.TradeLicenseExpiryData && (
                    <div className="error">
                      {formErrors.TradeLicenseExpiryData}
                    </div>
                  )}
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
                  <input
                    type="date"
                    name="DateOfIncorporation"
                    value={Formvalues.DateOfIncorporation}
                    onChange={handlChange}
                    onFocus={() => handleFocus("DateOfIncorporation")}
                  />

                  {formErrors.DateOfIncorporation && (
                    <div className="error">
                      {formErrors.DateOfIncorporation}
                    </div>
                  )}
                </div>
                <div>
                  <label>Trade License Number</label>
                  <input
                    type="text"
                    name="TradeLicenseNumber"
                    value={Formvalues.TradeLicenseNumber}
                    onChange={handlChange}
                    onFocus={() => handleFocus("TradeLicenseNumber")}
                  />

                  {formErrors.TradeLicenseNumber && (
                    <div className="error">{formErrors.TradeLicenseNumber}</div>
                  )}
                </div>
                <div>
                  <label>VAT Registration Number</label>
                  <input
                    type="text"
                    name="VAT"
                    value={Formvalues.VAT}
                    onChange={handlChange}
                    onFocus={() => handleFocus("VAT")}
                  />

                  {formErrors.VAT && (
                    <div className="error">{formErrors.VAT}</div>
                  )}
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
                  <input
                    type="text"
                    name="BankName"
                    value={Formvalues.BankName}
                    onChange={handlChange}
                    onFocus={() => handleFocus("BankName")}
                  />
                  {formErrors.BankName && (
                    <div className="error">{formErrors.BankName}</div>
                  )}
                </div>
                <div>
                  <label>Bank Branch Address</label>
                  <input
                    type="text"
                    value={Formvalues.BankBranchAddress}
                    name="BankBranchAddress"
                    onChange={handlChange}
                    onFocus={() => handleFocus("BankBranchAddress")}
                  />
                  {formErrors.BankBranchAddress && (
                    <div className="error">{formErrors.BankBranchAddress}</div>
                  )}
                </div>
                <div>
                  <label>Account Name </label>
                  <input
                    type="text"
                    value={Formvalues.AccountName}
                    name="AccountName"
                    onChange={handlChange}
                    onFocus={() => handleFocus("AccountName")}
                  />

                  {formErrors.AccountName && (
                    <div className="error">{formErrors.AccountName}</div>
                  )}
                </div>
                <div>
                  <label>Account Number </label>
                  <input
                    type="text"
                    value={Formvalues.AccountNumber}
                    name="AccountNumber"
                    onChange={handlChange}
                    onFocus={() => handleFocus("AccountNumber")}
                  />
                  {formErrors.AccountNumber && (
                    <div className="error">{formErrors.AccountNumber}</div>
                  )}
                </div>
                <div>
                  <label>Bank Account Manager's Name</label>
                  <input
                    type="text"
                    value={Formvalues.BankAccountMangersName}
                    name="BankAccountMangersName"
                    onChange={handlChange}
                    onFocus={() => handleFocus("BankAccountMangersName")}
                  />
                  {formErrors.BankAccountMangersName && (
                    <div className="error">
                      {formErrors.BankAccountMangersName}
                    </div>
                  )}
                </div>
                <div>
                  <label>Correspondent Bank Name</label>
                  <input
                    type="text"
                    value={Formvalues.CorrespondentBankName}
                    name="CorrespondentBankName"
                    onChange={handlChange}
                    onFocus={() => handleFocus("CorrespondentBankName")}
                  />

                  {formErrors.CorrespondentBankName && (
                    <div className="error">
                      {formErrors.CorrespondentBankName}
                    </div>
                  )}
                </div>
              </div>
              <div className="flexItem2">
                <div>
                  <label>Bank Country</label>
                  <input
                    type="text"
                    value={Formvalues.BankCountry}
                    name="BankCountry"
                    onChange={handlChange}
                    onFocus={() => handleFocus("BankCountry")}
                  />
                  {formErrors.BankCountry && (
                    <div className="error">{formErrors.BankCountry}</div>
                  )}
                </div>
                <div>
                  <label>Swift Code</label>
                  <input
                    type="text"
                    value={Formvalues.SwiftCode}
                    name="SwiftCode"
                    onChange={handlChange}
                    onFocus={() => handleFocus("SwiftCode")}
                  />

                  {formErrors.SwiftCode && (
                    <div className="error">{formErrors.SwiftCode}</div>
                  )}
                </div>
                <div>
                  <label>Account Currency</label>
                  <input
                    type="text"
                    value={Formvalues.AccountCurrency}
                    name="AccountCurrency"
                    onChange={handlChange}
                    onFocus={() => handleFocus("SwiftCode")}
                  />
                  {formErrors.AccountCurrency && (
                    <div className="error">{formErrors.AccountCurrency}</div>
                  )}
                </div>
                <div>
                  <label>IBAN/ABA</label>
                  <input
                    type="text"
                    name="IBAN"
                    value={Formvalues.IBAN}
                    onChange={handlChange}
                    onFocus={() => handleFocus("IBAN")}
                  />
                  {formErrors.IBAN && (
                    <div className="error">{formErrors.IBAN}</div>
                  )}
                </div>
                <div>
                  <label>Bank Account Manager's Contact Details</label>
                  <input
                    type="number"
                    value={Formvalues.BankAccountManagersContactDetails}
                    onChange={handlChange}
                    name="BankAccountManagersContactDetails"
                    onFocus={() =>
                      handleFocus("BankAccountManagersContactDetails")
                    }
                  />

                  {formErrors.BankAccountManagersContactDetails && (
                    <div className="error">
                      {formErrors.BankAccountManagersContactDetails}
                    </div>
                  )}
                </div>

                <div>
                  <label> Correspondent Bank SWIFT Code</label>
                  <input
                    type="text"
                    value={Formvalues.CorrespondentBankSwiftCode}
                    name="CorrespondentBankSwiftCode"
                    onChange={handlChange}
                    onFocus={() =>
                      handleFocus("BankAccountManagersContactDetails")
                    }
                  />

                  {formErrors.CorrespondentBankSwiftCode && (
                    <div className="error">
                      {formErrors.CorrespondentBankSwiftCode}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* ShareHolders Section */}
          <div className="Infocontainer">
            <h3>SHAREHOLDERS</h3>
            <table
              style={{ width: "100%", textAlign: "center" }}
              cellPadding={20}
              cellSpacing={13}
            >
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
                  <input
                    type="text"
                    value={Formvalues.PrimaryContactName}
                    name="PrimaryContactName"
                    onChange={handlChange}
                    onFocus={() => handleFocus("PrimaryContactName")}
                  />
                  {formErrors.PrimaryContactName && (
                    <div className="error">{formErrors.PrimaryContactName}</div>
                  )}
                </div>
                <div>
                  <label>Designation</label>
                  <input
                    type="text"
                    value={Formvalues.PrimaryContactDesignation}
                    name="PrimaryContactDesignation"
                    onChange={handlChange}
                    onFocus={() => handleFocus("PrimaryContactDesignation")}
                  />
                  {formErrors.PrimaryContactDesignation && (
                    <div className="error">
                      {formErrors.PrimaryContactDesignation}
                    </div>
                  )}
                </div>
                <div>
                  <label>Phone</label>
                  <input
                    type="number"
                    name="PrimaryContactPhone"
                    value={Formvalues.PrimaryContactPhone}
                    onChange={handlChange}
                    onFocus={() => handleFocus("PrimaryContactPhone")}
                  />

                  {formErrors.PrimaryContactPhone && (
                    <div className="error">
                      {formErrors.PrimaryContactPhone}
                    </div>
                  )}
                </div>
                <div>
                  <label>Email Address </label>
                  <input
                    type="email"
                    value={Formvalues.PrimaryContactEmail}
                    name="PrimaryContactEmail"
                    onChange={handlChange}
                    onFocus={() => handleFocus("PrimaryContactEmail")}
                  />
                  {formErrors.PrimaryContactEmail && (
                    <div className="error">
                      {formErrors.PrimaryContactEmail}
                    </div>
                  )}
                </div>
              </div>
              <div className="flexItem2">
                <h5>Operations Department Contact Details</h5>
                <div>
                  <label>Name</label>
                  <input
                    type="text"
                    value={Formvalues.OperationDepartmentName}
                    name="OperationDepartmentName"
                    onChange={handlChange}
                    onFocus={() => handleFocus("OperationDepartmentName")}
                  />
                  {formErrors.OperationDepartmentName && (
                    <div className="error">
                      {formErrors.OperationDepartmentName}
                    </div>
                  )}
                </div>
                <div>
                  <label>Designation</label>
                  <input
                    type="text"
                    value={Formvalues.OperationDepartmentDesignation}
                    name="OperationDepartmentDesignation"
                    onChange={handlChange}
                    onFocus={() =>
                      handleFocus("OperationDepartmentDesignation")
                    }
                  />
                  {formErrors.OperationDepartmentDesignation && (
                    <div className="error">
                      {formErrors.OperationDepartmentDesignation}
                    </div>
                  )}
                </div>
                <div>
                  <label>Phone</label>
                  <input
                    type="number"
                    value={Formvalues.OperationDepartMentPhone}
                    name="OperationDepartMentPhone"
                    onChange={handlChange}
                    onFocus={() => handleFocus("OperationDepartMentPhone")}
                  />

                  {formErrors.OperationDepartMentPhone && (
                    <div className="error">
                      {formErrors.OperationDepartMentPhone}
                    </div>
                  )}
                </div>
                <div>
                  <label>Email Address</label>
                  <input
                    type="email"
                    value={Formvalues.OperationDepartmentEmail}
                    name="OperationDepartmentEmail"
                    onChange={handlChange}
                    onFocus={() => handleFocus("OperationDepartmentEmail")}
                  />
                  {formErrors.OperationDepartmentEmail && (
                    <div className="error">
                      {formErrors.OperationDepartmentEmail}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="infoFlexContainer">
              <div className="flexItem1">
                <h5>Credit/Finance Contact Details</h5>
                <div>
                  <label>Name</label>
                  <input
                    type="text"
                    value={Formvalues.CreditNAME}
                    name="CreditNAME"
                    onChange={handlChange}
                    onFocus={() => handleFocus("CreditNAME")}
                  />
                  {formErrors.CreditNAME && (
                    <div className="error">{formErrors.CreditNAME}</div>
                  )}
                </div>
                <div>
                  <label>Designation</label>
                  <input
                    type="text"
                    value={Formvalues.CreditDesignation}
                    name="CreditDesignation"
                    onChange={handlChange}
                    onFocus={() => handleFocus("CreditDesignation")}
                  />

                  {formErrors.CreditDesignation && (
                    <div className="error">{formErrors.CreditDesignation}</div>
                  )}
                </div>
                <div>
                  <label>Phone</label>
                  <input
                    type="number"
                    value={Formvalues.CreditPhone}
                    name="CreditPhone"
                    onChange={handlChange}
                    onFocus={() => handleFocus("CreditPhone")}
                  />
                  {formErrors.CreditPhone && (
                    <div className="error">{formErrors.CreditPhone}</div>
                  )}
                </div>
                <div>
                  <label>Email Address </label>
                  <input
                    type="email"
                    value={Formvalues.CreditEmail}
                    name="CreditEmail"
                    onChange={handlChange}
                    onFocus={() => handleFocus("CreditEmail")}
                  />
                  {formErrors.CreditEmail && (
                    <div className="error">{formErrors.CreditEmail}</div>
                  )}
                </div>
              </div>
              <div className="flexItem2">
                <h5>Accounting Department Contact Details</h5>
                <div>
                  <label>Name</label>
                  <input
                    type="text"
                    value={Formvalues.AccountDepartName}
                    name="AccountDepartName"
                    onChange={handlChange}
                    onFocus={() => handleFocus("AccountDepartName")}
                  />
                  {formErrors.AccountDepartName && (
                    <div className="error">{formErrors.AccountDepartName}</div>
                  )}
                </div>
                <div>
                  <label>Designation</label>
                  <input
                    type="text"
                    name="AcoountDepartDesignation"
                    value={Formvalues.AcoountDepartDesignation}
                    onChange={handlChange}
                    onFocus={() => handleFocus("AcoountDepartDesignation")}
                  />
                  {formErrors.AcoountDepartDesignation && (
                    <div className="error">
                      {formErrors.AcoountDepartDesignation}
                    </div>
                  )}
                </div>
                <div>
                  <label>Phone</label>
                  <input
                    type="number"
                    value={Formvalues.AccountDepartmentPhone}
                    name="AccountDepartmentPhone"
                    onChange={handlChange}
                    onFocus={() => handleFocus("AccountDepartmentPhone")}
                  />

                  {formErrors.AccountDepartmentPhone && (
                    <div className="error">
                      {formErrors.AccountDepartmentPhone}
                    </div>
                  )}
                </div>
                <div>
                  <label>Email Address</label>
                  <input
                    type="email"
                    value={Formvalues.AccountDepartmentEmail}
                    name="AccountDepartmentEmail"
                    onChange={handlChange}
                    onFocus={() => handleFocus("AccountDepartmentEmail")}
                  />
                  {formErrors.AccountDepartmentEmail && (
                    <div className="error">
                      {formErrors.AccountDepartmentEmail}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="proposedContainer">
              <label style={{ padding: "10px 25px" }}>
                What is the proposed business with Adam Energy FZE?
              </label>
              <input
                type="text"
                value={Formvalues.ProposedBusiness}
                name="ProposedBusiness"
                onChange={handlChange}
                onFocus={() => handleFocus("ProposedBusiness")}
              />
              {formErrors.ProposedBusiness && (
                <div className="error">{formErrors.ProposedBusiness}</div>
              )}
            </div>
            <div className="proposedContainer">
              <label style={{ padding: "10px 25px" }}>
                Who is your Contact Person in Adam Energy FZE?
              </label>
              <input
                type="text"
                value={Formvalues.ContactPerson}
                name="ContactPerson"
                onChange={handlChange}
                onFocus={() => handleFocus("ContactPerson")}
              />
              {formErrors.ContactPerson && (
                <div className="error">{formErrors.ContactPerson}</div>
              )}
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
          </div>
          <div className="submit-btn">
            <button>Submit</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default KYC;
