import { Typography } from "@mui/material";

export default function Dashboard({ pathname }: { pathname: string }) {
  return (
    <Typography variant="h4">Welcome to the Dashboard {pathname}</Typography>
  );
}
