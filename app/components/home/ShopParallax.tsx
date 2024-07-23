import {clsx} from 'clsx';
import {Button} from '~/components/ui/button';
import {Link} from '@remix-run/react';

export default function ShopParallax() {
  return (
    <section className={'relative w-full h-96 overflow-hidden mb-16'}>
      <div
        style={{
          backgroundImage: `url("/static/parallax2.jpg")`,
        }}
        className={clsx(
          'bg-fixed bg-center bg-no-repeat bg-cover',
          'absolute top-0 left-0 w-full h-full',
          'brightness-[20%]',
        )}
      />

      <div
        className={clsx(
          'absolute text-center',
          'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
        )}
      >
        <h2 className={'text-4xl font-bold mb-4'}>Want to see more?</h2>
        <p className={'text-lg mb-4'}>
          Explore our catalog to find the sign that suits you best
        </p>
        <Link to={'/collections/all'}>
          <Button>catalog</Button>
        </Link>
      </div>
    </section>
  );
}
