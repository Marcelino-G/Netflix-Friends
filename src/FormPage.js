import './App.css';
import logo from './Logo.png'

const FormPage = (props) => {

    return (
        <div id='formContainer' className='position-absolute top-50 start-50 translate-middle row p-3 bg-white rounded'>
            <div id='actualForm' className='col-lg-7 row justify-content-center mx-auto p-2 rounded'>
                <h1 id='moviePals' className='fst-italic rounded-top text-light'>Movie Pals</h1>

                <form onSubmit={props.onFormSubmit} className=" row justify-content-center p-2">
                    <div className=' row my-1'>
                        <label className=''>User Name</label>
                        <input className='' type="text" id="user_name" required onChange={props.onChangeUserInfo}></input>
                    </div>

                    <div className=' row my-1'>
                        <label className=''>Favorite Movie</label>
                        <input className='' type="text" id="favorite_movie" required onChange={props.onChangeUserInfo}></input>
                    </div>
            
                    <div className='row my-1'>
                        <label className='col'>IMDb-API Key</label>
                        <details className='col-lg-4 col-xl-3 border border-dark'>
                            <summary className='border border-dark text-end me-0 me-xl-3'>?</summary>
                            <div id="summaryDiv" className='position-absolute end-50 p-4 border border-4 border-dark'>
                                <p className="fw-semibold">How to get your API key</p>
                                <ul className='p-2'>
                                    <li>- Register for an IMDb-API Key <a className='text-reset' href='https://imdb-api.com/Identity/Account/Register'>here</a>.</li>
                                    <li className='my-2'>- Once logged in, head over to "Profile".</li>
                                    <li>- Copy and paste your own personal API Key.</li>
                                </ul>
                            </div>
                        </details>
                        <input className='' type="password" id="api_key" required onChange={props.onChangeUserInfo}></input>
                    </div>

                    <div className='my-1'>
                        <label className='' htmlFor="profile_picture" >Profile Picture?</label>
                        <input className='col-12' accept='image/*' type="file" id="profile_picture" onChange={props.onChangeUserInfo}></input>
                    </div>

                    <input className=' col-5 my-1' type="submit"></input>
                </form>
                
            </div>
            <img id="logo" className=' col-5 img-fluid' src={logo} />

            
            <dialog className='col-lg-5 col-xl-4' id="dialog" >
                <p className='fw-semibold'>Is this correct?</p>
                <ul className='row mx-auto'>
                    <li className='col-5 ms-2 text-center'>
                        <p className=''>User Name:</p>
                        <span className='text-capitalize fw-semibold fst-italic'>{props.userName}</span>
                    </li>
                    <li className='col-5 ms-4 text-center'>
                        <p className=''>Favorite Movie:</p>
                        <span className='text-capitalize fw-semibold fst-italic'>{props.favoriteMovie}</span>
                    </li>
                </ul>
                <div className='row justify-content-center mx-auto'>
                    <button className='mx-1 col-3' onClick={props.onClickConfirm}>Yes</button>
                    <button className='mx-1 col-3' onClick={props.onClickDeny}>No</button>
                </div>  
            </dialog>
        </div>
    )
}

export default FormPage;
