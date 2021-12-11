import React, { useEffect, useState } from "react";

const FilterBar = ({ taskData, setFilterData }) => {
  const [filterredValue, setFilteredValue] = useState([]);
  const filteringData = (e) => {
    const filterValue = [];
    taskData?.forEach((single) => {
      if (single?.[e.target.value]) {
        filterValue.push(single?.[e.target.value]);
      }
      setFilteredValue(filterValue);
    });
  };
  const showFilteredData = (e) => {
    let value = e.target.value;
    const selectCategory = document.getElementById("topicname");
    const category = selectCategory.value;
    // console.log(value, category);
    const dataByFilter = taskData?.filter(
      (single) => single?.[category] == value
    );
    setFilterData(dataByFilter);
  };

  return (
    <div style={{ display: "flex" }}>
      <button
        style={{
          padding: "10px",
          marginRight: "5px",
          background: "#4D7C0F",
          color: "white",
          border: 0,
          borderRadius: "4px",
          fontSize: "15px",
        }}
        type="button"
      >
        <i
          className="fas fa-sort"
          style={{ marginRight: "5px", fontSize: "17px" }}
        ></i>
        Filtered By:
      </button>
      <select
        name="topicname"
        id="topicname"
        onChange={filteringData}
        style={{
          padding: "10px",
          marginRight: "5px",
          background: "#FDF2F8",
          border: "2px solid #fbcfe8",
          borderRadius: "4px",
          fontSize: "15px",
          outline: "none",
        }}
      >
        <option value="" disabled selected hidden>
          Choose a Category
        </option>
        <option value="end_year">End year</option>
        <option value="start_year">Start year</option>
        <option value="topic">Topic</option>
        <option value="intensity">Intensity</option>
        <option value="sector">sector </option>
        <option value="region">Region</option>
        <option value="pestle">Pestle</option>
        <option value="source">Source </option>
        <option value="country">Country</option>
        <option value="city">City</option>
      </select>
      <select
        name="categoryValue"
        id="categoryValue"
        onChange={showFilteredData}
        style={{
          padding: "10px",
          marginRight: "5px",
          background: "#E0E7FF",
          border: "2px solid #bbf7d0",
          borderRadius: "4px",
          fontSize: "15px",
          outline: "none",
        }}
      >
        <option value="" disabled selected hidden>
          Select Category First
        </option>
        {filterredValue?.map((single, index) => (
          <option key={index} value={single}>
            {single}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;
