import img from '../../public/logo.png'
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function NotAuthorizedNotFound({ headerText, mainText, ctaText }) {
  const router = useRouter();

  const getHref = () => {
    if (headerText === 'Unauthorized') {
router.push('/login')
    } else {
      router.back();
    }
  }

  return (
    <div className='flex h-full flex-col py-52'>
      <main className='mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-shrink-0 justify-center'>
          <span className='sr-only'>where to logo</span>
          <Image src={img} height={100} width={70} />
        </div>
        <div className='py-10'>
          <div className='text-center'>
            <h1 className='mt-2 text-4xl font-bold tracking-tight sm:text-5xl'>
              {headerText}
            </h1>
            <p className='mt-2 text-base text-purple font-semibold lg:text-lg'>
              {mainText}
            </p>
            <div className='mt-6 text-purple'>
              <a onClick={getHref} className='text-base font-semibold lg:text-lg cursor-pointer'>
                  <span aria-hidden='true'> &larr;</span>
                  {ctaText}
                </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
