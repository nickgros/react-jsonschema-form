import React from "react";
import { WidgetProps } from '@sage-bionetworks/rjsf-core';

const ColorWidget = (props: WidgetProps) => {
  const { registry } = props;
  const { TextWidget } = registry.widgets;
  return <TextWidget {...props} type="color" />;
};

export default ColorWidget;
