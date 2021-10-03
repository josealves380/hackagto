import { SelectHTMLAttributes } from "react";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>

export function Select(props: SelectProps) {
    return (
        <select className="select" {...props}/>
    )
}