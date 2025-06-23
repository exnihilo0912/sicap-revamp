import type { Route } from "../+types/BaseLayout";
import { Outlet } from "react-router";

import './styles.css';

function Header({ children }: { children: React.ReactNode }) {
  return (
    <header className="header">{children}</header>
  );
}

function TopHeader() {
  return (
    <div className="top-header">
      <div>
        <p>logo</p>
      </div>
      <div className="top-header__commands">
        <p>dropdown menu</p>
        <p>account select</p>
        <p>user</p>
      </div>
    </div>
  );
}

function NavigationHeader() {
  return (
    <nav className="nav-header">
      <ul className="nav-header__nav">
        <li className="nav-header__nav-item">home</li>
        <li className="nav-header__nav-item">usage</li>
        <li className="nav-header__nav-item">reading</li>
        <li className="nav-header__nav-item">billing</li>
        <li className="nav-header__nav-item">services</li>
      </ul>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>Footer</p>
    </footer>
  );
}

export default function BaseLayout() {
  return (
    <div className="layout">
      <Header>
        <TopHeader />
        <NavigationHeader />
      </Header>
      <main className="content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
