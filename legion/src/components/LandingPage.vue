<script setup>
   import { ref } from 'vue'

   import logo from '@/assets/brand/ts__logo.svg'
   import typeWide from '@/assets/brand/ts__type__wide.svg'
   import typeStack from '@/assets/brand/ts__type__stack.svg'
   import behance from '@/assets/brand/behance-square-brands.svg'
   import linkedin from '@/assets/brand/linkedin-brands.svg'

</script>

<template>
   <section class="container">
      <header>
         <img class="logo" :src="logo" />
      </header>
      <article>
         <h1 class="sr-only">Tim Spears</h1>
         <h2 class="sr-only">Front-end Developer</h2>
         <div class="message">
            <p>This is a work in progress.</p>
            <p>Let's connect.</p>
            <div class="buttonGroup">
               <a class="button -icon" href="https://www.behance.net/timspears" target="_blank">
                  <img :src="behance" alt="Connect on Behance" />
               </a>
               <a class="button -icon" href="https://www.linkedin.com/in/tim-spears" target="_blank">
                  <img :src="linkedin" alt="Connect on Linked In" />
               </a>
            </div>
         </div>
      </article>
      <footer>
         <div class="type -stack" v-if="$vssHeight > $vssWidth">
            <img :src="typeStack" alt="Tim Spears: Front-end Developer" />
         </div>
         <div class="type -wide" v-else>
            <img :src="typeWide" alt="Tim Spears: Front-end Developer" />
         </div>
      </footer>
   </section>
</template>