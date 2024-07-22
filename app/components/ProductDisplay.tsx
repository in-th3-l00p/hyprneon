import {clsx} from 'clsx';
import {Link} from '@remix-run/react';
import {Image, Money} from '@shopify/hydrogen';
import {Button} from '~/components/ui/button';
import {ChevronRight, ShoppingCart} from 'lucide-react';

export default function ProductDisplay({product}) {
  return (
    <div
      className={clsx(
        'rounded-md p-4 hover:bg-zinc-900 hover:scale-105 transition-all',
      )}
    >
      <Link to={`/products/${product.handle}`}>
        <Image
          data={product.images.nodes[0]}
          aspectRatio="1/1"
          sizes="(min-width: 45em) 20vw, 50vw"
          className={'w-full mx-auto mb-4 rounded-md'}
        />
      </Link>
      <div className="flex justify-between flex-wrap gap-4">
        <div>
          <h3 className={'text-lg'}>{product.title}</h3>
          <p className={'max-w-[300px]'}>
            {product.description.substring(0, 100)}
          </p>
        </div>
        <div className={'flex flex-col gap-2'}>
          <small className={'text-right'}>
            <Money data={product.priceRange.minVariantPrice} />
          </small>

          <Button variant={'outline'} className={'flex gap-2 justify-between'}>
            check
            <ChevronRight className={'ms-2 w-4 h-4'} />
          </Button>

          <Button
            variant={'secondary'}
            className={'flex gap-2 justify-between'}
          >
            add 2 cart
            <ShoppingCart className={'ms-2 w-4 h-4'} />
          </Button>
        </div>
      </div>
    </div>
  );
}