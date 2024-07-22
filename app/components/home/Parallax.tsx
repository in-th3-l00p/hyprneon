import {clsx} from 'clsx';

export default function Parallax() {
  return (
    <section className={'relative w-full h-96 overflow-hidden mb-16'}>
      <div
        style={{
          backgroundImage: `url("/static/parallax.jpg")`,
        }}
        className={clsx(
          'bg-fixed bg-center bg-no-repeat bg-cover',
          'absolute top-0 left-0 w-full h-full',
          'brightness-[40%]',
        )}
      />

      <div
        className={clsx(
          'absolute top-0 w-[105%] -translate-y-1/2 -translate-x-2',
          'bg-zinc-950 rotate-2 h-32',
        )}
      ></div>
      <div
        className={clsx(
          'absolute bottom-0 w-[105%] translate-y-1/2 -translate-x-2',
          'bg-zinc-950 rotate-2 h-32',
        )}
      ></div>

      <div
        className={clsx(
          'absolute text-center',
          'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
        )}
      >
        <h2 className={'text-4xl font-bold mb-4'}>Products</h2>
        <p className={'text-lg'}>
          Discover our products sa muara sormea daca stiu ce sa mai zic
        </p>
      </div>
    </section>
  );
}
