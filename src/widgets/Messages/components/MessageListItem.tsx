import { List } from "antd"
import { Message } from "../types/Message"
import TagsBlock from "./TagsBlock"

type MessagesListItemProps = {
    message: Message
}

const MessagesListItem = ({ message }: MessagesListItemProps) => {
    return <List.Item>
        <div>
            <div>{message.date}</div>
            <div>{message.text}</div>
        </div>
        <TagsBlock tags={message.tags} />
    </List.Item>
}

export default MessagesListItem