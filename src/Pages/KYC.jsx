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
    BusinessStructure: "",
    otherStructure: "",
    NatureOfBusiness: "",
    otherBusiness: "",
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
      // Company Inforamtion Error Handling

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
        if (
          !/^\S+@\S+(\.com|\.net|\.org|\.info|\.biz|\.edu|\.gov|\.mil|\.int|\.us|\.uk|\.ca|\.au|\.de|\.jp|\.fr|\.in|\.cn|\.br|\.ae)$/.test(
            value
          )
        ) {
          error = "Invalid email address";
        }
        break;

      case "corporateDomainName":
        if (value.trim() === "") {
          error = "corporate DomainName is required";
        } else if (value.length < 5) {
          error = "Domain Name must be at least 5 characters long";
        } else if (
          !/^\S+(\.com|\.net|\.org|\.info|\.biz|\.edu|\.gov|\.mil|\.int|\.us|\.uk|\.ca|\.au|\.de|\.jp|\.fr|\.in|\.cn|\.br|\.ae)$/.test(
            value
          )
        ) {
          error = "Domain Name Invalid";
        }
        break;

      case "companyRegisteredAddress":
        if (value.trim() === "") {
          error = "company Registered Address is required";
        } else if (value.length < 5) {
          error = "Address Name must be at least 5 characters long";
        } else if (!/^[a-zA-Z0-9_\s]+$/.test(value)) {
          error = "Invalid";
        }
        break;
      case "ParentCompany":
        if (value.trim() === "") {
          error = "Parent Company is required";
        } else if (value.length < 5) {
          error = "Company Name must be at least 5 characters long";
        } else if (!/[a-zA-Z]/.test(value)) {
          error = "Parent Company must contain at least one letter";
        } else if (!/^[a-zA-Z0-9_\s]+$/.test(value)) {
          error = "Parent Company can only contain letters and numbers";
        }
        break;
      case "ContactNumber":
        if (value.trim() === "") {
          error = "Contact Number is required";
        } else if (value.length < 10) {
          error = "Contact Number must be at least 5 characters long";
        }

        break;

      case "companyWebsite":
        if (value.trim() === "") {
          error = "company Website is required";
        } else if (
          !/^www\.+[A-Za-z0-9]+(\.com|\.net|\.org|\.info|\.biz|\.edu|\.gov|\.mil|\.int|\.us|\.uk|\.ca|\.au|\.de|\.jp|\.fr|\.in|\.cn|\.br|\.ae)$/.test(
            value
          )
        ) {
          error = " Invalid";
        }
        break;
      case "NumberOfEmployees":
        if (value.trim() === "") {
          error = "Number of employees is required";
        } else if (value < 1) {
          error = "Number of employee cannnot be less than 1";
        }
        break;

      // Company Structure Error Hnadling

      case "otherStructure":
        if (Formvalues.BusinessStructure === "Others" && value.trim() === "") {
          error = "Required";
        } else if (
          Formvalues.BusinessStructure === "Others" &&
          value.length < 5
        ) {
          error = "Business Structure cannnot be less than 5";
        } else if (
          Formvalues.BusinessStructure === "Others" &&
          !/^[a-zA-Z]+$/.test(value)
        ) {
          error = "Business Structure contains only letter";
        }

        break;

      case "BusinessStructure":
        if (value.trim() === "") {
          error = "Business structure is required";
        }

        break;

      case "otherBusiness":
        if (Formvalues.NatureOfBusiness === "Others" && value.trim() === "") {
          error = "Required";
        } else if (
          Formvalues.NatureOfBusiness === "Others" &&
          value.length < 5
        ) {
          error = "Nature Of Business cannnot be less than 5";
        } else if (
          Formvalues.NatureOfBusiness === "Others" &&
          !/^[a-zA-Z]+$/.test(value)
        ) {
          error = "Nature Of Business contains only letter";
        }

        break;

      case "NatureOfBusiness":
        if (value.trim() === "") {
          error = "Nature Of Business is required";
        }

        break;

      case "countryOfIncorporation":
        if (value.trim() === "") {
          error = "country Of Incorporation is required";
        }
        break;

      case "companyRegistrationNumber":
        if (value.trim() === "") {
          error = "company Registration Number is required";
        } else if (value.length < 5) {
          error =
            "company Registration Number must be at least 5 characters long";
        } else if (!/^(?=.*[0-9])[a-zA-Z0-9]+$/.test(value)) {
          error =
            "registeredCompanyName can only contain letters, numbers, and underscores";
        }
        break;

      case "TradeLicenseExpiryData":
        const selectedDate = new Date(value);
        const currentDate = new Date();

        if (value.trim() === "" || selectedDate <= currentDate) {
          error = "Invalid Date";
        }
        // else if (selectedDate <= currentDate) {
        //   error = "Invalid Date";
        // }
        break;
      case "DateOfIncorporation":
        const DateOfIncorporation = new Date(value);
        const currentDateOfIncorporation = new Date();
        if (
          value.trim() === "" ||
          DateOfIncorporation >= currentDateOfIncorporation
        ) {
          error = "Invalid Date";
        }
        break;
      case "TradeLicenseNumber":
        if (value.trim() === "") {
          error = "Trade License Number is required";
        } else if (value.length < 5) {
          error = "Trade License Number must be at least 5 characters long";
        } else if (!/^(?=.*[0-9])[a-zA-Z0-9]+$/.test(value)) {
          error = "License Number can only contain letters and numbers";
        }
        break;

      case "VAT":
        if (value.length > 0) {
          if (value.length < 5) {
            error =
              "VAT Registration Number must be at least 5 characters long";
          } else if (!/^(?=.*[0-9])[a-zA-Z0-9]+$/.test(value)) {
            error = "VAT Number can only contain letters and numbers";
          }
        }

        break;

      // Bank Details Error Handling

      case "BankName":
        if (value.trim() === "") {
          error = "BankName is required";
        } else if (value.length < 2) {
          error = "BankName must be at least 2 characters long";
        } else if (!/[a-zA-Z]/.test(value)) {
          error = "BankName must contain at least one letter";
        } else if (!/^[a-zA-Z0-9_\s]+$/.test(value)) {
          error = "BankName can only contain letters, numbers, and underscores";
        }
        break;
      case "BankBranchAddress":
        if (value.trim() === "") {
          error = "BankBranchAddress is required";
        } else if (value.length < 5) {
          error = "BankBranchAddress must be at least 5 characters long";
        } else if (!/^[a-zA-Z0-9_\s]+$/.test(value)) {
          error = "Invalid";
        }
        break;

      case "AccountName":
        if (value.trim() === "") {
          error = "AccountName is required";
        } else if (value.length < 5) {
          error = "AccountName must be at least 5 characters long";
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
          error = "AccountName can only contain letters";
        }
        break;

      case "AccountNumber":
        if (value.trim() === "") {
          error = "AccountNumber is required";
        } else if (value.length < 5) {
          error = "AccountNumber must be at least 5 characters long";
        } else if (!/^(?=.*[0-9])[a-zA-Z0-9]+$/.test(value)) {
          error = "AccountNumber can only contain letters and numbers";
        }
        break;

      case "BankAccountMangersName":
        if (value.length > 0) {
          if (value.length < 5) {
            error =
              "Bank Account Mangers Name must be at least 5 characters long";
          } else if (!/^[a-zA-Z\s]+$/.test(value)) {
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
          } else if (!/^[a-zA-Z0-9_\s]+$/.test(value)) {
            error =
              "Correspondent Bank Name can only contain letters and numbers";
          }
        }

        break;

      case "BankCountry":
        if (value.trim() === "") {
          error = "Bank Country is required";
        }
        break;
      case "SwiftCode":
        if (value.trim() === "") {
          error = "SwiftCode is required";
        } else if (value.length < 8) {
          error = "SwiftCode must be at least 8 characters long";
        } else if (!/[a-zA-Z]/.test(value)) {
          error = "SwiftCode must contain at least one letter";
        } else if (!/^[a-zA-Z0-9_\s]+$/.test(value)) {
          error = "SwiftCode can only contain letters and numbers";
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
          error = "IBAN/ABA can only contain letters and numbers";
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
            error = "SwiftCode must contain at least one letter";
          } else if (!/^[a-zA-Z0-9_\s]+$/.test(value)) {
            error = "SwiftCode can only contain letters and numbers";
          }
        }

        // Company Contact Details Error Handling

        break;
      case "PrimaryContactName":
        if (value.trim() === "") {
          error = "Primary Contact Name is required";
        } else if (value.length < 3) {
          error = "Primary Contact Name must be at least 5 characters long";
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
          error = "Primary Contac tName can only contain letters";
        }
        break;

      case "PrimaryContactDesignation":
        if (value.trim() === "") {
          error = " Designation is required";
        } else if (value.length < 3) {
          error = "Designation must be at least 5 characters long";
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
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
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
          error = "Name can only contain letters";
        }
        break;
      case "OperationDepartmentDesignation":
        if (value.trim() === "") {
          error = " Designation is required";
        } else if (value.length < 2) {
          error = "Designation must be at least 2 characters long";
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
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
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
          error = "Name can only contain letters";
        }
        break;

      case "CreditDesignation":
        if (value.trim() === "") {
          error = "Designation is required";
        } else if (value.length < 5) {
          error = "Designation must be at least 5 characters long";
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
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
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
          error = "Name can only contain letters";
        }

        break;

      case "AcoountDepartDesignation":
        if (value.trim() === "") {
          error = "Designation is required";
        } else if (value.length < 5) {
          error = "Designation must be at least 5 characters long";
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
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
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
          error = "Proposed Business can only contain letters";
        }
        break;
      case "ContactPerson":
        if (value.trim() === "") {
          error = "Contact Person is required";
        } else if (value.length < 5) {
          error = "Contact Person must be at least 5 characters long";
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
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

  useEffect(() => {
    if (Formvalues.BusinessStructure !== "Others") {
      setFormValues({
        ...Formvalues,
        otherStructure: "", // Reset inputText
        // error: "",
      });
    }
  }, [Formvalues.BusinessStructure]);

  useEffect(() => {
    if (Formvalues.NatureOfBusiness !== "Others") {
      setFormValues({
        ...Formvalues,
        otherBusiness: "", // Reset inputText
        // error: "",
      });
    }
  }, [Formvalues.NatureOfBusiness]);

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
              </div>
              <div className="flexItem2">
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
                  <label>Corporate Domain Name</label>
                  <input
                    type="text"
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
                  <select
                    name="BusinessStructure"
                    value={Formvalues.BusinessStructure}
                    onChange={handlChange}
                    onFocus={() => handleFocus("BusinessStructure")}
                  >
                    <option value="">Select</option>
                    <option value="Public Company">Public Company</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Private Company">Private Company</option>
                    <option value="Sole Propprietorship">
                      Sole Propprietorship
                    </option>
                    <option value="Others">Others</option>
                  </select>
                  {formErrors.BusinessStructure && (
                    <div className="error">{formErrors.BusinessStructure}</div>
                  )}
                </div>
                <div>
                  <label>If Other Structure (please specify)</label>
                  <input
                    type="text"
                    value={Formvalues.otherStructure}
                    name="otherStructure"
                    onChange={handlChange}
                    onFocus={() => handleFocus("otherStructure")}
                    disabled={Formvalues.BusinessStructure !== "Others"}
                  />
                  {formErrors.otherStructure && (
                    <div className="error">{formErrors.otherStructure}</div>
                  )}
                </div>
                <div>
                  <label>Nature of Business</label>
                  <select
                    name="NatureOfBusiness"
                    value={Formvalues.NatureOfBusiness}
                    onChange={handlChange}
                    onFocus={() => handleFocus("NatureOfBusiness")}
                  >
                    <option value="">Select</option>

                    <option value="Refining">Refining</option>
                    <option value="Trading">Trading</option>
                    <option value="Shipping"> Shipping </option>
                    <option value="Distribution">Distribution</option>
                    <option value="Storage">Storage</option>
                    <option value="Others">Others</option>
                  </select>
                  {formErrors.NatureOfBusiness && (
                    <div className="error">{formErrors.NatureOfBusiness}</div>
                  )}
                </div>
                <div>
                  <label>If Other Business (please specify)</label>
                  <input
                    type="text"
                    name="otherBusiness"
                    value={Formvalues.otherBusiness}
                    onChange={handlChange}
                    onFocus={() => handleFocus("otherBusiness")}
                    disabled={Formvalues.BusinessStructure !== "Others"}
                  />
                  {formErrors.otherBusiness && (
                    <div className="error">{formErrors.otherBusiness}</div>
                  )}
                </div>
                <div>
                  <label>Country of Incorporation </label>
                  <select
                    name="countryOfIncorporation"
                    value={Formvalues.countryOfIncorporation}
                    onChange={handlChange}
                    onFocus={() => handleFocus("countryOfIncorporation")}
                  >
                    <option value="">Select a country</option>
                    <option value="AF">Afghanistan</option>
                    <option value="AX">Aland Islands</option>
                    <option value="AL">Albania</option>
                    <option value="DZ">Algeria</option>
                    <option value="AS">American Samoa</option>
                    <option value="AD">Andorra</option>
                    <option value="AO">Angola</option>
                    <option value="AI">Anguilla</option>
                    <option value="AQ">Antarctica</option>
                    <option value="AG">Antigua and Barbuda</option>
                    <option value="AR">Argentina</option>
                    <option value="AM">Armenia</option>
                    <option value="AW">Aruba</option>
                    <option value="AU">Australia</option>
                    <option value="AT">Austria</option>
                    <option value="AZ">Azerbaijan</option>
                    <option value="BS">Bahamas</option>
                    <option value="BH">Bahrain</option>
                    <option value="BD">Bangladesh</option>
                    <option value="BB">Barbados</option>
                    <option value="BY">Belarus</option>
                    <option value="BE">Belgium</option>
                    <option value="BZ">Belize</option>
                    <option value="BJ">Benin</option>
                    <option value="BM">Bermuda</option>
                    <option value="BT">Bhutan</option>
                    <option value="BO">Bolivia</option>
                    <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                    <option value="BA">Bosnia and Herzegovina</option>
                    <option value="BW">Botswana</option>
                    <option value="BV">Bouvet Island</option>
                    <option value="BR">Brazil</option>
                    <option value="IO">British Indian Ocean Territory</option>
                    <option value="BN">Brunei Darussalam</option>
                    <option value="BG">Bulgaria</option>
                    <option value="BF">Burkina Faso</option>
                    <option value="BI">Burundi</option>
                    <option value="KH">Cambodia</option>
                    <option value="CM">Cameroon</option>
                    <option value="CA">Canada</option>
                    <option value="CV">Cape Verde</option>
                    <option value="KY">Cayman Islands</option>
                    <option value="CF">Central African Republic</option>
                    <option value="TD">Chad</option>
                    <option value="CL">Chile</option>
                    <option value="CN">China</option>
                    <option value="CX">Christmas Island</option>
                    <option value="CC">Cocos (Keeling) Islands</option>
                    <option value="CO">Colombia</option>
                    <option value="KM">Comoros</option>
                    <option value="CG">Congo</option>
                    <option value="CD">
                      Congo, The Democratic Republic of{" "}
                    </option>
                    <option value="CK">Cook Islands</option>
                    <option value="CR">Costa Rica</option>
                    <option value="CI">Cote d'Ivoire</option>
                    <option value="HR">Croatia</option>
                    <option value="CU">Cuba</option>
                    <option value="CW">Curaçao</option>
                    <option value="CY">Cyprus</option>
                    <option value="CZ">Czechia</option>
                    <option value="DK">Denmark</option>
                    <option value="DJ">Djibouti</option>
                    <option value="DM">Dominica</option>
                    <option value="DO">Dominican Republic</option>
                    <option value="EC">Ecuador</option>
                    <option value="EG">Egypt</option>
                    <option value="SV">El Salvador</option>
                    <option value="GQ">Equatorial Guinea</option>
                    <option value="ER">Eritrea</option>
                    <option value="EE">Estonia</option>
                    <option value="ET">Ethiopia</option>
                    <option value="FK">Falkland Islands (Malvinas)</option>
                    <option value="FO">Faroe Islands</option>
                    <option value="FJ">Fiji</option>
                    <option value="FI">Finland</option>
                    <option value="FR">France</option>
                    <option value="GF">French Guiana</option>
                    <option value="PF">French Polynesia</option>
                    <option value="TF">French Southern Territories</option>
                    <option value="GA">Gabon</option>
                    <option value="GM">Gambia</option>
                    <option value="GE">Georgia</option>
                    <option value="DE">Germany</option>
                    <option value="GH">Ghana</option>
                    <option value="GI">Gibraltar</option>
                    <option value="GR">Greece</option>
                    <option value="GL">Greenland</option>
                    <option value="GD">Grenada</option>
                    <option value="GP">Guadeloupe</option>
                    <option value="GU">Guam</option>
                    <option value="GT">Guatemala</option>
                    <option value="GG">Guernsey</option>
                    <option value="GN">Guinea</option>
                    <option value="GW">Guinea-Bissau</option>
                    <option value="GY">Guyana</option>
                    <option value="HT">Haiti</option>
                    <option value="HM">Heard and Mc Donald Islands</option>
                    <option value="VA">Holy See (Vatican City State)</option>
                    <option value="HN">Honduras</option>
                    <option value="HK">Hong Kong</option>
                    <option value="HU">Hungary</option>
                    <option value="IS">Iceland</option>
                    <option value="IN">India</option>
                    <option value="ID">Indonesia</option>
                    <option value="IR">Iran, Islamic Republic of</option>
                    <option value="IQ">Iraq</option>
                    <option value="IE">Ireland</option>
                    <option value="IM">Isle of Man</option>
                    <option value="IL">Israel</option>
                    <option value="IT">Italy</option>
                    <option value="JM">Jamaica</option>
                    <option value="JP">Japan</option>
                    <option value="JE">Jersey</option>
                    <option value="JO">Jordan</option>
                    <option value="KZ">Kazakstan</option>
                    <option value="KE">Kenya</option>
                    <option value="KI">Kiribati</option>
                    <option value="KP">
                      Korea, Democratic People's Republic of
                    </option>
                    <option value="KR">Korea, Republic of</option>
                    <option value="XK">Kosovo (temporary code)</option>
                    <option value="KW">Kuwait</option>
                    <option value="KG">Kyrgyzstan</option>
                    <option value="LA">
                      Lao, People's Democratic Republic
                    </option>
                    <option value="LV">Latvia</option>
                    <option value="LB">Lebanon</option>
                    <option value="LS">Lesotho</option>
                    <option value="LR">Liberia</option>
                    <option value="LY">Libyan Arab Jamahiriya</option>
                    <option value="LI">Liechtenstein</option>
                    <option value="LT">Lithuania</option>
                    <option value="LU">Luxembourg</option>
                    <option value="MO">Macao</option>
                    <option value="MK">
                      Macedonia, The Former Yugoslav Republic Of
                    </option>
                    <option value="MG">Madagascar</option>
                    <option value="MW">Malawi</option>
                    <option value="MY">Malaysia</option>
                    <option value="MV">Maldives</option>
                    <option value="ML">Mali</option>
                    <option value="MT">Malta</option>
                    <option value="MH">Marshall Islands</option>
                    <option value="MQ">Martinique</option>
                    <option value="MR">Mauritania</option>
                    <option value="MU">Mauritius</option>
                    <option value="YT">Mayotte</option>
                    <option value="MX">Mexico</option>
                    <option value="FM">Micronesia, Federated States of</option>
                    <option value="MD">Moldova, Republic of</option>
                    <option value="MC">Monaco</option>
                    <option value="MN">Mongolia</option>
                    <option value="ME">Montenegro</option>
                    <option value="MS">Montserrat</option>
                    <option value="MA">Morocco</option>
                    <option value="MZ">Mozambique</option>
                    <option value="MM">Myanmar</option>
                    <option value="NA">Namibia</option>
                    <option value="NR">Nauru</option>
                    <option value="NP">Nepal</option>
                    <option value="NL">Netherlands</option>
                    <option value="AN">Netherlands Antilles</option>
                    <option value="NC">New Caledonia</option>
                    <option value="NZ">New Zealand</option>
                    <option value="NI">Nicaragua</option>
                    <option value="NE">Niger</option>
                    <option value="NG">Nigeria</option>
                    <option value="NU">Niue</option>
                    <option value="NF">Norfolk Island</option>
                    <option value="MP">Northern Mariana Islands</option>
                    <option value="NO">Norway</option>
                    <option value="OM">Oman</option>
                    <option value="PK">Pakistan</option>
                    <option value="PW">Palau</option>
                    <option value="PS">Palestinian Territory, Occupied</option>
                    <option value="PA">Panama</option>
                    <option value="PG">Papua New Guinea</option>
                    <option value="PY">Paraguay</option>
                    <option value="PE">Peru</option>
                    <option value="PH">Philippines</option>
                    <option value="PN">Pitcairn</option>
                    <option value="PL">Poland</option>
                    <option value="PT">Portugal</option>
                    <option value="PR">Puerto Rico</option>
                    <option value="QA">Qatar</option>
                    <option value="RS">Republic of Serbia</option>
                    <option value="RE">Reunion</option>
                    <option value="RO">Romania</option>
                    <option value="RU">Russia Federation</option>
                    <option value="RW">Rwanda</option>
                    <option value="BL">Saint Barthélemy</option>
                    <option value="SH">Saint Helena</option>
                    <option value="KN">Saint Kitts & Nevis</option>
                    <option value="LC">Saint Lucia</option>
                    <option value="MF">Saint Martin</option>
                    <option value="PM">Saint Pierre and Miquelon</option>
                    <option value="VC">Saint Vincent and the Grenadines</option>
                    <option value="WS">Samoa</option>
                    <option value="SM">San Marino</option>
                    <option value="ST">Sao Tome and Principe</option>
                    <option value="SA">Saudi Arabia</option>
                    <option value="SN">Senegal</option>
                    <option value="CS">Serbia and Montenegro</option>
                    <option value="SC">Seychelles</option>
                    <option value="SL">Sierra Leone</option>
                    <option value="SG">Singapore</option>
                    <option value="SX">Sint Maarten</option>
                    <option value="SK">Slovakia</option>
                    <option value="SI">Slovenia</option>
                    <option value="SB">Solomon Islands</option>
                    <option value="SO">Somalia</option>
                    <option value="ZA">South Africa</option>
                    <option value="GS">
                      South Georgia & The South Sandwich Islands
                    </option>
                    <option value="SS">South Sudan</option>
                    <option value="ES">Spain</option>
                    <option value="LK">Sri Lanka</option>
                    <option value="SD">Sudan</option>
                    <option value="SR">Suriname</option>
                    <option value="SJ">Svalbard and Jan Mayen</option>
                    <option value="SZ">Swaziland</option>
                    <option value="SE">Sweden</option>
                    <option value="CH">Switzerland</option>
                    <option value="SY">Syrian Arab Republic</option>
                    <option value="TW">Taiwan, Province of China</option>
                    <option value="TJ">Tajikistan</option>
                    <option value="TZ">Tanzania, United Republic of</option>
                    <option value="TH">Thailand</option>
                    <option value="TL">Timor-Leste</option>
                    <option value="TG">Togo</option>
                    <option value="TK">Tokelau</option>
                    <option value="TO">Tonga</option>
                    <option value="TT">Trinidad and Tobago</option>
                    <option value="TN">Tunisia</option>
                    <option value="TR">Turkey</option>
                    <option value="XT">
                      Turkish Rep N Cyprus (temporary code)
                    </option>
                    <option value="TM">Turkmenistan</option>
                    <option value="TC">Turks and Caicos Islands</option>
                    <option value="TV">Tuvalu</option>
                    <option value="UG">Uganda</option>
                    <option value="UA">Ukraine</option>
                    <option value="AE">United Arab Emirates</option>
                    <option value="GB">United Kingdom</option>
                    <option value="US">United States</option>
                    <option value="UM">
                      United States Minor Outlying Islands
                    </option>
                    <option value="UY">Uruguay</option>
                    <option value="UZ">Uzbekistan</option>
                    <option value="VU">Vanuatu</option>
                    <option value="VE">Venezuela</option>
                    <option value="VN">Vietnam</option>
                    <option value="VG">Virgin Islands, British</option>
                    <option value="VI">Virgin Islands, U.S.</option>
                    <option value="WF">Wallis and Futuna</option>
                    <option value="EH">Western Sahara</option>
                    <option value="YE">Yemen</option>
                    <option value="ZM">Zambia</option>
                    <option value="ZW">Zimbabwe</option>
                  </select>

                  {formErrors.countryOfIncorporation && (
                    <div className="error">
                      {formErrors.countryOfIncorporation}
                    </div>
                  )}
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
              </div>
              <div className="flexItem2">
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
                  <select
                    type="text"
                    value={Formvalues.BankCountry}
                    name="BankCountry"
                    onChange={handlChange}
                    onFocus={() => handleFocus("BankCountry")}
                  >
                    <option value="">Select a country</option>
                    <option value="AF">Afghanistan</option>
                    <option value="AX">Aland Islands</option>
                    <option value="AL">Albania</option>
                    <option value="DZ">Algeria</option>
                    <option value="AS">American Samoa</option>
                    <option value="AD">Andorra</option>
                    <option value="AO">Angola</option>
                    <option value="AI">Anguilla</option>
                    <option value="AQ">Antarctica</option>
                    <option value="AG">Antigua and Barbuda</option>
                    <option value="AR">Argentina</option>
                    <option value="AM">Armenia</option>
                    <option value="AW">Aruba</option>
                    <option value="AU">Australia</option>
                    <option value="AT">Austria</option>
                    <option value="AZ">Azerbaijan</option>
                    <option value="BS">Bahamas</option>
                    <option value="BH">Bahrain</option>
                    <option value="BD">Bangladesh</option>
                    <option value="BB">Barbados</option>
                    <option value="BY">Belarus</option>
                    <option value="BE">Belgium</option>
                    <option value="BZ">Belize</option>
                    <option value="BJ">Benin</option>
                    <option value="BM">Bermuda</option>
                    <option value="BT">Bhutan</option>
                    <option value="BO">Bolivia</option>
                    <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                    <option value="BA">Bosnia and Herzegovina</option>
                    <option value="BW">Botswana</option>
                    <option value="BV">Bouvet Island</option>
                    <option value="BR">Brazil</option>
                    <option value="IO">British Indian Ocean Territory</option>
                    <option value="BN">Brunei Darussalam</option>
                    <option value="BG">Bulgaria</option>
                    <option value="BF">Burkina Faso</option>
                    <option value="BI">Burundi</option>
                    <option value="KH">Cambodia</option>
                    <option value="CM">Cameroon</option>
                    <option value="CA">Canada</option>
                    <option value="CV">Cape Verde</option>
                    <option value="KY">Cayman Islands</option>
                    <option value="CF">Central African Republic</option>
                    <option value="TD">Chad</option>
                    <option value="CL">Chile</option>
                    <option value="CN">China</option>
                    <option value="CX">Christmas Island</option>
                    <option value="CC">Cocos (Keeling) Islands</option>
                    <option value="CO">Colombia</option>
                    <option value="KM">Comoros</option>
                    <option value="CG">Congo</option>
                    <option value="CD">
                      Congo, The Democratic Republic of{" "}
                    </option>
                    <option value="CK">Cook Islands</option>
                    <option value="CR">Costa Rica</option>
                    <option value="CI">Cote d'Ivoire</option>
                    <option value="HR">Croatia</option>
                    <option value="CU">Cuba</option>
                    <option value="CW">Curaçao</option>
                    <option value="CY">Cyprus</option>
                    <option value="CZ">Czechia</option>
                    <option value="DK">Denmark</option>
                    <option value="DJ">Djibouti</option>
                    <option value="DM">Dominica</option>
                    <option value="DO">Dominican Republic</option>
                    <option value="EC">Ecuador</option>
                    <option value="EG">Egypt</option>
                    <option value="SV">El Salvador</option>
                    <option value="GQ">Equatorial Guinea</option>
                    <option value="ER">Eritrea</option>
                    <option value="EE">Estonia</option>
                    <option value="ET">Ethiopia</option>
                    <option value="FK">Falkland Islands (Malvinas)</option>
                    <option value="FO">Faroe Islands</option>
                    <option value="FJ">Fiji</option>
                    <option value="FI">Finland</option>
                    <option value="FR">France</option>
                    <option value="GF">French Guiana</option>
                    <option value="PF">French Polynesia</option>
                    <option value="TF">French Southern Territories</option>
                    <option value="GA">Gabon</option>
                    <option value="GM">Gambia</option>
                    <option value="GE">Georgia</option>
                    <option value="DE">Germany</option>
                    <option value="GH">Ghana</option>
                    <option value="GI">Gibraltar</option>
                    <option value="GR">Greece</option>
                    <option value="GL">Greenland</option>
                    <option value="GD">Grenada</option>
                    <option value="GP">Guadeloupe</option>
                    <option value="GU">Guam</option>
                    <option value="GT">Guatemala</option>
                    <option value="GG">Guernsey</option>
                    <option value="GN">Guinea</option>
                    <option value="GW">Guinea-Bissau</option>
                    <option value="GY">Guyana</option>
                    <option value="HT">Haiti</option>
                    <option value="HM">Heard and Mc Donald Islands</option>
                    <option value="VA">Holy See (Vatican City State)</option>
                    <option value="HN">Honduras</option>
                    <option value="HK">Hong Kong</option>
                    <option value="HU">Hungary</option>
                    <option value="IS">Iceland</option>
                    <option value="IN">India</option>
                    <option value="ID">Indonesia</option>
                    <option value="IR">Iran, Islamic Republic of</option>
                    <option value="IQ">Iraq</option>
                    <option value="IE">Ireland</option>
                    <option value="IM">Isle of Man</option>
                    <option value="IL">Israel</option>
                    <option value="IT">Italy</option>
                    <option value="JM">Jamaica</option>
                    <option value="JP">Japan</option>
                    <option value="JE">Jersey</option>
                    <option value="JO">Jordan</option>
                    <option value="KZ">Kazakstan</option>
                    <option value="KE">Kenya</option>
                    <option value="KI">Kiribati</option>
                    <option value="KP">
                      Korea, Democratic People's Republic of
                    </option>
                    <option value="KR">Korea, Republic of</option>
                    <option value="XK">Kosovo (temporary code)</option>
                    <option value="KW">Kuwait</option>
                    <option value="KG">Kyrgyzstan</option>
                    <option value="LA">
                      Lao, People's Democratic Republic
                    </option>
                    <option value="LV">Latvia</option>
                    <option value="LB">Lebanon</option>
                    <option value="LS">Lesotho</option>
                    <option value="LR">Liberia</option>
                    <option value="LY">Libyan Arab Jamahiriya</option>
                    <option value="LI">Liechtenstein</option>
                    <option value="LT">Lithuania</option>
                    <option value="LU">Luxembourg</option>
                    <option value="MO">Macao</option>
                    <option value="MK">
                      Macedonia, The Former Yugoslav Republic Of
                    </option>
                    <option value="MG">Madagascar</option>
                    <option value="MW">Malawi</option>
                    <option value="MY">Malaysia</option>
                    <option value="MV">Maldives</option>
                    <option value="ML">Mali</option>
                    <option value="MT">Malta</option>
                    <option value="MH">Marshall Islands</option>
                    <option value="MQ">Martinique</option>
                    <option value="MR">Mauritania</option>
                    <option value="MU">Mauritius</option>
                    <option value="YT">Mayotte</option>
                    <option value="MX">Mexico</option>
                    <option value="FM">Micronesia, Federated States of</option>
                    <option value="MD">Moldova, Republic of</option>
                    <option value="MC">Monaco</option>
                    <option value="MN">Mongolia</option>
                    <option value="ME">Montenegro</option>
                    <option value="MS">Montserrat</option>
                    <option value="MA">Morocco</option>
                    <option value="MZ">Mozambique</option>
                    <option value="MM">Myanmar</option>
                    <option value="NA">Namibia</option>
                    <option value="NR">Nauru</option>
                    <option value="NP">Nepal</option>
                    <option value="NL">Netherlands</option>
                    <option value="AN">Netherlands Antilles</option>
                    <option value="NC">New Caledonia</option>
                    <option value="NZ">New Zealand</option>
                    <option value="NI">Nicaragua</option>
                    <option value="NE">Niger</option>
                    <option value="NG">Nigeria</option>
                    <option value="NU">Niue</option>
                    <option value="NF">Norfolk Island</option>
                    <option value="MP">Northern Mariana Islands</option>
                    <option value="NO">Norway</option>
                    <option value="OM">Oman</option>
                    <option value="PK">Pakistan</option>
                    <option value="PW">Palau</option>
                    <option value="PS">Palestinian Territory, Occupied</option>
                    <option value="PA">Panama</option>
                    <option value="PG">Papua New Guinea</option>
                    <option value="PY">Paraguay</option>
                    <option value="PE">Peru</option>
                    <option value="PH">Philippines</option>
                    <option value="PN">Pitcairn</option>
                    <option value="PL">Poland</option>
                    <option value="PT">Portugal</option>
                    <option value="PR">Puerto Rico</option>
                    <option value="QA">Qatar</option>
                    <option value="RS">Republic of Serbia</option>
                    <option value="RE">Reunion</option>
                    <option value="RO">Romania</option>
                    <option value="RU">Russia Federation</option>
                    <option value="RW">Rwanda</option>
                    <option value="BL">Saint Barthélemy</option>
                    <option value="SH">Saint Helena</option>
                    <option value="KN">Saint Kitts & Nevis</option>
                    <option value="LC">Saint Lucia</option>
                    <option value="MF">Saint Martin</option>
                    <option value="PM">Saint Pierre and Miquelon</option>
                    <option value="VC">Saint Vincent and the Grenadines</option>
                    <option value="WS">Samoa</option>
                    <option value="SM">San Marino</option>
                    <option value="ST">Sao Tome and Principe</option>
                    <option value="SA">Saudi Arabia</option>
                    <option value="SN">Senegal</option>
                    <option value="CS">Serbia and Montenegro</option>
                    <option value="SC">Seychelles</option>
                    <option value="SL">Sierra Leone</option>
                    <option value="SG">Singapore</option>
                    <option value="SX">Sint Maarten</option>
                    <option value="SK">Slovakia</option>
                    <option value="SI">Slovenia</option>
                    <option value="SB">Solomon Islands</option>
                    <option value="SO">Somalia</option>
                    <option value="ZA">South Africa</option>
                    <option value="GS">
                      South Georgia & The South Sandwich Islands
                    </option>
                    <option value="SS">South Sudan</option>
                    <option value="ES">Spain</option>
                    <option value="LK">Sri Lanka</option>
                    <option value="SD">Sudan</option>
                    <option value="SR">Suriname</option>
                    <option value="SJ">Svalbard and Jan Mayen</option>
                    <option value="SZ">Swaziland</option>
                    <option value="SE">Sweden</option>
                    <option value="CH">Switzerland</option>
                    <option value="SY">Syrian Arab Republic</option>
                    <option value="TW">Taiwan, Province of China</option>
                    <option value="TJ">Tajikistan</option>
                    <option value="TZ">Tanzania, United Republic of</option>
                    <option value="TH">Thailand</option>
                    <option value="TL">Timor-Leste</option>
                    <option value="TG">Togo</option>
                    <option value="TK">Tokelau</option>
                    <option value="TO">Tonga</option>
                    <option value="TT">Trinidad and Tobago</option>
                    <option value="TN">Tunisia</option>
                    <option value="TR">Turkey</option>
                    <option value="XT">
                      Turkish Rep N Cyprus (temporary code)
                    </option>
                    <option value="TM">Turkmenistan</option>
                    <option value="TC">Turks and Caicos Islands</option>
                    <option value="TV">Tuvalu</option>
                    <option value="UG">Uganda</option>
                    <option value="UA">Ukraine</option>
                    <option value="AE">United Arab Emirates</option>
                    <option value="GB">United Kingdom</option>
                    <option value="US">United States</option>
                    <option value="UM">
                      United States Minor Outlying Islands
                    </option>
                    <option value="UY">Uruguay</option>
                    <option value="UZ">Uzbekistan</option>
                    <option value="VU">Vanuatu</option>
                    <option value="VE">Venezuela</option>
                    <option value="VN">Vietnam</option>
                    <option value="VG">Virgin Islands, British</option>
                    <option value="VI">Virgin Islands, U.S.</option>
                    <option value="WF">Wallis and Futuna</option>
                    <option value="EH">Western Sahara</option>
                    <option value="YE">Yemen</option>
                    <option value="ZM">Zambia</option>
                    <option value="ZW">Zimbabwe</option>
                  </select>
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

          <div className="CompanyContactDetailContainer">
            <h3>Company Conatact Details </h3>
            <div className="CompanyContactFlexContainer">
              <div>
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
              <div>
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

            <div className="CompanyContactFlexContainer">
              <div>
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
              <div>
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
                style={{ width: "96%" }}
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
                style={{ width: "96%" }}
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
