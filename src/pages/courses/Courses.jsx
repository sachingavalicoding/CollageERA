import Card from '../../Components/Card'
import './courses.css'
const Courses = () => {
  return (
    <section className='container courses__container'>
        <h5> Preview </h5>
        <h2> Featured Courses </h2>
        <h5> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, illo?</h5>
        <div className="card__container">
            <Card /> 
            <Card /> 
            <Card /> 
            <Card /> 
        </div>
    </section>
  )
}

export default Courses