import PropTypes from 'prop-types'

const OfficeCard = ({ name, locationLat, locationLong, startDate }) => {
  return (
    <div className='max-w-md border border-gray-400 rounded p-2'>
      <div className='text-lg font-bold'>{name}</div>
      <hr className='' />
      <div className='my-4'>
        <p className='title'>Location:</p>
        <p className='description'>Lat - {locationLat}</p>
        <p className='description'>Log - {locationLong}</p>
      </div>
      <div className='my-4'>
        <p className='title'>Office Start Date:</p>
        <p className='description'>{startDate}</p>
      </div>
    </div>
  )
}

OfficeCard.propTypes = {
  name: PropTypes.string.isRequired,
  locationLat: PropTypes.string.isRequired,
  locationLong: PropTypes.number.isRequired,
  startDate: PropTypes.string.isRequired,
}

export default OfficeCard
