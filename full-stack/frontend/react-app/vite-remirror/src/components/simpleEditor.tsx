import { OnChangeJSON } from "@remirror/react";
import { WysiwygEditor } from "@remirror/react-editors/wysiwyg";

interface ISimpleEditor extends React.ComponentProps<typeof WysiwygEditor> {
  onChange: typeof OnChangeJSON["onChange"];
  initialContent?: any;
}

const SimpleEditor: React.FC<ISimpleEditor> = ({
  onChange,
  initialContent,
}) => {
  return (
    <WysiwygEditor placeholder="Enter Text..." initialContent={initialContent}>
      <OnChangeJSON onChange={onChange} />
    </WysiwygEditor>
  );
};

export default SimpleEditor;
