import "./TrackList.sass";
import React from 'react';
import Track from '../Track/Track'

class TrackList extends React.Component{
    render(){
        return  <div className="TrackList">
                        {
                            this.props.tracks.map(track =>{
                                console.log(track)
                                return <Track track={track} key={track.id}/>
                                
                            })
                        }
                    
                </div>
        

    }
}
export default TrackList;