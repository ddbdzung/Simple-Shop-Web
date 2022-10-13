/**
 * Create a response object with data wrapped or success response
 * @param {object} res response object
 * @param {number} code status code
 * @param {string} message message
 * @param {array} data data
 * @returns {object}
 */
const response = (res, code, message, data = []) => res.status(code).send({
  code,
  message,
  ...(data?.data ? data : { data }),
})

export default response
