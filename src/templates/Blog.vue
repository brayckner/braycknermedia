<template lang="pug">
    layout
      div.max-w-3xl.mx-auto
        h1.text-3xl.font-bold.capitalize.text-gray-800 {{ $page.blog.title }}
        p.text-lg.text-gray-700.capitalize {{ $page.blog.sub_title }}

        div
          p.text-lg.text-gray-500.capitalize {{ $page.blog.author }}
          div.flex.justify-between
            p.text-lg.text-gray-400 {{ $page.blog.timeToRead }} min read
            p.text-lg.text-gray-400 {{ $page.blog.date | diffForHumans }}

        div.border-t-2.my-1

        div.flex.justify-center
          vue-markdown#content {{ $page.blog.content }}
</template>

<page-query>
    query blog ($id: ID!) {
        blog: blog (id: $id) {
            title
            sub_title
            author
            date
            timeToRead
            content
        }
    }
</page-query>

<script>
import VueMarkdown from "vue-markdown"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"

export default {
  components: {
    VueMarkdown
  },
  metaInfo() {
    return {
      title: this.$page.blog.title
    };
  },
  created() {
    dayjs.extend(relativeTime)
  },
  filters: {
    diffForHumans: date => {
      if (!date) {
        return null
      }

      return dayjs(date).fromNow()
    }
  }
}
</script>

<style scoped>
    #content >>> img {
        @apply m-auto my-5;
    }

    #content >>> p {
        @apply text-xl leading-loose;
    }
</style>
