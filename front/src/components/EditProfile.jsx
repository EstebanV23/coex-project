import { Formik } from 'formik'
import { useEffect } from 'react'
import { shallow } from 'zustand/shallow'
import { useProfileStore } from '../stores/useProfileStore'

export default function EditProfile () {
  const { hiddenProfileTrue } = useProfileStore(store => store, shallow)
  useEffect(() => {
    hiddenProfileTrue()
  }, [])
  return (
    <Formik>
      {() => {}}
    </Formik>
  )
}
