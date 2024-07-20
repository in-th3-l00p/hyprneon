import React from 'react';
import {NavLink} from '@remix-run/react';
import type {CartApiQueryFragment, HeaderQuery,} from '../../../../storefrontapi.generated';
import ThemeToggle from '~/components/ThemeToggle';
import {DesktopNavigation, ListItem,} from '~/components/layout/header/DesktopNavigation';
import {MobileNavigation} from "~/components/layout/header/MobileNavigation";

export interface HeaderProps {
  header: HeaderQuery;
  cart: Promise<CartApiQueryFragment | null>;
  isLoggedIn: Promise<boolean>;
  publicStoreDomain: string;
}

type Viewport = 'desktop' | 'mobile';

ListItem.displayName = 'ListItem';

export function Header({
  header,
  isLoggedIn,
  cart,
  publicStoreDomain,
}: HeaderProps) {
  const {shop, menu} = header;
  return (
    <header className={'py-4 dark:bg-black'}>
      <div className="container mx-auto flex items-center gap-8">
        <div className={"flex items-center gap-8 me-auto"}>
          <NavLink to="/" prefetch="intent" end>
            <h2 className={'text-2xl font-bold dark:text-white my-auto'}>
              {shop.name}
            </h2>
          </NavLink>

          <DesktopNavigation
            header={header}
            isLoggedIn={isLoggedIn}
            cart={cart}
            publicStoreDomain={publicStoreDomain}
          />
        </div>

        <MobileNavigation
          header={header}
          isLoggedIn={isLoggedIn}
          cart={cart}
          publicStoreDomain={publicStoreDomain}
        />

        <ThemeToggle />
      </div>
    </header>
  );
}
