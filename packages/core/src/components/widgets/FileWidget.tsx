import React, { ChangeEvent, Component } from "react";
import PropTypes from "prop-types";

import { dataURItoBlob, shouldRender } from "../../utils";
import { WidgetProps } from "@rjsf/core";

type FileInfo = {
  dataURL: string,
  name: string,
  size: number,
  type: string,
}

function addNameToDataURL(dataURL: string, name: string) {
  return dataURL.replace(";base64", `;name=${encodeURIComponent(name)};base64`);
}

function processFile(file: File): Promise<FileInfo> {
  const { name, size, type } = file;
  return new Promise<FileInfo>((resolve, reject) => {
    const reader = new window.FileReader();
    reader.onerror = reject;
    reader.onload = event => {
      resolve({
        dataURL: addNameToDataURL(event?.target?.result as string, name),
        name,
        size,
        type,
      });
    };
    reader.readAsDataURL(file);
  });
}

function processFiles(files: File[] | null): Promise<FileInfo[]> {
  return Promise.all<FileInfo>((files ?? []).map( processFile));
}

function FilesInfo(props) {
  const { filesInfo } = props;
  if (filesInfo.length === 0) {
    return null;
  }
  return (
    <ul className="file-info">
      {filesInfo.map((fileInfo, key) => {
        const { name, size, type } = fileInfo;
        return (
          <li key={key}>
            <strong>{name}</strong> ({type}, {size} bytes)
          </li>
        );
      })}
    </ul>
  );
}

function extractFileInfo(dataURLs) {
  return dataURLs
    .filter(dataURL => typeof dataURL !== "undefined")
    .map(dataURL => {
      const { blob, name } = dataURItoBlob(dataURL);
      return {
        name: name,
        size: blob.size,
        type: blob.type,
      };
    });
}

class FileWidget extends Component<WidgetProps, {filesInfo: any, values: string[]}> {
  static defaultProps = {
    autofocus: false,
  };

  static propTypes = {};
  private inputRef;


  constructor(props) {
    super(props);
    const { value } = props;
    const values = Array.isArray(value) ? value : [value];
    this.state = { values, filesInfo: extractFileInfo(values) };

    this.inputRef = React.createRef();
  }


  shouldComponentUpdate(nextProps, nextState) {
    return shouldRender(this, nextProps, nextState);
  }

  onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { multiple, onChange } = this.props;
    processFiles(event.target.files as File[] | null).then(filesInfo => {
      const state = {
        values: filesInfo.map(fileInfo => fileInfo.dataURL),
        filesInfo,
      };
      this.setState(state, () => {
        if (multiple) {
          onChange(state.values);
        } else {
          onChange(state.values[0]);
        }
      });
    });
  };

  render() {
    const { multiple, id, readonly, disabled, autofocus, options } = this.props;
    const { filesInfo } = this.state;
    return (
      <div>
        <p>
          <input
            ref={this.inputRef}
            id={id}
            type="file"
            disabled={readonly || disabled}
            onChange={this.onChange}
            defaultValue=""
            autoFocus={autofocus}
            multiple={multiple}
            accept={options.accept}
          />
        </p>
        <FilesInfo filesInfo={filesInfo} />
      </div>
    );
  }
}

if (process.env.NODE_ENV !== "production") {
  FileWidget.propTypes = {
    multiple: PropTypes.bool,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    autofocus: PropTypes.bool,
  };
}

export default FileWidget;
