'use client'

import { useState } from 'react'
import { z } from 'zod'
import { useForm, zodResolver } from '@mantine/form'
import { Button, Group, TextInput, Textarea } from '@mantine/core'

const schema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email' }),
  subject: z.string().min(1, { message: 'Subject is required' }),
  body: z.string().min(1, { message: 'Body is required' }),
})

export default function ContactPage() {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      name: '',
      email: '',
      subject: '',
      body: '',
    },
  })

  const handleSubmit = async (values) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })

      if (response.ok) {
        setSuccess(true)
        setError(false)
        form.reset()
      } else {
        setSuccess(false)
        setError(true)
      }
    } catch (error) {
      setSuccess(false)
      setError(true)
    }
  }

  return (
    <div>
      <h1>Contact Us</h1>
      {success && <div>Your message has been sent!</div>}
      {error && <div>There was an error sending your message.</div>}
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))} className='flex flex-col gap-4'>
        <TextInput withAsterisk label='Name' {...form.getInputProps('name')} />
        <TextInput withAsterisk label='Email' {...form.getInputProps('email')} />
        <TextInput withAsterisk label='Subject' {...form.getInputProps('subject')} />
        <Textarea withAsterisk label='Body' {...form.getInputProps('body')} />
        <Group position='right' mt='md'>
          <Button type='submit'>Send</Button>
        </Group>
      </form>
    </div>
  )
}