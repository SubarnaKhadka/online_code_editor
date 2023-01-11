import React, { useState } from 'react'
import { Controlled as CodeMirror } from 'react-codemirror2'
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml"
import "codemirror/mode/css/css"
import "codemirror/mode/javascript/javascript"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpandAlt, faCompressAlt } from '@fortawesome/free-solid-svg-icons'
import "../index.css"

const Editor = (props) => {
    const [isOpen, setOpen] = useState(true)
    const { launguage, label, value, onChange } = props

    const handleChange = (editor, data, value) => {
        onChange(value)
    }

    return (
        <div className={`editor-container ${isOpen ? '' : 'collapsed'}`}>
            <div className="editor-title">
                {label}
                <button
                    type="button"
                    onClick={() => setOpen(!isOpen)}
                    className="expand-collapse-btn"
                >
                    <FontAwesomeIcon icon={isOpen ? faCompressAlt : faExpandAlt} />
                </button>
            </div>
            <CodeMirror
                value={value}
                className="code-mirror-wrapper"
                onBeforeChange={handleChange}
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: launguage,
                    lineNumbers: true,
                    theme: "material"
                }}
            />
        </div>
    )
}
export default Editor;
