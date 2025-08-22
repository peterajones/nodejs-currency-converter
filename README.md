# Node.js Currency Converter #

I found this project on [YouTube](https://www.youtube.com/c/CodingJourney/videos). A very comprehensive tutorial on how to build a currency converter. This has been converted to a complete Node.js currency converter widget with proper API key security, persistent preferences, and professional styling. Here's my original vanillaJS [repo](https://github.com/peterajones/vanilla-currency-converter).

The tutorial is a two part video.

[Part One](https://www.youtube.com/watch?v=ARBvYDNeNdM)

[Part Two](https://www.youtube.com/watch?v=F4TfBopAmaY)

You can find the original code on [CodePen](https://codepen.io/Coding_Journey/pen/exjrdghttps://codepen.io/Coding_Journey/pen/exjrdg).

In the tutorial, the flag icons are links to images but I wanted to make this a little more self contained so I grabbed some flags from [flagicons](https://flagicons.lipis.dev).

You will probably want to use the images included in this repo as there are way more 
icons in the [lipis repo](https://github.com/lipis/flag-icon-css).

You will also need an API KEY from [Exchangeratesapi](https://exchangeratesapi.io/). At the time the videos were recorded, the API KEY was not required but it is required now - **it's free!**

## Setup Instructions

1. Get your free API key from [exchangeratesapi.io](https://exchangeratesapi.io/)
2. Add your API key to the `.env` file:
   ```
   EXCHANGE_RATES_API_KEY=your_api_key_here
   EXCHANGE_RATES_BASE_URL=http://api.exchangeratesapi.io/v1/latest?access_key=
   ```
3. Install dependencies: `npm install`
4. Start the server: `npm start`
5. Open your browser to `http://localhost:4545`

## Features

### Core Functionality
- **Real-time exchange rates** from exchangeratesapi.io
- **30+ currencies** with country flags
- **Interactive currency selection** with search/scroll
- **Live conversion** as you type
- **Locale-aware formatting** (thousands separators, decimal places)

### Widget Controls
- **Reset Amounts** - Clear all input values
- **Clear Currencies** - Remove all selected currencies
- **Add Currency** - Scrollable dropdown with all available currencies
- **Remove Currency** - Click X on any currency to remove

### Persistent Preferences
- **localStorage integration** - Remembers your currency selections
- **Default currencies** - CAD, USD, EUR, JPY on first visit
- **Custom lists** - Build and save your own currency combinations

### Professional Design
- **Fixed 550px widget height** - Consistent appearance
- **Responsive styling** - Works on different screen sizes
- **API provider credit** - Clickable logo linking to exchangeratesapi.io
- **Clean, modern UI** - Professional currency converter widget

## Architecture

This project demonstrates **proper environment variable usage**:
- **Server-side**: Express server uses `.env` variables to securely call external APIs
- **Client-side**: Fetches exchange rate data from `/api/rates` endpoint (no API keys exposed)
- **Security**: API keys remain server-side only, never visible in browser
- **Data Persistence**: localStorage for user preferences across sessions

**Note:** This is the correct way to handle API keys in web applications!

I also added a couple of my own niceties. Can you find them?