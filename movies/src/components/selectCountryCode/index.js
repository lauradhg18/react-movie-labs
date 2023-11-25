import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";



const formControl = 
  {
    margin: 1,
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)"
  };

 

  export default function MultipleSelect( props) {

   // console.log("select",providers)
   // console.log("selectCoun",countryCodes.countryCodes)
   // console.log("selectprov",countryCodes.providers)
    
  
 
   const handleChange = (e, type, value) => {
     e.preventDefault();
     props.onUserInput(type, value); // NEW
   };
 

   const handleCountryCodeChange = (e) => {
     handleChange(e, "countryCode", e.target.value);
   };
  
/*
    const [selectCountryCode, setCountryCode] = useState([]);
    const [providersList, setProvidersList] = useState([]);
    const [currentValue, setCurrentValue] = useState('');
  

   
    const handleChange = (event) => {
      const { target: { value }, } = event;
      setCurrentValue(value[0]);
      setCountryCode(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );

    };

    //setProvidersList(countryCodes.providers.currentValue);


    console.log(currentValue)
   
    console.log(countryCodes.providers.AL)
    
*/

    return (
      <Card 
      sx={{
        maxWidth: 345,
        backgroundColor: "rgb(204, 153, 255)"
      }} 
      variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Select
        </Typography>
        <FormControl sx={{...formControl}}>
          <InputLabel id="country-label">Country</InputLabel>
          <Select
            labelId="country-label"
            id="country-select"
            defaultValue=""
            value={props.countryCodeFilter}
            onChange={handleCountryCodeChange}
          >
            {props.countryCodes.map((cd) => {
              return (
                <MenuItem key={cd.cd} value={cd.cd}>
                  {cd.cd}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </CardContent>
      
    </Card>

      );
    }