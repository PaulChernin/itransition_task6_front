import { List } from "antd"
import { Message } from "../types/Message"
import MessagesListItem from "./MessageListItem"

type MessagesListProps = {
    messages: Array<Message>
}

const MessagesList = ({ messages }: MessagesListProps) => {
    return <>
        <List
            dataSource={messages}
            renderItem={(item) =>
                <MessagesListItem message={item}/>
            }
        />
    </>
}

export default MessagesList