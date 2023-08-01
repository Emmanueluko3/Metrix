import React, { useState } from "react";
import "./index.css";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    // Add your search functionality here, like filtering data based on the searchQuery
  };

  return (
    <div className="search-bar">
      <svg className="search-icon" viewBox="0 0 24 24">
        <path d="M9.5,0C14.194,0,18,3.806,18,8.5c0,1.773-0.545,3.418-1.464,4.788l5.202,5.202c0.389,0.39,0.389,1.022,0,1.412 c-0.39,0.389-1.023,0.389-1.414,0l-5.202-5.202C11.918,17.455,10.273,18,8.5,18C3.806,18,0,14.194,0,9.5S3.806,1,8.5,1 C10.273,1,11.918,1.545,13.348,2.464l5.202-5.202c0.389-0.389,1.023-0.389,1.414,0c0.389,0.39,0.389,1.023,0,1.412L14.788,8.176 C13.418,9.095,11.773,9.5,10,9.5C8.928,9.5,7.896,9.295,6.951,8.951C6.34,9.687,5.389,10.129,4.345,10.337 C3.867,10.422,3.434,9.964,3.5,9.487c0.097-0.87,0.776-1.546,1.647-1.644C6.093,7.763,6.416,7.5,6.768,7.268 C6.562,6.454,6.86,5.613,7.476,5.099C7.55,5.021,7.633,4.972,7.736,4.966c0.05,0,0.096-0.022,0.144-0.033 c0.124-0.019,0.251-0.013,0.375,0.017c0.572,0.143,1.013,0.601,1.157,1.173C9.222,6.04,9.25,6.167,9.234,6.3 C9.23,6.328,9.226,6.355,9.223,6.383C9.179,6.669,9.39,6.933,9.676,6.976C10.131,7.046,10.563,7.348,10.804,7.758 c0.006,0.008,0.015,0.015,0.021,0.023C10.874,7.852,10.926,7.959,11,8.03c0.142,0.153,0.33,0.225,0.522,0.2 C11.801,8.212,11.94,7.982,12,7.71c0.038-0.224-0.049-0.447-0.219-0.608C11.542,7.045,11.056,6.999,10.641,7.171 C10.276,7.325,10.073,7.746,10.227,8.111c0.023,0.059,0.062,0.106,0.108,0.153c0.109,0.11,0.261,0.178,0.424,0.178 c0.065,0,0.13-0.013,0.193-0.04C11.944,8.286,12,8.197,12,8.096c0-0.008,0-0.015,0-0.023c-0.002-0.058-0.014-0.116-0.033-0.172 C11.949,7.825,11.991,7.768,12,7.71c0.02-0.124-0.052-0.246-0.166-0.328C11.635,7.267,11.289,7.315,11,7.484 c-0.314,0.176-0.472,0.554-0.347,0.902c0.032,0.108,0.079,0.212,0.139,0.311c0.027,0.049,0.05,0.1,0.071,0.151 c0.11,0.277,0.374,0.466,0.674,0.499c0.072,0.008,0.143,0.033,0.207,0.075c0.244,0.154,0.366,0.452,0.282,0.744 c-0.032,0.109-0.079,0.212-0.139,0.311c-0.027,0.049-0.05,0.1-0.071,0.151c-0.11,0.277-0.374,0.466-0.674,0.499 c-0.072,0.008-0.143,0.033-0.207,0.075c-0.039,0.026-0.074,0.057-0.107,0.086C11.167,10.89,11,11.118,11,11.361 c0,0.409,0.275,0.758,0.674,0.852c0.021,0.004,0.04,0.016,0.06,0.024c0.205,0.105,0.445,0.116,0.654,0.021 c0.055-0.025,0.112-0.045,0.166-0.073C12.927,12.131,13,12.014,13,11.889C13,11.832,12.993,11.777,12.984,11.724 C12.985,11.707,13,11.69,13,11.672c0-0.182-0.112-0.345-0.283-0.412C12.717,11.215,12.695,11.209,12.672,11.207z M8.5,14C5.467,14,3,11.533,3,8.5S5.467,3,8.5,3S14,5.467,14,8.5S11.533,14,8.5,14z" />
      </svg>
      <input
        className="search-input"
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
