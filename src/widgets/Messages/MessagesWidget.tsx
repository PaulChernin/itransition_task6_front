import { useEffect, useRef, useState } from "react"
import { Message } from "./types/Message"
import MessagesList from "./components/MessagesList"
import api from "../../api/api"

type MessagesWidgetProps = {
    tags: Array<string>
}

const MessagesWidget = ({ tags }: MessagesWidgetProps) => {
    const [messages, setMessages] = useState<Array<Message>>([])
    const bottomElement = useRef<HTMLDivElement>(null)

    const loadAll = async () => {
        const response = await api.post('/get-messages', {
            tags: tags
        })
        setMessages(response.data)
    }

    useEffect(() => {
        loadAll()        
        const interval = setInterval(loadAll, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [tags])

    return <div style={{overflow: 'auto', height: 'calc(100vh - 200px)'}}>
        <MessagesList messages={messages} />
        <div ref={bottomElement}></div>
    </div>
}

export default MessagesWidget