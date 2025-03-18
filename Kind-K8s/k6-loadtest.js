// import http from 'k6/http'
// import { sleep } from 'k6'

// export let options = {
//   stages: [
//     { duration: '10s', target: 200 },
//     { duration: '60s', target: 400},
//     { duration: '30s', target: 200 },
//     { duration: '10s', target: 0 },
//   ],
// }

// export default function () {
//   http.get('http://localhost:61848/')
//   sleep(1)
// }


import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    vus: 1, // 1 virtual user
    iterations: 20, // Total 20 requests
};

export default function () {
    let res = http.get('http://54.169.221.161:8000/api1');
    
    check(res, {
        'status is 200 or 429': (r) => r.status === 200 || r.status === 429,
    });

    // Optional: log rate limit info if available
    console.log(`Status: ${res.status}, X-RateLimit-Remaining: ${res.headers['X-RateLimit-Remaining']}`);

    // Sleep to simulate 1 request every 6 seconds (10 req/min = 1 req every 6 seconds)
    sleep(6);
}
