import axios from 'axios'


export const getData = (location, item) => {
  return  axios.get('https://api.yelp.com/v3/businesses/search', {
    headers: {
        Authorization: `Bearer ${process.env.MY_KEY}`
   },
   params: {
     location: location,
     item: item
   }
})

}
