<template lang="pug">
  div.shadow-md.px-10.py-8.h-24.bg-white
    div.flex.justify-between
      div.flex.flex-col
        g-link(to="/")
            g-image.w-64(src="../assets/images/logo.png" immediate="true")
        div.flex.justify-center
          g-image.w-20.h-4(src="../assets/images/below_logo.png" immediate="true")

      div.cursor-pointer(@click="isMenuOpen = !isMenuOpen")
        svg.h-8.w-8(xmlns='http://www.w3.org/2000/svg', width='41', height='24.6', viewbox='0 0 41 24.6')
          path(d='M2,26v4.1H43V26ZM2,15.75v4.1H43v-4.1ZM2,5.5V9.6H43V5.5Z', transform='translate(-2 -5.5)')

      div.fixed.top-0.right-0.z-20.pr-5.max-w-xs(v-show="isMenuOpen")
        div.bg-white.rounded-lg.shadow-lg
          div.flex.justify-end.pt-5.pr-5.mb-5(@click="isMenuOpen = !isMenuOpen")
            svg(xmlns='http://www.w3.org/2000/svg', width='29.018', height='29.018', viewbox='0 0 29.018 29.018')
              path(d='M34.018,7.923,31.1,5,19.509,16.587,7.923,5,5,7.923,16.587,19.509,5,31.1l2.923,2.923L19.509,22.432,31.1,34.018,34.018,31.1,22.432,19.509Z', transform='translate(-5 -5)')

          div.flex.flex-col.pl-5.pb-5.pr-10
            a.font-medium.text-3xl.my-2.cursor-pointer(href="/#what_we_do" @click="isMenuOpen = !isMenuOpen") What We Do
            a.font-medium.text-3xl.my-2.cursor-pointer(href="/#who_we_are" @click="isMenuOpen = !isMenuOpen") Who We Are
            a.font-medium.text-3xl.my-2.cursor-pointer(href="/#product_design" @click="isMenuOpen = !isMenuOpen") Product Design
            a.font-medium.text-3xl.my-2.cursor-pointer(href="/#development" @click="isMenuOpen = !isMenuOpen") Development
            a.font-medium.text-3xl.my-2.cursor-pointer(href="/#contact_us" @click="isMenuOpen = !isMenuOpen") Contact Us
</template>

<script>
export default {
  data () {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    // enter (el, done) {
    //   el.velocity({
    //     opacity: 0
    //   })
    // }
  }
}

</script>