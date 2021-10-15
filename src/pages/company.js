import { useParams, Link } from 'react-router-dom'
import { useGetOfficesQuery } from '../redux/services/company'
import OfficeCard from '../components/OfficeCard'

const Company = () => {
  const { id } = useParams()

  const { data, error, isLoading } = useGetOfficesQuery(+id)

  return (
    <div className='container px-36 py-12'>
      <div className='border rounded p-4'>
        {error ? (
          <p>something went wrong...</p>
        ) : isLoading ? (
          <p>data is loading...</p>
        ) : data.companyData.length === 0 ? (
          <p>There is no such company in the database...</p>
        ) : (
          <div>
            <h1 className='text-2xl font-semibold'>{data.companyData.name}</h1>
            <hr className='mt-2' />
            <div className='my-4'>
              <h2 className='text-md font-bold'>Address: </h2>
              <p className='text-lg'>{data.companyData.address}</p>
            </div>
            <div className='my-4'>
              <h2 className='text-md font-bold'>Revenue: </h2>
              <p className='text-lg'>{data.companyData.revenue}</p>
            </div>
            <div className='flex justify-between'>
              <div className='my-4'>
                <h2 className='text-md font-bold'>Phone No.: </h2>
                <p className='text-lg'>
                  ({data.companyData.phoneCode}) {data.companyData.phoneNumber}
                </p>
              </div>
              <Link to='/'>
                <button className='border rounded px-6 py-2 self-end bg-gray-300 hover:bg-yellow-100'>
                  Back to Overview
                </button>
              </Link>
            </div>
            <hr className='my-4' />
            <h1 className='text-2xl mb-2'>Offices</h1>
            <div className='grid grid-cols-2 gap-y-12 gap-x-16'>
              {data.companyData.offices.map((officeData) => (
                <OfficeCard {...officeData} key={officeData.id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Company
