import React, { useEffect, useState } from "react";
import "../Components/PassGenStyle.css";
import Checkbox from "@mui/material/Checkbox";
import CopyImage from "../assets/copy.png";
import { green } from "@mui/material/colors";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Button } from "@mui/material";

const PassGenComp = () => {
  const [initialval, setinitialval] = useState(10);
  const [password, setpassword] = useState("");
  /* const [uppercaseoption, setuppercaseoption] = useState(true);
  const [lowercaseoption, setlowercaseoption] = useState(true);
  const [numberoption, setnumberoption] = useState(true);
  const [specialcaseoption, setspecialcaseoption] = useState(true); */

  //Instead managing indiviual state, managing them in object
  const [options, setOptions] = useState({
    upparCase: true,
    lowerCase: true,
    numbers: true,
    specialCharcter: true,
  });
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const handleChange = (e) => {
    setinitialval(e.target.value);
  };

  useEffect(() => {
    handlePasswordGeneration();
  }, [
    initialval,
    options.upparCase,
    options.lowerCase,
    options.specialCharcter,
    options.numbers,
  ]);

  const handlePasswordGeneration = () => {
    let copypassword = "";

    let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerCase = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let specialChar = "@#$%^()_+~|}{[]></-=";
    let allChar = upperCase + lowerCase + numbers + specialChar;

    copypassword += upperCase[Math.floor(Math.random() * upperCase.length)];
    copypassword += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    copypassword += numbers[Math.floor(Math.random() * numbers.length)];
    copypassword += specialChar[Math.floor(Math.random() * specialChar.length)];

    if (
      options.upparCase &&
      options.lowerCase &&
      options.numbers &&
      options.specialCharcter
    ) {
      copypassword = "";
      allChar = upperCase + lowerCase + numbers + specialChar;
      console.log("All checkboxes are checked.");
    } else if (
      options.upparCase &&
      options.lowerCase &&
      options.numbers &&
      !options.specialCharcter
    ) {
      copypassword = "";
      allChar = upperCase + lowerCase + numbers;
      console.log("Uppercase, Lowercase, and Number options are checked.");
    } else if (
      options.upparCase &&
      options.lowerCase &&
      !options.numbers &&
      options.specialCharcter
    ) {
      copypassword = "";
      allChar = upperCase + lowerCase + specialChar;
      console.log(
        "Uppercase, Lowercase, and Special Case options are checked."
      );
    } else if (
      options.upparCase &&
      options.lowerCase &&
      !options.numbers &&
      !options.specialCharcter
    ) {
      copypassword = "";
      allChar = upperCase + lowerCase;
      console.log("Uppercase and Lowercase options are checked.");
    } else if (
      options.upparCase &&
      !options.lowerCase &&
      options.numbers &&
      options.specialCharcter
    ) {
      copypassword = "";
      allChar = upperCase + numbers + specialChar;
      console.log("Uppercase, Number, and Special Case options are checked.");
    } else if (
      options.upparCase &&
      !options.lowerCase &&
      options.numbers &&
      !options.specialCharcter
    ) {
      copypassword = "";
      allChar = upperCase + numbers;
      console.log("Uppercase and Number options are checked.");
    } else if (
      options.upparCase &&
      !options.lowerCase &&
      !options.numbers &&
      options.specialCharcter
    ) {
      copypassword = "";
      allChar = upperCase + specialChar;
      console.log("Uppercase and Special Case options are checked.");
    } else if (
      options.upparCase &&
      !options.lowerCase &&
      !options.numbers &&
      !options.specialCharcter
    ) {
      copypassword = "";
      allChar = upperCase;
      console.log("Only Uppercase option is checked.");
    } else if (
      !options.upparCase &&
      options.lowerCase &&
      options.numbers &&
      options.specialCharcter
    ) {
      copypassword = "";
      allChar = lowerCase + numbers + specialChar;
      console.log("Lowercase, Number, and Special Case options are checked.");
    } else if (
      !options.upparCase &&
      options.lowerCase &&
      options.numbers &&
      !options.specialCharcter
    ) {
      copypassword = "";
      allChar = lowerCase + numbers;
      console.log("Lowercase and Number options are checked.");
    } else if (
      !options.upparCase &&
      options.lowerCase &&
      !options.numbers &&
      options.specialCharcter
    ) {
      copypassword = "";
      allChar = lowerCase + specialChar;
      console.log("Lowercase and Special Case options are checked.");
    } else if (
      !options.upparCase &&
      options.lowerCase &&
      !options.numbers &&
      !options.specialCharcter
    ) {
      copypassword = "";
      allChar = lowerCase;
      console.log("Only Lowercase option is checked.");
    } else if (
      !options.upparCase &&
      !options.lowerCase &&
      options.numbers &&
      options.specialCharcter
    ) {
      copypassword = "";
      allChar = numbers + specialChar;
      console.log("Number and Special Case options are checked.");
    } else if (
      !options.upparCase &&
      !options.lowerCase &&
      options.numbers &&
      !options.specialCharcter
    ) {
      copypassword = "";
      allChar = numbers;
      console.log("Only Number option is checked.");
    } else if (
      !options.upparCase &&
      !options.lowerCase &&
      !options.numbers &&
      options.specialCharcter
    ) {
      copypassword = "";
      allChar = specialChar;
      console.log("Only Special Case option is checked.");
    } else {
      console.log("No options are checked.");
    }

    // upper copypassword fetches first 4 digit char later below while condition fetches paswrd of remaining length.
    while (copypassword.length < initialval) {
      copypassword += allChar[Math.floor(Math.random() * allChar.length)];
    }

    // Shuffle the password to ensure random order
    copypassword = copypassword
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("");

    setpassword((prevPassword) => copypassword);
  };

  const copyPassword = () => {
    if (password === "") {
      return;
    } else {
      navigator.clipboard.writeText(password).then(() => {
        // alert("Password copied to clipboard!")
      });
    }
  };

  const handleOptions = (option) => {
    setOptions((prevOptions) => {
      const updatedOptions = {
        ...prevOptions,
        [option]: !prevOptions[option],
      };

      // Check if at least one option is still selected
      const selectedCount =
        Object.values(updatedOptions).filter(Boolean).length;

      if (selectedCount === 0) {
        // If no options are selected, don't update the state
        return prevOptions;
      } else {
        // Update the state with the new options
        return updatedOptions;
      }
    });
  };

  return (
    <div className="maindiv">
      <h2>Generate a</h2>
      <h1>Random Password</h1>
      <div className="lengthgiver">
        <Box sx={{ width: 200 }}>
          <Slider
            id="slider"
            defaultValue={20}
            sx={{
              color: green[600],
              width: 200,
              height: 7,
            }}
            min={10}
            max={24}
            value={initialval}
            onChange={handleChange}
          />
        </Box>
        <input
          type="number"
          min={10}
          max={24}
          id="number"
          value={initialval}
          onChange={handleChange}
        />
      </div>

      <div className="content">
        <input type="text" id="inputext" readOnly value={password} />
        <button id="copy-text" onClick={copyPassword}>
          <img src={CopyImage} alt="" />
        </button>
      </div>
      <Button id="generate" onClick={handlePasswordGeneration}>
        Generate Password
      </Button>

      <div className="optionclass">
        <label className="checbox_label">
          <span>UpperCase</span>
          <Checkbox
            {...label}
            checked={options.upparCase}
            // onClick={() => setuppercaseoption(!uppercaseoption)}
            onChange={() => handleOptions("upparCase")}
            sx={{
              color: green[600],
              "& .MuiSvgIcon-root": { fontSize: 28 },
              "&.Mui-checked": {
                color: green[600],
              },
            }}
          />
        </label>

        <label className="checbox_label">
          <span>LowerCase</span>
          <Checkbox
            {...label}
            checked={options.lowerCase}
            // onClick={() => setlowercaseoption(!lowercaseoption)}
            onChange={() => handleOptions("lowerCase")}
            sx={{
              color: green[600],
              "& .MuiSvgIcon-root": { fontSize: 28 },
              "&.Mui-checked": {
                color: green[600],
              },
            }}
          />
        </label>

        <label className="checbox_label">
          <span>Numbers</span>
          <Checkbox
            {...label}
            checked={options.numbers}
            // onClick={() => setnumberoption(!numberoption)}
            onChange={() => handleOptions("numbers")}
            sx={{
              color: green[600],
              "& .MuiSvgIcon-root": { fontSize: 28 },
              "&.Mui-checked": {
                color: green[600],
              },
            }}
          />
        </label>

        <label className="checbox_label">
          <span>Special Character</span>
          <Checkbox
            {...label}
            checked={options.specialCharcter}
            // onClick={() => setspecialcaseoption(!specialcaseoption)}
            onChange={() => handleOptions("specialCharcter")}
            sx={{
              color: green[600],
              "& .MuiSvgIcon-root": { fontSize: 28 },
              "&.Mui-checked": {
                color: green[600],
              },
            }}
          />
        </label>
      </div>
    </div>
  );
};

export default PassGenComp;
