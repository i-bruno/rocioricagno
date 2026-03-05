import { useEffect } from "react";

function Fotolibro() {
    useEffect(() => {
        window.location.href = "/pdf/fotolibro.pdf";
    }, []);

    return null;
}

export default Fotolibro