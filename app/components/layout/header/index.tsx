import React from 'react';
import {Link, NavLink, useLocation} from '@remix-run/react';
import type {
  CartApiQueryFragment,
  HeaderQuery,
} from '../../../../storefrontapi.generated';
import ThemeToggle from '~/components/layout/header/ThemeToggle';
import {
  DesktopNavigation,
  ListItem,
} from '~/components/layout/header/DesktopNavigation';
import {MobileNavigation} from '~/components/layout/header/MobileNavigation';
import {clsx} from 'clsx';
import {Button} from '~/components/ui/button';
import {ShoppingCart} from 'lucide-react';
import {headerIcon} from '~/styles/primitives';

export interface HeaderProps {
  header: HeaderQuery;
  cart: Promise<CartApiQueryFragment | null>;
  isLoggedIn: Promise<boolean>;
  publicStoreDomain: string;
}

type Viewport = 'desktop' | 'mobile';

ListItem.displayName = 'ListItem';

export function Index({
  header,
  isLoggedIn,
  cart,
  publicStoreDomain,
}: HeaderProps) {
  const location = useLocation();
  const {shop, menu} = header;

  return (
    <header
      className={clsx(
        'py-4 bg-zinc-900 ',
        location.pathname === '/' &&
          'absolute top-0 left-0 z-10 w-screen bg-opacity-80',
      )}
    >
      <div
        className={clsx(
          'w-full px-8 container mx-auto gap-8',
          'grid grid-cols-2 md:grid-cols-3 items-center',
        )}
      >
        <DesktopNavigation
          header={header}
          isLoggedIn={isLoggedIn}
          cart={cart}
          publicStoreDomain={publicStoreDomain}
        />

        <div>
          <NavLink to="/" prefetch="intent" end className={'mx-auto'}>
            <h2
              className={clsx(
                'text-2xl font-bold',
                'text-white text-center my-auto',
              )}
            >
              {shop.name}
            </h2>
          </NavLink>
        </div>

        <div className={'flex justify-end items-center gap-8'}>
          <MobileNavigation
            header={header}
            isLoggedIn={isLoggedIn}
            cart={cart}
            publicStoreDomain={publicStoreDomain}
          />

          <NavLink to={'/cart'} prefetch="intent" end>
            <Button variant="ghost" size="icon">
              <ShoppingCart className={'w-[1.2rem] h-[1.2rem]'} />
            </Button>
          </NavLink>
        </div>
      </div>
    </header>
  );
}
