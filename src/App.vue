<template>
  <div id="app">
    <Layout >
        <Header>
            <Menu mode="horizontal" active-name="articles">
                <div class="layout-logo">内容平台</div>
                <div class="layout-nav">
                    <MenuItem name="home">
                        <Icon type="ios-navigate"></Icon>
                        首页
                    </MenuItem>
                    <MenuItem name="topics">
                        <Icon type="ios-keypad"></Icon>
                        话题
                    </MenuItem>
                    <MenuItem name="articles">
                        <Icon type="ios-analytics"></Icon>
                        帖子
                    </MenuItem>
                    <MenuItem name="settings">
                        <Icon type="ios-paper"></Icon>
                        配置
                    </MenuItem>
                </div>
            </Menu>
        </Header>
        <Content class="main-content">
            <router-view/>
        </Content>
        <Footer class="layout-footer-center">2019 &copy; Huawei</Footer>
    </Layout>
  </div>
</template>
<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
.layout-footer-center{
    text-align: center;
}
*, *:before, *:after {
  box-sizing: border-box;
}
</style>
