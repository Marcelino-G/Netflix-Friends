import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import UserProfile from './UserProfile';
import Form from './Form'

const main = ReactDOM.createRoot(document.getElementById('main'));



const Parent = () => {

  const [userInfo, setUserInfo] = useState({
    user_name: "",
    favorite_movie: "",
    api_key: "",
  })
  const [favoriteMovie, setFavoriteMovie] = useState({
    movie_title: "",
    movie_date: "",
    movie_img: "#"
  });
  const [searchedMovie, setSearchedMovie] = useState({
    movie_title: "",
    movie_date: "",
    movie_img: "#",
    movie_id: ""
  })
  const [addMovie, setAddMovie] = useState([{
    movie_title: "",
    movie_date: "",
    movie_img: "#",
    movie_id: ""
  }])
  

  const [searchMovie, setSearchMovie] = useState("#")
  const [formTrigger, setFormTrigger] = useState(false);
  const [searchTrigger, setSearchTrigger] = useState(false)

  useEffect(() => {

    const fetchh = async (x, y) => {
      let response = await fetch(`https://imdb-api.com/en/API/SearchMovie/${userInfo['api_key']}/${x}`) 
      let json = await response.json()
      // console.log(json)
      y(() => ({
        movie_title: json['results'][0]['title'],
        movie_date: json['results'][0]['description'],
        movie_img: json['results'][0]['image'],
        movie_id: json['results'][0]["id"]
      }))
      
      setSearchTrigger(false)
      
    }

    if(formTrigger === true){
      fetchh(userInfo['favorite_movie'], setFavoriteMovie);
    }

    if (searchTrigger === true){
      fetchh(searchMovie, setSearchedMovie)
      
    }

    
    
    
  }, [formTrigger, searchTrigger])

  const handleChangeUserInfo = (e) => {

    if (e.target.id === "user_name"){
        setUserInfo({
          ...userInfo,
          user_name: e.target.value
      })
    } else if (e.target.id === "api_key"){
        setUserInfo({
          ...userInfo,
          api_key: e.target.value
      })
    } else if (e.target.id === "favorite_movie"){
        setUserInfo({
          ...userInfo,
          favorite_movie: e.target.value
        })
    }
  }

  const handleChangeSearchInfo = (e) => {
    setSearchMovie(e.target.value)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormTrigger(true)
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchTrigger(true)
  }

  const handleClickAdd = () => {    
    setAddMovie(prev => {
      return [...prev,
        {
        movie_title: searchedMovie['movie_title'],
        movie_date: searchedMovie['movie_date'],
        movie_img: searchedMovie['movie_img'], 
        movie_id: searchedMovie['movie_id']      
      }]
    }
   )
  }

  return (
    <div>
      {
      formTrigger === true ? 
      <UserProfile 
      userName={userInfo["user_name"]} 
      favoriteMovieTitle={favoriteMovie['movie_title']} 
      favoriteMovieImg={favoriteMovie['movie_img']} 
      favoriteMovieDate={favoriteMovie['movie_date']}
      onSubmit={handleSearchSubmit}
      searchedMovieImg={searchedMovie['movie_img']}
      searchedMovieTitle={searchedMovie['movie_title']}
      searchedMovieDate={searchedMovie['movie_date']}
      onClick={handleClickAdd}
      addMovie={addMovie}
      onChangeSearchInfo={handleChangeSearchInfo}
      /> 
      : 
      <Form 
      onChangeUserInfo={handleChangeUserInfo} 
      value={userInfo} 
      onSubmit={handleFormSubmit}
      /> 
      }
    </div>
  )
}

main.render(<Parent/>)


