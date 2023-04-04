import { ROUTES } from "@/constants";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { CSSObject, styled, Theme, useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { signOut } from "next-auth/react";
import Router, { useRouter } from "next/router";
import * as React from "react";
import en from "../locales/en-US";
import cn from "../locales/zh-CN";
import { GlobalToggles } from "./GlobalToggles";

enum NAVIGATE_TO {
  ADMIN = "admin",
  DRIVER = "driver",
  PASSENGER = "passenger",
}

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en-US" ? en : cn;
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const navigation = [
    { name: "Admin", icon: CalendarMonthIcon, href: ROUTES.ADMIN },
    {
      name: "Passengers",
      icon: EmojiPeopleIcon,
      href: ROUTES.PASSENGER,
    },
    {
      name: "Driver",
      icon: DriveEtaIcon,
      href: ROUTES.DRIVER,
    },
  ];

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{ background: "#000000", filter: "invert(65%)" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="overline" noWrap component="div">
            {navigation.find((item) => router.pathname === item.href)?.name}
          </Typography>
          <GlobalToggles/>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        sx={{ "& .MuiPaper-root": { position: "relative", height: "100vh" } }}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {navigation.map((item) => {
            const current = item.href === router.pathname;
            return (
              <ListItem
                key={item.name}
                disablePadding
                sx={{ display: "block" }}
              >
                <a key={item.name} href={item.href}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                    className={classNames(
                      current
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                      "group flex items-center rounded-md px-2 py-2 text-sm font-medium"
                    )}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <item.icon
                        className={classNames(
                          current
                            ? "text-gray-500"
                            : "text-gray-400 group-hover:text-gray-500",
                          "ml-3 h-6 w-6 flex-shrink-0"
                        )}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={item.name}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </a>
              </ListItem>
            );
          })}
        </List>
        <a
          key={"logout"}
          onClick={(e) => {
            e.preventDefault();
            signOut({ redirect: false });
            Router.push(ROUTES.LOGIN);
          }}
          className="absolute bottom-0"
        >
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
            className={classNames(
              "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
              "group flex items-center rounded-md px-2 py-2 text-sm font-medium"
            )}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <MeetingRoomIcon
                className={classNames(
                  "text-gray-400 group-hover:text-gray-500",
                  "ml-3 h-6 w-6 flex-shrink-0"
                )}
              />
            </ListItemIcon>
            <ListItemText primary={"Logout"} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </a>
      </Drawer>
    </>
  );
}
