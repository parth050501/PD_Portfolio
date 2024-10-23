export const EDUCATION = [
  {
    title: "Post Graduation Artificial Intelligence with Machine Learning",
    university: "Humber College",
    duration: "Jan 2024 - Dec 2024",
    scoreType: "GPA",
    score: "3.2",
  },
  {
    title: "Post Graduation Big Data Analytics",
    university: "Georgian College",
    duration: "May 2023 - Dec 2023",
    scoreType: "GPA",
    score: "3.4",
  },
  {
    title: "Bachelors In Information Technology",
    university: "University of Mumbau",
    duration: "2018 - 2022",
    scoreType: "CGPA",
    score: "9.1",
  },
];

export const SKILLS = [
  "MongoDB",
  "MySQL",
  "Git",
  "Wireshark",
  "Nmap",
  "Metasploit",
  "Antivirus",
  "WebSec",
  "FIM",
  "OpenVPN",
  "MISP",
  "ELK",
  "Python",
  "C/C++",
  "Bash",
  "Firewall config",
  "IDS/IPS",
  "VPNs",
  "Nessus",
  "OpenVAS",
  "ELK",
  "Windows",
  "Linux (Kali, Ubuntu, CentOS)",
  "SIEM",
  "Forensics",
  "Threat Analysis",
  "SOC",
  "Risk - Mitigation",
  "Incident Management",
  "AWS",
  "Virtualization",
  "Networking",
  "Security",
  "Containers",
  "Serverless",
  
];

export const EXPERIENCE = [
 
  {
    title: "SOC Consultant",
    company: "Network Techlab Pvt Ltd",
    duration: "April 2023 - Present",
    description : [
      "Monitored and analyzed security events using SIEM tools (e.g., Splunk, ELK, QRadar) to identify potential threats, vulnerabilities, and incidents.",
      "Responded to security alerts, performing triage, root cause analysis, and documentation of security incidents.",
      "Performed proactive threat hunting using EDR tools (e.g., CrowdStrike, Carbon Black) to detect advanced threats and APT activities.",
      "Utilized threat intelligence feeds and reports (e.g., MISP, STIX/TAXII) to identify potential attack vectors and adversary tactics, techniques, and procedures (TTPs).",
      "Developed custom detection rules and alerts based on threat intelligence findings.",
      "Automated repetitive tasks using Python scripts, PowerShell, and Bash to enhance SOC operations and increase efficiency.",
      "Conducted vulnerability assessments using tools like Nessus and OpenVAS, providing detailed reports with remediation recommendations.",
    ] 
  },
  {
    title: "SME SOC",
    company: "Network Techlab Pvt Ltd",
    duration: "June 2021 - Mar 2023",
    description:[
      "Built 15 to 20 sophisticated incident response campaigns, executed forensic analysis and informed root cause to contain security breaches, minimized outages while cutting off further exploitation.",
      "Proactively identified the presence of advanced threats within client environments using MISP,ELK,Snort,Splunk.",
      "Ensured the deployment and management of SIEM (Security Information Event Management) systems across massive corporate footprints, thus enabling real-time monitoring and a rapid response to organizational security events.",
      "Conducted security assessments and tabletop exercises, providing clients with actionable recommendations to strengthen their security posture across cloud, network, and application layers.",
      "Built and refined Security Operations Centre (SOC) workflows to work with industry standards, and mitigation capabilities, resulting in better detection, response times and threat reduction efficiency.",
      "Collaborated effectively with a team of business executives and stakeholders on complicated cybersecurity incidents to help align technical security controls and organizational goals.",
    ]
  },
  {
    title: "Network Engineer (Intern) ",
    company: "Network Techlab Pvt Ltd",
    duration: "Oct 2019 - May 2021",
    description:[
      "Designed and deployed secure network architectures, including routers, switches, firewalls, and VPNs, improving connectivity, network security and remote access for enterprise environments.",
      "Notified Clients of True positive signal alerts, through templates & informed high priority views by phone",
      "Maintenance of firewall rules with source, destination IPs, ports and transport protocols for improved network security.",
      "Led the upgrade and migration of network systems, ensuring minimal downtime and seamless integration with existing infrastructure.",
      "Created with the support of OEM Technical Assistance Centres (TAC) to client specific issues basic to intermediate customer support tickets and requests, assisting clients via email and phone when necessary.",
    ]
  },
];

export const PROJECTS = [
  {
    title: "Log Analyser Tool",
    description:
      "A tool that aggregates, monitors, and analyzes log data to detect security incidents, troubleshoot issues, and improve system visibility.",
    //duration: "2021 - Present",
    //gitLink: "https://www.google.com",
    //projectLink: "https://www.google.com",
    image: "projects/LA.jpeg",
  },
  {
    title: "Threat Intelligence Platform Setup",
    description:
      " Build a threat intelligence platform using MISP (Malware Information Sharing Platform) and integrate it with a SIEM. Use threat feeds to identify and correlate threats, creating dashboards to visualize threat data.",
    //duration: "Sep 2020 - Jan 2021",
    //gitLink: "https://www.google.com",
    image: "projects/TI.jpeg",
  },
  {
    title: " Password Cracking & Hash Analysis",
    description:
      " Set up a lab to explore password security using tools like John the Ripper or Hashcat. Document the password-cracking process, explore hash weaknesses, and recommend strong password policies.",
    //duration: "Sep 2019 - Jan 2020",
    //gitLink: "https://www.google.com",
    //projectLink: "https://www.google.com",
    image: "projects/password.jpeg",
  },
  {
    title: "Data Leakage Prevention (DLP) Project",
    description:
      "Implement a DLP solution in a lab setting to monitor and control the flow of sensitive data. Use tools like Symantec DLP or openDLP to create policies and track data movement.",
    //duration: "Sep 2018 - Jan 2019",
    //gitLink: "https://www.google.com",
    image: "projects/DLP.jpeg",
  },
  {
    title: "Custom Honeypot Deployment",
    description:
      "Deploy a honeypot using Dionaea, Kippo, or HoneyPy to attract malicious actors. Monitor and analyze attack data to understand attacker behavior and trends.",
    //duration: "Sep 2017 - Jan 2018",
    //gitLink: "https://www.google.com",
    image: "projects/honeypot.jpeg",
  },
];
