import './navbar.css'
const Navbar = () => {
  return (
    <header className=' header__container'>
        <h3> Brand Name </h3>
        {/*  Navlinks  */}
        <nav className='nav'>
            <ul className='nav-list'>
                {
                  links.map(({title,path}, index) => {
                   return(
                    <li> <a href={path}> {title} </a> </li>
                   )
                  })
                }
            </ul>
        </nav>
        <div className="buttons">
            <button className='btn-sec'> Login </button>
            <button className='btn-primary'> Sign up </button>
        </div>
        <button className='toggle'> CL </button>
    </header>
  )
}

export default Navbar;

const links = [
    {
       title:'Home',
       path:'/'
    },

    {
        title:'Courses',
        path:'/about'
    },
    {
        title:'About',
        path:'/about'
    },
    {
        title:'Blog',
        path:'/about'
    },
    {
        title:'Contact',
        path:'/about'
    },
]