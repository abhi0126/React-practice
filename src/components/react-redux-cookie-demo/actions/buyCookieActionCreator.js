import { BUY_A_COOKIE } from "./actionTypes";

function buyCookieActionCreator() {
    return {
        type: BUY_A_COOKIE,
        info: 'First Redux Action'
    }
}

export default buyCookieActionCreator;