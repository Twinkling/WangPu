<template>
    <div :class="bem()">
        <h2>蒙版</h2>
        <ul :class="bem('popup-mask')">
            <li
                v-for="item in popupMask"
                :key="item.id"
                :class="bem('popup-mask-item')"
                :style="{'background-image': `url(${item.url})`}"
            />
        </ul>
        <el-button
            type="primary"
            @click="update"
        >
            更新
        </el-button>
    </div>
</template>

<script>
import bemMixin from '@/mixins/bem';
import popupMask from '@/data/mask';

export default {
    name: 'EditorOperator',
    mixins: [bemMixin],
    data() {
        return {
            popupMask,
        };
    },
    methods: {
        update() {
            console.log('update');
        },
    },
};
</script>

<style lang="less">
@b: EditorOperator;

.@{b} {
    flex-shrink: 0;
    width: 300px;
    height: 100vh;
    overflow: auto;
    border-left: 1px solid #ccc;
    &__popup-mask {
        display: flex;
        flex-direction: column;
        align-items: center;
        &-item {
            width: 200px;
            height: 150px;
            background: center no-repeat;
            border: 1px solid #ccc;
            cursor: pointer;
        }
        &-item:not(:first-child) {
            margin-top: 20px;
        }
    }
}
</style>
