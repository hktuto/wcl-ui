<template>
    <Link :type="type" :underline="underline" :href="href" :disabled="disabled"><slot /></Link>
</template>

<script lang="ts">
import Vue from 'vue'
import { Link } from 'element-ui';
import "element-ui/lib/theme-chalk/link.css";
export default Vue.extend({
    components:{ Link },
    props:{
        type:{
            type: String,
            default: "normal"
        },
        underline:{
            type: Boolean,
            default: false,
        },
        href:{
            type:String,
            default: ''
        },
        target:{
            type:String,
            default: '_self'
        },
        disabled:{
            type: Boolean,
            default: false
        }
    }
})
</script>
