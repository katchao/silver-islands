import { Outlet } from "react-router-dom";
import { useEffect, Suspense } from "react";
import Header from "./components/Header";
import ClipLoader from "react-spinners/ClipLoader";
import styles from "./Root.module.scss";

export default function Root() {
    useEffect(() => {
        document.title = "Silver Islands";
    });

    return (
        <div className={styles.ContentContainer}>
            <Header />
            <main className={styles.Content}>
                <Suspense fallback={<Loading />}>
                    <Outlet />
                </Suspense>
            </main>
            <footer>
                All layouts, content, and custom images are © 2020 of The Silver
                Islands. None may be reproduced without permission. Pokemon is
                copyright © 2020 Nintendo GAME FREAK. This site is purely a fan
                made work and is in no way official.
            </footer>
        </div>
    );
}

function Loading() {
    return (
        <div className={styles.LoadingPage}>
            <div className={styles.SpinnerContainer}>
                <ClipLoader size={100} color={"#ea1fa9"} />
            </div>
        </div>
    );
}
