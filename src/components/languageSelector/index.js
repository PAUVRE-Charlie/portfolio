import { h } from 'preact';
import { useContext } from 'react';

import { languageOptions } from '../../assets/data/languages';
import { LanguageContext } from '../language';

export default () => {
    const { userLanguage, userLanguageChange } = useContext(LanguageContext);

    // set selected language by calling context method
    const handleLanguageChange = e => userLanguageChange(e.target.value);

    return (
      <select
        onChange={handleLanguageChange}
        value={userLanguage}
        style={{ cursor: "pointer" }}
      >
        {Object.entries(languageOptions).map(([id, name]) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>
    );
};