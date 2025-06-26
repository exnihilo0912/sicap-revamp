import './styles.css';

interface HorizontalNavbarProps {
  children: React.ReactNode;
}
export default function HorizontalNavbar({ children }: HorizontalNavbarProps) {
  return (
    <nav className="nav-header">
      <ul className="nav-header__nav">
        {children}
      </ul>
    </nav>
  );
}

interface HorizontalNavbarItemProps {
  children: React.ReactNode;
}
function HorizontalNavbarItem({ children }: HorizontalNavbarItemProps) {
  return (
    <li className="nav-header__nav-item">{children}</li>
  );
}

HorizontalNavbar.Item = HorizontalNavbarItem;