import React from 'react'

function Booking() {
    const clicked = ()=>{
    alert("Your ticket has been booked successfully")
  }
  return (
    <>
    <div className="min-h-screen bg-white text-black flex flex-col items-center py-12 px-4">
      <h1 className="text-4xl font-bold mb-6">Ticket Booking</h1>

      {/* Booking Form */}
      <form className="w-full max-w-2xl bg-gray-50 p-8 rounded-lg shadow-md mb-10">
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Full Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Destination</label>
          <input
            type="text"
            placeholder="Enter your destination"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-semibold mb-2">Travel Date</label>
            <input
              type="date"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Seats</label>
            <input
              type="number"
              min="1"
              placeholder="Number of seats"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>

        <button
            onClick={clicked}
          type="submit"
          className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold transition duration-300 hover:bg-white hover:text-red-600 border border-red-600"
        >
          Book Ticket
        </button>
      </form>

      {/* Payment Options */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* International */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">🌍 International Sites</h2>
          <ul className="space-y-2">
            <li>PayPal</li>
            <li>Stripe</li>
            <li>Visa / MasterCard</li>
            <li>American Express</li>
          </ul>
        </div>

        {/* Local */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">🇮🇳 Local Sites</h2>
          <ul className="space-y-2">
            <li>UPI (PhonePe, Google Pay, Paytm)</li>
            <li>Net Banking</li>
            <li>RuPay</li>
            <li>Cash on Counter</li>
          </ul>
        </div>

        {/* Islands */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">🏝️ Islands</h2>
          <ul className="space-y-2">
            <li>Western Union</li>
            <li>MoneyGram</li>
            <li>Island Credit Union</li>
            <li>Traveler’s Cheques</li>
          </ul>
        </div>
      </div>
    </div>


    </>
  )
}
  

export default Booking
