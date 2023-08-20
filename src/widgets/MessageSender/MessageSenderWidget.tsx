import { useState } from "react"
import Textarea from "../../ui/Textarea"
import { Button, Space } from "antd"
import TagControl from "../../components/TagControl.tsx/TagControl"
import api from "../../api/api"

const MessageSenderWidget = () => {
    const [text, setText] = useState('')
    const [tags, setTags] = useState<Array<string>>([])
    const [isLoading, setIsLoading] = useState(false)

    const send = () => {
        setIsLoading(true)
        api.post('post-message', { text, tags })
            .finally(() => {
                setIsLoading(false)
            })
        setText('')
    }

    return <Space size="middle" align="start" wrap>
        <Space direction="vertical" size="small">
            <Textarea
                value={text}
                setValue={setText}
                rows={4}
            />
            <Button
                onClick={send}
                disabled={isLoading || !text.trim()}
                type="primary"
            >
                Send
            </Button>
        </Space>
        <TagControl
            tags={tags}
            setTags={setTags}
        />
    </Space>
}

export default MessageSenderWidget