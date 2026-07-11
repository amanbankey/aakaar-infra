import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2 } from 'lucide-react'
import Button from '../../ui/Button.jsx'
import { slideInLeft } from '../../../animations/variants.js'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl bg-[#171B22] border border-white/5 p-10 text-center"
      >
        <CheckCircle2 className="w-14 h-14 text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-bold">Thank You, {form.name.split(' ')[0] || 'there'}!</h3>
        <p className="text-[#B8C1CC] mt-2">
          Your inquiry has been received. Our team will contact you shortly.
        </p>
      </motion.div>
    )
  }

  return (
    <motion.form
      variants={slideInLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      onSubmit={handleSubmit}
      className="rounded-2xl bg-[#171B22] border border-white/5 p-7 md:p-10 space-y-5"
    >
      <h3 className="text-2xl font-bold mb-2">Send Us an Inquiry</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm text-[#B8C1CC] mb-2">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors duration-300"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm text-[#B8C1CC] mb-2">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors duration-300"
            placeholder="+91 00000 00000"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm text-[#B8C1CC] mb-2">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors duration-300"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm text-[#B8C1CC] mb-2">
          Service Required
        </label>
        <select
          id="service"
          name="service"
          value={form.service}
          onChange={handleChange}
          className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors duration-300"
        >
          <option value="">Select a service</option>
          <option value="residential">Residential Construction</option>
          <option value="commercial">Commercial Construction</option>
          <option value="industrial">Industrial Projects</option>
          <option value="civil">Civil Engineering</option>
          <option value="renovation">Renovation</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-[#B8C1CC] mb-2">
          Project Details
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
          placeholder="Tell us about your project"
        />
      </div>

      <Button type="submit" className="w-full justify-center">
        Send Inquiry <Send className="w-4 h-4" />
      </Button>
    </motion.form>
  )
}
