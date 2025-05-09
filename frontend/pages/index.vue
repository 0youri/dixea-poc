<template>
  <div class="justify-center flex flex-col gap-5 items-center h-screen">
    <div class="text-5xl font-bold text-slate-100">Welcome to DIXEA PoC</div>
    <div class="text-xl font-medium text-slate-300">Choose your site</div>
    <div class="flex flex-col gap-5 item-stretch">
      <UButton
        v-for="site in sites"
        :key="site.id"
        :label="site.title"
        :to="`/site/${site.slug}`"
        variant="solid" color="info" size="xl"
        class="w-full cursor-pointer justify-center transition-transform duration-300 hover:scale-[1.03]"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import type { Site } from '~/types/site';

  const { find } = useStrapi()

  const sites = ref<Array<Site> | null>(null)

  const getSites = async () => {
      const data = await find('sites')
      sites.value = data
  }

  onMounted(async () => {
      await getSites()
  })


</script>

<style>

</style>