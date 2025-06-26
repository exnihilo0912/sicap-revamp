import './styles.css';

import { useContext, useState } from 'react';
import { SelectContext } from './SelecContext';

interface SelectProps {
  children: React.ReactNode;
}
export default function Select({ children }: SelectProps) {
  // States -- opened, closed
  const [selectedValue, setSelectedValue] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleToggle() {
    setIsOpen((previousValue) => !previousValue);
  }

  return (
    <div className='select'>
      <SelectContext value={[selectedValue, setSelectedValue]}>
        <div className='select-block'>
          <p className='select-block__value'>{selectedValue}</p>
          <button className='select-block__toggle' onClick={handleToggle}>
            🔽
          </button>
        </div>
        {isOpen && (
          <ul className='select__options' onClick={handleToggle}>
            {children}
          </ul>
        )}
      </SelectContext>
    </div>
  );
}

interface OptionProps {
  children: React.ReactNode;
  value: string;
}
function Option({ value, children }: OptionProps) {
  const [selectedValue, setSelectedValue] = useContext(SelectContext);

  return (
    <li onClick={() => setSelectedValue(value)}>
      <div>
        {selectedValue === value && '>'} {children}
      </div>
    </li>
  );
}

Select.Option = Option;