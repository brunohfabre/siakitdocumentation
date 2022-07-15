import React, { useRef } from 'react';

import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import { Editor as EditorProps, EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

import { Button } from '../Button';
import { Text } from '../Text';

interface MenuBarProps {
  editor: EditorProps | null;
}

function MenuBar({ editor }: MenuBarProps): JSX.Element {
  if (!editor) {
    return <></>;
  }

  return (
    <>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'is-active' : ''}
      >
        bold
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'is-active' : ''}
      >
        italic
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={editor.isActive('strike') ? 'is-active' : ''}
      >
        strike
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleCode().run()}
        className={editor.isActive('code') ? 'is-active' : ''}
      >
        code
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive('paragraph') ? 'is-active' : ''}
      >
        paragraph
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
      >
        h1
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
      >
        h2
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
      >
        h3
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'is-active' : ''}
      >
        bullet list
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? 'is-active' : ''}
      >
        ordered list
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive('codeBlock') ? 'is-active' : ''}
      >
        code block
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive('blockquote') ? 'is-active' : ''}
      >
        blockquote
      </button>

      <button type="button" onClick={() => editor.chain().focus().undo().run()}>
        undo
      </button>

      <button type="button" onClick={() => editor.chain().focus().redo().run()}>
        redo
      </button>
    </>
  );
}

export function Editor(): JSX.Element {
  const inputFileRef = useRef<HTMLInputElement>(null);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: true,
        linkOnPaste: true,
      }),
      Image,
    ],
    content: '',
  });

  function addImage(): void {
    // const url = window.prompt('');

    if (editor) {
      editor
        .chain()
        .focus()
        .setImage({
          src: '',
        })
        .run();
    }
  }

  return (
    <div>
      <MenuBar editor={editor} />

      <EditorContent editor={editor} />

      <input
        ref={inputFileRef}
        type="file"
        onChange={(event) => {
          if (event.target.files?.length) {
            const file = event.target.files[0];

            const reader = new FileReader();
            reader.onloadend = () => {
              if (editor) {
                editor
                  .chain()
                  .focus()
                  .setImage({
                    src: reader.result as string,
                  })
                  .run();
              }
            };
            reader.readAsDataURL(file);
          }
        }}
        style={{ display: 'none' }}
      />

      <Button type="button" onClick={() => inputFileRef.current?.click()}>
        Select image
      </Button>
    </div>
  );
}
