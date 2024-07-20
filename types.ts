import {Server as NetSerer, Socket} from 'net';

import { NextApiResponse } from 'next';

import {Server as SocketIOServer} from 'socket.io'

export type NextApiResponseServerio= NextApiResponse & {
    socket: Socket & {
        server: NetSerer & {
            io: SocketIOServer
        }
    }
}