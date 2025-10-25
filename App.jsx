import { useState } from 'react'

export default function App() {
  const [form, setForm] = useState({ name: '', phone: '', category: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSuccess(true)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-100 via-white to-green-50 text-gray-800 p-6">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-green-700 mb-2 animate-bounce">Mwika Inc Alerts</h1>
        <p className="text-lg">Instant job and service alerts via SMS. Secure with M-Pesa.</p>
      </div>

      {!success ? (
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md border border-green-100"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full mb-3 p-3 border rounded-lg focus:outline-green-600"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone (07XXXXXXXX)"
            value={form.phone}
            onChange={handleChange}
            className="w-full mb-3 p-3 border rounded-lg focus:outline-green-600"
            required
          />
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full mb-3 p-3 border rounded-lg focus:outline-green-600"
            required
          >
            <option value="">Select Category</option>
            <option>Finance</option>
            <option>ICT</option>
            <option>Marketing</option>
          </select>
          <button
            type="submit"
            className="w-full py-3 bg-green-700 hover:bg-green-800 text-white rounded-lg font-semibold transition-all animate-pulse"
          >
            {loading ? 'Processing...' : 'Subscribe via M-Pesa'}
          </button>
        </form>
      ) : (
        <div className="bg-white shadow-md rounded-xl p-6 text-green-700 text-center border border-green-100">
          <p className="text-2xl mb-2">✅ Subscription Successful!</p>
          <p>You’ll receive alerts for <b>{form.category}</b> soon.</p>
        </div>
      )}

      <footer className="mt-6 text-sm text-gray-600">
        © {new Date().getFullYear()} Mwika Inc Alerts — Powered by SMS + M-Pesa API
      </footer>
    </div>
  )
}
