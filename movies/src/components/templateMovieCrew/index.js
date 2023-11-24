import React, {useState} from "react";
import Grid from "@mui/material/Grid";
import MovieCrewList from "../crewList";
import FilterCard from "../filterCrewCard";

function MovieCrewTemplate({credits}) { 
  
   const [nameFilter, setNameFilter] = useState("");
   const [departmentFilter, setDepartmentFilter] = useState("All");
   const departmentId = String(departmentFilter);
  
   let displayedCrew = credits
     .filter((c) => {
       return c.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
     })
     .filter((c) => {
       return departmentId !== "All" ? c.department.includes(departmentId) : true;
     });
 
   const handleChange = (type, value) => {
     if (type === "name") setNameFilter(value);
     else setDepartmentFilter(value);
   };
   console.log(displayedCrew)
      return (
         <Grid container sx={{ padding: '60px' }}>
            <Grid item container spacing={2}>  
              <Grid key="findcrew" item xs={12} sm={6} md={4} lg={10} xl={2}>
                  <FilterCard
                  onUserInput={handleChange}
                  titleFilter={nameFilter}
                  departmentFilter={departmentFilter}
                  />  
                  </Grid>
             <MovieCrewList credits={displayedCrew} ></MovieCrewList>
              </Grid>
           </Grid>
      );
   
};

export default MovieCrewTemplate;