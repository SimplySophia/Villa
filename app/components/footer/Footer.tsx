"use clients"

export default function Footer() {

    return (
        <footer className="bg-slate-900 text-white text-3xl py-8 px-4">
            <div className="container mx-auto text-center">
                <p className="text-sm mb-2">
                    Thank you for visiting our site! If you have any questions or would like to work wit us, feel free to reach out.
                </p>
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} All Rights Reserved.
                </p>
            </div>
        </footer>
    )
}