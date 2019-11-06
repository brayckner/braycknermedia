<template lang="pug">
  layout
    div.flex.flex-col.mb-56.mt-24
      div.flex.justify-center
        p.text-xs.font-semibold.text-center
          span.block A FULL - SERVICE PRODUCT & DEVELOPMENT AGENCY
          span.block BUILT TO FULFILL THE NEEDS OF MODERN BUSINESSES

      div.flex.justify-center.mt-20.mb-24
        g-image(width='341.856' src="../assets/images/undraw_modern_professional.png" immediate="true")

      div.flex.justify-center
        button.font-bold.text-xl.rounded-full.shadow-lg.w-48.h-16.bg-white Get Started

    div#what_we_do.flex.flex-col.bg-brown-500.px-10
      div.flex.justify-center
        p.text-xl.font-semibold.text-white What We Do
        
      div#product_design.flex.justify-center.my-20
        div.flex.flex-col
          p.text-xl.font-semibold.text-white Product Design
          g-image.mt-6( width='342' src="../assets/images/undraw_mobile_prototyping.png" immediate="true")

      div.flex.justify-center.mb-8
        button.font-bold.text-xl.rounded-full.shadow-lg.w-48.h-12.bg-white Get Started

    div#development.flex.flex-col.bg-brown-500.px-10
      div.flex.justify-center.mb-20
        div.flex.flex-col
          p.text-xl.font-semibold.text-white Development
          g-image.mt-10(width='342' src="../assets/images/undraw_programming.png" immediate="true")

      div.flex.justify-center.mb-16
        button.font-bold.text-xl.rounded-full.shadow-lg.w-48.h-12.bg-white Get Started


    div#who_we_are
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