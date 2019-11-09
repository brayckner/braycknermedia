<template lang="pug">
  div.relative.min-h-full
    header.fixed.inset-x-0.top-0.z-10
      the-navbar
    div.py-24
      slot
    footer.absolute.bottom-0.w-full.h-0.z-0
      the-footer
</template>

<script>
import TheNavbar from '~/components/TheNavbar'
import TheFooter from '~/components/TheFooter'

export default {
  components: {
    TheNavbar,
    TheFooter
  }
}

</script>