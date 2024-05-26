import { FC } from 'react';

interface CheckboxProps {
  checked: boolean;
  onChange: (value: boolean) => void;
}

const Checkbox: FC<CheckboxProps> = ({ checked, onChange }) => {
  return (
    <input
      type={'checkbox'}
      checked={checked}
      onChange={e => onChange(e.target.checked)}
    />
  );
};

export default Checkbox;
