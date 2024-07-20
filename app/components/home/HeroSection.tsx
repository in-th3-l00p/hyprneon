import {clsx} from 'clsx';
import {Button} from '~/components/ui/button';

export function HeroSection() {
  return (
    <section
      className={clsx(
        'grid grid-cols-1 md:grid-cols-2 items-center',
        'px-8 container mx-auto py-32 md:py-16 gap-8',
      )}
    >
      <div className={'text-center'}>
        <h1 className={'text-4xl sm:text-6xl mb-4'}>HyprNeon</h1>
        <h2 className={'text-lg sm:text-xl mb-8'}>
          Style your interior using our neons stralucitoare sa muara mama daca
          mint.
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <Button>Showcase</Button>
          <Button>Contact</Button>
        </div>
      </div>

      <img
        src={'/static/logo.png'}
        alt={'logo'}
        className={'max-w-[500px] w-full mx-auto md:ms-auto md:me-0'}
      />
    </section>
  );
}
