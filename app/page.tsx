"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Calendar, Clock, Users } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Home() {
  const { t } = useLanguage()

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t("home.hero.title")} <span className="text-primary">{t("home.hero.academy")}</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8">{t("home.hero.description")}</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/programs">
                <Button className="bg-primary hover:bg-primary/80 text-secondary font-bold text-lg px-8 py-6">
                  {t("home.hero.programs")}
                </Button>
              </Link>
              <a href="https://wa.me/96176988681" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 font-bold text-lg px-8 py-6"
                >
                  {t("home.hero.contact")}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 section-heading">{t("home.about.title")}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">{t("home.about.p1")}</p>
              <p className="text-gray-700 dark:text-gray-300 mb-8">{t("home.about.p2")}</p>
              <Link href="/about">
                <Button className="bg-primary hover:bg-primary/80 text-secondary font-bold">
                  {t("home.about.more")} <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </div>
            <div className="relative h-[200px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/fullTeam.jpg"
                alt="Football training at Labweh Football Academy"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 inline-block section-heading">{t("home.programs.title")}</h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mt-6">{t("home.programs.description")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Program 1 */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 relative">
                <Image src="/images/young.jpg" alt="Youth Development Program" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{t("program.youth.title")}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{t("program.youth.description")}</p>
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                  <Users size={16} className="mr-2" />
                  <span>{t("ages")} 6-12</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                  <Clock size={16} className="mr-2" />
                  <span>2 {t("sessions")}</span>
                </div>
                <Link href="/programs#youth">
                  <Button className="w-full bg-primary hover:bg-primary/80 text-secondary font-bold">
                    {t("program.learnMore")}
                  </Button>
                </Link>
              </div>
            </div>

            {/* Program 2 */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 relative">
                <Image src="/images/elite.webp" alt="Elite Training Program" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{t("program.elite.title")}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{t("program.elite.description")}</p>
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                  <Users size={16} className="mr-2" />
                  <span>{t("ages")} 13-18</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                  <Clock size={16} className="mr-2" />
                  <span>3 {t("sessions")}</span>
                </div>
                <Link href="/programs#elite">
                  <Button className="w-full bg-primary hover:bg-primary/80 text-secondary font-bold">
                    {t("program.learnMore")}
                  </Button>
                </Link>
              </div>
            </div>

            {/* Program 3 */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 relative">
                <Image src="/images/goalkeeper.webp" alt="Goalkeeper Training" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{t("program.goalkeeper.title")}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{t("program.goalkeeper.description")}</p>
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                  <Users size={16} className="mr-2" />
                  <span>{t("allAges")}</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                  <Clock size={16} className="mr-2" />
                  <span>2 {t("sessions")}</span>
                </div>
                <Link href="/programs#goalkeeper">
                  <Button className="w-full bg-primary hover:bg-primary/80 text-secondary font-bold">
                    {t("program.learnMore")}
                  </Button>
                </Link>
              </div>
            </div>

            {/* Program 4 */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 relative">
                <Image src="/images/summer.jpg" alt="Summer Camps" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{t("program.summer.title")}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{t("program.summer.description")}</p>
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                  <Calendar size={16} className="mr-2" />
                  <span>{t("summer")}</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                  <Clock size={16} className="mr-2" />
                  <span>{t("fullDay")}</span>
                </div>
                <Link href="/programs#summer">
                  <Button className="w-full bg-primary hover:bg-primary/80 text-secondary font-bold">
                    {t("program.learnMore")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/programs">
              <Button className="bg-primary hover:bg-primary/80 text-secondary font-bold">
                {t("home.programs.viewAll")} <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 inline-block section-heading">{t("features.title")}</h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mt-6">{t("features.description")}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t("features.coaching.title")}</h3>
              <p className="text-gray-700 dark:text-gray-300">{t("features.coaching.description")}</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t("features.groups.title")}</h3>
              <p className="text-gray-700 dark:text-gray-300">{t("features.groups.description")}</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t("features.yearRound.title")}</h3>
              <p className="text-gray-700 dark:text-gray-300">{t("features.yearRound.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 inline-block section-heading">{t("gallery.title")}</h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mt-6">{t("gallery.description")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/coaching.jpg"
                alt="Training session at Labweh Football Academy"
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/younggalery.jpg"
                alt="Youth players at Labweh Football Academy"
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/3rdgalery.jpg"
                alt="Facilities at Labweh Football Academy"
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/gallery">
              <Button className="bg-primary hover:bg-primary/80 text-secondary font-bold">
                {t("gallery.viewFull")} <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">{t("cta.title")}</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">{t("cta.description")}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/96176988681" target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary hover:bg-primary/80 text-secondary font-bold text-lg px-8 py-6">
                {t("cta.contact")}
              </Button>
            </a>
            <Link href="/programs">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 font-bold text-lg px-8 py-6"
              >
                {t("cta.programs")}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
