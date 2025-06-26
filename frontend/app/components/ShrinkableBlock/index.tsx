import { useState } from 'react';
import './styles.css';

interface ShrinkableBlockProps {
  toggleButtonContent: React.ReactNode;
  children: React.ReactNode;
}
export default function ShrinkableBlock({ children, toggleButtonContent }: ShrinkableBlockProps) {
  // opened, closed
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleToggle(event) {
    event.stopPropagation();
    setIsOpen((previousValue) => !previousValue);
  }

  const classes = [
    'shrinkable-block',
    !isOpen && 'shrinkable-block--closed',
  ]
    .filter((v) => v)
    .join(' ');

  return (
    <div className={classes} onClick={handleToggle}>
      <button className="shrinkable-block__toggle" onClick={handleToggle}>{toggleButtonContent || 'X'}</button>
      <menu className="shrinkable-block__item-block">
        {children}
      </menu>
    </div>
  );
}

interface ShrinkableBlockItemProps {
  children: React.ReactNode;
}
function ShrinkableBlockItem({ children }: ShrinkableBlockItemProps) {
  return (<li className='shrinkable-block__item'>{children}</li>);
}

ShrinkableBlock.Item = ShrinkableBlockItem;