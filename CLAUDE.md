# Node.js Currency Converter - Claude Memory

## Project Overview
A Node.js currency converter that fetches real-time exchange rates and allows users to convert between multiple currencies with a clean, interactive UI.

## Recent Changes (2025-08-25)
### Bug Fix - API Error Handling
- **Fixed TypeError crash** when API returns error response instead of rates data
- **Added robust error handling** in both server and client for API failures
- **API key updated** due to usage limit being reached on previous key
- **Improved user experience** with meaningful error messages instead of crashes

## Previous Changes (2025-08-22)
### Complete Currency Converter Widget
- **Implemented proper API key security** - API key stays server-side only
- **Created Express server** with `/api/rates` endpoint that proxies external API calls
- **Client-side simplification** - removed all environment variable handling from client
- **Added widget functionality:**
  - Reset Amounts button - clears all input values to blank
  - Clear Currencies button - removes all selected currencies
  - localStorage persistence - remembers user's currency selections
  - Fixed 550px height - maintains consistent widget appearance
- **Improved UX:**
  - Locale-aware formatting with thousands separators
  - 2 decimal places for amounts, 4 for exchange rates
  - API provider logo with clickable link to exchangeratesapi.io
- **Environment variables:**
  - `EXCHANGE_RATES_API_KEY` - API key used by server (never exposed to client)
  - `EXCHANGE_RATES_BASE_URL` - API endpoint URL (server-side only)

## Technical Details
### API Integration
- Uses exchangeratesapi.io API for real-time exchange rates
- Fetches data on page load and updates currency rates
- Base currency defaults to EUR (rate = 1) as per API structure

### Key Files
- `server.js` - Express server with `/api/rates` endpoint and static file serving
- `js/main.js` - Client-side application logic with localStorage persistence
- `index.html` - Widget structure with control buttons and API logo
- `css/style.css` - Complete widget styling with fixed dimensions
- `.env` - Environment variables (server-side only, gitignored)
- `package.json` - Node.js dependencies (express, dotenv)
- `img/exchangeratesapi_white_logo.svg` - API provider logo

### Architecture
- **Server-side**: Express.js server that proxies external API calls
- **Client-side**: Pure JavaScript widget with persistent state
- **Security**: API keys never exposed to client browser
- **API Design**: RESTful `/api/rates` endpoint provides exchange rate data
- **Data Persistence**: localStorage for user preferences
- **Widget Design**: Fixed 550px height, responsive controls
- **Internationalization**: Locale-aware number formatting
- Event-driven UI with currency conversion logic

## Setup Requirements
1. API key from exchangeratesapi.io (free tier available)
2. **Environment variables configured in `.env`:**
   ```
   EXCHANGE_RATES_API_KEY=your_api_key_here
   EXCHANGE_RATES_BASE_URL=http://api.exchangeratesapi.io/v1/latest?access_key=
   ```
3. **Dependencies**: `npm install` (express, dotenv)
4. **Run server**: `npm start` (serves on port 4545)

## Architecture Benefits
- **Secure**: API keys never exposed to client browser
- **Scalable**: Server can handle rate limiting, caching, error handling
- **Clean separation**: Client handles UI, server handles external API integration
- **Production ready**: Proper environment variable usage
- Self-contained with local flag icons from flagicons.lipis.dev