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
                />

                <Experience
                    startDate={"2022"}
                    endDate={"2023"}
                    companyName={"PrimaryBid"}
                    title={"Fullstack Developer"}
                    tech={"React, Next & Node, Express"}
                    location={"London, UK"}
                />

                <Experience
                    startDate={"2020"}
                    endDate={"2022"}
                    companyName={"The Frontend Company"}
                    title={"Frontend Developer"}
                    tech={"React, React Native & Firebase"}
                    location={"Remote"}
                />

                <Experience
                    startDate={"2019"}
                    endDate={"2020"}
                    companyName={"Bergx2"}
                    title={"Frontend Developer"}
                    tech={"React, TypeScript"}
                    location={"Remote"}
                />

                <Experience
                    startDate={"2018"}
                    endDate={"2019"}
                    companyName={"Reputation Manager"}
                    title={"Frontend Developer"}
                    tech={"React, TypeScript"}
                    location={"Remote"}
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