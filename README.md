<p>This is a fork of the Editor.js project from the codex-team (https://editorjs.io) which contains the update from another fork - https://github.com/alibail/editor.js.git</p>

<p><b>Note: This code may not be actively maintained but is available for anyone who has these requirements.</b></p>

<p>Editor.js Version: 2.18.0</p>

<p>The project creates an additional metadata item assigned to all blocks within the editor, to which a unique block ID is assigned along with a blank string called data.</p>

<p>You can modify the metadata object by editing the file <b>src/types-internal/block-data</b> and changing the below to return the format you require;</p>

<pre><code>
 export interface MetaDataBlock {
   serviceKey?: string;
   data?: string;
 }
 </code></pre>

 <p>The code that creates the initial metadata is located in file <b>/mixin.ts</b> and should be modified to meet your needs, the code below simply creates a unique ID for the block within the page and a blank data string.</p>

 <pre><code>
import {MetaDataBlock} from './types-internal/block-data';
import { v4 as uuidv4 } from 'uuid';


export default {
  createMeta(): MetaDataBlock {

    return {
        serviceKey: uuidv4(),
        data: ''
    };
  },
};
 </code></pre>

 <h3>Using this build</h3>
 <p>If the code meets your requirements you can use it directly by saving the file <b>dist/editor.js</b> in place of the file provided by the official project. Everything else remains the same as the official project including plugin compatibility.</p>

<p>Thanks to @alibali, @nmannitz for their original modification adding an ID to the block.</p>
