import rateLimit from 'express-rate-limit'

/**
 * Limit each IP to 100 requests per 15 mins
 */
const defaultLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 mins
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

/**
 * Limit each IP to 50 requests per 15 mins
 */
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 mins
  max: 50, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

export {
  defaultLimiter,
  authLimiter,
}
