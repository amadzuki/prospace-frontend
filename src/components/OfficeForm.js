import { useForm, Controller } from 'react-hook-form'
import DatePicker from 'react-datepicker'
import ErrorMessage from './ErrorMessage'

const OfficeForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }
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
              {...register('lat', { required: true })}
            />
            <input
              className='input-box'
              placeholder='longitude'
              type='text'
              {...register('lang', { required: true })}
            />
          </div>
          {(errors.lat || errors.lang) &&
            ErrorMessage('Location coordinate is required!')}
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
            <option value='1'>Apple</option>
            <option value='2'>Tesla</option>
          </select>
          {(errors.phoneCode || errors.phoneNumber) &&
            ErrorMessage('Phone code and number is required!')}
        </div>
        <input
          type='submit'
          className='w-full rounded p-2 mt-4 cursor-pointer hover:bg-yellow-100'
          value='Create'
        />
      </form>
    </div>
  )
}

export default OfficeForm
