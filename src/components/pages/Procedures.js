import React, { useState } from "react";
import AlphabetFilter from "../AlphabetFilter";
import Browse from "../Browse";
import Search from "../Search";
// import AppHeader from "../AppHeader";
import AppFooter from "../AppLayout/AppFooter";
import FilterResult from "../FilterResult";
import AppTitle from "../AppLayout/AppTitle";

const Procedures = () => {
  // const [header, setHeader] = React.useState(false);

  // React.useEffect(() => {
  //   const head = window.location.href.split("/")[3];

  //   if (head === "") {
  //     setHeader(true);
  //   } else {
  //     setHeader(false);
  //   }
  // }, []);

  const items = [
    {
      name: "Ambulatory continuous glucose monitoring of interstitial tissue fluid",
    },
    { name: "Arthrography, elbow" },
    { name: "Assistive technology (AT) assessment, each 15min" },
    { name: "Biopsy of parotid gland" },
    { name: "Blood test, hemoglobin fractionation" },
    { name: "Blood typing serology" },
    { name: "Bronchoscopy with airway aspiration" },
    { name: "Carina restruction" },
    { name: "Closure of left atrial appendage with cardiac implant" },
    { name: "Colposcopy of the cervix including upper/adjacent vagina" },
    { name: "CT, arm" },
    { name: "Cytopathology, smears" },
    { name: "Diagnostic cystoscopy with ureteroscopy and/or pyeloscopy" },
    { name: "Duplex scan, venous, lower extremity" },
    { name: "Emergency windpipe opening creation (tracheostomy)" },
    { name: "Exchange of drainage catheter" },
    { name: "Family psychotherapy, including patient, 50 min" },
    { name: "Flow cytometry, technical component" },
    { name: "Hepatitis B core antibody testing" },
    { name: "Hip replacement revision surgery" },
    { name: "Immunoassay for infection agent antibody" },
    { name: "Laparoscopic nephrectomy (removal of kidney)" },
    { name: "Ligation of major artery in abdomen" },
    { name: "Lip removal" },
    { name: "Pacemaker electrodes, insertion/replacement" },
    { name: "Patient office consultation" },
    { name: "Physical therapy, electrical stimulation" },
    { name: "Physical therapy, re-evaluation of established plan of care" },
    {
      name: "Programmed stimulation and pacing after intravenous drug infusion",
    },
    { name: "Removal of foreign body from vestibule of mouth" },
    { name: "Removal of oral/nasal fistula" },
    {
      name: "Removal of skin lesions (debridement) followed by subsequent photodynamic therapy, per day",
    },
    { name: "Removal of throat" },
    { name: "Removal of tooth socket" },
    { name: "Rotator cuff surgery (acromioplasty)" },
    { name: "Shoulder scope (arthroscopy)" },
    { name: "Sigmoidoscopy (diagnostic)" },
    { name: "Skin biopsy, additonal lesion" },
    { name: "Speech prosthesis insertion" },
    {
      name: "Surgical laparatomy for staging of ovarian, tubal, or primary peritoneal tumor",
    },
    { name: "Surgical laparoscopy with placement of radiation therapy device" },
    { name: "Surgical nasal/sinus endoscopy (with add-on procedures)" },
    { name: "Surgical removal of bladder stone" },
    { name: "Suture of injury to vagina and/or perineum, non-obstetric" },
    { name: "Total removal of urethra (female)" },
    { name: "Ultrasound elastography (USE)" },
    { name: "Vaginal delivery" },
    { name: "Windpipe repair" },
    { name: "Wrist scope (arthroscopy)" },
    { name: "X-ray, abdomen" },
  ];
  const specialties = [
    "All specialties",
    "Dummy-data1",
    "Dummy-data2",
    "Dummy-data3",
  ];
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const [selectedAlphabet, setSelectedAlphabet] = useState("All");

  return (
    <>
      {/* <AppHeader /> */}
      <AppTitle value={false} />
      <div style={{ backgroundColor: "#F5F5F5", width: "100%" }}>
        <Browse selectTab={0}></Browse>
        <Search data={specialties} />
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
};

export default Procedures;
