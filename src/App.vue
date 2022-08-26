<template>
  <!-- 配置主题组件, abstract取消包裹的div -->
  <n-config-provider abstract :theme="themeData[theme]">
    <div class="wrap">
      <n-card hoverable>

        <n-h1>
          <n-text type="warning">
            PINIA-REF
            <br>
            <span style="font-size: 20px">{{languageData[language]['title']}}</span>
          </n-text>
        </n-h1>

        <n-h1 prefix="bar">
          <n-text type="primary">
            {{languageData[language][language]}}
          </n-text>
        </n-h1>

        <n-h1 prefix="bar" type="info">
          <n-text type="info">
            {{languageData[language][theme + 'Theme']}}
          </n-text>
        </n-h1>

        <n-space>
          <n-button type="primary" size="large" @click="theme=='dark'?theme='light':theme='dark'">切换主题</n-button>
          <n-button type="info" size="large" @click="language=='cn'?language='en':language='cn'">切换语言</n-button>
          <n-button type="warning" size="large" @click="reload()">{{ languageData[language]['re'] }}</n-button>
        </n-space>
      </n-card>
    </div>
  </n-config-provider>
</template>

<script setup lang="ts">
import { darkTheme } from 'naive-ui'
import { theme, language } from "./use";

// 刷新页面
const reload = () => {
  location.reload()
}

// 主题配置文件按
const themeData = {
  dark: darkTheme,
  light: null
}

// 语言
const languageData = {
  cn: {
    switchTheme: '切换主题',
    switchLanguage: '切换语言',
    darkTheme: '黑暗主题',
    lightTheme: '明亮主题',
    en: "语言 English",
    cn: "语言 中文",
    re: "刷新",
    title: "持久化的状态管理"
  },
  en: {
    switchTheme: 'Switch Theme',
    switchLanguage: 'Switch Language',
    darkTheme: 'Dark Theme',
    lightTheme: 'Light Theme',
    en: "Language English",
    cn: "Language 中文",
    re: "Reload",
    title: "Persistent state management"
  }
}

</script>

<style scoped>
.wrap {
  width: 400px;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%)
}
</style>