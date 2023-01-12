import {
  EditorComponent,
  Remirror,
  useActive,
  useChainedCommands,
  useCommands,
  useHelpers,
  useKeymap,
  useRemirror,
} from "@remirror/react";
import { useCallback } from "react";
import {
  BoldExtension,
  HistoryExtension,
  CalloutExtension,
  ItalicExtension,
  HeadingExtension,
  ParagraphExtension
} from "remirror/extensions";


interface IComplexEditor extends React.ComponentProps<typeof EditorComponent> {
  initialContent?: any;
}

const STORAGE_KEY = "remirror-editor-content";

const Menu = () => {
  const { toggleBold, toggleHeading, focus } = useCommands();
  const chain = useChainedCommands();
  const active = useActive();

  return (
    <div>
    <button
      disabled={toggleBold.enabled() === false}
      onClick={() => {
        chain.toggleBold().focus().run();
      }}
      style={{ fontWeight: active.bold() ? "bold" : undefined }}
    >
      B
    </button>
    <button
      disabled={toggleHeading.enabled({ level: 1 }) === false}
      onClick={() => {
        toggleHeading({ level: 1 })
        focus()
      }}
      style={{ fontWeight: active.heading({ level: 1 }) ? "bold" : undefined }}
    >
      H1
    </button>
    </div>
  );
};

const hooks = [
  () => {
    const { getJSON } = useHelpers();

    const handleSaveShortcut = useCallback(
      ({ state }: any) => {
        window.localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify(getJSON(state))
        );
        return true;
      },
      [getJSON]
    );

    useKeymap("Mod-s", handleSaveShortcut);
  },
];

const ComplexEditor: React.FC<IComplexEditor> = ({ initialContent }) => {
  const { manager } = useRemirror({
    extensions: () => [
      new BoldExtension(),
      new ItalicExtension(),
      new HeadingExtension(),
      new HistoryExtension(),
      new ParagraphExtension({
  extraAttributes: {
    id: {
      default: () => uniqueId(),
      parseDOM: (dom) => dom.id,
      toDOM: (node) => node.attrs.id as string,
    },
  },
}),
      new CalloutExtension({ defaultType: "warn " }),
    ],
    content: "<p> I love <strong>remirror</strong></p>",
    selection: "start",
    stringHandler: "html",
  });

  return (
    <Remirror
      manager={manager}
      placeholder="Enter Text..."
      initialContent={initialContent}
      hooks={hooks}
    >
      <EditorComponent />
      <Menu />
    </Remirror>
  );
};

export default ComplexEditor;
