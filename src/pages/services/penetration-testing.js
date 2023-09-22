import React from "react";

import { Footer, Header } from "@/components";
import { Benefit } from "@/components/services";
import { Heading, Text } from "@/components/ui";

export default function PenetrationTesting() {
  return (
    <main>
      <Header />
      <section className="bg-aliceBlue text-center space-y-9 py-12">
        <Heading
          level={"h2"}
          variant={"m"}
          styles={
            "border text-brightNavyBlue mx-auto w-fit px-7 py-2 rounded-m"
          }
        >
          Services
        </Heading>
        <Heading styles={"capitalize font-black"} level={"h3"} variant={"lg"}>
          Penetration Testing
        </Heading>
        <Text variant={"m"} styles={"text-justify w-[90%] mx-auto"}>
          At CyberRoot Ltd, we specialize in providing comprehensive penetration
          testing services to organizations seeking to enhance their
          cybersecurity defenses. Penetration testing, also known as pen testing
          or ethical hacking, involves simulating real-world cyber attacks to
          identify vulnerabilities in networks, systems, and applications. Our
          expert team follows a systematic and controlled methodology to uncover
          weaknesses and potential entry points in your digital infrastructure.
          By emulating the techniques and tactics used by malicious actors, we
          evaluate the effectiveness of your security controls and pinpoint
          areas for improvement. By partnering with CyberRoot Ltd for
          penetration testing, you gain access to our expertise, experience, and
          industry-leading methodologies, enabling you to proactively identify
          and address vulnerabilities in your digital infrastructure, ultimately
          enhancing your overall cybersecurity posture.
        </Text>
      </section>
      <Benefit
        services={[
          "Professional Growth and Career Opportunities",
          "Identify and Mitigate Vulnerabilities",
          "Develop In-Depth Cybersecurity Knowledge",
          "Enhance Incident Response Capabilities",
        ]}
      />
      <Footer />
    </main>
  );
}
