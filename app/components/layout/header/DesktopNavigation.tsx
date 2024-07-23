import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '~/components/ui/navigation-menu';
import {Link} from '@remix-run/react';
import React from 'react';
import {cn} from '~/lib';
import type {HeaderProps} from '~/components/layout/header/index';
import {clsx} from 'clsx';
import {cva} from 'class-variance-authority';

export const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({className, title, children, ...props}, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

const navLink = cva('me-4 hover:font-normal font-light transition-all');

export function DesktopNavigation(props: HeaderProps) {
  return (
    <NavigationMenu className={'hidden md:flex'}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link to="/collections/all" legacyBehavior passHref>
            <NavigationMenuLink className={navLink()}>
              Catalog
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navLink()}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
