import React from "react";

import { FieldProps } from "@sage-bionetworks/rjsf-core";

import { Text } from "@fluentui/react";

const DescriptionField = ({ description }: FieldProps) => {
  if (description) {
    return <Text>{description}</Text>;
  }

  return null;
};

export default DescriptionField;
