require('./strategies/fluentd')

const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.post('/report-violation', bodyParser.json({
  type: ['json', 'application/csp-report']
}), (req, res) => {
  if (req.body) {
    console.warn(`CSP Violation: `, req.body)
  } else {
    console.warn(`CSP Violation: no data received!`)
  }
  res.status(204).end()
})

module.exports = app