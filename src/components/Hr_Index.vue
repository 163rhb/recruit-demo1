<template>
    <div>
        <el-container>
            <el-header class="homeHeader">
                <div class="title">
                    Hr
                </div>
                <div>
                    <el-button icon="el-icon-bell" type="text"
                               style="margin-right: 8px;color: #000000;"
                               size="normal" @click="goChat"></el-button>
                    <el-dropdown class="userInfo" @command="commandHandler">
  <span class="el-dropdown-link">
    aijig
      <!--双引号里一般解释为字符串，但用v-bind绑定后就可以当成变量-->
  </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="个人中心">个人中心</el-dropdown-item>
                            <el-dropdown-item command="设置">设置</el-dropdown-item>
                            <el-dropdown-item  command="logout" divided>注销登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </el-header>
            <el-container>
                <el-aside style="width: 200px">
                    <el-menu router>
                            <el-menu-item index="/resume">
                                简历管理
                            </el-menu-item>

                        <!--
                        <el-menu-item>
                            面试管理
                        </el-menu-item>
                        <el-menu-item>
                            录用管理
                        </el-menu-item>-->
                        <el-menu-item index="/position">
                            职位管理
                        </el-menu-item>

                    </el-menu>

                </el-aside>
                <el-main >
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item></el-breadcrumb-item>
                    </el-breadcrumb>
                    <router-view class="home"/>
                </el-main>
            </el-container>
        </el-container>


        <div class="line"></div>
    </div>
</template>

<script>
    export default {
        name: "Hr_Index",
        data(){
            return{
            }
        },
        methods:{


            commandHandler(cmd){
                if(cmd=='logout')
                {
                    this.$confirm('此操作将退出登录, 是否继续?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        this.getRequst('/logout')
                        window.sessionStorage.removeItem("user")
                        this.$store.commit('initRoutes',[])
                        this.$router.replace("/")
                        /*this.$message({
                            type: 'success',
                            message: '成功退出!'
                        });*/
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消'
                        });
                    });
                }

            }
        },

    }
</script>

<style>
    .homeHeader{
        background: mediumseagreen;
        display: flex;/*弹性布局*/
        align-items: center;
        font-size: 30px;
        justify-content: space-between;
    }
    .title{
        font-family: 华文行楷;
        color: white;
    }
    .el-dropdown-link {
        display: flex;
        align-items: center;
        color: #F2FCFF;

    }
    .el-dropdown-link img{
        width: 48px;
        height: 48px;
        /*设置圆弧*/
        border-radius: 24px;
        margin-left: 10px;

    }
    .el-icon-arrow-down {
        font-size: 12px;
    }
    .userInfo{
        cursor: pointer;
    }
    .homeItem{
        font-size: 30px;
        text-align: center;
        color: dodgerblue;
        font-family: 华文行楷;
        padding-top: 250px;
    }
    .home{
        margin-top: 30px;
    }
</style>