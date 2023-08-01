import { GalleryType } from "components/utils/constants";
import React, { lazy } from "react";
import { createRoot } from "react-dom/client";
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import Root from "./Root.js";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const Tutorial = lazy(() => import("components/Tutorial"));
const Gallery = lazy(() => import("components/Gallery"));

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            {["/", "/art-gallery"].map((path, index) => {
                return (
                    <Route
                        path={path}
                        element={<Gallery type={GalleryType.MAIN} />}
                        key={index}
                    />
                );
            })}
            <Route
                path="/icons"
                element={<Gallery type={GalleryType.ICONS} />}
            />
            <Route path="tutorial" element={<Tutorial />} />
            <Route path="*" element={<NoMatch />} />
        </Route>
    )
);

const root = createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

export function NoMatch() {
    return <h2>404 not found</h2>;
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
