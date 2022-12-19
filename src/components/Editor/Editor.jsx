
import { EditorState } from "draft-js";
import { Component } from "react";
import { Editor } from "react-draft-wysiwyg";


class EditorContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        editorState: EditorState.createEmpty(),
      };
    }
   
    onEditorStateChange(editorState) {
      console.log(editorState)
      this.setState({
        editorState,
      });
    };
   
    render() {
      const { editorState } = this.state;
      return (
        <div className="editor">
          <Editor
            editorState={editorState}
            onEditorStateChange={this.onEditorStateChange}
            toolbar={{
              inline: { inDropdown: true },
              list: { inDropdown: true },
              textAlign: { inDropdown: true },
              link: { inDropdown: true },
              history: { inDropdown: true },
              image: {
                // uploadCallback: uploadImageCallBack,
                alt: { present: true, mandatory: true },
              },
            }}
          />
        </div>
      );
    }
  };


  export default EditorContainer;