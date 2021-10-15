import CompanyForm from '../components/CompanyForm'
import OfficeForm from '../components/OfficeForm'
import CompaniesView from '../components/CompaniesView'

const Home = () => {
  return (
    <div className='container px-36 py-12'>
      <div className='border rounded p-4'>
        <div className='flex flex-wrap justify-between'>
          <CompanyForm />
          <div className='my-4 border border-l border-r-0 border-gray-300 min-h-full' />
          <OfficeForm />
        </div>
        <hr className='mt-8' />
        <h1 className='text-3xl my-4'>Companies</h1>
        <CompaniesView />
      </div>
    </div>
  )
}

export default Home
