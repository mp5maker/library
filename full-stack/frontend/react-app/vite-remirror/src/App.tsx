import { useCallback, useState } from "react";
import type { RemirrorJSON } from "remirror";
import ComplexEditor from "./components/complexEditor";
import SimpleEditor from "./components/simpleEditor";

const STORAGE_KEY = "remirror-editor-content";

interface IApp {
  children?: React.ReactNode | React.ReactNode[];
}

const App: React.FC<IApp> = () => {
  const [initialContent] = useState<RemirrorJSON | undefined>(() => {
    const content = window.localStorage.getItem(STORAGE_KEY);
    return content ? JSON.parse(content) : undefined;
  });

  const handleEditorChange = useCallback((json: RemirrorJSON) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(json));
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        padding: 16,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <div>
          <h2>Simple Editor</h2>
          <SimpleEditor
            onChange={handleEditorChange}
            initialContent={initialContent}
          />
        </div>
        <div>
          <h2>Complex Editor</h2>
          <ComplexEditor
            onChange={handleEditorChange}
            initialContent={initialContent}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
