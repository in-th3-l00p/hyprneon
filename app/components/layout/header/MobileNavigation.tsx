import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger} from "~/components/ui/sheet";
import {Button} from "~/components/ui/button";
import {MenuIcon} from "lucide-react";
import {NavLink} from "@remix-run/react";
import React from "react";
import {HeaderProps} from "~/components/layout/header/Header";

export function MobileNavigation({header}: HeaderProps) {
  return (
    <Sheet className={'md:hidden'}>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className={'md:hidden'}>
          <MenuIcon/>
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

        <NavLink to={'/catalog'} className={'text-lg'}>
          Catalog
        </NavLink>
      </SheetContent>
    </Sheet>
  );
}