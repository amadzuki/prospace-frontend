import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import ErrorMessage from './ErrorMessage'
import { useAddCompanyMutation } from '../redux/services/company'

const CompanyForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const [addCompany, { isLoading, isError, isSuccess }] =
    useAddCompanyMutation()

  const onSubmit = (data) => {
    addCompany(data)
  }

  useEffect(() => {
    if (!isLoading && isError) {
      console.log('error toast code')
      toast.error('Office creation failure...')
    } else if (!isLoading && isSuccess) {
      console.log('success toast code')
      toast.success('Successfully add new office!')
      reset()
    }
  }, [isError, isSuccess])

  return (
    <div className='container max-w-md'>
      <h1 className='text-xl font-semibold mb-4'>Create Company</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col mb-2'>
          <label className='font-bold text-sm text-gray-800' htmlFor='name'>
            Name:{' '}
          </label>
          <input
            className='input-box'
            placeholder='name'
            type='text'
            {...register('name', { required: true })}
          />
          {errors.name && ErrorMessage('Name is required!')}
        </div>
        <div className='flex flex-col mb-2'>
          <label className='font-bold text-sm text-gray-800' htmlFor='address'>
            Address:{' '}
          </label>
          <input
            className='input-box'
            placeholder='address'
            type='text'
            {...register('address', { required: true })}
          />
          {errors.address && ErrorMessage('Address is required!')}
        </div>
        <div className='flex flex-col mb-2'>
          <label className='font-bold text-sm text-gray-800' htmlFor='revenue'>
            Revenue:{' '}
          </label>
          <input
            className='input-box'
            placeholder='revenue'
            type='number'
            {...register('revenue', { required: true, min: 1 })}
          />
          {errors.revenue &&
            ErrorMessage('Revenue is required and cannot be negative!')}
        </div>
        <div className='flex flex-col mb-2'>
          <label
            className='font-bold text-sm text-gray-800'
            htmlFor='phoneCode'
          >
            Phone no.:
          </label>
          <div className='flex justify-between'>
            <input
              className='input-box w-3/12'
              placeholder='code'
              type='text'
              {...register('phoneCode', {
                required: true,
                pattern: /^[0-9]*$/,
              })}
            />
            <input
              className='input-box w-8/12'
              placeholder='number'
              type='text'
              {...register('phoneNumber', {
                required: true,
                pattern: /^[0-9]*$/,
              })}
            />
          </div>
          {(errors.phoneCode || errors.phoneNumber) &&
            ErrorMessage(
              'Phone code and number is required and must be number!'
            )}
        </div>
        <input
          disabled={isLoading}
          type='submit'
          className='w-full rounded p-2 mt-4 cursor-pointer hover:bg-yellow-100'
          value={isLoading ? 'Adding company...' : 'Create'}
        />
      </form>
    </div>
  )
}

export default CompanyForm
