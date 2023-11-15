# USENIX Security 2022
## Under the Hood of DANE Mismanagement in SMTP.
### Authors
* Hyeonmin Lee, Seoul National University
* Md. Ishtiaq Ashiq, Virginia Tech
* Moritz Müller, SIDN Labs
* Rol, University of Twente & NLnet Labs
* van Rijswijk-Deij, University of Twente & NLnet Labs
* Taekyoung "Ted" Kwon, Seoul National University
* Taejoong Chung, Virginia Tech
### Abstract
> The DNS-based Authentication of Named Entities (DANE) is an Internet security protocol that enables a TLS connection without relying on trusted third parties like CAs by introducing a new DNS record type, TLSA. DANE leverages DNSSEC PKI to provide the integrity and authenticity of TLSA records. As DANE can solve security challenges in SMTP, such as STARTTLS downgrade attacks and receiver authentication, it has been increasingly deployed surpassing more than 1 M domains with SMTP servers that have TLSA records. A recent study, however, reported that there are prevalent misconfigurations on DANE SMTP servers, which hinders DANE from being proliferated.In this paper, we investigate the reasons why it is hard to deploy and manage DANE correctly. Our study uses largescale, longitudinal measurements to study DANE adoption and management, coupled with a survey of DANE operators, some of which serve more than 100 K domains. Overall, we find that keeping the TLSA records from a name server and certificates from an SMTP server synchronized is not straightforward even when the same entity manages the two servers. Furthermore, many of the certificates are configured to be reissued automatically, which may result in invalid TLSA records. From surveying 39 mail server operators, we also learn that the majority keeps using CA-issued certificates, despite this no longer being required with DANE, since they are worried about their certificates not being trusted by clients that have not deployed DANE. Having identified several operational challenges for correct DANE management, we release automated tools and shed light on unsolved challenges.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/lee](https://www.usenix.org/conference/usenixsecurity22/presentation/lee)
- **PDF:** [https://www.usenix.org/system/files/sec22-lee.pdf](https://www.usenix.org/system/files/sec22-lee.pdf)
## Seeing the Forest for the Trees: Understanding Security Hazards in the 3GPP Ecosystem through Intelligent Analysis on Change Requests.
### Authors
* Yi Chen, Indiana University Bloomington
* Di Tang, Indiana University Bloomington
* Yepeng Yao, {CAS-KLONAT, BKLONSPT}, Institute of Information Engineering, CAS, and School of Cyber Security, University of Chinese Academy of Sciences
* Mingming Zha, Indiana University Bloomington
* XiaoFeng Wang, Indiana University Bloomington
* Xiaozhong Liu, Worcester Polytechnic Institute
* Haixu Tang, Indiana University Bloomington
* Dongfang Zhao, Indiana University Bloomington
### Abstract
> With the recent report of erroneous content in 3GPP specifications leading to real-world vulnerabilities, attention has been drawn to not only the specifications but also the way they are maintained and adopted by manufacturers and carriers. In this paper, we report the first study on this 3GPP ecosystem, for the purpose of understanding its security hazards. Our research leverages 414,488 Change Requests (CRs) that document the problems discovered from specifications and proposed changes, which provides valuable information about the security assurance of the 3GPP ecosystem.Analyzing these CRs is impeded by the challenge in finding security-relevant CRs (SR-CRs), whose security connections cannot be easily established by even human experts. To identify them, we developed a novel NLP/ML pipeline that utilizes a small set of positively labeled CRs to recover 1,270 high-confidence SR-CRs. Our measurement on them reveals serious consequences of specification errors and their causes, including design errors and presentation issues, particularly the pervasiveness of inconsistent descriptions (misalignment) in security-relevant content. Also important is the discovery of a security weakness inherent to the 3GPP ecosystem, which publishes an SR-CR long before the specification has been fixed and related systems have been patched. This opens an "attack window", which can be as long as 11 years! Interestingly, we found that some recently reported vulnerabilities are actually related to the CRs published years ago. Further, we identified a set of vulnerabilities affecting major carriers and mobile phones that have not been addressed even today. With the trend of SR-CRs not showing any sign of abating, we propose measures to improve the security assurance of the ecosystem, including responsible handling of SR-CRs.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/chen-yi](https://www.usenix.org/conference/usenixsecurity22/presentation/chen-yi)
- **PDF:** [https://www.usenix.org/system/files/sec22-chen-yi.pdf](https://www.usenix.org/system/files/sec22-chen-yi.pdf)
## Exploring the Unchartered Space of Container Registry Typosquatting.
### Authors
* Guannan Liu, Virginia Tech
* Xing Gao, University of Delaware
* Haining Wang, Virginia Tech
* Kun Sun, George Mason University
### Abstract
> With the increasing popularity of containerized applications, container registries have hosted millions of repositories that allow developers to store, manage, and share their software. Unfortunately, they have also become a hotbed for adversaries to spread malicious images to the public. In this paper, we present the first in-depth study on the vulnerability of container registries to typosquatting attacks, in which adversaries intentionally upload malicious images with an identification similar to that of a benign image so that users may accidentally download malicious images due to typos. We demonstrate that such typosquatting attacks could pose a serious security threat in both public and private registries as well as across multiple platforms. To shed light on the container registry typosquatting threat, we first conduct a measurement study and a 210-day proof-of-concept exploitation on public container registries, revealing that human users indeed make random typos and download unwanted container images.  We also systematically investigate attack vectors on private registries and reveal that its naming space is open and could be easily exploited for launching a typosquatting attack. In addition, for a typosquatting attack across multiple platforms, we demonstrate that adversaries can easily self-host malicious registries or exploit existing container registries to manipulate repositories with similar identifications. Finally, we propose CRYSTAL, a lightweight extension to existing image management, which effectively defends against typosquatting attacks from both container users and registries.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/liu-guannan](https://www.usenix.org/conference/usenixsecurity22/presentation/liu-guannan)
- **PDF:** [https://www.usenix.org/system/files/sec22-liu-guannan.pdf](https://www.usenix.org/system/files/sec22-liu-guannan.pdf)
## Uninvited Guests: Analyzing the Identity and Behavior of Certificate Transparency Bots.
### Authors
* Brian Kondracki, Stony Brook University
* Johnny So, Stony Brook University
* Nick Nikiforakis, Stony Brook University
### Abstract
> Since its creation, Certificate Transparency (CT) has served as a vital component of the secure web. However, with the increase in TLS adoption, CT has essentially become a defacto log for all newly-created websites, announcing to the public the existence of web endpoints, including those that could have otherwise remained hidden. As a result, web bots can use CT to probe websites in real time, as they are created. Little is known about these bots, their behaviors, and their intentions.In this paper we present CTPOT, a distributed honeypot system which creates new TLS certificates for the purpose of advertising previously non-existent domains, and records the activity generated towards them from a number of network vantage points. Using CTPOT, we create 4,657 TLS certificates over a period of ten weeks, attracting 1.5 million web requests from 31,898 unique IP addresses. We find that CT bots occupy a distinct subset of the overall web bot population, with less than 2% overlap between IP addresses of CT bots and traditional host-scanning web bots. By creating certificates with varying content types, we are able to further sub-divide the CT bot population into subsets of varying intentions, revealing a stark contrast in malicious behavior among these groups. Finally, we correlate observed bot IP addresses into campaigns using the file paths requested by each bot, and find 105 malicious campaigns targeting the domains we advertise. Our findings shed light onto the CT bot ecosystem, revealing that it is not only distinct to that of traditional IP-based bots, but is composed of numerous entities with varying targets and behaviors.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/kondracki](https://www.usenix.org/conference/usenixsecurity22/presentation/kondracki)
- **PDF:** [https://www.usenix.org/system/files/sec22-kondracki.pdf](https://www.usenix.org/system/files/sec22-kondracki.pdf)
## Playing for K(H)eaps: Understanding and Improving Linux Kernel Exploit Reliability.
### Authors
* Kyle Zeng, Arizona State University
* Yueqi Chen, Pennsylvania State University
* Haehyun Cho, Arizona State University and Soongsil University
* Xinyu Xing, Pennsylvania State University
* Adam Doupé, Arizona State University
* Yan Shoshitaishvili, Arizona State University
* Tiffany Bao, Arizona State University
### Abstract
> The dynamic of the Linux kernel heap layout significantly impacts the reliability of kernel heap exploits, making exploitability assessment challenging. Though techniques have been proposed to stabilize exploits in the past, little scientific research has been conducted to evaluate their effectiveness and explore their working conditions.In this paper, we present a systematic study of the kernel heap exploit reliability problem. We first interview kernel security experts, gathering commonly adopted exploitation stabilization techniques and expert opinions about these techniques. We then evaluate these stabilization techniques on 17 real-world kernel heap exploits. The results indicate that many kernel security experts have incorrect opinions on exploitation stabilization techniques. To help the security community better understand exploitation stabilization, we inspect our experiment results and design a generic kernel heap exploit model. We use the proposed exploit model to interpret the exploitation unreliability issue and analyze why stabilization techniques succeed or fail. We also leverage the model to propose a new exploitation technique. Our experiment indicates that the new stabilization technique improves Linux kernel exploit reliability by 14.87% on average. Combining this newly proposed technique with existing stabilization approaches produces a composite stabilization method that achieves a 135.53% exploitation reliability improvement on average, outperforming exploit stabilization by professional security researchers by 67.86%.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/zeng](https://www.usenix.org/conference/usenixsecurity22/presentation/zeng)
- **PDF:** [https://www.usenix.org/system/files/sec22-zeng.pdf](https://www.usenix.org/system/files/sec22-zeng.pdf)
## In-Kernel Control-Flow Integrity on Commodity OSes using ARM Pointer Authentication.
### Authors
* Sungbae Yoo, Samsung Research
* Jinbum Park, Samsung Research
* Seolheui Kim, Samsung Research
* Yeji Kim, Samsung Research
* Taesoo Kim, Samsung Research and Georgia Institute of Technology
### Abstract
> This paper presents an in-kernel, hardware-based control-flow integrity (CFI) protection, called PAL, that utilizes ARM's Pointer Authentication (PA). It provides three important benefits over commercial, state-of-the-art PA-based CFIs like iOS's: 1) enhancing CFI precision via automated refinement techniques, 2) addressing hindsight problems of PA for inkernel uses such as preemptive hijacking and brute-forcing attacks, and 3) assuring the algorithmic or implementation correctness via post validation. PAL achieves these goals in an OS-agnostic manner, so could be applied to commodity OSes like Linux and FreeBSD. The precision of the CFI protection can be adjusted for better performance or improved for better security with minimal engineering efforts. Our evaluation shows that PAL incurs negligible performance overhead: e.g., <1% overhead for Apache benchmark and 3–5% overhead for Linux perf benchmark on the latest Mac mini (M1). Our post-validation approach helps us ensure the security invariant required for the safe uses of PA inside the kernel, which also reveals new attack vectors on the iOS kernel. PAL as well as the CFI-protected kernels will be open sourced.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/yoo](https://www.usenix.org/conference/usenixsecurity22/presentation/yoo)
- **PDF:** [https://www.usenix.org/system/files/sec22-yoo.pdf](https://www.usenix.org/system/files/sec22-yoo.pdf)
## Midas: Systematic Kernel TOCTTOU Protection.
### Authors
* Atri Bhattacharyya, EPFL
* Uros Tesic, Nvidia
* Mathias Payer, EPFL
### Abstract
> Double-fetch bugs are a plague across all major operating system kernels. They occur when data is fetched twice across the user/kernel trust boundary while allowing concurrent modification. Such bugs enable an attacker to illegally access memory, cause denial of service, or to escalate privileges. So far, the only protection against double-fetch bugs is to detect and fix them. However, they remain incredibly hard to find. Similarly, they fundamentally prohibit efficient, kernel-based stateful system call filtering. We propose Midas to mitigate double-fetch bugs. Midas creates on-demand snapshots and copies of accessed data, enforcing our key invariant that throughout a syscall's lifetime, every read to a userspace object will return the same value. Midas shows no noticeable drop in performance when evaluated on compute-bound workloads. On system call heavy workloads, Midas incurs 0.2-14% performance overhead, while protecting the kernel against any TOCTTOU attacks. On average, Midas shows a 3.4% overhead on diverse workloads across two benchmark suites.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/bhattacharyya](https://www.usenix.org/conference/usenixsecurity22/presentation/bhattacharyya)
- **PDF:** [https://www.usenix.org/system/files/sec22-bhattacharyya.pdf](https://www.usenix.org/system/files/sec22-bhattacharyya.pdf)
## LinKRID: Vetting Imbalance Reference Counting in Linux kernel with Symbolic Execution.
### Authors
* Jian Liu, {CAS-KLONAT, BKLONSPT}, Institute of Information Engineering, Chinese Academy of Sciences and School of Cyber Security, University of Chinese Academy of Sciences
* Lin Yi, {CAS-KLONAT, BKLONSPT}, Institute of Information Engineering, Chinese Academy of Sciences
* Weiteng Chen, UC Riverside
* Chengyu Song, UC Riverside
* Zhiyun Qian, UC Riverside
* Qiuping Yi, Beijing University of Posts and Telecommunications and Beijing Key Lab of Intelligent Telecommunication Software and Multimedia
### Abstract
> Linux kernel employs reference counters, which record the number of references to a shared kernel object, to track its lifecycle and prevent memory errors like use-after-free. However, the usage of reference counters can be tricky and often error-prone, especially considering unique kernel conventions of managing reference counters (e.g., external vs. internal reference counters). In this paper, we aim to automatically discover incorrect usage of reference counters, overcoming two key challenges: (1) scalability and (2) the aforementioned unique kernel conventions. Specifically, we develop a tiered program analysis based solution to efficiently and precisely check the imbalances between the change in the actual number of references and the corresponding reference counter. We apply our tool to the 4.14.0 kernel (with allyesconfig) and find 118 bugs, out of which 87 are new. The result shows our tool is scalable and effective.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/liu-jian](https://www.usenix.org/conference/usenixsecurity22/presentation/liu-jian)
- **PDF:** [https://www.usenix.org/system/files/sec22-liu-jian.pdf](https://www.usenix.org/system/files/sec22-liu-jian.pdf)
## Mining Node.js Vulnerabilities via Object Dependence Graph and Query.
### Authors
* Song Li, Johns Hopkins University
* Mingqing Kang, Johns Hopkins University
* Jianwei Hou, Johns Hopkins University/Renmin University of China
* Yinzhi Cao, Johns Hopkins University
### Abstract
> Node.js is a popular non-browser JavaScript platform that provides useful but sometimes also vulnerable packages. On one hand, prior works have proposed many program analysis-based approaches to detect Node.js vulnerabilities, such as command injection and prototype pollution, but they are specific to individual vulnerability and do not generalize to a wide range of vulnerabilities on Node.js. On the other hand, prior works on C/C++ and PHP have proposed graph query-based approaches, such as Code Property Graph (CPG), to efficiently mine vulnerabilities, but they are not directly applicable to JavaScript due to the language's extensive use of dynamic features.In the paper, we propose flow- and context-sensitive static analysis with hybrid branch-sensitivity and points-to information to generate a novel graph structure, called Object Dependence Graph (ODG), using abstract interpretation. ODG represents JavaScript objects as nodes and their relations with Abstract Syntax Tree (AST) as edges, and accepts graph queries—especially on object lookups and definitions—for detecting Node.js vulnerabilities.We implemented an open-source prototype system, called ODGEN, to generate ODG for Node.js programs via abstract interpretation and detect vulnerabilities. Our evaluation of recent Node.js vulnerabilities shows that ODG together with AST and Control Flow Graph (CFG) is capable of modeling 13 out of 16 vulnerability types. We applied ODGEN to detect six types of vulnerabilities using graph queries: ODGEN correctly reported 180 zero-day vulnerabilities, among which we have received 70 Common Vulnerabilities and Exposures (CVE) identifiers so far.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/li-song](https://www.usenix.org/conference/usenixsecurity22/presentation/li-song)
- **PDF:** [https://www.usenix.org/system/files/sec22-li-song.pdf](https://www.usenix.org/system/files/sec22-li-song.pdf)
## Mistrust Plugins You Must: A Large-Scale Study Of Malicious Plugins In WordPress Marketplaces.
### Authors
* Ranjita Pai Kasturi, Georgia Institute of Technology
* Jonathan Fuller, Georgia Institute of Technology
* Yiting Sun, Georgia Institute of Technology
* Omar Chabklo, Georgia Institute of Technology
* Andres Rodriguez, Georgia Institute of Technology
* Jeman Park, Georgia Institute of Technology
* Brendan Saltaformaggio, Georgia Institute of Technology
### Abstract
> Modern websites owe most of their aesthetics and functionalities to Content Management Systems (CMS) plugins, which are bought and sold on widely popular marketplaces. Driven by economic incentives, attackers abuse the trust in this economy: selling malware on legitimate marketplaces, pirating popular plugins, and infecting plugins post-deployment. This research studied the evolution of CMS plugins in over 400K production webservers dating back to 2012. We developed YODA, an automated framework to detect malicious plugins and track down their origin. YODA uncovered 47,337 malicious plugins on 24,931 unique websites. Among these, $41.5K had been spent on 3,685 malicious plugins sold on legitimate plugin marketplaces. Pirated plugins cheated developers out of $228K in revenues. Post-deployment attacks infected $834K worth of previously benign plugins with malware. Lastly, YODA informs our remediation efforts, as over 94% of these malicious plugins are still active today.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/kasturi](https://www.usenix.org/conference/usenixsecurity22/presentation/kasturi)
- **PDF:** [https://www.usenix.org/system/files/sec22-kasturi.pdf](https://www.usenix.org/system/files/sec22-kasturi.pdf)
## Web Cache Deception Escalates!
### Authors
* Seyed Ali Mirheidari, University of Trento & Splunk Inc.
* Matteo Golinelli, University of Trento
* Kaan Onarlioglu, Akamai Technologies
* Engin Kirda, Northeastern University
* Bruno Crispo, University of Trento
### Abstract
> Web Cache Deception (WCD) tricks a web cache into erroneously storing sensitive content, thereby making it widely accessible on the Internet. In a USENIX Security 2020 paper titled "Cached and Confused: Web Cache Deception in the Wild", researchers presented the first systematic exploration of the attack over 340 websites. This state-of-the-art approach for WCD detection injects markers into websites and checks for leaks into caches. However, this scheme has two fundamental limitations: 1) It cannot probe websites that do not present avenues for marker injection or reflection. 2) Marker setup is a burdensome process, making large-scale measurements infeasible. More generally, all previous literature on WCD focuses solely on personal information leaks on websites protected behind authentication gates, leaving important gaps in our understanding of the full ramifications of WCD.We expand our knowledge of WCD attacks, their spread, and implications. We propose a novel WCD detection methodology that forgoes testing prerequisites, and utilizes page identicality checks and cache header heuristics to test any website. We conduct a comparative experiment on 404 websites, and show that our scheme identifies over 100 vulnerabilities while "Cached and Confused" is capped at 18. Equipped with a technique unhindered by the limitations of the previous work, we conduct the largest WCD experiment to date on the Alexa Top 10K, and detect 1188 vulnerable websites. We present case studies showing that WCD has consequences well beyond personal information leaks, and that attacks targeting non-authenticated pages are highly damaging.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/mirheidari](https://www.usenix.org/conference/usenixsecurity22/presentation/mirheidari)
- **PDF:** [https://www.usenix.org/system/files/sec22-mirheidari.pdf](https://www.usenix.org/system/files/sec22-mirheidari.pdf)
## FUGIO: Automatic Exploit Generation for PHP Object Injection Vulnerabilities.
### Authors
* Sunnyeo Park, KAIST
* Daejun Kim, KAIST
* Suman Jana, Columbia University
* Sooel Son, KAIST
### Abstract
> A PHP object injection (POI) vulnerability is a security-critical bug that allows the remote code execution of class methods existing in a vulnerable PHP application. Exploiting this vulnerability often requires sophisticated property-oriented programming to shape an injection object. Existing off-the-shelf tools focus only on identifying potential POI vulnerabilities without confirming the presence of any exploit objects. To this end, we propose FUGIO, the first automatic exploit generation (AEG) tool for POI vulnerabilities. FUGIO conducts coarse-grained static and dynamic program analyses to generate a list of gadget chains that serve as blueprints for exploit objects. FUGIO then runs fuzzing campaigns using these identified chains and produces exploit objects. FUGIO generated 68 exploit objects from 30 applications containing known POI vulnerabilities with zero false positives. FUGIO also found two previously unreported POI vulnerabilities with five exploits, demonstrating its efficacy in generating functional exploits.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/park-sunnyeo](https://www.usenix.org/conference/usenixsecurity22/presentation/park-sunnyeo)
- **PDF:** [https://www.usenix.org/system/files/sec22-park-sunnyeo.pdf](https://www.usenix.org/system/files/sec22-park-sunnyeo.pdf)
## TLS-Anvil: Adapting Combinatorial Testing for TLS Libraries.
### Authors
* Marcel Maehren, Ruhr University Bochum
* Philipp Nieting, Ruhr University Bochum
* Sven Hebrok, Paderborn University
* Robert Merget, Ruhr University Bochum
* Juraj Somorovsky, Paderborn University
* Jörg Schwenk, Ruhr University Bochum
### Abstract
> Although the newest versions of TLS are considered secure, flawed implementations may undermine the promised security properties. Such implementation flaws result from the TLS specifications' complexity, with exponentially many possible parameter combinations. Combinatorial Testing (CT) is a technique to tame this complexity, but it is hard to apply to TLS due to semantic dependencies between the parameters and thus leaves the developers with a major challenge referred to as the test oracle problem: Determining if the observed behavior of software is correct for a given test input.In this work, we present TLS-Anvil, a test suite based on CT that can efficiently and systematically test parameter value combinations and overcome the oracle problem by dynamically extracting an implementation-specific input parameter model (IPM) that we constrained based on TLS specific parameter value interactions. Our approach thus carefully restricts the available input space, which in return allows us to reliably solve the oracle problem for any combination of values generated by the CT algorithm.We evaluated TLS-Anvil with 13 well known TLS implementations, including OpenSSL, BoringSSL, and NSS. Our evaluation revealed two new exploits in MatrixSSL, five issues directly influencing the cryptographic operations of a session, as well as 15 interoperability issues, 116 problems related to incorrect alert handling, and 100 other issues across all tested libraries.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/maehren](https://www.usenix.org/conference/usenixsecurity22/presentation/maehren)
- **PDF:** [https://www.usenix.org/system/files/sec22-maehren.pdf](https://www.usenix.org/system/files/sec22-maehren.pdf)
## Open to a fault: On the passive compromise of TLS keys via transient errors.
### Authors
* George Arnold Sullivan, University of California, San Diego
* Jackson Sippe, University of Colorado Boulder
* Nadia Heninger, University of California, San Diego
* Eric Wustrow, University of Colorado Boulder
### Abstract
> It is well known in the cryptographic literature that the most common digital signature schemes used in practice can fail catastrophically in the presence of faults during computation. We use passive and active network measurements to analyze organically-occuring faults in billions of digital signatures generated by tens of millions of hosts.We find that a persistent rate of apparent hardware faults in unprotected implementations has resulted in compromised certificate RSA private keys for years. The faulty signatures we observed allowed us to compute private RSA keys associated with a top-10 Alexa site, several browser-trusted wildcard certificates for organizations that used a popular VPN product, and a small sporadic population of other web sites and network devices. These measurements illustrate the fragility of RSA PKCS#1v1.5 signature padding and provide insight on the risks faced by unprotected implementations on hardware at Internet scale.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/sullivan](https://www.usenix.org/conference/usenixsecurity22/presentation/sullivan)
- **PDF:** [https://www.usenix.org/system/files/sec22-sullivan.pdf](https://www.usenix.org/system/files/sec22-sullivan.pdf)
## Trust Dies in Darkness: Shedding Light on Samsung's TrustZone Keymaster Design.
### Authors
* Alon Shakevsky, Tel-Aviv University
* Eyal Ronen, Tel-Aviv University
* Avishai Wool, Tel-Aviv University
### Abstract
> ARM-based Android smartphones rely on the TrustZone hardware support for a Trusted Execution Environment (TEE) to implement security-sensitive functions. The TEE runs a separate, isolated, TrustZone Operating System (TZOS), in parallel to Android. The implementation of the cryptographic functions within the TZOS is left to the device vendors, who create proprietary undocumented designs. In this work, we expose the cryptographic design and implementation of Android's Hardware-Backed Keystore in Samsung's Galaxy S8, S9, S10, S20, and S21 flagship devices. We reversed-engineered and provide a detailed description of the cryptographic design and code structure, and we unveil severe design flaws. We present an IV reuse attack on AES-GCM that allows an attacker to extract hardware-protected key material, and a downgrade attack that makes even the latest Samsung devices vulnerable to the IV reuse attack. We demonstrate working key extraction attacks on the latest devices. We also show the implications of our attacks on two higher-level cryptographic protocols between the TrustZone and a remote server: we demonstrate a  working FIDO2 WebAuthn login bypass and a compromise of Google's Secure Key Import. We discuss multiple flaws in the design flow of TrustZone based protocols. Although our specific attacks only apply to the ≈100 million devices made by Samsung, it raises the much more general requirement for open and proven standards for critical cryptographic and security designs.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/shakevsky](https://www.usenix.org/conference/usenixsecurity22/presentation/shakevsky)
- **PDF:** [https://www.usenix.org/system/files/sec22-shakevsky.pdf](https://www.usenix.org/system/files/sec22-shakevsky.pdf)
## Breaking Bridgefy, again: Adopting libsignal is not enough.
### Authors
* Martin R. Albrecht, Information Security Group, Royal Holloway, University of London
* Raphael Eikenberg, Applied Cryptography Group, ETH Zurich
* Kenneth G. Paterson, Applied Cryptography Group, ETH Zurich
### Abstract
> Bridgefy is a messaging application that uses Bluetooth-based mesh networking. Its developers and others have advertised it for use in areas witnessing large-scale protests involving confrontations between protesters and state agents. In August 2020, a security analysis reported severe vulnerabilities that invalidated Bridgefy's claims of confidentiality, authentication, and resilience. In response, the developers adopted the Signal protocol and then continued to advertise their application as being suitable for use by higher-risk users.In this work, we analyse the security of the revised Bridgefy messenger and SDK and invalidate its security claims. One attack (targeting the messenger) enables an adversary to compromise the confidentiality of private messages by exploiting a time-of-check to time-of-use (TOCTOU) issue, side-stepping Signal's guarantees. The other attack (targeting the SDK) allows an adversary to recover broadcast messages without knowing the network-wide shared encryption key.We also found that the changes deployed in response to the August 2020 analysis failed to remedy the previously reported vulnerabilities. In particular, we show that (i) the protocol persisted to be susceptible to an active attacker-in-the-middle, (ii) an adversary continued to be able to impersonate other users in the broadcast channel of the Bridgefy messenger, (iii) the DoS attack using a decompression bomb was still applicable, albeit in a limited form, and that (iv) the privacy issues of Bridgefy remained largely unresolved.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/albrecht](https://www.usenix.org/conference/usenixsecurity22/presentation/albrecht)
- **PDF:** [https://www.usenix.org/system/files/sec22-albrecht.pdf](https://www.usenix.org/system/files/sec22-albrecht.pdf)
## "I feel invaded, annoyed, anxious and I may protect myself": Individuals' Feelings about Online Tracking and their Protective Behaviour across Gender and Country.
### Authors
* Kovila P.L. Coopamootoo, Newcastle University
* Maryam Mehrnezhad, Newcastle University
* Ehsan Toreini, Durham University
### Abstract
> Online tracking is a primary concern for Internet users, yet previous research has not found a clear link between the cognitive understanding of tracking and protective actions. We postulate that protective behaviour follows affective evaluation of tracking. We conducted an online study, with N=614 participants, across the UK, Germany and France, to investigate how users feel about third-party tracking and what protective actions they take. We found that most participants' feelings about tracking were negative, described as deeply intrusive - beyond the informational sphere, including feelings of annoyance and anxiety, that predict protective actions. We also observed indications of a ‘privacy gender gap', where women feel more negatively about tracking, yet are less likely to take protective actions, compared to men. And less UK individuals report negative feelings and protective actions, compared to those from Germany and France. This paper contributes insights into the affective evaluation of privacy threats and how it predicts protective behaviour. It also provides a discussion on the implications of these findings for various stakeholders, make recommendations and outline avenues for future work.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/coopamootoo](https://www.usenix.org/conference/usenixsecurity22/presentation/coopamootoo)
- **PDF:** [https://www.usenix.org/system/files/sec22-coopamootoo.pdf](https://www.usenix.org/system/files/sec22-coopamootoo.pdf)
## "Like Lesbians Walking the Perimeter": Experiences of U.S. LGBTQ+ Folks With Online Security, Safety, and Privacy Advice.
### Authors
* Christine Geeng, University of Washington
* Mike Harris, University of Washington
* Elissa Redmiles, Max Planck Institute for Software Systems
* Franziska Roesner, University of Washington
### Abstract
> Given stigma and threats surrounding being gay or transgender, LGBTQ+ folks often seek support and information on navigating identity and personal (digital and physical) safety. While prior research on digital security advice focused on a general population and general advice, our work focuses on queer security, safety, and privacy advice-seeking to determine population-specific needs and takeaways for broader advice research. We conducted qualitative semi-structured interviews with 14 queer participants diverse across race, age, gender, sexuality, and socioeconomic status. We find that participants turn to their trusted queer support groups for advice, since they often experienced similar threats. We also document reasons that participants sometimes reject advice, including that it would interfere with their material livelihood and their potential to connect with others. Given our results, we recommend that queer-specific and general security and safety advice focus on specificity—why and how—over consistency, because advice cannot be one-size-fits-all. We also discuss the value of intersectionality as a framework for understanding vulnerability to harms in security research, since our participants' overlapping identities affected their threat models and advice perception.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/geeng](https://www.usenix.org/conference/usenixsecurity22/presentation/geeng)
- **PDF:** [https://www.usenix.org/system/files/sec22-geeng.pdf](https://www.usenix.org/system/files/sec22-geeng.pdf)
## "They Look at Vulnerability and Use That to Abuse You": Participatory Threat Modelling with Migrant Domestic Workers.
### Authors
* Julia Słupska, University of Oxford
* Selina Cho, University of Oxford
* Marissa Begonia, Voice of Domestic Workers
* Ruba Abu-Salma, King's College London
* Nayanatara Prakash, University of Oxford
* Mallika Balakrishnan, Migrants Organise
### Abstract
> The needs of marginalised groups like migrant domestic workers (MDWs) are often ignored in digital privacy and security research. If considered, MDWs are treated as 'bystanders' or even as threats rather than as targets of surveillance and legitimate security subjects in their own right. Using participatory threat modelling (PTM) as a method of incorporating marginalised populations' experiences, we designed and conducted five workshops with MDWs (n=32) in the UK to identify threats to their privacy and security. We found that MDWs named government surveillance, scams and harassment, and employer monitoring (in this order) as the primary threats to their privacy and security. We also examined the methods MDWs used to stay safe online, such as configuring the privacy settings of their online accounts and creating on- and offline community support networks. Based on our findings, we developed and disseminated a digital privacy and security guide with links to further resources that MDWs can refer to. We conclude by arguing that security research must consider broader social structures like gendered work and racialised border policy that foster insecurity in the lives of MDWs. We also present the key lessons of our work, including considering data sharing from the perspective of stakeholders who do not own technology devices but are affected by them, and reflecting on how security research can stop enabling harmful forms of surveillance.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/slupska-vulnerability](https://www.usenix.org/conference/usenixsecurity22/presentation/slupska-vulnerability)
- **PDF:** [https://www.usenix.org/system/files/sec22-slupska-vulnerability.pdf](https://www.usenix.org/system/files/sec22-slupska-vulnerability.pdf)
## Networks of Care: Tech Abuse Advocates' Digital Security Practices.
### Authors
* Julia Slupska, University of Oxford
* Angelika Strohmayer, Northumbria University
### Abstract
> As technology becomes an enabler of relationship abuse and coercive control, advocates who support survivors develop digital security practices to counter this. Existing research on technology-related abuse has primarily focused on describing the dynamics of abuse and developing solutions for this problem; we extend this literature by focusing on the security practices of advocates working "on the ground", i.e. in domestic violence shelters and other support services. We present findings from 26 semi-structured interviews and a data walkthrough workshop in which advocates described how they support survivors. We identified a variety of intertwined emotional and technical support practices, including establishing trust, safety planning, empowerment, demystification, supporting evidence collection and making referrals. By building relationships with other services and stakeholders, advocates also develop networks of care throughout society to create more supportive environments for survivors. Using critical and feminist theories, we see advocates as sources of crucial technical expertise to reduce this kind of violence in the future. Security and privacy researchers can build on and develop these networks of care by employing participatory methods and expanding threat modelling to account for interpersonal harms like coercive control and structural forms of discrimination such as misogyny and racism.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/slupska-networks](https://www.usenix.org/conference/usenixsecurity22/presentation/slupska-networks)
- **PDF:** [https://www.usenix.org/system/files/sec22-slupska-networks.pdf](https://www.usenix.org/system/files/sec22-slupska-networks.pdf)
## How Long Do Vulnerabilities Live in the Code? A Large-Scale Empirical Measurement Study on FOSS Vulnerability Lifetimes.
### Authors
* Nikolaos Alexopoulos, Technical University of Darmstadt
* Manuel Brack, Technical University of Darmstadt
* Jan Philipp Wagner, Technical University of Darmstadt
* Tim Grube, Technical University of Darmstadt
* Max Mühlhäuser, Technical University of Darmstadt
### Abstract
> How long do vulnerabilities live in the repositories of large, evolving projects? Although the question has been identified as an interesting problem by the software community in online forums, it has not been investigated yet in adequate depth and scale, since the process of identifying the exact point in time when a vulnerability was introduced is particularly cumbersome. In this paper, we provide an automatic approach for accurately estimating how long vulnerabilities remain in the code (their lifetimes). Our method relies on the observation that while it is difficult to pinpoint the exact point of introduction for one vulnerability, it is possible to accurately estimate the average lifetime of a large enough sample of vulnerabilities, via a heuristic approach.With our approach, we perform the first large-scale measurement of Free and Open Source Software vulnerability lifetimes, going beyond approaches estimating lower bounds prevalent in previous research. We find that the average lifetime of a vulnerability is around 4 years, varying significantly between projects (~2 years for Chromium, ~7 years for OpenSSL). The distribution of lifetimes can be approximately described by an exponential distribution. There are no statistically significant differences between the lifetimes of different vulnerability types when considering specific projects. Vulnerabilities are getting older, as the average lifetime of fixed vulnerabilities in a given year increases over time, influenced by the overall increase of code age. However, they live less than non-vulnerable code, with an increasing spread over time for some projects, suggesting a notion of maturity that can be considered an indicator of quality. While the introduction of fuzzers does not significantly reduce the lifetimes of memory-related vulnerabilities, further research is needed to better understand and quantify the impact of fuzzers and other tools on vulnerability lifetimes and on the security of codebases.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/alexopoulos](https://www.usenix.org/conference/usenixsecurity22/presentation/alexopoulos)
- **PDF:** [https://www.usenix.org/system/files/sec22-alexopoulos.pdf](https://www.usenix.org/system/files/sec22-alexopoulos.pdf)
## Expected Exploitability: Predicting the Development of Functional Vulnerability Exploits.
### Authors
* Octavian Suciu, University of Maryland, College Park
* Connor Nelson, Arizona State University
* Zhuoer Lyu, Arizona State University
* Tiffany Bao, Arizona State University
* Tudor Dumitraș, University of Maryland, College Park
### Abstract
> Assessing the exploitability of software vulnerabilities at the time of disclosure is difficult and error-prone, as features extracted via technical analysis by existing metrics are poor predictors for exploit development. Moreover, exploitability assessments suffer from a class bias because "not exploitable" labels could be inaccurate. To overcome these challenges, we propose a new metric, called Expected Exploitability (EE), which reflects, over time, the likelihood that functional exploits will be developed. Key to our solution is a time-varying view of exploitability, a departure from existing metrics. This allows us to learn EE using data-driven techniques from artifacts published after disclosure, such as technical write-ups and proof-of-concept exploits, for which we design novel feature sets. This view also allows us to investigate the effect of the label biases on the classifiers. We characterize the noise-generating process for exploit prediction, showing that our problem is subject to the most challenging type of label noise, and propose techniques to learn EE in the presence of noise. On a dataset of 103,137 vulnerabilities, we show that EE increases precision from 49% to 86% over existing metrics, including two state-of-the-art exploit classifiers, while its precision substantially improves over time. We also highlight the practical utility of EE for predicting imminent exploits and prioritizing critical vulnerabilities. We develop EE into an online platform which is publicly available at https://exploitability.app/.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/suciu](https://www.usenix.org/conference/usenixsecurity22/presentation/suciu)
- **PDF:** [https://www.usenix.org/system/files/sec22-suciu.pdf](https://www.usenix.org/system/files/sec22-suciu.pdf)
## OS-Aware Vulnerability Prioritization via Differential Severity Analysis.
### Authors
* Qiushi Wu, University of Minnesota
* Yue Xiao, Indiana University Bloomington
* Xiaojing Liao, Indiana University Bloomington
* Kangjie Lu, University of Minnesota
### Abstract
> The Linux kernel is quickly evolving and extensively customized. This results in thousands of versions and derivatives. Unfortunately, the Linux kernel is quite vulnerable. Each year, thousands of bugs are reported, and hundreds of them are security-related bugs. Given the limited resources, the kernel maintainers have to prioritize patching the more severe vulnerabilities. In practice, Common Vulnerability Scoring System (CVSS)[1] has become the standard for characterizing vulnerability severity. However, a fundamental problem exists when CVSS meets Linux—it is used in a "one for all" manner. The severity of a Linux vulnerability is assessed for only the mainstream Linux, and all affected versions and derivatives will simply honor and reuse the CVSS score. Such an undistinguished CVSS usage results in underestimation or overestimation of severity, which further results in delayed and ignored patching or wastes of the precious resources. In this paper, we propose OS-aware vulnerability prioritization (namely DIFFCVSS), which employs differential severity analysis for vulnerabilities. Specifically, given a severity assessed vulnerability, as well as the mainstream version and a target version of Linux, DIFFCVSS employs multiple new techniques based on static program analysis and natural language processing to differentially identify whether the vulnerability manifests a higher or lower severity in the target version. A unique strength of this approach is that it transforms the challenging and laborious CVSS calculation into automatable differential analysis. We implement DIFFCVSS and apply it to the mainstream Linux and downstream Android systems. The evaluation and user-study results show that DIFFCVSS is able to precisely perform the differential severity analysis, and offers a precise and effective way to identify vulnerabilities that deserve a severity reevaluation.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/wu-qiushi](https://www.usenix.org/conference/usenixsecurity22/presentation/wu-qiushi)
- **PDF:** [https://www.usenix.org/system/files/sec22-wu-qiushi.pdf](https://www.usenix.org/system/files/sec22-wu-qiushi.pdf)
## Arbiter: Bridging the Static and Dynamic Divide in Vulnerability Discovery on Binary Programs.
### Authors
* Jayakrishna Vadayath, Arizona State University
* Moritz Eckert, EURECOM
* Kyle Zeng, Arizona State University
* Nicolaas Weideman, University of Southern California
* Gokulkrishna Praveen Menon, Arizona State University
* Yanick Fratantonio, Cisco Systems Inc.
* Davide Balzarotti, EURECOM
* Adam Doupé, Arizona State University
* Tiffany Bao, Arizona State University
* Ruoyu Wang, Arizona State University
* Christophe Hauser, University of Southern California
* Yan Shoshitaishvili, Arizona State University
### Abstract
> In spite of their effectiveness in the context of vulnerability discovery, current state-of-the-art binary program analysis approaches are limited by inherent trade-offs between accuracy and scalability. In this paper, we identify a set of vulnerability properties that can aid both static and dynamic vulnerability detection techniques, improving the precision of the former and the scalability of the latter. By carefully integrating static and dynamic techniques, we detect vulnerabilities that exhibit these properties in real-world programs at a large scale.We implemented our technique, making several advancements in the analysis of binary code, and created a prototype called ARBITER. We demonstrate the effectiveness of our approach with a large-scale evaluation on four common vulnerability classes: CWE-131 (Incorrect Calculation of Buffer Size), CWE-252 (Unchecked Return Value), CWE-134 (Uncontrolled Format String), and CWE-337 (Predictable Seed in Pseudo-Random Number Generator). We evaluated our approach on more than 76,516 x86-64 binaries in the Ubuntu repositories and discovered new vulnerabilities, including a flaw inserted into programs during compilation.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/vadayath](https://www.usenix.org/conference/usenixsecurity22/presentation/vadayath)
- **PDF:** [https://www.usenix.org/system/files/sec22-vadayath.pdf](https://www.usenix.org/system/files/sec22-vadayath.pdf)
## Spoki: Unveiling a New Wave of Scanners through a Reactive Network Telescope.
### Authors
* Raphael Hiesgen, HAW Hamburg
* Marcin Nawrocki, Freie Universität Berlin
* Alistair King, Kentik
* Alberto Dainotti, CAIDA, UC San Diego and Georgia Institute of Technology
* Thomas C. Schmidt, HAW Hamburg
* Matthias Wählisch, Freie Universität Berlin
### Abstract
> Large-scale Internet scans are a common method to identify victims of a specific attack. Stateless scanning like in ZMap has been established as an efficient approach to probing at Internet scale. Stateless scans, however, need a second phase to perform the attack. This remains invisible to network telescopes, which only capture the first incoming packet, and is not observed as a related event by honeypots, either. In this work, we examine Internet-wide scan traffic through Spoki, a reactive network telescope operating in real-time that we design and implement. Spoki responds to asynchronous TCP SYN packets and engages in TCP handshakes initiated in the second phase of two-phase scans. Because it is extremely lightweight it scales to large prefixes where it has the unique opportunity to record the first data sequence submitted within the TCP handshake ACK. We analyze two-phase scanners during a three months period using globally deployed Spoki reactive telescopes as well as flow data sets from IXPs and ISPs. We find that a predominant fraction of TCP SYNs on the Internet has irregular characteristics. Our findings also provide a clear signature of today's scans as: (i) highly targeted, (ii) scanning activities notably vary between regional vantage points, and (iii) a significant share originates from malicious sources.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/hiesgen](https://www.usenix.org/conference/usenixsecurity22/presentation/hiesgen)
- **PDF:** [https://www.usenix.org/system/files/sec22-hiesgen.pdf](https://www.usenix.org/system/files/sec22-hiesgen.pdf)
## Many Roads Lead To Rome: How Packet Headers Influence DNS Censorship Measurement.
### Authors
* Abhishek Bhaskar, Georgia Institute of Technology
* Paul Pearce, Georgia Institute of Technology
### Abstract
> Internet censorship is widespread, impacting citizens of hundreds of countries around the world. Recent work has developed techniques that can perform widespread, longitudinal measurements of global Internet manipulation remotely and have focused largely on the scale of censorship measurements with minimal focus on reproducibility and consistency.In this work we explore the role packet headers (e.g., source IP address and source port) have on DNS censorship. By performing a large-scale measurement study building on the techniques deployed by previous and current censorship measurement platforms, we find that choice of ephemeral source port and local source IP address (e.g., x.x.x.7 vs x.x.x.8) influence routing, which in turn influences DNS censorship. We show that 37% of IPs across 56% ASes measured show some change in censorship behavior depending on source port and local source IP. This behavior is frequently all-or-nothing, where choice of header can result in no observable censorship. Such behavior mimics and could be misattributed to geolocation error, packet loss, or network outages. The scale of censorship differences can more than double depending on the lowest 3 bits of the source IP address, consistent with known router load balancing techniques. We also observe smaller-scale censorship variation where only a few domains experience censorship differences based on packet parameters. We lastly find that these variations are persistent; packet retries do not control for observed variation. Our results point to the need for methodological changes in future DNS censorship measurement, which we discuss.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/bhaskar](https://www.usenix.org/conference/usenixsecurity22/presentation/bhaskar)
- **PDF:** [https://www.usenix.org/system/files/sec22-bhaskar.pdf](https://www.usenix.org/system/files/sec22-bhaskar.pdf)
## GET /out: Automated Discovery of Application-Layer Censorship Evasion Strategies.
### Authors
* Michael Harrity, University of Maryland
* Kevin Bock, University of Maryland
* Frederick Sell, University of Maryland
* Dave Levin, University of Maryland
### Abstract
> The censorship arms race has recently gone through a transformation, thanks to recent efforts showing that new ways to evade censorship can be discovered in an automated fashion. However, all of these prior automated efforts operate by manipulating TCP/IP headers; while impressive, deploying these have proven challenging, as header modifications often require greater privileges than are available to censorship circumvention apps. In that line of work, the application layer has gone largely unexplored. This is not without reason: the space of application messages is much larger and far less structured than TCP/IP headers.In this paper, we present the first techniques to automate the discovery of new censorship evasion techniques purely in the application layer. We present a general solution and apply it specifically to HTTP and DNS censorship in China, India, and Kazakhstan. Our automated techniques discovered a total of 77 unique evasion strategies for HTTP and 9 for DNS, all of which require only application-layer modifications, making them easier to incorporate into apps and deploy. We analyze these strategies and shed new light into the inner workings of the censors. We find that the success of application-layer strategies can depend heavily on the type and version of the destination server. Surprisingly, a large class of our evasion strategies exploit instances in which censors are more RFCcompliant than popular application servers. We have made our code publicly available.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/harrity](https://www.usenix.org/conference/usenixsecurity22/presentation/harrity)
- **PDF:** [https://www.usenix.org/system/files/sec22-harrity.pdf](https://www.usenix.org/system/files/sec22-harrity.pdf)
## OpenVPN is Open to VPN Fingerprinting.
### Authors
* Diwen Xue, University of Michigan
* Reethika Ramesh, University of Michigan
* Arham Jain, University of Michigan
* Michalis Kallitsis, Merit Network, Inc.
* J. Alex Halderman, University of Michigan
* Jedidiah R. Cr, Arizona State University/Breakpointing Bad
* all, Arizona State University/Breakpointing Bad
* Roya Ensafi, University of Michigan
### Abstract
> VPN adoption has seen steady growth over the past decade due to increased public awareness of privacy and surveillance threats. In response, certain governments are attempting to restrict VPN access by identifying connections using "dual use" DPI technology. To investigate the potential for VPN blocking, we develop mechanisms for accurately fingerprinting connections using OpenVPN, the most popular protocol for commercial VPN services. We identify three fingerprints based on protocol features such as byte pattern, packet size, and server response. Playing the role of an attacker who controls the network, we design a two-phase framework that performs passive fingerprinting and active probing in sequence. We evaluate our framework in partnership with a million-user ISP and find that we identify over 85% of OpenVPN flows with only negligible false positives, suggesting that OpenVPN-based services can be effectively blocked with little collateral damage. Although some commercial VPNs implement countermeasures to avoid detection, our framework successfully identified connections to 34 out of 41 "obfuscated" VPN configurations. We discuss the implications of the VPN fingerprintability for different threat models and propose short-term defenses. In the longer term, we urge commercial VPN providers to be more transparent about their obfuscation approaches and to adopt more principled detection countermeasures, such as those developed in censorship circumvention research.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/xue-diwen](https://www.usenix.org/conference/usenixsecurity22/presentation/xue-diwen)
- **PDF:** [https://www.usenix.org/system/files/sec22-xue-diwen.pdf](https://www.usenix.org/system/files/sec22-xue-diwen.pdf)
## Pool Inference Attacks on Local Differential Privacy: Quantifying the Privacy Guarantees of Apple's Count Mean Sketch in Practice.
### Authors
* Andrea Gadotti, Imperial College London
* Florimond Houssiau, Alan Turing Institute
* Meenatchi Sundaram Muthu Selva Annamalai, Imperial College London
* Yves-Alex, Imperial College London
* re de Montjoye, Imperial College London
### Abstract
> Behavioral data generated by users’ devices, ranging from emoji use to pages visited, are collected at scale to improve apps and services. These data, however, contain fine-grained records and can reveal sensitive information about individual users. Local differential privacy has been used by companies as a solution to collect data from users while preserving privacy. We here first introduce pool inference attacks, where an adversary has access to a user’s obfuscated data, defines pools of objects, and exploits the user’s polarized behavior in multiple data collections to infer the user’s preferred pool. Second, we instantiate this attack against Count Mean Sketch, a local differential privacy mechanism proposed by Apple and deployed in iOS and Mac OS devices, using a Bayesian model. Using Apple’s parameters for the privacy loss ε, we then consider two specific attacks: one in the emojis setting— where an adversary aims at inferring a user’s preferred skin tone for emojis — and one against visited websites — where an adversary wants to learn the political orientation of a user from the news websites they visit. In both cases, we show the attack to be much more effective than a random guess when the adversary collects enough data. We find that users with high polarization and relevant interest are significantly more vulnerable, and we show that our attack is well-calibrated, allowing the adversary to target such vulnerable users. We finally validate our results for the emojis setting using user data from Twitter. Taken together, our results show that pool inference attacks are a concern for data protected by local differential privacy mechanisms with a large ε, emphasizing the need for additional technical safeguards and the need for more research on how to apply local differential privacy for multiple collections.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/gadotti](https://www.usenix.org/conference/usenixsecurity22/presentation/gadotti)
- **PDF:** [https://www.usenix.org/system/files/sec22-gadotti_1.pdf](https://www.usenix.org/system/files/sec22-gadotti_1.pdf)
## Poisoning Attacks to Local Differential Privacy Protocols for Key-Value Data.
### Authors
* Yongji Wu, Duke University
* Xiaoyu Cao, Duke University
* Jinyuan Jia, Duke University
* Neil Zhenqiang Gong, Duke University
### Abstract
> Local Differential Privacy (LDP) protocols enable an untrusted server to perform privacy-preserving, federated data analytics. Various LDP protocols have been developed for different types of data such as categorical data, numerical data, and key-value data. Due to their distributed settings, LDP protocols are fundamentally vulnerable to poisoning attacks, in which fake users manipulate the server's analytics results via sending carefully crafted data to the server. However, existing poisoning attacks focused on LDP protocols for simple data types such as categorical and numerical data, leaving the security of LDP protocols for more advanced data types such as key-value data unexplored.In this work, we aim to bridge the gap by introducing novel poisoning attacks to LDP protocols for key-value data. In such a LDP protocol, a server aims to simultaneously estimate the frequency and mean value of each key among some users, each of whom possesses a set of key-value pairs. Our poisoning attacks aim to simultaneously maximize the frequencies and mean values of some attacker-chosen target keys via sending carefully crafted data from some fake users to the sever. Specifically, since our attacks have two objectives, we formulate them as a two-objective optimization problem. Moreover, we propose a method to approximately solve the two-objective optimization problem, from which we obtain the optimal crafted data the fake users should send to the server. We demonstrate the effectiveness of our attacks to three LDP protocols for key-value data both theoretically and empirically. We also explore two defenses against our attacks, which are effective in some scenarios but have limited effectiveness in other scenarios. Our results highlight the needs for new defenses against our poisoning attacks.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/wu-yongji](https://www.usenix.org/conference/usenixsecurity22/presentation/wu-yongji)
- **PDF:** [https://www.usenix.org/system/files/sec22-wu-yongji.pdf](https://www.usenix.org/system/files/sec22-wu-yongji.pdf)
## Communication-Efficient Triangle Counting under Local Differential Privacy.
### Authors
* Jacob Imola, UC San Diego
* Takao Murakami, AIST
* Kamalika Chaudhuri, UC San Diego
### Abstract
> Triangle counting in networks under LDP (Local Differential Privacy) is a fundamental task for analyzing connection patterns or calculating a clustering coefficient while strongly protecting sensitive friendships from a central server. In particular, a recent study proposes an algorithm for this task that uses two rounds of interaction between users and the server to significantly reduce estimation error. However, this algorithm suffers from a prohibitively high communication cost due to a large noisy graph each user needs to download.In this work, we propose triangle counting algorithms under LDP with a small estimation error and communication cost. We first propose two-rounds algorithms consisting of edge sampling and carefully selecting edges each user downloads so that the estimation error is small. Then we propose a double clipping technique, which clips the number of edges and then the number of noisy triangles, to significantly reduce the sensitivity of each user's query. Through comprehensive evaluation, we show that our algorithms dramatically reduce the communication cost of the existing algorithm, e.g., from 6 hours to 8 seconds or less at a 20 Mbps download rate, while keeping a small estimation error.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/imola](https://www.usenix.org/conference/usenixsecurity22/presentation/imola)
- **PDF:** [https://www.usenix.org/system/files/sec22-imola.pdf](https://www.usenix.org/system/files/sec22-imola.pdf)
## Twilight: A Differentially Private Payment Channel Network.
### Authors
* Maya Dotan, The Hebrew University of Jerusalem
* Saar Tochner, The Hebrew University of Jerusalem
* Aviv Zohar, The Hebrew University of Jerusalem
* Yossi Gilad, The Hebrew University of Jerusalem
### Abstract
> Payment channel networks (PCNs) provide a faster and cheaper alternative to transactions recorded on the blockchain. Clients can trustlessly establish payment channels with relays by locking coins and then send signed payments that shift coin balances over the network's channels. Although payments are never published, anyone can track a client's payment by monitoring changes in coin balances over the network's channels. We present Twilight, the first PCN that provides a rigorous differential privacy guarantee to its users. Relays in Twilight run a noisy payment processing mechanism that hides the payments they carry. This mechanism increases the relay's cost, so Twilight combats selfish relays that wish to avoid it, using a trusted execution environment (TEE) that ensures they follow its protocol. The TEE does not store the channel's state, which minimizes the trusted computing base. Crucially, Twilight ensures that even if a relay breaks the TEE's security, it cannot break the integrity of the PCN. We analyze Twilight in terms of privacy and cost and study the trade-off between them. We implement Twilight using Intel's SGX framework and evaluate its performance using relays deployed on two continents. We show that a route consisting of 4 relays handles 820 payments/sec.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/dotan](https://www.usenix.org/conference/usenixsecurity22/presentation/dotan)
- **PDF:** [https://www.usenix.org/system/files/sec22-dotan.pdf](https://www.usenix.org/system/files/sec22-dotan.pdf)
## Watching the watchers: bias and vulnerability in remote proctoring software.
### Authors
* Ben Burgess, Princeton University
* Avi Ginsberg, Georgetown Law
* Edward W. Felten, Princeton University
* Shaanan Cohney, University of Melbourne
### Abstract
> Educators are rapidly switching to remote proctoring and examination software for their testing needs, both due to the COVID-19 pandemic and the expanding virtualization of the education sector. State boards are increasingly utilizing these software packages for high stakes legal and medical licensing exams. Three key concerns arise with the use of these complex programs: exam integrity, exam procedural fairness, and exam-taker security and privacy.We conduct the first technical analysis of each of these concerns through a case study of four primary proctoring suites used in U.S. law school and state attorney licensing exams. We reverse engineer these proctoring suites and find that despite promises of high-security, all their anti-cheating measures can be trivially bypassed and can pose significant user security risks.We evaluate current facial recognition classifiers alongside the classifier used by Examplify, the legal exam proctoring suite with the largest market share, to ascertain their accuracy and determine whether faces with certain skin tones are more readily flagged for cheating. Finally, we offer recommendations to improve the integrity and fairness of the remotely proctored exam experience.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/burgess](https://www.usenix.org/conference/usenixsecurity22/presentation/burgess)
- **PDF:** [https://www.usenix.org/system/files/sec22-burgess.pdf](https://www.usenix.org/system/files/sec22-burgess.pdf)
## The Antrim County 2020 Election Incident: An Independent Forensic Investigation.
### Authors
* J. Alex Halderman, University of Michigan
### Abstract
> In November 2020, Antrim County, Michigan published unofficial election results that misstated totals in the presidential race and other contests by up to several thousand votes. Antrim subsequently issued a series of corrections, and the certified presidential results were confirmed by a hand count. Nevertheless, Antrim was repeatedly cited by the former President as evidence of widespread fraud, and it remains a centerpiece of conspiracy theories about the 2020 election. At the request of the Michigan Secretary of State and Attorney General, I performed a forensic investigation of the incident. Using data from the election system, I precisely reproduce the major anomalies, explain their cause, and verify they have been corrected. However, I also uncover other errors affecting specific down-ballot contests that have not been corrected, despite the unusual attention focused on the results, one of which may have changed the outcome of a local contest. Based on this analysis, I refute false claims and disinformation about the incident, concluding that it was not the result of a security breach but rather a series of operator errors compounded by inadequate procedures and insufficiently defensive software design. These events offer lessons for election administration and highlight the value of rigorously investigating election technology incidents for enhancing accuracy and public trust.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/halderman](https://www.usenix.org/conference/usenixsecurity22/presentation/halderman)
- **PDF:** [https://www.usenix.org/system/files/sec22-halderman.pdf](https://www.usenix.org/system/files/sec22-halderman.pdf)
## An Audit of Facebook's Political Ad Policy Enforcement.
### Authors
* Victor Le Pochat, imec-DistriNet, KU Leuven
* Laura Edelson, New York University
* Tom Van Goethem, imec-DistriNet, KU Leuven
* Wouter Joosen, imec-DistriNet, KU Leuven
* Damon McCoy, New York University
* Tobias Lauinger, New York University
### Abstract
> Major technology companies strive to protect the integrity of political advertising on their platforms by implementing and enforcing self-regulatory policies that impose transparency requirements on political ads. In this paper, we quantify whether Facebook’s current enforcement correctly identifies political ads and ensures compliance by advertisers. In a comprehensive, large-scale analysis of 4.2 million political and 29.6 million non-political ads from 215,030 advertisers, we identify ads correctly detected as political (true positives), ads incorrectly detected (false positives), and ads missed by detection (false negatives). Facebook’s current enforcement appears imprecise: 61% more ads are missed than are detected worldwide, and 55% of U.S. detected ads are in fact non-political. Detection performance is uneven across countries, with some having up to 53 times higher false negative rates among clearly political pages than in the U.S. Moreover, enforcement appears inadequate for preventing systematic violations of political advertising policies: for example, advertisers were able to continue running political ads without disclosing them while they were temporarily prohibited in the U.S. We attribute these flaws to five gaps in Facebook’s current enforcement and transparency implementation, and close with recommendations to improve the security of the online political ad ecosystem.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/lepochat](https://www.usenix.org/conference/usenixsecurity22/presentation/lepochat)
- **PDF:** [https://www.usenix.org/system/files/sec22-lepochat.pdf](https://www.usenix.org/system/files/sec22-lepochat.pdf)
## Building an Open, Robust, and Stable Voting-Based Domain Top List.
### Authors
* Qinge Xie, Georgia Institute of Technology
* Shujun Tang, QI-ANXIN Technology Research Institute
* Xiaofeng Zheng, QI-ANXIN Technology Research Institute and Tsinghua University
* Qingran Lin, QI-ANXIN Technology Research Institute
* Baojun Liu, Tsinghua University
* Haixin Duan, QI-ANXIN Technology Research Institute and Tsinghua University
* Frank Li, Georgia Institute of Technology
### Abstract
> Domain top lists serve as critical resources for the Internet measurement, security, and privacy research communities. Hundreds of prior research studies have used these lists as a set of supposedly popular domains to investigate. However, existing top lists exhibit numerous issues, including a lack of transparency into the list data sources and construction methods, high volatility, and easy ranking manipulation. Despite these flaws, these top lists remain widely used today due to a lack of suitable alternatives. In this paper, we systematically explore the construction of a domain top list from scratch. Using an extensive passive DNS dataset, we investigate different top list design considerations. As a product of our exploration, we produce a voting-based domain ranking method where we quantify the domain preferences of individual IP addresses, and then determine a global ranking across addresses through a voting mechanism. We empirically evaluate our top list design, demonstrating that it achieves better stability and manipulation resistance than existing top lists, while serving as an open and transparent ranking method that other researchers can use or adapt.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/xie](https://www.usenix.org/conference/usenixsecurity22/presentation/xie)
- **PDF:** [https://www.usenix.org/system/files/sec22-xie.pdf](https://www.usenix.org/system/files/sec22-xie.pdf)
## AMD Prefetch Attacks through Power and Time.
### Authors
* Moritz Lipp, Graz University of Technology
* Daniel Gruss, Graz University of Technology
* Michael Schwarz, CISPA Helmholtz Center for Information Security
### Abstract
> Modern operating systems fundamentally rely on the strict isolation of user applications from the kernel. This isolation is enforced by the hardware. On Intel CPUs, this isolation has been shown to be imperfect, for instance, with the prefetch side-channel. With Meltdown, it was even completely circumvented. Both the prefetch side channel and Meltdown have been mitigated with the same software patch on Intel. As AMD is believed to be not vulnerable to these attacks, this software patch is not active by default on AMD CPUs.In this paper, we show that the isolation on AMD CPUs suffers from the same type of side-channel leakage. We discover timing and power variations of the prefetch instruction that can be observed from unprivileged user space. In contrast to previous work on prefetch attacks on Intel, we show that the prefetch instruction on AMD leaks even more information. We demonstrate the significance of this side channel with multiple case studies in real-world scenarios. We demonstrate the first microarchitectural break of (fine-grained) KASLR on AMD CPUs. We monitor kernel activity, e.g., if audio is played over Bluetooth, and establish a covert channel. Finally, we even leak kernel memory with 52.85 B/s with simple Spectre gadgets in the Linux kernel. We show that stronger page table isolation should be activated on AMD CPUs by default to mitigate our presented attacks successfully.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/lipp](https://www.usenix.org/conference/usenixsecurity22/presentation/lipp)
- **PDF:** [https://www.usenix.org/system/files/sec22-lipp.pdf](https://www.usenix.org/system/files/sec22-lipp.pdf)
## Hiding in Plain Sight? On the Efficacy of Power Side Channel-Based Control Flow Monitoring.
### Authors
* Yi Han, Rutgers University
* Matthew Chan, Rutgers University
* Zahra Aref, Rutgers University
* Nils Ole Tippenhauer, CISPA Helmholtz Center for Information Security
* Saman Zonouz, Georgia Tech
### Abstract
> Physical side-channel monitoring leverages the physical phenomena produced by a microcontroller (e.g. power consumption or electromagnetic radiation) to monitor program execution for malicious behavior. As such, it offers a promising intrusion detection solution for resource-constrained embedded systems, which are incompatible with conventional security measures. This method is especially relevant in safety and security-critical embedded systems such as in industrial control systems. Side-channel monitoring poses unique challenges for would-be attackers, such as (1) limiting attack vectors by being physically isolated from the monitored system, (2) monitoring immutable physical side channels with uninterpretable data-driven models, and (3) being specifically trained for the architectures and programs on which they are applied to. As a result, physical side-channel monitors are conventionally believed to provide a high level of security.In this paper, we propose a novel attack to illustrate that, despite the many barriers to attack that side-channel monitoring systems create, they are still vulnerable to adversarial attacks. We present a method for crafting functional malware such that, when injected into a side-channel-monitored system, the detector is not triggered. Our experiments reveal that this attack is robust across detector models and hardware implementations. We evaluate our attack on the popular ARMmicrocontroller platform on several representative programs, demonstrating the feasibility of such an attack and highlighting the need for further research into side-channel monitors.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/han](https://www.usenix.org/conference/usenixsecurity22/presentation/han)
- **PDF:** [https://www.usenix.org/system/files/sec22-han.pdf](https://www.usenix.org/system/files/sec22-han.pdf)
## Hertzbleed: Turning Power Side-Channel Attacks Into Remote Timing Attacks on x86.
### Authors
* Yingchen Wang, University of Texas at Austin
* Riccardo Paccagnella, University of Illinois Urbana-Champaign
* Elizabeth Tang He, University of Illinois Urbana-Champaign
* Hovav Shacham, University of Texas at Austin
* Christopher W. Fletcher, University of Illinois Urbana-Champaign
* David Kohlbrenner, University of Washington
### Abstract
> Power side-channel attacks exploit data-dependent variations in a CPU's power consumption to leak secrets. In this paper, we show that on modern Intel (and AMD) x86 CPUs, power side-channel attacks can be turned into timing attacks that can be mounted without access to any power measurement interface. Our discovery is enabled by dynamic voltage and frequency scaling (DVFS). We find that, under certain circumstances, DVFS-induced variations in CPU frequency depend on the current power consumption (and hence, data) at the granularity of milliseconds. Making matters worse, these variations can be observed by a remote attacker, since frequency differences translate to wall time differences!The frequency side channel is theoretically more powerful than the software side channels considered in cryptographic engineering practice today, but it is difficult to exploit because it has a coarse granularity. Yet, we show that this new channel is a real threat to the security of cryptographic software. First, we reverse engineer the dependency between data, power, and frequency on a modern x86 CPU—finding, among other things, that differences as seemingly minute as a set bit's position in a word can be distinguished through frequency changes. Second, we describe a novel chosen-ciphertext attack against (constant-time implementations of) SIKE, a post-quantum key encapsulation mechanism, that amplifies a single key-bit guess into many thousands of high- or low-power operations, allowing full key extraction via remote timing.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/wang-yingchen](https://www.usenix.org/conference/usenixsecurity22/presentation/wang-yingchen)
- **PDF:** [https://www.usenix.org/system/files/sec22-wang-yingchen.pdf](https://www.usenix.org/system/files/sec22-wang-yingchen.pdf)
## Binoculars: Contention-Based Side-Channel Attacks Exploiting the Page Walker.
### Authors
* Zirui Neil Zhao, University of Illinois Urbana-Champaign
* Adam Morrison, Tel Aviv University
* Christopher W. Fletcher, University of Illinois Urbana-Champaign
* Josep Torrellas, University of Illinois Urbana-Champaign
### Abstract
> Microarchitectural side channels are a pressing security threat. These channels are created when programs modulate hardware resources in a secret data-dependent fashion. They are broadly classified as being either stateful or stateless (also known as contention-based), depending on whether they leave behind a trace for attackers to later observe. Common wisdom suggests that stateful channels are significantly easier to monitor than stateless ones, and hence have received the most attention.In this paper, we present a novel stateless attack that shows this common wisdom is not always true. Our attack, called Binoculars, exploits unexplored interactions between in-flight page walk operations and other memory operations. Unlike other stateless channels, Binoculars creates significant timing perturbations—up to 20,000 cycles stemming from a single dynamic instruction—making it easy to monitor. We show how these perturbations are address dependent, enabling Binoculars to leak more virtual address bits in victim memory operations than any prior channel. Binoculars needs no shared memory between the attacker and the victim.Using Binoculars, we design both covert- and side-channel attacks. Our covert channel achieves a high capacity of 1116 KB/s on a Cascade Lake-X machine. We then design a sidechannel attack that steals keys from OpenSSL's side-channel resistant ECDSA by learning the ECDSA nonce k. Binoculars' ability to significantly amplify subtle behaviors, e.g., orderings of stores, is crucial for this attack to succeed because the nonce changes after each run. Finally, we fully break kernel ASLR.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/zhao-zirui](https://www.usenix.org/conference/usenixsecurity22/presentation/zhao-zirui)
- **PDF:** [https://www.usenix.org/system/files/sec22-zhao-zirui.pdf](https://www.usenix.org/system/files/sec22-zhao-zirui.pdf)
## The Dangers of Human Touch: Fingerprinting Browser Extensions through User Actions.
### Authors
* Konstantinos Solomos, University of Illinois at Chicago
* Panagiotis Ilia, University of Illinois at Chicago
* Soroush Karami, University of Illinois at Chicago
* Nick Nikiforakis, Stony Brook University
* Jason Polakis, University of Illinois at Chicago
### Abstract
> Browser extension fingerprinting has garnered considerable attention recently due to the twofold privacy loss that it incurs. Apart from facilitating tracking by augmenting browser fingerprints, the list of installed extensions can be directly used to infer sensitive user characteristics. However, prior research was performed in a vacuum, overlooking a core dimension of extensions' functionality: how they react to user actions. In this paper, we present the first exploration of user-triggered extension fingerprinting. Guided by our findings from a large-scale static analysis of browser extensions we devise a series of user action templates that enable dynamic extension-exercising frameworks to comprehensively uncover hidden extension functionality that can only be triggered through user interactions. Our experimental evaluation demonstrates the effectiveness of our proposed technique, as we are able to fingerprint 4,971 unique extensions, 36% of which are not detectable by state-of-the-art techniques. To make matters worse, we find that ≈67% of the extensions that require mouse or keyboard interactions lack appropriate safeguards, rendering them vulnerable to pages that simulate user actions through JavaScript. To assist extension developers in protecting users from this privacy threat, we build a tool that automatically includes origin checks for fortifying extensions against invasive sites.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/solomos](https://www.usenix.org/conference/usenixsecurity22/presentation/solomos)
- **PDF:** [https://www.usenix.org/system/files/sec22-solomos.pdf](https://www.usenix.org/system/files/sec22-solomos.pdf)
## Unleash the Simulacrum: Shifting Browser Realities for Robust Extension-Fingerprinting Prevention.
### Authors
* Soroush Karami, University of Illinois at Chicago
* Faezeh Kalantari, Arizona State University
* Mehrnoosh Zaeifi, Arizona State University
* Xavier J. Maso, Arizona State University
* Erik Trickel, Arizona State University
* Panagiotis Ilia, University of Illinois at Chicago
* Yan Shoshitaishvili, Arizona State University
* Adam Doupé, Arizona State University
* Jason Polakis, University of Illinois at Chicago
### Abstract
> Online tracking has garnered significant attention due to the privacy risk it poses to users. Among the various approaches, techniques that identify which extensions are installed in a browser can be used for fingerprinting browsers and tracking users, but also for inferring personal and sensitive user data. While preventing certain fingerprinting techniques is relatively simple, mitigating behavior-based extension-fingerprinting poses a significant challenge as it relies on hiding actions that stem from an extension's functionality. To that end, we introduce the concept of DOM Reality Shifting, whereby we split the reality users experience while browsing from the reality that webpages can observe. To demonstrate our approach we develop Simulacrum, a prototype extension that implements our defense through a targeted instrumentation of core Web API interfaces. Despite being conceptually straightforward, our implementation highlights the technical challenges posed by the complex and often idiosyncratic nature and behavior of web applications, modern browsers, and the JavaScript language. We experimentally evaluate our system against a state-of-theart DOM-based extension fingerprinting system and find that Simulacrum readily protects 95.37% of susceptible extensions. We then identify trivial modifications to extensions that enable our defense for the majority of the remaining extensions. To facilitate additional research and protect users from privacy-invasive behaviors we will open-source our system.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/karami](https://www.usenix.org/conference/usenixsecurity22/presentation/karami)
- **PDF:** [https://www.usenix.org/system/files/sec22-karami.pdf](https://www.usenix.org/system/files/sec22-karami.pdf)
## Online Website Fingerprinting: Evaluating Website Fingerprinting Attacks on Tor in the Real World.
### Authors
* Giovanni Cherubin, Alan Turing Institute
* Rob Jansen, U.S. Naval Research Laboratory
* Carmela Troncoso, EPFL SPRING Lab
### Abstract
> Website fingerprinting (WF) attacks on Tor allow an adversary who can observe the traffic patterns between a victim and the Tor network to predict the website visited by the victim. Existing WF attacks yield extremely high accuracy. However, the conditions under which these attacks are evaluated raises questions about their effectiveness in the real world. We conduct the first evaluation of website fingerprinting using genuine Tor traffic as ground truth and evaluated under a true open world. We achieve this by adapting the state-of-the-art Triplet Fingerprinting attack to an online setting and training the WF models on data safely collected on a Tor exit relay—a setup an adversary can easily deploy in practice. By studying WF under realistic conditions, we demonstrate that an adversary can achieve a WF classification accuracy of above 95% when monitoring a small set of 5 popular websites, but that accuracy quickly degrades to less than 80% when monitoring as few as 25 websites. We conclude that, although WF attacks may be possible, it is likely infeasible to carry them out in the real world while monitoring more than a small set of websites.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/cherubin](https://www.usenix.org/conference/usenixsecurity22/presentation/cherubin)
- **PDF:** [https://www.usenix.org/system/files/sec22-cherubin.pdf](https://www.usenix.org/system/files/sec22-cherubin.pdf)
## QCSD: A QUIC Client-Side Website-Fingerprinting Defence Framework.
### Authors
* Jean-Pierre Smith, ETH Zurich
* Luca Dolfi, ETH Zurich
* Prateek Mittal, Princeton University
* Adrian Perrig, ETH Zurich
### Abstract
> Website fingerprinting attacks, which analyse the metadata of encrypted network communication to identify visited websites, have been shown to be effective on privacy-enhancing technologies including virtual private networks (VPNs) and encrypted proxies. Despite this, VPNs are still undefended against these attacks, leaving millions of users vulnerable. Proposed defences against website fingerprinting require cooperation between the client and a remote endpoint to reshape the network traffic, thereby hindering deployment.We observe that the rapid and wide-spread deployment of QUIC and HTTP/3 creates an exciting opportunity to build website-fingerprinting defences directly into client applications, such as browsers, without requiring any changes to web servers, VPNs, or the deployment of new network services. We therefore design and implement the QCSD framework, which leverages QUIC and HTTP/3 to emulate existing website-fingerprinting defences by bidirectionally adding cover traffic and reshaping connections solely from the client. As case studies, we emulate both the FRONT and Tamaraw defences solely from the client and collected several datasets of live-defended traffic on which we evaluated modern machine-learning based attacks. Our results demonstrate the promise of this approach in shaping connections towards client-orchestrated defences, thereby removing a primary barrier to the deployment of website-fingerprinting defences.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/smith](https://www.usenix.org/conference/usenixsecurity22/presentation/smith)
- **PDF:** [https://www.usenix.org/system/files/sec22-smith.pdf](https://www.usenix.org/system/files/sec22-smith.pdf)
## Secure Poisson Regression.
### Authors
* Mahimna Kelkar, Cornell Tech
* Phi Hung Le, Google
* Mariana Raykova, Google
* Karn Seth, Google
### Abstract
> We introduce the first construction for secure two-party computation of Poisson regression, which enables two parties who hold shares of the input samples to learn only the resulting Poisson model while protecting the privacy of the inputs.Our construction relies on new protocols for secure fixed-point exponentiation and correlated matrix multiplications. Our secure exponentiation construction avoids expensive bit decomposition and achieves orders of magnitude improvement in both online and offline costs over state of the art works. As a result, the dominant cost for our secure Poisson regression are matrix multiplications with one fixed matrix. We introduce a new technique, called correlated Beaver triples, which enables many such multiplications at the cost of roughly one matrix multiplication. This further brings down the cost of secure Poisson regression.We implement our constructions and show their extreme efficiency. In a LAN setting, our secure exponentiation for 20-bit fractional precision takes less than 0.07ms with a batch-size of 100,000. One iteration of secure Poisson regression on a dataset with 10,000 samples with 1000 binary features needs about 65.82s in the offline phase, 55.14s in the online phase and 17MB total communication. For several real datasets this translates into training that takes seconds and only a couple of MB communication.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/kelkar](https://www.usenix.org/conference/usenixsecurity22/presentation/kelkar)
- **PDF:** [https://www.usenix.org/system/files/sec22-kelkar.pdf](https://www.usenix.org/system/files/sec22-kelkar.pdf)
## Cheetah: Lean and Fast Secure Two-Party Deep Neural Network Inference.
### Authors
* Zhicong Huang, Alibaba Group
* Wen-jie Lu, Alibaba Group
* Cheng Hong, Alibaba Group
* Jiansheng Ding, Alibaba Group
### Abstract
> Secure two-party neural network inference (2PC-NN) can offer privacy protection for both the client and the server and is a promising technique in the machine-learning-as-a-service setting. However, the large overhead of the current 2PC-NN inference systems is still being a headache, especially when applied to deep neural networks such as ResNet50. In this work, we present Cheetah, a new 2PC-NN inference system that is faster and more communication-efficient than state-of-the-arts. The main contributions of Cheetah are two-fold: the first part includes carefully designed homomorphic encryption-based protocols that can evaluate the linear layers (namely convolution, batch normalization, and fully-connection) without any expensive rotation operation. The second part includes several lean and communication-efficient primitives for the non-linear functions (e.g., ReLU and truncation). Using Cheetah, we present intensive benchmarks over several large-scale deep neural networks. Take ResNet50 for an example, an end-to-end execution of Cheetah under a WAN setting costs less than 2.5 minutes and 2.3 gigabytes of communication, which outperforms CrypTFlow2 (ACM CCS 2020) by about 5.6× and 12.9×, respectively.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/huang-zhicong](https://www.usenix.org/conference/usenixsecurity22/presentation/huang-zhicong)
- **PDF:** [https://www.usenix.org/system/files/sec22-huang-zhicong.pdf](https://www.usenix.org/system/files/sec22-huang-zhicong.pdf)
## Piranha: A GPU Platform for Secure Computation.
### Authors
* Jean-Luc Watson, University of California, Berkeley
* Sameer Wagh, University of California, Berkeley
* Raluca Ada Popa, University of California, Berkeley
### Abstract
> Secure multi-party computation (MPC) is an essential tool for privacy-preserving machine learning (ML). However, secure training of large-scale ML models currently requires a prohibitively long time to complete. Given that large ML inference and training tasks in the plaintext setting are significantly accelerated by Graphical Processing Units (GPUs), this raises the natural question: can secure MPC leverage GPU acceleration? A few recent works have studied this question in the context of accelerating specific components or protocols, but do not provide a general-purpose solution. Consequently, MPC developers must be both experts in cryptographic protocol design and proficient at low-level GPU kernel development to achieve good performance on any new protocol implementation. We present Piranha, a general-purpose, modular platform for accelerating secret sharing-based MPC protocols using GPUs. Piranha allows the MPC community to easily leverage the benefits of a GPU without requiring GPU expertise. Piranha contributes a three-layer architecture: (1) a device layer that can independently accelerate secret-sharing protocols by providing integer-based kernels absent in current general-purpose GPU libraries, (2) a modular protocol layer that allows developers to maximize utility of limited GPU memory with in-place computation and iterator-based support for non-standard memory access patterns, and (3) an application layer that allows applications to remain completely agnostic to the underlying protocols they use. To demonstrate the benefits of Piranha, we implement 3 state-of-the-art linear secret sharing MPC protocols for secure NN training: 2-party SecureML (IEEE S&P '17), 3-party Falcon (PETS '21), and 4-party FantasticFour (USENIX Security '21). Compared to their CPU-based implementations, the same protocols implemented on top of Piranha's protocol-agnostic acceleration exhibit a 16-48x decrease in training time. For the first time, Piranha demonstrates the feasibility of training a realistic neural network (e.g. VGG), end-to-end, using MPC in a little over one day. Piranha is open source and available at https://github.com/ucbrise/piranha.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/watson](https://www.usenix.org/conference/usenixsecurity22/presentation/watson)
- **PDF:** [https://www.usenix.org/system/files/sec22-watson.pdf](https://www.usenix.org/system/files/sec22-watson.pdf)
## OpenSSLNTRU: Faster post-quantum TLS key exchange.
### Authors
* Daniel J. Bernstein, University of Illinois at Chicago and Ruhr University Bochum
* Billy Bob Brumley, Tampere University
* Ming-Shing Chen, Ruhr University Bochum
* Nicola Tuveri, Tampere University
### Abstract
> Google's CECPQ1 experiment in 2016 integrated a post-quantum key-exchange algorithm, newhope1024, into TLS 1.2. The Google-Cloudflare CECPQ2 experiment in 2019 integrated a more efficient key-exchange algorithm, ntruhrss701, into TLS 1.3.This paper revisits the choices made in CECPQ2, and shows how to achieve higher performance for post-quantum key exchange in TLS 1.3 using a higher-security algorithm, sntrup761. Previous work had indicated that ntruhrss701 key generation was much faster than sntrup761 key generation, but this paper makes sntrup761 key generation much faster by generating a batch of keys at once.Batch key generation is invisible at the TLS protocol layer, but raises software-engineering questions regarding the difficulty of integrating batch key exchange into existing TLS libraries and applications. This paper shows that careful choices of software layers make it easy to integrate fast post-quantum software, including batch key exchange, into TLS with minor changes to TLS libraries and no changes to applications.As a demonstration of feasibility, this paper reports successful integration of its fast sntrup761 library, via a lightly patched OpenSSL, into an unmodified web browser and an unmodified TLS terminator. This paper also reports TLS 1.3 handshake benchmarks, achieving more TLS 1.3 handshakes per second than any software included in OpenSSL.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/bernstein](https://www.usenix.org/conference/usenixsecurity22/presentation/bernstein)
- **PDF:** [https://www.usenix.org/system/files/sec22-bernstein.pdf](https://www.usenix.org/system/files/sec22-bernstein.pdf)
## How Are Your Zombie Accounts? Understanding Users' Practices and Expectations on Mobile App Account Deletion.
### Authors
* Yijing Liu, Nankai University
* Yan Jia, Nankai University
* Qingyin Tan, Nankai University
* Zheli Liu, Nankai University
* Luyi Xing, Indiana University Bloomington
### Abstract
> Account deletion is an important way for users to exercise their right to delete. However, little work has been done to evaluate the usability of account deletion in mobile apps. In this paper, we conducted a 647-participants online survey covering two countries along with an additional 20-participants on-site interview to explore users' awareness, practices, and expectations for mobile app account deletion. The studies were based on the account deletion model we proposed, which was summarized from an empirical measurement covering 60 mobile apps. The results reveal that although account deletion is highly demanded, users commonly keep zombie app accounts in practice due to the lack of awareness. Moreover, users' understandings and expectations of account deletion are different from the current design of apps in many aspects. Our findings indicate that current ruleless implementations made consumers feel inconvenienced during the deletion process, especially the hidden entry and complex operation steps, which even blocked a non-negligible number of users exercising account deletion. Finally, we provide some design recommendations for making mobile app account deletion more usable for consumers.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/liu-yijing](https://www.usenix.org/conference/usenixsecurity22/presentation/liu-yijing)
- **PDF:** [https://www.usenix.org/system/files/sec22-liu-yijing.pdf](https://www.usenix.org/system/files/sec22-liu-yijing.pdf)
## "How Do You Not Lose Friends?": Synthesizing a Design Space of Social Controls for Securing Shared Digital Resources Via Participatory Design Jams.
### Authors
* Eyitemi Moju-Igbene, Georgia Institute of Technology
* Hanan Abdi, Georgia Institute of Technology
* Alan Lu, Georgia Institute of Technology
* Sauvik Das, Georgia Institute of Technology
### Abstract
> Digital resources (streaming services, banking accounts, collaborative documents, etc.)  are commonly shared among small, social groups. Yet, the security and privacy (S&P) controls for these resources map poorly onto the reality of shared access and ownership (e.g., one shared Netflix password for roommates). One challenge is that the design space for social S&P controls remains unclear. We bridged this gap by engaging end-users in participatory design workshops to envision social solutions to S&P challenges common to their groups. In analyzing the generated ideas and group discussions, we identified four design considerations salient to social S&P controls: social transparency; structures of governance; stakes and responsibility; and, promoting pro-group S&P behaviors. Additionally, we discovered trade-offs and challenges that arise when designing social S&P controls: balancing group security versus individual privacy; combating social friction; mitigating social herding behaviors; and, minimizing coordination costs.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/moju-igbene](https://www.usenix.org/conference/usenixsecurity22/presentation/moju-igbene)
- **PDF:** [https://www.usenix.org/system/files/sec22-moju-igbene.pdf](https://www.usenix.org/system/files/sec22-moju-igbene.pdf)
## Caring about Sharing: User Perceptions of Multiparty Data Sharing.
### Authors
* Bailey Kacsmar, University of Waterloo
* Kyle Tilbury, University of Waterloo
* Miti Mazmudar, University of Waterloo
* Florian Kerschbaum, University of Waterloo
### Abstract
> Data sharing between companies is typically regarded as one-size-fits-all in practice and in research. For instance, the main source of information available to users about how a company shares their data is privacy policies. Privacy policies use ambiguous terms such as ‘third-parties' and ‘partners' with regard to who data is shared with. In the real-world, data sharing has more nuance than is captured by these overarching terms. We investigate whether users perceive different data sharing scenarios differently through an online survey with scenarios that describe specific types of multiparty data sharing practices. We determine users' perceptions when explicitly presented with how their data is shared, who it is shared with, and why. We show that users have preferences and that variations in acceptability exist which depend on the nature of the data sharing collaboration. Users caring about sharing, necessitates more transparent sharing practices and regulations.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/kacsmar](https://www.usenix.org/conference/usenixsecurity22/presentation/kacsmar)
- **PDF:** [https://www.usenix.org/system/files/sec22-kacsmar.pdf](https://www.usenix.org/system/files/sec22-kacsmar.pdf)
## Neither Access nor Control: A Longitudinal Investigation of the Efficacy of User Access-Control Solutions on Smartphones.
### Authors
* Masoud Mehrabi Koushki, University of British Columbia
* Yue Huang, University of British Columbia
* Julia Rubin, University of British Columbia
* Konstantin Beznosov, University of British Columbia
### Abstract
> The incumbent all-or-nothing model of access control on smartphones has been known to dissatisfy users, due to high overhead (both cognitive and physical) and lack of device-sharing support. Several alternative models have been proposed. However, their efficacy has not been evaluated and compared empirically, due to a lack of detailed quantitative data on users' authorization needs. This paper bridges this gap with a 30-day diary study. We probed a near-representative sample (N = 55) of US smartphone users to gather a comprehensive list of tasks they perform on their phones and their authorization needs for each task. Using this data, we quantify, for the first time, the efficacy of the all-or-nothing model, demonstrating frequent unnecessary or missed interventions (false positive rate (FPR) = 90%, false negative rate (FNR) = 21%). In comparison, we show that app- or task-level models can improve the FPR up to 88% and the FNR up to 20%, albeit with a modest (up to 15%) increase in required upfront configuration. We also demonstrate that the context in which phone sharing happens is consistent up to 75% of the time, showing promise for context-based solutions.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/koushki](https://www.usenix.org/conference/usenixsecurity22/presentation/koushki)
- **PDF:** [https://www.usenix.org/system/files/sec22-koushki.pdf](https://www.usenix.org/system/files/sec22-koushki.pdf)
## Jenny: Securing Syscalls for PKU-based Memory Isolation Systems.
### Authors
* David Schrammel, Graz University of Technology
* Samuel Weiser, Graz University of Technology
* Richard Sadek, Graz University of Technology
* Stefan Mangard, Graz University of Technology
### Abstract
> Effective syscall filtering is a key component for withstanding the numerous exploitation techniques and privilege escalation attacks we face today. For example, modern browsers use sandboxing techniques with syscall filtering in order to isolate critical code. Cloud computing heavily uses containers, which virtualize the syscall interface. Recently, cloud providers are switching to in-process containers for performance reasons, calling for better isolation primitives. A new isolation primitive that has the potential to fill this gap is called Protection Keys for Userspace (PKU). Unfortunately, prior research highlights severe deficiencies in how PKU-based systems manage syscalls, questioning their security and practicability.In this work, we comprehensively investigate syscall filtering for PKU-based memory isolation systems. First, we identify new syscall-based attacks that can break a PKU sandbox. Second, we derive syscall filter rules necessary for protecting PKU domains and show efficient ways of enforcing them. Third, we do a comparative study on different syscall interposition techniques with respect to their suitability for PKU, which allows us to design a secure syscall interposition technique that is both fast and flexible.We design and prototype Jenny– a PKU-based memory isolation system that provides powerful syscall filtering capabilities in userspace. Jenny supports various interposition techniques (e.g., seccomp and ptrace), and allows for domain-specific syscall filtering in a nested way. Furthermore, it handles asynchronous signals securely. Our evaluation shows a minor performance impact of 0–5% for nginx.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/schrammel](https://www.usenix.org/conference/usenixsecurity22/presentation/schrammel)
- **PDF:** [https://www.usenix.org/system/files/sec22-schrammel.pdf](https://www.usenix.org/system/files/sec22-schrammel.pdf)
## Physical-Layer Attacks Against Pulse Width Modulation-Controlled Actuators.
### Authors
* Gökçen Yılmaz Dayanıklı, Qualcomm
* Sourav Sinha, Virginia Tech
* Devaprakash Muniraj, IIT Madras
* Ryan M. Gerdes, Virginia Tech
* Mazen Farhood, Virginia Tech
* Mani Mina, Iowa State University
### Abstract
> Cyber-physical systems (CPS) consist of integrated computational and physical components. The dynamics of physical components (e.g., a robot arm) are controlled by actuators via actuation signals. In this work, we analyze the extent to which intentional electromagnetic interference (IEMI) allows an attacker to alter the actuation signal to jam or control a class of widely used actuators: those that use pulse width modulation (PWM) to encode actuation data (e.g., rotation angle or speed). A theory of False Actuation Injection (FAI) is developed and experimentally validated with IEMI waveforms of certain frequencies and modulations.Specifically, three attack waveforms, denoted as Block, Block & Rotate, and Full Control, are described that can be utilized by an attacker to block (denial of service) or alter the actuation data encoded in the PWM signal sent by an actuator's legitimate controller. The efficacy of the attack waveforms is evaluated against several PWM-controlled actuators, and it is observed that an attacker can implement denial-of-service attacks on all the tested actuators with Block waveform. Additionally, attackers can take control of servo motors from specific manufacturers (Futaba and HiTec) with reported Block & Rotate, and Full Control waveforms. A coupling model between the attack apparatus and victim PWM-based control system is presented to show that the attacker can utilize magnetic, resonant coupling to mount attacks at an appreciable distance. Indoor and in-flight attacks are demonstrated on the actuators of an unmanned aerial vehicle (UAV), the effects of which are shown to seriously impact the safe operation of said UAV, e.g., change in the flight trajectory. Additionally, the denial of service attacks are demonstrated on other actuators such as DC motors, the rotational speed of which is controlled with PWM, and possible countermeasures (such as optical actuation data transmission) are discussed.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/dayanikli](https://www.usenix.org/conference/usenixsecurity22/presentation/dayanikli)
- **PDF:** [https://www.usenix.org/system/files/sec22-dayanikli.pdf](https://www.usenix.org/system/files/sec22-dayanikli.pdf)
## Branch History Injection: On the Effectiveness of Hardware Mitigations Against Cross-Privilege Spectre-v2 Attacks.
### Authors
* Enrico Barberis, Vrije Universiteit Amsterdam
* Pietro Frigo, Vrije Universiteit Amsterdam
* Marius Muench, Vrije Universiteit Amsterdam
* Herbert Bos, Vrije Universiteit Amsterdam
* Cristiano Giuffrida, Vrije Universiteit Amsterdam
### Abstract
> Branch Target Injection (BTI or Spectre v2) is one of the most dangerous transient execution vulnerabilities, as it allows an attacker to abuse indirect branch mispredictions to leak sensitive information. Unfortunately, it also has proven difficult to mitigate, with vendors originally resorting to inefficient software mitigations like retpoline. Recently, efficient hardware mitigations such as Intel eIBRS and Arm CSV2 have been deployed as a replacement in production, isolating the branch target state across privilege domains. The assumption is that this is sufficient to deter practical BTI exploitation. In this paper, we challenge this belief and disclose fundamental design flaws in both Intel and Arm solutions.We introduce Branch History Injection (BHI or Spectre-BHB), a new primitive to build cross-privilege BTI attacks on systems deploying isolation-based hardware defenses. BHI builds on the observation that, while the branch target state is now isolated across privilege domains, such isolation is not extended to other branch predictor elements tracking the branch history state—ultimately re-enabling cross-privilege attacks. We further analyze the guarantees of a hypothetical isolation-based mitigation which also isolates the branch history and show that, barring a collision-free design, practical same-predictor-mode attacks are still possible. To instantiate our approach, we present end-to-end exploits leaking kernel memory from userland on Intel systems at 160 bytes/s, in spite of existing or hypothetical isolation-based mitigations. We conclude software defenses such as retpoline remain the only practical BTI mitigations in the foreseeable future and the pursuit for efficient hardware mitigations must continue.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/barberis](https://www.usenix.org/conference/usenixsecurity22/presentation/barberis)
- **PDF:** [https://www.usenix.org/system/files/sec22-barberis.pdf](https://www.usenix.org/system/files/sec22-barberis.pdf)
## TLB;DR: Enhancing TLB-based Attacks with TLB Desynchronized Reverse Engineering.
### Authors
* Andrei Tatar, Vrije Universiteit, Amsterdam
* Daniël Trujillo, Vrije Universiteit, Amsterdam, and ETH Zurich
* Cristiano Giuffrida, Vrije Universiteit, Amsterdam
* Herbert Bos, Vrije Universiteit, Amsterdam
### Abstract
> Translation Lookaside Buffers, or TLBs, play a vital role in recent microarchitectural attacks. However, unlike CPU caches, we know very little about the exact operation of these essential microarchitectural components. In this paper, we introduce TLB desynchronization as a novel technique for reverse engineering TLB behavior from software. Unlike previous efforts that rely on timing or performance counters, our technique relies on fundamental properties of TLBs, enabling precise and fine-grained experiments. We use desynchronization to shed new light on TLB behavior, examining previously undocumented features such as replacement policies and handling of PCIDs on commodity Intel processors. We also show that such knowledge allows for more and better attacks.Our results reveal a novel replacement policy on the L2 TLB of modern Intel CPUs as well as behavior indicative of a PCID cache. We use our new insights to design adversarial access patterns that massage the TLB state into evicting a target entry in the minimum number of steps, then examine their impact on several classes of prior TLB-based attacks. Our findings enable practical side channels à la TLBleed over L2, with much finer spatial discrimination and at a sampling rate comparable to L1, as well as an even finer-grained variant that targets both levels. We also show substantial speed gains for other classes of attacks that rely on TLB eviction.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/tatar](https://www.usenix.org/conference/usenixsecurity22/presentation/tatar)
- **PDF:** [https://www.usenix.org/system/files/sec22-tatar.pdf](https://www.usenix.org/system/files/sec22-tatar.pdf)
## FuzzOrigin: Detecting UXSS vulnerabilities in Browsers through Origin Fuzzing.
### Authors
* Sunwoo Kim, Samsung Research
* Young Min Kim, Seoul National University
* Jaewon Hur, Seoul National University
* Suhwan Song, Seoul National University
* Gwangmu Lee, EPFL
* Byoungyoung Lee, Seoul National University
### Abstract
> Universal cross-site scripting (UXSS) is a browser vulnerability, making a vulnerable browser execute an attacker's script on any web pages loaded by the browser. UXSS is considered a far more severe vulnerability than well-studied cross-site scripting (XSS). This is because the impact of UXSS is not limited to a web application, but it impacts each and every web application as long as a victim user runs a vulnerable browser. We find that UXSS vulnerabilities are difficult to find, especially through fuzzing, for the following two reasons. First, it is challenging to detect UXSS because it is a semantic vulnerability. In order to detect UXSS, one needs to understand the complex interaction semantics between web pages. Second, it is difficult to generate HTML inputs that trigger UXSS since one needs to drive the browser to perform complex interactions and navigations.This paper proposes FuzzOrigin, a browser fuzzer designed to detect UXSS vulnerabilities. FuzzOrigin addresses the above two challenges by (i) designing an origin sanitizer with a static origin tagging mechanism and (ii) prioritizing origin-update operations through generating chained-navigation operations handling dedicated events. We implemented FuzzOrigin, which works with most modern browsers, including Chrome, Firefox, Edge, and Safari. During the evaluation, FuzzOrigin discovered four previously unknown UXSS vulnerabilities, one in Chrome and three in Firefox, all of which have been confirmed by the vendors. FuzzOrigin is responsible for finding one out of two UXSS vulnerabilities in Chrome reported in 2021 and all three in Firefox, highlighting its strong effectiveness in finding new UXSS vulnerabilities.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/kim](https://www.usenix.org/conference/usenixsecurity22/presentation/kim)
- **PDF:** [https://www.usenix.org/system/files/sec22-kim.pdf](https://www.usenix.org/system/files/sec22-kim.pdf)
## BrakTooth: Causing Havoc on Bluetooth Link Manager via Directed Fuzzing.
### Authors
* Matheus E. Garbelini, Singapore University of Technology and Design
* Vaibhav Bedi, Singapore University of Technology and Design
* Sudipta Chattopadhyay, Singapore University of Technology and Design
* Sumei Sun, Institute for Infocomm Research, A*Star
* Ernest Kurniawan, Institute for Infocomm Research, A*Star
### Abstract
> In this paper we propose, design and evaluate a systematic directed fuzzing framework to automatically discover implementation bugs in arbitrary Bluetooth Classic (BT) devices. The core of our fuzzer is the first over-the-air approach that takes full control of the BT controller baseband from the host. This enables us to intercept and modify arbitrary packets, as well as to inject packets out-of-order in lower layers of closed-source BT stack, i.e., Link Manager Protocol (LMP) and Baseband. To systematically guide our fuzzing process, we propose an extensible and novel rule-based approach to automatically construct the protocol state machine during normal over-the-air communication. In particular, by writing a simple set of rules to identify protocol messages, we can dynamically construct an abstracted protocol state machine, fuzz packets resulting from a state and validate responses from target devices. As of today, we have fuzzed 13 BT devices from 11 vendors and we have discovered a total of 18 unknown implementation flaws, with 24 common vulnerability exposures (CVEs) assigned. Furthermore, our discoveries were awarded with six bug bounties from certain vendors. Finally, to show the broader applicability of our framework beyond BT, we have extended our approach to fuzz other wireless protocols, which additionally revealed 6 unknown bugs in certain Wi-Fi and BLE Host stacks.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/garbelini](https://www.usenix.org/conference/usenixsecurity22/presentation/garbelini)
- **PDF:** [https://www.usenix.org/system/files/sec22-garbelini.pdf](https://www.usenix.org/system/files/sec22-garbelini.pdf)
## AmpFuzz: Fuzzing for Amplification DDoS Vulnerabilities.
### Authors
* Johannes Krupp, CISPA Helmholtz Center for Information Security
* Ilya Grishchenko, University of California, Santa Barbara
* Christian Rossow, CISPA Helmholtz Center for Information Security
### Abstract
> Amplification DDoS attacks remain a prevalent and serious threat to the Internet, with recent attacks reaching the Tbps range. However, all amplification attack vectors known to date were either found by researchers through laborious manual analysis or could only be identified postmortem following large attacks. Ideally though, an attack vector is discovered and mitigated before the first attack can occur.To this end, we present AmpFuzz, the first systematic approach to find amplification vectors in UDP services in a protocol-agnostic way. AmpFuzz is based on the state-of-the-art greybox fuzzing boosted by a novel technique to make fuzzing UDP-aware, which significantly increases performance. We evaluate AmpFuzz on 28 Debian network services, where we (re-)discover 7 known and 6 previously unreported amplification vulnerabilities.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/krupp](https://www.usenix.org/conference/usenixsecurity22/presentation/krupp)
- **PDF:** [https://www.usenix.org/system/files/sec22-krupp.pdf](https://www.usenix.org/system/files/sec22-krupp.pdf)
## FRAMESHIFTER: Security Implications of HTTP/2-to-HTTP/1 Conversion Anomalies.
### Authors
* Bahruz Jabiyev, Northeastern University
* Steven Sprecher, Northeastern University
* Anthony Gavazzi, Northeastern University
* Tommaso Innocenti, Northeastern University
* Kaan Onarlioglu, Akamai Technologies
* Engin Kirda, Northeastern University
### Abstract
> HTTP/2 adoption is rapidly climbing. However, in practice, Internet communications still rarely happen over end-to-end HTTP/2 channels. This is due to Content Delivery Networks and other reverse proxies, ubiquitous and necessary components of the Internet ecosystem, which only support HTTP/2 on the client's end, but not the forward connection to the origin server. Instead, proxy technologies predominantly rely on HTTP/2-to-HTTP/1 protocol conversion between the two legs of the connection.We present the first systematic exploration of HTTP/2-to-HTTP/1 protocol conversion anomalies and their security implications. We develop a novel grammar-based fuzzer for HTTP/2, experiment with 12 popular reverse proxy technologies & CDNs through HTTP/2 frame sequence and content manipulation, and discover a plethora of novel web application attack vectors that lead to Request Blackholing, Denial-of-Service, Query-of-Death, and Request Smuggling attacks.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/jabiyev](https://www.usenix.org/conference/usenixsecurity22/presentation/jabiyev)
- **PDF:** [https://www.usenix.org/system/files/sec22-jabiyev.pdf](https://www.usenix.org/system/files/sec22-jabiyev.pdf)
## Your Microphone Array Retains Your Identity: A Robust Voice Liveness Detection System for Smart Speakers.
### Authors
* Yan Meng, Shanghai Jiao Tong University
* Jiachun Li, Shanghai Jiao Tong University
* Matthew Pillari, University of Virginia
* Arjun Deopujari, University of Virginia
* Liam Brennan, University of Virginia
* Hafsah Shamsie, University of Virginia
* Haojin Zhu, Shanghai Jiao Tong University
* Yuan Tian, University of Virginia
### Abstract
> Though playing an essential role in smart home systems, smart speakers are vulnerable to voice spoofing attacks. Passive liveness detection, which utilizes only the collected audio rather than the deployed sensors to distinguish between live-human and replayed voices, has drawn increasing attention. However, it faces the challenge of performance degradation under the different environmental factors as well as the strict requirement of the fixed user gestures.In this study, we propose a novel liveness feature, array fingerprint, which utilizes the microphone array inherently adopted by the smart speaker to determine the identity of collected audios. Our theoretical analysis demonstrates that by leveraging the circular layout of microphones, compared with existing schemes, array fingerprint achieves a more robust performance under the environmental change and user's movement. Then, to leverage such a fingerprint, we propose ARRAYID, a lightweight passive detection scheme, and elaborate a series of features working together with array fingerprint. Our evaluation on the dataset containing 32,780 audio samples and 14 spoofing devices shows that ARRAYID achieves an accuracy of 99.84%, which is superior to existing passive liveness detection schemes.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/meng](https://www.usenix.org/conference/usenixsecurity22/presentation/meng)
- **PDF:** [https://www.usenix.org/system/files/sec22-meng.pdf](https://www.usenix.org/system/files/sec22-meng.pdf)
## Lumos: Identifying and Localizing Diverse Hidden IoT Devices in an Unfamiliar Environment.
### Authors
* Rahul An, Carnegie Mellon University
* Sharma, Carnegie Mellon University
* Elahe Soltanaghaei, Carnegie Mellon University
* Anthony Rowe, Carnegie Mellon University
* Vyas Sekar, Carnegie Mellon University
### Abstract
> Hidden IoT devices are increasingly being used to snoop on users in hotel rooms or AirBnBs. We envision empowering users entering such unfamiliar environments to identify and locate (e.g., hidden camera behind plants) diverse hidden devices (e.g., cameras, microphones, speakers) using only their personal handhelds.What makes this challenging is the limited network visibility and physical access that a user has in such unfamiliar environments, coupled with the lack of specialized equipment.This paper presents Lumos, a system that runs on commodity user devices (e.g., phone, laptop) and enables users to identify and locate WiFi-connected hidden IoT devices and visualize their presence using an augmented reality interface. Lumos addresses key challenges in: (1) identifying diverse devices using only coarse-grained wireless layer features, without IP/DNS layer information and without knowledge of the WiFi channel assignments of the hidden devices; and (2) locating the identified IoT devices with respect to the user using only phone sensors and wireless signal strength measurements. We evaluated Lumos across 44 different IoT devices spanning various types, models, and brands across six different environments. Our results show that Lumos can identify hidden devices with 95% accuracy and locate them with a median error of 1.5m within 30 minutes in a two-bedroom, 1000 sq. ft. apartment.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/sharma-rahul](https://www.usenix.org/conference/usenixsecurity22/presentation/sharma-rahul)
- **PDF:** [https://www.usenix.org/system/files/sec22-sharma-rahul.pdf](https://www.usenix.org/system/files/sec22-sharma-rahul.pdf)
## SkillDetective: Automated Policy-Violation Detection of Voice Assistant Applications in the Wild.
### Authors
* Jeffrey Young, Clemson University
* Song Liao, Clemson University
* Long Cheng, Clemson University
* Hongxin Hu, University at Buffalo
* Huixing Deng, Clemson University
### Abstract
> Today's voice personal assistant (VPA) services have been largely expanded by allowing third-party developers to build voice-apps and publish them to marketplaces (e.g., the Amazon Alexa and Google Assistant platforms). In an effort to thwart unscrupulous developers, VPA platform providers have specified a set of policy requirements to be adhered to by third-party developers, e.g., personal data collection is not allowed for kid-directed voice-apps. In this work, we aim to identify policy-violating voice-apps in current VPA platforms through a comprehensive dynamic analysis of voice-apps. To this end, we design and develop SkillDetective , an interactive testing tool capable of exploring voice-apps' behaviors and identifying policy violations in an automated manner. Distinctive from prior works, SkillDetective evaluates voice-apps' conformity to 52 different policy requirements in a broader context from multiple sources including textual, image and audio files. With SkillDetective , we tested 54,055 Amazon Alexa skills and 5,583 Google Assistant actions, and collected 518,385 textual outputs, approximately 2,070 unique audio files and 31,100 unique images from voice-app interactions. We identified 6,079 skills and 175 actions violating at least one policy requirement.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/young](https://www.usenix.org/conference/usenixsecurity22/presentation/young)
- **PDF:** [https://www.usenix.org/system/files/sec22-young.pdf](https://www.usenix.org/system/files/sec22-young.pdf)
## "OK, Siri" or "Hey, Google": Evaluating Voiceprint Distinctiveness via Content-based PROLE Score.
### Authors
* Ruiwen He, Zhejiang University
* Xiaoyu Ji, Zhejiang University
* Xinfeng Li, Zhejiang University
* Yushi Cheng, Tsinghua University
* Wenyuan Xu, Zhejiang University
### Abstract
> A voiceprint is the distinctive pattern of human voices that is spectrographically produced and has been widely used for authentication in the voice assistants. This paper investigates the impact of speech contents on the distinctiveness of voiceprint, and has obtained answers to three questions  by studying 2457 speakers and 14,600,000 test samples:  1) What are the influential factors that determine the distinctiveness of voiceprints? 2) How to quantify the distinctiveness of voiceprints for given words, e.g., wake-up words in commercial voice assistants? 3) How to construct wake-up words whose voiceprints have high distinctiveness levels. To answer those questions, we break down voiceprint into phones, and experimentally obtain the correlation between the false recognition rates and the richness of the phone types, the order, the length, and the elements of the phones. Then, we define PROLE Score that can be easily calculated based on speech content yet can reflect the voice distinctiveness. Under the guidance of PROLE Score, we tested 30 wake-up words of 19 commercial voice assistant products, e.g., "Hey, Siri'', "OK, Google'' and "Nihao, Xiaona'' in both English and Chinese. Finally, we provide recommendations for both users and manufacturers, on selecting secure voiceprint words.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/he-ruiwen](https://www.usenix.org/conference/usenixsecurity22/presentation/he-ruiwen)
- **PDF:** [https://www.usenix.org/system/files/sec22-he-ruiwen.pdf](https://www.usenix.org/system/files/sec22-he-ruiwen.pdf)
## Helping hands: Measuring the impact of a large threat intelligence sharing community.
### Authors
* X, Delft University of Technology
* er Bouwman, Delft University of Technology
* Victor Le Pochat, imec-DistriNet, KU Leuven
* Pawel Foremski, Farsight Security, Inc. / IITiS PAN
* Tom Van Goethem, imec-DistriNet, KU Leuven
* Carlos H. Gañán, Delft University of Technology and ICANN
* Giovane C. M. Moura, SIDN Labs
* Samaneh Tajalizadehkhoob, ICANN
* Wouter Joosen, imec-DistriNet, KU Leuven
* Michel van Eeten, Delft University of Technology
### Abstract
> We tracked the largest volunteer security information sharing community known to date: the COVID-19 Cyber Threat Coalition, with over 4,000 members. This enabled us to address long-standing questions on threat information sharing. First, does collaboration at scale lead to better coverage? And second, does making threat data freely available improve the ability of defenders to act? We found that the CTC mostly aggregated existing industry sources of threat information. User-submitted domains often did not make it to the CTC's blocklist as a result of the high threshold posed by its automated quality assurance using VirusTotal. Although this ensured a low false positive rate, it also caused the focus of the blocklist to drift away from domains related to COVID-19 (1.4%-3.6%) to more generic abuse, such as phishing, for which established mitigation mechanisms already exist. However, in the slice of data that was related to COVID-19, we found promising evidence of the added value of a community like the CTC: just 25.1% of these domains were known to existing abuse detection infrastructures at time of listing, as compared to 58.4% of domains on the overall blocklist. From the unique experiment that the CTC represented, we draw three lessons for future threat data sharing initiatives.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/bouwman](https://www.usenix.org/conference/usenixsecurity22/presentation/bouwman)
- **PDF:** [https://www.usenix.org/system/files/sec22-bouwman.pdf](https://www.usenix.org/system/files/sec22-bouwman.pdf)
## A Large-scale Temporal Measurement of Android Malicious Apps: Persistence, Migration, and Lessons Learned.
### Authors
* Yun Shen, Norton Research Group
* Pierre-Antoine Vervier, Norton Research Group
* Gianluca Stringhini, Boston University
### Abstract
> We study the temporal dynamics of potentially harmful apps (PHAs) on Android by leveraging 8.8M daily on-device detections collected among 11.7M customers of a popular mobile security product between 2019 and 2020. We show that the current security model of Android, which limits security products to run as regular apps and prevents them from automatically removing malicious apps opens a significant window of opportunity for attackers. Such apps warn users about the newly discovered threats, but users do not promptly act on this information, allowing PHAs to persist on their device for an average of 24 days after they are detected. We also find that while app markets remove PHAs after these become known, there is a significant delay between when PHAs are identified and when they are removed: PHAs persist on Google Play for 77 days on average and 34 days on third party marketplaces. Finally, we find evidence of PHAs migrating to other marketplaces after being removed on the original one. This paper provides an unprecedented view of the Android PHA landscape, showing that current defenses against PHAs on Android are not as effective as commonly thought, and identifying multiple research directions that the security community should pursue, from orchestrating more effective PHA takedowns to devising better alerts for mobile security products.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/shen-yun](https://www.usenix.org/conference/usenixsecurity22/presentation/shen-yun)
- **PDF:** [https://www.usenix.org/system/files/sec22-shen-yun.pdf](https://www.usenix.org/system/files/sec22-shen-yun.pdf)
## A Large-scale and Longitudinal Measurement Study of DKIM Deployment.
### Authors
* Chuhan Wang, Tsinghua University
* Kaiwen Shen, Tsinghua University
* Minglei Guo, Tsinghua University
* Yuxuan Zhao, North China Institute of Computing Technology
* Mingming Zhang, Tsinghua University
* Jianjun Chen, Tsinghua University
* Baojun Liu, Tsinghua University
* Xiaofeng Zheng, Tsinghua University and Qi An Xin Technology Research Institute
* Haixin Duan, Tsinghua University and Qi An Xin Technology Research Institute
* Yanzhong Lin, Coremail Technology Co. Ltd
* Qingfeng Pan, Coremail Technology Co. Ltd
### Abstract
> DomainKeys Identified Mail (DKIM) is an email authentication protocol to protect the integrity of email contents. It has been proposed and standardized for over a decade and adopted by Yahoo!, Google, and other leading email service providers. However, little has been done to understand the adoption rate and potential security issues of DKIM due to the challenges of measuring DKIM deployment at scale.In this paper, we provide a large-scale and longitudinal measurement study on how well DKIM is deployed and managed. Our study was made possible by a broad collection of datasets, including 9.5 million DKIM records from passive DNS datasets over five years and 460 million DKIM signatures from real-world email headers. Moreover, we conduct an active measurement on Alexa Top 1 million domains. Our measurement results show that 28.1% of Alexa Top 1 million domains have enabled DKIM, of which 2.9% are misconfigured. We demonstrate that the issues of DKIM key management and DKIM signatures are prevalent in the real world, even for well-known email providers (e.g., Gmail and Mail.ru). We recommend the security community should pay more attention to the systemic problems of DKIM deployment and mitigate these issues from the perspective of protocol design.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/wang-chuhan](https://www.usenix.org/conference/usenixsecurity22/presentation/wang-chuhan)
- **PDF:** [https://www.usenix.org/system/files/sec22-wang-chuhan.pdf](https://www.usenix.org/system/files/sec22-wang-chuhan.pdf)
## A Large-scale Investigation into Geodifferences in Mobile Apps.
### Authors
* Renuka Kumar, University of Michigan
* Apurva Virkud, University of Michigan
* Ram Sundara Raman, University of Michigan
* Atul Prakash, University of Michigan
* Roya Ensafi, University of Michigan
### Abstract
> Recent studies on the web ecosystem have been raising alarms on the increasing geodifferences in access to Internet content and services due to Internet censorship and geoblocking. However, geodifferences in the mobile app ecosystem have received limited attention, even though apps are central to how mobile users communicate and consume Internet content. We present the first large-scale measurement study of geodifferences in the mobile app ecosystem. We design a semi-automatic, parallel measurement testbed that we use to collect 5,684 popular apps from Google Play in 26 countries. In all, we collected 117,233 apk files and 112,607 privacy policies for those apps. Our results show high amounts of geoblocking with 3,672  apps geoblocked in at least one of our countries. While our data corroborates anecdotal evidence of takedowns due to government requests, unlike common perception, we find that blocking by developers is significantly higher than takedowns in all our countries, and has the most influence on geoblocking in the mobile app ecosystem. We also find instances of developers releasing different app versions to different countries, some with weaker security settings or privacy disclosures that expose users to higher security and privacy risks. We provide recommendations for app market proprietors to address the issues discovered.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/kumar](https://www.usenix.org/conference/usenixsecurity22/presentation/kumar)
- **PDF:** [https://www.usenix.org/system/files/sec22-kumar.pdf](https://www.usenix.org/system/files/sec22-kumar.pdf)
## Morphuzz: Bending (Input) Space to Fuzz Virtual Devices.
### Authors
* Alex, Boston University and Red Hat
* er Bulekov, Boston University and Red Hat
* B, Red Hat
* an Das, Red Hat
* Stefan Hajnoczi, Red Hat
* Manuel Egele, Boston University
### Abstract
> The security of the entire cloud ecosystem crucially depends on the isolation guarantees that hypervisors provide between guest VMs and the host system. To allow VMs to communicate with their environment, hypervisors provide a slew of virtual-devices including network interface cards and performance-optimized VIRTIO-based SCSI adapters. As these devices sit directly on the hypervisor's isolation boundary and accept potentially attacker controlled input (e.g., from a malicious cloud tenant), bugs and vulnerabilities in the devices' implementations have the potential to render the hypervisor's isolation guarantees moot. Prior works applied fuzzing to simple virtual-devices, focusing on a narrow subset of the vast input-space and the state-of-the-art virtual-device fuzzer, Nyx, requires precise, manually-written, specifications to exercise complex devices.In this paper we present MORPHUZZ, a generic approach that leverages insights about hypervisor design combined with coverage-guided fuzzing to find bugs in virtual device implementations. Crucially MORPHUZZ does not rely on expert knowledge specific to each device. MORPHUZZ is the first approach that automatically elicits the complex I/O behaviors of the real-world virtual devices found in modern clouds. To demonstrate this capability, we implemented MORPHUZZ in QEMU and bhyve and fuzzed 33 different virtual devices (a superset of the 16 devices analyzed by prior work). Additionally, we show that MORPHUZZ is not tied to a specific CPU architecture, by fuzzing 3 additional ARM devices. MORPHUZZ matches or exceeds coverage obtained by Nyx, for 13/16 virtual devices, and identified a superset (110) of all crashes reported by Nyx (44). We reported all newly discovered bugs to the respective developers. Notably, MORPHUZZ achieves this without initial seed-inputs, or expert guidance.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/bulekov](https://www.usenix.org/conference/usenixsecurity22/presentation/bulekov)
- **PDF:** [https://www.usenix.org/system/files/sec22-bulekov.pdf](https://www.usenix.org/system/files/sec22-bulekov.pdf)
## Fuzzware: Using Precise MMIO Modeling for Effective Firmware Fuzzing.
### Authors
* Tobias Scharnowski, Ruhr-Universität Bochum
* Nils Bars, Ruhr-Universität Bochum
* Moritz Schloegel, Ruhr-Universität Bochum
* Eric Gustafson, UC Santa Barbara
* Marius Muench, Vrije Universiteit Amsterdam
* Giovanni Vigna, UC Santa Barbara and VMware
* Christopher Kruegel, UC Santa Barbara
* Thorsten Holz, Ruhr-Universität Bochum
* Ali Abbasi, Ruhr-Universität Bochum
### Abstract
> As embedded devices are becoming more pervasive in our everyday lives, they turn into an attractive target for adversaries. Despite their high value and large attack surface, applying automated testing techniques such as fuzzing is not straightforward for such devices. As fuzz testing firmware on constrained embedded devices is inefficient, state-of-the-art approaches instead opt to run the firmware in an emulator (through a process called re-hosting). However, existing approaches either use coarse-grained static models of hardware behavior or require manual effort to re-host the firmware. We propose a novel combination of lightweight program analysis, re-hosting, and fuzz testing to tackle these challenges. We present the design and implementation of Fuzzware, a software-only system to fuzz test unmodified monolithic firmware in a scalable way. By determining how hardware-generated values are actually used by the firmware logic, Fuzzware can automatically generate models that help focusing the fuzzing process on mutating the inputs that matter, which drastically improves its effectiveness. We evaluate our approach on synthetic and real-world targets comprising a total of 19 hardware platforms and 77 firmware images. Compared to state-of-the-art work, Fuzzware achieves up to 3.25 times the code coverage and our modeling approach reduces the size of the input space by up to 95.5%. The synthetic samples contain 66 unit tests for various hardware interactions, and we find that our approach is the first generic re-hosting solution to automatically pass all of them. Fuzzware discovered 15 completely new bugs including bugs in targets which were previously analyzed by other works; a total of 12 CVEs were assigned.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/scharnowski](https://www.usenix.org/conference/usenixsecurity22/presentation/scharnowski)
- **PDF:** [https://www.usenix.org/system/files/sec22-scharnowski.pdf](https://www.usenix.org/system/files/sec22-scharnowski.pdf)
## MundoFuzz: Hypervisor Fuzzing with Statistical Coverage Testing and Grammar Inference.
### Authors
* Cheolwoo Myung, Seoul National University
* Gwangmu Lee, Seoul National University
* Byoungyoung Lee, Seoul National University
### Abstract
> A hypervisor is system software, managing and running virtual machines. Since the hypervisor is placed at the lowestlevel in the typical systems software stack, it has critical security implications. Once compromised, the entire software components running on top of the hypervisor (including all guest virtual machines and applications running within each guest virtual machine) are compromised as well, as the hypervisor has all the privileges to access those.This paper proposes MUNDOFUZZ, a hypervisor fuzzer to enable both coverage-guided and grammar-aware fuzzing. We find that the coverage measurement in hypervisors suffers from noises due to the hypervisor's asynchronous system event handling. In order to filter out such noises, MUNDOFUZZ develops a statistical differential coverage measurement methods, allowing MUNDOFUZZ to capture the clean coverage information for hypervisor inputs. Moreover, we observe that hypervisor inputs have complex input grammars because it supports many different devices and each device has its own input format. Thus, MUNDOFUZZ learns the input grammar through inspecting the coverage characteristics of the given hypervisor input, which is based on the idea that the hypervisor behaves in a different way if the grammatically correct (or incorrect) input is given. We evaluated MUNDOFUZZ with popular hypervisors, QEMU and Bhyve, and MUNDOFUZZ outperformed other state-of-the-art hypervisor fuzzers ranging from 4.91% to 6.60% in terms of coverage. More importantly, MUNDOFUZZ identified 40 previously unknown bugs (including 9 CVEs), demonstrating its strong practical effectiveness in finding real-world hypervisor vulnerabilities.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/myung](https://www.usenix.org/conference/usenixsecurity22/presentation/myung)
- **PDF:** [https://www.usenix.org/system/files/sec22-myung.pdf](https://www.usenix.org/system/files/sec22-myung.pdf)
## Drifuzz: Harvesting Bugs in Device Drivers from Golden Seeds.
### Authors
* Zekun Shen, NYU
* Ritik Roongta, NYU
* Brendan Dolan-Gavitt, NYU
### Abstract
> Peripheral hardware in modern computers is typically assumed to be secure and not malicious, and device drivers are implemented in a way that trusts inputs from hardware. However, recent vulnerabilities such as Broadpwn have demonstrated that attackers can exploit hosts through vulnerable peripherals, highlighting the importance of securing the OS-peripheral boundary. In this paper, we propose a hardware-free concolic-augmented fuzzer targeting WiFi and Ethernet drivers, and a technique for generating high-quality initial seeds, which we call golden seeds, that allow fuzzing to bypass difficult code constructs during driver initialization. Compared to prior work using symbolic execution or greybox fuzzing, Drifuzz is more successful at automatically finding inputs that allow network interfaces to be fully initialized, and improves fuzzing coverage by 214% (3.1×) in WiFi drivers and 60% (1.6×) for Ethernet drivers. During our experiments with fourteen PCI and USB network drivers, we find twelve previously unknown bugs, two of which were assigned CVEs.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/shen-zekun](https://www.usenix.org/conference/usenixsecurity22/presentation/shen-zekun)
- **PDF:** [https://www.usenix.org/system/files/sec22-shen-zekun.pdf](https://www.usenix.org/system/files/sec22-shen-zekun.pdf)
## LTrack: Stealthy Tracking of Mobile Phones in LTE.
### Authors
* Martin Kotuliak, ETH Zurich
* Simon Erni, ETH Zurich
* Patrick Leu, ETH Zurich
* Marc Röschlin, ETH Zurich
* Srdjan Čapkun, ETH Zurich
### Abstract
> We introduce LTrack, a new tracking attack on LTE that allows an attacker to stealthily extract user devices' locations and permanent identifiers (IMSI). To remain stealthy, the localization of devices in LTrack is fully passive, relying on our new uplink/downlink sniffer. Our sniffer records both the times of arrival of LTE messages and the contents of the Timing Advance Commands, based on which LTrack calculates locations. LTrack is the first to show the feasibility of a passive localization in LTE through implementation on software-defined radio.Passive localization attacks reveal a user's location traces but can at best link these traces to a device's pseudonymous temporary identifier (TMSI), making tracking in dense areas or over a long time-period challenging. LTrack overcomes this challenge by introducing and implementing a new type of IMSI Catcher named IMSI Extractor. It extracts a device's IMSI and binds it to its current TMSI. Instead of relying on fake base stations like existing IMSI Catchers, which are detectable due to their continuous transmission, IMSI Extractor relies on our uplink/downlink sniffer enhanced with surgical message overshadowing. This makes our IMSI Extractor the stealthiest IMSI Catcher to date.We evaluate LTrack through a series of experiments and show that in line-of-sight conditions, the attacker can estimate the location of a phone with less than 6m error in 90% of the cases. We successfully tested our IMSI Extractor against a set of 17 modern smartphones connected to our industry-grade LTE testbed. We further validated our uplink/downlink sniffer and IMSI Extractor in a test facility of an operator.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/kotuliak](https://www.usenix.org/conference/usenixsecurity22/presentation/kotuliak)
- **PDF:** [https://www.usenix.org/system/files/sec22-kotuliak.pdf](https://www.usenix.org/system/files/sec22-kotuliak.pdf)
## Watching the Watchers: Practical Video Identification Attack in LTE Networks.
### Authors
* Sangwook Bae, Korea Advanced Institute of Science and Technology (KAIST)
* Mincheol Son, Korea Advanced Institute of Science and Technology (KAIST)
* Dongkwan Kim, Korea Advanced Institute of Science and Technology (KAIST)
* CheolJun Park, Korea Advanced Institute of Science and Technology (KAIST)
* Jiho Lee, Korea Advanced Institute of Science and Technology (KAIST)
* Sooel Son, Korea Advanced Institute of Science and Technology (KAIST)
* Yongdae Kim, Korea Advanced Institute of Science and Technology (KAIST)
### Abstract
> A video identification attack is a tangible privacy threat that can reveal videos that victims are watching. In this paper, we present the first study of a video identification attack in Long Term Evolution (LTE) networks. We discovered that, by leveraging broadcast radio signals, an unprivileged adversary equipped with a software-defined radio can 1) identify mobile users who are watching target videos of the adversary's interest and then 2) infer the video title that each of these users is watching. Using 46,810 LTE traces of three video streaming services from three cellular operators, we demonstrate that our attack achieves an accuracy of up to 0.985. We emphasize that this high level of accuracy stems from overcoming the unique challenges related to the operational logic of LTE networks and video streaming systems. Finally, we present an end-to-end attack scenario leveraging the presented video identification attack and propose countermeasures that are readily applicable to current LTE networks.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/bae](https://www.usenix.org/conference/usenixsecurity22/presentation/bae)
- **PDF:** [https://www.usenix.org/system/files/sec22-bae.pdf](https://www.usenix.org/system/files/sec22-bae.pdf)
## DoLTEst: In-depth Downlink Negative Testing Framework for LTE Devices.
### Authors
* CheolJun Park, Korea Advanced Institute of Science and Technology (KAIST)
* Sangwook Bae, Korea Advanced Institute of Science and Technology (KAIST)
* BeomSeok Oh, Korea Advanced Institute of Science and Technology (KAIST)
* Jiho Lee, Korea Advanced Institute of Science and Technology (KAIST)
* Eunkyu Lee, Korea Advanced Institute of Science and Technology (KAIST)
* Insu Yun, Korea Advanced Institute of Science and Technology (KAIST)
* Yongdae Kim, Korea Advanced Institute of Science and Technology (KAIST)
### Abstract
> An implementation flaw in LTE control plane protocols at end-user devices directly leads to severe security threats. In order to uncover these flaws, conducting negative testing is a promising approach, whose test case only contains invalid or prohibited messages. Despite its importance, the cellular standard mostly focuses on positive test cases, producing many implementation vulnerabilities unchecked, as evidenced by many existing vulnerabilities. To fill this gap, we present DOLTEST, a negative testing framework, which can comprehensively test an end-user device. Enumerable test cases with a deterministic oracle produced from detailed specification analysis make it suitable to be used as a standard to find implementation vulnerabilities. We uncovered 26 implementation flaws from 43 devices from 5 different baseband manufacturers by using DOLTEST, demonstrating its effectiveness.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/park-cheoljun](https://www.usenix.org/conference/usenixsecurity22/presentation/park-cheoljun)
- **PDF:** [https://www.usenix.org/system/files/sec22-park-cheoljun.pdf](https://www.usenix.org/system/files/sec22-park-cheoljun.pdf)
## Ghost Peak: Practical Distance Reduction Attacks Against HRP UWB Ranging.
### Authors
* Patrick Leu, ETH Zurich
* Giovanni Camurati, ETH Zurich
* Alex, TU Darmstadt
* er Heinrich, TU Darmstadt
* Marc Roeschlin, ETH Zurich
* Claudio Anliker, ETH Zurich
* Matthias Hollick, TU Darmstadt
* Srdjan Capkun, ETH Zurich
* Jiska Classen, TU Darmstadt
### Abstract
> We present the first over-the-air attack on IEEE 802.15.4z High-Rate Pulse Repetition Frequency (HRP) Ultra-Wide Band (UWB) distance measurement systems. Specifically, we demonstrate a practical distance reduction attack against pairs of Apple U1 chips (embedded in iPhones and AirTags), as well as against U1 chips inter-operating with NXP and Qorvo UWB chips. These chips have been deployed in a wide range of phones and cars to secure car entry and start and are projected for secure contactless payments, home locks, and contact tracing systems. Our attack operates without any knowledge of cryptographic material, results in distance reductions from 12m (actual distance) to 0m (spoofed distance) with attack success probabilities of up to 4%, and requires only an inexpensive (USD 65) off-the-shelf device. Access control can only tolerate sub-second latencies to not inconvenience the user, leaving little margin to perform time-consuming verifications. These distance reductions bring into question the use of UWB HRP in security-critical applications.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/leu](https://www.usenix.org/conference/usenixsecurity22/presentation/leu)
- **PDF:** [https://www.usenix.org/system/files/sec22-leu.pdf](https://www.usenix.org/system/files/sec22-leu.pdf)
## SIMC: ML Inference Secure Against Malicious Clients at Semi-Honest Cost.
### Authors
* Nishanth Ch, Microsoft Research
* ran, Microsoft Research
* Divya Gupta, Microsoft Research
* Sai Lakshmi Bhavana Obbattu, Microsoft Research
* Akash Shah, UCLA
### Abstract
> Secure inference allows a model owner (or, the server) and the input owner (or, the client) to perform inference on machine learning model without revealing their private information to each other. A large body of work has shown efficient cryptographic solutions to this problem through secure 2- party computation. However, they assume that both parties are semi-honest, i.e., follow the protocol specification. Recently, Lehmkuhl et al. showed that malicious clients can extract the whole model of the server using novel model-extraction attacks. To remedy the situation, they introduced the client-malicious threat model and built a secure inference system, MUSE, that provides security guarantees, even when the client is malicious.In this work, we design and build SIMC, a new cryptographic system for secure inference in the client malicious threat model. On secure inference benchmarks considered by MUSE, SIMC has 23 − 29× lesser communication and is up to 11.4× faster than MUSE. SIMC obtains these improvements using a novel protocol for non-linear activation functions (such as ReLU) that has > 28× lesser communication and is up to 43× more performant than MUSE. In fact, SIMC's performance beats the state-of-the-art semi-honest secure inference system!Finally, similar to MUSE, we show how to push the majority of the cryptographic cost of SIMC to an input independent preprocessing phase. While the cost of the online phase of this protocol, SIMC++, is same as that of MUSE, the overall improvements of SIMC translate to similar improvements to the preprocessing phase of MUSE.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/chandran](https://www.usenix.org/conference/usenixsecurity22/presentation/chandran)
- **PDF:** [https://www.usenix.org/system/files/sec22-chandran.pdf](https://www.usenix.org/system/files/sec22-chandran.pdf)
## Efficient Differentially Private Secure Aggregation for Federated Learning via Hardness of Learning with Errors.
### Authors
* Timothy Stevens, University of Vermont
* Christian Skalka, University of Vermont
* Christelle Vincent, University of Vermont
* John Ring, MassMutual
* Samuel Clark, Raytheon
* Joseph Near, University of Vermont
### Abstract
> Federated machine learning leverages edge computing to develop models from network user data, but privacy in federated learning remains a major challenge. Techniques using differential privacy  have been proposed to address this, but bring their own challenges. Many techniques require a trusted third party or else add too much noise to produce useful models. Recent advances in secure aggregation using multiparty computation eliminate the need for a third party, but are computationally expensive especially at scale. We present a new federated learning protocol that leverages a novel differentially private, malicious secure aggregation protocol based on techniques from Learning With Errors. Our protocol outperforms current state-of-the art techniques, and empirical results show that it scales to a large number of parties, with optimal accuracy for any differentially private federated learning scheme.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/stevens](https://www.usenix.org/conference/usenixsecurity22/presentation/stevens)
- **PDF:** [https://www.usenix.org/system/files/sec22-stevens.pdf](https://www.usenix.org/system/files/sec22-stevens.pdf)
## Label Inference Attacks Against Vertical Federated Learning.
### Authors
* Chong Fu, Zhejiang University
* Xuhong Zhang, Binjiang Institute of Zhejiang University
* Shouling Ji, Binjiang Institute of Zhejiang University
* Jinyin Chen, Zhejiang University of Technology
* Jingzheng Wu, Institute of Software, Chinese Academy of Sciences
* Shanqing Guo, Shandong University
* Jun Zhou, Ant Group
* Alex X. Liu, Ant Group
* Ting Wang, Pennsylvania State University
### Abstract
> As the initial variant of federated learning (FL), horizontal federated learning (HFL) applies to the situations where datasets share the same feature space but differ in the sample space, e.g., the collaboration between two regional banks, while trending vertical federated learning (VFL) deals with the cases where datasets share the same sample space but differ in the feature space, e.g., the collaboration between a bank and an e-commerce platform.Although various attacks have been proposed to evaluate the privacy risks of HFL, yet, few studies, if not none, have explored that for VFL. Considering that the typical application scenario of VFL is that a few participants (usually two) collaboratively train a machine learning (ML) model with features distributed among them but labels owned by only one of them, protecting the privacy of the labels owned by one participant should be a fundamental guarantee provided by VFL, as the labels might be highly sensitive, e.g., whether a person has a certain kind of disease. However, we discover that the bottom model structure and the gradient update mechanism of VFL can be exploited by a malicious participant to gain the power to infer the privately owned labels. Worse still, by abusing the bottom model, he/she can even infer labels beyond the training dataset. Based on our findings, we propose a set of novel label inference attacks against VFL. Our experiments show that the proposed attacks achieve an outstanding performance. We further share our insights and discuss possible defenses. Our research can shed light on the hidden privacy risks of VFL and pave the way for new research directions towards more secure VFL.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/fu-chong](https://www.usenix.org/conference/usenixsecurity22/presentation/fu-chong)
- **PDF:** [https://www.usenix.org/system/files/sec22-fu-chong.pdf](https://www.usenix.org/system/files/sec22-fu-chong.pdf)
## FLAME: Taming Backdoors in Federated Learning.
### Authors
* Thien Duc Nguyen, Technical University of Darmstadt
* Phillip Rieger, Technical University of Darmstadt
* Huili Chen, University of California San Diego
* Hossein Yalame, Technical University of Darmstadt
* Helen Möllering, Technical University of Darmstadt
* Hossein Fereidooni, Technical University of Darmstadt
* Samuel Marchal, Aalto University and F-Secure
* Markus Miettinen, Technical University of Darmstadt
* Azalia Mirhoseini, Google
* Shaza Zeitouni, Technical University of Darmstadt
* Farinaz Koushanfar, University of California San Diego
* Ahmad-Reza Sadeghi, Technical University of Darmstadt
* Thomas Schneider, Technical University of Darmstadt
### Abstract
> Federated Learning (FL) is a collaborative machine learning approach allowing participants to jointly train a model without having to share their private, potentially sensitive local datasets with others. Despite its benefits, FL is vulnerable to so-called backdoor attacks, in which an adversary injects manipulated model updates into the federated model aggregation process so that the resulting model will provide targeted false predictions for specific adversary-chosen inputs. Proposed defenses against backdoor attacks based on detecting and filtering out malicious model updates consider only very specific and limited attacker models, whereas defenses based on differential privacy-inspired noise injection significantly deteriorate the benign performance of the aggregated model. To address these deficiencies, we introduce FLAME, a defense framework that estimates the sufficient amount of noise to be injected to ensure the elimination of backdoors. To minimize the required amount of noise, FLAME uses a model clustering and weight clipping approach. This ensures that FLAME can maintain the benign performance of the aggregated model while effectively eliminating adversarial backdoors. Our evaluation of FLAME on several datasets stemming from application areas including image classification, word prediction, and IoT intrusion detection demonstrates that FLAME removes backdoors effectively with a negligible impact on the benign performance of the models.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/nguyen](https://www.usenix.org/conference/usenixsecurity22/presentation/nguyen)
- **PDF:** [https://www.usenix.org/system/files/sec22-nguyen.pdf](https://www.usenix.org/system/files/sec22-nguyen.pdf)
## Mitigating Membership Inference Attacks by Self-Distillation Through a Novel Ensemble Architecture.
### Authors
* Xinyu Tang, Princeton University
* Saeed Mahloujifar, Princeton University
* Liwei Song, Princeton University
* Virat Shejwalkar, University of Massachusetts Amherst
* Milad Nasr, University of Massachusetts Amherst
* Amir Houmansadr, University of Massachusetts Amherst
* Prateek Mittal, Princeton University
### Abstract
> Membership inference attacks are a key measure to evaluate privacy leakage in machine learning (ML) models. It is important to train ML models that have high membership privacy while largely preserving their utility. In this work, we propose a new framework to train privacy-preserving models that induce similar behavior on member and non-member inputs to mitigate membership inference attacks. Our framework, called SELENA, has two major components. The first component and the core of our defense is a novel ensemble architecture for training. This architecture, which we call Split-AI, splits the training data into random subsets, and trains a model on each subset of the data. We use an adaptive inference strategy at test time: our ensemble architecture aggregates the outputs of only those models that did not contain the input sample in their training data. Our second component, Self-Distillation, (self-)distills the training dataset through our Split-AI ensemble, without using any external public datasets. We prove that our Split-AI architecture defends against a family of membership inference attacks, however, our defense does not provide provable guarantees against all possible attackers as opposed to differential privacy. This enables us to improve the utility of models compared to DP. Through extensive experiments on major benchmark datasets we show that SELENA presents a superior trade-off between (empirical) membership privacy and utility compared to the state of the art empirical privacy defenses. In particular, SELENA incurs no more than 3.9% drop in classification accuracy compared to the undefended model while reducing the membership inference attack advantage by a factor of up to 3.7 compared to MemGuard and a factor of up to 2.1 compared to adversarial regularization.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/tang](https://www.usenix.org/conference/usenixsecurity22/presentation/tang)
- **PDF:** [https://www.usenix.org/system/files/sec22-tang.pdf](https://www.usenix.org/system/files/sec22-tang.pdf)
## Synthetic Data - Anonymisation Groundhog Day.
### Authors
* Theresa Stadler, EPFL
* Bristena Oprisanu, UCL
* Carmela Troncoso, EPFL
### Abstract
> Synthetic data has been advertised as a silver-bullet solution to privacy-preserving data publishing that addresses the shortcomings of traditional anonymisation techniques. The promise is that synthetic data drawn from generative models preserves the statistical properties of the original dataset but, at the same time, provides perfect protection against privacy attacks. In this work, we present the first quantitative evaluation of the privacy gain of synthetic data publishing and compare it to that of previous anonymisation techniques.Our evaluation of a wide range of state-of-the-art generative models demonstrates that synthetic data either does not prevent inference attacks or does not retain data utility. In other words, we empirically show that synthetic data does not provide a better tradeoff between privacy and utility than traditional anonymisation techniques. Furthermore, in contrast to traditional anonymisation, the privacy-utility tradeoff of synthetic data publishing is hard to predict. Because it is impossible to predict what signals a synthetic dataset will preserve and what information will be lost, synthetic data leads to a highly variable privacy gain and unpredictable utility loss. In summary, we find that synthetic data is far from the holy grail of privacy-preserving data publishing.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/stadler](https://www.usenix.org/conference/usenixsecurity22/presentation/stadler)
- **PDF:** [https://www.usenix.org/system/files/sec22-stadler.pdf](https://www.usenix.org/system/files/sec22-stadler.pdf)
## Attacks on Deidentification's Defenses.
### Authors
* Aloni Cohen, University of Chicago
### Abstract
> Quasi-identifier-based deidentification techniques (QI-deidentification) are widely used in practice, including k-anonymity, l-diversity, and t-closeness. We present three new attacks on QI-deidentification: two theoretical attacks and one practical attack on a real dataset. In contrast to prior work, our theoretical attacks work even if every attribute is a quasi-identifier. Hence, they apply to k-anonymity, l-diversity, t-closeness, and most other QI-deidentification techniques.First, we introduce a new class of privacy attacks called downcoding attacks, and prove that every QI-deidentification scheme is vulnerable to downcoding attacks if it is minimal and hierarchical. Second, we convert the downcoding attacks into powerful predicate singling-out (PSO) attacks, which were recently proposed as a way to demonstrate that a privacy mechanism fails to legally anonymize under Europe's General Data Protection Regulation. Third, we use LinkedIn.com to reidentify 3 students in a k-anonymized dataset published by EdX (and show thousands are potentially vulnerable), undermining EdX's claimed compliance with the Family Educational Rights and Privacy Act.The significance of this work is both scientific and political. Our theoretical attacks demonstrate that QI-deidentification may offer no protection even if every attribute is treated as a quasi-identifier. Our practical attack demonstrates that even deidentification experts acting in accordance with strict privacy regulations fail to prevent real-world reidentification. Together, they rebut a foundational tenet of QI-deidentification and challenge the actual arguments made to justify the continued use of k-anonymity and other QI-deidentification techniques.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/cohen](https://www.usenix.org/conference/usenixsecurity22/presentation/cohen)
- **PDF:** [https://www.usenix.org/system/files/sec22-cohen.pdf](https://www.usenix.org/system/files/sec22-cohen.pdf)
## Birds of a Feather Flock Together: How Set Bias Helps to Deanonymize You via Revealed Intersection Sizes.
### Authors
* Xiaojie Guo, Nankai University
* Ye Han, Nankai University
* Zheli Liu, Nankai University
* Ding Wang, Nankai University
* Yan Jia, Nankai University
* Jin Li, Guangzhou University
### Abstract
> Secure two-party protocols that compute intersection-related statistics have attracted much attention from the industry. These protocols enable two organizations to jointly compute a function (e.g., count and sum) over the intersection of their sets without explicitly revealing this intersection. However, most of such protocols will reveal the intersection size of the two sets in the end. In this work, we are interested in how well an attacker can leverage the revealed intersection sizes to infer some elements' membership of one organization's set. Even disclosing an element's membership of one organization's set to the other organization may violate privacy regulations (e.g., GDPR) since such an element is usually used to identify a person between two organizations. We are the first to study this set membership leakage in intersection-size-revealing protocols. We propose two attacks, namely, baseline attack and feature-aware attack, to evaluate this leakage in realistic scenarios. In particular, our feature-aware attack exploits the realistic set bias that elements with specific features are more likely to be the members of one organization's set. The results show that our two attacks can infer 2.0 ∼ 72.7 set members on average in three realistic scenarios. If the set bias is not weak, the feature-aware attack will outperform the baseline one. For example, in COVID-19 contact tracing, the feature-aware attack can find 25.9 tokens of infected patients in 135 protocol invocations, 1.5 × more than the baseline attack. We discuss how such results may cause negative real-world impacts and propose possible defenses against our attacks.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/guo](https://www.usenix.org/conference/usenixsecurity22/presentation/guo)
- **PDF:** [https://www.usenix.org/system/files/sec22-guo.pdf](https://www.usenix.org/system/files/sec22-guo.pdf)
## Targeted Deanonymization via the Cache Side Channel: Attacks and Defenses.
### Authors
* Mojtaba Zaheri, New Jersey Institute of Technology
* Yossi Oren, New Jersey Institute of Technology
* Reza Curtmola, New Jersey Institute of Technology
### Abstract
> Targeted deanonymization attacks let a malicious website discover whether a website visitor bears a certain public identifier, such as an email address or a Twitter handle. These attacks were previously considered to rely on several assumptions, limiting their practical impact. In this work, we challenge these assumptions and show the attack surface for deanonymization attacks is drastically larger than previously considered. We achieve this by using the cache side channel for our attack, instead of relying on cross-site leaks. This makes our attack oblivious to recently proposed software-based isolation mechanisms, including cross-origin resource policies (CORP), cross-origin opener policies (COOP) and SameSite cookie attribute. We evaluate our attacks on multiple hardware microarchitectures, multiple operating systems and multiple browser versions, including the highly-secure Tor Browser, and demonstrate practical targeted deanonymization attacks on major sites, including Google, Twitter, LinkedIn, TikTok, Facebook, Instagram and Reddit. Our attack runs in less than 3 seconds in most cases, and can be scaled to target an exponentially large amount of users.To stop these attacks, we present a full-featured defense deployed as a browser extension. To minimize the risk to vulnerable individuals, our defense is already available on the Chrome and Firefox app stores. We have also responsibly disclosed our findings to multiple tech vendors, as well as to the Electronic Frontier Foundation. Finally, we provide guidance to websites and browser vendors, as well as to users who cannot install the extension.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/zaheri](https://www.usenix.org/conference/usenixsecurity22/presentation/zaheri)
- **PDF:** [https://www.usenix.org/system/files/sec22-zaheri.pdf](https://www.usenix.org/system/files/sec22-zaheri.pdf)
## FReD: Identifying File Re-Delegation in Android System Services.
### Authors
* Sigmund Albert Gorski III, North Carolina State University
* Seaver Thorn, North Carolina State University
* William Enck, North Carolina State University
* Haining Chen, Google
### Abstract
> The security of the Android platform benefits greatly from a privileged middleware that provides indirect access to protected resources. This architecture is further enhanced by privilege separating functionality into many different services and carefully tuning file access control policy to mitigate the impact of software vulnerabilities. However, these services can become confused deputies if they improperly re-delegate file access to third-party applications through remote procedure call (RPC) interfaces. In this paper, we propose a static program analysis tool called FReD, which identifies a mapping between Java-based system service RPC interfaces and the file paths opened within the Java and C/C++ portions of the service. It then combines the Linux-layer file access control policy with the Android-layer permission policy to identify potential file re-delegation. We use FReD to analyze three devices running Android 10 and identify 12 confused deputies that are accessible from third-party applications. These vulnerabilities include five CVEs with moderate severity, demonstrating the utility of semi-automated approaches to discover subtle flaws in access control enforcement.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/gorski](https://www.usenix.org/conference/usenixsecurity22/presentation/gorski)
- **PDF:** [https://www.usenix.org/system/files/sec22-gorski.pdf](https://www.usenix.org/system/files/sec22-gorski.pdf)
## GhostTouch: Targeted Attacks on Touchscreens without Physical Touch.
### Authors
* Kai Wang, Zhejiang University
* Richard Mitev, Technical University of Darmstadt
* Chen Yan, Zhejiang University
* Xiaoyu Ji, Zhejiang University
* Ahmad-Reza Sadeghi, Technical University of Darmstadt
* Wenyuan Xu, Zhejiang University
### Abstract
> Capacitive touchscreens have become the primary human-machine interface for personal devices such as smartphones and tablets. In this paper, we present GhostTouch, the first active contactless attack  against capacitive touchscreens. GhostTouch uses electromagnetic interference (EMI) to inject fake touch points into a touchscreen without the need to physically touch it. By tuning the parameters of the electromagnetic signal and adjusting the antenna, we can inject two types of basic touch events, taps and swipes, into targeted locations of the touchscreen and control them to manipulate the underlying device. We successfully launch the GhostTouch attacks on nine smartphone models. We can inject targeted taps continuously with a standard deviation of as low as 14.6 x 19.2 pixels from the target area, a delay of less than 0.5s and a distance of up to 40mm. We show the real-world impact of the GhostTouch attacks in a few proof-of-concept scenarios, including answering an eavesdropping phone call, pressing the button, swiping up to unlock, and entering a password. Finally, we discuss potential hardware and software countermeasures to mitigate the attack.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/wang-kai](https://www.usenix.org/conference/usenixsecurity22/presentation/wang-kai)
- **PDF:** [https://www.usenix.org/system/files/sec22-wang-kai.pdf](https://www.usenix.org/system/files/sec22-wang-kai.pdf)
## SARA: Secure Android Remote Authorization.
### Authors
* Abdullah Imran, Purdue University
* Habiba Farrukh, Purdue University
* Muhammad Ibrahim, Purdue University
* Z. Berkay Celik, Purdue University
* Antonio Bianchi, Purdue University
### Abstract
> Modern smartphones are equipped with Trusted Execution Environments (TEEs), offering security features resilient even against attackers able to fully compromise the normal operating system (e.g., Linux in Android devices). The academic community, as well as the smartphone manufacturers, have proposed to use TEEs to strengthen the security of authorization protocols. However, the usage of these protocols has been hampered by both practicality issues and lack of completeness in terms of security.To address these issues, in this paper, we design, implement, and evaluate SARA (Secure Android Remote Authorization),an Android library that uses the existing TEE-powered Android APIs to implement secure, end-to-end remote authorization for Android apps. SARA is practical in its design, as it makes use of Android APIs and TEE features that are already present in modern Android devices to implement a novel secure authorization protocol. In fact, SARA does not require any modifications to the Android operating system nor to the code running in TrustZone (the TEE powering existing Android devices). For this reason, it can be readily used in existing apps running on existing smartphones. Moreover, SARA is designed to ensure that even developers that have no experience in implementing security protocols can make use of it within their apps. At the same time, SARA is secure, since it allows implementing authorization protocols that are resilient even against attackers able to achieve root privileges on a compromised Android device.We first evaluate SARA by conducting a user study to ascertain its usability. Then, we prove SARA's security features by formally verifying its security protocol using ProVerif.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/imran](https://www.usenix.org/conference/usenixsecurity22/presentation/imran)
- **PDF:** [https://www.usenix.org/system/files/sec22-imran.pdf](https://www.usenix.org/system/files/sec22-imran.pdf)
## FOAP: Fine-Grained Open-World Android App Fingerprinting.
### Authors
* Jianfeng Li, The Hong Kong Polytechnic University
* Hao Zhou, The Hong Kong Polytechnic University
* Shuohan Wu, The Hong Kong Polytechnic University
* Xiapu Luo, The Hong Kong Polytechnic University
* Ting Wang, Pennsylvania State University
* Xian Zhan, The Hong Kong Polytechnic University
* Xiaobo Ma, Xi'an Jiaotong University
### Abstract
> Despite the widespread adoption of encrypted communication for mobile apps, adversaries can still identify apps or infer selected user activities of interest from encrypted mobile traffic via app fingerprinting (AF) attacks. However, most existing AF techniques only work under the closed-world assumption, thereby suffering potential precision decline when faced with apps unseen during model training. Moreover, serious privacy leakage often occurs when users conduct some sensitive operations, which are closely associated with specific UI components. Unfortunately, existing AF techniques are too coarse-grained to acquire such fine-grained sensitive information. In this paper, we take the first step to identify method-level fine-grained user action of Android apps in the open-world setting and present a systematic solution, dubbed FOAP, to address the above limitations. First, to effectively reduce false positive risks in the open-world setting, we propose a novel metric, named structural similarity, to adaptively filter out traffic segments irrelevant to the app of interest. Second, FOAP achieves fine-grained user action identification via synthesizing traffic and binary analysis. Specifically, FOAP identifies user actions on specific UI components through inferring entry point methods correlated with them. Extensive evaluations and case studies demonstrate that FOAP is not only reasonably accurate but also practical in fine-grained user activity inference and user privacy analysis.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/li-jianfeng](https://www.usenix.org/conference/usenixsecurity22/presentation/li-jianfeng)
- **PDF:** [https://www.usenix.org/system/files/sec22-li-jianfeng.pdf](https://www.usenix.org/system/files/sec22-li-jianfeng.pdf)
## Identity Confusion in WebView-based Mobile App-in-app Ecosystems.
### Authors
* Lei Zhang, Fudan University
* Zhibo Zhang, Fudan University
* Ancong Liu, Fudan University
* Yinzhi Cao, Johns Hopkins University
* Xiaohan Zhang, Fudan University
* Yanjun Chen, Fudan University
* Yuan Zhang, Fudan University
* Guangliang Yang, Fudan University
* Min Yang, Fudan University
### Abstract
> Mobile applications (apps) often delegate their own functions to other parties, which makes them become a super ecosystem hosting these parties. Therefore, such mobile apps are being called super-apps, and the delegated parties are subsequently called sub-apps, behaving like "app-in-app". Sub-apps not only load (third-party) resources like a normal app, but also have access to the privileged APIs provided by the super-app. This leads to an important research question—determining who can access these privileged APIs.Real-world super-apps, according to our study, adopt three types of identities—namely web domains, sub-app IDs, and capabilities—to determine privileged API access. However, existing identity checks of these three types are often not well designed, leading to a disobey of the least privilege principle. That is, the granted recipient of a privileged API is broader than intended, thus defined as an "identity confusion" in this paper. To the best of our knowledge, no prior works have studied this type of identity confusion vulnerability.In this paper, we perform the first systematic study of identity confusion in real-world app-in-app ecosystems. We find that confusions of the aforementioned three types of identities are widespread among all 47 studied super-apps. More importantly, such confusions lead to severe consequences such as manipulating users' financial accounts and installing malware on a smartphone. We responsibly reported all of our findings to developers of affected super-apps, and helped them to fix their vulnerabilities.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/zhang-lei](https://www.usenix.org/conference/usenixsecurity22/presentation/zhang-lei)
- **PDF:** [https://www.usenix.org/system/files/sec22-zhang-lei.pdf](https://www.usenix.org/system/files/sec22-zhang-lei.pdf)
## Automated Detection of Automated Traffic.
### Authors
* Cormac Herley, Microsoft Research
### Abstract
> We describe a method to separate abuse from legitimate traffic when we have categorical features and no labels are available. Our approach hinges on the observation that, if we could locate them, unattacked bins of a categorical feature x would allow us to estimate the benign distribution of any feature that is independent of x. We give an algorithm that finds these unattacked bins (if they exist) and show how to build an overall classifier that is suitable for very large data volumes and high levels of abuse. The approach is one-sided: our only significant assumptions about abuse are the existence of unattacked bins, and that distributions of abuse traffic do not precisely match those of benign.We evaluate on two datasets: 3 million requests from a web-server dataset and a collection of 5.1 million Twitter accounts crawled using the public API. The results confirm that the approach is successful at identifying clusters of automated behaviors. On both problems we easily outperform unsupervised methods such as Isolation Forests, and have comparable performance to Botometer on the Twitter dataset.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/herley](https://www.usenix.org/conference/usenixsecurity22/presentation/herley)
- **PDF:** [https://www.usenix.org/system/files/sec22-herley.pdf](https://www.usenix.org/system/files/sec22-herley.pdf)
## Inferring Phishing Intention via Webpage Appearance and Dynamics: A Deep Vision Based Approach.
### Authors
* Ruofan Liu, National University of Singapore
* Yun Lin, National University of Singapore
* Xianglin Yang, National University of Singapore
* Siang Hwee Ng, National University of Singapore
* Dinil Mon Divakaran, Trustwave
* Jin Song Dong, National University of Singapore
### Abstract
> Explainable phishing detection approaches are usually based on references, i.e., they compare a suspicious webpage against a reference list of commonly targeted legitimate brands' webpages. If a webpage is detected as similar to any referenced website but their domains are not aligned, a phishing alert is raised with an explanation comprising its targeted brand. In comparison to other techniques, such explainable reference-based solutions are more robust to ever-changing phishing webpages. However, the webpage similarity is still measured by representations conveying only partial intentions (e.g., screenshot and logo), which (i) incurs considerable false positives and (ii) gives an adversary opportunities to compromise user confidence in the approaches.In this work, we propose, PhishIntention, to extract precise phishing intention of a webpage by visually (i) extracting its brand intention and credential-taking intention, and (ii) interacting with the webpage to confirm the credential-taking intention. We design PhishIntention as a heterogeneous system of deep learning vision models, overcoming various technical challenges. The models "look at" and "interact with" the webpage for its intention, which are robust to potential HTML obfuscation. We compare PhishIntention with four state-of-the-art reference-based approaches on the largest phishing identification dataset consisting of 50K phishing and benign webpages. For similar level of recall, PhishIntention achieves significantly higher precision than the baselines. Moreover, we conduct a continuous field study on the Internet for two months to discover emerging phishing webpages. PhishIntention detects 1,942 new phishing webpages (1,368 not reported by VirusTotal). Comparing to the best baseline, PhishIntention generates 86.5% less false alerts (139 vs. 1,033 false positives) while detecting similar number of real phishing webpages.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/liu-ruofan](https://www.usenix.org/conference/usenixsecurity22/presentation/liu-ruofan)
- **PDF:** [https://www.usenix.org/system/files/sec22-liu-ruofan.pdf](https://www.usenix.org/system/files/sec22-liu-ruofan.pdf)
## Phish in Sheep's Clothing: Exploring the Authentication Pitfalls of Browser Fingerprinting.
### Authors
* Xu Lin, University of Illinois at Chicago
* Panagiotis Ilia, University of Illinois at Chicago
* Saumya Solanki, University of Illinois at Chicago
* Jason Polakis, University of Illinois at Chicago
### Abstract
> As users navigate the web they face a multitude of threats; among them, attacks that result in account compromise can be particularly devastating. In a world fraught with data breaches and sophisticated phishing attacks, web services strive to fortify user accounts by adopting new mechanisms that identify and prevent suspicious login attempts. More recently, browser fingerprinting techniques have been incorporated into the authentication workflow of major services as part of their decision-making process for triggering additional security mechanisms (e.g., two-factor authentication).In this paper we present the first comprehensive and in-depth exploration of the security implications of real-world systems relying on browser fingerprints for authentication. Guided by our investigation, we develop a tool for automatically constructing fingerprinting vectors that replicate the process of target websites, enabling the extraction of fingerprints from users' devices that exactly match those generated by target websites. Subsequently, we demonstrate how phishing attackers can replicate users' fingerprints on different devices to deceive the risk-based authentication systems of high-value web services (e.g., cryptocurrency trading) to completely bypass two-factor authentication. To gain a better understanding of whether attackers can carry out such attacks, we study the evolution of browser fingerprinting practices in phishing websites over time. While attackers do not generally collect all the necessary fingerprinting attributes, unfortunately that is not the case for attackers targeting certain financial institutions where we observe an increasing number of phishing sites capable of pulling off our attacks. To address the significant threat posed by our attack, we have disclosed our findings to the vulnerable vendors.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/lin-xu](https://www.usenix.org/conference/usenixsecurity22/presentation/lin-xu)
- **PDF:** [https://www.usenix.org/system/files/sec22-lin-xu.pdf](https://www.usenix.org/system/files/sec22-lin-xu.pdf)
## DeepPhish: Understanding User Trust Towards Artificially Generated Profiles in Online Social Networks.
### Authors
* Jaron Mink, University of Illinois at Urbana-Champaign
* Licheng Luo, University of Illinois at Urbana-Champaign
* Natã M. Barbosa, University of Illinois at Urbana-Champaign
* Olivia Figueira, Santa Clara University
* Yang Wang, University of Illinois at Urbana-Champaign
* Gang Wang, University of Illinois at Urbana-Champaign
### Abstract
> Fabricated media from deep learning models, or deepfakes, have been recently applied to facilitate social engineering efforts by constructing a trusted social persona. While existing works are primarily focused on deepfake detection, little is done to understand how users perceive and interact with deepfake persona (e.g., profiles) in a social engineering context. In this paper, we conduct a user study (n=286) to quantitatively evaluate how deepfake artifacts affect the perceived trustworthiness of a social media profile and the profile's likelihood to connect with users. Our study investigates artifacts isolated within a single media field (images or text) as well as mismatched relations between multiple fields. We also evaluate whether user prompting (or training) benefits users in this process. We find that artifacts and prompting significantly decrease the trustworthiness and request acceptance of deepfake profiles. Even so, users still appear vulnerable with 43% of them connecting to a deepfake profile under the best-case conditions. Through qualitative data, we find numerous reasons why this task is challenging for users, such as the difficulty of distinguishing text artifacts from honest mistakes and the social pressures entailed in the connection decisions. We conclude by discussing the implications of our results for content moderators, social media platforms, and future defenses.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/mink](https://www.usenix.org/conference/usenixsecurity22/presentation/mink)
- **PDF:** [https://www.usenix.org/system/files/sec22-mink.pdf](https://www.usenix.org/system/files/sec22-mink.pdf)
## Hand Me Your PIN! Inferring ATM PINs of Users Typing with a Covered Hand.
### Authors
* Matteo Cardaioli, University of Padua
* Stefano Cecconello, University of Padua
* Mauro Conti, University of Padua
* Simone Milani, University of Padua
* Stjepan Picek, Delft University of Technology
* Eugen Saraci, University of Padua
### Abstract
> Automated Teller Machines (ATMs) represent the most used system for withdrawing cash. The European Central Bank reported more than 11 billion cash withdrawals and loading/unloading transactions on the European ATMs in 2019. Although ATMs have undergone various technological evolutions, Personal Identification Numbers (PINs) are still the most common authentication method for these devices. Unfortunately, the PIN mechanism is vulnerable to shoulder-surfing attacks performed via hidden cameras installed near the ATM to catch the PIN pad. To overcome this problem, people get used to covering the typing hand with the other hand. While such users probably believe this behavior is safe enough to protect against mentioned attacks, there is no clear assessment of this countermeasure in the scientific literature.This paper proposes a novel attack to reconstruct PINs entered by victims covering the typing hand with the other hand. We consider the setting where the attacker can access an ATM PIN pad of the same brand/model as the target one. Afterward, the attacker uses that model to infer the digits pressed by the victim while entering the PIN. Our attack owes its success to a carefully selected deep learning architecture that can infer the PIN from the typing hand position and movements. We run a detailed experimental analysis including 58 users. With our approach, we can guess 30% of the 5-digit PINs within three attempts – the ones usually allowed by ATM before blocking the card. We also conducted a survey with 78 users that managed to reach an accuracy of only 7.92% on average for the same setting. Finally, we evaluate a shielding countermeasure that proved to be rather inefficient unless the whole keypad is shielded.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/cardaioli](https://www.usenix.org/conference/usenixsecurity22/presentation/cardaioli)
- **PDF:** [https://www.usenix.org/system/files/sec22-cardaioli.pdf](https://www.usenix.org/system/files/sec22-cardaioli.pdf)
## Estimating Incidental Collection in Foreign Intelligence Surveillance: Large-Scale Multiparty Private Set Intersection with Union and Sum.
### Authors
* Anunay Kulshrestha, Princeton University
* Jonathan Mayer, Princeton University
### Abstract
> Section 702 of the Foreign Intelligence Surveillance Act authorizes U.S. intelligence agencies to intercept communications content without obtaining a warrant. While Section 702 requires targeting foreigners abroad for intelligence purposes, agencies "incidentally" collect communications to or from Americans and can search that data for purposes beyond intelligence gathering. For over a decade, members of Congress and civil society organizations have called on the U.S. Intelligence Community (IC) to estimate the scale of incidental collection. Senior intelligence officials have acknowledged the value of quantitative transparency for incidental collection, but the IC has not identified a satisfactory estimation method that respects individual privacy, protects intelligence sources and methods, and imposes minimal burden on IC resources.In this work, we propose a novel approach to estimating incidental collection using secure multiparty computation (MPC). The IC possesses records about the parties to intercepted communications, and communications services possess country-level location for users. By combining these datasets with MPC, it is possible to generate an automated aggregate estimate of incidental collection that maintains confidentiality for intercepted communications and user locations.We formalize our proposal as a new variant of private set intersection, which we term multiparty private set intersection with union and sum (MPSIU-Sum). We then design and evaluate an efficient MPSIU-Sum protocol, based on elliptic curve cryptography and partially homomorphic encryption. Our protocol performs well at the large scale necessary for estimating incidental collection in Section 702 surveillance.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/kulshrestha](https://www.usenix.org/conference/usenixsecurity22/presentation/kulshrestha)
- **PDF:** [https://www.usenix.org/system/files/sec22-kulshrestha.pdf](https://www.usenix.org/system/files/sec22-kulshrestha.pdf)
## Constant-weight PIR: Single-round Keyword PIR via Constant-weight Equality Operators.
### Authors
* Rasoul Akhavan Mahdavi, University of Waterloo
* Florian Kerschbaum, University of Waterloo
### Abstract
> Equality operators are an essential building block in tasks over secure computation such as private information retrieval. In private information retrieval (PIR), a user queries a database such that the server does not learn which element is queried. In this work, we propose equality operators for constant-weight codewords. A constant-weight code is a collection of codewords that share the same Hamming weight. Constant-weight equality operators have a multiplicative depth that depends only on the Hamming weight of the code, not the bit-length of the elements. In our experiments, we show how these equality operators are up to 10 times faster than existing equality operators. Furthermore, we propose PIR using the constant-weight equality operator or constant-weight PIR, which is a PIR protocol using an approach previously deemed impractical. We show that for private retrieval of large, streaming data, constant-weight PIR has a smaller communication complexity and lower runtime compared to SEALPIR and MulPIR, respectively, which are two state-of-the-art solutions for PIR. Moreover, we show how constant-weight PIR can be extended to keyword PIR. In keyword PIR, the desired element is retrieved by a unique identifier pertaining to the sought item, e.g., the name of a file. Previous solutions to keyword PIR require one or multiple rounds of communication to reduce the problem to normal PIR. We show that constant-weight PIR is the first practical single-round solution to single-server keyword PIR.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/mahdavi](https://www.usenix.org/conference/usenixsecurity22/presentation/mahdavi)
- **PDF:** [https://www.usenix.org/system/files/sec22-mahdavi.pdf](https://www.usenix.org/system/files/sec22-mahdavi.pdf)
## Incremental Offline/Online PIR.
### Authors
* Yiping Ma, University of Pennsylvania
* Ke Zhong, University of Pennsylvania
* Tal Rabin, University of Pennsylvania and Algorand Foundation
* Sebastian Angel, University of Pennsylvania and Microsoft Research
### Abstract
> Recent private information retrieval (PIR) schemes preprocess the database with a query-independent offline phase in order to achieve sublinear computation during a query-specific online phase. These offline/online protocols expand the set of applications that can profitably use PIR, but they make a critical assumption: that the database is immutable. In the presence of changes such as additions, deletions, or updates, existing schemes must preprocess the database from scratch, wasting prior effort. To address this, this paper introduces incremental preprocessing for offline/online PIR schemes, allowing the original preprocessing to continue to be used after database changes, while paying an update cost proportional to the number of changes rather than linear in the size of the database. We adapt two offline/online PIR schemes to use incremental preprocessing and show that our approach significantly improves throughput and reduces the latency of applications where the database changes over time.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/ma](https://www.usenix.org/conference/usenixsecurity22/presentation/ma)
- **PDF:** [https://www.usenix.org/system/files/sec22-ma.pdf](https://www.usenix.org/system/files/sec22-ma.pdf)
## GPU-accelerated PIR with Client-Independent Preprocessing for Large-Scale Applications.
### Authors
* Daniel Günther, Technical University of Darmstadt
* Maurice Heymann, Technical University of Darmstadt
* Benny Pinkas, Bar-Ilan University
* Thomas Schneider, Technical University of Darmstadt
### Abstract
> Multi-Server Private Information Retrieval (PIR) is a cryptographic protocol that allows a client to securely query a database entry from n ≥ 2 servers of which less than t can collude, s.t. the servers learn no information about the query. Highly efficient PIR could be used for large-scale applications like Compromised Credential Checking (C3) (USENIX Security'19), which allows users to check whether their credentials have been leaked in a data breach. However, state-of-the art PIR schemes are not efficient enough for fast online responses at this scale.In this work, we introduce Client-Independent Preprocessing (CIP) PIR that moves (t −1)/n of the online computation to a local, client independent, preprocessing phase suitable for efficient batch precomputations. The online performance of CIP-PIR improves linearly with the number of servers n. We show that large-scale applications like C3 with PIR are practical by implementing our CIP-PIR scheme using a parallelized CPU implementation. To the best of our knowledge, this is the first multi-server PIR scheme whose preprocessing phase is completely independent of the client, and where online performance simultaneously improves with the number of servers n. In addition, we accelerate for the first time the huge amount of XOR operations in multi-server PIR with GPUs. Our GPUbased CIP-PIR achieves an improvement up to factor 2.1× over our CPU-based implementation for n = 2 servers, and enables a client to query an entry in a 25 GB database within less than 1 second.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/gunther](https://www.usenix.org/conference/usenixsecurity22/presentation/gunther)
- **PDF:** [https://www.usenix.org/system/files/sec22-gunther.pdf](https://www.usenix.org/system/files/sec22-gunther.pdf)
## Increasing Adversarial Uncertainty to Scale Private Similarity Testing.
### Authors
* Yiqing Hua, Cornell Tech and Cornell University
* Armin Namavari, Cornell Tech and Cornell University
* Kaishuo Cheng, Cornell University
* Mor Naaman, Cornell Tech and Cornell University
* Thomas Ristenpart, Cornell Tech and Cornell University
### Abstract
> Social media and other platforms rely on automated detection of abusive content to help combat disinformation, harassment, and abuse. One common approach is to check user content for similarity against a server-side database of problematic items. However, this method fundamentally endangers user privacy. Instead, we target client-side detection, notifying only the users when such matches occur to warn them against abusive content.Our solution is based on privacy-preserving similarity testing. Existing approaches rely on expensive cryptographic protocols that do not scale well to large databases and may sacrifice the correctness of the matching. To contend with this challenge, we propose and formalize the concept of similarity-based bucketization~(SBB). With SBB, a client reveals a small amount of information to a database-holding server so that it can generate a bucket of potentially similar items. The bucket is small enough for efficient application of privacy-preserving protocols for similarity. To analyze the privacy risk of the revealed information, we introduce a framework for measuring an adversary's confidence in inferring a predicate about the client input correctly. We develop a practical SBB protocol for image content, and evaluate its client privacy guarantee with real-world social media data. We then combine SBB with various similarity protocols, showing that the combination with SBB provides a speedup of at least 29x on large-scale databases compared to that without, while retaining correctness of over 95%.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/hua](https://www.usenix.org/conference/usenixsecurity22/presentation/hua)
- **PDF:** [https://www.usenix.org/system/files/sec22-hua.pdf](https://www.usenix.org/system/files/sec22-hua.pdf)
## Pre-hijacked accounts: An Empirical Study of Security Failures in User Account Creation on the Web.
### Authors
* Avinash Sudhodanan, Independent Researcher
* ; Andrew Paverd, Microsoft Security Response Center
### Abstract
> The ubiquity of user accounts in websites and online services makes account hijacking a serious security concern. Although previous research has studied various techniques through which an attacker can gain access to a victim's account, relatively little attention has been directed towards the process of account creation. The current trend towards federated authentication (e.g., Single Sign-On) adds an additional layer of complexity because many services now support both the classic approach in which the user directly sets a password, and the federated approach in which the user authenticates via an identity provider. Inspired by previous work on preemptive account hijacking [Ghasemisharif et al., USENIX SEC 2018], we show that there exists a whole class of account pre-hijacking attacks. The distinctive feature of these attacks is that the attacker performs some action before the victim creates an account, which makes it trivial for the attacker to gain access after the victim has created/recovered the account. Assuming a realistic attacker who knows only the victim's email address, we identify and discuss five different types of account pre-hijacking attacks. To ascertain the prevalence of such vulnerabilities in the wild, we analyzed 75 popular services and found that at least 35 of these were vulnerable to one or more account pre-hijacking attacks. Whilst some of these may be noticed by attentive users, others were completely undetectable from the victim's perspective. Finally, we investigated the root cause of these vulnerabilities and present a set of security requirements to prevent such vulnerabilities arising in future.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/sudhodanan](https://www.usenix.org/conference/usenixsecurity22/presentation/sudhodanan)
- **PDF:** [https://www.usenix.org/system/files/sec22-sudhodanan.pdf](https://www.usenix.org/system/files/sec22-sudhodanan.pdf)
## Leaky Forms: A Study of Email and Password Exfiltration Before Form Submission.
### Authors
* Asuman Senol, imec-COSIC, KU Leuven
* Gunes Acar, Radboud University
* Mathias Humbert, University of Lausanne
* Frederik Zuiderveen Borgesius, Radboud University
### Abstract
> Web users enter their email addresses into online forms for a variety of reasons, including signing in or signing up for a service or subscribing to a newsletter. While enabling such functionality, email addresses typed into forms can also be collected by third-party scripts even when users change their minds and leave the site without submitting the form. Email addresses—or identifiers derived from them—are known to be used by data brokers and advertisers for cross-site, cross-platform, and persistent identification of potentially unsuspecting individuals. In order to find out whether access to online forms is misused by online trackers, we present a measurement of email and password collection that occurs before the form submission on the top 100,000 websites. We evaluate the effect of user location, browser configuration, and interaction with consent dialogs by comparing results across two vantage points (EU/US), two browser configurations (desktop/mobile), and three consent modes. Our crawler finds and fills email and password fields, monitors the network traffic for leaks, and intercepts script access to filled input fields. Our analyses show that users' email addresses are exfiltrated to tracking, marketing and analytics domains before form submission and without giving consent on 1,844 websites in the EU crawl and 2,950 websites in the US crawl. While the majority of email addresses are sent to known tracking domains, we further identify 41 tracker domains that are not listed by any of the popular blocklists. Furthermore, we find incidental password collection on 52 websites by third-party session replay scripts.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/senol](https://www.usenix.org/conference/usenixsecurity22/presentation/senol)
- **PDF:** [https://www.usenix.org/system/files/sec22-senol.pdf](https://www.usenix.org/system/files/sec22-senol.pdf)
## Might I Get Pwned: A Second Generation Compromised Credential Checking Service.
### Authors
* Bijeeta Pal, Cornell University
* Mazharul Islam, University of Wisconsin–Madison
* Marina Sanusi Bohuk, Cornell University
* Nick Sullivan, Cloudflare
* Luke Valenta, Cloudflare
* Tara Whalen, Cloudflare
* Christopher Wood, Cloudflare
* Thomas Ristenpart, Cornell Tech
* Rahul Chatterjee, University of Wisconsin–Madison
### Abstract
> Credential stuffing attacks use stolen passwords to log into victim accounts. To defend against these attacks, recently deployed compromised credential checking (C3) services provide APIs that help users and companies check whether a username, password pair is exposed. These services however only check if the exact password is leaked, and therefore do not mitigate credential tweaking attacks — attempts to compromise a user account with variants of a user's leaked passwords. Recent work has shown credential tweaking attacks can compromise accounts quite effectively even when the credential stuffing countermeasures are in place.We initiate work on C3 services that protect users from credential tweaking attacks. The core underlying challenge is how to identify passwords that are similar to their leaked passwords while preserving honest clients' privacy and also preventing malicious clients from extracting breach data from the service. We formalize the problem and explore ways to measure password similarity that balance efficacy, performance, and security. Based on this study, we design "Might I Get Pwned" (MIGP), a new kind of breach alerting service. Our simulations show that MIGP reduces the efficacy of state-of-the-art 1000-guess credential tweaking attacks by 94%. MIGP preserves user privacy and limits potential exposure of sensitive breach entries. We show that the protocol is fast, with response time close to existing C3 services. We worked with Cloudflare to deploy MIGP in practice.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/pal](https://www.usenix.org/conference/usenixsecurity22/presentation/pal)
- **PDF:** [https://www.usenix.org/system/files/sec22-pal.pdf](https://www.usenix.org/system/files/sec22-pal.pdf)
## Why Users (Don't) Use Password Managers at a Large Educational Institution.
### Authors
* Peter Mayer, Karlsruhe Institute of Technology
* Collins W. Munyendo, The George Washington University
* Michelle L. Mazurek, University of Maryland, College Park
* Adam J. Aviv, The George Washington University
### Abstract
> We quantitatively investigated the current state of Password Manager (PM) usage and general password habits at a large, private university in the United States. Building on prior qualitative findings from SOUPS 2019, we survey n=277 faculty, staff, and students, finding that 77% of our participants already use PMs, but users of third-party PMs, as opposed to browser-based PMs, were significantly less likely to reuse their passwords across accounts. The largest factor encouraging PM adoption is perceived ease-of-use, indicating that communication and institutional campaigns should focus more on usability factors. Additionally, our work indicates the need for design improvements for browser-based PMs to encourage less password reuse as they are more widely adopted.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/mayer](https://www.usenix.org/conference/usenixsecurity22/presentation/mayer)
- **PDF:** [https://www.usenix.org/system/files/sec22-mayer.pdf](https://www.usenix.org/system/files/sec22-mayer.pdf)
## Gossamer: Securely Measuring Password-based Logins.
### Authors
* Marina Sanusi Bohuk, Cornell University
* Mazharul Islam, University of Wisconsin–Madison
* Suleman Ahmad, Cloudflare
* Michael Swift, University of Wisconsin–Madison
* Thomas Ristenpart, Cornell Tech
* Rahul Chatterjee, University of Wisconsin–Madison
### Abstract
> Passwords remain the primary way to authenticate users online. Yet little is known about the characteristics of login requests submitted to login systems due to the sensitivity of monitoring submitted passwords. This means we don't have answers to basic questions, such as how often users submit a password similar to their actual password, whether users often resubmit the same incorrect password, how many users utilize passwords known to be in a public breach, and more. Whether we can build and deploy measurement infrastructure to safely answer such questions is, itself, an open question.We offer a system, called Gossamer, that enables securely logging information about login attempts, including carefully chosen statistics about submitted passwords. We provide a simulation-based approach for tuning the security-utility trade-offs for storing different password-derived statistics. This enables us to gather useful measurements while reducing risk even in the unlikely case of complete compromise of the measurement system. We worked closely with two large universities and deployed Gossamer to perform a measurement study that observed 34 million login requests over a seven month period. The measurements we gather provide insight into the use of breached credentials, password usability, and other characteristics of the submitted login requests.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/sanusi-bohuk](https://www.usenix.org/conference/usenixsecurity22/presentation/sanusi-bohuk)
- **PDF:** [https://www.usenix.org/system/files/sec22-sanusi-bohuk.pdf](https://www.usenix.org/system/files/sec22-sanusi-bohuk.pdf)
## DoubleStar: Long-Range Attack Towards Depth Estimation based Obstacle Avoidance in Autonomous Systems.
### Authors
* Ce Zhou, Michigan State University
* Qiben Yan, Michigan State University
* Yan Shi, Michigan State University
* Lichao Sun, Lehigh University
### Abstract
> Depth estimation-based obstacle avoidance has been widely adopted by autonomous systems (drones and vehicles) for safety purpose. It normally relies on a stereo camera to automatically detect obstacles and make flying/driving decisions, e.g., stopping several meters ahead of the obstacle in the path or moving away from the detected obstacle. In this paper, we explore new security risks associated with the stereo vision-based depth estimation algorithms used for obstacle avoidance. By exploiting the weaknesses of the stereo matching in depth estimation algorithms and the lens flare effect in optical imaging, we propose DoubleStar, a long-range attack that injects fake obstacle depth by projecting pure light from two complementary light sources. DoubleStar includes two distinctive attack formats: beams attack and orbs attack, which leverage projected light beams and lens flare orbs respectively to cause false depth perception. We successfully attack two commercial stereo cameras designed for autonomous systems (ZED and Intel RealSense). The visualization of fake depth perceived by the stereo cameras illustrates the false stereo matching induced by DoubleStar. We further use Ardupilot to simulate the attack and demonstrate its impact on drones. To validate the attack on real systems, we perform a real-world attack towards a commercial drone equipped with state-of-the-art obstacle avoidance algorithms. Our attack can continuously bring a flying drone to a sudden stop or drift it away across a long distance under various lighting conditions, even bypassing sensor fusion mechanisms. Specifically, our experimental results show that DoubleStar creates fake depth up to 15 meters in distance at night and up to 8 meters during the daytime. To mitigate this newly discovered threat, we provide discussions on potential countermeasures to defend against DoubleStar.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/zhou-ce](https://www.usenix.org/conference/usenixsecurity22/presentation/zhou-ce)
- **PDF:** [https://www.usenix.org/system/files/sec22-zhou-ce.pdf](https://www.usenix.org/system/files/sec22-zhou-ce.pdf)
## Security Analysis of Camera-LiDAR Fusion Against Black-Box Attacks on Autonomous Vehicles.
### Authors
* R. Spencer Hallyburton, Duke University
* Yupei Liu, Duke University
* Yulong Cao, University of Michigan
* Z. Morley Mao, University of Michigan
* Miroslav Pajic, Duke University
### Abstract
> To enable safe and reliable decision-making, autonomous vehicles (AVs) feed sensor data to perception algorithms to understand the environment. Sensor fusion with multi-frame tracking is becoming increasingly popular for detecting 3D objects. Thus, in this work, we perform an analysis of camera-LiDAR fusion, in the AV context, under LiDAR spoofing attacks. Recently, LiDAR-only perception was shown vulnerable to LiDAR spoofing attacks; however, we demonstrate these attacks are not capable of disrupting camera-LiDAR fusion. We then define a novel, context-aware attack: frustum attack, and show that out of 8 widely used perception algorithms – across 3 architectures of LiDAR-only and 3 architectures of camera-LiDAR fusion – all are significantly vulnerable to the frustum attack. In addition, we demonstrate that the frustum attack is stealthy to existing defenses against LiDAR spoofing as it preserves consistencies between camera and LiDAR semantics. Finally, we show that the frustum attack can be exercised consistently over time to form stealthy longitudinal attack sequences, compromising the tracking module and creating adverse outcomes on end-to-end AV control.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/hallyburton](https://www.usenix.org/conference/usenixsecurity22/presentation/hallyburton)
- **PDF:** [https://www.usenix.org/system/files/sec22-hallyburton.pdf](https://www.usenix.org/system/files/sec22-hallyburton.pdf)
## SAID: State-aware Defense Against Injection Attacks on In-vehicle Network.
### Authors
* Lei Xue, The Hong Kong Polytechnic University Shenzhen Research Institute
* Yangyang Liu, The Hong Kong Polytechnic University
* Tianqi Li, The Hong Kong Polytechnic University
* Kaifa Zhao, The Hong Kong Polytechnic University
* Jianfeng Li, The Hong Kong Polytechnic University
* Le Yu, The Hong Kong Polytechnic University
* Xiapu Luo, The Hong Kong Polytechnic University
* Yajin Zhou, Zhejiang University
* Guofei Gu, Texas A&M University
### Abstract
> Modern vehicles are equipped with many ECUs (Electronic Control Unit) that are connected to the IVN (In-Vehicle Network) for controlling the vehicles. Meanwhile, various interfaces of vehicles, such as OBD-II port, T-Box, sensors, and telematics, implement the interaction between the IVN and external environment. Although rich value-added functionalities can be provided through these interfaces, such as diagnostics and OTA (Over The Air) updates, the adversary may also inject malicious data into IVN, thus causing severe safety issues. Even worse, existing defense approaches mainly focus on detecting the injection attacks launched from IVN, such as malicious/compromised ECUs, by analyzing CAN frames, and cannot defend against the higher layer MIAs (Message Injection Attacks) that can cause abnormal vehicle dynamics. In this paper, we propose a new state-aware abnormal message injection attack defense approach, named SAID. It detects the abnormal data to be injected into IVN by considering the data semantics and the vehicle dynamics and prevents the MIAs launched from devices connected to the vehicles, such as the compromised diagnostic tools and T-boxes. We develop a prototype of SAID for defending against MIAs and evaluate it using both real road data and simulation data. The experimental results show that SAID can defend against more than 99% of the network and service layer attack traffic and all state layer MIAs, effectively enforcing the safety of vehicles.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/xue-lei](https://www.usenix.org/conference/usenixsecurity22/presentation/xue-lei)
- **PDF:** [https://www.usenix.org/system/files/sec22-xue-lei.pdf](https://www.usenix.org/system/files/sec22-xue-lei.pdf)
## Towards Automatically Reverse Engineering Vehicle Diagnostic Protocols.
### Authors
* Le Yu, The Hong Kong Polytechnic University
* Yangyang Liu, The Hong Kong Polytechnic University
* Pengfei Jing, The Hong Kong Polytechnic University
* Xiapu Luo, The Hong Kong Polytechnic University
* Lei Xue, The Hong Kong Polytechnic University
* Kaifa Zhao, The Hong Kong Polytechnic University
* Yajin Zhou, Zhejiang University
* Ting Wang, The Pennsylvania State University
* Guofei Gu, Texas A&M University
* Sen Nie, Tencent Keen Security Lab
* Shi Wu, Tencent Keen Security Lab
### Abstract
> In-vehicle protocols are very important to the security assessment and protection of modern vehicles since they are used in communicating with, accessing, and even manipulating ECUs (Electronic Control Units) that control various vehicle components. Unfortunately, the majority of in-vehicle protocols are proprietary without publicly-available documentations. Although recent studies proposed methods to reverse engineer the CAN protocol used in the communication among ECUs, they cannot be applied to vehicle diagnostics protocols, which have been widely exploited by attackers to launch remote attacks. In this paper, we propose a novel framework for automatically reverse engineering the diagnostic protocols by leveraging professional diagnostic tools for vehicles. Specifically, we design and develop a new cyber-physical system that uses a set of algorithms to control a programmable robotics arm with the aid of cameras to automatically trigger and capture the messages of diagnostics protocols as well as reverse engineer their formats, semantic meanings, proprietary formulas used for processing the response messages. We perform a large scale experiment to evaluate our prototype by using 18 real vehicles. It successfully reverses engineers 570 messages (446 for reading sensor values and 124 for controlling components). The experimental results show that our framework achieves high precision in reverse engineering proprietary formulas and obtains much more messages than the prior approach based on app analysis.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/yu-le](https://www.usenix.org/conference/usenixsecurity22/presentation/yu-le)
- **PDF:** [https://www.usenix.org/system/files/sec22-yu-le.pdf](https://www.usenix.org/system/files/sec22-yu-le.pdf)
## Rolling Colors: Adversarial Laser Exploits against Traffic Light Recognition.
### Authors
* Chen Yan, Zhejiang University
* Zhijian Xu, Zhejiang University and The Chinese University of Hong Kong
* Zhanyuan Yin, The University of Chicago
* Xiaoyu Ji, Zhejiang University
* Wenyuan Xu, Zhejiang University
### Abstract
> Traffic light recognition is essential for fully autonomous driving in urban areas. In this paper, we investigate the feasibility of fooling traffic light recognition mechanisms by shedding laser interference on the camera. By exploiting the rolling shutter of CMOS sensors, we manage to inject a color stripe overlapped on the traffic light in the image, which can cause a red light to be recognized as a green light or vice versa. To increase the success rate, we design an optimization method to search for effective laser parameters based on empirical models of laser interference. Our evaluation in emulated and real-world setups on 2 state-of-the-art recognition systems and 5 cameras reports a maximum success rate of 30% and 86.25% for Red-to-Green and Green-to-Red attacks. We observe that the attack is effective in continuous frames from more than 40 meters away against a moving vehicle, which may cause end-to-end impacts on self-driving such as running a red light or emergency stop. To mitigate the threat, we propose redesigning the rolling shutter mechanism.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/yan](https://www.usenix.org/conference/usenixsecurity22/presentation/yan)
- **PDF:** [https://www.usenix.org/system/files/sec22-yan.pdf](https://www.usenix.org/system/files/sec22-yan.pdf)
## Provably-Safe Multilingual Software Sandboxing using WebAssembly.
### Authors
* Jay Bosamiya, Carnegie Mellon University
* Wen Shih Lim, Carnegie Mellon University
* Bryan Parno, Carnegie Mellon University
### Abstract
> Many applications, from the Web to smart contracts, need to safely execute untrusted code. We observe that WebAssembly (Wasm) is ideally positioned to support such applications, since it promises safety and performance, while serving as a compiler target for many high-level languages. However, Wasm's safety guarantees are only as strong as the implementation that enforces them. Hence, we explore two distinct approaches to producing provably sandboxed Wasm code. One draws on traditional formal methods to produce mathematical, machine-checked proofs of safety. The second carefully embeds Wasm semantics in safe Rust code such that the Rust compiler can emit safe executable code with good performance. Our implementation and evaluation of these two techniques indicate that leveraging Wasm gives us provably-safe multilingual sandboxing with performance comparable to standard, unsafe approaches.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/bosamiya](https://www.usenix.org/conference/usenixsecurity22/presentation/bosamiya)
- **PDF:** [https://www.usenix.org/system/files/sec22-bosamiya.pdf](https://www.usenix.org/system/files/sec22-bosamiya.pdf)
## Backporting Security Patches of Web Applications: A Prototype Design and Implementation on Injection Vulnerability Patches.
### Authors
* Youkun Shi, Fudan University
* Yuan Zhang, Fudan University
* Tianhan Luo, Fudan University
* Xiangyu Mao, Fudan University
* Yinzhi Cao, Johns Hopkins University
* Ziwen Wang, Fudan University
* Yudi Zhao, Fudan University
* Zongan Huang, Fudan University
* Min Yang, Fudan University
### Abstract
> Web vulnerabilities, especially injection-related ones, are popular among web application frameworks (such as Word-Press and Piwigo), which can lead to severe consequences like user information leak and server-side malware execution. One major practice of fixing web vulnerabilities on real-world websites is to apply security patches from the official developers of web frameworks. However, such a practice is challenging because security patches are developed for the latest version of a web framework, but real-world websites often run an old version due to legacy reasons. A direct application of security patches on the old version often fails because web frameworks, especially the code around the vulnerable location, may change between versions. In this paper, we design a security patch backporting framework and implement a prototype on injection vulnerability patches, called SKYPORT. SKYPORT first identifies safely-backportable patches of injection vulnerabilities and web framework versions in theory and then backports patches to corresponding old versions. In the evaluation, SKYPORT identifies 98 out of 155 security patches targeting legacy injection vulnerabilities, which can be backported to 750 old versions of web application frameworks. Then, SKYPORT successfully backported all of the aforementioned backportable patches to corresponding old versions to correctly fix vulnerabilities. We believe that this is a first-step towards this important research problem and hope our research can draw further attention from the research community in backporting security patches to fix unpatched vulnerabilities in general beyond injection-related ones.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/shi](https://www.usenix.org/conference/usenixsecurity22/presentation/shi)
- **PDF:** [https://www.usenix.org/system/files/sec22-shi.pdf](https://www.usenix.org/system/files/sec22-shi.pdf)
## Experimental Security Analysis of the App Model in Business Collaboration Platforms.
### Authors
* Yunang Chen, University of Wisconsin–Madison
* Yue Gao, University of Wisconsin–Madison
* Nick Ceccio, University of Wisconsin–Madison
* Rahul Chatterjee, University of Wisconsin–Madison
* Kassem Fawaz, University of Wisconsin–Madison
* Earlence Fern, University of Wisconsin–Madison
* es, University of Wisconsin–Madison
### Abstract
> Business Collaboration Platforms like Microsoft Teams and Slack enable teamwork by supporting text chatting and third-party resource integration. A user can access online file storage, make video calls, and manage a code repository, all from within the platform, thus making them a hub for sensitive communication and resources. The key enabler for these productivity features is a third-party application model. We contribute an experimental security analysis of this model and the third-party apps. Performing this analysis is challenging because commercial platforms and their apps are closed-source systems. Our analysis methodology is to systematically investigate different types of interactions possible between apps and users. We discover that the access control model in these systems violates two fundamental security principles: least privilege and complete mediation. These violations enable a malicious app to exploit the confidentiality and integrity of user messages and third-party resources connected to the platform. We construct proof-of-concept attacks that can: (1) eavesdrop on user messages without having permission to read those messages; (2) launch fake video calls; (3) automatically merge code into repositories without user approval or involvement. Finally, we provide an analysis of countermeasures that systems like Slack and Microsoft Teams can adopt today.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/chen-yunang-experimental](https://www.usenix.org/conference/usenixsecurity22/presentation/chen-yunang-experimental)
- **PDF:** [https://www.usenix.org/system/files/sec22-chen-yunang-experimental.pdf](https://www.usenix.org/system/files/sec22-chen-yunang-experimental.pdf)
## SWAPP: A New Programmable Playground for Web Application Security.
### Authors
* Phakpoom Chinprutthiwong, SUCCESS Lab, Texas A&M University
* Jianwei Huang, SUCCESS Lab, Texas A&M University
* Guofei Gu, SUCCESS Lab, Texas A&M University
### Abstract
> Client-side web attacks are one of the major battlefields for cybercriminals today. To mitigate such attacks, researchers have proposed numerous defenses that can be deployed on a server or client. Server-side defenses can be easily deployed and modified by web developers, but it lacks the context of client-side attacks such as DOM-XSS attacks. On the other hand, client-side defenses, especially in the form of modified browsers or browser extensions, require constant vendor support or user involvement to be up to date.In this work, we explore the feasibility of using a new execution context, the service worker context, as a platform for web security defense development that is programmable, browser agnostic, and runs at the client side without user involvement. To this end, we propose and develop SWAPP (Service Worker APplication Platform), a framework for implementing security mechanisms inside a service worker. As the service worker is supported by most browsers, our framework is compatible with most clients. Furthermore, SWAPP is designed to enable the extensibility and programmability of the apps. We demonstrate the versatility of SWAPP by implementing various apps that can mitigate web attacks including a recent side-channel attack targeting websites that deploy a service worker. SWAPP allows websites to offload a part of the security tasks from the server to the client and also enables the possibility to deploy or retrofit emerging security features/prototypes before they are officially supported by browsers. Finally, we evaluate the performance overhead of our framework and show that deploying defenses on a service worker is a feasible option.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/chinprutthiwong](https://www.usenix.org/conference/usenixsecurity22/presentation/chinprutthiwong)
- **PDF:** [https://www.usenix.org/system/files/sec22-chinprutthiwong.pdf](https://www.usenix.org/system/files/sec22-chinprutthiwong.pdf)
## The Security Lottery: Measuring Client-Side Web Security Inconsistencies.
### Authors
* Sebastian Roth, CISPA Helmholtz Center for Information Security
* Stefano Calzavara, Università Ca' Foscari Venezia
* Moritz Wilhelm, CISPA Helmholtz Center for Information Security
* Alvise Rabitti, Università Ca' Foscari Venezia
* Ben Stock, CISPA Helmholtz Center for Information Security
### Abstract
> To mitigate a myriad of Web attacks, modern browsers support client-side security policies shipped through HTTP response headers. To enforce these defenses, the server needs to communicate them to the client, a seemingly straightforward process. However, users may access the same site in variegate ways, e.g., using different User-Agents, network access methods, or language settings. All these usage scenarios should enforce the same security policies, otherwise a security lottery would take place: depending on specific client characteristics, different levels of Web application security would be provided to users (inconsistencies). We formalize security guarantees provided through four popular mechanisms and apply this to measure the prevalence of inconsistencies in the security policies of top sites across different client characteristics. Based on our insights, we investigate the security implications of both deterministic and non-deterministic inconsistencies, and show how even prominent services are affected by them.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/roth](https://www.usenix.org/conference/usenixsecurity22/presentation/roth)
- **PDF:** [https://www.usenix.org/system/files/sec22-roth.pdf](https://www.usenix.org/system/files/sec22-roth.pdf)
## PatchCleanser: Certifiably Robust Defense against Adversarial Patches for Any Image Classifier.
### Authors
* Chong Xiang, Princeton University
* Saeed Mahloujifar, Princeton University
* Prateek Mittal, Princeton University
### Abstract
> The adversarial patch attack against image classification models aims to inject adversarially crafted pixels within a restricted image region (i.e., a patch) for inducing model misclassification. This attack can be realized in the physical world by printing and attaching the patch to the victim object; thus, it imposes a real-world threat to computer vision systems. To counter this threat, we design PatchCleanser as a certifiably robust defense against adversarial patches. In PatchCleanser, we perform two rounds of pixel masking on the input image to neutralize the effect of the adversarial patch. This image-space operation makes PatchCleanser compatible with any state-of-the-art image classifier for achieving high accuracy. Furthermore, we can prove that PatchCleanser will always predict the correct class labels on certain images against any adaptive white-box attacker within our threat model, achieving certified robustness. We extensively evaluate PatchCleanser on the ImageNet, ImageNette, and CIFAR-10 datasets and demonstrate that our defense achieves similar clean accuracy as state-of-the-art classification models and also significantly improves certified robustness from prior works. Remarkably, PatchCleanser achieves 83.9% top-1 clean accuracy and 62.1% top-1 certified robust accuracy against a 2%-pixel square patch anywhere on the image for the 1000-class ImageNet dataset.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/xiang](https://www.usenix.org/conference/usenixsecurity22/presentation/xiang)
- **PDF:** [https://www.usenix.org/system/files/sec22-xiang.pdf](https://www.usenix.org/system/files/sec22-xiang.pdf)
## Transferring Adversarial Robustness Through Robust Representation Matching.
### Authors
* Pratik Vaishnavi, Stony Brook University
* Kevin Eykholt, IBM
* Amir Rahmati, Stony Brook University
### Abstract
> With the widespread use of machine learning, concerns over its security and reliability have become prevalent. As such, many have developed defenses to harden neural networks against adversarial examples, imperceptibly perturbed inputs that are reliably misclassified. Adversarial training in which adversarial examples are generated and used during training is one of the few known defenses able to reliably withstand such attacks against neural networks. However, adversarial training imposes a significant training overhead and scales poorly with model complexity and input dimension. In this paper, we propose Robust Representation Matching (RRM), a low-cost method to transfer the robustness of an adversarially trained model to a new model being trained for the same task irrespective of architectural differences. Inspired by student-teacher learning, our method introduces a novel training loss that encourages the student to learn the teacher's robust representations. Compared to prior works, RRM is superior with respect to both model performance and adversarial training time. On CIFAR-10, RRM trains a robust model ~1.8X faster than the state-of-the-art. Furthermore, RRM remains effective on higher-dimensional datasets. On Restricted-ImageNet, RRM trains a ResNet50 model ~18X faster than standard adversarial training.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/vaishnavi](https://www.usenix.org/conference/usenixsecurity22/presentation/vaishnavi)
- **PDF:** [https://www.usenix.org/system/files/sec22-vaishnavi.pdf](https://www.usenix.org/system/files/sec22-vaishnavi.pdf)
## How Machine Learning Is Solving the Binary Function Similarity Problem.
### Authors
* Andrea Marcelli, Cisco Systems, Inc.
* Mariano Graziano, Cisco Systems, Inc.
* Xabier Ugarte-Pedrero, Cisco Systems, Inc.
* Yanick Fratantonio, Cisco Systems, Inc.
* Mohamad Mansouri, EURECOM
* Davide Balzarotti, EURECOM
### Abstract
> The ability to accurately compute the similarity between two pieces of binary code plays an important role in a wide range of different problems. Several research communities such as security, programming language analysis, and machine learning, have been working on this topic for more than five years, with hundreds of papers published on the subject. One would expect that, by now, it would be possible to answer a number of research questions that go beyond very specific techniques presented in papers, but that generalize to the entire research field. Unfortunately, this topic is affected by a number of challenges, ranging from reproducibility issues to opaqueness of research results, which hinders meaningful and effective progress.In this paper, we set out to perform the first measurement study on the state of the art of this research area. We begin by systematizing the existing body of research. We then identify a number of relevant approaches, which are representative of a wide range of solutions recently proposed by three different research communities. We re-implemented these approaches and created a new dataset (with binaries compiled with different compilers, optimizations settings, and for three different architectures), which enabled us to perform a fair and meaningful comparison. This effort allowed us to answer a number of research questions that go beyond what could be inferred by reading the individual research papers. By releasing our entire modular framework and our datasets (with associated documentation), we also hope to inspire future work in this interesting research area.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/marcelli](https://www.usenix.org/conference/usenixsecurity22/presentation/marcelli)
- **PDF:** [https://www.usenix.org/system/files/sec22-marcelli.pdf](https://www.usenix.org/system/files/sec22-marcelli.pdf)
## Blacklight: Scalable Defense for Neural Networks against Query-Based Black-Box Attacks.
### Authors
* Huiying Li, University of Chicago
* Shawn Shan, University of Chicago
* Emily Wenger, University of Chicago
* Jiayun Zhang, Fudan University
* Haitao Zheng, University of Chicago
* Ben Y. Zhao, University of Chicago
### Abstract
> Deep learning systems are known to be vulnerable to adversarial examples. In particular, query-based black-box attacks do not require knowledge of the deep learning model, but can compute adversarial examples over the network by submitting queries and inspecting returns. Recent work largely improves the efficiency of those attacks, demonstrating their practicality on today's ML-as-a-service platforms.We propose Blacklight, a new defense against query-based black-box adversarial attacks. Blacklight is driven by a fundamental insight: to compute adversarial examples, these attacks perform iterative optimization over the network, producing queries highly similar in the input space. Thus Blacklight detects query-based black-box attacks by detecting highly similar queries, using an efficient similarity engine operating on probabilistic content fingerprints. We evaluate Blacklight against eight state-of-the-art attacks, across a variety of models and image classification tasks. Blacklight identifies them all, often after only a handful of queries. By rejecting all detected queries, Blacklight prevents any attack from completing, even when persistent attackers continue to submit queries after banned accounts or rejected queries. Blacklight is also robust against several powerful countermeasures, including an optimal black-box attack that approximates white-box attacks in efficiency. Finally, we illustrate how Blacklight generalizes to other domains like text classification.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/li-huiying](https://www.usenix.org/conference/usenixsecurity22/presentation/li-huiying)
- **PDF:** [https://www.usenix.org/system/files/sec22-li-huiying.pdf](https://www.usenix.org/system/files/sec22-li-huiying.pdf)
## DnD: A Cross-Architecture Deep Neural Network Decompiler.
### Authors
* Ruoyu Wu, Purdue University
* Taegyu Kim, The Pennsylvania State University
* Dave (Jing) Tian, Purdue University
* Antonio Bianchi, Purdue University
* Dongyan Xu, Purdue University
### Abstract
> The usage of Deep Neural Networks (DNNs) has steadily increased in recent years. Especially when used in edge devices, dedicated DNN compilers are used to compile DNNs into binaries. Many security applications (such as DNN model extraction, white-box adversarial sample generation, and DNN model patching and hardening) are possible when a DNN model is accessible. However, these techniques cannot be applied to compiled DNNs. Unfortunately, no dedicated decompiler exists that is able to recover a high-level representation of a DNN starting from its compiled binary code.To address this issue, we propose DnD, the first compiler- and ISA-agnostic DNN decompiler. DnD uses symbolic execution, in conjunction with a dedicated loop analysis, to lift the analyzed binary code into a novel intermediate representation, able to express the high-level mathematical DNN operations in a compiler- and ISA-agnostic way. Then, DnD matches the extracted mathematical DNN operations with template mathematical DNN operations, and it recovers hyper-parameters and parameters of all the identified DNN operators, as well as the overall DNN topology. Our evaluation shows that DnD can perfectly recover different DNN models, extracting them from binaries compiled by two different compilers (Glow and TVM) for three different ISAs (Thumb, AArch64, and x86-64). Moreover, DnD enables extracting the DNN models used by real-world micro-controllers and attacking them using white-box adversarial machine learning techniques.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/wu-ruoyu](https://www.usenix.org/conference/usenixsecurity22/presentation/wu-ruoyu)
- **PDF:** [https://www.usenix.org/system/files/sec22-wu-ruoyu.pdf](https://www.usenix.org/system/files/sec22-wu-ruoyu.pdf)
## Measurement by Proxy: On the Accuracy of Online Marketplace Measurements.
### Authors
* Alej, Carnegie Mellon University
* ro Cuevas, Carnegie Mellon University
* Fieke Miedema, Delft University of Technology
* Kyle Soska, University of Illinois Urbana Champaign and Hikari Labs, Inc.
* Nicolas Christin, Carnegie Mellon University and Hikari Labs, Inc.
* Rolf van Wegberg, Delft University of Technology
### Abstract
> A number of recent studies have investigated online anonymous ("dark web") marketplaces. Almost all leverage a "measurement-by-proxy" design, in which researchers scrape market public pages, and take buyer reviews as a proxy for actual transactions, to gain insights into market size and revenue. Yet, we do not know if and how this method biases results. We build a framework to reason about marketplace measurement accuracy, and use it to contrast estimates projected from scrapes of Hansa Market with data from a back-end database seized by the police. We further investigate, by simulation, the impact of scraping frequency, consistency and rate-limits. We find that, even with a decent scraping regimen, one might miss approximately 46% of objects—with scraped listings differing significantly from not-scraped listings on price, views and product categories. This bias also impacts revenue calculations. We find Hansa's total market revenue to be US $50M, which projections based on our scrapes underestimate by a factor of four. Simulations further show that studies based on one or two scrapes are likely to suffer from a very poor coverage (on average, 14% to 30%, respectively). A high scraping frequency is crucial to achieve reliable coverage, even without a consistent scraping routine. When high-frequency scraping is difficult, e.g., due to deployed anti-scraping countermeasures, innovative scraper design, such as scraping most popular listings first, helps improve coverage. Finally, abundance estimators can provide insights on population coverage when population sizes are unknown.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/cuevas](https://www.usenix.org/conference/usenixsecurity22/presentation/cuevas)
- **PDF:** [https://www.usenix.org/system/files/sec22-cuevas.pdf](https://www.usenix.org/system/files/sec22-cuevas.pdf)
## Behind the Tube: Exploitative Monetization of Content on YouTube.
### Authors
* Andrew Chu, University of Chicago
* Arjun Arunasalam, Purdue University
* Muslum Ozgur Ozmen, Purdue University
* Z. Berkay Celik, Purdue University
### Abstract
> The YouTube video sharing platform is a prominent online presence that delivers various genres of content to society today. As the viewership and userbase of the platform grow, both individual users and larger companies have recognized the potential for monetizing this content. While content monetization is a native capability of the YouTube service, a number of requirements are enforced on the platform to prevent its abuse. Yet, methods to circumvent these requirements exist; many of which are potentially harmful to viewers and other users. In this paper, we present the first comprehensive study on exploitative monetization of content on YouTube. To do this, we first create two datasets; one using thousands of user posts from eleven forums whose users discuss monetization on YouTube, and one using listing data from five active sites that facilitate the purchase and sale of YouTube accounts. We then perform both manual and automated analysis to develop a view of illicit monetization exploits used on YouTube by both individual users and larger channel collectives. We discover six distinct exploits used to execute illicit content monetization on YouTube; four used by individual users, and two used by channel collectives. Further, we identify real-world evidence of each exploit on YouTube message board communities and provide insight into how each is executed. Through this, we present a comprehensive view of illicit monetization exploits on the YouTube platform that can motivate future investigation into mitigating these harmful endeavors.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/chu](https://www.usenix.org/conference/usenixsecurity22/presentation/chu)
- **PDF:** [https://www.usenix.org/system/files/sec22-chu.pdf](https://www.usenix.org/system/files/sec22-chu.pdf)
## When Sally Met Trackers: Web Tracking From the Users' Perspective.
### Authors
* Savino Dambra, EURECOM and Norton Research Group
* Isk, Norton Research Group
* er Sanchez-Rola, Norton Research Group
* Leyla Bilge, Norton Research Group
* Davide Balzarotti, EURECOM
### Abstract
> Web tracking has evolved to become a norm on the Internet.  As a matter of fact, the web tracking market has grown to raise billions of dollars. Privacy cautious web practitioners and researchers extensively studied the phenomenon proving how widespread this practice is, and providing effective solutions to give users the option of feeling private while freely surfing the web. However, because all those studies looked at this trend only from the trackers' perspective, still there are a lot of unknowns regarding what the real impact of tracking is on real users.  Our goal with this paper is to fill this gap in the web tracking topic.  Thanks to logs of web browsing telemetry, we were able to look at this trend from the users' eyes. Precisely, we measure how fast a user encounters trackers and research on options to reduce her privacy risk. Moreover, we also estimate the fraction of browsing histories that are known by trackers and discuss two tracking strategies to increase the existing knowledge about users.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/dambra](https://www.usenix.org/conference/usenixsecurity22/presentation/dambra)
- **PDF:** [https://www.usenix.org/system/files/sec22-dambra.pdf](https://www.usenix.org/system/files/sec22-dambra.pdf)
## How to Peel a Million: Validating and Expanding Bitcoin Clusters.
### Authors
* George Kappos, University College London and IC3
* Haaroon Yousaf, University College London and IC3
* Rainer Stütz, AIT - Austrian Institute of Technology
* Sofia Rollet, AIT - Austrian Institute of Technology
* Bernhard Haslhofer, Complexity Science Hub Vienna
* Sarah Meiklejohn, University College London and IC3
### Abstract
> One of the defining features of Bitcoin and the thousands of cryptocurrencies that have been derived from it is a globally visible transaction ledger. While Bitcoin uses pseudonyms as a way to hide the identity of its participants, a long line of research has demonstrated that Bitcoin is not anonymous. This has been perhaps best exemplified by the development of clustering heuristics, which have in turn given rise to the ability to track the flow of bitcoins as they are sent from one entity to another.In this paper, we design a new heuristic that is designed to track a certain type of flow, called a peel chain, that represents many transactions performed by the same entity; in doing this, we implicitly cluster these transactions and their associated pseudonyms together. We then use this heuristic to both validate and expand the results of existing clustering heuristics. We also develop a machine learning-based validation method and, using a ground-truth dataset, evaluate all our approaches and compare them with the state of the art. Ultimately, our goal is to not only enable more powerful tracking techniques but also call attention to the limits of anonymity in these systems.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/kappos](https://www.usenix.org/conference/usenixsecurity22/presentation/kappos)
## RapidPatch: Firmware Hotpatching for Real-Time Embedded Devices.
### Authors
* Yi He, Tsinghua University and BNRist
* Zhenhua Zou, Tsinghua University and BNRist
* Kun Sun, George Mason University
* Zhuotao Liu, Tsinghua University and BNRist
* Ke Xu, Tsinghua University and BNRist
* Qian Wang, Wuhan University
* Chao Shen, Xi'an Jiaotong University
* Zhi Wang, Florida State University
* Qi Li, Tsinghua University and BNRist
### Abstract
> Nowadays real-time embedded devices are becoming one main target of cyber attacks. A huge number of embedded devices equipped with outdated firmware are subject to various vulnerabilities, but they cannot be timely patched due to two main reasons. First, it is difficult for vendors who have various types of fragmented devices to generate patches for each type of device. Second, it is challenging to deploy patches on many embedded devices without restarting or halting real-time tasks, hindering the patch installation on devices (e.g., industrial control devices) that have high availability requirements. In this paper, we present RapidPatch, a new hotpatching framework to facilitate patch propagation by installing generic patches without disrupting other tasks running on heterogeneous embedded devices. RapidPatch allows RTOS developers to directly release common patches for all downstream devices so that device maintainers can easily generate device-specific patches for different firmware. We utilize eBPF virtual machines to execute patches on resource-constrained embedded devices and develop three hotpatching strategies to support hotpatching for all major microcontroller (MCU) architectures. In particular, we propose two types of eBPF patches for different types of vulnerabilities and develop an eBPF patch verifier to ensure patch safety. We evaluate RapidPatch with major CVEs on four major RTOSes running on different embedded devices. We find that over 90% vulnerabilities can be hotpatched via RapidPatch. Our system can work on devices with 64 KB or more memory and 64 MHz MCU frequency. The average patch delay is less than 8 µs and the overall latency overhead is less than 0.6%.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/he-yi](https://www.usenix.org/conference/usenixsecurity22/presentation/he-yi)
- **PDF:** [https://www.usenix.org/system/files/sec22-he-yi.pdf](https://www.usenix.org/system/files/sec22-he-yi.pdf)
## GAROTA: Generalized Active Root-Of-Trust Architecture (for Tiny Embedded Devices).
### Authors
* Esmerald Aliaj, University of California, Irvine
* Ivan De Oliveira Nunes, Rochester Institute of Technology
* Gene Tsudik, University of California, Irvine
### Abstract
> Embedded (aka smart or IoT) devices are increasingly popular and becoming ubiquitous. Unsurprisingly, they are also attractive attack targets for exploits and malware. Low-end embedded devices, designed with strict cost, size, and energy limitations, are especially challenging to secure, given their lack of resources to implement sophisticated security services, available on higher-end computing devices. To this end, several tiny Roots-of-Trust (RoTs) were proposed to enable services, such as remote verification of device's software state and run-time integrity. Such RoTs operate reactively: they can prove whether a desired action (e.g., software update or program execution) was performed on a specific device. However, they can not guarantee that a desired action will be performed, since malware controlling the device can trivially block access to the RoT by ignoring/discarding received commands and other trigger events. This is an important problem because it allows malware to effectively "brick" or incapacitate a potentially huge number of (possibly mission-critical) devices.Though recent work made progress in terms of incorporating more active behavior atop existing RoTs, much of it relies on extensive hardware support in the form of Trusted Execution Environments (TEEs), which are generally too costly for low-end devices. In this paper, we set out to systematically design a minimal active RoT for low-end MCU-s. We begin with three questions: (1) What functionality is required to guarantee actions in the presence of malware? (2) How to implement this efficiently? and (3) What are the security benefits of such an active RoT architecture? We then design, implement, formally verify, and evaluate GAROTA : Generalized Active Root-Of-Trust Architecture. We believe that GAROTA is the first clean-slate design of an active RoT for low-end MCU-s. We show how GAROTA guarantees that even a fully software-compromised low-end MCU performs a desired action. We demonstrate its practicality by implementing GAROTA in the context of three types of applications where actions are triggered by: sensing hardware, network events and timers. We also formally specify and verify GAROTA functionality and properties.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/aliaj](https://www.usenix.org/conference/usenixsecurity22/presentation/aliaj)
- **PDF:** [https://www.usenix.org/system/files/sec22-aliaj.pdf](https://www.usenix.org/system/files/sec22-aliaj.pdf)
## ReZone: Disarming TrustZone with TEE Privilege Reduction.
### Authors
* David Cerdeira, Centro ALGORITMI, Universidade do Minho
* José Martins, Centro ALGORITMI, Universidade do Minho
* Nuno Santos, INESC-ID / Instituto Superior Técnico, Universidade de Lisboa
* S, Centro ALGORITMI, Universidade do Minho
* ro Pinto, Centro ALGORITMI, Universidade do Minho
### Abstract
> In TrustZone-assisted TEEs, the trusted OS has unrestricted access to both secure and normal world memory. Unfortunately, this architectural limitation has opened an aisle of exploration for attackers, which have demonstrated how to leverage a chain of exploits to hijack the trusted OS and gain full control of the system, targeting (i) the rich execution environment (REE), (ii) all trusted applications (TAs), and (iii) the secure monitor. In this paper, we propose ReZone. The main novelty behind ReZone design relies on leveraging TrustZone-agnostic hardware primitives available on commercially off-the-shelf (COTS) platforms to restrict the privileges of the trusted OS. With ReZone, a monolithic TEE is restructured and partitioned into multiple sandboxed domains named zones, which have only access to private resources. We have fully implemented ReZone for the i.MX 8MQuad EVK and integrated it with Android OS and OP-TEE. We extensively evaluated ReZone using microbenchmarks and real-world applications. ReZone can sustain popular applications like DRM-protected video encoding with acceptable performance overheads. We have surveyed 80 CVE vulnerability reports and estimate that ReZone could mitigate 86.84% of them.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/cerdeira](https://www.usenix.org/conference/usenixsecurity22/presentation/cerdeira)
- **PDF:** [https://www.usenix.org/system/files/sec22-cerdeira.pdf](https://www.usenix.org/system/files/sec22-cerdeira.pdf)
## Holistic Control-Flow Protection on Real-Time Embedded Systems with Kage.
### Authors
* Yufei Du, UNC Chapel Hill and University of Rochester
* Zhuojia Shen, University of Rochester
* Komail Dharsee, University of Rochester
* Jie Zhou, University of Rochester
* Robert J. Walls, Worcester Polytechnic Institute
* John Criswell, University of Rochester
### Abstract
> This paper presents Kage: a system that protects the control data of both application and kernel code on microcontroller-based embedded systems. Kage consists of a Kage-compliant embedded OS that stores all control data in separate memory regions from untrusted data, a compiler that transforms code to protect these memory regions efficiently and to add forward-edge control-flow integrity checks, and a secure API that allows safe updates to the protected data. We implemented Kage as an extension to FreeRTOS, an embedded real-time operating system. We evaluated Kage's performance using the CoreMark benchmark. Kage incurred a 5.2% average runtime overhead and 49.8% code size overhead. Furthermore, the code size overhead was only 14.2% when compared to baseline FreeRTOS with the MPU enabled. We also evaluated Kage's security guarantees by measuring and analyzing reachable code-reuse gadgets. Compared to FreeRTOS, Kage reduces the number of reachable gadgets from 2,276 to 27, and the remaining 27 gadgets cannot be stitched together to launch a practical attack.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/du](https://www.usenix.org/conference/usenixsecurity22/presentation/du)
- **PDF:** [https://www.usenix.org/system/files/sec22-du.pdf](https://www.usenix.org/system/files/sec22-du.pdf)
## Orca: Blocklisting in Sender-Anonymous Messaging.
### Authors
* Nirvan Tyagi, Cornell University
* Julia Len, Cornell University
* Ian Miers, University of Maryland
* Thomas Ristenpart, Cornell Tech
### Abstract
> Sender-anonymous end-to-end encrypted messaging allows sending messages to a recipient without revealing the sender's identity to the messaging platform. Signal recently introduced a sender anonymity feature that includes an abuse mitigation mechanism meant to allow the platform to block malicious senders on behalf of a recipient.We explore the tension between sender anonymity and abuse mitigation. We start by showing limitations of Signal's deployed mechanism, observing that it results in relatively weak anonymity properties and showing a new griefing attack that allows a malicious sender to drain a victim's battery. We therefore design a new protocol, called Orca, that allows recipients to register a privacy-preserving blocklist with the platform. Without learning the sender's identity, the platform can check that the sender is not on the blocklist and that the sender can be identified by the recipient. We construct Orca using a new type of group signature scheme, for which we give formal security notions. Our prototype implementation showcases Orca's practicality.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/tyagi](https://www.usenix.org/conference/usenixsecurity22/presentation/tyagi)
- **PDF:** [https://www.usenix.org/system/files/sec22-tyagi.pdf](https://www.usenix.org/system/files/sec22-tyagi.pdf)
## Adversarial Detection Avoidance Attacks: Evaluating the robustness of perceptual hashing-based client-side scanning.
### Authors
* Shubham Jain, Imperial College London
* Ana-Maria Crețu, Imperial College London
* Yves-Alex, Imperial College London
* re de Montjoye, Imperial College London
### Abstract
> End-to-end encryption (E2EE) by messaging platforms enable people to securely and privately communicate with one another. Its widespread adoption however raised concerns that illegal content might now be shared undetected. Following the global pushback against key escrow systems, client-side scanning based on perceptual hashing has been recently proposed by tech companies, governments and researchers to detect illegal content in E2EE communications. We here propose the first framework to evaluate the robustness of perceptual hashing-based client-side scanning to detection avoidance attacks and show current systems to not be robust. More specifically, we propose three adversarial attacks–a general black-box attack and two white-box attacks for discrete cosine transform-based algorithms–against perceptual hashing algorithms. In a large-scale evaluation, we show perceptual hashing-based client-side scanning mechanisms to be highly vulnerable to detection avoidance attacks in a black-box setting, with more than 99.9% of images successfully attacked while preserving the content of the image. We furthermore show our attack to generate diverse perturbations, strongly suggesting that straightforward mitigation strategies would be ineffective. Finally, we show that the larger thresholds necessary to make the attack harder would probably require more than one billion images to be flagged and decrypted daily, raising strong privacy concerns. Taken together, our results shed serious doubts on the robustness of perceptual hashingbased client-side scanning mechanisms currently proposed by governments, organizations, and researchers around the world.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/jain](https://www.usenix.org/conference/usenixsecurity22/presentation/jain)
- **PDF:** [https://www.usenix.org/system/files/sec22-jain.pdf](https://www.usenix.org/system/files/sec22-jain.pdf)
## Hecate: Abuse Reporting in Secure Messengers with Sealed Sender.
### Authors
* Rawane Issa, Boston University
* Nicolas Alhaddad, Boston University
* Mayank Varia, Boston University
### Abstract
> End-to-end encryption provides strong privacy protections to billions of people, but it also complicates efforts to moderate content that can seriously harm people. To address this concern, Tyagi et al. [CRYPTO 2019] introduced the concept of asymmetric message franking (AMF) so that people can report abusive content to a moderator, while otherwise retaining end-to-end privacy by default and compatibility with anonymous communication systems like Signal's sealed sender. In this work, we provide a new construction for asymmetric message franking called Hecate that is faster, more secure, and introduces additional functionality compared to Tyagi et al. First, our construction uses fewer invocations of standardized crypto primitives and operates in the plain model. Second, on top of AMF's accountability and deniability requirements, we also add forward and backward secrecy. Third, we combine AMF with source tracing, another approach to content moderation that has previously been considered only in the setting of non-anonymous networks. Source tracing allows for messages to be forwarded, and a report only identifies the original source who created a message. To provide anonymity for senders and forwarders, we introduce a model of AMF with preprocessing whereby every client authenticates with the moderator out-of-band to receive a token that they later consume when sending a message anonymously.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/issa](https://www.usenix.org/conference/usenixsecurity22/presentation/issa)
- **PDF:** [https://www.usenix.org/system/files/sec22-issa.pdf](https://www.usenix.org/system/files/sec22-issa.pdf)
## End-to-Same-End Encryption: Modularly Augmenting an App with an Efficient, Portable, and Blind Cloud Storage.
### Authors
* Long Chen, Institute of Software, Chinese Academy of Sciences
* Ya-Nan Li, The University of Sydney
* Qiang Tang, The University of Sydney
* Moti Yung, Google & Columbia University
### Abstract
> The cloud has become pervasive, and we ask: how can we protect cloud data against the cloud itself? For messaging Apps, facilitating user-to-user private communication via a cloud server, security has been formulated and solved efficiently via End-to-End encryption, building on existing channels between end-users via servers (i.e., exploiting TLS, certificates, and encryption, without the need to program new primitives). However, the analogous problem for Apps employing servers for storing and retrieving end-user data privately, solving the analogous "privacy from the server itself" (cloud-blind storage) where (1) based on existing messaging/infrastructure and (2) allowing user mobility, is, in fact, still open. Existing proposals, like password protected secret sharing (PPSS), target end-to-same-end encryption of storage, but need new protocols, whereas most popular commercial cloud storage services are not programmable. Namely, they lack the simplicity needed for being portable over any cloud storage service.Here, we propose a novel system for storing private data in the cloud storage with the help of a key server (necessary given the requirements). In our system, the user data will be secure from any of: the cloud server, the key server, or any illegitimate users, while the authenticated user can access the data on any devices just via a correct passphrase. The most attractive feature of our system is that it does not require the cloud storage server to support any newly programmable operations, except the existing client login and the data storing. Moreover, our system is simply built on top of the existing App password login system, so the user only needs one passphrase to login the App and access his secure storage. The security of our protocol, in turn, is proved under our rigorous models, and the efficiency is further demonstrated by real-world network experiments over Amazon S3. We remark that a very preliminary variant, based on our principles, was deployed by Snapchat in their My Eyes Only module, serving hundreds of millions of users!
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/chen-long](https://www.usenix.org/conference/usenixsecurity22/presentation/chen-long)
- **PDF:** [https://www.usenix.org/system/files/sec22-chen-long.pdf](https://www.usenix.org/system/files/sec22-chen-long.pdf)
## Omnes pro uno: Practical Multi-Writer Encrypted Database.
### Authors
* Jiafan Wang, The Chinese University of Hong Kong
* Sherman S. M. Chow, The Chinese University of Hong Kong
### Abstract
> Multi-writer encrypted databases allow a reader to search over data contributed by multiple writers securely. Public-key searchable encryption (PKSE) appears to be the right primitive. However, its search latency is not welcomed in practice for having public-key operations linear in the entire database. In contrast, symmetric searchable encryption (SSE) realizes sublinear search, but it is inherently not multi-writer.This paper aims for the best of both SSE and PKSE, i.e., sublinear search and multiple writers, by formalizing hybrid searchable encryption (HSE), with some seemingly conflicting yet desirable features, requiring new insights to achieve.Our first contribution is a history-based security definition with new flavors of leakage concerning updates and writer corruptions, which are absent in the only known multi-writer notion of PKSE since it is vacuously secure against writers. HSE, built on top of dynamic SSE (DSSE), should satisfy the de facto standard of forward privacy. Its multi-writer support, again, makes the known approach (of secret state maintenance) fails. HSE should also feature efficient controllable search – each search can be confined to a different writer subset, while the search token size remains constant. For these, we devise a new partial rebuild technique and two new building blocks (of independent interests) – ID-coupling key-aggregate encryption and (optimal) epoch-based forward-private DSSE.Our evaluation over real-world datasets shows that HSE, surpassing prior arts by orders of magnitude, is concretely efficient for popular multi-writer database applications.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/wang-jiafan](https://www.usenix.org/conference/usenixsecurity22/presentation/wang-jiafan)
- **PDF:** [https://www.usenix.org/system/files/sec22-wang-jiafan.pdf](https://www.usenix.org/system/files/sec22-wang-jiafan.pdf)
## Faster Yet Safer: Logging System Via Fixed-Key Blockcipher.
### Authors
* Viet Tung Hoang, Florida State University
* Cong Wu, Florida State University
* Xin Yuan, Florida State University
### Abstract
> System logs are crucial for forensic analysis, but to be useful, they need to be tamper-proof. To protect the logs, a number of secure logging systems have been proposed from both academia and the industry. Unfortunately, except for the recent KennyLoggings construction, all other logging systems are broken by an attack of Paccagnella et al. (CCS 2020). In this work, we build a secure logging system that improves KennyLoggings in several fronts: adoptability, security, and performance. Our key insight for performance gain is to use AES on a fixed, known key. While this trick is widely used in secure distributed computing, this is the first time it has found an application in the area of symmetric-key cryptography.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/hoang](https://www.usenix.org/conference/usenixsecurity22/presentation/hoang)
- **PDF:** [https://www.usenix.org/system/files/sec22-hoang.pdf](https://www.usenix.org/system/files/sec22-hoang.pdf)
## IHOP: Improved Statistical Query Recovery against Searchable Symmetric Encryption through Quadratic Optimization.
### Authors
* Simon Oya, University of Waterloo
* Florian Kerschbaum, University of Waterloo
### Abstract
> Effective query recovery attacks against Searchable Symmetric Encryption (SSE) schemes typically rely on auxiliary ground-truth information about the queries or dataset. Query recovery is also possible under the weaker statistical auxiliary information assumption, although statistical-based attacks achieve lower accuracy and are not considered a serious threat. In this work we present IHOP, a statistical-based query recovery attack that formulates query recovery as a quadratic optimization problem and reaches a solution by iterating over linear assignment problems. We perform an extensive evaluation with five real datasets, and show that IHOP outperforms all other statistical-based query recovery attacks under different parameter and leakage configurations, including the case where the client uses some access-pattern obfuscation defenses. In some cases, our attack achieves almost perfect query recovery accuracy. Finally, we use IHOP in a frequency-only leakage setting where the client's queries are correlated, and show that our attack can exploit query dependencies even when PANCAKE, a recent frequency-hiding defense by Grubbs et al., is applied. Our findings indicate that statistical query recovery attacks pose a severe threat to privacy-preserving SSE schemes.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/oya](https://www.usenix.org/conference/usenixsecurity22/presentation/oya)
- **PDF:** [https://www.usenix.org/system/files/sec22-oya.pdf](https://www.usenix.org/system/files/sec22-oya.pdf)
## Dynamic Searchable Encryption with Optimal Search in the Presence of Deletions.
### Authors
* Javad Ghareh Chamani, Hong Kong University of Science and Technology
* Dimitrios Papadopoulos, Hong Kong University of Science and Technology
* Mohammadamin Karbasforushan, UC Santa Cruz
* Ioannis Demertzis, UC Santa Cruz
### Abstract
> We focus on the problem of Dynamic Searchable Encryption (DSE) with efficient (optimal/quasi-optimal) search in the presence of deletions. Towards that end, we first propose OSSE, the first DSE scheme that can achieve asymptotically optimal search time, linear to the result size and independent of any prior deletions, improving the previous state of the art by a multiplicative logarithmic factor. We then propose our second scheme LLSE, that achieves a sublogarithmic search overhead (loglogi_w, where i_w is the number or prior insertions for a keyword) compared to the optimal achieved by OSSE. While this is slightly worse than our first scheme, it still outperforms prior works, while also achieving faster deletions and asymptotically smaller server storage. Both schemes have standard leakage profiles and are forward-and-backward private. Our experimental evaluation is very encouraging as it shows our schemes consistently outperform the prior state-of-the-art DSE by 1.2-6.6x in search computation time, while also requiring just a single roundtrip to receive the search result. Even compared with prior simpler and very efficient constructions in which all deleted records are returned as part of the result, our OSSE achieves better performance for deletion rates ranging from 45-55%, while the previous state-of-the-art quasi-optimal scheme achieves this for 65-75% deletion rates.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/chamani](https://www.usenix.org/conference/usenixsecurity22/presentation/chamani)
- **PDF:** [https://www.usenix.org/system/files/sec22-chamani.pdf](https://www.usenix.org/system/files/sec22-chamani.pdf)
## ALASTOR: Reconstructing the Provenance of Serverless Intrusions.
### Authors
* Pubali Datta, University of Illinois at Urbana-Champaign
* Isaac Polinsky, North Carolina State University
* Muhammad Adil Inam, University of Illinois at Urbana-Champaign
* Adam Bates, University of Illinois at Urbana-Champaign
* William Enck, North Carolina State University
### Abstract
> Serverless computing has freed developers from the burden of managing their own platform and infrastructure, allowing them to rapidly prototype and deploy applications. Despite its surging popularity, however, serverless raises a number of concerning security implications. Among them is the difficulty of investigating intrusions – by decomposing traditional applications into ephemeral re-entrant functions, serverless has enabled attackers to conceal their activities within legitimate workflows, and even prevent root cause analysis by abusing warm container reuse policies to break causal paths. Unfortunately, neither traditional approaches to system auditing nor commercial serverless security products provide the transparency needed to accurately track these novel threats.In this work, we propose ALASTOR, a provenance-based auditing framework that enables precise tracing of suspicious events in serverless applications. ALASTOR records function activity at both system and application layers to capture a holistic picture of each function instances' behavior. It then aggregates provenance from different functions at a central repository within the serverless platform, stitching it together to produce a global data provenance graph of complex function workflows. ALASTOR is both function and language-agnostic, and can easily be integrated into existing serverless platforms with minimal modification. We implement ALASTOR for the OpenFaaS platform and evaluate its performance using the well-established Nordstrom Hello,Retail! application, discovering in the process that ALASTOR imposes manageable overheads (13.74%), in exchange for significantly improved forensic capabilities as compared to commercially-available monitoring tools. To our knowledge, ALASTOR is the first auditing framework specifically designed to satisfy the operational requirements of serverless platforms.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/datta](https://www.usenix.org/conference/usenixsecurity22/presentation/datta)
- **PDF:** [https://www.usenix.org/system/files/sec22-datta.pdf](https://www.usenix.org/system/files/sec22-datta.pdf)
## Back-Propagating System Dependency Impact for Attack Investigation.
### Authors
* Pengcheng Fang, Case Western Reserve University
* Peng Gao, Virginia Tech
* Changlin Liu, Case Western Reserve University
* Erman Ayday, Case Western Reserve University
* Kangkook Jee, University of Texas at Dallas
* Ting Wang, Penn State University
* Yanfang (Fanny) Ye, Case Western Reserve University
* Zhuotao Liu, Tsinghua University
* Xusheng Xiao, Case Western Reserve University
### Abstract
> Causality analysis on system auditing data has emerged as an important solution for attack investigation. Given a POI (Point-Of-Interest) event (e.g., an alert fired on a suspicious file creation), causality analysis constructs a dependency graph, in which nodes represent system entities (e.g., processes and files) and edges represent dependencies among entities, to reveal the attack sequence. However, causality analysis often produces a huge graph (> 100,000 edges) that is hard for security analysts to inspect. From the dependency graphs of various attacks, we observe that (1) dependencies that are highly related to the POI event often exhibit a different set of properties (e.g., data flow and time) from the less-relevant dependencies; (2) the POI event is often related to a few attack entries (e.g., downloading a file). Based on these insights, we propose DEPIMPACT, a framework that identifies the critical component of a dependency graph (i.e., a subgraph) by (1) assigning discriminative dependency weights to edges to distinguish critical edges that represent the attack sequence from less-important dependencies, (2) propagating dependency impacts backward from the POI event to entry points, and (3) performing forward causality analysis from the top-ranked entry nodes based on their dependency impacts to filter out edges that are not found in the forward causality analysis. Our evaluations on the 150 million real system auditing events of real attacks and the DARPA TC dataset show that DEPIMPACT can significantly reduce the large dependency graphs (∼ 1,000,000 edges) to a small graph (∼ 234 edges), which is 4611× smaller. The comparison with the other state-of-the-art causality analysis techniques shows that DEPIMPACT is 106× more effective in reducing the dependency graphs while preserving the attack sequences.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/fang](https://www.usenix.org/conference/usenixsecurity22/presentation/fang)
- **PDF:** [https://www.usenix.org/system/files/sec22-fang.pdf](https://www.usenix.org/system/files/sec22-fang.pdf)
## Ground Truth for Binary Disassembly is Not Easy.
### Authors
* Chengbin Pang, Nanjing University
* Tiantai Zhang, Nanjing University
* Ruotong Yu, University of Utah
* Bing Mao, Nanjing University
* Jun Xu, University of Utah
### Abstract
> Modern disassembly tools often rely on empirical evaluations to validate their performance and discover their limitations, thus promoting long-term evolvement. To support the empirical evaluation, a foundation is the right approach to collect the ground truth knowledge. However, there has been no unanimous agreement on the approach we should use. Most users pick an approach based on their experience or will, regardless of the properties that the approach presents.In this paper, we perform a study on the approaches to building the ground truth for binary disassembly, aiming to shed light on the right way for the future. We first provide a taxonomy of the approaches used by past research, which unveils five major mechanisms behind those approaches. Following the taxonomy, we summarize the properties of the five mechanisms from two perspectives: (i) the coverage and precision of the ground truth produced by the mechanisms and (ii) the applicable scope of the mechanisms (e.g., what disassembly tasks and what types of binaries are supported). The summarization, accompanied by quantitative evaluations, illustrates that many mechanisms are ill-suited to support the generation of disassembly ground truth. The mechanism best serving today's need is to trace the compiling process of the target binaries to collect the ground truth information.Observing that the existing tool to trace the compiling process can still miss ground truth results and can only handle x86/x64 binaries, we extend the tool to avoid overlooking those results and support ARM32/AArch64/MIPS32/MIPS64 binaries. We envision that our extension will make the tool a better foundation to enable universal, standard ground truth for binary disassembly.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/pang-chengbin](https://www.usenix.org/conference/usenixsecurity22/presentation/pang-chengbin)
- **PDF:** [https://www.usenix.org/system/files/sec22-pang-chengbin.pdf](https://www.usenix.org/system/files/sec22-pang-chengbin.pdf)
## FreeWill: Automatically Diagnosing Use-after-free Bugs via Reference Miscounting Detection on Binaries.
### Authors
* Liang He, TCA, Institute of Software, Chinese Academy of Sciences
* Hong Hu, Pennsylvania State University
* Purui Su, TCA / SKLCS, Institute of Software, Chinese Academy of Sciences and School of Cyber Security, University of Chinese Academy of Sciences
* Yan Cai, SKLCS, Institute of Software, Chinese Academy of Sciences
* Zhenkai Liang, National University of Singapore
### Abstract
> Memory-safety issues in operating systems and popular applications are still top security threats. As one widely exploited vulnerability, Use After Free (UAF) resulted in hundreds of new incidents every year. Existing bug diagnosis techniques report the locations that allocate or deallocate the vulnerable object, but cannot provide sufficient information for developers to reason about a bug or synthesize a correct patch.In this work, we identified incorrect reference counting as one common root cause of UAF bugs: if the developer forgets to increase the counter for a newly created reference, the program may prematurely free the actively used object, rendering other references dangling pointers. We call this problem reference miscounting. By proposing an omission-aware counting model, we developed an automatic method, FREEWILL, to diagnose UAF bugs. FREEWILL first reproduces a UAF bug and collects related execution trace. Then, it identifies the UAF object and related references. Finally, FREEWILL compares reference operations with our model to detect reference miscounting. We evaluated FREEWILL on 76 real-world UAF bugs and it successfully confirmed reference miscounting as root causes for 48 bugs and dangling usage for 18 bugs. FREEWILL also identified five null-pointer dereference bugs and failed to analyze five bugs. FREEWILL can complete its analysis within 15 minutes on average, showing its practicality for diagnosing UAF bugs.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/he-liang](https://www.usenix.org/conference/usenixsecurity22/presentation/he-liang)
- **PDF:** [https://www.usenix.org/system/files/sec22-he-liang.pdf](https://www.usenix.org/system/files/sec22-he-liang.pdf)
## PolyCruise: A Cross-Language Dynamic Information Flow Analysis.
### Authors
* Wen Li, Washington State University, Pullman
* Jiang Ming, University of Texas at Arlington
* Xiapu Luo, The Hong Kong Polytechnic University
* Haipeng Cai, Washington State University, Pullman
### Abstract
> Despite the fact that most real-world software systems today are written in multiple programming languages, existing program analysis based security techniques are still limited to single-language code. In consequence, security flaws (e.g., code vulnerabilities) at and across language boundaries are largely left out as blind spots. We present PolyCruise, a technique that enables holistic dynamic information flow analysis (DIFA) across heterogeneous languages hence security applications empowered by DIFA (e.g., vulnerability discovery) for multilingual software. PolyCruise combines a light language-specific analysis that computes symbolic dependencies in each language unit with a language-agnostic online data flow analysis guided by those dependencies, in a way that overcomes language heterogeneity. Extensive evaluation of its implementation for Python-C programs against micro, medium-sized, and large-scale benchmarks demonstrated PolyCruise's practical scalability and promising capabilities. It has enabled the discovery of 14 unknown cross-language security vulnerabilities in real-world multilingual systems such as NumPy, with 11 confirmed, 8 CVEs assigned, and 8 fixed so far. We also contributed the first benchmark suite for systematically assessing multilingual DIFA.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/li-wen](https://www.usenix.org/conference/usenixsecurity22/presentation/li-wen)
- **PDF:** [https://www.usenix.org/system/files/sec22-li-wen.pdf](https://www.usenix.org/system/files/sec22-li-wen.pdf)
## SYMSAN: Time and Space Efficient Concolic Execution via Dynamic Data-flow Analysis.
### Authors
* Ju Chen, UC Riverside
* Wookhyun Han, KAIST
* Mingjun Yin, UC Riverside
* Haochen Zeng, UC Riverside
* Chengyu Song, UC Riverside
* Byoungyoung Lee, Seoul National University
* Heng Yin, UC Riverside
* Insik Shin, KAIST
### Abstract
> Concolic execution is a powerful program analysis technique for systematically exploring execution paths. Compared to random-mutation-based fuzzing, concolic execution is especially good at exploring paths that are guarded by complex and tight branch predicates. The drawback, however, is that concolic execution engines are much slower than native execution. While recent advances in concolic execution have significantly reduced its performance overhead, our analysis shows that state-of-the-art concolic executors overlook the overhead for managing symbolic expressions. Based on the observation that concolic execution can be modeled as a special form of dynamic data-flow analysis, we propose to leverage existing highly-optimized data-flow analysis frameworks to implement concolic executors. To validate this idea, we implemented a prototype SYMSAN based on the data-flow sanitizer of LLVM and evaluated it against the state-of-the-art concolic executors SymCC and SymQEMU with three sets of programs: nbench, the DARPA Cyber Grand Challenge dataset, and real-world applications from Google's Fuzzbench and binutils. The results showed that SYMSAN has a much lower overhead for managing symbolic expressions. The reduced overhead can also lead to faster concolic execution and improved code coverage.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/chen-ju](https://www.usenix.org/conference/usenixsecurity22/presentation/chen-ju)
- **PDF:** [https://www.usenix.org/system/files/sec22-chen-ju.pdf](https://www.usenix.org/system/files/sec22-chen-ju.pdf)
## CellIFT: Leveraging Cells for Scalable and Precise Dynamic Information Flow Tracking in RTL.
### Authors
* Flavien Solt, ETH Zurich
* Ben Gras, Intel Corporation
* Kaveh Razavi, ETH Zurich
### Abstract
> Dynamic Information Flow Tracking (dynamic IFT) is a well-known technique with many security applications such as analyzing the behavior of a system given an input and detecting security violations. While there are many widely used open dynamic IFT solutions that scale to large software, the same level of support is unfortunately lacking for hardware. This gap is becoming more pronounced with the increasing complexity of open-source hardware and the plethora of recent hardware attacks.We introduce CellIFT, a new design point in the space of dynamic IFT for hardware. CellIFT leverages the logical macrocell abstraction (e.g., an adder) to achieve scalability, precision and completeness when instrumenting a given Register Transfer Level (RTL) hardware design. Cell-level dynamic IFT does not suffer from the scalability problems that are inherent to lower levels of abstraction such as gates, yet it achieves completeness given the limited number of cell types. We show the versatility of CellIFT by instrumenting five distinct RISC-V designs, one of which is a complete SoC. The only existing complete solution already fails to instrument two of these designs. Our extensive evaluation using microbenchmarks and standard RISC-V benchmarks on the instrumented designs shows that CellIFT is 21× to 61× faster than the state of the art in terms of simulation runtime without losing precision. We further show-case concrete applications of CellIFT in four scenarios by detecting: 1) sources of microarchitectural information leakage, 2) microarchitectural bugs such as Meltdown, 3) speculative vulnerabilities such as Spectre-BCB, and 4) SoC-wide architectural design flaws. We release CellIFT as open source to enable RTL-level security research for the wider community.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/solt](https://www.usenix.org/conference/usenixsecurity22/presentation/solt)
- **PDF:** [https://www.usenix.org/system/files/sec22-solt.pdf](https://www.usenix.org/system/files/sec22-solt.pdf)
## FlowMatrix: GPU-Assisted Information-Flow Analysis through Matrix-Based Representation.
### Authors
* Kaihang Ji, National University of Singapore
* Jun Zeng, National University of Singapore
* Yuancheng Jiang, National University of Singapore
* Zhenkai Liang, National University of Singapore
* Zheng Leong Chua, Independent Researcher
* Prateek Saxena, National University of Singapore
* Abhik Roychoudhury, National University of Singapore
### Abstract
> Dynamic Information Flow Tracking (DIFT) forms the foundation of a wide range of security and privacy analyses. The main challenges faced by DIFT techniques are performance and scalability. Due to the large number of states in a program, the number of data flows can be prohibitively large and efficiently performing interactive data flow analysis queries using existing approaches is challenging. In this paper, we identify that DIFT under dependency-based information flow rules can be cast as linear transformations over taint state. This enables a novel matrix-based representation, which we call FlowMatrix, to represent DIFT operations concisely and makes it practical to adopt GPUs as co-processors for DIFT analysis. FlowMatrix provides efficient support for interactive DIFT query operations. We design a DIFT query system and prototype it on commodity GPUs. Our evaluation shows that our prototype outperforms CPU-based baseline by 5.6 times and enables rapid response to a DIFT queries. It has two to three orders of magnitude higher throughput compared to typical DIFT analysis solutions. We also demonstrate the efficiency and efficacy of new DIFT query operations.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/ji](https://www.usenix.org/conference/usenixsecurity22/presentation/ji)
- **PDF:** [https://www.usenix.org/system/files/sec22-ji.pdf](https://www.usenix.org/system/files/sec22-ji.pdf)
## Bedrock: Programmable Network Support for Secure RDMA Systems.
### Authors
* Jiarong Xing, Rice University
* Kuo-Feng Hsu, Rice University
* Yiming Qiu, Rice University
* Ziyang Yang, Rice University
* Hongyi Liu, Rice University
* Ang Chen, Rice University
### Abstract
> Remote direct memory access (RDMA) has gained popularity in cloud datacenters. In RDMA, clients bypass server CPUs and directly read/write remote memory. Recent findings have highlighted a host of vulnerabilities with RDMA, which give rise to attacks such as packet injection, denial of service, and side channel leakage, but RDMA defenses are still lagging behind. As the RDMA datapath bypasses CPU-based software processing, traditional defenses cannot be easily inserted without incurring performance penalty. Bedrock develops a security foundation for RDMA inside the network, leveraging programmable data planes in modern network hardware. It designs a range of defense primitives, including source authentication, access control, as well as monitoring and logging, to address RDMA-based attacks. Bedrock does not incur software overhead to the critical datapath, and delivers native RDMA performance in data transfers. Moreover, Bedrock operates transparently to legacy RDMA systems, without requiring RNIC, OS, or RDMA library changes. We present a comprehensive set of experiments on Bedrock and demonstrate its effectiveness.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/xing](https://www.usenix.org/conference/usenixsecurity22/presentation/xing)
- **PDF:** [https://www.usenix.org/system/files/sec22-xing.pdf](https://www.usenix.org/system/files/sec22-xing.pdf)
## Creating a Secure Underlay for the Internet.
### Authors
* Henry Birge-Lee, Princeton University
* Joel Wanner, ETH Zürich
* Grace H. Cimaszewski, Princeton University
* Jonghoon Kwon, ETH Zürich
* Liang Wang, Princeton University
* François Wirz, ETH Zürich
* Prateek Mittal, Princeton University
* Adrian Perrig, ETH Zürich
* Yixin Sun, University of Virginia
### Abstract
> Adversaries can exploit inter-domain routing vulnerabilities to intercept communication and compromise the security of critical Internet applications. Meanwhile the deployment of secure routing solutions such as Border Gateway Protocol Security (BGPsec) and Scalability, Control and Isolation On Next-generation networks (SCION) are still limited. How can we leverage emerging secure routing backbones and extend their security properties to the broader Internet? We design and deploy an architecture to bootstrap secure routing. Our key insight is to abstract the secure routing backbone as a virtual Autonomous System (AS), called Secure Backbone AS (SBAS). While SBAS appears as one AS to the Internet, it is a federated network where routes are exchanged between participants using a secure backbone. SBAS makes BGP announcements for its customers' IP prefixes at multiple locations (referred to as Points of Presence or PoPs) allowing traffic from non-participating hosts to be routed to a nearby SBAS PoP (where it is then routed over the secure backbone to the true prefix owner). In this manner, we are the first to integrate a federated secure non-BGP routing backbone with the BGP-speaking Internet. We present a real-world deployment of our architecture that uses SCIONLab to emulate the secure backbone and the PEERING framework to make BGP announcements to the Internet. A combination of real-world attacks and Internet-scale simulations shows that SBAS substantially reduces the threat of routing attacks. Finally, we survey network operators to better understand optimal governance and incentive models.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/birge-lee](https://www.usenix.org/conference/usenixsecurity22/presentation/birge-lee)
- **PDF:** [https://www.usenix.org/system/files/sec22-birge-lee.pdf](https://www.usenix.org/system/files/sec22-birge-lee.pdf)
## Off-Path Network Traffic Manipulation via Revitalized ICMP Redirect Attacks.
### Authors
* Xuewei Feng, Department of Computer Science and Technology & BNRist, Tsinghua University
* Qi Li, Institute for Network Sciences and Cyberspace & BNRist, Tsinghua University and Zhongguancun Lab
* Kun Sun, Department of Information Sciences and Technology & CSIS, George Mason University
* Zhiyun Qian, UC Riverside
* Gang Zhao, Department of Computer Science and Technology & BNRist, Tsinghua University
* Xiaohui Kuang, Beijing University of Posts and Telecommunications
* Chuanpu Fu, Department of Computer Science and Technology & BNRist, Tsinghua University
* Ke Xu, Department of Computer Science and Technology & BNRist, Tsinghua University and Zhongguancun Lab
### Abstract
> ICMP redirect is a mechanism that allows an end host to dynamically update its routing decisions for particular destinations. Previous studies show that ICMP redirect may be exploited by attackers to manipulate the routing of victim traffic. However, it is widely believed that ICMP redirect attacks are not a real-world threat since they can only occur under specific network topologies (e.g., LAN). In this paper, we conduct a systematic study on the legitimacy check mechanism of ICMP and uncover a fundamental gap between the check mechanism and stateless protocols, resulting in a wide range of vulnerabilities. In particular, we find that off-path attackers can utilize a suite of stateless protocols (e.g., UDP, ICMP, GRE, IPIP and SIT) to easily craft evasive ICMP error messages, thus revitalizing ICMP redirect attacks to cause serious damage in the real world, particularly, on the wide-area network. First, we show that off-path attackers can conduct a stealthy DoS attack by tricking various public servers on the Internet into mis-redirecting their traffic into black holes with a single forged ICMP redirect message. For example, we reveal that more than 43K popular websites on the Internet are vulnerable to this DoS attack. In addition, we identify 54.47K open DNS resolvers and 186 Tor nodes on the Internet are vulnerable as well. Second, we show that, by leveraging ICMP redirect attacks against NATed networks, off-path attackers in the same NATed network can perform a man-in-the-middle (MITM) attack to intercept the victim traffic. Finally, we develop countermeasures to throttle the attacks.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/feng](https://www.usenix.org/conference/usenixsecurity22/presentation/feng)
- **PDF:** [https://www.usenix.org/system/files/sec22-feng.pdf](https://www.usenix.org/system/files/sec22-feng.pdf)
## VerLoc: Verifiable Localization in Decentralized Systems.
### Authors
* Katharina Kohls, Radboud University Nijmegen
* Claudia Diaz, imec-COSIC KU Leuven and Nym Technologies SA
### Abstract
> We tackle the challenge of reliably determining the geolocation of nodes in decentralized networks, considering adversarial settings and without depending on any trusted landmarks. In particular, we consider active adversaries that control a subset of nodes, announce false locations and strategically manipulate measurements. To address this problem we propose, implement and evaluate VerLoc, a system that allows verifying the claimed geo-locations of network nodes in a fully decentralized manner. VerLoc securely schedules roundtrip time (RTT) measurements between randomly chosen pairs of nodes. Trilateration is then applied to the set of measurements to verify claimed geo-locations. We evaluate VerLoc both with simulations and in the wild using a prototype implementation integrated in the Nym network (currently run by thousands of nodes). We find that VerLoc can localize nodes in the wild with a median error of 60 km, and that in attack simulations it is capable of detecting and filtering out adversarial timing manipulations for network setups with up to 20 % malicious nodes.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/kohls](https://www.usenix.org/conference/usenixsecurity22/presentation/kohls)
- **PDF:** [https://www.usenix.org/system/files/sec22-kohls.pdf](https://www.usenix.org/system/files/sec22-kohls.pdf)
## Towards More Robust Keyword Spotting for Voice Assistants.
### Authors
* Shimaa Ahmed, University of Wisconsin-Madison
* Ilia Shumailov, University of Cambridge
* Nicolas Papernot, University of Toronto and Vector Institute
* Kassem Fawaz, University of Wisconsin-Madison
### Abstract
> Voice assistants rely on keyword spotting (KWS) to process vocal commands issued by humans: commands are prepended with a keyword, such as "Alexa" or "Ok Google," which must be spotted to activate the voice assistant. Typically, keyword spotting is two-fold: an on-device model first identifies the keyword, then the resulting voice sample triggers a second on-cloud model which verifies and processes the activation. In this work, we explore the significant privacy and security concerns that this raises under two threat models. First, our experiments demonstrate that accidental activations result in up to a minute of speech recording being uploaded to the cloud. Second, we verify that adversaries can systematically trigger misactivations through adversarial examples, which exposes the integrity and availability of services connected to the voice assistant. We propose EKOS (Ensemble for KeywOrd Spotting) which leverages the semantics of the KWS task to defend against both accidental and adversarial activations.  EKOS incorporates spatial redundancy from the acoustic environment at training and inference time to minimize distribution drifts responsible for accidental activations. It also exploits a physical property of speech---its redundancy at different harmonics---to deploy an ensemble of models trained on different harmonics and provably force the adversary to modify more of the frequency spectrum to obtain adversarial examples. Our evaluation shows that EKOS increases the cost of adversarial activations, while preserving the natural accuracy. We validate the performance of EKOS with over-the-air experiments on commodity devices and commercial voice assistants; we find that EKOS improves the precision of the KWS task in non-adversarial settings.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/ahmed](https://www.usenix.org/conference/usenixsecurity22/presentation/ahmed)
- **PDF:** [https://www.usenix.org/system/files/sec22-ahmed.pdf](https://www.usenix.org/system/files/sec22-ahmed.pdf)
## Seeing is Living? Rethinking the Security of Facial Liveness Verification in the Deepfake Era.
### Authors
* Changjiang Li, Pennsylvania State University and Zhejiang University
* Li Wang, Shandong University
* Shouling Ji, Zhejiang University
* Xuhong Zhang, Zhejiang University
* Zhaohan Xi, Pennsylvania State University
* Shanqing Guo, Shandong University
* Ting Wang, Pennsylvania State University
### Abstract
> Facial Liveness Verification (FLV) is widely used for identity authentication in many security-sensitive domains and offered as Platform-as-a-Service (PaaS) by leading cloud vendors. Yet, with the rapid advances in synthetic media techniques (e.g., deepfake), the security of FLV is facing unprecedented challenges, about which little is known thus far.  To bridge this gap, in this paper, we conduct the first systematic study on the security of FLV in real-world settings. Specifically, we present LiveBugger, a new deepfake-powered attack framework that enables customizable, automated security evaluation of FLV.  Leveraging LiveBugger, we perform a comprehensive empirical assessment of representative FLV platforms, leading to a set of interesting findings. For instance, most FLV APIs do not use anti-deepfake detection; even for those with such defenses, their effectiveness is concerning (e.g., it may detect high-quality synthesized videos but fail to detect low-quality ones). We then conduct an in-depth analysis of the factors impacting the attack performance of LiveBugger:  a) the bias (e.g., gender or race) in FLV can be exploited to select victims; b) adversarial training makes deepfake more effective to bypass FLV; c) the input quality has a varying influence on different deepfake techniques to bypass FLV. Based on these findings, we propose a customized, two-stage approach that can boost the attack success rate by up to 70%. Further, we run proof-of-concept attacks on several representative applications of FLV (i.e., the clients of FLV APIs) to illustrate the practical implications: due to the vulnerability of the APIs, many downstream applications are vulnerable to deepfake. Finally, we discuss potential countermeasures to improve the security of FLV. Our findings have been confirmed by the corresponding vendors.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/li-changjiang](https://www.usenix.org/conference/usenixsecurity22/presentation/li-changjiang)
- **PDF:** [https://www.usenix.org/system/files/sec22-li-changjiang.pdf](https://www.usenix.org/system/files/sec22-li-changjiang.pdf)
## Who Are You (I Really Wanna Know)? Detecting Audio DeepFakes Through Vocal Tract Reconstruction.
### Authors
* Logan Blue, University of Florida
* Kevin Warren, University of Florida
* Hadi Abdullah, University of Florida
* Cassidy Gibson, University of Florida
* Luis Vargas, University of Florida
* Jessica O'Dell, University of Florida
* Kevin Butler, University of Florida
* Patrick Traynor, University of Florida
### Abstract
> Generative machine learning models have made convincing voice synthesis a reality. While such tools can be extremely useful in applications where people consent to their voices being cloned (e.g., patients losing the ability to speak, actors not wanting to have to redo dialog, etc), they also allow for the creation of nonconsensual content known as deepfakes. This malicious audio is problematic not only because it can convincingly be used to impersonate arbitrary users, but because detecting deepfakes is challenging and generally requires knowledge of the specific deepfake generator. In this paper, we develop a new mechanism for detecting audio deepfakes using techniques from the field of articulatory phonetics.  Specifically, we apply fluid dynamics to estimate the arrangement of the human vocal tract during speech generation and show that deepfakes often model impossible or highly-unlikely anatomical arrangements. When parameterized to achieve 99.9% precision, our detection mechanism achieves a recall of 99.5%, correctly identifying all but one deepfake sample in our dataset. We then discuss the limitations of this approach, and how deepfake models fail to reproduce all aspects of speech equally. In so doing, we demonstrate that subtle, but biologically constrained aspects of how humans generate speech are not captured by current models, and can therefore act as a powerful tool to detect audio deepfakes.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/blue](https://www.usenix.org/conference/usenixsecurity22/presentation/blue)
- **PDF:** [https://www.usenix.org/system/files/sec22-blue.pdf](https://www.usenix.org/system/files/sec22-blue.pdf)
## DeepDi: Learning a Relational Graph Convolutional Network Model on Instructions for Fast and Accurate Disassembly.
### Authors
* Sheng Yu, University of California Riverside and Deepbits Technology Inc.
* Yu Qu, University of California Riverside
* Xunchao Hu, Deepbits Technology Inc.
* Heng Yin, University of California Riverside and Deepbits Technology Inc.
### Abstract
> Disassembly is the cornerstone of many binary analysis tasks. Traditional disassembly approaches (e.g., linear and recursive) are not accurate enough, while more sophisticated approaches (e.g., Probabilistic Disassembly, Datalog Disassembly, and XDA) have high overhead, which hinders them from being widely used in time-critical security practices. In this paper, we propose DEEPDI, a novel approach that achieves both accuracy and efficiency. The key idea of DEEPDI is to use a graph neural network model to capture and propagate instruction relations. Specifically, DEEPDI firstly uses superset disassembly to get a superset of instructions. Then we construct a graph model called Instruction Flow Graph to capture different instruction relations. Then a Relational Graph Convolutional Network is used to propagate instruction embeddings for accurate instruction classification. DEEPDI also provides heuristics to recover function entrypoints. We evaluate DEEPDI on several large-scale datasets containing real-world and obfuscated binaries. We show that DEEPDI is comparable or superior to the state-of-the-art disassemblers in terms of accuracy, and is robust against unseen binaries, compilers, platforms, obfuscated binaries, and adversarial attacks. Its CPU version is two times faster than IDA Pro, and its GPU version is 350 times faster.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/yu-sheng](https://www.usenix.org/conference/usenixsecurity22/presentation/yu-sheng)
- **PDF:** [https://www.usenix.org/system/files/sec22-yu-sheng.pdf](https://www.usenix.org/system/files/sec22-yu-sheng.pdf)
## RE-Mind: a First Look Inside the Mind of a Reverse Engineer.
### Authors
* Aless, EURECOM
* ro Mantovani, EURECOM
* Simone Aonzo, EURECOM
* Yanick Fratantonio, Cisco Talos
* Davide Balzarotti, EURECOM
### Abstract
> When a human activity requires a lot of expertise and very specialized cognitive skills that are poorly understood by the general population, it is often considered `an art.' Different activities in the security domain have fallen in this category, such as exploitation, hacking, and the main focus of this paper: binary reverse engineering (RE). However, while experts in many areas (ranging from chess players to computer programmers) have been studied by scientists to understand their mental models and capture what is special about their behavior, the `art' of understanding binary code and solving reverse engineering puzzles remains to date a black box. In this paper, we present a measurement of the different strategies adopted by expert and beginner reverse engineers while approaching the analysis of x86 (dis)assembly code, a typical static RE task. We do that by performing an exploratory analysis of data collected over 16,325 minutes of RE activity of two unknown binaries from 72 participants with different experience levels: 39 novices and 33 experts.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/mantovani](https://www.usenix.org/conference/usenixsecurity22/presentation/mantovani)
- **PDF:** [https://www.usenix.org/system/files/sec22-mantovani.pdf](https://www.usenix.org/system/files/sec22-mantovani.pdf)
## Characterizing the Security of Github CI Workflows.
### Authors
* Igibek Koishybayev, North Carolina State University
* Aleks, North Carolina State University
* r Nahapetyan, North Carolina State University
* Raima Zachariah, Independent Researcher
* Siddharth Muralee, Purdue University
* Bradley Reaves, North Carolina State University
* Alex, North Carolina State University
* ros Kapravelos, North Carolina State University
* Aravind Machiry, Purdue University
### Abstract
> Continuous integration and deployment (CI/CD) has revolutionized software development and maintenance. Commercial CI/CD platforms provide services for specifying and running CI/CD actions. However, they present a security risk in their own right, given their privileged access to secrets, infrastructure, and ability to fetch and execute arbitrary code. In this paper, we study the security of the newly popular GitHub CI platform. We first identify four fundamental security properties that must hold for any CI/CD system: Admittance Control, Execution Control, Code Control, and Access to Secrets. We then examine if GitHub CI enforces these properties in comparison with the other five popular CI/CD platforms. We perform a comprehensive analysis of 447,238 workflows spanning 213,854 GitHub repositories. We made several disturbing observations. Our analysis shows that 99.8% of workflows are overprivileged and have read-write access (instead of read-only) to the repository. In addition, 23.7% of workflows are triggerable by a pull_request and use code from the underlying repository. An attacker can exploit these workflows and execute arbitrary code as part of the workflow. Due to the modular nature of workflows, we find that 99.7% of repositories in our dataset execute some externally developed plugin, called "Actions" , for various purposes. We found that 97% of repositories execute at least one Action that does not originate with a verified creator, and 18% of repositories in our dataset execute at least one Action with missing security updates. These represent potential attack vectors that can be used to compromise the execution of workflows, consequently leading to supply chain attacks. This work highlights the systemic risks inherent in CI/CD platforms like GitHub CI; we also present our own Github action, GWChecker, which functions as an early warning system for bad practices that violate the identified security properties.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/koishybayev](https://www.usenix.org/conference/usenixsecurity22/presentation/koishybayev)
- **PDF:** [https://www.usenix.org/system/files/sec22-koishybayev.pdf](https://www.usenix.org/system/files/sec22-koishybayev.pdf)
## Decomperson: How Humans Decompile and What We Can Learn From It.
### Authors
* Kevin Burk, UC Santa Barbara
* Fabio Pagani, UC Santa Barbara
* Christopher Kruegel, UC Santa Barbara
* Giovanni Vigna, UC Santa Barbara
### Abstract
> Human analysts must reverse engineer binary programs as a prerequisite for a number of security tasks, such as vulnerability analysis, malware detection, and firmware re-hosting. Existing studies of human reversers and the processes they follow are limited in size and often use qualitative metrics that require subjective evaluation. In this paper, we reframe the problem of reverse engineering binaries as the problem of perfect decompilation, which is the process of recovering, from a binary program, source code that, when compiled, produces binary code that is identical to the original binary. This gives us a quantitative measure of understanding, and lets us examine the reversing process programmatically. We developed a tool, called Decomperson, that supported a group of reverse engineers during a large-scale security competition designed to collect information about the participants' reverse engineering process, with the well-defined goal of achieving perfect decompilation. Over 150 people participated, and we collected more than 35,000 code submissions, the largest manual reverse engineering dataset to date. This includes snapshots of over 300 successful perfect decompilation attempts. In this paper, we show how perfect decompilation allows programmatic analysis of such large datasets, providing new insights into the reverse engineering process.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/burk](https://www.usenix.org/conference/usenixsecurity22/presentation/burk)
- **PDF:** [https://www.usenix.org/system/files/sec22-burk.pdf](https://www.usenix.org/system/files/sec22-burk.pdf)
## 99% False Positives: A Qualitative Study of SOC Analysts' Perspectives on Security Alarms.
### Authors
* Bushra A. Alahmadi, University of Oxford
* Louise Axon, University of Oxford
* Ivan Martinovic, University of Oxford
### Abstract
> In this work, we focus on the prevalence of False Positive (FP) alarms produced by security tools, and Security Operation Centers (SOCs) practitioners' perception of their quality. In an online survey we conducted with security practitioners (n = 20) working in SOCs, practitioners confirmed the high FP rates of the tools used, requiring manual validation. With these findings in mind, we conducted a broader, discovery-orientated, qualitative investigation with security practitioners (n = 21) of the limitations of security tools, particularly their alarms' quality and validity. Our results highlight that, despite the perceived volume of FPs, most are attributed to benign triggers---true alarms, explained by legitimate behavior in the organization's environment, which analysts may choose to ignore. To properly evaluate security tools' adequacy and performance, it is critical that vendors and researchers are able make such distinctions between types of FP.  Alarm validation is a tedious task that can cause alarm burnout and eventually desensitization.  Therefore, we investigated the process of alarm validation in SOCs, identifying factors that may influence the outcome of this process. To improve security alarm quality, we elicit five properties (Reliable, Explainable, Analytical, Contextual, Transferable) required to foster effective and quick validation of alarms. Incorporating these requirements in future tools will not only reduce alarm burnout but improve SOC analysts' decision-making process by generating interpretable and meaningful alarms that enable prompt reaction.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/alahmadi](https://www.usenix.org/conference/usenixsecurity22/presentation/alahmadi)
- **PDF:** [https://www.usenix.org/system/files/sec22-alahmadi.pdf](https://www.usenix.org/system/files/sec22-alahmadi.pdf)
## HyperDegrade: From GHz to MHz Effective CPU Frequencies.
### Authors
* Alej, Tampere University
* ro Cabrera Aldaya, Tampere University
* Billy Bob Brumley, Tampere University
### Abstract
> Performance degradation techniques are an important complement to side-channel attacks. In this work, we propose HYPERDEGRADE—a combination of previous approaches and the use of simultaneous multithreading (SMT) architectures. In addition to the new technique, we investigate the root causes of performance degradation using cache eviction, discovering a previously unknown slowdown origin. The slowdown produced is significantly higher than previous approaches, which translates into an increased time granularity for FLUSH+RELOAD attacks. We evaluate HYPERDEGRADE on different Intel microarchitectures, yielding significant slowdowns that achieve, in select microbenchmark cases, three orders of magnitude improvement over state-of-the-art. To evaluate the efficacy of performance degradation in side-channel amplification, we propose and evaluate leakage assessment metrics. The results evidence that HYPERDEGRADE increases time granularity without a meaningful impact on trace quality. Additionally, we designed a fair experiment that compares three performance degradation strategies when coupled with FLUSH+RELOAD from an attacker perspective. We developed an attack on an unexploited vulnerability in OpenSSL in which HYPERDEGRADE excels—reducing by three times the number of required FLUSH+RELOAD traces to succeed. Regarding cryptography contributions, we revisit the recently proposed Raccoon attack on TLS-DH key exchanges, demonstrating its application to other protocols. Using HYPERDEGRADE, we developed an end-to-end attack that shows how a Raccoon-like attack can succeed with real data, filling a missing gap from previous research.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/aldaya](https://www.usenix.org/conference/usenixsecurity22/presentation/aldaya)
- **PDF:** [https://www.usenix.org/system/files/sec22-aldaya.pdf](https://www.usenix.org/system/files/sec22-aldaya.pdf)
## Pacer: Comprehensive Network Side-Channel Mitigation in the Cloud.
### Authors
* Aastha Mehta, University of British Columbia (UBC)
* Mohamed Alzayat, Max Planck Institute for Software Systems (MPI-SWS)
* Roberta De Viti, Max Planck Institute for Software Systems (MPI-SWS)
* Björn B. Br, Max Planck Institute for Software Systems (MPI-SWS)
* enburg, Max Planck Institute for Software Systems (MPI-SWS)
* Peter Druschel, Max Planck Institute for Software Systems (MPI-SWS)
* Deepak Garg, Max Planck Institute for Software Systems (MPI-SWS)
### Abstract
> Network side channels (NSCs) leak secrets through packet timing and packet sizes. They are of particular concern in public IaaS Clouds, where any tenant may be able to colocate and indirectly observe a victim's traffic shape. We present Pacer, the first system that eliminates NSC leaks in public IaaS Clouds end-to-end. It builds on the principled technique of shaping guest traffic outside the guest to make the traffic shape independent of secrets by design. However, Pacer also addresses important concerns that have not been considered in prior work—it prevents internal side-channel leaks from affecting reshaped traffic, and it respects network flow control, congestion control and loss recovery signals. Pacer is implemented as a paravirtualizing extension to the host hypervisor, requiring modest changes to the hypervisor and the guest kernel and optional, minimal changes to applications. We present Pacer's key abstraction of a cloaked tunnel, describe its design and implementation, and show through an experimental evaluation that Pacer imposes moderate overheads on bandwidth, client latency, and server throughput, while thwarting attacks using state-of-the-art CNN classifiers.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/mehta](https://www.usenix.org/conference/usenixsecurity22/presentation/mehta)
- **PDF:** [https://www.usenix.org/system/files/sec22-mehta.pdf](https://www.usenix.org/system/files/sec22-mehta.pdf)
## Composable Cachelets: Protecting Enclaves from Cache Side-Channel Attacks.
### Authors
* Daniel Townley, Peraton Labs
* Kerem Arıkan, Binghamton University
* Yu David Liu, Binghamton University
* Dmitry Ponomarev, Binghamton University
* Oğuz Ergin, TOBB University of Economics and Technology
### Abstract
> The security of isolated execution architectures such as Intel SGX has been significantly threatened by the recent emergence of side-channel attacks. Cache side-channel attacks allow adversaries to leak secrets stored inside isolated enclaves without having direct access to the enclave memory. In some cases, secrets can be leaked even without having the knowledge of the victim application code or having OS-level privileges. We propose the concept of Composable Cachelets (CC), a new scalable strategy to dynamically partition the last-level cache (LLC) for completely isolating enclaves from other applications and from each other. CC supports enclave isolation in caches with the capability to dynamically readjust the cache capacity as enclaves are created and destroyed. We present a cache-aware and enclave-aware operational semantics to help rigorously establish security properties of CC, and we experimentally demonstrate that CC thwarts side-channel attacks on caches with modest performance and complexity impact.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/townley](https://www.usenix.org/conference/usenixsecurity22/presentation/townley)
- **PDF:** [https://www.usenix.org/system/files/sec22-townley.pdf](https://www.usenix.org/system/files/sec22-townley.pdf)
## Don't Mesh Around: Side-Channel Attacks and Mitigations on Mesh Interconnects.
### Authors
* Miles Dai, MIT
* Riccardo Paccagnella, University of Illinois at Urbana-Champaign
* Miguel Gomez-Garcia, MIT
* John McCalpin, Texas Advanced Computing Center
* Mengjia Yan, MIT
### Abstract
> This paper studies microarchitectural side-channel attacks and mitigations on the on-chip mesh interconnect used in modern, server-class Intel processors. We find that, though difficult to exploit, the mesh interconnect can be abused by an adversary even when known attack vectors inside the cores and caches are closed. We then present novel, non-invasive mitigation mechanisms to interconnect side-channel attacks and offer insights to guide the design of future defenses. Our analysis starts by thoroughly reverse engineering the mesh interconnect to reveal, for the first time, the precise conditions under which it is susceptible to contention. We show that an attacker can use these conditions to build a cross-core covert channel with a capacity of over 1.5 Mbps. We then demonstrate the feasibility of side-channel attacks that leak keys from vulnerable cryptographic implementations by monitoring mesh interconnect contention. Finally, we present an analytical model to quantify the vulnerability levels of different victim and attacker placements on the chip and use the results to design a software-only mitigation mechanism.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/dai](https://www.usenix.org/conference/usenixsecurity22/presentation/dai)
- **PDF:** [https://www.usenix.org/system/files/sec22-dai.pdf](https://www.usenix.org/system/files/sec22-dai.pdf)
## WebGraph: Capturing Advertising and Tracking Information Flows for Robust Blocking.
### Authors
* S, EPFL
* ra Siby, EPFL
* Umar Iqbal, University of Iowa
* Steven Englehardt, DuckDuckGo
* Zubair Shafiq, UC Davis
* Carmela Troncoso, EPFL
### Abstract
> Users rely on ad and tracker blocking tools to protect their privacy. Unfortunately, existing ad and tracker blocking tools are susceptible to mutable advertising and tracking content. In this paper, we first demonstrate that a state-of-the-art ad and tracker blocker, AdGraph, is susceptible to such adversarial evasion techniques that are currently deployed on the web. Second, we introduce WebGraph, the first ML-based ad and tracker blocker that detects ads and trackers based on their action rather than their content. By featurizing the actions that are fundamental to advertising and tracking information flows – e.g., storing an identifier in the browser or sharing an identifier with another tracker – WebGraph performs nearly as well as prior approaches, but is significantly more robust to adversarial evasions. In particular, we show that WebGraph achieves comparable accuracy to AdGraph, while significantly decreasing the success rate of an adversary from near-perfect for AdGraph to around 8% for WebGraph. Finally, we show that WebGraph remains robust to sophisticated adversaries that use adversarial evasion techniques beyond those currently deployed on the web.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/siby](https://www.usenix.org/conference/usenixsecurity22/presentation/siby)
- **PDF:** [https://www.usenix.org/system/files/sec22-siby.pdf](https://www.usenix.org/system/files/sec22-siby.pdf)
## Automating Cookie Consent and GDPR Violation Detection.
### Authors
* Dino Bollinger, ETH Zurich
* Karel Kubicek, ETH Zurich
* Carlos Cotrini, ETH Zurich
* David Basin, ETH Zurich
### Abstract
> The European Union's General Data Protection Regulation (GDPR) requires websites to inform users about personal data collection and request consent for cookies. Yet the majority of websites do not give users any choices, and others attempt to deceive them into accepting all cookies. We document the severity of this situation through an analysis of potential GDPR violations in cookie banners in almost 30k websites. We identify six novel violation types, such as incorrect category assignments and misleading expiration times, and we find at least one potential violation in a surprising 94.7% of the analyzed websites.We address this issue by giving users the power to protect their privacy. We develop a browser extension, called CookieBlock, that uses machine learning to enforce GDPR cookie consent at the client. It automatically categorizes cookies by usage purpose using only the information provided in the cookie itself. At a mean validation accuracy of 84.4%, our model attains a prediction quality competitive with expert knowledge in the field. Additionally, our approach differs from prior work by not relying on the cooperation of websites themselves. We empirically evaluate CookieBlock on a set of 100 randomly sampled websites, on which it filters roughly 90% of the privacy-invasive cookies without significantly impairing website functionality.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/bollinger](https://www.usenix.org/conference/usenixsecurity22/presentation/bollinger)
- **PDF:** [https://www.usenix.org/system/files/sec22-bollinger.pdf](https://www.usenix.org/system/files/sec22-bollinger.pdf)
## Khaleesi: Breaker of Advertising and Tracking Request Chains.
### Authors
* Umar Iqbal, University of Washington
* Charlie Wolfe, University of Iowa
* Charles Nguyen, University of California, Davis
* Steven Englehardt, DuckDuckGo
* Zubair Shafiq, University of California, Davis
### Abstract
> Request chains are being used by advertisers and trackers for information sharing and circumventing recently introduced privacy protections in web browsers. There is little prior work on mitigating the increasing exploitation of request chains by advertisers and trackers. The state-of-the-art ad and tracker blocking approaches lack the necessary context to effectively detect advertising and tracking request chains. We propose Khaleesi, a machine learning approach that captures the essential sequential context needed to effectively detect advertising and tracking request chains. We show that Khaleesi achieves high accuracy, that holds well over time, is generally robust against evasion attempts, and outperforms existing approaches. We also show that Khaleesi is suitable for online deployment and it improves page load performance.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/iqbal](https://www.usenix.org/conference/usenixsecurity22/presentation/iqbal)
- **PDF:** [https://www.usenix.org/system/files/sec22-iqbal.pdf](https://www.usenix.org/system/files/sec22-iqbal.pdf)
## Practical Data Access Minimization in Trigger-Action Platforms.
### Authors
* Yunang Chen, University of Wisconsin–Madison
* Mohannad Alhanahnah, University of Wisconsin–Madison
* Andrei Sabelfeld, Chalmers University of Technology
* Rahul Chatterjee, University of Wisconsin–Madison
* Earlence Fern, University of Wisconsin–Madison
* es, University of Wisconsin–Madison
### Abstract
> Trigger-Action Platforms (TAPs) connect disparate online services and enable users to create automation rules in diverse domains such as smart homes and business productivity. Unfortunately, the current design of TAPs is flawed from a privacy perspective, allowing unfettered access to sensitive user data. We point out that it suffers from two types of overprivilege: (1) attribute-level, where it has access to more data attributes than it needs for running user-created rules; and (2) token-level, where it has access to more APIs than it needs. To mitigate overprivilege and subsequent privacy concerns we design and implement minTAP, a practical approach to data access minimization in TAPs. Our key insight is that the semantics of a user-created automation rule implicitly specifies the minimal amount of data it needs. This allows minTAP to leverage language-based data minimization to apply the principle of least-privilege by releasing only the necessary attributes of user data to TAPs and fending off unrelated API access. Using real user-created rules on the popular IFTTT TAP, we demonstrate that minTAP sanitizes a median of 4 sensitive data attributes per rule, with modest performance overhead and without modifying IFTTT.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/chen-yunang-practical](https://www.usenix.org/conference/usenixsecurity22/presentation/chen-yunang-practical)
- **PDF:** [https://www.usenix.org/system/files/sec22-chen-yunang-practical.pdf](https://www.usenix.org/system/files/sec22-chen-yunang-practical.pdf)
## Shuffle-based Private Set Union: Faster and More Secure.
### Authors
* Yanxue Jia, Shanghai Jiao Tong University
* Shi-Feng Sun, Shanghai Jiao Tong University
* Hong-Sheng Zhou, Virginia Commonwealth University
* Jiajun Du, Shanghai Jiao Tong University
* Dawu Gu, Shanghai Jiao Tong University
### Abstract
> Private Set Union (PSU) allows two players, the sender and the receiver, to compute the union of their input datasets without revealing any more information than the result. While it has found numerous applications in practice, not much research has been carried out so far, especially for large datasets.In this work, we take shuffling technique as a key to design PSU protocols for the first time. By shuffling receiver's set, we put forward the first protocol, denoted as ΠR PSU, that eliminates the expensive operations in previous works, such as additive homomorphic encryption and repeated operations on the receiver's set. It outperforms the state-of-the-art design by Kolesnikov et al. (ASIACRYPT 2019) in both efficiency and security; the unnecessary leakage in Kolesnikov et al.'s design, can be avoided in our design.We further extend our investigation to the application scenarios in which both players may hold unbalanced input datasets. We propose our second protocol ΠS PSU, by shuffling the sender's dataset. This design can be viewed as a dual version of our first protocol, and it is suitable in the cases where the sender's input size is much smaller than the receiver's.Finally, we implement our protocols ΠR PSU and ΠS PSU in C++ on big datasets, and perform a comprehensive evaluation in terms of both scalability and parallelizability. The results demonstrate that our design can obtain a 4-5× improvement over the state-of-the-art by Kolesnikov et al. with a single thread in WAN/LAN settings.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/jia](https://www.usenix.org/conference/usenixsecurity22/presentation/jia)
- **PDF:** [https://www.usenix.org/system/files/sec22-jia.pdf](https://www.usenix.org/system/files/sec22-jia.pdf)
## Polynomial Commitment with a One-to-Many Prover and Applications.
### Authors
* Jiaheng Zhang, UC Berkeley
* Tiancheng Xie, UC Berkeley
* Thang Hoang, Virginia Tech
* Elaine Shi, CMU
* Yupeng Zhang, Texas A&M University
### Abstract
> Verifiable Secret Sharing (VSS) is a foundational cryptographic primitive that serves as an essential building block in multi-party computation and decentralized blockchain applications. One of the most practical ways to construct VSS is through a polynomial commitment, where the dealer commits to a random polynomial whose 0-th coefficient encodes the secret to be shared, and proves the evaluation of the committed polynomial at a different point to each of N verifiers, i.e., the polynomial commitment is used in a "one-to-many" fashion.The recent work of Tomescu et al. (IEEE S&P 2020) was the first to consider polynomial commitment with "one-to-many prover batching", such that the prover can prove evaluations at N different points at the cost of Oe(1) proofs. However, their scheme is not optimal and requires a trusted setup.In this paper, we asymptotically improve polynomial commitment with one-to-many prover batching. We propose two novel schemes. First, we propose a scheme with optimal asymptotics in all dimensions in the trusted setup setting. Second, we are the first to consider one-to-many prover batching for transparent polynomial commitments, and we propose a transparent scheme whose performance approximately matches the best-known scheme in the trusted setup setting.We implement our schemes and evaluate their performance. Our scheme in the trusted setup setting improves the proof size by 20× and the verifier time by 7.8× for 2 21 parties, with a small overhead on the prover time. Our transparent polynomial commitment removes the trusted setup and further improves the prover time by 2.3×.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/zhang-jiaheng](https://www.usenix.org/conference/usenixsecurity22/presentation/zhang-jiaheng)
- **PDF:** [https://www.usenix.org/system/files/sec22-zhang-jiaheng.pdf](https://www.usenix.org/system/files/sec22-zhang-jiaheng.pdf)
## ppSAT: Towards Two-Party Private SAT Solving.
### Authors
* Ning Luo, Yale University
* Samuel Judson, Yale University
* Timos Antonopoulos, Yale University
* Ruzica Piskac, Yale University
* Xiao Wang, Northwestern University
### Abstract
> We design and implement a privacy-preserving Boolean satisfiability (ppSAT) solver, which allows mutually distrustful parties to evaluate the conjunction of their input formulas while maintaining privacy. We first define a family of security guarantees reconcilable with the (known) exponential complexity of SAT solving, and then construct an oblivious variant of the classic DPLL algorithm which can be integrated with existing secure two-party computation (2PC) techniques. We further observe that most known SAT solving heuristics are unsuitable for 2PC, as they are highly data-dependent in order to minimize the number of exploration steps. Faced with how best to trade off between the number of steps and the cost of obliviously executing each one, we design three efficient oblivious heuristics, one deterministic and two randomized. As a result of this effort we are able to evaluate our ppSAT solver on small but practical instances arising from the haplotype inference problem in bioinformatics. We conclude by looking towards future directions for making ppSAT solving more practical, most especially the integration of conflict-driven clause learning (CDCL).
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/luo](https://www.usenix.org/conference/usenixsecurity22/presentation/luo)
- **PDF:** [https://www.usenix.org/system/files/sec22-luo.pdf](https://www.usenix.org/system/files/sec22-luo.pdf)
## Hyperproofs: Aggregating and Maintaining Proofs in Vector Commitments.
### Authors
* Shravan Srinivasan, University of Maryland
* Alex, Ergo Platform
* er Chepurnoy, Ergo Platform
* Charalampos Papamanthou, Yale University
* Alin Tomescu, VMware Research
* Yupeng Zhang, Texas A&M University
### Abstract
> We present Hyperproofs, the first vector commitment (VC) scheme that is efficiently maintainable and aggregatable. Similar to Merkle proofs, our proofs form a tree that can be efficiently maintained: updating all n proofs in the tree after a single leaf change only requires O(logn) time. Importantly, unlike Merkle proofs, Hyperproofs are efficiently aggregatable, anywhere from 10× to 41× faster than SNARK-based aggregation of Merkle proofs. At the same time, an individual Hyperproof consists of only logn algebraic hashes (e.g., 32-byte elliptic curve points) and an aggregation of b such proofs is only O(log(blogn))-sized. Hyperproofs are also reasonably fast to update when compared to Merkle trees with SNARK-friendly hash functions.As another benefit over Merkle trees, Hyperproofs are homomorphic: digests (and proofs) for two vectors can be homomorphically combined into a digest (and proofs) for their sum. Homomorphism is very useful in emerging applications such as stateless cryptocurrencies. First, it enables unstealability, a novel property that incentivizes proof computation. Second, it makes digests and proofs much more convenient to update.Finally, Hyperproofs have certain limitations: they are not transparent, have linear-sized public parameters, are slower to verify, and have larger aggregated proofs and slower verification than SNARK-based approaches. Nonetheless, end-to-end, aggregation and verification in Hyperproofs is 10× to 41× faster than in SNARK-based Merkle trees.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/srinivasan](https://www.usenix.org/conference/usenixsecurity22/presentation/srinivasan)
- **PDF:** [https://www.usenix.org/system/files/sec22-srinivasan.pdf](https://www.usenix.org/system/files/sec22-srinivasan.pdf)
## COMRace: Detecting Data Race Vulnerabilities in COM Objects.
### Authors
* Fangming Gu, Institute of Information Engineering, Chinese Academy of Sciences and School of Cyber Security, University of Chinese Academy of Sciences
* Qingli Guo, Institute of Information Engineering, Chinese Academy of Sciences and School of Cyber Security, University of Chinese Academy of Sciences
* Lian Li, Institute of Computing Technology, Chinese Academy of Sciences and School of Computer Science and Technology, University of Chinese Academy of Sciences
* Zhiniang Peng, Sangfor Technologies Inc and Shenzhen Institutes of Advanced Technology, Chinese Academy of Sciences
* Wei Lin, Institute of Information Engineering, Chinese Academy of Sciences and School of Cyber Security, University of Chinese Academy of Sciences
* Xiaobo Yang, Institute of Information Engineering, Chinese Academy of Sciences and School of Cyber Security, University of Chinese Academy of Sciences
* Xiaorui Gong, Institute of Information Engineering, Chinese Academy of Sciences and School of Cyber Security, University of Chinese Academy of Sciences
### Abstract
> The Microsoft Component Object Model (COM) is the foundation for many key Microsoft technologies and we develop COMRace, the first data race vulnerability detection tool for commercial off-the-shelf COM objects. COMRace targets a severe but previously overlooked flaw in the COM threading model, which makes COM objects prone to data race attacks. In COMRace, we apply static binary analyses to identify thread-unsafe interface methods in off-the-shelf COM binaries, then further verify binary analyses results with automatically synthesized proof-of-concept exploits (PoC). We have applied COMRace to 10,420 registered COM objects on the windows platform and the tool reports 186 vulnerable interface methods. COMRace automatically synthesizes 234 PoCs for 256 selected method pairs (82 unsafe methods) with conflict accesses, and there are 194 PoCs triggering race conditions. Furthermore, 145 PoCs lead to critical memory corruptions, exposing 26 vulnerabilities confirmed by the Common Vulnerabilities and Exposures (CVE) database.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/gu-fangming](https://www.usenix.org/conference/usenixsecurity22/presentation/gu-fangming)
- **PDF:** [https://www.usenix.org/system/files/sec22-gu-fangming.pdf](https://www.usenix.org/system/files/sec22-gu-fangming.pdf)
## MOVERY: A Precise Approach for Modified Vulnerable Code Clone Discovery from Modified Open-Source Software Components.
### Authors
* Seunghoon Woo, Korea University
* Hyunji Hong, Korea University
* Eunjin Choi, Korea University
* Heejo Lee, Korea University
### Abstract
> Vulnerabilities inherited from third-party open-source software (OSS) components can compromise the entire software security. However, discovering propagated vulnerable code is challenging as it proliferates with various code syntaxes owing to the OSS modifications, more specifically, internal (e.g., OSS updates) and external modifications of OSS (e.g., code changes that occur during the OSS reuse).In this paper, we present MOVERY, a precise approach for discovering vulnerable code clones (VCCs) from modified OSS components. By considering the oldest vulnerable function and extracting only core vulnerable and patch lines from security patches, MOVERY generates vulnerability and patch signatures that effectively address OSS modifications. For scalability, MOVERY reduces the search space of the target software by focusing only on the codes borrowed from other OSS projects. Finally, MOVERY determines that the function is VCC when it matches the vulnerability signature and is distinctive from the patch signature.When we applied MOVERY on ten popular software selected from diverse domains, we observed that 91% of the discovered VCCs had different code syntax from the disclosed vulnerable function. Nonetheless, MOVERY discovered VCCs at least 2.5 times more than those discovered in existing techniques, with much higher accuracy: MOVERY discovered 415 VCCs with 96% precision and 96% recall, whereas two recent VCC discovery techniques, which hardly consider internal and external OSS modifications, discovered only 163 and 72 VCCs with at most 77% precision and 38% recall.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/woo](https://www.usenix.org/conference/usenixsecurity22/presentation/woo)
- **PDF:** [https://www.usenix.org/system/files/sec22-woo.pdf](https://www.usenix.org/system/files/sec22-woo.pdf)
## Loki: Hardening Code Obfuscation Against Automated Attacks.
### Authors
* Moritz Schloegel, Ruhr-Universität Bochum
* Tim Blazytko, Ruhr-Universität Bochum
* Moritz Contag, Ruhr-Universität Bochum
* Cornelius Aschermann, Ruhr-Universität Bochum
* Julius Basler, Ruhr-Universität Bochum
* Thorsten Holz, CISPA Helmholtz Center for Information Security
* Ali Abbasi, Ruhr-Universität Bochum
### Abstract
> Software obfuscation is a crucial technology to protect intellectual property and manage digital rights within our society. Despite its huge practical importance, both commercial and academic state-of-the-art obfuscation methods are vulnerable to a plethora of automated deobfuscation attacks, such as symbolic execution, taint analysis, or program synthesis. While several enhanced obfuscation techniques were recently proposed to thwart taint analysis or symbolic execution, they either impose a prohibitive runtime overhead or can be removed in an automated way (e.g., via compiler optimizations). In general, these techniques suffer from focusing on a single attack vector, allowing an attacker to switch to other, more effective techniques, such as program synthesis. In this work, we present Loki, an approach for software obfuscation that is resilient against all known automated deobfuscation attacks. To this end, we use and efficiently combine multiple techniques, including a generic approach to synthesize formally verified expressions of arbitrary complexity. Contrary to state-of-the-art approaches that rely on a few hardcoded generation rules, our expressions are more diverse and harder to pattern match against. We show that even the state-of-the-art approach on Mixed-Boolean Arithmetic (MBA) deobfuscation fails to simplify them. Moreover, Loki protects against previously unaccounted attack vectors such as program synthesis, for which it reduces the success rate to merely 19%. In a comprehensive evaluation, we show that our design incurs significantly less overhead while providing a much stronger protection level compared to existing works.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/schloegel](https://www.usenix.org/conference/usenixsecurity22/presentation/schloegel)
- **PDF:** [https://www.usenix.org/system/files/sec22-schloegel.pdf](https://www.usenix.org/system/files/sec22-schloegel.pdf)
## Oops... Code Execution and Content Spoofing: The First Comprehensive Analysis of OpenDocument Signatures.
### Authors
* Simon Rohlmann, Ruhr University Bochum
* Christian Mainka, Ruhr University Bochum
* Vladislav Mladenov, Ruhr University Bochum
* Jörg Schwenk, Ruhr University Bochum
### Abstract
> OpenDocument is one of the major standards for interoperable office documents. Supported by office suites like Apache OpenOffice, LibreOffice, and Microsoft Office, the OpenDocument Format (ODF) is available for text processing, spreadsheets, and presentations on all major desktop and mobile operating systems.When it comes to governmental and business use cases, OpenDocument signatures can protect the integrity of a document's content, for example, for contracts, amendments, or bills. Moreover OpenDocument signatures also protect document's macros. Since the risks of using macros in documents is well-known, modern office applications only enable their execution if a trusted entity signs the macro code. Thus, the security of ODF documents often depends on the correct signature verification.In this paper, we conduct the first comprehensive analysis of OpenDocument signatures and reveal numerous severe threats. We identified five new attacks and evaluated them against 16 office applications on Windows, macOS, Linux, iOS, Android, and two online services. Our investigation revealed 12 out of 18 applications to be vulnerable for macro code execution, although the application only executes macros signed by trusted entities. For 17 of 18 applications, we could spoof the content in a signed ODF document while keeping the signature valid and trusted. Finally, we showed that attackers possessing a signed ODF could alter and forge the signature creation time in 16 of 18 applications.Our research was acknowledged by Microsoft, Apache OpenOffice, and LibreOffice during the coordinated disclosure.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/rohlmann](https://www.usenix.org/conference/usenixsecurity22/presentation/rohlmann)
- **PDF:** [https://www.usenix.org/system/files/sec22-rohlmann.pdf](https://www.usenix.org/system/files/sec22-rohlmann.pdf)
## Playing Without Paying: Detecting Vulnerable Payment Verification in Native Binaries of Unity Mobile Games.
### Authors
* Chaoshun Zuo, The Ohio State University
* Zhiqiang Lin, The Ohio State University
### Abstract
> Modern mobile games often contain in-app purchasing (IAP) for players to purchase digital items such as virtual currency, equipment, or extra moves. In theory, IAP should have been implemented securely; but in practice, we have found that many game developers have failed to do so, particularly by misplacing the trust of payment verification, e.g., by either locally verifying the payment transactions or without using any verification at all, leading to playing without paying vulnerabilities. This paper presents PAYMENTSCOPE, a static binary analysis tool to automatically identify vulnerable IAP implementations in mobile games. Through modeling of its IAP protocols with the SDK provided APIs using a payment-aware data flow analysis, PAYMENTSCOPE directly pinpoints untrusted payment verification vulnerabilities in game native binaries. We have implemented PAYMENTSCOPE on top of binary analysis framework Ghidra, and tested with 39,121 Unity (the most popular game engine) mobile games, with which PAYMENTSCOPE has identified 8,954 (22.89%) vulnerable games. Among them, 8,233 games do not verify the validity of payment transactions and 721 games simply verify the transactions locally. We have disclosed the identified vulnerabilities to developers of vulnerable games, and many of them have acknowledged our findings.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/zuo](https://www.usenix.org/conference/usenixsecurity22/presentation/zuo)
- **PDF:** [https://www.usenix.org/system/files/sec22-zuo.pdf](https://www.usenix.org/system/files/sec22-zuo.pdf)
## Repurposing Segmentation as a Practical LVI-NULL Mitigation in SGX.
### Authors
* Lukas Giner, Graz University of Technology
* Andreas Kogler, Graz University of Technology
* Claudio Canella, Graz University of Technology
* Michael Schwarz, CISPA Helmholtz Center for Information Security
* Daniel Gruss, Graz University of Technology
### Abstract
> Load Value Injection (LVI) uses Meltdown-type data flows in Spectre-like confused-deputy attacks. LVI has been demonstrated in practical attacks on Intel SGX enclaves, and consequently, mitigations were deployed that incur tremendous overheads of factor 2 to 19. However, as we discover, on fixed hardware LVI-NULL leakage is still present. Hence, to mitigate LVI-NULL in SGX enclaves on LVI-fixed CPUs, the expensive mitigations would still be necessary.In this paper, we propose a lightweight mitigation focused on LVI-NULL in SGX, LVI-NULLify. We systematically analyze and categorize LVI-NULL variants. Our analysis reveals that previously proposed mitigations targeting LVI-NULL are not effective. Our novel mitigation addresses this problem by repurposing segmentation, a fast legacy hardware mechanism that x86 already uses for every memory operation. LVI-NULLify consists of a modified SGX-SDK and a compiler extension which put the enclave in control of LVI-NULL-exploitable memory locations. We evaluate LVI-NULLify on the LVI-fixed Comet Lake CPU and observe a performance overhead below 10% for the worst case, which is substantially lower than previous defenses with a prohibitive overhead of 1220% in the worst case. We conclude that LVI-NULLify is a practical solution to protect SGX enclaves against LVI-NULL today.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/giner](https://www.usenix.org/conference/usenixsecurity22/presentation/giner)
- **PDF:** [https://www.usenix.org/system/files/sec22-giner.pdf](https://www.usenix.org/system/files/sec22-giner.pdf)
## A Hardware-Software Co-design for Efficient Intra-Enclave Isolation.
### Authors
* Jinyu Gu, Shanghai Jiao Tong University
* Bojun Zhu, Shanghai Jiao Tong University
* Mingyu Li, Shanghai Jiao Tong University
* Wentai Li, Shanghai Jiao Tong University
* Yubin Xia, Shanghai Jiao Tong University
* Haibo Chen, Shanghai Jiao Tong University
### Abstract
> The monolithic programming model has been favored for high compatibility and easing the programming for SGX enclaves, i.e., running the secure code with all dependent libraries or even library OSes (LibOSes). Yet, it inevitably bloats the trusted computing base (TCB) and thus deviates from the goal of high security. Introducing ﬁne-grained isolation can effectively mitigate TCB bloating while existing solutions face performance issues. We observe that the off-the-shelf Intel MPK is a perfect match for efﬁcient intra-enclave isolation. Nonetheless, the trust models between MPK and SGX are incompatible by design. We hence propose LIGHTENCLAVE, which embraces non-intrusive extensions on existing SGX hardware to incorporate MPK securely and allows multiple light-enclaves isolated within one enclave. Experiments show that LIGHTENCLAVE incurs up to 4% overhead when separating secret SSL keys for server applications and can signiﬁcantly improve the performance of Graphene-SGX and Occlum by reducing the communication and runtime overhead, respectively.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/gu-jinyu](https://www.usenix.org/conference/usenixsecurity22/presentation/gu-jinyu)
- **PDF:** [https://www.usenix.org/system/files/sec22-gu-jinyu.pdf](https://www.usenix.org/system/files/sec22-gu-jinyu.pdf)
## SGXFuzz: Efficiently Synthesizing Nested Structures for SGX Enclave Fuzzing.
### Authors
* Tobias Cloosters, University of Duisburg-Essen
* Johannes Willbold, Ruhr-Universität Bochum
* Thorsten Holz, CISPA Helmholtz Center for Information Security
* Lucas Davi, University of Duisburg-Essen
### Abstract
> Intel's Software Guard Extensions (SGX) provide a nonintrospectable trusted execution environment (TEE) to protect security-critical code from a potentially malicious OS. This protection can only be effective if the individual enclaves are secure, which is already challenging in regular software, and this becomes even more difficult for enclaves as the entire environment is potentially malicious. As such, many enclaves expose common vulnerabilities, e.g., memory corruption and SGXspecific vulnerabilities like null-pointer dereferences. While fuzzing is a popular technique to assess the security of software, dynamically analyzing enclaves is challenging as enclaves are meant to be non-introspectable. Further, they expect an allocated multi-pointer structure as input instead of a plain buffer.In this paper, we present SGXFUZZ, a coverage-guided fuzzer that introduces a novel binary input structure synthesis method to expose enclave vulnerabilities even without source-code access. To obtain code coverage feedback from enclaves, we show how to extract enclave code from distribution formats. We also present an enclave runner that allows execution of the extracted enclave code as a user-space application at native speed, while emulating all relevant environment interactions of the enclave. We use this setup to fuzz enclaves using a state-of-the-art snapshot fuzzing engine that deploys our novel structure synthesis stage. This stage synthesizes multi-layer pointer structures and size fields incrementally on-the-fly based on fault signals. Furthermore, it matches the expected input format of the enclave without any prior knowledge. We evaluate our approach on 30 open- and closed-source enclaves and found a total of 79 new bugs and vulnerabilities.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/cloosters](https://www.usenix.org/conference/usenixsecurity22/presentation/cloosters)
- **PDF:** [https://www.usenix.org/system/files/sec22-cloosters.pdf](https://www.usenix.org/system/files/sec22-cloosters.pdf)
## SecSMT: Securing SMT Processors against Contention-Based Covert Channels.
### Authors
* Mohammadkazem Taram, University of California San Diego
* Xida Ren, University of Virginia
* Ashish Venkat, University of Virginia
* Dean Tullsen, University of California San Diego
### Abstract
> This paper presents the first comprehensive analysis of contention-based security vulnerabilities in a high-performance simultaneous mulithreaded (SMT) processor. It features a characterization of contention throughout the shared pipeline, and potential resulting leakage channels for each resource. Further, it presents a set of unified mitigation/isolation strategies that dramatically cut that leakage while preserving most of the performance of a full, insecure SMT implementation. These results lay the groundwork for considering SMT execution, with its performance benefits, a reasonable choice even for security-sensitive applications.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/taram](https://www.usenix.org/conference/usenixsecurity22/presentation/taram)
- **PDF:** [https://www.usenix.org/system/files/sec22-taram.pdf](https://www.usenix.org/system/files/sec22-taram.pdf)
## Rendering Contention Channel Made Practical in Web Browsers.
### Authors
* Shujiang Wu, Johns Hopkins University
* Jianjia Yu, Johns Hopkins University
* Min Yang, Fudan University
* Yinzhi Cao, Johns Hopkins University
### Abstract
> Browser rendering utilizes hardware resources shared within and across browsers to display web contents, thus inevitably being vulnerable to side channel attacks. Prior works have studied rendering side channels that are caused by rendering time differences of one frame, such as URL color change. However, it still remains unclear how rendering contentions play a role in side-channel attacks and covert communications.In this paper, we design a novel rendering contention channel. Specifically, we stress the browser's rendering resource with stable, self-adjustable pressure and measure the time taken to render a sequence of frames. The measured time sequence is further used to infer any co-rendering event of the browser.To better understand the channel, we study its cause via a method called single variable testing. That is, we keep all variables the same but only change one to test whether the changed variable contributes to the contention. Our results show that CPU, GPU and screen buffer are all part of the contention.To demonstrate the channel's feasibility, we design and implement a prototype, open-source framework, called SIDER, to launch four attacks using the rendering contention channel, which are (i) cross-browser, cross-mode cookie synchronization, (ii) history sniffing, (iii) website fingerprinting, and (iv) keystroke logging. Our evaluation shows the effectiveness and feasibility of all four attacks.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/wu-shujiang](https://www.usenix.org/conference/usenixsecurity22/presentation/wu-shujiang)
- **PDF:** [https://www.usenix.org/system/files/sec22-wu-shujiang.pdf](https://www.usenix.org/system/files/sec22-wu-shujiang.pdf)
## SyzScope: Revealing High-Risk Security Impacts of Fuzzer-Exposed Bugs in Linux kernel.
### Authors
* Xiaochen Zou, UC Riverside
* Guoren Li, UC Riverside
* Weiteng Chen, UC Riverside
* Hang Zhang, UC Riverside
* Zhiyun Qian, UC Riverside
### Abstract
> Fuzzing has become one of the most effective bug finding approach for software. In recent years, 24*7 continuous fuzzing platforms have emerged to test critical pieces of software, e.g., Linux kernel. Though capable of discovering many bugs and providing reproducers (e.g., proof-of-concepts), a major problem is that they neglect a critical function that should have been built-in, i.e., evaluation of a bug's security impact. It is well-known that the lack of understanding of security impact can lead to delayed bug fixes as well as patch propagation. In this paper, we develop SyzScope, a system that can automatically uncover new "high-risk" impacts given a bug with seemingly "low-risk" impacts. From analyzing over a thousand low-risk bugs on syzbot, SyzScope successfully determined that 183 low-risk bugs (more than 15%) in fact contain high-risk impacts, e.g., control flow hijack and arbitrary memory write, some of which still do not have patches available yet.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/zou](https://www.usenix.org/conference/usenixsecurity22/presentation/zou)
- **PDF:** [https://www.usenix.org/system/files/sec22-zou.pdf](https://www.usenix.org/system/files/sec22-zou.pdf)
## TheHuzz: Instruction Fuzzing of Processors Using Golden-Reference Models for Finding Software-Exploitable Vulnerabilities.
### Authors
* Rahul K, Texas A&M University
* e, Texas A&M University
* Addison Crump, Texas A&M University
* Garrett Persyn, Texas A&M University
* Patrick Jauernig, Technische Universität Darmstadt
* Ahmad-Reza Sadeghi, Technische Universität Darmstadt
* Aakash Tyagi, Texas A&M University
* Jeyavijayan Rajendran, Texas A&M University
### Abstract
> The increasing complexity of modern processors poses many challenges to existing hardware verification tools and methodologies for detecting security-critical bugs. Recent attacks on processors have shown the fatal consequences of uncovering and exploiting hardware vulnerabilities.Fuzzing has emerged as a promising technique for detecting software vulnerabilities. Recently, a few hardware fuzzing techniques have been proposed. However, they suffer from several limitations, including non-applicability to commonly used hardware description languages (HDLs) like Verilog and VHDL, the need for significant human intervention, and inability to capture many intrinsic hardware behaviors, such as signal transitions and floating wires.In this paper, we present the design and implementation of a novel hardware fuzzer, TheHuzz, that overcomes the aforementioned limitations and significantly improves the state of the art. We analyze the intrinsic behaviors of hardware designs in HDLs and then measure the coverage metrics that model such behaviors. TheHuzz generates assembly-level instructions to increase the desired coverage values, thereby finding many hardware bugs that are exploitable from software. We evaluate TheHuzz on four popular open-source processors and achieve 1.98× and 3.33× the speed compared to the industry-standard random regression approach and the state-of-the-art hardware fuzzer, DifuzzRTL, respectively. Using TheHuzz, we detected 11 bugs in these processors, including 8 new bugs, and we demonstrate exploits using the detected bugs. We also show that TheHuzz overcomes the limitations of formal verification tools from the semiconductor industry by comparing its findings to those discovered by the Cadence JasperGold tool.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/kande](https://www.usenix.org/conference/usenixsecurity22/presentation/kande)
- **PDF:** [https://www.usenix.org/system/files/sec22-kande.pdf](https://www.usenix.org/system/files/sec22-kande.pdf)
## Fuzzing Hardware Like Software.
### Authors
* Timothy Trippel, University of Michigan
* Kang G. Shin, University of Michigan
* Alex Chernyakhovsky, Google, LLC
* Garret Kelly, Google, LLC
* Dominic Rizzo, Google, LLC
* Matthew Hicks, Virginia Tech
### Abstract
> Hardware flaws are permanent and potent: hardware cannot be patched once fabricated, and any flaws may undermine even formally verified software executing on top. Consequently, verification time dominates implementation time. The gold standard in hardware Design Verification (DV) is dynamic random testing, due to its scalability to large designs. However, given its undirected nature, this technique is inefficient. Instead of making incremental improvements to existing dynamic hardware verification approaches, we leverage the observation that existing software fuzzers already provide such a solution, and hence adapt them for hardware verification. Specifically, we translate RTL hardware to a software model and fuzz that model directly. The central challenge we address is how to mitigate the differences between the hardware and software execution models. This includes: 1) how to represent test cases, 2) what is the hardware equivalent of a crash, 3) what is an appropriate coverage metric, and 4) how to create a general-purpose fuzzing harness for hardware. To evaluate our approach, we design, implement, and open-source a Hardware Fuzzing Pipeline that enables fuzzing hardware at scale, using only open-source tools. Using our pipeline, we fuzz five IP blocks from Google's OpenTitan Root-of-Trust chip, four SiFive TileLink peripherals, three RISC-V CPUs, and an FFT accelerator. Our experiments reveal a two orders-of-magnitude reduction in run time to achieve similar Finite State Machine coverage over traditional dynamic verification schemes, and 26.70% better HDL line coverage than prior work. Moreover, with our bus-centric harness, we achieve over 83% HDL line coverage in four of the five OpenTitan IPs we study—without any initial seeds—and are able to detect all bugs (four synthetic from Hack@DAC and one real) implanted across all five OpenTitan IPs we study, with less than 10 hours of fuzzing.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/trippel](https://www.usenix.org/conference/usenixsecurity22/presentation/trippel)
- **PDF:** [https://www.usenix.org/system/files/sec22-trippel.pdf](https://www.usenix.org/system/files/sec22-trippel.pdf)
## Stateful Greybox Fuzzing.
### Authors
* Jinsheng Ba, National University of Singapore
* Marcel Böhme, Monash University and MPI-SP
* Zahra Mirzamomen, Monash University
* Abhik Roychoudhury, National University of Singapore
### Abstract
> Many protocol implementations are reactive systems, where the protocol process is in continuous interaction with other processes and the environment. If a bug can be exposed only in a certain state, a fuzzer needs to provide a specific sequence of events as inputs that would take protocol into this state before the bug is manifested. We call these bugs as "stateful" bugs. Usually, when we are testing a protocol implementation, we do not have a detailed formal specification of the protocol to rely upon. Without knowledge of the protocol, it is inherently difficult for a fuzzer to discover such stateful bugs. A key challenge then is to cover the state space without an explicit specification of the protocol. Finding stateful bugs in protocol implementations would thus involve partially uncovering the state space of the protocol. Fuzzing stateful software systems would need to incorporate strategies for state identification. Such state identification may follow from manual guidance, or from automatic analysis.In this work, we posit that manual annotations for state identification can be avoided for stateful protocol fuzzing. Specifically, we rely on a programmatic intuition that the state variables used in protocol implementations often appear in enum type variables whose values (the state names) come from named constants. In our analysis of the Top-50 most widely used open-source protocol implementations, we found that every implementation uses state variables that are assigned named constants (with easy to comprehend names such as INIT, READY) to represent the current state. In this work, we propose to automatically identify such state variables and track the sequence of values assigned to them during fuzzing to produce a "map" of the explored state space.Our experiments confirm that our stateful fuzzer discovers stateful bugs twice as fast as the baseline greybox fuzzer that we extended. Starting from the initial state, our fuzzer exercises one order of magnitude more state/transition sequences and covers code two times faster than the baseline fuzzer. Several zero-day bugs in prominent protocol implementations were found by our fuzzer, and 8 CVEs have been assigned.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/ba](https://www.usenix.org/conference/usenixsecurity22/presentation/ba)
- **PDF:** [https://www.usenix.org/system/files/sec22-ba.pdf](https://www.usenix.org/system/files/sec22-ba.pdf)
## StateFuzz: System Call-Based State-Aware Linux Driver Fuzzing.
### Authors
* Bodong Zhao, Institute for Network Science and Cyberspace / BNRist, Tsinghua University
* Zheming Li, Institute for Network Science and Cyberspace / BNRist, Tsinghua University
* Shisong Qin, Institute for Network Science and Cyberspace / BNRist, Tsinghua University
* Zheyu Ma, Institute for Network Science and Cyberspace / BNRist, Tsinghua University
* Ming Yuan, Institute for Network Science and Cyberspace / BNRist, Tsinghua University
* Wenyu Zhu, Department of Electronic Engineering, Tsinghua University
* Zhihong Tian, Guangzhou University
* Chao Zhang, Institute for Network Science and Cyberspace / BNRist, Tsinghua University and Zhongguancun Lab
### Abstract
> Coverage-guided fuzzing has achieved great success in finding software vulnerabilities. Existing coverage-guided fuzzers generally favor test cases that hit new code, and discard ones that exercise the same code. However, such a strategy is not optimum. A new test case exercising the same code could be better than a previous test case, as it may trigger new program states useful for code exploration and bug discovery.In this paper, we assessed the limitation of coverage-guided fuzzing solutions and proposed a state-aware fuzzing solution StateFuzz to address this issue. First, we model program states with values of state-variables and utilize static analysis to recognize such variables. Then, we instrument target programs to track such variables' values and infer program state transition at runtime. Lastly, we utilize state information to prioritize test cases that can trigger new states, and apply a three-dimension feedback mechanism to fine-tune the evolutionary direction of coverage-guided fuzzers. We have implemented a prototype of StateFuzz, and evaluated it on Linux upstream drivers and Android drivers. Evaluation results show that StateFuzz is effective at discovering both new code and vulnerabilities. It finds 18 unknown vulnerabilities and 2 known but unpatched vulnerabilities, and reaches 19% higher code coverage and 32% higher state coverage than the state-of-the-art fuzzer Syzkaller.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/zhao-bodong](https://www.usenix.org/conference/usenixsecurity22/presentation/zhao-bodong)
- **PDF:** [https://www.usenix.org/system/files/sec22-zhao-bodong.pdf](https://www.usenix.org/system/files/sec22-zhao-bodong.pdf)
## How to Abuse and Fix Authenticated Encryption Without Key Commitment.
### Authors
* Ange Albertini, Google Research
* Thai Duong, Google Research
* Shay Gueron, University of Haifa and Amazon
* Stefan Kölbl, Google Research
* Atul Luykx, Google Research
* Sophie Schmieg, Google Research
### Abstract
> Authenticated encryption (AE) is used in a wide variety of applications, potentially in settings for which it was not originally designed. Recent research tries to understand what happens when AE is not used as prescribed by its designers. A question given relatively little attention is whether an AE scheme guarantees "key commitment": ciphertext should only decrypt to a valid plaintext under the key used to generate the ciphertext. Generally, AE schemes do not guarantee key commitment as it is not part of AE's design goal. Nevertheless, one would not expect this seemingly obscure property to have much impact on the security of actual products. In reality, however, products do rely on key commitment. We discuss three recent applications where missing key commitment is exploitable in practice. We provide proof-of-concept attacks via a tool that constructs AES-GCM ciphertext which can be decrypted to two plaintexts valid under a wide variety of file formats, such as PDF, Windows executables, and DICOM. Finally we discuss two solutions to add key commitment to AE schemes which have not been analyzed in the literature: a generic approach that adds an explicit key commitment scheme to the AE scheme, and a simple fix which works for AE schemes like AES-GCM and ChaCha20Poly1305, but requires separate analysis for each scheme.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/albertini](https://www.usenix.org/conference/usenixsecurity22/presentation/albertini)
- **PDF:** [https://www.usenix.org/system/files/sec22-albertini.pdf](https://www.usenix.org/system/files/sec22-albertini.pdf)
## Private Signaling.
### Authors
* Varun Madathil, North Carolina State University
* Aless, North Carolina State University
* ra Scafuro, North Carolina State University
* István András Seres, Eötvös Loránd University
* Omer Shlomovits, ZenGo X
* Denis Varlakov, ZenGo X
### Abstract
> We introduce the problem of private signaling. In this problem, a sender posts a message on a certain location of a public bulletin board, and then posts a signal that allows only the intended recipient (and no one else) to learn that it is the recipient of the message posted at that location. Besides privacy, two efficiency requirements must be met. First, the sender and recipient do not participate in any out-of-band communication. Second, the overhead of the recipient must be (much) better than scanning the entire board.Existing techniques, such as server-aided fuzzy message detection (Beck et al., CCS'21), could be employed to solve the private signaling problem. However, this solution leads to a trade-off between privacy and efficiency, where the complexity of the recipient grows with the required privacy. Specifically, this would require a scan of the entire board to obtain full privacy for the recipient.In this work, we present a server-aided solution to the private signaling problem that guarantees full privacy for all recipients while requiring only constant amount of work for both the recipient and the sender.Specifically, we provide three contributions: First, we provide a formal definition of private signaling in the Universal Composability (UC) framework and show that it captures several real-world settings where recipient anonymity is desired. Second, we present two server-aided protocols that UC-realize our definitions: one using a single server equipped with a trusted execution environment, and one based on two servers that employ garbled circuits. Third, we provide an open-source implementation of both of our protocols, evaluate their performance, and identify for which sets of parameters they can be practical.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/madathil](https://www.usenix.org/conference/usenixsecurity22/presentation/madathil)
- **PDF:** [https://www.usenix.org/system/files/sec22-madathil.pdf](https://www.usenix.org/system/files/sec22-madathil.pdf)
## Batched Differentially Private Information Retrieval.
### Authors
* Kinan Dak Albab, Brown University
* Rawane Issa, Boston University
* Mayank Varia, Boston University
* Kalman Graffi, Honda Research Institute Europe
### Abstract
> Private Information Retrieval (PIR) allows several clients to query a database held by one or more servers, such that the contents of their queries remain private. Prior PIR schemes have achieved sublinear communication and computation by leveraging computational assumptions, federating trust among many servers, relaxing security to permit differentially private leakage, refactoring effort into an offline stage to reduce online costs, or amortizing costs over a large batch of queries.In this work, we present an efficient PIR protocol that combines all of the above techniques to achieve constant amortized communication and computation complexity in the size of the database and constant client work. We leverage differentially private leakage in order to provide better trade-offs between privacy and efficiency. Our protocol achieves speed-ups up to and exceeding 10x in practical settings compared to state of the art PIR protocols, and can scale to batches with hundreds of millions of queries on cheap commodity AWS machines. Our protocol builds upon a new secret sharing scheme that is both incremental and non-malleable, which may be of interest to a wider audience. Our protocol provides security up to abort against malicious adversaries that can corrupt all but one party.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/albab](https://www.usenix.org/conference/usenixsecurity22/presentation/albab)
- **PDF:** [https://www.usenix.org/system/files/sec22-albab.pdf](https://www.usenix.org/system/files/sec22-albab.pdf)
## Practical Privacy-Preserving Authentication for SSH.
### Authors
* Lawrence Roy, Oregon State University
* Stanislav Lyakhov, Oregon State University
* Yeongjin Jang, Oregon State University
* Mike Rosulek, Oregon State University
### Abstract
> Public-key authentication in SSH reveals more information about the participants' keys than is necessary. (1) The server can learn a client's entire set of public keys, even keys generated for other servers. (2) The server learns exactly which key the client uses to authenticate, and can further prove this fact to a third party. (3) A client can learn whether the server recognizes public keys belonging to other users. Each of these problems lead to tangible privacy violations for SSH users. In this work we introduce a new public-key authentication method for SSH that reveals essentially the minimum possible amount of information. With our new method, the server learns only whether the client knows the private key for some authorized public key. If multiple keys are authorized, the server does not learn which one the client used. The client cannot learn whether the server recognizes public keys belonging to other users. Unlike traditional SSH authentication, our method is fully deniable. Our method supports existing SSH keypairs of all standard flavors—RSA, ECDSA, EdDSA. It does not require users to generate new key material. As in traditional SSH authentication, clients and servers can use a mixture of different key flavors in a single authentication session. We integrated our new authentication method into OpenSSH, and found it to be practical and scalable. For a typical client and server with at most 10 ECDSA/EdDSA keys each, our protocol requires 9 kB of communication and 12.4 ms of latency. Even for a client with 20 keys and server with 100 keys, our protocol requires only 12 kB of communication and 26.7 ms of latency.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/roy](https://www.usenix.org/conference/usenixsecurity22/presentation/roy)
- **PDF:** [https://www.usenix.org/system/files/sec22-roy.pdf](https://www.usenix.org/system/files/sec22-roy.pdf)
## One-off Disclosure Control by Heterogeneous Generalization.
### Authors
* Olga Gkountouna, University of Liverpool
* Katerina Doka, National Technical University of Athens
* Mingqiang Xue, Tower Research
* Jianneng Cao, Bank Jago
* Panagiotis Karras, Aarhus University
### Abstract
> How can we orchestrate an one-off sharing of informative data about individuals, while bounding the risk of disclosing sensitive information to an adversary who has access to the global distribution of such information and to personal identifiers? Despite intensive efforts, current privacy protection techniques fall short of this objective. Differential privacy provides strong guarantees regarding the privacy risk incurred by one's participation in the data at the cost of high information loss and is vulnerable to learning-based attacks exploiting correlations among data. Syntactic anonymization bounds the risk on specific sensitive information incurred by data publication, yet typically resorts to a superfluous clustering of individuals into groups that forfeits data utility.In this paper, we develop algorithms for disclosure control that abide to sensitive-information-oriented syntactic privacy guarantees and gain up to 77% in utility against current methods. We achieve this feat by recasting data heterogeneously, via bipartite matching, rather than homogeneously via clustering. We show that our methods resist adversaries who know the employed algorithm and its parameters. Our experimental study featuring synthetic and real data, as well as real learning and data analysis tasks, shows that these methods enhance data utility with a runtime overhead that is small and reducible by data partitioning, while the β-likeness guarantee with heterogeneous generalization staunchly resists machine-learning-based attacks, hence offers practical value.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/gkountouna](https://www.usenix.org/conference/usenixsecurity22/presentation/gkountouna)
- **PDF:** [https://www.usenix.org/system/files/sec22-gkountouna.pdf](https://www.usenix.org/system/files/sec22-gkountouna.pdf)
## Understanding and Improving Usability of Data Dashboards for Simplified Privacy Control of Voice Assistant Data.
### Authors
* V, Indian Institute of Technology Kharagpur
* it Sharma, Indian Institute of Technology Kharagpur
* Mainack Mondal, Indian Institute of Technology Kharagpur
### Abstract
> Today, intelligent voice assistant (VA) software like Amazon's Alexa, Google's Voice Assistant (GVA) and Apple's Siri have millions of users. These VAs often collect and analyze huge user data for improving their functionality. However, this collected data may contain sensitive information (e.g., personal voice recordings) that users might not feel comfortable sharing with others and might cause significant privacy concerns. To counter such concerns, service providers like Google present their users with a personal data dashboard (called 'My Activity Dashboard'), allowing them to manage all voice assistant collected data. However, a real-world GVA-data driven understanding of user perceptions and preferences regarding this data (and data dashboards) remained relatively unexplored in prior research.To that end, in this work we focused on Google Voice Assistant (GVA) users and investigated the perceptions and preferences of GVA users regarding data and dashboard while grounding them in real GVA-collected user data. Specifically, we conducted an 80-participant survey-based user study to collect both generic perceptions regarding GVA usage as well as desired privacy preferences for a stratified sample of their GVA data. We show that most participants had superficial knowledge about the type of data collected by GVA. Worryingly, we found that participants felt uncomfortable sharing a non-trivial 17.7% of GVA-collected data elements with Google. The current My Activity dashboard, although useful, did not help long-time GVA users effectively manage their data privacy. Our real-data-driven study found that showing users even one sensitive data element can significantly improve the usability of data dashboards. To that end, we built a classifier that can detect sensitive data for data dashboard recommendations with a 95% F1-score and shows 76% improvement over baseline models.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/sharma-vandit](https://www.usenix.org/conference/usenixsecurity22/presentation/sharma-vandit)
- **PDF:** [https://www.usenix.org/system/files/sec22-sharma-vandit.pdf](https://www.usenix.org/system/files/sec22-sharma-vandit.pdf)
## Security and Privacy Perceptions of Third-Party Application Access for Google Accounts.
### Authors
* David G. Balash, The George Washington University
* Xiaoyuan Wu, The George Washington University
* Miles Grant, The George Washington University
* Irwin Reyes, Two Six Technologies
* Adam J. Aviv, The George Washington University
### Abstract
> Online services like Google provide a variety of application programming interfaces (APIs). These online APIs enable authenticated third-party services and applications (apps) to access a user's account data for tasks such as single sign-on (SSO), calendar integration, and sending email on behalf of the user, among others. Despite their prevalence, API access could pose significant privacy and security risks, where a third-party could have unexpected privileges to a user's account. To gauge users' perceptions and concerns regarding third-party apps that integrate with online APIs, we performed a multi-part online survey of Google users. First, we asked n = 432 participants to recall if and when they allowed third-party access to their Google account: 89% recalled using at least one SSO and 52% remembered at least one third-party app. In the second survey, we re-recruited n = 214 participants to ask about specific apps and SSOs they've authorized on their own Google accounts. We collected in-the-wild data about users' actual SSOs and authorized apps: 86% used Google SSO on at least one service, and 67% had at least one third-party app authorized. After examining their apps and SSOs, participants expressed the most concern about access to personal information like email addresses and other publicly shared info. However, participants were less concerned with broader---and perhaps more invasive---access to calendars, emails, or cloud storage (as needed by third-party apps). This discrepancy may be due in part to trust transference to apps that integrate with Google, forming an implied partnership. Our results suggest opportunities for design improvements to the current third-party management tools offered by Google; for example, tracking recent access, automatically revoking access due to app disuse, and providing permission controls.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/balash](https://www.usenix.org/conference/usenixsecurity22/presentation/balash)
- **PDF:** [https://www.usenix.org/system/files/sec22-balash.pdf](https://www.usenix.org/system/files/sec22-balash.pdf)
## Empirical Understanding of Deletion Privacy: Experiences, Expectations, and Measures.
### Authors
* Mohsen Minaei, Purdue University
* Mainack Mondal, IIT Kharagpur
* Aniket Kate, Purdue University
### Abstract
> In recent years, social platforms are heavily used by individuals to share their thoughts and personal information. However, due to regret over time about posting inappropriate social content, embarrassment, or even life or relationship changes, some past posts might also pose serious privacy concerns for them. To cope with these privacy concerns, social platforms offer deletion mechanisms that allow users to remove their contents. Quite naturally, these deletion mechanisms are really useful for removing past posts as and when needed. However, these same mechanisms also leave the users potentially vulnerable to attacks by adversaries who specifically seek the users' damaging content and exploit the act of deletion as a strong signal for identifying such content. Unfortunately, today user experiences and contextual expectations regarding such attacks on deletion privacy and deletion privacy in general are not well understood.To that end, in this paper, we conduct a user survey-based exploration involving 191 participants to unpack their prior deletion experiences, their expectations of deletion privacy, and how effective they find the current deletion mechanisms. We find that more than 80% of the users have deleted at least a social media post, and users self-reported that, on average, around 35% of their deletions happened after a week of posting. While the participants identified the irrelevancy (due to time passing) as the main reason for content removal, most of them believed that deletions indicate that the deleted content includes some damaging information to the owner. Importantly, the participants are significantly more concerned about their deletions being noticed by large-scale data collectors (e.g., a third-party data collecting company or the government) than individuals from their social circle. Finally, the participants felt that popular deletion mechanisms, although very useful to help remove the content in multiple scenarios, are not very effective in protecting the privacy of those deletions. Consequently, they identify design guidelines for improving future deletion mechanisms.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/minaei](https://www.usenix.org/conference/usenixsecurity22/presentation/minaei)
- **PDF:** [https://www.usenix.org/system/files/sec22-minaei.pdf](https://www.usenix.org/system/files/sec22-minaei.pdf)
## Security at the End of the Tunnel: The Anatomy of VPN Mental Models Among Experts and Non-Experts in a Corporate Context.
### Authors
* Veroniek Binkhorst, Technical University of Delft
* Tobias Fiebig, Max-Planck-Institut für Informatik and Technical University of Delft
* Katharina Krombholz, CISPA Helmholtz Center for Information Security
* Wolter Pieters, Radboud University
* Katsiaryna Labunets, Utrecht University
### Abstract
> With the worldwide COVID-19 pandemic in 2020 and 2021 necessitating working from home, corporate Virtual Private Networks (VPNs) have become an important item securing the continued operation of companies around the globe. However, due to their different use case, corporate VPNs and how users interact with them differ from public VPNs, which are now commonly used by end-users.In this paper, we present a first explorative study of eleven experts' and seven non-experts' mental models in the context of corporate VPNs. We find a partial alignment of these models in the high-level technical understanding while diverging in important parameters of how, when, and why VPNs are being used. While, in general, experts have a deeper technical understanding of VPN technology, we also observe that even they sometimes hold false beliefs on security aspects of VPNs. In summary, we show that the mental models of corporate VPNs differ from those for related security technology, e.g., HTTPS.Our findings allow us to draft recommendations for practitioners to encourage a secure use of VPN technology (through training interventions, better communication, and system design changes in terms of device management). Furthermore, we identify avenues for future research, e.g., into experts' knowledge and balancing privacy and security between system operators and users.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/binkhorst](https://www.usenix.org/conference/usenixsecurity22/presentation/binkhorst)
- **PDF:** [https://www.usenix.org/system/files/sec22-binkhorst.pdf](https://www.usenix.org/system/files/sec22-binkhorst.pdf)
## How and Why People Use Virtual Private Networks.
### Authors
* Agnieszka Dutkowska-Zuk, Lancaster University
* Austin Hounsel, Princeton University
* Amy Morrill, University of Chicago
* Andre Xiong, Princeton University
* Marshini Chetty, University of Chicago
* Nick Feamster, University of Chicago
### Abstract
> Virtual Private Networks (VPNs) are often used to protect online users' privacy, but many VPNs do not guarantee privacy and may even compromise user privacy through leakage of traffic flows, data collection and sharing, and so forth. In this paper, we aim to understand the extent to which people are aware of privacy and security risks when using VPNs as well as how they use and adopt VPNs in the first place. To do so, we conducted a study of 729 VPN users in the United States about their VPN usage habits and preferences. Our study comprised 32 in-person interviews with university students, a survey of 349 university students and a survey of 348 general VPN users on Prolific. We have three main findings. First, although a general population of VPN users primarily use VPNs to improve privacy and security, students are additionally concerned with access to content (e.g., circumvention of geographic restrictions). Second, both groups concluded that VPNs collect data about them, exposing gaps both in mental models about how VPNs work and awareness of the risks of data collection. Finally, most users learned about VPNs in high school or college and use free VPNs but feel safer using VPNs provided by their institutions. These results could form the basis of future research, awareness campaigns, and regulatory activity.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/dutkowska-zuk](https://www.usenix.org/conference/usenixsecurity22/presentation/dutkowska-zuk)
- **PDF:** [https://www.usenix.org/system/files/sec22-dutkowska-zuk.pdf](https://www.usenix.org/system/files/sec22-dutkowska-zuk.pdf)
## CamShield: Securing Smart Cameras through Physical Replication and Isolation.
### Authors
* Zhiwei Wang, ShanghaiTech University
* Yihui Yan, ShanghaiTech University
* Yueli Yan, ShanghaiTech University
* Huangxun Chen, Huawei Theory Lab
* Zhice Yang, ShanghaiTech University
### Abstract
> Smart home devices, such as security cameras, are equipped with visual sensors, either for monitoring or improving user experience. Due to the sensitivity of the home environment, their visual sensing capabilities cause privacy and security concerns. In this paper, we design and implement the CamShield, a companion device to guarantee the privacy of smart security cameras, even if the whole camera system is fully compromised. At a high level, the CamShield is a shielding case that works by attaching it to the front of the security camera to blind it. Then, it uses its own camera for visual recording. The videos are first protected according to user-specified policies, and then transmitted to the security camera and hence to the Internet through a Visible Light Communication (VLC) channel. It ensures that only the authorized entities have full access to the protected videos. Since the CamShield is physically isolated from the shielded security camera and the Internet, it naturally resists many known attacks and can operate as it is expected to.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/wang-zhiwei](https://www.usenix.org/conference/usenixsecurity22/presentation/wang-zhiwei)
- **PDF:** [https://www.usenix.org/system/files/sec22-wang-zhiwei.pdf](https://www.usenix.org/system/files/sec22-wang-zhiwei.pdf)
## SCRAPS: Scalable Collective Remote Attestation for Pub-Sub IoT Networks with Untrusted Proxy Verifier.
### Authors
* Lukas Petzi, University of Würzburg
* Ala Eddine Ben Yahya, University of Würzburg
* Alex, University of Würzburg
* ra Dmitrienko, University of Würzburg
* Gene Tsudik, UC Irvine
* Thomas Prantl, University of Würzburg
* Samuel Kounev, University of Würzburg
### Abstract
> Remote Attestation (RA) is a basic security mechanism that detects malicious presence on various types of computing components, e.g., IoT devices. In a typical IoT setting, RA involves a trusted Verifier that sends a challenge to an untrusted remote Prover, which must in turn reply with a fresh and authentic evidence of being in a trustworthy state. However, most current RA schemes assume a central Verifier, which represents a single point of failure. This feature is problematic when mutually suspicious stakeholders are involved. Furthermore, scalability issues arise as the number of IoT devices (Provers) grows.Although some RA schemes allow peer Provers to act as Verifiers, they involve unrealistic (for IoT devices) requirements, such as time synchronization and synchronous communication. Moreover, they incur heavy memory, computation, and communication burdens, while not considering sleeping or otherwise disconnected devices. Motivated by the need to address these limitations, we construct Scalable Collective Remote Attestation for Pub-Sub (SCRAPS), a novel collective RA scheme. It achieves scalability by outsourcing Verifier duties  to  a  smart contract and mitigates  DoS  attacks against both Provers and Verifiers. It also removes the need for synchronous communication. Furthermore,RA evidence in SCRAPS is publicly verifiable, which significantly reduces the number of attestation evidence computations, thus lowering Prover burden. We report on a prototype of SCRAPS over Hyperledger Sawtooth (a blockchain geared for IoT use-cases) and evaluate its performance, scalability, and security aspects.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/petzi](https://www.usenix.org/conference/usenixsecurity22/presentation/petzi)
- **PDF:** [https://www.usenix.org/system/files/sec22-petzi.pdf](https://www.usenix.org/system/files/sec22-petzi.pdf)
## An Experimental Study of GPS Spoofing and Takeover Attacks on UAVs.
### Authors
* Harshad Sathaye, Northeastern University
* Martin Strohmeier, armasuisse
* Vincent Lenders, armasuisse
* Aanjhan Ranganathan, Northeastern University
### Abstract
> Today, there is limited knowledge about the behavior of UAVs under GPS spoofing attacks in a real-world environment, in particular considering the interplay between the UAV's software as well as other equipped navigation aids and vision sensors. This work aims to understand the feasibility and requirements of fully controlling a UAV's movements by spoofing GPS signals alone. We enumerate the challenges in accomplishing a complete UAV takeover through GPS spoofing and controlling it without crashing. We design and implement a Real-time GPS Signal Generator (RtGSG) that can be configured to generate any arbitrary trajectory and is capable of making changes to GPS signals in real-time through user input, e.g., using a keyboard or joystick. We evaluate RtGSG on popular commercial UAVs from DJI and Autel through over-the-air spoofing experiments in a controlled chamber. We explore generic and UAV-specific GPS spoofing strategies in order to best achieve complete maneuvering control (e.g., velocity and direction). This work highlights that, although COTS UAVs remain vulnerable to GPS spoofing attacks, a complete takeover and control of the UAV requires careful manipulation of the spoofing signals in real-time. Finally, we release our implementation to the scientific community for further research.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/sathaye](https://www.usenix.org/conference/usenixsecurity22/presentation/sathaye)
- **PDF:** [https://www.usenix.org/system/files/sec22-sathaye.pdf](https://www.usenix.org/system/files/sec22-sathaye.pdf)
## Smart Home Privacy Policies Demystified: A Study of Availability, Content, and Coverage.
### Authors
* Sunil Man, William & Mary
* har, William & Mary
* Kaushal Kafle, William & Mary
* Benjamin Andow, Google LLC
* Kapil Singh, IBM T.J. Watson Research Center
* Adwait Nadkarni, William & Mary
### Abstract
> Smart home devices transmit highly sensitive usage information to servers owned by vendors or third-parties as part of their core functionality. Hence, it is necessary to provide users with the context in which their device data is collected and shared, to enable them to weigh the benefits of deploying smart home technology against the resulting loss of privacy. As privacy policies are generally expected to precisely convey this information, we perform a systematic and data-driven analysis of the current state of smart home privacy policies, with a particular focus on three key questions: (1) how hard privacy policies are for consumers to obtain, (2) how existing policies describe the collection and sharing of device data, and (3) how accurate these descriptions are when compared to information derived from alternate sources. Our analysis of 596 smart home vendors, affecting 2, 442 smart home devices yields 17 findings that impact millions of users, demonstrate gaps in existing smart home privacy policies, as well as challenges and opportunities for automated analysis.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/manandhar](https://www.usenix.org/conference/usenixsecurity22/presentation/manandhar)
- **PDF:** [https://www.usenix.org/system/files/sec22-manandhar.pdf](https://www.usenix.org/system/files/sec22-manandhar.pdf)
## MaDIoT 2.0: Modern High-Wattage IoT Botnet Attacks and Defenses.
### Authors
* Tohid Shekari, Georgia Institute of Technology
* Alvaro A. Cardenas, University of California, Santa Cruz
* Raheem Beyah, Georgia Institute of Technology
### Abstract
> The widespread availability of vulnerable IoT devices has resulted in IoT botnets. A particularly concerning IoT botnet can be built around high-wattage IoT devices such as EV chargers because, in large numbers, they can abruptly change the electricity consumption in the power grid. These attacks are called Manipulation of Demand via IoT (MaDIoT) attacks. Previous research has shown that the existing power grid protection mechanisms prevent any large-scale negative consequences to the grid from MaDIoT attacks. In this paper, we analyze this assumption and show that an intelligent attacker with extra knowledge about the power grid and its state, can launch more sophisticated attacks. Rather than attacking all locations at random times, our adversary uses an instability metric that lets the attacker know the specific time and geographical location to activate the high-wattage bots.  We call these new attacks MaDIoT 2.0.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/shekari](https://www.usenix.org/conference/usenixsecurity22/presentation/shekari)
- **PDF:** [https://www.usenix.org/system/files/sec22-shekari.pdf](https://www.usenix.org/system/files/sec22-shekari.pdf)
## AutoDA: Automated Decision-based Iterative Adversarial Attacks.
### Authors
* Qi-An Fu, Dept. of Comp. Sci. and Tech., Institute for AI, Tsinghua-Bosch Joint ML Center, THBI Lab, BNRist Center, Tsinghua University, Beijing, China
* Yinpeng Dong, Dept. of Comp. Sci. and Tech., Institute for AI, Tsinghua-Bosch Joint ML Center, THBI Lab, BNRist Center, Tsinghua University, Beijing, China; RealAI
* Hang Su, Dept. of Comp. Sci. and Tech., Institute for AI, Tsinghua-Bosch Joint ML Center, THBI Lab, BNRist Center, Tsinghua University, Beijing, China; Peng Cheng Laboratory; Tsinghua University-China Mobile Communications Group Co., Ltd. Joint Institute
* Jun Zhu, Dept. of Comp. Sci. and Tech., Institute for AI, Tsinghua-Bosch Joint ML Center, THBI Lab, BNRist Center, Tsinghua University, Beijing, China; RealAI; Peng Cheng Laboratory; Tsinghua University-China Mobile Communications Group Co., Ltd. Joint Institute
* Chao Zhang, Institute for Network Science and Cyberspace / BNRist, Tsinghua University
### Abstract
> Adversarial attacks can fool deep learning models by imposing imperceptible perturbations onto natural examples, which have provoked concerns in various security-sensitive applications. Among them, decision-based black-box attacks are practical yet more challenging, where the adversary can only acquire the final classification labels by querying the target model without access to the model's details. Under this setting, existing works usually rely on heuristics and exhibit unsatisfactory performance in terms of query efficiency and attack success rate. To better understand the rationality of these heuristics and further improve over existing methods, we propose AutoDA to automatically discover decision-based iterative adversarial attack algorithms. In our approach, we construct a generic search space of attack algorithms and develop an efficient search algorithm to explore this space. Although we adopt a small and fast model to efficiently evaluate and discover qualified attack algorithms during the search, extensive experiments demonstrate that the discovered algorithms are simple yet query-efficient when attacking larger models on the CIFAR-10 and ImageNet datasets. They achieve comparable performance with the human-designed state-of-the-art decision-based iterative attack methods consistently.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/fu-qi](https://www.usenix.org/conference/usenixsecurity22/presentation/fu-qi)
- **PDF:** [https://www.usenix.org/system/files/sec22-fu-qi.pdf](https://www.usenix.org/system/files/sec22-fu-qi.pdf)
## Poison Forensics: Traceback of Data Poisoning Attacks in Neural Networks.
### Authors
* Shawn Shan, University of Chicago
* Arjun Nitin Bhagoji, University of Chicago
* Haitao Zheng, University of Chicago
* Ben Y. Zhao, University of Chicago
### Abstract
> In adversarial machine learning, new defenses against attacks on deep learning systems are routinely broken soon after their release by more powerful attacks. In this context, forensic tools can offer a valuable complement to existing defenses, by tracing back a successful attack to its root cause, and offering a path forward for mitigation to prevent similar attacks in the future.In this paper, we describe our efforts in developing a forensic traceback tool for poison attacks on deep neural networks. We propose a novel iterative clustering and pruning solution that trims "innocent" training samples, until all that remains is the set of poisoned data responsible for the attack. Our method clusters training samples based on their impact on model parameters, then uses an efficient data unlearning method to prune innocent clusters. We empirically demonstrate the efficacy of our system on three types of dirty-label (backdoor) poison attacks and three types of clean-label poison attacks, across domains of computer vision and malware classification. Our system achieves over 98.4% precision and 96.8% recall across all attacks. We also show that our system is robust against four anti-forensics measures specifically designed to attack it.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/shan](https://www.usenix.org/conference/usenixsecurity22/presentation/shan)
- **PDF:** [https://www.usenix.org/system/files/sec22-shan.pdf](https://www.usenix.org/system/files/sec22-shan.pdf)
## Teacher Model Fingerprinting Attacks Against Transfer Learning.
### Authors
* Yufei Chen, Xi'an Jiaotong University & City University of Hong Kong
* Chao Shen, Xi'an Jiaotong University
* Cong Wang, City University of Hong Kong
* Yang Zhang, CISPA Helmholtz Center for Information Security
### Abstract
> Transfer learning has become a common solution to address training data scarcity in practice. It trains a specified student model by reusing or fine-tuning early layers of a well-trained teacher model that is usually publicly available. However, besides utility improvement, the transferred public knowledge also brings potential threats to model confidentiality, and even further raises other security and privacy issues. In this paper, we present the first comprehensive investigation of the teacher model exposure threat in the transfer learning context, aiming to gain a deeper insight into the tension between public knowledge and model confidentiality. To this end, we propose a teacher model fingerprinting attack to infer the origin of a student model, i.e., the teacher model it transfers from. Specifically, we propose a novel optimization-based method to carefully generate queries to probe the student model to realize our attack. Unlike existing model reverse engineering approaches, our proposed fingerprinting method neither relies on fine-grained model outputs, e.g., posteriors, nor auxiliary information of the model architecture or training dataset. We systematically evaluate the effectiveness of our proposed attack. The empirical results demonstrate that our attack can accurately identify the model origin with few probing queries. Moreover, we show that the proposed attack can serve as a stepping stone to facilitating other attacks against machine learning models, such as model stealing.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/chen-yufei](https://www.usenix.org/conference/usenixsecurity22/presentation/chen-yufei)
- **PDF:** [https://www.usenix.org/system/files/sec22-chen-yufei.pdf](https://www.usenix.org/system/files/sec22-chen-yufei.pdf)
## Hidden Trigger Backdoor Attack on NLP Models via Linguistic Style Manipulation.
### Authors
* Xudong Pan, Fudan University
* Mi Zhang, Fudan University
* Beina Sheng, Fudan University
* Jiaming Zhu, Fudan University
* Min Yang, Fudan University
### Abstract
> The vulnerability of deep neural networks (DNN) to backdoor (trojan) attacks is extensively studied for the image domain. In a backdoor attack, a DNN is modified to exhibit expected behaviors under attacker-specified inputs (i.e., triggers). Exploring the backdoor vulnerability of DNN in natural language processing (NLP), recent studies are limited to using specially added words/phrases as the trigger pattern (i.e., word-based triggers), which distorts the semantics of the base sentence, causes perceivable abnormality in linguistic features and can be eliminated by potential defensive techniques. In this paper, we present LiMnguistic Style-Motivated backdoor attack (LISM), the first hidden trigger backdoor attack which exploits implicit linguistic styles for backdooring NLP models. Besides the basic requirements on attack success rate and normal model performance, LISM realizes the following advanced design goals compared with previous word-based backdoor: (a) LISM weaponizes text style transfer models to learn to generate sentences with an attacker-specified linguistic style (i.e., trigger style), which largely preserves the malicious semantics of the base sentence and reveals almost no abnormality exploitable by detection algorithms. (b) Each base sentence is dynamically paraphrased to hold the trigger style, which has almost no dependence on common words or phrases and therefore evades existing defenses which exploit the strong correlation between trigger words and misclassification. Extensive evaluation on 5 popular model architectures, 3 real-world security-critical tasks, 3 trigger styles and 3 potential countermeasures strongly validates the effectiveness and the stealthiness of LISM.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/pan-hidden](https://www.usenix.org/conference/usenixsecurity22/presentation/pan-hidden)
- **PDF:** [https://www.usenix.org/system/files/sec22-pan-hidden.pdf](https://www.usenix.org/system/files/sec22-pan-hidden.pdf)
## PoisonedEncoder: Poisoning the Unlabeled Pre-training Data in Contrastive Learning.
### Authors
* Hongbin Liu, Duke University
* Jinyuan Jia, Duke University
* Neil Zhenqiang Gong, Duke University
### Abstract
> Contrastive learning pre-trains an image encoder using a large amount of unlabeled data such that the image encoder can be used as a general-purpose feature extractor for various downstream tasks. In this work, we propose PoisonedEncoder, a data poisoning attack to contrastive learning. In particular, an attacker injects carefully crafted poisoning inputs into the unlabeled pre-training data, such that the downstream classifiers built based on the poisoned encoder for multiple target downstream tasks simultaneously classify attacker-chosen, arbitrary clean inputs as attacker-chosen, arbitrary classes. We formulate our data poisoning attack as a bilevel optimization problem, whose solution is the set of poisoning inputs; and we propose a contrastive-learning-tailored method to approximately solve it. Our evaluation on multiple datasets shows that PoisonedEncoder achieves high attack success rates while maintaining the testing accuracy of the downstream classifiers built upon the poisoned encoder for non-attacker-chosen inputs. We also evaluate five defenses against PoisonedEncoder, including one pre-processing, three in-processing, and one post-processing defenses. Our results show that these defenses can decrease the attack success rate of PoisonedEncoder, but they also sacrifice the utility of the encoder or require a large clean pre-training dataset.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/liu-hongbin](https://www.usenix.org/conference/usenixsecurity22/presentation/liu-hongbin)
- **PDF:** [https://www.usenix.org/system/files/sec22-liu-hongbin.pdf](https://www.usenix.org/system/files/sec22-liu-hongbin.pdf)
## Double Trouble: Combined Heterogeneous Attacks on Non-Inclusive Cache Hierarchies.
### Authors
* Antoon Purnal, imec-COSIC, KU Leuven
* Furkan Turan, imec-COSIC, KU Leuven
* Ingrid Verbauwhede, imec-COSIC, KU Leuven
### Abstract
> As the performance of general-purpose processors faces diminishing improvements, computing systems are increasingly equipped with domain-specific accelerators. Today's high-end servers tightly integrate such accelerators with the CPU, e.g., giving them direct access to the CPU's last-level cache (LLC). Caches are an important source of information leakage across security domains. This work explores combined cache attacks, complementing traditional co-tenancy with control over one or more accelerators. The constraints imposed on these accelerators, originally perceived as limitations, turn out to be advantageous to an attacker. We develop a novel approach for accelerators to find eviction sets, and leverage precise double-sided control over cache lines to expose undocumented behavior in non-inclusive Intel cache hierarchies. We develop a compact and extensible FPGA hardware accelerator to demonstrate our findings. It constructs eviction sets at unprecedented speeds (<200 µs), outperforming existing techniques with one to three orders of magnitude. It maintains excellent performance, even under high noise pressure. We also use the accelerator to set up a covert channel with fine spatial granularity, encoding more than 3 bits per cache set. Furthermore, it can efficiently evict shared targets with tiny eviction sets, refuting the common assumption that eviction sets must be as large as the cache associativity.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/purnal](https://www.usenix.org/conference/usenixsecurity22/presentation/purnal)
- **PDF:** [https://www.usenix.org/system/files/sec22-purnal.pdf](https://www.usenix.org/system/files/sec22-purnal.pdf)
## QuORAM: A Quorum-Replicated Fault Tolerant ORAM Datastore.
### Authors
* Sujaya Maiyya, UC Santa Barbara
* Seif Ibrahim, UC Santa Barbara
* Caitlin Scarberry, UC Santa Barbara
* Divyakant Agrawal, UC Santa Barbara
* Amr El Abbadi, UC Santa Barbara
* Huijia Lin, University of Washington
* Stefano Tessaro, University of Washington
* Victor Zakhary, Oracle
### Abstract
> Privacy and security challenges due to the outsourcing of data storage and processing to third-party cloud providers are well known. With regard to data privacy, Oblivious RAM (ORAM) schemes provide strong privacy guarantees by not only hiding the contents of the data (by encryption) but also obfuscating the access patterns of the outsourced data. But most existing ORAM datastores are not fault tolerant in that if the external storage server (which stores encrypted data) or the trusted proxy (which stores the encryption key and other metadata) crashes, an application loses all of its data. To achieve fault tolerance, we propose QuORAM, the first ORAM datastore to replicate data with a quorum-based replication protocol. QuORAM's contributions are three-fold: (i) it obfuscates access patterns to provide obliviousness guarantees, (ii) it replicates data using a novel lock-free and decentralized replication protocol to achieve fault tolerance, and (iii) it guarantees linearizable semantics. Experimentally evaluating QuORAM highlights counter-intuitive results: QuORAM incurs negligible cost to achieve obliviousness when compared to an insecure fault-tolerant replicated system; QuORAM's peak throughput is 2.4x of its non-replicated baseline; and QuORAM performs 33.2x better in terms of throughput than an ORAM datastore that relies on CockroachDB, an open-source geo-replicated database, for fault tolerance.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/maiyya](https://www.usenix.org/conference/usenixsecurity22/presentation/maiyya)
- **PDF:** [https://www.usenix.org/system/files/sec22-maiyya.pdf](https://www.usenix.org/system/files/sec22-maiyya.pdf)
## Post-Quantum Cryptography with Contemporary Co-Processors: Beyond Kronecker, Schönhage-Strassen & Nussbaumer.
### Authors
* Joppe W. Bos, NXP Semiconductors
* Joost Renes, NXP Semiconductors
* Christine van Vredendaal, NXP Semiconductors
### Abstract
> There are currently over 30 billion IoT (Internet of Things) devices installed worldwide. To secure these devices from various threats one often relies on public-key cryptographic primitives whose operations can be costly to compute on resource-constrained IoT devices. To support such operations these devices often include a dedicated co-processor for cryptographic procedures, typically in the form of a big integer arithmetic unit. Such existing arithmetic co-processors do not offer the functionality that is expected by upcoming post-quantum cryptographic primitives. Regardless, contemporary systems may exist in the field for many years to come. In this paper we propose the Kronecker+ algorithm for polynomial multiplication in rings of the form Z[X]/(X^n +1): the arithmetic foundation of many lattice-based cryptographic schemes. We discuss how Kronecker+ allows for re-use of existing co-processors for post-quantum cryptography, and in particular directly applies to the various finalists in the post-quantum standardization effort led by NIST. We demonstrate the effectiveness of our algorithm in practice by integrating Kronecker+ into Saber: one of the finalists in the ongoing NIST standardization effort. On our target platform, a RV32IMC with access to a dedicated arithmetic co-processor designed to accelerate RSA and ECC, Kronecker+ performs the matrix multiplication 2.8 times faster than regular Kronecker substitution and 1.7 times faster than Harvey's negated-evaluation-points method.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/bos](https://www.usenix.org/conference/usenixsecurity22/presentation/bos)
- **PDF:** [https://www.usenix.org/system/files/sec22-bos.pdf](https://www.usenix.org/system/files/sec22-bos.pdf)
## FIXREVERTER: A Realistic Bug Injection Methodology for Benchmarking Fuzz Testing.
### Authors
* Zenong Zhang, University of Texas at Dallas
* Zach Patterson, University of Texas at Dallas
* Michael Hicks, University of Maryland and Amazon
* Shiyi Wei, University of Texas at Dallas
### Abstract
> Fuzz testing is an active area of research with proposed improvements published at a rapid pace. Such proposals are assessed empirically: Can they be shown to perform better than the status quo? Such an assessment requires a benchmark of target programs with well-identified, realistic bugs. To ease the construction of such a benchmark, this paper presents FIXREVERTER, a tool that automatically injects realistic bugs in a program. FIXREVERTER takes as input a bugfix pattern which contains both code syntax and semantic conditions. Any code site that matches the specified syntax is undone if the semantic conditions are satisfied, as checked by static analysis, thus (re)introducing a likely bug. This paper focuses on three bugfix patterns, which we call conditional-abort, conditional-execute, and conditional-assign, based on a study of fixes in a corpus of Common Vulnerabilities and Exposures (CVEs). Using FIXREVERTER we have built REVBUGBENCH, which consists of 10 programs into which we have injected nearly 8,000 bugs; the programs are taken from FuzzBench and Binutils, and represent common targets of fuzzing evaluations. We have integrated REVBUGBENCH into the FuzzBench service, and used it to evaluate five fuzzers. Fuzzing performance varies by fuzzer and program, as desired/expected. Overall, 219 unique bugs were reported, 19% of which were detected by just one fuzzer.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/zhang-zenong](https://www.usenix.org/conference/usenixsecurity22/presentation/zhang-zenong)
- **PDF:** [https://www.usenix.org/system/files/sec22-zhang-zenong.pdf](https://www.usenix.org/system/files/sec22-zhang-zenong.pdf)
## Tightly Seal Your Sensitive Pointers with PACTight.
### Authors
* Mohannad Ismail, Virginia Tech
* Andrew Quach, Oregon State University
* Christopher Jelesnianski, Virginia Tech
* Yeongjin Jang, Oregon State University
* Changwoo Min, Virginia Tech
### Abstract
> ARM is becoming more popular in desktops and data centers, opening a new realm in terms of security attacks against ARM. ARM has released Pointer Authentication, a new hardware security feature that is intended to ensure pointer integrity with cryptographic primitives.In this paper, we utilize Pointer Authentication (PA) to build a novel scheme to completely prevent any misuse of security-sensitive pointers. We propose PACTIGHT to tightly seal these pointers. PACTIGHT utilizes a strong and unique modifier that addresses the current issues with the state-of-the-art PA defense mechanisms. We implement four defenses based on the PACTIGHT mechanism. Our security and performance evaluation results show that PACTIGHT defenses are more efficient and secure. Using real PA instructions, we evaluated PACTIGHT on 30 different applications, including NGINX web server, with an average performance overhead of 4.07% even when enforcing our strongest defense. PACTIGHT demonstrates its effectiveness and efficiency with real PA instructions on real hardware.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/ismail](https://www.usenix.org/conference/usenixsecurity22/presentation/ismail)
- **PDF:** [https://www.usenix.org/system/files/sec22-ismail.pdf](https://www.usenix.org/system/files/sec22-ismail.pdf)
## Total Eclipse of the Heart - Disrupting the InterPlanetary File System.
### Authors
* Bernd Prünster, Institute of Applied Information Processing and Communications (IAIK), Graz University of Technology
* Alex, A-SIT Secure Information Technology Center Austria
* er Marsalek, A-SIT Secure Information Technology Center Austria
* Thomas Zefferer, A-SIT Plus GmbH
### Abstract
> Peer-to-peer networks are an attractive alternative to classical client-server architectures in several fields of application such as voice-over-IP telephony and file sharing. Recently, a new peer-to-peer solution called the InterPlanetary File System (IPFS) has attracted attention, with its  promise of re-decentralising the Web. Being increasingly used as a stand-alone application, IPFS has also emerged as the technical backbone of various other decentralised solutions and was even used to evade censorship. Decentralised applications serving millions of users rely on IPFS as one of their crucial building blocks. This popularity also makes IPFS attractive for large-scale attacks. We have identified a conceptual issue in one of IPFS's core libraries and demonstrate its exploitation by means of a successful end-to-end attack. We evaluated this attack against the IPFS reference implementation on the public IPFS network, which is used by the average user to share and consume IPFS content. The results obtained from mounting this attack on live IPFS nodes show that  arbitrary IPFS nodes can be eclipsed, i.e. isolated from the network, with moderate effort and limited resources. Compared to similar works, we show that our attack scales well even beyond current network sizes and can disrupt the entire public IPFS network with alarmingly low effort. The vulnerability set described in this paper has been assigned CVE-2020-10937. Responsible disclosure procedures  have led to mitigations being deployed. The issues presented in this paper were publicly disclosed together with Protocol Labs, the company coordinating the IPFS development in October 2020.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/prunster](https://www.usenix.org/conference/usenixsecurity22/presentation/prunster)
- **PDF:** [https://www.usenix.org/system/files/sec22-prunster.pdf](https://www.usenix.org/system/files/sec22-prunster.pdf)
## PrivGuard: Privacy Regulation Compliance Made Easier.
### Authors
* Lun Wang, UC Berkeley
* Usmann Khan, Georgia Tech
* Joseph Near, University of Vermont
* Qi Pang, Zhejiang University
* Jithendaraa Subramanian, NIT Tiruchirappalli
* Neel Somani, UC Berkeley
* Peng Gao, Virginia Tech
* Andrew Low, UC Berkeley
* Dawn Song, UC Berkeley
### Abstract
> Continuous compliance with privacy regulations, such as GDPR and CCPA, has become a costly burden for companies from small-sized start-ups to business giants. The culprit is the heavy reliance on human auditing in today's compliance process, which is expensive, slow, and error-prone. To address the issue, we propose PrivGuard, a novel system design that reduces human participation required and improves the productivity of the compliance process. PrivGuard is mainly comprised of two components: (1) PrivAnalyzer, a static analyzer based on abstract interpretation for partly enforcing privacy regulations, and (2) a set of components providing strong security protection on the data throughout its life cycle. To validate the effectiveness of this approach, we prototype PrivGuard and integrate it into an industrial-level data governance platform. Our case studies and evaluation show that PrivGuard can correctly enforce the encoded privacy policies on real-world programs with reasonable performance overhead.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/wang-lun](https://www.usenix.org/conference/usenixsecurity22/presentation/wang-lun)
- **PDF:** [https://www.usenix.org/system/files/sec22-wang-lun.pdf](https://www.usenix.org/system/files/sec22-wang-lun.pdf)
## Stick It to The Man: Correcting for Non-Cooperative Behavior of Subjects in Experiments on Social Networks.
### Authors
* Kaleigh Clary, University of Massachusetts Amherst
* Emma Tosch, University of Vermont
* Jeremiah Onaolapo, University of Vermont
* David D. Jensen, University of Massachusetts Amherst
### Abstract
> A large body of research in network and social sciences studies the effects of interventions in network systems. Nearly all of this work assumes that network participants will respond to interventions in similar ways. However, in real-world systems, a subset of participants may respond in ways purposefully different than their true outcome. We characterize the influence of non-cooperative nodes and the bias these nodes introduce in estimates of average treatment effect (ATE). In addition to theoretical bounds, we empirically demonstrate estimation bias through experiments on synthetically generated graphs and a real-world network. We demonstrate that causal estimates in networks can be sensitive to the actions of non-cooperative members, and we identify network structures that are particularly vulnerable to non-cooperative responses.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/clary](https://www.usenix.org/conference/usenixsecurity22/presentation/clary)
- **PDF:** [https://www.usenix.org/system/files/sec22-clary.pdf](https://www.usenix.org/system/files/sec22-clary.pdf)
## OVRseen: Auditing Network Traffic and Privacy Policies in Oculus VR.
### Authors
* Rahmadi Triman, University of California, Irvine
* a, University of California, Irvine
* Hieu Le, University of California, Irvine
* Hao Cui, University of California, Irvine
* Janice Tran Ho, University of California, Irvine
* Anastasia Shuba, Independent Researcher
* Athina Markopoulou, University of California, Irvine
### Abstract
> Virtual reality (VR) is an emerging technology that enables new applications but also introduces privacy risks. In this paper, we focus on Oculus VR (OVR), the leading platform in the VR space and we provide the first comprehensive analysis of personal data exposed by OVR apps and the platform itself, from a combined networking and privacy policy perspective. We experimented with the Quest 2 headset and tested the most popular VR apps available on the official Oculus and the SideQuest app stores. We developed OVRseen, a methodology and system for collecting, analyzing, and comparing network traffic and privacy policies on OVR. On the networking side, we captured and decrypted network traffic of VR apps, which was previously not possible on OVR, and we extracted data flows, defined as〈app, data type, destination〉. Compared to the mobile and other app ecosystems, we found OVR to be more centralized and driven by tracking and analytics, rather than by third-party advertising. We show that the data types exposed by VR apps include personally identifiable information (PII), device information that can be used for fingerprinting, and VR-specific data types. By comparing the data flows found in the network traffic with statements made in the apps' privacy policies, we found that approximately 70% of OVR data flows were not properly disclosed. Furthermore, we extracted additional context from the privacy policies, and we observed that 69% of the data flows were used for purposes unrelated to the core functionality of apps.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/trimananda](https://www.usenix.org/conference/usenixsecurity22/presentation/trimananda)
- **PDF:** [https://www.usenix.org/system/files/sec22-trimananda.pdf](https://www.usenix.org/system/files/sec22-trimananda.pdf)
## Half-Double: Hammering From the Next Row Over.
### Authors
* Andreas Kogler, Graz University of Technology
* Jonas Juffinger, Graz University of Technology and Lamarr Security Research
* Salman Qazi, Google
* Yoongu Kim, Google
* Moritz Lipp, Amazon Web Services
* Nicolas Boichat, Google
* Eric Shiu, Rivos
* Mattias Nissler, Google
* Daniel Gruss, Graz University of Technology
### Abstract
> Rowhammer is a vulnerability in modern DRAM where repeated accesses to one row (the aggressor) give off electrical disturbance whose cumulative effect flips the bits in an adjacent row (the victim). Consequently, Rowhammer defenses presuppose the adjacency of aggressor-victim pairs, including those in LPDDR4 and DDR4, most notably TRR.In this paper, we present Half-Double, an escalation of Rowhammer to rows beyond immediate neighbors. Using Half-Double, we induce errors in a victim by combining many accesses to a distance-2 row with just a few to a distance-1 row. Our experiments show that the cumulative effect of these leads to a sufficient electrical disturbance in the victim row, inducing bit flips. We demonstrate the practical relevance of Half-Double in a proof-of-concept attack on a fully up-to-date system. We use side channels, a new technique called BlindHammering, a new spraying technique, and a Spectre attack in our end-to-end Half-Double Attack. On recent Chromebooks with ECC- and TRR-protected LPDDR4x memory, the attack takes less than 45 minutes on average.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/kogler-half-double](https://www.usenix.org/conference/usenixsecurity22/presentation/kogler-half-double)
- **PDF:** [https://www.usenix.org/system/files/sec22-kogler-half-double.pdf](https://www.usenix.org/system/files/sec22-kogler-half-double.pdf)
## RETBLEED: Arbitrary Speculative Code Execution with Return Instructions.
### Authors
* Johannes Wikner, ETH Zurich
* Kaveh Razavi, ETH Zurich
### Abstract
> Modern operating systems rely on software defenses against hardware attacks. These defenses are, however, as good as the assumptions they make on the underlying hardware. In this paper, we invalidate some of the key assumptions behind retpoline, a widely deployed mitigation against Spectre Branch Target Injection (BTI) that converts vulnerable indirect branches to protected returns. We present RETBLEED, a new Spectre-BTI attack that leaks arbitrary kernel memory on fully patched Intel and AMD systems. Two insights make RETBLEED possible: first, we show that return instructions behave like indirect branches under certain microarchitecture-dependent conditions, which we reverse engineer. Our dynamic analysis framework discovers many exploitable return instructions inside the Linux kernel, reachable through unprivileged system calls. Second, we show how an unprivileged attacker can arbitrarily control the predicted target of such return instructions by branching into kernel memory. RETBLEED leaks privileged memory at the rate of 219 bytes/s on Intel Coffee Lake and 3.9 kB/s on AMD Zen 2.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/wikner](https://www.usenix.org/conference/usenixsecurity22/presentation/wikner)
- **PDF:** [https://www.usenix.org/system/files/sec22-wikner.pdf](https://www.usenix.org/system/files/sec22-wikner.pdf)
## PISTIS: Trusted Computing Architecture for Low-end Embedded Systems.
### Authors
* Michele Grisafi, University of Trento
* Mahmoud Ammar, Huawei Technologies
* Marco Roveri, University of Trento
* Bruno Crispo, University of Trento
### Abstract
> Recently, several hardware-assisted security architectures have been proposed to mitigate the ever-growing cyber-attacks on Internet-connected devices. However, such proposals are not compatible with a large portion of the already deployed resource-constrained embedded devices due to hardware limitations. To fill this gap, we propose PISTIS, a pure-software trusted computing architecture for bare-metal low-end embedded devices. PISTIS enables several security services, such as memory isolation, remote attestation and secure code update, while fully supporting critical features such as Direct Memory Access (DMA) and interrupts. PISTIS targets a wide range of embedded devices including those that lack any hardware protection mechanisms, while only requiring a few kilobytes of Flash memory to store its root of trust (RoT) software. The entire architecture of PISTIS is built from the ground up by leveraging memory protection-enabling techniques such as assembly-level code verification and selective software virtualisation. Most importantly, PISTIS achieves strong security guarantees supported by a formally verified design. We implement and evaluate PISTIS on MSP430 architecture, showing a reasonable overhead in terms of runtime, memory footprint, and power consumption.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/grisafi](https://www.usenix.org/conference/usenixsecurity22/presentation/grisafi)
- **PDF:** [https://www.usenix.org/system/files/sec22-grisafi.pdf](https://www.usenix.org/system/files/sec22-grisafi.pdf)
## Rapid Prototyping for Microarchitectural Attacks.
### Authors
* Catherine Easdon, Dynatrace Research and Graz University of Technology
* Michael Schwarz, CISPA Helmholtz Center for Information Security
* Martin Schwarzl, Graz University of Technology
* Daniel Gruss, Graz University of Technology
### Abstract
> In recent years, microarchitectural attacks have been demonstrated to be a powerful attack class. However, as our empirical analysis shows, there are numerous implementation challenges that hinder discovery and subsequent mitigation of these vulnerabilities. In this paper, we examine the attack development process, the features and usability of existing tools, and the real-world challenges faced by practitioners. We propose a novel approach to microarchitectural attack development, based on rapid prototyping, and present two open-source software frameworks, libtea and SCFirefox, that improve upon state-of-the-art tooling to facilitate rapid prototyping of attacks. libtea demonstrates that native code attacks can be abstracted sufficiently to permit cross-platform implementations while retaining fine-grained control of microarchitectural behavior. We evaluate its effectiveness by developing proof-of-concept Foreshadow and LVI attacks. Our LVI prototype runs on x86-64 and ARMv8-A, and is the first public demonstration of LVI on ARM. SCFirefox is the first tool for browser-based microarchitectural attack development, providing the functionality of libtea in JavaScript. This functionality can then be used to iteratively port a prototype to unmodified browsers. We demonstrate this process by prototyping the first browser-based ZombieLoad attack and deriving a vanilla JavaScript and WebAssembly PoC running in an unmodified recent version of Firefox. We discuss how libtea and SCFirefox contribute to the security landscape by providing attack researchers and defenders with frameworks to prototype attacks and assess their feasibility.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/easdon](https://www.usenix.org/conference/usenixsecurity22/presentation/easdon)
- **PDF:** [https://www.usenix.org/system/files/sec22-easdon.pdf](https://www.usenix.org/system/files/sec22-easdon.pdf)
## ProFactory: Improving IoT Security via Formalized Protocol Customization.
### Authors
* Fei Wang, Purdue University
* Jianliang Wu, Purdue University
* Yuhong Nan, Purdue University
* Yousra Aafer, University of Waterloo
* Xiangyu Zhang, Purdue University
* Dongyan Xu, Purdue University
* Mathias Payer, EPFL
### Abstract
> As IoT applications gain widespread adoption, it becomes important to design and implement IoT protocols with security. Existing research in protocol security reveals that the majority of disclosed protocol vulnerabilities are caused by incorrectly implemented message parsing and network state machines. Instead of testing and fixing those bugs after development, which is extremely expensive, we would like to avert them upfront. For this purpose, we propose ProFactory which formally and unambiguously models a protocol, checks model correctness, and generates a secure protocol implementation. We leverage ProFactory to generate a group of IoT protocols in the Bluetooth and Zigbee families and the evaluation demonstrates that 82 known vulnerabilities are averted. ProFactory will be publicly available.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/wang-fei](https://www.usenix.org/conference/usenixsecurity22/presentation/wang-fei)
- **PDF:** [https://www.usenix.org/system/files/sec22-wang-fei.pdf](https://www.usenix.org/system/files/sec22-wang-fei.pdf)
## Using Trātṛ to tame Adversarial Synchronization.
### Authors
* Yuvraj Patel, University of Wisconsin–Madison
* Chenhao Ye, University of Wisconsin–Madison
* Akshat Sinha, University of Wisconsin–Madison
* Abigail Matthews, University of Wisconsin–Madison
* Andrea C. Arpaci-Dusseau, University of Wisconsin–Madison
* Remzi H. Arpaci-Dusseau, University of Wisconsin–Madison
* Michael M. Swift, University of Wisconsin–Madison
### Abstract
> We show that Linux containers are vulnerable to a new class of attacks – synchronization attacks – that exploit kernel synchronization to harm application performance, where an unprivileged attacker can control the duration of kernel critical sections to stall victims running in other containers on the same operating system. Furthermore, a subset of these attacks – framing attacks – persistently harm performance by expanding data structures even after the attacker quiesces. We demonstrate three such attacks on the Linux kernel involving the inode cache, the directory cache, and the futex table.We design Trātṛ, a Linux kernel extension, to detect and mitigate synchronization and framing attacks with low overhead, prevent attacks from worsening, and recover by repairing data structures to their pre-attack state. Using microbenchmarks and real-world workloads, we show that Trātṛ can detect an attack within seconds and recover instantaneously, guaranteeing similar performance to baseline. Our experiments show that Trātṛ can detect simultaneous attacks and mitigate them with minimal overhead.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/patel](https://www.usenix.org/conference/usenixsecurity22/presentation/patel)
- **PDF:** [https://www.usenix.org/system/files/sec22-patel.pdf](https://www.usenix.org/system/files/sec22-patel.pdf)
## ÆPIC Leak: Architecturally Leaking Uninitialized Data from the Microarchitecture.
### Authors
* Pietro Borrello, Sapienza University of Rome
* Andreas Kogler, Graz University of Technology
* Martin Schwarzl, Graz University of Technology
* Moritz Lipp, Amazon Web Services
* Daniel Gruss, Graz University of Technology
* Michael Schwarz, CISPA Helmholtz Center for Information Security
### Abstract
> CPU vulnerabilities undermine the security guarantees provided by software- and hardware-security improvements. While the discovery of transient-execution attacks increased the interest in CPU vulnerabilities on a microarchitectural level, architectural CPU vulnerabilities are still understudied. In this paper, we systematically analyze existing CPU vulnerabilities showing that CPUs suffer from vulnerabilities whose root causes match with those in complex software. We show that transient-execution attacks and architectural vulnerabilities often arise from the same type of bug and identify the blank spots. Investigating the blank spots, we focus on architecturally improperly initialized data locations. We discover ÆPIC Leak, the first architectural CPU bug that leaks stale data from the microarchitecture without using a side channel. ÆPIC Leak works on all recent Sunny- Cove-based Intel CPUs (i.e., Ice Lake and Alder Lake). It architecturally leaks stale data incorrectly returned by reading undefined APIC-register ranges. ÆPIC Leak samples data transferred between the L2 and last-level cache, including SGX enclave data, from the superqueue. We target data in use, e.g., register values and memory loads, as well as data at rest, e.g., SGX-enclave data pages. Our end-to-end attack extracts AES-NI, RSA, and even the Intel SGX attestation keys from enclaves within a few seconds. We discuss mitigations and conclude that the only short-term mitigations for ÆPIC Leak are to disable APIC MMIO or not rely on SGX.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/borrello](https://www.usenix.org/conference/usenixsecurity22/presentation/borrello)
- **PDF:** [https://www.usenix.org/system/files/sec22-borrello.pdf](https://www.usenix.org/system/files/sec22-borrello.pdf)
## SAPIC+: protocol verifiers of the world, unite!
### Authors
* Vincent Cheval, Inria Paris
* Charlie Jacomme, CISPA Helmholtz Center for Information Security
* Steve Kremer, Université de Lorraine LORIA & Inria Nancy
* Robert Künnemann, CISPA Helmholtz Center for Information Security
### Abstract
> Symbolic security protocol verifiers have reached a high degree of automation and maturity. Today, experts can model real-world protocols, but this often requires model-specific encodings and deep insight into the strengths and weaknesses of each of those tools. With SAPIC+, we introduce a protocol verification platform that lifts this burden and permits choosing the right tool for the job, at any development stage. We build on the existing compiler from SAPIC to TAMARIN, and extend it with automated translations from SAPIC+ to PROVERIF and DEEPSEC, as well as powerful, protocol-independent optimizations of the existing translation. We prove each part of these translations sound. A user can thus, with a single SAPIC+ file, verify reachability and equivalence properties on the specified protocol, either using PROVERIF, TAMARIN or DEEPSEC. Moreover, the soundness of the translation allows to directly assume results proven by another tool which allows to exploit the respective strengths of each tool. We demonstrate our approach by analyzing various existing models. This includes a large case study of the 5G authentication protocols, previously analyzed in TAMARIN. Encoding this model in SAPIC+ we demonstrate the effectiveness of our approach. Moreover, we study four new case studies: the LAKE-EDHOC and the Privacy-Pass protocols, both under standardization, the SSH protocol with the agent-forwarding feature, and the recent KEMTLS protocol, a post-quantum version of the main TLS key exchange.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/cheval](https://www.usenix.org/conference/usenixsecurity22/presentation/cheval)
- **PDF:** [https://www.usenix.org/system/files/sec22-cheval.pdf](https://www.usenix.org/system/files/sec22-cheval.pdf)
## On the Security Risks of AutoML.
### Authors
* Ren Pang, Pennsylvania State University
* Zhaohan Xi, Pennsylvania State University
* Shouling Ji, Zhejiang University
* Xiapu Luo, Hong Kong Polytechnic University
* Ting Wang, Pennsylvania State University
### Abstract
> Neural architecture search (NAS) represents an emerging machine learning (ML) paradigm that automatically searches for model architectures tailored to given tasks, which significantly simplifies the development of ML systems and propels the trend of ML democratization. Yet, thus far little is known about the potential security risks incurred by NAS, which is concerning given the increasing use of NAS-generated models in critical domains. This work represents a solid initial step towards bridging the gap. First, through an extensive empirical study of 10 popular NAS methods, we show that compared with their manually designed counterparts, NAS-generated models tend to suffer greater vulnerabilities to various malicious manipulations (e.g., adversarial evasion, model poisoning, functionality stealing). Further, with both empirical and analytical evidence, we provide possible explanations for such phenomena: given the prohibitive search space and training cost, most NAS methods favor models that converge fast at early training stages; this preference results in architectural properties associated with attack vulnerabilities (e.g., high loss smoothness, low gradient variance). Our findings not only reveal the relationships between model characteristics and attack vulnerabilities but also suggest the inherent connections underlying different attacks. Finally, we discuss potential remedies to mitigate such drawbacks, including increasing cell depth and suppressing skip connects, which lead to several promising research directions.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/pang-ren](https://www.usenix.org/conference/usenixsecurity22/presentation/pang-ren)
- **PDF:** [https://www.usenix.org/system/files/sec22-pang-ren.pdf](https://www.usenix.org/system/files/sec22-pang-ren.pdf)
## Dos and Don'ts of Machine Learning in Computer Security.
### Authors
* Daniel Arp, Technische Universität Berlin
* Erwin Quiring, Technische Universität Braunschweig
* Feargus Pendlebury, King's College London and Royal Holloway, University of London and The Alan Turing Institute
* Alex, Technische Universität Braunschweig
* er Warnecke, Technische Universität Braunschweig
* Fabio Pierazzi, King's College London
* Christian Wressnegger, KASTEL Security Research Labs and Karlsruhe Institute of Technology
* Lorenzo Cavallaro, University College London
* Konrad Rieck, Technische Universität Braunschweig
### Abstract
> With the growing processing power of computing systems and the increasing availability of massive datasets, machine learning algorithms have led to major breakthroughs in many different areas. This development has influenced computer security, spawning a series of work on learning-based security systems, such as for malware detection, vulnerability discovery, and binary code analysis. Despite great potential, machine learning in security is prone to subtle pitfalls that undermine its performance and render learning-based systems potentially unsuitable for security tasks and practical deployment.In this paper, we look at this problem with critical eyes. First, we identify common pitfalls in the design, implementation, and evaluation of learning-based security systems. We conduct a study of 30 papers from top-tier security conferences within the past 10 years, confirming that these pitfalls are widespread in the current security literature. In an empirical analysis, we further demonstrate how individual pitfalls can lead to unrealistic performance and interpretations, obstructing the understanding of the security problem at hand. As a remedy, we propose actionable recommendations to support researchers in avoiding or mitigating the pitfalls where possible. Furthermore, we identify open problems when applying machine learning in security and provide directions for further research.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/arp](https://www.usenix.org/conference/usenixsecurity22/presentation/arp)
- **PDF:** [https://www.usenix.org/system/files/sec22-arp.pdf](https://www.usenix.org/system/files/sec22-arp.pdf)
## Exploring the Security Boundary of Data Reconstruction via Neuron Exclusivity Analysis.
### Authors
* Xudong Pan, Fudan University
* Mi Zhang, Fudan University
* Yifan Yan, Fudan University
* Jiaming Zhu, Fudan University
* Min Yang, Fudan University
### Abstract
> Among existing privacy attacks on the gradient of neural networks, data reconstruction attack, which reverse engineers the training batch from the gradient, poses a severe threat on the private training data. Despite its empirical success on large architectures and small training batches, unstable reconstruction accuracy is also observed when a smaller architecture or a larger batch is under attack. Due to the weak interpretability of existing learning-based attacks, there is little known on why, when and how data reconstruction attack is feasible.In our work, we perform the first analytic study on the security boundary of data reconstruction from gradient via a microcosmic view on neural networks with rectified linear units (ReLUs), the most popular activation function in practice. For the first time, we characterize the insecure/secure boundary of data reconstruction attack in terms of the neuron exclusivity state of a training batch, indexed by the number of Exclusively Activated Neurons (ExANs, i.e., a ReLU activated by only one sample in a batch). Intuitively, we show a training batch with more ExANs are more vulnerable to data reconstruction attack and vice versa. On the one hand, we construct a novel deterministic attack algorithm which substantially outperforms previous attacks for reconstructing training batches lying in the insecure boundary of a neural network. Meanwhile, for training batches lying in the secure boundary, we prove the impossibility of unique reconstruction, based on which an exclusivity reduction strategy is devised to enlarge the secure boundary for mitigation purposes.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/pan-exploring](https://www.usenix.org/conference/usenixsecurity22/presentation/pan-exploring)
- **PDF:** [https://www.usenix.org/system/files/sec22-pan-exploring.pdf](https://www.usenix.org/system/files/sec22-pan-exploring.pdf)
## On the Necessity of Auditable Algorithmic Definitions for Machine Unlearning.
### Authors
* Anvith Thudi, University of Toronto and Vector Institute
* Hengrui Jia, University of Toronto and Vector Institute
* Ilia Shumailov, University of Toronto and Vector Institute
* Nicolas Papernot, University of Toronto and Vector Institute
### Abstract
> Machine unlearning, i.e. having a model forget about some of its training data, has become increasingly more important as privacy legislation promotes variants of the right-to-be-forgotten. In the context of deep learning, approaches for machine unlearning are broadly categorized into two classes: exact unlearning methods, where an entity has formally removed the data point's impact on the model by retraining the model from scratch, and approximate unlearning, where an entity approximates the model parameters one would obtain by exact unlearning to save on compute costs. In this paper, we first show that the definition that underlies approximate unlearning, which seeks to prove the approximately unlearned model is close to an exactly retrained model, is incorrect because one can obtain the same model using different datasets. Thus one could unlearn without modifying the model at all. We then turn to exact unlearning approaches and ask how to verify their claims of unlearning. Our results show that even for a given training trajectory one cannot formally prove the absence of certain data points used during training. We thus conclude that unlearning is only well-defined at the algorithmic level, where an entity's only possible auditable claim to unlearning is that they used a particular algorithm designed to allow for external scrutiny during an audit.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/thudi](https://www.usenix.org/conference/usenixsecurity22/presentation/thudi)
- **PDF:** [https://www.usenix.org/system/files/sec22fall_thudi.pdf](https://www.usenix.org/system/files/sec22fall_thudi.pdf)
## "The Same PIN, Just Longer": On the (In)Security of Upgrading PINs from 4 to 6 Digits.
### Authors
* Collins W. Munyendo, The George Washington University
* Philipp Markert, Ruhr University Bochum
* Alex, University of Chicago
* ra Nisenoff, University of Chicago
* Miles Grant, The George Washington University
* Elena Korkes, The George Washington University
* Blase Ur, University of Chicago
* Adam J. Aviv, The George Washington University
### Abstract
> With the goal of improving security, companies like Apple have moved from requiring 4-digit PINs to 6-digit PINs in contexts like smartphone unlocking. Users with a 4-digit PIN thus must "upgrade" to a 6-digit PIN for the same device or account. In an online user study (n=1010), we explore the security of such upgrades. Participants used their own smartphone to first select a 4-digit PIN. They were then directed to select a 6-digit PIN with one of five randomly assigned justifications. In an online attack that guesses a small number of common PINs (10–30), we observe that 6-digit PINs are, at best, marginally more secure than 4-digit PINs. To understand the relationship between 4- and 6-digit PINs, we then model targeted attacks for PIN upgrades. We find that attackers who know a user's previous 4-digit PIN perform significantly better than those who do not at guessing their 6-digit PIN in only a few guesses using basic heuristics (e.g., appending digits to the 4-digit PIN). Participants who selected a 6-digit PIN when given a "device upgrade" justification selected 6-digit PINs that were the easiest to guess in a targeted attack, with the attacker successfully guessing over 25% of the PINs in just 10 attempts, and more than 30% in 30 attempts. Our results indicate that forcing users to upgrade to 6-digit PINs offers limited security improvements despite adding usability burdens. System designers should thus carefully consider this tradeoff before requiring upgrades.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/munyendo](https://www.usenix.org/conference/usenixsecurity22/presentation/munyendo)
- **PDF:** [https://www.usenix.org/system/files/sec22-munyendo.pdf](https://www.usenix.org/system/files/sec22-munyendo.pdf)
## Where to Recruit for Security Development Studies: Comparing Six Software Developer Samples.
### Authors
* Harjot Kaur, Leibniz University Hannover
* Sabrina Amft, CISPA Helmholtz Center for Information Security
* Daniel Votipka, Tufts University
* Yasemin Acar, Max Planck Institute for Security and Privacy and George Washington University
* Sascha Fahl, CISPA Helmholtz Center for Information Security and Leibniz University Hannover
### Abstract
> Studying developers is an important aspect of usable security and privacy research. In particular, studying security development challenges such as the usability of security APIs, the secure use of information sources during development or the effectiveness of IDE security plugins raised interest in recent years. However, recruiting skilled participants with software development experience is particularly challenging, and it is often not clear what security researchers can expect from certain participant samples, which can make research results hard to compare and interpret. Hence, in this work, we study for the first time opportunities and challenges of different platforms to recruit participants with software development experience for security development studies. First, we identify popular recruitment platforms in 59 papers. Then, we conduct a comparative online study with 706 participants based on self-reported software development experience across six recruitment platforms. Using an online questionnaire, we investigate participants' programming and security experiences, skills and knowledge. We find that participants across all samples report rich general software development and security experience, skills, and knowledge. Based on our results, we recommend developer recruitment from Upwork for practical coding studies and Amazon MTurk along with a pre-screening survey to reduce additional noise for larger studies. Both of these, along with Freelancer, are also recommended for security studies. We conclude the paper by discussing the impact of our results on future security development studies.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/kaur](https://www.usenix.org/conference/usenixsecurity22/presentation/kaur)
- **PDF:** [https://www.usenix.org/system/files/sec22-kaur.pdf](https://www.usenix.org/system/files/sec22-kaur.pdf)
## Investigating State-of-the-Art Practices for Fostering Subjective Trust in Online Voting through Interviews.
### Authors
* Karola Marky, Leibniz University Hannover and University of Glasgow
* Paul Gerber, Technical University of Darmstadt
* Sebastian Günther, Technical University of Darmstadt
* Mohamed Khamis, University of Glasgow
* Maximilian Fries, Technical University of Darmstadt
* Max Mühlhäuser, Technical University of Darmstadt
### Abstract
> Ensuring voters' subjective trust is key to adopting any voting system. Consequently, researchers, experts, and policymakers have proposed and implemented practices to foster the trust of voters in online voting. State-of-the-art practices include security features, public information, or evaluations. However, it remains unclear how these practices affect the voters' subjective trust. Through interviews with 26 participants, this work presents the first analysis of voters' perceptions considering state-of-the-art practices that help voters determine their trust in Internet voting. Among our results, we show practices, such as expert evaluations, that we identified as mandatory. Further, we found practices, such as individual verifiability, that facilitate trust. Others, such as vote updating, have a negative impact due to unfamiliarity. We, furthermore, report misconceptions, discuss ways to address them through different information interfaces or as part of the voting software. Finally, we list recommendations for the specific realization of expedient practices to inform developers and policymakers.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/marky](https://www.usenix.org/conference/usenixsecurity22/presentation/marky)
- **PDF:** [https://www.usenix.org/system/files/sec22-marky.pdf](https://www.usenix.org/system/files/sec22-marky.pdf)
## Electronic Monitoring Smartphone Apps: An Analysis of Risks from Technical, Human-Centered, and Legal Perspectives.
### Authors
* Kentrell Owens, University of Washington
* Anita Alem, Harvard Law School
* Franziska Roesner, University of Washington
* Tadayoshi Kohno, University of Washington
### Abstract
> Electronic monitoring is the use of technology to track individuals accused or convicted of a crime (or civil violation) as an "alternative to incarceration." Traditionally, this technology has been in the form of ankle monitors, but recently federal, state, and local entities around the U.S. are shifting to using smartphone applications for electronic monitoring. These applications (apps) purport to make the monitoring simpler and more convenient for both the community supervisor and the person being monitored. However, due to the multipurpose nature of smartphones in people's lives and the amount of sensitive information (e.g., sensor data) smartphones make available, this introduces new risks to people coerced to use these apps.To understand what type of privacy-related and other risks might be introduced to people who use these applications, we conducted a privacy-oriented analysis of 16 Android apps used for electronic monitoring. We analyzed the apps first technically, with static and (limited) dynamic analysis techniques. We also analyzed user reviews in the Google Play Store to understand the experiences of the people using these apps, and also the privacy policies. We found that apps contain numerous trackers, the permissions requested by them vary widely (with the most common one being location), and the reviews indicate that people find the apps invasive and frequently dysfunctional. We end the paper by encouraging mobile app marketplaces to reconsider their role in the future of electronic monitoring apps, and computer security and privacy researchers to consider their potential role in auditing carceral technologies. We hope that this work will lead to more transparency in this obfuscated ecosystem.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/owens](https://www.usenix.org/conference/usenixsecurity22/presentation/owens)
- **PDF:** [https://www.usenix.org/system/files/sec22-owens.pdf](https://www.usenix.org/system/files/sec22-owens.pdf)
## MAGE: Mutual Attestation for a Group of Enclaves without Trusted Third Parties.
### Authors
* Guoxing Chen, Shanghai Jiao Tong University
* Yinqian Zhang, Southern University of Science and Technology
### Abstract
> Remote attestation mechanism enables an enclave to attest its identity (which is usually represented by the enclave's initial code and data) to another enclave. To verify that the attested identity is trusted, one enclave usually includes the identity of the enclave it trusts into its initial data in advance assuming no trusted third parties are available during runtime to provide this piece of information. However, when mutual trust between these two enclaves is required, it is infeasible to simultaneously include into their own initial data the other's identities respectively as any change to the initial data will change their identities, making the previously included identities invalid. In this paper, we propose MAGE, a framework enabling a group of enclaves to mutually attest each other without trusted third parties. Particularly, we introduce a technique to instrument these enclaves so that each of them could derive the others' identities using information solely from its own initial data. We also provide an open-sourced prototype implementation based on Intel SGX SDK, to facilitate enclave developers to adopt this technique.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/chen-guoxing](https://www.usenix.org/conference/usenixsecurity22/presentation/chen-guoxing)
- **PDF:** [https://www.usenix.org/system/files/sec22-chen-guoxing.pdf](https://www.usenix.org/system/files/sec22-chen-guoxing.pdf)
## Elasticlave: An Efficient Memory Model for Enclaves.
### Authors
* Jason Zhijingcheng Yu, National University of Singapore
* Shweta Shinde, ETH Zurich
* Trevor E. Carlson, National University of Singapore
* Prateek Saxena, National University of Singapore
### Abstract
> Trusted execution environments (TEEs) isolate user-space applications into secure enclaves without trusting the OS. Existing TEE memory models are rigid &mdash; they do not allow an enclave to share memory with other enclaves. This lack of essential functionality breaks compatibility with several constructs such as shared memory, pipes, and fast mutexes that are frequently required in data intensive use-cases. In this work, we present Elasticlave, a new TEE memory model which allows sharing. Elasticlave strikes a balance between security and flexibility in managing access permissions. Our implementation of Elasticlave on RISC-V achieves performance overheads of about 10% compared to native (non-TEE) execution for data sharing workloads. In contrast, a similarly secure implementation on a rigid TEE design incurs 1-2 orders of magnitude overheads for these workloads. Thus, Elasticlave enables cross-enclave data sharing with much better performance.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/yu-jason](https://www.usenix.org/conference/usenixsecurity22/presentation/yu-jason)
- **PDF:** [https://www.usenix.org/system/files/sec22-yu-jason.pdf](https://www.usenix.org/system/files/sec22-yu-jason.pdf)
## SGXLock: Towards Efficiently Establishing Mutual Distrust Between Host Application and Enclave for SGX.
### Authors
* Yuan Chen, Zhejiang University
* Jiaqi Li, Zhejiang University
* Guorui Xu, Zhejiang University
* Yajin Zhou, Zhejiang University
* Zhi Wang, Florida State University
* Cong Wang, City University of Hong Kong
* Kui Ren, Zhejiang University
### Abstract
> Since its debut, SGX has been used to secure various types of applications. However, existing systems usually assume a trusted enclave and ignore the security issues caused by an untrusted enclave. For instance, a vulnerable (or even malicious) third-party enclave can be exploited to attack the host application and the rest of the system. In this paper, we propose an efficient mechanism to confine an untrusted enclave's behaviors. In particular, the threats of an untrusted enclave come from the enclave-host asymmetries, which can be abused to access arbitrary memory regions of its host application, jump to any code location after leaving the enclave and forge the stack register to manipulate the saved context. Our solution breaks such asymmetries and establishes mutual distrust between the host application and the enclave. Specifically, it leverages Intel MPK for efficient memory isolation and the x86 single-step debugging mechanism to capture the exiting event of the enclave. Then it performs the integrity check of the jump target and the stack pointer. We have implemented a prototype system and solved two practical challenges. The evaluation with multiple micro-benchmarks and representative real-world applications demonstrated the effectiveness and the efficiency of our system, with less than 4% performance overhead.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/chen-yuan](https://www.usenix.org/conference/usenixsecurity22/presentation/chen-yuan)
- **PDF:** [https://www.usenix.org/system/files/sec22-chen-yuan.pdf](https://www.usenix.org/system/files/sec22-chen-yuan.pdf)
## Minefield: A Software-only Protection for SGX Enclaves against DVFS Attacks.
### Authors
* Andreas Kogler, Graz University of Technology
* Daniel Gruss, Graz University of Technology
* Michael Schwarz, CISPA Helmholtz Center for Information Security
### Abstract
> Modern CPUs adapt clock frequencies and voltage levels to workloads to reduce energy consumption and heat dissipation. This mechanism, dynamic voltage and frequency scaling (DVFS), is controlled from privileged software but affects all execution modes, including SGX. Prior work showed that manipulating voltage or frequency can fault instructions and thereby subvert SGX enclaves. Consequently, Intel disabled the overclocking mailbox (OCM) required for software undervolting, also preventing benign use for energy saving.In this paper, we propose Minefield, the first software-level defense against DVFS attacks. The idea of Minefield is not to prevent DVFS faults but to deflect faults to trap instructions and handle them before they lead to harmful behavior. As groundwork for Minefield, we systematically analyze DVFS attacks and observe a timing gap of at least 57.8 us between every OCM transition, leading to random faults over at least 57000 cycles. Minefield places highly fault-susceptible trap instructions in the victim code during compilation. Like redundancy countermeasures, Minefield is scalable and enables enclave developers to choose a security parameter between 0% and almost 100%, yielding a fine-grained security-performance trade-off. Our evaluation shows a density of 0.75, i.e., one trap after every 1-2 instruction, mitigates all known DVFS attacks in 99% on Intel SGX, incurring an overhead of 148.4% on protected enclaves. However, Minefield has no performance effect on the remaining system. Thus, Minefield is a better solution than hardware- or microcode-based patches disabling the OCM interface.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/kogler-minefield](https://www.usenix.org/conference/usenixsecurity22/presentation/kogler-minefield)
- **PDF:** [https://www.usenix.org/system/files/sec22-kogler-minefield.pdf](https://www.usenix.org/system/files/sec22-kogler-minefield.pdf)
## Counting in Regexes Considered Harmful: Exposing ReDoS Vulnerability of Nonbacktracking Matchers.
### Authors
* Lenka Turoňová, Faculty of Information Technology, Brno University of Technology
* Lukáš Holík, Faculty of Information Technology, Brno University of Technology
* Ivan Homoliak, Faculty of Information Technology, Brno University of Technology
* Ondřej Lengál, Faculty of Information Technology, Brno University of Technology
* Margus Veanes, Microsoft Research Redmond
* Tomáš Vojnar, Faculty of Information Technology, Brno University of Technology
### Abstract
> In this paper, we study the performance characteristics of nonbacktracking regex matchers and their vulnerability against ReDoS (regular expression denial of service) attacks. We focus on their known Achilles heel, which are extended regexes that use bounded quantifiers (e.g., '(ab){100}'). We propose a method for generating input texts that can cause ReDoS attacks on these matchers. The method exploits the bounded repetition and uses it to force expensive simulations of the deterministic automaton for the regex. We perform an extensive experimental evaluation of our and other state-of-the-art ReDoS generators on a large set of practical regexes with a comprehensive set of backtracking and nonbacktracking matchers, as well as experiments where we demonstrate ReDoS attacks on state-of-the-art real-world security applications containing SNORT with Hyperscan and the HW-accelerated regex matching engine on the NVIDIA BlueField-2 card. Our experiments show that bounded repetition is indeed a notable weakness of nonbacktracking matchers, with our generator being the only one capable of significantly increasing their running time.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/turonova](https://www.usenix.org/conference/usenixsecurity22/presentation/turonova)
- **PDF:** [https://www.usenix.org/system/files/sec22-turonova.pdf](https://www.usenix.org/system/files/sec22-turonova.pdf)
## RegexScalpel: Regular Expression Denial of Service (ReDoS) Defense by Localize-and-Fix.
### Authors
* Yeting Li, CAS-KLONAT, Institute of Information Engineering, Chinese Academy of Sciences; University of Chinese Academy of Sciences; SKLCS, Institute of Software, Chinese Academy of Sciences
* Yecheng Sun, SKLCS, Institute of Software, Chinese Academy of Sciences; University of Chinese Academy of Sciences
* Zhiwu Xu, College of Computer Science and Software Engineering, Shenzhen University
* Jialun Cao, The Hong Kong University of Science and Technology
* Yuekang Li, School of Computer Science and Engineering, Nanyang Technological University
* Rongchen Li, SKLCS, Institute of Software, Chinese Academy of Sciences; University of Chinese Academy of Sciences
* Haiming Chen, SKLCS, Institute of Software, Chinese Academy of Sciences; CAS-KLONAT, Institute of Information Engineering, Chinese Academy of Sciences
* Shing-Chi Cheung, The Hong Kong University of Science and Technology
* Yang Liu, School of Computer Science and Engineering, Nanyang Technological University
* Yang Xiao, CAS-KLONAT, Institute of Information Engineering, Chinese Academy of Sciences; University of Chinese Academy of Sciences
### Abstract
> The Regular expression Denial of Service (ReDoS) is a class of denial of service attacks that exploit vulnerable regular expressions (regexes) whose execution time can be superlinearly related to input sizes. A common approach of defending ReDoS attacks is to repair the vulnerable regexes. Techniques have been recently proposed to synthesize repaired regexes using program-by-example (PBE) techniques. However, these existing techniques may generate regexes, which are not semantically equivalent or similar to the original ones, or are still vulnerable to ReDoS attacks.To address the challenges, we propose RegexScalpel, an automatic regex repair framework that adopts a localize-andfix strategy. RegexScalpel first localizes the vulnerabilities by leveraging fine-grained vulnerability patterns proposed by us to analyze their vulnerable patterns, the source (i.e., the pathological sub-regexes), and the root causes (e.g., the overlapping sub-regexes). Then, RegexScalpel targets to fix the pathological sub-regexes according to our predefined repair patterns and the localized vulnerability information. Furthermore, our repair patterns ensure that the repair regexes are semantically either equivalent to or similar to the original ones. Our iterative repair method also keeps out vulnerabilities of the repaired regexes. With an experiment on a total number of 448 vulnerable regexes, we demonstrate that RegexScalpel can outperform all existing automatic regexes fixing techniques by fixing 348 more regexes than the best existing work. Also, we adopted RegexScalpel to detect ten popular projects including Python and NLTK, and revealed 16 vulnerable regexes.We then applied RegexScalpel to successfully repair all of them, and these repairs were merged into the later release by the maintainers, resulting in 8 confirmed CVEs.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/li-yeting](https://www.usenix.org/conference/usenixsecurity22/presentation/li-yeting)
- **PDF:** [https://www.usenix.org/system/files/sec22-li-yeting.pdf](https://www.usenix.org/system/files/sec22-li-yeting.pdf)
