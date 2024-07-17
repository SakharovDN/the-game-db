import { useCallback, useId } from 'react';
import { useTranslation } from 'react-i18next';
import ReactSelect, {
  ClearIndicatorProps,
  DropdownIndicatorProps,
  MultiValueGenericProps,
  MultiValueRemoveProps,
  OnChangeValue,
  OptionProps,
  components,
} from 'react-select';

import classNames from 'classnames';
import makeAnimated from 'react-select/animated';

import { Option } from '../../../../@types';
import { Icon, IconName } from '../icon';
import { BodyM, BodyS, BodyXs } from '../typography';

import './style.scss';

const animatedComponents = makeAnimated();

type SelectSize = 'l' | 'm' | 's';

interface SelectProps<OptionValue extends string, IsMulti extends boolean> {
  className?: string;
  disabled?: boolean;
  error?: string;
  isClearable?: boolean;
  isLoading?: boolean;
  isMulti?: IsMulti;
  isSearchable?: boolean;
  label?: string;
  onChange: (newValue: IsMulti extends true ? OptionValue[] : OptionValue | undefined) => void;
  options: Option<OptionValue>[];
  placeholder?: string;
  size?: SelectSize;
  value: IsMulti extends true ? OptionValue[] : OptionValue | undefined;
}

export const Select = <OptionValue extends string, IsMulti extends boolean = false>({
  label,
  disabled,
  value,
  placeholder,
  className,
  isMulti,
  options,
  onChange,
  isSearchable = false,
  isClearable,
  isLoading,
  size = 'm',
  error,
}: SelectProps<OptionValue, IsMulti>) => {
  const id = useId();

  const { t } = useTranslation('select');

  const LabelComponent = size === 'l' ? BodyS : BodyXs;

  const getValue = useCallback(
    (value?: OptionValue | OptionValue[]) => {
      const isArray = Array.isArray(value);

      if (isArray && isMulti) {
        return options.filter(option => value.some(opt => opt === option.value));
      }

      const option = options.find(option => option.value === value);
      return option;
    },
    [isMulti, options]
  );

  const handleOnChange = useCallback(
    (newValue: OnChangeValue<Option<OptionValue>, IsMulti>) => {
      if (isMulti) {
        const value = newValue as Option<OptionValue>[];
        onChange(value.map(item => item.value) as IsMulti extends true ? OptionValue[] : OptionValue);
      } else {
        const value = newValue as Option<OptionValue> | null;
        const selectOptionKey = options.find(option => option.value === value?.value)?.value;
        onChange(selectOptionKey as IsMulti extends true ? OptionValue[] : OptionValue | undefined);
      }
    },
    [onChange, isMulti, options]
  );

  return (
    <div className={classNames('select-form', className)}>
      {label && (
        <label htmlFor={id}>
          <LabelComponent className={'label'}>{label}</LabelComponent>
        </label>
      )}
      <ReactSelect
        backspaceRemovesValue={true}
        blurInputOnSelect={!isMulti}
        className={classNames('select', size, { disabled, error })}
        classNamePrefix={'select'}
        closeMenuOnSelect={!isMulti}
        components={{
          ...animatedComponents,
          Option: props => CustomOption({ ...props, size }),
          DropdownIndicator: props => CustomDropdownIndicator({ ...props, size }),
          MultiValueLabel: props => CustomMultiValueLabel({ ...props, size }),
          MultiValueRemove: CustomMultiValueRemove,
          ClearIndicator: props => CustomClearIndicator({ ...props, size }),
        }}
        id={id}
        isClearable={isClearable}
        isDisabled={disabled}
        isLoading={isLoading}
        isMulti={isMulti}
        isSearchable={isSearchable}
        loadingMessage={() => t('loading')}
        noOptionsMessage={() => t('no-options')}
        onChange={handleOnChange}
        options={options}
        placeholder={placeholder || t('select')}
        value={getValue(value)}
      />
      {error && <BodyS className={'error'}>{error}</BodyS>}
    </div>
  );
};

interface CustomOptionProps<OptionValue extends string, IsMulti extends boolean>
  extends OptionProps<Option<OptionValue>, IsMulti> {
  size: SelectSize;
}

const CustomOption = <OptionValue extends string, IsMulti extends boolean>({
  size,
  ...props
}: CustomOptionProps<OptionValue, IsMulti>) => {
  const OptionText = size === 'l' ? BodyM : BodyS;
  return (
    <OptionText>
      <components.Option {...props} />
    </OptionText>
  );
};
interface CustomDropdownIndicatorProps<OptionValue extends string, IsMulti extends boolean>
  extends DropdownIndicatorProps<Option<OptionValue>, IsMulti> {
  size: SelectSize;
}

const CustomDropdownIndicator = <OptionValue extends string, IsMulti extends boolean>({
  size,
  ...props
}: CustomDropdownIndicatorProps<OptionValue, IsMulti>) => {
  return (
    <Icon
      className={classNames('dropdown-icon', 'input-icon', 'suffix-icon', {
        'menu-is-open': props.selectProps.menuIsOpen,
      })}
      name={size === 's' ? IconName.ChevronDown : IconName.ChevronDownLarge}
    />
  );
};

interface CustomMultiValueLabelProps<OptionValue extends string, IsMulti extends boolean>
  extends MultiValueGenericProps<Option<OptionValue>, IsMulti> {
  size: SelectSize;
}

const CustomMultiValueLabel = <OptionValue extends string, IsMulti extends boolean>({
  size,
  children,
}: CustomMultiValueLabelProps<OptionValue, IsMulti>) => {
  const LabelComponent = size === 's' ? BodyXs : BodyS;
  return <LabelComponent className={'select__multi-value__label'}>{children}</LabelComponent>;
};

const CustomMultiValueRemove = <OptionValue extends string, IsMulti extends boolean>(
  props: MultiValueRemoveProps<Option<OptionValue>, IsMulti>
) => {
  return (
    <components.MultiValueRemove {...props}>
      <Icon name={IconName.Close} />
    </components.MultiValueRemove>
  );
};

interface CustomClearIndicatorProps<OptionValue extends string, IsMulti extends boolean>
  extends ClearIndicatorProps<Option<OptionValue>, IsMulti> {
  size: SelectSize;
}

const CustomClearIndicator = <OptionValue extends string, IsMulti extends boolean>({
  size,
  ...props
}: CustomClearIndicatorProps<OptionValue, IsMulti>) => {
  return (
    <components.ClearIndicator {...props}>
      <Icon
        className={classNames('input-icon', 'suffix-icon')}
        name={size === 's' ? IconName.Close : IconName.CloseLarge}
      />
    </components.ClearIndicator>
  );
};
