import { TextareaHTMLAttributes } from "react";

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>

export function TextArea(props: TextAreaProps) {
    return (
        <textarea className="textarea" {...props} />
    )
}