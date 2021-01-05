import * as React from "react";
import get from 'lodash/get'

export const CompanyField = ({ record = {}, source }) => {
  return (
    <div>
      <div>
        { get(record, `${source}.name`, '') }
      </div>
      <div>
        { get(record, `${source}.bs`, '') }
      </div>
    </div>
  )
}

export default CompanyField;
