<template>
    <div id="area">
        <form-create :rule="rule"/>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                rule: [formCreate.maker.cascader('所在区域1', 'address1', ['河北省', '邯郸市', '涉县']).props({
                    options: window.province,
                    separator:' '
                }), {
                    type: "cascader",
                    title: "所在区域2",
                    field: "address2",
                    value: ['陕西省', '西安市', '新城区'],
                    props: {
                        //可选项的数据源，格式参照示例说明
                        options: window.province,
                        separator:'-'
                    },
                }]
            }
        }
    }
</script>

<style>
    #area {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
