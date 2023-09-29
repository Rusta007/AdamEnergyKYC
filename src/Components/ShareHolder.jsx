import React, { useState } from "react";

const countries = [
  "Select Country",
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina	",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso	",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic	",
  "Chad",
  "Chile",
  "China",
  "Colombia	",
  "Comoros",
  "Congo (Congo-Brazzaville)	",
  "Costa Rica	",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Denmark	",
  "Djibouti	",
  "Dominica",
  "Dominican Republic	",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea	",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau	",
  "Guyana",
  "Haiti",
  "Holy See	",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar ",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand	",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea	",
  "North Macedonia	",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine State	",
  "Panama	",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis	",
  "Saint Lucia	",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino	",
  "Sao Tome and Principe	",
  "Saudi Arabia	",
  "Senegal",
  "Serbia	",
  "Seychelles",
  "Sierra Leone	",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa	",
  "South Korea",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste	",
  "Togo",
  "Tonga",
  "Trinidad and Tobago	",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates	",
  "United Kingdom",
  "United States of America	",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe"
  // Add more countries here...
];

function ShareHolder({ handleSubmit,formErrors }) {
  const [data, setData] = useState([
    { name: "", percentage: "", country: "Select Country" },
  ]);
  const [errors, setErrors] = useState([]);
  const [totalPercentageError, setTotalPercentageError] = useState("");

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedData = [...data];
    updatedData[index][name] = value;
    setData(updatedData);
  };

  const handleAddRow = (e) => {
    e.preventDefault();
    const newErrors = [...errors];

    // Check if the fields in the new row are empty
    const newRow = data[data.length - 1];
    if (newRow.name.trim() === "") {
      newErrors.push({
        index: data.length - 1,
        field: "name",
        message: "Name is required",
      });
    }
    if (newRow.percentage.trim() === "") {
      newErrors.push({
        index: data.length - 1,
        field: "percentage",
        message: "Percentage is required",
      });
    }
    if (newRow.country === "Select Country") {
      newErrors.push({
        index: data.length - 1,
        field: "country",
        message: "Country is required",
      });
    }

    setErrors(newErrors);

    if (newErrors.length === 0) {
      // Proceed to add a new row
      setData([
        ...data,
        { name: "", percentage: "", country: "Select Country" },
      ]);
    }
  };

  const handleRemoveRow = (index) => {
    if (data.length > 1) {
      const updatedData = [...data];
      updatedData.splice(index, 1);
      setData(updatedData);
      setErrors((prevErrors) =>
        prevErrors.filter((error) => error.index !== index)
      );
    }
  };

  const ShareHolderSubmit = (e) => {
    e.preventDefault();

    const newErrors = [];
    let totalPercentage = 0;

    // Check if any rows have empty fields and calculate the total percentage
    data.forEach((row, index) => {
      if (row.name.trim() === "") {
        newErrors.push({ index, field: "name", message: "Name is required" });
      }
      if (row.percentage.trim() === "") {
        newErrors.push({
          index,
          field: "percentage",
          message: "Percentage is required",
        });
      }
      if (row.country === "Select Country") {
        newErrors.push({
          index,
          field: "country",
          message: "Country is required",
        });
      }

      // Parse the percentage as a number and add it to the total
      const parsedPercentage = parseFloat(row.percentage);
      if (!isNaN(parsedPercentage)) {
        totalPercentage += parsedPercentage;
      }
    });

    setErrors(newErrors);

    if (totalPercentage < 49 || totalPercentage > 100) {
      setTotalPercentageError("Total percentage must be between 49 and 100");
    } else {
      setTotalPercentageError("");

      if (newErrors.length === 0 && formErrors) {
        console.log(formErrors.length)
        // Proceed with submission
        console.log(data);
      }
    }
  };

  return (
    <div>
      <table style={{ width: "100%", textAlign: "center" }} cellSpacing={13} className="sharholderTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Percentage</th>
            <th>Country</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  name="name"
                  value={item.name}
                  onChange={(e) => handleInputChange(e, index)}
                />
                {errors.find(
                  (error) => error.index === index && error.field === "name"
                ) && <div className="error">Name is required</div>}
              </td>
              <td>
                <input
                  type="number"
                  name="percentage"
                  value={item.percentage}
                  onChange={(e) => handleInputChange(e, index)}
                />
                {errors.find(
                  (error) =>
                    error.index === index && error.field === "percentage"
                ) && <div className="error">Percentage is required</div>}
              </td>
              <td>
                <select
                  name="country"
                  value={item.country}
                  onChange={(e) => handleInputChange(e, index)}
                  className="sharholderCountry"
                >
                  {countries.map((country, i) => (
                    <option key={i} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
                {errors.find(
                  (error) => error.index === index && error.field === "country"
                ) && <div className="error">Country is required</div>}
              </td>
              <td>
                {index === 0 ? (
                  <button disabled className="RemoveButton">
                    Remove
                  </button>
                ) : (
                  <button
                    onClick={() => handleRemoveRow(index)}
                    className="RemoveButton"
                  >
                    Remove
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="addRemoveContainer">
        <button onClick={handleAddRow} className="addRemoveRowButton">
          Add Row
        </button>
        <button onClick={ShareHolderSubmit} className="addRemoveRowButton">
          Submit
        </button>
      </div>

      {totalPercentageError && (
        <div className="error">{totalPercentageError}</div>
      )}
    </div>
  );
}

export default ShareHolder;
