/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

module.exports = {
  env: {
    APIKEY: '794048239609fb01603afe50035d1615',
    CLIENT_ID:
      '825200304704-950ctbcvigv3pvpun64fqcfbqpo0us9r.apps.googleusercontent.com',
    GOOGLE_SECRET: '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',
    NEXTAUTH_URL: 'http://localhost:3000',
    JWT_SECRET: 'DXn8DXDyuJ3tiO3K0LCxrjBfaEh8MRNiZN2cTBMvVyY=',
  },
};
