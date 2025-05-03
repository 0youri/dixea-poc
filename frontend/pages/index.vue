<template>
  <div class="justify-center flex flex-col gap-5 items-center h-screen">
    <div class="text-5xl font-bold text-slate-100">Welcome to DEXIA PoC</div>
    <div class="text-xl font-medium text-slate-300">Choose your site</div>
    <div class="flex gap-5">
      
      <UButton
        label="Recycparts"
        to="/site/recycparts"
        variant="solid" color="info" size="xl"
        class="cursor-pointer transition-transform duration-300 hover:scale-[1.03]"
      />
      <UButton
        label="EcoMeca"
        to="/site/eco-meca"
        variant="solid" color="info" size="xl"
        class="cursor-pointer transition-transform duration-300 hover:scale-[1.03]"
      />
      <UButton
        label="GreenCar Parts"
        to="/site/green-car-parts"
        variant="solid" color="info" size="xl"
        class="cursor-pointer transition-transform duration-300 hover:scale-[1.03]"
      />

    </div>
  </div>
</template>

<script lang="ts" setup>


</script>

<style>

</style>