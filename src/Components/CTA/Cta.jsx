import React from 'react';

const Cta = () => {
    return (
        <section
            class="overflow-hidden bg-[url(https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2670&auto=format&fit=crop)] bg-cover bg-top bg-no-repeat"
        >
            <div class="bg-black/50 p-8 md:p-12 lg:px-16 lg:py-24">
                <div class="text-center ltr:sm:text-left rtl:sm:text-right">
                    <h2 class="text-2xl font-bold text-white sm:text-3xl md:text-5xl">Latest Collection</h2>

                    <p class="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
                        Unveiling our latest Chikankari collection – where tradition meets modern elegance.
                        Fresh designs, intricate handwork, and unmatched comfort for every occasion.
                    </p>

                    <div class="mt-4 sm:mt-8">
                        <a
                            href="#"
                            class="inline-block rounded-full bg-indigo-400 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:ring-3 focus:ring-yellow-400 focus:outline-hidden"
                        >
                            Get Yours Today
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cta;
