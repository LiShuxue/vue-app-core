<template>
    <div class="editor-b">
        <h5>this is editor-B.vue</h5>
        <mavon-editor class="editor-content" @change="editorContentChange" @save="editorContentSave"></mavon-editor>
    </div>
</template>
<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
    components: {
        mavonEditor
    },
    methods: {
        // 第一个参数是markdown文本， 第二个参数是html文本
        editorContentChange (value, render) {
            // console.log(value)
            // console.log(render)
        },
        // 第一个参数是markdown文本， 第二个参数是html文本
        editorContentSave (value, render) {
            console.log(value)
            console.log(render)
        }
    }
}
</script>
<style>
.editor-b{
    border: 1px blue solid;
    margin: 10px 0 0 0;
    padding: 0 10px;
}
.editor-content{
    height: 600px;
    margin-bottom: 20px;
}
</style>
