import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '~/components/ui/sheet';
import {Button} from '~/components/ui/button';
import {MenuIcon} from 'lucide-react';
import {NavLink} from '@remix-run/react';
import React from 'react';
import type {HeaderProps} from '~/components/layout/header/index';

export function MobileNavigation({header}: HeaderProps) {
  return (
    <Sheet className={'md:hidden'}>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className={'md:hidden'}>
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className={'mb-8'}>
          <SheetTitle>
            <h2 className={'text-2xl font-bold dark:text-white my-auto'}>
              {header.shop.name}
            </h2>
          </SheetTitle>
        </SheetHeader>

        <NavLink to={'/collections/all'} className={'text-lg'}>
          Catalog
        </NavLink>

        <NavLink to={'/contact'} className={'text-lg'}>
          Contact
        </NavLink>
      </SheetContent>
    </Sheet>
  );
}
