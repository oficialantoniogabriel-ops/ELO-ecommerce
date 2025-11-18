import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  return (
    <select
      onChange={(e) => i18n.changeLanguage(e.target.value)}
      className="border p-2 rounded text-sm bg-white dark:bg-gray-800"
    >
      <option value="pt">PT</option>
      <option value="en">EN</option>
    </select>
  );
};

export default LanguageSelector;
