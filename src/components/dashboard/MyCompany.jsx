"use client";

import { useState } from "react";
import { Button } from "@heroui/react";
import {
  Factory,
  Briefcase,
  LocationArrow,
} from "@gravity-ui/icons";

import RegisterCompanyModal from "./RegisterCompanyModal";

export default function CompanyNotRegistered() {
  const [isRegisterModalOpen, setIsRegisterModalOpen] =
    useState(false);

  return (
    <>
      <main className="flex min-h-screen items-center justify-center bg-[#111111] px-4 text-white">
        <section className="w-full max-w-xl text-center">

          {/* Illustration */}
          <div className="relative mx-auto mb-8 h-44 w-44">

            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-40
                w-36
                -translate-x-1/2
                -translate-y-1/2
                rotate-[-4deg]
                rounded-[24px]
                border
                border-[#3a3a3a]
                bg-[#202020]
              "
            >
              <div className="absolute inset-[18px] rounded-[10px] bg-[#303030]">
                <div className="absolute left-3 top-3 h-6 w-6 rounded-[5px] bg-[#4a4a4a]" />

                <div className="absolute left-12 top-[18px] h-1.5 w-12 rounded-full bg-[#454545]" />

                <div className="absolute left-3 right-3 top-12 space-y-2">
                  <div className="h-1.5 w-[85%] rounded-full bg-[#494949]" />
                  <div className="h-1.5 w-[68%] rounded-full bg-[#494949]" />
                  <div className="h-1.5 w-[78%] rounded-full bg-[#494949]" />
                </div>

                <Factory
                  size={25}
                  className="absolute bottom-2 right-2 rotate-[8deg] text-[#676767]"
                />
              </div>
            </div>

            <div
              className="
                absolute
                right-[-2px]
                top-[-5px]
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-white
                text-black
              "
            >
              <Briefcase size={19} />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-[20px] font-medium">
            Company not registered yet
          </h1>

          <p className="mx-auto mt-3 max-w-[330px] text-[11px] leading-[1.6] text-[#999]">
            Set up your business profile to start posting
            high-performance job listings and manage your
            talent loop.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex justify-center gap-3">

            {/* OPEN MODAL */}
            <Button
              variant="primary"
              onPress={() => setIsRegisterModalOpen(true)}
              className="
                h-11
                min-w-[170px]
                rounded-md
                bg-white
                text-[11px]
                font-medium
                text-black
                hover:bg-gray-200
              "
            >
              Register your company
            </Button>

            <Button
              variant="secondary"
              className="
                h-11
                min-w-[112px]
                rounded-md
                border
                border-[#343434]
                bg-[#1b1b1b]
                text-[11px]
                text-white
              "
            >
              View FAQ
            </Button>

          </div>

          <p className="mt-14 text-[9px] text-[#606060]">
            Need specialized assistance? Contact our enterprise
            support team.
          </p>
        </section>
      </main>

      {/* REGISTER COMPANY MODAL */}
      <RegisterCompanyModal
        isOpen={isRegisterModalOpen}
        onOpenChange={setIsRegisterModalOpen}
      />
    </>
  );
}