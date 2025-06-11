import { Experience } from "@/components/work/Experience";

export const Work = () => {
    return (
        <section className={"text-white min-h-screen"}>
            <div className={"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"}>
                <h1 className={"text-7xl text-right mb-8 font-mono font-semibold"}>{"Work"}</h1>
            </div>
            <div>
                <Experience
                    startDate={"May 2025"}
                    endDate={"Present"}
                    companyName={"Scuba Seasons"}
                    title={"Fullstack Developer"}
                    tech={"React, React Native & Supabase"}
                    location={"Calgary, AB"}
                    description={[
                        "Collaborated on a React-based web admin tool and React Native mobile application for a scuba diving platform, enabling users to explore diving spots, upload photos, and advertise partner-led trips.",
                        "Improved code quality, maintainability, and performance by refactoring complex codebase sections.",
                        "Fixed critical bugs in the Supabase-integrated admin tool, enhancing functionality for managing user-generated content and partner trip listings.",
                        "Implemented new features for the admin interface, streamlining content moderation and improving user experience for platform administrators.",
                    ]}
                />

                <Experience
                    startDate={"2022"}
                    endDate={"2023"}
                    companyName={"PrimaryBid"}
                    title={"Fullstack Developer"}
                    tech={"React, Next & Node, Express"}
                    location={"London, UK"}
                    description={[
                        "Developed and maintained features for a financial platform, enabling retail investors to access IPOs and fundraises at institutional terms.",
                        "Delivered a high-quality product under tight deadlines, achieving a 95% customer satisfaction rate through rigorous testing and peer reviews.",
                        "Designed and implemented an internal UI component library, adopted by 3+ teams, enhancing developer productivity and visual consistency across products.",
                    ]}
                />

                <Experience
                    startDate={"2020"}
                    endDate={"2022"}
                    companyName={"The Frontend Company"}
                    title={"Frontend Developer"}
                    tech={"React, React Native & Firebase"}
                    location={"Remote"}
                    description={[
                        "Built a React Native mobile application from scratch for a personal CRM, streamlining business relationship management for 10,000+ users.",
                        "Spearheaded stakeholder communication, gathering requirements and planning development sprints, resulting in on-time delivery of key milestones.",
                        "Mentored 3 junior developers through code reviews and pair programming, improving team code quality and reducing bugs by 20%.",
                    ]}
                />

                <Experience
                    startDate={"2019"}
                    endDate={"2020"}
                    companyName={"Bergx2"}
                    title={"Frontend Developer"}
                    tech={"React, TypeScript"}
                    location={"Remote"}
                    description={[
                        "Contributed to a SaaS platform built with React and Next.js, optimizing document handling processes for 50+ business clients.",
                        "Implemented role-based access controls, enhancing security and user experience for multi-tenant environments.",
                        "Collaborated with the design team using Figma to bring design concepts to life in a pixel-perfect manner.",
                    ]}
                />

                <Experience
                    startDate={"2018"}
                    endDate={"2019"}
                    companyName={"Reputation Manager"}
                    title={"Frontend Developer"}
                    tech={"React, TypeScript"}
                    location={"Remote"}
                    description={[
                        "Developed an internal document management system and dashboard using Material UI, improving operational efficiency for 20+ staff members.",
                        "Gathered business requirements directly from management, ensuring alignment between technical solutions and business needs.",
                        "Created interactive prototypes to validate requirements, accelerating project approval by 10%.",
                    ]}
                />
            </div>
            <div className={"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"}>
                <div className={"text-right mt-8 text-gray-400"}>
                    <div className={"text-lg"}>{"Work experience"}</div>
                    <div className={"text-xl font-light italic"}>{"5+ years"}</div>
                </div>
            </div>
        </section>
    );
};