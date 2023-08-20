import { Input } from "antd"

type TextareaProps = {
    value: string,
    setValue: (value: string) => void,
    rows: number
}

const Textarea = ({ value, setValue, rows }: TextareaProps) => {
    return <Input.TextArea
        value={value}
        onChange={e => setValue(e.target.value)}
        rows={4}
        autoSize={{minRows: rows, maxRows: rows}}
        style={{width: 300}}
    />
}

export default Textarea