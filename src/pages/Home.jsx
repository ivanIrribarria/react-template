import { CssBaseline } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <CssBaseline />
      <main>
        <h1>{t("title")}</h1>
        <span>{t("label")} </span>
      </main>
    </>
  );
}
