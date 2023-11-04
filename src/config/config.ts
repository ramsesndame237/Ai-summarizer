
const host_url = global.location.host;
let host_var = 'DEV';

if (host_url === import.meta.env.REACT_APP_DEV_API_URL) {
    host_var = 'PROD';
} else if (host_url === import.meta.env.REACT_APP_PROD_API_URL) {
    host_var = 'DEV';
}

export default {
    env: host_var,
    // stripe_pub_key: process.env[`REACT_APP_${host_var}_STRIPE_PUB_KEY`] || '',
    // paypal_client_id: process.env[`REACT_APP_${host_var}_PAYPAL_CLIENT_ID`] || '',
    api_url: process.env[`REACT_APP_${host_var}_API_URL`],
    // socket_url: process.env[`REACT_APP_${host_var}_SOCKETS_URL`] || '',
    rapid_key: import.meta.env.RAPID_API_KEY,
    rapid_host:import.meta.env.RAPID_API_HOST
};
