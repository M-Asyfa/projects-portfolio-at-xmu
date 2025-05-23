// import React from "react";

// const AboutMe = () => {
//     return (
//         <section className="max-w-3xl mx-auto py-16 px-4" id="about">
//             <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
//             <p className="text-lg leading-relaxed text-gray-700">
//                 Hi! I'm <strong>Muhammad Asyfa Dwi Adzkiya</strong>, a software developer with 2+ years of experience in backend development, mainly in the banking sector. From <strong>October 2022 to April 2025</strong>, I worked as an outsourced developer at <strong>PT Xsis Mitra Utama</strong>, contributing to projects for <strong>Bank Mandiri</strong>, <strong>Bank Mega</strong>, and <strong>Bank BNI</strong>. I have a background in Physics from Universitas Brawijaya, which helps me approach problems with strong analytical thinking.
//             </p>
//             <p className="text-lg leading-relaxed text-gray-700 mb-4">
//                 I specialize in <strong>Java, Spring Boot, Oracle Database, Node.js, Express.js, PostgreSQL</strong>, and have contributed to several large-scale banking systems.
//             </p>
//             <p className="text-lg leading-relaxed text-gray-700">
//                 I'm passionate about building clean, efficient APIs, and exploring new technologies. I'm now excited to grow my skills further and contribute to impactful software products.
//             </p>
//         </section>
//     );
// };

export default function AboutMe() {
    return (
        <section className="bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">About Me</h2>

            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                    Hi! I'm <strong>Muhammad Asyfa Dwi Adzkiya</strong>, a software developer with over 2 years of experience specializing in backend development for the banking sector.
                    I worked as an outsourced developer at <strong>PT Xsis Mitra Utama</strong> from October 2022 to April 2025,
                    contributing to key systems for <strong>Bank Mandiri</strong>, <strong>Bank Mega</strong>, and <strong>Bank BNI</strong>.
                </p>

                <p>
                    I specialize in <strong>Java, Spring Boot, Oracle Database, Node.js, Express.js, PostgreSQL</strong>, and have experience building robust, secure APIs for enterprise applications.
                </p>

                <p>
                    I graduated with a degree in Physics from Universitas Brawijaya, where I developed strong problem-solving and analytical skills.
                    I'm passionate about writing clean code and learning new technologies to build impactful software.
                </p>
            </div>
        </section>
    );
}