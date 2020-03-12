<template>
  <div class="file">
    <el-upload
      class="upload-demo"
      action="/api/upload"
      multiple
      :before-upload="uploadBefore"
      :limit="3"
      :show-file-list="false"
      :on-success="fileUploadSuccess"
    >
      <el-button size="small" type="primary">点击上传</el-button>
      <!--<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
    </el-upload>
    <el-table
      :data="tableData"
      style="width: 50%;margin: 5px 20px 5px 40%;">
      <el-table-column
        prop="id"
        label="ID"
        width="250">
      </el-table-column>
      <el-table-column width="180" label="操作">
        <template slot-scope="scope">
          <el-button
            type="success"
            size="mini"
            @click="handleDown(scope.$index, scope.row)">下载
          </el-button>
          <el-popover
            placement="right"
            width="400"
            trigger="click">
            <div style="color: lightskyblue;font-size: 15px">文件名:</div><span>{{details.name}}</span>
            <div style="color: lightskyblue;font-size: 15px">路径:</div><span>{{details.dir}}</span>
            <div style="color: lightskyblue;font-size: 15px">文件大小:</div><span>{{details.size}}字节</span>
            <div style="color: lightskyblue;font-size: 15px">文件类型:</div><span>{{details.type}}</span>
            <div style="color: lightskyblue;font-size: 15px">信封:</div><span>{{details.envelope}}</span>
            <div style="color: lightskyblue;font-size: 15px">创建时间:</div><span>{{details.formatTime}}</span>
            <el-button  @click="handleDetail(scope.$index, scope.row)" size="mini" type="primary" slot="reference">详情</el-button>
          </el-popover>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
  import {getDetails, download, getList} from '@/service/fileUpload'

  export default {
    name: 'index',
    data() {
      return {
        uuid: '',
        tableData: [],
        details: {},
      }
    },
    methods: {
      fileUploadSuccess(response, file, fileLis) {
        if (response.code == 200) {
          this.$message({
            message: '上传成功',
            type: 'success'
          });
          let obj = {
            id: response.object
          }
          this.tableData.splice(0, 0, obj)
          // this.getList()
        } else {
          this.$message.error('上传失败');
        }
      },
      handleDown(index, row) {
        window.location.href = "/api/download?id=" + row.id
        // download(row.id).then(res=>{
        //   window.open(res.data)
        //   // if (res.data.code == 200) {
        //   //   this.$alert(res.data.object, '详情', {
        //   //     confirmButtonText: '确定',
        //   //   });
        //   // } else {
        //   //   this.$message.error('未知异常');
        //   // }
        // })
      },
      getList(){
        getList().then(res => {
          console.log(res)
          if (res.data.code == 200){
            if (res.data.object != null){
              res.data.object.forEach(fileDetails=>{
                let strArr =  fileDetails.dir.split('\\')
                let id = strArr[strArr.length-1].split('.')[0]
                fileDetails.id = id
                this.tableData.push(fileDetails)
              })
            }
          }else{
            this.$message.error('获取最近上传列表异常');
          }
        })
      },
      uploadBefore(file) {
        const isLt20M = file.size / 1024 / 1024 < 2;
        if (!isLt20M) {
          this.$message.error('上传文件大小不能超过 2MB!');
          return false;
        }
      },
      handleDetail(index, row) {
        getDetails(row.id).then(res => {
          if (res.data.code == 200) {
            this.details = res.data.object
          } else {
            this.$message.error('未知异常');
          }
        })
      }
    },
    created() {
      this.getList()
    }
  }
</script>

<style>
  .file {
    text-align: center !important;
  }
</style>
