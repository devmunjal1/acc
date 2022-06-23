import React, { useState } from "react";
import Fourm from "../Fourm/Fourm";
import FourmPage1 from "../Fourm/FourmPage1";
import FourmPage2 from "../Fourm/FourmPage2";
import FourmPage3 from "../Fourm/FourmPage3";
import FourmPage4 from "../Fourm/FourmPage4";
import Page5 from "../Page5/Page5";
import Page6a from "../Page6a/Page6a";
import Page6b from "../Page6b/Page6b";

function Donate() {
  const [activePage, setactivePage] = useState(0);

  return (
    <>
      {activePage == 0 && (
        <Page5
          setactivePage={(page) => {
            setactivePage(page);
          }}
        />
      )}
      {activePage == 1 && (
        <Page6a
          setactivePage={(page) => {
            setactivePage(page);
          }}
        />
      )}
      {activePage == 2 && (
        <Page6b
          setactivePage={(page) => {
            setactivePage(page);
          }}
        />
      )}
      {activePage == 3 && (
        <Fourm
          setactivePage={(page) => {
            setactivePage(page);
          }}
        />
      )}
      {activePage == 4 && (
        <FourmPage1
          setactivePage={(page) => {
            setactivePage(page);
          }}
        />
      )}
      {activePage == 5 && (
        <FourmPage2
          setactivePage={(page) => {
            setactivePage(page);
          }}
        />
      )}
      {activePage == 6 && (
        <FourmPage3
          setactivePage={(page) => {
            setactivePage(page);
          }}
        />
      )}
      {activePage == 7 && (
        <FourmPage4
          setactivePage={(page) => {
            setactivePage(page);
          }}
        />
      )}
    </>
  );
}

export default Donate;
