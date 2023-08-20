import { Tag } from "antd"

type TagsListProps = {
    tags: Array<string>,
    onClose: (tag: string) => void
}

const TagsList = ({ tags, onClose }: TagsListProps) => {
    return <div>
        {tags.map(tag =>
            <Tag
                key={tag}
                closeIcon
                onClose={() => onClose(tag)}
            >
                {tag}
            </Tag>
        )}
    </div>
}

export default TagsList