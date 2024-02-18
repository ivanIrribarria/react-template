import { Button, CssBaseline } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <CssBaseline />
      <main style={{ flex: 1, flexDirection: "column", margin: 15 }}>
        <h1>{t("about")}</h1>
        <span>{t("user", { name: "Bruce Wayne 🦇" })}</span>
        <Button color="primary" variant="text" size="small">
          {t("default")}
        </Button>
      </main>
    </>
  );
}
