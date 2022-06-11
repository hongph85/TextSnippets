const PROXY_CONFIG = [
  {
    context: [
      "/**",
    ],
    target: "https://localhost:7008/api/",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
