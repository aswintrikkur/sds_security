import React, { useState } from "react";
const categories = ["Bussiness", "CCTV", "Security", "Tag4"];

export const BlogsPage = () => {
    const [selected, setSelected] = useState("All");

    return (
        <div>
            {/* banner */}
            <div className="">
                <img
                    className="w-full max-h-96 object-cover object-[0%_45%]  "
                    src="https://s3-alpha-sig.figma.com/img/6d0a/7d1c/4dd2b3307a3e45df62ff32e41c10cd2f?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VwxkQEZhrrdXyQK~giwGhkNLBx~MKudpglrkSt8OSOvIcpNZN0AQNegJiSeSoqpB2AaC7Akml-QGBHTeRfhLLUdSCh-XbG1BUGjYqVmXwfJnzz0Yunv41aeynrZuKb~sxtNE1KyBL1jmr1UmeWhPsC4YfJwFF9o8Ya5VX5mDnoBI4DKWiBaylDbRk0QO0~QG6clWSW4ob3-qadJ8tFoB3dW~hsKSEQKh2hguUypds6veJc4y6ZBKHnkcYrX5lTOVmQt8Geza2TRYhUeWhAvD38IhBXeXFfnPZ4uWuX2EXJbDhvCo3cV4PbmqO0pcuHHfmBZ-GftbdqX7fyu8hapF0g__"
                    alt="banner-img"
                />
            </div>

            <section>
                <p className="text-md md:text-xl opacity-60">Blogs</p>
                <h2>News & Insights on Modern Security</h2>

                {/* categories */}
                <div className="flex items-center justify-between  mt-6 border-b border-border-primary h-10">
                    <div className="flex gap-6 md:gap-8 h-full overflow-x-scroll">
                        {["All", ...categories].map((tag, index) => (
                            <p
                                key={index}
                                onClick={() => setSelected(tag)}
                                className={`text-md md:text-lg px-2 font-medium cursor-pointer transition-opacity duration-300 ${
                                    selected === tag ? "border-b-2 border-accent-foreground text-accent-foreground" : "opacity-60"
                                }`}
                            >
                                {tag}
                            </p>
                        ))}
                    </div>

                    <div className="h-full pl-5">
                        <select name="filter" className="text-gray-700  outline-0 " id="filter">
                            <option value="most-recent">Most recent</option>
                            <option value="relevant">Relevant</option>
                            <option value="higher-lower">Price:Higher to lower</option>
                            <option value="lower-higher">Price:Lower to higher</option>
                        </select>
                    </div>
                </div>
            </section>
        </div>
    );
};
