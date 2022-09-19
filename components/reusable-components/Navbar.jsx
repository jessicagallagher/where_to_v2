import img from '../../public/logo.png'
import { Button } from '../reusable-components'
import Image from 'next/image';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { PlusIcon } from '@heroicons/react/20/solid';

export default function Navbar() {
  const navigation = [
    { name: 'Home', href: '/dashboard' },
    { name: 'Itineraries', href: '#' },
    { name: 'Calendar View', href: '#' },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <Disclosure as='nav' className='bg-greyDefault'>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='flex h-16 justify-between'>
              <div className='flex'>
                <div className='-ml-2 mr-2 flex items-center md:hidden'>
                  {/* Mobile menu button */}
                  <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                    <span className='sr-only'>Open main menu</span>
                    {open ? (
                      <XMarkIcon className='block h-6 w-6 text-greyLight' aria-hidden='true' />
                    ) : (
                      <Bars3Icon className='block h-6 w-6 text-greyLight' aria-hidden='true' />
                    )}
                  </Disclosure.Button>
                </div>
                <div className='flex flex-shrink-0 items-center'>
                  <Image
                    src={img}
                    height={30}
                    width={25}
                    className='block h-8 w-auto lg:hidden'
                    alt='where to logo'
                  />
                </div>
                <div className='hidden md:ml-6 md:flex md:items-center md:space-x-4 text-greyLight'>
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-teal'
                          : 'text-greyLight hover:bg-teal hover:text-greyDefault',
                        'px-3 py-2 rounded-md text-sm font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className='flex items-center'>
                <div className='flex-shrink-0'>
                  <Button buttonText={'New Itinerary'} buttonType={'button'}/>
                </div>
                <div className='hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center'>
                  <Button buttonText={'Log out'} buttonType={'button'} />
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='md:hidden'>
            <div className='space-y-1 px-2 pt-2 pb-3 sm:px-3'>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as='a'
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-teal'
                      : 'text-greyLight hover:bg-teal hover:text-greyDefault',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className='border-t border-greyLight pt-4 pb-3'>
              <div className='flex items-center px-5 sm:px-6'>
                <Button buttonText={'Log out'} buttonType={'button'}/>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
