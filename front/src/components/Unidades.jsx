import { Popover, Transition } from '@headlessui/react'
import { AiFillFileText, AiFillPlusCircle } from 'react-icons/ai'
import { Fragment } from 'react'

export default function Example () {
  const solutions = [
    {
      name: 'Primer trimestre',
      description: 'Floridablanca',
      href: '##'

    },
    {
      name: 'Segundo trimestre',
      description: 'Create your own targeted content',
      href: '##'

    }
  ]

  const unidadesDefault = [
    {
      name: 'caritas',
      centroZonal: 'Floridablanca',
      documents: {
        primerTrimestre: {
          name: 'este es el primer trimestre'
        },
        segundoTrimestre: {
          name: 'este es el segundo trimestre'
        }
      }
    },
    {
      name: 'exploradores',
      centroZonal: 'Floridablanca',
      documents: {
        primerTrimestre: {
          name: 'este es el primer trimestre'
        },
        segundoTrimestre: {
          name: 'este es el segundo trimestre'
        },
        tercerTrimestre: undefined
      }
    }
  ]

  return (
    <div className=' w-full max-w-full justify-center  px-4 flex'>
      {unidadesDefault.map((item) => {
        return (
          <Popover className='relative ' key={item.name}>

            {({ open }) => (
              <>
                <Popover.Button
                  className={`
                ${open ? '' : 'text-opacity-90'}
                group grid   items-center w-5/6 mt-10 rounded-md bg-white px-3 py-2 text-base font-medium  hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                  <span className='text-2xl mb-4'>{item.name}</span>
                  <span className='mb-4'>Centro zonal : {solutions[0].description}</span>
                  <span className=''>{item.documents.length}</span>

                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-200'
                  enterFrom='opacity-0 translate-y-1'
                  enterTo='opacity-100 translate-y-0'
                  leave='transition ease-in duration-150'
                  leaveFrom='opacity-100 translate-y-0'
                  leaveTo='opacity-0 translate-y-1'
                >
                  <Popover.Panel className='absolute left-60 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-1xl'>
                    <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                      <div className='relative grid gap-8 bg-white p-7 lg:grid-cols-1'>
                        {solutions.map((item) => (
                          <a
                            key={item.name}
                            className='-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none '
                          >
                            <div className='flex h-10 w-10 shrink-0 items-center justify-cente sm:h-12 sm:w-12'>
                              <AiFillFileText className='text-5xl text-primary-blue' />
                            </div>
                            <div className='ml-4'>
                              <p className='text-sm font-medium text-gray-900'>

                                {item.name}
                              </p>

                            </div>
                          </a>
                        ))}
                      </div>
                      <div className='bg-gray-50 p-4'>
                        <a
                          className='flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50'
                        >
                          <span className='flex items-center justify-center'>
                            <span className='text-sm  font-medium text-gray-900'>
                              <AiFillPlusCircle className='text-4xl text-primary-blue' />
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        )
      })}
      <button className='text-white bg-primary-blue-500 h-20'>nueva unidad</button>
    </div>
  )
}
