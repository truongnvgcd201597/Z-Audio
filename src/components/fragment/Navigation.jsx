import React, { useContext, useState } from "react";
import "../assets/scss/Navigation.scss";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import SearchBar from "./SearchBar";
import Brand from "./Brand";
import DropDownProfile from "./DropDownProfile";
import { Avatar, Button } from "@material-ui/core";
import { ThemeContext } from "../../api/Theme";

function Navigation() {
  const [isLanguageListOpen, setLangList] = useState(false);
  const [isOpenProfile, setOpenProfile] = useState(false);

  function handleOpenLanguageList() {
    if (isOpenProfile === true) setOpenProfile(!isOpenProfile);
    setLangList(!isLanguageListOpen);
  }

  function handleOpenProfile() {
    if (isLanguageListOpen === true) setLangList(!isLanguageListOpen);
    setOpenProfile(!isOpenProfile);
  }
  const useStyle = useContext(ThemeContext);
  return (
    <nav style={useStyle.component}>
      <Brand />
      <div className={"navigation"}></div>
      <SearchBar />
      <div className={"language"} onClick={handleOpenLanguageList}></div>
      <div className="profile" onClick={handleOpenProfile}>
        <Button
          className={"Dropdown-btn"}
          startIcon={
            <Avatar style={{ width: "30px", height: "30px", padding: "18px" }}>
              Name
            </Avatar>
          }
          endIcon={isOpenProfile ? <ExpandMoreIcon /> : <ExpandLessIcon />}
        ></Button>
        {isOpenProfile && <DropDownProfile />}
      </div>
    </nav>
  );
}

export default Navigation;
