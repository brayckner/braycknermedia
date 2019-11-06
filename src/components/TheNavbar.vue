<template lang="pug">
  div.shadow-md.px-10.py-8.h-24.bg-white
    div.flex.justify-between
      div.flex.flex-col.leading-tight
        div.flex.cursor-pointer
          div
            svg.w-6.h-6(xmlns='http://www.w3.org/2000/svg', width='414.988', height='493.329', viewbox='0 0 414.988 493.329')
              path#Rectangle_Copy_8(data-name='Rectangle Copy 8', d='M0,0,239.663,2.573l10.363,36.8-52.18,12.641-48.29,1.352L73.063,51.6,18.321,40.377Z', transform='matrix(0.848, -0.53, 0.53, 0.848, 174.674, 132.493)')
              g#Logo_V2_Copy_2(data-name='Logo V2 Copy 2', transform='translate(0 33.073)')
                path#Rectangle(d='M0,0,196.37,121.452V459.938L33.821,384.48Z', transform='translate(0 0)')
                g#New_Logo_V1(data-name='New Logo V1', transform='translate(407.573 460.256) rotate(180)')
                  path#Rectangle_Copy(data-name='Rectangle Copy', d='M196.37,0,0,121.135v338.8L162.549,384.48Z', transform='translate(196.37 459.938) rotate(180)')
                  path#Rectangle_Copy_6(data-name='Rectangle Copy 6', d='M59.4,32.61.57,0,0,101.97l63.792,65.971Z', transform='matrix(0.485, 0.875, -0.875, 0.485, 196.401, 190.092)', fill='#fff')
                path#Rectangle_Copy_4(data-name='Rectangle Copy 4', d='M4.392,32.61,63.222,0l.57,101.97L0,167.942Z', transform='matrix(-0.485, 0.875, -0.875, -0.485, 228.034, 213.652)', fill='#fff')
                path#Union_1(data-name='Union 1', d='M130.4,66.741,246.992,0,220.149,84.9,129.688,144ZM26.577,84.757,0,0,116.037,66.431v77.254Z', transform='translate(80.643 253.683)', fill='#fff')

          h1
            span.text-lg.uppercase.font-semibold bracykner
            span.text-lg.uppercase.text-gray-500 media

        div.flex.justify-center
          h2.text-xs.font-medium.text-gray-500 |Atlanta, GA|

      div.cursor-pointer(@click="toggleMenu()")
        svg.h-8.w-8(xmlns='http://www.w3.org/2000/svg', width='41', height='24.6', viewbox='0 0 41 24.6')
          path(d='M2,26v4.1H43V26ZM2,15.75v4.1H43v-4.1ZM2,5.5V9.6H43V5.5Z', transform='translate(-2 -5.5)')

      div.fixed.top-0.right-0.z-20.pr-5.max-w-xs(v-show="isMenuOpen")
        div.bg-white.rounded-lg.shadow-lg
          div.flex.justify-end.pt-5.pr-5.mb-10(@click="toggleMenu()")
            svg(xmlns='http://www.w3.org/2000/svg', width='29.018', height='29.018', viewbox='0 0 29.018 29.018')
              path(d='M34.018,7.923,31.1,5,19.509,16.587,7.923,5,5,7.923,16.587,19.509,5,31.1l2.923,2.923L19.509,22.432,31.1,34.018,34.018,31.1,22.432,19.509Z', transform='translate(-5 -5)')

          div.flex.flex-col.pl-5.pb-5.pr-16
            a.font-medium.text-3xl.my-2.cursor-pointer(href="/#what_we_do" @click="toggleMenu()") What We Do
            a.font-medium.text-3xl.my-2.cursor-pointer(href="/#who_we_are" @click="toggleMenu()") Who We Are
            a.font-medium.text-3xl.my-2.cursor-pointer(href="/#product_design" @click="toggleMenu()") Product Design
            a.font-medium.text-3xl.my-2.cursor-pointer(href="/#development" @click="toggleMenu()") Development
            a.font-medium.text-3xl.my-2.cursor-pointer(href="/#contact_us" @click="toggleMenu()") Contact Us

</template>

<script>

export default {
  data () {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu () {
      console.log('toggle')
      this.isMenuOpen = !this.isMenuOpen
    }
  }
}

</script>