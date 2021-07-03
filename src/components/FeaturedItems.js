import React, { Component } from 'react'
import { RoomContext } from '../contex'
import Loading from "./Loading"
import Room from './Room';
import Title from './Title';
export default class FeaturedItems extends Component {
    static contextType = RoomContext;
    render() {
        const {featuredRooms,loading} = this.context
        const myRoom = featuredRooms.map(room=><Room  key = {room.id} room = {room}/>)
        return (
            <section className ="featured-rooms">
                <Title title = "featured rooms"/>
                <div className="featured-rooms-center">
                    {loading?<Loading/>:myRoom}
                </div>
            </section>
        )
    }
}
