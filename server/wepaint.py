from SimpleWebSocketServer import SimpleWebSocketServer, WebSocket

clients = []


class WePaint(WebSocket):
    def handleMessage(self):
        for client in clients:
            print(self.data)
            if client != self:
                client.sendMessage(self.data)                

    def handleConnected(self):
        print(self.address, 'connected')
        clients.append(self)

    def handleClose(self):
        clients.remove(self)
        print(self.address, 'closed')


server = SimpleWebSocketServer('192.168.1.117', 4759, WePaint)
server.serveforever()
