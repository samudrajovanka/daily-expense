<template>
  <button
    :type="type"
    class="button"
    :class="className"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'button',
    },
    variant: {
      type: String,
      default: 'primary',
      validator(value) {
        return ['primary', 'secondary'].includes(value)
      }
    },
  },
  emits: ['click'],
  methods: {
    onClick() {
      this.$emit('click');
    }
  },
  computed: {
    className() {
      let buttonClassName = ''

      if (this.variant === 'primary') {
        buttonClassName = 'button--primary';
      } else if (this.variant === 'secondary') {
        buttonClassName = 'button--secondary';
      }

      return buttonClassName;
    }
  }
}

</script>
