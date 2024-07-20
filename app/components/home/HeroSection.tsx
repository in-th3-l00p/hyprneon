import {clsx} from 'clsx';
import {Button} from '~/components/ui/button';

export function HeroSection() {
  return (
    <section
      className={clsx(
        'grid grid-cols-1 md:grid-cols-2 items-center',
        'py-32 md:py-16 px-8 md:px-16 lg:px-32 gap-8',
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
        className={'max-w-[500px] w-full mx-auto'}
      />
    </section>
  );
}
