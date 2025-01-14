import AbtImg from '../../assests/abtImg.png'
import '../../App.css'
const AbtHmSect = () => {
  return (
    <div className='bg-dark text-white'>
    <div className='container d-flex justify-content-center align-items-center flex-wrap gap-5'>
      <div className='col-md-5'>
        <img src={AbtImg} alt="image" className='w-100' />
      </div>
      <div className='col-md-5'>
        <h2 className='all-headers'>Meet Our Company Unless Miss The Opportunity</h2>
        <p>Hey there! So glad you stopped by to Meet Our Company. Don't miss out on this opportunity to learn about what we do and the amazing team that makes it all happen! Our company is all about creating innovative solutions and providing top-notch services to our clients. From start to finish, we're dedicated to delivering results that exceed expectations.</p>
        <button className='btn btn-success'>Explore More</button>
      </div>
    </div>  
    </div>
    
  )
}

export default AbtHmSect