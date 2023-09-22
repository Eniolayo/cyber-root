import React from "react";

import { Footer, Header } from "@/components";
import { Benefit } from "@/components/services";
import { Heading, Text } from "@/components/ui";

export default function ThreatAssessment() {
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
          Threat assessments
        </Heading>
        <Text variant={"m"} styles={"text-justify w-[90%] mx-auto"}>
          In the ever-evolving landscape of cybersecurity, organizations must
          stay proactive in identifying and addressing potential threats. At
          CyberRoot Ltd, we specialize in conducting comprehensive threat
          assessments to help businesses understand and manage their
          cybersecurity risks effectively. Our expert team analyzes your assets,
          evaluates potential threats and vulnerabilities, and prioritizes risks
          based on their impact. With this valuable insight, you can make
          informed decisions and implement targeted security measures to protect
          your organization's critical systems, data, and reputation.
        </Text>
        <Text variant={"m"} styles={"text-justify w-[90%] mx-auto"}>
          By partnering with CyberRoot Ltd for threat assessments, you gain the
          advantage of our expertise in identifying emerging threats and
          understanding the tactics used by cybercriminals. We go beyond mere
          vulnerability scans to provide a holistic view of your security
          landscape. Our recommendations and mitigation strategies are tailored
          to your specific needs, ensuring that your resources are allocated
          efficiently to address the most critical risks. With our comprehensive
          threat assessments, you can enhance your cybersecurity defenses,
          maintain customer trust, and safeguard your organization's future in
          the face of an ever-changing threat landscape.
        </Text>
      </section>
      <Benefit
        services={[
          "Enhanced security posture",
          "Effective risk mitigation",
          "Improved incident response capabilities",
          "Strengthened defense against cyber threats",
        ]}
      />
      <Footer />
    </main>
  );
}
