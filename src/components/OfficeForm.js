import { useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import DatePicker from 'react-datepicker'
import { toast } from 'react-toastify'
import {
  useGetCompaniesQuery,
  useAddOfficeMutation,
} from '../redux/services/company'
import ErrorMessage from './ErrorMessage'

const OfficeForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm()

  const { data, error, isLoading } = useGetCompaniesQuery()

  const [addOffice, { isLoading: isPosting, isError, isSuccess }] =
    useAddOfficeMutation()

  const onSubmit = (data) => {
    addOffice(data)
  }

  useEffect(() => {
    if (!isPosting && isError) {
      console.log('error toast code')
      toast.error('Office creation failure...')
    } else if (!isPosting && isSuccess) {
      console.log('success toast code')
      toast.success('Successfully add new office!')
      reset()
    }
  }, [isError, isSuccess])

  return (
    <div className='container max-w-md'>
      <h1 className='text-xl font-semibold mb-4'>Create Office</h1>
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
          <label className='font-bold text-sm text-gray-800' htmlFor='lat'>
            Location:{' '}
          </label>
          <div className='flex justify-between'>
            <input
              className='input-box w-6/12'
              placeholder='latitude'
              type='text'
              {...register('lat', { required: true, pattern: /\.*\d+$/ })}
            />
            <input
              className='input-box'
              placeholder='longitude'
              type='text'
              {...register('long', { required: true, pattern: /\.*\d+$/ })}
            />
          </div>
          {(errors.lat || errors.long) &&
            ErrorMessage('Appropriate location coordinate is required!')}
        </div>
        <div className='flex flex-col mb-2'>
          <label
            className='font-bold text-sm text-gray-800'
            htmlFor='startDate'
          >
            Office Start Date:{' '}
          </label>
          <Controller
            name='startDate'
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <DatePicker
                className='input-box w-full'
                onChange={onChange}
                onBlur={onBlur}
                selected={value}
                placeholderText='date'
              />
            )}
          />

          {errors.startDate && ErrorMessage('Start date is required!')}
        </div>
        <div className='flex flex-col mb-2'>
          <label
            className='font-bold text-sm text-gray-800'
            htmlFor='companyId'
          >
            Company:{' '}
          </label>
          <select
            placeholder='select company'
            className='pl-0.5 py-0 input-box'
            defaultValue=''
            {...register('companyId', { required: true })}
          >
            <option value='' disabled hidden>
              select company
            </option>
            {error ? (
              <option value='' disabled hidden>
                something went wrong
              </option>
            ) : isLoading ? (
              <option value='' disabled hidden>
                data is loading...
              </option>
            ) : data.companies.length === 0 ? (
              <option value='' disabled hidden>
                There is no company created yet...
              </option>
            ) : (
              data.companies.map((company) => (
                <option value={company.id} key={company.id}>
                  {company.name}
                </option>
              ))
            )}
          </select>
          {errors.companyId && ErrorMessage('Affiliated company is required!')}
        </div>
        <input
          disabled={isPosting}
          type='submit'
          className='w-full rounded p-2 mt-4 cursor-pointer hover:bg-yellow-100'
          value={isPosting ? 'Adding new office...' : 'Create'}
        />
      </form>
    </div>
  )
}

export default OfficeForm
