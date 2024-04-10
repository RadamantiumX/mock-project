import { type Middleware } from "@reduxjs/toolkit"

export const persistanceMiddleware: Middleware = (store) => (next) => (action) => {
    next(action);
    localStorage.setItem("__auth__state__", JSON.stringify(store.getState()))
}