import React, { createContext } from 'react'
import { useContext, useState, useEffect, useLayoutEffect } from 'react';
import { db } from '../firebase';
import getCookie from '../hooks/getCookie';

const MessageContext = createContext();

const MessageProvider=({children})=>{
    const [rooms, setRooms] = useState([]);
    const [selectedRoom, setSelectedRoom] = useState(0);
    const [messages, setMessages] = useState([]);
    const [notSeenCount, setNotSeenCount] = useState(0);
    const [notification, setNotification] = useState([]);
    const [notiCount, setNotiCount] = useState(0);

    useEffect(()=>{
        let resJSON ;
        const res = getCookie('userin');
        if(res)
            resJSON = JSON.parse(res)
            //console.log(resJSON);
        if(resJSON){
            let data = db.collection('notifications').where('user2', 'array-contains', resJSON.id);
            if(data) {
                let count = data.where('seen', '==', 0)
                data.onSnapshot((snapshot)=>{
                    const Doc = snapshot.docs.map((doc)=>({...doc.data(), id:doc.id}))
                    setNotification(Doc)
                })
                count.onSnapshot((snapshot)=>{
                    setNotiCount(snapshot.size)
                })
            }          
            let data1 = db.collection('rooms').where('members', 'array-contains', resJSON.id);
            data1.onSnapshot((snapshot)=>{
                const Doc = snapshot.docs.map((doc)=>({...doc.data(), id:doc.id}))
                setRooms(Doc)
            })
        }
    }, []);
    useEffect(()=>{
        if(selectedRoom){
        let data = db.collection('messages').where('roomId', '==', selectedRoom.id).orderBy('createdAt')//selectedRoom.id);
        let countdata = data.where('seen', '==', 0);
        data.onSnapshot((snapshot)=>{
            const Doc = snapshot.docs.map((doc)=>({...doc.data(), id:doc.id}))
            setMessages(Doc)
        })
        countdata.onSnapshot((snapshot=>{
          setNotSeenCount(snapshot.size)
        }))
        }
      },[selectedRoom, notSeenCount])
    return (
        <MessageContext.Provider value={{
            rooms,
            setRooms,
            messages,
            setMessages,
            selectedRoom,
            setSelectedRoom,
            notSeenCount,
            setNotSeenCount,
            notiCount,
            setNotiCount,
            notification,
            setNotification
        }}>
            {children}
        </MessageContext.Provider>
    );
}

export {MessageContext, MessageProvider}