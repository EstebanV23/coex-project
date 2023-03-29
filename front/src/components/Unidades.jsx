import { Popover, Transition } from '@headlessui/react'
import { IoMdAdd } from 'react-icons/io'
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
import ButtonsActionsTrimester from './ButtonsActionsTrimester'
import ModalEditTrimester from './ModalEditTrimester'

export default function Unidades () {
  const { openUnitModal, closeUnitModal, isOpenUnitModal } = useModalStore()
  const { openTrimesterModal, isOpenTrimesterModal, closeTrimesterModal, isOpenViewTrimesterModal, openViewTrimesterModal, closeViewTrimesterModal, isOpenEditTrimester, closeEditTrimester, resetValuesModals } = useModalStore(store => store, shallow)
  const { token } = useUserStore(store => store, shallow)
  const [unitsResponse, setUnits] = useState(false)
  const { hiddenTrue } = useNavbarStore(store => store, shallow)
  const { loadTrimester, setTrimesterId } = useTrimesterStore()
  const [loading, setLoading] = useState(true)
  const { setUnitId, getChange } = useUnitStore(store => store, shallow)

  useEffect(() => {
    resetValuesModals()
    hiddenTrue()
    setLoading(true)
    getUnitsService(token).then((response) => {
      loadTrimester(response.data.units)
      setUnits(response.data)
      setLoading(false)
    })
  }, [getChange])

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
    <div className='w-full max-w-[1000px] py-4 m-auto'>
      <div className='flex w-full flex-wrap gap-7 justify-center '>
        {unitsResponse && unitsResponse.units.map((unit) => {
          const porcent = `w-[${(unit.trimesters.length / 4) * 100}%]`
          return (
            <Popover className='relative' key={unit._id}>
              {({ close }) => (
                <>
                  <div className='flex flex-col items-center px-10 py-5 bg-white rounded-xl shadow-2xl gap-5 basis-1'>
                    <div className='flex flex-col self-start'>
                      <span className='text-xl text-primary-blue-800 font-bold leading-none'>{unit.name}</span>
                      <span className='text-xs leading-none'>{unit.zoneCenter}</span>
                    </div>
                    <div className='w-full text-left'>
                      <span className='bg-gray-200 relative block h-2 rounded-full w-full'><span className={`h-full absolute top-0 left-0 bg-primary-blue rounded-full ${porcent}`} /></span>
                      <span className='text-base'>{unit.trimesters.length}/4</span>
                    </div>
                    <Popover.Button
                      className='bg-primary-blue-200 transition-all ease-in-out text-base text-primary-blue-900 rounded-md w-full py-2 px-12 sm:px-16 bg-opacity-80 hover:bg-primary-blue-300'
                    >
                      Trimestres
                    </Popover.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-200'
                    enterFrom='opacity-0 translate-y-1'
                    enterTo='opacity-100 translate-y-0'
                    leave='transition ease-in duration-150'
                    leaveFrom='opacity-100 translate-y-0'
                    leaveTo='opacity-0 translate-y-1'
                  >
                    <Popover.Panel className='absolute left-0 z-10 top-full mt-2 w-full shadow-2xl rounded-lg overflow-hidden border'>
                      <div className='relative flex flex-col gap-2 bg-white px-5 py-5'>
                        <p className='leading-none text-sm border-b pb-3'>Documentos</p>
                        {unit.trimesters.map((trimester, index) => (
                          <a
                            key={trimester._id}
                            className=' flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-primary-blue-100 focus:outline-none cursor-pointer'
                            onClick={() => {
                              handlerClickGetTrimester(trimester._id, unit._id, close)
                              close()
                            }}
                          >
                            <div className='ml-4 flex items-center justify-between w-full font-medium text-base text-primary-blue-900'>
                              <p className='text-sm capitalize'>
                                {trimester.name} {index + 1}
                              </p>
                              <div className='text-2xl'>
                                <ButtonsActionsTrimester trimester={trimester._id} unit={unit._id} />
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                      <div className='bg-gray-100 p-4'>
                        <a
                          className='flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-primary-blue-300 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 bg-primary-blue-200 focus-visible:ring-opacity-50 cursor-pointer'
                          onClick={() => {
                            handlerClickModalTrimester(unit._id)
                            close()
                          }}
                        >
                          <span className='flex items-center gap-0 justify-center text-base'>
                            <IoMdAdd /> Agregar
                          </span>
                        </a>
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

        <Modal isOpen={isOpenEditTrimester} close={closeEditTrimester}>
          <ModalEditTrimester />
        </Modal>
      </div>
      <div className='w-full flex justify-center mt-20'>
        <div className='w-60 '>
          <Button className='w-full flex items-center justify-center' onClick={() => openUnitModal()}><IoMdAdd /> Nueva unidad</Button>
        </div>
      </div>

    </div>
  )
}
