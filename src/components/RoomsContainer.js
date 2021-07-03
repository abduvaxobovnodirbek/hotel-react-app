import React from 'react'
import RoomsFilter from "./RoomFilter"
import RoomsList from "./RoomsList"
import {RoomConsumer} from "../contex"
import Loading from "./Loading"
export default function RoomsContainer() {
    return (
        <RoomConsumer>
            {
                (value)=>{
                    const {loading,sortedRooms,rooms} = value
                    if(loading){
                        return <Loading/>
                    }
                    return (
                        <>
                        <RoomsFilter rooms = {rooms}/>
                        <RoomsList  rooms = {sortedRooms}/>
                        </>
                    )
                }
            }
        </RoomConsumer>
    )
}
