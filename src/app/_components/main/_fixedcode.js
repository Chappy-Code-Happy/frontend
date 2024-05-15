"use client";
import Editor from "@monaco-editor/react";
import React, { use, useRef, useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

import styles from '../../../styles/main/_coding.module.css';

export default function FixedCode({fixedCode}){

    const [code, setCode] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => {
            setCode(fixedCode);
            // console.log(fixedCode);
        }, 5000);

        return () => clearTimeout(timer);
    }, [fixedCode]);

    return (
        <div className={styles.codingcontainer}>
            <div className={styles.codingheader}>
                <div className={styles.codingbox_name}>수정 코드</div>
                <div className={styles.buttons}>
                </div>
            </div>
        
            <div className={styles.codingbox}>
                <div className={styles.border}>
                    <Editor
                        defaultLanguage="python"
                        value={code} 
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