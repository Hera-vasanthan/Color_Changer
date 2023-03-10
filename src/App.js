import React from "react";
import "./styles.css";

const App = () => {
  const options = [
    {
      label: "Lime",
      value: "lime"
    },

    { label: "Lavender", value: "lavender" },

    {
      label: "Crimson",
      value: "crimson"
    },

    { label: "Darkblue", value: "darkblue" },

    { label: "Teal", value: "teal" }
  ];

  const [value, setValue] = React.useState("lime");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <h1 align="center">Color Changer</h1>
      <br />
      <select
        value={value}
        onChange={handleChange}
        style={{ backgroundColor: value, width: 200 }}
      >
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>

      <div
        style={{
          marginTop: 100,
          marginLeft: 200,
          width: 600,
          height: 200,
          backgroundColor: value
        }}
      />
    </div>
  );
};

export default App;
