"use client";
import Editor from "@monaco-editor/react";
import React, { use, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';

import styles from '../../../styles/main/_coding.module.css';

export default function Coding({onInteract}){
    const editorRef = useRef(null);
    const [isExecution, setIsExecution] = useState(false);

    const handleEditorDidMount = (editor, monaco) => {
        editorRef.current = editor;
        onInteract('init', editorRef.current.getValue());
    }
    
    const handleContentChange = (value, event) => {
        onInteract(null, value);
    }

    function interaction (action) {
        onInteract(action, editorRef.current.getValue());
        setIsExecution(true);
    }

    function initialization() {
        // editorRef.current.setValue(basecode);
    }

    return (
        <div className={styles.codingcontainer}>
            {/* { isExecution ? 
                <div className={styles.carbon_name}>당신의 탄소 배출량은 {carbonEmission} 입니다!</div>
                : null
            } */}
            <div className={styles.codingheader}>
                <div className={styles.codingbox_name}>코드에서 오류를 찾아보세요!</div>
                <div className={styles.buttons}>
                    <div>
                        {/* <Button variant="success"
                            style={{ backgroundColor: "white", border: "none" }}>
                            <img src="/images/file.png" alt="file" className={styles.image_button}
                            onClick={() => { openFile(); }} />
                        </Button>
                        <Button variant="success"
                            style={{ backgroundColor: "white", border: "none" }} >
                            <img src="/images/copy.png" alt="file" className={styles.image_button}
                            onClick={() => navigator.clipboard.writeText(editorRef.current.getValue())} />
                        </Button> */}
                        <Button variant="success"
                            style={{ backgroundColor: "#3CB371", border: "None", color: "white", 
                            fontSize: "15px", margin: "1px", padding: "5px", cursor: "pointer",
                            borderRadius: "5px"
                        }}
                            onClick={() => {
                            interaction('runFix')
                            console.log("TEST") }}>
                            코드 분석
                        </Button>
                        
                    </div>
                </div>
            </div>
        
            <div className={styles.codingbox}>
                <div className={styles.border}>
                    <Editor
                        onMount={handleEditorDidMount}
                        onChange={handleContentChange}
                        defaultLanguage="python"
                        defaultValue="// Code here" 
                        options={{
                            minimap: {
                                enabled: false,
                            },
                            fontSize: 15,
                            glyphMargin: true,
                            contextmenu: false,
                        }}
                        />
                </div>
            </div>
        </div>
    )
}