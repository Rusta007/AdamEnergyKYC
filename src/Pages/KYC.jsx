import React from "react";
import KycHeader from "../Components/KycHeader";
import "../Style/KYC.css";
const KYC = () => {
  return (
    <>
      <KycHeader />

      {/* KYC FORM */}

      <div className="kycContainer">
        {/* Company Information Container */}

        <div className="Infocontainer">
          <h3>Company Information</h3>
          <div className="infoFlexContainer">
            <div className="flexItem1">
              <div>
                <label>Registered Company Name</label>
                <input type="text" />
              </div>
              <div>
                <label>Company Registered Address</label>
                <input type="text" />
              </div>
              <div>
                <label>Email Address</label>
                <input type="email" />
              </div>
              <div>
                <label>Corporate Domain Name</label>
                <input type="text" />
              </div>
            </div>
            <div className="flexItem2">
              <div>
                <label>Parent Company/Group Company</label>
                <input type="text" />
              </div>
              <div>
                <label>Contact Number</label>
                <input type="number" />
              </div>
              <div>
                <label>Company Website</label>
                <input type="email" />
              </div>
              <div>
                <label>Number of Employees</label>
                <input type="text" />
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
                <input type="text" />
              </div>
              <div>
                <label>Nature of Business</label>
                <input type="text" />
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
          <table style={{ width: "100%", textAlign: "center" }} cellPadding={20} cellSpacing={10}>
            <thead>
              <th>Name</th>
              <th>%</th>
              <th>Country</th>
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
            <label style={{padding: "10px 25px"}} >What is the proposed business with Adam Energy FZE?</label>
            <input />
          </div>
          <div  className="proposedContainer">
            <label style={{padding: "10px 25px"}}>What is the proposed business with Adam Energy FZE?</label>
            <input />
          </div>
        </div>

        {/* Trade Reference */}

        <div className="Infocontainer">
          <h3>Trade Reference</h3>
          <p style={{color:"#666666" , padding:"9px 25px"}} >Please provide Trade Reference details:</p>
          <table style={{ width: "100%", textAlign: "center" }}  cellSpacing={12}>
            <thead>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
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

        {/* UPLOAD KYC DOCUMENTS */}
        <div className="Infocontainer">
            <div className="uploadKyc-container">

            <h3>Upload Documents</h3>

<div>
  <label>1) Certificate of Incorporation </label>
  <input type="file" />
</div>

<div>
  <label>
    2) Memorandum/Article of Association and Shareholding Structure
    (Evidencing Ultimate Business Owners) signed by company authorized
    signatory, stamped. and documents supporting UBO's.{" "}
  </label>
  <input type="file" />
</div>

<div style={{ display: "inline-block" }}>
  <label>3) Trade License </label>
  <input type="file" />
</div>

<div style={{ float: "right" }}>
  <label>4) Tax Registration Certificate </label>
  <input type="file" />
</div>

<div>
  <label>5) Company Profile ( If Available) </label>
  <input type="file" />
</div>

<div>
  <label>6) Website URL </label>
  <input type="file" />
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

<div>
  <h4>Declaration</h4>
  <p>
    {" "}
    <input type="checkbox"></input> DECLARE THAT: - This application
    form was completed by me, a representative authorized to submit
    this form on behalf of the registered company. I do hereby declare
    that the information provided herein above and, in the documents,
    appended herewith is true and correct to the best of my knowledge
    and belief and nothing has been falsely stated or concealed
    therein. I understand that if the said information as given by me
    is proved to be false, then I will be held liable under the
    provisions of the applicable UAE Law.
  </p>
</div>
<div>
  <label>Authorized Signatory </label>
  <input type="file" />
</div>

<div>
  <label>Authorized Signatory </label>
  <input type="text" />
</div>


            </div>
         
        </div>
      </div>
    </>
  );
};

export default KYC;
