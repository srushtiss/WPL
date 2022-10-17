import React from 'react'

export default function Videos(props){
  const [formData,setFormData]=React.useState(
    {
      title:"",
      isAvailable:true
    }
  )
  const [searchedVideo,setSearchedVideo]=React.useState('')
  const [videoList,setVideoList]=React.useState(props.videos)
  function handle(e){
    const {name,value,type,checked}=e.target
    setFormData(prevData=>{
      return{
        ...prevData,
        [name]:type==="checkbox" ? checked:value
      }
    })
    setSearchedVideo(video=>video)
  }
  function searchedVideoList(){
    //console.log("dhsd")
    let d=props.videos.filter((video)=>{
      return (searchedVideo.length ? props.video.title.toLowerCase().includes(searchedVideo.toLowerCase()):true)
    })
    d=d.filter((video)=>{
        if(props.video.isAvailable)
          return video
        else 
          return false
    })
    setVideoList(d)
  }
  React.useEffect(()=>{
    searchedVideoList()
  },[searchedVideo])
  return(
    <div>
    <h1>Video List</h1>
    <form>
      <input 
      type="text"
      placeholder='Title of Video'
      name="title"
      onChange={handle}
      value={formData.title}
      />
      <input 
      type="checkbox"
      id="isAvailable"
      onChange={handle}
      checked={formData.isAvailable}
      name="isAvailable"
      />
      <label htmlFor='isAvailable'>Show available videos only</label>
    </form>
    {videoList.length>0 ? 
    props.videos.map((video) => (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{video.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{video.genre}</h6>
          <p className="card-text">{video.description}</p>
        </div>
      </div>
    ))
    : <div className="card">No matched video available</div>
}
  </div>
  )
}