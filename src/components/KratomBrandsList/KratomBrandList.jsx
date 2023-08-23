import React, { Fragment } from "react";
import "./KratomBrandList.css";
import KratomBrandItem from "../KratomBrandItem/KratomBrandItem";
import { kratomBrands } from "../../mockData/KratomBrands";

const KratomBrandList = () => {
  return (
      
      <Fragment>
          {kratomBrands.map((item, i) => (
            <KratomBrandItem key={item.id}  {...item} />
          ))}
      </Fragment>
  );
};

export default KratomBrandList;
