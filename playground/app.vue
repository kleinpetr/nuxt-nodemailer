<template>
  <div>
    Nuxt nodemailer playground!
  </div>
</template>

<script setup>

onMounted(async () => {
  try {
    const data = await $fetch('/api/send-mail');
    console.log('Email sent!')
    console.log(data)
  } catch (error) {
    console.error('Failed to send email:', error)
  }
})

</script>
