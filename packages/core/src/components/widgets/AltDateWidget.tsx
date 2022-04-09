import React, { Component } from "react";
import PropTypes from "prop-types";

import { shouldRender, parseDateString, toDateString, pad } from "../../utils";
import { WidgetProps } from "@rjsf/core";

function rangeOptions(start, stop) {
  let options: { value: number, label: string }[] = [];
  for (let i = start; i <= stop; i++) {
    options.push({ value: i, label: pad(i, 2) });
  }
  return options;
}

function readyForChange(state) {
  return Object.keys(state).every(key => state[key] !== -1);
}

function DateElement(props) {
  const {
    type,
    range,
    value,
    select,
    rootId,
    disabled,
    readonly,
    autofocus,
    registry,
    onBlur,
  } = props;
  const id = rootId + "_" + type;
  const { SelectWidget } = registry.widgets;
  return (
    <SelectWidget
      schema={{ type: "integer" }}
      id={id}
      className="form-control"
      options={{ enumOptions: rangeOptions(range[0], range[1]) }}
      placeholder={type}
      value={value}
      disabled={disabled}
      readonly={readonly}
      autofocus={autofocus}
      onChange={value => select(type, value)}
      onBlur={onBlur}
    />
  );
}

type AltDateWidgetState = {
  year: number
  month: number
  day: number
  hour?: number
  minute?: number
  second?: number
}

class AltDateWidget extends Component<WidgetProps, AltDateWidgetState> {
  static defaultProps = {
    time: false,
    disabled: false,
    readonly: false,
    autofocus: false,
    options: {
      yearsRange: [1900, new Date().getFullYear() + 2],
    },
  };

  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = parseDateString(props.value, props.time);
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.value &&
      prevProps.value !== parseDateString(this.props.value, this.props.time)
    ) {
      this.setState(parseDateString(this.props.value, this.props.time));
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shouldRender(this, nextProps, nextState);
  }

  onChange = () => {
    this.setState(
      { 
        year: this.state.year,
        month: this.state.month,
        day: this.state.day,
        hour: typeof this.state.hour === "undefined" ? -1 : this.state.hour,
        minute: typeof this.state.minute === "undefined" ? -1 : this.state.minute,
        second: typeof this.state.second === "undefined" ? -1 : this.state.second,
       },
      () => {
        // Only propagate to parent state if we have a complete date{time}
        if (readyForChange(this.state)) {
          this.props.onChange(toDateString(this.state, this.props.time));
        }
      }
    );
  };

  setNow = event => {
    event.preventDefault();
    const { time, disabled, readonly, onChange } = this.props;
    if (disabled || readonly) {
      return;
    }
    const nowDateObj = parseDateString(new Date().toJSON(), time);
    this.setState(nowDateObj, () => onChange(toDateString(this.state, time)));
  };

  clear = event => {
    event.preventDefault();
    const { time, disabled, readonly, onChange } = this.props;
    if (disabled || readonly) {
      return;
    }
    this.setState(parseDateString("", time), () => onChange(undefined));
  };

  get dateElementProps() {
    const { time, options } = this.props;
    const { year, month, day, hour, minute, second } = this.state;
    const data = [
      {
        type: "year",
        range: options.yearsRange,
        value: year,
      },
      { type: "month", range: [1, 12], value: month },
      { type: "day", range: [1, 31], value: day },
    ];
    if (time) {
      data.push(
        { type: "hour", range: [0, 23], value: hour! },
        { type: "minute", range: [0, 59], value: minute! },
        { type: "second", range: [0, 59], value: second! }
      );
    }
    return data;
  }

  render() {
    const {
      id,
      disabled,
      readonly,
      autofocus,
      registry,
      onBlur,
      options,
    } = this.props;
    return (
      <ul className="list-inline">
        {this.dateElementProps.map((elemProps, i) => (
          <li key={i}>
            <DateElement
              rootId={id}
              select={this.onChange}
              {...elemProps}
              disabled={disabled}
              readonly={readonly}
              registry={registry}
              onBlur={onBlur}
              autofocus={autofocus && i === 0}
            />
          </li>
        ))}
        {(options.hideNowButton !== "undefined"
          ? !options.hideNowButton
          : true) && (
          <li>
            <a href="#" className="btn btn-info btn-now" onClick={this.setNow}>
              Now
            </a>
          </li>
        )}
        {(options.hideClearButton !== "undefined"
          ? !options.hideClearButton
          : true) && (
          <li>
            <a
              href="#"
              className="btn btn-warning btn-clear"
              onClick={this.clear}>
              Clear
            </a>
          </li>
        )}
      </ul>
    );
  }
}

if (process.env.NODE_ENV !== "production") {
  AltDateWidget.propTypes = {
    schema: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool,
    autofocus: PropTypes.bool,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    time: PropTypes.bool,
    options: PropTypes.object,
  };
}

export default AltDateWidget;
