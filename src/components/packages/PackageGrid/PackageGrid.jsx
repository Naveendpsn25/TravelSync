import { Grid } from "@mui/material";
import PackageCard from "../PackageCard/PackageCard";
import "./PackageGrid.css";

function PackageGrid({ packages }) {
  return (
    <Grid container spacing={3}>
      {packages.map((travelPackage) => (
        <Grid
          key={travelPackage.id}
          size={{ xs: 12, sm: 6, lg: 4 }}
        >
          <PackageCard travelPackage={travelPackage} />
        </Grid>
      ))}
    </Grid>
  );
}

export default PackageGrid;