import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Selector({
  onChange,
  currState,
  fieldNames,
  fieldValues,
  type,
}) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel
          id="demo-simple-select-helper-label"
          className="text-secondary"
        >
          {type}
        </InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={currState}
          label={type}
          onChange={handleChange}
        >
          <MenuItem value={currState}>
            <em>
              {fieldValues.forEach((item, i) => {
                if (currState === item) {
                  return fieldNames[i];
                }
              })}
            </em>
          </MenuItem>
          {fieldNames.map((item, i) => (
            <MenuItem key={item} value={fieldValues[i]} className="text-accent">
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
