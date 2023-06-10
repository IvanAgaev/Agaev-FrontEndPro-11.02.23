import { NavLink, Route, Routes } from 'react-router-dom'
import Albums from './Albums'

export function UsersList({ users }) {

    return (
        <>
            <div className="container">
                <h2 className="text-center my-5">Список користувачів</h2>
                <nav>
                    <ul>
                        <li><NavLink to='/'>Main Page</NavLink></li>
                        <li><NavLink to='/albums'>Albums</NavLink></li>
                        <Routes>
                            <Route path='/albums/*' element = {<NavLink to={'photos'}> Photos </NavLink>}></Route>
                        </Routes>
                    </ul>
                </nav>
                <div className="row d-flex justify-content-center card-container row-gap">
                    {users.map(user => {

                        return (
                            <div className=" col-12 col-md-6 col-xl-3 col-lg-4 d-flex justify-content-center align-items-center mb-3" key={user.id}>
                                    <div className="card  h-100" style={{ width: '18rem' }} >
                                        <div className="card-body">
                                            <h5 className="card-title">Full name - {user.name}</h5>
                                            <h6 className="card-subtitle mb-2 text-muted">UserName - {user.username}</h6>
                                            <h6 className="card-subtitle mb-2 text-muted">Email - {user.email}</h6>
                                            <h6 className="card-subtitle mb-2 text-muted">Website - {user.website}</h6>
                                            <h6 className="card-subtitle mb-2 text-muted">Description</h6>
                                        <p className="card-text">{user.company.catchPhrase}</p>
                                        <Routes>
                                            <Route path='/albums/*' element={<Albums userId={user.id} />} />
                                            <Route path='/albums/photos' element={<Albums userId={user.id} isPhotos='true' />} />
                                        </Routes>
                                    </div>
                                </div>
                                </div>
                        )
                    })}

                </div>
            </div>
            </>
        
    )
}