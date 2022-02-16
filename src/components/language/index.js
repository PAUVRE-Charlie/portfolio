import { h } from "preact";
import { useState, createContext, useContext } from "react";

import { languageOptions, dictionaryList } from "../../assets/data/languages";

// create the language context with default selected language
export const LanguageContext = createContext({
  userLanguage: "en",
  dictionary: dictionaryList.en,
});

// it provides the language context to app
export const LanguageProvider = ({ children }) => {
  // const defaultLanguage = (typeof window !== "undefined") ? window.localStorage.getItem('rcml-lang') : 'en'
  const [userLanguage, setUserLanguage] = useState("en");

  const provider = {
    userLanguage,
    dictionary: dictionaryList[userLanguage],
    userLanguageChange: (selected) => {
      const newLanguage = languageOptions[selected] ? selected : "en";
      setUserLanguage(newLanguage);
      window.localStorage.setItem("rcml-lang", newLanguage);
    },
  };

  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
};

// get text according to id & current language
export function Text({ id }) {
  const languageContext = useContext(LanguageContext);
  let text = languageContext.dictionary;
  for (let str of id.split(".")) {
    if (text) text = text[str];
  }
  return text || id;
}
