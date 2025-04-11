import axios from 'axios'

const searchImages = async(term) => {
    const url = 'https://api.unsplash.com/search/photos/?client_id=k2glIeDajm80v6hiiVqJjHoAHy3C5NWq34ptd73wiUE'
    const res = await axios.get(url,{
        params:{
            query: term
        }
    })
    console.log(res)
    return res.data.results
}

export default searchImages