import React from 'react';
import Videos from './videos';


    export default function App(){

      const [videosData,setVideosData]=React.useState([])
      
      React.useEffect(() => {
            fetch('./videos.json')
            .then(res => res.json())
            .then((data) => {
              setVideosData(data)
            })
      }, [])

      

         return (
          <Videos 
          videos={videosData} 
          />
         )

      }