import { AutoComplete, Button, Space } from "antd"
import { useState } from "react"
import api from "../../../api/api"

type TagInputProps = {
    add: (tag: string) => void
}

const TagInput = ({ add }: TagInputProps) => {
    const [value, setValue] = useState('')
    const [options, setOptions] = useState<Array<{value: string}>>([])

    const onSearch = (prefix: string) => {
        if (prefix.length) {
            fetchTags(prefix)
        } else {
            setOptions([])
        }
    }

    const onSelect = (value: string) => {
        add(value)
        setValue('')
    }

    const fetchTags = (prefix: string) => {
        api.post('/get-tags', { prefix })
        .then(response => {
            setOptions(response.data.map((tag: string) => {
                return { value: tag }
            }))
        })
    }

    return <Space size="small">
        <AutoComplete
            value={value}
            onChange={setValue}
            options={options}
            onSearch={value => onSearch(value)}
            onSelect={onSelect}
            style={{width: 200}}
        />
        <Button
            onClick={() => onSelect(value)}
            disabled={!value.trim()}
        >
            Add Tag
        </Button>
    </Space>
}

export default TagInput