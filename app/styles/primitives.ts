import {cva} from 'class-variance-authority';
import {clsx} from 'clsx';

export const headerIcon =
  'h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0';

export const productsGrid = cva(
  clsx('grid justify-center items-center gap-32 lg:gap-x-64', 'md:grid-cols-2'),
);
