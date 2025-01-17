import {type FetcherWithComponents} from '@remix-run/react';
import {CartForm, type OptimisticCartLineInput} from '@shopify/hydrogen';
import {Button} from '~/components/ui/button';
import {ShoppingCart} from 'lucide-react';

export function AddToCartButton({
  analytics,
  children,
  disabled,
  lines,
  onClick,
}: {
  analytics?: unknown;
  children: React.ReactNode;
  disabled?: boolean;
  lines: Array<OptimisticCartLineInput>;
  onClick?: () => void;
}) {
  return (
    <CartForm route="/cart" inputs={{lines}} action={CartForm.ACTIONS.LinesAdd}>
      {(fetcher: FetcherWithComponents<any>) => (
        <>
          <input
            name="analytics"
            type="hidden"
            value={JSON.stringify(analytics)}
          />
          <Button
            variant={'secondary'}
            type="submit"
            onClick={onClick}
            disabled={disabled ?? fetcher.state !== 'idle'}
            className={'flex justify-between gap-4'}
          >
            {children}
            <ShoppingCart />
          </Button>
        </>
      )}
    </CartForm>
  );
}
