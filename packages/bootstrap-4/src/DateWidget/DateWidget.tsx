import React from "react";
import { WidgetProps } from '@sage-bionetworks/rjsf-core';

const DateWidget = (props: WidgetProps) => {
  const { registry } = props;
  const { TextWidget } = registry.widgets;
  return (
    <TextWidget
      {...props}
      type="date"
    />
  );
};

export default DateWidget;
