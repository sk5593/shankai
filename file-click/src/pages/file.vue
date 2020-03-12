<template>
  <div class="file">
    <button @click="test">点击</button>
    <el-upload
            class="upload-demo"
            action="http://localhost:8888/api/upload/"
            multiple
            :limit="3">
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>

<script>
export default {
    data () {
        return {
        }
    },
    methods: {
        test(){
            this.$axios({
                method: 'get',
                url: '/api/upload/',
            });
        }
    },
    created() {

    }
}
</script>
<style >
</style>
