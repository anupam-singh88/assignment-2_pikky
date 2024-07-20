"use client"
import {
    createContext,
    useContext,
    useEffect,
    useState,
    } from "react";
import { io as ClientIO, Socket } from "socket.io-client";

type SocketContextType ={
    socket : any | null;
    isConnected :boolean
}
const SocketContext = createContext<SocketContextType>({
    socket:null,
    isConnected:false
})


export const useSocket = ()=>{
    return useContext(SocketContext)
}

export const SocketProvider =  ({children}:{children : React.ReactNode})=>{
    const [socket, setSocket] = useState<Socket | null>(null)
    const [isConnected, setIsConnected] = useState(false)
    // console.log(process.env.NEXT_PUBLIC_SITE_URL)
    useEffect(()=>{
        const newSocketInstance = (ClientIO as any)("http://localhost:3000/",{
            path: "/api/socket/io",
            addTrailingSlash: false,
            withCredentials:true
        })
        setSocket(newSocketInstance)
        newSocketInstance.on("connect",()=>{
            // console.log('object')
            setIsConnected(true)
        })
        newSocketInstance.on("disconnect",()=>{
            setIsConnected(false)
        })
        return ()=>{
            newSocketInstance.disconnect()
        }
    },[])
    return <SocketContext.Provider value={{socket,isConnected}}>{children}</SocketContext.Provider>

}