import React, { useState } from "react";
import AppTitle from "../AppLayout/AppTitle";
import Browse from "../Browse";
import Search from "../Search";
import AlphabetFilter from "../AlphabetFilter";
import AppFooter from "../AppLayout/AppFooter";
import FilterResult from "../FilterResult";

function Providers() {
  const items = [
    { name: "Beth Israel Medical Center" },
    { name: "Beth Israel Medical Center Nephrology" },
    { name: "Beth Israel Medical Center Outpatient Radiology" },
    { name: "Beth Israel Pediatric Associates" },
    { name: "Beth Isreal Medical Center Head An" },
    { name: "Bimc Faculty Practice" },
    { name: "Cardio Vascular Institute of Mount Sinai" },
    { name: "Dermatology Department of Mount Sina" },
    { name: "Downtown Bronx Medical Associates" },
    { name: "Faculty Practice Associates" },
    { name: "General Medical Associates At Bimc" },
    { name: "Hospital Based" },
    { name: "Icahn School of Medicine At Mount Sinai" },
    { name: "Martha Stewart Center For Living" },
    { name: "Mount Sinai Beth Israel Addiction Medicine" },
    { name: "Mount Sinai Hospital" },
    { name: "Mount Sinai Union Square" },
    { name: "Mount Sinai Union Square Cancer Center" },
    { name: "MSK Guttman Diagnostic Center" },
    { name: "National Parkinson Foundation" },
    { name: "New York Hip And Knee" },
    { name: "NYC Health Hospitals" },
    { name: "OBGYN Department of Mount Sinai" },
    { name: "Rehabilitation Medicine Associates" },
    { name: "Rheumatology Division of Mount Sina" },
    { name: "South Shore Counseling And Psychological Services" },
    { name: "Starr Physical Therapy Chiropractic & Acupuncture" },
    { name: "Surgical Services of Bimc" },
    { name: "Union Square Medical Group" },
    { name: "Union Square Physical Therapy & Chiroprctic" },
  ];
  const states_US = [
    "All States",
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "District of Columbia",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const [selectedAlphabet, setSelectedAlphabet] = useState("All");
  return (
    <>
      {/* <AppHeader /> */}
      <AppTitle value={false} />
      <div style={{ backgroundColor: "#F5F5F5", width: "100%" }}>
        <Browse selectTab={1} />
        <Search data={states_US} />
        <AlphabetFilter
          alphabets={alphabets}
          setSelectedAlphabet={setSelectedAlphabet}
          selectedAlphabet={selectedAlphabet}
        />
      </div>
      <FilterResult items={items} selectedAlphabet={selectedAlphabet} />
      <AppFooter />
    </>
  );
}

export default Providers;
