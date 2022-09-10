<template>
  <div class="body">
    <div class="header">
      <div class="overlay">
        <h1>File Share</h1>
        <h3>跨平台、高速的文件传输工具</h3>
      </div>
    </div>

    <el-card class="file-list">
      <div slot="header" class="clearfix">
        <span style="margin-right: 32px">文件列表</span>
        <el-button plain icon="el-icon-upload2" size="mini" style="margin-right: 16px"></el-button>
        <el-button plain icon="el-icon-message" size="mini"></el-button>
      </div>
      <div style="padding-left: 16px; padding-right: 16px">
        <el-table
          :max-height="listHeight"
          :show-header="false"
          :data="files">
          <el-table-column width="50">
            <template slot-scope="scope">
              <file-icon v-if="scope.row.type === 'file'" :filename="scope.row.name"/>
              <file-icon v-if="scope.row.type === 'directory'" :is-directory="true"/>
              <svg-icon v-if="scope.row.type === 'text'" name="message"/>
            </template>
          </el-table-column>
          <el-table-column prop="name">
          </el-table-column>
          <el-table-column width="70">
            <template slot-scope="scope">
              <el-button v-if="scope.row.type === 'file'" @click="console.log(scope)" icon="el-icon-download"
                         size="mini" plain></el-button>
              <el-button v-if="scope.row.type === 'text'" @click="console.log(scope)" icon="el-icon-document-copy"
                         size="mini" plain></el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>
  </div>
</template>

<script>
  import FileIcon from "@/components/FileIcon";
  import SvgIcon from "@/components/SvgIcon";

  export default {
    name: 'HomeView',
    data() {
      return {
        files: [
          {name: 'test.txt', type: 'file'},
          {name: 'test.doc', type: 'file'},
          {name: 'test.ppt', type: 'file'},
          {name: 'test.ppt', type: 'file'},
          {name: 'test.ppt', type: 'file'},
          {name: 'test.ppt', type: 'file'},
          {name: 'test.ppt', type: 'file'},
          {name: 'test.ppt', type: 'file'},
          {name: 'test.ppt', type: 'file'},
          {name: 'test.ppt', type: 'file'},
          {name: 'test.ppt', type: 'file'},
          {name: 'test.ppt', type: 'file'},
          {name: '文件夹1', type: 'directory'},
          {name: 'fasdfasdfasdfasfassdfa', type: 'text', content: 'fasdfasdfasdfasfassdfa'}
        ]
      }
    },
    computed: {
      listHeight() {
        return window.innerHeight - 260;
      }
    },
    components: {
      FileIcon, SvgIcon
    },
  }
</script>
<style lang="scss" scoped>
  @import '../assets/font/DancingScript.css';

  .body {
    max-width: 750px;
    margin: 0 auto;
  }
  .header {
    text-align: center;
    margin-bottom: 16px;
  }
  .header .overlay {
    width: 100%;
    margin: 0 auto;
    height: 100%;
    padding: 8px;
    color: #FFF;
  }

  h1 {
    font-family: 'DancingScript', cursive;
    font-size: 60px;
    margin-bottom: 15px;
    margin-top: 8px;
  }

  h3 {
    font-family: 'Open Sans', sans-serif;
    margin-bottom: 30px;
    display: block;
    font-size: 1em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0;
    margin-inline-end: 0;
    font-weight: bold;
  }

  .button-group {
    margin-bottom: 32px;
  }

  .list-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .file-list {
    width: 95%;
    margin: 0 auto;
  }
  /** ------- pc端 --------- **/
  @media only screen and (min-width: 500px) {

  }

  /** ------- 移动端 ---------- **/
  @media only screen and (max-width: 500px) {

  }
</style>
