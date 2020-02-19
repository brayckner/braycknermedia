<template lang="pug">
  layout
    div.flex.flex-col
      div.flex.justify-center
        p.text-xs.font-semibold.text-center
          span.block A FULL - SERVICE PRODUCT & DEVELOPMENT AGENCY
          span.block BUILT TO FULFILL THE NEEDS OF MODERN BUSINESSES

      div.flex.justify-center.mt-20.mb-24
        g-image(width='341.856' src="../assets/svgs/undraw_modern_professional.svg" immediate="true")

      div.flex.justify-center
        button.hidden.font-bold.text-xl.rounded-full.shadow-lg.w-48.h-16.bg-white Get Started

    div#what_we_do.anchor.flex.flex-col.bg-brown-500.px-10
      div.flex.justify-center.mx-auto
        p.text-xl.font-semibold.text-white What We Do

      div#product_design.anchor.flex.justify-center.my-20
        div.flex.flex-col
          p.text-xl.font-semibold.text-white Product Design
          g-image.mt-6( width='342' src="../assets/svgs/undraw_mobile_prototyping.svg" immediate="true")

      div.flex.justify-center.mb-8
        button.hidden.font-bold.text-xl.rounded-full.shadow-lg.w-48.h-12.bg-white Get Started

    div#development.anchor.flex.flex-col.bg-brown-500.px-10
      div.flex.justify-center.mb-20
        div.flex.flex-col
          p.text-xl.font-semibold.text-white Development
          g-image.mt-10(width='342' src="../assets/svgs/undraw_programming.svg" immediate="true")

      div.flex.justify-center.mb-16
        button.hidden.font-bold.text-xl.rounded-full.shadow-lg.w-48.h-12.bg-white Get Started


    div#who_we_are.anchor
      div.flex.justify-center.my-4
        p.text-xl Who we are
      div.flex.justify-center
        div.flex.flex-col.mb-10
          g-image.mb-5(width="341" src="../assets/images/btorres_headshot.png" immediate="true")
          p.text-center.font-light.text-xl CEO
      div.flex.justify-center
        div.flex.flex-col.mb-24
          g-image.mb-5(width="341" src="../assets/images/crincon_headshot.png" immediate="true")
          p.text-center.font-light.text-xl CTO
</template>