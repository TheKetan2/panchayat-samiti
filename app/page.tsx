"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Mail,
  MapPin,
  Phone,
  Minus,
  Plus,
  Type,
} from "lucide-react";

import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/components/ui/tooltip";
import Map from "@/app/components/Map";
import AboutDialog from "@/app/components/AboutDialog";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Home() {
  const [fontSize, setFontSize] = useState(100); // 100% is the default font size

  // Apply font size to the document
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
    document.documentElement.style.scrollBehavior = "smooth";
  }, [fontSize]);

  // Increase font size
  const increaseFontSize = () => {
    if (fontSize < 150) {
      // Limit maximum font size to 150%
      setFontSize((prevSize) => prevSize + 10);
    }
  };

  // Decrease font size
  const decreaseFontSize = () => {
    if (fontSize > 70) {
      // Limit minimum font size to 70%
      setFontSize((prevSize) => prevSize - 10);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg"
              alt="Panchayat Samiti Logo"
              width={40}
              height={40}
              className="rounded"
            />
            <span className="text-lg font-bold">Panchayat Samiti</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              About
            </a>
            <a
              href="#gallery"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Gallery
            </a>
            <a
              href="#departments"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Departments
            </a>
            <a
              href="#contact"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center border rounded-md mr-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={decreaseFontSize}
                      disabled={fontSize <= 70}
                      className="h-8 w-8"
                    >
                      <Minus className="h-4 w-4" />
                      <span className="sr-only">Decrease font size</span>
                    </Button>
                    <span className="flex items-center px-1">
                      <Type className="h-4 w-4 mr-1" />
                      {fontSize}%
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={increaseFontSize}
                      disabled={fontSize >= 150}
                      className="h-8 w-8"
                    >
                      <Plus className="h-4 w-4" />
                      <span className="sr-only">Increase font size</span>
                    </Button>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Adjust font size</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <Button className="hidden md:flex">Citizen Services</Button>
            <Button variant="outline" size="icon" className="md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container px-4 md:px-8 lg:px-10">
          <div className="flex flex-col items-center justify-center text-center space-y-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Welcome to Panchayat Samiti
            </h1>
            <p className="mt-4 max-w-[700px] text-muted-foreground">
              Serving the local community with dedication and transparency. Your
              gateway to local governance and services.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Button>
                Apply for Services
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline">Contact Us</Button>
            </div>
          </div>
        </div>
      </section>
      <section
        id="about"
        className="container py-16 md:py-24 px-4 md:px-8 lg:px-10"
      >
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                About Panchayat Samiti
              </h2>
              <p className="text-muted-foreground">
                The Panchayat Samiti is a local government body at the block
                level, serving as an important link between Gram Panchayats and
                Zilla Parishad.
              </p>
            </div>
            <div className="space-y-2">
              <p>
                Our mission is to implement development programs at the block
                level, supervise the work of Gram Panchayats, and ensure
                effective delivery of public services to rural communities.
              </p>
              <p>
                With a focus on rural development, agriculture, education,
                healthcare, and infrastructure, we strive to improve the quality
                of life for all citizens in our jurisdiction.
              </p>
            </div>
            <AboutDialog />
          </div>
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Panchayat Samiti Office"
            width={600}
            height={400}
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
          />
        </div>
      </section>
      <section id="gallery" className="bg-muted/30 py-16 md:py-24">
        <div className="container px-4 md:px-8 lg:px-10">
          <div className="mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Photo Gallery
            </h2>
            <p className="mt-2 text-muted-foreground">
              Glimpses of our activities and achievements
            </p>
          </div>
          <div className="relative">
            <div className="flex overflow-x-auto pb-6 gap-4 snap-x">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="min-w-[280px] md:min-w-[400px] snap-start"
                >
                  <Image
                    src={`/placeholder.svg?height=300&width=${
                      item % 2 === 0 ? "400" : "300"
                    }`}
                    alt={`Gallery image ${item}`}
                    width={item % 2 === 0 ? 400 : 300}
                    height={300}
                    className="rounded-lg object-cover h-[300px] w-full"
                  />
                </div>
              ))}
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:block">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-background shadow-lg"
              >
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Scroll right</span>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section
        id="departments"
        className="container py-16 md:py-24 px-4 md:px-8 lg:px-10"
      >
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Our Departments
          </h2>
          <p className="mt-2 text-muted-foreground">
            Serving the community through specialized departments
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Agriculture",
              description:
                "Supporting farmers with resources, training, and agricultural development programs.",
              icon: "🌾",
            },
            {
              title: "Education",
              description:
                "Overseeing educational institutions and implementing literacy programs.",
              icon: "📚",
            },
            {
              title: "Healthcare",
              description:
                "Managing primary health centers and conducting health awareness campaigns.",
              icon: "🏥",
            },
            {
              title: "Infrastructure",
              description:
                "Developing and maintaining roads, buildings, and public facilities.",
              icon: "🏗️",
            },
            {
              title: "Water & Sanitation",
              description:
                "Ensuring clean water supply and proper sanitation facilities.",
              icon: "💧",
            },
            {
              title: "Social Welfare",
              description:
                "Implementing welfare schemes for vulnerable sections of society.",
              icon: "🤝",
            },
          ].map((dept, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="text-4xl mb-2">{dept.icon}</div>
                <CardTitle>{dept.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{dept.description}</CardDescription>
                <Button variant="link" className="px-0 mt-2">
                  Learn more
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section id="contact" className="bg-muted/30 py-16 md:py-24">
        <div className="container px-4 md:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Contact Us
              </h2>
              <p className="text-muted-foreground">
                We are here to assist you. Reach out to us with your queries,
                suggestions, or feedback.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>
                    Panchayat Samiti Office, Block Development Complex, District
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+91 1234567890</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>contact@panchayatsamiti.gov.in</span>
                </div>
              </div>
              <div className="pt-4">
                <h3 className="text-lg font-medium mb-2">Office Hours</h3>
                <p>Monday to Friday: 9:00 AM - 5:00 PM</p>
                <p>Saturday: 9:00 AM - 1:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden h-[400px]">
              <Map
                address="Panchayat Samiti Office, Block Development Complex, Pombhurna, Maharashtra"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
      <footer className="border-t bg-background">
        <div className="container py-12 md:py-16 px-4 md:px-8 lg:px-10">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <h3 className="text-lg font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#departments"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Departments
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Certificate Applications
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Scheme Registration
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Grievance Redressal
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Public Information
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Forms & Documents
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Government Orders
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Tenders & Notices
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Annual Reports
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Panchayat Samiti. All rights
              reserved.
            </p>
            <p className="mt-1">
              <Link href="#" className="hover:underline">
                Privacy Policy
              </Link>{" "}
              |{" "}
              <Link href="#" className="hover:underline">
                Terms of Service
              </Link>{" "}
              |{" "}
              <Link href="#" className="hover:underline">
                Accessibility
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
