import React, { createContext } from 'react'
import { useContext, useState, useEffect, useLayoutEffect } from 'react';
import { db } from '../firebase';
import getCookie from '../hooks/getCookie';

const MessageContext = createContext();

const MessageProvider=({children})=>{
    const [rooms, setRooms] = useState([]);
    const [selectedRoomId, setSelectedRoomId] = useState(0);
    const [messages, setMessages] = useState([]);
    const [notSeenCount, setNotSeenCount] = useState(0);
    const [notification, setNotification] = useState([]);
    const [notiCount, setNotiCount] = useState(0);

    useEffect(()=>{
        let resJSON ;
        const res = getCookie('userin');
        if(res)
            resJSON = JSON.parse(res)
        console.log(resJSON);
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
            let data1 = db.collection('rooms').where('members', 'array-contains', 1);
            data1.onSnapshot((snapshot)=>{
                const Doc = snapshot.docs.map((doc)=>({...doc.data(), id:doc.id}))
                setRooms(Doc)
            })
        }
    }, []);
    useEffect(()=>{
        let data = db.collection('messages').where('roomId', '==', selectedRoomId);
        let countdata = data.where('seen', '==', 0);
        data.onSnapshot((snapshot)=>{
            const Doc = snapshot.docs.map((doc)=>({...doc.data(), id:doc.id}))
            setMessages(Doc)
        })
        countdata.onSnapshot((snapshot=>{
          setNotSeenCount(snapshot.size)
        }))
      },[selectedRoomId, notSeenCount])
    return (
        <MessageContext.Provider value={{
            rooms,
            setRooms,
            messages,
            setMessages,
            selectedRoomId,
            setSelectedRoomId,
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