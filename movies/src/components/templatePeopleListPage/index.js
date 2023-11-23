import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterPeopleCard";
import PeopleList from "../peopleList";
import Grid from "@mui/material/Grid";

function PeopleListPageTemplate({ people, title }) {
  const [nameFilter, setNameFilter] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("All");
  const departmentId = String(departmentFilter);
  
  let displayedPeople = people
    .filter((p) => {
      return p.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((p) => {
      return departmentId !== "All" ? p.known_for_department.includes(departmentId) : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setDepartmentFilter(value);
  };

  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            departmentFilter={departmentFilter}
            />
            </Grid>
            <PeopleList  people={displayedPeople}></PeopleList>
          </Grid>
        </Grid>
      );
    }
    export default PeopleListPageTemplate;