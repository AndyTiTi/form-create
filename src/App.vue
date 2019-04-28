<template>
    <div id="app">
        <img src="./assets/logo.png">
        <div>
            <p>
                If Element is successfully added to this project, you'll see an
                <code v-text="'<el-button>'"></code>
                below
            </p>
            <el-button>el-button</el-button>
        </div>
        <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'

    export default {
        name: 'app',
        components: {
            HelloWorld
        },
        data: {
            $f: {},
            model: {}
        },
        mounted: function () {

            //表单插入的节点
            const root = document.getElementById('form-create');

            //$f为表单api
            this.$f = this.$formCreate(
                //表单生成规则
                [
                    this.$formCreate.maker.input('商品名称', 'goods_name', ''),
                    this.$formCreate.maker.date('创建时间', 'created_at')
                ],
                //组件参数配置
                {
                    el: root,
                    //显示表单重置按钮
                    resetBtn: true,
                    //表单提交事件
                    onSubmit: function (formData) {

                        //formData为表单数据

                        //按钮进入提交状态
                        this.$f.btn.loading();
                        //重置按钮禁用
                        this.$f.resetBtn.disabled();

                        //重置按钮恢复正常
                        //this.$f.resetBtn.disabled();
                        //按钮进入可点击状态
                        //this.$f.btn.loading(false);
                    }
                });

            //获取双向数据绑定的数据规则
            this.model = this.$f.model();
        }

    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
