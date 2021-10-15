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
      ) : data ? (
        data.companies.map((companyData) => (
          <CompanyCard {...companyData} key={companyData.id} />
        ))
      ) : null}
    </div>
  )
}
export default CompaniesView
