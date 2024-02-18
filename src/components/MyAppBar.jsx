import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { NavLink } from "react-router-dom";
import LanguageSelect from "./LanguageSelect";
import { useTranslation } from "react-i18next";

function MyAppBar(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

MyAppBar.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function HideAppBar(props) {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <CssBaseline />
      <MyAppBar {...props}>
        <AppBar>
          <Toolbar
            style={{
              flexDirection: "row",
              flex: 1,
              gap: 10,
            }}
          >
            <NavLink
              to={"./"}
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <Typography variant="h6">{t("home")}</Typography>
            </NavLink>
            <NavLink
              to={"./about"}
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <Typography variant="h6">{t("about")}</Typography>
            </NavLink>
            <LanguageSelect />
          </Toolbar>
        </AppBar>
      </MyAppBar>
    </React.Fragment>
  );
}
