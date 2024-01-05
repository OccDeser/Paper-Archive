# USENIX Security Symposium 2019
## A Study of the Feasibility of Co-located App Attacks against BLE and a Large-Scale Analysis of the Current Application-Layer Security Landscape.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#a-study-of-the-feasibility-of-co-located-app-attacks-against-ble-and-a-large-scale-analysis-of-the-current-application-layer-security-landscape)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#a-study-of-the-feasibility-of-co-located-app-attacks-against-ble-and-a-large-scale-analysis-of-the-current-application-layer-security-landscape)
### Authors
* Pallavi Sivakumaran, Royal Holloway University of London
* Jorge Blasco, Royal Holloway University of London
### Abstract
> Bluetooth Low Energy (BLE) is a fast-growing wireless technology with a large number of potential use cases, particularly in the IoT domain. Increasingly, these use cases require the storage of sensitive user data or critical device controls on the BLE device, as well as the access of this data by an augmentative mobile application. Uncontrolled access to such data could violate user privacy, cause a device to malfunction, or even endanger lives. The BLE standard provides security mechanisms such as pairing and bonding to protect sensitive data such that only authenticated devices can access it. In this paper we show how unauthorized co-located Android applications can access pairing-protected BLE data, without the user's knowledge. We discuss mitigation strategies in terms of the various stakeholders involved in this ecosystem, and argue that at present, the only possible option for securing BLE data is for BLE developers to implement remedial measures in the form of application-layer security between the BLE device and the Android application. We introduce BLECryptracer, a tool for identifying the presence of such application-layer security, and present the results of a large-scale static analysis over 18,900+ BLE-enabled Android applications. Our findings indicate that over 45% of these applications do not implement measures to protect BLE data, and that cryptography is sometimes applied incorrectly in those that do. This implies that a potentially large number of corresponding BLE peripheral devices are vulnerable to unauthorized data access.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/sivakumaran](https://www.usenix.org/conference/usenixsecurity19/presentation/sivakumaran)
- **PDF:** [https://www.usenix.org/system/files/sec19-sivakumaran_0.pdf](https://www.usenix.org/system/files/sec19-sivakumaran_0.pdf)
## The CrossPath Attack: Disrupting the SDN Control Channel via Shared Links.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#the-crosspath-attack-disrupting-the-sdn-control-channel-via-shared-links)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#the-crosspath-attack-disrupting-the-sdn-control-channel-via-shared-links)
### Authors
* Jiahao Cao, Tsinghua University
* Qi Li, Tsinghua University
* Renjie Xie, Tsinghua University
* Kun Sun, George Mason University
* Guofei Gu, Texas A&M University
* Mingwei Xu, Tsinghua University
* Yuan Yang, Tsinghua University
### Abstract
> Software-Defined Networking (SDN) enables network innovations with a centralized controller controlling the whole network through the control channel. Because the control channel delivers all network control traffic, its security and reliability are of great importance. For the first time in the literature,  we propose the CrossPath attack that disrupts the SDN control channel by exploiting the shared links in paths of control traffic and data traffic. In this attack, crafted data traffic can implicitly disrupt the forwarding of control traffic in the shared links. As the data traffic does not enter the control channel, the attack is stealthy and cannot be easily perceived by the controller. In order to identify the target paths containing the shared links to attack, we develop a novel technique called adversarial path reconnaissance. Both theoretic analysis and experimental results demonstrate its feasibility and efficiency of identifying the target paths. We systematically study the impacts of the attack on various network applications in a real SDN testbed. Experiments show the attack significantly degrades the performance of existing network applications and causes serious network anomalies, e.g., routing blackhole, flow table resetting and even network-wide DoS.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/cao](https://www.usenix.org/conference/usenixsecurity19/presentation/cao)
- **PDF:** [https://www.usenix.org/system/files/sec19fall_cao_prepub.pdf](https://www.usenix.org/system/files/sec19fall_cao_prepub.pdf)
## A Billion Open Interfaces for Eve and Mallory: MitM, DoS, and Tracking Attacks on iOS and macOS Through Apple Wireless Direct Link.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#a-billion-open-interfaces-for-eve-and-mallory-mitm-dos-and-tracking-attacks-on-ios-and-macos-through-apple-wireless-direct-link)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#a-billion-open-interfaces-for-eve-and-mallory-mitm-dos-and-tracking-attacks-on-ios-and-macos-through-apple-wireless-direct-link)
### Authors
* Milan Stute, Technische Universität Darmstadt
* Sashank Narain, Northeastern University
* Alex Mariotto, Technische Universität Darmstadt
* Alex, Technische Universität Darmstadt
* er Heinrich, Technische Universität Darmstadt
* David Kreitschmann, Technische Universität Darmstadt
* Guevara Noubir, Northeastern University
* Matthias Hollick, Technische Universität Darmstadt
### Abstract
> Apple Wireless Direct Link (AWDL) is a key protocol in Apple's ecosystem used by over one billion iOS and macOS devices for device-to-device communications. AWDL is a proprietary extension of the IEEE 802.11 (Wi-Fi) standard and integrates with Bluetooth Low Energy (BLE) for providing services such as Apple AirDrop. We conduct the first security and privacy analysis of AWDL and its integration with BLE. We uncover several security and privacy vulnerabilities ranging from design flaws to implementation bugs leading to a man-in-the-middle (MitM) attack enabling stealthy modification of files transmitted via AirDrop, denial-of-service (DoS) attacks preventing communication, privacy leaks that enable user identification and long-term tracking undermining MAC address randomization, and DoS attacks enabling targeted or simultaneous crashing of all neighboring devices. The flaws span across AirDrop's BLE discovery mechanism, AWDL synchronization, UI design, and Wi-Fi driver implementation. Our analysis is based on a combination of reverse engineering of protocols and code supported by analyzing patents. We provide proof-of-concept implementations and demonstrate that the attacks can be mounted using a low-cost ($20) micro:bit device and an off-the-shelf Wi-Fi card. We propose practical and effective countermeasures. While Apple was able to issue a fix for a DoS attack vulnerability after our responsible disclosure, the other security and privacy vulnerabilities require the redesign of some of their services.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/stute](https://www.usenix.org/conference/usenixsecurity19/presentation/stute)
- **PDF:** [https://www.usenix.org/system/files/sec19fall_stute_prepub.pdf](https://www.usenix.org/system/files/sec19fall_stute_prepub.pdf)
## Hiding in Plain Signal: Physical Signal Overshadowing Attack on LTE.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#hiding-in-plain-signal-physical-signal-overshadowing-attack-on-lte)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#hiding-in-plain-signal-physical-signal-overshadowing-attack-on-lte)
### Authors
* Hojoon Yang, KAIST
* Sangwook Bae, KAIST
* Mincheol Son, KAIST
* Hongil Kim, KAIST
* Song Min Kim, KAIST
* Yongdae Kim, KAIST
### Abstract
> Long-Term Evolution (LTE) communication is based on an open medium; thus, a legitimate signal can potentially be counterfeited by a malicious signal. Although most LTE signaling messages are protected from modification using cryptographic primitives, broadcast messages in LTE have never been integrity protected. In this paper, for the first time, we present a signal injection attack that exploits the fundamental weaknesses of broadcast messages in LTE and modifies a transmitted signal over the air. This attack, which is referred to as signal overshadowing (named SigOver) has several advantages and differences when compared with existing attacks using a fake base station. For example, with a 3 dB power difference from a legitimate signal, the SigOver demonstrated a 98% success rate when compared with the 80% success rate of attacks achieved using a fake base station, even with a 35 dB power difference. Given that the SigOver is a novel primitive attack, it yields five new attack scenarios and implications. Finally, a discussion on two potential countermeasures leaves practical and robust defense mechanism as a future work.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/yang-hojoon](https://www.usenix.org/conference/usenixsecurity19/presentation/yang-hojoon)
- **PDF:** [https://www.usenix.org/system/files/sec19-yang-hojoon.pdf](https://www.usenix.org/system/files/sec19-yang-hojoon.pdf)
## UWB-ED: Distance Enlargement Attack Detection in Ultra-Wideband.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#uwb-ed-distance-enlargement-attack-detection-in-ultra-wideband)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#uwb-ed-distance-enlargement-attack-detection-in-ultra-wideband)
### Authors
* Mridula Singh, ETH Zurich
* Patrick Leu, ETH Zurich
* AbdelRahman Abdou, ETH Zurich
* Srdjan Capkun, ETH Zurich
### Abstract
> Mobile autonomous systems, robots, and cyber-physical systems rely on accurate positioning information. To conduct distance-measurement, two devices exchange signals and, knowing these signals propagate at the speed of light, the time of arrival is used for distance estimations. Existing distance-measurement techniques are incapable of protecting against adversarial distance enlargement---a highly devastating tactic in which the adversary reissues a delayed version of the signals transmitted between devices, after distorting the authentic signal to prevent the receiver from identifying it. The adversary need not break crypto, nor compromise any upper-layer security protocols for mounting this attack. No known solution currently exists to protect against distance enlargement. We present \textit{Ultra-Wideband Enlargement Detection} (UWB-ED), a new modulation technique to detect distance enlargement attacks, and securely verify distances between two mutually trusted devices. We analyze UWB-ED under an adversary that injects signals to block/modify authentic signals. We show how UWB-ED is a good candidate for 802.15.4z Low Rate Pulse and the 5G standard.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/singh](https://www.usenix.org/conference/usenixsecurity19/presentation/singh)
- **PDF:** [https://www.usenix.org/system/files/sec19fall_singh_prepub.pdf](https://www.usenix.org/system/files/sec19fall_singh_prepub.pdf)
## Computer Security and Privacy in the Interactions Between Victim Service Providers and Human Trafficking Survivors.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#computer-security-and-privacy-in-the-interactions-between-victim-service-providers-and-human-trafficking-survivors)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#computer-security-and-privacy-in-the-interactions-between-victim-service-providers-and-human-trafficking-survivors)
### Authors
* Christine Chen, University of Washington
* Nicola Dell, Cornell Tech
* Franziska Roesner, University of Washington
### Abstract
> A victim service provider, or VSP, is a crucial partner in a human trafficking survivor’s recovery. VSPs provide or connect survivors to services such as medical care, legal services, employment opportunities, etc. In this work, we study VSP-survivor interactions from a computer security and privacy perspective. Through 17 semi-structured interviews with staff members at VSPs and survivors of trafficking, we surface the role technology plays in VSP-survivor interactions as well as related computer security and privacy concerns and mitigations. Our results highlight various tensions that VSPs must balance, including building trust with their clients (often by giving them as much autonomy as possible) while attempting to guide their use of technology to mitigate risks around revictimization. We conclude with concrete recommendations for computer security and privacy technologists who wish to partner with VSPs to support and empower trafficking survivors.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/chen](https://www.usenix.org/conference/usenixsecurity19/presentation/chen)
- **PDF:** [https://www.usenix.org/system/files/sec19fall_chen_prepub.pdf](https://www.usenix.org/system/files/sec19fall_chen_prepub.pdf)
## Clinical Computer Security for Victims of Intimate Partner Violence.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#clinical-computer-security-for-victims-of-intimate-partner-violence)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#clinical-computer-security-for-victims-of-intimate-partner-violence)
### Authors
* Sam Havron, Cornell Tech
* Diana Freed, Cornell Tech
* Rahul Chatterjee, Cornell Tech
* Damon McCoy, New York University
* Nicola Dell, Cornell Tech
* Thomas Ristenpart, Cornell Tech
### Abstract
> Digital insecurity in the face of targeted, persistent attacks increasingly leaves victims in debilitating or even life-threatening situations.  We propose an approach to helping victims, what we call clinical computer security, and explore it in the context of intimate partner violence (IPV). IPV is widespread and abusers exploit technology to track, harass, intimidate, and otherwise harm their victims. We report on the iterative design, refinement, and deployment of a consultation service that we created to help IPV victims obtain in-person security help from a trained technologist.  To do so we created and tested a range of new technical and non-technical tools that systematize the discovery and investigation of the complicated, multimodal digital attacks seen in IPV. An initial field study with 44 IPV survivors showed how our procedures and tools help victims discover account compromise, exploitable misconfigurations, and potential spyware.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/havron](https://www.usenix.org/conference/usenixsecurity19/presentation/havron)
- **PDF:** [https://www.usenix.org/system/files/sec19-havron.pdf](https://www.usenix.org/system/files/sec19-havron.pdf)
## Evaluating the Contextual Integrity of Privacy Regulation: Parents' IoT Toy Privacy Norms Versus COPPA.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#evaluating-the-contextual-integrity-of-privacy-regulation-parents-iot-toy-privacy-norms-versus-coppa)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#evaluating-the-contextual-integrity-of-privacy-regulation-parents-iot-toy-privacy-norms-versus-coppa)
### Authors
* Noah Apthorpe, Princeton University
* Sarah Varghese, Princeton University
* Nick Feamster, Princeton University
### Abstract
> Increased concern about data privacy has prompted new and updated data protection regulations worldwide. However, there has been no rigorous way to test whether the practices mandated by these regulations actually align with the privacy norms of affected populations. Here, we demonstrate that surveys based on the theory of contextual integrity provide a quantifiable and scalable method for measuring the conformity of specific regulatory provisions to privacy norms. We apply this method to the U.S. Children’s Online Privacy Protection Act (COPPA), surveying 195 parents and providing the first data that COPPA’s mandates generally align with parents’ privacy expectations for Internet-connected "smart" children’s toys. Nevertheless, variations in the acceptability of data collection across specific smart toys, information types, parent ages, and other conditions emphasize the importance of detailed contextual factors to privacy norms, which may not be adequately captured by COPPA.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/apthorpe](https://www.usenix.org/conference/usenixsecurity19/presentation/apthorpe)
- **PDF:** [https://www.usenix.org/system/files/sec19fall_apthorpe_prepub.pdf](https://www.usenix.org/system/files/sec19fall_apthorpe_prepub.pdf)
## Secure Multi-User Content Sharing for Augmented Reality Applications.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#secure-multi-user-content-sharing-for-augmented-reality-applications)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#secure-multi-user-content-sharing-for-augmented-reality-applications)
### Authors
* Kimberly Ruth, University of Washington
* Tadayoshi Kohno, University of Washington
* Franziska Roesner, University of Washington
### Abstract
> Augmented reality (AR), which overlays virtual content on top of the user's perception of the real world, has now begun to enter the consumer market. Besides smartphone platforms, early-stage head-mounted displays such as the Microsoft HoloLens are under active development. Many compelling uses of these technologies are multi-user: e.g., in-person collaborative tools, multiplayer gaming, and telepresence. While prior work on AR security and privacy has studied potential risks from AR applications, new risks will also arise among multiple human users. In this work, we explore the challenges that arise in designing secure and private content sharing for multi-user AR. We analyze representative application case studies and systematize design goals for security and functionality that a multi-user AR platform should support. We design an AR content sharing control module that achieves these goals and build a prototype implementation (ShareAR) for the HoloLens. This work builds foundations for secure and private multi-user AR interactions.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/ruth](https://www.usenix.org/conference/usenixsecurity19/presentation/ruth)
- **PDF:** [https://www.usenix.org/system/files/sec19-ruth.pdf](https://www.usenix.org/system/files/sec19-ruth.pdf)
## Understanding and Improving Security and Privacy in Multi-User Smart Homes: A Design Exploration and In-Home User Study.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#understanding-and-improving-security-and-privacy-in-multi-user-smart-homes-a-design-exploration-and-in-home-user-study)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#understanding-and-improving-security-and-privacy-in-multi-user-smart-homes-a-design-exploration-and-in-home-user-study)
### Authors
* Eric Zeng, University of Washington
* Franziska Roesner, University of Washington
### Abstract
> Smart homes face unique security, privacy, and usability challenges because they are multi-user, multi-device systems that affect the physical environment of all inhabitants of the home. Current smart home technology is often not well designed for multiple users, sometimes lacking basic access control and other affordances for making the system intelligible and accessible for all users. While prior work has shed light on the problems and needs of smart home users, it is not obvious how to design and build solutions. Such questions have certainly not been answered for challenging adversarial situations (e.g., domestic abuse), but we observe that they have not even been answered for tensions in otherwise functional, non-adversarial households. In this work, we explore user behaviors, needs, and possible solutions to multi-user security and privacy issues in generally non-adversarial smart homes. Based on design principles grounded in prior work, we built a prototype smart home app that includes concrete features such as location-based access controls, supervisory access controls, and activity notifications, and we tested our prototype though a month-long in-home user study with seven households. From the results of the user study, we re-evaluate our initial design principles, we surface user feedback on security and privacy features, and we identify challenges and recommendations for smart home designers and researchers.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/zeng](https://www.usenix.org/conference/usenixsecurity19/presentation/zeng)
- **PDF:** [https://www.usenix.org/system/files/sec19-zeng.pdf](https://www.usenix.org/system/files/sec19-zeng.pdf)
## PAC it up: Towards Pointer Integrity using ARM Pointer Authentication.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#pac-it-up-towards-pointer-integrity-using-arm-pointer-authentication)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#pac-it-up-towards-pointer-integrity-using-arm-pointer-authentication)
### Authors
* Hans Liljestr, Aalto University, Huawei Technologies Oy
* Thomas Nyman, Aalto University
* Kui Wang, Huawei Technologies Oy, Tampere University of Technology
* Carlos Chinea Perez, Huawei Technologies Oy
* Jan-Erik Ekberg, Huawei Technologies Oy, Aalto University
* N. Asokan, Aalto University
### Abstract
> Run-time attacks against programs written in memory-unsafe programming languages (e.g., C and C++) remain a prominent threat against computer systems. The prevalence of techniques like return-oriented programming (ROP) in attacking real-world systems has prompted major processor manufacturers to design hardware-based countermeasures against specific classes of run-time attacks. An example is the recently added support for pointer authentication (PA) in the ARMv8-A processor architecture, commonly used in devices like smartphones. PA is a low-cost technique to authenticate pointers so as to resist memory vulnerabilities. It has been shown to enable practical protection against memory vulnerabilities that corrupt return addresses or function pointers. However, so far, PA has received very little attention as a general purpose protection mechanism to harden software against various classes of memory attacks. In this paper, we use PA to build novel defenses against various classes of run-time attacks, including the first PA-based mechanism for data pointer integrity. We present PARTS, an instrumentation framework that integrates our PA-based defenses into the LLVM compiler and the GNU/Linux operating system and show, via systematic evaluation, that PARTS provides better protection than current solutions at a reasonable performance overhead.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/liljestrand](https://www.usenix.org/conference/usenixsecurity19/presentation/liljestrand)
- **PDF:** [https://www.usenix.org/system/files/sec19fall_liljestrand_prepub.pdf](https://www.usenix.org/system/files/sec19fall_liljestrand_prepub.pdf)
## Origin-sensitive Control Flow Integrity.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#origin-sensitive-control-flow-integrity)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#origin-sensitive-control-flow-integrity)
### Authors
* Mustakimur Rahman Kh, Florida State University
* aker, Florida State University
* Wenqing Liu, Florida State University
* Abu Naser, Florida State University
* Zhi Wang, Florida State University
* Jie Yang, Florida State University
### Abstract
> CFI is an effective, generic defense against control-flow hijacking attacks,  especially for C/C++ programs. However, most previous CFI systems have  poor security as demonstrated by their large equivalence class (EC) sizes.  An EC is a set of targets that are indistinguishable from each other in the  CFI policy; i.e., an attacker can "bend"' the control flow within an EC without  being detected. As such, the large ECs denote the weakest link in a CFI  system and should be broken down in order to improve security. An approach to improve the security of CFI is to use contextual information,  such as the last branches taken, to refine the CFI policy,  the so-called  context-sensitive CFI. However, contexts based on the recent execution  history are often inadequate in breaking down large ECs due to the limited  number of incoming execution paths to an indirect control transfer instruction (ICT).In this paper, we propose a new context for CFI, origin sensitivity, that  can effectively break down large ECs and reduce the average and largest  EC size.  Origin-sensitive CFI (OS-CFI) takes the origin of the code pointer  called by an ICT as the context and constrains the targets of the ICT with  this context. It supports both C-style indirect calls and C++ virtual calls.  Additionally, we leverage common hardware features in the commodity  Intel processors (MPX and TSX) to improve both security and performance  of OS-CFI. Our evaluation shows that OS-CFI can substantially reduce  the largest and average EC sizes (by 98% in some cases) and has strong  performance -- 7.6% overhead on average for all C/C++ benchmarks  of SPEC CPU2006 and NGINX.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/khandaker](https://www.usenix.org/conference/usenixsecurity19/presentation/khandaker)
- **PDF:** [https://www.usenix.org/system/files/sec19-khandaker.pdf](https://www.usenix.org/system/files/sec19-khandaker.pdf)
## HardFails: Insights into Software-Exploitable Hardware Bugs.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#hardfails-insights-into-software-exploitable-hardware-bugs)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#hardfails-insights-into-software-exploitable-hardware-bugs)
### Authors
* Ghada Dessouky, Technische Universität Darmstadt
* David Gens, Technische Universität Darmstadt
* Patrick Haney, Texas A&M University
* Garrett Persyn, Texas A&M University
* Arun Kanuparthi, Intel Corporation
* Hareesh Khattri, Intel Corporation
* Jason M. Fung, Intel Corporation
* Ahmad-Reza Sadeghi, Technische Universität Darmstadt
* Jeyavijayan Rajendran, Texas A&M University
### Abstract
> Modern computer systems are becoming faster, more efficient, and increasingly interconnected with each generation. Thus, these platforms grow more complex, with new features continually introducing the possibility of new bugs. Although the semiconductor industry employs a combination of different verification techniques to ensure the security of System-on-Chip (SoC) designs, a growing number of increasingly sophisticated attacks are starting to leverage cross-layer bugs. These attacks leverage subtle interactions between hardware and software, as recently demonstrated through a series of real-world exploits that affected all major hardware vendors. In this paper, we take a deep dive into microarchitectural security from a hardware designer’s perspective by reviewing state-of-the-art approaches used to detect hardware vulnerabilities at design time. We show that a protection gap currently exists, leaving chip designs vulnerable to software-based attacks that can exploit these hardware vulnerabilities. Inspired by real-world vulnerabilities and insights from our industry collaborator (a leading chip manufacturer), we construct the first representative testbed of real-world software-exploitable RTL bugs based on RISC-V SoCs. Patching these bugs may not always be possible and can potentially result in a product recall. Based on our testbed, we conduct two extensive case studies to analyze the effectiveness of state-of-the-art security verification approaches and identify specific classes of vulnerabilities, which we call HardFails, which these approaches fail to detect. Through our work, we focus the spotlight on specific limitations of these approaches to propel future research in these directions. We envision our RISC-V testbed of RTL bugs providing a rich exploratory ground for future research in hardware security verification and contributing to the open-source hardware landscape.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/dessouky](https://www.usenix.org/conference/usenixsecurity19/presentation/dessouky)
- **PDF:** [https://www.usenix.org/system/files/sec19-dessouky.pdf](https://www.usenix.org/system/files/sec19-dessouky.pdf)
## uXOM: Efficient eXecute-Only Memory on ARM Cortex-M.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#uxom-efficient-execute-only-memory-on-arm-cortex-m)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#uxom-efficient-execute-only-memory-on-arm-cortex-m)
### Authors
* Donghyun Kwon, Seoul National University
* Jangseop Shin, Seoul National University
* Giyeol Kim, Seoul National University
* Byoungyoung Lee, Seoul National University, Purdue University
* Yeongpil Cho, Soongsil University
* Yunheung Paek, Seoul National University
### Abstract
> Code disclosure attacks are one of the major threats to a computer system, considering that code often contains security sensitive information, such as intellectual properties (e.g., secret algorithm), sensitive data (e.g., cryptographic keys) and the gadgets for launching code reuse attacks. To stymie this class of attacks, security researchers have devised a strong memory protection mechanism, called eXecute-Only-Memory (XOM), that defines special memory regions where instruction execution is permitted but data reads and writes are prohibited. Reflecting the value of XOM, many recent high-end processors have added support for XOM in their hardware. Unfortunately, however, low-end embedded processors have yet to provide hardware support for XOM.  In this paper, we propose a novel technique, named uXOM, that realizes XOM in a way that is secure and highly optimized to work on Cortex-M, which is a prominent processor series used in low-end embedded devices. uXOM achieves its security and efficiency by using special architectural features in Cortex-M: unprivileged memory instructions and an MPU. We present several challenges in making XOM non-bypassable under strong attackers and introduce our code analysis and instrumentation to solve these challenges. Our evaluation reveals that uXOM successfully realizes XOM in Cortex-M processor with much better efficiency in terms of execution time, code size and energy consumption compared to a software-only XOM implementation for Cortex-M.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/kwon](https://www.usenix.org/conference/usenixsecurity19/presentation/kwon)
- **PDF:** [https://www.usenix.org/system/files/sec19-kwon_0.pdf](https://www.usenix.org/system/files/sec19-kwon_0.pdf)
## A Systematic Evaluation of Transient Execution Attacks and Defenses.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#a-systematic-evaluation-of-transient-execution-attacks-and-defenses)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#a-systematic-evaluation-of-transient-execution-attacks-and-defenses)
### Authors
* Claudio Canella, Graz University of Technology
* Jo Van Bulck, imec-DistriNet, KU Leuven
* Michael Schwarz, Graz University of Technology
* Moritz Lipp, Graz University of Technology
* Benjamin von Berg, Graz University of Technology
* Philipp Ortner, Graz University of Technology
* Frank Piessens, imec-DistriNet, KU Leuven
* Dmitry Evtyushkin, College of William and Mary
* Daniel Gruss, Graz University of Technology
### Abstract
> Research on transient execution attacks including Spectre and Meltdown showed that exception or branch misprediction events might leave secret-dependent traces in the CPU’s microarchitectural state. This observation led to a proliferation of new Spectre and Meltdown attack variants and even more ad-hoc defenses (e.g., microcode and software patches). Both the industry and academia are now focusing on finding effective defenses for known issues. However, we only have limited insight on residual attack surface and the completeness of the proposed defenses. In this paper, we present a systematization of transient execution attacks. Our systematization uncovers 6 (new) transient execution attacks that have been overlooked and not been investigated so far: 2 new exploitable Meltdown effects: Meltdown-PK (Protection Key Bypass) on Intel, and Meltdown-BND (Bounds Check Bypass) on Intel and AMD; and 4 new Spectre mistraining strategies. We evaluate the attacks in our classification tree through proof-of-concept implementations on 3 major CPU vendors (Intel, AMD, ARM). Our systematization yields a more complete picture of the attack surface and allows for a more systematic evaluation of defenses. Through this systematic evaluation, we discover that most defenses, including deployed ones, cannot fully mitigate all attack variants.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/canella](https://www.usenix.org/conference/usenixsecurity19/presentation/canella)
- **PDF:** [https://www.usenix.org/system/files/sec19-canella.pdf](https://www.usenix.org/system/files/sec19-canella.pdf)
## The Secret Sharer: Evaluating and Testing Unintended Memorization in Neural Networks.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#the-secret-sharer-evaluating-and-testing-unintended-memorization-in-neural-networks)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#the-secret-sharer-evaluating-and-testing-unintended-memorization-in-neural-networks)
### Authors
* Nicholas Carlini, Google Brain
* Chang Liu, University of California, Berkeley
* Úlfar Erlingsson, Google Brain
* Jernej Kos, National University of Singapore
* Dawn Song, University of California, Berkeley
### Abstract
> This paper describes a testing methodology for quantitatively assessing the risk that rare or unique training-data sequences are unintentionally memorized by generative sequence models—a common type of machine-learning model. Because such models are sometimes trained on sensitive data (e.g., the text of users' private messages), this methodology can benefit privacy by allowing deep-learning practitioners to select means of training that minimize such memorization. In experiments, we show that unintended memorization is a persistent, hard-to-avoid issue that can have serious consequences. Specifically, for models trained without consideration of memorization, we describe new, efficient procedures that can extract unique, secret sequences, such as credit card numbers. We show that our testing strategy is a practical and easy-to-use first line of defense, e.g., by describing its application to quantitatively limit data exposure in Google's Smart Compose, a commercial text-completion neural network trained on millions of users' email messages.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/carlini](https://www.usenix.org/conference/usenixsecurity19/presentation/carlini)
- **PDF:** [https://www.usenix.org/system/files/sec19-carlini.pdf](https://www.usenix.org/system/files/sec19-carlini.pdf)
## Improving Robustness of ML Classifiers against Realizable Evasion Attacks Using Conserved Features.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#improving-robustness-of-ml-classifiers-against-realizable-evasion-attacks-using-conserved-features)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#improving-robustness-of-ml-classifiers-against-realizable-evasion-attacks-using-conserved-features)
### Authors
* Liang Tong, Washington University in St. Louis
* Bo Li, UIUC
* Chen Hajaj, Ariel University
* Chaowei Xiao, University of Michigan
* Ning Zhang, Washington University in St. Louis
* Yevgeniy Vorobeychik, Washington University in St. Louis
### Abstract
> Machine learning (ML) techniques are increasingly common in security applications, such as malware and intrusion detection. However, ML models are often susceptible to evasion attacks, in which an adversary makes changes to the input (such as malware) in order to avoid being detected. A conventional approach to evaluate ML robustness to such attacks, as well as to design robust ML, is by considering simplified feature-space models of attacks, where the attacker changes ML features directly to effect evasion, while minimizing or constraining the magnitude of this change. We investigate the effectiveness of this approach to designing robust ML in the face of attacks that can be realized in actual malware (realizable attacks). We demonstrate that in the context of structure-based PDF malware detection, such techniques appear to have limited effectiveness, but they are effective with content-based detectors. In either case, we show that augmenting the feature space models with conserved features (those that cannot be unilaterally modified without compromising malicious functionality) significantly improves performance. Finally, we show that feature space models enable generalized robustness when faced with a variety of realizable attacks, as compared to classifiers which are tuned to be robust to a specific realizable attack.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/tong](https://www.usenix.org/conference/usenixsecurity19/presentation/tong)
- **PDF:** [https://www.usenix.org/system/files/sec19-tong.pdf](https://www.usenix.org/system/files/sec19-tong.pdf)
## ALOHA: Auxiliary Loss Optimization for Hypothesis Augmentation.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#aloha-auxiliary-loss-optimization-for-hypothesis-augmentation)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#aloha-auxiliary-loss-optimization-for-hypothesis-augmentation)
### Authors
* Ethan M. Rudd, Sophos
* Felipe N. Ducau, Sophos
* Cody Wild, Sophos
* Konstantin Berlin, Sophos
* Richard Harang, Sophos
### Abstract
> Malware detection is a popular application of Machine Learning for Information Security (ML-Sec), in which an ML classifier is trained to predict whether a given file is malware or benignware. Parameters of this classifier are typically optimized such that outputs from the model over a set of input samples most closely match the samples’ true malicious/benign (1/0) target labels. However, there are often a number of other sources of contextual metadata for each malware sample, beyond an aggregate malicious/benign label, including multiple labeling sources and malware type information (e.g. ransomware, trojan, etc.),  which we can feed to the classifier as auxiliary prediction targets. In this work, we fit deep neural networks to multiple additional targets derived from metadata in a threat intelligence feed for Portable Executable (PE) malware and benignware, including a multi-source malicious/benign loss, a count loss on multi-source detections, and a semantic malware attribute tag loss. We find that incorporating multiple auxiliary loss terms yields a marked improvement in performance on the main detection task. We also demonstrate that these gains likely stem from a more informed neural network representation and are not due to a regularization artifact of multi-target learning. Our auxiliary loss architecture yields a significant reduction in detection error rate (false negatives) of 42.6% at a false positive rate (FPR) of 10-3 when compared to a similar model with only one target, and a decrease of 53.8% at 10-5 FPR.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/rudd](https://www.usenix.org/conference/usenixsecurity19/presentation/rudd)
- **PDF:** [https://www.usenix.org/system/files/sec19-rudd.pdf](https://www.usenix.org/system/files/sec19-rudd.pdf)
## Why Do Adversarial Attacks Transfer? Explaining Transferability of Evasion and Poisoning Attacks.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#why-do-adversarial-attacks-transfer-explaining-transferability-of-evasion-and-poisoning-attacks)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#why-do-adversarial-attacks-transfer-explaining-transferability-of-evasion-and-poisoning-attacks)
### Authors
* Ambra Demontis, University of Cagliari, Italy
* Marco Melis, University of Cagliari, Italy
* Maura Pintor, University of Cagliari, Italy
* Matthew Jagielski, Northeastern University
* Battista Biggio, University of Cagliari, Italy, and Pluribus One
* Alina Oprea, Northeastern University
* Cristina Nita-Rotaru, Northeastern University
* Fabio Roli, University of Cagliari, Italy, and Pluribus One
### Abstract
> Transferability captures the ability of an attack against a machine-learning model to be effective against a different, potentially unknown, model. Empirical evidence for transferability has been shown in previous work, but the underlying reasons why an attack transfers or not are not yet well understood. In this paper, we present a comprehensive analysis aimed to investigate the transferability of both test-time evasion and training-time poisoning attacks. We provide a unifying optimization framework for evasion and poisoning attacks, and a formal definition of transferability of such attacks. We highlight two main factors contributing to attack transferability: the intrinsic adversarial vulnerability of the target model, and the complexity of the surrogate model used to optimize the attack. Based on these insights, we define three metrics that impact an attack’s transferability. Interestingly, our results derived from theoretical analysis hold for both evasion and poisoning attacks, and are confirmed experimentally using a wide range of linear and non-linear classifiers and datasets.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/demontis](https://www.usenix.org/conference/usenixsecurity19/presentation/demontis)
- **PDF:** [https://www.usenix.org/system/files/sec19-demontis.pdf](https://www.usenix.org/system/files/sec19-demontis.pdf)
## Stack Overflow Considered Helpful! Deep Learning Security Nudges Towards Stronger Cryptography.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#stack-overflow-considered-helpful-deep-learning-security-nudges-towards-stronger-cryptography)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#stack-overflow-considered-helpful-deep-learning-security-nudges-towards-stronger-cryptography)
### Authors
* Felix Fischer, Technical University of Munich
* Huang Xiao, Bosch Center for Artificial Intelligence
* Ching-Yu Kao, Fraunhofer AISEC
* Yannick Stachelscheid, Technical University of Munich
* Benjamin Johnson, Technical University of Munich
* Danial Raza, Technical University of Munich
* Paul Fawkesley, Projects by IF
* Nat Buckley, Projects by IF
* Konstantin Böttinger, Fraunhofer AISEC
* Paul Muntean, Technical University of Munich
* Jens Grossklags, Technical University of Munich
### Abstract
> Stack Overflow is the most popular discussion platform for software developers. Recent research found a large amount of insecure encryption code in production systems that has been inspired by examples  given on Stack Overflow. By copying and pasting functional code, developers introduced exploitable  software vulnerabilities into security-sensitive high-profile applications installed by millions of users every day. Proposed mitigations of this problem suffer from usability flaws and push developers to continue shopping for code examples on Stack Overflow once again. This points us to fighting the proliferation of insecure code directly at the root before it even reaches the clipboard. By viewing Stack Overflow as a market, implementation of cryptography becomes a decision-making problem: i. e. how to simplify the selection of helpful and secure examples. We focus on supporting software developers in making better decisions by applying nudges, a concept borrowed from behavioral science. This approach is motivated by one of our key findings: for 99.37% of insecure code examples on Stack Overflow, similar alternatives are available that serve the same use case and provide strong cryptography. Our system design is based on several nudges that are controlled by a deep neural network. It learns a representation for cryptographic API usage patterns and classification of their security, achieving average AUC-ROC of 0.992. With a user study we demonstrate that nudge-based security advice significantly helps tackling the most popular and error-prone cryptographic use cases in Android.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/fischer](https://www.usenix.org/conference/usenixsecurity19/presentation/fischer)
- **PDF:** [https://www.usenix.org/system/files/sec19fall_fischer_prepub.pdf](https://www.usenix.org/system/files/sec19fall_fischer_prepub.pdf)
## Wireless Attacks on Aircraft Instrument Landing Systems.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#wireless-attacks-on-aircraft-instrument-landing-systems)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#wireless-attacks-on-aircraft-instrument-landing-systems)
### Authors
* Harshad Sathaye, Northeastern University
* Domien Schepers, Northeastern University
* Aanjhan Ranganathan, Northeastern University
* Guevara Noubir, Northeastern University
### Abstract
> Modern aircraft heavily rely on several wireless technologies for communications, control, and navigation. Researchers demonstrated vulnerabilities in many aviation systems. However, the resilience of the aircraft landing systems to adversarial wireless attacks have not yet been studied in the open literature, despite their criticality and the increasing availability of low-cost software-defined radio (SDR) platforms. In this paper, we investigate the vulnerability of aircraft instrument landing systems (ILS) to wireless attacks. We show the feasibility of spoofing ILS radio signals using commercially-available SDR, causing last-minute go around decisions, and even missing the landing zone in low-visibility scenarios. We demonstrate on aviation-grade ILS receivers that it is possible to fully and in fine-grain control the course deviation indicator as displayed by the ILS receiver, in real-time. We analyze the potential of both an overshadowing attack and a lower-power single-tone attack. In order to evaluate the complete attack, we develop a tightly-controlled closed-loop ILS spoofer that adjusts the adversary's transmitted signals as a function of the aircraft GPS location, maintaining power and deviation consistent with the adversary's target position, causing an undetected off-runway landing. We systematically evaluate the performance of the attack against an FAA certified flight-simulator (X-Plane)'s AI-based autoland feature and demonstrate systematic success rate with offset touchdowns of 18 meters to over 50 meters.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/sathaye](https://www.usenix.org/conference/usenixsecurity19/presentation/sathaye)
- **PDF:** [https://www.usenix.org/system/files/sec19-sathaye.pdf](https://www.usenix.org/system/files/sec19-sathaye.pdf)
## Please Pay Inside: Evaluating Bluetooth-based Detection of Gas Pump Skimmers.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#please-pay-inside-evaluating-bluetooth-based-detection-of-gas-pump-skimmers)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#please-pay-inside-evaluating-bluetooth-based-detection-of-gas-pump-skimmers)
### Authors
* Nishant Bhaskar, University of California San Diego
* Maxwell Bl, University of California San Diego
* Kirill Levchenko, University of Illinois at Urbana-Champaign
* Aaron Schulman, University of California San Diego
### Abstract
> Gas pump skimming is one of the most pervasive forms of payment card attacks in the U.S. today. Gas pump skimmers are easy to install and difficult to detect: criminals can open gas pump enclosures and hide a skimmer in internal payment wiring. As a result, officials have resorted to detecting skimmers by performing laborious manual inspections of the wiring inside gas pumps. In addition, criminals can also avoid being caught using skimmers: many gas pump skimmers have Bluetooth connectivity, allowing criminals to collect payment data safely from inside their car. In this work, we evaluate if the use of Bluetooth in skimmers also creates an opportunity for officials to detect them without opening gas pumps. We performed a large-scale study where we collected Bluetooth scans at 1,185 gas stations in six states. We detected a total of 64 Bluetooth-based skimmers across four U.S. states—all of which were recovered by law enforcement. We discovered that these skimmers were clearly distinguishable from legitimate devices in Bluetooth scans at gas stations. We also observed the nature of gas station skimming: skimmers can be installed for months without detection, and MAC addresses of skimmers may reveal the criminal entity installing or manufacturing them.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/bhaskar](https://www.usenix.org/conference/usenixsecurity19/presentation/bhaskar)
- **PDF:** [https://www.usenix.org/system/files/sec19-bhaskar.pdf](https://www.usenix.org/system/files/sec19-bhaskar.pdf)
## CANvas: Fast and Inexpensive Automotive Network Mapping.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#canvas-fast-and-inexpensive-automotive-network-mapping)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#canvas-fast-and-inexpensive-automotive-network-mapping)
### Authors
* Sekar Kul, Carnegie Mellon University
* aivel, Carnegie Mellon University
* Tushar Goyal, Carnegie Mellon University
* Arnav Kumar Agrawal, Carnegie Mellon University
* Vyas Sekar, Carnegie Mellon University
### Abstract
> Modern vehicles contain tens of Electronic Control Units (ECUs), several of which communicate over the Controller Area Network (CAN) protocol. As such, in-vehicle networks have become a prime target for automotive network attacks. To understand the security of these networks, we argue that we need tools analogous to network mappers for traditional networks that provide an in-depth understanding of a network's structure. To this end, our goal is to develop an automotive network mapping tool that assists in identifying a vehicle's ECUs and their communication with each other. A significant challenge in designing this tool is the broadcast nature of the CAN protocol, as network messages contain no information about their sender or recipients. To address this challenge, we design and implement CANvas, an automotive network mapper that identifies transmitting ECUs with a pairwise clock offset tracking algorithm and identifies receiving ECUs with a forced ECU isolation technique. CANvas generates network maps in under an hour that identify a previously unknown ECU in a 2009 Toyota Prius and identify lenient message filters in a 2017 Ford Focus.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/kulandaivel](https://www.usenix.org/conference/usenixsecurity19/presentation/kulandaivel)
- **PDF:** [https://www.usenix.org/system/files/sec19-kulandaivel.pdf](https://www.usenix.org/system/files/sec19-kulandaivel.pdf)
## Losing the Car Keys: Wireless PHY-Layer Insecurity in EV Charging.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#losing-the-car-keys-wireless-phy-layer-insecurity-in-ev-charging)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#losing-the-car-keys-wireless-phy-layer-insecurity-in-ev-charging)
### Authors
* Richard Baker, University of Oxford
* Ivan Martinovic, University of Oxford
### Abstract
> Electric vehicles (EVs) are proliferating quickly, along with the charging infrastructure for them. A new generation of charger technologies is emerging, handling more sensitive data and undertaking more complex interactions, while using the charging cable as the communication channel. This channel is used not only for charging control, but will soon handle billing, vehicle-to-grid operation, internet access and provide a platform for third-party apps --- all with a public interface to the world.  We highlight the threat posed by wireless attacks on the physical-layer of the Combined Charging System (CCS), a major standard for EV charging that is deployed in many thousands of locations worldwide and used by seven of the ten largest auto manufacturers globally. We show that design choices in the use of power-line communication (PLC) make the system particularly prone to popular electromagnetic side-channel attacks. We implement the first wireless eavesdropping tool for PLC networks and use it to observe the ISO 15118 network implementation underlying CCS, in a measurement campaign of 54 real charging sessions, using modern electric vehicles and state-of-the-art CCS chargers. We find that the unintentional wireless channel is sufficient to recover messages in the vast majority of cases, with traffic intercepted from an adjacent parking bay showing 91.8% of messages validating their CRC32 checksum.  By examining the recovered traffic, we further find a host of privacy and security issues in existing charging infrastructure including plaintext MAC-layer traffic recovery, widespread absence of TLS in public locations and leakage of private information, including long-term unique identifiers. Of particular concern, elements of the recovered data are being used to authorise billing in existing charging implementations. We discuss the implications of pervasive susceptibility to known electromagnetic eavesdropping techniques, extract lessons learnt for future development and propose specific improvements to mitigate the problems in existing chargers.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/baker](https://www.usenix.org/conference/usenixsecurity19/presentation/baker)
- **PDF:** [https://www.usenix.org/system/files/sec19-baker.pdf](https://www.usenix.org/system/files/sec19-baker.pdf)
## RVFuzzer: Finding Input Validation Bugs in Robotic Vehicles through Control-Guided Testing.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#rvfuzzer-finding-input-validation-bugs-in-robotic-vehicles-through-control-guided-testing)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#rvfuzzer-finding-input-validation-bugs-in-robotic-vehicles-through-control-guided-testing)
### Authors
* Taegyu Kim, Purdue University
* Chung Hwan Kim, NEC Laboratories America
* Junghwan Rhee, NEC Laboratories America
* Fan Fei, Purdue University
* Zhan Tu, Purdue University
* Gregory Walkup, Purdue University
* Xiangyu Zhang, Purdue University
* Xinyan Deng, Purdue University
* Dongyan Xu, Purdue University
### Abstract
> Robotic vehicles (RVs) are being adopted in a variety of application domains. Despite their increasing deployment, many security issues with RVs have emerged, limiting their wider deployment. In this paper, we address a new type of vulnerability in RV control programs, called input validation bugs, which involve missing or incorrect validation checks on control parameter inputs. Such bugs can be exploited to cause physical disruptions to RVs which may result in mission failures and vehicle damages or crashes. Furthermore, attacks exploiting such bugs have a very small footprint: just one innocent-looking ground control command, requiring no code injection, control flow hijacking or sensor spoofing. To prevent such attacks, we propose RVFuzzer, a vetting system for finding input validation bugs in RV control programs through control-guided input mutation. The key insight behind RVFuzzer is that the RV control model, which is the generic theoretical model for a broad range of RVs, provides helpful semantic guidance to improve bug-discovery accuracy and efficiency. Specifically, RVFuzzer involves a control instability detector that detects control program misbehavior, by observing (simulated) physical operations of the RV based on the control model. In addition, RVFuzzer steers the input generation for finding input validation bugs more efficiently, by leveraging results from the control instability detector as feedback. In our evaluation of RVFuzzer on two popular RV control programs, a total of 89 input validation bugs are found, with 87 of them being zero-day bugs.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/kim](https://www.usenix.org/conference/usenixsecurity19/presentation/kim)
- **PDF:** [https://www.usenix.org/system/files/sec19-kim.pdf](https://www.usenix.org/system/files/sec19-kim.pdf)
## Seeing is Not Believing: Camouflage Attacks on Image Scaling Algorithms.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#seeing-is-not-believing-camouflage-attacks-on-image-scaling-algorithms)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#seeing-is-not-believing-camouflage-attacks-on-image-scaling-algorithms)
### Authors
* Qixue Xiao, Department of Computer Science and Technology, Tsinghua University and 360 Security Research Labs
* Yufei Chen, School of Electronic and Information Engineering, Xi’an Jiaotong University and 360 Security Research Labs
* Chao Shen, School of Electronic and Information Engineering, Xi’an Jiaotong University
* Yu Chen, Department of Computer Science and Technology, Tsinghua University and Peng Cheng Laboratory
* Kang Li, Department of Computer Science, University of Georgia
### Abstract
> Image scaling algorithms are intended to preserve the visual features before and after scaling, which is commonly used in numerous visual and image processing applications. In this paper, we demonstrate an automated attack against common scaling algorithms, i.e. to automatically generate camouflage images whose visual semantics change dramatically after scaling. To illustrate the threats from such camouflage attacks, we choose several computer vision applications as targeted victims, including multiple image classification applications based on popular deep learning frameworks, as well as main-stream web browsers. Our experimental results show that such attacks can cause different visual results after scaling and thus create evasion or data poisoning effect to these victim applications. We also present an algorithm that can successfully enable attacks against famous cloud-based image services (such as those from Microsoft Azure, Aliyun, Baidu, and Tencent) and cause obvious misclassification effects, even when the details of image processing (such as the exact scaling algorithm and scale dimension parameters) are hidden in the cloud. To defend against such attacks, this paper suggests a few potential countermeasures from attack prevention to detection.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/xiao](https://www.usenix.org/conference/usenixsecurity19/presentation/xiao)
- **PDF:** [https://www.usenix.org/system/files/sec19-xiao.pdf](https://www.usenix.org/system/files/sec19-xiao.pdf)
## CT-GAN: Malicious Tampering of 3D Medical Imagery using Deep Learning.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#ct-gan-malicious-tampering-of-3d-medical-imagery-using-deep-learning)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#ct-gan-malicious-tampering-of-3d-medical-imagery-using-deep-learning)
### Authors
* Yisroel Mirsky, Ben-Gurion University
* Tom Mahler, Ben-Gurion University
* Ilan Shelef, Soroka University Medical Center
* Yuval Elovici, Ben-Gurion University
### Abstract
> In 2018, clinics and hospitals were hit with numerous attacks leading to significant data breaches and interruptions in medical services. An attacker with access to medical records can do much more than hold the data for ransom or sell it on the black market.  		 In this paper, we show how an attacker can use deep-learning to add or remove evidence of medical conditions from volumetric (3D) medical scans. An attacker may perform this act in order to stop a political candidate, sabotage research, commit insurance fraud, perform an act of terrorism, or even commit murder. We implement the attack using a 3D conditional GAN and show how the framework (CT-GAN) can be automated. Although the body is complex and 3D medical scans are very large, CT-GAN achieves realistic results which can be executed in milliseconds. 		 To evaluate the attack, we focused on injecting and removing lung cancer from CT scans. We show how three expert radiologists and a state-of-the-art deep learning AI are highly susceptible to the attack. We also explore the attack surface of a modern radiology network and demonstrate one attack vector: we intercepted and manipulated CT scans in an active hospital network with a covert penetration test.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/mirsky](https://www.usenix.org/conference/usenixsecurity19/presentation/mirsky)
- **PDF:** [https://www.usenix.org/system/files/sec19-mirsky_0.pdf](https://www.usenix.org/system/files/sec19-mirsky_0.pdf)
## Misleading Authorship Attribution of Source Code using Adversarial Learning.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#misleading-authorship-attribution-of-source-code-using-adversarial-learning)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#misleading-authorship-attribution-of-source-code-using-adversarial-learning)
### Authors
* Erwin Quiring, TU Braunschweig
* Alwin Maier, TU Braunschweig
* Konrad Rieck, TU Braunschweig
### Abstract
> In this paper, we present a novel attack against authorship attribution of source code.  We exploit that recent attribution methods rest on machine learning and thus can be deceived by adversarial examples of source code. Our attack performs a series of semantics-preserving  code transformations that mislead learning-based attribution but appear  plausible to a developer. The attack is guided by Monte-Carlo tree search that enables us to  operate in the discrete domain of source code. In an empirical evaluation with source code from 204 programmers, we demonstrate that our attack has a substantial effect on two recent attribution methods, whose accuracy drops from over 88% to 1% under attack. Furthermore, we show that our attack can imitate the coding style of developers with high accuracy and thereby induce false attributions. We conclude that current approaches for authorship attribution are inappropriate for practical application and there is a need for resilient analysis techniques.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/quiring](https://www.usenix.org/conference/usenixsecurity19/presentation/quiring)
- **PDF:** [https://www.usenix.org/system/files/sec19-quiring.pdf](https://www.usenix.org/system/files/sec19-quiring.pdf)
## Terminal Brain Damage: Exposing the Graceless Degradation in Deep Neural Networks Under Hardware Fault Attacks.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#terminal-brain-damage-exposing-the-graceless-degradation-in-deep-neural-networks-under-hardware-fault-attacks)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#terminal-brain-damage-exposing-the-graceless-degradation-in-deep-neural-networks-under-hardware-fault-attacks)
### Authors
* Sanghyun Hong, University of Maryland College Park
* Pietro Frigo, Vrije Universiteit Amsterdam
* Yiğitcan Kaya, University of Maryland College Park
* Cristiano Giuffrida, Vrije Universiteit Amsterdam
* Tudor Dumitraș, University of Maryland College Park
### Abstract
> Deep neural networks (DNNs) have been shown to tolerate "brain damage": cumulative changes to the network's parameters (e.g., pruning, numerical perturbations) typically result in a graceful degradation of classification accuracy. However, the limits of this natural resilience are not well understood in the presence of small adversarial changes to the DNN parameters' underlying memory representation, such as bit-flips that may be induced by hardware fault attacks. We study the effects of bitwise corruptions on 19 DNN models—six architectures on three image classification tasks—and we show that most models have at least one parameter that, after a specific bit-flip in their bitwise representation, causes an accuracy loss of over 90%. For large models, we employ simple heuristics to identify the parameters likely to be vulnerable and estimate that 40–50% of the parameters in a model might lead to an accuracy drop greater than 10% when individually subjected to such single-bit perturbations. To demonstrate how an adversary could take advantage of this vulnerability, we study the impact of an exemplary hardware fault attack, Rowhammer, on DNNs. Specifically, we show that a Rowhammer-enabled attacker co-located in the same physical machine can inflict significant accuracy drops (up to 99%) even with single bit corruptions and no knowledge of the model. Our results expose the limits of DNNs' resilience against parameter perturbations induced by real-world fault attacks. We conclude by discussing possible mitigations and future research directions towards fault attack-resilient DNNs.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/hong](https://www.usenix.org/conference/usenixsecurity19/presentation/hong)
- **PDF:** [https://www.usenix.org/system/files/sec19-hong.pdf](https://www.usenix.org/system/files/sec19-hong.pdf)
## CSI NN: Reverse Engineering of Neural Network Architectures Through Electromagnetic Side Channel.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#csi-nn-reverse-engineering-of-neural-network-architectures-through-electromagnetic-side-channel)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#csi-nn-reverse-engineering-of-neural-network-architectures-through-electromagnetic-side-channel)
### Authors
* Lejla Batina, Radboud University, The Netherlands
* Shivam Bhasin, Nanyang Technological University, Singapore
* Dirmanto Jap, Nanyang Technological University, Singapore
* Stjepan Picek, Delft University of Technology, The Netherlands
### Abstract
> Machine learning has become mainstream across industries. Numerous examples prove the validity of it for security applications. In this work, we investigate how to reverse engineer a neural network by using side-channel information such as timing and electromagnetic (EM) emanations. To this end, we consider multilayer perceptron and convolutional neural networks as the machine learning architectures of choice and assume a non-invasive and passive attacker capable of measuring those kinds of leakages.We conduct all experiments on real data and commonly used neural network architectures in order to properly assess the applicability and extendability of those attacks. Practical results are shown on an ARM Cortex-M3 microcontroller, which is a platform often used in pervasive applications using neural networks such as wearables, surveillance cameras, etc. Our experiments show that a side-channel attacker is capable of obtaining the following information: the activation functions used in the architecture, the number of layers and neurons in the layers, the number of output classes, and weights in the neural network. Thus, the attacker can effectively reverse engineer the network using merely side-channel information such as timing or EM.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/batina](https://www.usenix.org/conference/usenixsecurity19/presentation/batina)
- **PDF:** [https://www.usenix.org/system/files/sec19-batina.pdf](https://www.usenix.org/system/files/sec19-batina.pdf)
## simTPM: User-centric TPM for Mobile Devices.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#simtpm-user-centric-tpm-for-mobile-devices)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#simtpm-user-centric-tpm-for-mobile-devices)
### Authors
* Dhiman Chakraborty, CISPA Helmholtz Center for Information Security, Saarland University
* Lucjan Hanzlik, CISPA Helmholtz Center for Information Security, Stanford University
* Sven Bugiel, CISPA Helmholtz Center for Information Security
### Abstract
> Trusted Platform Modules are valuable building blocks for security solutions and have also been recognized as beneficial for security on mobile platforms, like smartphones and tablets. However, strict space, cost, and power constraints of mobile devices prohibit an implementation as dedicated on-board chip and the incumbent implementations are software TPMs protected by Trusted Execution Environments.  In this paper, we present simTPM, an alternative implementation of a mobile TPM based on the SIM card available in mobile platforms. We solve the technical challenge of implementing a TPM2.0 in the resource-constrained SIM card environment and integrate our simTPM into the secure boot chain of the ARM Trusted Firmware on a HiKey960 reference board. Most notably, we address the challenge of how a removable TPM can be bound to the host device’s root of trust for measurement. As such, our solution not only provides a mobile TPM that avoids additional hardware while using a dedicated, strongly protected environment, but also offers promising synergies with co-existing TEE-based TPMs. In particular, simTPM offers a user-centric trusted module. Using performance benchmarks, we show that our simTPM has competitive speed with a reported TEE-based TPM and a hardware-based TPM.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/chakraborty](https://www.usenix.org/conference/usenixsecurity19/presentation/chakraborty)
- **PDF:** [https://www.usenix.org/system/files/sec19-chakraborty.pdf](https://www.usenix.org/system/files/sec19-chakraborty.pdf)
## The Betrayal At Cloud City: An Empirical Analysis Of Cloud-Based Mobile Backends.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#the-betrayal-at-cloud-city-an-empirical-analysis-of-cloud-based-mobile-backends)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#the-betrayal-at-cloud-city-an-empirical-analysis-of-cloud-based-mobile-backends)
### Authors
* Omar Alrawi, Georgia Institute of Technology
* Chaoshun Zuo, Ohio State University
* Ruian Duan, Georgia Institute of Technology
* Ranjita Pai Kasturi, Georgia Institute of Technology
* Zhiqiang Lin, Ohio State University
* Brendan Saltaformaggio, Georgia Institute of Technology
### Abstract
> Cloud backends provide essential features to the mobile app ecosystem, such as content delivery, ad networks, analytics, and more. Unfortunately, app developers often disregard or have no control over prudent security practices when choosing or managing these services. Our preliminary study of the top 5,000 Google Play Store free apps identified 983 instances of N-day and 655 instances of 0-day vulnerabilities spanning across the software layers (OS, software services, communication, and web apps) of cloud backends. The mobile apps using these cloud backends represent between 1M and 500M installs each and can potentially affect hundreds of thousands of users. Further, due to the widespread use of third-party SDKs, app developers are often unaware of the backends affecting their apps and where to report vulnerabilities. This paper presents SkyWalker, a pipeline to automatically vet the backends that mobile apps contact and provide actionable remediation. For an input APK, SkyWalker extracts an enumeration of backend URLs, uses remote vetting techniques to identify software vulnerabilities and responsible parties, and reports mitigation strategies to the app developer. Our findings suggest that developers and cloud providers do not have a clear understanding of responsibilities and liabilities in regards to mobile app backends that leave many vulnerabilities exposed.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/alrawi](https://www.usenix.org/conference/usenixsecurity19/presentation/alrawi)
- **PDF:** [https://www.usenix.org/system/files/sec19-alrawi_0.pdf](https://www.usenix.org/system/files/sec19-alrawi_0.pdf)
## EnTrust: Regulating Sensor Access by Cooperating Programs via Delegation Graphs.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#entrust-regulating-sensor-access-by-cooperating-programs-via-delegation-graphs)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#entrust-regulating-sensor-access-by-cooperating-programs-via-delegation-graphs)
### Authors
* Giuseppe Petracca, Pennsylvania State University, US
* Yuqiong Sun, Symantec Research Labs, US
* Ahmad-Atamli Reineh, Alan Turing Institute, UK
* Patrick McDaniel, Pennsylvania State University, US
* Jens Grossklags, Technical University of Munich, DE
* Trent Jaeger, Pennsylvania State University, US
### Abstract
> Modern operating systems support a cooperating program abstraction that, instead of placing all functionality into a single program, allows diverse programs to cooperate to complete tasks requested by users. However, untrusted programs may exploit such interactions to spy on users through device sensors by causing privileged system services to misuse their permissions, or to forward user requests to malicious programs inadvertently. Researchers have previously explored methods to restrict access to device sensors based on the state of the user interface that elicited the user input or based on the set of cooperating programs, but the former approach does not consider cooperating programs and the latter approach has been found to be too restrictive for many cases. In this paper, we propose EnTrust, an authorization system that tracks the processing of input events across programs for eliciting approvals from users for sensor operations. EnTrust constructs delegation graphs by linking input events to cooperation events among programs that lead to sensor operation requests, then uses such delegation graphs for eliciting authorization decisions from users. To demonstrate this approach, we implement the EnTrust authorization system for Android OS. In a laboratory study, we show that attacks can be prevented at a much higher rate (47-67% improvement) compared to the first-use approach. Our field study reveals that EnTrust only requires a user e ort comparable to the first-use approach while incurring negligible performance (<1% slowdown) and memory overheads (5.5 KB per program).

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/petracca](https://www.usenix.org/conference/usenixsecurity19/presentation/petracca)
- **PDF:** [https://www.usenix.org/system/files/sec19-petracca.pdf](https://www.usenix.org/system/files/sec19-petracca.pdf)
## PolicyLint: Investigating Internal Privacy Policy Contradictions on Google Play.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#policylint-investigating-internal-privacy-policy-contradictions-on-google-play)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#policylint-investigating-internal-privacy-policy-contradictions-on-google-play)
### Authors
* Benjamin Andow, North Carolina State University
* Samin Yaseer Mahmud, North Carolina State University
* Wenyu Wang, University of Illinois at Urbana-Champaign
* Justin Whitaker, North Carolina State University
* William Enck, North Carolina State University
* Bradley Reaves, North Carolina State University
* Kapil Singh, IBM T.J. Watson Research Center
* Tao Xie, University of Illinois at Urbana-Champaign
### Abstract
> Privacy policies are the primary mechanism by which companies inform users about data collection and sharing practices. To help users better understand these long and complex legal documents, recent research has proposed tools that summarize collection and sharing. However, these tools have a significant oversight: they do not account for contradictions that may occur within an individual policy. In this paper, we present PolicyLint, a privacy policy analysis tool that identifies such contradictions by simultaneously considering negation and varying semantic levels of data objects and entities. To do so, PolicyLint automatically generates ontologies from a large corpus of privacy policies and uses sentence-level natural language processing to capture both positive and negative statements of data collection and sharing. We use PolicyLint to analyze the policies of 11,430 apps and find that 14.2% of these policies contain contradictions that may be indicative of misleading statements. We manually verify 510 contradictions, identifying concerning trends that include the use of misleading presentation, attempted redefinition of common understandings of terms, conflicts in regulatory definitions (e.g., US and EU), and "laundering" of tracking information facilitated by sharing or collecting data that can be used to derive sensitive information. In doing so, PolicyLint significantly advances automated analysis of privacy policies.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/andow](https://www.usenix.org/conference/usenixsecurity19/presentation/andow)
- **PDF:** [https://www.usenix.org/system/files/sec19-andow.pdf](https://www.usenix.org/system/files/sec19-andow.pdf)
## 50 Ways to Leak Your Data: An Exploration of Apps' Circumvention of the Android Permissions System.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#50-ways-to-leak-your-data-an-exploration-of-apps-circumvention-of-the-android-permissions-system)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#50-ways-to-leak-your-data-an-exploration-of-apps-circumvention-of-the-android-permissions-system)
### Authors
* Joel Reardon, University of Calgary / AppCensus Inc.
* Álvaro Feal, IMDEA Networks Institute / Universidad Carlos III Madrid
* Primal Wijesekera, U.C. Berkeley / ICSI
* Amit Elazari Bar On, U.C. Berkeley
* Narseo Vallina-Rodriguez, IMDEA Networks Institute / ICSI / AppCensus Inc.
* Serge Egelman, U.C. Berkeley / ICSI / AppCensus Inc.
### Abstract
> Modern smartphone platforms implement permission-based models to protect access to sensitive data and system resources. However,  apps can circumvent the permission model and gain access to protected data  without user consent by using both covert and side  channels. Side channels present in the implementation of the permission system allow apps to access protected data and system resources  without permission; whereas covert channels enable communication  between two colluding apps so that one app can share its permission-protected data with another app lacking those permissions. Both pose threats to user privacy.In this work, we make use of our infrastructure that runs hundreds of  thousands of apps in an instrumented environment. This testing environment includes mechanisms to monitor apps' runtime behaviour and network traffic. We look for evidence of side and covert channels being used in practice by searching  for sensitive data being sent over the network for which the sending app did not have permissions to access it. We then reverse engineer the apps and third-party libraries responsible for this behaviour to determine how the unauthorized access occurred. We also use software fingerprinting methods to measure the static prevalence of the technique that we discover among other apps in our corpus.Using this testing environment and method, we uncovered a number of side and covert channels in active use by hundreds of popular apps and third-party SDKs   to obtain unauthorized access to both unique identifiers as well as geolocation data. We have responsibly disclosed our findings to Google and have received a bug bounty for our work.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/reardon](https://www.usenix.org/conference/usenixsecurity19/presentation/reardon)
- **PDF:** [https://www.usenix.org/system/files/sec19-reardon.pdf](https://www.usenix.org/system/files/sec19-reardon.pdf)
## SPOILER: Speculative Load Hazards Boost Rowhammer and Cache Attacks.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#spoiler-speculative-load-hazards-boost-rowhammer-and-cache-attacks)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#spoiler-speculative-load-hazards-boost-rowhammer-and-cache-attacks)
### Authors
* Saad Islam, Worcester Polytechnic Institute
* Ahmad Moghimi, Worcester Polytechnic Institute
* Ida Bruhns, University of Luebeck
* Moritz Krebbel, University of Luebeck
* Berk Gulmezoglu, Worcester Polytechnic Institute
* Thomas Eisenbarth, Worcester Polytechnic Institute and University of Luebeck
* Berk Sunar, Worcester Polytechnic Institute
### Abstract
> Modern microarchitectures incorporate optimization techniques such as speculative loads and store forwarding to improve the memory bottleneck. The processor executes the load speculatively before the stores, and forwards the data of a preceding store to the load if there is a potential dependency. This enhances performance since the load does not have to wait for preceding stores to complete. However, the dependency prediction relies on partial address information, which may lead to false dependencies and stall hazards.In this work, we are the first to show that the dependency resolution logic that serves the speculative load can be exploited to gain information about the physical page mappings. Microarchitectural side-channel attacks such as Rowhammer and cache attacks like Prime+Probe rely on the reverse engineering of the virtual-to-physical address mapping. We propose the SPOILER attack which exploits this leakage to speed up this reverse engineering by a factor of 256. Then, we show how this can improve the Prime+Probe attack by a 4096 factor speed up of the eviction set search, even from sandboxed environments like JavaScript. Finally, we improve the Rowhammer attack by showing how SPOILER helps to conduct DRAM row conflicts deterministically with up to 100% chance, and by demonstrating a double-sided Rowhammer attack with normal user’s privilege. The later is due to the possibility of detecting contiguous memory pages using the SPOILER leakage.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/islam](https://www.usenix.org/conference/usenixsecurity19/presentation/islam)
- **PDF:** [https://www.usenix.org/system/files/sec19-islam.pdf](https://www.usenix.org/system/files/sec19-islam.pdf)
## Robust Website Fingerprinting Through the Cache Occupancy Channel.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#robust-website-fingerprinting-through-the-cache-occupancy-channel)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#robust-website-fingerprinting-through-the-cache-occupancy-channel)
### Authors
* Anatoly Shusterman, Ben-Gurion University of the Negev
* Lachlan Kang, University of Adelaide
* Yarden Haskal, Ben-Gurion University of the Negev
* Yosef Meltser, Ben-Gurion University of the Negev
* Prateek Mittal, Princeton University
* Yossi Oren, Ben-Gurion University of the Negev
* Yuval Yarom, University of Adelaide and Data61
### Abstract
> Website fingerprinting attacks, which use statistical analysis on network traffic to compromise user privacy, have been shown to be effective even if the traffic is sent over anonymity-preserving networks such as Tor.  The classical attack model used to evaluate website fingerprinting attacks assumes an on-path adversary, who can observe all traffic traveling between the user's computer and the secure network. In this work we investigate these attacks under a different attack model, in which the adversary is capable of sending a small amount of malicious JavaScript code to the target user's computer. The malicious code mounts a cache side-channel attack, which exploits the effects of contention on the CPU's cache, to identify other websites being browsed. The effectiveness of this attack scenario has never been systematically analyzed, especially in the open-world model which assumes that the user is visiting a mix of both sensitive and non-sensitive sites. We show that cache website fingerprinting attacks in JavaScript are highly feasible. Specifically, we use machine learning techniques to classify traces of cache activity.  Unlike prior works, which try to identify cache conflicts, our work measures the overall occupancy of the last-level cache.  We show that our approach achieves high classification accuracy in both the open-world and the closed-world models. We further show that our attack is more resistant than network-based fingerprinting to the effects of response caching, and that our techniques are resilient both to network-based defenses and to side-channel countermeasures introduced to modern browsers as a response to the Spectre attack. To protect against cache-based website fingerprinting, new defense mechanisms must be introduced to privacy-sensitive browsers and websites. We investigate one such mechanism, and show that generating artificial cache activity reduces the effectiveness of the attack and completely eliminates it when used in the Tor Browser.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/shusterman](https://www.usenix.org/conference/usenixsecurity19/presentation/shusterman)
- **PDF:** [https://www.usenix.org/system/files/sec19fall_shusterman_prepub.pdf](https://www.usenix.org/system/files/sec19fall_shusterman_prepub.pdf)
## Identifying Cache-Based Side Channels through Secret-Augmented Abstract Interpretation.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#identifying-cache-based-side-channels-through-secret-augmented-abstract-interpretation)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#identifying-cache-based-side-channels-through-secret-augmented-abstract-interpretation)
### Authors
* Shuai Wang, HKUST
* Yuyan Bao, Penn State University
* Xiao Liu, Penn State University
* Pei Wang, Baidu X-Lab
* Danfeng Zhang, Penn State University
* Dinghao Wu, Penn State University
### Abstract
> Cache-based side channels enable a dedicated attacker to reveal program secrets by measuring the cache access patterns. Practical attacks have been shown against real-world crypto algorithm implementations such as RSA, AES, and ElGamal. By far, identifying information leaks due to cache-based side channels, either in a static or dynamic manner, remains a challenge: the existing approaches fail to offer high precision, full coverage, and good scalability simultaneously, thus impeding their practical use in real-world scenarios.In this paper, we propose a novel static analysis method on binaries to detect cache-based side channels. We use abstract interpretation to reason on program states with respect to abstract values at each program point. To make such abstract interpretation scalable to real-world cryptosystems while offering high precision and full coverage, we propose a novel abstract domain called the Secret-Augmented Symbolic domain (SAS). SAS tracks program secrets and dependencies on them for precision, while it tracks only coarse-grained public information for scalability.We have implemented the proposed technique into a practical tool named CacheS and evaluated it on the implementations of widely-used cryptographic algorithms in real-world crypto libraries, including Libgcrypt, OpenSSL, and mbedTLS. CacheS successfully confirmed a total of 154 information leaks reported by previous research and 54 leaks that were previously unknown. We have reported our findings to the developers. And they confirmed that many of those unknown information leaks do lead to potential side channels.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/wang-shuai](https://www.usenix.org/conference/usenixsecurity19/presentation/wang-shuai)
- **PDF:** [https://www.usenix.org/system/files/sec19-wang-shuai.pdf](https://www.usenix.org/system/files/sec19-wang-shuai.pdf)
## ScatterCache: Thwarting Cache Attacks via Cache Set Randomization.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#scattercache-thwarting-cache-attacks-via-cache-set-randomization)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#scattercache-thwarting-cache-attacks-via-cache-set-randomization)
### Authors
* Mario Werner, Graz University of Technology
* Thomas Unterluggauer, Graz University of Technology
* Lukas Giner, Graz University of Technology
* Michael Schwarz, Graz University of Technology
* Daniel Gruss, Graz University of Technology
* Stefan Mangard, Graz University of Technology
### Abstract
> Cache side-channel attacks can be leveraged as a building block in attacks leaking secrets even in the absence of software bugs. Currently, there are no practical and generic mitigations with an acceptable performance overhead and strong security guarantees. The underlying problem is that caches are shared in a predictable way across security domains.In this paper, we eliminate this problem. We present ScatterCache, a novel cache design to prevent cache attacks. ScatterCache eliminates fixed cache-set congruences and, thus, makes eviction-based cache attacks unpractical. For this purpose, ScatterCache retrofits skewed associative caches with a keyed mapping function, yielding a security-domain-dependent cache mapping. Hence, it becomes virtually impossible to find fully overlapping cache sets, rendering current eviction-based attacks infeasible. Even theoretical statistical attacks become unrealistic, as the attacker cannot confine contention to chosen cache sets. Consequently, the attacker has to resort to eviction of the entire cache, making deductions over cache sets or lines impossible and fully preventing high-frequency attacks. Our security analysis reveals, that even in the strongest possible attacker model (noise-free), the construction of a reliable eviction set for Prime+Probe in an 8-way ScatterCache with 16384 lines requires observation of at least 33.5 million victim memory accesses as compared to fewer than 103 on commodity caches. ScatterCache requires hardware and software changes, yet is minimally invasive on the software level and is fully backward compatible with legacy software while still improving the security level over state-of-the-art caches. Finally, our evaluations show that the runtime performance of software is not curtailed and our design even outperforms state-of-the-art caches for certain realistic workloads.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/werner](https://www.usenix.org/conference/usenixsecurity19/presentation/werner)
- **PDF:** [https://www.usenix.org/system/files/sec19-werner.pdf](https://www.usenix.org/system/files/sec19-werner.pdf)
## Pythia: Remote Oracles for the Masses.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#pythia-remote-oracles-for-the-masses)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#pythia-remote-oracles-for-the-masses)
### Authors
* Shin-Yeh Tsai, Purdue University
* Mathias Payer, EPFL and (on leave from) Purdue
* Yiying Zhang, Purdue University
### Abstract
> Remote Direct Memory Access (RDMA) is a technology that allows direct access from the network to a machine’s main memory without involving its CPU. RDMA offers low-latency, high-bandwidth performance and low CPU utilization. While RDMA provides massive performance boosts and has thus been adopted by several major cloud providers, security concerns have so far been neglected.The need for RDMA NICs to bypass CPU and directly access memory results in them storing various metadata like page table entries in their on-board SRAM. When the SRAM is full, RNICs swap metadata to main memory across the PCIe bus. We exploit the resulting timing difference to establish side channels and demonstrate that these side channels can leak access patterns of victim nodes to other nodes.We design Pythia, a set of RDMA-based remote side-channel attacks that allow an attacker on one client machine to learn how victims on other client machines access data a server exports as an in-memory data service. We reverse engineer the memory architecture of the most widely used RDMA NIC and use this knowledge to improve the efficiency of Pythia. We further extend Pythia to build side-channel attacks on Crail, a real RDMA-based key-value store application. We evaluated Pythia on four different RDMA NICs both in a laboratory and in a public cloud setting. Pythia is fast (57 μs), accurate (97% accuracy), and can hide all its traces from the victim or the server.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/tsai](https://www.usenix.org/conference/usenixsecurity19/presentation/tsai)
- **PDF:** [https://www.usenix.org/system/files/sec19-tsai.pdf](https://www.usenix.org/system/files/sec19-tsai.pdf)
## HideMyApp: Hiding the Presence of Sensitive Apps on Android.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#hidemyapp-hiding-the-presence-of-sensitive-apps-on-android)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#hidemyapp-hiding-the-presence-of-sensitive-apps-on-android)
### Authors
* Anh Pham, ABB Corporate Research
* Italo Dacosta, EPFL
* Eleonora Losiouk, University of Padova
* John Stephan, EPFL
* Kévin Huguenin, University of Lausanne
* Jean-Pierre Hubaux, EPFL
### Abstract
> Millions of users rely on mobile health (mHealth) apps to manage their wellness and medical conditions. Although the popularity of such apps continues to grow, several privacy and security challenges can hinder their potential. In particular, the simple fact that an mHealth app is installed on a user’s phone can reveal sensitive information about the user’s health. Due to Android’s open design, any app, even without permissions, can easily check for the presence of a specific app or collect the entire list of installed apps on the phone. Our analysis shows that Android apps expose a significant amount of metadata, which facilitates fingerprinting them. Many third parties are interested in such information: Our survey of 2917 popular apps in the Google Play Store shows that around 57% of these apps explicitly query for the list of installed apps. Therefore, we designed and implemented HideMyApp (HMA), an effective and practical solution for hiding the presence of sensitive apps from other apps. HMA does not require any changes to the Android operating system or to apps yet still supports their key functionalities. By using a diverse dataset of both free and paid mHealth apps, our experimental evaluation shows that HMA supports the main functionalities in most apps and introduces acceptable overheads at runtime (i.e., several milliseconds); these findings were validated by our user-study (N = 30). In short, we show that the practice of collecting information about installed apps is widespread and that our solution, HMA, provides a robust protection against such a threat.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/pham](https://www.usenix.org/conference/usenixsecurity19/presentation/pham)
- **PDF:** [https://www.usenix.org/system/files/sec19-pham.pdf](https://www.usenix.org/system/files/sec19-pham.pdf)
## TESSERACT: Eliminating Experimental Bias in Malware Classification across Space and Time.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#tesseract-eliminating-experimental-bias-in-malware-classification-across-space-and-time)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#tesseract-eliminating-experimental-bias-in-malware-classification-across-space-and-time)
### Authors
* Feargus Pendlebury, King's College London & Royal Holloway, University of London
* Fabio Pierazzi, King's College London & Royal Holloway, University of London
* Roberto Jordaney, King's College London & Royal Holloway, University of London
* Johannes Kinder, Bundeswehr University Munich
* Lorenzo Cavallaro, King's College London
### Abstract
> Is Android malware classification a solved problem? Published F1 scores of up to 0.99 appear to leave very little room for improvement. In this paper, we argue that results are commonly inflated due to two pervasive sources of experimental bias: "spatial bias" caused by distributions of training and testing data that are not representative of a real-world deployment; and "temporal bias" caused by incorrect time splits of training and testing sets, leading to impossible configurations. We propose a set of space and time constraints for experiment design that eliminate both sources of bias. We introduce a new metric that summarizes the expected robustness of a classifier in a real-world setting, and we present an algorithm to tune its performance. Finally, we demonstrate how this allows us to evaluate mitigation strategies for time decay such as active learning. We have implemented our solutions in TESSERACT, an open source evaluation framework that allows for the comparison of malware classifiers in a realistic setting. We used TESSERACT to evaluate three Android malware classifiers from the literature on a dataset of 129K applications spanning over three years. Our evaluation confirms that earlier results were biased, but also reveals counterintuitive performance and shows that appropriate tuning can lead to significant improvements.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/pendlebury](https://www.usenix.org/conference/usenixsecurity19/presentation/pendlebury)
- **PDF:** [https://www.usenix.org/system/files/sec19fall_pendlebury_prepub.pdf](https://www.usenix.org/system/files/sec19fall_pendlebury_prepub.pdf)
## Devils in the Guidance: Predicting Logic Vulnerabilities in Payment Syndication Services through Automated Documentation Analysis.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#devils-in-the-guidance-predicting-logic-vulnerabilities-in-payment-syndication-services-through-automated-documentation-analysis)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#devils-in-the-guidance-predicting-logic-vulnerabilities-in-payment-syndication-services-through-automated-documentation-analysis)
### Authors
* Yi Chen, Institute of Information Engineering, CAS
* Luyi Xing, Indiana University Bloomington
* Yue Qin, Indiana University Bloomington
* Xiaojing Liao, Indiana University Bloomington
* XiaoFeng Wang, Indiana University Bloomington
* Kai Chen, Institute of Information Engineering, CAS
* Wei Zou, Institute of Information Engineering, CAS
### Abstract
> Finding logic flaws today relies on the program analysis that leverages the functionality information reported in the program's documentation. Our research, however, shows that the documentation alone may already contain information for predicting the presence of some logic flaws, even before the code is analyzed. Our first step on this direction focuses on emerging syndication services that facilitate integration of multiple payment services (e.g., Alipay, Wechat Pay, PayPal, etc.) into merchant systems. We look at whether a syndication service will cause some security requirements (e.g., checking payment against price) to become unenforceable due to losing visibility of some key parameters (e.g., payment, price) to the parties involved in the syndication, or bring in implementation errors when required security checks fail to be communicated to the developer. For this purpose, we developed a suite of Natural Language Processing techniques that enables automatic inspection of the syndication developer’s guide, based upon the payment models and security requirements from the payment service.  Our approach is found to be effective in identifying these potential problems from the guide, and leads to the discovery of 5 new security-critical flaws in popular Chinese merchant systems that can cause circumvention of payment once exploited.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/chen-yi](https://www.usenix.org/conference/usenixsecurity19/presentation/chen-yi)
- **PDF:** [https://www.usenix.org/system/files/sec19-chen-yi.pdf](https://www.usenix.org/system/files/sec19-chen-yi.pdf)
## Understanding iOS-based Crowdturfing Through Hidden UI Analysis.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#understanding-ios-based-crowdturfing-through-hidden-ui-analysis)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#understanding-ios-based-crowdturfing-through-hidden-ui-analysis)
### Authors
* Yeonjoon Lee, Indiana University
* Xueqiang Wang, Indiana University
* Kwangwuk Lee, Indiana University
* Xiaojing Liao, Indiana University
* XiaoFeng Wang, Indiana University
* Tongxin Li, Peking University
* Xianghang Mi, Indiana University
### Abstract
> A new type of malicious crowdsourcing (a.k.a., crowdturfing) clients, mobile apps with hidden crowdturfing user interface (UI), is increasingly being utilized by miscreants to coordinate crowdturfing workers and publish mobile-based crowdturfing tasks (e.g., app ranking manipulation) even on the strictly controlled Apple App Store. These apps hide their crowdturfing content behind innocent-looking UIs to bypass app vetting and infiltrate the app store. To the best of our knowledge, little has been done so far to understand this new abusive service, in terms of its scope, impact and techniques, not to mention any effort to identify such stealthy crowdturfing apps on a large scale, particularly on the Apple platform. In this paper, we report the first measurement study on iOS apps with hidden crowdturfing UIs. Our findings bring to light the mobile-based crowdturfing ecosystem (e.g., app promotion for worker recruitment, campaign identification) and the underground developer’s tricks (e.g., scheme, logic bomb) for evading app vetting.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/lee](https://www.usenix.org/conference/usenixsecurity19/presentation/lee)
- **PDF:** [https://www.usenix.org/system/files/sec19-lee_0.pdf](https://www.usenix.org/system/files/sec19-lee_0.pdf)
## BITE: Bitcoin Lightweight Client Privacy using Trusted Execution.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#bite-bitcoin-lightweight-client-privacy-using-trusted-execution)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#bite-bitcoin-lightweight-client-privacy-using-trusted-execution)
### Authors
* Sinisa Matetic, ETH Zurich
* Karl Wüst, ETH Zurich
* Moritz Schneider, ETH Zurich
* Kari Kostiainen, ETH Zurich
* Ghassan Karame, NEC Labs
* Srdjan Capkun, ETH Zurich
### Abstract
> Blockchains offer attractive advantages over traditional payments such as the ability to operate without a trusted authority and increased user privacy. However, the verification of blockchain payments requires the user to download and process the entire chain which can be infeasible for resource-constrained devices like mobile phones. To address this problem, most major blockchain systems support so called lightweight clients that outsource most of the computational and storage burden to full blockchain nodes. However, such verification leaks critical information about clients’ transactions, thus defeating user privacy that is often considered one of the main goals of decentralized cryptocurrencies.In this paper, we propose a new approach to protect the privacy of light clients in Bitcoin. Our main idea is to leverage the trusted execution capabilities of commonly available SGX enclaves. We design and implement a system called BITE where enclaves on full nodes serve privacy-preserving requests from light clients. However, as we will show, naive processing of client requests from within SGX enclaves still leaks client’s addresses and transactions. BITE therefore integrates several private information retrieval and side-channel protection techniques at critical parts of the system. We show that BITE provides significantly improved privacy protection for light clients without compromising the performance of the assisting full nodes.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/matetic](https://www.usenix.org/conference/usenixsecurity19/presentation/matetic)
- **PDF:** [https://www.usenix.org/system/files/sec19fall_matetic_prepub.pdf](https://www.usenix.org/system/files/sec19fall_matetic_prepub.pdf)
## FastKitten: Practical Smart Contracts on Bitcoin.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#fastkitten-practical-smart-contracts-on-bitcoin)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#fastkitten-practical-smart-contracts-on-bitcoin)
### Authors
* Poulami Das, Technische Universität Darmstadt, Germany
* Lisa Eckey, Technische Universität Darmstadt, Germany
* Tommaso Frassetto, Technische Universität Darmstadt, Germany
* David Gens, Technische Universität Darmstadt, Germany
* Kristina Hostáková, Technische Universität Darmstadt, Germany
* Patrick Jauernig, Technische Universität Darmstadt, Germany
* Sebastian Faust, Technische Universität Darmstadt, Germany
* Ahmad-Reza Sadeghi, Technische Universität Darmstadt, Germany
### Abstract
> Smart contracts are envisioned to be one of the killer applications of decentralized cryptocurrencies. They enable self-enforcing payments between users depending on complex program logic. Unfortunately, Bitcoin – the largest and by far most widely used cryptocurrency – does not offer support for complex smart contracts. Moreover, simple contracts that can be executed on Bitcoin are often cumbersome to design and very costly to execute. In this work we present FastKitten, a practical framework for executing arbitrarily complex smart contracts at low costs over decentralized cryptocurrencies which are designed to only support simple transactions. To this end, FastKitten leverages the power of trusted computing environments (TEEs), in which contracts are run off-chain to enable efficient contract execution at low cost. We formally prove that FastKitten satisfies strong security properties when all but one party are malicious. Finally, we report on a prototype implementation which supports arbitrary contracts through a scripting engine, and evaluate performance through benchmarking a provably fair online poker game. Our implementation illustrates that FastKitten is practical for complex multi-round applications with a very small latency. Combining these features, FastKitten is the first truly practical framework for complex smart contract execution over Bitcoin.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/das](https://www.usenix.org/conference/usenixsecurity19/presentation/das)
- **PDF:** [https://www.usenix.org/system/files/sec19fall_das_prepub.pdf](https://www.usenix.org/system/files/sec19fall_das_prepub.pdf)
## StrongChain: Transparent and Collaborative Proof-of-Work Consensus.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#strongchain-transparent-and-collaborative-proof-of-work-consensus)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#strongchain-transparent-and-collaborative-proof-of-work-consensus)
### Authors
* Pawel Szalachowski, Singapore University of Technology and Design (SUTD)
* Daniël Reijsbergen, Singapore University of Technology and Design (SUTD)
* Ivan Homoliak, Singapore University of Technology and Design (SUTD)
* Siwei Sun, Institute of Information Engineering and DCS Center, Chinese Academy of Sciences
### Abstract
> Bitcoin is the most successful cryptocurrency so far. This is mainly due to its novel consensus algorithm, which is based on proof-of-work combined with a cryptographically-protected data structure and a rewarding scheme that incentivizes nodes to participate. However, despite its unprecedented success Bitcoin suffers from many inefficiencies. For instance, Bitcoin's consensus mechanism has been proved to be incentive-incompatible, its high reward variance causes centralization, and its hardcoded deflation raises questions about its long-term sustainability.In this work, we revise the Bitcoin consensus mechanism by proposing StrongChain, a scheme that introduces transparency and incentivizes participants to collaborate rather than to compete. The core design of our protocol is to reflect and utilize the computing power aggregated on the blockchain which is invisible and "wasted" in Bitcoin today. Introducing relatively easy, although important changes to Bitcoin's design enables us to improve many crucial aspects of Bitcoin-like cryptocurrencies making it more secure, efficient, and profitable for participants. We thoroughly analyze our approach and we present an implementation of StrongChain. The obtained results confirm its efficiency, security, and deployability.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/szalachowski](https://www.usenix.org/conference/usenixsecurity19/presentation/szalachowski)
- **PDF:** [https://www.usenix.org/system/files/sec19-szalachowski.pdf](https://www.usenix.org/system/files/sec19-szalachowski.pdf)
## Tracing Transactions Across Cryptocurrency Ledgers.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#tracing-transactions-across-cryptocurrency-ledgers)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#tracing-transactions-across-cryptocurrency-ledgers)
### Authors
* Haaroon Yousaf, University College London
* George Kappos, University College London
* Sarah Meiklejohn, University College London
### Abstract
> One of the defining features of a cryptocurrency is that its ledger, containing all transactions that have ever taken place, is globally visible.  As one consequence of this degree of transparency, a long line of recent research has demonstrated that -- even in cryptocurrencies that are specifically designed to improve anonymity -- it is often possible to track money as it changes hands, and in some cases to de-anonymize users entirely.  With the recent proliferation of alternative cryptocurrencies, however, it becomes relevant to ask not only whether or not money can be traced as it moves within the ledger of a single cryptocurrency, but if it can in fact be traced as it moves across ledgers.  This is especially pertinent given the rise in popularity of automated trading platforms such as ShapeShift, which make it effortless to carry out such cross-currency trades.  In this paper, we use data scraped from ShapeShift over a thirteen-month period and the data from eight different blockchains to explore this question.  Beyond developing new heuristics and creating new types of links across cryptocurrency ledgers, we also identify various patterns of cross-currency trades and of the general usage of these platforms, with the ultimate goal of understanding whether they serve a criminal or a profit-driven agenda.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/yousaf](https://www.usenix.org/conference/usenixsecurity19/presentation/yousaf)
- **PDF:** [https://www.usenix.org/system/files/sec19-yousaf_0.pdf](https://www.usenix.org/system/files/sec19-yousaf_0.pdf)
## Reading the Tea leaves: A Comparative Analysis of Threat Intelligence.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#reading-the-tea-leaves-a-comparative-analysis-of-threat-intelligence)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#reading-the-tea-leaves-a-comparative-analysis-of-threat-intelligence)
### Authors
* Vector Guo Li, University of California, San Diego
* Matthew Dunn, Northeastern University
* Paul Pearce, Georgia Tech
* Damon McCoy, New York University
* Geoffrey M. Voelker, University of California, San Diego
* Stefan Savage, University of California, San Diego
* Kirill Levchenko, University of Illinois Urbana-Champaign
### Abstract
> The term "threat intelligence" has swiftly become a staple buzzword in the computer security industry.  The entirely reasonable premise is that, by compiling up-to-date information about known threats (i.e., IP addresses, domain names, file hashes, etc.), recipients of such information may be able to better defend their systems from future attacks.  Thus, today a wide array of public and commercial sources distribute threat intelligence data feeds to support this purpose. However, our understanding of this data, its characterization and the extent to which it can meaningfully support its intended uses, is still quite limited.  In this paper, we address these gaps by formally defining a set of metrics for characterizing threat intelligence data feeds and using these measures to systematically characterize a broad range of public and commercial sources. Further, we ground our quantitative assessments using external measurements to qualitatively investigate issues of coverage and accuracy. Unfortunately, our measurement results suggest that there are significant limitations and challenges in using existing threat intelligence data for its purported goals.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/li](https://www.usenix.org/conference/usenixsecurity19/presentation/li)
- **PDF:** [https://www.usenix.org/system/files/sec19fall-li_prepub.pdf](https://www.usenix.org/system/files/sec19fall-li_prepub.pdf)
## Towards the Detection of Inconsistencies in Public Security Vulnerability Reports.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#towards-the-detection-of-inconsistencies-in-public-security-vulnerability-reports)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#towards-the-detection-of-inconsistencies-in-public-security-vulnerability-reports)
### Authors
* Ying Dong, University of Chinese Academy of Sciences and The Pennsylvania State University
* Wenbo Guo, The Pennsylvania State University and JD Security Research Center
* Yueqi Chen, The Pennsylvania State University and JD Security Research Center
* Xinyu Xing, The Pennsylvania State University and JD Security Research Center
* Yuqing Zhang, University of Chinese Academy of Sciences
* Gang Wang, Virginia Tech
### Abstract
> Public vulnerability databases such as Common Vulnerabilities and Exposures (CVE) and National Vulnerability Database (NVD) have achieved a great success in promoting vulnerability disclosure and mitigation. While these databases have accumulated massive data, there is a growing concern for their information quality and consistency. In this paper, we propose an automated system VIEM to detect inconsistent information between the fully standardized NVD database and the unstructured CVE descriptions and their referenced vulnerability reports. VIEM allows us, for the first time, to quantify the information consistency at a massive scale, and provides the needed tool for the community to keep the CVE/NVD databases up-to date.  VIEM is developed to extract vulnerable software names and vulnerable versions from unstructured text. We introduce customized designs to deep-learning-based named entity recognition (NER) and relation extraction (RE) so that VIEM can recognize previous unseen software names and versions based on sentence structure and contexts. Ground-truth evaluation shows the system is highly accurate (0.941 precision and 0.993 recall). Using VIEM, we examine the information consistency using a large dataset of 78,296 CVE IDs and 70,569 vulnerability reports in the past 20 years. Our result suggests that inconsistent vulnerable software versions are highly prevalent. Only 59.82% of the vulnerability reports/CVE summaries strictly match the standardized NVD entries, and the inconsistency level increases over time. Case studies confirm the erroneous information of NVD that either overclaims or underclaims the vulnerable software versions.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/dong](https://www.usenix.org/conference/usenixsecurity19/presentation/dong)
- **PDF:** [https://www.usenix.org/system/files/sec19fall_dong_prepub.pdf](https://www.usenix.org/system/files/sec19fall_dong_prepub.pdf)
## Understanding and Securing Device Vulnerabilities through Automated Bug Report Analysis.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#understanding-and-securing-device-vulnerabilities-through-automated-bug-report-analysis)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#understanding-and-securing-device-vulnerabilities-through-automated-bug-report-analysis)
### Authors
* Xuan Feng, Beijing Key Laboratory of IOT Information Security Technology, Institute of Information Engineering, CAS, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Xiaojing Liao, Department of Computer Science, Indiana University Bloomington, USA
* XiaoFeng Wang, Department of Computer Science, Indiana University Bloomington, USA
* Haining Wang, Department of Electrical and Computer Engineering, University of Delaware, USA
* Qiang Li, School of Computer and Information Technology, Beijing Jiaotong University, China
* Kai Yang, Beijing Key Laboratory of IOT Information Security Technology, Institute of Information Engineering, CAS, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Hongsong Zhu, Beijing Key Laboratory of IOT Information Security Technology, Institute of Information Engineering, CAS, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Limin Sun, Beijing Key Laboratory of IOT Information Security Technology, Institute of Information Engineering, CAS, China; School of Cyber Security, University of Chinese Academy of Sciences, China
### Abstract
> Recent years have witnessed the rise of Internet-of-Things (IoT) based cyber attacks. These attacks, as expected, are launched from compromised IoT devices by exploiting security flaws already known. Less clear, however, are the fundamental causes of the pervasiveness of IoT device vulnerabilities and their security implications, particularly in how they affect ongoing cybercrimes. To better understand the problems and seek effective means to suppress the wave of IoT-based attacks, we conduct a comprehensive study based on a large number of real-world attack traces collected from our honeypots, attack tools purchased from the underground, and information collected from high-profile IoT attacks. This study sheds new light on the device vulnerabilities of today's IoT systems and their security implications: ongoing cyber attacks heavily rely on these known vulnerabilities and the attack code released through their reports. We found that the reliance on known vulnerabilities can actually be used against adversaries. The same bug reports that enable the development of an attack at an exceedingly low cost can also be leveraged to extract vulnerability-specific features that help stop the attack.  In particular, we leverage Natural Language Processing (NLP) to automatically collect and analyze more than 7,500 security reports (with 12,286 security critical IoT flaws in total) scattered across bug-reporting blogs, forums, and mailing lists on the Internet.  We show that signatures can be automatically generated through an NLP-based report analysis, and used by intrusion detection or firewall systems to effectively mitigate the threats from today's IoT-based attacks.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/feng](https://www.usenix.org/conference/usenixsecurity19/presentation/feng)
## ATTACK2VEC: Leveraging Temporal Word Embeddings to Understand the Evolution of Cyberattacks.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#attack2vec-leveraging-temporal-word-embeddings-to-understand-the-evolution-of-cyberattacks)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#attack2vec-leveraging-temporal-word-embeddings-to-understand-the-evolution-of-cyberattacks)
### Authors
* Yun Shen, Symantec Research Labs
* Gianluca Stringhini, Boston University
### Abstract
> Despite the fact that cyberattacks are constantly growing in complexity, the research community still lacks effective tools to easily monitor and understand them. In particular, there is a need for techniques that are able to not only track how prominently certain malicious actions, such as the exploitation of specific vulnerabilities, are exploited in the wild, but also (and more importantly) how these malicious actions factor in as attack steps in more complex cyberattacks. In this paper we present ATTACK2VEC, a system that uses word embeddings to model how attack steps are exploited in the wild, and track how they evolve. We test ATTACK2VEC on a dataset of billions of security events collected from the customers of a commercial Intrusion Prevention System over a period of two years, and show that our approach is effective in monitoring the emergence of new attack strategies in the wild and in flagging which attack steps are often used together by attackers (e.g., vulnerabilities that are frequently exploited together). ATTACK2VEC provides a useful tool for research and practitioners to better understand cyberattacks and their evolution, and use this knowledge to improve situational awareness and develop proactive defenses.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/shen](https://www.usenix.org/conference/usenixsecurity19/presentation/shen)
- **PDF:** [https://www.usenix.org/system/files/sec19-shen.pdf](https://www.usenix.org/system/files/sec19-shen.pdf)
## Leaky Images: Targeted Privacy Attacks in the Web.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#leaky-images-targeted-privacy-attacks-in-the-web)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#leaky-images-targeted-privacy-attacks-in-the-web)
### Authors
* Cristian-Alex, TU Darmstadt
* ru Staicu, TU Darmstadt
* Michael Pradel, TU Darmstadt
### Abstract
> Sharing files with specific users is a popular service provided by various widely used websites, e.g., Facebook, Twitter, Google, and Dropbox. A common way to ensure that a shared file can only be accessed by a specific user is to authenticate the user upon a request for the file. This paper shows a novel way of abusing shared image files for targeted privacy attacks. In our attack, called leaky images, an image shared with a particular user reveals whether the user is visiting a specific website. The basic idea is simple yet effective: an attacker-controlled website requests a privately shared image, which will succeed only for the targeted user whose browser is logged into the website through which the image was shared. In addition to targeted privacy attacks aimed at single users, we discuss variants of the attack that allow an attacker to track a group of users and to link user identities across different sites. Leaky images require neither JavaScript nor CSS, exposing even privacy-aware users, who disable scripts in their browser, to the leak. Studying the most popular websites shows that the privacy leak affects at least eight of the 30 most popular websites that allow sharing of images between users, including the three most popular of all sites. We disclosed the problem to the affected sites, and most of them have been fixing the privacy leak in reaction to our reports. In particular, the two most popular affected sites, Facebook and Twitter, have already fixed the leaky images problem. To avoid leaky images, we discuss potential mitigation techniques that address the problem at the level of the browser and of the image sharing website.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/staicu](https://www.usenix.org/conference/usenixsecurity19/presentation/staicu)
- **PDF:** [https://www.usenix.org/system/files/sec19fall_staicu_prepub.pdf](https://www.usenix.org/system/files/sec19fall_staicu_prepub.pdf)
## All Your Clicks Belong to Me: Investigating Click Interception on the Web.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#all-your-clicks-belong-to-me-investigating-click-interception-on-the-web)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#all-your-clicks-belong-to-me-investigating-click-interception-on-the-web)
### Authors
* Mingxue Zhang, Chinese University of Hong Kong
* Wei Meng, Chinese University of Hong Kong
* Sangho Lee, Microsoft Research
* Byoungyoung Lee, Seoul National University and Purdue University
* Xinyu Xing, Pennsylvania State University
### Abstract
> Click is the prominent way that users interact with web applications. For example, we click hyperlinks to navigate among different pages on the Web, click form submission buttons to send data to websites, and click player controls to tune video playback. Clicks are also critical in online advertising, which fuels the revenue of billions of websites. Because of the critical role of clicks in the Web ecosystem, attackers aim to intercept genuine user clicks to either send malicious commands to another application on behalf of the user or fabricate realistic ad click traffic. However, existing studies mainly consider one type of click interceptions in the cross-origin settings via iframes, i.e., clickjacking. This does not comprehensively represent various types of click interceptions that can be launched by malicious third-party JavaScript code.In this paper, we therefore systematically investigate the click interception practices on the Web. We developed a browser-based analysis framework, Observer, to collect and analyze click related behaviors. Using Observer, we identified three different techniques to intercept user clicks on the Alexa top 250K websites, and detected 437 third-party scripts that intercepted user clicks on 613 websites, which in total receive around 43 million visits on a daily basis.We revealed that some websites collude with third-party scripts to hijack user clicks for monetization. In particular, our analysis demonstrated that more than 36% of the 3,251 unique click interception URLs were related to online advertising, which is the primary monetization approach on the Web. Further, we discovered that users can be exposed to malicious contents such as scamware through click interceptions. Our research demonstrated that click interception has become an emerging threat to web users.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/zhang](https://www.usenix.org/conference/usenixsecurity19/presentation/zhang)
- **PDF:** [https://www.usenix.org/system/files/sec19fall_zhang_prepub.pdf](https://www.usenix.org/system/files/sec19fall_zhang_prepub.pdf)
## What Are You Searching For? A Remote Keylogging Attack on Search Engine Autocomplete.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#what-are-you-searching-for-a-remote-keylogging-attack-on-search-engine-autocomplete)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#what-are-you-searching-for-a-remote-keylogging-attack-on-search-engine-autocomplete)
### Authors
* John V. Monaco, Naval Postgraduate School
### Abstract
> Many search engines have an autocomplete feature that presents a list of suggested queries to the user as they type. Autocomplete induces network traffic from the client upon changes to the query in a web page. We describe a remote keylogging attack on search engine autocomplete. The attack integrates information leaked by three independent sources: the timing of keystrokes manifested in packet inter-arrival times, percent-encoded Space characters in a URL, and the static Huffman code used in HTTP2 header compression. While each source is a relatively weak predictor in its own right, combined, and by leveraging the relatively low entropy of English language, up to 15% of search queries are identified among a list of 50 hypothesis queries generated from a dictionary with over 12k words. The attack succeeds despite network traffic being encrypted. We demonstrate the attack on two popular search engines and discuss some countermeasures to mitigate attack success.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/monaco](https://www.usenix.org/conference/usenixsecurity19/presentation/monaco)
- **PDF:** [https://www.usenix.org/system/files/sec19-monaco.pdf](https://www.usenix.org/system/files/sec19-monaco.pdf)
## Iframes/Popups Are Dangerous in Mobile WebView: Studying and Mitigating Differential Context Vulnerabilities.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#iframes-popups-are-dangerous-in-mobile-webview-studying-and-mitigating-differential-context-vulnerabilities)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#iframes-popups-are-dangerous-in-mobile-webview-studying-and-mitigating-differential-context-vulnerabilities)
### Authors
* GuangLiang Yang, Texas A&M University
* Jeff Huang, Texas A&M University
* Guofei Gu, Texas A&M University
### Abstract
> In this paper, we present a novel class of Android WebView vulnerabilities (called Differential Context Vulnerabilities or DCVs) associated with web iframe/popup behaviors. To demonstrate the security implications of DCVs, we devise several novel concrete attacks. We show an untrusted web iframe/popup inside WebView becomes dangerous that it can launch these attacks to open holes on existing defense solutions, and obtain risky privileges and abilities, such as breaking web messaging integrity, stealthily accessing sensitive mobile functionalities, and performing phishing attacks.Then, we study and assess the security impacts of DCVs on real-world apps. For this purpose, we develop a novel technique, DCV-Hunter, that can automatically vet Android apps against DCVs. By applying DCV-Hunter on a large number of most popular apps, we find DCVs are prevalent. Many high-profile apps are verified to be impacted, such as Facebook, Instagram, Facebook Messenger, Google News, Skype, Uber, Yelp, and U.S. Bank. To mitigate DCVs, we design a multi-level solution that enhances the security of WebView. Our evaluation on real-world apps shows the mitigation solution is effective and scalable, with negligible overhead.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/yang-guangliang](https://www.usenix.org/conference/usenixsecurity19/presentation/yang-guangliang)
- **PDF:** [https://www.usenix.org/system/files/sec19-yang-guangliang_0.pdf](https://www.usenix.org/system/files/sec19-yang-guangliang_0.pdf)
## Small World with High Risks: A Study of Security Threats in the npm Ecosystem.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#small-world-with-high-risks-a-study-of-security-threats-in-the-npm-ecosystem)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#small-world-with-high-risks-a-study-of-security-threats-in-the-npm-ecosystem)
### Authors
* Markus Zimmermann, TU Darmstadt
* Cristian-Alex, TU Darmstadt
* ru Staicu, TU Darmstadt
* Cam Tenny, r2c
* Michael Pradel, TU Darmstadt
### Abstract
> The popularity of JavaScript has lead to a large ecosystem of third-party packages available via the npm software package registry. The open nature of npm has boosted its growth, providing over 800,000 free and reusable software packages. Unfortunately, this open nature also causes security risks, as evidenced by recent incidents of single packages that broke or attacked software running on millions of computers. This paper studies security risks for users of npm by systematically analyzing dependencies between packages, the maintainers responsible for these packages, and publicly reported security issues. Studying the potential for running vulnerable or malicious code due to third-party dependencies, we find that individual packages could impact large parts of the entire ecosystem. Moreover, a very small number of maintainer accounts could be used to inject malicious code into the majority of all packages, a problem that has been increasing over time. Studying the potential for accidentally using vulnerable code, we find that lack of maintenance causes many packages to depend on vulnerable code, even years after a vulnerability has become public. Our results provide evidence that npm suffers from single points of failure and that unmaintained packages threaten large code bases. We discuss several mitigation techniques, such as trusted maintainers and total first-party security, and analyze their potential effectiveness.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/zimmerman](https://www.usenix.org/conference/usenixsecurity19/presentation/zimmerman)
- **PDF:** [https://www.usenix.org/system/files/sec19-zimmermann.pdf](https://www.usenix.org/system/files/sec19-zimmermann.pdf)
## "Johnny, you are fired!" - Spoofing OpenPGP and S/MIME Signatures in Emails.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#johnny-you-are-fired-spoofing-openpgp-and-s-mime-signatures-in-emails)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#johnny-you-are-fired-spoofing-openpgp-and-s-mime-signatures-in-emails)
### Authors
* Jens Müller, Ruhr University Bochum
* Marcus Brinkmann, Ruhr University Bochum
* Damian Poddebniak, Münster University of Applied Sciences
* Hanno Böck, unaffiliated
* Sebastian Schinzel, Münster University of Applied Sciences
* Juraj Somorovsky, Ruhr University Bochum
* Jörg Schwenk, Ruhr University Bochum
### Abstract
> OpenPGP and S/MIME are the two major standards to encrypt and digitally sign emails. Digital signatures are supposed to guarantee authenticity and integrity of messages. In this work we show practical forgery attacks against various implementations of OpenPGP and S/MIME email signature verification in five attack classes: (1) We analyze edge cases in S/MIME's container format. (2) We exploit in-band signaling in the GnuPG API, the most widely used OpenPGP implementation. (3) We apply MIME wrapping attacks that abuse the email clients' handling of partially signed messages. (4) We analyze weaknesses in the binding of signed messages to the sender identity. (5) We systematically test email clients for UI redressing attacks. Our attacks allow the spoofing of digital signatures for arbitrary messages in 14 out of 20 tested OpenPGP-capable email clients and 15 out of 22 email clients supporting S/MIME signatures. While the attacks do not target the underlying cryptographic primitives of digital signatures, they raise concerns about the actual security of OpenPGP and S/MIME email applications. Finally, we propose mitigation strategies to counter these attacks.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/muller](https://www.usenix.org/conference/usenixsecurity19/presentation/muller)
- **PDF:** [https://www.usenix.org/system/files/sec19fall_muller_prepub.pdf](https://www.usenix.org/system/files/sec19fall_muller_prepub.pdf)
## Scalable Scanning and Automatic Classification of TLS Padding Oracle Vulnerabilities.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#scalable-scanning-and-automatic-classification-of-tls-padding-oracle-vulnerabilities)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#scalable-scanning-and-automatic-classification-of-tls-padding-oracle-vulnerabilities)
### Authors
* Robert Merget, Ruhr University Bochum
* Juraj Somorovsky, Ruhr University Bochum
* Nimrod Aviram, Tel Aviv University
* Craig Young, Tripwire VERT
* Janis Fliegenschmidt, Ruhr University Bochum
* Jörg Schwenk, Ruhr University Bochum
* Yuval Shavitt, Tel Aviv University
### Abstract
> The TLS protocol provides encryption, data integrity, and authentication on the modern Internet. Despite the protocol's importance, currently-deployed TLS versions use obsolete cryptographic algorithms which have been broken using various attacks. One prominent class of such attacks is CBC padding oracle attacks. These attacks allow an adversary to decrypt TLS traffic by observing different server behaviors which depend on the validity of CBC padding. We present the first large-scale scan for CBC padding oracle vulnerabilities in TLS implementations on the modern Internet. Our scan revealed vulnerabilities in 1.83% of the Alexa Top Million websites, detecting nearly 100 different vulnerabilities. Our scanner observes subtle differences in server behavior, such as responding with different TLS alerts, or with different TCP header flags. We used a novel scanning methodology consisting of three steps. First, we created a large set of probes that detect vulnerabilities at a considerable scanning cost. We then reduced the number of probes using a preliminary scan, such that a smaller set of probes has the same detection rate but is small enough to be used in large-scale scans. Finally, we used the reduced set to scan at scale, and clustered our findings with a novel approach using graph drawing algorithms. Contrary to common wisdom, exploiting CBC padding oracles does not necessarily require performing precise timing measurements. We detected vulnerabilities that can be exploited simply by observing the content of different server responses. These vulnerabilities pose a significantly larger threat in practice than previously assumed.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/merget](https://www.usenix.org/conference/usenixsecurity19/presentation/merget)
- **PDF:** [https://www.usenix.org/system/files/sec19-merget.pdf](https://www.usenix.org/system/files/sec19-merget.pdf)
## The KNOB is Broken: Exploiting Low Entropy in the Encryption Key Negotiation Of Bluetooth BR/EDR.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#the-knob-is-broken-exploiting-low-entropy-in-the-encryption-key-negotiation-of-bluetooth-br-edr)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#the-knob-is-broken-exploiting-low-entropy-in-the-encryption-key-negotiation-of-bluetooth-br-edr)
### Authors
* Daniele Antonioli, SUTD
* Nils Ole Tippenhauer, CISPA
* Kasper B. Rasmussen, University of Oxford
### Abstract
> We present an attack on the encryption key negotiation protocol of Bluetooth BR/EDR. The attack allows a third party, without knowledge of any secret material (such as link and encryption keys), to make two (or more) victims agree on an encryption key with only 1 byte (8 bits) of entropy. Such low entropy enables the attacker to easily brute force the negotiated encryption keys, decrypt the eavesdropped ciphertext, and inject valid encrypted messages (in real-time). The attack is stealthy because the encryption key negotiation is transparent to the Bluetooth users. The attack is standard-compliant because all Bluetooth BR/EDR versions require to support encryption keys with entropy between 1 and 16 bytes and do not secure the key negotiation protocol. As a result, the attacker completely breaks Bluetooth BR/EDR security without being detected. We call our attack Key Negotiation Of Bluetooth (KNOB) attack. The attack targets the firmware of the Bluetooth chip because the firmware (Bluetooth controller) implements all the security features of Bluetooth BR/EDR. As a standard-compliant attack, it is expected to be effective on any firmware that follows the specification and on any device using a vulnerable firmware. We describe how to perform the KNOB attack, and we implement it. We evaluate our implementation on more than 14 Bluetooth chips from popular manufacturers such as Intel, Broadcom, Apple, and Qualcomm. Our results demonstrate that all tested devices are vulnerable to the KNOB attack. We discuss countermeasures to fix the Bluetooth specification and its implementation.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/antonioli](https://www.usenix.org/conference/usenixsecurity19/presentation/antonioli)
- **PDF:** [https://www.usenix.org/system/files/sec19-antonioli.pdf](https://www.usenix.org/system/files/sec19-antonioli.pdf)
## From IP ID to Device ID and KASLR Bypass.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#from-ip-id-to-device-id-and-kaslr-bypass)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#from-ip-id-to-device-id-and-kaslr-bypass)
### Authors
* Amit Klein, Bar Ilan University
* Benny Pinkas, Bar Ilan University
### Abstract
> IP headers include a 16-bit ID field. Our work examines the  generation of this field in Windows (versions 8 and higher), Linux and Android,  and shows that the IP ID field enables remote servers to assign a unique ID to each  device and thus be able to identify subsequent transmissions sent from that device. This identification works across all browsers and over network changes. In modern Linux and Android versions, this field leaks a kernel address, thus we also break KASLR. Our work includes reverse-engineering of the Windows IP ID generation code, and a  cryptanalysis of this code and of the Linux kernel IP ID generation code. It provides practical techniques to partially extract the key used by each of these algorithms, overcoming different implementation issues,  and observing that this key can identify individual devices. We deployed a demo (for Windows) showing that key extraction and machine fingerprinting works in the wild, and tested it from networks around the world.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/klein](https://www.usenix.org/conference/usenixsecurity19/presentation/klein)
- **PDF:** [https://www.usenix.org/system/files/sec19-klein.pdf](https://www.usenix.org/system/files/sec19-klein.pdf)
## When the Signal is in the Noise: Exploiting Diffix's Sticky Noise.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#when-the-signal-is-in-the-noise-exploiting-diffixs-sticky-noise)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#when-the-signal-is-in-the-noise-exploiting-diffixs-sticky-noise)
### Authors
* Andrea Gadotti, Imperial College London
* Florimond Houssiau, Imperial College London
* Luc Rocher, Imperial College London and Université catholique de Louvain
* Benjamin Livshits, Imperial College London
* Yves-Alex, Imperial College London
* re de Montjoye, Imperial College London
### Abstract
> Anonymized data is highly valuable to both businesses and researchers. A large body of research has however shown the strong limits of the de-identification release-and-forget model, where data is anonymized and shared. This has led to the development of privacy-preserving query-based systems. Based on the idea of "sticky noise", Diffix has been recently proposed as a novel query-based mechanism satisfying alone the EU Article 29 Working Party's definition of anonymization. According to its authors, Diffix adds less noise to answers than solutions based on differential privacy while allowing for an unlimited number of queries.This paper presents a new class of noise-exploitation attacks, exploiting the noise added by the system to infer private information about individuals in the dataset. Our first differential attack uses samples extracted from Diffix in a likelihood ratio test to discriminate between two probability distributions. We show that using this attack against a synthetic best-case dataset allows us to infer private information with 89.4% accuracy using only 5 attributes. Our second cloning attack uses dummy conditions that conditionally strongly affect the output of the query depending on the value of the private attribute. Using this attack on four real-world datasets, we show that we can infer private attributes of at least 93% of the users in the dataset with accuracy between 93.3% and 97.1%, issuing a median of 304 queries per user. We show how to optimize this attack, targeting 55.4% of the users and achieving 91.7% accuracy, using a maximum of only 32 queries per user.Our attacks demonstrate that adding data-dependent noise, as done by Diffix, is not sufficient to prevent inference of private attributes. We furthermore argue that Diffix alone fails to satisfy Art. 29 WP's definition of anonymization. We conclude by discussing how non-provable privacy-preserving systems can be combined with fundamental security principles such as defense-in-depth and auditability to build practically useful anonymization systems without relying on differential privacy.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/gadotti](https://www.usenix.org/conference/usenixsecurity19/presentation/gadotti)
- **PDF:** [https://www.usenix.org/system/files/sec19fall_gadotti_prepub.pdf](https://www.usenix.org/system/files/sec19fall_gadotti_prepub.pdf)
## FIRM-AFL: High-Throughput Greybox Fuzzing of IoT Firmware via Augmented Process Emulation.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#firm-afl-high-throughput-greybox-fuzzing-of-iot-firmware-via-augmented-process-emulation)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#firm-afl-high-throughput-greybox-fuzzing-of-iot-firmware-via-augmented-process-emulation)
### Authors
* Yaowen Zheng, Beijing Key Laboratory of IOT Information Security Technology, Institute of Information Engineering, CAS, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Ali Davanian, University of California, Riverside
* Heng Yin, University of California, Riverside
* Chengyu Song, University of California, Riverside
* Hongsong Zhu, Beijing Key Laboratory of IOT Information Security Technology, Institute of Information Engineering, CAS, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Limin Sun, Beijing Key Laboratory of IOT Information Security Technology, Institute of Information Engineering, CAS, China; School of Cyber Security, University of Chinese Academy of Sciences, China
### Abstract
> Cyber attacks against IoT devices are a severe threat. These attacks exploit software vulnerabilities in IoT firmware. Fuzzing is an effective software testing technique for finding these vulnerabilities so they can be patched. In this work, we present FIRM-AFL, the first high-throughput greybox fuzzer for IoT firmware. FIRM-AFL addresses two fundamental problems in IoT fuzzing. First, it addresses compatibility issues by enabling fuzzing for POSIX-compatible firmware that can be emulated in a system emulator. Second, it addresses the performance bottleneck caused by system-mode emulation with a novel technique called augmented process emulation. By integrating system-mode emulation and usermode emulation,  augmented process emulation provides high compatibility as system-mode emulation and high throughput as user-mode emulation. Our evaluation results show that (1)FIRM-AFL is fully functional and capable of finding real world vulnerabilities in IoT programs and (2) the throughput of FIRM-AFL is on average 10 times higher than system-mode emulation based fuzzing; and (3) FIRM-AFL is able to find 1-day vulnerabilities much faster than system-mode emulation based fuzzing, and is able to find 0-day vulnerabilities.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/zheng](https://www.usenix.org/conference/usenixsecurity19/presentation/zheng)
- **PDF:** [https://www.usenix.org/system/files/sec19-zheng_0.pdf](https://www.usenix.org/system/files/sec19-zheng_0.pdf)
## Not Everything is Dark and Gloomy: Power Grid Protections Against IoT Demand Attacks.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#not-everything-is-dark-and-gloomy-power-grid-protections-against-iot-demand-attacks)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#not-everything-is-dark-and-gloomy-power-grid-protections-against-iot-demand-attacks)
### Authors
* Bing Huang, The University of Texas at Austin
* Alvaro A. Cardenas, University of California, Santa Cruz
* Ross Baldick, The University of Texas at Austin
### Abstract
> This paper discusses and characterizes the impacts of Internet of Things (IoT) demand attacks on the secure operation of power transmission grids. Increasingly, Internet connections are available to  devices with high energy consumption such as air conditioners and water heaters. However, these new connections expose the control of new electric loads  to potential manipulation by attackers. In this paper we investigate the impacts of this potential IoT demand manipulation attack on power transmission grids. Our  work has focused on developing a cascading outage analysis (COA) tool to model in detail conditions that can lead to cascading outages in large power grids. In this paper, we apply our tool to  a large  North American regional transmission interconnection system consisting of more than 5,000 buses,   and study how IoT demand attacks can affect the power system assuming that attackers gained full control of a portion of the system demand. To help assess the effects of such cyber attacks, we develop numerical experiments and define different types of IoT demand attacks to study the cascading failures on transmission lines and the interruptions to the system frequency.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/huang](https://www.usenix.org/conference/usenixsecurity19/presentation/huang)
- **PDF:** [https://www.usenix.org/system/files/sec19-huang.pdf](https://www.usenix.org/system/files/sec19-huang.pdf)
## Discovering and Understanding the Security Hazards in the Interactions between IoT Devices, Mobile Apps, and Clouds on Smart Home Platforms.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#discovering-and-understanding-the-security-hazards-in-the-interactions-between-iot-devices-mobile-apps-and-clouds-on-smart-home-platforms)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#discovering-and-understanding-the-security-hazards-in-the-interactions-between-iot-devices-mobile-apps-and-clouds-on-smart-home-platforms)
### Authors
* Wei Zhou, National Computer Network Intrusion Protection Center, University of Chinese Academy of Sciences
* Yan Jia, School of Cyber Engineering, Xidian University; National Computer Network Intrusion Protection Center, University of Chinese Academy of Sciences
* Yao Yao, School of Cyber Engineering, Xidian University; National Computer Network Intrusion Protection Center, University of Chinese Academy of Sciences
* Lipeng Zhu, School of Cyber Engineering, Xidian University; National Computer Network Intrusion Protection Center, University of Chinese Academy of Sciences
* Le Guan, Department of Computer Science, University of Georgia
* Yuhang Mao, School of Cyber Engineering, Xidian University; National Computer Network Intrusion Protection Center, University of Chinese Academy of Sciences
* Peng Liu, College of Information Sciences and Technology, Pennsylvania State University
* Yuqing Zhang, National Computer Network Intrusion Protection Center, University of Chinese Academy of Sciences; School of Cyber Engineering, Xidian University; State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences
### Abstract
> A smart home connects tens of home devices to the Internet, where an IoT cloud runs various home automation applications. While bringing unprecedented convenience and accessibility, it also introduces various security hazards to users. Prior research studied smart home security from several aspects. However, we found that the complexity of the interactions among the participating entities (i.e., devices, IoT clouds, and mobile apps) has not yet been systematically investigated. In this work, we conducted an in-depth analysis of five widely-used smart home platforms. Combining firmware analysis, network traffic interception, and blackbox testing, we reverse-engineered the details of the interactions among the participating entities. Based on the details, we inferred three legitimate state transition diagrams for the three entities, respectively. Using these state machines as a reference model, we identified a set of unexpected state transitions. To confirm and trigger the unexpected state transitions, we implemented a set of phantom devices to mimic a real device. By instructing the phantom devices to intervene in the normal entity-entity interactions, we have discovered several new vulnerabilities and a spectrum of attacks against real-world smart home platforms.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/zhou](https://www.usenix.org/conference/usenixsecurity19/presentation/zhou)
- **PDF:** [https://www.usenix.org/system/files/sec19-zhou.pdf](https://www.usenix.org/system/files/sec19-zhou.pdf)
## Looking from the Mirror: Evaluating IoT Device Security through Mobile Companion Apps.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#looking-from-the-mirror-evaluating-iot-device-security-through-mobile-companion-apps)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#looking-from-the-mirror-evaluating-iot-device-security-through-mobile-companion-apps)
### Authors
* Xueqiang Wang, Indiana University Bloomington
* Yuqiong Sun, Symantec Research Labs
* Susanta N, Symantec Research Labs
* a, Symantec Research Labs
* XiaoFeng Wang, Indiana University Bloomington
### Abstract
> Smart home IoT devices have increasingly become a favorite target for the cybercriminals due to their weak security designs. To identify these vulnerable devices, existing approaches rely on the analysis of either real devices or their firmware images. These approaches, unfortunately, are difficult to scale in the highly fragmented IoT market due to the unavailability of firmware images and the high cost involved in acquiring real-world devices for security analysis.In this paper, we present a platform that accelerates vulnerable device discovery and analysis, without requiring the presence of actual devices or firmware. Our approach is based on two key observations: First, IoT devices tend to reuse and customize others’ components (e.g., software, hardware, protocol, and services), so vulnerabilities found in one device are often present in others. Second, reused components can be indirectly inferred from the mobile companion apps of the devices; so a cross analysis of mobile companion apps may allow us to approximate the similarity between devices. Using a suite of program analysis techniques, our platform analyzes mobile companion apps of smart home IoT devices on market and automatically discovers potentially vulnerable ones, allowing us to perform a large-scale analysis involving over 4,700 devices. Our study brings to light the sharing of vulnerable components across the smart home IoT devices (e.g., shared vulnerable protocol, backend services, device rebranding), and leads to the discovery of 324 devices from 73 different vendors that are likely to be vulnerable to a set of security issues.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/wang-xueqiang](https://www.usenix.org/conference/usenixsecurity19/presentation/wang-xueqiang)
- **PDF:** [https://www.usenix.org/system/files/sec19-wang-xueqiang_0.pdf](https://www.usenix.org/system/files/sec19-wang-xueqiang_0.pdf)
## All Things Considered: An Analysis of IoT Devices on Home Networks.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#all-things-considered-an-analysis-of-iot-devices-on-home-networks)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#all-things-considered-an-analysis-of-iot-devices-on-home-networks)
### Authors
* Deepak Kumar, University of Illinois at Urbana-Champaign
* Kelly Shen, Stanford University
* Benton Case, Stanford University
* Deepali Garg, Avast Software s.r.o.
* Galina Alperovich, Avast Software s.r.o.
* Dmitry Kuznetsov, Avast Software s.r.o.
* Rajarshi Gupta, Avast Software s.r.o.
* Zakir Durumeric, Stanford University
### Abstract
> In this paper, we provide the first large-scale empirical analysis of IoT devices in real-world homes by leveraging data collected from user-initiated network scans of 83M devices in 16M households. We find that IoT adoption is  widespread: on several continents, more than half of households already have at least one IoT device. Device types and manufacturer popularity vary dramatically across regions. For example, while nearly half of North American homes have an Internet-connected television or streaming device, less than three percent do in South Asia where the majority of devices are surveillance cameras. We investigate the security posture of devices, detailing their open services, weak default credentials, and vulnerability to known attacks. Device security similarly varies geographically, even for specific manufacturers. For example, while less than 17% of TP-Link home routers in North America have guessable passwords, nearly half do in Eastern Europe and Central Asia. We argue that IoT devices are here, but for most homes, the types of devices adopted are not the ones actively discussed. We hope that by shedding light on this complex ecosystem, we help the security community develop solutions that are applicable to today's homes.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/kumar-deepak](https://www.usenix.org/conference/usenixsecurity19/presentation/kumar-deepak)
- **PDF:** [https://www.usenix.org/system/files/sec19-kumar-deepak_0.pdf](https://www.usenix.org/system/files/sec19-kumar-deepak_0.pdf)
## KEPLER: Facilitating Control-flow Hijacking Primitive Evaluation for Linux Kernel Vulnerabilities.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#kepler-facilitating-control-flow-hijacking-primitive-evaluation-for-linux-kernel-vulnerabilities)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#kepler-facilitating-control-flow-hijacking-primitive-evaluation-for-linux-kernel-vulnerabilities)
### Authors
* Wei Wu, Institute of Information Engineering, Chinese Academy of Sciences; Pennsylvania State University; School of Cybersecurity, University of Chinese Academy of Sciences
* Yueqi Chen, Pennsylvania State University
* Xinyu Xing, Pennsylvania State University
* Wei Zou, Institute of Information Engineering, Chinese Academy of Sciences; School of Cybersecurity, University of Chinese Academy of Sciences
### Abstract
> Automatic exploit generation is a challenging problem. A challenging part of the task is to connect an identified exploitable state (exploit primitive) to triggering execution of code-reuse (e.g., ROP) payload. A control-flow hijacking primitive is one of the most common capabilities for exploitation. However, due to the challenges of widely deployed exploit mitigations, pitfalls along an exploit path, and ill-suited primitives, it is difficult to even manually craft an exploit with a control-flow hijacking primitive for an off-the-shelf modern Linux kernel. We propose KEPLER to facilitate exploit generation by automatically generating a “single-shot” exploitation chain. KEPLER accepts as input a control-flow hijacking primitive and bootstraps any kernel ROP payload by symbolically stitching an exploitation chain taking advantage of prevalent kernel coding style and corresponding gadgets. Comparisons with previous automatic exploit generation techniques and previous kernel exploit techniques show KEPLER effectively facilitates evaluation of control-flow hijacking primitives in the Linux kernel.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/wu-wei](https://www.usenix.org/conference/usenixsecurity19/presentation/wu-wei)
- **PDF:** [https://www.usenix.org/system/files/sec19-wu-wei.pdf](https://www.usenix.org/system/files/sec19-wu-wei.pdf)
## PeX: A Permission Check Analysis Framework for Linux Kernel.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#pex-a-permission-check-analysis-framework-for-linux-kernel)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#pex-a-permission-check-analysis-framework-for-linux-kernel)
### Authors
* Tong Zhang, Virginia Tech
* Wenbo Shen, Zhejiang University
* Dongyoon Lee, Stony Brook University
* Changhee Jung, Purdue University
* Ahmed M. Azab, Samsung Research America
* Ruowen Wang, Samsung Research America
### Abstract
> Permission checks play an essential role in operating system security by providing access control to privileged functionalities. However, it is particularly challenging for kernel developers to correctly apply new permission checks and to scalably verify the soundness of existing checks due to the large codebase and complexity of the kernel. In fact, Linux kernel contains millions of lines of code with hundreds of permission checks, and even worse its complexity is fast-growing. This paper presents PeX, a static Permission check error detector for LinuX, which takes as input a kernel source code and reports any missing, inconsistent, and redundant permission checks. PeX uses KIRIN (Kernel InteRface based In-direct call aNalysis), a novel, precise, and scalable indirect call analysis technique, leveraging the common programming paradigm used in kernel abstraction interfaces. Over the inter-procedural control flow graph built by KIRIN, PeX automatically identifies all permission checks and infers the mappings between permission checks and privileged functions. For each privileged function, PeX examines all possible paths to the function to check if necessary permission checks are correctly enforced before it is called. We evaluated PeX on the latest stable Linux kernel v4.18.5for three types of permission checks: Discretionary AccessControls (DAC), Capabilities, and Linux Security Modules(LSM). PeX reported 36 new permission check errors, 14 of which have been confirmed by the kernel developers.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/zhang-tong](https://www.usenix.org/conference/usenixsecurity19/presentation/zhang-tong)
- **PDF:** [https://www.usenix.org/system/files/sec19-zhang-tong.pdf](https://www.usenix.org/system/files/sec19-zhang-tong.pdf)
## ERIM: Secure, Efficient In-process Isolation with Protection Keys (MPK).
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#erim-secure-efficient-in-process-isolation-with-protection-keys-mpk)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#erim-secure-efficient-in-process-isolation-with-protection-keys-mpk)
### Authors
* Anjo Vahldiek-Oberwagner, Max Planck Institute for Software Systems, Saarland Informatics Campus
* Eslam Elnikety, Max Planck Institute for Software Systems, Saarland Informatics Campus
* Nuno O. Duarte, Max Planck Institute for Software Systems, Saarland Informatics Campus
* Michael Sammler, Max Planck Institute for Software Systems, Saarland Informatics Campus
* Peter Druschel, Max Planck Institute for Software Systems, Saarland Informatics Campus
* Deepak Garg, Max Planck Institute for Software Systems, Saarland Informatics Campus
### Abstract
> Isolating sensitive state and data can increase the security and robustness of many applications.  Examples include protecting cryptographic keys against exploits like OpenSSL's Heartbleed bug or protecting a language runtime from native libraries written in unsafe languages. When runtime references across isolation boundaries occur relatively infrequently, then conventional page-based hardware isolation can be used, because the cost of kernel- or hypervisor-mediated domain switching is tolerable. However, some applications, such as the isolation of cryptographic session keys in network-facing services, require very frequent domain switching. In such applications, the overhead of kernel- or hypervisor-mediated domain switching is prohibitive.In this paper, we present ERIM, a novel technique that provides hardware-enforced isolation with low overhead on x86 CPUs, even at high switching rates (ERIM's measured overhead is less than 1% for 100,000 switches per second).  The key idea is to combine protection keys (MPKs), a feature recently added to x86 that allows protection domain switches in userspace, with binary inspection to prevent circumvention. We show that ERIM can be applied with little effort to new and existing applications, doesn't require compiler changes, can run on a stock Linux kernel, and has low runtime overhead even at high domain switching rates.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/vahldiek-oberwagner](https://www.usenix.org/conference/usenixsecurity19/presentation/vahldiek-oberwagner)
- **PDF:** [https://www.usenix.org/system/files/sec19-vahldiek-oberwagner_0.pdf](https://www.usenix.org/system/files/sec19-vahldiek-oberwagner_0.pdf)
## SafeHidden: An Efficient and Secure Information Hiding Technique Using Re-randomization.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#safehidden-an-efficient-and-secure-information-hiding-technique-using-re-randomization)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#safehidden-an-efficient-and-secure-information-hiding-technique-using-re-randomization)
### Authors
* Zhe Wang, State Key Laboratory of Computer Architecture, Institute of Computing Technology, Chinese Academy of Sciences, University of Chinese Academy of Sciences
* Chenggang Wu, State Key Laboratory of Computer Architecture, Institute of Computing Technology, Chinese Academy of Sciences, University of Chinese Academy of Sciences
* Yinqian Zhang, The Ohio State University
* Bowen Tang, State Key Laboratory of Computer Architecture, Institute of Computing Technology, Chinese Academy of Sciences, University of Chinese Academy of Sciences
* Pen-Chung Yew, University of Minnesota at Twin-Cities
* Mengyao Xie, State Key Laboratory of Computer Architecture, Institute of Computing Technology, Chinese Academy of Sciences, University of Chinese Academy of Sciences
* Yuanming Lai, State Key Laboratory of Computer Architecture, Institute of Computing Technology, Chinese Academy of Sciences, University of Chinese Academy of Sciences
* Yan Kang, State Key Laboratory of Computer Architecture, Institute of Computing Technology, Chinese Academy of Sciences, University of Chinese Academy of Sciences
* Yueqiang Cheng, Baidu USA
* Zhiping Shi, The Capital Normal University
### Abstract
> Information hiding (IH) is an important building block for many defenses against code reuse attacks, such as code-pointer integrity (CPI), control-flow integrity (CFI) and fine-grained code (re-)randomization, because of its effectiveness and performance. It employs randomization to probabilistically ''hide'' sensitive memory areas, called safe areas, from attackers and ensures their addresses are not leaked by any pointers directly. These defenses used safe areas to protect their critical data, such as jump targets and randomization secrets. However, recent works have shown that IH is vulnerable to various attacks. In this paper, we propose a new IH technique called SafeHidden. It continuously re-randomizes the locations of safe areas and thus prevents the attackers from probing and inferring the memory layout to find its location. A new thread-private memory mechanism is proposed to isolate the thread-local safe areas and prevent adversaries from reducing the randomization entropy. It also randomizes the safe areas after the TLB misses to prevent attackers from inferring the address of safe areas using cache side-channels. Existing IH-based defenses can utilize SafeHidden directly without any change. Our experiments show that SafeHidden not only prevents existing attacks effectively but also incurs low performance overhead.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/wang](https://www.usenix.org/conference/usenixsecurity19/presentation/wang)
- **PDF:** [https://www.usenix.org/system/files/sec19-wang-zhe.pdf](https://www.usenix.org/system/files/sec19-wang-zhe.pdf)
## Exploiting Unprotected I/O Operations in AMD's Secure Encrypted Virtualization.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#exploiting-unprotected-i-o-operations-in-amds-secure-encrypted-virtualization)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#exploiting-unprotected-i-o-operations-in-amds-secure-encrypted-virtualization)
### Authors
* Mengyuan Li, The Ohio State University
* Yinqian Zhang, The Ohio State University
* Zhiqiang Lin, The Ohio State University
* Yan Solihin, University of Central Florida
### Abstract
> AMD's Secure Encrypted Virtualization (SEV) is an emerging technology to secure virtual machines (VM) even in the presence of malicious hypervisors. However, the lack of trust in the privileged software also introduces an assortment of new attack vectors to SEV-enabled VMs that were mostly unexplored in the literature. This paper studies the insecurity of SEV from the perspective of the unprotected I/O operations in the SEV-enabled VMs. The results are alerting:  not only have we discovered attacks that breach the confidentiality and integrity of these I/O operations---which we find very difficult to mitigate by existing approaches---but more significantly we demonstrate the construction of two attack primitives against SEV's memory encryption schemes, namely a memory decryption oracle and a memory encryption oracle, which enables an adversary to decrypt and encrypt arbitrary messages using the memory encryption keys of the VMs. We evaluate the proposed attacks and discuss potential solutions to the underlying problems.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/li-mengyuan](https://www.usenix.org/conference/usenixsecurity19/presentation/li-mengyuan)
- **PDF:** [https://www.usenix.org/system/files/sec19-li-mengyuan_0.pdf](https://www.usenix.org/system/files/sec19-li-mengyuan_0.pdf)
## Detecting and Characterizing Lateral Phishing at Scale.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#detecting-and-characterizing-lateral-phishing-at-scale)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#detecting-and-characterizing-lateral-phishing-at-scale)
### Authors
* Grant Ho, UC Berkeley and Barracuda Networks
* Asaf Cidon, Barracuda Networks and Columbia University
* Lior Gavish, Barracuda Networks
* Marco Schweighauser, Barracuda Networks
* Vern Paxson, UC Berkeley and ICSI
* Stefan Savage, UC San Diego
* Geoffrey M. Voelker, UC San Diego
* David Wagner, UC Berkeley
### Abstract
> We present the first large-scale characterization of lateral phishing attacks, based on a dataset of 113 million employee-sent emails from 92 enterprise organizations. In a lateral phishing attack, adversaries leverage a compromised enterprise account to send phishing emails to other users, benefitting from both the implicit trust and the information in the hijacked user’s account. We develop a classifier that finds hundreds of real-world lateral phishing emails, while generating under four false positives per every one-million employee-sent emails. Drawing on the attacks we detect, as well as a corpus of user-reported incidents, we quantify the scale of lateral phishing, identify several thematic content and recipient targeting strategies that attackers follow, illuminate two types of sophisticated behaviors that attackers exhibit, and estimate the success rate of these attacks. Collectively, these results expand our mental models of the ‘enterprise attacker’ and shed light on the current state of enterprise phishing attacks.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/ho](https://www.usenix.org/conference/usenixsecurity19/presentation/ho)
- **PDF:** [https://www.usenix.org/system/files/sec19-ho.pdf](https://www.usenix.org/system/files/sec19-ho.pdf)
## High Precision Detection of Business Email Compromise.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#high-precision-detection-of-business-email-compromise)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#high-precision-detection-of-business-email-compromise)
### Authors
* Asaf Cidon, Barracuda Networks and Columbia University
* Lior Gavish, Barracuda Networks
* Itay Bleier, Barracuda Networks
* Nadia Korshun, Barracuda Networks
* Marco Schweighauser, Barracuda Networks
* Alexey Tsitkin, Barracuda Networks
### Abstract
> Business email compromise (BEC) and employee impersonation have become one of the most costly cyber-security threats, causing over $12 billion in reported losses. Impersonation emails take several forms: for example, some ask for a wire transfer to the attacker’s account, while others lead the recipient to following a link, which compromises their credentials. Email security systems are not effective in detecting these attacks, because the attacks do not contain a clearly malicious payload, and are personalized to the recipient. We present BEC-Guard, a detector used at Barracuda Networks that prevents business email compromise attacks in real-time using supervised learning. BEC-Guard has been in production since July 2017, and is part of the Barracuda Sentinel email security product. BEC-Guard detects attacks by relying on statistics about the historical email patterns that can be accessed via cloud email provider APIs. The two main challenges when designing BEC-Guard are the need to label millions of emails to train its classifiers, and to properly train the classifiers when the occurrence of employee impersonation emails is very rare, which can bias the classification. Our key insight is to split the classification problem into two parts, one analyzing the header of the email, and the second applying natural language processing to detect phrases associated with BEC or suspicious links in the email body. BEC-Guard utilizes the public APIs of cloud email providers both to automatically learn the historical communication patterns of each organization, and to quarantine emails in real-time. We evaluated BEC-Guard on a commercial dataset containing more than 4,000 attacks, and show it achieves a precision of 98.2% and a false positive rate of less than one in five million emails.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/cidon](https://www.usenix.org/conference/usenixsecurity19/presentation/cidon)
- **PDF:** [https://www.usenix.org/system/files/sec19-cidon.pdf](https://www.usenix.org/system/files/sec19-cidon.pdf)
## Cognitive Triaging of Phishing Attacks.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#cognitive-triaging-of-phishing-attacks)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#cognitive-triaging-of-phishing-attacks)
### Authors
* Amber van der Heijden, Eindhoven University of Technology
* Luca Allodi, Eindhoven University of Technology
### Abstract
> In this paper we employ quantitative measurements of cognitive vulnerability triggers in phishing emails to predict the degree of success of an attack. To achieve this we rely on the cognitive psychology literature and develop an automated and fully quantitative method based on machine learning and econometrics to construct a triaging mechanism built around the cognitive features of a phishing email; we showcase our approach relying on data from the anti-phishing division of a large financial organization in Europe. Our evaluation shows empirically that an effective triaging mechanism for phishing success can be put in place by response teams to effectively prioritize remediation efforts (e.g. domain takedowns), by first acting on those attacks that are more likely to collect high response rates from potential victims.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/van-der-heijden](https://www.usenix.org/conference/usenixsecurity19/presentation/van-der-heijden)
- **PDF:** [https://www.usenix.org/system/files/sec19-van_der_heijden.pdf](https://www.usenix.org/system/files/sec19-van_der_heijden.pdf)
## Users Really Do Answer Telephone Scams.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#users-really-do-answer-telephone-scams)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#users-really-do-answer-telephone-scams)
### Authors
* Huahong Tu, University of Maryland
* Adam Doupé, Arizona State University
* Ziming Zhao, Rochester Institute of Technology
* Gail-Joon Ahn, Arizona State University and Samsung Research
### Abstract
> As telephone scams become increasingly prevalent, it is crucial to understand what causes recipients to fall victim to these scams. Armed with this knowledge, effective countermeasures can be developed to challenge the key foundations of successful telephone phishing attacks.In this paper, we present the methodology, design, execution, results, and evaluation of an ethical telephone phishing scam. The study performed 10 telephone phishing experiments on 3,000 university participants without prior awareness over the course of a workweek. Overall, we were able to identify at least one key factor---spoofed Caller ID---that had a significant effect in tricking the victims into revealing their Social Security number.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/tu](https://www.usenix.org/conference/usenixsecurity19/presentation/tu)
- **PDF:** [https://www.usenix.org/system/files/sec19-tu.pdf](https://www.usenix.org/system/files/sec19-tu.pdf)
## Platforms in Everything: Analyzing Ground-Truth Data on the Anatomy and Economics of Bullet-Proof Hosting.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#platforms-in-everything-analyzing-ground-truth-data-on-the-anatomy-and-economics-of-bullet-proof-hosting)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#platforms-in-everything-analyzing-ground-truth-data-on-the-anatomy-and-economics-of-bullet-proof-hosting)
### Authors
* Arman Noroozian, TU Delft
* Jan Koenders, Dutch National High-Tech Crime Unit
* Eelco van Veldhuizen, Dutch National High-Tech Crime Unit
* Carlos H. Ganan, TU Delft
* Sumayah Alrwais, King Saud University and International Computer Science Institute
* Damon McCoy, New York University
* Michel van Eeten, TU Delft
### Abstract
> This paper presents the first empirical study based on ground-truth data of a major Bullet-Proof Hosting (BPH) provider, a company called Maxided. BPH allows miscreants to host criminal activities in support of various cybercrime business models such as phishing, botnets, DDoS, spam, and counterfeit pharmaceutical websites. Maxided was legally taken down by law enforcement and its backend servers were seized. We analyze data extracted from its backend databases and connect it to various external data sources to characterize Maxided's business model, supply chain, customers and finances. We reason about what the ``inside'' view reveals about potential chokepoints for disrupting BPH providers.  We demonstrate the BPH landscape to have further shifted from agile resellers towards marketplace platforms with an oversupply of resources originating from hundreds of legitimate upstream hosting providers. We find the BPH provider to have few choke points in the supply chain amendable to intervention, though profit margins are very slim, so even a marginal increase in operating costs might already have repercussions that render the business unsustainable. The other intervention option would be to take down the platform itself.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/noroozian](https://www.usenix.org/conference/usenixsecurity19/presentation/noroozian)
- **PDF:** [https://www.usenix.org/system/files/sec19-noroozian.pdf](https://www.usenix.org/system/files/sec19-noroozian.pdf)
## Protecting Cloud Virtual Machines from Hypervisor and Host Operating System Exploits.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#protecting-cloud-virtual-machines-from-hypervisor-and-host-operating-system-exploits)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#protecting-cloud-virtual-machines-from-hypervisor-and-host-operating-system-exploits)
### Authors
* Shih-Wei Li, Columbia University
* John S. Koh, Columbia University
* Jason Nieh, Columbia University
### Abstract
> Hypervisors are widely deployed by cloud computing providers to support virtual machines, but their growing complexity poses a security risk as large codebases contain many vulnerabilities. We have created HypSec, a new hypervisor design for retrofitting an existing commodity hypervisor using microkernel principles to reduce its trusted computing base while protecting the confidentiality and integrity of virtual machines. HypSec partitions the hypervisor into an untrusted host that performs most complex hypervisor functionality without access to virtual machine data, and a trusted core that provides access control to virtual machine data and performs basic CPU and memory virtualization. Hardware virtualization support is used to isolate and protect the trusted core and execute it at a higher privilege level so it can mediate virtual machine exceptions and protect VM data in CPU and memory. HypSec takes an end-to-end approach to securing I/O to simplify its design, with applications increasingly using secure network connections in the cloud. We have used HypSec to retrofit KVM, showing how our approach can support a widely-used full-featured hypervisor integrated with a commodity operating system. The implementation has a trusted computing base of only a few thousand lines of code, many orders of magnitude less than KVM. We show that HypSec protects the confidentiality and integrity of virtual machines running unmodified guest operating systems while only incurring modest performance overhead for real application workloads.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/li-shih-wei](https://www.usenix.org/conference/usenixsecurity19/presentation/li-shih-wei)
- **PDF:** [https://www.usenix.org/system/files/sec19-li-shih-wei.pdf](https://www.usenix.org/system/files/sec19-li-shih-wei.pdf)
## WAVE: A Decentralized Authorization Framework with Transitive Delegation.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#wave-a-decentralized-authorization-framework-with-transitive-delegation)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#wave-a-decentralized-authorization-framework-with-transitive-delegation)
### Authors
* Michael P Andersen, University of California, Berkeley
* Sam Kumar, University of California, Berkeley
* Moustafa AbdelBaky, University of California, Berkeley
* Gabe Fierro, University of California, Berkeley
* John Kolb, University of California, Berkeley
* Hyung-Sin Kim, University of California, Berkeley
* David E. Culler, University of California, Berkeley
* Raluca Ada Popa, University of California, Berkeley
### Abstract
> Most deployed authorization systems rely on a central trusted service whose compromise can lead to the breach of millions of user accounts and permissions. We present WAVE, an authorization framework offering decentralized trust: no central services can modify or see  permissions and any participant can delegate a portion of their permissions autonomously. To achieve this goal, WAVE adopts an expressive authorization model, enforces it cryptographically, protects permissions via a novel encryption protocol while enabling discovery of permissions, and stores them in an untrusted scalable storage solution. WAVE provides competitive performance to traditional authorization systems relying on central trust. It is an  open-source artifact and has been used for two years for controlling 800 IoT devices.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/andersen](https://www.usenix.org/conference/usenixsecurity19/presentation/andersen)
- **PDF:** [https://www.usenix.org/system/files/sec19-andersen.pdf](https://www.usenix.org/system/files/sec19-andersen.pdf)
## in-toto: Providing farm-to-table guarantees for bits and bytes.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#in-toto-providing-farm-to-table-guarantees-for-bits-and-bytes)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#in-toto-providing-farm-to-table-guarantees-for-bits-and-bytes)
### Authors
* Santiago Torres-Arias, New York University
* Hammad Afzali, New Jersey Institute of Technology
* Trishank Karthik Kuppusamy, Datadog
* Reza Curtmola, New Jersey Institute of Technology
* Justin Cappos, New York University
### Abstract
> The software development process is quite complex and involves a number of independent actors. Developers check source code into a version control system, the code is compiled into software at a build farm, and CI/CD systems run multiple tests to ensure the software’s quality among a myriad of other operations. Finally, the software is packaged for distribution into a delivered product, to be consumed by end users. An attacker that is able to compromise any single step in the process can maliciously modify the software and harm any of the software’s users.To address these issues, we designed in-toto, a framework that cryptographically ensures the integrity of the software supply chain. in-toto grants the end user the ability to verify the software’s supply chain from the project’s inception to its deployment. We demonstrate in-toto’s effectiveness on 30 software supply chain compromises that affected hundreds of million of users and showcase in-toto’s usage over cloud-native, hybrid-cloud and cloud-agnostic applications. in-toto is integrated into products and open source projects that are used by millions of people daily.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/torres-arias](https://www.usenix.org/conference/usenixsecurity19/presentation/torres-arias)
- **PDF:** [https://www.usenix.org/system/files/sec19-torres-arias.pdf](https://www.usenix.org/system/files/sec19-torres-arias.pdf)
## IODINE: Verifying Constant-Time Execution of Hardware.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#iodine-verifying-constant-time-execution-of-hardware)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#iodine-verifying-constant-time-execution-of-hardware)
### Authors
* Klaus v. Gleissenthall, University of California, San Diego
* Rami Gökhan Kıcı, University of California, San Diego
* Deian Stefan, University of California, San Diego
* Ranjit Jhala, University of California, San Diego
### Abstract
> To be secure, cryptographic algorithms crucially rely on the underlying hardware to avoid inadvertent leakage of secrets through timing side channels. Unfortunately, such timing channels are ubiquitous in modern hardware, due to its labyrinthine fast-paths and optimizations. A promising way to avoid timing vulnerabilities is to devise – and verify – conditions under which a hardware design is free of timing variability, i.e., executes in constant-time. In this paper, we present IODINE: a clock-precise, constant-time approach to eliminating timing side channels in hardware. IODINE succeeds in verifying various open source hardware designs in seconds and with little developer effort. IODINE also discovered two constant-time violations: one in a floating-point unit and another one in an RSA encryption module.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/von-gleissenthall](https://www.usenix.org/conference/usenixsecurity19/presentation/von-gleissenthall)
- **PDF:** [https://www.usenix.org/system/files/sec19-gleissenthall.pdf](https://www.usenix.org/system/files/sec19-gleissenthall.pdf)
## VRASED: A Verified Hardware/Software Co-Design for Remote Attestation.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#vrased-a-verified-hardware-software-co-design-for-remote-attestation)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#vrased-a-verified-hardware-software-co-design-for-remote-attestation)
### Authors
* Ivan De Oliveira Nunes, University of California, Irvine
* Karim Eldefrawy, SRI International
* Norrathep Rattanavipanon, University of California, Irvine
* Michael Steiner, Intel
* Gene Tsudik, University of California, Irvine
### Abstract
> Remote Attestation (RA) is a distinct security service that allows a trusted verifier ( Vrf) to measure the software state of an untrusted remote prover ( Prv). If correctly implemented, RA allows Vrf to remotely detect if Prv is in an illegal or compromised state. Although several RA approaches have been explored (including hardware-based, software-based, and hybrid) and many concrete methods have been proposed, comparatively little attention has been devoted to formal verification. In particular, thus far, no RA designs and no implementations have been formally verified with respect to claimed security properties.In this work, we take the first step towards formal verification of RA by designing and verifying an architecture called VRASED: Verifiable Remote Attestation for Simple Embedded Devices. VRASED instantiates a hybrid (HW/SW) RA co-design aimed at low-end embedded systems, e.g., simple IoT devices. VRASED provides a level of security comparable to HW-based approaches, while relying on SW to minimize additional HW costs. Since security properties must be jointly guaranteed by HW and SW, verification is a challenging task, which has never been attempted before in the context of RA. We believe that VRASED is the first formally verified RA scheme. To the best of our knowledge, it is also the first formal verification of a HW/SW implementation of any security service. To demonstrate VRASED’s practicality and low overhead, we instantiate and evaluate it on a commodity platform (TI MSP430). VRASED was deployed using the Basys3 Artix-7 FPGA and its implementation is publicly available.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/de-oliveira-nunes](https://www.usenix.org/conference/usenixsecurity19/presentation/de-oliveira-nunes)
- **PDF:** [https://www.usenix.org/system/files/sec19-nunes.pdf](https://www.usenix.org/system/files/sec19-nunes.pdf)
## Mobile Private Contact Discovery at Scale.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#mobile-private-contact-discovery-at-scale)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#mobile-private-contact-discovery-at-scale)
### Authors
* Daniel Kales, Graz University of Technology
* Christian Rechberger, Graz University of Technology
* Thomas Schneider, TU Darmstadt
* Matthias Senker, TU Darmstadt
* Christian Weinert, TU Darmstadt
### Abstract
> Mobile messengers like WhatsApp perform contact discovery by uploading the user's entire address book to the service provider. This allows the service provider to determine which of the user's contacts are registered to the messaging service. However, such a procedure poses significant privacy risks and legal challenges. As we find, even messengers with privacy in mind currently do not deploy proper mechanisms to perform contact discovery privately. The most promising approaches addressing this problem revolve around private set intersection (PSI) protocols. Unfortunately, even in a weak security model where clients are assumed to follow the protocol honestly, previous protocols and implementations turned out to be far from practical when used at scale. This is due to their high computation and/or communication complexity as well as lacking optimization for mobile devices. In our work, we remove most obstacles for large-scale global deployment by significantly improving two promising protocols by Kiss et al. (PoPETS'17) while also allowing for malicious clients. Concretely, we present novel precomputation techniques for correlated oblivious transfers (reducing the online communication by factor 2x), Cuckoo filter compression (with a compression ratio of 70%), as well as 4.3x smaller Cuckoo filter updates. In a protocol performing oblivious PRF evaluations via garbled circuits, we replace AES as the evaluated PRF with a variant of LowMC (Albrecht et al., EUROCRYPT'15) for which we determine optimal parameters, thereby reducing the communication by factor 8.2x. Furthermore, we implement both protocols with security against malicious clients in C/C++ and utilize the ARM Cryptography Extensions available in most recent smartphones. Compared to previous smartphone implementations, this yields a performance improvement of factor 1000x for circuit evaluations. The online phase of our fastest protocol takes only 2.92s measured on a real WiFi connection (6.53s on LTE) to check 1024 client contacts against a large-scale database with 228 entries. As a proof-of-concept, we integrate our protocols in the client application of the open-source messenger Signal.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/kales](https://www.usenix.org/conference/usenixsecurity19/presentation/kales)
- **PDF:** [https://www.usenix.org/system/files/sec19-kales.pdf](https://www.usenix.org/system/files/sec19-kales.pdf)
## EverParse: Verified Secure Zero-Copy Parsers for Authenticated Message Formats.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#everparse-verified-secure-zero-copy-parsers-for-authenticated-message-formats)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#everparse-verified-secure-zero-copy-parsers-for-authenticated-message-formats)
### Authors
* Tahina Ramanan, Microsoft Research
* ro, Microsoft Research
* Antoine Delignat-Lavaud, Microsoft Research
* Cédric Fournet, Microsoft Research
* Nikhil Swamy, Microsoft Research
* Tej Chajed, MIT
* Nadim Kobeissi, Inria Paris
* Jonathan Protzenko, Microsoft Research
### Abstract
> We present EverParse, a framework for generating parsers and serializers from tag-length-value binary message format descriptions. The resulting code is verified to be safe (no overflow, no use after free), correct (parsing is the inverse of serialization) and non-malleable (each message has a unique binary representation). These guarantees underpin the security of cryptographic message authentication, and they enable testing to focus on interoperability and performance issues. EverParse consists of two parts: LowParse, a library of parser combinators and their formal properties written in F*; and QuackyDucky, a compiler from a domain-specific language of RFC message formats down to low-level F* code that calls LowParse.  While LowParse is fully verified, we do not formalize the semantics of the input language and keep QuackyDucky outside our trusted computing base.  Instead, it also outputs a formal message specification, and F* automatically verifies our implementation against this specification. EverParse yields efficient zero-copy implementations, usable both in F* and in C.  We evaluate it in practice by fully implementing the message formats of the Transport Layer Security standard and its extensions (TLS 1.0--1.3, 293 datatypes) and by integrating them into miTLS, an F* implementation of TLS.  We illustrate its generality by implementing the Bitcoin block and transaction formats, and the ASN.1 DER payload of PKCS#1 RSA signatures. We integrate them into C applications and measure their runtime performance, showing significant improvements over prior handwritten libraries.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/delignat-lavaud](https://www.usenix.org/conference/usenixsecurity19/presentation/delignat-lavaud)
- **PDF:** [https://www.usenix.org/system/files/sec19-ramananandro_0.pdf](https://www.usenix.org/system/files/sec19-ramananandro_0.pdf)
## Blind Bernoulli Trials: A Noninteractive Protocol For Hidden-Weight Coin Flips.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#blind-bernoulli-trials-a-noninteractive-protocol-for-hidden-weight-coin-flips)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#blind-bernoulli-trials-a-noninteractive-protocol-for-hidden-weight-coin-flips)
### Authors
* R. Joseph Connor, University of Tennessee
* Max Schuchard, University of Tennessee
### Abstract
> We introduce the concept of a "Blind Bernoulli Trial," a noninteractive protocol that allows a set of remote, disconnected users to individually compute one random bit each with probability p defined by the sender, such that no receiver learns any more information about p than strictly necessary. We motivate the problem by discussing several possible applications in secure distributed systems. We then formally define the problem in terms of correctness and security definitions and explore possible solutions using existing cryptographic primitives. We prove the security of an efficient solution in the standard model. Finally, we implement the solution and give performance results that show it is practical with current hardware.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/connor](https://www.usenix.org/conference/usenixsecurity19/presentation/connor)
- **PDF:** [https://www.usenix.org/system/files/sec19-connor.pdf](https://www.usenix.org/system/files/sec19-connor.pdf)
## XONN: XNOR-based Oblivious Deep Neural Network Inference.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#xonn-xnor-based-oblivious-deep-neural-network-inference)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#xonn-xnor-based-oblivious-deep-neural-network-inference)
### Authors
* M. Sadegh Riazi, UC San Diego
* Mohammad Samragh, UC San Diego
* Hao Chen, Microsoft Research
* Kim Laine, Microsoft Research
* Kristin Lauter, Microsoft Research
* Farinaz Koushanfar, UC San Diego
### Abstract
> Advancements in deep learning enable cloud servers to provide inference-as-a-service for clients. In this scenario, clients send their raw data to the server to run the deep learning model and send back the results. One standing challenge in this setting is to ensure the privacy of the clients' sensitive data. Oblivious inference is the task of running the neural network on the client's input without disclosing the input or the result to the server. This paper introduces XONN (pronounced /ZAn/), a novel end-to-end framework based on Yao's Garbled Circuits (GC) protocol, that provides a paradigm shift in the conceptual and practical realization of oblivious inference. In XONN, the costly matrix-multiplication operations of the deep learning model are replaced with XNOR operations that are essentially free in GC. We further provide a novel algorithm that customizes the neural network such that the runtime of the GC protocol is minimized without sacrificing the inference accuracy. We design a user-friendly high-level API for XONN, allowing expression of the deep learning model architecture in an unprecedented level of abstraction. We further provide a compiler to translate the model description from high-level Python (i.e., Keras) to that of XONN. Extensive proof-of-concept evaluation on various neural network architectures demonstrates that XONN outperforms prior art such as Gazelle (USENIX Security'18) by up to 7×, MiniONN (ACM CCS'17) by 93×, and SecureML (IEEE S&P'17) by 37×. State-of-the-art frameworks require one round of interaction between the client and the server for each layer of the neural network, whereas, XONN requires a constant round of interactions for any number of layers in the model. XONN is first to perform oblivious inference on Fitnet architectures with up to 21 layers, suggesting a new level of scalability compared with state-of-the-art. Moreover, we evaluate XONN on four datasets to perform privacy-preserving medical diagnosis. The datasets include breast cancer, diabetes, liver disease, and Malaria.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/riazi](https://www.usenix.org/conference/usenixsecurity19/presentation/riazi)
- **PDF:** [https://www.usenix.org/system/files/sec19fall_riazi_prepub.pdf](https://www.usenix.org/system/files/sec19fall_riazi_prepub.pdf)
## JEDI: Many-to-Many End-to-End Encryption and Key Delegation for IoT.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#jedi-many-to-many-end-to-end-encryption-and-key-delegation-for-iot)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#jedi-many-to-many-end-to-end-encryption-and-key-delegation-for-iot)
### Authors
* Sam Kumar, University of California, Berkeley
* Yuncong Hu, University of California, Berkeley
* Michael P Andersen, University of California, Berkeley
* Raluca Ada Popa, University of California, Berkeley
* David E. Culler, University of California, Berkeley
### Abstract
> As the Internet of Things (IoT) emerges over the next decade, developing secure communication for IoT devices is of paramount importance. Achieving end-to-end encryption for large-scale IoT systems, like smart buildings or smart cities, is challenging because multiple principals typically interact indirectly via intermediaries, meaning that the recipient of a message is not known in advance. This paper proposes JEDI (Joining Encryption and Delegation for IoT), a many-to-many end-to-end encryption protocol for IoT. JEDI encrypts and signs messages end-to-end, while conforming to the decoupled communication model typical of IoT systems. JEDI's keys support expiry and fine-grained access to data, common in IoT. Furthermore, JEDI allows principals to delegate their keys, restricted in expiry or scope, to other principals, thereby granting access to data and managing access control in a scalable, distributed way. Through careful protocol design and implementation, JEDI can run across the spectrum of IoT devices, including ultra low-power deeply embedded sensors severely constrained in CPU, memory, and energy consumption. We apply JEDI to an existing IoT messaging system and demonstrate that its overhead is modest.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/kumar-sam](https://www.usenix.org/conference/usenixsecurity19/presentation/kumar-sam)
- **PDF:** [https://www.usenix.org/system/files/sec19-kumar-sam.pdf](https://www.usenix.org/system/files/sec19-kumar-sam.pdf)
## Birthday, Name and Bifacial-security: Understanding Passwords of Chinese Web Users.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#birthday-name-and-bifacial-security-understanding-passwords-of-chinese-web-users)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#birthday-name-and-bifacial-security-understanding-passwords-of-chinese-web-users)
### Authors
* Ding Wang, Peking University
* Ping Wang, Peking University
* Debiao He, Wuhan University
* Yuan Tian, University of Virginia
### Abstract
> Much attention has been paid to passwords chosen by English speaking users, yet only a few studies have examined how non-English speaking users select passwords. In this paper, we perform an extensive, empirical analysis of 73.1 million real-world Chinese web passwords in comparison with 33.2 million English counterparts. We highlight a number of interesting structural and semantic characteristics in Chinese passwords. We further evaluate the security of these passwords by employing two state-of-the-art cracking techniques. In particular, our cracking results reveal the bifacial-security nature of Chinese passwords. They are weaker against online guessing attacks (i.e., when the allowed guess number is small, 1∼104) than English passwords. But out of the remaining Chinese passwords, they are stronger against offline guessing attacks (i.e., when the guess number is large, >105) than their English counterparts. This reconciles two conflicting claims about the strength of Chinese passwords made by Bonneau (IEEE S&P'12) and Li et al. (Usenix Security'14 and IEEE TIFS'16). At 107 guesses, the success rate of our improved PCFG-based attack against the Chinese datasets is 33.2%~49.8%, indicating that our attack can crack 92% to 188% more passwords than the state of the art. We also discuss the implications of our findings for password policies, strength meters and cracking.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/wang-ding](https://www.usenix.org/conference/usenixsecurity19/presentation/wang-ding)
- **PDF:** [https://www.usenix.org/system/files/sec19-wang-ding.pdf](https://www.usenix.org/system/files/sec19-wang-ding.pdf)
## Protecting accounts from credential stuffing with password breach alerting.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#protecting-accounts-from-credential-stuffing-with-password-breach-alerting)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#protecting-accounts-from-credential-stuffing-with-password-breach-alerting)
### Authors
* Kurt Thomas, Google
* Jennifer Pullman, Google
* Kevin Yeo, Google
* Ananth Raghunathan, Google
* Patrick Gage Kelley, Google
* Luca Invernizzi, Google
* Borbala Benko, Google
* Tadek Pietraszek, Google
* Sarvar Patel, Google
* Dan Boneh, Stanford
* Elie Bursztein, Google
### Abstract
> Protecting accounts from credential stuffing attacks remains burdensome due to an asymmetry of knowledge: attackers have wide-scale access to billions of stolen usernames and passwords, while users and identity providers remain in the dark as to which accounts require remediation. In this paper, we propose a privacy-preserving protocol whereby a client can query a centralized breach repository to determine whether a specific username and password combination is publicly exposed, but without revealing the information queried. Here, a client can be an end user, a password manager, or an identity provider. To demonstrate the feasibility of our protocol, we implement a cloud service that mediates access to over 4 billion credentials found in breaches and a Chrome extension serving as an initial client. Based on anonymous telemetry from nearly 670,000 users and 21 million logins, we find that 1.5% of logins on the web involve breached credentials. By alerting users to this breach status, 26% of our warnings result in users migrating to a new password, at least as strong as the original. Our study illustrates how secure, democratized access to password breach alerting can help mitigate one dimension of account hijacking.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/thomas](https://www.usenix.org/conference/usenixsecurity19/presentation/thomas)
- **PDF:** [https://www.usenix.org/system/files/sec19-thomas.pdf](https://www.usenix.org/system/files/sec19-thomas.pdf)
## Probability Model Transforming Encoders Against Encoding Attacks.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#probability-model-transforming-encoders-against-encoding-attacks)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#probability-model-transforming-encoders-against-encoding-attacks)
### Authors
* Haibo Cheng, Peking University
* Zhixiong Zheng, Peking University
* Wenting Li, Peking University
* Ping Wang, Peking University
* Chao-Hsien Chu, Pennsylvania State University
### Abstract
> Honey encryption (HE) is a novel encryption scheme for resisting brute-force attacks even using low-entropy keys (e.g., passwords). HE introduces a distribution transforming encoder (DTE) to yield plausible-looking decoy messages for incorrect keys. Several HE applications were proposed for specific messages with specially designed probability model transforming encoders (PMTEs), DTEs transformed from probability models which are used to characterize the intricate message distributions.We propose attacks against three typical PMTE schemes. Using a simple machine learning algorithm, we propose a distribution difference attack against genomic data PMTEs, achieving 76.54%--100.00% accuracy in distinguishing real data from decoy one. We then propose a new type of attack---encoding attacks---against two password vault PMTEs, achieving 98.56%--99.52% accuracy. Different from distribution difference attacks, encoding attacks do not require any knowledge (statistics) about the real message distribution.We also introduce a generic conceptual probability model---generative probability model (GPM)---to formalize probability models and design a generic method for transforming an arbitrary GPM to a PMTE. We prove that our PMTEs are information-theoretically indistinguishable from the corresponding GPMs. Accordingly, they can resist encoding attacks. For our PMTEs transformed from existing password vault models, encoding attacks cannot achieve more than 52.56% accuracy, which is slightly better than the randomly guessing attack (50% accuracy).

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/cheng](https://www.usenix.org/conference/usenixsecurity19/presentation/cheng)
- **PDF:** [https://www.usenix.org/system/files/sec19-cheng.pdf](https://www.usenix.org/system/files/sec19-cheng.pdf)
## The Art of The Scam: Demystifying Honeypots in Ethereum Smart Contracts.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#the-art-of-the-scam-demystifying-honeypots-in-ethereum-smart-contracts)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#the-art-of-the-scam-demystifying-honeypots-in-ethereum-smart-contracts)
### Authors
* Christof Ferreira Torres, University of Luxembourg
* Mathis Steichen, University of Luxembourg
* Radu State, University of Luxembourg
### Abstract
> Modern blockchains, such as Ethereum, enable the execution of so-called smart contracts – programs that are executed across a decentralised network of nodes. As smart contracts become more popular and carry more value, they become more of an interesting target for attackers. In the past few years, several smart contracts have been exploited by attackers. However, a new trend towards a more proactive approach seems to be on the rise, where attackers do not search for vulnerable contracts anymore. Instead, they try to lure their victims into traps by deploying seemingly vulnerable contracts that contain hidden traps. This new type of contracts is commonly referred to as honeypots. In this paper, we present the first systematic analysis of honeypot smart contracts, by investigating their prevalence, behaviour and impact on the Ethereum blockchain. We develop a taxonomy of honeypot techniques and use this to build HoneyBadger – a tool that employs symbolic execution and well defined heuristics to expose honeypots. We perform a large-scale analysis on more than 2 million smart contracts and show that our tool not only achieves high precision, but is also highly efficient. We identify 690 honeypot smart contracts as well as 240 victims in the wild, with an accumulated profit of more than $90,000 for the honeypot creators. Our manual validation shows that 87% of the reported contracts are indeed honeypots.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/ferreira](https://www.usenix.org/conference/usenixsecurity19/presentation/ferreira)
- **PDF:** [https://www.usenix.org/system/files/sec19-torres.pdf](https://www.usenix.org/system/files/sec19-torres.pdf)
## The Anatomy of a Cryptocurrency Pump-and-Dump Scheme.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#the-anatomy-of-a-cryptocurrency-pump-and-dump-scheme)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#the-anatomy-of-a-cryptocurrency-pump-and-dump-scheme)
### Authors
* Jiahua Xu, École polytechnique fédérale de Lausanne (EPFL)
* Benjamin Livshits, Imperial College London
### Abstract
> While pump-and-dump schemes have attracted the attention of cryptocurrency observers and regulators alike, this paper represents the first detailed empirical query of pump-and-dump activities in cryptocurrency markets. We present a case study of a recent pump-and-dump event, investigate 412 pump-and-dump activities organized in Telegram channels from June 17, 2018 to February 26, 2019, and discover patterns in crypto-markets associated with pump-and-dump schemes. We then build a model that predicts the pump likelihood of all coins listed in a crypto-exchange prior to a pump. The model exhibits high precision as well as robustness, and can be used to create a simple, yet very effective trading strategy, which we empirically demonstrate can generate a return as high as 60% on small retail investments within a span of two and half months. The study provides a proof of concept for strategic crypto-trading and sheds light on the application of machine learning for crime detection.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/xu-jiahua](https://www.usenix.org/conference/usenixsecurity19/presentation/xu-jiahua)
- **PDF:** [https://www.usenix.org/system/files/sec19-xu-jiahua_0.pdf](https://www.usenix.org/system/files/sec19-xu-jiahua_0.pdf)
## Inadvertently Making Cyber Criminals Rich: A Comprehensive Study of Cryptojacking Campaigns at Internet Scale.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#inadvertently-making-cyber-criminals-rich-a-comprehensive-study-of-cryptojacking-campaigns-at-internet-scale)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#inadvertently-making-cyber-criminals-rich-a-comprehensive-study-of-cryptojacking-campaigns-at-internet-scale)
### Authors
* Hugo L.J. Bijmans, Delft University of Technology
* Tim M. Booij, Delft University of Technology
* Christian Doerr, Delft University of Technology
### Abstract
> Since the release of a browser-based cryptominer by Coinhive in 2017, the easy use of these miners has skyrocketed illicit cryptomining in 2017 and continued in 2018. This method of monetizing websites attracted website owners, as well as criminals seeking new ways to earn a profit. In this paper, we perform two large studies into the world of cryptojacking, focused on organized cryptomining and the spread of cryptojacking on the Internet. We have identified 204 cryptojacking campaigns, an order of magnitude more than previous work, which indicates that these campaigns are heavily underestimated by previous studies. We discovered that criminals have chosen third-party software -- such as WordPress -- as their new method for spreading cryptojacking infections efficiently. With a novel method of using NetFlow data we estimated the popularity of mining applications, which showed that while Coinhive has a larger installation base, CoinImp WebSocket proxies were digesting significantly more traffic in the second half of 2018. After crawling a random sample of 49M domains, ~20% of the Internet, we conclude that cryptojacking is present on 0.011% of all domains and that adult content is the most prevalent category of websites affected.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/bijmans](https://www.usenix.org/conference/usenixsecurity19/presentation/bijmans)
- **PDF:** [https://www.usenix.org/system/files/sec19-bijmans.pdf](https://www.usenix.org/system/files/sec19-bijmans.pdf)
## Rendered Private: Making GLSL Execution Uniform to Prevent WebGL-based Browser Fingerprinting.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#rendered-private-making-glsl-execution-uniform-to-prevent-webgl-based-browser-fingerprinting)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#rendered-private-making-glsl-execution-uniform-to-prevent-webgl-based-browser-fingerprinting)
### Authors
* Shujiang Wu, Johns Hopkins University
* Song Li, Johns Hopkins University
* Yinzhi Cao, Johns Hopkins University
* Ningfei Wang, Lehigh University
### Abstract
> Browser fingerprinting, a substitute of cookies-based tracking, extracts a list of client-side features and combines them as a unique identifier for the target browser. Among all these features, one that has the highest entropy and the ability for an even sneakier purpose, i.e., cross-browser fingerprinting, is the rendering of WebGL tasks, which produce different results across different installations of the same browser on different computers, thus being considered as fingerprintable.Such WebGL-based fingerprinting is hard to defend against, because the client browser executes a program written in OpenGL Shading Language (GLSL). To date, it remains unclear, in either the industry or the research community, about how and why the rendering of GLSL programs could lead to result discrepancies. Therefore, all the existing defenses, such as these adopted by Tor Browser, can only disable WebGL, i.e., a sacrifice of functionality over privacy, to prevent WebGL-based fingerprinting.In this paper, we propose a novel system, called UNIGL, to rewrite GLSL programs and make uniform WebGL rendering procedure with the support of existing WebGL functionalities. Particularly, we, being the first in the community, point out that such rendering discrepancies in state-of-the-art WebGL-based fingerprinting are caused by floating-point operations. After realizing the cause, we design UNIGL so that it redefines all the floating-point operations, either explicitly written in GLSL programs or implicitly invoked by WebGL, to mitigate the fingerprinting factors.We implemented a prototype of UNIGL as an open-source browser add-on (https://www.github.com/unigl/). We also created a demo website (http://test.unigl.org/), i.e., a modified version of an existing fingerprinting website, which directly integrates our add-on at the server-side to demonstrate the effectiveness of UNIGL. Our evaluation using crowdsourcing workers shows that UNIGL can prevent state-of-the-art WebGL-based fingerprinting with reasonable FPSes.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/wu](https://www.usenix.org/conference/usenixsecurity19/presentation/wu)
- **PDF:** [https://www.usenix.org/system/files/sec19fall_wu_prepub.pdf](https://www.usenix.org/system/files/sec19fall_wu_prepub.pdf)
## Site Isolation: Process Separation for Web Sites within the Browser.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#site-isolation-process-separation-for-web-sites-within-the-browser)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#site-isolation-process-separation-for-web-sites-within-the-browser)
### Authors
* Charles Reis, Google
* Alex, Google
* er Moshchuk, Google
* Nasko Oskov, Google
### Abstract
> Current production web browsers are multi-process but place different web sites in the same renderer process, which is not sufficient to mitigate threats present on the web today.  With the prevalence of private user data stored on web sites, the risk posed by compromised renderer processes, and the advent of transient execution attacks like Spectre and Meltdown that can leak data via microarchitectural state, it is no longer safe to render documents from different web sites in the same process.  In this paper, we describe our successful deployment of the Site Isolation architecture to all desktop users of Google Chrome as a mitigation for process-wide attacks.  Site Isolation locks each renderer process to documents from a single site and filters certain cross-site data from each process.  We overcame performance and compatibility challenges to adapt a production browser to this new architecture.  We find that this architecture offers the best path to protection against compromised renderer processes and same-process transient execution attacks, despite current limitations.  Our performance results indicate it is practical to deploy this level of isolation while sufficiently preserving compatibility with existing web content.  Finally, we discuss future directions and how the current limitations of Site Isolation might be addressed.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/reis](https://www.usenix.org/conference/usenixsecurity19/presentation/reis)
- **PDF:** [https://www.usenix.org/system/files/sec19-reis.pdf](https://www.usenix.org/system/files/sec19-reis.pdf)
## Everyone is Different: Client-side Diversification for Defending Against Extension Fingerprinting.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#everyone-is-different-client-side-diversification-for-defending-against-extension-fingerprinting)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#everyone-is-different-client-side-diversification-for-defending-against-extension-fingerprinting)
### Authors
* Erik Trickel, Arizona State University
* Oleksii Starov, Stony Brook University
* Alex, North Carolina State University
* ros Kapravelos, North Carolina State University
* Nick Nikiforakis, Stony Brook University
* Adam Doupé, Arizona State University
### Abstract
> Browser fingerprinting refers to the extraction of attributes from a user's browser which can be combined into a near-unique fingerprint. These fingerprints can be used to re-identify users without requiring the use of cookies or other stateful identifiers. Browser extensions enhance the client-side browser experience; however, prior work has shown that their website modifications are fingerprintable and can be used to infer sensitive information about users.In this paper we present CloakX, the first client-side anti-fingerprinting countermeasure that works without requiring browser modification or requiring extension developers to modify their code. CloakX uses client-side diversification to prevent extension detection using anchorprints (fingerprints comprised of artifacts directly accessible to any webpage) and to reduce the accuracy of extension detection using structureprints (fingerprints built from an extension's behavior). Despite the complexity of browser extensions, CloakX automatically incorporates client-side diversification into the extensions and maintains equivalent functionality through the use of static and dynamic program analysis. We evaluate the efficacy of CloakX on 18,937 extensions using large-scale automated analysis and in-depth manual testing. We conducted experiments to test the functionality equivalence, the detectability, and the performance of CloakX-enabled extensions. Beyond extension detection, we demonstrate that client-side modification of extensions is a viable method for the late-stage customization of browser extensions.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/trickel](https://www.usenix.org/conference/usenixsecurity19/presentation/trickel)
- **PDF:** [https://www.usenix.org/system/files/sec19-trickel.pdf](https://www.usenix.org/system/files/sec19-trickel.pdf)
## Less is More: Quantifying the Security Benefits of Debloating Web Applications.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#less-is-more-quantifying-the-security-benefits-of-debloating-web-applications)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#less-is-more-quantifying-the-security-benefits-of-debloating-web-applications)
### Authors
* Babak Amin Azad, Stony Brook University
* Pierre Laperdrix, Stony Brook University
* Nick Nikiforakis, Stony Brook University
### Abstract
> As software becomes increasingly complex, its attack surface expands enabling the exploitation of a wide range of vulnerabilities. Web applications are no exception since modern HTML5 standards and the ever-increasing capabilities of JavaScript are utilized to build rich web applications, often subsuming the need for traditional desktop applications. One possible way of handling this increased complexity is through the process of software debloating, i.e., the removal not only of dead code but also of code corresponding to features that a specific set of users do not require. Even though debloating has been successfully applied on operating systems, libraries, and compiled programs, its applicability on web applications has not yet been investigated.In this paper, we present the first analysis of the security benefits of debloating web applications. We focus on four popular PHP applications and we dynamically exercise them to obtain information about the server-side code that executes as a result of client-side requests. We evaluate two different debloating strategies (file-level debloating and function-level debloating) and we show that we can produce functional web applications that are 46% smaller than their original versions and exhibit half their original cyclomatic complexity. Moreover, our results show that the process of debloating removes code associated with tens of historical vulnerabilities and further shrinks a web application's attack surface by removing unnecessary external packages and abusable PHP gadgets.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/azad](https://www.usenix.org/conference/usenixsecurity19/presentation/azad)
- **PDF:** [https://www.usenix.org/system/files/sec19-azad.pdf](https://www.usenix.org/system/files/sec19-azad.pdf)
## The Web's Identity Crisis: Understanding the Effectiveness of Website Identity Indicators.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#the-webs-identity-crisis-understanding-the-effectiveness-of-website-identity-indicators)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#the-webs-identity-crisis-understanding-the-effectiveness-of-website-identity-indicators)
### Authors
* Christopher Thompson, Google
* Martin Shelton, Google
* Emily Stark, Google
* Maximilian Walker, Google
* Emily Schechter, Google
* Adrienne Porter Felt, Google
### Abstract
> Users must understand the identity of the website that they are visiting in order to make trust decisions. Web browsers indicate website identity via URLs and HTTPS certificates, but users must understand and act on these indicators for them to be effective. In this paper, we explore how browser identity indicators affect user behavior and understanding. First, we present a large-scale field experiment measuring the effects of the HTTPS Extended Validation (EV) certificate UI on user behavior. Our experiment is many orders of magnitude larger than any prior study of EV indicators, and it is the first to examine the EV indicator in a naturalistic scenario. We find that most metrics of user behavior are unaffected by its removal, providing evidence that the EV indicator adds little value in its current form. Second, we conduct three experimental design surveys to understand how users perceive UI variations in identity indicators for login pages, looking at EV UI in Chrome and Safari and URL formatting designs in Chrome. In 14 iterations on browsers' EV and URL formats, no intervention significantly impacted users' understanding of the security or identity of login pages. Informed by our experimental results, we provide recommendations to build more effective website identity mechanisms.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/thompson](https://www.usenix.org/conference/usenixsecurity19/presentation/thompson)
- **PDF:** [https://www.usenix.org/system/files/sec19-thompson.pdf](https://www.usenix.org/system/files/sec19-thompson.pdf)
## RAZOR: A Framework for Post-deployment Software Debloating.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#razor-a-framework-for-post-deployment-software-debloating)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#razor-a-framework-for-post-deployment-software-debloating)
### Authors
* Chenxiong Qian, Georgia Institute of Technology
* Hong Hu, Georgia Institute of Technology
* Mansour Alharthi, Georgia Institute of Technology
* Pak Ho Chung, Georgia Institute of Technology
* Taesoo Kim, Georgia Institute of Technology
* Wenke Lee, Georgia Institute of Technology
### Abstract
> Commodity software typically includes functionalities for a broad user population. However, each individual user usually only needs a subset of the supported functionalities. The bloated code not only hinders optimal execution, but also leads to a larger attack surface. Recent work explores program debloating as an emerging solution to this problem. Unfortunately, existing works require program source code, limiting their deployability.In this paper, we propose a practical debloating framework, RAZOR, that performs code reduction for deployed binaries. Based on users’ specification, our tool customizes the binary to generate a functional program with the minimal code size. Instead of only supporting given test cases, RAZOR takes several control-flow heuristics to infer complementary code that are necessary to support user-expected functionalities. We have evaluated RAZOR on commonly used benchmarks and real-world applications, including the web browser FireFox and the close-sourced PDF reader FoxitReader. The result shows that RAZOR is able to reduce over 70% of the code from the bloated binary. It produces functional programs and does not introduce new security issues. RAZOR is thus a practical framework for debloating real-world programs.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/qian](https://www.usenix.org/conference/usenixsecurity19/presentation/qian)
- **PDF:** [https://www.usenix.org/system/files/sec19-qian.pdf](https://www.usenix.org/system/files/sec19-qian.pdf)
## Back to the Whiteboard: a Principled Approach for the Assessment and Design of Memory Forensic Techniques.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#back-to-the-whiteboard-a-principled-approach-for-the-assessment-and-design-of-memory-forensic-techniques)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#back-to-the-whiteboard-a-principled-approach-for-the-assessment-and-design-of-memory-forensic-techniques)
### Authors
* Fabio Pagani, EURECOM
* Davide Balzarotti, EURECOM
### Abstract
> Today memory analysis plays a fundamental role in computer forensics and is a very active area of research. However, the field is still largely driven by custom rules and heuristics handpicked by human experts. These rules describe how to overcome the semantic gap to associate high level structures to individual bytes contained in a physical memory dump. Structures are then traversed by following pointers to other objects, and the process is repeated until the required information is located and extracted from the memory image.A fundamental problem with this approach is that we have no way to measure these heuristics to know precisely how well they work, under which circumstances, how prone they are to evasions or to errors, and how stable they are over different versions of the OS kernel. In addition, without a method to measure the quality and effectiveness of a given heuristic, it is impossible to compare one approach against the others.  If a tool adopts a certain heuristic to list the sockets associated to a program, how do we know if that is the only possible way to extract this information?  Maybe other, even better, solutions exist, just waiting to be "discovered'' by human analysts.For this reason, we believe we need to go back to the drawing board and rethink memory forensics from its foundations. In this paper we propose a framework and a set of metrics we can use as a basis to assess existing methodologies, understand their characteristics and limitations, and propose new techniques in a principled way. The memory of a modern operating system is a very large and very complex network of interconnected objects. Because of this, we argue that automated algorithms, rather than human intuition, should play a fundamental role in evaluating and designing future memory forensics techniques.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/pagani](https://www.usenix.org/conference/usenixsecurity19/presentation/pagani)
- **PDF:** [https://www.usenix.org/system/files/sec19fall_pagani_prepub.pdf](https://www.usenix.org/system/files/sec19fall_pagani_prepub.pdf)
## Detecting Missing-Check Bugs via Semantic- and Context-Aware Criticalness and Constraints Inferences.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#detecting-missing-check-bugs-via-semantic-and-context-aware-criticalness-and-constraints-inferences)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#detecting-missing-check-bugs-via-semantic-and-context-aware-criticalness-and-constraints-inferences)
### Authors
* Kangjie Lu, University of Minnesota
* Aditya Pakki, University of Minnesota
* Qiushi Wu, University of Minnesota
### Abstract
> Missing a security check is a class of semantic bugs in software programs where erroneous execution states are not validated. Missing-check bugs are particularly common in OS kernels because they frequently interact with external untrusted user space and hardware, and carry out error-prone computation. Missing-check bugs may cause a variety of critical security consequences, including permission bypasses, out-of-bound accesses, and system crashes. While missing-check bugs are common and critical, only a few research works have attempted to detect them, which is arguably because of the inherent challenges in the detection---whether a variable requires a security check depends on its semantics, contexts and developer logic, and understanding them is a hard problem.In this paper, we present CRIX, a system for detecting missing-check bugs in OS kernels. CRIX can scalably and precisely evaluate whether any security checks are missing for critical variables, using an inter-procedural, semantic- and context-aware analysis. In particular, CRIX’s modeling and cross-checking of the semantics of conditional statements in the peer slices of critical variables infer their criticalness, which allows CRIX to effectively detect missing-check bugs. Evaluation results show that CRIX finds missing-check bugs with reasonably low false-report rates. Using CRIX, we have found 278 new missing-check bugs in the Linux kernel that can cause security issues. We submitted patches for all these bugs; Linux maintainers have accepted 151 of them. The promising results show that missing-check bugs are a common occurrence, and CRIX is effective and scalable in detecting missing-check bugs in OS kernels.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/lu](https://www.usenix.org/conference/usenixsecurity19/presentation/lu)
- **PDF:** [https://www.usenix.org/system/files/sec19-lu.pdf](https://www.usenix.org/system/files/sec19-lu.pdf)
## DEEPVSA: Facilitating Value-set Analysis with Deep Learning for Postmortem Program Analysis.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#deepvsa-facilitating-value-set-analysis-with-deep-learning-for-postmortem-program-analysis)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#deepvsa-facilitating-value-set-analysis-with-deep-learning-for-postmortem-program-analysis)
### Authors
* Wenbo Guo, The Pennsylvania State University
* Dongliang Mu, The Pennsylvania State University
* Xinyu Xing, The Pennsylvania State University
* Min Du, University of California, Berkeley
* Dawn Song, University of California, Berkeley
### Abstract
> Value set analysis (VSA) is one of the most powerful binary analysis tools, which has been broadly adopted in many use cases, ranging from verifying software properties (e.g., variable range analysis) to identifying software vulnerabilities (e.g., buffer overflow detection). Using it to facilitate data flow analysis in the context of postmortem program analysis, it however exhibits an insufficient capability in handling memory alias identification. Technically speaking, this is due to the fact that VSA needs to infer memory reference based on the context of a control flow, but accidental termination of a running program left behind incomplete control flow information, making memory alias analysis clueless.To address this issue, we propose a new technical approach. At the high level, this approach first employs a layer of instruction embedding along with a  bi-directional sequence-to-sequence neural network to learn the machine code pattern pertaining to memory region accesses. Then, it utilizes the network to infer the memory region that VSA fails to recognize. Since the memory references to different regions naturally indicate the non-alias relationship, the proposed neural architecture can facilitate the ability of VSA to perform better alias analysis.  Different from previous research that utilizes deep learning for other binary analysis tasks, the neural network proposed in this work is fundamentally novel. Instead of simply using off-the-shelf neural networks, we introduce a new neural network architecture which could capture the data dependency between and within instructions. %machine code. In this work, we implement our deep neural architecture as DEEPVSA, a neural network assisted alias analysis tool. To demonstrate the utility of  this tool, we use it to analyze software crashes corresponding to 40 memory corruption vulnerabilities archived in Offensive Security Exploit Database. We show that, DEEPVSA can significantly improve VSA with respect to its capability in analyzing memory alias and thus escalate the ability of security analysts to pinpoint the root cause  of software crashes. In addition, we demonstrate that our proposed neural network outperforms state-of-the-art neural architectures broadly adopted in other binary analysis tasks. Last but not least, we show that DEEPVSA exhibits nearly no false positives when performing alias analysis.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/guo](https://www.usenix.org/conference/usenixsecurity19/presentation/guo)
- **PDF:** [https://www.usenix.org/system/files/sec19-guo.pdf](https://www.usenix.org/system/files/sec19-guo.pdf)
## CONFIRM: Evaluating Compatibility and Relevance of Control-flow Integrity Protections for Modern Software.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#confirm-evaluating-compatibility-and-relevance-of-control-flow-integrity-protections-for-modern-software)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#confirm-evaluating-compatibility-and-relevance-of-control-flow-integrity-protections-for-modern-software)
### Authors
* Xiaoyang Xu, University of Texas at Dallas
* Masoud Ghaffarinia, University of Texas at Dallas
* Wenhao Wang, University of Texas at Dallas
* Kevin W. Hamlen, University of Texas at Dallas
* Zhiqiang Lin, Ohio State University
### Abstract
> CONFIRM (CONtrol-Flow Integrity Relevance Metrics) is a new evaluation methodology and microbenchmarking suite for assessing compatibility, applicability, and relevance of control-flow integrity (CFI) protections for preserving the intended semantics of software while protecting it from abuse. Although CFI has become a mainstay of protecting certain classes of software from code-reuse attacks, and continues to be improved by ongoing research, its ability to preserve intended program functionalities (semantic transparency) of diverse, mainstream software products has been under-studied in the literature. This is in part because although CFI solutions are evaluated in terms of performance and security, there remains no standard regimen for assessing compatibility. Researchers must often therefore resort to anecdotal assessments, consisting of tests on homogeneous software collections with limited variety (e.g., GNU Coreutils), or on CPU benchmarks (e.g., SPEC) whose limited code features are not representative of large, mainstream software products. Reevaluation of CFI solutions using CONFIRM reveals that there remain significant unsolved challenges in securing many large classes of software products with CFI, including software for market-dominant OSes (e.g., Windows) and code employing certain ubiquitous coding idioms (e.g., event-driven callbacks and exceptions). An estimated 47% of CFI-relevant code features with high compatibility impact remain incompletely supported by existing CFI algorithms, or receive weakened controls that leave prevalent threats unaddressed (e.g., return-oriented programming attacks). Discussion of these open problems highlights issues that future research must address to bridge these important gaps between CFI theory and practice.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/xu-xiaoyang](https://www.usenix.org/conference/usenixsecurity19/presentation/xu-xiaoyang)
- **PDF:** [https://www.usenix.org/system/files/sec19-xu-xiaoyang.pdf](https://www.usenix.org/system/files/sec19-xu-xiaoyang.pdf)
## Point Break: A Study of Bandwidth Denial-of-Service Attacks against Tor.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#point-break-a-study-of-bandwidth-denial-of-service-attacks-against-tor)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#point-break-a-study-of-bandwidth-denial-of-service-attacks-against-tor)
### Authors
* Rob Jansen, U.S. Naval Research Laboratory
* Tavish Vaidya, Georgetown University
* Micah Sherr, Georgetown University
### Abstract
> As the Tor network has grown in popularity and importance as a tool for privacy-preserving online communication, it has increasingly become a target for disruption, censorship, and attack. A large body of existing work examines Tor's susceptibility to attacks that attempt to block Tor users' access to information (e.g., via traffic filtering), identify Tor users' communication content (e.g., via traffic fingerprinting), and de-anonymize Tor users (e.g., via traffic correlation). This paper focuses on the relatively understudied threat of denial-of-service (DoS) attacks against Tor, and specifically, DoS attacks that intelligently utilize bandwidth as a means to significantly degrade Tor network performance and reliability. We demonstrate the feasibility of several bandwidth DoS attacks through live-network experimentation and high-fidelity simulation while quantifying the cost of each attack and its effect on Tor performance. First, we explore an attack against Tor's most commonly used default bridges (for censorship circumvention) and estimate that flooding those that are operational would cost $17K/mo. and could reduce client throughput by 44% while more than doubling bridge maintenance costs. Second, we explore attacks against the TorFlow bandwidth measurement system and estimate that a constant attack against all TorFlow scanners would cost $2.8K/mo. and reduce the median client download rate by 80%. Third, we explore how an adversary could use Tor to congest itself and estimate that such a congestion attack against all Tor relays would cost $1.6K/mo. and increase the median client download time by 47%. Finally, we analyze the effects of Sybil DoS and deanonymization attacks that have costs comparable to those of our attacks.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/jansen](https://www.usenix.org/conference/usenixsecurity19/presentation/jansen)
- **PDF:** [https://www.usenix.org/system/files/sec19fall_jansen_prepub.pdf](https://www.usenix.org/system/files/sec19fall_jansen_prepub.pdf)
## No Right to Remain Silent: Isolating Malicious Mixes.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#no-right-to-remain-silent-isolating-malicious-mixes)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#no-right-to-remain-silent-isolating-malicious-mixes)
### Authors
* Hemi Leibowitz, Bar-Ilan University, IL
* Ania M. Piotrowska, University College London, UK
* George Danezis, University College London, UK
* Amir Herzberg, University of Connecticut, US
### Abstract
> Mix networks are a key technology to achieve network anonymity and private messaging, voting and database lookups. However, simple mix network designs are vulnerable to malicious mixes, which may drop or delay packets to facilitate traffic analysis attacks. Mix networks with provable robustness address this drawback through complex and expensive proofs of correct shuffling but come at a great cost and make limiting or unrealistic systems assumptions.  We present Miranda, an efficient mix-net design, which mitigates active attacks by malicious mixes.  Miranda uses both the detection of corrupt mixes, as well as detection of faults related to a pair of mixes, without detection of the faulty one among the two.  Each active attack -- including dropping packets -- leads to reduced connectivity for corrupt mixes and reduces their ability to attack, and, eventually, to detection of corrupt mixes. We show, through experiments, the effectiveness of Miranda, by demonstrating how malicious mixes are detected and that attacks are neutralized early.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/leibowitz](https://www.usenix.org/conference/usenixsecurity19/presentation/leibowitz)
- **PDF:** [https://www.usenix.org/system/files/sec19-leibowitz.pdf](https://www.usenix.org/system/files/sec19-leibowitz.pdf)
## On (The Lack Of) Location Privacy in Crowdsourcing Applications.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#on-the-lack-of-location-privacy-in-crowdsourcing-applications)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#on-the-lack-of-location-privacy-in-crowdsourcing-applications)
### Authors
* Spyros Boukoros, TU-Darmstadt
* Mathias Humbert, Swiss Data Science Center (ETH Zurich, EPFL)
* Stefan Katzenbeisser, TU-Darmstadt, University of Passau
* Carmela Troncoso, EPFL
### Abstract
> Crowdsourcing enables application developers to benefit from large and diverse datasets at a low cost. Specifically, mobile crowdsourcing (MCS) leverages users’ devices as sensors to perform geo-located data collection. The collection of geo-located data though, raises serious privacy concerns for users. Yet, despite the large research body on location privacy-preserving mechanisms (LPPMs), MCS developers implement little to no protection for data collection or publication. To understand this mismatch we study the performance of existing LPPMs on publicly available data from two mobile crowdsourcing projects. Our results show that well-established defenses are either not applicable or offer little protection in the MCS setting. Additionally, they have a much stronger impact on applications’ utility than foreseen in the literature. This is because existing LPPMs, designed with location-based services (LBSs) in mind, are optimized for utility functions based on users’ locations, while MCS utility functions depend on the values (e.g., measurements) associated with those locations. We finally outline possible research avenues to facilitate the development of new location privacy solutions that fit the needs of MCS so that the increasing number of such applications do not jeopardize their users’ privacy.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/boukoros](https://www.usenix.org/conference/usenixsecurity19/presentation/boukoros)
- **PDF:** [https://www.usenix.org/system/files/sec19-boukoros.pdf](https://www.usenix.org/system/files/sec19-boukoros.pdf)
## Utility-Optimized Local Differential Privacy Mechanisms for Distribution Estimation.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#utility-optimized-local-differential-privacy-mechanisms-for-distribution-estimation)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#utility-optimized-local-differential-privacy-mechanisms-for-distribution-estimation)
### Authors
* Takao Murakami, AIST
* Yusuke Kawamoto, AIST
### Abstract
> LDP (Local Differential Privacy) has been widely studied to estimate statistics of personal data (e.g., distribution underlying the data) while protecting users' privacy. Although LDP does not require a trusted third party, it regards all personal data equally sensitive, which causes excessive obfuscation hence the loss of utility. In this paper, we introduce the notion of ULDP (Utility-optimized LDP), which provides a privacy guarantee equivalent to LDP only for sensitive data. We first consider the setting where all users use the same obfuscation mechanism, and propose two mechanisms providing ULDP: utility-optimized randomized response and utility-optimized RAPPOR. We then consider the setting where the distinction between sensitive and non-sensitive data can be different from user to user. For this setting, we propose a personalized ULDP mechanism with semantic tags to estimate the distribution of personal data with high utility while keeping secret what is sensitive for each user. We show theoretically and experimentally that our mechanisms provide much higher utility than the existing LDP mechanisms when there are a lot of non-sensitive data. We also show that when most of the data are non-sensitive, our mechanisms even provide almost the same utility as non-private mechanisms in the low privacy regime.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/murakami](https://www.usenix.org/conference/usenixsecurity19/presentation/murakami)
- **PDF:** [https://www.usenix.org/system/files/sec19-murakami.pdf](https://www.usenix.org/system/files/sec19-murakami.pdf)
## Evaluating Differentially Private Machine Learning in Practice.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#evaluating-differentially-private-machine-learning-in-practice)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#evaluating-differentially-private-machine-learning-in-practice)
### Authors
* Bargav Jayaraman, University of Virginia
* David Evans, University of Virginia
### Abstract
> Differential privacy is a strong notion for privacy that can be used to prove formal guarantees, in terms of a privacy budget, ε, about how much information is leaked by a mechanism. When used in privacy-preserving machine learning, the goal is typically to limit what can be inferred from the model about individual training records. However, the calibration of the privacy budget is not well understood. Implementations of privacy-preserving machine learning often select large values of ε in order to get acceptable utility of the model, with little understanding of the impact of such choices on meaningful privacy. Moreover, in scenarios where iterative learning procedures are used, relaxed definitions of differential privacy are often used which appear to reduce the needed privacy budget but present poorly understood trade-offs between privacy and utility. In this paper, we quantify the impact of these choices on privacy in experiments with logistic regression and neural network models. Our main finding is that there is no way to obtain privacy for free—relaxed definitions of differential privacy that reduce the amount of noise needed to improve utility also increase the measured privacy leakage. Current mechanisms for differentially private machine learning rarely offer acceptable utility-privacy trade-offs for complex learning tasks: settings that provide limited accuracy loss provide little effective privacy, and settings that provide strong privacy result in useless models.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/jayaraman](https://www.usenix.org/conference/usenixsecurity19/presentation/jayaraman)
- **PDF:** [https://www.usenix.org/system/files/sec19-jayaraman.pdf](https://www.usenix.org/system/files/sec19-jayaraman.pdf)
## Fuzzification: Anti-Fuzzing Techniques.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#fuzzification-anti-fuzzing-techniques)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#fuzzification-anti-fuzzing-techniques)
### Authors
* Jinho Jung, Georgia Institute of Technology
* Hong Hu, Georgia Institute of Technology
* David Solodukhin, Georgia Institute of Technology
* Daniel Pagan, Georgia Institute of Technology
* Kyu Hyung Lee, University of Georgia
* Taesoo Kim, Georgia Institute of Technology
### Abstract
> Fuzzing is a software testing technique that quickly and automatically explores the input space of a program without knowing its internals. Therefore, developers commonly use fuzzing as part of test integration throughout the software development process. Unfortunately, it also means that such a blackbox and the automatic natures of fuzzing are appealing to adversaries who are looking for zero-day vulnerabilities. To solve this problem, we propose a new mitigation approach, called Fuzzification , that helps developers protect the released, binary-only software from attackers who are capable of applying state-of-the-art fuzzing techniques. Given a performance budget, this approach aims to hinder the fuzzing process from adversaries as much as possible. We propose three Fuzzification techniques: 1) SpeedBump, which amplifies the slowdown in normal executions by hundreds of times to the fuzzed execution, 2) BranchTrap, interfering with feedback logic by hiding paths and polluting coverage maps, and 3) AntiHybrid, hindering taint-analysis and symbolic execution. Each technique is designed with best-effort, defensive measures that attempt to hinder adversaries from bypassing Fuzzification .Our evaluation on popular fuzzers and real-world applications shows that Fuzzification effectively reduces the number of discovered paths by 70.3% and decreases the number of identified crashes by 93.0% from real-world binaries, and decreases the number of detected bugs by 67.5% from LAVA-M dataset while under user-specified overheads for common workloads. We discuss the robustness of Fuzzification techniques against adversarial analysis techniques. We open-source our Fuzzification system to foster future research.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/jung](https://www.usenix.org/conference/usenixsecurity19/presentation/jung)
- **PDF:** [https://www.usenix.org/system/files/sec19fall_jung_prepub.pdf](https://www.usenix.org/system/files/sec19fall_jung_prepub.pdf)
## AntiFuzz: Impeding Fuzzing Audits of Binary Executables.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#antifuzz-impeding-fuzzing-audits-of-binary-executables)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#antifuzz-impeding-fuzzing-audits-of-binary-executables)
### Authors
* Emre Güler, Ruhr-Universität Bochum
* Cornelius Aschermann, Ruhr-Universität Bochum
* Ali Abbasi, Ruhr-Universität Bochum
* Thorsten Holz, Ruhr-Universität Bochum
### Abstract
> A general defense strategy in computer security is to increase the cost of successful attacks in both computational resources as well as human time. In the area of binary security, this is commonly done by using obfuscation methods to hinder reverse engineering and the search for software vulnerabilities. However, recent trends in automated bug finding changed the modus operandi. Nowadays it is very common for bugs to be found by various fuzzing tools. Due to ever-increasing amounts of automation and research on better fuzzing strategies, large-scale, dragnet-style fuzzing of many hundreds of targets becomes viable. As we show, current obfuscation techniques are aimed at increasing the cost of human understanding and do little to slow down fuzzing.   In this paper, we introduce several techniques to protect a binary executable against an analysis with automated bug finding approaches that are based on fuzzing, symbolic/concolic execution, and taint-assisted fuzzing (commonly known as hybrid fuzzing). More specifically, we perform a systematic analysis of the fundamental assumptions of bug finding tools and develop general countermeasures for each assumption. Note that these techniques are not designed to target specific implementations of fuzzing tools, but address general assumptions that bug finding tools necessarily depend on. Our evaluation demonstrates that these techniques effectively impede fuzzing audits, while introducing a negligible performance overhead. Just as obfuscation techniques increase the amount of human labor needed to find a vulnerability, our techniques render automated fuzzing-based approaches futile.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/guler](https://www.usenix.org/conference/usenixsecurity19/presentation/guler)
- **PDF:** [https://www.usenix.org/system/files/sec19fall_guler_prepub.pdf](https://www.usenix.org/system/files/sec19fall_guler_prepub.pdf)
## MOPT: Optimized Mutation Scheduling for Fuzzers.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#mopt-optimized-mutation-scheduling-for-fuzzers)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#mopt-optimized-mutation-scheduling-for-fuzzers)
### Authors
* Chenyang Lyu, Zhejiang University
* Shouling Ji, Zhejiang University & Alibaba-Zhejiang University Joint Research Institute of Frontier Technologies
* Chao Zhang, BNRist & INSC, Tsinghua University
* Yuwei Li, Zhejiang University
* Wei-Han Lee, IBM Research
* Yu Song, Zhejiang University
* Raheem Beyah, Georgia Institute of Technology
### Abstract
> Mutation-based fuzzing is one of the most popular vulnerability discovery solutions. Its performance of generating interesting test cases highly depends on the mutation scheduling strategies. However, existing fuzzers usually follow a specific distribution to select mutation operators, which is inefficient in finding vulnerabilities on general programs. Thus, in this paper, we present a novel mutation scheduling scheme MOPT, which enables mutation-based fuzzers to discover vulnerabilities more efficiently. MOPT utilizes a customized Particle Swarm Optimization (PSO) algorithm to find the optimal selection probability distribution of operators with respect to fuzzing effectiveness, and provides a pacemaker fuzzing mode to accelerate the convergence speed of PSO. We applied MOPT to the state-of-the-art fuzzers AFL, AFLFast and VUzzer, and implemented MOPT-AFL, -AFLFast and -VUzzer respectively, and then evaluated them on 13 real world open-source programs. The results showed that, MOPT-AFL could find 170% more security vulnerabilities and 350% more crashes than AFL. MOPT-AFLFast and MOPT-VUzzer also outperform their counterparts. Furthermore, the extensive evaluation also showed that MOPT provides a good rationality, compatibility and steadiness, while introducing negligible costs.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/lyu](https://www.usenix.org/conference/usenixsecurity19/presentation/lyu)
- **PDF:** [https://www.usenix.org/system/files/sec19-lyu.pdf](https://www.usenix.org/system/files/sec19-lyu.pdf)
## EnFuzz: Ensemble Fuzzing with Seed Synchronization among Diverse Fuzzers.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#enfuzz-ensemble-fuzzing-with-seed-synchronization-among-diverse-fuzzers)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#enfuzz-ensemble-fuzzing-with-seed-synchronization-among-diverse-fuzzers)
### Authors
* Yuanliang Chen, Tsinghua University
* Yu Jiang, Tsinghua University
* Fuchen Ma, Tsinghua University
* Jie Liang, Tsinghua University
* Mingzhe Wang, Tsinghua University
* Chijin Zhou, Tsinghua University
* Xun Jiao, Villanova University
* Zhuo Su, Tsinghua University
### Abstract
> Fuzzing is widely used for vulnerability detection. There are various kinds of fuzzers with different fuzzing strategies, and most of them perform well on their targets. However, in industrial practice, it is found that the performance of those well-designed fuzzing strategies is challenged by the complexity and diversity of real-world applications. In this paper, we systematically study an ensemble fuzzing approach. First, we define the diversity of base fuzzers in three heuristics: diversity of coverage information granularity, diversity of input generation strategy and diversity of seed selection and mutation strategy. Based on those heuristics, we choose several of the most recent base fuzzers that are as diverse as possible, and propose a globally asynchronous and locally synchronous (GALS) based seed synchronization mechanism to seamlessly ensemble those base fuzzers and obtain better performance. For evaluation, we implement EnFuzz based on several widely used fuzzers such as QSYM and FairFuzz, and then we test them on LAVA-M and Google’s fuzzing-test-suite, which consists of 24 widely used real-world applications. This experiment indicates that, under the same constraints for resources, these base fuzzers perform differently on different applications, while EnFuzz always outperforms other fuzzers in terms of path coverage, branch coverage and bug discovery. Furthermore, EnFuzz found 60 new vulnerabilities in several well-fuzzed projects such as libpng and libjpeg, and 44 new CVEs were assigned.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/chen-yuanliang](https://www.usenix.org/conference/usenixsecurity19/presentation/chen-yuanliang)
- **PDF:** [https://www.usenix.org/system/files/sec19-chen-yuanliang.pdf](https://www.usenix.org/system/files/sec19-chen-yuanliang.pdf)
## GRIMOIRE: Synthesizing Structure while Fuzzing.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#grimoire-synthesizing-structure-while-fuzzing)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#grimoire-synthesizing-structure-while-fuzzing)
### Authors
* Tim Blazytko, Ruhr-Universität Bochum
* Cornelius Aschermann, Ruhr-Universität Bochum
* Moritz Schlögel, Ruhr-Universität Bochum
* Ali Abbasi, Ruhr-Universität Bochum
* Sergej Schumilo, Ruhr-Universität Bochum
* Simon Wörner, Ruhr-Universität Bochum
* Thorsten Holz, Ruhr-Universität Bochum
### Abstract
> In the past few years, fuzzing has received significant attention from the research community. However, most of this attention was directed towards programs without a dedicated parsing stage. In such cases, fuzzers which leverage the input structure of a program can achieve a significantly higher code coverage compared to traditional fuzzing approaches. This advancement in coverage is achieved by applying large-scale mutations in the application's input space. However, this improvement comes at the cost of requiring expert domain knowledge, as these fuzzers depend on structure input specifications (e.g., grammars). Grammar inference, a technique which can automatically generate such grammars for a given program, can be used to address this shortcoming. Such techniques usually infer a program's grammar in a pre-processing step and can miss important structures that are uncovered only later during normal fuzzing.In this paper, we present the design and implementation of GRIMOIRE, a fully automated coverage-guided fuzzer which works without any form of human interaction or pre-configuration; yet, it is still able to efficiently test programs that expect highly structured inputs. We achieve this by performing large-scale mutations in the program input space using grammar-like combinations to synthesize new highly structured inputs without any pre-processing step. Our evaluation shows that GRIMOIRE outperforms other coverage-guided fuzzers when fuzzing programs with highly structured inputs. Furthermore, it improves upon existing grammar-based coverage-guided fuzzers. Using GRIMOIRE, we identified 19 distinct memory corruption bugs in real-world programs and obtained 11 new CVEs.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/blazytko](https://www.usenix.org/conference/usenixsecurity19/presentation/blazytko)
- **PDF:** [https://www.usenix.org/system/files/sec19-blazytko.pdf](https://www.usenix.org/system/files/sec19-blazytko.pdf)
