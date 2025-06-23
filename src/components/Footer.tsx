import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
      {"Copyright © "}
      <Link color="text.secondary" href="https://google.com/">
        Santa Elena
      </Link>
      &nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
}

const Footer = () => {
  return (
    <>
      <div
        style={{
          border: "1px solid blue",
          position: "fixed",
          width: "100%",
          bottom: "0",
        }}
      >
        <Divider />
        <footer>
          <p>Footer Ejemplo</p>
          <Copyright></Copyright>
        </footer>
      </div>
    </>
  );
};

export default Footer;
