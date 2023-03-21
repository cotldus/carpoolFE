import React from "react";
import Image from 'next/image'

import * as countryFlagIcons from "country-flag-icons";

const CountryCodeMenuItem = ({ country, countryAbrv, countryCode }: { country:string; countryAbrv:string; countryCode:string }) => {
  let icon;
  if (countryFlagIcons.hasFlag(countryAbrv)) {
    icon = (
      <Image
      width={24}
      height={24}
        src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${countryAbrv}.svg`}
        alt={`${country} flag`}
      />
    );
  }

  return (
    <React.Fragment>
      <div
        style={{ display: "inline-flex", alignItems: "center", paddingRight: "4px" }}
        data-country-code={`+${countryCode}`}
        className="flag"
      >
        {icon}
      </div>
      {` +${countryCode}`}
    </React.Fragment>
  );
};

export default CountryCodeMenuItem;
