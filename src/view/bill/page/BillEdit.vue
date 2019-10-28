<template>
  <div style="width: 500px; height: 200px; padding-top: 10px;padding-left: 10px">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="消费方式">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="记账时间">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="刷卡金额">
        <el-input-number v-model="form.amount" :precision="2" :step="0.1" :max="1000000" style="width: 100%;"/>
      </el-form-item>
      <el-form-item label="实收金额">
        <el-input-number v-model="form.amount" :precision="2" :step="0.1" :max="1000000" style="width: 100%;"/>
      </el-form-item>
      <el-form-item label="差价金额">
        <el-input-number v-model="form.amount" :precision="2" :step="0.1" :max="1000000" style="width: 100%;"/>
      </el-form-item>
      <el-form-item label="单据备注">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">新增记录</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

    import * as billApi from '../../bill/api/bill'
    export default {
        data() {
            return {
                form: {
                    name: '',
                    region: '',
                    amount: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                }
            }
        },
        methods: {
            onSubmit() {
                //console.log('submit!');
                billApi.bill_edit(this.form).then(res => {
                    console.log(res)
                    /*if (res.success) {
                        this.$message.success('保存成功');
                        this.$refs['pageForm'].resetFields();
                    }else if (res.message){
                        this.$message.error(res.message);
                    }else {
                        this.$message.error('保存失败');
                    }*/
                });
            }
        }
    }
</script>

<style scoped>

</style>
