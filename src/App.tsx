import * as React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Divider,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import Dashboard from "./pages/Dashboard";

const drawerWidth = 240;

const navigationItems = [
  { type: "header", title: "Main items" },
  {
    type: "item",
    to: "/dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  { type: "item", to: "/orders", title: "Orders", icon: <ShoppingCartIcon /> },
  { type: "divider" },
  { type: "header", title: "Analytics" },
  {
    type: "item",
    to: "/reports",
    title: "Reports",
    icon: <BarChartIcon />,
    children: [
      {
        type: "item",
        to: "/reports/sales",
        title: "Sales",
        icon: <DescriptionIcon />,
      },
      {
        type: "item",
        to: "/reports/traffic",
        title: "Traffic",
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    type: "item",
    to: "/integrations",
    title: "Integrations",
    icon: <LayersIcon />,
  },
];

function DashboardContent({ pathname }: { pathname: string }) {
  return (
    <Box
      sx={{
        p: 3,
        border: "1px solid grey",
        borderRadius: 2,
        textAlign: "center",
        flexGrow: 1,
        bgcolor: "background.paper",
      }}
    >
      <Typography variant="h5" gutterBottom>
        Dashboard content for {pathname}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Aquí puedes mostrar el contenido dinámico correspondiente a la ruta.
      </Typography>
    </Box>
  );
}

function NavigationList() {
  return (
    <List>
      {navigationItems.map((item, index) => {
        if (item.type === "header") {
          return (
            <Typography
              key={index}
              variant="overline"
              sx={{ pl: 2, pt: 2, pb: 1, color: "text.secondary" }}
            >
              {item.title}
            </Typography>
          );
        }
        if (item.type === "divider") {
          return <Divider key={index} sx={{ my: 1 }} />;
        }
        if (item.type === "item" && !item.children) {
          return (
            <ListItem button key={index} component={Link} to={item.to}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItem>
          );
        }
        if (item.type === "item" && item.children) {
          return (
            <Box key={index} sx={{ pl: 1 }}>
              <ListItem>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItem>
              <List component="div" disablePadding>
                {item.children.map((child, i) => (
                  <ListItem
                    button
                    key={i}
                    component={Link}
                    to={child.to}
                    sx={{ pl: 4 }}
                  >
                    <ListItemIcon>{child.icon}</ListItemIcon>
                    <ListItemText primary={child.title} />
                  </ListItem>
                ))}
              </List>
            </Box>
          );
        }
        return null;
      })}
    </List>
  );
}

const theme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <Drawer
            variant="permanent"
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
          >
            <Toolbar>
              <Typography variant="h6" noWrap component="div">
                Mi Dashboard
              </Typography>
            </Toolbar>
            <Divider />
            <NavigationList />
          </Drawer>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              bgcolor: "background.default",
              p: 3,
              minHeight: "100vh",
            }}
          >
            <Toolbar />
            <Routes>
              <Route
                path="/"
                element={<DashboardContent pathname="/dashboard" />}
              />
              <Route
                path="/dashboard"
                element={<Dashboard pathname="/dashboard" />}
              />
              <Route
                path="/orders"
                element={<DashboardContent pathname="/orders" />}
              />
              <Route
                path="/reports"
                element={<DashboardContent pathname="/reports" />}
              />
              <Route
                path="/reports/sales"
                element={<DashboardContent pathname="/reports/sales" />}
              />
              <Route
                path="/reports/traffic"
                element={<DashboardContent pathname="/reports/traffic" />}
              />
              <Route
                path="/integrations"
                element={<DashboardContent pathname="/integrations" />}
              />
              <Route
                path="*"
                element={<Typography>No se encontró la página</Typography>}
              />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}
