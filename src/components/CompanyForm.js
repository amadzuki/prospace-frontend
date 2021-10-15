import { useForm } from 'react-hook-form'
import ErrorMessage from './ErrorMessage'
import { useAddCompanyMutation } from '../redux/services/company'

const CompanyForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [addCompany, { isLoading }] = useAddCompanyMutation()

  const onSubmit = (data) => {
    addCompany(data)
  }
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
            {...register('revenue', { required: true })}
          />
          {errors.revenue && ErrorMessage('Revenue is required!')}
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
              {...register('phoneCode', { required: true })}
            />
            <input
              className='input-box w-8/12'
              placeholder='number'
              type='text'
              {...register('phoneNumber', { required: true })}
            />
          </div>
          {(errors.phoneCode || errors.phoneNumber) &&
            ErrorMessage('Phone code and number is required!')}
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