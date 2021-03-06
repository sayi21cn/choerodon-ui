import React, { ChangeEvent, Component, FormEvent, MouseEvent } from 'react';
import Icon from '../icon';
import Input from '../input';

export interface TransferSearchProps {
  prefixCls?: string;
  placeholder?: string;
  onChange?: (e: FormEvent<any>) => void;
  handleClear?: (e: MouseEvent<any>) => void;
  value?: any;
}

export default class Search extends Component<TransferSearchProps, any> {
  static defaultProps = {
    placeholder: '',
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const onChange = this.props.onChange;
    if (onChange) {
      onChange(e);
    }
  };

  handleClear = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const handleClear = this.props.handleClear;
    if (handleClear) {
      handleClear(e);
    }
  };

  render() {
    const { placeholder, value, prefixCls } = this.props;
    const icon = (value && value.length > 0) ? (
      <a href="#" className={`${prefixCls}-action`} onClick={this.handleClear}>
        <Icon type="cross-circle" />
      </a>
    ) : (
      <span className={`${prefixCls}-action`}><Icon type="search" /></span>
    );

    return (
      <div>
        <Input
          placeholder={placeholder}
          className={prefixCls}
          value={value}
          ref="input"
          onChange={this.handleChange}
        />
        {icon}
      </div>
    );
  }
}
