import { Popover, Transition } from '@headlessui/react'
import { AiFillFileText, AiFillPlusCircle } from 'react-icons/ai'
import { useState, Fragment, useEffect } from 'react'
import Button from './Button'
import Modal from './Modal'
import ModalNewUnidad from './ModalNewUnidad'
import ModalNewTrimestre from './ModalNewTrimester'
import getUnitsService from '../services/getUnitsService'
import { useUserStore } from '../stores/useUserStore'
import { useModalStore } from '../stores/useModalStore'
import { useTrimesterStore } from '../stores/useTrimesterStore'
import { shallow } from 'zustand/shallow'
import { useNavbarStore } from '../stores/useNavbarStore'
import LoadingComponents from './LoadingComponents'
import { useUnitStore } from '../stores/useUnitStore'
import ModalViewTrimester from './ModalViewTrimester'

export default function Example () {
  const { openUnitModal, closeUnitModal, isOpenUnitModal } = useModalStore()
  const { openTrimesterModal, isOpenTrimesterModal, closeTrimesterModal, isOpenViewTrimesterModal, openViewTrimesterModal, closeViewTrimesterModal } = useModalStore()
  const { token } = useUserStore(store => store, shallow)
  const [unitsResponse, setUnits] = useState(false)
  const { hiddenTrue } = useNavbarStore(store => store, shallow)
  const { loadTrimester, setTrimesterId } = useTrimesterStore()
  const [loading, setLoading] = useState(false)
  const { setUnitId } = useUnitStore(store => store, shallow)

  useEffect(function () {
    hiddenTrue()
    setLoading(true)
    getUnitsService(token).then((response) => {
      loadTrimester(response.data.units)
      setUnits(response.data)
      setLoading(false)
    })
  }, [])

  function handlerClickModalTrimester (unitId) {
    openTrimesterModal()
    setUnitId(unitId)
  }

  function handlerClickGetTrimester (trimesterId, unitId) {
    openViewTrimesterModal()
    setUnitId(unitId)
    setTrimesterId(trimesterId)
  }

  if (loading) return <div className='h-full w-full grid place-items-center min-h-[50vh]'><LoadingComponents color='white' size={130} /></div>

  return (
    <div className=' w-full max-w-full justify-center  px-4 '>
      <div className='flex  flex-wrap gap-10 justify-center '>
        {unitsResponse && unitsResponse.units.map((unit) => {
          return (
            <Popover className='relative ' key={unit._id}>

              {({ open, close }) => (
                <>
                  <Popover.Button
                    className={`
                ${open ? '' : 'text-opacity-90'}
                group grid   items-center w-60 mt-10 rounded-md bg-white px-3 py-2 text-base font-medium  hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 `}
                  >
                    <span className='text-2xl mb-4 text-primary-blue-700'>{unit.name}</span>
                    <span className='mb-4'>{unit.zoneCenter}</span>
                    <span className=''>{unit.trimesters.length}</span>
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
                          {unit.trimesters.map((trimester) => (
                            <a
                              key={trimester._id}
                              className='-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none cursor-pointer'
                              onClick={() => {
                                handlerClickGetTrimester(trimester._id, unit._id, close)
                                close()
                              }}
                            >
                              <div className='flex h-10 w-10 shrink-0 items-center justify-cente sm:h-12 sm:w-12'>
                                <AiFillFileText className='text-5xl text-primary-blue' />
                              </div>
                              <div className='ml-4'>
                                <p className='text-sm font-medium text-gray-900'>
                                  {trimester.name}
                                </p>

                              </div>
                            </a>
                          ))}
                        </div>
                        <div className='bg-gray-100 p-4'>
                          <a
                            className='flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50'
                            onClick={() => {
                              handlerClickModalTrimester(unit._id)
                              close()
                            }}
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

        <Modal isOpen={isOpenTrimesterModal} close={closeTrimesterModal}>
          <ModalNewTrimestre />
        </Modal>

        <Modal isOpen={isOpenUnitModal} close={closeUnitModal}>
          <ModalNewUnidad />
        </Modal>

        <Modal isOpen={isOpenViewTrimesterModal} close={closeViewTrimesterModal}>
          <ModalViewTrimester />
        </Modal>
      </div>
      <div className='w-full flex justify-center mt-20'>
        <div className='w-60 '>
          <Button className='w-full' onClick={() => openUnitModal()}>Nueva unidad</Button>
        </div>
      </div>

    </div>
  )
}
