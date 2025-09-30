// app/(marketing)/about-me/page.tsx or app/page.tsx
// Tailwind + shadcn/ui + framer-motion + lucide-react
// Drop this file into your Next.js app. Requires Tailwind + shadcn/ui setup.
'use client'

// import { Metadata } from "next";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, Heart, Code2, Home, Video, ArrowRight, Sparkles, Coffee, CheckCircle2 } from "lucide-react";

// export const metadata: Metadata = {
//   title: "Jervi — Dev & House‑Husband on a Quest",
//   description:
//     "Full‑stack developer, proud house‑husband energy. I build scalable backends, clean frontends, and I'm open to a lifelong PR: marriage.",
//   openGraph: {
//     title: "Jervi — Dev & House‑Husband on a Quest",
//     description:
//       "Full‑stack developer, proud house‑husband energy. I build scalable backends, clean frontends, and I'm open to a lifelong PR: marriage.",
//     type: "website",
//   },
// };

const skills = [
  "Node.js",
  "TypeScript",
  "PostgreSQL/MySQL",
  "Xano",
  "Laravel",
  "Next.js",
  "React Native",
  "Supabase",
  "Python",
  "MongoDB",
  "Redis/Queues",
  "Websockets",
];

const values = [
  { icon: <Home className="h-5 w-5" />, label: "Family‑first mindset" },
  { icon: <Coffee className="h-5 w-5" />, label: "Domestic ops: coffee → code → care" },
  { icon: <CheckCircle2 className="h-5 w-5" />, label: "Reliability > flash" },
  { icon: <Video className="h-5 w-5" />, label: "Build‑in‑public videos" },
];

const projects = [
  {
    title: "Pet Alert France (Rebuild)",
    points: [
      "Migrated 3M+ records MongoDB → PostgreSQL with Python",
      "Rebuilt CRUD on Xano; Facebook scheduler across 10+ pages via API",
    ],
    href: "#pet-alert",
  },
  {
    title: "FacelessNiches (YouTube Analytics)",
    points: [
      "Node.js + PostgreSQL, materialized views for heavy analytics",
      "YouTube API with configurable cronjobs & React admin",
    ],
    href: "https://facelessniches.com",
  },
];

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:py-14">
      {/* Hero */}
      <section className="relative">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start gap-6 rounded-3xl border bg-background p-8 shadow-sm md:p-10"
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Badge variant="secondary" className="gap-1">
              <Sparkles className="h-4 w-4" /> Open to work & marriage PRs
            </Badge>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">House‑husband energy, senior‑dev output</span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
            Hi, It’s Jervi — <span className="text-primary">full‑stack dev</span> &
            <span className="ml-2"> house‑husband on a quest</span>
          </h1>

          <p className="max-w-2xl text-muted-foreground">
            I craft scalable backends, clean frontends, and reliable automations. Looking for exciting projects —
            and for someone special to review life’s long‑running pull request. 💍
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Button asChild>
              <Link href="#contact">
                <Heart className="mr-2 h-4 w-4" /> Say hi / Hire me
              </Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="#work">
                <Code2 className="mr-2 h-4 w-4" /> See my work
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#manifesto">
                <Home className="mr-2 h-4 w-4" /> House‑husband manifesto
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>

      <div className="my-10" />

      {/* Skills */}
      <section aria-labelledby="skills" className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle id="skills" className="flex items-center gap-2">
              <Code2 className="h-5 w-5" /> Tech I ship
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <Badge key={s} variant="outline" className="rounded-2xl">
                  {s}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Home className="h-5 w-5" /> House‑husband stack
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              {values.map((v, i) => (
                <li key={i} className="flex items-center gap-2 text-muted-foreground">
                  {v.icon}
                  <span>{v.label}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      <div className="my-10" />

      {/* Work */}
      <section id="work" aria-labelledby="work-heading" className="space-y-6">
        <h2 id="work-heading" className="text-2xl font-semibold tracking-tight">
          Selected work
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <Card key={p.title} className="group">
              <CardHeader>
                <CardTitle className="flex items-center justify-between gap-2">
                  <span>{p.title}</span>
                  <ArrowRight className="h-4 w-4 opacity-50 transition group-hover:translate-x-1 group-hover:opacity-100" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                  {p.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <div className="mt-4">
                  <Button asChild size="sm" variant="secondary">
                    <Link href={p.href} target={p.href.startsWith("http") ? "_blank" : undefined}>
                      Visit
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <div className="my-10" />

      {/* Manifesto */}
      <section id="manifesto" aria-labelledby="manifesto-heading" className="rounded-3xl border bg-muted/30 p-6 md:p-8">
        <h2 id="manifesto-heading" className="text-2xl font-semibold tracking-tight">
          House‑Husband Manifesto
        </h2>
        <Separator className="my-4" />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-3 text-muted-foreground">
            <p>
              Clean code, clean kitchen. I believe reliability at home and in production are the
              same habit: consistency.
            </p>
            <p>
              I value kindness, communication, and long‑term thinking — for software, teams, and
              relationships.
            </p>
            <p>
              Looking for a partner who appreciates stability, humor, and a well‑timed CI pipeline.
            </p>
          </div>
          <div className="space-y-3 text-muted-foreground">
            <p>
              Favorite merge strategy: fast‑forward. Favorite date activity: cooking + code review of
              memes.
            </p>
            <p>
              Boundaries: no flaky tests, no flaky communication.
            </p>
            <p>
              Deal‑makers: curiosity, empathy, and a love for small wins every day.
            </p>
          </div>
        </div>
      </section>

      <div className="my-10" />

      {/* Contact */}
      <section id="contact" aria-labelledby="contact-heading" className="space-y-6">
        <h2 id="contact-heading" className="text-2xl font-semibold tracking-tight">
          Get in touch
        </h2>
        <Card>
          <CardContent className="flex flex-wrap items-center gap-3 p-6">
            <Button asChild>
              <Link href="mailto:you@example.com">
                <Mail className="mr-2 h-4 w-4" /> Email
              </Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="https://www.linkedin.com/in/your-profile" target="_blank">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="https://github.com/your-github" target="_blank">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      <footer className="mt-12 grid place-items-center text-xs text-muted-foreground">
        <p className="flex items-center gap-1">
          Built with Next.js & shadcn/ui • From Algeria with <Heart className="h-3 w-3" />
        </p>
      </footer>
    </main>
  );
}
