'use client'

import { useSocket } from "@/context/socket-provider"
import { Badge } from "./ui/badge"

export const SocketIndicator = ()=>{
    const {isConnected} = useSocket()
    // console.log("🚀 ~ SocketIndicator ~ isConnected:", isConnected);

    if(!isConnected){
        return (
            <Badge className="bg-yellow-600 text-white border-none" variant="outline">
                Disconnected
            </Badge>
        )
    }

    return  <Badge className="bg-emerald-600 text-white border-none p-3" variant="outline">
    Live : Real Time Updates
</Badge>
}