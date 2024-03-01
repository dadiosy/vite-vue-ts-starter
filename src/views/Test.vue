<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}

const obj = ref({
  nested: { count: 0 },
  arr: ['foo', 'bar'],
})

function mutateDeeply() {
  // 以下都会按照期望工作
  obj.value.nested.count++
  obj.value.arr.push('baz')
}
</script>

<template>
  <button
    class="middle none center rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    data-ripple-light="true"
    @click="increment"
  >
    {{ count }}
  </button>
  <div>
    <v-alert
      title="Alert title"
      :text="`${obj.nested.count}`"
      type="success"
      variant="tonal"
    ></v-alert>
    <v-btn @click="mutateDeeply">increase obj</v-btn>
  </div>
</template>
