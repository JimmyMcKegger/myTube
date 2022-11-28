import axios from 'axios';

const KEY = 'AIzaSyCoVtEreEP7292MgYInWZTlc-BSHvI2EaA';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});