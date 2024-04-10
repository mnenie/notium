<template>
    <div v-for="(message, index) in props.messages" :key="index" class="flex items-center gap-4">
        <UiAvatar>
            
        </UiAvatar>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    messages: ChatCompletionRequestMessage[]
}>()
</script>

<style scoped>

</style>