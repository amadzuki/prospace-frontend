import { useGetCompaniesQuery } from '../redux/services/company'
import CompanyCard from './CompanyCard'

const CompaniesView = () => {
  const { data, error, isLoading } = useGetCompaniesQuery()

  return (
    <div className='grid grid-cols-2 gap-y-12 gap-x-16'>
      {error ? (
        <p>something went wrong...</p>
      ) : isLoading ? (
        <p>data is loading...</p>
      ) : data.companies.length === 0 ? (
        <p>There is no companies created yet...</p>
      ) : (
        data.companies.map((companyData) => (
          <CompanyCard {...companyData} key={companyData.id} />
        ))
      )}
    </div>
  )
}
export default CompaniesView
