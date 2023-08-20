import { Space } from "antd"
import TagInput from "./TagInput.tsx/TagInput"
import TagsList from "./TagInput.tsx/TagsList"

type TagControl = {
    tags: Array<string>,
    setTags: (value: Array<string>) => void
}

const TagControl = ({ tags, setTags }: TagControl) => {
    const addTag = (tag: string) => {
        if (!tags.includes(tag)) {
            setTags([...tags, tag])
        }
    }

    const removeTag = (tag: string) => {
        setTags(tags.filter(t => t !== tag))
    }
    
    return <Space direction="vertical" size="small" align="start">
        <TagInput
            add={addTag}
        />
        <TagsList
            tags={tags}
            onClose={removeTag}
        />
    </Space>
}

export default TagControl