import React from "react";

import { Footer, Header } from "@/components";
import { Benefit } from "@/components/services";
import { Heading, Text } from "@/components/ui";

function EthicalHackingTraining() {
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
          Ethical Hacking Training
        </Heading>
        <Text variant={"m"} styles={"text-justify w-[90%] mx-auto"}>
          Equip yourself with the skills and knowledge to protect digital
          environments through our comprehensive Ethical Hacking Training. Led
          by industry experts, our practical programs cover penetration testing,
          network security, web application security, and secure coding
          practices. Think like a hacker as you learn their strategies,
          techniques, and attack vectors, enabling you to identify
          vulnerabilities and secure digital infrastructure effectively. Gain
          expertise in vulnerability assessment, penetration testing, and
          incident response, becoming a certified ethical hacker ready to defend
          against evolving cyber threats. Choose CyberRoot Ltd for
          transformative Ethical Hacking Training and safeguard the digital
          landscape.
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

export default EthicalHackingTraining;
