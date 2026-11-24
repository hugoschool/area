import http from "k6/http";
import { check } from "k6";

const BASE_URL = "http://localhost:3000";
const USERS_AMOUNT = __ENV.USERS_AMOUNT || 10000;

export const options = {
    vus: USERS_AMOUNT,
    iterations: USERS_AMOUNT,
    thresholds: {
        http_req_failed: ["rate<0.01"],
        http_req_duration: ["p(95)<500"],
    },
};

export default function () {
    const ping = http.get(`${BASE_URL}/ping`);

    check(ping, {
        "GET /ping returns 200": (r) => r.status === 200,
    });

    const login = http.post(
        `${BASE_URL}/login`,
        { headers: { "Content-Type": "application/json" } }
    );

    let body;
    try {
        body = login.json();
    } catch (_) {
        body = null;
    }

    check(login, {
        "POST /login returns 200": (r) => r.status === 200,
    });
}
