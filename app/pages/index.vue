<script setup lang="ts">
const age = Math.floor(
    (Date.now() - new Date("2006-11-28").getTime()) /
        (1000 * 60 * 60 * 24 * 365.25),
);

const socials: { platform: string; url: string; username: string }[] = [
    {
        platform: "bsky",
        url: "https://bsky.app/profile/did:plc:c3eyz3zd3bcnb6yuiylfaexo",
        username: "@luvsick.gg",
    },
    {
        platform: "discord",
        url: "https://discord.com/users/293020630608248832",
        username: "@luvsick.gg",
    },
    {
        platform: "signal",
        url: "https://signal.me/#eu/s5AaMe2FPqNiKcbrP71wH7S9aUddKAYmckvX7cMfEe53oCbBj2hHSo5ELtuFV8dG",
        username: "@luvsick.01",
    },
    {
        platform: "email",
        url: "mailto:hi@luvsick.gg",
        username: "hi@luvsick.gg",
    },
    {
        platform: "steam",
        url: "https://steamcommunity.com/id/luvsickgg",
        username: "id/luvsickgg",
    },
    {
        platform: "codeberg",
        url: "https://codeberg.org/luvsick",
        username: "@luvsick",
    },
];

const servers: { name: string; specs: string }[] = [
    {
        name: "lumi",
        specs: "France, 4 Cores, 8GB RAM, 400Mbps",
    },
];

const orgs: string[] = [];
</script>

<template>
    <div
        class="min-h-screen bg-[#0b1020] text-[#e6eef6] antialiased py-9 px-5 flex justify-center items-start"
        style="
            background-image:
                radial-gradient(
                    1200px 600px at 10% 10%,
                    rgba(139, 92, 246, 0.07),
                    transparent
                ),
                radial-gradient(
                    1000px 500px at 90% 90%,
                    rgba(6, 182, 212, 0.04),
                    transparent
                );
        "
    >
        <main class="w-full max-w-[920px] grid grid-cols-1 gap-5">
            <section
                class="p-5 bg-white/[0.03] rounded-xl border border-white/[0.02] sm:p-4"
            >
                <h1 class="m-0 text-2xl mb-2">luvsick.gg</h1>
                <p class="m-0 mb-[14px] text-white/60 text-[13px]">
                    hiya! i'm a {{ age }} year old student and aspiring software
                    developer. lately i've been diving into digital privacy,
                    open source, security, and transparency. i'm also into
                    playing with infrastructure and self-hosting, as well as
                    playing with modern tech.
                </p>
                <p class="mt-3 mb-0 text-white/60 text-[13px] leading-6">
                    you'll probably also find me playing some games, listening
                    to music, messing with my dotfiles, or just existing on the
                    internet.
                </p>
            </section>

            <section
                id="online"
                class="p-5 bg-white/[0.03] rounded-xl border border-white/[0.02] sm:p-4"
            >
                <h2 class="m-0 mb-2 text-base">online</h2>
                <p class="m-0 mb-[14px] text-white/60 text-[13px]">
                    i'm around on a few platforms, feel free to say hi!
                </p>

                <ul
                    class="list-none p-0 m-0 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3 max-[480px]:grid-cols-1"
                >
                    <li
                        v-for="social in socials"
                        :key="social.platform"
                        class="bg-gradient-to-b from-white/[0.01] to-white/[0.005] p-3 rounded-[10px] border border-white/[0.02] min-w-0"
                    >
                        <a
                            :href="social.url"
                            rel="noopener noreferrer"
                            target="_blank"
                            class="flex gap-3 items-center no-underline text-inherit min-w-0"
                        >
                            <div class="min-w-0 flex-1 flex flex-col gap-[2px]">
                                <span class="font-semibold text-sm">{{
                                    social.platform
                                }}</span>
                                <em
                                    class="text-white/60 not-italic text-[13px] overflow-hidden text-ellipsis whitespace-nowrap"
                                    >{{ social.username }}</em
                                >
                            </div>
                        </a>
                    </li>
                </ul>
            </section>

            <section
                class="p-5 bg-white/[0.03] rounded-xl border border-white/[0.02] sm:p-4"
            >
                <h2 class="m-0 mb-2 text-base">luvsicknet</h2>
                <p class="m-0 mb-[14px] text-white/60 text-[13px]">
                    my digital playground, where i self-host random experiments
                    and mess around with infrastructure.
                </p>

                <div class="mt-2">
                    <div
                        class="text-white/60 flex gap-2 items-center mb-3 text-[13px]"
                    >
                        <span>currently, i operate</span>
                        <strong class="text-white">{{ servers.length }}</strong>
                        <span
                            >{{
                                servers.length === 1 ? "server" : "servers"
                            }}.</span
                        >
                    </div>

                    <ul class="list-none p-0 m-0 grid gap-[10px]">
                        <li
                            v-for="server in servers"
                            :key="server.name"
                            class="p-3 rounded-[10px] bg-gradient-to-b from-white/[0.01] to-white/[0.005] border border-white/[0.02]"
                        >
                            <div class="flex justify-between items-center mb-2">
                                <div class="font-bold text-[15px]">
                                    {{ server.name }}
                                </div>
                            </div>
                            <ul class="list-none p-0 m-0 flex gap-2 flex-wrap">
                                <li
                                    v-for="(spec, index) in server.specs.split(
                                        ', ',
                                    )"
                                    :key="index"
                                    class="text-[13px] text-white/60 bg-white/[0.01] py-[6px] px-2 rounded-lg border border-white/[0.01]"
                                >
                                    {{ spec }}
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </section>

            <section
                class="p-4 bg-white/[0.03] rounded-xl border border-white/[0.02] text-sm"
                v-if="orgs.length"
            >
                <h3 class="m-0 mb-2">organisations i support</h3>
                <p class="m-0 mb-[14px] text-white/60 text-[13px]">
                    i'm proud to be a member of and support the following
                    organisations:
                </p>
                <ul class="list-none p-0 mt-2 mb-0 flex flex-col gap-2">
                    <li
                        v-for="org in orgs"
                        :key="org"
                        class="py-2 px-[10px] rounded-lg bg-white/[0.01] border border-white/[0.02] text-white/60 text-sm"
                    >
                        {{ org }}
                    </li>
                </ul>
            </section>
        </main>
    </div>
</template>
