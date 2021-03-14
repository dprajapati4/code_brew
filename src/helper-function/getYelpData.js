import axios from 'axios'


export const getData = (location, item) => {
  return axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search`, {
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_MY_KEY}`
   },
   params: {
     location: location,
     term: item
   }
})

}
