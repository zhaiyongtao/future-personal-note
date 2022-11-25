<template>
  <!--  <RouterView />-->
  app
  <!--  <Icon color="red">-->
  <!--    <AcUnitFilled></AcUnitFilled>-->
  <!--  </Icon>-->
  <!--  <Icon color="red">-->
  <!--    <Icon_test></Icon_test>-->
  <!--  </Icon>-->
  <SvgIcon :src="AcUnitFilled" :size="20" color="red"></SvgIcon>
</template>

<script setup lang="ts">
// import { RouterView } from 'vue-router';
import { AcUnitFilled } from '@vicons/material';
import { Icon } from '@vicons/utils';
import Icon_test from './assets/icons/Icon_test.vue';
import SvgIcon from '@/components/SvgIcon';
</script>

<style scoped lang="scss"></style>
