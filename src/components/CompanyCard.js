import PropTypes from 'prop-types'

const CompanyCard = ({ name, address, revenue, phoneCode, phoneNumber }) => {
  return (
    <div className='max-w-md border border-gray-400 rounded p-2'>
      <div className='text-lg font-bold'>{name}</div>
      <hr className='' />
      <div className='my-4'>
        <p className='title'>Address:</p>
        <p className='description'>{address}</p>
      </div>
      <div className='my-4'>
        <p className='title'>Revenue:</p>
        <p className='description'>{revenue}</p>
      </div>
      <div className='my-4'>
        <p className='title'>Phone No.:</p>
        <p className='description'>
          ({phoneCode}) {phoneNumber}
        </p>
      </div>
    </div>
  )
}

CompanyCard.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  revenue: PropTypes.string.isRequired,
  phoneCode: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
}

export default CompanyCard
