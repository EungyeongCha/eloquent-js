// 1. Callbacks: when the action is finished, the callback function is called with the result
setTimeout(() => console.log("Tick"), 500);

import {bigOak} from "./crow-tech";
bigOak.readStorage("food caches", caches => {
    let firstCache = caches[0];
    bigOak.readStorage(firstCache, info => {
        console.log(info);
    });
});

