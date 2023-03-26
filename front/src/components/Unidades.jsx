import { Popover, Transition } from '@headlessui/react'
import { AiFillFileText, AiFillPlusCircle } from 'react-icons/ai'
import { useState, Fragment } from 'react'

import Button from './Button'
import Modal from './Modal'
import ModalNewUnidad from './ModalNewUnidad'

export default function Example () {
  const [changeModal, setChangeModal] = useState(false)

  const responseData = {
    msg: 'Nutritionist',
    data: {
      _id: '641f63ff382744465215fd65',
      name: 'Esteban',
      surname: 'Villamizar',
      email: 'brayan.villa.fer@gmail.com',
      isVerified: true,
      units: [
        {
          _id: '642065ad5d8f73ce4aae8039',
          name: 'Caritas',
          zoneCenter: 'Bucaramanga',
          createdAt: '2023-03-26T15:33:01.969Z',
          nutritionist: '641f63ff382744465215fd65',
          trimesters: [
            {
              _id: '64206e99189e67bded888a7c',
              name: 'Trimestre 1',
              pathDocument: 'http://localhost:500/midocumento.xls',
              createdAt: '2023-03-26T16:11:05.813Z',
              unit: '642065ad5d8f73ce4aae8039',
              __v: 0
            },
            {
              _id: '64206eb28447db25d466ed54',
              name: 'Trimestre 2',
              pathDocument: 'http://localhost:500/midocumento.xls',
              createdAt: '2023-03-26T16:11:30.264Z',
              unit: '642065ad5d8f73ce4aae8039',
              __v: 0
            },
            {
              _id: '6420719d381a3a74b7e3d647',
              name: 'Trimestre 3',
              pathDocument: 'http://localhost:500/midocumento.xls',
              createdAt: '2023-03-26T16:23:57.737Z',
              unit: '642065ad5d8f73ce4aae8039',
              __v: 0
            },
            {
              _id: '642073276916bd43abc1d097',
              name: 'Trimestre 4',
              pathDocument: 'http://localhost:500/midocumento.xls',
              createdAt: '2023-03-26T16:30:31.448Z',
              unit: '642065ad5d8f73ce4aae8039',
              __v: 0
            }
          ],
          __v: 0
        },
        {
          _id: '64206bb61ef350da28b706c1',
          name: 'Caritas2',
          zoneCenter: 'Bucaramanga',
          createdAt: '2023-03-26T15:58:46.606Z',
          nutritionist: '641f63ff382744465215fd65',
          trimesters: [],
          __v: 0
        }
      ]
    }
  }

  function openclose () {
    setChangeModal(true)
  }

  return (
    <div className=' w-full max-w-full justify-center  px-4 '>
      <div className='flex  flex-wrap gap-10 justify-center '>
        {responseData.data.units.map((item) => {
          return (
            <Popover className='relative ' key={item.name}>

              {({ open }) => (
                <>
                  <Popover.Button
                    className={`
                ${open ? '' : 'text-opacity-90'}
                group grid   items-center w-60 mt-10 rounded-md bg-white px-3 py-2 text-base font-medium  hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 `}
                  >
                    <span className='text-2xl mb-4 text-primary-blue-700'>{item.name}</span>
                    <span className='mb-4'>{item.zoneCenter}</span>
                    <span className=''>{item.trimesters.length}</span>
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
                    <Popover.Panel className='absolute left-60 z-10 mt-3 w-full max-w-xs -translate-x-full transform px-4 sm:px-0 md:w-screen lg:max-w-md lg:-translate-x-1/2'>
                      <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                        <div className='relative grid gap-8 bg-white p-7 lg:grid-cols-1'>
                          {item.trimesters.map((item) => (
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
                            <span className='flex items-center justify-center cursor-pointer'>
                              <span className='text-sm  font-medium text-gray-900 '>
                                <AiFillPlusCircle className='text-4xl text-primary-blue ' />
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

        <Modal isOpen={changeModal} close={setChangeModal}>
          <ModalNewUnidad />
        </Modal>
      </div>
      <div className='w-full flex justify-center mt-20'>
        <div className='w-60 '>
          <Button onClick={openclose}>Nueva unidad</Button>
        </div>
      </div>

    </div>
  )
}
