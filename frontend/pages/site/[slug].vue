<template>
  <div v-if="site" class="py-10 text-center flex flex-col gap-5 items-center">
    <div class="flex items-center gap-2 text-5xl font-bold text-slate-100 text-center">
        <UIcon v-if="site.logo" :name="site.logo" />
        <h1>    
            {{ site.title }}
        </h1>
    </div>
    <p class="font-medium text-lg">{{ site.description }}</p>
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-10">
        <UCard
            v-for="piece in site.pieces"
            :key="piece.id"
            variant="subtle"
            class="min-w-sm transition-transform duration-300 hover:scale-[1.03]"
        >
            <template #header>
                <div class="flex items-center justify-center gap-2">
                    <UIcon name="tdesign:tools" class="size-5" />
                    <h3>{{ piece.title }}</h3>
                </div>
            </template>

            <div class="w-full h-full">
                {{ piece.description }}
            </div>

        </UCard>
    </div>
  </div>
</template>

<script lang="ts" setup>
    import type { Site } from '~/types/site';

    const { findOne } = useStrapi()

    const site = ref<Site | null>(null)

    const getSite = async (slug: string) => {
        const data = await findOne<Site>('sites', slug)
        site.value = data
    }

    onMounted(async () => {
        const slug = useRoute().params.slug as string
        await getSite(slug)
    })

</script>

<style>

</style>