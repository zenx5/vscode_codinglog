const axios = require('axios');

const Request = async (url)=> {
    return await axios.get(url);    
}

module.exports={
    Request
}
    
