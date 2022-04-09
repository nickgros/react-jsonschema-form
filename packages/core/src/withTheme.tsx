import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import Form from ".";
import { Registry } from "@rjsf/core";

function withTheme(themeProps) {
  return forwardRef(({ fields, widgets, ...directProps }: Registry, ref) => {
    fields = { ...themeProps.fields, ...fields };
    widgets = { ...themeProps.widgets, ...widgets };

    return (
      <Form
        {...themeProps}
        {...directProps}
        fields={fields}
        widgets={widgets}
        ref={ref}
      />
    );
  });
}

withTheme.propTypes = {
  widgets: PropTypes.object,
  fields: PropTypes.object,
};

export default withTheme;
