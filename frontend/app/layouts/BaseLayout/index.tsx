import type { Route } from '../+types/BaseLayout';

import { Outlet } from 'react-router';

import Avatar from '~/components/Avatar';
import HorizontalNavbar from '~/components/HorizontalNavbar';
import Logo from '~/components/Logo';
import Select from '~/components/Select';
import ShrinkableBlock from '~/components/ShrinkableBlock';

import './styles.css';

function Header({ children }: { children: React.ReactNode }) {
  return (
    <header className="header">{children}</header>
  );
}

function TopHeader() {
  return (
    <div className="top-header">
      <Logo />
      <div className="top-header__commands">
        <Select>
          <Select.Option value='Electricite'>
            <div>
              <p><i>⚡️</i> Electricity</p>
            </div>
          </Select.Option>
          <Select.Option value='Autre'>
            <div>
              <p><i>❓</i> Other</p>
            </div>
          </Select.Option>
        </Select>
        <ShrinkableBlock toggleButtonContent="X">
          <ShrinkableBlock.Item>Text Size</ShrinkableBlock.Item>
          <ShrinkableBlock.Item>High Contrast</ShrinkableBlock.Item>
          <ShrinkableBlock.Item>Reset All</ShrinkableBlock.Item>
        </ShrinkableBlock>
        <Avatar placeholder="AE" />
      </div>
    </div>
  );
}

function NavigationHeader() {
  return (
    <div>
      <HorizontalNavbar>
        <HorizontalNavbar.Item>Home</HorizontalNavbar.Item>
        <HorizontalNavbar.Item>Ma conso</HorizontalNavbar.Item>
        <HorizontalNavbar.Item>Relève</HorizontalNavbar.Item>
        <HorizontalNavbar.Item>Factures</HorizontalNavbar.Item>
        <HorizontalNavbar.Item>Services</HorizontalNavbar.Item>
      </HorizontalNavbar>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>
        Copyright© 2025 SICAP  -  Mentions légales  -  Réalisation Incom
      </p>
      <p>
        En application des lois n° 78-17 du 6 janvier 1978 modifiée, et n° 2018-493 du 20 juin 2018, les informations personnelles vous concernant, et gérées par la SICAP au travers ce portail, sont strictement réservées à la gestion du service électricité. Leur durée de conservation est limitée à votre durée dabonnement augmentée de la durée règlementaire darchivage. Vous bénéficiez dun droit de rectification, de portabilité, deffacement des données ou de limitation du traitement. Vous avez la possibilité de vous adresser au service pour toute question relative à ce droit ou de formuler une réclamation au délégué à la protection des données :
      </p>
      <a href="mailto:contact@sicap-pithiviers.net">contact@sicap-pithiviers.net</a>
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
