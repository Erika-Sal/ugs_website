import { useState } from "react";

const CompanySelector = () => {
  const [selectedCompany, setSelectedCompany] = useState("Microsoft");

  // Map for company images
  const companyImages = {
    Microsoft: "/microsoftDems.png",
    Apple: "/appleDems.png",
    Oracle: "/oracleDems.png",
  };

  // Handle selection change
  const handleCompanyChange = (e) => {
    setSelectedCompany(e.target.value);
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center",  }}>
      {/* Company titles */}


      {/* Dropdown menu */}
      <div>
        <select
          onChange={handleCompanyChange}
          value={selectedCompany}
          style={{
            padding: "10px",
            fontSize: "16px",
            borderRadius: "5px",

          }}
        >
          <option value="Microsoft">Microsoft</option>
          <option value="Apple">Apple</option>
          <option value="Oracle">Oracle</option>
        </select>
      </div>

      {/* Image display */}
      <div className="pieChart">
        <img
          src={companyImages[selectedCompany]}
          style={{ maxWidth: "50%", height: "auto" }}
          alt={selectedCompany}
        />
      </div>
    </div>
  );
};

export default CompanySelector;
