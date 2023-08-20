import { useState } from "react"
import TagControl from "./components/TagControl.tsx/TagControl"
import MessageSenderWidget from "./widgets/MessageSender/MessageSenderWidget"
import MessagesWidget from "./widgets/Messages/MessagesWidget"
import { Space } from "antd"

function App() {
    const [tags, setTags] = useState<Array<string>>([])

    return <div style={{display: 'flex', justifyContent: 'center'}}>
        <Space size="large" align="start" wrap>
            <TagControl
                tags={tags}
                setTags={setTags}
            />
            <Space direction="vertical" size="small">
                <MessagesWidget tags={tags} />
                <MessageSenderWidget/>
            </Space>
        </Space>
    </div>
}

export default App
