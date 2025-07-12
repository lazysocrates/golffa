<template>
  <div>
    <h1>GOLFFA 시작 페이지</h1>
    <p>이 페이지는 기본 레이아웃 (헤더/푸터 포함)이 적용됩니다.</p>
    <v-btn color="primary" to="/teams">팀 편성 페이지로 이동</v-btn>
  </div>
</template>

<script setup lang="ts">
// default 레이아웃은 명시적으로 지정하지 않아도 자동으로 적용됩니다.
// definePageMeta({ layout: 'default' }); // 이 줄은 없어도 됩니다.
</script>