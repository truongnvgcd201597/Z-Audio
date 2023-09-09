import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import "../assets/scss/AddMusic.scss";
import { Add, Image, MusicNoteTwoTone } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import { ThemeContext } from "../../api/Theme";
import musicDB from "../../db/music";

function AddMusic() {
  const { component, subTheme, theme } = useContext(ThemeContext);
  const [selected, setSelected] = useState(null);
  const fileRef = useRef();

  const previewInfo = [
    { label: "Music Cover", value: selected },
    { label: "Music Image", value: selected },
    { label: "Music Name", value: selected },
    { label: "Singer Name", value: selected },
    { label: "Language", value: selected },
  ];
  useEffect(() => {
    const selectImg = () => {
      fileRef.current.click();
    };

    fileRef.current.onchange = (e) => {
      setSelected(e.target.files[0].name);
    };
  }, []);
  const { id } = musicDB[musicDB.length - 1] + 1;
  return (
    <form style={component} className={"AddMusic"}>
      <div className="add-music-sub-container">
        <div className="d1">
          <Button className={`AddMusic ${component}`} variant={"contained"}>
            <Image
              titleAccess={"Select a music cover"}
              style={{ color: "#f0f0f0", width: "150px", height: "150px" }}
            />
          </Button>
          <input
            ref={fileRef}
            accept="image/*"
            type="file"
            hidden
            id={"music-img"}
          />
          <p>{selected}</p>
          <label htmlFor={"music-img"}>
            <Button
              onClick={() => {
                fileRef.current.click();
              }}
              style={{
                backgroundColor: subTheme,
                width: "200px",
                height: "200px",
              }}
              variant={"contained"}
            >
              <MusicNoteTwoTone
                titleAccess={"Select a music"}
                style={{ color: "#f0f0f0", width: "150px", height: "150px" }}
              />
            </Button>
          </label>
          <input accept="audio/*" hidden type="file" />
        </div>
        <div className="d2">
          <div>
            <input type="text" value={"ID: " + id} disabled />
            <input
              type="text"
              placeholder={"CurrentPlayingLarge Name"}
              id={"name"}
            />
            <input type="text" placeholder={"Singer Name"} id={"artist"} />
            <Button
              style={{ backgroundColor: theme }}
              variant={"contained"}
              endIcon={<Add />}
            >
              Add
            </Button>
          </div>
          <div className={"preview"}>
            <h3>Preview</h3>
            {previewInfo.map((info, index) => (
              <p key={index}>
                {info.label}: {info.value}
              </p>
            ))}
          </div>
        </div>
      </div>
    </form>
  );
}

export default AddMusic;
