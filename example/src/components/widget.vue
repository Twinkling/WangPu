<template>
    <div
        class="J_TWidget"
        :data-widget-type="widgetType"
        :data-widget-config="widgetConfig"
        :style="getStyle"
    >
        <slot />
    </div>
</template>

<script>
export default {
    name: 'Widget',
    props: {
        widgetType: {
            type: String,
            required: true,
        },
        widgetConfig: {
            type: String,
            required: true,
        },
    },
    computed: {
        getStyle() {
            return { display: 'none' };
        },
    },
};
</script>

<style>

</style>
