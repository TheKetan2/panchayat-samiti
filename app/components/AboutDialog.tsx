"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import Image from "next/image";

export default function AboutDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Learn More About Us
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            About Panchayat Samiti
          </DialogTitle>
          <DialogDescription className="text-lg mt-2">
            Discover the heart of local governance and community development
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6 space-y-8">
          <div className="relative w-full h-64">
            <Image
              src="https://placehold.co/800x400/e2e8f0/1e293b?text=Panchayat+Samiti+Building"
              alt="Panchayat Samiti Building"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <section>
            <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
            <p className="text-gray-700">
              To empower rural communities through effective local governance,
              sustainable development, and inclusive growth, ensuring a better
              quality of life for all residents.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">Key Responsibilities</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                Implementation of development schemes and welfare programs
              </li>
              <li>
                Supervision of primary education and healthcare facilities
              </li>
              <li>Rural infrastructure development and maintenance</li>
              <li>Promotion of agriculture and local industries</li>
              <li>Environmental conservation and resource management</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">
              Administrative Structure
            </h3>
            <p className="text-gray-700">
              The Panchayat Samiti serves as an intermediate tier of the
              Panchayati Raj system, bridging the gap between Gram Panchayats
              and Zilla Parishad. Led by elected representatives and supported
              by administrative staff, we work collaboratively to implement
              various government schemes and address local needs.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">Our Achievements</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                Successfully implemented various rural development schemes
              </li>
              <li>Improved access to education and healthcare services</li>
              <li>Enhanced rural infrastructure and connectivity</li>
              <li>Promoted sustainable agricultural practices</li>
              <li>Strengthened local self-governance</li>
            </ul>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}
