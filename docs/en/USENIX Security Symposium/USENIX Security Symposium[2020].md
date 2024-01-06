# USENIX Security Symposium[2020]
## A Formal Analysis of IEEE 802.11's WPA2: Countering the Kracks Caused by Cracking the Counters.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#a-formal-analysis-of-ieee-802-11s-wpa2-countering-the-kracks-caused-by-cracking-the-counters)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#a-formal-analysis-of-ieee-802-11s-wpa2-countering-the-kracks-caused-by-cracking-the-counters)
### Authors
* Cas Cremers, CISPA Helmholtz Center for Information Security
* Benjamin Kiesl, CISPA Helmholtz Center for Information Security
* Niklas Medinger, CISPA Helmholtz Center for Information Security
### Abstract
> The IEEE 802.11 WPA2 protocol is widely used across the globe to protect network connections. The protocol, which is specified on more than three-thousand pages and has received various patches over the years, is extremely complex and therefore hard to analyze. In particular, it involves various mechanisms that interact with each other in subtle ways, which offers little hope for modular reasoning. Perhaps because of this, there exists no formal or cryptographic argument that shows that the patches to the core protocol indeed prevent the corresponding attacks, such as, e.g., the notorious KRACK attacks from 2017.In this work, we address this situation and present an extensive formal analysis of the WPA2 protocol design. Our model is the first that is detailed enough to detect the KRACK attacks; it includes mechanisms such as the four-way handshake, the group-key handshake, WNM sleep mode, the data-confidentiality protocol, and their complex interactions. Our analysis provides the first security argument, in any formalism, that the patched WPA2 protocol meets its claimed security guarantees in the face of complex modern attacks.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/cremers](https://www.usenix.org/conference/usenixsecurity20/presentation/cremers)
- **PDF:** [https://www.usenix.org/system/files/sec20-cremers.pdf](https://www.usenix.org/system/files/sec20-cremers.pdf)
## Frankenstein: Advanced Wireless Fuzzing to Exploit New Bluetooth Escalation Targets.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#frankenstein-advanced-wireless-fuzzing-to-exploit-new-bluetooth-escalation-targets)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#frankenstein-advanced-wireless-fuzzing-to-exploit-new-bluetooth-escalation-targets)
### Authors
* Jan Ruge, Secure Mobile Networking Lab, TU Darmstadt
* Jiska Classen, Secure Mobile Networking Lab, TU Darmstadt
* Francesco Gringoli, Dept. of Information Engineering, University of Brescia
* Matthias Hollick, Secure Mobile Networking Lab, TU Darmstadt
### Abstract
> Wireless communication standards and implementations have a troubled history regarding security. Since most implementations and firmwares are closed-source, fuzzing remains one of the main methods to uncover Remote Code Execution (RCE) vulnerabilities in deployed systems. Generic over-the-air fuzzing suffers from several shortcomings, such as constrained speed, limited repeatability, and restricted ability to debug. In this paper, we present Frankenstein, a fuzzing framework based on advanced firmware emulation, which addresses these shortcomings. Frankenstein brings firmware dumps "back to life", and provides fuzzed input to the chip's virtual modem. The speed-up of our new fuzzing method is sufficient to maintain interoperability with the attached operating system, hence triggering realistic full-stack behavior. We demonstrate the potential of Frankenstein by finding three zero-click vulnerabilities in the Broadcom and Cypress Bluetooth stack, which is used in most Apple devices, many Samsung smartphones, the Raspberry Pis, and many others. Given RCE on a Bluetooth chip, attackers may escalate their privileges beyond the chip's boundary. We uncover a Wi-Fi/Bluetooth coexistence issue that crashes multiple operating system kernels and a design flaw in the Bluetooth 5.2 specification that allows link key extraction from the host. Turning off Bluetooth will not fully disable the chip, making it hard to defend against RCE attacks. Moreover, when testing our chip-based vulnerabilities on those devices, we find BlueFrag, a chip-independent Android RCE.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/ruge](https://www.usenix.org/conference/usenixsecurity20/presentation/ruge)
## Breaking Secure Pairing of Bluetooth Low Energy Using Downgrade Attacks.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#breaking-secure-pairing-of-bluetooth-low-energy-using-downgrade-attacks)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#breaking-secure-pairing-of-bluetooth-low-energy-using-downgrade-attacks)
### Authors
* Yue Zhang, College of Information Science and Technology, Jinan University (Department of Computer Science, University of Central Florida)
* Jian Weng, College of Information Science and Technology, Jinan University
* Rajib Dey, Department of Computer Science, University of Central Florida
* Yier Jin, Department of Electrical and Computer Engineering, University of Florida
* Zhiqiang Lin, Computer Science and Engineering, The Ohio State University
* Xinwen Fu, Department of Computer Science, University of Central Florida
### Abstract
> To defeat security threats such as man-in-the-middle (MITM) attacks, Bluetooth Low Energy (BLE) 4.2 and 5.x introduced a Secure Connections Only (SCO) mode, under which a BLE device can only accept secure pairing such as Passkey Entry and Numeric Comparison from an initiator, e.g., an Android mobile. However, the BLE specification does not require the SCO mode for the initiator, and does not specify how the BLE programming framework should implement this mode. In this paper we show that the BLE programming framework of the initiator must properly handle SCO initiation, status management, error handling, and bond management; otherwise severe flaws can be exploited to perform downgrade attacks, forcing the BLE pairing protocols to run in an insecure mode without user's awareness. To validate our findings, we have tested 18 popular BLE commercial products with 5 Android phones. Our experimental results proved that MITM attacks (caused by downgrading) are possible to all these products. More importantly, due to such system flaws from the BLE programming framework, all BLE apps in Android are subject to our downgrade attacks. To defend against our attacks, we have built a prototype for the SCO mode on Android 8 atop Android Open Source Project (AOSP). Finally, in addition to Android, we also find all major OSes including iOS, macOS, Windows, and Linux do not support the SCO mode properly. We have reported the identified BLE pairing vulnerabilities to Bluetooth Special Interest Group, Google, Apple, Texas Instruments, and Microsoft.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/zhang-yue](https://www.usenix.org/conference/usenixsecurity20/presentation/zhang-yue)
- **PDF:** [https://www.usenix.org/system/files/sec20-zhang-yue.pdf](https://www.usenix.org/system/files/sec20-zhang-yue.pdf)
## You Are What You Broadcast: Identification of Mobile and IoT Devices from (Public) WiFi.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#you-are-what-you-broadcast-identification-of-mobile-and-iot-devices-from-public-wifi)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#you-are-what-you-broadcast-identification-of-mobile-and-iot-devices-from-public-wifi)
### Authors
* Lingjing Yu, Institute of Information Engineering, Chinese Academy of Sciences; School of Cybersecurity, University of the Chinese Academy of Sciences
* Bo Luo, The University of Kansas
* Jun Ma, Tsinghua University
* Zhaoyu Zhou, Institute of Information Engineering, Chinese Academy of Sciences
* Qingyun Liu, Institute of Information Engineering, Chinese Academy of Sciences
### Abstract
> With the rapid growth of mobile devices and WiFi hotspots, security risks arise. In practice, it is critical for administrators of corporate and public wireless networks to identify the type and/or model of devices connected to the network, in order to set access/firewall rules, to check for known vulnerabilities, or to configure IDS accordingly. Mobile devices are not obligated to report their detailed identities when they join a (public) wireless network, while adversaries could easily forge device attributes. In the literature, efforts have been made to utilize features from network traffic for device identification. In this paper, we present OWL, a novel device identification mechanism for both network administrators and normal users. We first extract network traffic features from passively received broadcast and multicast (BC/MC) packets. Embedding representations are learned to model features into six independent and complementary views. We then present a new multi-view wide and deep learning (MvWDL) framework that is optimized on both generalization performance and label-view interaction performance. Meanwhile, a malicious device detection mechanism is designed to assess the inconsistencies across views in the multi-view classifier to identify anomalies. Finally, we demonstrate OWL's performance through experiments, case studies, and qualitative analysis.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/yu](https://www.usenix.org/conference/usenixsecurity20/presentation/yu)
- **PDF:** [https://www.usenix.org/system/files/sec20-yu.pdf](https://www.usenix.org/system/files/sec20-yu.pdf)
## Call Me Maybe: Eavesdropping Encrypted LTE Calls With ReVoLTE.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#call-me-maybe-eavesdropping-encrypted-lte-calls-with-revolte)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#call-me-maybe-eavesdropping-encrypted-lte-calls-with-revolte)
### Authors
* David Rupprecht, Ruhr University Bochum
* Katharina Kohls, Ruhr University Bochum
* Thorsten Holz, Ruhr University Bochum
* Christina Pöpper, NYU Abu Dhabi
### Abstract
> Voice over LTE (VoLTE) is a packet-based telephony service seamlessly integrated into the Long Term Evolution (LTE) standard and deployed by most telecommunication providers in practice. Due to this widespread use, successful attacks against VoLTE can affect a large number of users worldwide.  In this work, we introduce ReVoLTE, an attack that exploits an LTE implementation flaw to recover the contents of an encrypted VoLTE call, hence enabling an adversary to eavesdrop on phone calls. ReVoLTE makes use of a predictable keystream reuse on the radio layer that allows an adversary to decrypt a recorded call with minimal resources. Through a series of preliminary as well as real-world experiments, we successfully demonstrate the feasibility of ReVoLTE and analyze various factors that critically influence our attack in commercial networks. For mitigating the ReVoLTE attack, we propose and discuss short- and long-term countermeasures deployable by providers and equipment vendors.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/rupprecht](https://www.usenix.org/conference/usenixsecurity20/presentation/rupprecht)
- **PDF:** [https://www.usenix.org/system/files/sec20-rupprecht.pdf](https://www.usenix.org/system/files/sec20-rupprecht.pdf)
## A Comprehensive Quality Evaluation of Security and Privacy Advice on the Web.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#a-comprehensive-quality-evaluation-of-security-and-privacy-advice-on-the-web)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#a-comprehensive-quality-evaluation-of-security-and-privacy-advice-on-the-web)
### Authors
* Elissa M. Redmiles, University of Maryland
* Noel Warford, University of Maryland
* Amritha Jayanti, University of Maryland
* Aravind Koneru, University of Maryland
* Sean Kross, University of California, San Diego
* Miraida Morales, Rutgers University
* Rock Stevens, University of Maryland
* Michelle L. Mazurek, University of Maryland
### Abstract
> End users learn defensive security behaviors from a variety of channels, including a plethora of security advice given in online articles. A great deal of effort is devoted to getting users to follow this advice. Surprisingly then, little is known about the quality of this advice: Is it comprehensible? Is it actionable? Is it effective? To answer these questions, we first conduct a large-scale, user-driven measurement study to identify 374 unique recommended behaviors contained within 1,264 documents of online security and privacy advice. Second, we develop and validate measurement approaches for evaluating the quality -- comprehensibility, perceived actionability, and perceived efficacy -- of security advice. Third, we deploy these measurement approaches to evaluate the 374 unique pieces of security advice in a user-study with 1,586 users and 41 professional security experts. Our results suggest a crisis of advice prioritization. The majority of advice is perceived by the most users to be at least somewhat actionable, and somewhat comprehensible. Yet, both users and experts struggle to prioritize this advice. For example, experts perceive 89% of the hundreds of studied behaviors as being effective, and identify 118 of them as being among the "top 5" things users should do, leaving end-users on their own to prioritize and take action to protect themselves.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/redmiles](https://www.usenix.org/conference/usenixsecurity20/presentation/redmiles)
- **PDF:** [https://www.usenix.org/system/files/sec20-redmiles.pdf](https://www.usenix.org/system/files/sec20-redmiles.pdf)
## Understanding security mistakes developers make: Qualitative analysis from Build It, Break It, Fix It.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#understanding-security-mistakes-developers-make-qualitative-analysis-from-build-it-break-it-fix-it)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#understanding-security-mistakes-developers-make-qualitative-analysis-from-build-it-break-it-fix-it)
### Authors
* Daniel Votipka, University of Maryland
* Kelsey R. Fulton, University of Maryland
* James Parker, University of Maryland
* Matthew Hou, University of Maryland
* Michelle L. Mazurek, University of Maryland
* Michael Hicks, University of Maryland
### Abstract
> Secure software development is a challenging task requiring consideration of many possible threats and mitigations. This paper investigates how and why programmers, despite a baseline of security experience, make security-relevant errors. To do this, we conducted an in-depth analysis of 94 submissions to a secure-programming contest designed to mimic real-world constraints: correctness, performance, and security. In addition to writing secure code, participants were asked to search for vulnerabilities in other teams’ programs; in total, teams submitted 866 exploits against the submissions we considered. Over an intensive six-month period, we used iterative open coding to manually, but systematically, characterize each submitted project and vulnerability (including vulnerabilities we identified ourselves). We labeled vulnerabilities by type, attacker control allowed, and ease of exploitation, and projects according to security implementation strategy. Several patterns emerged. For example, simple mistakes were least common: only 21% of projects introduced such an error. Conversely, vulnerabilities arising from a misunderstanding of security concepts were significantly more common, appearing in 78% of projects. Our results have implications for improving secure-programming APIs, API documentation, vulnerability-finding tools, and security education.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/votipka-understanding](https://www.usenix.org/conference/usenixsecurity20/presentation/votipka-understanding)
- **PDF:** [https://www.usenix.org/system/files/sec20-votipka-understanding.pdf](https://www.usenix.org/system/files/sec20-votipka-understanding.pdf)
## Empirical Measurement of Systemic 2FA Usability.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#empirical-measurement-of-systemic-2fa-usability)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#empirical-measurement-of-systemic-2fa-usability)
### Authors
* Joshua Reynolds, University of Illinois at Urbana-Champaign and University of California, Berkeley and International Computer Science Institute
* Nikita Samarin, University of California, Berkeley and International Computer Science Institute
* Joseph Barnes, University of Illinois at Urbana-Champaign
* Taylor Judd, University of Illinois at Urbana-Champaign
* Joshua Mason, University of Illinois at Urbana-Champaign
* Michael Bailey, University of Illinois at Urbana-Champaign
* Serge Egelman, University of California, Berkeley and International Computer Science Institute
### Abstract
> Two-Factor Authentication (2FA) hardens an organization against user account compromise, but adds an extra step to organizations’ mission-critical tasks. We investigate to what extent quantitative analysis of operational logs of 2FA systems both supports and challenges recent results from user studies and surveys identifying usability challenges in 2FA systems. Using tens of millions of logs and records kept at two public universities, we quantify the at-scale impact on organizations and their employees during a mandatory 2FA implementation. We show the multiplicative effects of device remembrance, fragmented login services, and authentication timeouts on user burden. We find that user burden does not deviate far from other compliance and risk management time requirements already common to large organizations. We investigate the cause of more than one in twenty 2FA ceremonies being aborted or failing, and the variance in user experience across users. We hope our analysis will empower more organizations to protect themselves with 2FA.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/reynolds](https://www.usenix.org/conference/usenixsecurity20/presentation/reynolds)
- **PDF:** [https://www.usenix.org/system/files/sec20-reynolds.pdf](https://www.usenix.org/system/files/sec20-reynolds.pdf)
## What Twitter Knows: Characterizing Ad Targeting Practices, User Perceptions, and Ad Explanations Through Users' Own Twitter Data.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#what-twitter-knows-characterizing-ad-targeting-practices-user-perceptions-and-ad-explanations-through-users-own-twitter-data)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#what-twitter-knows-characterizing-ad-targeting-practices-user-perceptions-and-ad-explanations-through-users-own-twitter-data)
### Authors
* Mir, University of Washington / University of Chicago
* a Wei, University of Washington / University of Chicago
* Madison Stamos, University of Chicago
* Sophie Veys, University of Chicago
* Nathan Reitinger, University of Maryland
* Justin Goodman, University of Maryland
* Margot Herman, University of Chicago
* Dorota Filipczuk, University of Southampton
* Ben Weinshel, University of Chicago
* Michelle L. Mazurek, University of Maryland
* Blase Ur, University of Chicago
### Abstract
> Although targeted advertising has drawn significant attention from privacy researchers, many critical empirical questions remain. In particular, only a few of the dozens of targeting mechanisms used by major advertising platforms are well understood, and studies examining users’ perceptions of ad targeting often rely on hypothetical situations. Further, it is unclear how well existing transparency mechanisms, from data-access rights to ad explanations, actually serve the users they are intended for. To develop a deeper understanding of the current targeting advertising ecosystem, this paper engages 231 participants’ own Twitter data, containing ads they were shown and the associated targeting criteria, for measurement and user study. We find many targeting mechanisms ignored by prior work — including advertiser-uploaded lists of specific users, lookalike audiences, and retargeting campaigns — are widely used on Twitter. Crucially, participants found these understudied practices among the most privacy invasive. Participants also found ad explanations designed for this study more useful, more comprehensible, and overall more preferable than Twitter’s current ad explanations. Our findings underscore the benefits of data access, characterize unstudied facets of targeted advertising, and identify potential directions for improving transparency in targeted advertising.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/wei](https://www.usenix.org/conference/usenixsecurity20/presentation/wei)
- **PDF:** [https://www.usenix.org/system/files/sec20-wei.pdf](https://www.usenix.org/system/files/sec20-wei.pdf)
## The Impact of Ad-Blockers on Product Search and Purchase Behavior: A Lab Experiment.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#the-impact-of-ad-blockers-on-product-search-and-purchase-behavior-a-lab-experiment)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#the-impact-of-ad-blockers-on-product-search-and-purchase-behavior-a-lab-experiment)
### Authors
* Alisa Frik, International Computer Science Institute / UC Berkeley
* Amelia Havil, Heinz College, Carnegie Mellon University
* Aless, Heinz College, Carnegie Mellon University
* ro Acquisti, Heinz College, Carnegie Mellon University
### Abstract
> Ad-blocking applications have become increasingly popular among Internet users. Ad-blockers offer various privacy- and security-enhancing features: they can reduce personal data collection and exposure to malicious advertising, help safeguard users' decision-making autonomy, reduce users' costs (by increasing the speed of page loading), and improve the browsing experience (by reducing visual clutter).  On the other hand, the online advertising industry has claimed that ads increase consumers' economic welfare by helping  them find better, cheaper deals faster. If so, using ad-blockers would deprive consumers of these benefits. However, little is known about the actual economic impact of ad-blockers. We designed a lab experiment (N=212) with real economic incentives to understand the impact of ad-blockers on consumers' product searching and purchasing behavior, and the resulting consumer outcomes. We focus on the effects of blocking contextual ads (ads targeted to individual, potentially sensitive, contexts, such as search queries in a search engine or the content of web pages) on how participants searched for and purchased various products online, and the resulting consumer welfare. We find that blocking contextual ads did not have a statistically significant effect on the prices of products participants chose to purchase, the time they spent searching for them, or how satisfied they were with the chosen products, prices, and perceived quality. Hence we do not reject the null hypothesis that consumer behavior and outcomes stay constant when such ads are blocked or shown. We conclude that the use of ad-blockers does not seem to compromise consumer economic welfare (along the metrics captured in the experiment) in exchange for privacy and security benefits. We discuss the implications of this work in terms of end-users' privacy, the study's limitations, and future work to extend these results.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/frik](https://www.usenix.org/conference/usenixsecurity20/presentation/frik)
- **PDF:** [https://www.usenix.org/system/files/sec20-frik.pdf](https://www.usenix.org/system/files/sec20-frik.pdf)
## Symbolic execution with SymCC: Don't interpret, compile!
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#symbolic-execution-with-symcc-dont-interpret-compile)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#symbolic-execution-with-symcc-dont-interpret-compile)
### Authors
* Sebastian Poeplau, EURECOM
* Aurélien Francillon, EURECOM
### Abstract
> A major impediment to practical symbolic execution is speed, especially when compared to near-native speed solutions like fuzz testing. We propose a compilation-based approach to symbolic execution that performs better than state-of-the-art implementations by orders of magnitude. We present SymCC, an LLVM-based C and C++ compiler that builds concolic execution right into the binary. It can be used by software developers as a drop-in replacement for clang and clang++, and we show how to add support for other languages with little effort. In comparison with KLEE, SymCC is faster by up to three orders of magnitude and an average factor of 12. It also outperforms Qsym, a system that recently showed great performance improvements over other implementations, by up to two orders of magnitude and an average factor of 10. Using it on real-world software, we found that our approach consistently achieves higher coverage, and we discovered two vulnerabilities in the heavily tested OpenJPEG project, which have been confirmed by the project maintainers and assigned CVE identifiers.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/poeplau](https://www.usenix.org/conference/usenixsecurity20/presentation/poeplau)
- **PDF:** [https://www.usenix.org/system/files/sec20-poeplau.pdf](https://www.usenix.org/system/files/sec20-poeplau.pdf)
## Sys: A Static/Symbolic Tool for Finding Good Bugs in Good (Browser) Code.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#sys-a-static-symbolic-tool-for-finding-good-bugs-in-good-browser-code)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#sys-a-static-symbolic-tool-for-finding-good-bugs-in-good-browser-code)
### Authors
* Fraser Brown, Stanford University
* Deian Stefan, UC San Diego
* Dawson Engler, Stanford University
### Abstract
> We describe and evaluate an extensible bug-finding tool, Sys, designed to automatically find security bugs in huge codebases, even when easy-to-find bugs have been already picked clean by years of aggressive automatic checking. Sys uses a two-step approach to find such tricky errors. First, it breaks down large—tens of millions of lines—systems into small pieces using user-extensible static checkers to quickly find and mark potential errorsites. Second, it uses user-extensible symbolic execution to deeply examine these potential errorsites for actual bugs. Both the checkers and the system itself are small (6KLOC total). Sys is flexible, because users must be able to exploit domain- or system-specific knowledge in order to detect errors and suppress false positives in real codebases. Sys finds many security bugs (51 bugs, 43 confirmed) in well-checked code—the Chrome and Firefox web browsers—and code that some symbolic tools struggle with—the FreeBSD operating system. Sys’s most interesting results include: an exploitable, cash bountied CVE in Chrome that was fixed in seven hours (and whose patch was backported in two days); a trio of bountied bugs with a CVE in Firefox; and a bountied bug in Chrome’s audio support.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/brown](https://www.usenix.org/conference/usenixsecurity20/presentation/brown)
- **PDF:** [https://www.usenix.org/system/files/sec20-brown.pdf](https://www.usenix.org/system/files/sec20-brown.pdf)
## Everything Old is New Again: Binary Security of WebAssembly.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#everything-old-is-new-again-binary-security-of-webassembly)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#everything-old-is-new-again-binary-security-of-webassembly)
### Authors
* Daniel Lehmann, University of Stuttgart
* Johannes Kinder, Bundeswehr University Munich
* Michael Pradel, University of Stuttgart
### Abstract
> WebAssembly is an increasingly popular compilation target designed to run code in browsers and on other platforms safely and securely, by strictly separating code and data, enforcing types, and limiting indirect control flow. Still, vulnerabilities in memory-unsafe source languages can translate to vulnerabilities in WebAssembly binaries. In this paper, we analyze to what extent vulnerabilities are exploitable in WebAssembly binaries, and how this compares to native code. We find that many classic vulnerabilities which, due to common mitigations, are no longer exploitable in native binaries, are completely exposed in WebAssembly. Moreover, WebAssembly enables unique attacks, such as overwriting supposedly constant data or manipulating the heap using a stack overflow. We present a set of attack primitives that enable an attacker (i) to write arbitrary memory, (ii) to overwrite sensitive data, and (iii) to trigger unexpected behavior by diverting control flow or manipulating the host environment. We provide a set of vulnerable proof-of-concept applications along with complete end-to-end exploits, which cover three WebAssembly platforms. An empirical risk assessment on real-world binaries and SPEC CPU programs compiled to WebAssembly shows that our attack primitives are likely to be feasible in practice. Overall, our findings show a perhaps surprising lack of binary security in WebAssembly. We discuss potential protection mechanisms to mitigate the resulting risks.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/lehmann](https://www.usenix.org/conference/usenixsecurity20/presentation/lehmann)
- **PDF:** [https://www.usenix.org/system/files/sec20-lehmann.pdf](https://www.usenix.org/system/files/sec20-lehmann.pdf)
## AURORA: Statistical Crash Analysis for Automated Root Cause Explanation.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#aurora-statistical-crash-analysis-for-automated-root-cause-explanation)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#aurora-statistical-crash-analysis-for-automated-root-cause-explanation)
### Authors
* Tim Blazytko, Ruhr-Universität Bochum
* Moritz Schlögel, Ruhr-Universität Bochum
* Cornelius Aschermann, Ruhr-Universität Bochum
* Ali Abbasi, Ruhr-Universität Bochum
* Joel Frank, Ruhr-Universität Bochum
* Simon Wörner, Ruhr-Universität Bochum
* Thorsten Holz, Ruhr-Universität Bochum
### Abstract
> Given the huge success of automated software testing techniques, a large amount of crashes is found in practice. Identifying the root cause of a crash is a time-intensive endeavor, causing a disproportion between finding a crash and fixing the underlying software fault. To address this problem, various approaches have been proposed that rely on techniques such as reverse execution and backward taint analysis. Still, these techniques are either limited to certain fault types or provide an analyst with assembly instructions, but no context information or explanation of the underlying fault.In this paper, we propose an automated analysis approach that does not only identify the root cause of a given crashing input for a binary executable, but also provides the analyst with context information on the erroneous behavior that characterizes crashing inputs. Starting with a single crashing input, we generate a diverse set of similar inputs that either also crash the program or induce benign behavior. We then trace the program's states while executing each found input and generate predicates, i.e., simple Boolean expressions that capture behavioral differences between crashing and non-crashing inputs. A statistical analysis of all predicates allows us to identify the predicate pinpointing the root cause, thereby not only revealing the location of the root cause, but also providing an analyst with an explanation of the misbehavior a crash exhibits at this location. We implement our approach in a tool called AURORA and evaluate it on 25 diverse software faults. Our evaluation shows that AURORA is able to uncover root causes even for complex bugs. For example, it succeeded in cases where many millions of instructions were executed between developer fix and crashing location. In contrast to existing approaches, AURORA is also able to handle bugs with no data dependency between root cause and crash, such as type confusion bugs.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/blazytko](https://www.usenix.org/conference/usenixsecurity20/presentation/blazytko)
- **PDF:** [https://www.usenix.org/system/files/sec20fall_blazytko_prepub.pdf](https://www.usenix.org/system/files/sec20fall_blazytko_prepub.pdf)
## SmartVerif: Push the Limit of Automation Capability of Verifying Security Protocols by Dynamic Strategies.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#smartverif-push-the-limit-of-automation-capability-of-verifying-security-protocols-by-dynamic-strategies)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#smartverif-push-the-limit-of-automation-capability-of-verifying-security-protocols-by-dynamic-strategies)
### Authors
* Yan Xiong, University of Science and Technology of China
* Cheng Su, University of Science and Technology of China
* Wenchao Huang, University of Science and Technology of China
* Fuyou Miao, University of Science and Technology of China
* Wansen Wang, University of Science and Technology of China
* Hengyi Ouyang, University of Science and Technology of China
### Abstract
> Current formal approaches have been successfully used to find design flaws in many security protocols. However, it is still challenging to automatically analyze protocols due to their large or infinite state spaces. In this paper, we propose SmartVerif, a novel and general framework that pushes the limit of automation capability of state-of-the-art verification approaches. The primary technical contribution is the dynamic strategy inside SmartVerif, which can be used to smartly search proof paths. Different from the non-trivial and error-prone design of existing static strategies, the design of our dynamic strategy is simple and flexible: it can automatically optimize itself according to the security protocols without any human intervention. With the optimized strategy, SmartVerif can localize and prove supporting lemmata, which leads to higher probability of success in verification. The insight of designing the strategy is that the node representing a supporting lemma is on an incorrect proof path with lower probability, when a random strategy is given. Hence, we implement the strategy around the insight by introducing a reinforcement learning algorithm. We also propose several methods to deal with other technical problems in implementing SmartVerif. Experimental results show that SmartVerif can automatically verify all security protocols studied in this paper. The case studies also validate the efficiency of our dynamic strategy.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/xiong](https://www.usenix.org/conference/usenixsecurity20/presentation/xiong)
- **PDF:** [https://www.usenix.org/system/files/sec20summer_xiong_prepub.pdf](https://www.usenix.org/system/files/sec20summer_xiong_prepub.pdf)
## BigMAC: Fine-Grained Policy Analysis of Android Firmware.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#bigmac-fine-grained-policy-analysis-of-android-firmware)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#bigmac-fine-grained-policy-analysis-of-android-firmware)
### Authors
* Grant Hern, University of Florida
* ez, University of Florida
* Dave (Jing) Tian, Purdue University
* Anurag Swarnim Yadav, University of Florida
* Byron J. Williams, University of Florida
* Kevin R.B. Butler, University of Florida
### Abstract
> The Android operating system is the world's dominant mobile computing platform. To defend against malicious applications and external attack, Android relies upon a complex combination of discretionary and mandatory access control mechanisms, including Linux capabilities, to maintain least privilege. To understand the impact and interaction between these layers, we created a framework called BigMAC that combines and instantiates all layers of the policy together in a fine grained graph supporting millions of edges. Our model filters out paths and types not in use on actual systems that policy analysis alone would consider. Unlike previous work which requires a rooted device, using only static firmware and Android domain knowledge, we are able to extract and recreate the security state of a running system, achieving a process credential recovery at best 74.7% and a filesystem DAC and MAC accuracy of over 98%. Using BigMAC, we develop attack queries to discover sets of objects that can be influenced by untrusted applications and external peripherals. Our evaluation against Samsung S8+ and LG G7 firmwares reveals multiple policy concerns, including untrusted apps on LG being able to communicate with a kernel monitoring service, Samsung S8+ allowing IPC from untrusted apps to some root processes, at least 24 processes with the CAP_SYS_ADMIN capability, and system_server with the capability to load kernel modules. We have reported our findings to the corresponding vendors and release BigMAC for the community.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/hernandez](https://www.usenix.org/conference/usenixsecurity20/presentation/hernandez)
- **PDF:** [https://www.usenix.org/system/files/sec20-hernandez.pdf](https://www.usenix.org/system/files/sec20-hernandez.pdf)
## From Needs to Actions to Secure Apps? The Effect of Requirements and Developer Practices on App Security.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#from-needs-to-actions-to-secure-apps-the-effect-of-requirements-and-developer-practices-on-app-security)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#from-needs-to-actions-to-secure-apps-the-effect-of-requirements-and-developer-practices-on-app-security)
### Authors
* Charles Weir, Lancaster University
* Ben Hermann, Paderborn University
* Sascha Fahl, Leibniz University Hannover
### Abstract
> Increasingly mobile device users are being hurt by security or privacy issues with the apps they use. App developers can help prevent this; inexpensive security assurance techniques to do so are now well established, but do developers use them? And if they do so, is that reflected in more secure apps? From a survey of 335 successful app developers, we conclude that less than a quarter of such professionals have access to security experts; that less than a third use assurance techniques regularly; and that few have made more than cosmetic changes as a result of the European GDPR legislation. Reassuringly, we found that app developers tend to use more assurance techniques and make more frequent security updates when (1) they see more need for security, and (2) there is security expert or champion involvement. In a second phase we downloaded the apps corresponding to each completed survey and analyzed them for SSL issues, cryptographic API misuse and privacy leaks, finding only one fifth defect-free as far as our tools could detect. We found that having security experts or champions involved led to more cryptographic API issues, probably because of greater cryptography usage; but that measured defect counts did not relate to the need for security, nor to the use of assurance techniques. This offers two major opportunities for research: to further improve the detection of security issues in app binaries; and to support increasing the use of assurance techniques in the app developer community.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/weir](https://www.usenix.org/conference/usenixsecurity20/presentation/weir)
- **PDF:** [https://www.usenix.org/system/files/sec20-weir.pdf](https://www.usenix.org/system/files/sec20-weir.pdf)
## FANS: Fuzzing Android Native System Services via Automated Interface Analysis.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#fans-fuzzing-android-native-system-services-via-automated-interface-analysis)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#fans-fuzzing-android-native-system-services-via-automated-interface-analysis)
### Authors
* Baozheng Liu, Institute of Network Science and Cyberspace, Tsinghua University; Beijing National Research Center for Information Science and Technology
* Chao Zhang, Institute of Network Science and Cyberspace, Tsinghua University; Beijing National Research Center for Information Science and Technology
* Guang Gong, Alpha Lab, 360 Internet Security Center
* Yishun Zeng, Institute of Network Science and Cyberspace, Tsinghua University; Beijing National Research Center for Information Science and Technology
* Haifeng Ruan, Department of Computer Science and Technology, Tsinghua University
* Jianwei Zhuge, Institute of Network Science and Cyberspace, Tsinghua University; Beijing National Research Center for Information Science and Technology
### Abstract
> Android native system services provide essential supports and fundamental functionalities for user apps. Finding vulnerabilities in them is crucial for Android security. Fuzzing is one of the most popular vulnerability discovery solutions, yet faces several challenges when applied to Android native system services. First, such services are invoked via a special interprocess communication (IPC) mechanism, namely binder, via service-specific interfaces. Thus, the fuzzer has to recognize all interfaces and generate interface-specific test cases automatically. Second, effective test cases should satisfy the interface model of each interface. Third, the test cases should also satisfy the semantic requirements, including variable dependencies and interface dependencies. In this paper, we propose an automated generation-based fuzzing solution FANS to find vulnerabilities in Android native system services. It first collects all interfaces in target services and uncovers deep nested multi-level interfaces to test. Then, it automatically extracts interface models, including feasible transaction code, variable names and types in the transaction data, from the abstract syntax tree (AST) of target interfaces. Further, it infers variable dependencies in transactions via the variable name and type knowledge, and infers interface dependencies via the generation and use relationship. Finally, it employs the interface models and dependency knowledge to generate sequences of transactions, which have valid formats and semantics, to test interfaces of target services. We implemented a prototype of FANS from scratch and evaluated it on six smartphones equipped with a recent version of Android, i.e., android-9.0.0_r46 , and found 30 unique vulnerabilities deduplicated from thousands of crashes, of which 20 have been confirmed by Google. Surprisingly, we also discovered 138 unique Java exceptions during fuzzing.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/liu](https://www.usenix.org/conference/usenixsecurity20/presentation/liu)
- **PDF:** [https://www.usenix.org/system/files/sec20-liu.pdf](https://www.usenix.org/system/files/sec20-liu.pdf)
## Chaperone: Real-time Locking and Loss Prevention for Smartphones.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#chaperone-real-time-locking-and-loss-prevention-for-smartphones)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#chaperone-real-time-locking-and-loss-prevention-for-smartphones)
### Authors
* Jiayi Chen, Cheriton School of Computer Science, University of Waterloo
* Urs Hengartner, Cheriton School of Computer Science, University of Waterloo
* Hassan Khan, School of Computer Science, University of Guelph
* Mohammad Mannan, Concordia Institute for Information Systems Engineering, Concordia University
### Abstract
> Smartphone loss affects millions of users each year and causes significant monetary and data losses. Device tracking services (e.g., Google's "Find My Device") enable the device owner to secure or recover a lost device, but they can be easily circumvented with physical access (e.g., turn on airplane mode). An effective loss prevention solution should immediately lock the phone and alert the owner before they leave without the phone. We present such an opensource, real-time system called Chaperone that does not require additional hardware. Chaperone adopts active acoustic sensing to detect a phone's unattended status by tracking the owner's departure via the built-in speaker and microphone. It is designed to robustly operate in real-world scenarios characterized by bursting high-frequency noise, bustling crowds, and diverse environmental layouts. We evaluate Chaperone by conducting over 1,300 experiments at a variety of locations including coffee shops, restaurants, transit stations, and cars, under different testing conditions. Chaperone provides an overall precision rate of 93% and an overall recall rate of 96% for smartphone loss events. Chaperone detects these events in under 0.5 seconds for 95% of the successful detection cases. We conduct a user study (n = 17) to investigate participants' smartphone loss experiences, collect feedback on using Chaperone, and study different alert methods. Most participants were satisfied with Chaperone's performance for its detection ability, detection accuracy, and power consumption. Finally, we provide an implementation of Chaperone as a standalone Android app.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/chen-jiayi](https://www.usenix.org/conference/usenixsecurity20/presentation/chen-jiayi)
- **PDF:** [https://www.usenix.org/system/files/sec20-chen-jiayi.pdf](https://www.usenix.org/system/files/sec20-chen-jiayi.pdf)
## Towards HTTPS Everywhere on Android: We Are Not There Yet.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#towards-https-everywhere-on-android-we-are-not-there-yet)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#towards-https-everywhere-on-android-we-are-not-there-yet)
### Authors
* Andrea Possemato, EURECOM / IDEMIA
* Yanick Fratantonio, EURECOM
### Abstract
> Nowadays, virtually all mobile apps rely on communicating with a network backend. Given the sensitive nature of the data exchanged between apps and their backends, securing these network communications is of growing importance. In recent years, Google has developed a number of security mechanisms for Android apps, ranging from multiple KeyStores to the recent introduction of the new Network Security Policy, an XML-based configuration file that allows apps to define their network security posture. In this paper, we perform the first comprehensive study on these new network defense mechanisms. In particular, we present them in detail, we discuss the attacks they are defending from, and the relevant threat models. We then discuss the first large-scale analysis on this aspect. During June and July 2019, we crawled 125,419 applications and we found how only 16,332 apps adopt this new security feature. We then focus on these apps, and we uncover how developers adopt weak and potentially vulnerable network security configurations. We note that, in November 2019, Google then made the default policy stricter, which would help the adoption. We thus opted to re-crawl the same dataset (from April to June 2020) and we repeated the experiments: while more apps do adopt this new security mechanism, a significant portion of them still do not take fully advantage of it (e.g., by allowing usage of insecure protocols). We then set out to explore the root cause of these weaknesses (i.e., the why). Our analysis showed that app developers often copy-paste vulnerable policies from popular developer websites (e.g., StackOverflow). We also found that several popular ad libraries require apps to weaken their security policy, the key problem lying in the vast complexity of the ad ecosystem. As a last contribution, we propose a new extension of the Network Security Policy, so to allow app developers to embed problematic ad libraries without the need to weaken the security of their entire app.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/possemato](https://www.usenix.org/conference/usenixsecurity20/presentation/possemato)
- **PDF:** [https://www.usenix.org/system/files/sec20-possemato.pdf](https://www.usenix.org/system/files/sec20-possemato.pdf)
## Sunrise to Sunset: Analyzing the End-to-end Life Cycle and Effectiveness of Phishing Attacks at Scale.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#sunrise-to-sunset-analyzing-the-end-to-end-life-cycle-and-effectiveness-of-phishing-attacks-at-scale)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#sunrise-to-sunset-analyzing-the-end-to-end-life-cycle-and-effectiveness-of-phishing-attacks-at-scale)
### Authors
* Adam Oest, Arizona State University
* Penghui Zhang, Arizona State University
* Brad Wardman, PayPal
* Eric Nunes, PayPal
* Jakub Burgis, PayPal
* Ali Z, Google
* Kurt Thomas, Google
* Adam Doupé, Arizona State University
* Gail-Joon Ahn, Arizona State University, Samsung Research
### Abstract
> Despite an extensive anti-phishing ecosystem, phishing attacks continue to capitalize on gaps in detection to reach a significant volume of daily victims. In this paper, we isolate and identify these detection gaps by measuring the end-to-end life cycle of large-scale phishing attacks. We develop a unique framework—Golden Hour—that allows us to passively measure victim traffic to phishing pages while proactively protecting tens of thousands of accounts in the process. Over a one year period, our network monitor recorded 4.8 million victims who visited phishing pages, excluding crawler traffic. We use these events and related data sources to dissect phishing campaigns: from the time they first come online, to email distribution, to visitor traffic, to ecosystem detection, and finally to account compromise. We find the average campaign from start to the last victim takes just 21 hours. At least 7.42% of visitors supply their credentials and ultimately experience a compromise and subsequent fraudulent transaction. Furthermore, a small collection of highly successful campaigns are responsible for 89.13% of victims. Based on our findings, we outline potential opportunities to respond to these sophisticated attacks.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/oest-sunrise](https://www.usenix.org/conference/usenixsecurity20/presentation/oest-sunrise)
- **PDF:** [https://www.usenix.org/system/files/sec20-oest-sunrise.pdf](https://www.usenix.org/system/files/sec20-oest-sunrise.pdf)
## PhishTime: Continuous Longitudinal Measurement of the Effectiveness of Anti-phishing Blacklists.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#phishtime-continuous-longitudinal-measurement-of-the-effectiveness-of-anti-phishing-blacklists)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#phishtime-continuous-longitudinal-measurement-of-the-effectiveness-of-anti-phishing-blacklists)
### Authors
* Adam Oest, Arizona State University
* Yeganeh Safaei, Arizona State University
* Penghui Zhang, Arizona State University
* Brad Wardman, PayPal
* Kevin Tyers, PayPal
* Yan Shoshitaishvili, Arizona State University
* Adam Doupé, Arizona State University
* Gail-Joon Ahn, Arizona State University, Samsung Research
### Abstract
> Due to their ubiquity in modern web browsers, anti-phishing blacklists are a key defense against large-scale phishing attacks. However, sophistication in phishing websites—such as evasion techniques that seek to defeat these blacklists—continues to grow. Yet, the effectiveness of blacklists against evasive websites is difficult to measure, and there have been no methodical efforts to make and track such measurements, at the ecosystem level, over time.We propose a framework for continuously identifying unmitigated phishing websites in the wild, replicating key aspects of their configuration in a controlled setting, and generating longitudinal experiments to measure the ecosystem’s protection. In six experiment deployments over nine months, we systematically launch and report 2,862 new (innocuous) phishing websites to evaluate the performance (speed and coverage) and consistency of blacklists, with the goal of improving them.We show that methodical long-term empirical measurements are an effective strategy for proactively detecting weaknesses in the anti-phishing ecosystem. Through our experiments, we identify and disclose several such weaknesses, including a class of behavior-based JavaScript evasion that blacklists were unable to detect. We find that enhanced protections on mobile devices and the expansion of evidence-based reporting protocols are critical ecosystem improvements that could better protect users against modern phishing attacks, which routinely seek to evade detection infrastructure.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/oest-phishtime](https://www.usenix.org/conference/usenixsecurity20/presentation/oest-phishtime)
- **PDF:** [https://www.usenix.org/system/files/sec20-oest-phishtime.pdf](https://www.usenix.org/system/files/sec20-oest-phishtime.pdf)
## Who's Calling? Characterizing Robocalls through Audio and Metadata Analysis.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#whos-calling-characterizing-robocalls-through-audio-and-metadata-analysis)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#whos-calling-characterizing-robocalls-through-audio-and-metadata-analysis)
### Authors
* Sathvik Prasad, North Carolina State University
* Elijah Bouma-Sims, North Carolina State University
* Athishay Kiran Mylappan, North Carolina State University
* Bradley Reaves, North Carolina State University
### Abstract
> Unsolicited calls are one of the most prominent security issues facing individuals today. Despite wide-spread anecdotal discussion of the problem, many important questions remain unanswered. In this paper, we present the first large-scale, longitudinal analysis of unsolicited calls to a honeypot of up to 66,606 lines over 11 months. From call metadata we characterize the long-term trends of unsolicited calls, develop the first techniques to measure voicemail spam, wangiri attacks, and identify unexplained high-volume call incidences. Additionally, we mechanically answer a subset of the call attempts we receive to cluster related calls into operational campaigns, allowing us to characterize how these campaigns use telephone numbers. Critically, we find no evidence that answering unsolicited calls increases the amount of unsolicited calls received, overturning popular wisdom. We also find that we can reliably isolate individual call campaigns, in the process revealing the extent of two distinct Social Security scams while empirically demonstrating the majority of campaigns rarely reuse phone numbers. These analyses comprise powerful new tools and perspectives for researchers, investigators, and a beleaguered public.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/prasad](https://www.usenix.org/conference/usenixsecurity20/presentation/prasad)
- **PDF:** [https://www.usenix.org/system/files/sec20-prasad.pdf](https://www.usenix.org/system/files/sec20-prasad.pdf)
## See No Evil: Phishing for Permissions with False Transparency.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#see-no-evil-phishing-for-permissions-with-false-transparency)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#see-no-evil-phishing-for-permissions-with-false-transparency)
### Authors
* Güliz Seray Tuncay, Google, University of Illinois at Urbana-Champaign
* Jingyu Qian, University of Illinois at Urbana-Champaign
* Carl A. Gunter, University of Illinois at Urbana-Champaign
### Abstract
> Android introduced runtime permissions in order to provide users with more contextual information to make informed decisions as well as with finer granularity when dealing with permissions. In this work, we identified that the correct operation of the runtime permission model relies on certain implicit assumptions which can conveniently be broken by adversaries to illegitimately obtain permissions from the background while impersonating foreground apps. We call this detrimental scenario false transparency attacks. These attacks constitute a serious security threat to the Android platform as they invalidate the security guarantees of 1) runtime permissions by enabling background apps to spoof the context and identity of foreground apps when requesting permissions and of 2) Android permissions altogether by allowing adversaries to exploit users' trust in other apps to obtain permissions. We demonstrated via a user study we conducted on Amazon Mechanical Turk that mobile users' comprehension of runtime permissions renders them susceptible to this attack vector. We carefully designed our attacks to launch strategically in order to appear persuasive and verified the validity of our design strategies through our user study. To demonstrate the feasibility of our attacks, we conducted an in-lab user study in a realistic setting and showed that none of the subjects noticed our attacks. Finally, we discuss why the existing defenses against mobile phishing fail in the context of false transparency attacks. In particular, we disclose the security vulnerabilities we identified in a key security mechanism added in Android 10. We then propose a list of countermeasures to be implemented on the Android platform and on app stores to practically tackle false transparency attacks.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/tuncay](https://www.usenix.org/conference/usenixsecurity20/presentation/tuncay)
- **PDF:** [https://www.usenix.org/system/files/sec20-tuncay.pdf](https://www.usenix.org/system/files/sec20-tuncay.pdf)
## A different cup of TI? The added value of commercial threat intelligence.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#a-different-cup-of-ti-the-added-value-of-commercial-threat-intelligence)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#a-different-cup-of-ti-the-added-value-of-commercial-threat-intelligence)
### Authors
* X, Delft University of Technology, the Netherlands
* er Bouwman, Delft University of Technology, the Netherlands
* Harm Griffioen, Hasso Plattner Institute, University of Potsdam, Germany
* Jelle Egbers, Delft University of Technology, the Netherlands
* Christian Doerr, Hasso Plattner Institute, University of Potsdam, Germany
* Bram Klievink, Leiden University, the Netherlands
* Michel van Eeten, Delft University of Technology, the Netherlands
### Abstract
> Commercial threat intelligence is thought to provide unmatched coverage on attacker behavior, but it is out of reach for many organizations due to its hefty price tag. This paper presents the first empirical assessment of the services of commercial threat intelligence providers. For two leading vendors, we describe what these services consist of and compare their indicators with each other. There is almost no overlap between them, nor with four large open threat intelligence feeds. Even for 22 specific threat actors – which both vendors claim to track – we find an average overlap of only 2.5% to 4.0% between the indicator feeds. The small number of overlapping indicators show up in the feed of the other vendor with a delay of, on average, a month. These findings raise questions on the coverage and timeliness of paid threat intelligence.We also conducted 14 interviews with security professionals that use paid threat intelligence. We find that value in this market is understood differently than prior work on quality metrics has assumed. Poor coverage and small volume appear less of a problem to customers. They seem to be optimizing for the workflow of their scarce resource – analyst time – rather than for the detection of threats. Respondents evaluate TI mostly through informal processes and heuristics, rather than the quantitative metrics that research has proposed.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/bouwman](https://www.usenix.org/conference/usenixsecurity20/presentation/bouwman)
- **PDF:** [https://www.usenix.org/system/files/sec20-bouwman.pdf](https://www.usenix.org/system/files/sec20-bouwman.pdf)
## HybCache: Hybrid Side-Channel-Resilient Caches for Trusted Execution Environments.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#hybcache-hybrid-side-channel-resilient-caches-for-trusted-execution-environments)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#hybcache-hybrid-side-channel-resilient-caches-for-trusted-execution-environments)
### Authors
* Ghada Dessouky, Technische Universität Darmstadt
* Tommaso Frassetto, Technische Universität Darmstadt
* Ahmad-Reza Sadeghi, Technische Universität Darmstadt
### Abstract
> Modern multi-core processors share cache resources for maximum cache utilization and performance gains. However, this leaves the cache vulnerable to side-channel attacks, where inherent timing differences in shared cache behavior are exploited to infer information on the victim’s execution patterns, ultimately leaking private information such as a secret key. The root cause for these attacks is mutually distrusting processes sharing the cache entries and accessing them in a deterministic and consistent manner. Various defenses against cache side-channel attacks have been proposed. However, they suffer from serious shortcomings: they either degrade performance significantly, impose impractical restrictions, or can only defeat certain classes of these attacks. More importantly, they assume that side-channel-resilient caches are required for the entire execution workload and do not allow the possibility to selectively enable the mitigation only for the security-critical portion of the workload.We present a generic mechanism for a flexible and soft partitioning of set-associative caches and propose a hybrid cache architecture, called HybCache. HybCache can be configured to selectively apply side-channel-resilient cache behavior only for isolated execution domains, while providing the non-isolated execution with conventional cache behavior, capacity and performance. An isolation domain can include one or more processes, specific portions of code, or a Trusted Execution Environment (e.g., SGX or TrustZone). We show that, with minimal hardware modifications and kernel support, HybCache can provide side-channel-resilient cache only for isolated execution with a performance overhead of 3.5–5%, while incurring no performance overhead for the remaining execution workload. We provide a simulator-based and hardware implementation of HybCache to evaluate the performance and area overheads, and show how HybCache mitigates typical access-based and contention-based cache attacks

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/dessouky](https://www.usenix.org/conference/usenixsecurity20/presentation/dessouky)
- **PDF:** [https://www.usenix.org/system/files/sec20-dessouky.pdf](https://www.usenix.org/system/files/sec20-dessouky.pdf)
## CopyCat: Controlled Instruction-Level Attacks on Enclaves.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#copycat-controlled-instruction-level-attacks-on-enclaves)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#copycat-controlled-instruction-level-attacks-on-enclaves)
### Authors
* Daniel Moghimi, Worcester Polytechnic Institute
* Jo Van Bulck, KU Leuven
* Nadia Heninger, University of California, San Diego, CA, USA
* Frank Piessens, KU Leuven
* Berk Sunar, Worcester Polytechnic Institute
### Abstract
> The adversarial model presented by trusted execution environments (TEEs) has prompted researchers to investigate unusual attack vectors. One particularly powerful class of controlled-channel attacks abuses page-table modifications to reliably track enclave memory accesses at a page-level granularity. In contrast to noisy microarchitectural timing leakage, this line of deterministic controlled-channel attacks abuses indispensable architectural interfaces and hence cannot be mitigated by tweaking microarchitectural resources. We propose an innovative controlled-channel attack, named CopyCat, that deterministically counts the number of instructions executed within a single enclave code page. We show that combining the instruction counts harvested by CopyCat with traditional, coarse-grained page-level leakage allows the accurate reconstruction of enclave control flow at a maximal instruction-level granularity. CopyCat can identify intra-page and intra-cache line branch decisions that ultimately may only differ in a single instruction, underscoring that even extremely subtle control flow deviations can be deterministically leaked from secure enclaves. We demonstrate the improved resolution and practicality of CopyCat on Intel SGX in an extensive study of single-trace and deterministic attacks against cryptographic implementations, and give novel algorithmic attacks to perform single-trace key extraction that exploit subtle vulnerabilities in the latest versions of widely-used cryptographic libraries. Our findings highlight the importance of stricter verification of cryptographic implementations, especially in the context of TEEs.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/moghimi-copycat](https://www.usenix.org/conference/usenixsecurity20/presentation/moghimi-copycat)
- **PDF:** [https://www.usenix.org/system/files/sec20-moghimi-copycat.pdf](https://www.usenix.org/system/files/sec20-moghimi-copycat.pdf)
## An Off-Chip Attack on Hardware Enclaves via the Memory Bus.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#an-off-chip-attack-on-hardware-enclaves-via-the-memory-bus)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#an-off-chip-attack-on-hardware-enclaves-via-the-memory-bus)
### Authors
* Dayeol Lee, UC Berkeley
* Dongha Jung, SK Hynix
* Ian T. Fang, UC Berkeley
* Chia-Che Tsai, Texas A&M University
* Raluca Ada Popa, UC Berkeley
### Abstract
> This paper shows how an attacker can break the confidentiality of a hardware enclave with Membuster, an off-chip attack based on snooping the memory bus. An attacker with physical access can observe an unencrypted address bus and extract fine-grained memory access patterns of the victim. Membuster is qualitatively different from prior on-chip attacks to enclaves and is more difficult to thwart.  We highlight several challenges for Membuster. First, DRAM requests are only visible on the memory bus at last-level cache misses. Second, the attack needs to incur minimal interference or overhead to the victim to prevent the detection of the attack. Lastly, the attacker needs to reverse-engineer the translation between virtual, physical, and DRAM addresses to perform a robust attack. We introduce three techniques, critical page whitelisting, cache squeezing, and oracle-based fuzzy matching algorithm to increase cache misses for memory accesses that are useful for the attack, with no detectable interference to the victim, and to convert memory accesses to sensitive data. We demonstrate Membuster on an Intel SGX CPU to leak confidential data from two applications: Hunspell and Memcached. We show that a single uninterrupted run of the victim can leak most of the sensitive data with high accuracy.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/lee-dayeol](https://www.usenix.org/conference/usenixsecurity20/presentation/lee-dayeol)
- **PDF:** [https://www.usenix.org/system/files/sec20summer_lee-dayeol_prepub.pdf](https://www.usenix.org/system/files/sec20summer_lee-dayeol_prepub.pdf)
## Civet: An Efficient Java Partitioning Framework for Hardware Enclaves.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#civet-an-efficient-java-partitioning-framework-for-hardware-enclaves)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#civet-an-efficient-java-partitioning-framework-for-hardware-enclaves)
### Authors
* Chia-Che Tsai, Texas A&M University
* Jeongseok Son, UC Berkeley
* Bhushan Jain, The University of North Carolina at Chapel Hill
* John McAvey, Hendrix College
* Raluca Ada Popa, UC Berkeley
* Donald E. Porter, The University of North Carolina at Chapel Hill
### Abstract
> Hardware enclaves are designed to execute small pieces of sensitive code or to operate on sensitive data, in isolation from larger, less trusted systems. Partitioning a large, legacy application requires significant effort. Partitioning an application written in a managed language, such as Java, is more challenging because of mutable language characteristics, extensive code reachability in class libraries, and the inevitability of using a heavyweight runtime.Civet is a framework for partitioning Java applications into enclaves. Civet reduces the number of lines of code in the enclave and uses language-level defenses, including deep type checks and dynamic taint-tracking, to harden the enclave interface. Civet also contributes a partitioned Java runtime design, including a garbage collection design optimized for the peculiarities of enclaves. Civet is efficient for data-intensive workloads; partitioning a Hadoop mapper reduces the enclave overhead from 10× to 16–22% without taint-tracking or 70–80% with taint-tracking.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/tsai](https://www.usenix.org/conference/usenixsecurity20/presentation/tsai)
- **PDF:** [https://www.usenix.org/system/files/sec20-tsai.pdf](https://www.usenix.org/system/files/sec20-tsai.pdf)
## BesFS: A POSIX Filesystem for Enclaves with a Mechanized Safety Proof.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#besfs-a-posix-filesystem-for-enclaves-with-a-mechanized-safety-proof)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#besfs-a-posix-filesystem-for-enclaves-with-a-mechanized-safety-proof)
### Authors
* Shweta Shinde, University of California, Berkeley
* Shengyi Wang, National University of Singapore
* Pinghai Yuan, National University of Singapore
* Aquinas Hobor, National University of Singapore & Yale-NUS College
* Abhik Roychoudhury, National University of Singapore
* Prateek Saxena, National University of Singapore
### Abstract
> New trusted computing primitives such as Intel SGX have shown the feasibility of running user-level applications in enclaves on a commodity trusted processor without trusting a large OS. However, the OS can still compromise the integrity of an enclave by tampering with the system call return values. In fact, it has been shown that a subclass of these attacks, called Iago attacks, enables arbitrary logic execution in enclave programs. Existing enclave systems have very large TCB and they implement ad-hoc checks at the system call interface which are hard to verify for completeness. To this end, we present BesFS—the first filesystem interface which provably protects the enclave integrity against a completely malicious OS. We prove 167 lemmas and 2 key theorems in 4625 lines of Coq proof scripts, which directly proves the safety properties of the BesFS specification. BesFS comprises of 15 APIs with compositional safety and is expressive enough to support 31 real applications we test. BesFS integrates into existing SGX-enabled applications with minimal impact to TCB. BesFS can serve as a reference implementation for hand-coded API checks.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/shinde](https://www.usenix.org/conference/usenixsecurity20/presentation/shinde)
- **PDF:** [https://www.usenix.org/system/files/sec20-shinde.pdf](https://www.usenix.org/system/files/sec20-shinde.pdf)
## EPIC: Every Packet Is Checked in the Data Plane of a Path-Aware Internet.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#epic-every-packet-is-checked-in-the-data-plane-of-a-path-aware-internet)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#epic-every-packet-is-checked-in-the-data-plane-of-a-path-aware-internet)
### Authors
* Markus Legner, ETH Zurich
* Tobias Klenze, ETH Zurich
* Marc Wyss, ETH Zurich
* Christoph Sprenger, ETH Zurich
* Adrian Perrig, ETH Zurich
### Abstract
> An exciting insight of recent networking research has been that path-aware networking architectures are able to fundamentally solve many of the security issues of today’s Internet, while increasing overall efficiency and giving control over path selection to end hosts. In this paper, we consider three important issues related to this new networking paradigm: First, network operators still need to be able to impose their own policies to rule out uneconomical paths and to enforce these decisions on the data plane. Second, end hosts should be able to verify that their forwarding decisions are actually followed by the network. Finally, both intermediate routers and recipients should be able to authenticate the source of packets. These properties have been considered by previous work, but there is no existing system that achieves both strong security guarantees and high efficiency.We propose EPIC, a family of data-plane protocols that provide increasingly strong security properties, addressing all three described requirements. The EPIC protocols have significantly lower communication overhead than comparable systems: for realistic path lengths, the overhead is 3–5 times smaller compared to the state-of-the-art systems OPT and ICING. Our prototype implementation is able to saturate a 40 Gbps link even on commodity hardware due to the use of only few highly efficient symmetric cryptographic operations in the forwarding process. Thus, by ensuring that every packet is checked at every hop, we make an important step towards an efficient and secure future Internet.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/legner](https://www.usenix.org/conference/usenixsecurity20/presentation/legner)
- **PDF:** [https://www.usenix.org/system/files/sec20-legner.pdf](https://www.usenix.org/system/files/sec20-legner.pdf)
## ShadowMove: A Stealthy Lateral Movement Strategy.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#shadowmove-a-stealthy-lateral-movement-strategy)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#shadowmove-a-stealthy-lateral-movement-strategy)
### Authors
* Amirreza Niakanlahiji, University of Illinois Springfield
* Jinpeng Wei, UNC Charlotte
* Md Rabbi Alam, UNC Charlotte
* Qingyang Wang, Louisiana State University
* Bei-Tseng Chu, UNC Charlotte
### Abstract
> Advanced Persistence Threat (APT) attacks use various strategies and techniques to move laterally within an enterprise environment; however, the existing strategies and techniques have limitations such as requiring elevated permissions, creating new connections, performing new authentications, or requiring process injections. Based on these characteristics, many host and network-based solutions have been proposed to prevent or detect such lateral movement attempts. In this paper, we present a novel stealthy lateral movement strategy, ShadowMove, in which only established connections between systems in an enterprise network are misused for lateral movements. It has a set of unique features such as requiring no elevated privilege, no new connection, no extra authentication, and no process injection, which makes it stealthy against state-of-the-art detection mechanisms. ShadowMove is enabled by a novel socket duplication approach that allows a malicious process to silently abuse TCP connections established by benign processes. We design and implement ShadowMove for current Windows and Linux operating systems. To validate the feasibility of ShadowMove, we build several prototypes that successfully hijack three kinds of enterprise protocols, FTP, Microsoft SQL, and Window Remote Management, to perform lateral movement actions such as copying malware to the next target machine and launching malware on the target machine. We also confirm that our prototypes cannot be detected by existing host and network-based solutions, such as five top-notch anti-virus products (McAfee, Norton, Webroot, Bitdefender, and Windows Defender), four IDSes (Snort, OSSEC, Osquery, and Wazuh), and two Endpoint Detection and Response systems (CrowdStrike Falcon Prevent and Cisco AMP).

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/niakanlahiji](https://www.usenix.org/conference/usenixsecurity20/presentation/niakanlahiji)
- **PDF:** [https://www.usenix.org/system/files/sec20-niakanlahiji.pdf](https://www.usenix.org/system/files/sec20-niakanlahiji.pdf)
## Poison Over Troubled Forwarders: A Cache Poisoning Attack Targeting DNS Forwarding Devices.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#poison-over-troubled-forwarders-a-cache-poisoning-attack-targeting-dns-forwarding-devices)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#poison-over-troubled-forwarders-a-cache-poisoning-attack-targeting-dns-forwarding-devices)
### Authors
* Xiaofeng Zheng, Tsinghua University; Qi An Xin Technology Research Institute
* Chaoyi Lu, Tsinghua University
* Jian Peng, Tsinghua University
* Qiushi Yang, Qi An Xin Technology Research Institute
* Dongjie Zhou, State Key Laboratory of Mathematical Engineering and Advanced Computing
* Baojun Liu, Tsinghua University
* Keyu Man, University of California, Riverside
* Shuang Hao, University of Texas at Dallas
* Haixin Duan, Tsinghua University; Qi An Xin Technology Research Institute
* Zhiyun Qian, University of California, Riverside
### Abstract
> In today's DNS infrastructure, DNS forwarders are devices standing in between DNS clients and recursive resolvers. The devices often serve as ingress servers for DNS clients, and instead of resolving queries, they pass the DNS requests to other servers. Because of the advantages and several use cases, DNS forwarders are widely deployed and queried by Internet users. However, studies have shown that DNS forwarders can be more vulnerable devices in the DNS infrastructure.In this paper, we present a cache poisoning attack targeting DNS forwarders. Through this attack, attackers can inject rogue records of arbitrary victim domain names using a controlled domain, and circumvent widely-deployed cache poisoning defences. By performing tests on popular home router models and DNS software, we find several vulnerable implementations, including those of large vendors (e.g., D-Link, Linksys, dnsmasq and MS DNS). Further, through a nationwide measurement, we estimate the population of Chinese mobile clients which are using vulnerable DNS forwarders. We have been reporting the issue to the affected vendors, and so far have received positive feedback from three of them. Our work further demonstrates that DNS forwarders can be a soft spot in the DNS infrastructure, and calls for attention as well as implementation guidelines from the community.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/zheng](https://www.usenix.org/conference/usenixsecurity20/presentation/zheng)
- **PDF:** [https://www.usenix.org/system/files/sec20-zheng.pdf](https://www.usenix.org/system/files/sec20-zheng.pdf)
## Programmable In-Network Security for Context-aware BYOD Policies.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#programmable-in-network-security-for-context-aware-byod-policies)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#programmable-in-network-security-for-context-aware-byod-policies)
### Authors
* Qiao Kang, Rice University
* Lei Xue, The Hong Kong Polytechnic University
* Adam Morrison, Rice University
* Yuxin Tang, Rice University
* Ang Chen, Rice University
* Xiapu Luo, The Hong Kong Polytechnic University
### Abstract
> Bring Your Own Device (BYOD) has become the new norm for enterprise networks, but BYOD security remains a top concern. Context-aware security, which enforces access control based on dynamic runtime context, is a promising approach. Recent work has developed SDN solutions to collect device contexts and enforce access control at a central controller. However, the central controller could become a bottleneck and attack target. Processing context signals at the remote controller is also too slow for real-time decision change.We present a new paradigm, programmable in-network security (Poise), which is enabled by the emergence of programmable switches. At the heart of Poise is a novel security primitive, which can be programmed to support a wide range of context-aware policies in hardware. Users of Poise specify concise policies, and Poise compiles them into different configurations of the primitive in P4. Compared with traditional SDN defenses, Poise is resilient to control plane saturation attacks, and it dramatically increases defense agility.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/kang](https://www.usenix.org/conference/usenixsecurity20/presentation/kang)
- **PDF:** [https://www.usenix.org/system/files/sec20-kang.pdf](https://www.usenix.org/system/files/sec20-kang.pdf)
## A Longitudinal and Comprehensive Study of the DANE Ecosystem in Email.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#a-longitudinal-and-comprehensive-study-of-the-dane-ecosystem-in-email)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#a-longitudinal-and-comprehensive-study-of-the-dane-ecosystem-in-email)
### Authors
* Hyeonmin Lee, Seoul National University
* Aniketh Gireesh, Amrita Vishwa Vidyapeetham
* Rol, University of Twente & NLnet Labs
* van Rijswijk-Deij, University of Twente & NLnet Labs
* Taekyoung "Ted" Kwon, Seoul National University
* Taejoong Chung, Rochester Institute of Technology
### Abstract
> The DNS-based Authentication of Named Entities (DANE) standard allows clients and servers to establish a TLS connection without relying on trusted third parties like CAs by publishing TLSA records. DANE uses the Domain Name System Security Extensions (DNSSEC) PKI to achieve integrity and authenticity. However, DANE can only work correctly if each principal in its PKI properly performs its duty: through their DNSSEC-aware DNS servers, DANE servers (e.g., SMTP servers) must publish their TLSA records, which are consistent with their certificates. Similarly, DANE clients (e.g., SMTP clients) must verify the DANE servers’ TLSA records, which are also used to validate the fetched certificates. DANE is rapidly gaining popularity in the email ecosystem, to help improve transport security between mail servers. Yet its security benefits hinge on deploying DANE correctly. In this paper we perform a large-scale, longitudinal, and comprehensive measurement study on how well the DANE standard and its relevant protocols are deployed and managed. We collect data for all second-level domains under the .com, .net, .org, .nl, and .se TLDs over a period of 24 months to analyze server-side deployment and management. To analyse the client-side deployment and management, we investigate 29 popular email service providers, and four popular MTA and ten DNS software programs. Our study reveals pervasive mismanagement in the DANE ecosystem. For instance, we found that 36% of TLSA records cannot be validated due to missing or incorrect DNSSEC records, and 14.17% of them are inconsistent with their certificates. We also found that only four email service providers support DANE for both outgoing and incoming emails, but two of them have drawbacks of not checking the Certificate Usage in TLSA records. On the bright side, the administrators of email servers can leverage open source MTA and DNS programs to support DANE correctly.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/lee-hyeonmin](https://www.usenix.org/conference/usenixsecurity20/presentation/lee-hyeonmin)
- **PDF:** [https://www.usenix.org/system/files/sec20-lee-hyeonmin.pdf](https://www.usenix.org/system/files/sec20-lee-hyeonmin.pdf)
## NXNSAttack: Recursive DNS Inefficiencies and Vulnerabilities.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#nxnsattack-recursive-dns-inefficiencies-and-vulnerabilities)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#nxnsattack-recursive-dns-inefficiencies-and-vulnerabilities)
### Authors
* Yehuda Afek, Tel-Aviv University
* Anat Bremler-Barr, IDC
* Lior Shafir, Tel Aviv University
### Abstract
> This paper exposes a new vulnerability and introduces a corresponding attack, the NoneXistent Name Server Attack (NXNSAttack), that disrupts and may paralyze the DNS system, making it difficult or impossible for Internet users to access websites, web e-mail, online video chats, or any other online resource. The NXNSAttack generates a storm of packets between DNS resolvers and DNS authoritative name servers. The storm is produced by the response of resolvers to unrestricted referral response messages of authoritative name servers. The attack is significantly more destructive than NXDomain attacks (e.g., the Mirai attack): i) It reaches an amplification factor of more than 1620x on the number of packets exchanged by the recursive resolver. ii) In addition to the negative cache, the attack also saturates the 'NS' section of the resolver caches. To mitigate the attack impact, we propose an enhancement to the recursive resolver algorithm, MaxFetch(k), that prevents unnecessary proactive fetches. We implemented the MaxFetch(1) mitigation enhancement on a BIND resolver and tested it on real-world DNS query datasets. Our results show that MaxFetch(1) degrades neither the recursive resolver throughput nor its latency. Following the discovery of the attack, a responsible disclosure procedure was carried out, and several DNS vendors and public providers have issued a CVE and patched their systems.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/afek](https://www.usenix.org/conference/usenixsecurity20/presentation/afek)
- **PDF:** [https://www.usenix.org/system/files/sec20-afek.pdf](https://www.usenix.org/system/files/sec20-afek.pdf)
## Shim Shimmeny: Evaluating the Security and Privacy Contributions of Link Shimming in the Modern Web.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#shim-shimmeny-evaluating-the-security-and-privacy-contributions-of-link-shimming-in-the-modern-web)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#shim-shimmeny-evaluating-the-security-and-privacy-contributions-of-link-shimming-in-the-modern-web)
### Authors
* Frank Li, Georgia Institute of Technology / Facebook
### Abstract
> Link shimming (also known as URL wrapping) is a technique widely used by websites, where URLs on a site are rewritten to direct link navigations to an intermediary endpoint before redirecting to the original destination. This "shimming" of URL clicks can serve navigation security, privacy, and analytics purposes, and has been deployed by prominent websites (e.g., Facebook, Twitter, Microsoft, Google) for over a decade.  Yet, we lack a deep understanding of its purported security and privacy contributions, particularly in today's web ecosystem, where modern browsers provide potential alternative mechanisms for protecting link navigations without link shimming's costs.In this paper, we provide a large-scale empirical evaluation of link shimming's security and privacy contributions, using Facebook's real-world deployment as a case study. Our results indicate that even in the modern web, link shimming can provide meaningful security and privacy benefits to users broadly. These benefits are most notable for the sizable populations that we observed with a high prevalence of legacy browser clients, such as in mobile-centric developing countries.  We discuss the tradeoff of these gains against potential costs. Beyond link shimming, our findings also provide insights for advancing user online protection, such as on the web ecosystem's distribution of responsibility, legacy software scenarios, and user responses to website security warnings.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/li-frank](https://www.usenix.org/conference/usenixsecurity20/presentation/li-frank)
- **PDF:** [https://www.usenix.org/system/files/sec20-li-frank.pdf](https://www.usenix.org/system/files/sec20-li-frank.pdf)
## Cached and Confused: Web Cache Deception in the Wild.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#cached-and-confused-web-cache-deception-in-the-wild)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#cached-and-confused-web-cache-deception-in-the-wild)
### Authors
* Seyed Ali Mirheidari, University of Trento
* Sajjad Arshad, Northeastern University
* Kaan Onarlioglu, Akamai Technologies
* Bruno Crispo, University of Trento, KU Leuven
* Engin Kirda, Northeastern University
* William Robertson, Northeastern University
### Abstract
> Web cache deception (WCD) is an attack proposed in 2017, where an attacker tricks a caching proxy into erroneously storing private information transmitted over the Internet and subsequently gains unauthorized access to that cached data. Due to the widespread use of web caches and, in particular, the use of massive networks of caching proxies deployed by content distribution network (CDN) providers as a critical component of the Internet, WCD puts a substantial population of Internet users at risk.We present the first large-scale study that quantifies the prevalence of WCD in 340 high-profile sites among the Alexa Top 5K. Our analysis reveals WCD vulnerabilities that leak private user data as well as secret authentication and authorization tokens that can be leveraged by an attacker to mount damaging web application attacks. Furthermore, we explore WCD in a scientific framework as an instance of the path confusion class of attacks, and demonstrate that variations on the path confusion technique used make it possible to exploit sites that are otherwise not impacted by the original attack. Our findings show that many popular sites remain vulnerable two years after the public disclosure of WCD.Our empirical experiments with popular CDN providers underline the fact that web caches are not plug & play technologies. In order to mitigate WCD, site operators must adopt a holistic view of their web infrastructure and carefully configure cache settings appropriate for their applications.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/mirheidari](https://www.usenix.org/conference/usenixsecurity20/presentation/mirheidari)
- **PDF:** [https://www.usenix.org/system/files/sec20-mirheidari.pdf](https://www.usenix.org/system/files/sec20-mirheidari.pdf)
## A Tale of Two Headers: A Formal Analysis of Inconsistent Click-Jacking Protection on the Web.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#a-tale-of-two-headers-a-formal-analysis-of-inconsistent-click-jacking-protection-on-the-web)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#a-tale-of-two-headers-a-formal-analysis-of-inconsistent-click-jacking-protection-on-the-web)
### Authors
* Stefano Calzavara, Università Ca' Foscari Venezia
* Sebastian Roth, CISPA Helmholtz Center for Information Security and Saarbrücken Graduate School of Computer Science
* Alvise Rabitti, Università Ca' Foscari Venezia
* Michael Backes, CISPA Helmholtz Center for Information Security
* Ben Stock, CISPA Helmholtz Center for Information Security
### Abstract
> Click-jacking protection on the modern Web is commonly enforced via client-side security mechanisms for framing control, like the X-Frame-Options header (XFO) and Content Security Policy (CSP). Though these client-side security mechanisms are certainly useful and successful, delegating protection to web browsers opens room for inconsistencies in the security guarantees offered to users of different browsers. In particular, inconsistencies might arise due to the lack of support for CSP and the different implementations of the underspecified XFO header. In this paper, we formally study the problem of inconsistencies in framing control policies across different browsers and we implement an automated policy analyzer based on our theory, which we use to assess the state of click-jacking protection on the Web. Our analysis shows that 10% of the (distinct) framing control policies in the wild are inconsistent and most often do not provide any level of protection to at least one browser. We thus propose recommendations for web developers and browser vendors to mitigate this issue. Finally, we design and implement a server-side proxy to retrofit security in web applications.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/calzavara](https://www.usenix.org/conference/usenixsecurity20/presentation/calzavara)
- **PDF:** [https://www.usenix.org/system/files/sec20-calzavara.pdf](https://www.usenix.org/system/files/sec20-calzavara.pdf)
## Retrofitting Fine Grain Isolation in the Firefox Renderer.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#retrofitting-fine-grain-isolation-in-the-firefox-renderer)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#retrofitting-fine-grain-isolation-in-the-firefox-renderer)
### Authors
* Shravan Narayan, UC San Diego
* Craig Disselkoen, UC San Diego
* Tal Garfinkel, Stanford University
* Nathan Froyd, Mozilla
* Eric Rahm, Mozilla
* Sorin Lerner, UC San Diego
* Hovav Shacham, UT Austin
* Deian Stefan, UC San Diego
### Abstract
> Firefox and other major browsers rely on dozens of third-party libraries to render audio, video, images, and other content. These libraries are a frequent source of vulnerabilities. To mitigate this threat, we are migrating Firefox to an architecture that isolates these libraries in lightweight sandboxes, dramatically reducing the impact of a compromise.Retrofitting isolation can be labor-intensive, very prone to security bugs, and requires critical attention to performance. To help, we developed RLBox, a framework that minimizes the burden of converting Firefox to securely and efficiently use untrusted code. To enable this, RLBox employs static information flow enforcement, and lightweight dynamic checks, expressed directly in the C++ type system.RLBox supports efficient sandboxing through either software-based-fault isolation or multi-core process isolation. Performance overheads are modest and transient, and have only minor impact on page latency. We demonstrate this by sandboxing performance-sensitive image decoding libraries (libjpeg and libpng), video decoding libraries (libtheora and libvpx), the libvorbis audio decoding library, and the zlib decompression library.RLBox, using a WebAssembly sandbox, has been integrated into production Firefox to sandbox the libGraphite font shaping library.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/narayan](https://www.usenix.org/conference/usenixsecurity20/presentation/narayan)
- **PDF:** [https://www.usenix.org/system/files/sec20-narayan.pdf](https://www.usenix.org/system/files/sec20-narayan.pdf)
## Zero-delay Lightweight Defenses against Website Fingerprinting.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#zero-delay-lightweight-defenses-against-website-fingerprinting)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#zero-delay-lightweight-defenses-against-website-fingerprinting)
### Authors
* Jiajun Gong, Hong Kong University of Science and Technology
* Tao Wang, Hong Kong University of Science and Technology
### Abstract
> Website Fingerprinting (WF) attacks threaten user privacy on anonymity networks because they can be used by network surveillants to identify the webpage being visited by extracting features from network traffic. A number of defenses have been put forward to mitigate the threat of WF, but they are flawed: some have been defeated by stronger WF attacks, some are too expensive in overhead, while others are impractical to deploy.In this work, we propose two novel zero-delay lightweight defenses, FRONT and GLUE. We find that WF attacks rely on the feature-rich trace front, so FRONT focuses on obfuscating the trace front with dummy packets. It also randomizes the number and distribution of dummy packets for trace-to-trace randomness to impede the attacker’s learning process. GLUE adds dummy packets between separate traces so that they appear to the attacker as a long consecutive trace, rendering the attacker unable to find their start or end points, let alone classify them. Our experiments show that with 33% data overhead, FRONT outperforms the best known lightweight defense, WTF-PAD, which has a similar data overhead. With around 22%–44% data overhead, GLUE can lower the accuracy and precision of the best WF attacks to a degree comparable with the best heavyweight defenses. Both defenses have no latency overhead.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/gong](https://www.usenix.org/conference/usenixsecurity20/presentation/gong)
- **PDF:** [https://www.usenix.org/system/files/sec20-gong.pdf](https://www.usenix.org/system/files/sec20-gong.pdf)
## Achieving Keyless CDNs with Conclaves.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#achieving-keyless-cdns-with-conclaves)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#achieving-keyless-cdns-with-conclaves)
### Authors
* Stephen Herwig, University of Maryland
* Christina Garman, Purdue University
* Dave Levin, University of Maryland
### Abstract
> Content Delivery Networks (CDNs) serve a large and increasing portion of today’s web content. Beyond caching, CDNs provide their customers with a variety of services, including protection against DDoS and targeted attacks. As the web shifts from HTTP to HTTPS, CDNs continue to provide such services by also assuming control of their customers’ private keys, thereby breaking a fundamental security principle: private keys must only be known by their owner.We present the design and implementation of Phoenix, the first truly “keyless CDN”. Phoenix uses secure enclaves (in particular Intel SGX) to host web content, store sensitive key material, apply web application firewalls, and more on otherwise untrusted machines. To support scalability and multitenancy, Phoenix is built around a new architectural primitive which we call conclaves: containers of enclaves. Conclaves make it straightforward to deploy multi-process, scalable, legacy applications. We also develop a filesystem to extend the enclave’s security guarantees to untrusted storage. In its strongest configuration, Phoenix reduces the knowledge of the edge server to that of a traditional on-path HTTPS adversary. We evaluate the performance of Phoenix with a series of micro- and macro-benchmarks.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/herwig](https://www.usenix.org/conference/usenixsecurity20/presentation/herwig)
- **PDF:** [https://www.usenix.org/system/files/sec20-herwig.pdf](https://www.usenix.org/system/files/sec20-herwig.pdf)
## SENG, the SGX-Enforcing Network Gateway: Authorizing Communication from Shielded Clients.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#seng-the-sgx-enforcing-network-gateway-authorizing-communication-from-shielded-clients)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#seng-the-sgx-enforcing-network-gateway-authorizing-communication-from-shielded-clients)
### Authors
* Fabian Schwarz, CISPA Helmholtz Center for Information Security
* Christian Rossow, CISPA Helmholtz Center for Information Security
### Abstract
> Network administrators face a security-critical dilemma. While they want to tightly contain their hosts, they usually have to relax firewall policies to support a large variety of applications. However, liberal policies like this enable data exfiltration by unknown (and untrusted) client applications. An inability to attribute communication accurately and reliably to applications is at the heart of this problem. Firewall policies are restricted to coarse-grained features that are easy to evade and mimic, such as protocols or port numbers. We present SENG, a network gateway that enables firewalls to reliably attribute traffic to an application. SENG shields an application in an SGX-tailored LibOS and transparently establishes an attestation-based DTLS channel between the SGX enclave and the central network gateway. Consequently, administrators can perfectly attribute traffic to its originating application, and thereby enforce fine-grained per-application communication policies at a central firewall. Our prototype implementation demonstrates that SENG (i) allows administrators to readily use their favorite firewall to enforce network policies on a certified per-application basis and (ii) prevents local system-level attackers from interfering with the shielded application's communication.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/schwarz](https://www.usenix.org/conference/usenixsecurity20/presentation/schwarz)
- **PDF:** [https://www.usenix.org/system/files/sec20-schwarz.pdf](https://www.usenix.org/system/files/sec20-schwarz.pdf)
## APEX: A Verified Architecture for Proofs of Execution on Remote Devices under Full Software Compromise.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#apex-a-verified-architecture-for-proofs-of-execution-on-remote-devices-under-full-software-compromise)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#apex-a-verified-architecture-for-proofs-of-execution-on-remote-devices-under-full-software-compromise)
### Authors
* Ivan De Oliveira Nunes, UC Irvine
* Karim Eldefrawy, SRI International
* Norrathep Rattanavipanon, UC Irvine and Prince of Songkla University
* Gene Tsudik, UC Irvine
### Abstract
> Modern society is increasingly surrounded by, and is growing accustomed to, a wide range of Cyber-Physical Systems (CPS), Internet-of-Things (IoT), and smart devices. They often perform safety-critical functions, e.g., personal medical devices, automotive CPS as well as industrial and residential automation, e.g., sensor-alarm combinations. On the lower end of the scale, these devices are small, cheap and specialized sensors and/or actuators. They tend to host small anemic CPUs, have small amounts of memory and run simple software. If such devices are left unprotected, consequences of forged sensor readings or ignored actuation commands can be catastrophic, particularly, in safety-critical settings. This prompts the following three questions: (1) How to trust data produced, or verify that commands were performed, by a simple remote embedded device?, (2) How to bind these actions/results to the execution of expected software? and, (3) Can (1) and (2) be attained even if all software on a device can be modified and/or compromised?In this paper we answer these questions by designing, demonstrating security of, and formally verifying, APEX: an Architecture for Provable Execution. To the best of our knowledge, this is the first of its kind result for low-end embedded systems. Our work has a range of applications, especially, authenticated sensing and trustworthy actuation, which are increasingly relevant in the context of safety-critical systems. APEX is publicly available and our evaluation shows that it incurs low overhead, affordable even for very low-end embedded devices, e.g., those based on TI MSP430 or AVR ATmega processors.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/nunes](https://www.usenix.org/conference/usenixsecurity20/presentation/nunes)
- **PDF:** [https://www.usenix.org/system/files/sec20-nunes.pdf](https://www.usenix.org/system/files/sec20-nunes.pdf)
## PARTEMU: Enabling Dynamic Analysis of Real-World TrustZone Software Using Emulation.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#partemu-enabling-dynamic-analysis-of-real-world-trustzone-software-using-emulation)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#partemu-enabling-dynamic-analysis-of-real-world-trustzone-software-using-emulation)
### Authors
* Lee Harrison, Samsung Knox, Samsung Research America
* Hayawardh Vijayakumar, Samsung Knox, Samsung Research America
* Rohan Padhye, EECS Department, University of California, Berkeley
* Koushik Sen, EECS Department, University of California, Berkeley
* Michael Grace, Samsung Knox, Samsung Research America
### Abstract
> ARM's TrustZone technology is the basis for security of billions of devices worldwide, including Android smartphones and IoT devices. Because TrustZone has access to sensitive information such as cryptographic keys, access to TrustZone      has been locked down on real-world devices: only code that is authenticated by   a trusted party can run in TrustZone. A side-effect is that TrustZone software cannot be instrumented or monitored.  Thus, recent advances in dynamic analysis techniques such as feedback-driven fuzz testing have not been applied to         TrustZone software.                                                               To address the above problem, this work builds an emulator that runs four widely-used, real-world TrustZone operating systems (TZOSes) - Qualcomm's QSEE, Trustonic's Kinibi, Samsung's TEEGRIS, and Linaro's OP-TEE - and the trusted applications (TAs) that run on them.  The traditional challenge for this approach is that the emulation effort required is often impractical. However, we find that TZOSes depend only on a limited subset of hardware and software components. By carefully choosing a subset of components to emulate, we find we are able to make the effort practical. We implement our emulation on PARTEMU, a modular framework we develop on QEMU and PANDA. We show the utility of PARTEMU by integrating feedback-driven fuzz-testing using AFL and use it to perform a large-scale study of 194 unique TAs from 12 different Android smartphone vendors and a leading IoT vendor, finding previously unknown vulnerabilities in 48 TAs, several of which are exploitable. We identify patterns of developer mistakes unique to TrustZone development that cause some of these vulnerabilities, highlighting the need for TrustZone-specific developer education. We also demonstrate using PARTEMU to test the QSEE TZOS itself, finding crashes in code paths that would not normally be exercised on a real device. Our work shows that dynamic analysis of real-world TrustZone software                              through emulation is both feasible and beneficial.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/harrison](https://www.usenix.org/conference/usenixsecurity20/presentation/harrison)
- **PDF:** [https://www.usenix.org/system/files/sec20-harrison.pdf](https://www.usenix.org/system/files/sec20-harrison.pdf)
## PHMon: A Programmable Hardware Monitor and Its Security Use Cases.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#phmon-a-programmable-hardware-monitor-and-its-security-use-cases)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#phmon-a-programmable-hardware-monitor-and-its-security-use-cases)
### Authors
* Leila Delshadtehrani, Boston University
* Sadullah Canakci, Boston University
* Boyou Zhou, Boston University
* Schuyler Eldridge, Boston University
* Ajay Joshi, Boston University
* Manuel Egele, Boston University
### Abstract
> There has been a resurgent trend in the industry to enforce a variety of security policies in hardware. The current trend for developing dedicated hardware security extensions is an imperfect, lengthy, and costly process. In contrast to this trend, a flexible hardware monitor can efficiently enforce and enhance a variety of security policies as security threats evolve. Existing hardware monitors typically suffer from one (or more) of the following drawbacks: a restricted set of monitoring actions, considerable performance and power overheads, or an invasive design. In this paper, we propose a minimally-invasive and efficient implementation of a Programmable Hardware Monitor (PHMon) with expressive monitoring rules and flexible fine-grained actions. PHMon can enforce a variety of security policies and can also assist with detecting software bugs and security vulnerabilities. Our prototype of PHMon on an FPGA includes the hardware monitor and its interface with a RISC-V Rocket processor as well as a complete Linux software stack. We demonstrate the versatility of PHMon and its ease of adoption through four different use cases: a shadow stack, a hardware-accelerated fuzzing engine, an information leak prevention mechanism, and a hardware-accelerated debugger. Our prototype implementation of PHMon incurs 0.9% performance overhead on average, while the hardware-accelerated fuzzing engine improves fuzzing performance on average by 16× over the state-of-the art software-based implementation. Our ASIC implementation of PHMon only incurs a 5% power overhead and a 13.5% area overhead.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/delshadtehrani](https://www.usenix.org/conference/usenixsecurity20/presentation/delshadtehrani)
- **PDF:** [https://www.usenix.org/system/files/sec20-delshadtehrani.pdf](https://www.usenix.org/system/files/sec20-delshadtehrani.pdf)
## Horizontal Privilege Escalation in Trusted Applications.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#horizontal-privilege-escalation-in-trusted-applications)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#horizontal-privilege-escalation-in-trusted-applications)
### Authors
* Darius Suciu, Stony Brook University
* Stephen McLaughlin, Samsung Research America
* Laurent Simon, Samsung Research America
* Radu Sion, Stony Brook University
### Abstract
> Trusted Execution Environments (TEEs) use hardware-based isolation to guard sensitive data from conventional monolithic OSes. While such isolation strengthens security guarantees, it also introduces a semantic gap between the TEE on the one side and the conventional OS and applications on the other. In this work, we studied the impact of this semantic gap on the handling of sensitive data by Trusted Applications (TAs) running in popular TEEs. We found that the combination of two properties, (i) multi-tenancy and (ii) statefulness in TAs leads to vulnerabilities of Horizontal Privilege Escalation (HPE). These vulnerabilities leaked sensitive session data or provided cryptographic oracles without requiring code execution vulnerabilities in TEE logic. We identified 19 HPE vulnerabilities present across 95 TAs running on three major ARM TrustZone-based trusted OSes. Our results showed that HPE attacks can be used to decrypt DRM protected content, to forge attestations, and to obtain cryptographic keys under all three evaluated OSes. Here, we present HOOPER an automatic symbolic execution based scanner for HPE vulnerabilities, in order to aid manual analysis and to dramatically reduce overall time. In particular, in the Teegris Trusted OS HOOPER is able to identify 19 out of 24 HPE-based attack flows in 24-hours contrasted with our original manual analysis time of approximately four weeks.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/suciu](https://www.usenix.org/conference/usenixsecurity20/presentation/suciu)
- **PDF:** [https://www.usenix.org/system/files/sec20-suciu.pdf](https://www.usenix.org/system/files/sec20-suciu.pdf)
## TeeRex: Discovery and Exploitation of Memory Corruption Vulnerabilities in SGX Enclaves.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#teerex-discovery-and-exploitation-of-memory-corruption-vulnerabilities-in-sgx-enclaves)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#teerex-discovery-and-exploitation-of-memory-corruption-vulnerabilities-in-sgx-enclaves)
### Authors
* Tobias Cloosters, University of Duisburg-Essen
* Michael Rodler, University of Duisburg-Essen
* Lucas Davi, University of Duisburg-Essen
### Abstract
> Intel's Software Guard Extensions (SGX) introduced new instructions to switch the processor to enclave mode which protects it from introspection. While the enclave mode strongly protects the memory and the state of the processor, it cannot withstand memory corruption errors inside the enclave code. In this paper, we show that the attack surface of SGX enclaves provides new challenges for enclave developers as exploitable memory corruption vulnerabilities are easily introduced into enclave code. We develop TeeRex to automatically analyze enclave binary code for vulnerabilities introduced at the host-to-enclave boundary by means of symbolic execution. Our evaluation on public enclave binaries reveal that many of them suffer from memory corruption errors allowing an attacker to corrupt function pointers or perform arbitrary memory writes. As we will show, TeeRex features a specifically tailored framework for SGX enclaves that allows simple proof-of-concept exploit construction to assess the discovered vulnerabilities. Our findings reveal vulnerabilities in multiple enclaves, including enclaves developed by Intel, Baidu, and WolfSSL, as well as biometric fingerprint software deployed on popular laptop brands.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/cloosters](https://www.usenix.org/conference/usenixsecurity20/presentation/cloosters)
- **PDF:** [https://www.usenix.org/system/files/sec20-cloosters.pdf](https://www.usenix.org/system/files/sec20-cloosters.pdf)
## Stealthy Tracking of Autonomous Vehicles with Cache Side Channels.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#stealthy-tracking-of-autonomous-vehicles-with-cache-side-channels)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#stealthy-tracking-of-autonomous-vehicles-with-cache-side-channels)
### Authors
* Mulong Luo, Cornell University
* Andrew C. Myers, Cornell University
* G. Edward Suh, Cornell University
### Abstract
> Autonomous vehicles are becoming increasingly popular, but their reliance on computer systems to sense and operate in the physical world introduces new security risks. In this paper, we show that the location privacy of an autonomous vehicle may be compromised by software side-channel attacks if localization software shares a hardware platform with an attack program. In particular, we demonstrate that a cache side-channel attack can be used to infer the route or the location of a vehicle that runs the adaptive Monte-Carlo localization (AMCL) algorithm. The main contributions of the paper are as follows. First, we show that adaptive behaviors of perception and control algorithms may introduce new side-channel vulnerabilities that reveal the physical properties of a vehicle or its environment. Second, we introduce statistical learning models that infer the AMCL algorithm's state from cache access patterns and predict the route or the location of a vehicle from the trace of the AMCL state. Third, we implement and demonstrate the attack on a realistic software stack using real-world sensor data recorded on city roads. Our findings suggest that autonomous driving software needs strong timing-channel protection for location privacy.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/luo](https://www.usenix.org/conference/usenixsecurity20/presentation/luo)
- **PDF:** [https://www.usenix.org/system/files/sec20-luo.pdf](https://www.usenix.org/system/files/sec20-luo.pdf)
## Towards Robust LiDAR-based Perception in Autonomous Driving: General Black-box Adversarial Sensor Attack and Countermeasures.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#towards-robust-lidar-based-perception-in-autonomous-driving-general-black-box-adversarial-sensor-attack-and-countermeasures)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#towards-robust-lidar-based-perception-in-autonomous-driving-general-black-box-adversarial-sensor-attack-and-countermeasures)
### Authors
* Jiachen Sun, University of Michigan
* Yulong Cao, University of Michigan
* Qi Alfred Chen, UC Irvine
* Z. Morley Mao, University of Michigan
### Abstract
> Perception plays a pivotal role in autonomous driving systems, which utilizes onboard sensors like cameras and LiDARs (Light Detection and Ranging) to assess surroundings. Recent studies have demonstrated that LiDAR-based perception is vulnerable to spoofing attacks, in which adversaries spoof a fake vehicle in front of a victim self-driving car by strategically transmitting laser signals to the victim's LiDAR sensor. However, existing attacks suffer from effectiveness and generality limitations. In this work, we perform the first study to explore the general vulnerability of current LiDAR-based perception architectures and discover that the ignored occlusion patterns in LiDAR point clouds make self-driving cars vulnerable to spoofing attacks. We construct the first black-box spoofing attack based on our identified vulnerability, which universally achieves around 80% mean success rates on all target models. We perform the first defense study, proposing CARLO to mitigate LiDAR spoofing attacks. CARLO detects spoofed data by treating ignored occlusion patterns as invariant physical features, which reduces the mean attack success rate to 5.5%. Meanwhile, we take the first step towards exploring a general architecture for robust LiDAR-based perception, and propose SVF that embeds the neglected physical features into end-to-end learning. SVF further reduces the mean attack success rate to around 2.3%.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/sun](https://www.usenix.org/conference/usenixsecurity20/presentation/sun)
- **PDF:** [https://www.usenix.org/system/files/sec20-sun.pdf](https://www.usenix.org/system/files/sec20-sun.pdf)
## SAVIOR: Securing Autonomous Vehicles with Robust Physical Invariants.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#savior-securing-autonomous-vehicles-with-robust-physical-invariants)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#savior-securing-autonomous-vehicles-with-robust-physical-invariants)
### Authors
* Raul Quinonez, University of Texas at Dallas
* Jairo Giraldo, University of Utah
* Luis Salazar, University of California, Santa Cruz
* Erick Bauman, University of Texas at Dallas
* Alvaro Cardenas, University of California, Santa Cruz
* Zhiqiang Lin, Ohio State University
### Abstract
> Autonomous Vehicles (AVs), including aerial, sea, and ground vehicles, assess their environment with a variety of sensors and actuators that allow them to perform specific tasks such as navigating a route, hovering, or avoiding collisions. So far, AVs tend to trust the information provided by their sensors to make navigation decisions without data validation or verification, and therefore, attackers can exploit these limitations by feeding erroneous sensor data with the intention of disrupting or taking control of the system. In this paper we introduce SAVIOR: an architecture for securing autonomous vehicles with robust physical invariants. We implement and validate our proposal on two popular open-source controllers for aerial and ground vehicles, and demonstrate its effectiveness.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/quinonez](https://www.usenix.org/conference/usenixsecurity20/presentation/quinonez)
- **PDF:** [https://www.usenix.org/system/files/sec20-quinonez.pdf](https://www.usenix.org/system/files/sec20-quinonez.pdf)
## From Control Model to Program: Investigating Robotic Aerial Vehicle Accidents with MAYDAY.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#from-control-model-to-program-investigating-robotic-aerial-vehicle-accidents-with-mayday)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#from-control-model-to-program-investigating-robotic-aerial-vehicle-accidents-with-mayday)
### Authors
* Taegyu Kim, Purdue University
* Chung Hwan Kim, University of Texas at Dallas
* Altay Ozen, Purdue University
* Fan Fei, Purdue University
* Zhan Tu, Purdue University
* Xiangyu Zhang, Purdue University
* Xinyan Deng, Purdue University
* Dave (Jing) Tian, Purdue University
* Dongyan Xu, Purdue University
### Abstract
> With wide adoption of robotic aerial vehicles (RAVs), their accidents increasingly occur, calling for in-depth investigation of such accidents. Unfortunately, an inquiry to “why did my drone crash” often ends up with nowhere, if the root cause lies in the RAV’s control program, due to the key challenges in evidence and methodology: (1) Current RAVs’ flight log only records high-level vehicle control states and events, without recording control program execution; (2) The capability of “connecting the dots” – from controller anomaly to program variable corruption to program bug location – is lacking. To address these challenges, we develop MAYDAY, a cross-domain post-accident investigation framework by mapping control model to control program, enabling (1) in-flight logging of control program execution, and (2) traceback to the control-semantic bug that led to an accident, based on control- and program-level logs. We have applied MAYDAY to ArduPilot, a popular open-source RAV control program that runs on a wide range of commodity RAVs. Our investigation of 10 RAV accidents caused by real ArduPilot bugs demonstrates that MAYDAY is able to pinpoint the root causes of these accidents within the program with high accuracy and minimum runtime and storage overhead. We also found 4 recently patched bugs still vulnerable and alerted the ArduPilot team.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/kim](https://www.usenix.org/conference/usenixsecurity20/presentation/kim)
- **PDF:** [https://www.usenix.org/system/files/sec20-kim.pdf](https://www.usenix.org/system/files/sec20-kim.pdf)
## Drift with Devil: Security of Multi-Sensor Fusion based Localization in High-Level Autonomous Driving under GPS Spoofing.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#drift-with-devil-security-of-multi-sensor-fusion-based-localization-in-high-level-autonomous-driving-under-gps-spoofing)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#drift-with-devil-security-of-multi-sensor-fusion-based-localization-in-high-level-autonomous-driving-under-gps-spoofing)
### Authors
* Junjie Shen, University of California, Irvine
* Jun Yeon Won, University of California, Irvine
* Zeyuan Chen, University of California, Irvine
* Qi Alfred Chen, University of California, Irvine
### Abstract
> For high-level Autonomous Vehicles (AV), localization is highly security and safety critical. One direct threat to it is GPS spoofing, but fortunately, AV systems today predominantly use Multi-Sensor Fusion (MSF) algorithms that are generally believed to have the potential to practically defeat GPS spoofing. However, no prior work has studied whether today's MSF algorithms are indeed sufficiently secure under GPS spoofing, especially in AV settings. In this work, we perform the first study to fill this critical gap. As the first study, we focus on a production-grade MSF with both design and implementation level representativeness, and identify two AV-specific attack goals, off-road and wrong-way attacks.To systematically understand the security property, we first analyze the upper-bound attack effectiveness, and discover a take-over effect that can fundamentally defeat the MSF design principle. We perform a cause analysis and find that such vulnerability only appears dynamically and non-deterministically. Leveraging this insight, we design FusionRipper, a novel and general attack that opportunistically captures and exploits take-over vulnerabilities. We evaluate it on 6 real-world sensor traces, and find that FusionRipper can achieve at least 97% and 91.3% success rates in all traces for off-road and wrong-way attacks respectively. We also find that it is highly robust to practical factors such as spoofing inaccuracies. To improve the practicality, we further design an offline method that can effectively identify attack parameters with over 80% average success rates for both attack goals, with the cost of at most half a day. We also discuss promising defense directions.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/shen](https://www.usenix.org/conference/usenixsecurity20/presentation/shen)
- **PDF:** [https://www.usenix.org/system/files/sec20-shen.pdf](https://www.usenix.org/system/files/sec20-shen.pdf)
## Plug-N-Pwned: Comprehensive Vulnerability Analysis of OBD-II Dongles as A New Over-the-Air Attack Surface in Automotive IoT.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#plug-n-pwned-comprehensive-vulnerability-analysis-of-obd-ii-dongles-as-a-new-over-the-air-attack-surface-in-automotive-iot)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#plug-n-pwned-comprehensive-vulnerability-analysis-of-obd-ii-dongles-as-a-new-over-the-air-attack-surface-in-automotive-iot)
### Authors
* Haohuang Wen, Ohio State University
* Qi Alfred Chen, University of California, Irvine
* Zhiqiang Lin, Ohio State University
### Abstract
> With the growing trend of the Internet of Things, a large number of wireless OBD-II dongles are developed, which can be simply plugged into vehicles to enable remote functions such as sophisticated vehicle control and status monitoring. However, since these dongles are directly connected with in-vehicle networks, they may open a new over-the-air attack surface for vehicles. In this paper, we conduct the first comprehensive security analysis on all wireless OBD-II dongles available on Amazon in the US in February 2019, which were 77 in total. To systematically perform the analysis, we design and implement an automated tool DongleScope that dynamically tests these dongles from all possible attack stages on a real automobile. With DongleScope, we have identified 5 different types of vulnerabilities, with 4 being newly discovered. Our results reveal that each of the 77 dongles exposes at least two types of these vulnerabilities, which indicates a widespread vulnerability exposure among wireless OBD-II dongles on the market today. To demonstrate the severity, we further construct 4 classes of concrete attacks with a variety of practical implications such as privacy leakage, property theft, and even safety threat. We also discuss the root causes and feasible countermeasures, and have made corresponding responsible disclosure.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/wen](https://www.usenix.org/conference/usenixsecurity20/presentation/wen)
- **PDF:** [https://www.usenix.org/system/files/sec20-wen.pdf](https://www.usenix.org/system/files/sec20-wen.pdf)
## PCKV: Locally Differentially Private Correlated Key-Value Data Collection with Optimized Utility.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#pckv-locally-differentially-private-correlated-key-value-data-collection-with-optimized-utility)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#pckv-locally-differentially-private-correlated-key-value-data-collection-with-optimized-utility)
### Authors
* Xiaolan Gu, University of Arizona
* Ming Li, University of Arizona
* Yueqiang Cheng, Baidu X-Lab
* Li Xiong, Emory University
* Yang Cao, Kyoto University
### Abstract
> Data collection under local differential privacy (LDP) has been mostly studied for homogeneous data. Real-world applications often involve a mixture of different data types such as key-value pairs, where the frequency of keys and mean of values under each key must be estimated simultaneously. For key-value data collection with LDP,  it is challenging to achieve a good utility-privacy tradeoff since the data contains two dimensions and a user may possess multiple key-value pairs. There is also an inherent correlation between key and values which if not harnessed, will lead to poor utility.  In this paper, we propose a locally differentially private key-value data collection framework that utilizes correlated perturbations to enhance utility. We instantiate our framework by two protocols PCKV-UE (based on Unary Encoding) and PCKV-GRR (based on Generalized Randomized Response),  where we design an advanced Padding-and-Sampling mechanism and an improved mean estimator which is non-interactive. Due to our correlated key and value perturbation mechanisms, the composed privacy budget is shown to be less than that of independent perturbation of key and value, which enables us to further optimize the perturbation parameters via budget allocation.  Experimental results on both synthetic and real-world datasets show that our proposed protocols achieve better utility for both frequency and mean estimations under the same LDP guarantees than state-of-the-art mechanisms.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/gu](https://www.usenix.org/conference/usenixsecurity20/presentation/gu)
- **PDF:** [https://www.usenix.org/system/files/sec20-gu.pdf](https://www.usenix.org/system/files/sec20-gu.pdf)
## Actions Speak Louder than Words: Entity-Sensitive Privacy Policy and Data Flow Analysis with PoliCheck.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#actions-speak-louder-than-words-entity-sensitive-privacy-policy-and-data-flow-analysis-with-policheck)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#actions-speak-louder-than-words-entity-sensitive-privacy-policy-and-data-flow-analysis-with-policheck)
### Authors
* Benjamin Andow, IBM T.J. Watson Research Center
* Samin Yaseer Mahmud, North Carolina State University
* Justin Whitaker, North Carolina State University
* William Enck, North Carolina State University
* Bradley Reaves, North Carolina State University
* Kapil Singh, IBM T.J. Watson Research Center
* Serge Egelman, U.C. Berkeley; ICSI; AppCensus Inc.
### Abstract
> Identifying privacy-sensitive data leaks by mobile applications has been a topic of great research interest for the past decade. Technically, such data flows are not “leaks” if they are disclosed in a privacy policy. To address this limitation in automated analysis, recent work has combined program analysis of applications with analysis of privacy policies to determine the flow-to-policy consistency, and hence violations thereof. However, this prior work has a fundamental weakness: it does not differentiate the entity (e.g., first-party vs. third-party) receiving the privacy-sensitive data. In this paper, we propose POLICHECK, which formalizes and implements an entity-sensitive flow-to-policy consistency model. We use POLICHECK to study 13,796 applications and their privacy policies and find that up to 42.4% of applications either incorrectly disclose or omit disclosing their privacy-sensitive data flows. Our results also demonstrate the significance of considering entities: without considering entity, prior approaches would falsely classify up to 38.4% of applications as having privacy-sensitive data flows consistent with their privacy policies. These false classifications include data flows to third-parties that are omitted (e.g., the policy states only the first-party collects the data type), incorrect (e.g., the policy states the third-party does not collect the data type), and ambiguous (e.g., the policy has conflicting statements about the data type collection). By defining a novel automated, entity-sensitive flow-to-policy consistency analysis, POLICHECK provides the highest-precision method to date to determine if applications properly disclose their privacy-sensitive behaviors.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/andow](https://www.usenix.org/conference/usenixsecurity20/presentation/andow)
- **PDF:** [https://www.usenix.org/system/files/sec20-andow.pdf](https://www.usenix.org/system/files/sec20-andow.pdf)
## Walking Onions: Scaling Anonymity Networks while Protecting Users.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#walking-onions-scaling-anonymity-networks-while-protecting-users)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#walking-onions-scaling-anonymity-networks-while-protecting-users)
### Authors
* Chelsea H. Komlo, University of Waterloo
* Nick Mathewson, The Tor Project
* Ian Goldberg, University of Waterloo
### Abstract
> Scaling anonymity networks offers unique security challenges, as attackers can exploit differing views of the network's topology to perform epistemic and route capture attacks. Anonymity networks in practice, such as Tor, have opted for security over scalability by requiring participants to share a globally consistent view of all relays to prevent these kinds of attacks. Such an approach requires each user to maintain up-to-date information about every relay, causing the total amount of data each user must download every epoch to scale linearly with the number of relays. As the number of clients increases, more relays must be added to provide bandwidth, further exacerbating the total load on the network. In this work, we present Walking Onions, a set of protocols improving scalability for anonymity networks. Walking Onions enables constant-size scaling of the information each user must download in every epoch, even as the number of relays in the network grows. Furthermore, we show how relaxing the clients' bandwidth growth from constant to logarithmic can enable an outsized improvement to relays' bandwidth costs. Notably, Walking Onions offers the same security properties as current designs that require a globally consistent network view. We present two protocol variants. The first requires minimal changes from current onion-routing systems. The second presents a more significant design change, thereby reducing the latency required to establish a path through the network while providing better forward secrecy than previous such constructions. We implement and evaluate Walking Onions in a simulated onion-routing anonymity network modelled after Tor, and validate that Walking Onions indeed offers significant scalability improvements for networks at or above the size of the current Tor network.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/komlo](https://www.usenix.org/conference/usenixsecurity20/presentation/komlo)
- **PDF:** [https://www.usenix.org/system/files/sec20-komlo.pdf](https://www.usenix.org/system/files/sec20-komlo.pdf)
## Differentially-Private Control-Flow Node Coverage for Software Usage Analysis.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#differentially-private-control-flow-node-coverage-for-software-usage-analysis)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#differentially-private-control-flow-node-coverage-for-software-usage-analysis)
### Authors
* Hailong Zhang, The Ohio State University
* Sufian Latif, The Ohio State University
* Raef Bassily, The Ohio State University
* Atanas Rountev, The Ohio State University
### Abstract
> There are significant privacy concerns about the collection of usage data from deployed software. We propose a novel privacy-preserving solution for a problem of central importance to software usage analysis: control-flow graph coverage analysis over many deployed software instances. Our solution employs the machinery of differential privacy and its generalizations, and develops the following technical contributions: (1) a new notion of privacy guarantees based on a neighbor relation between control-flow graphs that prevents causality-based inference, (2) a new differentially-private algorithm design based on a novel definition of sensitivity with respect to differences between neighbors, (3) an efficient implementation of the algorithm using dominator trees derived from control-flow graphs, (4) a pruning approach to reduce the noise level by tightening the sensitivity bound using restricted sensitivity, and (5) a refined notion of relaxed indistinguishability based on distances between neighbors. Our evaluation demonstrates that these techniques can achieve practical accuracy while providing principled privacy-by-design guarantees.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/zhang-hailong](https://www.usenix.org/conference/usenixsecurity20/presentation/zhang-hailong)
## Visor: Privacy-Preserving Video Analytics as a Cloud Service.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#visor-privacy-preserving-video-analytics-as-a-cloud-service)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#visor-privacy-preserving-video-analytics-as-a-cloud-service)
### Authors
* Rishabh Poddar, UC Berkeley and Microsoft Research
* Ganesh Ananthanarayanan, Microsoft Research
* Srinath Setty, Microsoft Research
* Stavros Volos, Microsoft Research
* Raluca Ada Popa, UC Berkeley
### Abstract
> Video-analytics-as-a-service is becoming an important offering for cloud providers. A key concern in such services is privacy of the videos being analyzed. While trusted execution environments (TEEs) are promising options for preventing the direct leakage of private video content, they remain vulnerable to side-channel attacks.  We present Visor, a system that provides confidentiality for the user’s video stream as well as the ML models in the presence of a compromised cloud platform and untrusted co-tenants. Visor executes video pipelines in a hybrid TEE that spans both the CPU and GPU. It protects the pipeline against side-channel attacks induced by data-dependent access patterns of video modules, and also addresses leakage in the CPU-GPU communication channel. Visor is up to 1000× faster than naïve oblivious solutions, and its overheads relative to a non-oblivious baseline are limited to 2×–6×.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/poddar](https://www.usenix.org/conference/usenixsecurity20/presentation/poddar)
- **PDF:** [https://www.usenix.org/system/files/sec20-poddar.pdf](https://www.usenix.org/system/files/sec20-poddar.pdf)
## DELF: Safeguarding deletion correctness in Online Social Networks.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#delf-safeguarding-deletion-correctness-in-online-social-networks)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#delf-safeguarding-deletion-correctness-in-online-social-networks)
### Authors
* Katriel Cohn-Gordon, Facebook
* Georgios Damaskinos, Facebook, EPFL
* Divino Neto, Facebook
* Joshi Cordova, Facebook
* Benoît Reitz, Facebook
* Benjamin Strahs, Facebook
* Daniel Obenshain, Facebook
* Paul Pearce, Facebook, Georgia Tech
* Ioannis Papagiannis, Facebook
### Abstract
> Deletion is a core facet of Online Social Networks (OSNs). For users, deletion is a tool to remove what they have shared and control their data. For OSNs, robust deletion is both an obligation to their users and a risk when developer mistakes inevitably occur. While developers are effective at identifying high-level deletion requirements in products (e.g., users should be able to delete posted photos), they are less effective at mapping high-level requirements into concrete operations (e.g., deleting all relevant items in data stores). Without framework support, developer mistakes lead to violations of users’ privacy, such as retaining data that should be deleted, deleting the wrong data, and exploitable vulnerabilities. We propose DELF, a deletion framework for modern OSNs. In DELF, developers specify deletion annotations on data type definitions, which the framework maps into asynchronous, reliable and temporarily reversible operations on backing data stores. DELF validates annotations both statically and dynamically, proactively flagging errors and suggesting fixes. We deployed DELF in three distinct OSNs, showing the feasibility of our approach. DELF detected, surfaced, and helped developers correct thousands of omissions and dozens of mistakes, while also enabling timely recovery in tens of incidents where user data was inadvertently deleted.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/cohn-gordon](https://www.usenix.org/conference/usenixsecurity20/presentation/cohn-gordon)
- **PDF:** [https://www.usenix.org/system/files/sec20-cohn-gordon.pdf](https://www.usenix.org/system/files/sec20-cohn-gordon.pdf)
## Datalog Disassembly.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#datalog-disassembly)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#datalog-disassembly)
### Authors
* Antonio Flores-Montoya, GrammaTech Inc.
* Eric Schulte, GrammaTech Inc.
### Abstract
> Disassembly is fundamental to binary analysis and rewriting.  We present a novel disassembly technique that takes a stripped binary and produces reassembleable assembly code. The resulting assembly code has accurate symbolic information,  providing cross-references for analysis and to enable adjustment of code and data pointers to accommodate rewriting. Our technique features multiple static analyses and heuristics in a combined Datalog implementation. We argue that Datalog’s inference process is particularly well suited for disassembly and the required analyses. Our implementation and experiments support this claim. We have implemented our approach into an open-source tool called Ddisasm. In extensive experiments in which we rewrite thousands of x64 binaries we find Ddisasm is both faster and more accurate than the current state-of-the-art binary reassembling tool, Ramblr.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/flores-montoya](https://www.usenix.org/conference/usenixsecurity20/presentation/flores-montoya)
- **PDF:** [https://www.usenix.org/system/files/sec20-flores-montoya.pdf](https://www.usenix.org/system/files/sec20-flores-montoya.pdf)
## KOOBE: Towards Facilitating Exploit Generation of Kernel Out-Of-Bounds Write Vulnerabilities.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#koobe-towards-facilitating-exploit-generation-of-kernel-out-of-bounds-write-vulnerabilities)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#koobe-towards-facilitating-exploit-generation-of-kernel-out-of-bounds-write-vulnerabilities)
### Authors
* Weiteng Chen, UC Riverside
* Xiaochen Zou, UC Riverside
* Guoren Li, UC Riverside
* Zhiyun Qian, UC Riverside
### Abstract
> The monolithic nature of modern OS kernels leads to a constant stream of bugs being discovered. It is often unclear which of these bugs are worth fixing, as only a subset of them may be serious enough to lead to security takeovers (i.e., privilege escalations). Therefore, researchers have recently started to develop automated exploit generation techniques (for UAF bugs) to assist the bug triage process. In this paper, we investigate another top memory vulnerability in Linux kernel—out-of-bounds (OOB) memory write from heap. We design KOOBE to assist the analysis of such vulnerabilities based on two observations: (1) Surprisingly often, different OOB vulnerability instances exhibit a wide range of capabilities. (2) Kernel exploits are multi-interaction> in nature (i.e., multiple syscalls are involved in an exploit) which allows the exploit crafting process to be modular. Specifically, we focus on the extraction of capabilities of an OOB vulnerability which will feed the subsequent exploitability evaluation process. Our system builds on several building blocks, including a novel capability-guided fuzzing solution to uncover hidden capabilities, and a way to compose capabilities together to further enhance the likelihood of successful exploitations. In our evaluation, we demonstrate the applicability of KOOBE by exhaustively analyzing 17 most recent Linux kernel OOB vulnerabilities (where only 5 of them have publicly available exploits), for which KOOBE successfully generated candidate exploit strategies for 11 of them (including 5 that do not even have any CVEs assigned). Subsequently from these strategies, we are able to construct fully working exploits for all of them.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/chen-weiteng](https://www.usenix.org/conference/usenixsecurity20/presentation/chen-weiteng)
- **PDF:** [https://www.usenix.org/system/files/sec20-chen-weiteng.pdf](https://www.usenix.org/system/files/sec20-chen-weiteng.pdf)
## Automatic Techniques to Systematically Discover New Heap Exploitation Primitives.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#automatic-techniques-to-systematically-discover-new-heap-exploitation-primitives)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#automatic-techniques-to-systematically-discover-new-heap-exploitation-primitives)
### Authors
* Insu Yun, Georgia Institute of Technology
* Dhaval Kapil, Facebook
* Taesoo Kim, Georgia Institute of Technology
### Abstract
> Exploitation techniques to abuse metadata of heap allocators have been widely studied because of their generality (i.e., application independence) and powerfulness (i.e., bypassing modern mitigation). However, such techniques are commonly considered arts, and thus the ways to discover them remain ad-hoc, manual, and allocator-specific.In this paper, we present an automatic tool, ArcHeap, to systematically discover the unexplored heap exploitation primitives, regardless of their underlying implementations.  The key idea of ArcHeap is to let the computer autonomously explore the spaces, similar in concept to fuzzing, by specifying a set of common designs of modern heap allocators and root causes of vulnerabilities as models, and by providing heap operations and attack capabilities as actions.  During the exploration, ArcHeap checks whether the combinations of these actions can be potentially used to construct exploitation primitives, such as arbitrary write or overlapped chunks.  As a proof, ArcHeap generates working PoC that demonstrates the discovered exploitation technique.We evaluated ArcHeap with ptmalloc2 and 10 other allocators, and discovered five previously unknown exploitation techniques in ptmalloc2 as well as several techniques against seven out of 10 allocators including the security-focused allocator, DieHarder.  To show the effectiveness of ArcHeap's approach in other domains, we also studied how security features and exploit primitives evolve across different versions of ptmalloc2.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/yun](https://www.usenix.org/conference/usenixsecurity20/presentation/yun)
- **PDF:** [https://www.usenix.org/system/files/sec20-yun.pdf](https://www.usenix.org/system/files/sec20-yun.pdf)
## The Industrial Age of Hacking.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#the-industrial-age-of-hacking)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#the-industrial-age-of-hacking)
### Authors
* Timothy Nosco, United States Army
* Jared Ziegler, National Security Agency
* Zechariah Clark, United States Navy
* Davy Marrero, United States Navy
* Todd Finkler, United States Air Force
* Andrew Barbarello, United States Navy
* W. Michael Petullo, United States Army
### Abstract
> There is a cognitive bias in the hacker community to select a piece of software and invest significant human resources into finding bugs in that software without any prior indication of success. We label this strategy depth-first search and propose an alternative: breadth-first search. In breadth-first search, humans perform minimal work to enable automated analysis on a range of targets before committing additional time and effort to research any particular one. We present a repeatable human study that leverages teams of varying skill while using automation to the greatest extent possible. Our goal is a process that is effective at finding bugs; has a clear plan for the growth, coaching,and efficient use of team members; and supports measurable, incremental progress. We derive an assembly-line process that improves on what was once intricate, manual work. Our work provides evidence that the breadth-first approach increases the effectiveness of teams.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/nosco](https://www.usenix.org/conference/usenixsecurity20/presentation/nosco)
- **PDF:** [https://www.usenix.org/system/files/sec20-nosco.pdf](https://www.usenix.org/system/files/sec20-nosco.pdf)
## BScout: Direct Whole Patch Presence Test for Java Executables.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#bscout-direct-whole-patch-presence-test-for-java-executables)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#bscout-direct-whole-patch-presence-test-for-java-executables)
### Authors
* Jiarun Dai, Fudan University
* Yuan Zhang, Fudan University
* Zheyue Jiang, Fudan University
* Yingtian Zhou, Fudan University
* Junyan Chen, Fudan University
* Xinyu Xing, Pennsylvania State University
* Xiaohan Zhang, Fudan University
* Xin Tan, Fudan University
* Min Yang, Fudan University
* Zhemin Yang, Fudan University
### Abstract
> To protect end-users and software from known vulnerabilities, it is crucial to apply security patches to affected executables timely. To this end, patch presence tests are proposed with the capability of independently investigating patch application status on a target without source code. Existing work on patch presence testing adopts a signature-based approach. To make a trade-off between the uniqueness and the stability of the signature, existing work is limited to use a small and localized patch snippet (instead of the whole patch) for signature generation, so they are inherently unreliable. In light of this, we present BScout, which directly checks the presence of a whole patch in Java executables without generating signatures. BScout features several new techniques to bridge the semantic gap between source code and bytecode instructions during the testing, and accurately checks the fine-grained patch semantics in the whole target executable. We evaluate BScout with 194 CVEs from the Android framework and third-party libraries. The results show that it achieves remarkable accuracy with and without line number information (i.e., debug information) presented in a target executable. We further apply BScout to perform a large-scale patch application practice study with 2,506 Android system images from 7 vendors. Our study reveals many findings that have not yet been reported.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/dai](https://www.usenix.org/conference/usenixsecurity20/presentation/dai)
- **PDF:** [https://www.usenix.org/system/files/sec20-dai.pdf](https://www.usenix.org/system/files/sec20-dai.pdf)
## MVP: Detecting Vulnerabilities using Patch-Enhanced Vulnerability Signatures.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#mvp-detecting-vulnerabilities-using-patch-enhanced-vulnerability-signatures)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#mvp-detecting-vulnerabilities-using-patch-enhanced-vulnerability-signatures)
### Authors
* Yang Xiao, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China and School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Bihuan Chen, School of Computer Science and Shanghai Key Laboratory of Data Science, Fudan University, China
* Chendong Yu, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China and School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Zhengzi Xu, School of Computer Science and Engineering, Nanyang Technological University, Singapore
* Zimu Yuan, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China and School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Feng Li, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China and School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Binghong Liu, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China and School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Yang Liu, School of Computer Science and Engineering, Nanyang Technological University, Singapore
* Wei Huo, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China and School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Wei Zou, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China and School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Wenchang Shi, Renmin University of China, Beijing, China
### Abstract
> Recurring vulnerabilities widely exist and remain undetected in real-world systems, which are often resulted from reused code base or shared code logic. However, the potentially small differences between vulnerable functions and their patched functions as well as the possibly large differences between vulnerable functions and target functions to be detected bring challenges to clone-based and function matching-based approaches to identify these recurring vulnerabilities, i.e., causing high false positives and false negatives.In this paper, we propose a novel approach to detect recurring vulnerabilities with low false positives and low false negatives. We first use our novel program slicing to extract vulnerability and patch signatures from vulnerable function and its patched function at syntactic and semantic levels. Then a target function is identified as potentially vulnerable if it matches the vulnerability signature but does not match the patch signature. We implement our approach in a tool named MVP. Our evaluation on ten open-source systems has shown that, i) MVP significantly outperformed state-of-the-art clone-based and function matching-based recurring vulnerability detection approaches; ii) MVP detected recurring vulnerabilities that cannot be detected by general-purpose vulnerability detection approaches, i.e., two learning-based approaches and two commercial tools; and iii) MVP has detected 97 new vulnerabilities with 23 CVE identifiers assigned.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/xiao](https://www.usenix.org/conference/usenixsecurity20/presentation/xiao)
- **PDF:** [https://www.usenix.org/system/files/sec20-xiao.pdf](https://www.usenix.org/system/files/sec20-xiao.pdf)
## Shattered Chain of Trust: Understanding Security Risks in Cross-Cloud IoT Access Delegation.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#shattered-chain-of-trust-understanding-security-risks-in-cross-cloud-iot-access-delegation)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#shattered-chain-of-trust-understanding-security-risks-in-cross-cloud-iot-access-delegation)
### Authors
* Bin Yuan, School of Cyber Science and Engineering, Huazhong Univ. of Sci. & Tech., China; National Engineering Research Center for Big Data Technology and System, Cluster and Grid Computing Lab, Services Computing Technology and System Lab, and Big Data Security Engineering Research Center, Huazhong Univ. of Sci. & Tech., China; Shenzhen Huazhong University of Science and Technology Research Institute, China; Indiana University Bloomington
* Yan Jia, School of Cyber Engineering, Xidian University, China; National Computer Network Intrusion Protection Center, University of Chinese Academy of Sciences, China; Indiana University Bloomington
* Luyi Xing, Indiana University Bloomington
* Dongfang Zhao, Indiana University Bloomington
* XiaoFeng Wang, Indiana University Bloomington
* Deqing Zou, School of Cyber Science and Engineering, Huazhong Univ. of Sci. & Tech., China; National Engineering Research Center for Big Data Technology and System, Cluster and Grid Computing Lab, Services Computing Technology and System Lab, and Big Data Security Engineering Research Center, Huazhong Univ. of Sci. & Tech., China
* Hai Jin, School of Computer Science and Technology, Huazhong Univ. of Sci. & Tech., China; National Engineering Research Center for Big Data Technology and System, Cluster and Grid Computing Lab, Services Computing Technology and System Lab, and Big Data Security Engineering Research Center, Huazhong Univ. of Sci. & Tech., China
* Yuqing Zhang, National Computer Network Intrusion Protection Center, University of Chinese Academy of Sciences, China; School of Cyber Engineering, Xidian University, China
### Abstract
> IoT clouds facilitate the communication between IoT devices and users, and authorize users’ access to their devices. In this paradigm, an IoT device is usually managed under a particular IoT cloud designated by the device vendor, e.g., Philips bulbs are managed under Philips Hue cloud. Today’s mainstream IoT clouds also support device access delegation across different vendors (e.g., Philips Hue, LIFX, etc.) and cloud providers (e.g., Google, IFTTT, etc.): for example, Philips Hue and SmartThings clouds support to delegate device access to another cloud such as Google Home, so a user can manage multiple devices from different vendors all through Google Home. Serving this purpose are the IoT delegation mechanisms developed and utilized by IoT clouds, which we found are heterogeneous and ad-hoc in the wild, in the absence of a standardized delegation protocol suited for IoT environments. In this paper, we report the ﬁrst systematic study on real-world IoT access delegation, based upon a semi-automatic veriﬁcation tool we developed. Our study brought to light the pervasiveness of security risks in these delegation mechanisms, allowing the adversary (e.g., Airbnb tenants, former employees) to gain unauthorized access to the victim’s devices (e.g., smart locks) or impersonate the devices to trigger other devices. We conﬁrmed the presence of critical security ﬂaws in these mechanisms through end-to-end exploits on them, and further conducted a measurement study. Our research demonstrates the serious consequences of these exploits and the security implications of the practice today for building these mechanisms. We reported our ﬁndings to related parties, which acknowledged the problems. We further propose principles for developing more secure cross-cloud IoT delegation services, before a standardized solution can be widely deployed.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/yuan](https://www.usenix.org/conference/usenixsecurity20/presentation/yuan)
- **PDF:** [https://www.usenix.org/system/files/sec20-yuan.pdf](https://www.usenix.org/system/files/sec20-yuan.pdf)
## HALucinator: Firmware Re-hosting Through Abstraction Layer Emulation.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#halucinator-firmware-re-hosting-through-abstraction-layer-emulation)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#halucinator-firmware-re-hosting-through-abstraction-layer-emulation)
### Authors
* Abraham A Clements, Sandia National Laboratories
* Eric Gustafson, UC Santa Barbara and Sandia National Laboratories
* Tobias Scharnowski, Ruhr-Universität Bochum
* Paul Grosen, UC Santa Barbara
* David Fritz, Sandia National Laboratories
* Christopher Kruegel, UC Santa Barbara
* Giovanni Vigna, UC Santa Barbara
* Saurabh Bagchi, Purdue University
* Mathias Payer, EPFL
### Abstract
> Given the increasing ubiquity of online embedded devices, analyzing their firmware is important to security, privacy, and safety. The tight coupling between hardware and firmware and the diversity found in embedded systems makes it hard to perform dynamic analysis on firmware. However, firmware developers regularly develop code using abstractions, such as Hardware Abstraction Layers (HALs), to simplify their job. We leverage such abstractions as the basis for the re-hosting and analysis of firmware. By providing high-level replacements for HAL functions (a process termed High-Level Emulation – HLE), we decouple the hardware from the firmware. This approach works by first locating the library functions in a firmware sample, through binary analysis, and then providing generic implementations of these functions in a full-system emulator. We present these ideas in a prototype system, HALucinator, able to re-host firmware, and allow the virtual device to be used normally. First, we introduce extensions to existing library matching techniques that are needed to identify library functions in binary firmware, to reduce collisions, and for inferring additional function names. Next, we demonstrate the re-hosting process, through the use of simplified handlers and peripheral models, which make the process fast, flexible, and portable between firmware samples and chip vendors. Finally, we demonstrate the practicality of HLE for security analysis, by supplementing HALucinator with the American Fuzzy Lop fuzzer, to locate multiple previously-unknown vulnerabilities in firmware middleware libraries.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/clements](https://www.usenix.org/conference/usenixsecurity20/presentation/clements)
- **PDF:** [https://www.usenix.org/system/files/sec20-clements.pdf](https://www.usenix.org/system/files/sec20-clements.pdf)
## Silhouette: Efficient Protected Shadow Stacks for Embedded Systems.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#silhouette-efficient-protected-shadow-stacks-for-embedded-systems)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#silhouette-efficient-protected-shadow-stacks-for-embedded-systems)
### Authors
* Jie Zhou, University of Rochester
* Yufei Du, University of Rochester
* Zhuojia Shen, University of Rochester
* Lele Ma, University of Rochester and College of William and Mary
* John Criswell, University of Rochester
* Robert J. Walls, Worcester Polytechnic Institute
### Abstract
> Microcontroller-based embedded systems are increasingly used for applications that can have serious and immediate consequences if compromised—including automobile control systems, smart locks, drones, and implantable medical devices. Due to resource and execution-time constraints, C is the primary language used for programming these devices. Unfortunately, C is neither type-safe nor memory-safe, and control-flow hijacking remains a prevalent threat. This paper presents Silhouette: a compiler-based defense that efficiently guarantees the integrity of return addresses, significantly reducing the attack surface for control-flow hijacking. Silhouette combines an incorruptible shadow stack for return addresses with checks on forward control flow and memory protection to ensure that all functions return to the correct dynamic caller. To protect its shadow stack, Silhouette uses store hardening, an efficient intra-address space isolation technique targeting various ARM architectures that leverages special store instructions found on ARM processors. We implemented Silhouette for the ARMv7-M architecture, but our techniques are applicable to other common embedded ARM architectures. Our evaluation shows that Silhouette incurs a geometric mean of 1.3% and 3.4% performance overhead on two benchmark suites. Furthermore, we prototyped Silhouette-Invert, an alternative implementation of Silhouette, which incurs just 0.3% and 1.9% performance overhead, at the cost of a minor hardware change.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/zhou-jie](https://www.usenix.org/conference/usenixsecurity20/presentation/zhou-jie)
- **PDF:** [https://www.usenix.org/system/files/sec20-zhou-jie.pdf](https://www.usenix.org/system/files/sec20-zhou-jie.pdf)
## P2IM: Scalable and Hardware-independent Firmware Testing via Automatic Peripheral Interface Modeling.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#p2im-scalable-and-hardware-independent-firmware-testing-via-automatic-peripheral-interface-modeling)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#p2im-scalable-and-hardware-independent-firmware-testing-via-automatic-peripheral-interface-modeling)
### Authors
* Bo Feng, Northeastern University
* Alej, Northeastern University
* ro Mera, Northeastern University
* Long Lu, Northeastern University
### Abstract
> Dynamic testing or fuzzing of embedded firmware is severely limited by hardware-dependence and poor scalability, partly contributing to the widespread vulnerable IoT devices.  We propose a software framework that continuously executes a given firmware binary while channeling inputs from an off-the-shelf fuzzer, enabling  hardware-independent and scalable firmware testing.  Our framework, using a novel technique called P2IM, abstracts diverse  peripherals and handles firmware I/O on the fly based on automatically generated models. P2IM is oblivious to peripheral designs and generic to firmware implementations, and therefore, applicable to a wide range of embedded devices.  We evaluated our framework using 70 sample firmware and 10 firmware from real devices, including a drone, a robot, and a PLC. It successfully executed 79% of the sample firmware without any manual assistance. We also performed a limited fuzzing test on the real firmware, which unveiled 7 unique unknown bugs.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/feng](https://www.usenix.org/conference/usenixsecurity20/presentation/feng)
- **PDF:** [https://www.usenix.org/system/files/sec20-feng.pdf](https://www.usenix.org/system/files/sec20-feng.pdf)
## COUNTERFOIL: Verifying Provenance of Integrated Circuits using Intrinsic Package Fingerprints and Inexpensive Cameras.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#counterfoil-verifying-provenance-of-integrated-circuits-using-intrinsic-package-fingerprints-and-inexpensive-cameras)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#counterfoil-verifying-provenance-of-integrated-circuits-using-intrinsic-package-fingerprints-and-inexpensive-cameras)
### Authors
* Siva Nishok Dhanuskodi, University of Massachusetts Amherst
* Xiang Li, University of Massachusetts Amherst
* Daniel Holcomb, University of Massachusetts Amherst
### Abstract
> Counterfeit integrated circuits are responsible for billions of dollars in losses to the semiconductor industry each year, and jeopardize the reliability of critical systems that unwittingly rely on them. Counterfeit parts, which are primarily recycled, test rejects, or legitimate but regraded, have to date been found in a number of systems, including critical defense systems. In this work, we present COUNTERFOIL – an anti-counterfeiting system based on enrolling and authenticating intrinsic features of the molded packages that enclose a majority of semiconductor chips sold on the market. Our system relies on computer-readable labels, inexpensive cameras, imaging processing using OpenCV, and digital signatures, to enroll and verify chip packages. We demonstrate our approach on a dataset from over 100 chips. We show that our technique is effective and reliable for verifying provenance under a variety of settings, and evaluate the robustness of the package features by using different imaging platforms, and by wearing the chips with silicon carbide polishing grit in a rock tumbler. We show that, even if an adversary steals the exact mold used to produce an enrolled chip package, he will have limited success in being able to counterfeit the chip.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/dhanuskodi](https://www.usenix.org/conference/usenixsecurity20/presentation/dhanuskodi)
- **PDF:** [https://www.usenix.org/system/files/sec20-dhanuskodi.pdf](https://www.usenix.org/system/files/sec20-dhanuskodi.pdf)
## Hall Spoofing: A Non-Invasive DoS Attack on Grid-Tied Solar Inverter.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#hall-spoofing-a-non-invasive-dos-attack-on-grid-tied-solar-inverter)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#hall-spoofing-a-non-invasive-dos-attack-on-grid-tied-solar-inverter)
### Authors
* Anomadarshi Barua, UC Irvine
* Mohammad Abdullah Al Faruque, UC Irvine
### Abstract
> Grid-tied solar inverters continue to proliferate rapidly to tackle the growing environmental challenges. Nowadays, different smart sensors and transducers are tightly integrated with the grid-tied inverter. This integration opens the "Pandora's Box" of unknown threats that could come from very unconventional ways. This paper demonstrates a noninvasive attack that could come by spoofing the Hall sensor of an inverter in a stealthy way by using an external magnetic field. We demonstrate how an attacker can camouflage his/her attack tool and place it near a target inverter. In doing so, he/she can intentionally perturb grid voltage and frequency and can inject false real and reactive power to the grid. We also show the consequences of the attack on a scaled-down testbed of a power grid with a commercial 140 W grid-tied inverter from Texas Instruments. We are able to achieve a 31.52% change in output voltage, 3.16x (-6dB to -11dB) increase in low-frequency harmonics power, and 3.44x increase in real power. Moreover, we introduce a duty-cycle variation approach for a noninvasive adversarial control that can change the inverter voltage up to 34% and real power up to 38%. We discuss the feasibility of using a 100 kW inverter through discussion. This provides insights behind the generalization of the attack model. In addition, the commercial power system simulation tool Etap 19.0.1 is used to simulate the impact of the attack on a 2.3 MW power grid. To the best of our knowledge, this is the first methodology that highlights the possibility of such an attack that might lead to grid blackout in a weak grid.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/barua](https://www.usenix.org/conference/usenixsecurity20/presentation/barua)
- **PDF:** [https://www.usenix.org/system/files/sec20-barua.pdf](https://www.usenix.org/system/files/sec20-barua.pdf)
## Updates-Leak: Data Set Inference and Reconstruction Attacks in Online Learning.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#updates-leak-data-set-inference-and-reconstruction-attacks-in-online-learning)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#updates-leak-data-set-inference-and-reconstruction-attacks-in-online-learning)
### Authors
* Ahmed Salem, CISPA Helmholtz Center for Information Security
* Apratim Bhattacharya, Max Planck Institute for Informatics
* Michael Backes, CISPA Helmholtz Center for Information Security
* Mario Fritz, CISPA Helmholtz Center for Information Security
* Yang Zhang, CISPA Helmholtz Center for Information Security
### Abstract
> Machine learning (ML) has progressed rapidly during the past decade and the major factor that drives such development is the unprecedented large-scale data. As data generation is a continuous process, this leads to ML model owners updating their models frequently with newly-collected data in an online learning scenario. In consequence, if an ML model is queried with the same set of data samples at two different points in time, it will provide different results.In this paper, we investigate whether the change in the output of a black-box ML model before and after being updated can leak information of the dataset used to perform the update, namely the updating set. This constitutes a new attack surface against black-box ML models and such information leakage may compromise the intellectual property and data privacy of the ML model owner. We propose four attacks following an encoder-decoder formulation, which allows inferring diverse information of the updating set. Our new attacks are facilitated by state-of-the-art deep learning techniques. In particular, we propose a hybrid generative model (CBM-GAN) that is based on generative adversarial networks (GANs) but includes a reconstructive loss that allows reconstructing accurate samples. Our experiments show that the proposed attacks achieve strong performance.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/salem](https://www.usenix.org/conference/usenixsecurity20/presentation/salem)
- **PDF:** [https://www.usenix.org/system/files/sec20-salem.pdf](https://www.usenix.org/system/files/sec20-salem.pdf)
## Exploring Connections Between Active Learning and Model Extraction.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#exploring-connections-between-active-learning-and-model-extraction)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#exploring-connections-between-active-learning-and-model-extraction)
### Authors
* Varun Ch, University of Wisconsin-Madison
* rasekaran, University of Wisconsin-Madison
* Kamalika Chaudhuri, University of California San Diego
* Irene Giacomelli, Protocol Labs
* Somesh Jha, University of Wisconsin-Madison
* Songbai Yan, University of California San Diego
### Abstract
> Machine learning is being increasingly used by individuals, research institutions, and corporations. This has resulted in the surge of Machine Learning-as-a-Service (MLaaS) - cloud services that provide (a) tools and resources to learn the model, and (b) a user-friendly query interface to access the model. However, such MLaaS systems raise privacy concerns such as model extraction. In model extraction attacks, adversaries maliciously exploit the query interface to steal the model. More precisely, in a model extraction attack, a good approximation of a sensitive or proprietary model held by the server is extracted (i.e. learned) by a dishonest user who interacts with the server only via the query interface. This attack was introduced by Tramèr et. al. at the 2016 USENIX Security Symposium, where practical attacks for various models were shown. We believe that better understanding the efficacy of model extraction attacks is paramount to designing secure MLaaS systems. To that end, we take the first step by (a) formalizing model extraction and discussing possible defense strategies, and (b) drawing parallels between model extraction and established area of active learning. In particular, we show that recent advancements in the active learning domain can be used to implement powerful model extraction attacks and investigate possible defense strategies.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/chandrasekaran](https://www.usenix.org/conference/usenixsecurity20/presentation/chandrasekaran)
- **PDF:** [https://www.usenix.org/system/files/sec20-chandrasekaran.pdf](https://www.usenix.org/system/files/sec20-chandrasekaran.pdf)
## Hybrid Batch Attacks: Finding Black-box Adversarial Examples with Limited Queries.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#hybrid-batch-attacks-finding-black-box-adversarial-examples-with-limited-queries)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#hybrid-batch-attacks-finding-black-box-adversarial-examples-with-limited-queries)
### Authors
* Fnu Suya, University of Virginia
* Jianfeng Chi, University of Virginia
* David Evans, University of Virginia
* Yuan Tian, University of Virginia
### Abstract
> We study adversarial examples in a black-box setting where the adversary only has API access to the target model and each query is expensive. Prior work on black-box adversarial examples follows one of two main strategies: (1) transfer attacks use white-box attacks on local models to find candidate adversarial examples that transfer to the target model, and (2) optimization-based attacks use queries to the target model and apply optimization techniques to search for adversarial examples. We propose hybrid attacks that combine both strategies, using candidate adversarial examples from local models as starting points for optimization-based attacks and using labels learned in optimization-based attacks to tune local models for finding transfer candidates. We empirically demonstrate on the MNIST, CIFAR10, and ImageNet datasets that our hybrid attack strategy reduces cost and improves success rates. We also introduce a seed prioritization strategy which enables attackers to focus their resources on the most promising seeds. Combining hybrid attacks with our seed prioritization strategy enables batch attacks that can reliably find adversarial examples with only a handful of queries.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/suya](https://www.usenix.org/conference/usenixsecurity20/presentation/suya)
- **PDF:** [https://www.usenix.org/system/files/sec20-suya.pdf](https://www.usenix.org/system/files/sec20-suya.pdf)
## High Accuracy and High Fidelity Extraction of Neural Networks.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#high-accuracy-and-high-fidelity-extraction-of-neural-networks)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#high-accuracy-and-high-fidelity-extraction-of-neural-networks)
### Authors
* Matthew Jagielski, Northeastern University, Google Brain
* Nicholas Carlini, Google Brain
* David Berthelot, Google Brain
* Alex Kurakin, Google Brain
* Nicolas Papernot, Google Brain
### Abstract
> In a model extraction attack, an adversary steals a copy of a remotely deployed machine learning model, given oracle prediction access. We taxonomize model extraction attacks around two objectives: accuracy, i.e., performing well on the underlying learning task, and fidelity, i.e., matching the predictions of the remote victim classifier on any input. To extract a high-accuracy model, we develop a learning-based attack exploiting the victim to supervise the training of an extracted model. Through analytical and empirical arguments, we then explain the inherent limitations that prevent any learning-based strategy from extracting a truly high-fidelity model—i.e., extracting a functionally-equivalent model whose predictions are identical to those of the victim model on all possible inputs. Addressing these limitations, we expand on prior work to develop the first practical functionally-equivalent extraction attack for direct extraction (i.e., without training) of a model's weights. We perform experiments both on academic datasets and a state-of-the-art image classifier trained with 1 billion proprietary images. In addition to broadening the scope of model extraction research, our work demonstrates the practicality of model extraction attacks against production-grade systems.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/jagielski](https://www.usenix.org/conference/usenixsecurity20/presentation/jagielski)
- **PDF:** [https://www.usenix.org/system/files/sec20-jagielski.pdf](https://www.usenix.org/system/files/sec20-jagielski.pdf)
## Adversarial Preprocessing: Understanding and Preventing Image-Scaling Attacks in Machine Learning.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#adversarial-preprocessing-understanding-and-preventing-image-scaling-attacks-in-machine-learning)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#adversarial-preprocessing-understanding-and-preventing-image-scaling-attacks-in-machine-learning)
### Authors
* Erwin Quiring, TU Braunschweig
* David Klein, TU Braunschweig
* Daniel Arp, TU Braunschweig
* Martin Johns, TU Braunschweig
* Konrad Rieck, TU Braunschweig
### Abstract
> Machine learning has made remarkable progress in the last years, yet   its success has been overshadowed by different attacks that can   thwart its correct operation. While a large body of research has   studied attacks against learning algorithms, vulnerabilities in the   preprocessing for machine learning have received little attention so   far. An exception is the recent work of Xiao et al. that proposes   attacks against image scaling.  In contrast to prior work, these   attacks are agnostic to the learning algorithm and thus impact the   majority of learning-based approaches in computer vision. The    mechanisms underlying the attacks, however, are not understood yet,    and hence their root cause remains unknown. In this paper, we provide the first in-depth analysis of   image-scaling attacks.  We theoretically analyze the attacks from   the perspective of signal processing and identify their root cause   as the interplay of downsampling and convolution.  Based on this   finding, we investigate three popular imaging libraries for machine   learning (OpenCV, TensorFlow, and Pillow) and confirm the presence of   this interplay in different scaling algorithms. As a remedy, we   develop a novel defense against image-scaling attacks that prevents   all possible attack variants. We empirically demonstrate the efficacy   of this defense against non-adaptive and adaptive adversaries.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/quiring](https://www.usenix.org/conference/usenixsecurity20/presentation/quiring)
- **PDF:** [https://www.usenix.org/system/files/sec20-quiring.pdf](https://www.usenix.org/system/files/sec20-quiring.pdf)
## TextShield: Robust Text Classification Based on Multimodal Embedding and Neural Machine Translation.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#textshield-robust-text-classification-based-on-multimodal-embedding-and-neural-machine-translation)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#textshield-robust-text-classification-based-on-multimodal-embedding-and-neural-machine-translation)
### Authors
* Jinfeng Li, Zhejiang University, Alibaba Group
* Tianyu Du, Zhejiang University
* Shouling Ji, Zhejiang University, Alibaba-Zhejiang University Joint Research Institute of Frontier Technologies
* Rong Zhang, Alibaba Group
* Quan Lu, Alibaba Group
* Min Yang, Fudan University
* Ting Wang, Pennsylvania State University
### Abstract
> Text-based toxic content detection is an important tool for reducing harmful interactions in online social media environments. Yet, its underlying mechanism, deep learning-based text classification (DLTC), is inherently vulnerable to maliciously crafted adversarial texts. To mitigate such vulnerabilities, intensive research has been conducted on strengthening English-based DLTC models. However, the existing defenses are not effective for Chinese-based DLTC models, due to the unique sparseness, diversity, and variation of the Chinese language. In this paper, we bridge this striking gap by presenting TextShield, a new adversarial defense framework specifically designed for Chinese-based DLTC models. TextShield differs from previous work in several key aspects: (i) generic – it applies to any Chinese-based DLTC models without requiring re-training; (ii) robust – it significantly reduces the attack success rate even under the setting of adaptive attacks; and (iii) accurate – it has little impact on the performance of DLTC models over legitimate inputs. Extensive evaluations show that it outperforms both existing methods and the industry-leading platforms. Future work will explore its applicability in broader practical tasks.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/li-jinfeng](https://www.usenix.org/conference/usenixsecurity20/presentation/li-jinfeng)
- **PDF:** [https://www.usenix.org/system/files/sec20-li-jinfeng.pdf](https://www.usenix.org/system/files/sec20-li-jinfeng.pdf)
## Data Recovery from "Scrubbed" NAND Flash Storage: Need for Analog Sanitization.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#data-recovery-from-scrubbed-nand-flash-storage-need-for-analog-sanitization)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#data-recovery-from-scrubbed-nand-flash-storage-need-for-analog-sanitization)
### Authors
* Md Mehedi Hasan, The University of Alabama in Huntsville
* Biswajit Ray, The University of Alabama in Huntsville
### Abstract
> Digital sanitization of flash based non-volatile memory system is a well-researched topic. Since flash memory cell holds information in the analog threshold voltage, flash cell may hold the imprints of previously written data even after digital sanitization. In this paper, we show that data is partially or completely recoverable from the flash media sanitized with “scrubbing” based technique, which is a popular technique for page deletion in NAND flash. We find that adversary may utilize the data retention property of the memory cells for recovering the deleted data using standard digital interfaces with the memory. We demonstrate data recovery from commercial flash memory chip, sanitized with scrubbing, by using partial erase operation on the chip. Our results show that analog scrubbing is needed to securely delete information in flash system. We propose and implement analog scrubbing using partial program operation based on the file creation time information.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/hasan](https://www.usenix.org/conference/usenixsecurity20/presentation/hasan)
- **PDF:** [https://www.usenix.org/system/files/sec20-hasan.pdf](https://www.usenix.org/system/files/sec20-hasan.pdf)
## PKU Pitfalls: Attacks on PKU-based Memory Isolation Systems.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#pku-pitfalls-attacks-on-pku-based-memory-isolation-systems)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#pku-pitfalls-attacks-on-pku-based-memory-isolation-systems)
### Authors
* R. Joseph Connor, University of Tennessee, Knoxville
* Tyler McDaniel, University of Tennessee, Knoxville
* Jared M. Smith, University of Tennessee, Knoxville
* Max Schuchard, University of Tennessee, Knoxville
### Abstract
> Intra-process memory isolation can improve security by enforcing least-privilege at a finer granularity than traditional operating system controls without the context-switch overhead associated with inter-process communication. A single process can be divided into separate components such that memory belonging to one component can only be accessed by the code of that component. Because the process has traditionally been a fundamental security boundary, assigning different levels of trust to components within a process is a fundamental change in secure systems design. However, so far there has been little research on the challenges of securely implementing intra-process isolation on top of existing operating system abstractions. We identify that despite providing strong intra-process memory isolation, existing, general purpose approaches neglect the ways in which the OS makes memory and other intra-process resources accessible through system objects. Using two recently-proposed memory isolation systems, we show that such designs are vulnerable to generic attacks that bypass memory isolation These attacks use the kernel as a confused deputy, taking advantage of existing intended kernel functionality that is agnostic of intra-process isolation. We argue that the root cause stems from a fundamentally different security model between kernel abstractions and user-level, intra-process memory isolation. Finally, we discuss potential mitigations and show that the performance cost of extending a ptrace-based sandbox to prevent the new attacks is high, highlighting the need for more efficient system call interception.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/connor](https://www.usenix.org/conference/usenixsecurity20/presentation/connor)
- **PDF:** [https://www.usenix.org/system/files/sec20-connor.pdf](https://www.usenix.org/system/files/sec20-connor.pdf)
## Medusa: Microarchitectural Data Leakage via Automated Attack Synthesis.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#medusa-microarchitectural-data-leakage-via-automated-attack-synthesis)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#medusa-microarchitectural-data-leakage-via-automated-attack-synthesis)
### Authors
* Daniel Moghimi, Worcester Polytechnic Institute
* Moritz Lipp, Graz University of Technology
* Berk Sunar, Worcester Polytechnic Institute
* Michael Schwarz, Graz University of Technology
### Abstract
> In May 2019, a new class of transient execution attack based on Meltdown called microarchitectural data sampling (MDS), was disclosed. MDS enables adversaries to leak secrets across security domains by collecting data from shared CPU resources such as data cache, fill buffers, and store buffers. These resources may temporarily hold data that belongs to other processes and privileged contexts, which could falsely be forwarded to memory accesses of an adversary.We perform an in-depth analysis of these Meltdown-style attacks using our novel fuzzing-based approach. We introduce an analysis tool, named Transynther, which mutates the basic block of existing Meltdown variants to generate and evaluate new Meltdown subvariants. We apply Transynther to analyze modern CPUs and better understand the root cause of these attacks. As a result, we find new variants of MDS that only target specific memory operations, e.g., fast string copies.Based on our findings, we propose a new attack, named Medusa, which can leak data from implicit write-combining memory operations. Since Medusa only applies to specific operations, it can be used to pinpoint vulnerable targets. In a case study, we apply Medusa to recover the key during the RSA signing operation. We show that Medusa can leak various parts of an RSA key during the base64 decoding stage. Then we build leakage templates and recover full RSA keys by employing lattice-based cryptanalysis techniques.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/moghimi-medusa](https://www.usenix.org/conference/usenixsecurity20/presentation/moghimi-medusa)
- **PDF:** [https://www.usenix.org/system/files/sec20-moghimi-medusa.pdf](https://www.usenix.org/system/files/sec20-moghimi-medusa.pdf)
## V0LTpwn: Attacking x86 Processor Integrity from Software.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#v0ltpwn-attacking-x86-processor-integrity-from-software)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#v0ltpwn-attacking-x86-processor-integrity-from-software)
### Authors
* Zijo Kenjar, Technische Universität Darmstadt
* Tommaso Frassetto, Technische Universität Darmstadt
* David Gens, University of California, Irvine
* Michael Franz, University of California, Irvine
* Ahmad-Reza Sadeghi, Technische Universität Darmstadt
### Abstract
> Fault-injection attacks have been proven in the past to be a reliable way of bypassing hardware-based security measures, such as cryptographic hashes, privilege and access permission enforcement, and trusted execution environments. However, traditional fault-injection at-tacks require physical presence, and hence, were often considered out of scope in many real-world adversary settings.In this paper we show this assumption may no longer be justified on x86. We present V0LTpwn, a novel hardware-oriented but software-controlled attack that affects the integrity of computation in virtually any execution mode on modern x86 processors. To the best of our knowledge, this represents the first attack on the integrity of the x86 platform from software. The key idea behind our attack is to undervolt a physical core to force non-recoverable hardware faults. Under a V0LTpwn attack, CPU instructions will continue to execute with erroneous results and without crashes, allowing for exploitation. In contrast to recently presented side-channel attacks that leverage vulnerable speculative execution, V0LTpwn is not limited to information disclosure, but allows adversaries to affect execution, and hence, effectively breaks the integrity goals of modern x86 platforms. In our detailed evaluation we successfully launch software-based attacks against Intel SGX enclaves from a privileged process to demonstrate that a V0LTpwn attack can successfully change the results of computations within enclave execution across multiple CPU revisions.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/kenjar](https://www.usenix.org/conference/usenixsecurity20/presentation/kenjar)
- **PDF:** [https://www.usenix.org/system/files/sec20-kenjar.pdf](https://www.usenix.org/system/files/sec20-kenjar.pdf)
## DeepHammer: Depleting the Intelligence of Deep Neural Networks through Targeted Chain of Bit Flips.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#deephammer-depleting-the-intelligence-of-deep-neural-networks-through-targeted-chain-of-bit-flips)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#deephammer-depleting-the-intelligence-of-deep-neural-networks-through-targeted-chain-of-bit-flips)
### Authors
* Fan Yao, University of Central Florida
* Adnan Siraj Rakin, Arizona State University
* Deliang Fan, Arizona State University
### Abstract
> Security of machine learning is increasingly becoming a major concern due to the ubiquitous deployment of deep learning in many security-sensitive domains. Many prior studies have shown external attacks such as adversarial examples that tamper the integrity of DNNs using maliciously crafted inputs. However, the security implication of internal threats (i.e., hardware vulnerabilities) to DNN models has not yet been well understood. In this paper, we demonstrate the first hardware-based attack on quantized deep neural networks–DeepHammer–that deterministically induces bit flips in model weights to compromise DNN inference by exploiting the rowhammer vulnerability. DeepHammer performs an aggressive bit search in the DNN model to identify the most vulnerable weight bits that are flippable under system constraints. To trigger deterministic bit flips across multiple pages within a reasonable amount of time, we develop novel system-level techniques that enable fast deployment of victim pages, memory-efficient rowhammering and precise flipping of targeted bits. DeepHammer can deliberately degrade the inference accuracy of the victim DNN system to a level that is only as good as random guess, thus completely depleting the intelligence of targeted DNN systems. We systematically demonstrate our attacks on real systems against 11 DNN architectures with 4 datasets corresponding to different application domains. Our evaluation shows that DeepHammer is able to successfully tamper DNN inference behavior at run-time within a few minutes. We further discuss several mitigation techniques from both algorithm and system levels to protect DNNs against such attacks. Our work highlights the need to incorporate security mechanisms in future deep learning systems to enhance the robustness against hardware-based deterministic fault injections.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/yao](https://www.usenix.org/conference/usenixsecurity20/presentation/yao)
- **PDF:** [https://www.usenix.org/system/files/sec20-yao.pdf](https://www.usenix.org/system/files/sec20-yao.pdf)
## SpecFuzz: Bringing Spectre-type vulnerabilities to the surface.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#specfuzz-bringing-spectre-type-vulnerabilities-to-the-surface)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#specfuzz-bringing-spectre-type-vulnerabilities-to-the-surface)
### Authors
* Oleksii Oleksenko, TU Dresden
* Bohdan Trach, TU Dresden
* Mark Silberstein, Technion
* Christof Fetzer, TU Dresden
### Abstract
> SpecFuzz is the first tool that enables dynamic testing for speculative execution vulnerabilities (e.g., Spectre). The key is a novel concept of speculation exposure: The program is instrumented to simulate speculative execution in software by forcefully executing the code paths that could be triggered due to mispredictions, thereby making the speculative memory accesses visible to integrity checkers (e.g., AddressSanitizer). Combined with the conventional fuzzing techniques, speculation exposure enables more precise identification of potential vulnerabilities compared to state-of-the-art static analyzers. Our prototype for detecting Spectre V1 vulnerabilities successfully identifies all known variations of Spectre V1 and decreases the mitigation overheads across the evaluated applications, reducing the amount of instrumented branches by up to 77% given a sufficient test coverage.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/oleksenko](https://www.usenix.org/conference/usenixsecurity20/presentation/oleksenko)
- **PDF:** [https://www.usenix.org/system/files/sec20-oleksenko.pdf](https://www.usenix.org/system/files/sec20-oleksenko.pdf)
## Security Analysis of Unified Payments Interface and Payment Apps in India.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#security-analysis-of-unified-payments-interface-and-payment-apps-in-india)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#security-analysis-of-unified-payments-interface-and-payment-apps-in-india)
### Authors
* Renuka Kumar, University of Michigan
* Sreesh Kishore; Hao Lu, University of Michigan
* Atul Prakash, University of Michigan
### Abstract
> Since 2016, with a strong push from the Government of India, smartphone-based payment apps have become mainstream, with over $50 billion transacted through these apps in 2018. Many of these apps use a common infrastructure introduced by the Indian government, called the Unified Payments Interface (UPI), but there has been no security analysis of this critical piece of infrastructure that supports money transfers.  This paper uses a principled methodology to do a detailed security analysis of the  UPI protocol by reverse-engineering the design of this protocol through seven popular UPI apps.  We discover previously-unreported multi-factor authentication design-level flaws in the UPI 1.0 specification that can lead to significant attacks when combined with an installed attacker-controlled application. In an extreme version of the attack, the flaws could allow a victim's bank account to be linked and emptied, even if a victim had never used a UPI app. The potential attacks were scalable and could be done remotely.  We discuss our methodology and detail how we overcame challenges in reverse-engineering this unpublished application layer protocol, including that all UPI apps undergo a rigorous security review in India and are designed to resist analysis. The work resulted in several CVEs, and a key attack vector that we reported was later addressed in UPI 2.0.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/kumar](https://www.usenix.org/conference/usenixsecurity20/presentation/kumar)
- **PDF:** [https://www.usenix.org/system/files/sec20-kumar.pdf](https://www.usenix.org/system/files/sec20-kumar.pdf)
## Cardpliance: PCI DSS Compliance of Android Applications.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#cardpliance-pci-dss-compliance-of-android-applications)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#cardpliance-pci-dss-compliance-of-android-applications)
### Authors
* Samin Yaseer Mahmud, North Carolina State University
* Akhil Acharya, North Carolina State University
* Benjamin Andow, IBM T.J. Watson Research Center
* William Enck, North Carolina State University
* Bradley Reaves, North Carolina State University
### Abstract
> Smartphones and their applications have become a predominant way of computing, and it is only natural that they have become an important part of financial transaction technology. However, applications asking users to enter credit card numbers have been largely overlooked by prior studies, which frequently report pervasive security and privacy concerns in the general mobile application ecosystem. Such applications are particularly security-sensitive, and they are subject to the Payment Card Industry Data Security Standard (PCI DSS). In this paper, we design a tool called Cardpliance, which bridges the semantics of the graphical user interface with static program analysis to capture relevant requirements from PCI DSS. We use Cardpliance to study 358 popular applications from Google Play that ask the user to enter a credit card number. Overall, we found that 1.67% of the 358 applications are not compliant with PCI DSS, with vulnerabilities including improperly storing credit card numbers and card verification codes. These findings paint a largely positive picture of the state of PCI DSS compliance of popular Android applications.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/mahmud](https://www.usenix.org/conference/usenixsecurity20/presentation/mahmud)
- **PDF:** [https://www.usenix.org/system/files/sec20-mahmud.pdf](https://www.usenix.org/system/files/sec20-mahmud.pdf)
## The Ballot is Busted Before the Blockchain: A Security Analysis of Voatz, the First Internet Voting Application Used in U.S. Federal Elections.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#the-ballot-is-busted-before-the-blockchain-a-security-analysis-of-voatz-the-first-internet-voting-application-used-in-u-s-federal-elections)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#the-ballot-is-busted-before-the-blockchain-a-security-analysis-of-voatz-the-first-internet-voting-application-used-in-u-s-federal-elections)
### Authors
* Michael A. Specter, MIT
* James Koppel, MIT
* Daniel Weitzner, MIT
### Abstract
> In the 2018 midterm elections, West Virginia became the first state in the U.S. to allow select voters to cast their ballot on a mobile phone via a proprietary app called “Voatz.” Although there is no public formal description of Voatz’s security model, the company claims that election security and integrity are maintained through the use of a permissioned blockchain, biometrics, a mixnet, and hardware-backed key storage modules on the user’s device. In this work, we present the first public security analysis of Voatz, based on a reverse engineering of their Android application and the minimal available documentation of the system. We performed a cleanroom reimplementation of Voatz’s server and present an analysis of the election process as visible from the app itself.We find that Voatz has vulnerabilities that allow different kinds of adversaries to alter, stop, or expose a user’s vote, including a sidechannel attack in which a completely passive network adversary can potentially recover a user’s secret ballot. We additionally find that Voatz has a number of privacy issues stemming from their use of third party services for crucial app functionality. Our findings serve as a concrete illustration of the common wisdom against Internet voting, and of the importance of transparency to the legitimacy of elections. As a result of our work, West Virginia and one county in Washington has already aborted their use of Voatz in the 2020 primaries.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/specter](https://www.usenix.org/conference/usenixsecurity20/presentation/specter)
- **PDF:** [https://www.usenix.org/system/files/sec20-specter.pdf](https://www.usenix.org/system/files/sec20-specter.pdf)
## VoteAgain: A scalable coercion-resistant voting system.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#voteagain-a-scalable-coercion-resistant-voting-system)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#voteagain-a-scalable-coercion-resistant-voting-system)
### Authors
* Wouter Lueks, EPFL
* Iñigo Querejeta-Azurmendi, Universidad Carlos III Madrid/ITEFI, CSIC
* Carmela Troncoso, EPFL
### Abstract
> The strongest threat model for voting systems considers coercion resistance: protection against coercers that force voters to modify their votes, or to abstain. Existing remote voting systems either do not provide this property; require expensive operations for tallying; or burden users with the need to store cryptographic key material and with the responsibility to deceive their coercers. We propose VoteAgain, a scalable voting scheme that relies on the revoting paradigm to provide coercion resistance. VoteAgain uses a novel deterministic ballot padding mechanism to ensure that coercers cannot see whether a vote has been replaced. This mechanism ensures tallying takes quasilinear time, making VoteAgain the first revoting scheme that can handle elections with millions of voters. We prove that VoteAgain provides ballot privacy, coercion resistance, and verifiability; and we demonstrate its scalability using a prototype implementation of its core cryptographic primitives.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/lueks](https://www.usenix.org/conference/usenixsecurity20/presentation/lueks)
- **PDF:** [https://www.usenix.org/system/files/sec20-lueks.pdf](https://www.usenix.org/system/files/sec20-lueks.pdf)
## Boxer: Preventing fraud by scanning credit cards.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#boxer-preventing-fraud-by-scanning-credit-cards)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#boxer-preventing-fraud-by-scanning-credit-cards)
### Authors
* Zainul Abi Din, UC Davis
* Hari Venugopalan, UC Davis
* Jaime Park, Bouncer Technologies
* Andy Li, Segment
* Weisu Yin, UC Davis
* Haohui Mai, Hengmuxing Technologies
* Yong Jae Lee, UC Davis
* Steven Liu, Bouncer Technologies
* Samuel T. King, UC Davis and Bouncer Technologies
### Abstract
> Card-not-present credit card fraud costs businesses billions of dollars a year. In this paper, we present Boxer, a mobile SDK and server that enables apps to combat card-not-present fraud by scanning cards and verifying that they are genuine. Boxer analyzes the images from these scans, looking for tell-tale signs of attacks, and introduces a novel abstraction on top of modern security hardware for complementary protection.Currently, 323 apps have integrated Boxer, and tens of them have deployed it to production, including some large, popular, and international apps, resulting in Boxer scanning over 10 million real cards already. Our evaluation of Boxer from one of these deployments shows ten cases of real attacks that our novel hardware-based abstraction detects. Additionally, from the same deployment, without letting in any fraud, Boxer’s card scanning recovers 89% of the good users whom the app would have blocked. In another evaluation of Boxer, we run our image analysis models against images from real users and show an accuracy of 96% and 100% on the two models that we use.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/din](https://www.usenix.org/conference/usenixsecurity20/presentation/din)
- **PDF:** [https://www.usenix.org/system/files/sec20-din.pdf](https://www.usenix.org/system/files/sec20-din.pdf)
## Fawkes: Protecting Privacy against Unauthorized Deep Learning Models.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#fawkes-protecting-privacy-against-unauthorized-deep-learning-models)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#fawkes-protecting-privacy-against-unauthorized-deep-learning-models)
### Authors
* Shawn Shan, University of Chicago
* Emily Wenger, University of Chicago
* Jiayun Zhang, University of Chicago
* Huiying Li, University of Chicago
* Haitao Zheng, University of Chicago
* Ben Y. Zhao, University of Chicago
### Abstract
> Today's proliferation of powerful facial recognition systems poses a real threat to personal privacy. As Clearview.ai demonstrated, anyone can canvas the Internet for data and train highly accurate facial recognition models  of individuals without their knowledge. We need tools to protect ourselves from  potential misuses of unauthorized facial recognition  systems. Unfortunately, no practical or effective solutions exist.  In this paper, we propose Fawkes, a system that helps individuals  inoculate their images against unauthorized facial recognition models.  Fawkes achieves this by helping users add imperceptible pixel-level  changes (we call them "cloaks") to their own photos before  releasing them. When used to train  facial recognition models, these "cloaked" images produce  functional models that consistently cause normal images of the  user to be misidentified. We  experimentally demonstrate that Fawkes provides 95+% protection against user  recognition regardless of how trackers train their models. Even when clean,  uncloaked images are "leaked" to the tracker and used for training, Fawkes  can still maintain an 80+% protection success rate. We  achieve 100% success in  experiments against today's state-of-the-art facial recognition   services. Finally, we show that Fawkes is robust  against a variety of countermeasures that try to detect or disrupt image cloaks.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/shan](https://www.usenix.org/conference/usenixsecurity20/presentation/shan)
- **PDF:** [https://www.usenix.org/system/files/sec20-shan.pdf](https://www.usenix.org/system/files/sec20-shan.pdf)
## Stolen Memories: Leveraging Model Memorization for Calibrated White-Box Membership Inference.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#stolen-memories-leveraging-model-memorization-for-calibrated-white-box-membership-inference)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#stolen-memories-leveraging-model-memorization-for-calibrated-white-box-membership-inference)
### Authors
* Klas Leino, Carnegie Mellon University
* Matt Fredrikson, Carnegie Mellon University
### Abstract
> Membership inference (MI) attacks exploit the fact that machine learning algorithms sometimes leak information about their training data through the learned model. In this work, we study membership inference in the white-box setting in order to exploit the internals of a model, which have not been effectively utilized by previous work. Leveraging new insights about how overfitting occurs in deep neural networks, we show how a model's idiosyncratic use of features can provide evidence for membership to white-box attackers---even when the model's black-box behavior appears to generalize well---and demonstrate that this attack outperforms prior black-box methods. Taking the position that an effective attack should have the ability to provide confident positive inferences, we find that previous attacks do not often provide a meaningful basis for confidently inferring membership, whereas our attack can be effectively calibrated for high precision. Finally, we examine popular defenses against MI attacks, finding that (1) smaller generalization error is not sufficient to prevent attacks on real models, and (2) while small-ϵ-differential privacy reduces the attack's effectiveness, this often comes at a significant cost to the model's accuracy; and for larger ϵ that are sometimes used in practice (e.g., ϵ=16), the attack can achieve nearly the same accuracy as on the unprotected model.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/leino](https://www.usenix.org/conference/usenixsecurity20/presentation/leino)
- **PDF:** [https://www.usenix.org/system/files/sec20-leino.pdf](https://www.usenix.org/system/files/sec20-leino.pdf)
## Local Model Poisoning Attacks to Byzantine-Robust Federated Learning.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#local-model-poisoning-attacks-to-byzantine-robust-federated-learning)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#local-model-poisoning-attacks-to-byzantine-robust-federated-learning)
### Authors
* Minghong Fang, Iowa State University
* Xiaoyu Cao, Duke University
* Jinyuan Jia, Duke University
* Neil Gong, Duke University
### Abstract
> In federated learning, multiple client devices jointly learn a machine learning model: each client device maintains a local model for its local training dataset, while a master device  maintains a global model via aggregating the local models from the client devices. The machine learning community recently proposed several federated learning methods that were claimed to be robust against Byzantine failures (e.g., system failures, adversarial manipulations) of certain client devices. In this work, we perform the first systematic study on local model poisoning attacks to federated learning. We assume an attacker has compromised some client devices, and the attacker manipulates the local model parameters on the compromised client devices during the learning process such that the global model has a large testing error rate. We formulate our attacks as optimization problems and apply our attacks to four recent Byzantine-robust federated learning methods. Our empirical results on four real-world datasets show that our attacks can substantially increase the error rates of the models learnt by the federated learning methods that were claimed to be robust against Byzantine failures of some client devices. We generalize two defenses for data poisoning attacks to defend against our local model poisoning attacks. Our evaluation results show that one defense can effectively defend against our attacks in some cases, but the defenses are not effective enough in other cases, highlighting the need for new defenses against our local model poisoning attacks to federated learning.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/fang](https://www.usenix.org/conference/usenixsecurity20/presentation/fang)
- **PDF:** [https://www.usenix.org/system/files/sec20summer_fang_prepub.pdf](https://www.usenix.org/system/files/sec20summer_fang_prepub.pdf)
## Justinian's GAAvernor: Robust Distributed Learning with Gradient Aggregation Agent.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#justinians-gaavernor-robust-distributed-learning-with-gradient-aggregation-agent)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#justinians-gaavernor-robust-distributed-learning-with-gradient-aggregation-agent)
### Authors
* Xudong Pan, Fudan University
* Mi Zhang, Fudan University
* Duocai Wu, Fudan University
* Qifan Xiao, Fudan University
* Shouling Ji, Zhejiang University/Ant Financial
* Min Yang, Fudan University
### Abstract
> The hidden vulnerability of distributed learning systems against Byzantine attacks has been investigated by recent researches and, fortunately, some known defenses showed the ability to mitigate Byzantine attacks when a minority of workers are under adversarial control. Yet, our community still has very little knowledge on how to handle the situations when the proportion of malicious workers is 50% or more. Based on our preliminary study of this open challenge, we find there is more that can be done to restore Byzantine robustness in these more threatening situations, if we better utilize the auxiliary information inside the learning process.  In this paper, we propose Justinian's GAAvernor (GAA), a Gradient Aggregation Agent which learns to be robust against Byzantine attacks via reinforcement learning techniques. Basically, GAA relies on utilizing the historical interactions with the workers as experience and a quasi-validation set, a small dataset that consists of less than $10$ data samples from similar data domains, to generate reward signals for policy learning. As a complement to existing defenses, our proposed approach does not bound the expected number of malicious workers and is proved to be robust in more challenging scenarios. Through extensive evaluations on four benchmark systems and against various adversarial settings, our proposed defense shows desirable robustness as if the systems were under no attacks, even in some case when 90% Byzantine workers are controlled by the adversary. Meanwhile, our approach shows a similar level of time efficiency compared with the state-of-the-art defenses. Moreover, GAA provides highly interpretable traces of worker behavior as by-products for further mitigation usages like Byzantine worker detection and behavior pattern analysis.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/pan](https://www.usenix.org/conference/usenixsecurity20/presentation/pan)
- **PDF:** [https://www.usenix.org/system/files/sec20-pan.pdf](https://www.usenix.org/system/files/sec20-pan.pdf)
## Interpretable Deep Learning under Fire.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#interpretable-deep-learning-under-fire)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#interpretable-deep-learning-under-fire)
### Authors
* Xinyang Zhang, Pennsylvania State University
* Ningfei Wang, University of California Irvine
* Hua Shen, Pennsylvania State University
* Shouling Ji, Zhejiang University and Alibaba-ZJU Joint Institute of Frontier Technologies
* Xiapu Luo, Hong Kong Polytechnic University
* Ting Wang, Pennsylvania State University
### Abstract
> Providing explanations for deep neural network (DNN) models is crucial for their use in security-sensitive domains. A plethora of interpretation models have been proposed to help users understand the inner workings of DNNs: how does a DNN arrive at a specific decision for a given input? The improved interpretability is believed to offer a sense of security by involving human in the decision-making process. Yet, due to its data-driven nature, the interpretability itself is potentially susceptible to malicious manipulations, about which little is known thus far.Here we bridge this gap by conducting the first systematic study on the security of interpretable deep learning systems (IDLSes). We show that existing IDLSes are highly vulnerable to adversarial manipulations. Specifically, we present ADV2, a new class of attacks that generate adversarial inputs not only misleading target DNNs but also deceiving their coupled interpretation models. Through empirical evaluation against four major types of IDLSes on benchmark datasets and in security-critical applications (e.g., skin cancer diagnosis), we demonstrate that with ADV2 the adversary is able to arbitrarily designate an input's prediction and interpretation. Further, with both analytical and empirical evidence, we identify the prediction-interpretation gap as one root cause of this vulnerability -- a DNN and its interpretation model are often misaligned, resulting in the possibility of exploiting both models simultaneously. Finally, we explore potential countermeasures against ADV2, including leveraging its low transferability and incorporating it in an adversarial training framework. Our findings shed light on designing and operating IDLSes in a more secure and informative fashion, leading to several promising research directions.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/zhang-xinyang](https://www.usenix.org/conference/usenixsecurity20/presentation/zhang-xinyang)
- **PDF:** [https://www.usenix.org/system/files/sec20-zhang-xinyang.pdf](https://www.usenix.org/system/files/sec20-zhang-xinyang.pdf)
## Donky: Domain Keys - Efficient In-Process Isolation for RISC-V and x86.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#donky-domain-keys-efficient-in-process-isolation-for-risc-v-and-x86)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#donky-domain-keys-efficient-in-process-isolation-for-risc-v-and-x86)
### Authors
* David Schrammel, Graz University of Technology
* Samuel Weiser, Graz University of Technology
* Stefan Steinegger, Graz University of Technology
* Martin Schwarzl, Graz University of Technology
* Michael Schwarz, Graz University of Technology
* Stefan Mangard, Graz University of Technology
* Daniel Gruss, Graz University of Technology
### Abstract
> Efficient and secure in-process isolation is in great demand, as evidenced in the shift towards JavaScript and the recent revival of memory protection keys. Yet, state-of-the-art systems do not offer strong security or struggle with frequent domain crossings and oftentimes intrusive kernel modifications. We propose Donky, an efficient hardware-software co-design for strong in-process isolation based on dynamic memory protection domains. The two components of our design are a secure software framework and a non-intrusive hardware extension. We facilitate domain switches entirely in userspace, thus minimizing switching overhead as well as kernel complexity. We show the versatility of Donky in three realistic use cases, secure V8 sandboxing, software vaults, and untrusted third-party libraries. We provide an open-source implementation on a RISC-V Ariane CPU and an Intel-MPK-based emulation mode for x86. We evaluate the security and performance of our implementation for RISC-V synthesized on an FPGA. We also evaluate the performance on x86 and show why our new design is more secure than Intel MPK. Donky does not impede the runtime of in-domain computation. Cross-domain switches are 16–116x faster than regular process context switches. Fully protecting the mbedTLS cryptographic operations has a 4 % overhead.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/schrammel](https://www.usenix.org/conference/usenixsecurity20/presentation/schrammel)
- **PDF:** [https://www.usenix.org/system/files/sec20-schrammel.pdf](https://www.usenix.org/system/files/sec20-schrammel.pdf)
## (Mostly) Exitless VM Protection from Untrusted Hypervisor through Disaggregated Nested Virtualization.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#mostly-exitless-vm-protection-from-untrusted-hypervisor-through-disaggregated-nested-virtualization)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#mostly-exitless-vm-protection-from-untrusted-hypervisor-through-disaggregated-nested-virtualization)
### Authors
* Zeyu Mi, Shanghai Key Laboratory for Scalable Computing Systems, School of Software, Shanghai Jiao Tong University
* Dingji Li, Shanghai Key Laboratory for Scalable Computing Systems, School of Software, Shanghai Jiao Tong University
* Haibo Chen, Shanghai Key Laboratory for Scalable Computing Systems, School of Software, Shanghai Jiao Tong University
* Binyu Zang, Shanghai Key Laboratory for Scalable Computing Systems, School of Software, Shanghai Jiao Tong University
* Haibing Guan, Shanghai Key Laboratory for Scalable Computing Systems, School of Software, Shanghai Jiao Tong University
### Abstract
> Today’s cloud tenants are facing severe security threats such as compromised hypervisors, which forces a strong adversary model where the hypervisor should be excluded out of the TCB. Previous approaches to shielding guest VMs either suffer from insufficient protection or result in suboptimal performance due to frequent VM exits (especially for I/O operations). This paper presents CloudVisor-D, an efficient nested hypervisor design that embraces both strong protection and high performance. The core idea of CloudVisor-D is to disaggregate the nested hypervisor by separating major protection logics into a protected Guardian-VM alongside each guest VM. The Guardian-VM is securely isolated and protected by the nested hypervisor and provides secure services for most privileged operations like hypercalls, EPT violations and I/O operations from guest VMs. By leveraging recent hardware features, most privileged operations from a guest VM require no VM exits to the nested hypervisor, which are the major sources of performance slowdown in prior designs. We have implemented CloudVisor-D on a commercially available machine with these recent hardware features. Experimental evaluation shows that CloudVisor-D incurs negligible performance overhead even for I/O intensive benchmarks and in some cases outperforms a vanilla hypervisor due to the reduced number of VM exits.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/mi](https://www.usenix.org/conference/usenixsecurity20/presentation/mi)
- **PDF:** [https://www.usenix.org/system/files/sec20-mi.pdf](https://www.usenix.org/system/files/sec20-mi.pdf)
## DECAF: Automatic, Adaptive De-bloating and Hardening of COTS Firmware.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#decaf-automatic-adaptive-de-bloating-and-hardening-of-cots-firmware)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#decaf-automatic-adaptive-de-bloating-and-hardening-of-cots-firmware)
### Authors
* Jake Christensen, Private Machines
* Ionut Mugurel Anghel, Univ. Politehnica Bucharest
* Rob Taglang, Private Machines
* Mihai Chiroiu, Univ. Politehnica Bucharest
* Radu Sion, Private Machines
### Abstract
> Once compromised, server firmware can surreptitiously and permanently take over a machine and any stack running thereon, with no hope for recovery, short of hardware-level intervention. To make things worse, modern firmware contains millions of lines of unnecessary code and hundreds of unnecessary modules as a result of a long firmware supply chain designed to optimize time-to-market and cost, but not security. As a result, off-the-shelf motherboards contain large, unnecessarily complex, closed-source vulnerability surfaces that can completely and irreversibly compromise systems.  In this work, we address this problem by dramatically and automatically reducing the vulnerability surface. DECAF is an extensible platform for automatically pruning a wide class of commercial UEFI firmware. DECAF intelligently runs dynamic iterative surgery on UEFI firmware to remove a maximal amount of code with no regressive effects on the functionality and performance of higher layers in the stack (OS, applications). DECAF has successfully pruned over 70% of unnecessary, redundant, reachable firmware in leading server-grade motherboards with no effect on the upper layers, and increased resulting system performance and boot times.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/christensen](https://www.usenix.org/conference/usenixsecurity20/presentation/christensen)
- **PDF:** [https://www.usenix.org/system/files/sec20-christensen.pdf](https://www.usenix.org/system/files/sec20-christensen.pdf)
## McTiny: Fast High-Confidence Post-Quantum Key Erasure for Tiny Network Servers.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#mctiny-fast-high-confidence-post-quantum-key-erasure-for-tiny-network-servers)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#mctiny-fast-high-confidence-post-quantum-key-erasure-for-tiny-network-servers)
### Authors
* Daniel J. Bernstein, University of Illinois at Chicago, Ruhr University Bochum
* Tanja Lange, Eindhoven University of Technology
### Abstract
> Recent results have shown that some post-quantum cryptographic systems have encryption and decryption performance comparable to fast elliptic-curve cryptography (ECC) or even better. However, this performance metric is considering only CPU time and ignoring bandwidth and storage. High-confidence post-quantum encryption systems have much larger keys than ECC. For example, the code-based cryptosystem recommended by the PQCRYPTO project uses public keys of 1MB. Fast key erasure (to provide "forward secrecy") requires new public keys to be constantly transmitted. Either the server needs to constantly generate, store, and transmit large keys, or it needs to receive, store, and use large keys from the clients. This is not necessarily a problem for overall bandwidth, but it is a problem for storage and computation time on tiny network servers. All straightforward approaches allow easy denial-of-service attacks. This paper describes a protocol, suitable for today's networks and tiny servers, in which clients transmit their code-based one-time public keys to servers. Servers never store full client public keys but work on parts provided by the clients, without having to maintain any per-client state. Intermediate results are stored on the client side in the form of encrypted cookies and are eventually combined by the server to obtain the ciphertext. Requirements on the server side are very small: storage of one long-term private key, which is much smaller than a public key, and a few small symmetric cookie keys, which are updated regularly and erased after use. The protocol is highly parallel, requiring only a few round trips, and involves total bandwidth not much larger than a single public key. The total number of packets sent by each side is 971, each fitting into one IPv6 packet of less than 1280 bytes. The protocol makes use of the structure of encryption in code-based cryptography and benefits from small ciphertexts in code-based cryptography.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/bernstein](https://www.usenix.org/conference/usenixsecurity20/presentation/bernstein)
- **PDF:** [https://www.usenix.org/system/files/sec20summer_bernstein_prepub.pdf](https://www.usenix.org/system/files/sec20summer_bernstein_prepub.pdf)
## Temporal System Call Specialization for Attack Surface Reduction.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#temporal-system-call-specialization-for-attack-surface-reduction)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#temporal-system-call-specialization-for-attack-surface-reduction)
### Authors
* Seyedhamed Ghavamnia, Stony Brook University
* Tapti Palit, Stony Brook University
* Shachee Mishra, Stony Brook University
* Michalis Polychronakis, Stony Brook University
### Abstract
> Attack surface reduction through the removal of unnecessary application features and code is a promising technique for improving security without incurring any additional overhead. Recent software debloating techniques consider an application's entire lifetime when extracting its code requirements, and reduce the attack surface accordingly. In this paper, we present temporal specialization, a novel approach for limiting the set of system calls available to a process depending on its phase of execution. Our approach is tailored to server applications, which exhibit distinct initialization and serving phases with different system call requirements. We present novel static analysis techniques for improving the precision of extracting the application's call graph for each execution phase, which is then used to pinpoint the system calls used in each phase. We show that requirements change throughout the lifetime of servers, and many dangerous system calls (such as execve) can be disabled after the completion of the initialization phase. We have implemented a prototype of temporal specialization on top of the LLVM compiler, and evaluated its effectiveness with six popular server applications. Our results show that it disables 51% more security-critical system calls compared to existing library specialization approaches, while offering the additional benefit of neutralizing 13 more Linux kernel vulnerabilities that could lead to privilege escalation.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/ghavamnia](https://www.usenix.org/conference/usenixsecurity20/presentation/ghavamnia)
- **PDF:** [https://www.usenix.org/system/files/sec20-ghavamnia.pdf](https://www.usenix.org/system/files/sec20-ghavamnia.pdf)
## Big Numbers - Big Troubles: Systematically Analyzing Nonce Leakage in (EC)DSA Implementations.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#big-numbers-big-troubles-systematically-analyzing-nonce-leakage-in-ec-dsa-implementations)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#big-numbers-big-troubles-systematically-analyzing-nonce-leakage-in-ec-dsa-implementations)
### Authors
* Samuel Weiser, Graz University of Technology
* David Schrammel, Graz University of Technology
* Lukas Bodner, Graz University of Technology
* Raphael Spreitzer, SGS Digital Trust Services
### Abstract
> Side-channel attacks exploiting (EC)DSA nonce leakage easily lead to full key recovery. Although (EC)DSA implementations have already been hardened against side-channel leakage using the constant-time paradigm, the long-standing cat-and-mouse-game of attacks and patches continues. In particular, current code review is prone to miss less obvious side channels hidden deeply in the call stack. To solve this problem, a systematic study of nonce leakage is necessary. We present a systematic analysis of nonce leakage in cryptographic implementations. In particular, we expand DATA, an open-source side-channel analysis framework, to detect nonce leakage. Our analysis identified multiple unknown nonce leakage vulnerabilities across all essential computation steps involving nonces. Among others, we uncover inherent problems in Bignumber implementations that break claimed constant-time guarantees of (EC)DSA implementations if secrets are close to a word boundary. We found that lazy resizing of Bignumbers in OpenSSL and LibreSSL yields a highly accurate and easily exploitable side channel, which has been acknowledged with two CVEs. Surprisingly, we also found a tiny but expressive leakage in the constant-time scalar multiplication of OpenSSL and BoringSSL. Moreover, in the process of reporting and patching, we identified newly introduced leakage with the support of our tool, thus preventing another attack-patch cycle. We open-source our tool, together with an intuitive graphical user interface we developed.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/weiser](https://www.usenix.org/conference/usenixsecurity20/presentation/weiser)
- **PDF:** [https://www.usenix.org/system/files/sec20-weiser.pdf](https://www.usenix.org/system/files/sec20-weiser.pdf)
## Estonian Electronic Identity Card: Security Flaws in Key Management.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#estonian-electronic-identity-card-security-flaws-in-key-management)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#estonian-electronic-identity-card-security-flaws-in-key-management)
### Authors
* Arnis Parsovs, Software Technology and Applications Competence Center and University of Tartu
### Abstract
> The Estonian electronic identity card (ID card) is considered to be one of the most successful deployments of smart card-based national ID card systems in the world. The public-key cryptography and private keys stored on the card enable Estonian ID card holders to access e-services, give legally binding digital signatures and even cast an i-vote in national elections.In this paper, we describe several security flaws found in the ID card manufacturing process. The flaws have been discovered by analyzing public-key certificates that have been collected from the public ID card certificate repository. In particular, we find that in some cases, contrary to the security requirements, the ID card manufacturer has generated private keys outside the chip. In several cases, copies of the same private key have been imported in the ID cards of different cardholders, allowing them to impersonate each other. In addition, as a result of a separate flaw in the manufacturing process, corrupted RSA public key moduli have been included in the certificates, which in one case led to the full recovery of the corresponding private key. This paper describes the discovery process of these findings and the incident response taken by the authorities.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/parsovs](https://www.usenix.org/conference/usenixsecurity20/presentation/parsovs)
- **PDF:** [https://www.usenix.org/system/files/sec20-parsovs.pdf](https://www.usenix.org/system/files/sec20-parsovs.pdf)
## The Unpatchable Silicon: A Full Break of the Bitstream Encryption of Xilinx 7-Series FPGAs.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#the-unpatchable-silicon-a-full-break-of-the-bitstream-encryption-of-xilinx-7-series-fpgas)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#the-unpatchable-silicon-a-full-break-of-the-bitstream-encryption-of-xilinx-7-series-fpgas)
### Authors
* Maik Ender, Horst Goertz Institute for IT Security, Ruhr University Bochum, Germany
* Amir Moradi, Horst Goertz Institute for IT Security, Ruhr University Bochum, Germany
* Christof Paar, Max Planck Institute for Cyber Security and Privacy and Horst Goertz Institute for IT Security, Ruhr University Bochum, Germany
### Abstract
> The security of FPGAs is a crucial topic, as any vulnerability within the hardware can have severe consequences, if they are used in a secure design. Since FPGA designs are encoded in a bitstream, securing the bitstream is of the utmost importance. Adversaries have many motivations to recover and manipulate the bitstream, including design cloning, IP theft, manipulation of the design, or design subversions e.g., through hardware Trojans. Given that FPGAs are often part of cyber-physical systems e.g., in aviation, medical, or industrial devices, this can even lead to physical harm. Consequently, vendors have introduced bitstream encryption, offering authenticity and confidentiality. Even though attacks against bitstream encryption have been proposed in the past, e.g., side-channel analysis and probing, these attacks require sophisticated equipment and considerable technical expertise.In this paper, we introduce novel low-cost attacks against the Xilinx 7-Series (and Virtex-6) bitstream encryption, resulting in the total loss of authenticity and confidentiality. We exploit a design flaw which piecewise leaks the decrypted bitstream. In the attack, the FPGA is used as a decryption oracle, while only access to a configuration interface is needed. The attack does not require any sophisticated tools and, depending on the target system, can potentially be launched remotely. In addition to the attacks, we discuss several countermeasures.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/ender](https://www.usenix.org/conference/usenixsecurity20/presentation/ender)
- **PDF:** [https://www.usenix.org/system/files/sec20-ender.pdf](https://www.usenix.org/system/files/sec20-ender.pdf)
## Automating the Development of Chosen Ciphertext Attacks.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#automating-the-development-of-chosen-ciphertext-attacks)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#automating-the-development-of-chosen-ciphertext-attacks)
### Authors
* Gabrielle Beck, Johns Hopkins University
* Maximilian Zinkus, Johns Hopkins University
* Matthew Green, Johns Hopkins University
### Abstract
> In this work we investigate the problem of automating the development of adaptive chosen ciphertext attacks on systems that contain vulnerable format oracles. Unlike previous attempts,which simply automate the execution of known attacks, we consider a more challenging problem: to programmatically derive a novel attack strategy, given only a machine-readable description of the plaintext verification function and the malleability characteristics of the encryption scheme.We present a new set of algorithms that use SAT and SMT solvers to reason deeply over the design of the system, producing an automated attack strategy that can entirely decrypt protected messages. Developing our algorithms required us to adapt techniques from a diverse range of research fields, as well as to explore and develop new ones. We implement our algorithms using existing theory solvers. The result is a practical tool called Delphinium that succeeds against real-world and contrived format oracles. To our knowledge, this is the first work to automatically derive such complex chosen ciphertext attacks.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/beck](https://www.usenix.org/conference/usenixsecurity20/presentation/beck)
- **PDF:** [https://www.usenix.org/system/files/sec20-beck_0.pdf](https://www.usenix.org/system/files/sec20-beck_0.pdf)
## SHA-1 is a Shambles: First Chosen-Prefix Collision on SHA-1 and Application to the PGP Web of Trust.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#sha-1-is-a-shambles-first-chosen-prefix-collision-on-sha-1-and-application-to-the-pgp-web-of-trust)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#sha-1-is-a-shambles-first-chosen-prefix-collision-on-sha-1-and-application-to-the-pgp-web-of-trust)
### Authors
* Gaëtan Leurent, Inria, France
* Thomas Peyrin, Nanyang Technological University, Singapore
### Abstract
> The SHA-1 hash function was designed in 1995 and has been widely used during two decades. A theoretical collision attack was first proposed in 2004 [WYY05], but due to its high complexity it was only implemented in practice in 2017, using a large GPU cluster [SBK+17]. More recently, an almost practical chosen-prefix collision attack against SHA-1 has been proposed [LP19]. This more powerful attack allows to build colliding messages with two arbitrary prefixes, which is much more threatening for real protocols. In this paper, we report the first practical implementation of this attack, and its impact on real-world security with a PGP/GnuPG impersonation attack. We managed to significantly reduce the complexity of collision attacks against SHA-1: on an Nvidia GTX 970, identical-prefix collisions can now be computed with a complexity (expressed in terms of SHA-1 equivalents on this GPU) of 2^61.2 rather than 2^64.7, and chosen-prefix collisions with a complexity of 2^63.4 rather than 2^67.1. When renting cheap GPUs, this translates to a cost of US$ 11k for a collision, and US$ 45k for a chosen-prefix collision, within the means of academic researchers. Our actual attack required two months of computations using 900 Nvidia GTX 1060 GPUs. Therefore, the same attacks that have been practical on MD5 since 2009 are now practical on SHA-1. In particular, chosen-prefix collisions can break signature schemes and handshake security in secure channel protocols (TLS, SSH), if generated extremely quickly. We strongly advise to remove SHA-1 from those type of applications as soon as possible. We exemplify our cryptanalysis by creating a pair of PGP/GnuPG keys with different identities, but colliding SHA-1 certificates. A SHA-1 certification of the first key can therefore be transferred to the second key, leading to an impersonation attack. This proves that SHA-1 signatures now offer virtually no security in practice. The legacy branch of GnuPG still uses SHA-1 by default for identity certifications, but after notifying the authors, the modern branch now rejects SHA-1 signatures (the issue is tracked as CVE-2019-14855).

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/leurent](https://www.usenix.org/conference/usenixsecurity20/presentation/leurent)
- **PDF:** [https://www.usenix.org/system/files/sec20-leurent.pdf](https://www.usenix.org/system/files/sec20-leurent.pdf)
## A Spectral Analysis of Noise: A Comprehensive, Automated, Formal Analysis of Diffie-Hellman Protocols.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#a-spectral-analysis-of-noise-a-comprehensive-automated-formal-analysis-of-diffie-hellman-protocols)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#a-spectral-analysis-of-noise-a-comprehensive-automated-formal-analysis-of-diffie-hellman-protocols)
### Authors
* Guillaume Girol, CEA, List, Université Paris-Saclay, France
* Lucca Hirschi, Inria & LORIA, France
* Ralf Sasse, Department of Computer Science, ETH Zurich
* Dennis Jackson, University of Oxford, United Kingdom
* Cas Cremers, CISPA Helmholtz Center for Information Security
* David Basin, Department of Computer Science, ETH Zurich
### Abstract
> The Noise specification describes how to systematically construct a large family of Diffie-Hellman based key exchange protocols, including the secure transports used by WhatsApp, Lightning, and WireGuard. As the specification only makes informal security claims, earlier work has explored which formal security properties may be enjoyed by protocols in the Noise framework, yet many important questions remain open.In this work we provide the most comprehensive, systematic analysis of the Noise framework to date. We start from first principles and, using an automated analysis tool, compute the strongest threat model under which a protocol is secure, thus enabling formal comparison between protocols. Our results allow us to objectively and automatically associate each informal security level presented in the Noise specification with a formal security claim.We also provide a fine-grained separation of Noise protocols that were previously described as offering similar security properties, revealing a subclass for which alternative Noise protocols exist that offer strictly better security guarantees. Our analysis also uncovers missing assumptions in the Noise specification and some surprising consequences, e.g., in some situations higher security levels yield strictly worse security.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/girol](https://www.usenix.org/conference/usenixsecurity20/presentation/girol)
- **PDF:** [https://www.usenix.org/system/files/sec20-girol_0.pdf](https://www.usenix.org/system/files/sec20-girol_0.pdf)
## An Observational Investigation of Reverse Engineers' Processes.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#an-observational-investigation-of-reverse-engineers-processes)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#an-observational-investigation-of-reverse-engineers-processes)
### Authors
* Daniel Votipka, University of Maryland
* Seth Rabin, University of Maryland
* Kristopher Micinski, Syracuse University
* Jeffrey S. Foster, Tufts University
* Michelle L. Mazurek, University of Maryland
### Abstract
> Reverse engineering is a complex process essential to software-security tasks such as vulnerability discovery and malware analysis. Significant research and engineering effort has gone into developing tools to support reverse engineers. However, little work has been done to understand the way reverse engineers think when analyzing programs, leaving tool developers to make interface design decisions based only on intuition.This paper takes a first step toward a better understanding of reverse engineers’ processes, with the goal of producing insights for improving interaction design for reverse engineering tools. We present the results of a semi-structured, observational interview study of reverse engineers (N=16). Each observation investigated the questions reverse engineers ask as they probe a program, how they answer these questions, and the decisions they make throughout the reverse engineering process. From the interview responses, we distill a model of the reverse engineering process, divided into three phases: overview, sub-component scanning, and focused experimentation. Each analysis phase’s results feed the next as reverse engineers’ mental representations become more concrete. We find that reverse engineers typically use static methods in the first two phases, but dynamic methods in the final phase, with experience playing large, but varying, roles in each phase. Based on these results, we provide five interaction design guidelines for reverse engineering tools.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/votipka-observational](https://www.usenix.org/conference/usenixsecurity20/presentation/votipka-observational)
- **PDF:** [https://www.usenix.org/system/files/sec20-votipka-observational.pdf](https://www.usenix.org/system/files/sec20-votipka-observational.pdf)
## The Tools and Tactics Used in Intimate Partner Surveillance: An Analysis of Online Infidelity Forums.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#the-tools-and-tactics-used-in-intimate-partner-surveillance-an-analysis-of-online-infidelity-forums)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#the-tools-and-tactics-used-in-intimate-partner-surveillance-an-analysis-of-online-infidelity-forums)
### Authors
* Emily Tseng, Cornell University
* Rosanna Bellini, Open Lab, Newcastle University
* Nora McDonald, University of Maryland, Baltimore County
* Matan Danos, Weizmann Institute of Science
* Rachel Greenstadt, New York University
* Damon McCoy, New York University
* Nicola Dell, Cornell Tech
* Thomas Ristenpart, Cornell Tech
### Abstract
> Abusers increasingly use spyware apps, account compromise, and social engineering to surveil their intimate partners, causing substantial harms that can culminate in violence. This form of privacy violation, termed intimate partner surveillance (IPS), is a profoundly challenging problem to address due to the physical access and trust present in the relationship between the target and attacker. While previous research has examined IPS from the perspectives of survivors, we present the first measurement study of online forums in which (potential) attackers discuss IPS strategies and techniques. In domains such as cybercrime, child abuse, and human trafficking, studying the online behaviors of perpetrators has led to better threat intelligence and techniques to combat attacks. We aim to provide similar insights in the context of IPS. We identified five online forums containing discussion of monitoring cellphones and other means of surveilling an intimate partner, including three within the context of investigating relationship infidelity. We perform a mixed-methods analysis of these forums, surfacing the tools and tactics that attackers use to perform surveillance. Via qualitative analysis of forum content, we present a taxonomy of IPS strategies used and recommended by attackers, and synthesize lessons for technologists seeking to curb the spread of IPS.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/tseng](https://www.usenix.org/conference/usenixsecurity20/presentation/tseng)
- **PDF:** [https://www.usenix.org/system/files/sec20-tseng.pdf](https://www.usenix.org/system/files/sec20-tseng.pdf)
## DatashareNetwork: A Decentralized Privacy-Preserving Search Engine for Investigative Journalists.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#datasharenetwork-a-decentralized-privacy-preserving-search-engine-for-investigative-journalists)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#datasharenetwork-a-decentralized-privacy-preserving-search-engine-for-investigative-journalists)
### Authors
* Kasra Edalatnejad, EPFL
* Wouter Lueks, EPFL
* Julien Pierre Martin; Soline Ledésert, ICIJ
* Anne L'Hôte, ICIJ
* Bruno Thomas, ICIJ
* Laurent Girod, EPFL
* Carmela Troncoso, EPFL
### Abstract
> Investigative journalists collect large numbers of digital documents during their investigations. These documents can greatly benefit other journalists' work. However, many of these documents contain sensitive information. Hence, possessing such documents can endanger reporters, their stories, and their sources. Consequently, many documents are used only for single, local, investigations. We present DatashareNetwork, a decentralized and privacy-preserving search system that enables journalists worldwide to find documents via a dedicated network of peers. DatashareNetwork combines well-known anonymous authentication mechanisms and anonymous communication primitives, a novel asynchronous messaging system, and a novel multi-set private set intersection protocol (MS-PSI) into a decentralized peer-to-peer private document search engine. Using a prototype implementation, we show that DatashareNetwork is secure and scales to thousands of users and millions of documents.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/edalatnejad](https://www.usenix.org/conference/usenixsecurity20/presentation/edalatnejad)
- **PDF:** [https://www.usenix.org/system/files/sec20-edalatnejad_0.pdf](https://www.usenix.org/system/files/sec20-edalatnejad_0.pdf)
## "I am uncomfortable sharing what I can't see": Privacy Concerns of the Visually Impaired with Camera Based Assistive Applications.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#i-am-uncomfortable-sharing-what-i-cant-see-privacy-concerns-of-the-visually-impaired-with-camera-based-assistive-applications)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#i-am-uncomfortable-sharing-what-i-cant-see-privacy-concerns-of-the-visually-impaired-with-camera-based-assistive-applications)
### Authors
* Taslima Akter, Indiana University Bloomington
* Bryan Dosono, Syracuse University
* Tousif Ahmed, Indiana University Bloomington
* Apu Kapadia, Indiana University Bloomington
* Bryan Semaan, Syracuse University
### Abstract
> The emergence of camera-based assistive technologies has empowered people with visual impairments (VIP) to obtain independence in their daily lives. Popular services feature volunteers who answer questions about photos or videos (e.g., to identify a medical prescription). However, people with VIPs can (inadvertently) reveal sensitive information to these volunteers. To better understand the privacy concerns regarding the disclosure of background objects to different types of human assistants (friends, family, and others), we conducted an online survey with 155 visually impaired participants. In general, our participants had varying concerns depending on the type of assistants and the kind of information. We found that our participants were more concerned about the privacy of bystanders than their own when capturing people in images. We also found that participants were concerned about self-presentation and were more comfortable sharing embarrassing information with family than with their friends. Our findings suggest directions for future work in the development of human-assisted question-answering systems. Specifically, we discuss how humanizing these systems can give people a greater sense of personal security.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/akter](https://www.usenix.org/conference/usenixsecurity20/presentation/akter)
- **PDF:** [https://www.usenix.org/system/files/sec20-akter.pdf](https://www.usenix.org/system/files/sec20-akter.pdf)
## 'I have too much respect for my elders': Understanding South African Mobile Users' Perceptions of Privacy and Current Behaviors on Facebook and WhatsApp.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#i-have-too-much-respect-for-my-elders-understanding-south-african-mobile-users-perceptions-of-privacy-and-current-behaviors-on-facebook-and-whatsapp)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#i-have-too-much-respect-for-my-elders-understanding-south-african-mobile-users-perceptions-of-privacy-and-current-behaviors-on-facebook-and-whatsapp)
### Authors
* Jake Reichel, Princeton University
* Fleming Peck, Princeton University
* Mikako Inaba, Princeton University
* Bisrat Moges, Princeton University
* Brahmnoor Singh Chawla, Princeton University
* Marshini Chetty, University of Chicago
### Abstract
> Facebook usage is growing in developing countries, but we know little about how to tailor social media privacy settings to users in resourced-constrained settings. To that end, we present findings from interviews of 52 current mobile social media users in South Africa. We found users' primary privacy-related concern was who else could see their posts and messages, not what data the platforms or advertisers collect about them. Second, users displayed general knowledge gaps on existing social media privacy settings and relied heavily on blocking and passwords for privacy protection. Third, users' privacy and security-related behaviors were heavily influenced by living in high-crime areas. Based on these findings, we make recommendations for future work to better serve user privacy and security needs in resourced-constrained settings.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/reichel](https://www.usenix.org/conference/usenixsecurity20/presentation/reichel)
- **PDF:** [https://www.usenix.org/system/files/sec20-reichel.pdf](https://www.usenix.org/system/files/sec20-reichel.pdf)
## RELOAD+REFRESH: Abusing Cache Replacement Policies to Perform Stealthy Cache Attacks.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#reload-refresh-abusing-cache-replacement-policies-to-perform-stealthy-cache-attacks)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#reload-refresh-abusing-cache-replacement-policies-to-perform-stealthy-cache-attacks)
### Authors
* Samira Briongos, Integrated Systems Laboratory, Universidad Politécnica de Madrid
* Pedro Malagón, Integrated Systems Laboratory, Universidad Politécnica de Madrid
* José M. Moya, Integrated Systems Laboratory, Universidad Politécnica de Madrid
* Thomas Eisenbarth, University of Lübeck and Worcester Polytechnic Institute
### Abstract
> Caches have become the prime method for unintended information extraction across logical isolation boundaries. They are widely available on all major CPU platforms and, as a side channel, caches provide great resolution, making them the most convenient channel for Spectre and Meltdown. As a consequence, several methods to stop cache attacks by detecting them have been proposed.  Detection is strongly aided by the fact that observing cache activity of co-resident processes is not possible without altering the cache state and thereby forcing evictions on the observed processes. In this work we show that this widely held assumption is incorrect. Through clever usage of the cache replacement policy, it is possible to track cache accesses of a victim's process without forcing evictions on the victim's data. Hence, online detection mechanisms that rely on these evictions can be circumvented as they would not detect the introduced RELOAD+REFRESH attack. The attack requires a profound understanding of the cache replacement policy. We present a methodology to recover the replacement policy and apply it to the last five generations of Intel processors. We further show empirically that the performance of RELOAD+REFRESH on cryptographic implementations is comparable to that of other widely used cache attacks, while detection methods that rely on L3 cache events are successfully thwarted.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/briongos](https://www.usenix.org/conference/usenixsecurity20/presentation/briongos)
- **PDF:** [https://www.usenix.org/system/files/sec20-briongos_0.pdf](https://www.usenix.org/system/files/sec20-briongos_0.pdf)
## Timeless Timing Attacks: Exploiting Concurrency to Leak Secrets over Remote Connections.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#timeless-timing-attacks-exploiting-concurrency-to-leak-secrets-over-remote-connections)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#timeless-timing-attacks-exploiting-concurrency-to-leak-secrets-over-remote-connections)
### Authors
* Tom Van Goethem, imec-DistriNet, KU Leuven
* Christina Pöpper, New York University Abu Dhabi
* Wouter Joosen, imec-DistriNet, KU Leuven
* Mathy Vanhoef, New York University Abu Dhabi
### Abstract
> To perform successful remote timing attacks, an adversary typically collects a series of network timing measurements and subsequently performs statistical analysis to reveal a difference in execution time. The number of measurements that must be obtained largely depends on the amount of jitter that the requests and responses are subjected to. In remote timing attacks, a significant source of jitter is the network path between the adversary and the targeted server, making it practically infeasible to successfully exploit timing side-channels that exhibit only a small difference in execution time.In this paper, we introduce a conceptually novel type of timing attack that leverages the coalescing of packets by network protocols and concurrent handling of requests by applications. These concurrency-based timing attacks infer a relative timing difference by analyzing the order in which responses are returned, and thus do not rely on any absolute timing information. We show how these attacks result in a 100-fold improvement over typical timing attacks performed over the Internet, and can accurately detect timing differences as small as 100ns, similar to attacks launched on a local system. We describe how these timing attacks can be successfully deployed against HTTP/2 webservers, Tor onion services, and EAP-pwd, a popular Wi-Fi authentication method.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/van-goethem](https://www.usenix.org/conference/usenixsecurity20/presentation/van-goethem)
- **PDF:** [https://www.usenix.org/system/files/sec20-van_goethem.pdf](https://www.usenix.org/system/files/sec20-van_goethem.pdf)
## Cache Telepathy: Leveraging Shared Resource Attacks to Learn DNN Architectures.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#cache-telepathy-leveraging-shared-resource-attacks-to-learn-dnn-architectures)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#cache-telepathy-leveraging-shared-resource-attacks-to-learn-dnn-architectures)
### Authors
* Mengjia Yan, University of Illinois at Urbana-Champaign
* Christopher W. Fletcher, University of Illinois at Urbana-Champaign
* Josep Torrellas, University of Illinois at Urbana-Champaign
### Abstract
> Deep Neural Networks (DNNs) are fast becoming ubiquitous for their ability to attain good accuracy in various machine learning tasks. A DNN’s architecture (i.e., its hyperparameters) broadly determines the DNN’s accuracy and performance, and is often confidential. Attacking a DNN in the cloud to obtain its architecture can potentially provide major commercial value. Further, attaining a DNN’s architecture facilitates other existing DNN attacks. This paper presents Cache Telepathy: an efficient mechanism to help obtain a DNN’s architecture using the cache side channel. The attack is based on the insight that DNN inference relies heavily on tiled GEMM (Generalized Matrix Multiply), and that DNN architecture parameters determine the number of GEMM calls and the dimensions of the matrices used in the GEMM functions. Such information can be leaked through the cache side channel.  This paper uses Prime+Probe and Flush+Reload to attack the VGG and ResNet DNNs running OpenBLAS and Intel MKL libraries. Our attack is effective in helping obtain the DNN architectures by very substantially reducing the search space of target DNN architectures. For example, when attacking the OpenBLAS library, for the different layers in VGG-16, it reduces the search space from more than 5.4×1012 architectures to just 16; for the different modules in ResNet-50, it reduces the search space from more than 6×1046 architectures to only 512.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/yan](https://www.usenix.org/conference/usenixsecurity20/presentation/yan)
- **PDF:** [https://www.usenix.org/system/files/sec20-yan.pdf](https://www.usenix.org/system/files/sec20-yan.pdf)
## Certified Side Channels.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#certified-side-channels)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#certified-side-channels)
### Authors
* Cesar Pereida García, Tampere University
* Sohaib ul Hassan, Tampere University
* Nicola Tuveri, Tampere University
* Iaroslav Gridin, Tampere University
* Alej, Tampere University and Universidad Tecnológica de la Habana
* ro Cabrera Aldaya, Tampere University and Universidad Tecnológica de la Habana
* Billy Bob Brumley, Tampere University
### Abstract
> We demonstrate that the format in which private keys are persisted impacts Side Channel Analysis (SCA) security. Surveying several widely deployed software libraries, we investigate the formats they support, how they parse these keys, and what runtime decisions they make. We uncover a combination of weaknesses and vulnerabilities, in extreme cases inducing completely disjoint multi-precision arithmetic stacks deep within the cryptosystem level for keys that otherwise seem logically equivalent. Exploiting these vulnerabilities, we design and implement key recovery attacks utilizing signals ranging from electromagnetic (EM) emanations, to granular microarchitecture cache timings, to coarse traditional wall clock timings.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/garcia](https://www.usenix.org/conference/usenixsecurity20/presentation/garcia)
- **PDF:** [https://www.usenix.org/system/files/sec20-garcia.pdf](https://www.usenix.org/system/files/sec20-garcia.pdf)
## NetWarden: Mitigating Network Covert Channels while Preserving Performance.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#netwarden-mitigating-network-covert-channels-while-preserving-performance)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#netwarden-mitigating-network-covert-channels-while-preserving-performance)
### Authors
* Jiarong Xing, Rice University
* Qiao Kang, Rice University
* Ang Chen, Rice University
### Abstract
> Network covert channels are an advanced threat to the security of distributed systems. Existing defenses all come at the cost of performance, so they present significant barriers to a practical deployment in high-speed networks. We propose NetWarden, a novel defense whose key design goal is to preserve TCP performance while mitigating covert channels. The use of programmable data planes makes it possible for NetWarden to adapt defenses that were only demonstrated before as proof of concept, and apply them at linespeed. Moreover, NetWarden uses a set of performance boosting techniques to temporarily increase the performance of connections that have been affected by covert channel mitigation, with the ultimate goal of neutralizing the overall performance impact. NetWarden also uses a fastpath/slowpath architecture to combine the generality of software and the efficiency of hardware for effective defense. Our evaluation shows that NetWarden works smoothly with complex applications and workloads, and that it can mitigate covert timing and storage channels with little performance disturbance.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/xing](https://www.usenix.org/conference/usenixsecurity20/presentation/xing)
- **PDF:** [https://www.usenix.org/system/files/sec20-xing.pdf](https://www.usenix.org/system/files/sec20-xing.pdf)
## TPM-FAIL: TPM meets Timing and Lattice Attacks.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#tpm-fail-tpm-meets-timing-and-lattice-attacks)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#tpm-fail-tpm-meets-timing-and-lattice-attacks)
### Authors
* Daniel Moghimi, Worcester Polytechnic Institute, Worcester, MA, USA
* Berk Sunar, Worcester Polytechnic Institute, Worcester, MA, USA
* Thomas Eisenbarth, University of Lübeck, Lübeck, Germany
* Nadia Heninger, University of California, San Diego, CA, USA
### Abstract
> Trusted Platform Module (TPM) serves as a hardware-based root of trust that protects cryptographic keys from privileged system and physical adversaries. In this work, we perform a black-box timing analysis of TPM 2.0 devices deployed on commodity computers. Our analysis reveals that some of these devices feature secret-dependent execution times during signature generation based on elliptic curves. In particular, we discovered timing leakage on an Intel firmware-based TPM as well as a hardware TPM. We show how this information allows an attacker to apply lattice techniques to recover 256-bit private keys for ECDSA and ECSchnorr signatures. On Intel fTPM, our key recovery succeeds after about 1,300 observations and in less than two minutes. Similarly, we extract the private ECDSA key from a hardware TPM manufactured by STMicroelectronics, which is certified at Common Criteria (CC) EAL 4+, after fewer than 40,000 observations. We further highlight the impact of these vulnerabilities by demonstrating a remote attack against a StrongSwan IPsec VPN that uses a TPM to generate the digital signatures for authentication. In this attack, the remote client recovers the server’s private authentication key by timing only 45,000 authentication handshakes via a network connection. The vulnerabilities we have uncovered emphasize the difficulty of correctly implementing known constant-time techniques, and show the importance of evolutionary testing and transparent evaluation of cryptographic implementations. Even certified devices that claim resistance against attacks require additional scrutiny by the community and industry, as we learn more about these attacks.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/moghimi-tpm](https://www.usenix.org/conference/usenixsecurity20/presentation/moghimi-tpm)
- **PDF:** [https://www.usenix.org/system/files/sec20-moghimi-tpm.pdf](https://www.usenix.org/system/files/sec20-moghimi-tpm.pdf)
## Scaling Verifiable Computation Using Efficient Set Accumulators.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#scaling-verifiable-computation-using-efficient-set-accumulators)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#scaling-verifiable-computation-using-efficient-set-accumulators)
### Authors
* Alex Ozdemir, Stanford University
* Riad Wahby, Stanford University
* Barry Whitehat, Unaffiliated
* Dan Boneh, Stanford University
### Abstract
> Verifiable outsourcing systems offload a large computation to a remote server, but require that the remote server provide a succinct proof, called a SNARK, that proves that the server carried out the computation correctly. Real-world applications of this approach can be found in several blockchain systems that employ verifiable outsourcing to process a large number of transactions off-chain. This reduces the on-chain work to simply verifying a succinct proof that transaction processing was done correctly. In practice, verifiable outsourcing of state updates is done by updating the leaves of a Merkle tree, recomputing the resulting Merkle root, and proving using a SNARK that the state update was done correctly.In this work, we use a combination of existing and novel techniques to implement an RSA accumulator inside of a SNARK, and use it as a replacement for a Merkle tree. We specifically optimize the accumulator for compatibility with SNARKs. Our experiments show that the resulting system can dramatically reduce costs compared to existing approaches that use Merkle trees for committing to the current state. These results apply broadly to any system that needs to offload batches of state updates to a remote untrusted server.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/ozdemir](https://www.usenix.org/conference/usenixsecurity20/presentation/ozdemir)
- **PDF:** [https://www.usenix.org/system/files/sec20-ozdemir.pdf](https://www.usenix.org/system/files/sec20-ozdemir.pdf)
## Pixel: Multi-signatures for Consensus.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#pixel-multi-signatures-for-consensus)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#pixel-multi-signatures-for-consensus)
### Authors
* Manu Drijvers, DFINITY
* Sergey Gorbunov, Algorand and University of Waterloo
* Gregory Neven, DFINITY
* Hoeteck Wee, Algorand and CNRS, ENS, PSL
### Abstract
> In Proof-of-Stake (PoS) and permissioned blockchains, a committee of verifiers agrees and sign every new block of transactions. These blocks are validated, propagated, and stored by all users in the network. However, posterior corruptions pose a common threat to these designs, because the adversary can corrupt committee verifiers after they certified a block and use their signing keys to certify a different block. Designing efficient and secure digital signatures for use in PoS blockchains can substantially reduce bandwidth, storage and computing requirements from nodes, thereby enabling more efficient applications.We present Pixel, a pairing-based forward-secure multi-signature scheme optimized for use in blockchains, that achieves substantial savings in bandwidth, storage requirements, and verification effort. Pixel signatures consist of two group elements, regardless of the number of signers, can be verified using three pairings and one exponentiation, and support non-interactive aggregation of individual signatures into a multi-signature. Pixel signatures are also forward-secure and let signers evolve their keys over time, such that new keys cannot be used to sign on old blocks, protecting against posterior corruptions attacks on blockchains. We show how to integrate Pixel into any PoS blockchain. Next, we evaluate Pixel in a real-world PoS blockchain implementation, showing that it yields notable savings in storage, bandwidth, and block verification time. In particular, Pixel signatures reduce the size of blocks with 1500 transactions by 35% and reduce block verification time by 38%.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/drijvers](https://www.usenix.org/conference/usenixsecurity20/presentation/drijvers)
- **PDF:** [https://www.usenix.org/system/files/sec20-drijvers.pdf](https://www.usenix.org/system/files/sec20-drijvers.pdf)
## SANNS: Scaling Up Secure Approximate k-Nearest Neighbors Search.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#sanns-scaling-up-secure-approximate-k-nearest-neighbors-search)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#sanns-scaling-up-secure-approximate-k-nearest-neighbors-search)
### Authors
* Hao Chen, Microsoft Research
* Ilaria Chillotti, imec-COSIC KU Leuven & Zama
* Yihe Dong, Microsoft
* Oxana Poburinnaya, Simons Institute
* Ilya Razenshteyn, Microsoft Research
* M. Sadegh Riazi, UC San Diego
### Abstract
> The k-Nearest Neighbor Search (k-NNS) is the backbone of several cloud-based services such as recommender systems, face recognition, and database search on text and images. In these services, the client sends the query to the cloud server and receives the response in which case the query and response are revealed to the service provider. Such data disclosures are unacceptable in several scenarios due to the sensitivity of data and/or privacy laws. In this paper, we introduce SANNS, a system for secure k-NNS that keeps client's query and the search result confidential. SANNS comprises two protocols: an optimized linear scan and a protocol based on a novel sublinear time clustering-based algorithm. We prove the security of both protocols in the standard semi-honest model. The protocols are built upon several state-of-the-art cryptographic primitives such as lattice-based additively homomorphic encryption, distributed oblivious RAM, and garbled circuits. We provide several contributions to each of these primitives which are applicable to other secure computing tasks. Both of our protocols rely on a new circuit for the approximate top-k selection from n numbers that is built from O(n + k2) comparators. We have implemented our proposed system and performed extensive experimental results on four datasets in two different computation environments, demonstrating more than 18 — 31 × faster response time compared to optimally implemented protocols from the prior work. Moreover, SANNS is the first work that scales to the database of 10 million entries, pushing the limit by more than two orders of magnitude.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/chen-hao](https://www.usenix.org/conference/usenixsecurity20/presentation/chen-hao)
- **PDF:** [https://www.usenix.org/system/files/sec20-chen-hao.pdf](https://www.usenix.org/system/files/sec20-chen-hao.pdf)
## MIRAGE: Succinct Arguments for Randomized Algorithms with Applications to Universal zk-SNARKs.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#mirage-succinct-arguments-for-randomized-algorithms-with-applications-to-universal-zk-snarks)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#mirage-succinct-arguments-for-randomized-algorithms-with-applications-to-universal-zk-snarks)
### Authors
* Ahmed Kosba, Alexandria University
* Dimitrios Papadopoulos, Hong Kong University of Science and Technology
* Charalampos Papamanthou, University of Maryland
* Dawn Song, UC Berkeley
### Abstract
> The last few years have witnessed increasing interest in the deployment of zero-knowledge proof systems, in particular ones with succinct proofs and efficient verification (zk-SNARKs). One of the main challenges facing the wide deployment of zk-SNARKs  is the requirement of a trusted key generation phase per different computation to achieve practical proving performance. Existing zero-knowledge proof systems that do not require trusted setup or have a single trusted preprocessing phase suffer from increased proof size and/or additional verification overhead. On the other other hand, although universal circuit generators for zk-SNARKs (that can eliminate the need for per-computation preprocessing) have been introduced in the literature, the performance of the prover remains far from practical for real-world applications.In this paper, we first present a new zk-SNARK system that is well-suited for randomized algorithms—in particular it does not encode randomness generation within the arithmetic circuit allowing for more practical prover times. Then, we design a universal circuit that takes as input any arithmetic circuit of a bounded number of operations as well as a possible value assignment, and performs  randomized checks to verify consistency. Our universal circuit is linear in the number of operations instead of quasi-linear like other universal circuits. By applying our new zk-SNARK system to our universal circuit, we build MIRAGE, a universal zk-SNARK with very succinct proofs—the proof contains just one additional element compared to the per-circuit preprocessing state-of-the-art zk-SNARK by Groth (Eurocrypt 2016). Finally, we implement MIRAGE and experimentally evaluate its performance for different circuits and in the context of privacy-preserving smart contracts.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/kosba](https://www.usenix.org/conference/usenixsecurity20/presentation/kosba)
- **PDF:** [https://www.usenix.org/system/files/sec20-kosba.pdf](https://www.usenix.org/system/files/sec20-kosba.pdf)
## Secure Multi-party Computation of Differentially Private Median.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#secure-multi-party-computation-of-differentially-private-median)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#secure-multi-party-computation-of-differentially-private-median)
### Authors
* Jonas Böhler, SAP Security Research
* Florian Kerschbaum, University of Waterloo
### Abstract
> In this work, we consider distributed private learning. For this purpose, companies collect statistics about telemetry, usage and frequent settings from their users without disclosing individual values. We focus on rank-based statistics, specifically, the median which is more robust to outliers than the mean. Local differential privacy, where each user shares locally perturbed data with an untrusted server, is often used in private learning but does not provide the same accuracy as the central model, where noise is applied only once by a trusted server. Existing solutions to compute the differentially private median provide good accuracy only for large amounts of users (local model), by using a trusted third party (central model), or for a very small data universe (secure multi-party computation). We present a multi-party computation to efficiently compute the exponential mechanism for the median, which also supports, e.g., general rank-based statistics (e.g., pth-percentile, interquartile range) and convex optimizations for machine learning. Our approach is efficient (practical running time), scaleable (sublinear in the data universe size) and accurate, i.e., the absolute error is smaller than comparable methods and is independent of the number of users, hence, our protocols can be used even for a small number of users. In our experiments we were able to compute the differentially private median for 1 million users in 3 minutes using 3 semi-honest computation parties distributed over the Internet.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/boehler](https://www.usenix.org/conference/usenixsecurity20/presentation/boehler)
- **PDF:** [https://www.usenix.org/system/files/sec20-bohler.pdf](https://www.usenix.org/system/files/sec20-bohler.pdf)
## That Was Then, This Is Now: A Security Evaluation of Password Generation, Storage, and Autofill in Browser-Based Password Managers.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#that-was-then-this-is-now-a-security-evaluation-of-password-generation-storage-and-autofill-in-browser-based-password-managers)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#that-was-then-this-is-now-a-security-evaluation-of-password-generation-storage-and-autofill-in-browser-based-password-managers)
### Authors
* Sean Oesch, University of Tennessee
* Scott Ruoti, University of Tennessee
### Abstract
> Password managers have the potential to help users more effectively manage their passwords and address many of the concerns surrounding password-based authentication. However, prior research has identified significant vulnerabilities in existing password managers; especially in browser-based password managers, which are the focus of this paper. Since that time, five years has passed, leaving it unclear whether password managers remain vulnerable or whether they have addressed known security concerns. To answer this question, we evaluate thirteen popular password managers and consider all three stages of the password manager lifecycle—password generation, storage, and autofill. Our evaluation is the first analysis of password generation in password managers, finding several non-random character distributions and identifying instances where generated passwords were vulnerable to online and offline guessing attacks. For password storage and autofill, we replicate past evaluations, demonstrating that while password managers have improved in the half-decade since those prior evaluations, there are still significant issues; these problems include unencrypted metadata, insecure defaults, and vulnerabilities to clickjacking attacks. Based on our results, we identify password managers to avoid, provide recommendations on how to improve existing password managers, and identify areas of future research.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/oesch](https://www.usenix.org/conference/usenixsecurity20/presentation/oesch)
- **PDF:** [https://www.usenix.org/system/files/sec20-oesch_0.pdf](https://www.usenix.org/system/files/sec20-oesch_0.pdf)
## Composition Kills: A Case Study of Email Sender Authentication.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#composition-kills-a-case-study-of-email-sender-authentication)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#composition-kills-a-case-study-of-email-sender-authentication)
### Authors
* Jianjun Chen, International Computer Science Institute
* Vern Paxson, University of California Berkeley and International Computer Science Institute
* Jian Jiang, Shape Security
### Abstract
> Component-based software design is a primary engineering approach for building modern software systems. This programming paradigm, however, creates security concerns due to the potential for inconsistent interpretations of messages between different components. In this paper, we leverage such inconsistencies to identify vulnerabilities in email systems. We identify a range of techniques to induce inconsistencies among different components across email servers and clients. We show that these inconsistencies can enable attackers to bypass email authentication to impersonate arbitrary senders, and forge DKIM-signed emails with a legitimate site's signature. Using a combination of manual analysis and black-box fuzzing, we discovered 18 types of evasion exploits and tested them against 10 popular email providers and 19 email clients—all of which proved vulnerable to various attacks. Absent knowledge of our attacks, for many of them even a conscientious security professional using a state-of-the-art email provider service like Gmail cannot with confidence readily determine, when receiving an email, whether it is forged.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/chen-jianjun](https://www.usenix.org/conference/usenixsecurity20/presentation/chen-jianjun)
- **PDF:** [https://www.usenix.org/system/files/sec20-chen-jianjun.pdf](https://www.usenix.org/system/files/sec20-chen-jianjun.pdf)
## Detecting Stuffing of a User's Credentials at Her Own Accounts.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#detecting-stuffing-of-a-users-credentials-at-her-own-accounts)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#detecting-stuffing-of-a-users-credentials-at-her-own-accounts)
### Authors
* Ke Coby Wang, University of North Carolina at Chapel Hill
* Michael K. Reiter, University of North Carolina at Chapel Hill
### Abstract
> We propose a framework by which websites can coordinate to detect credential stuffing on individual user accounts.  Our detection algorithm teases apart normal login behavior (involving password reuse, entering correct passwords into the wrong sites, etc.) from credential stuffing, by leveraging modern anomaly detection and carefully tracking suspicious logins.  Websites coordinate using a novel private membership-test protocol, thereby ensuring that information about passwords is not leaked; this protocol is highly scalable, partly due to its use of cuckoo filters, and is more secure than similarly scalable alternatives in an important measure that we define.  We use probabilistic model checking to estimate our credential-stuffing detection accuracy across a range of operating points.  These methods might be of independent interest for their novel application of formal methods to estimate the usability impacts of our design.  We show that even a minimal-infrastructure deployment of our framework should already support the combined login load experienced by the airline, hotel, retail, and consumer banking industries in the U.S.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/wang](https://www.usenix.org/conference/usenixsecurity20/presentation/wang)
- **PDF:** [https://www.usenix.org/system/files/sec20-wang.pdf](https://www.usenix.org/system/files/sec20-wang.pdf)
## Liveness is Not Enough: Enhancing Fingerprint Authentication with Behavioral Biometrics to Defeat Puppet Attacks.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#liveness-is-not-enough-enhancing-fingerprint-authentication-with-behavioral-biometrics-to-defeat-puppet-attacks)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#liveness-is-not-enough-enhancing-fingerprint-authentication-with-behavioral-biometrics-to-defeat-puppet-attacks)
### Authors
* Cong Wu, Wuhan University
* Kun He, Wuhan University
* Jing Chen, Wuhan University
* Ziming Zhao, Rochester Institute of Technology
* Ruiying Du, Wuhan University
### Abstract
> Fingerprint authentication has gained increasing popularity on mobile devices in recent years. However, it is vulnerable to presentation attacks, which include that an attacker spoofs with an artificial replica. Many liveness detection solutions have been proposed to defeat such presentation attacks; however, they all fail to defend against a particular type of presentation attack, namely puppet attack, in which an attacker places an unwilling victim’s finger on the fingerprint sensor. In this paper, we propose FINAUTH, an effective and efficient software-only solution, to complement fingerprint authentication by defeating both synthetic spoofs and puppet attacks using fingertip-touch characteristics. FINAUTH characterizes intrinsic fingertip-touch behaviors including the acceleration and the rotation angle of mobile devices when a legitimate user authenticates. FINAUTH only utilizes common sensors equipped on mobile devices and does not introduce extra usability burdens on users. To evaluate the effectiveness of FINAUTH, we carried out experiments on datasets collected from 90 subjects after the IRB approval. The results show that FINAUTH can achieve the average balanced accuracy of 96.04% with 5 training data points and 99.28% with 100 training data points. Security experiments also demonstrate that FINAUTH is resilient against possible attacks. In addition, we report the usability analysis results of FINAUTH, including user authentication delay and overhead.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/wu](https://www.usenix.org/conference/usenixsecurity20/presentation/wu)
- **PDF:** [https://www.usenix.org/system/files/sec20-wu.pdf](https://www.usenix.org/system/files/sec20-wu.pdf)
## Human Distinguishable Visual Key Fingerprints.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#human-distinguishable-visual-key-fingerprints)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#human-distinguishable-visual-key-fingerprints)
### Authors
* Mozhgan Azimpourkivi, Bloomberg
* Umut Topkara, Bloomberg
* Bogdan Carbunar, FIU
### Abstract
> Visual fingerprints are used in human verification of identities to improve security against impersonation attacks. The verification requires the user to confirm that the visual fingerprint image derived from the trusted source is the same as the one derived from the unknown source. We introduce CEAL, a novel mechanism to build generators for visual fingerprint representations of arbitrary public strings. CEAL stands out from existing approaches in three significant aspects: (1) eliminates the need for hand curated image generation rules by  learning a generator model that imitates the style and domain of fingerprint images from a large collection of sample images, hence enabling easy customizability, (2) operates within limits of the visual discriminative  ability of human perception, such that the learned fingerprint image generator avoids mapping distinct keys to images which are not distinguishable by humans, and (3) the resulting model deterministically generates realistic fingerprint images from an input vector, where the vector components are designated to control visual properties which are either readily perceptible to a human eye, or imperceptible, yet necessary for accurately modeling the target image domain.Unlike existing visual fingerprint generators, CEAL factors in the limits of human perception, and pushes the key payload capacity of the images toward the limits of its generative model: We have built a generative network for nature landscape images which can reliably encode 123 bits of entropy in the fingerprint. We label 3,996 image pairs by 931 participants. In experiments with 402 million attack image pairs, we found that pre-image attacks performed by adversaries equipped with the human perception discriminators that we build, achieve a success rate against CEAL that is at most 0.0002%. The CEAL generator model is small (67MB) and efficient (2.3s to generate an image fingerprint on a laptop).

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/azimpourkivi](https://www.usenix.org/conference/usenixsecurity20/presentation/azimpourkivi)
- **PDF:** [https://www.usenix.org/system/files/sec20-azimpourkivi.pdf](https://www.usenix.org/system/files/sec20-azimpourkivi.pdf)
## FuzzGuard: Filtering out Unreachable Inputs in Directed Grey-box Fuzzing through Deep Learning.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#fuzzguard-filtering-out-unreachable-inputs-in-directed-grey-box-fuzzing-through-deep-learning)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#fuzzguard-filtering-out-unreachable-inputs-in-directed-grey-box-fuzzing-through-deep-learning)
### Authors
* Peiyuan Zong, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Tao Lv, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Dawei Wang, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Zizhuang Deng, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Ruigang Liang, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Kai Chen, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
### Abstract
> Recently, directed grey-box fuzzing (DGF) becomes popular in the field of software testing. Different from coverage-based fuzzing whose goal is to increase code coverage for triggering more bugs, DGF is designed to check whether a piece of potentially buggy code (e.g., string operations) really contains a bug. Ideally, all the inputs generated by DGF should reach the target buggy code until triggering the bug. It is a waste of time when executing with unreachable inputs. Unfortunately, in real situations, large numbers of the generated inputs cannot let a program execute to the target, greatly impacting the efficiency of fuzzing, especially when the buggy code is embedded in the code guarded by various constraints. In this paper, we propose a deep-learning-based approach to predict the reachability of inputs (i.e., miss the target or not) before executing the target program, helping DGF filtering out the unreachable ones to boost the performance of fuzzing. To apply deep learning with DGF, we design a suite of new techniques (e.g., step-forwarding approach, representative data selection) to solve the problems of unbalanced labeled data and insufficient time in the training process. Further, we implement the proposed approach called FuzzGuard and equip it with the state-of-the-art DGF (e.g., AFLGo). Evaluations on 45 real vulnerabilities show that FuzzGuard boosts the fuzzing efficiency of the vanilla AFLGo up to 17.1×. Finally, to understand the key features learned by FuzzGuard, we illustrate their connection with the constraints in the programs.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/zong](https://www.usenix.org/conference/usenixsecurity20/presentation/zong)
- **PDF:** [https://www.usenix.org/system/files/sec20-zong.pdf](https://www.usenix.org/system/files/sec20-zong.pdf)
## FuzzGen: Automatic Fuzzer Generation.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#fuzzgen-automatic-fuzzer-generation)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#fuzzgen-automatic-fuzzer-generation)
### Authors
* Kyriakos Ispoglou, Google Inc.
* Daniel Austin, Google Inc.
* Vishwath Mohan, Google Inc.
* Mathias Payer, EPFL
### Abstract
> Fuzzing is a testing technique to discover unknown vulnerabilities in software. When applying fuzzing to libraries, the core idea of supplying random input remains unchanged, yet it is non-trivial to achieve good code coverage. Libraries cannot run as standalone programs, but instead are invoked through another application. Triggering code deep in a library remains challenging as specific sequences of API calls are required to build up the necessary state. Libraries are diverse and have unique interfaces that require unique fuzzers, so far written by a human analyst. To address this issue, we present FuzzGen, a tool for automatically synthesizing fuzzers for complex libraries in a given environment. FuzzGen leverages a whole system analysis to infer the library’s interface and synthesizes fuzzers specifically for that library. FuzzGen requires no human interaction and can be applied to a wide range of libraries. Furthermore, the generated fuzzers leverage LibFuzzer to achieve better code coverage and expose bugs that reside deep in the library. FuzzGen was evaluated on Debian and the Android Open Source Project (AOSP) selecting 7 libraries to generate fuzzers. So far, we have found 17 previously unpatched vulnerabilities with 6 assigned CVEs. The generated fuzzers achieve an average of 54.94% code coverage; an improvement of 6.94% when compared to manually written fuzzers, demonstrating the effectiveness and generality of FuzzGen.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/ispoglou](https://www.usenix.org/conference/usenixsecurity20/presentation/ispoglou)
- **PDF:** [https://www.usenix.org/system/files/sec20-ispoglou.pdf](https://www.usenix.org/system/files/sec20-ispoglou.pdf)
## ParmeSan: Sanitizer-guided Greybox Fuzzing.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#parmesan-sanitizer-guided-greybox-fuzzing)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#parmesan-sanitizer-guided-greybox-fuzzing)
### Authors
* Sebastian Österlund, Vrije Universiteit Amsterdam
* Kaveh Razavi, Vrije Universiteit Amsterdam
* Herbert Bos, Vrije Universiteit Amsterdam
* Cristiano Giuffrida, Vrije Universiteit Amsterdam
### Abstract
> One of the key questions when fuzzing is where to look for vulnerabilities. Coverage-guided fuzzers indiscriminately optimize for covering as much code as possible given that bug coverage often correlates with code coverage. Since code coverage overapproximates bug coverage, this approach is less than ideal and may lead to non-trivial time-to-exposure (TTE) of bugs. Directed fuzzers try to address this problem by directing the fuzzer to a basic block with a potential vulnerability. This approach can greatly reduce the TTE for a specific bug, but such special-purpose fuzzers can then greatly underapproximate overall bug coverage. In this paper, we present sanitizer-guided fuzzing, a new design point in this space that specifically optimizes for bug coverage. For this purpose, we make the key observation that while the instrumentation performed by existing software sanitizers are regularly used for detecting fuzzer-induced error conditions, they can further serve as a generic and effective mechanism to identify interesting basic blocks for guiding fuzzers. We present the design and implementation of ParmeSan, a new sanitizer-guided fuzzer that builds on this observation. We show that ParmeSan greatly reduces the TTE of real-world bugs, and finds bugs 37% faster than existing state-of-the-art coverage-based fuzzers (Angora) and 288% faster than directed fuzzers (AFLGo), while still covering the same set of bugs.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/osterlund](https://www.usenix.org/conference/usenixsecurity20/presentation/osterlund)
- **PDF:** [https://www.usenix.org/system/files/sec20fall_osterlund_prepub.pdf](https://www.usenix.org/system/files/sec20fall_osterlund_prepub.pdf)
## EcoFuzz: Adaptive Energy-Saving Greybox Fuzzing as a Variant of the Adversarial Multi-Armed Bandit.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#ecofuzz-adaptive-energy-saving-greybox-fuzzing-as-a-variant-of-the-adversarial-multi-armed-bandit)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#ecofuzz-adaptive-energy-saving-greybox-fuzzing-as-a-variant-of-the-adversarial-multi-armed-bandit)
### Authors
* Tai Yue, National University of Defense Technology
* Pengfei Wang, National University of Defense Technology
* Yong Tang, National University of Defense Technology
* Enze Wang, National University of Defense Technology
* Bo Yu, National University of Defense Technology
* Kai Lu, National University of Defense Technology
* Xu Zhou, National University of Defense Technology
### Abstract
> Fuzzing is one of the most effective approaches for identifying security vulnerabilities. As a state-of-the-art coverage-based greybox fuzzer, AFL is a highly effective and widely used technique. However, AFL allocates excessive energy (i.e., the number of test cases generated by the seed) to seeds that exercise the high-frequency paths and can not adaptively adjust the energy allocation, thus wasting a significant amount of energy. Moreover, the current Markov model for modeling coverage-based greybox fuzzing is not profound enough. This paper presents a variant of the Adversarial Multi-Armed Bandit model for modeling AFL’s power schedule process. We first explain the challenges in AFL's scheduling algorithm by using the reward probability that generates a test case for discovering a new path. Moreover, we illustrated the three states of the seeds set and developed a unique adaptive scheduling algorithm as well as a probability-based search strategy. These approaches are implemented on top of AFL in an adaptive energy-saving greybox fuzzer called EcoFuzz. EcoFuzz is examined against other six AFL-type tools on 14 real-world subjects over 490 CPU days. According to the results, EcoFuzz could attain 214% of the path coverage of AFL with reducing 32% test cases generation of that of AFL. Besides, EcoFuzz identified 12 vulnerabilities in GNU Binutils and other software. We also extended EcoFuzz to test some IoT devices and found a new vulnerability in the SNMP component.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/yue](https://www.usenix.org/conference/usenixsecurity20/presentation/yue)
- **PDF:** [https://www.usenix.org/system/files/sec20-yue.pdf](https://www.usenix.org/system/files/sec20-yue.pdf)
## MUZZ: Thread-aware Grey-box Fuzzing for Effective Bug Hunting in Multithreaded Programs.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#muzz-thread-aware-grey-box-fuzzing-for-effective-bug-hunting-in-multithreaded-programs)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#muzz-thread-aware-grey-box-fuzzing-for-effective-bug-hunting-in-multithreaded-programs)
### Authors
* Hongxu Chen, University of Science and Technology of China and Nayang Technological University
* Shengjian Guo, Baidu Security
* Yinxing Xue, University of Science and Technology of China
* Yulei Sui, University of Technology Sydney
* Cen Zhang, Nanyang Technological University
* Yuekang Li, Nanyang Technological University
* Haijun Wang, Ant Financial Services Group
* Yang Liu, Nanyang Technological University
### Abstract
> Grey-box fuzz testing has revealed thousands of vulnerabilities in real-world software owing to its lightweight instrumentation, fast coverage feedback, and dynamic adjusting strategies. However, directly applying grey-box fuzzing to input-dependent multithreaded programs can be extremely inefficient. In practice, multithreading-relevant bugs are usually buried in the sophisticated program flows. Meanwhile, existing grey-box fuzzing techniques do not stress thread-interleavings that affect execution states in multithreaded programs. Therefore, mainstream grey-box fuzzers cannot adequately test problematic segments in multithreaded software, although they might obtain high code coverage statistics.To this end, we propose Muzz, a new grey-box fuzzing technique that hunts for bugs in multithreaded programs. Muzz owns three novel thread-aware instrumentations, namely coverage-oriented instrumentation, thread-context instrumentation, and schedule-intervention instrumentation. During fuzzing, these instrumentations engender runtime feedback to accentuate execution states caused by thread interleavings. By leveraging such feedback in the dynamic seed selection and execution strategies, Muzz preserves more valuable seeds that expose bugs under a multithreading context.We evaluate Muzz on twelve real-world multithreaded programs. Experiments show that Muzz outperforms AFL in both multithreading-relevant seed generation and concurrency-vulnerability detection. Further, by replaying the target programs against the generated seeds, Muzz also reveals more concurrency-bugs (e.g., data-races, thread-leaks) than AFL. In total, Muzz detected eight new concurrency-vulnerabilities and nineteen new concurrency-bugs. At the time of writing, four reported issues have received CVE IDs.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/chen-hongxu](https://www.usenix.org/conference/usenixsecurity20/presentation/chen-hongxu)
- **PDF:** [https://www.usenix.org/system/files/sec20-chen-hongxu.pdf](https://www.usenix.org/system/files/sec20-chen-hongxu.pdf)
## On Training Robust PDF Malware Classifiers.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#on-training-robust-pdf-malware-classifiers)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#on-training-robust-pdf-malware-classifiers)
### Authors
* Yizheng Chen, Columbia University
* Shiqi Wang, Columbia University
* Dongdong She, Columbia University
* Suman Jana, Columbia University
### Abstract
> Although state-of-the-art PDF malware classifiers can be trained with almost perfect test accuracy (99%) and extremely low false positive rate (under 0.1%), it has been shown that even a simple adversary can evade them. A practically useful malware classifier must be robust against evasion attacks. However, achieving such robustness is an extremely challenging task. In this paper, we take the first steps towards training robust PDF malware classifiers with verifiable robustness properties. For instance, a robustness property can enforce that no matter how many pages from benign documents are inserted into a PDF malware, the classifier must still classify it as malicious. We demonstrate how the worst-case behavior of a malware classifier with respect to specific robustness properties can be formally verified. Furthermore, we find that training classifiers that satisfy formally verified robustness properties can increase the evasion cost of unbounded (i.e., not bounded by the robustness properties) attackers by eliminating simple evasion attacks. Specifically, we propose a new distance metric that operates on the PDF tree structure and specify two classes of robustness properties including subtree insertions and deletions. We utilize state-of-the-art verifiably robust training method to build robust PDF malware classifiers. Our results show that, we can achieve 92.27% average verified robust accuracy over three properties, while maintaining 99.74% accuracy and 0.56% false positive rate. With simple robustness properties, our robust model maintains 7% higher robust accuracy than all the baseline models against unrestricted whitebox attacks. Moreover, the state-of-the-art and new adaptive evolutionary attackers need up to 10 times larger $L_0$ feature distance and 21 times more PDF basic mutations (e.g., inserting and deleting objects) to evade our robust model than the baselines.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/chen-yizheng](https://www.usenix.org/conference/usenixsecurity20/presentation/chen-yizheng)
- **PDF:** [https://www.usenix.org/system/files/sec20-chen-yizheng.pdf](https://www.usenix.org/system/files/sec20-chen-yizheng.pdf)
## Measuring and Modeling the Label Dynamics of Online Anti-Malware Engines.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#measuring-and-modeling-the-label-dynamics-of-online-anti-malware-engines)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#measuring-and-modeling-the-label-dynamics-of-online-anti-malware-engines)
### Authors
* Shuofei Zhu, The Pennsylvania State University
* Jianjun Shi, BIT, The Pennsylvania State University
* Limin Yang, University of Illinois at Urbana-Champaign
* Boqin Qin, BUPT, The Pennsylvania State University
* Ziyi Zhang, USTC, The Pennsylvania State University
* Linhai Song, Pennsylvania State University
* Gang Wang, University of Illinois at Urbana-Champaign
### Abstract
> VirusTotal provides malware labels from a large set of anti-malware engines, and is heavily used by researchers for malware annotation and system evaluation. Since different engines often disagree with each other, researchers have used various methods to aggregate their labels. In this paper, we take a data-driven approach to categorize, reason, and validate common labeling methods used by researchers. We first survey 115 academic papers that use VirusTotal, and identify common methodologies. Then we collect the daily snapshots of VirusTotal labels for more than 14,000 files (including a subset of manually verified ground-truth) from 65 VirusTotal engines over a year. Our analysis validates the benefits of threshold-based label aggregation in stabilizing files’ labels, and also points out the impact of poorly-chosen thresholds. We show that hand-picked “trusted” engines do not always perform well, and certain groups of engines are strongly correlated and should not be treated independently. Finally, we empirically show certain engines fail to perform in-depth analysis on submitted files and can easily produce false positives. Based on our findings, we offer suggestions for future usage of VirusTotal for data annotation.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/zhu](https://www.usenix.org/conference/usenixsecurity20/presentation/zhu)
- **PDF:** [https://www.usenix.org/system/files/sec20-zhu.pdf](https://www.usenix.org/system/files/sec20-zhu.pdf)
## FIRMSCOPE: Automatic Uncovering of Privilege-Escalation Vulnerabilities in Pre-Installed Apps in Android Firmware.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#firmscope-automatic-uncovering-of-privilege-escalation-vulnerabilities-in-pre-installed-apps-in-android-firmware)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#firmscope-automatic-uncovering-of-privilege-escalation-vulnerabilities-in-pre-installed-apps-in-android-firmware)
### Authors
* Mohamed Elsabagh, Kryptowire
* Ryan Johnson, Kryptowire
* Angelos Stavrou, Kryptowire
* Chaoshun Zuo, The Ohio State University
* Qingchuan Zhao, The Ohio State University
* Zhiqiang Lin, The Ohio State University
### Abstract
> Android devices ship with pre-installed privileged apps in their firmware — some of which are essential system components, others deliver a unique user experience — that users cannot disable. These pre-installed apps are assumed to be secure as they are handpicked or developed by the device vendors themselves rather than third parties. Unfortunately, we have identified an alarming number of Android firmware that contain privilege-escalation vulnerabilities in pre-installed apps, allowing attackers to perform unauthorized actions such as executing arbitrary commands, recording the device audio and screen, and accessing personal data to name a few. To uncover these vulnerabilities, we built FIRMSCOPE, a novel static analysis system that analyzes Android firmware to expose unwanted functionality in pre-installed apps using an efficient and practical context-sensitive, flow-sensitive, field-sensitive, and partially object-sensitive taint analysis. Our experimental results demonstrate that FIRMSCOPE significantly outperforms the state-of-the-art Android taint analysis solutions both in terms of detection power and runtime performance. We used FIRMSCOPE to scan 331,342 pre-installed apps in 2,017 Android firmware images from v4.0 to v9.0 from more than 100 Android vendors. Among them, FIRMSCOPE uncovered 850 unique privilege-escalation vulnerabilities, many of which are exploitable and 0-day.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/elsabagh](https://www.usenix.org/conference/usenixsecurity20/presentation/elsabagh)
- **PDF:** [https://www.usenix.org/system/files/sec20-elsabagh.pdf](https://www.usenix.org/system/files/sec20-elsabagh.pdf)
## Automatic Hot Patch Generation for Android Kernels.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#automatic-hot-patch-generation-for-android-kernels)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#automatic-hot-patch-generation-for-android-kernels)
### Authors
* Zhengzi Xu, Nanyang Technological University
* Yulong Zhang, Baidu X-Lab
* Longri Zheng, Baidu X-Lab
* Liangzhao Xia, Baidu X-Lab
* Chenfu Bao, Baidu X-Lab
* Zhi Wang, Florida State University
* Yang Liu, Nanyang Technological University
### Abstract
> The rapid growth of the Android ecosystem has led to the fragmentation problem where a wide range of (customized) versions of Android OS exist in the market. This poses a severe security issue as it is very costly for Android vendors to fix vulnerabilities in their customized Android kernels in time. The recent development of the hot patching technique provides an ideal solution to solve this problem since it can be applied to a wide range of Android kernels without interrupting their normal functionalities. However, the current hot patches are written by human experts, which can be time-consuming and error-prone. To this end, we first study the feasibility of automatic patch generation from 373 Android kernel CVEs ranging from 2012 to 2016. Then, we develop an automatic hot patch generation tool, named VULMET, which produces semantic preserving hot patches by learning from the official patches. The key idea of VULMET is to use the weakest precondition reasoning to transform the changes made by the official patches into the hot patch constraints. The experiments have shown that VULMET can generate correct hot patches for 55 real-world Android kernel CVEs. The hot patches do not affect the robustness of the kernels and have low performance overhead.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/xu](https://www.usenix.org/conference/usenixsecurity20/presentation/xu)
- **PDF:** [https://www.usenix.org/system/files/sec20-xu.pdf](https://www.usenix.org/system/files/sec20-xu.pdf)
## iOS, Your OS, Everybody's OS: Vetting and Analyzing Network Services of iOS Applications.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#ios-your-os-everybodys-os-vetting-and-analyzing-network-services-of-ios-applications)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#ios-your-os-everybodys-os-vetting-and-analyzing-network-services-of-ios-applications)
### Authors
* Zhushou Tang, Shanghai Jiao Tong University and PWNZEN InfoTech Co., LTD
* Ke Tang, Shanghai Jiao Tong University
* Minhui Xue, The University of Adelaide
* Yuan Tian, University of Virginia
* Sen Chen, Nanyang Technological University
* Muhammad Ikram, Macquarie University
* Tielei Wang, PWNZEN InfoTech Co., LTD
* Haojin Zhu, Shanghai Jiao Tong University
### Abstract
> Smartphone applications that listen for network connections introduce significant security and privacy threats for users. In this paper, we focus on vetting and analyzing the security of iOS apps’ network services. To this end, we develop an efficient and scalable iOS app collection tool to download 168,951 iOS apps in the wild. We investigate a set of 1,300 apps to understand the characteristics of network service vulnerabilities, confirming 11 vulnerabilities in popular apps, such as Waze, Now, and QQBrowser. From these vulnerabilities, we create signatures for a large-scale analysis of 168,951 iOS apps, which shows that the use of certain third-party libraries listening for remote connections is a common source of vulnerable network services in 92 apps. These vulnerabilities open up the iOS device to a host of possible attacks, including data leakage, remote command execution, and denial-of-service attacks. We have disclosed identified vulnerabilities and received acknowledgments from vendors.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/tang](https://www.usenix.org/conference/usenixsecurity20/presentation/tang)
- **PDF:** [https://www.usenix.org/system/files/sec20-tang.pdf](https://www.usenix.org/system/files/sec20-tang.pdf)
## SEAL: Attack Mitigation for Encrypted Databases via Adjustable Leakage.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#seal-attack-mitigation-for-encrypted-databases-via-adjustable-leakage)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#seal-attack-mitigation-for-encrypted-databases-via-adjustable-leakage)
### Authors
* Ioannis Demertzis, University of Maryland
* Dimitrios Papadopoulos, Hong Kong University of Science and Technology
* Charalampos Papamanthou, University of Maryland
* Saurabh Shintre, NortonLifeLock Research Group
### Abstract
> Building expressive encrypted databases that can scale to large volumes of data while enjoying formal security guarantees has been one of the holy grails of security and cryptography research. Searchable Encryption (SE) is considered to be an attractive implementation choice for this goal: It naturally supports basic database queries such as point, join, group-by and range, and is very practical at the expense of well-defined leakage such as search and access pattern. Nevertheless, recent attacks have exploited these leakages to recover the plaintext database or the posed queries, casting doubt to the usefulness of SE in encrypted systems. Defenses against such leakage-abuse attacks typically require the use of Oblivious RAM or worst-case padding---such countermeasures are however quite impractical. In order to efficiently defend against leakage-abuse attacks on SE-based systems, we propose SEAL, a family of new SE schemes with adjustable leakage. In SEAL, the amount of privacy loss is expressed in leaked bits of search or access pattern and can be defined at setup. As our experiments  show, when protecting only a few bits of leakage (e.g., three to four bits of access pattern), enough for existing and even new more aggressive attacks to fail, SEAL's query execution time is within the realm of practical for real-world applications (a little over one order of magnitude slowdown compared to traditional SE-based encrypted databases). Thus, SEAL could comprise a promising approach to build efficient and robust encrypted databases.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/demertzis](https://www.usenix.org/conference/usenixsecurity20/presentation/demertzis)
- **PDF:** [https://www.usenix.org/system/files/sec20-demertzis.pdf](https://www.usenix.org/system/files/sec20-demertzis.pdf)
## Pancake: Frequency Smoothing for Encrypted Data Stores.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#pancake-frequency-smoothing-for-encrypted-data-stores)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#pancake-frequency-smoothing-for-encrypted-data-stores)
### Authors
* Paul Grubbs, Cornell Tech
* Anurag Kh, Yale University
* elwal, Yale University
* Marie-Sarah Lacharité, Royal Holloway, University of London
* Lloyd Brown, University of California, Berkeley
* Lucy Li, Cornell Tech
* Rachit Agarwal, Cornell University
* Thomas Ristenpart, Cornell Tech
### Abstract
> We present PANCAKE, the first system to protect key-value stores from access pattern leakage attacks with small constant factor bandwidth overhead. PANCAKE uses a new approach, that we call frequency smoothing, to transform plaintext accesses into uniformly distributed encrypted accesses to an encrypted data store. We show that frequency smoothing prevents access pattern leakage attacks by passive persistent adversaries in a new formal security model. We integrate PANCAKE into three key-value stores used in production clusters, and demonstrate its practicality: on standard benchmarks, PANCAKE achieves 229× better throughput than non-recursive Path ORAM — within 3–6× of insecure baselines for these key-value stores.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/grubbs](https://www.usenix.org/conference/usenixsecurity20/presentation/grubbs)
- **PDF:** [https://www.usenix.org/system/files/sec20-grubbs.pdf](https://www.usenix.org/system/files/sec20-grubbs.pdf)
## Droplet: Decentralized Authorization and Access Control for Encrypted Data Streams.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#droplet-decentralized-authorization-and-access-control-for-encrypted-data-streams)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#droplet-decentralized-authorization-and-access-control-for-encrypted-data-streams)
### Authors
* Hossein Shafagh, ETH Zurich
* Lukas Burkhalter, ETH Zurich
* Sylvia Ratnasamy, UC Berkeley
* Anwar Hithnawi, ETH Zurich & UC Berkeley
### Abstract
> This paper presents Droplet, a decentralized data access control service. Droplet enables data owners to securely and selectively share their encrypted data while guaranteeing data confidentiality in the presence of unauthorized parties and compromised data servers. Droplet’s contribution lies in coupling two key ideas: (i) a cryptographically-enforced access control construction for encrypted data streams which enables users to define fine-grained stream-specific access policies, and (ii) a decentralized authorization service that serves user-defined access policies. In this paper, we present Droplet’s design, the reference implementation of Droplet, and the experimental results of three case-study applications deployed with Droplet: Fitbit activity tracker, Ava health tracker, and ECOviz smart meter dashboard, demonstrating Droplet’s applicability for secure sharing of IoT streams.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/shafagh](https://www.usenix.org/conference/usenixsecurity20/presentation/shafagh)
- **PDF:** [https://www.usenix.org/system/files/sec20-shafagh.pdf](https://www.usenix.org/system/files/sec20-shafagh.pdf)
## Secure parallel computation on national scale volumes of data.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#secure-parallel-computation-on-national-scale-volumes-of-data)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#secure-parallel-computation-on-national-scale-volumes-of-data)
### Authors
* Sahar Mazloom, George Mason University
* Phi Hung Le, George Mason University
* Samuel Ranellucci, Unbound Tech
* S. Dov Gordon, George Mason University
### Abstract
> We revisit the problem of performing secure computation of graph-parallel algorithms, focusing on the applications of securely outsourcing matrix factorization, and histograms. Leveraging recent results in low-communication secure multi-party computation, and a security relaxation that allows the computation servers to learn some differentially private leakage about user inputs, we construct a new protocol that reduces overall runtime by 320X, reduces the number of AES calls by 750X , and reduces the total communication by 200X . Our system can securely compute histograms over 300 million items in about 4 minutes, and it can perform sparse matrix factorization, which is commonly used in recommendation systems, on 20 million records in about 6 minutes. Furthermore, in contrast to prior work, our system is secure against a malicious adversary that corrupts one of the computing servers.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/mazloom](https://www.usenix.org/conference/usenixsecurity20/presentation/mazloom)
- **PDF:** [https://www.usenix.org/system/files/sec20-mazloom.pdf](https://www.usenix.org/system/files/sec20-mazloom.pdf)
## Delphi: A Cryptographic Inference Service for Neural Networks.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#delphi-a-cryptographic-inference-service-for-neural-networks)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#delphi-a-cryptographic-inference-service-for-neural-networks)
### Authors
* Pratyush Mishra, UC Berkeley
* Ryan Lehmkuhl, UC Berkeley
* Akshayaram Srinivasan, UC Berkeley
* Wenting Zheng, UC Berkeley
* Raluca Ada Popa, UC Berkeley
### Abstract
> Many companies provide neural network prediction services to users for a wide range of applications. However, current prediction systems compromise  one party's privacy: either the user has to send sensitive inputs to the service provider for classification, or the service provider must store its proprietary neural networks on the user's device. The former harms the personal privacy of the user, while the latter reveals the service provider's proprietary model.We design, implement, and evaluate Delphi, a secure prediction system that allows two parties to run a neural network inference without revealing either party's data. Delphi approaches the problem by simultaneously co-designing cryptography and machine learning. We first design a hybrid cryptographic protocol that improves upon the communication and computation costs over prior work. Second, we develop a planner that automatically generates neural network architecture configurations that navigate the performance-accuracy trade-offs of our hybrid protocol. Together, these techniques allow us to achieve a 22x improvement in prediction latency compared to the state-of-the-art prior work.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/mishra](https://www.usenix.org/conference/usenixsecurity20/presentation/mishra)
- **PDF:** [https://www.usenix.org/system/files/sec20-mishra_0.pdf](https://www.usenix.org/system/files/sec20-mishra_0.pdf)
## Analysis of DTLS Implementations Using Protocol State Fuzzing.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#analysis-of-dtls-implementations-using-protocol-state-fuzzing)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#analysis-of-dtls-implementations-using-protocol-state-fuzzing)
### Authors
* Paul Fiterau-Brostean, Uppsala University
* Bengt Jonsson, Uppsala University
* Robert Merget, Ruhr-University Bochum
* Joeri de Ruiter, SIDN Labs
* Konstantinos Sagonas, Uppsala University
* Juraj Somorovsky, Paderborn University
### Abstract
> Recent years have witnessed an increasing number of protocols relying on UDP. Compared to TCP, UDP offers performance advantages such as simplicity and lower latency. This has motivated its adoption in Voice over IP, tunneling technologies, IoT, and novel Web protocols. To protect sensitive data exchange in these scenarios, the DTLS protocol has been developed as a cryptographic variation of TLS. DTLS’s main challenge is to support the stateless and unreliable transport of UDP. This has forced protocol designers to make choices that affect the complexity of DTLS, and to incorporate features that need not be addressed in the numerous TLS analyses. We present the first comprehensive analysis of DTLS implementations using protocol state fuzzing. To that end, we extend TLS-Attacker, an open source framework for analyzing TLS implementations, with support for DTLS tailored to the stateless and unreliable nature of the underlying UDP layer. We build a framework for applying protocol state fuzzing on DTLS servers, and use it to learn state machine models for thirteen DTLS implementations. Analysis of the learned state models reveals four serious security vulnerabilities, including a full client authentication bypass in the latest JSSE version, as well as several functional bugs and non-conformance issues. It also uncovers considerable differences between the models, confirming the complexity of DTLS state machines.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/fiterau-brostean](https://www.usenix.org/conference/usenixsecurity20/presentation/fiterau-brostean)
- **PDF:** [https://www.usenix.org/system/files/sec20-fiterau-brostean.pdf](https://www.usenix.org/system/files/sec20-fiterau-brostean.pdf)
## Agamotto: Accelerating Kernel Driver Fuzzing with Lightweight Virtual Machine Checkpoints.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#agamotto-accelerating-kernel-driver-fuzzing-with-lightweight-virtual-machine-checkpoints)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#agamotto-accelerating-kernel-driver-fuzzing-with-lightweight-virtual-machine-checkpoints)
### Authors
* Dokyung Song, University of California, Irvine
* Felicitas Hetzelt, Technische Universität Berlin
* Jonghwan Kim, KAIST
* Brent Byunghoon Kang, KAIST
* Jean-Pierre Seifert, Technische Universität Berlin
* Michael Franz, University of California, Irvine
### Abstract
> Kernel-mode drivers are challenging to analyze for vulnerabilities, yet play a critical role in maintaining the security of OS kernels. Their wide attack surface, exposed via both the system call interface and the peripheral interface, is often found to be the most direct attack vector to compromise an OS kernel. Researchers therefore have proposed many fuzzing techniques to find vulnerabilities in kernel drivers. However, the performance of kernel fuzzers is still lacking, for reasons such as prolonged execution of kernel code, interference between test inputs, and kernel crashes.This paper proposes lightweight virtual machine checkpointing as a new primitive that enables high-throughput kernel driver fuzzing. Our key insight is that kernel driver fuzzers frequently execute similar test cases in a row, and that their performance can be improved by dynamically creating multiple checkpoints while executing test cases and skipping parts of test cases using the created checkpoints. We built a system, dubbed Agamotto, around the virtual machine checkpointing primitive and evaluated it by fuzzing the peripheral attack surface of USB and PCI drivers in Linux. The results are convincing. Agamotto improved the performance of the state-of-the-art kernel fuzzer, Syzkaller, by 66.6% on average in fuzzing 8 USB drivers, and an AFL-based PCI fuzzer by 21.6% in fuzzing 4 PCI drivers, without modifying their underlying input generation algorithm.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/song](https://www.usenix.org/conference/usenixsecurity20/presentation/song)
- **PDF:** [https://www.usenix.org/system/files/sec20-song.pdf](https://www.usenix.org/system/files/sec20-song.pdf)
## USBFuzz: A Framework for Fuzzing USB Drivers by Device Emulation.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#usbfuzz-a-framework-for-fuzzing-usb-drivers-by-device-emulation)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#usbfuzz-a-framework-for-fuzzing-usb-drivers-by-device-emulation)
### Authors
* Hui Peng, Purdue University
* Mathias Payer, EPFL
### Abstract
> The Universal Serial Bus (USB) connects external devices to a host. This interface exposes the OS kernels and device drivers to attacks by malicious devices. Unfortunately, kernels and drivers were developed under a security model that implicitly trusts connected devices. Drivers expect faulty hardware but not malicious attacks. Similarly, security testing drivers is challenging as input must cross the hardware/software barrier. Fuzzing, the most widely used bug finding technique, relies on providing random data to programs. However, fuzzing device drivers is challenging due to the difficulty in crossing the hardware/software barrier and providing random device data to the driver under test.We present USBFuzz, a portable, flexible, and modular framework for fuzz testing USB drivers. At its core, USBFuzz uses a software-emulated USB device to provide random device data to drivers (when they perform IO operations). As the emulated USB device works at the device level, porting it to other platforms is straight-forward. Using the USBFuzz framework, we apply (i) coverage-guided fuzzing to a broad range of USB drivers in the Linux kernel; (ii) dumb fuzzing in FreeBSD, MacOS, and Windows through cross pollination seeded by the Linux inputs; and (iii) focused fuzzing of a USB webcam driver. USBFuzz discovered a total of 26 new bugs, including 16 memory bugs of high security impact in various Linux subsystems (USB core, USB sound, and network), one bug in FreeBSD, three in MacOS (two resulting in an unplanned reboot and one freezing the system), and four in Windows 8 and Windows 10 (resulting in Blue Screens of Death), and one bug in the Linux USB host controller driver and another one in a USB camera driver. From the Linux bugs, we have fixed and upstreamed 11 bugs and received 10 CVEs.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/peng](https://www.usenix.org/conference/usenixsecurity20/presentation/peng)
- **PDF:** [https://www.usenix.org/system/files/sec20-peng_0.pdf](https://www.usenix.org/system/files/sec20-peng_0.pdf)
## GREYONE: Data Flow Sensitive Fuzzing.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#greyone-data-flow-sensitive-fuzzing)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#greyone-data-flow-sensitive-fuzzing)
### Authors
* Shuitao Gan, State Key Laboratory of Mathematical Engineering and Advanced Computing
* Chao Zhang, Institute for Network Sciences and Cyberspace of Tsinghua University; Beijing National Research Center for Information Science and Technology
* Peng Chen, ByteDance Inc.
* Bodong Zhao, Institute for Network Science and Cyberspace, Tsinghua University
* Xiaojun Qin, State Key Laboratory of Mathematical Engineering and Advanced Computing
* Dong Wu, State Key Laboratory of Mathematical Engineering and Advanced Computing
* Zuoning Chen, National Research Center of Parallel Computer Engineering and Technology
### Abstract
> Data flow analysis (e.g., dynamic taint analysis) has proven to be useful for guiding fuzzers to explore hard-to-reach code and find vulnerabilities. However, traditional taint analysis is labor-intensive, inaccurate and slow, affecting the fuzzing efficiency. Apart from taint, few data flow features are utilized. In this paper, we proposed a data flow sensitive fuzzing solution GREYONE. We first utilize the classic feature taint to guide fuzzing. A lightweight and sound fuzzing-driven taint inference (FTI) is adopted to infer taint of variables, by monitoring their value changes while mutating input bytes during fuzzing. With the taint, we propose a novel input prioritization model to determine which branch to explore, which bytes to mutate and how to mutate. Further, we use another data flow feature constraint conformance, i.e., distance of tainted variables to values expected in untouched branches, to tune the evolution direction of fuzzing.We implemented a prototype of GREYONE and evaluated it on the LAVA data set and 19 real world programs. The results showed that it outperforms various state-of-the-art fuzzers in terms of both code coverage and vulnerability discovery. In the LAVA data set, GREYONE found all listed bugs and 336 more unlisted. In real world programs, GREYONE on average found 2.12X unique program paths and 3.09X unique bugs than state-of-the-art evolutionary fuzzers, including AFL, VUzzer, CollAFL, Angora and Honggfuzz, Moreover, GREYONE on average found 1.2X unique program paths and 1.52X unique bugs than a state-of-the-art symbolic exeuction assisted fuzzer QSYM. In total, it found 105 new security bugs, of which 41 are confirmed by CVE.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/gan](https://www.usenix.org/conference/usenixsecurity20/presentation/gan)
- **PDF:** [https://www.usenix.org/system/files/sec20-gan.pdf](https://www.usenix.org/system/files/sec20-gan.pdf)
## Fuzzing Error Handling Code using Context-Sensitive Software Fault Injection.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#fuzzing-error-handling-code-using-context-sensitive-software-fault-injection)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#fuzzing-error-handling-code-using-context-sensitive-software-fault-injection)
### Authors
* Zu-Ming Jiang, Tsinghua University
* Jia-Ju Bai, Tsinghua University
* Kangjie Lu, University of Minnesota
* Shi-Min Hu, Tsinghua University
### Abstract
> Error handling code is often critical but difficult to test in reality. As a result, many hard-to-find bugs exist in error handling code and may cause serious security problems once triggered. Fuzzing has become a widely used technique for finding software bugs nowadays. Fuzzing approaches mutate and/or generate various inputs to cover infrequently-executed code. However, existing fuzzing approaches are very limited in testing error handling code, because some of this code can be only triggered by occasional errors (such as insufficient memory and network-connection failures), but not specific inputs. Therefore, existing fuzzing approaches in general cannot effectively test such error handling code.In this paper, we propose a new fuzzing framework named FIFUZZ, to effectively test error handling code and detect bugs. The core of FIFUZZ is a context-sensitive software fault injection (SFI) approach, which can effectively cover error handling code in different calling contexts to find deep bugs hidden in error handling code with complicated contexts. We have implemented FIFUZZ and evaluated it on 9 widely-used C programs. It reports 317 alerts which are caused by 50 unique bugs in terms of the root causes. 32 of these bugs have been confirmed by related developers. We also compare FIFUZZ to existing fuzzing tools (including AFL, AFLFast, AFLSmart and FairFuzz), and find that FIFUZZ finds many bugs missed by these tools. We believe that FIFUZZ can effectively augment existing fuzzing approaches to find many real bugs that have been otherwise missed.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/jiang](https://www.usenix.org/conference/usenixsecurity20/presentation/jiang)
- **PDF:** [https://www.usenix.org/system/files/sec20-jiang.pdf](https://www.usenix.org/system/files/sec20-jiang.pdf)
## Montage: A Neural Network Language Model-Guided JavaScript Engine Fuzzer.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#montage-a-neural-network-language-model-guided-javascript-engine-fuzzer)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#montage-a-neural-network-language-model-guided-javascript-engine-fuzzer)
### Authors
* Suyoung Lee, KAIST
* HyungSeok Han, KAIST
* Sang Kil Cha, KAIST
* Sooel Son, KAIST
### Abstract
> JavaScript (JS) engine vulnerabilities pose significant security threats affecting billions of web browsers. While fuzzing is a prevalent technique for finding such vulnerabilities, there have been few studies that leverage the recent advances in neural network language models (NNLMs). In this paper, we present Montage, the first NNLM-guided fuzzer for finding JS engine vulnerabilities. The key aspect of our technique is to transform a JS abstract syntax tree (AST) into a sequence of AST subtrees that can directly train prevailing NNLMs. We demonstrate that Montage is capable of generating valid JS tests, and show that it outperforms previous studies in terms of finding vulnerabilities. Montage found 37 real-world bugs, including three CVEs, in the latest JS engines, demonstrating its efficacy in finding JS engine bugs.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/lee-suyoung](https://www.usenix.org/conference/usenixsecurity20/presentation/lee-suyoung)
- **PDF:** [https://www.usenix.org/system/files/sec20-lee-suyoung.pdf](https://www.usenix.org/system/files/sec20-lee-suyoung.pdf)
## Light Commands: Laser-Based Audio Injection Attacks on Voice-Controllable Systems.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#light-commands-laser-based-audio-injection-attacks-on-voice-controllable-systems)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#light-commands-laser-based-audio-injection-attacks-on-voice-controllable-systems)
### Authors
* Takeshi Sugawara, The University of Electro-Communications
* Benjamin Cyr, University of Michigan
* Sara Rampazzi, University of Michigan
* Daniel Genkin, University of Michigan
* Kevin Fu, University of Michigan
### Abstract
> We propose a new class of signal injection attacks on microphones by physically converting light to sound. We show how an attacker can inject arbitrary audio signals to a target microphone by aiming an amplitude-modulated light at the microphone's aperture. We then proceed to show how this effect leads to a remote voice-command injection attack on voice-controllable systems. Examining various products that use Amazon's Alexa, Apple's Siri, Facebook's Portal, and Google Assistant, we show how to use light to obtain control over these devices at distances up to 110 meters and from two separate buildings. Next, we show that user authentication on these devices is often lacking, allowing the attacker to use light-injected voice commands to unlock the target's smartlock-protected front doors, open garage doors, shop on e-commerce websites at the target's expense, or even unlock and start various vehicles connected to the target's Google account (e.g., Tesla and Ford). Finally, we conclude with possible software and hardware defenses against our attacks.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/sugawara](https://www.usenix.org/conference/usenixsecurity20/presentation/sugawara)
- **PDF:** [https://www.usenix.org/system/files/sec20-sugawara.pdf](https://www.usenix.org/system/files/sec20-sugawara.pdf)
## SkillExplorer: Understanding the Behavior of Skills in Large Scale.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#skillexplorer-understanding-the-behavior-of-skills-in-large-scale)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#skillexplorer-understanding-the-behavior-of-skills-in-large-scale)
### Authors
* Zhixiu Guo, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Zijin Lin, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Pan Li, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Kai Chen, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China
### Abstract
> Smart speakers have been popularly used around the world recently, mainly due to the convenience brought from the virtual personal assistant (VPA) which offers interactive actions through the convenient voice commands from users. Besides the built-in capabilities, VPA services can be further extended by third-party developers through skills. Similar to smartphone applications on Android and iOS markets, skills are also available on markets (e.g., Amazon, Google), attracting users together with malicious developers. Recent researches discover that malicious developers are able to route users' requests to malicious skills without users' consent by creating skills with similar names of legitimate ones. However, to the best of our knowledge, there is no prior research that systematically explores the interaction behaviors of skills, mainly due to the challenges in handling skills' inputs/outputs which are in the form of natural languages. In this paper, we propose the first systematic study on behaviors of skills, which is achieved by a suite of new grammar-based techniques including utterance extraction, question understanding, and answer generation specifically designed for skills. We build an interactive system called SkillExplorer and analyze 28,904 skills from the Amazon market and 1,897 actions from the Google market. Among these skills, we find that 1,141 skills request users' private information without following developer specifications, which are actually demanded by markets. 68 skills continue to eavesdrop users' private conversations, even after users have sent the command to stop them.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/guo](https://www.usenix.org/conference/usenixsecurity20/presentation/guo)
- **PDF:** [https://www.usenix.org/system/files/sec20-guo.pdf](https://www.usenix.org/system/files/sec20-guo.pdf)
## Devil's Whisper: A General Approach for Physical Adversarial Attacks against Commercial Black-box Speech Recognition Devices.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#devils-whisper-a-general-approach-for-physical-adversarial-attacks-against-commercial-black-box-speech-recognition-devices)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#devils-whisper-a-general-approach-for-physical-adversarial-attacks-against-commercial-black-box-speech-recognition-devices)
### Authors
* Yuxuan Chen, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences; School of Cyber Security, University of Chinese Academy of Sciences; Department of Computer Science, Florida Institute of Technology
* Xuejing Yuan, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences; School of Cyber Security, University of Chinese Academy of Sciences
* Jiangshan Zhang, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences; School of Cyber Security, University of Chinese Academy of Sciences
* Yue Zhao, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences; School of Cyber Security, University of Chinese Academy of Sciences
* Shengzhi Zhang, Department of Computer Science, Metropolitan College, Boston University, USA
* Kai Chen, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences; School of Cyber Security, University of Chinese Academy of Sciences
* XiaoFeng Wang, School of Informatics and Computing, Indiana University Bloomington
### Abstract
> Recently studies show that adversarial examples (AEs) can pose a serious threat to a “white-box” automatic speech recognition (ASR) system, when its machine-learning model is exposed to the adversary. Less clear is how realistic such a threat would be towards commercial devices, such as Google Home, Cortana, Echo, etc., whose models are not publicly available. Exploiting the learning model behind ASR system in black-box is challenging, due to the presence of complicated preprocessing and feature extraction even before the AEs could reach the model. Our research, however, shows that such a black-box attack is realistic. In the paper, we present Devil’s Whisper, a general adversarial attack on commercial ASR systems. Our idea is to enhance a simple local model roughly approximating the target black-box platform with a white-box model that is more advanced yet unrelated to the target. We find that these two models can effectively complement each other in predicting the target’s behavior, which enables highly transferable and generic attacks on the target. Using a novel optimization technique, we show that a local model built upon just over 1500 queries can be elevated by the open-source Kaldi Aspire Chain Model to effectively exploit commercial devices (Google Assistant, Google Home, Amazon Echo and Microsoft Cortana). For 98% of the target commands of these devices, our approach can generate at least one AE for attacking the target devices.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/chen-yuxuan](https://www.usenix.org/conference/usenixsecurity20/presentation/chen-yuxuan)
- **PDF:** [https://www.usenix.org/system/files/sec20-chen-yuxuan.pdf](https://www.usenix.org/system/files/sec20-chen-yuxuan.pdf)
## Void: A fast and light voice liveness detection system.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#void-a-fast-and-light-voice-liveness-detection-system)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#void-a-fast-and-light-voice-liveness-detection-system)
### Authors
* Muhammad Ejaz Ahmed, Data61, CSIRO
* Il-Youp Kwak, Chung-Ang University
* Jun Ho Huh, Samsung Research
* Iljoo Kim, Samsung Research
* Taekkyung Oh, KAIST and Sungkyunkwan University
* Hyoungshick Kim, Sungkyunkwan University
### Abstract
> Due to the open nature of voice assistants' input channels, adversaries could easily record people's use of voice commands, and replay them to spoof voice assistants. To mitigate such spoofing attacks, we present a highly efficient voice liveness detection solution called "Void." Void detects voice spoofing attacks using the differences in spectral power between live-human voices and voices replayed through speakers. In contrast to existing approaches that use multiple deep learning models, and thousands of features, Void uses a single classification model with just 97 features.We used two datasets to evaluate its performance: (1) 255,173 voice samples generated with 120 participants, 15 playback devices and 12 recording devices, and (2) 18,030 publicly available voice samples generated with 42 participants, 26 playback devices and 25 recording devices. Void achieves equal error rate of 0.3% and 11.6% in detecting voice replay attacks for each dataset, respectively. Compared to a state of the art, deep learning-based solution that achieves 7.4% error rate in that public dataset, Void uses 153 times less memory and is about 8 times faster in detection. When combined with a Gaussian Mixture Model that uses Mel-frequency cepstral coefficients (MFCC) as classification features—MFCC is already being extracted and used as the main feature in speech recognition services—Void achieves 8.7% error rate on the public dataset. Moreover, Void is resilient against hidden voice command, inaudible voice command, voice synthesis, equalization manipulation attacks, and combining replay attacks with live-human voices achieving about 99.7%, 100%, 90.2%, 86.3%, and 98.2% detection rates for those attacks, respectively.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/ahmed-muhammad](https://www.usenix.org/conference/usenixsecurity20/presentation/ahmed-muhammad)
- **PDF:** [https://www.usenix.org/system/files/sec20-ahmed-muhammad_0.pdf](https://www.usenix.org/system/files/sec20-ahmed-muhammad_0.pdf)
## Preech: A System for Privacy-Preserving Speech Transcription.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#preech-a-system-for-privacy-preserving-speech-transcription)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#preech-a-system-for-privacy-preserving-speech-transcription)
### Authors
* Shimaa Ahmed, University of Wisconsin—Madison
* Amrita Roy Chowdhury, University of Wisconsin—Madison
* Kassem Fawaz, University of Wisconsin—Madison
* Parmesh Ramanathan, University of Wisconsin—Madison
### Abstract
> New advances in machine learning have made Automated Speech Recognition (ASR) systems practical and more scalable. These systems, however, pose serious privacy threats as speech is a rich source of sensitive acoustic and textual information. Although offline and open-source ASR eliminates the privacy risks, its transcription performance is inferior to that of cloud-based ASR systems, especially for real-world use cases. In this paper, we propose Prεεch, an end-to-end speech transcription system which lies at an intermediate point in the privacy-utility spectrum. It protects the acoustic features of the speakers’ voices and protects the privacy of the textual content at an improved performance relative to offline ASR. Additionally, Prεεch provides several control knobs to allow customizable utility-usability-privacy trade-off. It relies on cloud-based services to transcribe a speech file after applying a series of privacy-preserving operations on the user’s side. We perform a comprehensive evaluation of Prεεch, using diverse real-world datasets, that demonstrates its effectiveness. Prεεch provides transcription at a 2% to 32.25% (mean 17.34%) relative improvement in word error rate over Deep Speech, while fully obfuscating the speakers' voice biometrics and allowing only a differentially private view of the textual content.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/ahmed-shimaa](https://www.usenix.org/conference/usenixsecurity20/presentation/ahmed-shimaa)
- **PDF:** [https://www.usenix.org/system/files/sec20-ahmed-shimaa.pdf](https://www.usenix.org/system/files/sec20-ahmed-shimaa.pdf)
## BlockSci: Design and applications of a blockchain analysis platform.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#blocksci-design-and-applications-of-a-blockchain-analysis-platform)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#blocksci-design-and-applications-of-a-blockchain-analysis-platform)
### Authors
* Harry Kalodner, Princeton University
* Malte Möser, Princeton University
* Kevin Lee, Princeton University
* Steven Goldfeder, Cornell Tech
* Martin Plattner, University of Innsbruck
* Alishah Chator, Johns Hopkins University
* Arvind Narayanan, Princeton University
### Abstract
> Analysis of blockchain data is useful for both scientific research and commercial applications. We present BlockSci, an open-source software platform for blockchain analysis. BlockSci is versatile in its support for different blockchains and analysis tasks. It incorporates an in-memory, analytical (rather than transactional) database, making it orders of magnitudes faster than using general-purpose graph databases. We describe BlockSci's design and present four analyses that illustrate its capabilities, shedding light on the security, privacy, and economics of cryptocurrencies.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/kalodner](https://www.usenix.org/conference/usenixsecurity20/presentation/kalodner)
- **PDF:** [https://www.usenix.org/system/files/sec20-kalodner.pdf](https://www.usenix.org/system/files/sec20-kalodner.pdf)
## Remote Side-Channel Attacks on Anonymous Transactions.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#remote-side-channel-attacks-on-anonymous-transactions)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#remote-side-channel-attacks-on-anonymous-transactions)
### Authors
* Florian Tramer, Stanford University
* Dan Boneh, Stanford University
* Kenny Paterson, ETH Zurich
### Abstract
> Privacy-focused crypto-currencies, such as Zcash or Monero, aim to provide strong cryptographic guarantees for transaction confidentiality and unlinkability. In this paper, we describe side-channel attacks that let remote adversaries bypass these protections.We present a general class of timing side-channel and traffic-analysis attacks on receiver privacy. These attacks enable an active remote adversary to identify the (secret) payee of any transaction in Zcash or Monero. The attacks violate the privacy goals of these crypto-currencies by exploiting side-channel information leaked by the implementation of different system components. Specifically, we show that a remote party who measures the response time of a user's P2P node to certain requests can link all transactions that send funds to that user. The timing differences are large enough that the attacks can be mounted remotely over a WAN. We responsibly disclosed the issues to the affected projects, and they have patched the vulnerabilities. We further study the impact of timing side-channels on the zero-knowledge proof systems used in these crypto-currencies. We observe that in Zcash's implementation, the time to generate a zero-knowledge proof depends on secret transaction data, and in particular on the amount of transacted funds. Hence, an adversary capable of measuring proof generation time can break transaction confidentiality, despite the proof system's zero-knowledge property.Our attacks highlight the dangers of side-channel leakage in anonymous crypto-currencies, and the need to systematically protect them against such attacks.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/tramer](https://www.usenix.org/conference/usenixsecurity20/presentation/tramer)
- **PDF:** [https://www.usenix.org/system/files/sec20-tramer.pdf](https://www.usenix.org/system/files/sec20-tramer.pdf)
## ETHBMC: A Bounded Model Checker for Smart Contracts.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#ethbmc-a-bounded-model-checker-for-smart-contracts)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#ethbmc-a-bounded-model-checker-for-smart-contracts)
### Authors
* Joel Frank, Ruhr-University Bochum
* Cornelius Aschermann, Ruhr-University Bochum
* Thorsten Holz, Ruhr-University Bochum
### Abstract
> The introduction of smart contracts has significantly advanced the state-of-the-art in cryptocurrencies. Smart contracts are programs who live on the blockchain, governing the flow of money. However, the promise of monetary gain has attracted miscreants, resulting in spectacular hacks which resulted in the loss of millions worth of currency. In response, several powerful static analysis tools were developed to address these problems. We surveyed eight recently proposed static analyzers for Ethereum smart contracts and found that none of them captures all relevant features of the Ethereum ecosystem. For example, we discovered that a precise memory model is missing and inter-contract analysis is only partially supported.Based on these insights, we present the design and implementation of, a bounded model checker based on symbolic execution which provides a precise model of the Ethereum network. We demonstrate its capabilities in a series of experiments. First, we compare against the eight aforementioned tools, showing that even relatively simple toy examples can obstruct other analyzers. Further proving that precise modeling is indispensable, we leverage ETHBmc capabilities for automatic vulnerability scanning. We perform a large-scale analysis of roughly 2.2 million accounts currently active on the blockchain and automatically generate 5,905 valid inputs which trigger a vulnerability.  From these, 1,989 can destroy a contract at will (so called suicidal contracts) and the rest can be used by an adversary to arbitrarily extract money.  Finally, we compare our large-scale analysis against two previous analysis runs, finding significantly more inputs (22.8%) than previous approaches.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/frank](https://www.usenix.org/conference/usenixsecurity20/presentation/frank)
- **PDF:** [https://www.usenix.org/system/files/sec20-frank.pdf](https://www.usenix.org/system/files/sec20-frank.pdf)
## TXSPECTOR: Uncovering Attacks in Ethereum from Transactions.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#txspector-uncovering-attacks-in-ethereum-from-transactions)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#txspector-uncovering-attacks-in-ethereum-from-transactions)
### Authors
* Mengya Zhang, The Ohio State University
* Xiaokuan Zhang, The Ohio State University
* Yinqian Zhang, The Ohio State University
* Zhiqiang Lin, The Ohio State University
### Abstract
> The invention of Ethereum smart contract has enabled the blockchain users to customize computing logic in transactions. However, similar to traditional computer programs, smart contracts have vulnerabilities, which can be exploited to cause financial loss of contract owners. While there are many software tools for detecting vulnerabilities in the smart contract bytecode, few have focused on transactions. In this paper, we propose TXSPECTOR, a generic, logic-driven framework to investigate Ethereum transactions for attack detection. At a high level, TXSPECTOR replays history transactions and records EVM bytecode-level traces, and then encodes the control and data dependencies into logic relations. Instead of setting a pre-defined set of functionalities, TXSPECTOR allows users to specify customized rules to uncover various types of attacks in the transactions. We have built a prototype of TXSPECTOR and evaluated it for the detection of three Ethereum attacks that exploit: (i) the Re-entrancy vulnerability, (ii) the UncheckedCall vulnerability, and (iii) the Suicidal vulnerability. The results demonstrate that TXSPECTOR can effectively detect attacks in the transactions and, as a byproduct, the corresponding vulnerabilities in the smart contracts. We also show how TXSPECTOR can be used for forensic analysis on transactions, and present Detection Rules for detecting other types of attacks in addition to the three focused Ethereum attacks.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/zhang-mengya](https://www.usenix.org/conference/usenixsecurity20/presentation/zhang-mengya)
- **PDF:** [https://www.usenix.org/system/files/sec20-zhang-mengya.pdf](https://www.usenix.org/system/files/sec20-zhang-mengya.pdf)
## An Ever-evolving Game: Evaluation of Real-world Attacks and Defenses in Ethereum Ecosystem.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#an-ever-evolving-game-evaluation-of-real-world-attacks-and-defenses-in-ethereum-ecosystem)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#an-ever-evolving-game-evaluation-of-real-world-attacks-and-defenses-in-ethereum-ecosystem)
### Authors
* Shunfan Zhou, Fudan University
* Zhemin Yang, Fudan University
* Jie Xiang, Fudan University
* Yinzhi Cao, Johns Hopkins University
* Min Yang, Fudan University
* Yuan Zhang, Fudan University
### Abstract
> Smart contract security has drawn much attention due to many severe incidents with huge ether and token losses. As a consequence, researchers have proposed to detect smart contract vulnerabilities via code analysis. However, code analysis only shows what contracts can be attacked, but not what have been attacked, and more importantly, what attacks have been prevented in the real world. In this paper, we present the first comprehensive measurement study to analyze real-world attacks and defenses adopted in the wild based on the transaction logs produced by uninstrumented Ethereum Virtual Machine (EVM). Specifically, our study decouples two important factors of an adversarial transaction-i.e., (i) an adversarial action exploiting the vulnerable contract and (ii) an adversarial consequence like ether or token transfers resulted from the action-for the analysis of attacks and defenses. The results of our study reveal a huge volume of attacks beyond what have been studied in the literature, e.g., those targeting new vulnerability types like airdrop hunting and those targeting zero-day variants of known vulnerabilities. Besides successful attacks, our study also shows attempted attacks that are prevented due to the deployments of defenses. As the nature of cyber-security, those defenses have also been evaded, mainly due to incomplete defense deployments. To summarize it, we believe that this is an ever-evolving game between adversaries obtaining illegal profits and defenders shielding their own contracts.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/zhou-shunfan](https://www.usenix.org/conference/usenixsecurity20/presentation/zhou-shunfan)
- **PDF:** [https://www.usenix.org/system/files/sec20-zhou-shunfan.pdf](https://www.usenix.org/system/files/sec20-zhou-shunfan.pdf)
## The 2020 Election: Remote Voting, Disinformation, and Audit.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#the-2020-election-remote-voting-disinformation-and-audit)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#the-2020-election-remote-voting-disinformation-and-audit)
### Authors
### Abstract
> By all accounts, the 2020 election will be historic. Perhaps the most emotionally charged election in the history of the United States is happening in the midst of a global pandemic. Never before has disinformation about the process of voting come directly out of the White House. The results of the election are likely to be challenged, and the legitimacy of the results brought into question. Never has there been more pressure to safeguard the public perception of fairness and integrity, while at the same time COVID19 will stretch the ability of election officials to run a smooth election. Vote by mail will be widely adopted, and there will be pressure to move to remote electronic voting. This panel will address the questions of how to protect the legitimacy of the process. The panelists will share their experiences working with election officials, and we will discuss technologies such as end-to-end voting and risk-limiting audits.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/panel-voting](https://www.usenix.org/conference/usenixsecurity20/presentation/panel-voting)
## Digital Contact Tracing.
🌍 **[English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#digital-contact-tracing)** | [简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#digital-contact-tracing)
### Authors
### Abstract
> COVID-19 pandemic, caused by the severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2) resulted in many deaths and halted large parts of the world economy. Since this virus spreads between people during close contact, one of the main tools in the fight against COVID-19 outbreak has been contact tracing, whose purpose is to trace and quarantine contacts of virus-positive persons. To facilitate this process, digital contact tracing solutions were recently proposed and deployed in a number of countries. Google and Apple further implemented support for contact tracing within Android and iOS. The deployment of such large scale tracing infrastructure raises a number of security, privacy, ethical and legal issues. The panelists will address these issues and describe their experiences in building and analyzing digital contact tracing systems.

### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/panel-contact-tracing](https://www.usenix.org/conference/usenixsecurity20/presentation/panel-contact-tracing)
