import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../constants/";
import {
  CssBaseline,
  FormControl,
  InputLabel,
  NativeSelect,
} from "@mui/material";
import React from "react";

export default function LanguageSelect(props) {
  const { i18n, t } = useTranslation();

  const onChangeLang = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <>
      <CssBaseline />
      <FormControl>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          {t('language')}
        </InputLabel>
        <NativeSelect
          defaultValue={i18n.language}
          onChange={onChangeLang}
          inputProps={{
            name: "Language",
            id: "uncontrolled-native",
          }}
        >
          {LANGUAGES.map(({ code, label }) => (
            <option key={code} value={code}>
              {label}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </>
  );
}
