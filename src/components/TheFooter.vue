<template lang="pug">
    div#contact_us.flex.flex-col.bg-brown-500.px-10
        div.flex.justify-center.mt-4
            p.text-sm.font-semibold.text-white Lets Connect

        form.flex.justify-center.mt-32.mb-24(name='contact', method='post', v-on:submit.prevent='handleSubmit', action='/success/', data-netlify='true', data-netlify-honeypot='bot-field')
            div.flex.flex-col

                div.hidden
                    input(type='hidden', name='form-name', value='contact')
                    p(hidden)
                        label
                            | Don&rsquo;t fill this out:
                            input(name='bot-field')

                label.text-lg.font-semibold(for="offered") Tell us what you are interested in:
                select.rounded-lg.h-16.w-full.shadow-lg.mt-2.bg-white.p-5(id="offered" name="offered" v-model="formData.offered" required)
                    option(v-for="service in services" v-bind:value="service.value" v-bind:key="service.value") {{ service.text }}

                div.my-4
                    label.text-xl.font-semibold(for="name") Name:
                    input.rounded-lg.h-16.w-full.shadow-lg.mt-2.p-5(id="name" name="name" type="text" v-model="formData.name" required)

                div.my-4
                    label.text-xl.font-semibold(for="company_name") Company Name:
                    input.rounded-lg.h-16.w-full.shadow-lg.mt-2.p-5(id="company_name" name="company_name" type="text" v-model="formData.company_name" required)

                div.my-4
                    label.text-xl.font-semibold(for="email") Email:
                    input.rounded-lg.h-16.w-full.shadow-lg.mt-2.p-5(id="email" name="email" type="email" v-model="formData.email" required)

                div.my-4
                    label.text-xl.font-semibold(for="message") What can we do for you?
                    textarea.mb-16.rounded-lg.h-40.w-full.shadow-lg.mt-2.p-5(id="message" name="message" v-model="formData.message" required)

                div.flex.justify-center
                    button.font-bold.text-xl.rounded-full.shadow-lg.w-48.h-12.bg-white(type="submit") Submit
</template>

<script>
  export default {
    data () {
      return {
        formData: {},
        services: [
          { text: 'User Experience', value: 'user_experience'},
          { text: 'User Interface', value: 'user_interface' },
          { text: 'Product Design', value: 'product_design' },
          { text: 'Development', value: 'development' }
        ]
      }
    },
    methods: {
      async handleSubmit (e) {
        let data = new URLSearchParams()
        data.append('form-name', e.target.getAttribute('name'))
        for (let [key, value] of Object.entries(this.formData)) {
          data.append(key, value)
        }
        try {
          await fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: data
          })
          this.$router.push('/success')
        } catch (error) {
          alert(error)
        }
      }
    }
  }
</script>