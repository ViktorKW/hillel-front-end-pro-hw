import {
  TextField,
  Button,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";

function Home() {
  return (
    <div className="Home">
      <ToggleButtonGroup color="primary" exclusive aria-label="Platform">
        <ToggleButton value="web">Web</ToggleButton>
        <ToggleButton value="android">Android</ToggleButton>
        <ToggleButton value="ios">iOS</ToggleButton>
      </ToggleButtonGroup>
      <div>
        <TextField id="standard-basic" label="Standard" variant="standard" />
        <Button variant="outlined">Material UI button</Button>
      </div>
    </div>
  );
}

export default Home;
