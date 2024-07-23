import {clsx} from 'clsx';
import {Button} from '~/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '~/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import {Link} from '@remix-run/react';

export function HeroSection() {
  return (
    <section className={'relative mb-32'}>
      <Carousel
        opts={{
          loop: true,
          duration: 50,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className={'w-screen h-screen'}
      >
        <CarouselContent>
          {Array.from(new Array(5))
            .map((_, index) => index + 1)
            .map((index) => (
              <CarouselItem key={index}>
                <div className="w-full h-full">
                  <img
                    src={`/static/carousel/${index}.jpg`}
                    alt={`Neon lights ${index}`}
                    className={
                      'w-screen h-screen object-cover object-center brightness-[40%]'
                    }
                  />
                </div>
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div
        className={clsx(
          'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
          'text-center',
        )}
      >
        <h1 className={'text-4xl font-bold mb-4'}>HyprNeon</h1>
        <h2 className={'text-xl mb-4'}>
          i told my boy go roll like 10 blunts for me, fuck carti
        </h2>

        <div className="flex justify-center gap-4">
          <Link to={'/collections/all'}>
            <Button variant={'outline'}>catalog</Button>
          </Link>
          <Link to={'/contact'}>
            <Button variant={'outline'}>contact</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
