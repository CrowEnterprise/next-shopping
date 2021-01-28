module.exports = {
    images: {
        domains: ['localhost', 'admin.crowshopping.com', 'admin-qa.crowshopping.com'],
    },
    env: {
        siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
        serverUrl: process.env.NEXT_PUBLIC_SERVER_URL,
    },
}
