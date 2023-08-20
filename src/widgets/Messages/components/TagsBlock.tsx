import { Tag } from "antd"

type TagsBlockProps = {
    tags: Array<string>
}

const TagsBlock = ({ tags }: TagsBlockProps) => {
    return <div>
        {tags.map(tag =>
            <Tag key={tag}>{tag}</Tag>    
        )}
    </div>
}

export default TagsBlock