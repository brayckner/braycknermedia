<template lang="pug">
  div#contact_us.flex.flex-col.bg-brown-500.px-10
    div.flex.justify-center.mt-4
      p.text-sm.font-semibold.text-white Lets Connect

    form.flex.justify-center.mt-32.mb-24(name='contact', method='post', v-on:submit.prevent='handleSubmit', action='/success/', data-netlify='true', data-netlify-honeypot='bot-field')
      div.flex.flex-col

        input(type='hidden', name='form-name', value='contact')
        p(hidden='')
          label
            | Don&rsquo;t fill this out:
            input(name='bot-field')

        label.text-lg.font-semibold(for="services") Tell us what you are interested in:
        select#services.rounded-lg.h-16.w-full.shadow-lg.mt-2.bg-white.p-5(required)
          option(v-for="service in services" :value="service" :key="service" v-model="formData.service") {{ service }}

        div.my-4
          label.text-xl.font-semibold(for="name") Name:
          input#name.rounded-lg.h-16.w-full.shadow-lg.mt-2.p-5(type="text" v-model="formData.name" required)

        div.my-4
          label.text-xl.font-semibold(for="company_name") Company Name:
          input#company_name.rounded-lg.h-16.w-full.shadow-lg.mt-2.p-5(type="text" v-model="formData.company_name" required)
          
        div.my-4
          label.text-xl.font-semibold(for="email") Email:
          input#company_name.rounded-lg.h-16.w-full.shadow-lg.mt-2.p-5(type="email" v-model="formData.email" required)

        div.my-4
          label.text-xl.font-semibold(for="what_can_we_do") What can we do for you?
          textarea#what_can_we_do.mb-16.rounded-lg.h-40.w-full.shadow-lg.mt-2.p-5(type="text" v-model="formData.message" required)

        div.flex.justify-center
          button.font-bold.text-xl.rounded-full.shadow-lg.w-48.h-12.bg-white Submit
</template>

<script>
export default {
  data() {
    return {
      formData: {},
      services: [
        'User Experience',
        'User Interface',
        'Product Design',
        'development'
      ]
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    },
    handleSubmit(e) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": e.target.getAttribute("name"),
          ...this.formData
        })
      })
        .then(() => this.$router.push("/success"))
        .catch(error => alert(error));
    }
  }
};
</script>