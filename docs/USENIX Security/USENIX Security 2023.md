# USENIX Security 2023
## PhyAuth: Physical-Layer Message Authentication for ZigBee Networks.
### Authors
* Ang Li, Arizona State University
* Jiawei Li, Arizona State University
* Dianqi Han, University of Texas at Arlington
* Yan Zhang, The University of Akron
* Tao Li, Indiana University–Purdue University Indianapolis
* Ting Zhu, The Ohio State University
* Yanchao Zhang, Arizona State University
### Abstract
> ZigBee is a popular wireless communication standard for Internet of Things (IoT) networks. Since each ZigBee network uses hop-by-hop network-layer message authentication based on a common network key, it is highly vulnerable to packet-injection attacks, in which the adversary exploits the compromised network key to inject arbitrary fake packets from any spoofed address to disrupt network operations and consume the network/device resources. In this paper, we present PhyAuth, a PHY hop-by-hop message authentication framework to defend against packet-injection attacks in ZigBee networks. The key idea of PhyAuth is to let each ZigBee transmitter embed into its PHY signals a PHY one-time password (called POTP) derived from a device-specific secret key and an efficient cryptographic hash function. An authentic POTP serves as the transmitter's PHY transmission permission for the corresponding packet. PhyAuth provides three schemes to embed, detect, and verify POTPs based on different features of ZigBee PHY signals. In addition, PhyAuth involves lightweight PHY signal processing and no change to the ZigBee protocol stack. Comprehensive USRP experiments confirm that PhyAuth can efficiently detect fake packets with very low false-positive and false-negative rates while having a negligible negative impact on normal data transmissions.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/li-ang](https://www.usenix.org/conference/usenixsecurity23/presentation/li-ang)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-li-ang.pdf](https://www.usenix.org/system/files/usenixsecurity23-li-ang.pdf)
## Time for Change: How Clocks Break UWB Secure Ranging.
### Authors
* Claudio Anliker, ETH Zurich
* Giovanni Camurati, ETH Zurich
* Srdjan Čapkun, ETH Zurich
### Abstract
> Due to its suitability for wireless ranging, Ultra-Wide Band (UWB) has gained traction over the past years. UWB chips have been integrated into consumer electronics and considered for security-relevant use cases, such as access control or contactless payments. However, several publications in the recent past have shown that it is difficult to protect the integrity of distance measurements on the physical layer. In this paper, we identify transceiver clock imperfections as a new, important parameter that has been widely ignored so far. We present Mix-Down and Stretch-and-Advance, two novel attacks against the current (IEEE 802.15.4z) and the upcoming (IEEE 802.15.4ab) UWB standard, respectively. We demonstrate Mix-Down on commercial chips and achieve distance reductions from 10 m to 0 m. For the Stretch-and-Advance attack, we show analytically that the current proposal of IEEE 802.15.4ab allows reductions of over 90 m. To prevent the attack, we propose and analyze an effective countermeasure.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/anliker](https://www.usenix.org/conference/usenixsecurity23/presentation/anliker)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-anliker.pdf](https://www.usenix.org/system/files/usenixsecurity23-anliker.pdf)
## Formal Analysis and Patching of BLE-SC Pairing.
### Authors
* Min Shi, Wuhan University
* Jing Chen, Wuhan University
* Kun He, Wuhan University
* Haoran Zhao, Wuhan University
* Meng Jia, Wuhan University
* Ruiying Du, Wuhan University
### Abstract
> Bluetooth Low Energy (BLE) is the mainstream Bluetooth standard and BLE Secure Connections (BLC-SC) pairing is a protocol that authenticates two Bluetooth devices and derives a shared secret key between them. Although BLE-SC pairing employs well-studied cryptographic primitives to guarantee its security, a recent study revealed a logic flaw in the protocol.  In this paper, we develop the first comprehensive formal model of the BLE-SC pairing protocol. Our model is compliant with the latest Bluetooth specification version 5.3 and covers all association models in the specification to discover attacks caused by the interplay between different association models. We also partly loosen the perfect cryptography assumption in traditional symbolic analysis approaches by designing a low-entropy key oracle to detect attacks caused by the poorly derived keys. Our analysis confirms two existing attacks and discloses a new attack. We propose a countermeasure to fix the flaws found in the BLE-SC pairing protocol and discuss the backward compatibility. Moreover, we extend our model to verify the countermeasure, and the results demonstrate its effectiveness in our extended model.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/shi-min](https://www.usenix.org/conference/usenixsecurity23/presentation/shi-min)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-shi-min.pdf](https://www.usenix.org/system/files/usenixsecurity23-shi-min.pdf)
## Framing Frames: Bypassing Wi-Fi Encryption by Manipulating Transmit Queues.
### Authors
* Domien Schepers, Northeastern University
* Aanjhan Ranganathan, Northeastern University
* Mathy Vanhoef, imec-DistriNet, KU Leuven
### Abstract
> Wi-Fi devices routinely queue frames at various layers of the network stack before transmitting, for instance, when the receiver is in sleep mode. In this work, we investigate how Wi-Fi access points manage the security context of queued frames. By exploiting power-save features, we show how to trick access points into leaking frames in plaintext, or encrypted using the group or an all-zero key. We demonstrate resulting attacks against several open-source network stacks. We attribute our findings to the lack of explicit guidance in managing security contexts of buffered frames in the 802.11 standards. The unprotected nature of the power-save bit in a frame’s header, which our work reveals to be a fundamental design flaw, also allows an adversary to force queue frames intended for a specific client resulting in its disconnection and trivially executing a denial-of-service attack. Furthermore, we demonstrate how an attacker can override and control the security context of frames that are yet to be queued. This exploits a design flaw in hotspot-like networks and allows the attacker to force an access points to encrypt yet to be queued frames using an adversary-chosen key, thereby bypassing Wi-Fi encryption entirely. Our attacks have a widespread impact as they affect various devices and operating systems (Linux, FreeBSD, iOS, and Android) and because they can be used to hijack TCP connections or intercept client and web traffic. Overall, we highlight the need for transparency in handling security context across the network stack layers and the challenges in doing so.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/schepers](https://www.usenix.org/conference/usenixsecurity23/presentation/schepers)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-schepers.pdf](https://www.usenix.org/system/files/usenixsecurity23-schepers.pdf)
## Abuse Vectors: A Framework for Conceptualizing IoT-Enabled Interpersonal Abuse.
### Authors
* Sophie Stephenson, University of Wisconsin--Madison
* Majed Almansoori, University of Wisconsin--Madison
* Pardis Emami-Naeini, Duke University
* Danny Yuxing Huang, New York University
* Rahul Chatterjee, University of Wisconsin--Madison
### Abstract
> Tech-enabled interpersonal abuse (IPA) is a pervasive problem. Abusers, often intimate partners, use tools such as spyware to surveil and harass victim-survivors. Unfortunately, anecdotal evidence suggests that smart, Internet-connected devices such as home thermostats, cameras, and Bluetooth item finders may similarly be used against victim-survivors of IPA. To tackle abuse involving smart devices, it is vital that we understand the ecosystem of smart devices that enable IPA. Thus, in this work, we conduct a large-scale qualitative analysis of the smart devices used in IPA. We systematically crawl Google Search results to uncover web pages discussing how abusers use smart devices to enact IPA. By analyzing these web pages, we identify 32 devices used for IPA and detail the varied strategies abusers use for spying and harassment via these devices. Then, we design a simple, yet powerful framework—abuse vectors—which conceptualizes IoT-enabled IPA as four overarching patterns: Covert Spying, Unauthorized Access, Repurposing, and Intended Use. Using this lens, we pinpoint the necessary solutions required to address each vector of IoT abuse and encourage the security community to take action.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/stephenson-vectors](https://www.usenix.org/conference/usenixsecurity23/presentation/stephenson-vectors)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-stephenson-vectors.pdf](https://www.usenix.org/system/files/usenixsecurity23-stephenson-vectors.pdf)
## The Digital-Safety Risks of Financial Technologies for Survivors of Intimate Partner Violence.
### Authors
* Rosanna Bellini, Cornell University
* Kevin Lee, Princeton University
* Megan A. Brown, Center for Social Media and Politics, New York University
* Jeremy Shaffer, Cornell University
* Rasika Bhalerao, Northeastern University
* Thomas Ristenpart, Cornell Tech
### Abstract
> Digital technologies play a growing role in exacerbating financial abuse for survivors of intimate partner violence (IPV). While abusers of IPV rarely employ advanced technological attacks that go beyond interacting via standard user interfaces, scant research has examined how consumer-facing financial technologies can facilitate or obstruct IPV-related attacks on a survivor's financial well-being. Through an audit of 13 mobile banking and 17 peer-to-peer payment smartphone applications and their associated usage policies, we simulated both close-range and remote attacks commonly used by IPV adversaries. We discover that mobile banking and peer-to-peer payment applications are generally ill-equipped to deal with user-interface bound (UI-bound) adversaries, permitting unauthorized access to logins, surreptitious surveillance, and, harassing messages and system prompts.To assess our discoveries, we interviewed 12 financial professionals who offer or oversee frontline services for vulnerable customers. While professionals expressed an interest in implementing mitigation strategies, they also highlight barriers to institutional approaches to intimate threats, and question professional responsibilities for digital safety. We conclude by providing recommendations for how digital financial service providers may better address UI-bound threats, and offer broader considerations for professional auditing and evaluation approaches to technology-facilitated abuse.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/bellini](https://www.usenix.org/conference/usenixsecurity23/presentation/bellini)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-bellini.pdf](https://www.usenix.org/system/files/usenixsecurity23-bellini.pdf)
## "It's the Equivalent of Feeling Like You're in Jail": Lessons from Firsthand and Secondhand Accounts of IoT-Enabled Intimate Partner Abuse.
### Authors
* Sophie Stephenson, University of Wisconsin—Madison
* Majed Almansoori, University of Wisconsin—Madison
* Pardis Emami-Naeini, Duke University
* Rahul Chatterjee, University of Wisconsin—Madison
### Abstract
> Victim-survivors of intimate partner violence (IPV) are facing a new technological threat: Abusers are leveraging IoT devices such as smart thermostats, hidden cameras, and GPS trackers to spy on and harass victim-survivors. Though prior work provides a foundation of what IoT devices can be involved in intimate partner violence, we lack a detailed understanding of the factors which contribute to this IoT abuse, the strategies victim-survivors use to mitigate IoT abuse, and the barriers they face along the way. Without this information, it is challenging to design effective solutions to stop IoT abuse.  To fill this gap, we interviewed 20 participants with firsthand or secondhand experience with IoT abuse. Our interviews captured 39 varied instances of IoT abuse, from surveillance with hidden GPS trackers to harassment with smart thermostats and light bulbs. They also surfaced 21 key barriers victim-survivors face while coping with IoT abuse. For instance, victim-survivors struggle to find proof of the IoT abuse they experience, which makes mitigations challenging. Even with proof, victim-survivors face barriers mitigating the abuse; for example, mitigation is all but impossible for victim-survivors living with an abusive partner. Our findings pinpoint several solutions to combat IoT abuse, including increased transparency of IoT devices, updated IoT access control protocols, and raising awareness of IoT abuse.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/stephenson-lessons](https://www.usenix.org/conference/usenixsecurity23/presentation/stephenson-lessons)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-stephenson-lessons.pdf](https://www.usenix.org/system/files/usenixsecurity23-stephenson-lessons.pdf)
## Sneaky Spy Devices and Defective Detectors: The Ecosystem of Intimate Partner Surveillance with Covert Devices.
### Authors
* Rose Ceccio, University of Wisconsin—Madison
* Sophie Stephenson, University of Wisconsin—Madison
* Varun Chadha, Capital One
* Danny Yuxing Huang, New York University
* Rahul Chatterjee, University of Wisconsin—Madison
### Abstract
> Recent anecdotal evidence suggests that abusers have begun to use covert spy devices such as nanny cameras, item trackers, and audio recorders to spy on and stalk their partners. Currently, it is difficult to combat this type of intimate partner surveillance (IPS) because we lack an understanding of the prevalence and characteristics of commercial spy devices. Additionally, it is unclear whether existing devices, apps, and tools designed to detect covert devices are effective. We observe that many spy devices and detectors can be found on mainstream retailers. Thus, in this work, we perform a systematic survey of spy devices and detection tools sold through popular US retailers. We gather 2,228 spy devices, 1,313 detection devices, and 51 detection apps, then study a representative sample through qualitative analysis as well as in-lab evaluations.Our results show a bleak picture of the IPS ecosystem. Not only can commercial spy devices easily be used for IPS, but many of them are advertised for use in IPS and other covert surveillance. On the other hand, commercial detection devices and apps are all but defective, and while recent academic detection systems show promise, they require much refinement before they can be useful to survivors. We urge the security community to take action by designing practical, usable detection tools to detect hidden spy devices.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/ceccio](https://www.usenix.org/conference/usenixsecurity23/presentation/ceccio)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-ceccio.pdf](https://www.usenix.org/system/files/usenixsecurity23-ceccio.pdf)
## Towards a General Video-based Keystroke Inference Attack.
### Authors
* Zhuolin Yang, University of Chicago
* Yuxin Chen, University of Chicago
* Zain Sarwar, University of Chicago
* Hadleigh Schwartz, Columbia University
* Ben Y. Zhao, University of Chicago
* Haitao Zheng, University of Chicago
### Abstract
> A large collection of research literature has identified the privacy risks of keystroke inference attacks that use statistical models to extract content typed onto a keyboard. Yet existing attacks cannot operate in realistic settings, and rely on strong assumptions of labeled training data, knowledge of keyboard layout, carefully placed sensors or data from other side-channels.  This paper describes experiences developing and evaluating a general, video-based keystroke inference attack that operates in common public settings using a single commodity camera phone, with no pretraining, no keyboard knowledge, no local sensors, and no side-channels. We show that using a self-supervised approach, noisy finger tracking data from a video can be processed, labeled and filtered to train DNN keystroke inference models that operate accurately on the same video. Using IRB approved user studies, we validate attack efficacy across a variety of environments, keyboards, and content, and users with different typing behaviors and abilities.  Our project website is located at: https://sandlab.cs.uchicago.edu/keystroke/.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/yang-zhuolin](https://www.usenix.org/conference/usenixsecurity23/presentation/yang-zhuolin)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-yang-zhuolin.pdf](https://www.usenix.org/system/files/usenixsecurity23-yang-zhuolin.pdf)
## Going through the motions: AR/VR keylogging from user head motions.
### Authors
* Carter Slocum, University of California, Riverside
* Yicheng Zhang, University of California, Riverside
* Nael Abu-Ghazaleh, University of California, Riverside
* Jiasi Chen, University of California, Riverside
### Abstract
> Augmented Reality/Virtual Reality (AR/VR) are the next step in the evolution of ubiquitous computing after personal computers to mobile devices. Applications of AR/VR continue to grow, including education and virtual workspaces, increasing opportunities for users to enter private text, such as passwords or sensitive corporate information. In this work, we show that there is a serious security risk of typed text in the foreground being inferred by a background application, without requiring any special permissions. The key insight is that a user’s head moves in subtle ways as she types on a virtual keyboard, and these motion signals are sufficient for inferring the text that a user types. We develop a system, TyPose, that extracts these signals and automatically infers words or characters that a victim is typing. Once the sensor signals are collected, TyPose uses machine learning to segment the motion signals in time to determine word/character boundaries, and also perform inference on the words/characters themselves. Our experimental evaluation on commercial AR/VR headsets demonstrate the feasibility of this attack, both in situations where multiple users’ data is used for training (82% top-5 word classification accuracy) or when the attack is personalized to a particular victim (92% top-5 word classification accuracy). We also show that first-line defenses of reducing the sampling rate or precision of head tracking are ineffective, suggesting that more sophisticated mitigations are needed.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/slocum](https://www.usenix.org/conference/usenixsecurity23/presentation/slocum)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-slocum.pdf](https://www.usenix.org/system/files/usenixsecurity23-slocum.pdf)
## Auditory Eyesight: Demystifying μs-Precision Keystroke Tracking Attacks on Unconstrained Keyboard Inputs.
### Authors
* Yazhou Tu, University of Louisiana at Lafayette
* Liqun Shan, University of Louisiana at Lafayette
* Md Imran Hossen, University of Louisiana at Lafayette
* Sara Rampazzi, University of Florida
* Kevin Butler, University of Florida
* Xiali Hei, University of Louisiana at Lafayette
### Abstract
> In various scenarios from system login to writing emails, documents, and forms, keyboard inputs carry alluring data such as passwords, addresses, and IDs. Due to commonly existing non-alphabetic inputs, punctuation, and typos, users' natural inputs rarely contain only constrained, purely alphabetic keys/words. This work studies how to reveal unconstrained keyboard inputs using auditory interfaces.  Audio interfaces are not intended to have the capability of light sensors such as cameras to identify compactly located keys. Our analysis shows that effectively distinguishing the keys can require a fine localization precision level of keystroke sounds close to the range of microseconds. This work (1) explores the limits of audio interfaces to distinguish keystrokes, (2) proposes a μs-level customized signal processing and analysis-based keystroke tracking approach that takes into account the mechanical physics and imperfect measuring of keystroke sounds, (3) develops the first acoustic side-channel attack study on unconstrained keyboard inputs that are not purely alphabetic keys/words and do not necessarily follow known sequences in a given dictionary or training dataset, and (4) reveals the threats of non-line-of-sight keystroke sound tracking. Our results indicate that, without relying on vision sensors, attacks using limited-resolution audio interfaces can reveal unconstrained inputs from the keyboard with a fairly sharp and bendable "auditory eyesight."
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/tu](https://www.usenix.org/conference/usenixsecurity23/presentation/tu)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-tu.pdf](https://www.usenix.org/system/files/usenixsecurity23-tu.pdf)
## Watch your Watch: Inferring Personality Traits from Wearable Activity Trackers.
### Authors
* Noé Zufferey, University of Lausanne, Switzerland
* Mathias Humbert, University of Lausanne, Switzerland
* Romain Tavenard, University of Rennes, CNRS, LETG, France
* Kévin Huguenin, University of Lausanne, Switzerland
### Abstract
> Wearable devices, such as wearable activity trackers (WATs), are increasing in popularity. Although they can help to improve one's quality of life, they also raise serious privacy issues. One particularly sensitive type of information has recently attracted substantial attention, namely personality, as it provides a means to influence individuals (e.g., voters in the Cambridge Analytica scandal). This paper presents the first empirical study to show a significant correlation between WAT data and personality traits (Big Five). We conduct an experiment with 200+ participants. The ground truth was established by using the NEO-PI-3 questionnaire. The participants' step count, heart rate, battery level, activities, sleep time, etc. were collected for four months. By following a principled machine-learning approach, the participants' personality privacy was quantified. Our results demonstrate that WATs data brings valuable information to infer the openness, extraversion, and neuroticism personality traits. We further study the importance of the different features (i.e., data types) and found that step counts play a key role in the inference of extraversion and neuroticism, while openness is more related to heart rate.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/zufferey](https://www.usenix.org/conference/usenixsecurity23/presentation/zufferey)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-zufferey.pdf](https://www.usenix.org/system/files/usenixsecurity23-zufferey.pdf)
## Squint Hard Enough: Attacking Perceptual Hashing with Adversarial Machine Learning.
### Authors
* Jonathan Prokos, Johns Hopkins University
* Neil Fendley, Johns Hopkins University Applied Physics Laboratory
* Matthew Green, Johns Hopkins University
* Roei Schuster, Vector Institute
* Eran Tromer, Tel Aviv University and Columbia University
* Tushar Jois, Johns Hopkins University
* Yinzhi Cao, Johns Hopkins University
### Abstract
> Many online communications systems use perceptual hash matching systems to detect illicit files in user content. These systems employ specialized perceptual hash functions such as Microsoft's PhotoDNA or Facebook's PDQ to produce a compact digest of an image file that can be approximately compared to a database of known illicit-content digests. Recently, several proposals have suggested that hash-based matching systems be incorporated into client-side and end-to-end encrypted (E2EE) systems: in these designs, files that register as illicit content will be reported to the provider, while the remaining content will be sent confidentially. By using perceptual hashing to determine confidentiality guarantees, this new setting significantly changes the function of existing perceptual hashing — thus motivating the need to evaluate these functions from an adversarial perspective, using their perceptual capabilities against them. For example, an attacker may attempt to trigger a match on innocuous, but politically-charged, content in an attempt to stifle speech. In this work we develop threat models for perceptual hashing algorithms in an adversarial setting, and present attacks against the two most widely deployed algorithms: PhotoDNA and PDQ. Our results show that it is possible to efficiently generate targeted second-preimage attacks in which an attacker creates a variant of some source image that matches some target digest. As a complement to this main result, we also further investigate the production of images that facilitate detection avoidance attacks, continuing a recent investigation of Jain et al. Our work shows that existing perceptual hash functions are likely insufficiently robust to survive attacks on this new setting.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/prokos](https://www.usenix.org/conference/usenixsecurity23/presentation/prokos)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-prokos.pdf](https://www.usenix.org/system/files/usenixsecurity23-prokos.pdf)
## How to Cover up Anomalous Accesses to Electronic Health Records.
### Authors
* Xiaojun Xu, University of Illinois at Urbana-Champaign
* Qingying Hao, University of Illinois at Urbana-Champaign
* Zhuolin Yang, University of Illinois at Urbana-Champaign
* Bo Li, University of Illinois at Urbana-Champaign
* David Liebovitz, Northwestern University
* Gang Wang, University of Illinois at Urbana-Champaign
* Carl A. Gunter, University of Illinois at Urbana-Champaign
### Abstract
> Illegitimate access detection systems in hospital logs perform post hoc detection instead of runtime access restriction to allow widespread access in emergencies. We study the effectiveness of adversarial machine learning strategies against such detection systems on a large-scale dataset consisting of a year of access logs at a major hospital. We study a range of graph-based anomaly detection systems, including heuristic-based and Graph Neural Network (GNN)-based models. We find that evasion attacks, in which covering accesses (that is, accesses made to disguise a target access) are injected during evaluation period of the target access, can successfully fool the detection system. We also show that such evasion attacks can transfer among different detection algorithms. On the other hand, we find that poisoning attacks, in which adversaries inject covering accesses during the training phase of the model, do not effectively mislead the trained detection system unless the attacker is given unrealistic capabilities such as injecting over 10,000 accesses or imposing a high weight on the covering accesses in the training algorithm. To examine the generalizability of the results, we also apply our attack against a state-of-the-art detection model on the LANL network lateral movement dataset, and observe similar conclusions.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/xu-xiaojun](https://www.usenix.org/conference/usenixsecurity23/presentation/xu-xiaojun)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-xu-xiaojun.pdf](https://www.usenix.org/system/files/usenixsecurity23-xu-xiaojun.pdf)
## KENKU: Towards Efficient and Stealthy Black-box Adversarial Attacks against ASR Systems.
### Authors
* Xinghui Wu, Xi'an Jiaotong University
* Shiqing Ma, University of Massachusetts Amherst
* Chao Shen, Xi'an Jiaotong University
* Chenhao Lin, Xi'an Jiaotong University
* Qian Wang, Wuhan University
* Qi Li, Tsinghua University
* Yuan Rao, Xi'an Jiaotong University
### Abstract
> Prior researchers show that existing automatic speech recognition (ASR) systems are vulnerable to adversarial examples. Most existing adversarial attacks against ASR systems are either white- or gray-box, limiting their practical usage in the real world. Some black-box attacks also assume the knowledge of output probability vectors to infer output distribution. Other black-box attacks leverage inefficient heavyweight processes, i.e., training auxiliary models or estimating gradients. Moreover, they require input-specific and manual hyperparameter tuning to improve the attack success rate against a specific ASR system. Despite such a heavyweight tuning process, nearly or even more than half of the generated adversarial examples are perceptible to humans.This paper designs KENKU, an efficient and stealthy black-box adversarial attack framework against ASRs, supporting hidden voice command and integrated command attacks. It optimizes the novel acoustic feature loss and perturbation loss, based on Mel-frequency Cepstral Coefficients (MFCC). Both loss values can be calculated locally, avoiding training auxiliary models or estimating gradients, making the attack efficient. Furthermore, we introduce a hyperparameter in optimization that balances the attack effectiveness and imperceptibility automatically. KENKU uses the binary search algorithm to find its optimal value. We evaluated our prototype on eight real-world systems (including five digital and three physical attacks) and compared KENKU with five state-of-the-art works. Results show that KENKU can outperform existing works in the attack performance.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/wu-xinghui](https://www.usenix.org/conference/usenixsecurity23/presentation/wu-xinghui)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-wu-xinghui.pdf](https://www.usenix.org/system/files/usenixsecurity23-wu-xinghui.pdf)
## Tubes Among Us: Analog Attack on Automatic Speaker Identification.
### Authors
* Shimaa Ahmed, University of Wisconsin-Madison
* Yash Wani, University of Wisconsin-Madison
* Ali Shahin Shamsabadi, Alan Turing Institute
* Mohammad Yaghini, University of Toronto and Vector Institute
* Ilia Shumailov, Vector Institute and University of Oxford
* Nicolas Papernot, University of Toronto and Vector Institute
* Kassem Fawaz, University of Wisconsin-Madison
### Abstract
> Recent years have seen a surge in the popularity of acoustics-enabled personal devices powered by machine learning. Yet, machine learning has proven to be vulnerable to adversarial examples. A large number of modern systems protect themselves against such attacks by targeting artificiality, i.e., they deploy mechanisms to detect the lack of human involvement in generating the adversarial examples. However, these defenses implicitly assume that humans are incapable of producing meaningful and targeted adversarial examples. In this paper, we show that this base assumption is wrong. In particular, we demonstrate that for tasks like speaker identification, a human is capable of producing analog adversarial examples directly with little cost and supervision: by simply speaking through a tube, an adversary reliably impersonates other speakers in eyes of ML models for speaker identification. Our findings extend to a range of other acoustic-biometric tasks such as liveness detection, bringing into question their use in security-critical settings in real life, such as phone banking.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/ahmed-shimaa](https://www.usenix.org/conference/usenixsecurity23/presentation/ahmed-shimaa)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-ahmed-shimaa.pdf](https://www.usenix.org/system/files/usenixsecurity23-ahmed-shimaa.pdf)
## Efficient Unbalanced Private Set Intersection Cardinality and User-friendly Privacy-preserving Contact Tracing.
### Authors
* Mingli Wu, The University of Hong Kong
* Tsz Hon Yuen, The University of Hong Kong
### Abstract
> An unbalanced private set intersection cardinality (PSI-CA) protocol is a protocol to securely get the intersection cardinality of two sets X and Y without disclosing anything else, in which |Y| < |X|. In this paper, we propose efficient unbalanced PSI-CA protocols based on fully homomorphic encryption (FHE). To handle the long item issue in PSI-CA protocols, we invent two techniques: virtual Bloom filter and polynomial links. The former can encode a long item into several independent shorter ones. The latter fragments each long item into shorter slices and builds links between them. Our FHE-based unbalanced PSI-CA protocols have the lowest communication complexity O(|Y|log(|X|), which is much cheaper than the existing balanced PSI-CA protocols with O(|Y|+|X|). When |X|=228 and |Y|=2048, our protocols are 172× ∼ 412× cheaper than the best balanced PSI-CA protocol. Our protocols can be easily modified into unbalanced PSI protocols. Compared with Cong et al. (CCS'21), one of our unbalanced PSI protocols can save 42.04% ∼ 58.85% communication costs and accelerate the receiver querying time. We apply our lightweight unbalanced PSI-CA protocols to design a privacy-preserving contact tracing system. We demonstrate that our system outperforms existing schemes in terms of security and performance.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/wu-mingli](https://www.usenix.org/conference/usenixsecurity23/presentation/wu-mingli)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-wu-mingli.pdf](https://www.usenix.org/system/files/usenixsecurity23-wu-mingli.pdf)
## Near-Optimal Oblivious Key-Value Stores for Efficient PSI, PSU and Volume-Hiding Multi-Maps.
### Authors
* Alex, New York University
* er Bienstock, New York University
* Sarvar Patel, Google
* Joon Young Seo, Google
* Kevin Yeo, Google and Columbia University
### Abstract
> In this paper, we study oblivious key-value stores (OKVS) that enable encoding n key-value pairs into length m encodings while hiding the input keys. The goal is to obtain high rate, n/m, with efficient encoding and decoding algorithms. We present RB-OKVS built on random band matrices that obtains near-optimal rates as high as 0.97 whereas prior works could only achieve rates up to 0.81 with similar encoding times.Using RB-OKVS, we obtain state-of-the-art protocols for private set intersection (PSI) and union (PSU). Our semi-honest PSI has up to 12% smaller communication and 13% reductions in monetary cost with slightly larger computation. We also obtain similar improvements for both malicious and circuit PSI. For PSU, our protocol obtains improvements of up to 22% in communication, 40% in computation and 21% in monetary cost. In general, we obtain the most communication- and cost-efficient protocols for all the above primitives.Finally, we present the first connection between OKVS and volume-hiding encrypted multi-maps (VH-EMM) where the goal is to outsource storage of multi-maps while hiding the number of values associated with each key (i.e., volume). We present RB-MM with 16% smaller storage, 5x faster queries and 8x faster setup than prior works.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/bienstock](https://www.usenix.org/conference/usenixsecurity23/presentation/bienstock)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-bienstock.pdf](https://www.usenix.org/system/files/usenixsecurity23-bienstock.pdf)
## Distance-Aware Private Set Intersection.
### Authors
* Anrin Chakraborti, Duke University
* Giulia Fanti, Carnegie Mellon University
* Michael K. Reiter, Duke University
### Abstract
> Private set intersection (PSI) allows two mutually untrusting parties to compute an intersection of their sets, without revealing information about items that are not in the intersection. This work introduces a PSI variant called distance-aware PSI (DA-PSI) for sets whose elements lie in a metric space. DAPSI returns pairs of items that are within a specified distance threshold of each other. This paper puts forward DA-PSI constructions for two metric spaces: (i) Minkowski distance of order 1 over the set of integers (i.e., for integers a and b, their distance is |a−b|); and (ii) Hamming distance over the set of binary strings of length ℓ. In the Minkowski DA-PSI protocol, the communication complexity scales logarithmically in the distance threshold and linearly in the set size. In the Hamming DA-PSI protocol, the communication volume scales quadratically in the distance threshold and is independent of the dimensionality of string length ℓ. Experimental results with real applications confirm that DA-PSI provides more effective matching at lower cost than naïve solutions.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/chakraborti-intersection](https://www.usenix.org/conference/usenixsecurity23/presentation/chakraborti-intersection)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-chakraborti-intersection.pdf](https://www.usenix.org/system/files/usenixsecurity23-chakraborti-intersection.pdf)
## Linear Private Set Union from Multi-Query Reverse Private Membership Test.
### Authors
* Cong Zhang, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences; School of Cyber Security, University of Chinese Academy of Sciences
* Yu Chen, School of Cyber Science and Technology, Shandong University; State Key Laboratory of Cryptology; Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University
* Weiran Liu, Alibaba Group
* Min Zhang, School of Cyber Science and Technology, Shandong University; State Key Laboratory of Cryptology; Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University
* Dongdai Lin, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences; School of Cyber Security, University of Chinese Academy of Sciences
### Abstract
> Private set union (PSU) protocol enables two parties, each holding a set, to compute the union of their sets without revealing anything else to either party. So far, there are two known approaches for constructing PSU protocols. The first mainly depends on additively homomorphic encryption (AHE), which is generally inefficient since it needs to perform a non-constant number of homomorphic computations on each item. The second is mainly based on oblivious transfer and symmetric-key operations, which is recently proposed by Kolesnikov et al. (ASIACRYPT 2019). It features good practical performance, which is several orders of magnitude faster than the first one. However, neither of these two approaches is optimal in the sense that their computation and communication complexity are not both O(n), where n is the size of the set. Therefore, the problem of constructing the optimal PSU protocol remains open. In this work, we resolve this open problem by proposing a generic framework of PSU from oblivious transfer and a newly introduced protocol called multi-query reverse private membership test (mq-RPMT). We present two generic constructions of mq-RPMT. The first is based on symmetric-key encryption and general 2PC techniques. The second is based on re-randomizable public-key encryption. Both constructions lead to PSU with linear computation and communication complexity.  We implement our two PSU protocols and compare them with the state-of-the-art PSU. Experiments show that our PKE-based protocol has the lowest communication of all schemes, which is 3.7-14.8× lower depending on set size. The running time of our PSU scheme is 1.2-12× faster than that of state-of-the-art depending on network environments.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-cong](https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-cong)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-zhang-cong.pdf](https://www.usenix.org/system/files/usenixsecurity23-zhang-cong.pdf)
## Auditing Frameworks Need Resource Isolation: A Systematic Study on the Super Producer Threat to System Auditing and Its Mitigation.
### Authors
* Peng Jiang, MOE Key Lab of HCST, School of Computer Science, Peking University
* Ruizhe Huang, MOE Key Lab of HCST, School of Computer Science, Peking University
* Ding Li, MOE Key Lab of HCST, School of Computer Science, Peking University
* Yao Guo, MOE Key Lab of HCST, School of Computer Science, Peking University
* Xiangqun Chen, MOE Key Lab of HCST, School of Computer Science, Peking University
* Jianhai Luan, Huawei Technologies
* Yuxin Ren, Huawei Technologies
* Xinwei Hu, Huawei Technologies
### Abstract
> System auditing is a crucial technique for detecting APT attacks. However, attackers may try to compromise the system auditing frameworks to conceal their malicious activities. In this paper, we present a comprehensive and systematic study of the super producer threat in auditing frameworks, which enables attackers to either corrupt the auditing framework or paralyze the entire system. We analyze that the main cause of the super producer threat is the lack of data isolation in the centralized architecture of existing solutions. To address this threat, we propose a novel auditing framework, NODROP, which isolates provenance data generated by different processes with a threadlet-based architecture design. Our evaluation demonstrates that NODROP can ensure the integrity of the auditing frameworks while achieving an average 6.58% higher application overhead compared to vanilla Linux and 6.30% lower application overhead compared to a state-ofthe-art commercial auditing framework, Sysdig across eight different hardware configurations.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/jiang-peng](https://www.usenix.org/conference/usenixsecurity23/presentation/jiang-peng)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-jiang-peng.pdf](https://www.usenix.org/system/files/usenixsecurity23-jiang-peng.pdf)
## AIRTAG: Towards Automated Attack Investigation by Unsupervised Learning with Log Texts.
### Authors
* Hailun Ding, Rutgers University
* Juan Zhai, University of Massachusetts Amherst
* Yuhong Nan, Sun Yat-sen University
* Shiqing Ma, University of Massachusetts Amherst
### Abstract
> The success of deep learning (DL) techniques has led to their adoption in many fields, including attack investigation, which aims to recover the whole attack story from logged system provenance by analyzing the causality of system objects and subjects. Existing DL-based techniques, e.g., state-of-the-art one ATLAS, follow the design of traditional forensics analysis pipelines. They train a DL model with labeled causal graphs during offline training to learn benign and malicious patterns. During attack investigation, they first convert the log data to causal graphs and leverage the trained DL model to determine if an entity is part of the whole attack chain or not. This design does not fully release the power of DL. Existing works like BERT have demonstrated the superiority of leveraging unsupervised pre-trained models, achieving stateof-the-art results without costly and error-prone data labeling. Prior DL-based attacks investigation has overlooked this opportunity. Moreover, generating and operating the graphs are time-consuming and not necessary. Based on our study, these operations take around 96% of the total analysis time, resulting in low efficiency. In addition, abstracting individual log entries to graph nodes and edges makes the analysis more coarse-grained, leading to inaccurate and unstable results. We argue that log texts provide the same information as causal graphs but are fine-grained and easier to analyze.This paper presents AIRTAG, a novel attack investigation system. It is powered by unsupervised learning with log texts. Instead of training on labeled graphs, AIRTAG leverages unsupervised learning to train a DL model on the log texts. Thus, we do not require the heavyweight and error-prone process of manually labeling logs. During the investigation, the DL model directly takes log files as inputs and predicts entities related to the attack. We evaluated AIRTAG on 19 scenarios, including single-host and multi-host attacks. Our results show the superior efficiency and effectiveness of AIRTAG compared to existing solutions. By removing graph generation and operations, AIRTAG is 2.5x faster than the state-of-the-art method, ATLAS, with 9.0% fewer false positives and 16.5% more true positives on average.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/ding-hailun-airtag](https://www.usenix.org/conference/usenixsecurity23/presentation/ding-hailun-airtag)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-ding-hailun-airtag.pdf](https://www.usenix.org/system/files/usenixsecurity23-ding-hailun-airtag.pdf)
## Rethinking System Audit Architectures for High Event Coverage and Synchronous Log Availability.
### Authors
* Varun G, Harvard University
* hi, Harvard University
* Sarbartha Banerjee, University of Texas at Austin
* Aniket Agrawal, Arizona State University
* Adil Ahmad, Arizona State University
* Sangho Lee, Microsoft Research
* Marcus Peinado, Microsoft Research
### Abstract
> Once an attacker compromises the operating system, the integrity and availability of unprotected system audit logs still kept on the computer becomes uncertain. In this paper, we ask the question: can recently proposed audit systems aimed at tackling such an attacker provide enough information for forensic analysis? Our findings suggest that the answer is no, because the inefficient logging pipelines of existing audit systems prohibit generating log entries for a vast majority of attack events and protecting logs as soon as they are created (i.e., synchronously). This leads to a low attack event coverage within generated logs, while allowing attackers to tamper with unprotected logs after a compromise. To counter these limitations, we present OMNILOG, a system audit architecture that composes an end-to-end efficient logging pipeline where logs are rapidly generated and protected using a set of platform-agnostic security abstractions. This allows OMNILOG to enable high attack event coverage and synchronous log availability, while even outperforming the state-of-the-art audit systems that achieve neither property.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/gandhi](https://www.usenix.org/conference/usenixsecurity23/presentation/gandhi)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-gandhi.pdf](https://www.usenix.org/system/files/usenixsecurity23-gandhi.pdf)
## Improving Logging to Reduce Permission Over-Granting Mistakes.
### Authors
* Bingyu Shen, University of California, San Diego
* Tianyi Shan, University of California, San Diego
* Yuanyuan Zhou, University of California, San Diego
### Abstract
> Access control configurations are gatekeepers to block unwelcome access to sensitive data. Unfortunately, system administrators (sysadmins) sometimes over-grant permissions when resolving unintended access-deny issues reported by legitimate users, which may open up security vulnerabilities for attackers. One of the primary reasons is that modern software does not provide informative logging to guide sysadmins to understand the reported problems. This paper makes one of the first attempts (to the best of our knowledge) to help developers improve log messages in order to help sysadmins correctly understand and fix access-deny issues without over-granting permissions. First, we conducted an observation study to understand the current practices of access-deny logging in the server software. Our study shows that many access-control program locations do not have any log messages; and a large percentage of existing log messages lack useful information to guide sysadmins to correctly understand and fix the issues. On top of our observations, we built SECLOG, which uses static analysis to automatically help developers find missing access-deny log locations and identify relevant information at the log location. We evaluated SECLOG with ten widely deployed server applications. Overall, SECLOG identified 380 new log statements for access-deny cases, and also enhanced 550 existing access-deny log messages with diagnostic information. We have reported 114 log statements to the developers of these applications, and so far 70 have been accepted into their main branches. We also conducted a user study with sysadmins (n=32) on six real-world access-deny issues. SECLOG can reduce the number of insecure fixes from 27 to 1, and also improve the diagnosis time by 64.2% on average.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/shen-bingyu-logging](https://www.usenix.org/conference/usenixsecurity23/presentation/shen-bingyu-logging)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-shen-bingyu-logging.pdf](https://www.usenix.org/system/files/usenixsecurity23-shen-bingyu-logging.pdf)
## Diving into Robocall Content with SnorCall.
### Authors
* Sathvik Prasad, North Carolina State University
* Trevor Dunlap, North Carolina State University
* Alex, North Carolina State University
* er Ross, North Carolina State University
* Bradley Reaves, North Carolina State University
### Abstract
> Unsolicited bulk telephone calls — termed "robocalls" — nearly outnumber legitimate calls, overwhelming telephone users. While the vast majority of these calls are illegal, they are also ephemeral. Although telephone service providers, regulators, and researchers have ready access to call metadata, they do not have tools to investigate call content at the vast scale required. This paper presents SnorCall, a framework that scalably and efficiently extracts content from robocalls. SnorCall leverages the Snorkel framework that allows a domain expert to write simple labeling functions to classify text with high accuracy. We apply SnorCall to a corpus of transcripts covering 232,723 robocalls collected over a 23-month period. Among many other findings, SnorCall enables us to obtain first estimates on how prevalent different scam and legitimate robocall topics are, determine which organizations are referenced in these calls, estimate the average amounts solicited in scam calls, identify shared infrastructure between campaigns, and monitor the rise and fall of election-related political calls. As a result, we demonstrate how regulators, carriers, anti-robocall product vendors, and researchers can use SnorCall to obtain powerful and accurate analyses of robocall content and trends that can lead to better defenses.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/prasad](https://www.usenix.org/conference/usenixsecurity23/presentation/prasad)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-prasad.pdf](https://www.usenix.org/system/files/usenixsecurity23-prasad.pdf)
## UCBlocker: Unwanted Call Blocking Using Anonymous Authentication.
### Authors
* Changlai Du, Virginia Tech
* Hexuan Yu, Virginia Tech
* Yang Xiao, University of Kentucky
* Y. Thomas Hou, Virginia Tech
* Angelos D. Keromytis, Georgia Institute of Technology
* Wenjing Lou, Virginia Tech
### Abstract
> Telephone users are receiving more and more unwanted calls including spam and scam calls because of the transfer-without-verification nature of global telephone networks, which allows anyone to call any other numbers. To avoid unwanted calls, telephone users often ignore or block all incoming calls from unknown numbers, resulting in the missing of legitimate calls from new callers. This paper takes an end-to-end perspective to present a solution to block unwanted calls while allowing users to define the policies of acceptable calls. The proposed solution involves a new infrastructure based on anonymous credentials, which enables anonymous caller authentication and policy definition. Our design decouples caller authentication and call session initiation and introduces a verification code to interface and bind the two processes. This design minimizes changes to telephone networks, reduces latency to call initiation, and eliminates the need for a call-time data channel. A prototype of the system is implemented to evaluate its feasibility.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/du](https://www.usenix.org/conference/usenixsecurity23/presentation/du)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-du.pdf](https://www.usenix.org/system/files/usenixsecurity23-du.pdf)
## Combating Robocalls with Phone Virtual Assistant Mediated Interaction.
### Authors
* Sharbani P, Georgia Institute of Technology
* it, Georgia Institute of Technology
* Krishanu Sarker, Georgia State University
* Roberto Perdisci, University of Georgia and Georgia Institute of Technology
* Mustaque Ahamad, Georgia Institute of Technology
* Diyi Yang, Georgia Institute of Technology
### Abstract
> Mass robocalls affect millions of people on a daily basis. Unfortunately, most current defenses against robocalls rely on phone blocklists and are ineffective against caller ID spoofing. To enable detection and blocking of spoofed robocalls, we propose a NLP based smartphone virtual assistant that automatically vets incoming calls. Similar to a human assistant, the virtual assistant picks up an incoming call and uses machine learning models to interact with the caller to determine if the call source is a human or a robocaller. It interrupts a user by ringing the phone only when the call is determined to be not from a robocaller. Security analysis performed by us shows that such a system can stop current and more sophisticated robocallers that might emerge in the future. We also conduct a user study that shows that the virtual assistant can preserve phone call user experience.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/pandit](https://www.usenix.org/conference/usenixsecurity23/presentation/pandit)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-pandit.pdf](https://www.usenix.org/system/files/usenixsecurity23-pandit.pdf)
## BotScreen: Trust Everybody, but Cut the Aimbots Yourself.
### Authors
* Minyeop Choi, KAIST
* Gihyuk Ko, Cyber Security Research Center at KAIST and Carnegie Mellon University
* Sang Kil Cha, KAIST and Cyber Security Research Center at KAIST
### Abstract
> Aimbots, which assist players to kill opponents in FirstPerson Shooter (FPS) games, pose a significant threat to the game industry. Although there has been significant research effort to automatically detect aimbots, existing works suffer from either high server-side overhead or low detection accuracy. In this paper, we present a novel aimbot detection design and implementation that we refer to as BotScreen, which is a client-side aimbot detection solution for a popular FPS game, Counter-Strike: Global Offensive (CS:GO). BotScreen is the first in detecting aimbots in a distributed fashion, thereby minimizing the server-side overhead. It also leverages a novel deep learning model to precisely detect abnormal behaviors caused by using aimbots. We demonstrate the effectiveness of BotScreen in terms of both accuracy and performance on CS:GO. We make our tool as well as our dataset publicly available to support open science.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/choi](https://www.usenix.org/conference/usenixsecurity23/presentation/choi)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-choi.pdf](https://www.usenix.org/system/files/usenixsecurity23-choi.pdf)
## "If I could do this, I feel anyone could: " The Design and Evaluation of a Secondary Authentication Factor Manager.
### Authors
* Garrett Smith, Brigham Young University
* Tarun Yadav, Brigham Young University
* Jonathan Dutson, Brigham Young University
* Scott Ruoti, University of Tennessee Knoxville
* Kent Seamons, Brigham Young University
### Abstract
> Two-factor authentication (2FA) defends against account compromise by protecting an account with both a password—the primary authentication factor—and a device or resource that is hard to steal—the secondary authentication factor (SAF). However, prior research shows that users need help registering their SAFs with websites and successfully enabling 2FA. To address these issues, we propose the concept of a SAF manager that helps users manage SAFs through their entire life cycle: setup, authentication, removal, replacement, and auditing. We design and implement two proof-of-concept prototypes. In a between-subjects user study (N=60), we demonstrate that our design improves users' ability to correctly and quickly setup and remove a SAF on their accounts. Qualitative results show that users responded very positively to the SAF manager and were enthusiastic about its ability to help them rapidly replace a SAF. Furthermore, our SAF manager prevented fatal errors that users experienced when not using the manager.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/smith](https://www.usenix.org/conference/usenixsecurity23/presentation/smith)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-smith.pdf](https://www.usenix.org/system/files/usenixsecurity23-smith.pdf)
## Exploring Privacy and Incentives Considerations in Adoption of COVID-19 Contact Tracing Apps.
### Authors
* Oshrat Ayalon, Max Planck Institute for Software Systems
* Dana Turjeman, Reichman University
* Elissa M. Redmiles, Max Planck Institute for Software Systems
### Abstract
> Mobile Health (mHealth) apps, such as COVID-19 contact tracing and other health-promoting technologies, help support personal and public health efforts in response to the pandemic and other health concerns. However, due to the sensitive data handled by mHealth apps, and their potential effect on people's lives, their widespread adoption demands trust in a multitude of aspects of their design. In this work, we report on a series of conjoint analyses (N = 1,521) to investigate how COVID-19 contact tracing apps can be better designed and marketed to improve adoption. Specifically, with a novel design of randomization on top of a conjoint analysis, we investigate people's privacy considerations relative to other attributes when they are contemplating contact-tracing app adoption. We further explore how their adoption considerations are influenced by deployment factors such as offering extrinsic incentives (money, healthcare) and user factors such as receptiveness to contact-tracing apps and sociodemographics. Our results, which we contextualize and synthesize with prior work, offer insight into the most desired digital contact-tracing products (e.g., app features) and how they should be deployed (e.g., with incentives) and targeted to different user groups who have heterogeneous preferences.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/ayalon](https://www.usenix.org/conference/usenixsecurity23/presentation/ayalon)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-ayalon.pdf](https://www.usenix.org/system/files/usenixsecurity23-ayalon.pdf)
## Exploring Tenants' Preferences of Privacy Negotiation in Airbnb.
### Authors
* Zixin Wang, Zhejiang University
* Danny Yuxing Huang, New York University
* Yaxing Yao, University of Maryland, Baltimore County
### Abstract
> Literature suggests the unmatched or conflicting privacy needs between users and bystanders in smart homes due to their different privacy concerns and priorities. A promising approach to mitigate such conflicts is through negotiation. Yet, it is not clear whether bystanders have privacy negotiation needs and if so, what factors may influence their negotiation intention and how to better support the negotiation to achieve their privacy goals. To answer these questions, we conducted a vignette study that varied across three categorical factors, including device types, device location, and duration of stay with 867 participants in the context of Airbnb. We further examined our participants' preferences regarding with whom, when, how, and why they would like to negotiate their privacy. Our findings showed that device type remained the only factor that significantly influenced our participants' negotiation intention. Additionally, we found our participants' other preferences, such as they preferred to contact Airbnb hosts first to convey their privacy needs through asynchronous channels (e.g., messages and emails). We summarized design implications to fulfill tenants' privacy negotiation needs.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/wang-zixin](https://www.usenix.org/conference/usenixsecurity23/presentation/wang-zixin)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-wang-zixin.pdf](https://www.usenix.org/system/files/usenixsecurity23-wang-zixin.pdf)
## Know Your Cybercriminal: Evaluating Attacker Preferences by Measuring Profile Sales on an Active, Leading Criminal Market for User Impersonation at Scale.
### Authors
* Michele Campobasso, Eindhoven University of Technology
* Luca Allodi, Eindhoven University of Technology
### Abstract
> In this paper we exploit market features proper of a leading Russian cybercrime market for user impersonation at scale to evaluate attacker preferences when purchasing stolen user profiles, and the overall economic activity of the market. We run our data collection over a period of $161$ days and collect data on a sample of $1'193$ sold user profiles out of $11'357$ advertised products in that period and their characteristics. We estimate a market trade volume of up to approximately $700$ profiles per day, corresponding to estimated daily sales of up to $4'000$ USD and an overall market revenue within the observation period between $540k$ and $715k$ USD. We find profile provision to be rather stable over time and mainly focused on European profiles, whereas actual profile acquisition varies significantly depending on other profile characteristics. Attackers' interests focus disproportionally on profiles of certain types, including those originating in North America and featuring Crypto resources.  We model and evaluate the relative importance of different profile characteristics in the final decision of an attacker to purchase a profile, and discuss implications for defenses and risk evaluation.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/campobasso](https://www.usenix.org/conference/usenixsecurity23/presentation/campobasso)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-campobasso.pdf](https://www.usenix.org/system/files/usenixsecurity23-campobasso.pdf)
## HorusEye: A Realtime IoT Malicious Traffic Detection Framework using Programmable Switches.
### Authors
* Yutao Dong, Tsinghua Shenzhen International Graduate School, Shenzhen, China; Peng Cheng Laboratory, Shenzhen, China
* Qing Li, Peng Cheng Laboratory, Shenzhen, China
* Kaidong Wu, Tsinghua Shenzhen International Graduate School, Shenzhen, China; Peng Cheng Laboratory, Shenzhen, China
* Ruoyu Li, Tsinghua Shenzhen International Graduate School, Shenzhen, China; Peng Cheng Laboratory, Shenzhen, China
* Dan Zhao, Peng Cheng Laboratory, Shenzhen, China
* Gareth Tyson, Hong Kong University of Science and Technology (GZ), Guangzhou, China
* Junkun Peng, Tsinghua Shenzhen International Graduate School, Shenzhen, China; Peng Cheng Laboratory, Shenzhen, China
* Yong Jiang, Tsinghua Shenzhen International Graduate School, Shenzhen, China; Peng Cheng Laboratory, Shenzhen, China
* Shutao Xia, Tsinghua Shenzhen International Graduate School, Shenzhen, China; Peng Cheng Laboratory, Shenzhen, China
* Mingwei Xu, Tsinghua University, Beijing, China
### Abstract
> The ever-growing volume of IoT traffic brings challenges to IoT anomaly detection systems. Existing anomaly detection systems perform all traffic detection on the control plane, which struggles to scale to the growing rates of traffic. In this paper, we propose HorusEye, a high throughput and accurate two-stage anomaly detection framework. In the first stage, preliminary burst-level anomaly detection is implemented on the data plane to exploit its high-throughput capability (e.g., 100Gbps). We design an algorithm that converts a trained iForest model into white list matching rules, and implement the first unsupervised model that can detect unseen attacks on the data plane. The suspicious traffic is then reported to the control plane for further investigation. To reduce the false-positive rate, the control plane carries out the second stage, where more thorough anomaly detection is performed over the reported suspicious traffic using flow-level features and a deep detection model. We implement a prototype of HorusEye and evaluate its performance through a comprehensive set of experiments. The experimental results illustrate that the data plane can detect 99% of the anomalies and offload 76% of the traffic from the control plane. Compared with the state-of-the-art schemes, our framework has superior throughput and detection performance.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/dong-yutao](https://www.usenix.org/conference/usenixsecurity23/presentation/dong-yutao)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-dong-yutao.pdf](https://www.usenix.org/system/files/usenixsecurity23-dong-yutao.pdf)
## An Input-Agnostic Hierarchical Deep Learning Framework for Traffic Fingerprinting.
### Authors
* Jian Qu, Xi’an Jiaotong University
* Xiaobo Ma, Xi’an Jiaotong University
* Jianfeng Li, Xi’an Jiaotong University
* Xiapu Luo, The Hong Kong Polytechnic University
* Lei Xue, Sun Yat-sen University
* Junjie Zhang, Wright State University
* Zhenhua Li, Tsinghua University
* Li Feng, Southwest Jiaotong University
* Xiaohong Guan, Xi'an Jiaotong University
### Abstract
> Deep learning has proven to be promising for traffic fingerprinting that explores features of packet timing and sizes. Although well-known for automatic feature extraction, it is faced with a gap between the heterogeneousness of the traffic (i.e., raw packet timing and sizes) and the homogeneousness of the required input (i.e., input-specific). To address this gap, we design an input-agnostic hierarchical deep learning framework for traffic fingerprinting that can hierarchically abstract comprehensive heterogeneous traffic features into homogeneous vectors seamlessly digestible by existing neural networks for further classification. The extensive evaluation demonstrates that our framework, with just one paradigm, not only supports heterogeneous traffic input but also achieves better or comparable performance compared to state-of-the-art methods black across a wide range of traffic fingerprinting tasks.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/qu](https://www.usenix.org/conference/usenixsecurity23/presentation/qu)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-qu.pdf](https://www.usenix.org/system/files/usenixsecurity23-qu.pdf)
## Subverting Website Fingerprinting Defenses with Robust Traffic Representation.
### Authors
* Meng Shen, School of Cyberspace Science and Technology, Beijing Institute of Technology
* Kexin Ji, School of Computer Science, Beijing Institute of Technology
* Zhenbo Gao, School of Computer Science, Beijing Institute of Technology
* Qi Li, Institute for Network Sciences and Cyberspace, Tsinghua University
* Liehuang Zhu, School of Cyberspace Science and Technology, Beijing Institute of Technology
* Ke Xu, Department of Computer Science and Technology, Tsinghua University
### Abstract
> Anonymity networks, e.g., Tor, are vulnerable to various website fingerprinting (WF) attacks, which allows attackers to perceive user privacy on these networks. However, the defenses developed recently can effectively interfere with WF attacks, e.g., by simply injecting dummy packets. In this paper, we propose a novel WF attack called Robust Fingerprinting (RF), which enables an attacker to fingerprint the Tor traffic under various defenses. Specifically, we develop a robust traffic representation method that generates Traffic Aggregation Matrix (TAM) to fully capture key informative features leaked from Tor traces. By utilizing TAM, an attacker can train a CNN-based classifier that learns common high-level traffic features uncovered by different defenses. We conduct extensive experiments with public real-world datasets to compare RF with state-of-the-art (SOTA) WF attacks. The closed- and open-world evaluation results demonstrate that RF significantly outperforms the SOTA attacks. In particular, RF can effectively fingerprint Tor traffic under the SOTA defenses with an average accuracy improvement of 8.9% over the best existing attack (i.e., Tik-Tok).
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/shen-meng](https://www.usenix.org/conference/usenixsecurity23/presentation/shen-meng)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-shen-meng.pdf](https://www.usenix.org/system/files/usenixsecurity23-shen-meng.pdf)
## Rosetta: Enabling Robust TLS Encrypted Traffic Classification in Diverse Network Environments with TCP-Aware Traffic Augmentation.
### Authors
* Renjie Xie, Tsinghua University
* Jiahao Cao, Tsinghua University
* Enhuan Dong, Tsinghua University and Quan Cheng Laboratory
* Mingwei Xu, Tsinghua University and Quan Cheng Laboratory
* Kun Sun, George Mason University
* Qi Li, Tsinghua University
* Licheng Shen, Tsinghua University
* Menghao Zhang, Tsinghua University and Kuaishou Technology
### Abstract
> As the majority of Internet traffic is encrypted by the Transport Layer Security (TLS) protocol, recent advances leverage Deep Learning (DL) models to conduct encrypted traffic classification by automatically extracting complicated and informative features from the packet length sequences of TLS flows. Though existing DL models have reported to achieve excellent classification results on encrypted traffic, we conduct a comprehensive study to show that they all have significant performance degradation in real diverse network environments. After systematically studying the reasons, we discover the packet length sequences of flows may change dramatically due to various TCP mechanisms for reliable transmission in varying network environments. Thereafter, we propose Rosetta to enable robust TLS encrypted traffic classification for existing DL models. It leverages TCP-aware traffic augmentation mechanisms and self-supervised learning to understand implict TCP semantics, and hence extracts robust features of TLS flows. Extensive experiments show that Rosetta can significantly improve the classification performance of existing DL models on TLS traffic in diverse network environments.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/xie](https://www.usenix.org/conference/usenixsecurity23/presentation/xie)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-xie.pdf](https://www.usenix.org/system/files/usenixsecurity23-xie.pdf)
## Towards Targeted Obfuscation of Adversarial Unsafe Images using Reconstruction and Counterfactual Super Region Attribution Explainability.
### Authors
* Mazal Bethany, The University of Texas at San Antonio
* Andrew Seong, The University of Texas at San Antonio
* Samuel Henrique Silva, The University of Texas at San Antonio
* Nicole Beebe, The University of Texas at San Antonio
* Nishant Vishwamitra, The University of Texas at San Antonio
* Peyman Najafirad, The University of Texas at San Antonio
### Abstract
> Online Social Networks (OSNs) are increasingly used by perpetrators to harass their targets via the exchange of unsafe images. Furthermore, perpetrators have resorted to using advanced techniques like adversarial attacks to evade the detection of such images. To defend against this threat, OSNs use AI/ML-based detectors to flag unsafe images. However, these detectors cannot explain the regions of unsafe content for the obfuscation and inspection of such regions, and are also critically vulnerable to adversarial attacks that fool their detection. In this work, we first conduct an in-depth investigation into state-of-the-art explanation techniques and commercially-available unsafe image detectors and find that they are severely deficient against adversarial unsafe images. To address these deficiencies we design a new system that performs targeted obfuscation of unsafe adversarial images on social media using reconstruction to remove adversarial perturbations and counterfactual super region attribution explainability to explain unsafe image segments, and created a prototype called ProjectName. We demonstrate the effectiveness of our system with a large-scale evaluation on three common unsafe images: Sexually Explicit, Cyberbullying, and Self-Harm. Our evaluations of ProjectName on more than 64,000 real-world unsafe OSN images, and unsafe images found in the wild such as sexually explicit celebrity deepfakes and self-harm images show that it significantly neutralizes the threat of adversarial unsafe images, by safely obfuscating 91.47% of such images.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/bethany](https://www.usenix.org/conference/usenixsecurity23/presentation/bethany)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-bethany.pdf](https://www.usenix.org/system/files/usenixsecurity23-bethany.pdf)
## TPatch: A Triggered Physical Adversarial Patch.
### Authors
* Wenjun Zhu, USSLAB, Zhejiang University
* Xiaoyu Ji, USSLAB, Zhejiang University
* Yushi Cheng, BNRist, Tsinghua University
* Shibo Zhang, USSLAB, Zhejiang University
* Wenyuan Xu, USSLAB, Zhejiang University
### Abstract
> Autonomous vehicles increasingly utilize the vision-based perception module to acquire information about driving environments and detect obstacles. Correct detection and classification are important to ensure safe driving decisions. Existing works have demonstrated the feasibility of fooling the perception models such as object detectors and image classifiers with printed adversarial patches. However, most of them are indiscriminately offensive to every passing autonomous vehicle. In this paper, we propose TPatch, a physical adversarial patch triggered by acoustic signals. Unlike other adversarial patches, TPatch remains benign under normal circumstances but can be triggered to launch a hiding, creating or altering attack by a designed distortion introduced by signal injection attacks towards cameras. To avoid the suspicion of human drivers and make the attack practical and robust in the real world, we propose a content-based camouflage method and an attack robustness enhancement method to strengthen it. Evaluations with three object detectors, YOLO V3/V5 and Faster R-CNN, and eight image classifiers demonstrate the effectiveness of TPatch in both the simulation and the real world. We also discuss possible defenses at the sensor, algorithm, and system levels.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/zhu](https://www.usenix.org/conference/usenixsecurity23/presentation/zhu)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-zhu.pdf](https://www.usenix.org/system/files/usenixsecurity23-zhu.pdf)
## CAPatch: Physical Adversarial Patch against Image Captioning Systems.
### Authors
* Shibo Zhang, USSLAB, Zhejiang University
* Yushi Cheng, BNRist, Tsinghua University
* Wenjun Zhu, USSLAB, Zhejiang University
* Xiaoyu Ji, USSLAB, Zhejiang University
* Wenyuan Xu, USSLAB, Zhejiang University
### Abstract
> The fast-growing surveillance systems will make image captioning, i.e., automatically generating text descriptions of images, an essential technique to process the huge volumes of videos efficiently, and correct captioning is essential to ensure the text authenticity. While prior work has demonstrated the feasibility of fooling computer vision models with adversarial patches, it is unclear whether the vulnerability can lead to incorrect captioning, which involves natural language processing after image feature extraction. In this paper, we design CAPatch, a physical adversarial patch that can result in mistakes in the final captions, i.e., either create a completely different sentence or a sentence with keywords missing, against multi-modal image captioning systems. To make CAPatch effective and practical in the physical world, we propose a detection assurance and attention enhancement method to increase the impact of CAPatch and a robustness improvement method to address the patch distortions caused by image printing and capturing. Evaluations on three commonly-used image captioning systems (Show-and-Tell, Self-critical Sequence Training: Att2in, and Bottom-up Top-down) demonstrate the effectiveness of CAPatch in both the digital and physical worlds, whereby volunteers wear printed patches in various scenarios, clothes, lighting conditions. With a size of 5% of the image, physically-printed CAPatch can achieve continuous attacks with an attack success rate higher than 73.1% over a video recorder.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-shibo](https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-shibo)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-zhang-shibo.pdf](https://www.usenix.org/system/files/usenixsecurity23-zhang-shibo.pdf)
## Hard-label Black-box Universal Adversarial Patch Attack.
### Authors
* Guanhong Tao, Purdue University
* Shengwei An, Purdue University
* Siyuan Cheng, Purdue University
* Guangyu Shen, Purdue University
* Xiangyu Zhang, Purdue University
### Abstract
> Deep learning models are widely used in many applications. Despite their impressive performance, the security aspect of these models has raised serious concerns. Universal adversarial patch attack is one of the security problems in deep learning, where an attacker can generate a patch trigger on pre-trained models using gradient information. Whenever the trigger is pasted on an input, the model will misclassify it to a target label. Existing attacks are realized with access to the model's gradient or its output confidence. In this paper, we propose a novel attack method HardBeat that generates universal adversarial patches with access only to the predicted label. It utilizes historical data points during the search for an optimal patch trigger and performs focused/directed search through a novel importance-aware gradient approximation to explore the neighborhood of the current trigger. The evaluation is conducted on four popular image datasets with eight models and two online commercial services. The experimental results show HardBeat is significantly more effective than eight baseline attacks, having more than twice high-ASR (attack success rate) patch triggers (>90%) on local models and 17.5% higher ASR on online services. Three existing advanced defense techniques fail to defend against HardBeat.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/tao](https://www.usenix.org/conference/usenixsecurity23/presentation/tao)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-tao.pdf](https://www.usenix.org/system/files/usenixsecurity23-tao.pdf)
## Anatomy of a High-Profile Data Breach: Dissecting the Aftermath of a Crypto-Wallet Case.
### Authors
* Svetlana Abramova, Universität Innsbruck
* Rainer Böhme, Universität Innsbruck
### Abstract
> Media reports show an alarming increase of data breaches at providers of cybersecurity products and services. Since the exposed records may reveal security-relevant data, such incidents cause undue burden and create the risk of re-victimization to individuals whose personal data gets exposed. In pursuit of examining a broad spectrum of the downstream effects on victims, we surveyed 104 persons who purchased specialized devices for the secure storage of crypto-assets and later fell victim to a breach of customer data. Our case study reveals common nuisances (i.e., spam, scams, phishing e-mails) as well as previously unseen attack vectors (e.g., involving tampered devices), which are possibly tied to the breach. A few victims report losses of digital assets as a form of the harm. We find that our participants exhibit heightened safety concerns, appear skeptical about litigation efforts, and demonstrate the ability to differentiate between the quality of the security product and the circumstances of the breach. We derive implications for the cybersecurity industry at large, and point out methodological challenges in data breach research.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/abramova](https://www.usenix.org/conference/usenixsecurity23/presentation/abramova)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-abramova.pdf](https://www.usenix.org/system/files/usenixsecurity23-abramova.pdf)
## Glimpse: On-Demand PoW Light Client with Constant-Size Storage for DeFi.
### Authors
* Giulia Scaffino, TU Wien and Christian Doppler Laboratory Blockchain Technologies for the Internet of Things
* Lukas Aumayr, TU Wien
* Zeta Avarikioti, TU Wien
* Matteo Maffei, TU Wien and Christian Doppler Laboratory Blockchain Technologies for the Internet of Things
### Abstract
> Cross-chain communication is instrumental in unleashing the full potential of blockchain technologies, as it allows users and developers to exploit the unique design features and the profit opportunities of different existing blockchains. The majority of interoperability solutions are provided by centralized exchanges and bridge protocols based on a trusted majority, both introducing undesirable trust assumptions compared to native blockchain assets. Hence, increasing attention has been given to decentralized solutions: Light and super-light clients paved the way for chain relays, which allow verifying on a blockchain the state of another blockchain by respectively verifying and storing a linear and logarithmic amount of data. Unfortunately, relays turn out to be inefficient in terms of computational costs, storage, or compatibility. We introduce Glimpse, an on-demand bridge that leverages a novel on-demand light client construction with only constant on-chain storage, cost, and computational overhead. Glimpse is expressive, enabling a plethora of DeFi and offchain applications such as lending, pegs, proofs of oracle attestations, and betting hubs. Glimpse also remains compatible with blockchains featuring a limited scripting language such as the Liquid Network (a pegged sidechain of Bitcoin), for which we present a concrete instantiation. We prove Glimpse security in the Universal Composability (UC) framework and further conduct an economic analysis. We evaluate the cost of Glimpse for Bitcoin-like chains: verifying a simple transaction has at most 700 bytes of on-chain overhead, resulting in a one-time fee of $3, only twice as much as a standard Bitcoin transaction.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/scaffino](https://www.usenix.org/conference/usenixsecurity23/presentation/scaffino)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-scaffino.pdf](https://www.usenix.org/system/files/usenixsecurity23-scaffino.pdf)
## Mixed Signals: Analyzing Ground-Truth Data on the Users and Economics of a Bitcoin Mixing Service.
### Authors
* Fieke Miedema, Delft University of Technology
* Kelvin Lubbertsen, Delft University of Technology
* Verena Schrama, Delft University of Technology
* Rolf van Wegberg, Delft University of Technology
### Abstract
> Bitcoin mixing is a commodity, mostly offered in the underground economy, selling anonymity in the bitcoin ecosystem. Its popularity is rather remarkable, as transactions initiated by its users run through wallets of a centralized service where personal identifiable information is collected in the mixing process, without any prior knowledge of data retention policies. This leaves us to wonder if users resort to strategies to mitigate these risks—like the usage of IP proxy services—or test the service with smaller transactions to identify scam services at low' costs. In this paper, we explore unique ground-truth data capturing 15,574 mixing transactions, initiated by 8,838 users, totaling US $45M worth of bitcoins mixed through BestMixer between July 2018 and June 2019. We find that user adoption of risk mitigation strategies is limited, while transaction volumes users entrust BestMixer are high and usage is frequent and recurrent—with 23% of users returning. Our analysis shows that only 61% of all transactions used some form of IP address obfuscation—i.e., VPN or VPS usage. We discuss possible explanations for these findings, including how information asymmetries and the role of mixers in the process of cashing-out criminal proceeds might force users to accept the risks associated with bitcoin mixing. Furthermore, we address the implications of our findings for the broader cryptocurrency security ecosystem.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/miedema](https://www.usenix.org/conference/usenixsecurity23/presentation/miedema)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-miedema.pdf](https://www.usenix.org/system/files/usenixsecurity23-miedema.pdf)
## Is Your Wallet Snitching On You? An Analysis on the Privacy Implications of Web3.
### Authors
* Christof Ferreira Torres, ETH Zurich
* Fiona Willi, ETH Zurich
* Shweta Shinde, ETH Zurich
### Abstract
> With the recent hype around the Metaverse and NFTs, Web3 is getting more and more popular. The goal of Web3 is to decentralize the web via decentralized applications. Wallets play a crucial role as they act as an interface between these applications and the user. Wallets such as MetaMask are being used by millions of users nowadays. Unfortunately, Web3 is often advertised as more secure and private. However, decentralized applications as well as wallets are based on traditional technologies, which are not designed with privacy of users in mind. In this paper, we analyze the privacy implications that Web3 technologies such as decentralized applications and wallets have on users. To this end, we build a framework that measures exposure of wallet information. First, we study whether information about installed wallets is being used to track users online. We analyze the top 100K websites and find evidence of 1,325 websites running scripts that probe whether users have wallets installed in their browser. Second, we measure whether decentralized applications and wallets leak the user's unique wallet address to third-parties. We intercept the traffic of 616 decentralized applications and 100 wallets and find over 2000 leaks across 211 applications and more than 300 leaks across 13 wallets. Our study shows that Web3 poses a threat to users' privacy and requires new designs towards more privacy-aware wallet architectures.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/torres](https://www.usenix.org/conference/usenixsecurity23/presentation/torres)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-torres.pdf](https://www.usenix.org/system/files/usenixsecurity23-torres.pdf)
## Capstone: A Capability-based Foundation for Trustless Secure Memory Access.
### Authors
* Jason Zhijingcheng Yu, National University of Singapore
* Conrad Watt, University of Cambridge
* Aditya Badole, National University of Singapore
* Trevor E. Carlson, National University of Singapore
* Prateek Saxena, National University of Singapore
### Abstract
> Capability-based memory isolation is a promising new architectural primitive. Software can access low-level memory only via capability handles rather than raw pointers, which provides a natural interface to enforce security restrictions. Existing architectural capability designs such as CHERI provide spatial safety, but fail to extend to other memory models that security-sensitive software designs may desire. In this paper, we propose Capstone, a more expressive architectural capability design that supports multiple existing memory isolation models in a trustless setup, i.e., without relying on trusted software components. We show how Capstone is well-suited for environments where privilege boundaries are fluid (dynamically extensible), memory sharing/delegation are desired both temporally and spatially, and where such needs are to be balanced with availability concerns. Capstone can also be implemented efficiently. We present an implementation sketch and through evaluation show that its overhead is below 50% in common use cases. We also prototype a functional emulator for Capstone and use it to demonstrate the runnable implementations of six real-world memory models without trusted software components: three types of enclave-based TEEs, a thread scheduler, a memory allocator, and Rust-style memory safety—all within the interface of Capstone.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/yu-jason](https://www.usenix.org/conference/usenixsecurity23/presentation/yu-jason)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-yu-jason.pdf](https://www.usenix.org/system/files/usenixsecurity23-yu-jason.pdf)
## FloatZone: Accelerating Memory Error Detection using the Floating Point Unit.
### Authors
* Floris Gorter, Vrije Universiteit Amsterdam
* Enrico Barberis, Vrije Universiteit Amsterdam
* Raphael Isemann, Vrije Universiteit Amsterdam
* Erik van der Kouwe, Vrije Universiteit Amsterdam
* Cristiano Giuffrida, Vrije Universiteit Amsterdam
* Herbert Bos, Vrije Universiteit Amsterdam
### Abstract
> Memory sanitizers are powerful tools to detect spatial and temporal memory errors, such as buffer overflows and use-after-frees. Fuzzers and software testers often rely on these tools to discover the presence of bugs. Sanitizers, however, incur significant runtime overhead. For example, AddressSanitizer (ASan), the most widely used sanitizer, incurs a slowdown of 2x. The main source of this overhead consists of the sanitizer checks, which involve at least a memory lookup, a comparison, and a conditional branch instruction. Applying these checks to confirm the validity of the memory accesses in a program can greatly slow down the execution. We introduce FloatZone, a compiler-based sanitizer to detect spatial and temporal memory errors in C/C++ programs using lightweight checks that leverage the Floating Point Unit (FPU). We show that the combined effects of "lookup, compare, and branch" can be achieved with a single floating point addition that triggers an underflow exception in the case of a memory violation. This novel method to detect illegal accesses greatly improves performance by avoiding the drawbacks of traditional comparisons: it prevents branch mispredictions, enables higher instruction-level parallelism due to offloading to the FPU, and also reduces the cache miss rate due to the lack of shadow memory. Our evaluation shows that FloatZone significantly outperforms existing systems, with just 37% runtime overhead on SPEC CPU2006 and CPU2017. Moreover, we measure an average 2.87x increase in fuzzing throughput compared to the state of the art. Finally, we confirm that FloatZone offers detection capabilities comparable with ASan on the Juliet test suite and a collection of OSS-Fuzz bugs.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/gorter](https://www.usenix.org/conference/usenixsecurity23/presentation/gorter)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-gorter.pdf](https://www.usenix.org/system/files/usenixsecurity23-gorter.pdf)
## PUMM: Preventing Use-After-Free Using Execution Unit Partitioning.
### Authors
* Carter Yagemann, The Ohio State University
* Simon P. Chung, Georgia Institute of Technology
* Brendan Saltaformaggio, Georgia Institute of Technology
* Wenke Lee, Georgia Institute of Technology
### Abstract
> Critical software is written in memory unsafe languages that are vulnerable to use-after-free and double free bugs. This has led to proposals to secure memory allocators by strategically deferring memory reallocations long enough to make such bugs unexploitable. Unfortunately, existing solutions suffer from high runtime and memory overheads. Seeking a better solution, we propose to profile programs to identify units of code that correspond to the handling of individual tasks. With the intuition that little to no data should flow between separate tasks at runtime, reallocation of memory freed by the currently executing unit is deferred until after its completion; just long enough to prevent use-after-free exploitation. To demonstrate the efficacy of our design, we implement a prototype for Linux, PUMM, which consists of an offline profiler and an online enforcer that transparently wraps standard libraries to protect C/C++ binaries. In our evaluation of 40 real-world and 3,000 synthetic vulnerabilities across 26 programs, including complex multi-threaded cases like the Chakra JavaScript engine, PUMM successfully thwarts all real-world exploits, and only allows 4 synthetic exploits, while reducing memory overhead by 52.0% over prior work and incurring an average runtime overhead of 2.04%.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/yagemann](https://www.usenix.org/conference/usenixsecurity23/presentation/yagemann)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-yagemann.pdf](https://www.usenix.org/system/files/usenixsecurity23-yagemann.pdf)
## MTSan: A Feasible and Practical Memory Sanitizer for Fuzzing COTS Binaries.
### Authors
* Xingman Chen, Tsinghua University
* Yinghao Shi, Institute of Information Engineering, Chinese Academy of Sciences
* Zheyu Jiang, Tsinghua University
* Yuan Li, Tsinghua University
* Ruoyu Wang, Arizona State University
* Haixin Duan, Tsinghua University and Zhongguancun Laboratory
* Haoyu Wang, Huazhong University of Science and Technology
* Chao Zhang, Tsinghua University and Zhongguancun Laboratory
### Abstract
> Fuzzing has been widely adopted for finding vulnerabilities in programs, especially when source code is not available. But the effectiveness and efficiency of binary fuzzing are curtailed by the lack of memory sanitizers for binaries. This lack of binary sanitizers is due to the information loss in compiling programs and challenges in binary instrumentation. In this paper, we present a feasible and practical hardware-assisted memory sanitizer, MTSan, for binary fuzzing. MTSan can detect both spatial and temporal memory safety violations at runtime. It adopts a novel progressive object recovery scheme to recover objects in binaries and uses a customized binary rewriting solution to instrument binaries with the memory-tagging-based memory safety sanitizing policy. Further, MTSan uses a hardware feature, ARM Memory Tagging Extension (MTE) to significantly reduce its runtime overhead. We implemented a prototype of MTSan on AArch64 and systematically evaluated its effectiveness and performance. Our evaluation results show that MTSan could detect more memory safety violations than existing binary sanitizers whiling introducing much lower runtime and memory overhead.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/chen-xingman](https://www.usenix.org/conference/usenixsecurity23/presentation/chen-xingman)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-chen-xingman.pdf](https://www.usenix.org/system/files/usenixsecurity23-chen-xingman.pdf)
## Hidden Reality: Caution, Your Hand Gesture Inputs in the Immersive Virtual World are Visible to All!
### Authors
* Sindhu Reddy Kalathur Gopal, University of Wyoming
* Diksha Shukla, University of Wyoming
* James David Wheelock, University of Colorado Boulder
* Nitesh Saxena, Texas A&M University, College Station
### Abstract
> Text entry is an inevitable task while using Virtual Reality (VR) devices in a wide range of applications such as remote learning, gaming, and virtual meeting. VR users enter passwords/pins to log in to their user accounts in various applications and type regular text to compose emails or browse the internet. The typing activity on VR devices is believed to be resistant to direct observation attacks as the virtual screen in an immersive environment is not directly visible to others present in physical proximity. This paper presents a video-based side-channel attack, Hidden Reality (HR), that shows – although the virtual screen in VR devices is not in direct sight of adversaries, the indirect observations might get exploited to steal the user’s private information. The Hidden Reality (HR) attack utilizes video clips of the user’s hand gestures while they type on the virtual screen to decipher the typed text in various key entry scenarios on VR devices including typed pins and passwords. Experimental analysis performed on a large corpus of 368 video clips show that the Hidden Reality model can successfully decipher an average of over 75% of the text inputs. The high success rate of our attack model led us to conduct a user study to understand the user’s behavior and perception of security in virtual reality. The analysis showed that over 95% of users were not aware of any security threats on VR devices and believed the immersive environments to be secure from digital attacks. Our attack model challenges users’ false sense of security in immersive environments and emphasizes the need for more stringent security solutions in VR space.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/gopal](https://www.usenix.org/conference/usenixsecurity23/presentation/gopal)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-gopal.pdf](https://www.usenix.org/system/files/usenixsecurity23-gopal.pdf)
## LocIn: Inferring Semantic Location from Spatial Maps in Mixed Reality.
### Authors
* Habiba Farrukh, Purdue University
* Reham Mohamed, Purdue University
* Aniket Nare, Purdue University
* Antonio Bianchi, Purdue University
* Z. Berkay Celik, Purdue University
### Abstract
> Mixed reality (MR) devices capture 3D spatial maps of users' surroundings to integrate virtual content into their physical environment. Existing permission models implemented in popular MR platforms allow all MR apps to access these 3D spatial maps without explicit permission. Unmonitored access of MR apps to these 3D spatial maps poses serious privacy threats to users as these maps capture detailed geometric and semantic characteristics of users' environments. In this paper, we present LocIn, a new location inference attack that exploits these detailed characteristics embedded in 3D spatial maps to infer a user's indoor location type. LocIn develops a multi-task approach to train an end-to-end encoder-decoder network that extracts a spatial feature representation for capturing contextual patterns of the user's environment. LocIn leverages this representation to detect 3D objects and surfaces and integrates them into a classification network with a novel unified optimization function to predict the user's indoor location. We demonstrate LocIn attack on spatial maps collected from three popular MR devices. We show that LocIn infers a user's location type with an average 84.1% accuracy.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/farrukh](https://www.usenix.org/conference/usenixsecurity23/presentation/farrukh)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-farrukh.pdf](https://www.usenix.org/system/files/usenixsecurity23-farrukh.pdf)
## Unique Identification of 50, 000+ Virtual Reality Users from Head & Hand Motion Data.
### Authors
* Vivek Nair, UC Berkeley
* Wenbo Guo, UC Berkeley
* Justus Mattern, RWTH Aachen
* Rui Wang, UC Berkeley
* James F. O'Brien, UC Berkeley
* Louis Rosenberg, Unanimous AI
* Dawn Song, UC Berkeley
### Abstract
> With the recent explosive growth of interest and investment in virtual reality (VR) and the so-called "metaverse," public attention has rightly shifted toward the unique security and privacy threats that these platforms may pose. While it has long been known that people reveal information about themselves via their motion, the extent to which this makes an individual globally identifiable within virtual reality has not yet been widely understood. In this study, we show that a large number of real VR users (N=55,541) can be uniquely and reliably identified across multiple sessions using just their head and hand motion relative to virtual objects. After training a classification model on 5 minutes of data per person, a user can be uniquely identified amongst the entire pool of 50,000+ with 94.33% accuracy from 100 seconds of motion, and with 73.20% accuracy from just 10 seconds of motion. This work is the first to truly demonstrate the extent to which biomechanics may serve as a unique identifier in VR, on par with widely used biometrics such as facial or fingerprint recognition.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/nair-identification](https://www.usenix.org/conference/usenixsecurity23/presentation/nair-identification)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-nair-identification.pdf](https://www.usenix.org/system/files/usenixsecurity23-nair-identification.pdf)
## Exploring User Reactions and Mental Models Towards Perceptual Manipulation Attacks in Mixed Reality.
### Authors
* Kaiming Cheng, University of Washington
* Jeffery F. Tian, University of Washington
* Tadayoshi Kohno, University of Washington
* Franziska Roesner, University of Washington
### Abstract
> Perceptual Manipulation Attacks (PMA) involve manipulating users’ multi-sensory (e.g., visual, auditory, haptic) perceptions of the world through Mixed Reality (MR) content, in order to influence users' judgments and following actions. For example, a MR driving application that is expected to show safety-critical output might also (maliciously or unintentionally) overlay the wrong signal on a traffic sign, misleading the user into slamming on the brake. While current MR technology is sufficient to create such attacks, little research has been done to understand how users perceive, react to, and defend against such potential manipulations. To provide a foundation for understanding and addressing PMA in MR, we conducted an in-person study with 21 participants. We developed three PMA in which we focused on attacking three different perceptions: visual, auditory, and situational awareness. Our study first investigates how user reactions are affected by evaluating their performance on “microbenchmark'' tasks under benchmark and different attack conditions. We observe both primary and secondary impacts from attacks, later impacting participants' performance even under non-attack conditions. We follow up with interviews, surfacing a range of user reactions and interpretations of PMA. Through qualitative data analysis of our observations and interviews, we identify various defensive strategies participants developed, and we observe how these strategies sometimes backfire. We derive recommendations for future investigation and defensive directions based on our findings.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/cheng-kaiming](https://www.usenix.org/conference/usenixsecurity23/presentation/cheng-kaiming)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-cheng-kaiming.pdf](https://www.usenix.org/system/files/usenixsecurity23-cheng-kaiming.pdf)
## Erebus: Access Control for Augmented Reality Systems.
### Authors
* Yoonsang Kim, Stony Brook University
* Sanket Goutam, Stony Brook University
* Amir Rahmati, Stony Brook University
* Arie Kaufman, Stony Brook University
### Abstract
> Augmented Reality (AR) is widely considered the next evolution in personal devices, enabling seamless integration of the digital world into our reality. Such integration, however, often requires unfettered access to sensor data, causing significant overprivilege for applications that run on these platforms. Through analysis of 17 AR systems and 45 popular AR applications, we explore existing mechanisms for access control in AR platforms, identify key trends in how AR applications use sensor data, and pinpoint unique threats users face in AR environments. Using these findings, we design and implement Erebus, an access control framework for AR platforms that enables fine-grained control over data used by AR applications. Erebus achieves the principle of least privileged through creation of a domain-specific language (DSL) for permission control in AR platforms, allowing applications to specify data needed for their functionality. Using this DSL, Erebus further enables users to customize app permissions to apply under specific user conditions. We implement Erebus on Google's ARCore SDK and port five existing AR applications to demonstrate Erebus capability to secure various classes of apps. Performance results using these applications and various microbenchmarks show that Erebus achieves its security goals while being practical, introducing negligible performance overhead to the AR system.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/kim-yoonsang](https://www.usenix.org/conference/usenixsecurity23/presentation/kim-yoonsang)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-kim-yoonsang.pdf](https://www.usenix.org/system/files/usenixsecurity23-kim-yoonsang.pdf)
## No Single Silver Bullet: Measuring the Accuracy of Password Strength Meters.
### Authors
* Ding Wang, Nankai University
* Xuan Shan, Nankai University
* Qiying Dong, Nankai University
* Yaosheng Shen, Peking University
* Chunfu Jia, Nankai University
### Abstract
> To help users create stronger passwords, nearly every respectable web service adopts a password strength meter (PSM) to provide real-time strength feedback upon user registration and password change. Recent research has found that PSMs that provide accurate feedback can indeed effectively nudge users toward choosing stronger passwords. Thus, it is imperative to systematically evaluate existing PSMs to facilitate the selection of accurate ones. In this paper, we highlight that there is no single silver bullet metric for measuring the accuracy of PSMs: For each given guessing scenario and strategy, a specific metric is necessary. We investigate the intrinsic characteristics of online and offline guessing scenarios, and for the first time, propose a systematic evaluation framework that is composed of four different dimensioned criteria to rate PSM accuracy under these two password guessing scenarios (as well as various guessing strategies). More specifically, for online guessing, the strength misjudgments of passwords with different popularity would have varied effects on PSM accuracy, and we suggest the weighted Spearman metric and consider two typical attackers: The general attacker who is unaware of the target password distribution, and the knowledgeable attacker aware of it. For offline guessing, since the cracked passwords are generally weaker than the uncracked ones, and they correspond to two disparate distributions, we adopt the Kullback-Leibler divergence metric and investigate the four most typical guessing strategies: brute-force, dictionary-based, probability-based, and a combination of above three strategies. In particular, we propose the Precision metric to measure PSM accuracy when non-binned strength feedback (e.g., probability) is transformed into easy-to-understand bins/scores (e.g., [weak, medium, strong]). We further introduce a reconciled Precision metric to characterize the impacts of strength misjudgments in different directions (e.g., weak→strong and strong→weak) on PSM accuracy. The effectiveness and practicality of our evaluation framework are demonstrated by rating 12 leading PSMs, leveraging 14 real-world password datasets. Finally, we provide three recommendations to help improve the accuracy of PSMs.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/wang-ding-silver-bullet](https://www.usenix.org/conference/usenixsecurity23/presentation/wang-ding-silver-bullet)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-wang-ding-silver-bullet.pdf](https://www.usenix.org/system/files/usenixsecurity23-wang-ding-silver-bullet.pdf)
## Password Guessing Using Random Forest.
### Authors
* Ding Wang, Nankai University
* Yunkai Zou, Nankai University
* Zijian Zhang, Peking University
* Kedong Xiu, Nankai University
### Abstract
> Passwords are the most widely used authentication method, and guessing attacks are the most effective method for password strength evaluation. However, existing password guessing models are generally built on traditional statistics or deep learning, and there has been no research on password guessing that employs classical machine learning. To fill this gap, this paper provides a brand new technical route for password guessing. More specifically, we re-encode the password characters and make it possible for a series of classical machine learning techniques that tackle multi-class classification problems (such as random forest, boosting algorithms and their variants) to be used for password guessing. Further, we propose RFGuess, a random-forest based framework that characterizes the three most representative password guessing scenarios (i.e., trawling guessing, targeted guessing based on personally identifiable information (PII) and on users' password reuse behaviors). Besides its theoretical significance, this work is also of practical value. Experiments using 13 large real-world password datasets demonstrate that our random-forest based guessing models are effective: (1) RFGuess for trawling guessing scenarios, whose guessing success rates are comparable to its foremost counterparts; (2) RFGuess-PII for targeted guessing based on PII, which guesses 20%~28% of common users within 100 guesses, outperforming its foremost counterpart by 7%~13%; (3) RFGuess-Reuse for targeted guessing based on users' password reuse/modification behaviors, which performs the best or 2nd best among related models. We believe this work makes a substantial step toward introducing classical machine learning techniques into password guessing.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/wang-ding-password-guessing](https://www.usenix.org/conference/usenixsecurity23/presentation/wang-ding-password-guessing)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-wang-ding-password-guessing.pdf](https://www.usenix.org/system/files/usenixsecurity23-wang-ding-password-guessing.pdf)
## Pass2Edit: A Multi-Step Generative Model for Guessing Edited Passwords.
### Authors
* Ding Wang, Nankai University
* Yunkai Zou, Nankai University
* Yuan-An Xiao, Peking University
* Siqi Ma, The University of New South Wales
* Xiaofeng Chen, Xidian University
### Abstract
> While password stuffing attacks (that exploit the direct password reuse behavior) have gained considerable attention, only a few studies have examined password tweaking attacks, where an attacker exploits users' indirect reuse behaviors (with edit operations like insertion, deletion, and substitution). For the first time, we model the password tweaking attack as a multi-class classification problem for characterizing users' password edit/modification processes, and propose a generative model coupled with the multi-step decision-making mechanism, called Pass2Edit, to accurately characterize users' password reuse/modification behaviors. We demonstrate the effectiveness of Pass2Edit through extensive experiments, which consist of 12 practical attack scenarios and employ 4.8 billion real-world passwords. The experimental results show that Pass2Edit and its variant significantly improve over the prior art. More specifically, when the victim's password at site A (namely pwA) is known, within 100 guesses, the cracking success rate of Pass2Edit in guessing her password at site B (pwB ≠ pwA) is 24.2% (for common users) and 11.7% (for security-savvy users), respectively, which is 18.2%-33.0% higher than its foremost counterparts. Our results highlight that password tweaking is a much more damaging threat to password security than expected.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/wang-ding-pass2edit](https://www.usenix.org/conference/usenixsecurity23/presentation/wang-ding-pass2edit)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-wang-ding-pass2edit.pdf](https://www.usenix.org/system/files/usenixsecurity23-wang-ding-pass2edit.pdf)
## Improving Real-world Password Guessing Attacks via Bi-directional Transformers.
### Authors
* Ming Xu, Fudan University
* Jitao Yu, Fudan University
* Xinyi Zhang, Facebook
* Chuanwang Wang, Fudan University
* Shenghao Zhang, Fudan University
* Haoqi Wu, Fudan University
* Weili Han, Fudan University
### Abstract
> Password guessing attacks, prevalent issues in the real world, can be conceptualized as efforts to approximate the probability distribution of text tokens. Techniques in the natural language processing (NLP) field naturally lend themselves to password guessing. Among them, bi-directional transformers stand out with their ability to utilize bi-directional contexts to capture the nuances in texts. To further improve password guessing attacks, we propose a bi-directional-transformer-based guessing framework, referred to as PassBERT, which applies the pre-training / fine-tuning paradigm to password guessing attacks. We first prepare a pre-trained password model, which contains the knowledge of the general password distribution. Then, we design three attack-specific fine-tuning approaches to tailor the pre-trained password model to the following real-world attack scenarios: (1) conditional password guessing, which recovers the complete password given a partial password; (2) targeted password guessing, which compromises the password(s) of a specific user using their personal information; (3) adaptive rule-based password guessing, which selects adaptive mangling rules for a word (i.e., base password) to generate rule-transformed password candidates. The experimental results show that our fine-tuned models can outperform the state-of-the-art models by 14.53%, 21.82% and 4.86% in the three attacks, respectively, demonstrating the effectiveness of bi-directional transformers on downstream guessing attacks. Finally, we propose a hybrid password strength meter to mitigate the risks from the three attacks.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/xu-ming](https://www.usenix.org/conference/usenixsecurity23/presentation/xu-ming)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-xu-ming.pdf](https://www.usenix.org/system/files/usenixsecurity23-xu-ming.pdf)
## Araña: Discovering and Characterizing Password Guessing Attacks in Practice.
### Authors
* Mazharul Islam, University of Wisconsin–Madison
* Marina Sanusi Bohuk, Cornell Tech
* Paul Chung, University of Wisconsin–Madison
* Thomas Ristenpart, Cornell Tech
* Rahul Chatterjee, University of Wisconsin–Madison
### Abstract
> Remote password guessing attacks remain one of the largest sources of account compromise. Understanding and characterizing attacker strategies is critical to improving security but doing so has been challenging thus far due to the sensitivity of login services and the lack of ground truth labels for benign and malicious login requests. We perform an in-depth measurement study of guessing attacks targeting two large universities. Using a rich dataset of more than 34 million login requests to the two universities as well as thousands of compromise reports, we were able to develop a new analysis pipeline to identify 29 attack clusters—many of which involved compromises not previously known to security engineers. Our analysis provides the richest investigation to date of password guessing attacks as seen from login services. We believe our tooling will be useful in future efforts to develop real-time detection of attack campaigns, and our characterization of attack campaigns can help more broadly guide mitigation design.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/islam](https://www.usenix.org/conference/usenixsecurity23/presentation/islam)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-islam.pdf](https://www.usenix.org/system/files/usenixsecurity23-islam.pdf)
## PoliGraph: Automated Privacy Policy Analysis using Knowledge Graphs.
### Authors
* Hao Cui, University of California, Irvine
* Rahmadi Triman, University of California, Irvine
* a, University of California, Irvine
* Athina Markopoulou, University of California, Irvine
* Scott Jordan, University of California, Irvine
### Abstract
> Privacy policies disclose how an organization collects and handles personal information. Recent work has made progress in leveraging natural language processing (NLP) to automate privacy policy analysis and extract data collection statements from different sentences, considered in isolation from each other. In this paper, we view and analyze, for the first time, the entire text of a privacy policy in an integrated way. In terms of methodology: (1) we define PoliGraph, a type of knowledge graph that captures statements in a privacy policy as relations between different parts of the text; and (2) we develop an NLP-based tool, PoliGraph-er, to automatically extract PoliGraph from the text. In addition, (3) we revisit the notion of ontologies, previously defined in heuristic ways, to capture subsumption relations between terms. We make a clear distinction between local and global ontologies to capture the context of individual privacy policies, application domains, and privacy laws. Using a public dataset for evaluation, we show that PoliGraph-er identifies 40% more collection statements than prior state-of-the-art, with 97% precision. In terms of applications, PoliGraph enables automated analysis of a corpus of privacy policies and allows us to: (1) reveal common patterns in the texts across different privacy policies, and (2) assess the correctness of the terms as defined within a privacy policy. We also apply PoliGraph to: (3) detect contradictions in a privacy policy, where we show false alarms by prior work, and (4) analyze the consistency of privacy policies and network traffic, where we identify significantly more clear disclosures than prior work.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/cui](https://www.usenix.org/conference/usenixsecurity23/presentation/cui)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-cui.pdf](https://www.usenix.org/system/files/usenixsecurity23-cui.pdf)
## Calpric: Inclusive and Fine-grain Labeling of Privacy Policies with Crowdsourcing and Active Learning.
### Authors
* Wenjun Qiu, University of Toronto
* David Lie, University of Toronto
* Lisa Austin, University of Toronto
### Abstract
> A significant challenge to training accurate deep learning models on privacy policies is the cost and difficulty of obtaining a large and comprehensive set of training data. To address these challenges, we present Calpric , which combines automatic text selection and segmentation, active learning and the use of crowdsourced annotators to generate a large, balanced training set for privacy policies at low cost. Automated text selection and segmentation simplifies the labeling task, enabling untrained annotators from crowdsourcing platforms, like Amazon's Mechanical Turk, to be competitive with trained annotators, such as law students, and also reduces inter-annotator agreement, which decreases labeling cost. Having reliable labels for training enables the use of active learning, which uses fewer training samples to efficiently cover the input space, further reducing cost and improving class and data category balance in the data set. The combination of these techniques allows Calpric to produce models that are accurate over a wider range of data categories, and provide more detailed, fine-grain labels than previous work. Our crowdsourcing process enables Calpric to attain reliable labeled data at a cost of roughly $0.92-$1.71 per labeled text segment. Calpric 's training process also generates a labeled data set of 16K privacy policy text segments across 9 Data categories with balanced positive and negative samples.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/qiu](https://www.usenix.org/conference/usenixsecurity23/presentation/qiu)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-qiu.pdf](https://www.usenix.org/system/files/usenixsecurity23-qiu.pdf)
## POLICYCOMP: Counterpart Comparison of Privacy Policies Uncovers Overbroad Personal Data Collection Practices.
### Authors
* Lu Zhou, Xidian University and Shanghai Jiao Tong University
* Chengyongxiao Wei, Shanghai Jiao Tong University
* Tong Zhu, Shanghai Jiao Tong University
* Guoxing Chen, Shanghai Jiao Tong University
* Xiaokuan Zhang, George Mason University
* Suguo Du, Shanghai Jiao Tong University
* Hui Cao, Shanghai Jiao Tong University
* Haojin Zhu, Shanghai Jiao Tong University
### Abstract
> Since mobile apps' privacy policies are usually complex, various tools have been developed to examine whether privacy policies have contradictions and verify whether privacy policies are consistent with the apps' behaviors. However, to the best of our knowledge, no prior work answers whether the personal data collection practices (PDCPs) in an app's privacy policy are necessary for given purposes (i.e., whether to comply with the principle of data minimization).  Though defined by most existing privacy regulations/laws such as GDPR, the principle of data minimization has been translated into different privacy practices depending on the different contexts (e.g., various developers and targeted users). In the end, the developers can collect personal data claimed in the privacy policies as long as they receive authorizations from the users. Currently, it mainly relies on legal experts to manually audit the necessity of personal data collection according to the specific contexts, which is not very scalable for millions of apps. In this study, we aim to take the first step to automatically investigate whether PDCPs in an app's privacy policy are overbroad from the perspective of counterpart comparison. Our basic insight is that, if an app claims to collect much more personal data in its privacy policy than most of its counterparts, it is more likely to be conducting overbroad collection.  To achieve this, POLICYCOMP, an automatic framework for detecting overbroad PDCPs is proposed. We use POLICYCOMP to perform a large-scale analysis on 10,042 privacy policies and flag 48.29% of PDCPs to be overbroad. We shared our findings with 2,000 app developers and received 52 responses from them, 39 of which acknowledged our findings and took actions (e.g., removing overbroad PDCPs).
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/zhou-lu](https://www.usenix.org/conference/usenixsecurity23/presentation/zhou-lu)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-zhou-lu.pdf](https://www.usenix.org/system/files/usenixsecurity23-zhou-lu.pdf)
## Lalaine: Measuring and Characterizing Non-Compliance of Apple Privacy Labels.
### Authors
* Yue Xiao, Indiana University Bloomington
* Zhengyi Li, Indiana University Bloomington
* Yue Qin, Indiana University Bloomington
* Xiaolong Bai, Orion Security Lab, Alibaba Group
* Jiale Guan, Indiana University Bloomington
* Xiaojing Liao, Indiana University Bloomington
* Luyi Xing, Indiana University Bloomington
### Abstract
> As a key supplement to privacy policies that are known to be lengthy and difficult to read, Apple has launched app privacy labels, which purportedly help users more easily understand an app's privacy practices. However, false and misleading privacy labels can dupe privacy-conscious consumers into downloading data-intensive apps, ultimately eroding the credibility and integrity of the labels.  Although Apple releases requirements and guidelines for app developers to create privacy labels, little is known about whether and to what extent the privacy labels in the wild are correct and compliant, reflecting the actual data practices of iOS apps.  This paper presents the first systematic study, based on our new methodology named Lalaine, to evaluate data-flow to privacy-label flow-to-label consistency. Lalaine fully analyzed the privacy labels and binaries of 5,102 iOS apps, shedding lights on the prevalence and seriousness of privacy-label non-compliance. We provide detailed case studies and analyze root causes for privacy label non-compliance that complements prior understandings. This has led to new insights for improving privacy-label design and compliance requirements, so app developers, platform stakeholders, and policy-makers can better achieve their privacy and accountability goals. Lalaine is thoroughly evaluated for its high effectiveness and efficiency. We are responsibly reporting the results to stakeholders.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/xiao-yue](https://www.usenix.org/conference/usenixsecurity23/presentation/xiao-yue)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-xiao-yue.pdf](https://www.usenix.org/system/files/usenixsecurity23-xiao-yue.pdf)
## Automated Cookie Notice Analysis and Enforcement.
### Authors
* Rishabh Kh, University of Wisconsin—Madison
* elwal, University of Wisconsin—Madison
* Asmit Nayak, University of Wisconsin—Madison
* Hamza Harkous, Google, Inc.
* Kassem Fawaz, University of Wisconsin—Madison
### Abstract
> Online websites use cookie notices to elicit consent from the users, as required by recent privacy regulations like the GDPR and the CCPA. Prior work has shown that these notices are designed in a way to manipulate users into making website-friendly choices which put users' privacy at risk. In this work, we present CookieEnforcer, a new system for automatically discovering cookie notices and extracting a set of instructions that result in disabling all non-essential cookies. In order to achieve this, we first build an automatic cookie notice detector that utilizes the rendering pattern of the HTML elements to identify the cookie notices. Next, we analyze the cookie notices and predict the set of actions required to disable all unnecessary cookies. This is done by modeling the problem as a sequence-to-sequence task, where the input is a machine-readable cookie notice and the output is the set of clicks to make. We demonstrate the efficacy of CookieEnforcer via an end-to-end accuracy evaluation, showing that it can generate the required steps in 91% of the cases. Via a user study, we also show that CookieEnforcer can significantly reduce the user effort. Finally, we characterize the behavior of CookieEnforcer on the top 100k websites from the Tranco list, showcasing its stability and scalability.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/khandelwal](https://www.usenix.org/conference/usenixsecurity23/presentation/khandelwal)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-khandelwal.pdf](https://www.usenix.org/system/files/usenixsecurity23-khandelwal.pdf)
## Continuous Learning for Android Malware Detection.
### Authors
* Yizheng Chen, UC Berkeley
* Zhoujie Ding, UC Berkeley
* David Wagner, UC Berkeley
### Abstract
> Machine learning methods can detect Android malware with very high accuracy. However, these classifiers have an Achilles heel, concept drift: they rapidly become out of date and ineffective, due to the evolution of malware apps and benign apps. Our research finds that, after training an Android malware classifier on one year's worth of data, the F1 score quickly dropped from 0.99 to 0.76 after 6 months of deployment on new test samples.In this paper, we propose new methods to combat the concept drift problem of Android malware classifiers. Since machine learning technique needs to be continuously deployed, we use active learning: we select new samples for analysts to label, and then add the labeled samples to the training set to retrain the classifier. Our key idea is, similarity-based uncertainty is more robust against concept drift. Therefore, we combine contrastive learning with active learning. We propose a new hierarchical contrastive learning scheme, and a new sample selection technique to continuously train the Android malware classifier. Our evaluation shows that this leads to significant improvements, compared to previously published methods for active learning. Our approach reduces the false negative rate from 14% (for the best baseline) to 9%, while also reducing the false positive rate (from 0.86% to 0.48%). Also, our approach maintains more consistent performance across a seven-year time period than past methods.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/chen-yizheng](https://www.usenix.org/conference/usenixsecurity23/presentation/chen-yizheng)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-chen-yizheng.pdf](https://www.usenix.org/system/files/usenixsecurity23-chen-yizheng.pdf)
## Humans vs. Machines in Malware Classification.
### Authors
* Simone Aonzo, EURECOM
* Yufei Han, INRIA
* Aless, EURECOM
* ro Mantovani, EURECOM
* Davide Balzarotti, EURECOM
### Abstract
> Today, the classification of a file as either benign or malicious is performed by a combination of deterministic indicators (such as antivirus rules), Machine Learning classifiers, and, more importantly, the judgment of human experts. However, to compare the difference between human and machine intelligence in malware analysis, it is first necessary to understand how human subjects approach malware classification. In this direction, our work presents the first experimental study designed to capture which `features' of a suspicious program (e.g., static properties or runtime behaviors) are prioritized for malware classification according to humans and machines intelligence. For this purpose, we created a malware classification game where 110 human players worldwide and with different seniority levels (72 novices and 38 experts) have competed to classify the highest number of unknown samples based on detailed sandbox reports. Surprisingly, we discovered that both experts and novices base their decisions on approximately the same features, even if there are clear differences between the two expertise classes. Furthermore, we implemented two state-of-the-art Machine Learning models for malware classification and evaluated their performances on the same set of samples. The comparative analysis of the results unveiled a common set of features preferred by both Machine Learning models and helped better understand the difference in the feature extraction. This work reflects the difference in the decision-making process of humans and computer algorithms and the different ways they extract information from the same data. Its findings serve multiple purposes, from training better malware analysts to improving feature encoding.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/aonzo](https://www.usenix.org/conference/usenixsecurity23/presentation/aonzo)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-aonzo.pdf](https://www.usenix.org/system/files/usenixsecurity23-aonzo.pdf)
## Adversarial Training for Raw-Binary Malware Classifiers.
### Authors
* Keane Lucas, Carnegie Mellon University
* Samruddhi Pai, Carnegie Mellon University
* Weiran Lin, Carnegie Mellon University
* Lujo Bauer, Carnegie Mellon University
* Michael K. Reiter, Duke University
* Mahmood Sharif, Tel Aviv University
### Abstract
> Machine learning (ML) models have shown promise in classifying  raw executable files (binaries) as malicious or benign with high accuracy. This has led to the increasing influence of ML-based classification methods in academic and real-world malware detection, a critical tool in cybersecurity. However, previous work provoked caution by creating variants of malicious binaries, referred to as adversarial examples, that are transformed in a functionality-preserving way to evade detection. In this work, we investigate the effectiveness of using adversarial training methods to create malware classification models that are more robust to some state-of-the-art attacks. To train our most robust models, we significantly increase the efficiency and scale of creating adversarial examples to make adversarial training practical, which has not been done before in raw-binary malware detectors. We then analyze the effects of varying the length of adversarial training, as well as analyze the effects of training with various types of attacks. We find that data augmentation does not deter state-of-the-art attacks, but that using a generic gradient-guided method, used in other discrete domains, does improve robustness. We also show that in most cases, models can be made more robust to malware-domain attacks by adversarially training them with lower-effort versions of the same attack. In the best case, we reduce one state-of-the-art attack's success rate from 90% to 5%. We also find that training with some types of attacks can increase robustness to other types of attacks. Finally, we discuss insights gained from our results, and how they can be used to more effectively train robust malware detectors.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/lucas](https://www.usenix.org/conference/usenixsecurity23/presentation/lucas)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-lucas.pdf](https://www.usenix.org/system/files/usenixsecurity23-lucas.pdf)
## Black-box Adversarial Example Attack towards FCG Based Android Malware Detection under Incomplete Feature Information.
### Authors
* Heng Li, Huazhong University of Science and Technology
* Zhang Cheng, NSFOCUS Technologies Group Co., Ltd. and Huazhong University of Science and Technology
* Bang Wu, Huazhong University of Science and Technology
* Liheng Yuan, Huazhong University of Science and Technology
* Cuiying Gao, Huazhong University of Science and Technology
* Wei Yuan, Huazhong University of Science and Technology
* Xiapu Luo, The Hong Kong Polytechnic University
### Abstract
> The function call graph (FCG)  based Android malware detection methods have recently attracted increasing attention due to their promising performance. However, these methods are susceptible to adversarial examples (AEs). In this paper, we design a novel black-box AE attack towards the FCG based malware detection system, called BagAmmo. To mislead its target system, BagAmmo purposefully perturbs the FCG feature of malware through inserting "never-executed" function calls into malware code. The main challenges are two-fold. First, the malware functionality should not be changed by adversarial perturbation. Second, the information of the target system (e.g., the graph feature granularity and the output probabilities) is absent. To preserve malware functionality, BagAmmo employs the try-catch trap to insert function calls to perturb the FCG of malware. Without the knowledge about feature granularity and output probabilities, BagAmmo adopts the architecture of generative adversarial network (GAN), and leverages a multi-population co-evolution algorithm (i.e., Apoem) to generate the desired perturbation. Every population in Apoem represents a possible feature granularity, and the real feature granularity can be achieved when Apoem converges.  Through extensive experiments on over 44k Android apps and 32 target models, we evaluate the effectiveness, efficiency and resilience of BagAmmo. BagAmmo achieves an average attack success rate of over 99.9% on MaMaDroid, APIGraph and GCN, and still performs well in the scenario of concept drift and data imbalance. Moreover, BagAmmo outperforms the state-of-the-art attack SRL in attack success rate.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/li-heng](https://www.usenix.org/conference/usenixsecurity23/presentation/li-heng)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-li-heng.pdf](https://www.usenix.org/system/files/usenixsecurity23-li-heng.pdf)
## Evading Provenance-Based ML Detectors with Adversarial System Actions.
### Authors
* Kunal Mukherjee, The University of Texas at Dallas
* Joshua Wiedemeier, The University of Texas at Dallas
* Tianhao Wang, The University of Texas at Dallas
* James Wei, The University of Texas at Dallas
* Feng Chen, The University of Texas at Dallas
* Muhyun Kim, The University of Texas at Dallas
* Murat Kantarcioglu, The University of Texas at Dallas
* Kangkook Jee, The University of Texas at Dallas
### Abstract
> We present PROVNINJA, a framework designed to generate adversarial attacks that aim to elude provenance-based Machine Learning (ML) security detectors. PROVNINJA is designed to identify and craft adversarial attack vectors that statistically mimic and impersonate system programs.Leveraging the benign execution profile of system processes commonly observed across a multitude of hosts and networks, our research proposes an efficient and effective method to probe evasive alternatives and devise stealthy attack vectors that are difficult to distinguish from benign system behaviors. PROVNINJA's suggestions for evasive attacks, originally derived in the feature space, are then translated into system actions, leading to the realization of actual evasive attack sequences in the problem space.When evaluated against State-of-The-Art (SOTA) detector models using two realistic Advanced Persistent Threat (APT) scenarios and a large collection of fileless malware samples, PROVNINJA could generate and realize evasive attack variants, reducing the detection rates by up to 59%. We also assessed PROVNINJA under varying assumptions on adversaries' knowledge and capabilities. While PROVNINJA primarily considers the black-box model, we also explored two contrasting threat models that consider blind and white-box attack scenarios.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/mukherjee](https://www.usenix.org/conference/usenixsecurity23/presentation/mukherjee)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-mukherjee.pdf](https://www.usenix.org/system/files/usenixsecurity23-mukherjee.pdf)
## TreeSync: Authenticated Group Management for Messaging Layer Security.
### Authors
* Théophile Wallez, Inria Paris
* Jonathan Protzenko, Microsoft Research
* Benjamin Beurdouche, Mozilla
* Karthikeyan Bhargavan, Inria Paris
### Abstract
> Messaging Layer Security (MLS), currently undergoing standardization at the IETF, is an asynchronous group messaging protocol that aims to be efficient for large dynamic groups, while providing strong guarantees like forward secrecy (FS) and post-compromise security (PCS). While prior work on MLS has extensively studied its group key establishment component (called TreeKEM), many flaws in early designs of MLS have stemmed from its group integrity and authentication mechanisms that are not as well-understood.  In this work, we identify and formalize TreeSync: a sub-protocol of MLS that specifies the shared group state, defines group management operations, and ensures consistency, integrity, and authentication for the group state across all members. We present a precise, executable, machine-checked formal specification of TreeSync, and show how it can be composed with other components to implement the full MLS protocol. Our specification is written in F* and serves as a reference implementation of MLS; it passes the RFC test vectors and is interoperable with other MLS implementations. Using the DY* symbolic protocol analysis framework, we formalize and prove the integrity and authentication guarantees of TreeSync, under minimal security assumptions on the rest of MLS. Our analysis identifies a new attack and we propose several changes that have been incorporated in the latest MLS draft. Ours is the first testable, machine-checked, formal specification for MLS, and should be of interest to both developers and researchers interested in this upcoming standard.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/wallez](https://www.usenix.org/conference/usenixsecurity23/presentation/wallez)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-wallez.pdf](https://www.usenix.org/system/files/usenixsecurity23-wallez.pdf)
## Formal Analysis of Session-Handling in Secure Messaging: Lifting Security from Sessions to Conversations.
### Authors
* Cas Cremers, CISPA Helmholtz Center for Information Security
* Charlie Jacomme, Inria Paris
* Aurora Naska, CISPA Helmholtz Center for Information Security
### Abstract
> The building blocks for secure messaging apps, such as Signal’s X3DH and Double Ratchet (DR) protocols, have received a lot of attention from the research community. They have notably been proved to meet strong security properties even in the case of compromise such as Forward Secrecy (FS) and Post-Compromise Security (PCS). However, there is a lack of formal study of these properties at the application level. Whereas the research works have studied such properties in the context of a single ratcheting chain, a conversation between two persons in a messaging application can in fact be the result of merging multiple ratcheting chains.  In this work, we initiate the formal analysis of secure messaging taking the session-handling layer into account, and apply our approach to Sesame, Signal’s session management. We first experimentally show practical scenarios in which PCS can be violated in Signal by a clone attacker, despite its use of the Double Ratchet. We identify how this is enabled by Signal’s session-handling layer. We then design a formal model of the session-handling layer of Signal that is tractable for automated verification with the Tamarin prover, and use this model to rediscover the PCS violation and propose two provably secure mechanisms to offer stronger guarantees.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/cremers-session-handling](https://www.usenix.org/conference/usenixsecurity23/presentation/cremers-session-handling)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-cremers-session-handling.pdf](https://www.usenix.org/system/files/usenixsecurity23-cremers-session-handling.pdf)
## Cryptographic Administration for Secure Group Messaging.
### Authors
* David Balbás, IMDEA Software Institute & Universidad Politécnica de Madrid
* Daniel Collins, EPFL
* Serge Vaudenay, EPFL
### Abstract
> Many real-world group messaging systems delegate group administration to the application level, failing to provide formal guarantees related to group membership. Taking a cryptographic approach to group administration can prevent both implementation and protocol design pitfalls that result in a loss of confidentiality and consistency for group members.In this work, we introduce a cryptographic framework for the design of group messaging protocols that offer strong security guarantees for group membership. To this end, we extend the continuous group key agreement (CGKA) paradigm used in the ongoing IETF MLS group messaging standardisation process and introduce the administrated CGKA (A-CGKA) primitive. Our primitive natively enables a subset of group members, the group admins, to control the addition and removal of parties and to update their own keying material in a secure manner. Notably, our security model prevents even corrupted (non-admin) members from forging messages that modify group membership. Moreover, we present two efficient and modular constructions of group administrators that are correct and secure with respect to our definitions. Finally, we propose, implement, and benchmark an efficient extension of MLS that integrates cryptographic administrators.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/balbas](https://www.usenix.org/conference/usenixsecurity23/presentation/balbas)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-balbas.pdf](https://www.usenix.org/system/files/usenixsecurity23-balbas.pdf)
## Wink: Deniable Secure Messaging.
### Authors
* Anrin Chakraborti, Duke University
* Darius Suciu, Stony Brook University
* Radu Sion, Stony Brook University
### Abstract
> End-to-end encrypted (E2EE) messaging is an essential first step in providing message confidentiality. Unfortunately, all security guarantees of end-to-end encryption are lost when keys or plaintext are disclosed, either due to device compromise or coercion by powerful adversaries. This work introduces Wink, the first plausibly-deniable messaging system protecting message confidentiality from partial device compromise and compelled key disclosure. Wink can surreptitiously inject hidden messages in standard random coins, e.g., in salts, IVs, used by existing E2EE protocols. It does so as part of legitimate secure cryptographic functionality deployed inside the widely-available trusted execution environment (TEE) TrustZone. This results in hidden communication using virtually unchanged existing E2EE messaging apps, as well as strong plausible deniability. Wink has been demonstrated with multiple existing E2EE applications (including Telegram and Signal) with minimal (external) instrumentation, negligible overheads, and crucially, without changing on-wire message formats.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/chakraborti-wink](https://www.usenix.org/conference/usenixsecurity23/presentation/chakraborti-wink)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-chakraborti-wink.pdf](https://www.usenix.org/system/files/usenixsecurity23-chakraborti-wink.pdf)
## Three Lessons From Threema: Analysis of a Secure Messenger.
### Authors
* Kenneth G. Paterson, ETH Zurich
* Matteo Scarlata, ETH Zurich
* Kien Tuong Truong, ETH Zurich
### Abstract
> We provide an extensive cryptographic analysis of Threema, a Swiss-based encrypted messaging application with more than 10 million users and 7000 corporate customers. We present seven different attacks against the protocol in three different threat models. We discuss impact and remediations for our attacks, which have all been responsibly disclosed to Threema and patched. Finally, we draw wider lessons for developers of secure protocols.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/paterson](https://www.usenix.org/conference/usenixsecurity23/presentation/paterson)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-paterson.pdf](https://www.usenix.org/system/files/usenixsecurity23-paterson.pdf)
## MorFuzz: Fuzzing Processor via Runtime Instruction Morphing enhanced Synchronizable Co-simulation.
### Authors
* Jinyan Xu, Zhejiang University
* Yiyuan Liu, Zhejiang University
* Sirui He, City University of Hong Kong
* Haoran Lin, Zhejiang University
* Yajin Zhou, Zhejiang University
* Cong Wang, City University of Hong Kong
### Abstract
> Modern processors are too complex to be bug free. Recently, a few hardware fuzzing techniques have shown promising results in verifying processor designs. However, due to the complexity of processors, they suffer from complex input grammar, deceptive mutation guidance, and model implementation differences. Therefore, how to effectively and efficiently verify processors is still an open problem. This paper proposes MorFuzz, a novel processor fuzzer that can efficiently discover software triggerable hardware bugs. The core idea behind MorFuzz is to use runtime information to generate instruction streams with valid formats and meaningful semantics. MorFuzz designs a new input structure to provide multi-level runtime mutation primitives and proposes the instruction morphing technique to mutate instruction dynamically. Besides, we also extend the co-simulation framework to various microarchitectures and develop the state synchronization technique to eliminate implementation differences. We evaluate MorFuzz on three popular open-source RISC-V processors: CVA6, Rocket, BOOM, and discover 17 new bugs (with 13 CVEs assigned). Our evaluation shows MorFuzz achieves 4.4× and 1.6× more state coverage than the state-of-the-art fuzzer, DifuzzRTL, and the famous constrained instruction generator, riscv-dv.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/xu-jinyan](https://www.usenix.org/conference/usenixsecurity23/presentation/xu-jinyan)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-xu-jinyan.pdf](https://www.usenix.org/system/files/usenixsecurity23-xu-jinyan.pdf)
## µFUZZ: Redesign of Parallel Fuzzing using Microservice Architecture.
### Authors
* Yongheng Chen, Georgia Institute of Technology
* Rui Zhong, Pennsylvania State University
* Yupeng Yang, Georgia Institute of Technology
* Hong Hu, Pennsylvania State University
* Dinghao Wu, Pennsylvania State University
* Wenke Lee, Georgia Institute of Technology
### Abstract
> Fuzzing has been widely adopted as an effective testing technique for detecting software bugs. Researchers have explored many parallel fuzzing approaches to speed up bug detection. However, existing approaches are built on top of serial fuzzers and rely on periodic fuzzing state synchronization. Such a design has two limitations. First, the synchronous serial design of the fuzzer might waste CPU power due to blocking I/O operations. Second, state synchronization is either too late so that we fuzz with a suboptimal strategy or too frequent so that it causes enormous overhead.In this paper, we redesign parallel fuzzing with microservice architecture and propose the prototype μFUZZ. To better utilize CPU power in the existence of I/O, μFUZZ breaks down the synchronous fuzzing loops into concurrent microservices, each with multiple workers. To avoid state synchronization, μFUZZ partitions the state into different services and their workers so that they can work independently but still achieve a great aggregated result. Our experiments show that μFUZZ outperforms the second-best existing fuzzers with 24% improvements in code coverage and 33% improvements in bug detection on average in 24 hours. Besides, μFUZZ finds 11 new bugs in well-tested real-world programs.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/chen-yongheng](https://www.usenix.org/conference/usenixsecurity23/presentation/chen-yongheng)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-chen-yongheng.pdf](https://www.usenix.org/system/files/usenixsecurity23-chen-yongheng.pdf)
## FISHFUZZ: Catch Deeper Bugs by Throwing Larger Nets.
### Authors
* Han Zheng, National Computer Network Intrusion Protection Center, University of Chinese Academy of Science; School of Computer and Communication Sciences, EPFL; Zhongguancun Laboratory
* Jiayuan Zhang, National Computer Network Intrusion Protection Center, University of Chinese Academy of Science; School of Computer and Communication, Lanzhou University of Technology
* Yuhang Huang, National Computer Network Intrusion Protection Center, University of Chinese Academy of Science
* Zezhong Ren, National Computer Network Intrusion Protection Center, University of Chinese Academy of Science; Zhongguancun Laboratory
* He Wang, School of Cyber Engineering, Xidian University
* Chunjie Cao, School of Cyberspace Security, Hainan University
* Yuqing Zhang, National Computer Network Intrusion Protection Center, University of Chinese Academy of Science; Zhongguancun Laboratory; School of Cyberspace Security, Hainan University; School of Cyber Engineering, Xidian University
* Flavio Toffalini, School of Computer and Communication Sciences, EPFL
* Mathias Payer, School of Computer and Communication Sciences, EPFL
### Abstract
> Fuzzers effectively explore programs to discover bugs. Greybox fuzzers mutate seed inputs and observe their execution. Whenever a seed reaches new behavior (e.g., new code or higher execution frequency), it is stored for further mutation. Greybox fuzzers directly measure exploration and, by repeating execution of the same targets with large amounts of mutated seeds, passively exploit any lingering bugs. Directed greybox fuzzers (DGFs) narrow the search to few code locations but so far generalize distance to all targets into a single score and do not prioritize targets dynamically. FISHFUZZ introduces an input prioritization strategy that builds on three concepts: (i) a novel multi-distance metric whose precision is independent of the number of targets, (ii) a dynamic target ranking to automatically discard exhausted targets, and (iii) a smart queue culling algorithm, based on hyperparameters, that alternates between exploration and exploitation. FISHFUZZ enables fuzzers to seamlessly scale among thousands of targets and prioritize seeds toward interesting locations, thus achieving more comprehensive program testing. To demonstrate generality, we implement FISHFUZZ over two well-established greybox fuzzers (AFL and AFL++). We evaluate FISHFUZZ by leveraging all sanitizer labels as targets. Extensively comparing FISHFUZZ against modern DGFs and coverage-guided fuzzers demonstrates that FISHFUZZ reaches higher coverage compared to the direct competitors, finds up to 282% more bugs compared with baseline fuzzers and reproduces 68.3% existing bugs faster. FISHFUZZ also discovers 56 new bugs (38 CVEs) in 47 programs.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/zheng](https://www.usenix.org/conference/usenixsecurity23/presentation/zheng)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-zheng.pdf](https://www.usenix.org/system/files/usenixsecurity23-zheng.pdf)
## HyPFuzz: Formal-Assisted Processor Fuzzing.
### Authors
* Chen Chen, Texas A&M University
* Rahul K, Texas A&M University
* e, Texas A&M University
* Nathan Nguyen, Texas A&M University
* Flemming Andersen, Texas A&M University
* Aakash Tyagi, Texas A&M University
* Ahmad-Reza Sadeghi, Technische Universität Darmstadt
* Jeyavijayan Rajendran, Texas A&M University
### Abstract
> Recent research has shown that hardware fuzzers can effectively detect security vulnerabilities in modern processors. However, existing hardware fuzzers do not fuzz well the hard-to-reach design spaces. Consequently, these fuzzers cannot effectively fuzz security-critical control- and data-flow logic in the processors, hence missing security vulnerabilities. To tackle this challenge, we present HyPFuzz, a hybrid fuzzer that leverages formal verification tools to help fuzz the hard-to-reach part of the processors. To increase the effectiveness of HyPFuzz, we perform optimizations in time and space. First, we develop a scheduling strategy to prevent under- or over-utilization of the capabilities of formal tools and fuzzers. Second, we develop heuristic strategies to select points in the design space for the formal tool to target. We evaluate HyPFuzz on five widely-used open-source processors. HyPFuzz detected all the vulnerabilities detected by the most recent processor fuzzer and found three new vulnerabilities that were missed by previous extensive fuzzing and formal verification. This led to two new common vulnerabilities and exposures (CVE) entries. HyPFuzz also achieves 11.68× faster coverage than the most recent processor fuzzer.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/chen-chen](https://www.usenix.org/conference/usenixsecurity23/presentation/chen-chen)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-chen-chen.pdf](https://www.usenix.org/system/files/usenixsecurity23-chen-chen.pdf)
## PolyFuzz: Holistic Greybox Fuzzing of Multi-Language Systems.
### Authors
* Wen Li, Washington State University
* Jinyang Ruan, Washington State University
* Guangbei Yi, Washington State University
* Long Cheng, Clemson University
* Xiapu Luo, The Hong Kong Polytechnic University
* Haipeng Cai, Washington State University
### Abstract
> While offering many advantages during software process, the practice of using multiple programming languages in constructing one software system also introduces additional security vulnerabilities in the resulting code. As this practice becomes increasingly prevalent, securing multi-language systems is of pressing criticality. Fuzzing has been a powerful security testing technique, yet existing fuzzers are commonly limited to single-language software. In this paper, we present PolyFuzz, a greybox fuzzer that holistically fuzzes a given multi-language system through cross-language coverage feedback and explicit modeling of the semantic relationships between (various segments of) program inputs and branch predicates across languages. PolyFuzz is extensible for supporting multilingual code written in different language combinations and has been implemented for C, Python, Java, and their combinations. We evaluated PolyFuzz versus state-of-the-art single-language fuzzers for these languages as baselines against 15 real-world multi-language systems and 15 single-language benchmarks. PolyFuzz achieved 25.3–52.3% higher code coverage and found 1–10 more bugs than the baselines against the multilingual programs, and even 10-20% higher coverage against the single-language benchmarks. In total, PolyFuzz has enabled the discovery of 12 previously unknown multilingual vulnerabilities and 2 single-language ones, with 5 CVEs assigned. Our results show great promises of PolyFuzz for cross-language fuzzing, while justifying the strong need for holistic fuzzing against trivially applying single-language fuzzers to multi-language software.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/li-wen](https://www.usenix.org/conference/usenixsecurity23/presentation/li-wen)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-li-wen.pdf](https://www.usenix.org/system/files/usenixsecurity23-li-wen.pdf)
## VIPER: Spotting Syscall-Guard Variables for Data-Only Attacks.
### Authors
* Hengkai Ye, The Pennsylvania State University
* Song Liu, The Pennsylvania State University
* Zhechang Zhang, The Pennsylvania State University
* Hong Hu, The Pennsylvania State University
### Abstract
> As control-flow protection techniques are widely deployed, it is difficult for attackers to modify control data, like function pointers, to hijack program control flow. Instead, data-only attacks corrupt security-critical non-control data (critical data), and can bypass all control-flow protections to revive severe attacks. Previous works have explored various methods to help construct or prevent data-only attacks. However, no solution can automatically detect program-specific critical data.In this paper, we identify an important category of critical data, syscall-guard variables, and propose a set of solutions to automatically detect such variables in a scalable manner. Syscall-guard variables determine to invoke security-related system calls (syscalls), and altering them will allow attackers to request extra privileges from the operating system. We propose branch force, which intentionally flips every conditional branch during the execution and checks whether new security-related syscalls are invoked. If so, we conduct data-flow analysis to estimate the feasibility to flip such branches through common memory errors. We build a tool, VIPER, to implement our ideas. VIPER successfully detects 34 previously unknown syscall-guard variables from 13 programs. We build four new data-only attacks on sqlite and v8, which execute arbitrary command or delete arbitrary file. VIPER completes its analysis within five minutes for most programs, showing its practicality for spotting syscall-guard variables.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/ye](https://www.usenix.org/conference/usenixsecurity23/presentation/ye)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-ye.pdf](https://www.usenix.org/system/files/usenixsecurity23-ye.pdf)
## AURC: Detecting Errors in Program Code and Documentation.
### Authors
* Peiwei Hu, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, China, and School of Cyber Security, University of Chinese Academy of Sciences, China
* Ruigang Liang, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, China, and School of Cyber Security, University of Chinese Academy of Sciences, China
* Ying Cao, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, China, and School of Cyber Security, University of Chinese Academy of Sciences, China
* Kai Chen, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, China, School of Cyber Security, University of Chinese Academy of Sciences, China, and Beijing Academy of Artificial Intelligence, China
* Runze Zhang, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, China, and School of Cyber Security, University of Chinese Academy of Sciences, China
### Abstract
> Error detection in program code and documentation is a critical problem in computer security. Previous studies have shown promising vulnerability discovery performance by extensive code or document-guided analysis. However, the state-of-the-arts have the following significant limitations: (i) They assume the documents are correct and treat the code that violates documents as bugs, thus cannot find documents’ defects and code’s bugs if APIs have defective documents or no documents. (ii) They utilize majority voting to judge the inconsistent code snippets and treat the deviants as bugs, thus cannot cope with situations where correct usage is minor or all use cases are wrong. In this paper, we present AURC, a static framework for detecting code bugs of incorrect return checks and document defects. We observe that three objects participate in the API invocation, the document, the caller (code that invokes API), and the callee (the source code of API). Mutual corroboration of these three objects eliminates the reliance on the above assumptions. AURC contains a context-sensitive backward analysis to process callees, a pre-trained model-based document classifier, and a container that collects conditions of if statements from callers. After cross-checking the results from callees, callers, and documents, AURC delivers them to the correctness inference module to infer the defective one. We evaluated AURC on ten popular codebases. AURC discovered 529 new bugs that can lead to security issues like heap buffer overflow and sensitive information leakage, and 224 new document defects. Maintainers acknowledge our findings and have accepted 222 code patches and 76 document patches.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/hu](https://www.usenix.org/conference/usenixsecurity23/presentation/hu)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-hu.pdf](https://www.usenix.org/system/files/usenixsecurity23-hu.pdf)
## Not All Data are Created Equal: Data and Pointer Prioritization for Scalable Protection Against Data-Oriented Attacks.
### Authors
* Salman Ahmed, IBM Research
* Hans Liljestr, University of Waterloo
* Hani Jamjoom, IBM Research
* Matthew Hicks, Virginia Tech
* N. Asokan, University of Waterloo
* Danfeng (Daphne) Yao, Virginia Tech
### Abstract
> Data-oriented attacks are becoming increasingly realistic and effective against the state-of-the-art defenses in most operating systems. These attacks manipulate memory-resident data objects (data and pointers) without changing the control flow of a program. Software and hardware-based countermeasures for protecting data and pointers suffer from performance bottlenecks due to excessive instrumentation of all data objects. In this work, we propose a Data and Pointer Prioritization (DPP) framework utilizing rule-based heuristics to identify sensitive memory objects automatically from an application and protect only those sensitive data utilizing existing countermeasures. We evaluate the correctness of our framework using the Linux Flaw Project dataset, Juliet Test Suite, and five real-world programs (used for demonstrating data-oriented attacks). Our experiments show that DPP can identify vulnerable data objects from our tested applications by prioritizing as few as only 3–4% of total data objects. Our evaluation of the SPEC CPU2017 Integer benchmark suite shows that DPP-enabled AddressSanitizer (ASan) can improve performance (in terms of throughput) by ∼1.6x and reduce run-time overhead by ∼70% compared to the default ASan while protecting all the prioritized data objects.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/ahmed-salman](https://www.usenix.org/conference/usenixsecurity23/presentation/ahmed-salman)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-ahmed-salman.pdf](https://www.usenix.org/system/files/usenixsecurity23-ahmed-salman.pdf)
## SAFER: Efficient and Error-Tolerant Binary Instrumentation.
### Authors
* Soumyakant Priyadarshan, Stony Brook University
* Huan Nguyen, Stony Brook University
* Rohit Chouhan, Stony Brook University
* R. Sekar, Stony Brook University
### Abstract
> Recent advances in binary instrumentation have been focused on performance. By statically transforming the code to avoid additional runtime operations, systems such as Egalito and RetroWrite achieve near zero overheads. The safety of these static transformations relies on several assumptions: (a) error-free and complete disassembly, (b) exclusive use of position-independent code, and (c) code pointer identification that is free of both false positives and false negatives. Violations of these assumptions can cause an instrumented program to crash, or worse, experience delayed failures that corrupt data or compromise security. Many earlier binary instrumentation techniques (e.g., DynamoRio, Pin, and BinCFI) minimized such assumptions, but the price to be paid is a much higher overhead, especially for indirect-call-intensive (e.g., C++) applications. Thus, an open research question is whether the safety benefits of the earlier works can be combined with the performance benefits of recent works. We answer this question in the affirmative by presenting a new instrumentation technique that (a) tolerates the use of position-dependent code and common disassembly and static analysis errors, and (b) detects assumption violations at runtime before they can lead to undefined behavior. Our approach provides a fail-crash primitive for graceful shutdown or recovery. We achieve safe instrumentation without sacrificing performance, introducing a low overhead of about ∼ 2%.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/priyadarshan](https://www.usenix.org/conference/usenixsecurity23/presentation/priyadarshan)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-priyadarshan.pdf](https://www.usenix.org/system/files/usenixsecurity23-priyadarshan.pdf)
## Reassembly is Hard: A Reflection on Challenges and Strategies.
### Authors
* Hyungseok Kim, KAIST and The Affiliated Institute of ETRI
* Soomin Kim, KAIST
* Junoh Lee, KAIST
* Kangkook Jee, University of Texas at Dallas
* Sang Kil Cha, KAIST
### Abstract
> Reassembly, a branch of static binary rewriting, has become a focus of research today. However, despite its widespread use and research interest, there have been no systematic investigations on the techniques and challenges of reassemblers. In this paper, we formally define different types of errors that occur in current existing reassemblers, and present an automated tool named REASSESSOR to find such errors. We attempt to show through our tool and the large-scale benchmark we created the current challenges in the field and how they can be approached.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/kim-hyungseok](https://www.usenix.org/conference/usenixsecurity23/presentation/kim-hyungseok)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-kim-hyungseok.pdf](https://www.usenix.org/system/files/usenixsecurity23-kim-hyungseok.pdf)
## Measuring Up to (Reasonable) Consumer Expectations: Providing an Empirical Basis for Holding IoT Manufacturers Legally Responsible.
### Authors
* Lorenz Kustosch, TU Delft
* Carlos Gañán, TU Delft
* Mattis van 't Schip, Radboud University
* Michel van Eeten, TU Delft
* Simon Parkin, TU Delft
### Abstract
> With continued cases of security and privacy incidents with consumer Internet-of-Things (IoT) devices comes the need to identify which actors are in the best place to respond. Previous literature studied expectations of consumers regarding how security and privacy should be implemented and who should take on preventive efforts. But how do such normative consumer expectations differ from what is actually realistic, or reasonable to expect how security and privacy-related events will be handled? Using a vignette survey with 862 participants, we studied consumer expectations on how IoT manufacturers and users would and should respond when confronted with a potentially infected or privacy-invading IoT device. We find that expectations differ considerably between what is realistic and what is appropriate. Furthermore, security and privacy lead to different expectations around users’ and manufacturers’ actions, with a general diffusion of expectations on how to handle privacy-related events. We offer recommendations to IoT manufacturers and regulators on how to support users in addressing security and privacy issues.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/kustosch](https://www.usenix.org/conference/usenixsecurity23/presentation/kustosch)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-kustosch.pdf](https://www.usenix.org/system/files/usenixsecurity23-kustosch.pdf)
## Are Consumers Willing to Pay for Security and Privacy of IoT Devices?
### Authors
* Pardis Emami-Naeini, Duke University
* Janarth Dheenadhayalan, Carnegie Mellon University
* Yuvraj Agarwal, Carnegie Mellon University
* Lorrie Faith Cranor, Carnegie Mellon University
### Abstract
> Internet of Things (IoT) device manufacturers provide little information to consumers about their security and data handling practices. Therefore, IoT consumers cannot make informed purchase choices around security and privacy. While prior research has found that consumers would likely consider security and privacy when purchasing IoT devices, past work lacks empirical evidence as to whether they would actually pay more to purchase devices with enhanced security and privacy. To fill this gap, we conducted a two-phase incentive-compatible online study with 180 Prolific participants. We measured the impact of five security and privacy factors (e.g., access control) on participants' purchase behaviors when presented individually or together on an IoT label. Participants were willing to pay a significant premium for devices with better security and privacy practices. The biggest price differential we found was for de-identified rather than identifiable cloud storage. Mainly due to its usability challenges, the least valuable improvement for participants was to have multi-factor authentication as opposed to passwords. Based on our findings, we provide recommendations on creating more effective IoT security and privacy labeling programs.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/emami-naeini](https://www.usenix.org/conference/usenixsecurity23/presentation/emami-naeini)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-emami-naeini.pdf](https://www.usenix.org/system/files/usenixsecurity23-emami-naeini.pdf)
## Examining Consumer Reviews to Understand Security and Privacy Issues in the Market of Smart Home Devices.
### Authors
* Swaathi Vetrivel, Delft University of Technology
* Veerle van Harten, Delft University of Technology
* Carlos H. Gañán, Delft University of Technology
* Michel van Eeten, Delft University of Technology
* Simon Parkin, Delft University of Technology
### Abstract
> Despite growing evidence that consumers care about secure Internet-of-Things (IoT) devices, relevant security and privacy-related information is unavailable at the point of purchase. While initiatives such as security labels create new avenues to signal a device's security and privacy posture, we analyse an existing avenue for such market signals - customer reviews. We investigate whether and to what extent customer reviews of IoT devices with well-known security and privacy issues reflect these concerns. We examine 83,686 reviews of four IoT device types commonly infected with Mirai across all Amazon websites in English. We perform topic modelling to group the reviews and conduct manual coding to understand (i) the prevalence of security and privacy issues and (ii) the themes that these issues articulate. Overall, around one in ten reviews (9.8%) mentions security and privacy issues; the geographical distribution varies across the six countries. We distil references to security and privacy into seven themes and identify two orthogonal themes: reviews written in technical language and those that mention friction with security steps. Our results thus highlight the value of the already existing avenue of customer reviews. We draw on these results to make recommendations and identify future research directions.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/vetrivel](https://www.usenix.org/conference/usenixsecurity23/presentation/vetrivel)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-vetrivel.pdf](https://www.usenix.org/system/files/usenixsecurity23-vetrivel.pdf)
## Internet Service Providers' and Individuals' Attitudes, Barriers, and Incentives to Secure IoT.
### Authors
* Nissy Sombatruang, National Institute of Information and Communications Technology
* Tristan Caulfield, University College London
* Ingolf Becker, University College London
* Akira Fujita, National Institute of Information and Communications Technology
* Takahiro Kasama, National Institute of Information and Communications Technology
* Koji Nakao, National Institute of Information and Communications Technology
* Daisuke Inoue, National Institute of Information and Communications Technology
### Abstract
> Internet Service Providers (ISPs) and individual users of Internet of Things (IoT) play a vital role in securing IoT. However, encouraging them to do so is hard. Our study investigates ISPs' and individuals' attitudes towards the security of IoT, the obstacles they face, and their incentives to keep IoT secure, drawing evidence from Japan. Due to the complex interactions of the stakeholders, we follow an iterative methodology where we present issues and potential solutions to our stakeholders in turn.  For ISPs, we survey 27 ISPs in Japan, followed by a workshop with representatives from government and 5 ISPs. Based on the findings from this, we conduct semi-structured interviews with 20 participants followed by a more quantitative survey with 328 participants. We review these results in a second workshop with representatives from government and 7 ISPs. The appreciation of challenges by each party has lead to findings that are supported by all stakeholders. Securing IoT devices is neither users' nor ISPs' priority. Individuals are keen on more interventions both from the government as part of regulation and from ISPs in terms of filtering malicious traffic. Participants are willing to pay for enhanced monitoring and filtering. While ISPs do want to help users, there appears to be a lack of effective technology to aid them. ISPs would like to see more public recognition for their efforts, but internally they struggle with executive buy-in and effective means to communicate with their customers. The majority of barriers and incentives are external to ISPs and individuals, demonstrating the complexity of keeping IoT secure and emphasizing the need for relevant stakeholders in the IoT ecosystem to work in tandem.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/sombatruang](https://www.usenix.org/conference/usenixsecurity23/presentation/sombatruang)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-sombatruang.pdf](https://www.usenix.org/system/files/usenixsecurity23-sombatruang.pdf)
## Detecting and Handling IoT Interaction Threats in Multi-Platform Multi-Control-Channel Smart Homes.
### Authors
* Haotian Chi, Shanxi University and Temple University
* Qiang Zeng, George Mason University
* Xiaojiang Du, Stevens Institute of Technology
### Abstract
> A smart home involves a variety of entities, such as IoT devices, automation applications, humans, voice assistants, and companion apps. These entities interact in the same physical environment, which can yield undesirable and even hazardous results, called IoT interaction threats. Existing work on interaction threats is limited to considering automation apps, ignoring other IoT control channels, such as voice commands, companion apps, and physical operations. Second, it becomes increasingly common that a smart home utilizes multiple IoT platforms, each of which has a partial view of device states and may issue conflicting commands. Third, compared to detecting interaction threats, their handling is much less studied. Prior work uses generic handling policies, which are unlikely to fit all homes. We present IoTMediator, which provides accurate threat detection and threat-tailored handling in multi-platform multi-control-channel homes. Our evaluation in two real-world homes demonstrates that IoTMediator significantly outperforms prior state-of-the-art work.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/chi](https://www.usenix.org/conference/usenixsecurity23/presentation/chi)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-chi.pdf](https://www.usenix.org/system/files/usenixsecurity23-chi.pdf)
## Private Proof-of-Stake Blockchains using Differentially-Private Stake Distortion.
### Authors
* Chenghong Wang, Duke University
* David Pujol, Duke University
* Kartik Nayak, Duke University
* Ashwin Machanavajjhala, Duke University
### Abstract
> Safety, liveness, and privacy are three critical properties for any private proof-of-stake (PoS) blockchain. However, prior work (SP'21) has shown that to obtain safety and liveness, a PoS blockchain must in theory forgo privacy. In particular, to obtain safety and liveness, PoS blockchains elect parties proportional to their stake, which, in turn, can potentially reveal the stake of a party even if the transaction processing mechanism is private. In this work, we make two key contributions. First, we present the first stake inference attack that can be actually run in practice. Specifically, our attack applies to both deterministic and randomized PoS protocols and has exponentially lesser running time in comparison with the SOTA approach. Second, we use differentially private stake distortion to achieve privacy in PoS blockchains. We formulate certain privacy requirements to achieve transaction and stake privacy, and design two stake distortion mechanisms that any PoS protocol can use. Moreover, we analyze our proposed mechanisms with Ethereum 2.0, a well-known PoS blockchain that is already operating in practice. The results indicate that our mechanisms mitigate stake inference risks and, at the same time, provide reasonable privacy while preserving required safety and liveness properties.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/wang-chenghong](https://www.usenix.org/conference/usenixsecurity23/presentation/wang-chenghong)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-wang-chenghong.pdf](https://www.usenix.org/system/files/usenixsecurity23-wang-chenghong.pdf)
## PrivateFL: Accurate, Differentially Private Federated Learning via Personalized Data Transformation.
### Authors
* Yuchen Yang, The Johns Hopkins University
* Bo Hui, The Johns Hopkins University
* Haolin Yuan, The Johns Hopkins University
* Neil Gong, Duke University
* Yinzhi Cao, The Johns Hopkins University
### Abstract
> Federated learning (FL) enables multiple clients to collaboratively train a model with the coordination of a central server.  Although FL improves data privacy via keeping each client's training data locally, an attacker—e.g., an untrusted server—an still compromise the privacy of clients' local training data via various inference attacks.  A de facto approach to preserving FL privacy is Differential Privacy (DP), which adds random noise during training. However, when applied to FL, DP suffers from a key limitation: it sacrifices the model accuracy substantially—which is even more severely than being applied to traditional centralized learning—to achieve a meaningful level of privacy.   In this paper, we study the accuracy degradation cause of FL+DP and then design an approach to improve the accuracy. First, we propose that such accuracy degradation is partially because DP introduces additional heterogeneity among FL clients when adding different random noise with clipping bias during local training. To the best of our knowledge, we are the first to associate DP in FL with client heterogeneity.  Second, we design PrivateFL to learn accurate, differentially private models in FL with reduced heterogeneity. The key idea is to jointly learn a differentially private, personalized data transformation for each client during local training. The personalized data transformation shifts client's local data distribution to compensate the heterogeneity introduced by DP, thus improving FL model's accuracy. In the evaluation, we combine and compare PrivateFL with eight state-of-the-art differentially private FL methods on seven benchmark datasets, including six image and one non-image datasets. Our results show that PrivateFL learns accurate FL models with a small ε, e.g., 93.3% on CIFAR-10 with 100 clients under (ε = 2, δ = 1e – 3)-DP.   Moreover, PrivateFL can be combined with prior works to reduce DP-induced heterogeneity and further improve their accuracy.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/yang-yuchen](https://www.usenix.org/conference/usenixsecurity23/presentation/yang-yuchen)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-yang-yuchen.pdf](https://www.usenix.org/system/files/usenixsecurity23-yang-yuchen.pdf)
## What Are the Chances? Explaining the Epsilon Parameter in Differential Privacy.
### Authors
* Priyanka Nanayakkara, Northwestern University
* Mary Anne Smart, University of California San Diego
* Rachel Cummings, Columbia University
* Gabriel Kaptchuk, Boston University
* Elissa M. Redmiles, Max Planck Institute for Software Systems
### Abstract
> Differential privacy (DP) is a mathematical privacy notion increasingly deployed across government and industry. With DP, privacy protections are probabilistic: they are bounded by the privacy loss budget parameter, ε. Prior work in health and computational science finds that people struggle to reason about probabilistic risks. Yet, communicating the implications of ε to people contributing their data is vital to avoiding privacy theater—presenting meaningless privacy protection as meaningful—and empowering more informed data-sharing decisions. Drawing on best practices in risk communication and usability, we develop three methods to convey probabilistic DP guarantees to end users: two that communicate odds and one offering concrete examples of DP outputs.We quantitatively evaluate these explanation methods in a vignette survey study (n = 963) via three metrics: objective risk comprehension, subjective privacy understanding of DP guarantees, and self-efficacy. We find that odds-based explanation methods are more effective than (1) output-based methods and (2) state-of-the-art approaches that gloss over information about ε. Further, when offered information about ε, respondents are more willing to share their data than when presented with a state-of-the-art DP explanation; this willingness to share is sensitive to ε values: as privacy protections weaken, respondents are less likely to share data.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/nanayakkara](https://www.usenix.org/conference/usenixsecurity23/presentation/nanayakkara)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-nanayakkara.pdf](https://www.usenix.org/system/files/usenixsecurity23-nanayakkara.pdf)
## Tight Auditing of Differentially Private Machine Learning.
### Authors
* Milad Nasr, Google DeepMind
* Jamie Hayes, Google DeepMind
* Thomas Steinke, Google DeepMind
* Borja Balle, Google DeepMind
* Florian Tramèr, ETH Zurich
* Matthew Jagielski, Google DeepMind
* Nicholas Carlini, Google DeepMind
* Andreas Terzis, Google DeepMind
### Abstract
> Auditing mechanisms for differential privacy use probabilistic means to empirically estimate the privacy level of an algorithm. For private machine learning, existing auditing mechanisms are tight: the empirical privacy estimate (nearly) matches the algorithm's provable privacy guarantee. But these auditing techniques suffer from two limitations. First, they only give tight estimates under implausible worst-case assumptions (e.g., a fully adversarial dataset). Second, they require thousands or millions of training runs to produce nontrivial statistical estimates of the privacy leakage.This work addresses both issues. We design an improved auditing scheme that yields tight privacy estimates for natural (not adversarially crafted) datasets—if the adversary can see all model updates during training. Prior auditing works rely on the same assumption, which is permitted under the standard differential privacy threat model. This threat model is also applicable, e.g., in federated learning settings. Moreover, our auditing scheme requires only two training runs (instead of thousands) to produce tight privacy estimates, by adapting recent advances in tight composition theorems for differential privacy. We demonstrate the utility of our improved auditing schemes by surfacing implementation bugs in private machine learning code that eluded prior auditing techniques.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/nasr](https://www.usenix.org/conference/usenixsecurity23/presentation/nasr)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-nasr.pdf](https://www.usenix.org/system/files/usenixsecurity23-nasr.pdf)
## PrivTrace: Differentially Private Trajectory Synthesis by Adaptive Markov Models.
### Authors
* Haiming Wang, Zhejiang University
* Zhikun Zhang, CISPA Helmholtz Center for Information Security
* Tianhao Wang, University of Virginia
* Shibo He, Zhejiang University
* Michael Backes, CISPA Helmholtz Center for Information Security
* Jiming Chen, Zhejiang University
* Yang Zhang, CISPA Helmholtz Center for Information Security
### Abstract
> Publishing trajectory data (individual's movement information) is very useful, but it also raises privacy concerns. To handle the privacy concern, in this paper, we apply differential privacy, the standard technique for data privacy, together with Markov chain model, to generate synthetic trajectories. We notice that existing studies all use Markov chain model and thus propose a framework to analyze the usage of the Markov chain model in this problem. Based on the analysis, we come up with an effective algorithm PrivTrace that uses the first-order and second-order Markov model adaptively. We evaluate PrivTrace and existing methods on synthetic and real-world datasets to demonstrate the superiority of our method.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/wang-haiming](https://www.usenix.org/conference/usenixsecurity23/presentation/wang-haiming)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-wang-haiming.pdf](https://www.usenix.org/system/files/usenixsecurity23-wang-haiming.pdf)
## Meta-Sift: How to Sift Out a Clean Subset in the Presence of Data Poisoning?
### Authors
* Yi Zeng, Virginia Tech and SONY AI
* Minzhou Pan, Virginia Tech
* Himanshu Jahagirdar, Virginia Tech
* Ming Jin, Virginia Tech
* Lingjuan Lyu, SONY AI
* Ruoxi Jia, Virginia Tech
### Abstract
> External data sources are increasingly being used to train machine learning (ML) models as the data demand increases. However, the integration of external data into training poses data poisoning risks, where malicious providers manipulate their data to compromise the utility or integrity of the model. Most data poisoning defenses assume access to a set of clean data (referred to as the base set), which could be obtained through trusted sources. But it also becomes common that entire data sources for an ML task are untrusted (e.g., Internet data). In this case, one needs to identify a subset within a contaminated dataset as the base set to support these defenses. This paper starts by examining the performance of defenses when poisoned samples are mistakenly mixed into the base set. We analyze five representative defenses that use base sets and find that their performance deteriorates dramatically with less than 1% poisoned points in the base set. These findings suggest that sifting out a base set with \emph{high precision} is key to these defenses' performance. Motivated by these observations, we study how precise existing automated tools and human inspection are at identifying clean data in the presence of data poisoning. Unfortunately, neither effort achieves the precision needed that enables effective defenses. Worse yet, many of the outcomes of these methods are worse than random selection. In addition to uncovering the challenge, we take a step further and propose a practical countermeasure, Meta-Sift. Our method is based on the insight that existing poisoning attacks shift data distributions, resulting in high prediction loss when training on the clean portion of a poisoned dataset and testing on the corrupted portion. Leveraging the insight, we formulate a bilevel optimization to identify clean data and further introduce a suite of techniques to improve the efficiency and precision of the identification. Our evaluation shows that Meta-Sift can sift a clean base set with 100\% precision under a wide range of poisoning threats. The selected base set is large enough to give rise to successful defense when plugged into the existing defense techniques.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/zeng](https://www.usenix.org/conference/usenixsecurity23/presentation/zeng)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-zeng.pdf](https://www.usenix.org/system/files/usenixsecurity23-zeng.pdf)
## Towards A Proactive ML Approach for Detecting Backdoor Poison Samples.
### Authors
* Xiangyu Qi, Princeton University
* Tinghao Xie, Princeton University
* Jiachen T. Wang, Princeton University
* Tong Wu, Princeton University
* Saeed Mahloujifar, Princeton University
* Prateek Mittal, Princeton University
### Abstract
> Adversaries can embed backdoors in deep learning models by introducing backdoor poison samples into training datasets. In this work, we investigate how to detect such poison samples to mitigate the threat of backdoor attacks. First, we uncover a post-hoc workflow underlying most prior work, where defenders passively allow the attack to proceed and then leverage the characteristics of the post-attacked model to uncover poison samples. We reveal that this workflow does not fully exploit defenders' capabilities, and defense pipelines built on it are prone to failure or performance degradation in many scenarios. Second, we suggest a paradigm shift by promoting a proactive mindset in which defenders engage proactively with the entire model training and poison detection pipeline, directly enforcing and magnifying distinctive characteristics of the post-attacked model to facilitate poison detection. Based on this, we formulate a unified framework and provide practical insights on designing detection pipelines that are more robust and generalizable. Third, we introduce the technique of Confusion Training (CT) as a concrete instantiation of our framework. CT applies an additional poisoning attack to the already poisoned dataset, actively decoupling benign correlation while exposing backdoor patterns to detection. Empirical evaluations on 4 datasets and 14 types of attacks validate the superiority of CT over 14 baseline defenses.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/qi](https://www.usenix.org/conference/usenixsecurity23/presentation/qi)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-qi.pdf](https://www.usenix.org/system/files/usenixsecurity23-qi.pdf)
## PORE: Provably Robust Recommender Systems against Data Poisoning Attacks.
### Authors
* Jinyuan Jia, The Pennsylvania State University
* Yupei Liu, Duke University
* Yuepeng Hu, Duke University
* Neil Zhenqiang Gong, Duke University
### Abstract
> Data poisoning attacks spoof a recommender system to make arbitrary, attacker-desired recommendations via injecting fake users with carefully crafted rating scores into the recommender system. We envision a cat-and-mouse game for such data poisoning attacks and their defenses, i.e., new defenses are designed to defend against existing attacks and new attacks are designed to break them. To prevent such cat-and-mouse game, we propose PORE, the first framework to build provably robust recommender systems in this work. PORE can transform any existing recommender system to be provably robust against any untargeted data poisoning attacks, which aim to reduce the overall performance of a recommender system. Suppose PORE recommends top-N items to a user when there is no attack. We prove that PORE still recommends at least r of the N items to the user under any data poisoning attack, where r is a function of the number of fake users in the attack. Moreover, we design an efficient algorithm to compute r for each user. We empirically evaluate PORE on popular benchmark datasets.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/jia](https://www.usenix.org/conference/usenixsecurity23/presentation/jia)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-jia.pdf](https://www.usenix.org/system/files/usenixsecurity23-jia.pdf)
## Every Vote Counts: Ranking-Based Training of Federated Learning to Resist Poisoning Attacks.
### Authors
* Hamid Mozaffari, University of Massachusetts Amherst
* Virat Shejwalkar, University of Massachusetts Amherst
* Amir Houmansadr, University of Massachusetts Amherst
### Abstract
> Federated learning (FL) allows untrusted clients to collaboratively train a common machine learning model, called global model, without sharing their private/proprietary training data. However, FL is susceptible to poisoning by malicious clients who aim to hamper the accuracy of the global model by contributing malicious updates during FL's training process.  We argue that the key factor to the success of poisoning attacks against existing FL systems is the large space of model updates available to the clients to choose from. To address this, we propose Federated Rank Learning (FRL). FRL reduces the space of client updates from model parameter updates (a continuous space of float numbers) in standard FL to the space of parameter rankings (a discrete space of integer values). To be able to train the global model using parameter ranks (instead of parameter weights), FRL leverage ideas from recent supermasks training mechanisms. Specifically, FRL clients rank the parameters of a randomly initialized neural network (provided by the server) based on their local training data, and the FRL server uses a voting mechanism to aggregate the parameter rankings submitted by the clients.  Intuitively, our voting-based aggregation mechanism prevents poisoning clients from making significant adversarial modifications to the global model, as each client will have a single vote! We demonstrate the robustness of FRL to poisoning through analytical proofs and experimentation, and we show its high communication efficiency.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/mozaffari](https://www.usenix.org/conference/usenixsecurity23/presentation/mozaffari)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-mozaffari.pdf](https://www.usenix.org/system/files/usenixsecurity23-mozaffari.pdf)
## Fine-grained Poisoning Attack to Local Differential Privacy Protocols for Mean and Variance Estimation.
### Authors
* Xiaoguang Li, Xidian University and Purdue University
* Ninghui Li, Purdue University
* Wenhai Sun, Purdue University
* Neil Zhenqiang Gong, Duke University
* Hui Li, Xidian University
### Abstract
> Although local differential privacy (LDP) protects individual users' data from inference by an untrusted data curator, recent studies show that  an attacker can launch a data poisoning attack from the user side to inject carefully-crafted bogus data into the LDP protocols in order to maximally skew the final estimate by the data curator.  In this work, we further advance this knowledge by proposing a new fine-grained attack, which allows the attacker to fine-tune and simultaneously manipulate mean and variance estimations that are popular analytical tasks for many real-world applications. To accomplish this goal, the attack leverages the characteristics of LDP to inject fake data into the output domain of the local LDP instance. We call our attack the output poisoning attack (OPA). We observe a security-privacy consistency where a small privacy loss enhances the security of LDP, which contradicts the known security-privacy trade-off from prior work. We further study the consistency and reveal a more holistic view of the threat landscape of data poisoning attacks on LDP. We comprehensively evaluate our attack against a baseline attack that intuitively provides false input to LDP. The experimental results show that OPA outperforms the baseline on three real-world datasets. We also propose a novel defense method that can recover the result accuracy from polluted data collection and offer insight into the secure LDP design.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/li-xiaoguang](https://www.usenix.org/conference/usenixsecurity23/presentation/li-xiaoguang)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-li-xiaoguang.pdf](https://www.usenix.org/system/files/usenixsecurity23-li-xiaoguang.pdf)
## Your Exploit is Mine: Instantly Synthesizing Counterattack Smart Contract.
### Authors
* Zhuo Zhang, Purdue University
* Zhiqiang Lin, Ohio State University
* Marcelo Morales, Ohio State University
* Xiangyu Zhang, Purdue University
* Kaiyuan Zhang, Purdue University
### Abstract
> Smart contracts are susceptible to exploitation due to their unique nature. Despite efforts to identify vulnerabilities using fuzzing, symbolic execution, formal verification, and manual auditing, exploitable vulnerabilities still exist and have led to billions of dollars in monetary losses. To address this issue, it is critical that runtime defenses are in place to minimize exploitation risk. In this paper, we present STING, a novel runtime defense mechanism against smart contract exploits. The key idea is to instantly synthesize counterattack smart contracts from attacking transactions and leverage the power of Maximal Extractable Value (MEV) to front run attackers. Our evaluation with 62 real-world recent exploits demonstrates its effectiveness, successfully countering 54 of the exploits (i.e., intercepting all the funds stolen by the attacker). In comparison, a general front-runner defense could only handle 12 exploits. Our results provide a clear proof-of-concept that STING is a viable defense mechanism against smart contract exploits and has the potential to significantly reduce the risk of exploitation in the smart contract ecosystem.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-zhuo-exploit](https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-zhuo-exploit)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-zhang-zhuo-exploit.pdf](https://www.usenix.org/system/files/usenixsecurity23-zhang-zhuo-exploit.pdf)
## Smart Learning to Find Dumb Contracts.
### Authors
* Tamer Abdelaziz, National University of Singapore
* Aquinas Hobor, University College London
### Abstract
> We introduce Deep Learning Vulnerability Analyzer (DLVA), a vulnerability detection tool for Ethereum smart contracts based on powerful deep learning techniques for sequential data adapted for bytecode. We train DLVA to judge bytecode even though the supervising oracle, Slither, can only judge source code. DLVA's training algorithm is general: we “extend” a source code analysis to bytecode without any manual feature engineering, predefined patterns, or expert rules. DLVA's training algorithm is also robust: it overcame a 1.25% error rate mislabeled contracts, and—the student surpassing the teacher—found vulnerable contracts that Slither mislabeled. In addition to extending a source code analyzer to bytecode, DLVA is much faster than conventional tools for smart contract vulnerability detection based on formal methods: DLVA checks contracts for 29 vulnerabilities in 0.2 seconds, a 10–1,000x speedup compared to traditional tools. DLVA has three key components. First, Smart Contract to Vector (SC2V) uses neural networks to map arbitrary smart contract bytecode to an high-dimensional floating-point vector. We benchmark SC2V against 4 state-of-the-art graph neural networks and show that it improves model differentiation by an average of 2.2%. Second, Sibling Detector (SD) classifies contracts when a target contract's vector is Euclidianclose to a labeled contract's vector in a training set; although only able to judge 55.7% of the contracts in our test set, it has an average Slither-predictive accuracy of 97.4% with a false positive rate of only 0.1%. Third, Core Classifier (CC) uses neural networks to infer vulnerable contracts regardless of vector distance. We benchmark DLVA's CC with 10 “offthe-shelf” machine learning techniques and show that the CC improves average accuracy by 11.3%. Overall, DLVA predicts Slither's labels with an overall accuracy of 92.7% and associated false positive rate of 7.2%. Lastly, we benchmark DLVA against nine well-known smart contract analysis tools. Despite using much less analysis time, DLVA completed every query, leading the pack with an average accuracy of 99.7%, pleasingly balancing high true positive rates with low false positive rates.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/abdelaziz](https://www.usenix.org/conference/usenixsecurity23/presentation/abdelaziz)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-abdelaziz.pdf](https://www.usenix.org/system/files/usenixsecurity23-abdelaziz.pdf)
## Confusum Contractum: Confused Deputy Vulnerabilities in Ethereum Smart Contracts.
### Authors
* Fabio Gritti, University of California, Santa Barbara
* Nicola Ruaro, University of California, Santa Barbara
* Robert McLaughlin, University of California, Santa Barbara
* Priyanka Bose, University of California, Santa Barbara
* Dipanjan Das, University of California, Santa Barbara
* Ilya Grishchenko, University of California, Santa Barbara
* Christopher Kruegel, University of California, Santa Barbara
* Giovanni Vigna, University of California, Santa Barbara
### Abstract
> Smart contracts are immutable programs executed in the context of a globally distributed system known as a blockchain. They enable the decentralized implementation of many interesting applications, such as financial protocols, voting systems, and supply-chain management. In many cases, multiple smart contracts need to work together and communicate with one another to implement complex business logic. However, these smart contracts must take special care to guard against malicious interactions that might lead to the violation of a contract's security properties and possibly result in substantial financial losses.In this paper, we introduce a class of inter-program communication flaws that we call confused contract vulnerabilities. This type of bug is an instance of the confused deputy vulnerability, set in the new context of smart contract inter-communication. When exploiting a confused contract bug, an attacker is able to divert a remote (inter-contract) call in a confused (victim) contract to a target contract and function of the attacker's choosing. The call performs sensitive operations on behalf of the confused contract, which can result in financial loss or malicious modifications of the persistent storage of the involved contracts. To identify opportunities for confused contract attacks at scale, we implemented Jackal, a system that is able to automatically identify and exploit confused contracts and candidate target contracts on the Ethereum mainnet.We leveraged Jackal to analyze a total of 2,335,193 smart contracts deployed in the past two years, and we identified 529 potential confused contracts for which we were able to generate 31 working exploits. When investigating the impact of our exploits, we discovered past and present opportunities for confused contract attacks that could have compromised digital assets worth more than one million US dollars.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/gritti](https://www.usenix.org/conference/usenixsecurity23/presentation/gritti)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-gritti.pdf](https://www.usenix.org/system/files/usenixsecurity23-gritti.pdf)
## Panda: Security Analysis of Algorand Smart Contracts.
### Authors
* Zhiyuan Sun, The Hong Kong Polytechnic University and Southern University of Science and Technology
* Xiapu Luo, The Hong Kong Polytechnic University
* Yinqian Zhang, Southern University of Science and Technology
### Abstract
> Algorand has recently grown rapidly as a representative of the new generation of pure-proof-of-stake (PPoS) blockchains. At the same time, Algorand has also attracted more and more users to use it as a trading platform for non-fungible tokens. However, similar to traditional programs, the incorrect way of programming will lead to critical security vulnerabilities in Algorand smart contracts. In this paper, we first analyze the semantics of Algorand smart contracts and find 9 types of generic vulnerabilities. Next, we propose Panda, the first extensible static analysis framework that can automatically detect such vulnerabilities in Algorand smart contracts, and formally define the vulnerability detection rules. We also construct the first benchmark dataset to evaluate Panda. Finally, we used Panda to conduct a vulnerability assessment on all smart contracts on the Algorand blockchain and found 80,515 (10.38%) vulnerable smart signatures and 150,676 (27.73%) vulnerable applications. Of the vulnerable applications, 4,008 (4.04%) are still on the blockchain and have not been deleted. In the disclosure process, the vulnerabilities found by Panda have been acknowledged by many projects, including some critical blockchain infrastructures such as the decentralized exchange and the NFT auction platform.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/sun](https://www.usenix.org/conference/usenixsecurity23/presentation/sun)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-sun.pdf](https://www.usenix.org/system/files/usenixsecurity23-sun.pdf)
## Proxy Hunting: Understanding and Characterizing Proxy-based Upgradeable Smart Contracts in Blockchains.
### Authors
* William E Bodell III, Illinois Institute of Technology
* Sajad Meisami, Illinois Institute of Technology
* Yue Duan, Illinois Institute of Technology
### Abstract
> Upgradeable smart contracts (USCs) have become a key trend in smart contract development, bringing flexibility to otherwise immutable code. However, they also introduce security concerns. On the one hand, they require extensive security knowledge to implement in a secure fashion. On the other hand, they provide new strategic weapons for malicious activities. Thus, it is crucial to fully understand them, especially their security implications in the real-world. To this end, we conduct a large-scale study to systematically reveal the status quo of USCs in the wild. To achieve our goal, we develop a complete USC taxonomy to comprehensively characterize the unique behaviors of USCs and further develop USCHUNT, an automated USC analysis framework for supporting our study. Our study aims to answer three sets of essential research questions regarding USC importance, design patterns, and security issues. Our results show that USCs are of great importance to today’s blockchain as they hold billions of USD worth of digital assets. Moreover, our study summarizes eleven unique design patterns of USCs, and discovers a total of 2,546 real-world USC-related security and safety issues in six major categories.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/bodell](https://www.usenix.org/conference/usenixsecurity23/presentation/bodell)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-bodell.pdf](https://www.usenix.org/system/files/usenixsecurity23-bodell.pdf)
## Fuzztruction: Using Fault Injection-based Fuzzing to Leverage Implicit Domain Knowledge.
### Authors
* Nils Bars, Ruhr-Universität Bochum
* Moritz Schloegel, Ruhr-Universität Bochum
* Tobias Scharnowski, Ruhr-Universität Bochum
* Nico Schiller, Ruhr-Universität Bochum
* Thorsten Holz, CISPA Helmholtz Center for Information Security
### Abstract
> Today's digital communication relies on complex protocols and specifications for exchanging structured messages and data. Communication naturally involves two endpoints: One generating data and one consuming it. Traditional fuzz testing approaches replace one endpoint, the generator, with a fuzzer and rapidly test many mutated inputs on the target program under test. While this fully automated approach works well for loosely structured formats, this does not hold for highly structured formats, especially those that go through complex transformations such as compression or encryption. In this work, we propose a novel perspective on generating inputs in highly complex formats without relying on heavyweight program analysis techniques, coarse-grained grammar approximation, or a human domain expert. Instead of mutating the inputs for a target program, we inject faults into the data generation program so that this data is almost of the expected format. Such data bypasses the initial parsing stages in the consumer program and exercises deeper program states, where it triggers more interesting program behavior. To realize this concept, we propose a set of compile-time and run-time analyses to mutate the generator in a targeted manner, so that it remains intact and produces semi-valid outputs that satisfy the constraints of the complex format. We have implemented this approach in a prototype called Fuzztruction and show that it outperforms the state-of-the-art fuzzers AFL++, SYMCC, and WEIZZ. Fuzztruction finds significantly more coverage than existing methods, especially on targets that use cryptographic primitives. During our evaluation, Fuzztruction uncovered 151 unique crashes (after automated deduplication). So far, we manually triaged and reported 27 bugs and 4 CVEs were assigned.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/bars](https://www.usenix.org/conference/usenixsecurity23/presentation/bars)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-bars.pdf](https://www.usenix.org/system/files/usenixsecurity23-bars.pdf)
## FuzzJIT: Oracle-Enhanced Fuzzing for JavaScript Engine JIT Compiler.
### Authors
* Junjie Wang, College of Intelligence and Computing, Tianjin University
* Zhiyi Zhang, CodeSafe Team, Qi An Xin Group Corp.
* Shuang Liu, College of Intelligence and Computing, Tianjin University
* Xiaoning Du, Monash University
* Junjie Chen, College of Intelligence and Computing, Tianjin University
### Abstract
> We present a novel fuzzing technique, FuzzJIT, for exposing JIT compiler bugs in JavaScript engines, based on our insight that JIT compilers shall only speed up the execution but never change the execution result of JavaScript code. FuzzJIT can activate the JIT compiler for every test case and acutely capture any execution discrepancy caused by JIT compilers. The key to success is the design of an input wrapping template, which proactively activates the JIT compiler and makes the generated samples oracle-aware themselves and the oracle is tested during execution spontaneously. We also design a set of mutation strategies to emphasize program elements promising in revealing JIT compiler bugs. FuzzJIT drills to JIT compilers and at the same time retains the high efficiency of fuzzing. We have implemented the design and applied the prototype to find new JIT compiler bugs in four mainstream JavaScript engines. In one month, ten, five, two, and 16 new bugs are exposed in JavaScriptCore, V8, SpiderMonkey, and ChakraCore, respectively, with three demonstrated exploitable.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/wang-junjie](https://www.usenix.org/conference/usenixsecurity23/presentation/wang-junjie)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-wang-junjie.pdf](https://www.usenix.org/system/files/usenixsecurity23-wang-junjie.pdf)
## GLeeFuzz: Fuzzing WebGL Through Error Message Guided Mutation.
### Authors
* Hui Peng, Purdue University
* Zhihao Yao, UC Irvine
* Ardalan Amiri Sani, UC Irvine
* Dave (Jing) Tian, Purdue University
* Mathias Payer, EPFL
### Abstract
> WebGL is a set of standardized JavaScript APIs for GPU accelerated graphics. Security of the WebGL interface is paramount because it exposes remote and unsandboxed access to the underlying graphics stack (including the native GL libraries and GPU drivers) in the host OS. Unfortunately, applying state-of-the-art fuzzing techniques to the WebGL interface for vulnerability discovery is challenging because of (1) its huge input state space, and (2) the infeasibility of collecting code coverage across concurrent processes, closed-source libraries, and device drivers in the kernel. Our fuzzing technique, GLeeFuzz, guides input mutation by error messages instead of code coverage. Our key observation is that browsers emit meaningful error messages to aid developers in debugging their WebGL programs. Error messages indicate which part of the input fails (e.g., incomplete arguments, invalid arguments, or unsatisfied dependencies between API calls). Leveraging error messages as feedback, the fuzzer effectively expands coverage by focusing mutation on erroneous parts of the input. We analyze Chrome’s WebGL implementation to identify the dependencies between error-emitting statements and rejected parts of the input, and use this information to guide input mutation. We evaluate our GLeeFuzz prototype on Chrome, Firefox, and Safari on diverse desktop and mobile OSes. We discovered 7 vulnerabilities, 4 in Chrome, 2 in Safari, and 1 in Firefox. The Chrome vulnerabilities allow a remote attacker to freeze the GPU and possibly execute remote code at the browser privilege.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/peng](https://www.usenix.org/conference/usenixsecurity23/presentation/peng)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-peng.pdf](https://www.usenix.org/system/files/usenixsecurity23-peng.pdf)
## autofz: Automated Fuzzer Composition at Runtime.
### Authors
* Yu-Fu Fu, Georgia Institute of Technology
* Jaehyuk Lee, Georgia Institute of Technology
* Taesoo Kim, Georgia Institute of Technology
### Abstract
> Fuzzing has gained in popularity for software vulnerability detection by virtue of the tremendous effort to develop a diverse set of fuzzers. Thanks to various fuzzing techniques, most of the fuzzers have been able to demonstrate great performance on their selected targets. However, paradoxically, this diversity in fuzzers also made it difficult to select fuzzers that are best suitable for complex real-world programs, which we call selection burden.  Communities attempted to address this problem by creating a set of standard benchmarks to compare and contrast the performance of fuzzers for a wide range of applications, but the result was always a suboptimal decision—the best-performing fuzzer on average does not guarantee the best outcome for the target of a user's interest. To overcome this problem, we propose an automated, yet non-intrusive meta-fuzzer, called autofz, to maximize the benefits of existing state-of-the-art fuzzers via dynamic composition.  To an end user, this means that, instead of spending time on selecting which fuzzer to adopt (similar in concept to hyperparameter tuning in ML), one can simply put all of the available fuzzers to autofz (similar in concept to AutoML), and achieve the best, optimal result.  The key idea is to monitor the runtime progress of the fuzzers, called trends (similar in concept to gradient descent), and make a fine-grained adjustment of resource allocation (e.g., CPU time) of each fuzzer.  This is a stark contrast to existing approaches that statically combine a set of fuzzers, or via exhaustive pre-training per target program - autofz deduces a suitable set of fuzzers of the active workload in a fine-grained manner at runtime.  Our evaluation shows that, given the same amount of computation resources, autofz outperforms any best-performing individual fuzzers in 11 out of 12 available benchmarks and beats the best, collaborative fuzzing approaches in 19 out of 20 benchmarks without any prior knowledge in terms of coverage.  Moreover, on average, autofz found 152% more bugs than individual fuzzers on UNIFUZZ and FTS, and 415% more bugs than collaborative fuzzing on UNIFUZZ.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/fu-yu-fu](https://www.usenix.org/conference/usenixsecurity23/presentation/fu-yu-fu)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-fu-yu-fu.pdf](https://www.usenix.org/system/files/usenixsecurity23-fu-yu-fu.pdf)
## CarpetFuzz: Automatic Program Option Constraint Extraction from Documentation for Fuzzing.
### Authors
* Dawei Wang, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Ying Li, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Zhiyu Zhang, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Kai Chen, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China; Beijing Academy of Artificial Intelligence, China
### Abstract
> The large-scale code in software supports the rich and diverse functionalities, and at the same time contains potential vulnerabilities. Fuzzing, as one of the most popular vulnerability detection methods, continues evolving in both industry and academy, aiming to find more vulnerabilities by covering more code. However, we find that even with the state-of-the-art fuzzers, there is still some unexplored code that can only be triggered using a specific combination of program options. Simply mutating the options may generate many invalid combinations due to the lack of consideration of constraints (or called relationships) among options. In this paper, we leverage natural language processing (NLP) to automatically extract option descriptions from program documents and analyze the relationship (e.g., conflicts, dependencies) among the options before filtering out invalid combinations and only leaving the valid ones for fuzzing. We implemented a tool called CarpetFuzz and evaluated its performance. The results show that CarpetFuzz accurately extracts the relationships from documents with 96.10% precision and 88.85% recall. Based on these relationships, CarpetFuzz reduced the 67.91% option combinations to be tested. It helps AFL find 45.97% more paths that other fuzzers cannot discover. After analyzing 20 popular open-source programs, CarpetFuzz discovered 57 vulnerabilities, including 43 undisclosed ones. We also successfully obtained CVE IDs for 30 vulnerabilities.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/wang-dawei](https://www.usenix.org/conference/usenixsecurity23/presentation/wang-dawei)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-wang-dawei.pdf](https://www.usenix.org/system/files/usenixsecurity23-wang-dawei.pdf)
## SCARF - A Low-Latency Block Cipher for Secure Cache-Randomization.
### Authors
* Federico Canale, Ruhr-University Bochum
* Tim Güneysu, Ruhr-University Bochum and DFKI
* Gregor Le, Ruhr-University Bochum
* er, Ruhr-University Bochum
* Jan Philipp Thoma, Ruhr-University Bochum
* Yosuke Todo, NTT Social Informatics Laboratories
* Rei Ueno, Tohoku University
### Abstract
> Randomized cache architectures have proven to significantly increase the complexity of contention-based cache side channel attacks and therefore present an important building block for side-channel secure microarchitectures. By randomizing the address-to-cache-index mapping, attackers can no longer trivially construct minimal eviction sets which are fundamental for contention-based cache attacks. At the same time, randomized caches maintain the flexibility of traditional caches, making them broadly applicable across various CPU-types. This is a major advantage over cache partitioning approaches.A large variety of randomized cache architectures has been proposed. However, the actual randomization function received little attention and is often neglected in these proposals. Since the randomization operates directly on the critical path of the cache lookup, the function needs to have extremely low latency. At the same time, attackers must not be able to bypass the randomization which would nullify the security benefit of the randomized mapping. In this paper we propose SCARF (Secure CAche Randomization Function), the first dedicated cache randomization cipher which achieves low latency and is cryptographically secure in the cache attacker model. The design methodology for this dedicated cache cipher enters new territory in the field of block ciphers with a small 10-bit block length and heavy key-dependency in few rounds.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/canale](https://www.usenix.org/conference/usenixsecurity23/presentation/canale)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-canale.pdf](https://www.usenix.org/system/files/usenixsecurity23-canale.pdf)
## The Gates of Time: Improving Cache Attacks with Transient Execution.
### Authors
* Daniel Katzman, Tel Aviv University
* William Kosasih, The University of Adelaide
* Chitchanok Chuengsatiansup, The University of Melbourne
* Eyal Ronen, Tel Aviv University
* Yuval Yarom, The University of Adelaide
### Abstract
> For over two decades, cache attacks have been shown to pose a significant risk to the security of computer systems. In particular, a large number of works show that cache attacks provide a stepping stone for implementing transient-execution attacks. However, much less effort has been expended investigating the reverse direction—how transient execution can be exploited for cache attacks. In this work, we answer this question. We first show that using transient execution, we can perform arbitrary manipulations of the cache state. Specifically, we design versatile logical gates whose inputs and outputs are the caching state of memory addresses. Our gates are generic enough that we can implement them in WebAssembly. Moreover, the gates work on processors from multiple vendors, including Intel, AMD, Apple, and Samsung. We demonstrate that these gates are Turing complete and allow arbitrary computation on cache states, without exposing the logical values to the architectural state of the program. We then show two use cases for our gates in cache attacks. The first use case is to amplify the cache state, allowing us to create timing differences of over 100 millisecond between the cases that a specific memory address is cached or not. We show how we can use this capability to build eviction sets in WebAssembly, using only a low-resolution (0.1 millisecond) timer. For the second use case, we present the Prime+Scope attack, a variant of Prime+Probe that decouples the sampling of cache states from the measurement of said state. Prime+Store is the first timing-based cache attack that can sample the cache state at a rate higher than the clock rate. We show how to use Prime+Store to obtain bits from a concurrently executing modular exponentiation, when the only timing signal is at a resolution of 0.1 millisecond.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/katzman](https://www.usenix.org/conference/usenixsecurity23/presentation/katzman)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-katzman.pdf](https://www.usenix.org/system/files/usenixsecurity23-katzman.pdf)
## Synchronization Storage Channels (S2C): Timer-less Cache Side-Channel Attacks on the Apple M1 via Hardware Synchronization Instructions.
### Authors
* Jiyong Yu, University of Illinois Urbana-Champaign
* Aishani Dutta, University of Illinois Urbana-Champaign
* Trent Jaeger, Pennsylvania State University
* David Kohlbrenner, University of Washington
* Christopher W. Fletcher, University of Illinois Urbana-Champaign
### Abstract
> Shared caches have been a prime target for mounting crossprocess/core side-channel attacks. Fundamentally, these attacks require a mechanism to accurately observe changes in cache state. Most cache attacks rely on timing measurements to indirectly infer cache state changes, and attack success hinges on the reliability/availability of accurate timing sources. Far fewer techniques have been proposed to directly observe cache state changes without reliance on timers. Further, none of said ‘timer-less' techniques are accessible to userspace attackers targeting modern CPUs.This paper proposes a novel technique for mounting timerless cache attacks targeting Apple M1 CPUs named Synchronization Storage Channels (S 2C). The key observation is that the implementation of synchronization instructions, specifically Load-Linked/Store-Conditional (LL/SC), makes architectural state changes when L1 cache evictions occur. This by itself is a useful starting point for attacks, however faces multiple technical challenges when being used to perpetrate cross-core cache attacks. Specifically, LL/SC only observes L1 evictions (not shared L2 cache evictions). Further, each attacker thread can only simultaneously monitor one address at a time through LL/SC (as opposed to many). We propose a suite of techniques and reverse engineering to overcome these limitations, and demonstrate how a single-threaded userspace attacker can use LL/SC to simultaneously monitor multiple (up to 11) victim L2 sets and succeed at standard cache-attack applications, such as breaking cryptographic implementations and constructing covert channels.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/yu-jiyong](https://www.usenix.org/conference/usenixsecurity23/presentation/yu-jiyong)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-yu-jiyong.pdf](https://www.usenix.org/system/files/usenixsecurity23-yu-jiyong.pdf)
## ClepsydraCache - Preventing Cache Attacks with Time-Based Evictions.
### Authors
* Jan Philipp Thoma, Ruhr University Bochum
* Christian Niesler, University of Duisburg-Essen
* Dominic Funke, Ruhr University Bochum
* Gregor Le, Ruhr University Bochum
* er, Ruhr University Bochum
* Pierre Mayr, Ruhr University Bochum
* Nils Pohl, Ruhr University Bochum
* Lucas Davi, University of Duisburg-Essen
* Tim Güneysu, Ruhr University Bochum & DFKI
### Abstract
> In the recent past, we have witnessed the shift towards attacks on the microarchitectural CPU level. In particular, cache side-channels play a predominant role as they allow an attacker to exfiltrate secret information by exploiting the CPU microarchitecture. These subtle attacks exploit the architectural visibility of conflicting cache addresses. In this paper, we present ClepsydraCache, which mitigates state-of-the-art cache attacks using a novel combination of cache decay and index randomization. Each cache entry is linked with a Time-To-Live (TTL) value. We propose a new dynamic scheduling mechanism of the TTL which plays a fundamental role in preventing those attacks while maintaining performance. ClepsydraCache efficiently protects against the latest cache attacks such as Prime+(Prune+)Probe. We present a full prototype in gem5 and lay out a proof-of-concept hardware design of the TTL mechanism, which demonstrates the feasibility of deploying ClepsydraCache in real-world systems.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/thoma](https://www.usenix.org/conference/usenixsecurity23/presentation/thoma)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-thoma.pdf](https://www.usenix.org/system/files/usenixsecurity23-thoma.pdf)
## CacheQL: Quantifying and Localizing Cache Side-Channel Vulnerabilities in Production Software.
### Authors
* Yuanyuan Yuan, The Hong Kong University of Science and Technology
* Zhibo Liu, The Hong Kong University of Science and Technology
* Shuai Wang, The Hong Kong University of Science and Technology
### Abstract
> Cache side-channel attacks extract secrets by examining how victim software accesses cache. To date, practical attacks on crypto systems and media libraries are demonstrated under different scenarios, inferring secret keys from crypto algorithms and reconstructing private media data such as images. This work first presents eight criteria for designing a fullfledged detector for cache side-channel vulnerabilities. Then, we propose CacheQL, a novel detector that meets all of these criteria. CacheQL precisely quantifies information leaks of binary code, by characterizing the distinguishability of logged side channel traces. Moreover, CacheQL models leakage as a cooperative game, allowing information leakage to be precisely distributed to program points vulnerable to cache side channels. CacheQL is meticulously optimized to analyze whole side channel traces logged from production software (where each trace can have millions of records), and it alleviates randomness introduced by crypto blinding, ORAM, or real-world noises. Our evaluation quantifies side-channel leaks of production crypto and media software. We further localize vulnerabilities reported by previous detectors and also identify a few hundred new vulnerable program points in recent OpenSSL (ver. 3.0.0), MbedTLS (ver. 3.0.0), Libgcrypt (ver. 1.9.4). Many of our localized program points are within the pre-processing modules of crypto libraries, which are not analyzed by existing works due to scalability. We also localize vulnerabilities in Libjpeg (ver. 2.1.2) that leak privacy about input images.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/yuan-yuanyuan-cacheql](https://www.usenix.org/conference/usenixsecurity23/presentation/yuan-yuanyuan-cacheql)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-yuan-yuanyuan-cacheql.pdf](https://www.usenix.org/system/files/usenixsecurity23-yuan-yuanyuan-cacheql.pdf)
## InfinityGauntlet: Expose Smartphone Fingerprint Authentication to Brute-force Attack.
### Authors
* Yu Chen, Xuanwu Lab, Tencent
* Yang Yu, Xuanwu Lab, Tencent
* Lidong Zhai, Institute of Information Engineering, Chinese Academy of Sciences
### Abstract
> Billions of smartphone fingerprint authentications (SFA) occur daily for unlocking, privacy and payment. Existing threats to SFA include presentation attacks (PA) and some case-by-case vulnerabilities. The former need to know the victim's fingerprint information (e.g., latent fingerprints) and can be mitigated by liveness detection and security policies. The latter require additional conditions (e.g., third-party screen protector, root permission) and are only exploitable for individual smartphone models.  In this paper, we conduct the first investigation on the general zero-knowledge attack towards SFA where no knowledge about the victim is needed. We propose a novelty fingerprint brute-force attack on off-the-shelf smartphones, named InfinityGauntlet. Firstly, we discover design vulnerabilities in SFA systems across various manufacturers, operating systems, and fingerprint types to achieve unlimited authentication attempts. Then, we use SPI MITM to bypass liveness detection and make automatic attempts. Finally, we customize a synthetic fingerprint generator to get a valid brute-force fingerprint dictionary. We design and implement low-cost equipment to launch InfinityGauntlet. A proof-of-concept case study demonstrates that InfinityGauntlet can brute-force attack successfully in less than an hour without any knowledge of the victim. Additionally, empirical analysis on representative smartphones shows the scalability of our work.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/chen-yu](https://www.usenix.org/conference/usenixsecurity23/presentation/chen-yu)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-chen-yu.pdf](https://www.usenix.org/system/files/usenixsecurity23-chen-yu.pdf)
## A Study of Multi-Factor and Risk-Based Authentication Availability.
### Authors
* Anthony Gavazzi, Northeastern University
* Ryan Williams, Northeastern University
* Engin Kirda, Northeastern University
* Long Lu, Northeastern University
* Andre King, MIT Lincoln Laboratory
* Andy Davis, MIT Lincoln Laboratory
* Tim Leek, MIT Lincoln Laboratory
### Abstract
> Password-based authentication (PBA) remains the most popular form of user authentication on the web despite its long-understood insecurity. Given the deficiencies of PBA, many online services support multi-factor authentication (MFA) and/or risk-based authentication (RBA) to better secure user accounts. The security, usability, and implementations of MFA and RBA have been studied extensively, but attempts to measure their availability among popular web services have lacked breadth. Additionally, no study has analyzed MFA and RBA prevalence together or how the presence of Single-Sign-On (SSO) providers affects the availability of MFA and RBA on the web. In this paper, we present a study of 208 popular sites in the Tranco top 5K that support account creation to understand the availability of MFA and RBA on the web, the additional authentication factors that can be used for MFA and RBA, and how logging into sites through more secure SSO providers changes the landscape of user authentication security. We find that only 42.31% of sites support any form of MFA, and only 22.12% of sites block an obvious account hijacking attempt. Though most sites do not offer MFA or RBA, SSO completely changes the picture. If one were to create an account for each site through an SSO provider that offers MFA and/or RBA, whenever available, 80.29% of sites would have access to MFA and 72.60% of sites would stop an obvious account hijacking attempt. However, this proliferation through SSO comes with a privacy trade-off, as nearly all SSO providers that support MFA and RBA are major third-party trackers.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/gavazzi](https://www.usenix.org/conference/usenixsecurity23/presentation/gavazzi)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-gavazzi.pdf](https://www.usenix.org/system/files/usenixsecurity23-gavazzi.pdf)
## A Large-Scale Measurement of Website Login Policies.
### Authors
* Suood Al Roomi, Georgia Institute of Technology, Kuwait University
* Frank Li, Georgia Institute of Technology
### Abstract
> Authenticating on a website using a password involves a multi-stage login process, where each stage entails critical policy and implementation decisions that impact login security and usability. While the security community has identified best practices for each stage of the login workflow, we currently lack a broad understanding of website login policies in practice. Prior work relied upon manual inspection of websites, producing evaluations of only a small population of sites skewed towards the most popular ones.In this work, we seek to provide a more comprehensive and systematic picture of real-world website login policies. We develop an automated method for inferring website login policies and apply it to domains across the Google CrUX Top 1 Million. We successfully evaluate the login policies on between 18K and 359K sites (varying depending on the login stage considered), providing characterization of a population two to three orders of magnitude larger than previous studies. Our findings reveal the extent to which insecure login policies exist and identify some underlying causes. Ultimately, our study provides the most comprehensive empirical grounding to date on the state of website login security, shedding light on directions for improving online authentication.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/al-roomi](https://www.usenix.org/conference/usenixsecurity23/presentation/al-roomi)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-al-roomi.pdf](https://www.usenix.org/system/files/usenixsecurity23-al-roomi.pdf)
## Security and Privacy Failures in Popular 2FA Apps.
### Authors
* Conor Gilsenan, UC Berkeley / ICSI
* Fuzail Shakir, UC Berkeley
* Noura Alomar, UC Berkeley
* Serge Egelman, UC Berkeley / ICSI
### Abstract
> The Time-based One-Time Password (TOTP) algorithm is a 2FA method that is widely deployed because of its relatively low implementation costs and purported security benefits over SMS 2FA. However, users of TOTP 2FA apps face a critical usability challenge: maintain access to the secrets stored within the TOTP app, or risk getting locked out of their accounts. To help users avoid this fate, popular TOTP apps implement a wide range of backup mechanisms, each with varying security and privacy implications. In this paper, we define an assessment methodology for conducting systematic security and privacy analyses of the backup and recovery functionality of TOTP apps. We identified all general purpose Android TOTP apps in the Google Play Store with at least 100k installs that implemented a backup mechanism (n = 22). Our findings show that most backup strategies end up placing trust in the same technologies that TOTP 2FA is meant to supersede: passwords, SMS, and email. Many backup implementations shared personal user information with third parties, had serious cryptographic flaws, and/or allowed the app developers to access the TOTP secrets in plaintext. We present our findings and recommend ways to improve the security and privacy of TOTP 2FA app backup mechanisms.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/gilsenan](https://www.usenix.org/conference/usenixsecurity23/presentation/gilsenan)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-gilsenan.pdf](https://www.usenix.org/system/files/usenixsecurity23-gilsenan.pdf)
## Multi-Factor Key Derivation Function (MFKDF) for Fast, Flexible, Secure, & Practical Key Management.
### Authors
* Vivek Nair, University of California, Berkeley
* Dawn Song, University of California, Berkeley
### Abstract
> We present the first general construction of a Multi-Factor Key Derivation Function (MFKDF). Our function expands upon password-based key derivation functions (PBKDFs) with support for using other popular authentication factors like TOTP, HOTP, and hardware tokens in the key derivation process. In doing so, it provides an exponential security improvement over PBKDFs with less than 12 ms of additional computational overhead in a typical web browser. We further present a threshold MFKDF construction, allowing for client-side key recovery and reconstitution if a factor is lost. Finally, by "stacking" derived keys, we provide a means of cryptographically enforcing arbitrarily specific key derivation policies. The result is a paradigm shift toward direct cryptographic protection of user data using all available authentication factors, with no noticeable change to the user experience. We demonstrate the ability of our solution to not only significantly improve the security of existing systems implementing PBKDFs, but also to enable new applications where PBKDFs would not be considered a feasible approach.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/nair-mfkdf](https://www.usenix.org/conference/usenixsecurity23/presentation/nair-mfkdf)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-nair-mfkdf.pdf](https://www.usenix.org/system/files/usenixsecurity23-nair-mfkdf.pdf)
## Log: It's Big, It's Heavy, It's Filled with Personal Data! Measuring the Logging of Sensitive Information in the Android Ecosystem.
### Authors
* Allan Lyons, University of Calgary
* Julien Gamba, IMDEA Networks Institute and Universidad Carlos III de Madrid
* Austin Shawaga, University of Calgary
* Joel Reardon, University of Calgary and AppCensus, Inc.
* Juan Tapiador, Universidad Carlos III de Madrid
* Serge Egelman, ICSI and UC Berkeley and AppCensus, Inc.
* Narseo Vallina-Rodriguez, IMDEA Networks Institute and AppCensus, Inc.
### Abstract
> Android offers a shared system that multiplexes all logged data from all system components, including both the operating system and the console output of apps that run on it. A security mechanism ensures that user-space apps can only read the log entries that they create, though many "privileged" apps are exempt from this restriction. This includes preloaded system apps provided by Google, the phone manufacturer, the cellular carrier, as well as those sharing the same signature. Consequently, Google advises developers to not log sensitive information to the system log. In this work, we examined the logging of sensitive data in the Android ecosystem. Using a field study, we show that most devices log some amount of user-identifying information. We show that the logging of "activity" names can inadvertently reveal information about users through their app usage. We also tested whether different smartphones log personal identifiers by default, examined preinstalled apps that access the system logs, and analyzed the privacy policies of manufacturers that report collecting system logs.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/lyons](https://www.usenix.org/conference/usenixsecurity23/presentation/lyons)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-lyons.pdf](https://www.usenix.org/system/files/usenixsecurity23-lyons.pdf)
## CodexLeaks: Privacy Leaks from Code Generation Language Models in GitHub Copilot.
### Authors
* Liang Niu, New York University
* Shujaat Mirza, New York University
* Zayd Maradni, New York University Abu Dhabi
* Christina Pöpper, New York University Abu Dhabi
### Abstract
> Code generation language models are trained on billions of lines of source code to provide code generation and auto-completion features, like those offered by code assistant GitHub Copilot with more than a million users. These datasets may contain sensitive personal information—personally identifiable, private, or secret—that these models may regurgitate. This paper introduces and evaluates a semi-automated pipeline for extracting sensitive personal information from the Codex model used in GitHub Copilot. We employ carefully-designed templates to construct prompts that are more likely to result in privacy leaks. To overcome the non-public training data, we propose a semi-automated filtering method using a blind membership inference attack. We validate the effectiveness of our membership inference approach on different code generation models. We utilize hit rate through the GitHub Search API as a distinguishing heuristic followed by human-in-the-loop evaluation, uncovering that approximately 8% (43) of the prompts yield privacy leaks. Notably, we observe that the model tends to produce indirect leaks, compromising privacy as contextual integrity by generating information from individuals closely related to the queried subject in the training corpus.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/niu](https://www.usenix.org/conference/usenixsecurity23/presentation/niu)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-niu.pdf](https://www.usenix.org/system/files/usenixsecurity23-niu.pdf)
## Freaky Leaky SMS: Extracting User Locations by Analyzing SMS Timings.
### Authors
* Evangelos Bitsikas, Northeastern University
* Theodor Schnitzler, Research Center Trustworthy Data Science and Security
* Christina Pöpper, New York University Abu Dhabi
* Aanjhan Ranganathan, Northeastern University
### Abstract
> Short Message Service (SMS) remains one of the most popular communication channels since its introduction in 2G cellular networks. In this paper, we demonstrate that merely receiving silent SMS messages regularly opens a stealthy side-channel that allows other regular network users to infer the whereabouts of the SMS recipient. The core idea is that receiving an SMS inevitably generates Delivery Reports whose reception bestows a timing attack vector at the sender. We conducted experiments across various countries, operators, and devices to show that an attacker can deduce the location of an SMS recipient by analyzing timing measurements from typical receiver locations. Our results show that, after training an ML model, the SMS sender can accurately determine multiple locations of the recipient. For example, our model achieves up to 96% accuracy for locations across different countries, and 86% for two locations within Belgium. Due to the way cellular networks are designed, it is difficult to prevent Delivery Reports from being returned to the originator making it challenging to thwart this covert attack without making fundamental changes to the network architecture.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/bitsikas](https://www.usenix.org/conference/usenixsecurity23/presentation/bitsikas)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-bitsikas.pdf](https://www.usenix.org/system/files/usenixsecurity23-bitsikas.pdf)
## The Writing on the Wall and 3D Digital Twins: Personal Information in (not so) Private Real Estate.
### Authors
* Rachel McAmis, University of Washington
* Tadayoshi Kohno, University of Washington
### Abstract
> Online real estate companies are starting to offer 3D virtual tours of homes (3D digital twins). We qualitatively analyzed 44 3D home tours with personal artifacts visible on Zillow and assessed each home for the extent and type of personal information shared. Using a codebook we created, we analyzed three categories of personal information in each home: government-provided guidance of what not to share on the internet, identity information, and behavioral information. Our analysis unearthed a wide variety of sensitive information across all homes, including names, hobbies, employment and education history, product preferences (e.g., pantry items, types of cigarettes), medications, credit card numbers, passwords, and more. Based on our analysis, residents both employed privacy protections and had privacy oversights. We identify potential adversaries that might use 3D tour information, highlight additional sensitive sources of indoor space information, and discuss future tools and policy changes that could address these issues.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/mcamis](https://www.usenix.org/conference/usenixsecurity23/presentation/mcamis)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-mcamis.pdf](https://www.usenix.org/system/files/usenixsecurity23-mcamis.pdf)
## Glaze: Protecting Artists from Style Mimicry by Text-to-Image Models.
### Authors
* Shawn Shan, University of Chicago
* Jenna Cryan, University of Chicago
* Emily Wenger, University of Chicago
* Haitao Zheng, University of Chicago
* Rana Hanocka, University of Chicago
* Ben Y. Zhao, University of Chicago
### Abstract
> Recent text-to-image diffusion models such as MidJourney and Stable Diffusion threaten to displace many in the professional artist community. In particular, models can learn to mimic the artistic style of specific artists after "fine-tuning" on samples of their art. In this paper, we describe the design, implementation and evaluation of Glaze, a tool that enables artists to apply "style cloaks" to their art before sharing online. These cloaks apply barely perceptible perturbations to images, and when used as training data, mislead generative models that try to mimic a specific artist. In coordination with the professional artist community, we deploy user studies to more than 1000 artists, assessing their views of AI art, as well as the efficacy of our tool, its usability and tolerability of perturbations, and robustness across different scenarios and against adaptive countermeasures. Both surveyed artists and empirical CLIP-based scores show that even at low perturbation levels (p=0.05), Glaze is highly successful at disrupting mimicry under normal conditions (>92%) and against adaptive countermeasures (>85%).
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/shan](https://www.usenix.org/conference/usenixsecurity23/presentation/shan)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-shan.pdf](https://www.usenix.org/system/files/usenixsecurity23-shan.pdf)
## Lost at C: A User Study on the Security Implications of Large Language Model Code Assistants.
### Authors
* Gustavo S, New York University
* oval, New York University
* Hammond Pearce, New York University
* Teo Nys, New York University
* Ramesh Karri, New York University
* Siddharth Garg, New York University
* Brendan Dolan-Gavitt, New York University
### Abstract
> Large Language Models (LLMs) such as OpenAI Codex are increasingly being used as AI-based coding assistants. Understanding the impact of these tools on developers’ code is paramount, especially as recent work showed that LLMs may suggest cybersecurity vulnerabilities. We conduct a security-driven user study (N=58) to assess code written by student programmers when assisted by LLMs. Given the potential severity of low-level bugs as well as their relative frequency in real-world projects, we tasked participants with implementing a singly-linked ‘shopping list’ structure in C. Our results indicate that the security impact in this setting (low-level C with pointer and array manipulations) is small: AI-assisted users produce critical security bugs at a rate no greater than 10% more than the control, indicating the use of LLMs does not introduce new security risks.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/sandoval](https://www.usenix.org/conference/usenixsecurity23/presentation/sandoval)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-sandoval.pdf](https://www.usenix.org/system/files/usenixsecurity23-sandoval.pdf)
## Two-in-One: A Model Hijacking Attack Against Text Generation Models.
### Authors
* Wai Man Si, CISPA Helmholtz Center for Information Security
* Michael Backes, CISPA Helmholtz Center for Information Security
* Yang Zhang, CISPA Helmholtz Center for Information Security
* Ahmed Salem, Microsoft
### Abstract
> Machine learning has progressed significantly in various applications ranging from face recognition to text generation. However, its success has been accompanied by different attacks. Recently a new attack has been proposed which raises both accountability and parasitic computing risks, namely the model hijacking attack. Nevertheless, this attack has only focused on image classification tasks. In this work, we broaden the scope of this attack to include text generation and classification models, hence showing its broader applicability. More concretely, we propose a new model hijacking attack, Ditto, that can hijack different text classification tasks into multiple generation ones, e.g., language translation, text summarization, and language modeling. We use a range of text benchmark datasets such as SST-2, TweetEval, AGnews, QNLI, and IMDB to evaluate the performance of our attacks. Our results show that by using Ditto, an adversary can successfully hijack text generation models without jeopardizing their utility.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/si](https://www.usenix.org/conference/usenixsecurity23/presentation/si)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-si.pdf](https://www.usenix.org/system/files/usenixsecurity23-si.pdf)
## PTW: Pivotal Tuning Watermarking for Pre-Trained Image Generators.
### Authors
* Nils Lukas, University of Waterloo
* Florian Kerschbaum, University of Waterloo
### Abstract
> Deepfakes refer to content synthesized using deep generators, which, when misused, have the potential to erode trust in digital media. Synthesizing high-quality deepfakes requires access to large and complex generators only a few entities can train and provide. The threat is malicious users that exploit access to the provided model and generate harmful deepfakes without risking detection. Watermarking makes deepfakes detectable by embedding an identifiable code into the generator that is later extractable from its generated images. We propose Pivotal Tuning Watermarking (PTW), a method for watermarking pre-trained generators (i) three orders of magnitude faster than watermarking from scratch and (ii) without the need for any training data. We improve existing watermarking methods and scale to generators 4× larger than related work. PTW can embed longer codes than existing methods while better preserving the generator's image quality. We propose rigorous, game-based definitions for robustness and undetectability and our study reveals that watermarking is not robust against an adaptive white-box attacker who has control over the generator's parameters. We propose an adaptive attack that can successfully remove any watermarking with access to only 200 non-watermarked images. Our work challenges the trustworthiness of watermarking for deepfake detection when the parameters of a generator are available.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/lukas](https://www.usenix.org/conference/usenixsecurity23/presentation/lukas)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-lukas.pdf](https://www.usenix.org/system/files/usenixsecurity23-lukas.pdf)
## Lessons Lost: Incident Response in the Age of Cyber Insurance and Breach Attorneys.
### Authors
* Daniel W. Woods, University of Edinburgh
* Rainer Böhme, University of Innsbruck
* Josephine Wolff, Tufts University
* Daniel Schwarcz, University of Minnesota
### Abstract
> Incident Response (IR) allows victim firms to detect, contain, and recover from security incidents. It should also help the wider community avoid similar attacks in the future. In pursuit of these goals, technical practitioners are increasingly influenced by stakeholders like cyber insurers and lawyers. This paper explores these impacts via a multi-stage, mixed methods research design that involved 69 expert interviews, data on commercial relationships, and an online validation workshop. The first stage of our study established 11 stylized facts that describe how cyber insurance sends work to a small numbers of IR firms, drives down the fee paid, and appoints lawyers to direct technical investigators. The second stage showed that lawyers when directing incident response often: introduce legalistic contractual and communication steps that slow-down incident response; advise IR practitioners not to write down remediation steps or to produce formal reports; and restrict access to any documents produced.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/woods](https://www.usenix.org/conference/usenixsecurity23/presentation/woods)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-woods.pdf](https://www.usenix.org/system/files/usenixsecurity23-woods.pdf)
## Bug Hunters' Perspectives on the Challenges and Benefits of the Bug Bounty Ecosystem.
### Authors
* Omer Akgul, University of Maryland
* Taha Eghtesad, Pennsylvania State University
* Amit Elazari, University of California, Berkeley
* Omprakash Gnawali, University of Houston
* Jens Grossklags, Technical University of Munich
* Michelle L. Mazurek, University of Maryland
* Daniel Votipka, Tufts University
* Aron Laszka, Pennsylvania State University
### Abstract
> Although researchers have characterized the bug-bounty ecosystem from the point of view of platforms and programs, minimal effort has been made to understand the perspectives of the main workers: bug hunters. To improve bug bounties, it is important to understand hunters’ motivating factors, challenges, and overall benefits. We address this research gap with three studies: identifying key factors through a free listing survey (n=56), rating each factor’s importance with a larger-scale factor-rating survey (n=159), and conducting semi-structured interviews to uncover details (n=24). Of 54 factors that bug hunters listed, we find that rewards and learning opportunities are the most important benefits. Further, we find scope to be the top differentiator between programs. Surprisingly, we find earning reputation to be one of the least important motivators for hunters. Of the challenges we identify, communication problems, such as unresponsiveness and disputes, are the most substantial. We present recommendations to make the bug-bounty ecosystem accommodating to more bug hunters and ultimately increase participation in an underutilized market.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/akgul](https://www.usenix.org/conference/usenixsecurity23/presentation/akgul)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-akgul.pdf](https://www.usenix.org/system/files/usenixsecurity23-akgul.pdf)
## Work-From-Home and COVID-19: Trajectories of Endpoint Security Management in a Security Operations Center.
### Authors
* Kailani R. Jones, University of Kansas
* Dalton A. Brucker-Hahn, University of Kansas
* Bradley Fidler, Independent Researcher
* Alex, University of Kansas
* ru G. Bardas, University of Kansas
### Abstract
> The COVID-19 surge of "Work From Home" (WFH) Internet use incentivized many organizations to strengthen their endpoint security monitoring capabilities. This trend has significant implications for how Security Operations Centers (SOCs) manage these end devices on their enterprise networks: in their organizational roles, regulatory environment, and required skills. By intersecting historical analysis (starting in the 1970s) and ethnography (analyzed 352 field notes across 1,000+ hours in a SOC over 34 months) whilst complementing with quantitative interviews (covering 7 other SOCs), we uncover causal forces that have pushed network management toward endpoints. We further highlight the negative impacts on end user privacy and analyst burnout. As such, we assert that SOCs should consider preparing for a continual, long-term shift from managing the network perimeter and the associated devices to commanding the actual user endpoints while facing potential privacy challenges and more burnout.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/jones](https://www.usenix.org/conference/usenixsecurity23/presentation/jones)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-jones.pdf](https://www.usenix.org/system/files/usenixsecurity23-jones.pdf)
## "Employees Who Don't Accept the Time Security Takes Are Not Aware Enough": The CISO View of Human-Centred Security.
### Authors
* Jonas Hielscher, Ruhr University Bochum
* Uta Menges, Ruhr University Bochum
* Simon Parkin, TU Delft
* Annette Kluge, Ruhr University Bochum
* M. Angela Sasse, Ruhr University Bochum
### Abstract
> In larger organisations, the security controls and policies that protect employees are typically managed by a Chief Information Security Officer (CISO). In research, industry, and policy, there are increasing efforts to relate principles of human behaviour interventions and influence to the practice of the CISO, despite these being complex disciplines in their own right. Here we explore how well the concepts of human-centred security (HCS) have survived exposure to the needs of practice: in an action research approach we engaged with n=30 members of a Swiss-based community of CISOs in five workshop sessions over the course of 8 months, dedicated to discussing HCS. We coded and analysed over 25 hours of notes we took during the discussions. We found that CISOs far and foremost perceive HCS as what is available on the market, namely awareness and phishing simulations. While they regularly shift responsibility either to the management (by demanding more support) or to the employees (by blaming them) we see a lack of power but also silo-thinking that prevents CISOs from considering actual human behaviour and friction that security causes for employees. We conclude that industry best practices and the state-of-the-art in HCS research are not aligned.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/hielscher](https://www.usenix.org/conference/usenixsecurity23/presentation/hielscher)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-hielscher.pdf](https://www.usenix.org/system/files/usenixsecurity23-hielscher.pdf)
## Aegis: Mitigating Targeted Bit-flip Attacks against Deep Neural Networks.
### Authors
* Jialai Wang, Tsinghua University
* Ziyuan Zhang, Beijing University of Posts and Telecommunications
* Meiqi Wang, Tsinghua University
* Han Qiu, Tsinghua University and Zhongguancun Laboratory
* Tianwei Zhang, Nanyang Technological University
* Qi Li, Tsinghua University and Zhongguancun Laboratory
* Zongpeng Li, Tsinghua University and Hangzhou Dianzi University
* Tao Wei, Ant Group
* Chao Zhang, Tsinghua University and Zhongguancun Laboratory
### Abstract
> Bit-flip attacks (BFAs) have attracted substantial attention recently, in which an adversary could tamper with a small number of model parameter bits to break the integrity of DNNs. To mitigate such threats, a batch of defense methods are proposed, focusing on the untargeted scenarios. Unfortunately, they either require extra trustworthy applications or make models more vulnerable to targeted BFAs. Countermeasures against targeted BFAs, stealthier and more purposeful by nature, are far from well established.  In this work, we propose Aegis, a novel defense method to mitigate targeted BFAs. The core observation is that existing targeted attacks focus on flipping critical bits in certain important layers. Thus, we design a dynamic-exit mechanism to attach extra internal classifiers (ICs) to hidden layers. This mechanism enables input samples to early-exit from different layers, which effectively upsets the adversary's attack plans. Moreover, the dynamic-exit mechanism randomly selects ICs for predictions during each inference to significantly increase the attack cost for the adaptive attacks where all defense mechanisms are transparent to the adversary. We further propose a robustness training strategy to adapt ICs to the attack scenarios through simulating BFAs during the IC training phase, to increase model robustness. Extensive evaluations over four well-known datasets and two popular DNN structures reveal that Aegis could effectively mitigate different state-of-the-art targeted attacks, reducing attack success rate by 5-10x, significantly outperforming existing defense methods. We open source the code of Aegis.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/wang-jialai](https://www.usenix.org/conference/usenixsecurity23/presentation/wang-jialai)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-wang-jialai.pdf](https://www.usenix.org/system/files/usenixsecurity23-wang-jialai.pdf)
## Rethinking White-Box Watermarks on Deep Learning Models under Neural Structural Obfuscation.
### Authors
* Yifan Yan, Fudan University
* Xudong Pan, Fudan University
* Mi Zhang, Fudan University
* Min Yang, Fudan University
### Abstract
> Copyright protection for deep neural networks (DNNs) is an urgent need for AI corporations. To trace illegally distributed model copies, DNN watermarking is an emerging technique for embedding and verifying secret identity messages in the prediction behaviors or the model internals. Sacrificing less functionality and involving more knowledge about the target DNN, the latter branch called white-box DNN watermarking is believed to be accurate, credible and secure against most known watermark removal attacks, with emerging research efforts in both the academy and the industry. In this paper, we present the first systematic study on how the mainstream white-box DNN watermarks are commonly vulnerable to neural structural obfuscation with dummy neurons, a group of neurons which can be added to a target model but leave the model behavior invariant. Devising a comprehensive framework to automatically generate and inject dummy neurons with high stealthiness, our novel attack intensively modifies the architecture of the target model to inhibit the success of watermark verification. With extensive evaluation, our work for the first time shows that nine published watermarking schemes require amendments to their verification procedures.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/yan](https://www.usenix.org/conference/usenixsecurity23/presentation/yan)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-yan.pdf](https://www.usenix.org/system/files/usenixsecurity23-yan.pdf)
## PELICAN: Exploiting Backdoors of Naturally Trained Deep Learning Models In Binary Code Analysis.
### Authors
* Zhuo Zhang, Purdue University
* Guanhong Tao, Purdue University
* Guangyu Shen, Purdue University
* Shengwei An, Purdue University
* Qiuling Xu, Purdue University
* Yingqi Liu, Purdue University
* Yapeng Ye, Purdue University
* Yaoxuan Wu, University of California, Los Angeles
* Xiangyu Zhang, Purdue University
### Abstract
> Deep Learning (DL) models are increasingly used in many cyber-security applications and achieve superior performance compared to traditional solutions. In this paper, we study backdoor vulnerabilities in naturally trained models used in binary analysis. These backdoors are not injected by attackers but rather products of defects in datasets and/or training processes. The attacker can exploit these vulnerabilities by injecting some small fixed input pattern (e.g., an instruction) called backdoor trigger to their input (e.g., a binary code snippet for a malware detection DL model) such that misclassification can be induced (e.g., the malware evades the detection). We focus on transformer models used in binary analysis. Given a model, we leverage a trigger inversion technique particularly designed for these models to derive trigger instructions that can induce misclassification. During attack, we utilize a novel trigger injection technique to insert the trigger instruction(s) to the input binary code snippet. The injection makes sure that the code snippets' original program semantics are preserved and the trigger becomes an integral part of such semantics and hence cannot be easily eliminated. We evaluate our prototype PELICAN on 5 binary analysis tasks and 15 models. The results show that PELICAN can effectively induce misclassification on all the evaluated models in both white-box and black-box scenarios. Our case studies demonstrate that PELICAN can exploit the backdoor vulnerabilities of two closed-source commercial tools.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-zhuo-pelican](https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-zhuo-pelican)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-zhang-zhuo-pelican.pdf](https://www.usenix.org/system/files/usenixsecurity23-zhang-zhuo-pelican.pdf)
## IvySyn: Automated Vulnerability Discovery in Deep Learning Frameworks.
### Authors
* Neophytos Christou, Brown University
* Di Jin, Brown University
* Vaggelis Atlidakis, Brown University
* Baishakhi Ray, Columbia University
* Vasileios P. Kemerlis, Brown University
### Abstract
> We present IvySyn, the first fully-automated framework for discovering memory error vulnerabilities in Deep Learning (DL) frameworks. IvySyn leverages the statically-typed nature of native APIs in order to automatically perform type-aware mutation-based fuzzing on low-level kernel code. Given a set of offending inputs that trigger memory safety (and runtime) errors in low-level, native DL (C/C++) code, IvySyn automatically synthesizes code snippets in high-level languages (e.g., in Python), which propagate error-triggering input via high(er)-level APIs. Such code snippets essentially act as "Proof of Vulnerability", as they demonstrate the existence of bugs in native code that an attacker can target through various high-level APIs. Our evaluation shows that IvySyn significantly outperforms past approaches, both in terms of efficiency and effectiveness, in finding vulnerabilities in popular DL frameworks. Specifically, we used IvySyn to test Tensor-Flow and PyTorch. Although still an early prototype, IvySyn has already helped the TensorFlow and PyTorch framework developers to identify and fix 61 previously-unknown security vulnerabilities, and assign 39 unique CVEs.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/christou](https://www.usenix.org/conference/usenixsecurity23/presentation/christou)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-christou.pdf](https://www.usenix.org/system/files/usenixsecurity23-christou.pdf)
## Hey Kimya, Is My Smart Speaker Spying on Me? Taking Control of Sensor Privacy Through Isolation and Amnesia.
### Authors
* Piet De Vaere, ETH Zürich
* Adrian Perrig, ETH Zürich
### Abstract
> Although smart speakers and other voice assistants are becoming increasingly ubiquitous, their always-standby nature continues to prompt significant privacy concerns. To address these, we propose Kimya, a hardening framework that allows device vendors to provide strong data-privacy guarantees. Concretely, Kimya guarantees that microphone data can only be used for local processing, and is immediately discarded unless a user-auditable notification is generated. Kimya thus makes devices accountable for their data-retention behavior. Moreover, Kimya is not limited to voice assistants, but is applicable to all devices with always-standby, event-triggered sensors. We implement Kimya for ARM Cortex-M, and apply it to a wake-word detection engine. Our evaluation shows that Kimya introduces low overhead, can be used in constrained environments, and does not require hardware modifications.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/de-vaere](https://www.usenix.org/conference/usenixsecurity23/presentation/de-vaere)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-de-vaere.pdf](https://www.usenix.org/system/files/usenixsecurity23-de-vaere.pdf)
## Spying through Your Voice Assistants: Realistic Voice Command Fingerprinting.
### Authors
* Dilawer Ahmed, North Carolina State University
* Aafaq Sabir, North Carolina State University
* Anupam Das, North Carolina State University
### Abstract
> Voice assistants are becoming increasingly pervasive due to the convenience and automation they provide through the voice interface. However, such convenience often comes with unforeseen security and privacy risks. For example, encrypted traffic from voice assistants can leak sensitive information about their users' habits and lifestyles. In this paper, we present a taxonomy of fingerprinting voice commands on the most popular voice assistant platforms (Google, Alexa, and Siri). We also provide a deeper understanding of the feasibility of fingerprinting third-party applications and streaming services over the voice interface. Our analysis not only improves the state-of-the-art technique but also studies a more realistic setup for fingerprinting voice activities over encrypted traffic.Our proposed technique considers a passive network eavesdropper observing encrypted traffic from various devices within a home and, therefore, first detects the invocation/activation of voice assistants followed by what specific voice command is issued. Using an end-to-end system design, we show that it is possible to detect when a voice assistant is activated with 99% accuracy and then utilize the subsequent traffic pattern to infer more fine-grained user activities with around 77-80% accuracy.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/ahmed-dilawer](https://www.usenix.org/conference/usenixsecurity23/presentation/ahmed-dilawer)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-ahmed-dilawer.pdf](https://www.usenix.org/system/files/usenixsecurity23-ahmed-dilawer.pdf)
## QFA2SR: Query-Free Adversarial Transfer Attacks to Speaker Recognition Systems.
### Authors
* Guangke Chen, ShanghaiTech University
* Yedi Zhang, ShanghaiTech University
* Zhe Zhao, ShanghaiTech University
* Fu Song, ShanghaiTech University; Automotive Software Innovation Center; Institute of Software, Chinese Academy of Sciences & University of Chinese Academy of Sciences
### Abstract
> Current adversarial attacks against speaker recognition systems (SRSs) require either white-box access or heavy black-box queries to the target SRS, thus still falling behind practical attacks against proprietary commercial APIs and voice-controlled devices. To fill this gap, we propose QFA2SR, an effective and imperceptible query-free black-box attack, by leveraging the transferability of adversarial voices. To improve transferability, we present three novel methods, tailored loss functions, SRS ensemble, and time-freq corrosion. The first one tailors loss functions to different attack scenarios. The latter two augment surrogate SRSs in two different ways. SRS ensemble combines diverse surrogate SRSs with new strategies, amenable to the unique scoring characteristics of SRSs. Time-freq corrosion augments surrogate SRSs by incorporating well-designed time-/frequency-domain modification functions, which simulate and approximate the decision boundary of the target SRS and distortions introduced during over-the-air attacks. QFA2SR boosts the targeted transferability by 20.9%-70.7% on four popular commercial APIs (Microsoft Azure, iFlytek, Jingdong, and TalentedSoft), significantly outperforming existing attacks in query-free setting, with negligible effect on the imperceptibility. QFA2SR is also highly effective when launched over the air against three wide-spread voice assistants (Google Assistant, Apple Siri, and TMall Genie) with 60%, 46%, and 70% targeted transferability, respectively.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/chen-guangke](https://www.usenix.org/conference/usenixsecurity23/presentation/chen-guangke)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-chen-guangke.pdf](https://www.usenix.org/system/files/usenixsecurity23-chen-guangke.pdf)
## Learning Normality is Enough: A Software-based Mitigation against Inaudible Voice Attacks.
### Authors
* Xinfeng Li, USSLAB, Zhejiang University
* Xiaoyu Ji, USSLAB, Zhejiang University
* Chen Yan, USSLAB, Zhejiang University
* Chaohao Li, USSLAB, Zhejiang University and Hangzhou Hikvision Digital Technology Co., Ltd.
* Yichen Li, Hong Kong University of Science and Technology
* Zhenning Zhang, University of Illinois at Urbana-Champaign
* Wenyuan Xu, USSLAB, Zhejiang University
### Abstract
> Inaudible voice attacks silently inject malicious voice commands into voice assistants to manipulate voice-controlled devices such as smart speakers. To alleviate such threats for both existing and future devices, this paper proposes NormDetect, a software-based mitigation that can be instantly applied to a wide range of devices without requiring any hardware modification. To overcome the challenge that the attack patterns vary between devices, we design a universal detection model that does not rely on audio features or samples derived from specific devices. Unlike existing studies’ supervised learning approach, we adopt unsupervised learning inspired by anomaly detection. Though the patterns of inaudible voice attacks are diverse, we find that benign audios share similar patterns in the time-frequency domain. Therefore, we can detect the attacks (the anomaly) by learning the patterns of benign audios (the normality). NormDetect maps spectrum features to a low-dimensional space, performs similarity queries, and replaces them with the standard feature embeddings for spectrum reconstruction. This results in a more significant reconstruction error for attacks than normality. Evaluation based on the 383,320 test samples we collected from 24 smart devices shows an average AUC of 99.48% and EER of 2.23%, suggesting the effectiveness of NormDetect in detecting inaudible voice attacks.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/li-xinfeng](https://www.usenix.org/conference/usenixsecurity23/presentation/li-xinfeng)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-li-xinfeng.pdf](https://www.usenix.org/system/files/usenixsecurity23-li-xinfeng.pdf)
## Powering for Privacy: Improving User Trust in Smart Speaker Microphones with Intentional Powering and Perceptible Assurance.
### Authors
* Youngwook Do, Georgia Institute of Technology
* Nivedita Arora, Georgia Institute of Technology
* Ali Mirzazadeh, Georgia Institute of Technology and Massachusetts Institute of Technology
* Injoo Moon, Georgia Institute of Technology and Massachusetts Institute of Technology
* Eryue Xu, Georgia Institute of Technology
* Zhihan Zhang, Georgia Institute of Technology and University of Washington
* Gregory D. Abowd, Georgia Institute of Technology and Northeastern University
* Sauvik Das, Georgia Institute of Technology and Carnegie Mellon University
### Abstract
> Smart speakers come with always-on microphones to facilitate voice-based interaction. To address user privacy concerns, existing devices come with a number of privacy features: e.g., mute buttons and local trigger-word detection modules. But it is difficult for users to trust that these manufacturer-provided privacy features actually work given that there is a misalignment of incentives: Google, Meta, and Amazon benefit from collecting personal data and users know it. What's needed is perceptible assurance — privacy features that users can, through physical perception, verify actually work. To that end, we introduce, implement, and evaluate the idea of "intentionally-powered" microphones to provide users with perceptible assurance of privacy with smart speakers. We employed an iterative-design process to develop Candid Mic, a battery-free, wireless microphone that can only be powered by harvesting energy from intentional user interactions. Moreover, users can visually inspect the (dis)connection between the energy harvesting module and the microphone. Through a within-subjects experiment, we found that Candid Mic provides users with perceptible assurance about whether the microphone is capturing audio or not, and improves user trust in using smart speakers relative to mute button interfaces.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/do](https://www.usenix.org/conference/usenixsecurity23/presentation/do)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-do.pdf](https://www.usenix.org/system/files/usenixsecurity23-do.pdf)
## To Cloud or not to Cloud: A Qualitative Study on Self-Hosters' Motivation, Operation, and Security Mindset.
### Authors
* Lea Gröber, CISPA Helmholtz Center for Information Security and Saarland University
* Rafael Mrowczynski, CISPA Helmholtz Center for Information Security
* Nimisha Vijay, Nextcloud
* Daphne A. Muller, Nextcloud
* Adrian Dabrowski, CISPA Helmholtz Center for Information Security
* Katharina Krombholz, CISPA Helmholtz Center for Information Security
### Abstract
> Despite readily available cloud services, some people decide to self-host internal or external services for themselves or their organization. In doing so, a broad spectrum of commercial, institutional, and private self-hosters take responsibility for their data, security, and reliability of their operations. Currently, little is known about what motivates these self-hosters, how they operate and secure their services, and which challenges they face. To improve the understanding of self-hosters' security mindsets and practices, we conducted a large-scale survey (N=994) with users of a popular self-hosting suite and in-depth follow-up interviews with selected commercial, non-profit, and private users (N=41). We found exemplary behavior in all user groups; however, we also found a significant part of self-hosters who approach security in an unstructured way, regardless of social or organizational embeddedness. Vague catch-all concepts such as firewalls and backups dominate the landscape, without proper reflection on the threats they help mitigate. At times, self-hosters engage in creative tactics to compensate for a potential lack of expertise or experience.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/grober](https://www.usenix.org/conference/usenixsecurity23/presentation/grober)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-grober.pdf](https://www.usenix.org/system/files/usenixsecurity23-grober.pdf)
## "I wouldn't want my unsafe code to run my pacemaker": An Interview Study on the Use, Comprehension, and Perceived Risks of Unsafe Rust.
### Authors
* S, Leibniz University Hannover
* ra Höltervennhoff, Leibniz University Hannover
* Philip Klostermeyer, CISPA Helmholtz Center for Information Security
* Noah Wöhler, CISPA Helmholtz Center for Information Security
* Yasemin Acar, Paderborn University, George Washington University
* Sascha Fahl, CISPA Helmholtz Center for Information Security
### Abstract
> Modern software development still struggles with memory safety issues as a significant source of security bugs. The Rust programming language addresses memory safety and provides further security features. However, Rust offers developers the ability to opt out of some of these guarantees using unsafe Rust. Previous work found that the source of many security vulnerabilities is unsafe Rust. In this paper, we are the first to see behind the curtain and investigate developers' motivations for, experiences with, and risk assessment of using unsafe Rust in depth. Therefore, we conducted 26 semi-structured interviews with experienced Rust developers. We find that developers aim to use unsafe Rust sparingly and with caution. However, we also identify common misconceptions and tooling fatigue that can lead to security issues, find that security policies for using unsafe Rust are widely missing and that participants underestimate the security risks of using unsafe Rust.We conclude our work by discussing the findings and recommendations for making the future use of unsafe Rust more secure.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/holtervennhoff](https://www.usenix.org/conference/usenixsecurity23/presentation/holtervennhoff)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-holtervennhoff.pdf](https://www.usenix.org/system/files/usenixsecurity23-holtervennhoff.pdf)
## Pushed by Accident: A Mixed-Methods Study on Strategies of Handling Secret Information in Source Code Repositories.
### Authors
* Alex, CISPA Helmholtz Center for Information Security
* er Krause, CISPA Helmholtz Center for Information Security
* Jan H. Klemmer, Leibniz University Hannover
* Nicolas Huaman, Leibniz University Hannover
* Dominik Wermke, CISPA Helmholtz Center for Information Security
* Yasemin Acar, Paderborn University, George Washington University
* Sascha Fahl, CISPA Helmholtz Center for Information Security
### Abstract
> Version control systems for source code, such as Git, are key tools in modern software development. Many developers use services like GitHub or GitLab for collaborative software development. Many software projects include code secrets such as API keys or passwords that need to be managed securely. Previous research and blog posts found that developers struggle with secure code secret management and accidentally leaked code secrets to public Git repositories. Leaking code secrets to the public can have disastrous consequences, such as abusing services and systems or making sensitive user data available to attackers. In a mixed-methods study, we surveyed 109 developers with version control system experience. Additionally, we conducted 14 in-depth semi-structured interviews with developers who experienced secret leakage in the past. 30.3% of our participants encountered code secret leaks in the past. Most of them face several challenges with secret leakage prevention and remediation. Based on our findings, we discuss challenges, such as estimating the risks of leaked secrets, and the needs of developers in remediating and preventing code secret leaks, such as low adoption requirements. We conclude with recommendations for developers and source code platform providers to reduce the risk of secret leakage.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/krause](https://www.usenix.org/conference/usenixsecurity23/presentation/krause)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-krause.pdf](https://www.usenix.org/system/files/usenixsecurity23-krause.pdf)
## A Mixed-Methods Study of Security Practices of Smart Contract Developers.
### Authors
* Tanusree Sharma, University of Illinois at Urbana Champaign
* Zhixuan Zhou, University of Illinois at Urbana Champaign
* Andrew Miller, University of Illinois at Urbana Champaign
* Yang Wang, University of Illinois at Urbana Champaign
### Abstract
> Smart contracts are self-executing programs that run on blockchains (e.g., Ethereum). While security is a key concern for smart contracts, it is unclear how smart contract developers approach security. To help fill this research gap, we conducted a mixed-methods study of smart contract developers, including interviews and a code review task with 29 developers and an online survey with 171 valid respondents. Our findings show various smart contract security perceptions and practices, including the usage of different tools and resources. Overall, the majority of our participants did not consider security as a priority in their smart contract development. In addition, the security vulnerability identification rates in our code review tasks were alarmingly low (often lower than 50%) across different vulnerabilities and regardless of our participants' years of experience in smart contract development. We discuss how future education and tools could better support developers in ensuring smart contract security.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/sharma](https://www.usenix.org/conference/usenixsecurity23/presentation/sharma)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-sharma.pdf](https://www.usenix.org/system/files/usenixsecurity23-sharma.pdf)
## The Role of Professional Product Reviewers in Evaluating Security and Privacy.
### Authors
* Wentao Guo, University of Maryland
* Jason Walter, University of Maryland
* Michelle L. Mazurek, University of Maryland
### Abstract
> Consumers who use Internet-connected products are often exposed to security and privacy vulnerabilities that they lack time or expertise to evaluate themselves. Can professional product reviewers help by evaluating security and privacy on their behalf? We conducted 17 interviews with product reviewers about their procedures, incentives, and assumptions regarding security and privacy. We find that reviewers have some incentives to evaluate security and privacy, but they also face substantial disincentives and challenges, leading them to consider a limited set of relevant criteria and threat models. We recommend future work to help product reviewers provide useful advice to consumers in ways that align with reviewers' business models and incentives. These include developing usable resources and tools, as well as validating the heuristics they use to judge security and privacy expediently.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/guo-wentao](https://www.usenix.org/conference/usenixsecurity23/presentation/guo-wentao)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-guo-wentao.pdf](https://www.usenix.org/system/files/usenixsecurity23-guo-wentao.pdf)
## Network Responses to Russia's Invasion of Ukraine in 2022: A Cautionary Tale for Internet Freedom.
### Authors
* Reethika Ramesh, University of Michigan
* Ram Sundara Raman, University of Michigan
* Apurva Virkud, University of Michigan
* Alex, TU Braunschweig
* ra Dirksen, TU Braunschweig
* Armin Huremagic, University of Michigan
* David Fifield, unaffiliated
* Dirk Rodenburg, Psiphon
* Rod Hynes, Psiphon
* Doug Madory, Kentik
* Roya Ensafi, University of Michigan
### Abstract
> Russia's invasion of Ukraine in February 2022 was followed by sanctions and restrictions: by Russia against its citizens, by Russia against the world, and by foreign actors against Russia. Reports suggested a torrent of increased censorship, geoblocking, and network events affecting Internet freedom. This paper is an investigation into the network changes that occurred in the weeks following this escalation of hostilities. It is the result of a rapid mobilization of researchers and activists, examining the problem from multiple perspectives. We develop GeoInspector, and conduct measurements to identify different types of geoblocking, and synthesize data from nine independent data sources to understand and describe various network changes. Immediately after the invasion, more than 45% of Russian government domains tested blocked access from countries other than Russia and Kazakhstan; conversely, 444 foreign websites, including news and educational domains, geoblocked Russian users. We find significant increases in Russian censorship, especially of news and social media. We find evidence of the use of BGP withdrawals to implement restrictions, and we quantify the use of a new domestic certificate authority. Finally, we analyze data from circumvention tools, and investigate their usage and blocking. We hope that our findings showing the rapidly shifting landscape of Internet splintering serves as a cautionary tale, and encourages research and efforts to protect Internet freedom.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/ramesh-network-responses](https://www.usenix.org/conference/usenixsecurity23/presentation/ramesh-network-responses)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-ramesh-network-responses.pdf](https://www.usenix.org/system/files/usenixsecurity23-ramesh-network-responses.pdf)
## A Study of China's Censorship and Its Evasion Through the Lens of Online Gaming.
### Authors
* Yuzhou Feng, Florida International University
* Ruyu Zhai, Hangzhou Dianzi University
* Radu Sion, Stony Brook University
* Bogdan Carbunar, Florida International University
### Abstract
> For the past 20 years, China has increasingly restricted the access of minors to online games using addiction prevention systems (APSes). At the same time, and through different means, i.e., the Great Firewall of China (GFW), it also restricts general population access to the international Internet. This paper studies how these restrictions impact young online gamers, and their evasion efforts. We present results from surveys (n = 2,415) and semi-structured interviews (n = 35) revealing viable commonly deployed APS evasion techniques and APS vulnerabilities. We conclude that the APS does not work as designed, even against very young online game players, and can act as a censorship evasion training ground for tomorrow's adults, by familiarization with and normalization of general evasion techniques, and desensitization to their dangers. Findings from these studies may further inform developers of censorship-resistant systems about the perceptions and evasion strategies of their prospective users, and help design tools that leverage services and platforms popular among the censored audience.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/feng](https://www.usenix.org/conference/usenixsecurity23/presentation/feng)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-feng.pdf](https://www.usenix.org/system/files/usenixsecurity23-feng.pdf)
## DeResistor: Toward Detection-Resistant Probing for Evasion of Internet Censorship.
### Authors
* Abderrahmen Amich, University of Michigan, Dearborn
* Birhanu Eshete, University of Michigan, Dearborn
* Vinod Yegneswaran, SRI International
* Nguyen Phong Hoang, University of Chicago
### Abstract
> The arms race between Internet freedom advocates and censors has catalyzed the emergence of sophisticated blocking techniques and directed significant research emphasis toward the development of automated censorship measurement and evasion tools based on packet manipulation. However, we observe that the probing process of censorship middleboxes using state-of-the-art evasion tools can be easily fingerprinted by censors, necessitating detection-resilient probing techniques.We validate our hypothesis by developing a real-time detection approach that utilizes Machine Learning (ML) to detect flow-level packet-manipulation and an algorithm for IP-level detection based on Threshold Random Walk (TRW). We then take the first steps toward detection-resilient censorship evasion by presenting DeResistor, a system that facilitates detection-resilient probing for packet-manipulation-based censorship-evasion. DeResistor aims to defuse detection logic employed by censors by performing detection guided pausing of censorship evasion attempts and interleaving them with normal user-driven network activity.We evaluate our techniques by leveraging Geneva, a state-of-the-art evasion strategy generator, and validate them against 11 simulated censors supplied by Geneva, while also testing them against real-world censors (i.e., China's Great Firewall (GFW), India and Kazakhstan). From an adversarial perspective, our proposed real-time detection method can quickly detect clients that attempt to probe censorship middleboxes with manipulated packets after inspecting only two probing flows. From a defense perspective, DeResistor is effective at shielding Geneva training from detection while enabling it to narrow the search space to produce less detectable traffic. Importantly, censorship evasion strategies generated using DeResistor can attain a high success rate from different vantage points against the GFW (up to 98%) and 100% in India and Kazakhstan. Finally, we discuss detection countermeasures and extensibility of our approach to other censor-probing-based tools.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/amich](https://www.usenix.org/conference/usenixsecurity23/presentation/amich)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-amich.pdf](https://www.usenix.org/system/files/usenixsecurity23-amich.pdf)
## Timeless Timing Attacks and Preload Defenses in Tor's DNS Cache.
### Authors
* Rasmus Dahlberg, Karlstad University
* Tobias Pulls, Karlstad University
### Abstract
> We show that Tor's DNS cache is vulnerable to a timeless timing attack, allowing anyone to determine if a domain is cached or not without any false positives. The attack requires sending a single TLS record. It can be repeated to determine when a domain is no longer cached to leak the insertion time. Our evaluation in the Tor network shows no instances of cached domains being reported as uncached and vice versa after 12M repetitions while only targeting our own domains. This shifts DNS in Tor from an unreliable side-channel—using traditional timing attacks with network jitter—to being perfectly reliable. We responsibly disclosed the attack and suggested two short-term mitigations. As a long-term defense for the DNS cache in Tor against all types of (timeless) timing attacks, we propose a redesign where only an allowlist of domains is preloaded to always be cached across circuits. We compare the performance of a preloaded DNS cache to Tor's current solution towards DNS by measuring aggregated statistics for four months from two exits (after engaging with the Tor Research Safety Board and our university ethical review process). The evaluated preload lists are variants of the following top-lists: Alexa, Cisco Umbrella, and Tranco. Our results show that four-months-old preload lists can be tuned to offer comparable performance under similar resource usage or to significantly improve shared cache-hit ratios (2–3x) with a modest increase in memory usage and resolver load compared to a 100 Mbit/s exit. We conclude that Tor's current DNS cache is mostly a privacy harm because the majority of cached domains are unlikely to lead to cache hits but remain there to be probed by attackers.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/dahlberg](https://www.usenix.org/conference/usenixsecurity23/presentation/dahlberg)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-dahlberg.pdf](https://www.usenix.org/system/files/usenixsecurity23-dahlberg.pdf)
## How the Great Firewall of China Detects and Blocks Fully Encrypted Traffic.
### Authors
* Mingshi Wu, GFW Report
* Jackson Sippe, University of Colorado Boulder
* Danesh Sivakumar, University of Maryland
* Jack Burg, University of Maryland
* Peter Anderson, Independent researcher
* Xiaokang Wang, V2Ray Project
* Kevin Bock, University of Maryland
* Amir Houmansadr, University of Massachusetts Amherst
* Dave Levin, University of Maryland
* Eric Wustrow, University of Colorado Boulder
### Abstract
> One of the cornerstones in censorship circumvention is fully encrypted protocols, which encrypt every byte of the payload in an attempt to “look like nothing”. In early November 2021, the Great Firewall of China (GFW) deployed a new censorship technique that passively detects—and subsequently blocks—fully encrypted traffic in real time. The GFW’s new censorship capability affects a large set of popular censorship circumvention protocols, including but not limited to Shadowsocks, VMess, and Obfs4. Although China had long actively probed such protocols, this was the first report of purely passive detection, leading the anti-censorship community to ask how detection was possible. In this paper, we measure and characterize the GFW’s new system for censoring fully encrypted traffic. We find that, instead of directly defining what fully encrypted traffic is, the censor applies crude but efficient heuristics to exempt traffic that is unlikely to be fully encrypted traffic; it then blocks the remaining non-exempted traffic. These heuristics are based on the fingerprints of common protocols, the fraction of set bits, and the number, fraction, and position of printable ASCII characters. Our Internet scans reveal what traffic and which IP addresses the GFW inspects. We simulate the inferred GFW’s detection algorithm on live traffic at a university network tap to evaluate its comprehensiveness and false positives. We show evidence that the rules we inferred have good coverage of what the GFW actually uses. We estimate that, if applied broadly, it could potentially block about 0.6% of normal Internet traffic as collateral damage. Our understanding of the GFW’s new censorship mechanism helps us derive several practical circumvention strategies. We responsibly disclosed our findings and suggestions to the developers of different anti-censorship tools, helping millions of users successfully evade this new form of blocking.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/wu-mingshi](https://www.usenix.org/conference/usenixsecurity23/presentation/wu-mingshi)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-wu-mingshi.pdf](https://www.usenix.org/system/files/usenixsecurity23-wu-mingshi.pdf)
## A Data-free Backdoor Injection Approach in Neural Networks.
### Authors
* Peizhuo Lv, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Chang Yue, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Ruigang Liang, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Yunfei Yang, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Shengzhi Zhang, Department of Computer Science, Metropolitan College, Boston University, USA
* Hualong Ma, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Kai Chen, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China; Beijing Academy of Artificial Intelligence, China
### Abstract
> Recently, the backdoor attack on deep neural networks (DNNs) has been extensively studied, which causes the backdoored models to behave well on benign samples, whereas performing maliciously on controlled samples (with triggers attached). Almost all existing backdoor attacks require access to the original training/testing dataset or data relevant to the main task to inject backdoors into the target models, which is unrealistic in many scenarios, e.g., private training data. In this paper, we propose a novel backdoor injection approach in a "data-free" manner. We collect substitute data irrelevant to the main task and reduce its volume by filtering out redundant samples to improve the efficiency of backdoor injection. We design a novel loss function for fine-tuning the original model into the backdoored one using the substitute data, and optimize the fine-tuning to balance the backdoor injection and the performance on the main task. We conduct extensive experiments on various deep learning scenarios, e.g., image classification, text classification, tabular classification, image generation, and multimodal, using different models, e.g., Convolutional Neural Networks (CNNs), Autoencoders, Transformer models, Tabular models, as well as Multimodal DNNs. The evaluation results demonstrate that our data-free backdoor injection approach can efficiently embed backdoors with a nearly 100\% attack success rate, incurring an acceptable performance downgrade on the main task.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/lv](https://www.usenix.org/conference/usenixsecurity23/presentation/lv)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-lv.pdf](https://www.usenix.org/system/files/usenixsecurity23-lv.pdf)
## Sparsity Brings Vulnerabilities: Exploring New Metrics in Backdoor Attacks.
### Authors
* Jianwen Tian, NKLSTISS, Institute of Systems Engineering, Academy of Military Sciences, China
* Kefan Qiu, School of Cyberspace Science and Technology, Beijing Institute of Technology
* Debin Gao, Singapore Management University
* Zhi Wang, DISSec, College of Cyber Science, Nankai University
* Xiaohui Kuang, NKLSTISS, Institute of Systems Engineering, Academy of Military Sciences, China
* Gang Zhao, NKLSTISS, Institute of Systems Engineering, Academy of Military Sciences, China
### Abstract
> Nowadays, using AI-based detectors to keep pace with the fast iterating of malware has attracted a great attention. However, most AI-based malware detectors use features with vast sparse subspaces to characterize applications, which brings significant vulnerabilities to the model. To exploit this sparsity-related vulnerability, we propose a clean-label backdoor attack consisting of a dissimilarity metric-based candidate selection and a variation ratio-based trigger construction.%, which shows the strongest attack performance compared with previous strategies. The proposed backdoor is verified on different datasets, including a Windows PE dataset, an Android dataset with numerical and boolean feature values, and a PDF dataset. The experimental results show that the attack can slash the accuracy on watermarked malware to nearly 0% even with the least number (0.01% of the class set) of watermarked goodwares compared to previous attacks. Problem space constraints are also considered with experiments in data-agnostic scenario} and data-and-model-agnostic scenario, proving transferability between different datasets as well as deep neural networks and traditional classifiers. The attack is verified consistently powerful under the above scenarios. Moreover, eight existing defenses were tested with their effect left much to be desired. We demonstrated the reason and proposed a subspace compression strategy to boost models' robustness, which also makes part of the previously failed defenses effective.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/tian](https://www.usenix.org/conference/usenixsecurity23/presentation/tian)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-tian.pdf](https://www.usenix.org/system/files/usenixsecurity23-tian.pdf)
## Aliasing Backdoor Attacks on Pre-trained Models.
### Authors
* Cheng'an Wei, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Yeonjoon Lee, Hanyang University, Ansan, Republic of Korea
* Kai Chen, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Guozhu Meng, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Peizhuo Lv, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China
### Abstract
> Pre-trained deep learning models are widely used to train accurate models with limited data in a short time. To reduce computational costs, pre-trained neural networks often employ subsampling operations. However, recent studies have shown that these subsampling operations can cause aliasing issues, resulting in problems with generalization. Despite this knowledge, there is still a lack of research on the relationship between the aliasing of neural networks and security threats, such as adversarial attacks and backdoor attacks, which manipulate model predictions without the awareness of victims. In this paper, we propose the aliasing backdoor, a low-cost and data-free attack that threatens mainstream pre-trained models and transfers to all student models fine-tuned from them. The key idea is to create an aliasing error in the strided layers of the network and manipulate a benign input to a targeted intermediate representation. To evaluate the attack, we conduct experiments on image classification, face recognition, and speech recognition tasks. The results show that our approach can effectively attack mainstream models with a success rate of over 95%. Our research, based on the aliasing error caused by subsampling, reveals a fundamental security weakness of strided layers, which are widely used in modern neural network architectures. To the best of our knowledge, this is the first work to exploit the strided layers to launch backdoor attacks.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/wei-chengan](https://www.usenix.org/conference/usenixsecurity23/presentation/wei-chengan)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-wei-chengan.pdf](https://www.usenix.org/system/files/usenixsecurity23-wei-chengan.pdf)
## ASSET: Robust Backdoor Data Detection Across a Multiplicity of Deep Learning Paradigms.
### Authors
* Minzhou Pan, Virginia Tech
* Yi Zeng, Virginia Tech
* Lingjuan Lyu, Sony AI
* Xue Lin, Northeastern University
* Ruoxi Jia, Virginia Tech
### Abstract
> Backdoor data detection is traditionally studied in an end-to-end supervised learning (SL) setting. However, recent years have seen the proliferating adoption of self-supervised learning (SSL) and transfer learning (TL), due to their lesser need for labeled data. Successful backdoor attacks have also been demonstrated in these new settings. However, we lack a thorough understanding of the applicability of existing detection methods across a variety of learning settings. By evaluating 56 attack settings, we show that the performance of most existing detection methods varies significantly across different attacks and poison ratios, and all fail on the state-of-the-art clean-label backdoor attack which only manipulates a few training data's features with imperceptible noise without changing labels. In addition, existing methods either become inapplicable or suffer large performance losses when applied to SSL and TL. We propose a new detection method called Active Separation-via Offset (ASSET), which actively induces different model behaviors between the backdoor and clean samples to promote their separation. We also provide procedures to adaptively select the number of suspicious points to remove. In the end-to-end SL setting, ASSET is superior to existing methods in terms of consistency of defensive performance across different attacks and robustness to changes in poison ratios; in particular, it is the only method that can detect the state-of-the-art clean-label attack. Moreover, ASSET's average detection rates are higher than the best existing methods in SSL and TL, respectively, by 69.3% and 33.2%, thus providing the first practical backdoor defense for these emerging DL settings.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/pan](https://www.usenix.org/conference/usenixsecurity23/presentation/pan)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-pan.pdf](https://www.usenix.org/system/files/usenixsecurity23-pan.pdf)
## VILLAIN: Backdoor Attacks Against Vertical Split Learning.
### Authors
* Yijie Bai, Zhejiang University
* Yanjiao Chen, Zhejiang University
* Hanlei Zhang, Zhejing University
* Wenyuan Xu, Zhejing University
* Haiqin Weng, Ant Group
* Dou Goodman, Ant Group
### Abstract
> Vertical split learning is a new paradigm of federated learning for participants with vertically partitioned data. In this paper, we make the first attempt to explore the possibility of backdoor attacks by a malicious participant in vertical split learning. Different from conventional federated learning, vertical split learning poses new challenges for backdoor attacks, the most looming ones being a lack of access to the training data labels and the server model. To tackle these challenges, we propose VILLAIN, a backdoor attack framework that features effective label inference and data poisoning strategies. VILLAIN realizes high inference accuracy of the target label samples for the attacker. Furthermore, VILLAIN intensifies the backdoor attack power by designing a stealthy additive trigger and introducing backdoor augmentation strategies to impose a larger influence on the server model. Our extensive evaluations on 6 datasets with comprehensive vertical split learning models and aggregation methods confirm the effectiveness of VILLAIN . It is also demonstrated that VILLAIN can resist the popular privacy inference defenses, backdoor detection or removal defenses, and adaptive defenses.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/bai](https://www.usenix.org/conference/usenixsecurity23/presentation/bai)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-bai.pdf](https://www.usenix.org/system/files/usenixsecurity23-bai.pdf)
## ARI: Attestation of Real-time Mission Execution Integrity.
### Authors
* Jinwen Wang, Washington University in St. Louis
* Yujie Wang, Washington University in St. Louis
* Ao Li, Washington University in St. Louis
* Yang Xiao, University of Kentucky
* Ruide Zhang, Virginia Polytechnic Institute and State University
* Wenjing Lou, Virginia Polytechnic Institute and State University
* Y. Thomas Hou, Virginia Polytechnic Institute and State University
* Ning Zhang, Washington University in St. Louis
### Abstract
> With the proliferation of autonomous safety-critical cyber-physical systems (CPS) in our daily life, their security is becoming ever more important. Remote attestation is a powerful mechanism to enable remote verification of system integrity. While recent developments have made it possible to efficiently attest IoT operations, autonomous systems that are built on top of real-time cyber-physical control loops and execute missions independently present new unique challenges.  In this paper, we formulate a new security property, Real-time Mission Execution Integrity (RMEI) to provide proof of correct and timely execution of the missions. While it is an attractive property, measuring it can incur prohibitive overhead for the real-time autonomous system. To tackle this challenge, we propose policy-based attestation of compartments to enable a trade-off between the level of details in measurement and runtime overhead. To further minimize the impact on real-time responsiveness, multiple techniques were developed to improve the performance, including customized software instrumentation and timing recovery through re-execution. We implemented a prototype of ARI and evaluated its performance on five CPS platforms. A user study involving 21 developers with different skill sets was conducted to understand the usability of our solution.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/wang-jinwen](https://www.usenix.org/conference/usenixsecurity23/presentation/wang-jinwen)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-wang-jinwen.pdf](https://www.usenix.org/system/files/usenixsecurity23-wang-jinwen.pdf)
## Design of Access Control Mechanisms in Systems-on-Chip with Formal Integrity Guarantees.
### Authors
* Dino Mehmedagić, Rheinland-Pfälzische Technische Universität (RPTU) Kaiserslautern-Landau, Germany
* Mohammad Rahmani Fadiheh, Rheinland-Pfälzische Technische Universität (RPTU) Kaiserslautern-Landau, Germany
* Johannes Müller, Rheinland-Pfälzische Technische Universität (RPTU) Kaiserslautern-Landau, Germany
* Anna Lena Duque Antón, Rheinland-Pfälzische Technische Universität (RPTU) Kaiserslautern-Landau, Germany
* Dominik Stoffel, Rheinland-Pfälzische Technische Universität (RPTU) Kaiserslautern-Landau, Germany
* Wolfgang Kunz, Rheinland-Pfälzische Technische Universität (RPTU) Kaiserslautern-Landau, Germany
### Abstract
> Many SoCs employ system-level hardware access control mechanisms to ensure that security-critical operations cannot be tampered with by less trusted components of the circuit. While there are many design and verification techniques for developing an access control system, continuous discoveries of new vulnerabilities in such systems suggest a need for an exhaustive verification methodology to find and eliminate such weaknesses. This paper proposes UPEC-OI, a formal verification methodology that exhaustively covers integrity vulnerabilities of an SoC-level access control system. The approach is based on iteratively checking a 2-safety interval property whose formulation does not require any explicit specification of possible attack scenarios. The counterexamples returned by UPEC-OI can provide designers of access control hardware with valuable information on possible attack channels, allowing them to perform pinpoint fixes. We present a verification-driven development methodology which formally guarantees the developed SoC’s access control mechanism to be secure with respect to integrity. We evaluate the proposed approach in a case study on OpenTitan’s Earl Grey SoC where we add an SoC-level access control mechanism alongside malicious IPs to model the threat. UPEC-OI was found vital to guarantee the integrity of the mechanism and was proven to be tractable for SoCs of realistic size.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/mehmedagic](https://www.usenix.org/conference/usenixsecurity23/presentation/mehmedagic)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-mehmedagic.pdf](https://www.usenix.org/system/files/usenixsecurity23-mehmedagic.pdf)
## HashTag: Hash-based Integrity Protection for Tagged Architectures.
### Authors
* Lukas Lamster, Graz University of Technology
* Martin Unterguggenberger, Graz University of Technology
* David Schrammel, Graz University of Technology
* Stefan Mangard, Graz University of Technology
### Abstract
> Modern computing systems rely on error-correcting codes to ensure the integrity of DRAM data. Linear checksums allow for fast detection and correction of specific error patterns. However, they do not offer sufficient protection against complex errors distributed over multiple data words and chips. Depending on the code and the error pattern, linear codes may fail to detect or even miscorrect errors, thus leading to silent data corruption. In this work, we show how compact error-correcting codes based on low-latency hashing functions allow for strong probabilistic error detection and correction while facilitating ECC bit repurposing. Our proposed design drastically lowers the expected rate of undetected errors, regardless of the underlying error patterns. By tailoring the size of our codes to the required level of integrity protection, we are able to free bits that would otherwise be required to store ECC data. We showcase how our design facilitates the efficient implementation of tagged memory architectures such as CHERI, ARM MTE, and SPARC ADI by repurposing the freed bits in commodity ECC DRAM. Thus, we harden systems against data corruption due to DRAM faults while simultaneously allowing for memory tagging without introducing additional memory accesses. We present a systematic analysis of schemes that allow memory tagging on a cache line granularity while maintaining error detection and correction capabilities, even in multi-bit fault scenarios. We evaluate our integrity protection with tagging for different use cases and show that we can store 32 bits of additional tags per cache line, twice the amount needed to implement ARM's MTE, without significantly affecting error correction capabilities. We also show how up to 51 bits can be made available while maintaining single-bit error correction.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/lamster](https://www.usenix.org/conference/usenixsecurity23/presentation/lamster)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-lamster.pdf](https://www.usenix.org/system/files/usenixsecurity23-lamster.pdf)
## XCheck: Verifying Integrity of 3D Printed Patient-Specific Devices via Computing Tomography.
### Authors
* Zhiyuan Yu, Washington University in St. Louis
* Yuanhaur Chang, Washington University in St. Louis
* Shixuan Zhai, Washington University in St. Louis
* Nicholas Deily, Washington University in St. Louis
* Tao Ju, Washington University in St. Louis
* XiaoFeng Wang, Indiana University Bloomington
* Uday Jammalamadaka, Rice University
* Ning Zhang, Washington University in St. Louis
### Abstract
> 3D printing is bringing revolutionary changes to the field of medicine, with applications ranging from hearing aids to regrowing organs. As our society increasingly relies on this technology to save lives, the security of these systems is a growing concern. However, existing defense approaches that leverage side channels may require domain knowledge from computer security to fully understand the impact of the attack. To bridge the gap, we propose XCheck, which leverages medical imaging to verify the integrity of the printed patient-specific device (PSD). XCheck follows a defense-in-depth approach and directly compares the computed tomography (CT) scan of the printed device to its original design. XCheck utilizes a voxel-based approach to build multiple layers of defense involving both 3D geometric verification and multivariate material analysis. To further enhance usability, XCheck also provides an adjustable visualization scheme that allows practitioners' inspection of the printed object with varying tolerance thresholds to meet the needs of different applications. We evaluated the system with 47 PSDs representing different medical applications to validate the efficacy.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/yu-zhiyuan-xcheck](https://www.usenix.org/conference/usenixsecurity23/presentation/yu-zhiyuan-xcheck)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-yu-zhiyuan-xcheck.pdf](https://www.usenix.org/system/files/usenixsecurity23-yu-zhiyuan-xcheck.pdf)
## Demystifying Pointer Authentication on Apple M1.
### Authors
* Zechao Cai, Zhejiang University and ZJU-Hangzhou Global Scientific and Technological Innovation Center
* Jiaxun Zhu, Zhejiang University and ZJU-Hangzhou Global Scientific and Technological Innovation Center
* Wenbo Shen, Zhejiang University and ZJU-Hangzhou Global Scientific and Technological Innovation Center
* Yutian Yang, Zhejiang University and ZJU-Hangzhou Global Scientific and Technological Innovation Center
* Rui Chang, Zhejiang University and ZJU-Hangzhou Global Scientific and Technological Innovation Center
* Yu Wang, Hangzhou Cyberserval Co., Ltd.
* Jinku Li, Xidian University
* Kui Ren, Zhejiang University and ZJU-Hangzhou Global Scientific and Technological Innovation Center
### Abstract
> Pointer Authentication (PA) was introduced by ARMv8.3 to safeguard the integrity of pointers. While the ARM specification allows vendors to implement and customize PA, Apple has tailored it on their hardware to protect iPhones and Macs with M-series chips. Since its debut, Apple PA has been considered effective in defeating pointer corruption. However, its details have not been publicly disclosed.To shed light on Apple PA customization, this paper conducts an in-depth reverse engineering study focused on Apple PA's hardware implementation and usage on the M1 chip. We develop a reverse engineering framework and propose novel techniques to uncover and confirm our new findings.Our study uncovers that Apple PA has implemented several hardware-based diversifiers to counter pointer forgery attacks across various domains, which is previously unknown to researchers outside of Apple. We further discover that the XNU kernel (the kernel used by iOS and macOS) incorporates nine types of modifiers for signing and authenticating pointers and customized key management based on Apple PA hardware. Based on our in-depth understanding of Apple PA, we perform a security analysis of PA-based control-flow integrity and data-flow integrity in the XNU kernel, identifying four attack surfaces. Apple has fixed these issues in a security update and assigned us a new CVE.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/cai-zechao](https://www.usenix.org/conference/usenixsecurity23/presentation/cai-zechao)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-cai-zechao.pdf](https://www.usenix.org/system/files/usenixsecurity23-cai-zechao.pdf)
## DDRace: Finding Concurrency UAF Vulnerabilities in Linux Drivers with Directed Fuzzing.
### Authors
* Ming Yuan, Tsinghua University
* Bodong Zhao, Tsinghua University
* Penghui Li, The Chinese University of Hong Kong
* Jiashuo Liang, Peking University
* Xinhui Han, Peking University
* Xiapu Luo, The Hong Kong Polytechnic University
* Chao Zhang, Tsinghua University and Zhongguancun Lab
### Abstract
> Concurrency use-after-free (UAF) vulnerabilities account for a large portion of UAF vulnerabilities in Linux drivers. Many solutions have been proposed to find either concurrency bugs or UAF vulnerabilities, but few of them can be directly applied to efficiently find concurrency UAF vulnerabilities. In this paper, we propose the first concurrency directed greybox fuzzing solution DDRace to discover concurrency UAF vulnerabilities efficiently in Linux drivers. First, we identify candidate use-after-free locations as target sites and extract the relevant concurrency elements to reduce the exploration space of directed fuzzing. Second, we design a novel vulnerability related distance metric and an interleaving priority scheme to guide the fuzzer to better explore UAF vulnerabilities and thread interleavings. Lastly, to make test cases reproducible, we design an adaptive kernel state migration scheme to assist continuous fuzzing. We have implemented a prototype of DDRace, and evaluated it on upstream Linux drivers. Results show that DDRace is effective at discovering concurrency use-after-free vulnerabilities. It finds 4 unknown vulnerabilities and 8 known ones, which is more effective than other state-of-the-art solutions.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/yuan-ming](https://www.usenix.org/conference/usenixsecurity23/presentation/yuan-ming)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-yuan-ming.pdf](https://www.usenix.org/system/files/usenixsecurity23-yuan-ming.pdf)
## Automata-Guided Control-Flow-Sensitive Fuzz Driver Generation.
### Authors
* Cen Zhang, Nanyang Technological University, Continental-NTU Corporate Lab
* Yuekang Li, Nanyang Technological University, Continental-NTU Corporate Lab
* Hao Zhou, The Hong Kong Polytechnic University
* Xiaohan Zhang, Xidian University
* Yaowen Zheng, Nanyang Technological University, Continental-NTU Corporate Lab
* Xian Zhan, Southern University of Science and Technology; The Hong Kong Polytechnic University
* Xiaofei Xie, Singapore Management University
* Xiapu Luo, The Hong Kong Polytechnic University
* Xinghua Li, Xidian University
* Yang Liu, Nanyang Technological University, Continental-NTU Corporate Lab
* Sheikh Mahbub Habib, Continental AG, Germany
### Abstract
> Fuzz drivers are essential for fuzzing library APIs. However, manually composing fuzz drivers is difficult and time-consuming. Therefore, several works have been proposed to generate fuzz drivers automatically. Although these works can learn correct API usage from the consumer programs of the target library, three challenges still hinder the quality of the generated fuzz drivers: 1) How to learn and utilize the control dependencies in API usage; 2) How to handle the noises of the learned API usage, especially for complex real-world consumer programs; 3) How to organize independent sets of API usage inside the fuzz driver to better coordinate with fuzzers. To solve these challenges, we propose RUBICK, an automata-guided control-flow-sensitive fuzz driver generation technique. RUBICK has three key features: 1) it models the API usage (including API data and control dependencies) as a deterministic finite automaton; 2) it leverages active automata learning algorithm to distill the learned API usage; 3) it synthesizes a single automata-guided fuzz driver, which provides scheduling interface for the fuzzer to test independent sets of API usage during fuzzing. During the experiments, the fuzz drivers generated by RUBICK showed a significant performance advantage over the baselines by covering an average of 50.42% more edges than fuzz drivers generated by FUZZGEN and 44.58% more edges than manually written fuzz drivers from OSS-Fuzz or human experts. By learning from large-scale open source projects, RUBICK has generated fuzz drivers for 11 popular Java projects and two of them have been merged into OSS-Fuzz. So far, 199 bugs, including four CVEs, are found using these fuzz drivers, which can affect popular PC and Android software with dozens of millions of downloads.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-cen](https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-cen)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-zhang-cen.pdf](https://www.usenix.org/system/files/usenixsecurity23-zhang-cen.pdf)
## Hoedur: Embedded Firmware Fuzzing using Multi-Stream Inputs.
### Authors
* Tobias Scharnowski, CISPA Helmholtz Center for Information Security
* Simon Wörner, CISPA Helmholtz Center for Information Security
* Felix Buchmann, Ruhr University Bochum
* Nils Bars, CISPA Helmholtz Center for Information Security
* Moritz Schloegel, CISPA Helmholtz Center for Information Security
* Thorsten Holz, CISPA Helmholtz Center for Information Security
### Abstract
> Embedded systems with their diverse, interconnected components form the backbone of our digital infrastructure. Despite their importance, analyzing their security in a scalable way has remained elusive and challenging. Recent firmware rehosting work has brought scalable, dynamic analyses to embedded systems, making fuzzing for automated vulnerability assessments feasible. As these works focus on modeling device behavior rather than fuzzing, they integrate with off-the-shelf fuzzers in an ad-hoc manner. They re-interpret traditional flat binary fuzzing input as a sequence of hardware responses. In practice, this presents the fuzzer with an input layout that is fragile, opaque, and hard to mutate effectively.Our work is based on the insight that while firmware emulation recently matured significantly, the input space is presented to the fuzzer in an ineffective manner. We propose a novel method for a firmware-aware fuzzing integration based on multi-stream inputs. We reorganize the previously flat, sequential, and opaque firmware fuzzing input into multiple strictly typed and cohesive streams. This allows our fuzzer, HOEDUR, to perform type-aware mutations and maintain its progress. It also enables firmware fuzzing to use state-of-theart mutation techniques. Overall, we find that these techniques significantly increase fuzzing effectiveness. Our evaluation shows that HOEDUR achieves up to 5x the coverage of stateof-the-art firmware fuzzers, finds bugs that other fuzzers do not, and discovers known bugs up to 550x faster. In total, HOEDUR uncovered 23 previously unknown bugs.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/scharnowski](https://www.usenix.org/conference/usenixsecurity23/presentation/scharnowski)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-scharnowski.pdf](https://www.usenix.org/system/files/usenixsecurity23-scharnowski.pdf)
## Forming Faster Firmware Fuzzers.
### Authors
* Lukas Seidel, Qwiet AI
* Dominik Maier, TU Berlin
* Marius Muench, VU Amsterdam and University of Birmingham
### Abstract
> A recent trend for assessing the security of an embedded system’s firmware is rehosting, the art of running the firmware in a virtualized environment, rather than on the original hardware platform. One significant use case for firmware rehosting is fuzzing to dynamically uncover security vulnerabilities. However, state-of-the-art implementations suffer from high emulator-induced overhead, leading to less-than-optimal execution speeds. Instead of emulation, we propose near-native rehosting: running embedded firmware as a Linux userspace process on a high-performance system that shares the instruction set family with the targeted device. We implement this approach with SAFIREFUZZ, a throughput-optimized rehosting and fuzzing framework for ARM Cortex-M firmware. SAFIREFUZZ takes monolithic binary-only firmware images and uses high-level emulation (HLE) and dynamic binary rewriting to run them on far more powerful hardware with low overhead. By replicating experiments of HALucinator, the state-of-the-art HLE-based rehosting system for binary firmware, we show that SAFIREFUZZ can provide a 690x throughput increase on average during 24-hour fuzzing campaigns while covering up to 30% more basic blocks.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/seidel](https://www.usenix.org/conference/usenixsecurity23/presentation/seidel)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-seidel.pdf](https://www.usenix.org/system/files/usenixsecurity23-seidel.pdf)
## ReUSB: Replay-Guided USB Driver Fuzzing.
### Authors
* Jisoo Jang, Yonsei University
* Minsuk Kang, Yonsei University
* Dokyung Song, Yonsei University
### Abstract
> Vulnerabilities in device drivers are constantly threatening the security of OS kernels. USB drivers are particularly concerning due to their widespread use and the wide variety of their attack vectors. Recently, fuzzing has been shown to be effective at finding vulnerabilities in USB drivers. Numerous vulnerabilities in USB drivers have been discovered by existing fuzzers; however, the number of code paths and vulnerabilities found, unfortunately, has stagnated. A key obstacle is the statefulness of USB drivers; that is, most of their code can be covered only when given a specific sequence of inputs.We observe that record-and-replay defined at the trust boundary of USB drivers directly helps overcoming the obstacle; deep states can be reached by reproducing recorded executions, and, combined with fuzzing, deeper code paths and vulnerabilities can be found. We present ReUSB, a USB driver fuzzer that guides fuzzing along two-dimensional record-and-replay of USB drivers to enhance their fuzzing. We address two fundamental challenges: faithfully replaying USB driver executions, and amplifying the effect of replay in fuzzing. To this end, we first introduce a set of language-level constructs that are essential in faithfully describing concurrent, two-dimensional traces but missing in state-of-the-art kernel fuzzers, and propose time-, concurrency-, and context-aware replay that can reproduce recorded driver executions with high fidelity. We then amplify the effect of our high-fidelity replay by guiding fuzzing along the replay of recorded executions, while mitigating the slowdown and side effects induced by replay via replay checkpointing. We implemented ReUSB, and evaluated it using two-dimensional traces of 10 widely used USB drivers of 3 different classes. The results show that ReUSB can significantly enhance USB driver fuzzing; it improved the code coverage of these drivers by 76% over a strong baseline, and found 15 previously unknown bugs.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/jang](https://www.usenix.org/conference/usenixsecurity23/presentation/jang)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-jang.pdf](https://www.usenix.org/system/files/usenixsecurity23-jang.pdf)
## Exorcising "Wraith": Protecting LiDAR-based Object Detector in Automated Driving System from Appearing Attacks.
### Authors
* Qifan Xiao, Fudan University
* Xudong Pan, Fudan University
* Yifan Lu, Fudan University
* Mi Zhang, Fudan University
* Jiarun Dai, Fudan University
* Min Yang, Fudan University
### Abstract
> Automated driving systems rely on 3D object detectors to recognize possible obstacles from LiDAR point clouds. However, recent works show the adversary can forge non-existent cars in the prediction results with a few fake points (i.e., appearing attack). By removing statistical outliers, existing defenses are however designed for specific attacks or biased by predefined heuristic rules. Towards more comprehensive mitigation, we first systematically inspect the mechanism of previous appearing attacks: Their common weaknesses are observed in crafting fake obstacles which (i) have obvious differences in the local parts compared with real obstacles and (ii) violate the physical relation between depth and point density.  In this paper, we propose a novel plug-and-play defensive module which works by side of a trained LiDAR-based object detector to eliminate forged obstacles where a major proportion of local parts have low objectness, i.e., to what degree it belongs to a real object. At the core of our module is a local objectness predictor, which explicitly incorporates the depth information to model the relation between depth and point density, and predicts each local part of an obstacle with an objectness score. Extensive experiments show, our proposed defense eliminates at least 70% cars forged by three known appearing attacks in most cases, while, for the best previous defense, less than 30% forged cars are eliminated. Meanwhile, under the same circumstance, our defense incurs less overhead for AP/precision on cars compared with existing defenses. Furthermore, We validate the effectiveness of our proposed defense on simulation-based closed-loop control driving tests in the open-source system of Baidu's Apollo.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/xiao-qifan](https://www.usenix.org/conference/usenixsecurity23/presentation/xiao-qifan)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-xiao-qifan.pdf](https://www.usenix.org/system/files/usenixsecurity23-xiao-qifan.pdf)
## Discovering Adversarial Driving Maneuvers against Autonomous Vehicles.
### Authors
* Ruoyu Song, Purdue University
* Muslum Ozgur Ozmen, Purdue University
* Hyungsub Kim, Purdue University
* Raymond Muller, Purdue University
* Z. Berkay Celik, Purdue University
* Antonio Bianchi, Purdue University
### Abstract
> Over 33% of vehicles sold in 2021 had integrated autonomous driving (AD) systems. While many adversarial machine learning attacks have been studied against these systems, they all require an adversary to perform specific (and often unrealistic) actions, such as carefully modifying traffic signs or projecting malicious images, which may arouse suspicion if discovered. In this paper, we present Acero, a robustness-guided framework to discover adversarial maneuver attacks against autonomous vehicles (AVs). These maneuvers look innocent to the outside observer but force the victim vehicle to violate safety rules for AVs, causing physical consequences, e.g., crashing with pedestrians and other vehicles. To optimally find adversarial driving maneuvers, we formalize seven safety requirements for AD systems and use this formalization to guide our search. We also formalize seven physical constraints that ensure the adversary does not place themselves in danger or violate traffic laws while conducting the attack. Acero then leverages trajectory-similarity metrics to cluster successful attacks into unique groups, enabling AD developers to analyze the root cause of attacks and mitigate them. We evaluated Acero on two open-source AD software, openpilot and Autoware, running on the CARLA simulator. Acero discovered 219 attacks against openpilot and 122 attacks against Autoware. 73.3% of these attacks cause the victim to collide with a third-party vehicle, pedestrian, or static object.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/song](https://www.usenix.org/conference/usenixsecurity23/presentation/song)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-song.pdf](https://www.usenix.org/system/files/usenixsecurity23-song.pdf)
## Understand Users' Privacy Perception and Decision of V2X Communication in Connected Autonomous Vehicles.
### Authors
* Zekun Cai, The Pennsylvania State University
* Aiping Xiong, The Pennsylvania State University
### Abstract
> Connected autonomous vehicles (CAVs) offer opportunities to improve road safety and enhance traffic efficiency. Vehicle-to-everything (V2X) communication allows CAVs to communicate with any entity that may affect, or may be affected by, the vehicles. The implementation of V2X in CAVs is inseparable from sharing and receiving a wide variety of data. Nevertheless, the public is not necessarily aware of such ubiquitous data exchange or does not understand their implications. We conducted an online study (N = 595) examining drivers’ privacy perceptions and decisions of four V2X application scenarios. Participants perceived more benefits but fewer risks of data sharing in the V2X scenarios where data collection is critical for driving than otherwise. They also showed more willingness to share data in those scenarios. In addition, we found that participants’ awareness of privacy risks (priming) and their experience on driving assistance and connectivity functions impacted their data-sharing decisions. Qualitative data confirmed that benefits, especially safety, come first, indicating a privacy-safety tradeoff. Moreover, factors such as misconceptions and novel expectations about CAV data collection and use moderated participants’ privacy decisions. We discuss implications of the obtained results to inform CAV privacy design and development.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/cai-zekun](https://www.usenix.org/conference/usenixsecurity23/presentation/cai-zekun)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-cai-zekun.pdf](https://www.usenix.org/system/files/usenixsecurity23-cai-zekun.pdf)
## You Can't See Me: Physical Removal Attacks on LiDAR-based Autonomous Vehicles Driving Frameworks.
### Authors
* Yulong Cao, University of Michigan
* S. Hrushikesh Bhupathiraju, University of Florida
* Pirouz Naghavi, University of Florida
* Takeshi Sugawara, The University of Electro-Communications
* Z. Morley Mao, University of Michigan
* Sara Rampazzi, University of Florida
### Abstract
> Autonomous Vehicles (AVs) increasingly use LiDAR-based object detection systems to perceive other vehicles and pedestrians on the road. While existing attacks on LiDAR-based autonomous driving architectures focus on lowering the confidence score of AV object detection models to induce obstacle misdetection, our research discovers how to leverage laser-based spoofing techniques to selectively remove the LiDAR point cloud data of genuine obstacles at the sensor level before being used as input to the AV perception. The ablation of this critical LiDAR information causes autonomous driving obstacle detectors to fail to identify and locate obstacles and, consequently, induces AVs to make dangerous automatic driving decisions. In this paper, we present a method invisible to the human eye that hides objects and deceives autonomous vehicles’ obstacle detectors by exploiting inherent automatic transformation and filtering processes of LiDAR sensor data integrated with autonomous driving frameworks. We call such attacks Physical Removal Attacks (PRA), and we demonstrate their effectiveness against three popular AV obstacle detectors (Apollo, Autoware, PointPillars), and we achieve 45◦ attack capability. We evaluate the attack impact on three fusion models (Frustum-ConvNet, AVOD, and Integrated-Semantic Level Fusion) and the consequences on the driving decision using LGSVL, an industry-grade simulator. In our moving vehicle scenarios, we achieve a 92.7% success rate removing 90% of a target obstacle’s cloud points. Finally, we demonstrate the attack’s success against two popular defenses against spoofing and object hiding attacks and discuss two enhanced defense strategies to mitigate our attack.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/cao](https://www.usenix.org/conference/usenixsecurity23/presentation/cao)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-cao.pdf](https://www.usenix.org/system/files/usenixsecurity23-cao.pdf)
## PatchVerif: Discovering Faulty Patches in Robotic Vehicles.
### Authors
* Hyungsub Kim, Purdue University
* Muslum Ozgur Ozmen, Purdue University
* Z. Berkay Celik, Purdue University
* Antonio Bianchi, Purdue University
* Dongyan Xu, Purdue University
### Abstract
> Modern software is continuously patched to fix bugs and security vulnerabilities. Patching is particularly important in robotic vehicles (RVs), in which safety and security bugs can cause severe physical damages. However, existing automated methods struggle to identify faulty patches in RVs, due to their inability to systematically determine patch-introduced behavioral modifications, which affect how the RV interacts with the physical environment. In this paper, we introduce PATCHVERIF, an automated patch analysis framework. PATCHVERIF’s goal is to evaluate whether a given patch introduces bugs in the patched RV control software. To this aim, PATCHVERIF uses a combination of static and dynamic analysis to measure how the analyzed patch affects the physical state of an RV. Specifically, PATCHVERIF uses a dedicated input mutation algorithm to generate RV inputs that maximize the behavioral differences (in the physical space) between the original code and the patched one. Using the collected information about patch-introduced behavioral modifications, PATCHVERIF employs support vector machines (SVMs) to infer whether a patch is faulty or correct. We evaluated PATCHVERIF on two popular RV control software (ArduPilot and PX4), and it successfully identified faulty patches with an average precision and recall of 97.9% and 92.1%, respectively. Moreover, PATCHVERIF discovered 115 previously unknown bugs, 103 of which have been acknowledged, and 51 of them have already been fixed.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/kim-hyungsub](https://www.usenix.org/conference/usenixsecurity23/presentation/kim-hyungsub)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-kim-hyungsub.pdf](https://www.usenix.org/system/files/usenixsecurity23-kim-hyungsub.pdf)
## Fast IDentity Online with Anonymous Credentials (FIDO-AC).
### Authors
* Wei-Zhu Yeoh, CISPA Helmholtz Center for Information Security
* Michal Kepkowski, Macquarie University
* Gunnar Heide, CISPA Helmholtz Center for Information Security
* Dali Kaafar, Macquarie University
* Lucjan Hanzlik, CISPA Helmholtz Center for Information Security
### Abstract
> Web authentication is a critical component of today's Internet and the digital world we interact with. The FIDO2 protocol enables users to leverage common devices to easily authenticate to online services in both mobile and desktop environments, following the passwordless authentication approach based on cryptography and biometric verification. However, there is little to no connection between the authentication process and users' attributes. More specifically, the FIDO protocol does not specify methods that could be used to combine trusted attributes with the FIDO authentication process generically and allow users to disclose them to the relying party arbitrarily. In essence, applications requiring attributes verification (e.g., age or expiry date of a driver's license, etc.) still rely on ad-hoc approaches that do not satisfy the data minimization principle and do not allow the user to check the disclosed data. A primary recent example is the data breach on Singtel Optus, one of the major telecommunications providers in Australia, where very personal and sensitive data (e.g., passport numbers) were leaked. This paper introduces FIDO-AC, a novel framework that combines the FIDO2 authentication process with the user's digital and non-shareable identity. We show how to instantiate this framework using off-the-shelf FIDO tokens and any electronic identity document, e.g., the ICAO biometric passport (ePassport). We demonstrate the practicality of our approach by evaluating a prototype implementation of the FIDO-AC system.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/yeoh](https://www.usenix.org/conference/usenixsecurity23/presentation/yeoh)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-yeoh.pdf](https://www.usenix.org/system/files/usenixsecurity23-yeoh.pdf)
## How to Bind Anonymous Credentials to Humans.
### Authors
* Julia Hesse, IBM Research Europe - Zurich
* Nitin Singh, IBM Research India - Bangalore
* Aless, IBM Research Europe - Zurich
* ro Sorniotti, IBM Research Europe - Zurich
### Abstract
> Digital and paper-based authentication are the two predominant mechanisms that have been deployed in the real world to authenticate end-users. When verification of a digital credential is performed in person (e.g. the authentication that was often required to access facilities at the peak of the COVID global pandemic), the two mechanisms are often deployed together: the verifier checks government-issued ID to match the picture on the ID to the individual holding it, and then checks the digital credential to see that the personal details on it match those on the ID and to discover additional attributes of the holder. This pattern is extremely common and very likely to remain in place for the foreseeable future. However, it poses an interesting problem: if the digital credential is privacy-preserving (e.g. based on BBS+ on CL signatures), but the holder is still forced to show an ID card or a passport to verify that the presented credential was indeed issued to the holder, what is the point of deploying privacy-preserving digital credential? In this paper we address this problem by redefining what an ID card should show and force a minimal but mandatory involvement of the card in the digital interaction. Our approach permits verifiers to successfully authenticate holders and to determine if they are the rightful owners of the digital credential. At the same time, optimal privacy guarantees are preserved. We design our scheme, formally define and analyse its security in the Universal Composability (UC) framework, and implement the card component, showing the running time to be below 200ms irrespective of the number of certified attributes.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/hesse](https://www.usenix.org/conference/usenixsecurity23/presentation/hesse)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-hesse.pdf](https://www.usenix.org/system/files/usenixsecurity23-hesse.pdf)
## Inducing Authentication Failures to Bypass Credit Card PINs.
### Authors
* David Basin, ETH Zurich
* Patrick Schaller, ETH Zurich
* Jorge Toro-Pozo, ETH Zurich
### Abstract
> For credit card transactions using the EMV standard, the integrity of transaction information is protected cryptographically by the credit card. Integrity checks by the payment terminal use RSA signatures and are part of EMV’s offline data authentication mechanism. Online integrity checks by the card issuer use a keyed MAC. One would expect that failures in either mechanism would always result in transaction failure, but this is not the case as offline authentication failures do not always result in declined transactions. Consequently, the integrity of transaction data that is not protected by the keyed MAC (online) cannot be guaranteed. We show how this missing integrity protection can be exploited to bypass PIN verification for high-value Mastercard transactions. As a proof-of-concept, we have built an Android app that modifies unprotected card-sourced data, including the data relevant for cardholder verification. Using our app, we have tricked real-world terminals into downgrading from PIN verification to either no cardholder verification or (paper) signature verification, for transactions of up to 500 Swiss Francs. Our findings have been disclosed to the vendor with the recommendation to decline any transaction where offline data authentication fails.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/basin](https://www.usenix.org/conference/usenixsecurity23/presentation/basin)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-basin.pdf](https://www.usenix.org/system/files/usenixsecurity23-basin.pdf)
## An Empirical Study & Evaluation of Modern CAPTCHAs.
### Authors
* Andrew Searles, University of California, Irvine
* Yoshimichi Nakatsuka, ETH Zürich
* Ercan Ozturk, University of California, Irvine
* Andrew Paverd, Microsoft
* Gene Tsudik, University of California, Irvine
* Ai Enkoji, Lawrence Livermore National Laboratory
### Abstract
> For nearly two decades, CAPTCHAS have been widely used as a means of protection against bots. Throughout the years, as their use grew, techniques to defeat or bypass CAPTCHAS have continued to improve. Meanwhile, CAPTCHAS have also evolved in terms of sophistication and diversity, becoming increasingly difficult to solve for both bots (machines) and humans. Given this long-standing and still-ongoing arms race, it is critical to investigate how long it takes legitimate users to solve modern CAPTCHAS, and how they are perceived by those users. In this work, we explore CAPTCHAS in the wild by evaluating users' solving performance and perceptions of unmodified currently-deployed CAPTCHAS. We obtain this data through manual inspection of popular websites and user studies in which 1,400 participants collectively solved 14,000 CAPTCHAS. Results show significant differences between the most popular types of CAPTCHAS: surprisingly, solving time and user perception are not always correlated. We performed a comparative study to investigate the effect of experimental context – specifically the difference between solving CAPTCHAS directly versus solving them as part of a more natural task, such as account creation. Whilst there were several potential confounding factors, our results show that experimental context could have an impact on this task, and must be taken into account in future CAPTCHA studies. Finally, we investigate CAPTCHA-induced user task abandonment by analyzing participants who start and do not complete the task.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/searles](https://www.usenix.org/conference/usenixsecurity23/presentation/searles)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-searles.pdf](https://www.usenix.org/system/files/usenixsecurity23-searles.pdf)
## Account Verification on Social Media: User Perceptions and Paid Enrollment.
### Authors
* Madelyne Xiao, Princeton University
* Mona Wang, Princeton University
* Anunay Kulshrestha, Princeton University
* Jonathan Mayer, Princeton University
### Abstract
> We investigate how users perceive social media account verification, how those perceptions compare to platform practices, and what happens when a gap emerges. We use recent changes in Twitter's verification process as a natural experiment, where the meaning and types of verification indicators rapidly and significantly shift. The project consists of two components: a user survey and a measurement of verified Twitter accounts.In the survey study, we ask a demographically representative sample of U.S. respondents (n = 299) about social media account verification requirements both in general and for particular platforms. We also ask about experiences with online information sources and digital literacy. More than half of respondents misunderstand Twitter's criteria for blue check account verification, and over 80% of respondents mis- understand Twitter's new gold and gray check verification indicators. Our analysis of survey responses suggests that people who are older or have lower digital literacy may be modestly more likely to misunderstand Twitter verification.In the measurement study, we randomly sample 15 million English language tweets from October 2022. We obtain ac- count verification status for the associated accounts in Novem- ber 2022, just before Twitter's verification changes, and we collect verification status again in January 2022. The resulting longitudinal dataset of 2.85 million accounts enables us to characterize the accounts that gained and lost verification following Twitter's changes. We find that accounts posting conservative political content, exhibiting positive views about Elon Musk, and promoting cryptocurrencies disproportionately obtain blue check verification after Twitter's changes.We close by offering recommendations for improving ac- count verification indicators and processes.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/xiao-madelyne](https://www.usenix.org/conference/usenixsecurity23/presentation/xiao-madelyne)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-xiao-madelyne.pdf](https://www.usenix.org/system/files/usenixsecurity23-xiao-madelyne.pdf)
## User Awareness and Behaviors Concerning Encrypted DNS Settings in Web Browsers.
### Authors
* Alex, Carnegie Mellon University and University of Chicago
* ra Nisenoff, Carnegie Mellon University and University of Chicago
* Ranya Sharma, University of Chicago
* Nick Feamster, University of Chicago
### Abstract
> Recent developments to encrypt the Domain Name System (DNS) have resulted in major browser and operating system vendors deploying encrypted DNS functionality, often enabling various configurations and settings by default. In many cases, default encrypted DNS settings have implications for performance and privacy; for example, Firefox’s default DNS setting sends all of a user’s DNS queries to Cloudflare, potentially introducing new privacy vulnerabilities. In this paper, we confirm that most users are unaware of these developments—with respect to the rollout of these new technologies, the changes in default settings, and the ability to customize encrypted DNS configuration to balance user preferences between privacy and performance. Our findings suggest several important implications for the designers of interfaces for encrypted DNS functionality in both browsers and operating systems, to help improve user awareness concerning these settings, and to ensure that users retain the ability to make choices that allow them to balance tradeoffs concerning DNS privacy and performance.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/nisenoff-awareness](https://www.usenix.org/conference/usenixsecurity23/presentation/nisenoff-awareness)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-nisenoff-awareness.pdf](https://www.usenix.org/system/files/usenixsecurity23-nisenoff-awareness.pdf)
## Two Sides of the Shield: Understanding Protective DNS adoption factors.
### Authors
* Elsa Rodríguez, Delft University of Technology
* Radu Anghel, Delft University of Technology
* Simon Parkin, Delft University of Technology
* Michel van Eeten, Delft University of Technology
* Carlos Gañán, Delft University of Technology
### Abstract
> Protective DNS (PDNS) filters out DNS requests leading to harmful resources. PDNS is currently being promoted by various governments and industry players – some global public DNS providers offer it, as do some government-sponsored DNS resolvers. Yet, are end users even interested in adopting it? The extent of current PDNS usage, as well as the factors that encourage or discourage end-users' adoption, have not been studied. We found that overall PDNS adoption is minimal, though in some countries over 20% of the DNS queries are being answered by these types of resolvers. Four human subjects studies were undertaken to understand end-user adoption factors: a survey with 295 consumers; 24 interviews with ISP customers offered a free PDNS after a malware infection; 12 interviews with public and private enterprise professionals, and 9 interviews with DNS technology specialists. We found that users are more likely to use PDNS if operated by their own ISP rather than the government. For enterprises, we uncovered that access to global threat intelligence, a layered security strategy, and compliance with regulations were the main factors for PDNS adoption. The DNS technical specialists highlighted broader challenges of PDNS adoption such as transparency and centralization.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/rodriguez](https://www.usenix.org/conference/usenixsecurity23/presentation/rodriguez)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-rodriguez.pdf](https://www.usenix.org/system/files/usenixsecurity23-rodriguez.pdf)
## The Maginot Line: Attacking the Boundary of DNS Caching Protection.
### Authors
* Xiang Li, Tsinghua University
* Chaoyi Lu, Tsinghua University
* Baojun Liu, Tsinghua University
* Qifan Zhang, University of California, Irvine
* Zhou Li, University of California, Irvine
* Haixin Duan, Tsinghua University, QI-ANXIN Technology Research Institute, and Zhongguancun Laboratory
* Qi Li, Tsinghua University and Zhongguancun Laboratory
### Abstract
> In this paper, we report MaginotDNS, a powerful cache poisoning attack against DNS servers that simultaneously act as forwarder and recursive resolver (termed as CDNS). The attack is made possible through exploiting vulnerabilities in the bailiwick checking algorithms, one of the cornerstones of DNS security since the 1990s, and affects multiple versions of popular DNS software, including BIND and Microsoft DNS. Through field tests, we find that the attack is potent, allowing attackers to take over entire DNS zones, even including Top-Level Domains (e.g., .com and .net).  Through a large-scale measurement study, we also confirm the extensive usage of CDNSes in real-world networks (up to 41.8% of our probed open DNS servers) and find that at least 35.5% of all CDNSes are vulnerable to MaginotDNS. After interviews with ISPs, we show a wide range of CDNS use cases and real-world attacks. We have reported all the discovered vulnerabilities to DNS software vendors and received acknowledgments from all of them. 3 CVE-ids have been assigned, and 2 vendors have fixed their software. Our study brings attention to the implementation inconsistency of security checking logic in different DNS software and server modes (i.e., recursive resolvers and forwarders), and we call for standardization and agreements among software vendors.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/li-xiang](https://www.usenix.org/conference/usenixsecurity23/presentation/li-xiang)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-li-xiang.pdf](https://www.usenix.org/system/files/usenixsecurity23-li-xiang.pdf)
## Fourteen Years in the Life: A Root Server's Perspective on DNS Resolver Security.
### Authors
* Alden Hilton, Sandia National Laboratories
* Casey Deccio, Brigham Young University
* Jacob Davis, Sandia National Laboratories
### Abstract
> We consider how the DNS security and privacy landscape has evolved over time, using data collected annually at A-root between 2008 and 2021. We consider issues such as deployment of security and privacy mechanisms, including source port randomization, TXID randomization, DNSSEC, and QNAME minimization. We find that achieving general adoption of new security practices is a slow, ongoing process. Of particular note, we find a significant number of resolvers lacking nearly all of the security mechanisms we considered, even as late as 2021. Specifically, in 2021, over 4% of the resolvers analyzed were unprotected by either source port randomization, DNSSEC validation, DNS cookies, or 0x20 encoding. Encouragingly, we find that the volume of traffic from resolvers with secure practices is significantly higher than that of other resolvers.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/hilton](https://www.usenix.org/conference/usenixsecurity23/presentation/hilton)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-hilton.pdf](https://www.usenix.org/system/files/usenixsecurity23-hilton.pdf)
## NRDelegationAttack: Complexity DDoS attack on DNS Recursive Resolvers.
### Authors
* Yehuda Afek, Tel-Aviv University
* Anat Bremler-Barr, Tel-Aviv University
* Shani Stajnrod, Reichman University
### Abstract
> Malicious actors carrying out distributed denial-of-service (DDoS) attacks are interested in requests that consume a large amount of resources and provide them with ammunition. We present a severe complexity attack on DNS resolvers, where a single malicious query to a DNS resolver can significantly increase its CPU load. Even a few such concurrent queries can result in resource exhaustion and lead to a denial of its service to legitimate clients. This attack is unlike most recent DDoS attacks on DNS servers, which use communication amplification attacks where a single query generates a large number of message exchanges between DNS servers.  The attack described here involves a malicious client whose request to a target resolver is sent to a collaborating malicious authoritative server; this server, in turn, generates a carefully crafted referral response back to the (victim) resolver. The chain reaction of requests continues, leading to the delegation of queries. These ultimately direct the resolver to a server that does not respond to DNS queries. The exchange generates a long sequence of cache and memory accesses that dramatically increase the CPU load on the target resolver. Hence the name non-responsive delegation attack, or NRDelegationAttack. We demonstrate that three major resolver implementations, BIND9, Unbound, and Knot, are affected by the NRDelegationAttack, and carry out a detailed analysis of the amplification factor on a BIND9 based resolver. As a result of this work, three common vulnerabilities and exposures (CVEs) regarding NRDelegationAttack were issued by these resolver implementations. We also carried out minimal testing on 16 open resolvers, confirming that the attack affects them as well.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/afek](https://www.usenix.org/conference/usenixsecurity23/presentation/afek)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-afek.pdf](https://www.usenix.org/system/files/usenixsecurity23-afek.pdf)
## Inductive Graph Unlearning.
### Authors
* Cheng-Long Wang, King Abdullah University of Science and Technology and SDAIA-KAUST Center of Excellence in Data Science and Artificial Intelligence
* Mengdi Huai, Iowa State University
* Di Wang, King Abdullah University of Science and Technology, Computational Bioscience Research Center, and SDAIA-KAUST Center of Excellence in Data Science and Artificial Intelligence
### Abstract
> As a way to implement the "right to be forgotten" in machine learning, machine unlearning aims to completely remove the contributions and information of the samples to be deleted from a trained model without affecting the contributions of other samples. Recently, many frameworks for machine unlearning have been proposed, and most of them focus on image and text data. To extend machine unlearning to graph data, GraphEraser has been proposed. However, a critical issue is that GraphEraser is specifically designed for the transductive graph setting, where the graph is static and attributes and edges of test nodes are visible during training. It is unsuitable for the inductive setting, where the graph could be dynamic and the test graph information is invisible in advance. Such inductive capability is essential for production machine learning systems with evolving graphs like social media and transaction networks. To fill this gap, we propose the GUided InDuctivE Graph Unlearning framework (GUIDE). GUIDE consists of three components: guided graph partitioning with fairness and balance, efficient subgraph repair, and similarity-based aggregation. Empirically, we evaluate our method on several inductive benchmarks and evolving transaction graphs. Generally speaking, GUIDE can be efficiently implemented on the inductive graph learning tasks for its low graph partition cost, no matter on computation or structure information. The code is available here: https://github.com/Happy2Git/GUIDE.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/wang-cheng-long](https://www.usenix.org/conference/usenixsecurity23/presentation/wang-cheng-long)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-wang-cheng-long.pdf](https://www.usenix.org/system/files/usenixsecurity23-wang-cheng-long.pdf)
## GAP: Differentially Private Graph Neural Networks with Aggregation Perturbation.
### Authors
* Sina Sajadmanesh, Idiap Research Institute and EPFL
* Ali Shahin Shamsabadi, Alan Turing Institute
* Aurélien Bellet, Inria
* Daniel Gatica-Perez, Idiap Research Institute and EPFL
### Abstract
> In this paper, we study the problem of learning Graph Neural Networks (GNNs) with Differential Privacy (DP). We propose a novel differentially private GNN based on Aggregation Perturbation (GAP), which adds stochastic noise to the GNN's aggregation function to statistically obfuscate the presence of a single edge (edge-level privacy) or a single node and all its adjacent edges (node-level privacy). Tailored to the specifics of private learning, GAP's new architecture is composed of three separate modules: (i) the encoder module, where we learn private node embeddings without relying on the edge information; (ii) the aggregation module, where we compute noisy aggregated node embeddings based on the graph structure; and (iii) the classification module, where we train a neural network on the private aggregations for node classification without further querying the graph edges. GAP's major advantage over previous approaches is that it can benefit from multi-hop neighborhood aggregations, and guarantees both edge-level and node-level DP not only for training, but also at inference with no additional costs beyond the training's privacy budget. We analyze GAP's formal privacy guarantees using Rényi DP and conduct empirical experiments over three real-world graph datasets. We demonstrate that GAP offers significantly better accuracy-privacy trade-offs than state-of-the-art DP-GNN approaches and naive MLP-based baselines. Our code is publicly available at https://github.com/sisaman/GAP.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/sajadmanesh](https://www.usenix.org/conference/usenixsecurity23/presentation/sajadmanesh)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-sajadmanesh.pdf](https://www.usenix.org/system/files/usenixsecurity23-sajadmanesh.pdf)
## PrivGraph: Differentially Private Graph Data Publication by Exploiting Community Information.
### Authors
* Quan Yuan, Zhejiang University
* Zhikun Zhang, Stanford University and CISPA Helmholtz Center for Information Security
* Linkang Du, Zhejiang University
* Min Chen, CISPA Helmholtz Center for Information Security
* Peng Cheng, Zhejiang University
* Mingyang Sun, Zhejiang University
### Abstract
> Graph data is used in a wide range of applications, while analyzing graph data without protection is prone to privacy breach risks. To mitigate the privacy risks, we resort to the standard technique of differential privacy to publish a synthetic graph. However, existing differentially private graph synthesis approaches either introduce excessive noise by directly perturbing the adjacency matrix, or suffer significant information loss during the graph encoding process. In this paper, we propose an effective graph synthesis algorithm PrivGraph by exploiting the community information. Concretely, PrivGraph differentially privately partitions the private graph into communities, extracts intra-community and inter-community information, and reconstructs the graph from the extracted graph information. We validate the effectiveness of PrivGraph on six real-world graph datasets and seven commonly used graph metrics.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/yuan-quan](https://www.usenix.org/conference/usenixsecurity23/presentation/yuan-quan)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-yuan-quan.pdf](https://www.usenix.org/system/files/usenixsecurity23-yuan-quan.pdf)
## On the Security Risks of Knowledge Graph Reasoning.
### Authors
* Zhaohan Xi, Pennsylvania State University
* Tianyu Du, Pennsylvania State University
* Changjiang Li, Pennsylvania State University
* Ren Pang, Pennsylvania State University
* Shouling Ji, Zhejiang University
* Xiapu Luo, The Hong Kong Polytechnic University
* Xusheng Xiao, Arizona State University
* Fenglong Ma, Pennsylvania State University
* Ting Wang, Pennsylvania State University
### Abstract
> Knowledge graph reasoning (KGR) – answering complex logical queries over large knowledge graphs – represents an important artificial intelligence task, entailing a range of applications (e.g., cyber threat hunting). However, despite its surging popularity, the potential security risks of KGR are largely unexplored, which is concerning, given the increasing use of such capability in security-critical domains.This work represents a solid initial step towards bridging the striking gap. We systematize the security threats to KGR according to the adversary's objectives, knowledge, and attack vectors. Further, we present ROAR, a new class of attacks that instantiate a variety of such threats. Through empirical evaluation in representative use cases (e.g., medical decision support, cyber threat hunting, and commonsense reasoning), we demonstrate that ROAR is highly effective to mislead KGR to suggest pre-defined answers for target queries, yet with negligible impact on non-target ones. Finally, we explore potential countermeasures against ROAR, including filtering of potentially poisoning knowledge and training with adversarially augmented queries, which leads to several promising research directions.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/xi](https://www.usenix.org/conference/usenixsecurity23/presentation/xi)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-xi.pdf](https://www.usenix.org/system/files/usenixsecurity23-xi.pdf)
## The Case for Learned Provenance Graph Storage Systems.
### Authors
* Hailun Ding, Rutgers University
* Juan Zhai, Rutgers University
* Dong Deng, Rutgers University
* Shiqing Ma, Rutgers University
### Abstract
> Cyberattacks are becoming more frequent and sophisticated, and investigating them becomes more challenging. Provenance graphs are the primary data source to support forensics analysis. Because of system complexity and long attack duration, provenance graphs can be huge, and efficiently storing them remains a challenging problem. Existing works typically use relational or graph databases to store provenance graphs. These solutions suffer from high storage overhead and low query efficiency. Recently, researchers leveraged Deep Neural Networks (DNNs) in storage system design and achieved promising results. We observe that DNNs can embed given inputs as context-aware numerical vector representations, which are compact and support parallel query operations. In this paper, we propose to learn a DNN as the storage system for provenance graphs to achieve storage and query efficiency. We also present novel designs that leverage domain knowledge to reduce provenance data redundancy and build fast-query processing with indexes. We built a prototype LEONARD and evaluated it on 12 datasets. Compared with the relational database Quickstep and the graph database Neo4j, LEONARD reduced the space overhead by up to 25.90x and boosted up to 99.6% query executions.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/ding-hailun-provenance](https://www.usenix.org/conference/usenixsecurity23/presentation/ding-hailun-provenance)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-ding-hailun-provenance.pdf](https://www.usenix.org/system/files/usenixsecurity23-ding-hailun-provenance.pdf)
## A Large Scale Study of the Ethereum Arbitrage Ecosystem.
### Authors
* Robert McLaughlin, University of California, Santa Barbara
* Christopher Kruegel, University of California, Santa Barbara
* Giovanni Vigna, University of California, Santa Barbara
### Abstract
> The Ethereum blockchain rapidly became the epicenter of a complex financial ecosystem, powered by decentralized exchanges (DEXs). These exchanges form a diverse capital market where anyone can swap one type of token for another. Arbitrage trades are a normal and expected phenomenon in free capital markets, and, indeed, several recent works identify these transactions on decentralized exchanges. Unfortunately, existing studies leave significant knowledge gaps in our understanding of the system as a whole, which hinders research into the security, stability, and economic impacts of arbitrage. To address this issue, we perform two large-scale measurements over a 28-month period. First, we design a novel arbitrage identification strategy capable of analyzing over 10x more DEX applications than prior work. This uncovers 3.8 million arbitrages, which yield a total of $321 million in profit. Second, we design a novel arbitrage opportunity detection system, which is the first to support modern complex price models at scale. This system identifies 4 billion opportunities and would generate a weekly profit of 395 Ether (approximately $500,000, at the time of writing). We observe two key insights that demonstrate the usefulness of these measurements: (1) an increasing percentage of revenue is paid to the miners, which threatens consensus stability, and (2) arbitrage opportunities occasionally persist for several blocks, which implies that price-oracle manipulation attacks may be less costly than expected.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/mclaughlin](https://www.usenix.org/conference/usenixsecurity23/presentation/mclaughlin)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-mclaughlin.pdf](https://www.usenix.org/system/files/usenixsecurity23-mclaughlin.pdf)
## ACon2: Adaptive Conformal Consensus for Provable Blockchain Oracles.
### Authors
* Sangdon Park, Georgia Institute of Technology
* Osbert Bastani, University of Pennsylvania
* Taesoo Kim, Georgia Institute of Technology
### Abstract
> Blockchains with smart contracts are distributed ledger systems that achieve block-state consistency among distributed nodes by only allowing deterministic operations of smart contracts.  However, the power of smart contracts is enabled by interacting with stochastic off-chain data, which in turn opens the possibility to undermine the block-state consistency.  To address this issue, an oracle smart contract is used to provide a single consistent source of external data; but, simultaneously, this introduces a single point of failure, which is called the oracle problem.  To address the oracle problem, we propose an adaptive conformal consensus (ACon2) algorithm that derives a consensus set of data from multiple oracle contracts via the recent advance in online uncertainty quantification learning.  Interesting, the consensus set provides a desired correctness guarantee under distribution shift and Byzantine adversaries.  We demonstrate the efficacy of the proposed algorithm on two price datasets and an Ethereum case study.  In particular, the Solidity implementation of the proposed algorithm shows the potential practicality of the proposed algorithm, implying that online machine learning algorithms are applicable to address security issues in blockchains.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/park](https://www.usenix.org/conference/usenixsecurity23/presentation/park)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-park.pdf](https://www.usenix.org/system/files/usenixsecurity23-park.pdf)
## Snapping Snap Sync: Practical Attacks on Go Ethereum Synchronising Nodes.
### Authors
* Massimiliano Taverna, ETH Zurich
* Kenneth G. Paterson, ETH Zurich
### Abstract
> Go Ethereum is by far the most used Ethereum client. It originally implemented the Ethereum proof-of-work consensus mechanism, before the switch to proof-of-stake in 2022. We analyse the Go Ethereum implementation of chain synchronisation – the process through which a node first joining the network obtains the blockchain from its peers – in proof-of-work. We present three novel attacks that allow an adversary controlling a small fraction of the network mining power to induce synchronising nodes to deviate from consensus and eventually operate on an adversary-controlled version of the blockchain. We successfully implemented the attacks in a test network. We describe how the attacks can be leveraged to realise financial profits, through off-chain trading and via arbitrary code execution. Notably, the cheapest of our attacks can be mounted using a fraction of one GPU against both Ethereum Classic and EthereumPoW, two Ethereum forks still relying on the proof-of-work consensus mechanism and whose combined market capitalisation is around 3 billion USD. Our attacks would have also applied to the pre-Merge Ethereum mainnet during the period 2017 – 2022.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/taverna](https://www.usenix.org/conference/usenixsecurity23/presentation/taverna)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-taverna.pdf](https://www.usenix.org/system/files/usenixsecurity23-taverna.pdf)
## Token Spammers, Rug Pulls, and Sniper Bots: An Analysis of the Ecosystem of Tokens in Ethereum and in the Binance Smart Chain (BNB).
### Authors
* Federico Cernera, Sapienza University of Rome
* Massimo La Morgia, Sapienza University of Rome
* Aless, Sapienza University of Rome
* ro Mei, Sapienza University of Rome
* Francesco Sassi, Sapienza University of Rome
### Abstract
> In this work, we perform a longitudinal analysis of the BNB Smart Chain and Ethereum blockchain from their inception to March 2022. We study the ecosystem of the tokens and liquidity pools, highlighting analogies and differences between the two blockchains. We discover that about 60% of tokens are active for less than one day. Moreover, we find that 1% of addresses create an anomalous number of tokens (between 20% and 25%). We discover that these tokens are used as disposable tokens to perform a particular type of rug pull, which we call 1-day rug pull. We quantify the presence of this operation on both blockchains discovering its prevalence on the BNB Smart Chain.  We estimate that 1-day rug pulls generated $240 million in profits. Finally, we present sniper bots, a new kind of trader bot involved in these activities, and we detect their presence and quantify their activity in the rug pull operations.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/cernera](https://www.usenix.org/conference/usenixsecurity23/presentation/cernera)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-cernera.pdf](https://www.usenix.org/system/files/usenixsecurity23-cernera.pdf)
## Automated Inference on Financial Security of Ethereum Smart Contracts.
### Authors
* Wansen Wang, University of Science and Technology of China
* Wenchao Huang, University of Science and Technology of China
* Zhaoyi Meng, Anhui University
* Yan Xiong, University of Science and Technology of China
* Fuyou Miao, University of Science and Technology of China
* Xianjin Fang, Anhui University of Science and Technology
* Caichang Tu, University of Science and Technology of China
* Renjie Ji, University of Science and Technology of China
### Abstract
> Nowadays millions of Ethereum smart contracts are created per year and become attractive targets for financially motivated attackers. However, existing analyzers are not sufficient to analyze the financial security of a large number of contracts precisely. In this paper, we propose and implement FASVERIF, an automated inference system for fine-grained analysis of smart contracts. FASVERIF automatically generates models to be verified against security properties of smart contracts. Besides, different from existing approaches of formal verifications, our inference system also automatically generates the security properties. Specifically, we propose two types of security properties, invariant properties and equivalence properties, which can be used to detect various types of finance-related vulnerabilities and can be automatically generated based on our statistical analysis. As a result, FASVERIF can automatically process source code of smart contracts, and uses formal methods whenever possible to simultaneously maximize its accuracy. We also prove the soundness of verifying our properties using our translated model based on a custom semantics of Solidity.We evaluate FASVERIF on a vulnerabilities dataset of 549 contracts by comparing it with other automatic tools. Our evaluation shows that FASVERIF greatly outperforms the representative tools using different technologies, with respect to accuracy and coverage of types of vulnerabilities. We also evaluate FASVERIF on a real-world dataset of 1700 contracts, and find 13 contracts with bugs that can still be leveraged by adversaries online.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/wang-wansen](https://www.usenix.org/conference/usenixsecurity23/presentation/wang-wansen)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-wang-wansen.pdf](https://www.usenix.org/system/files/usenixsecurity23-wang-wansen.pdf)
## LibScan: Towards More Precise Third-Party Library Identification for Android Applications.
### Authors
* Yafei Wu, State Key Lab of ISN, School of Cyber Engineering, Xidian University, China
* Cong Sun, State Key Lab of ISN, School of Cyber Engineering, Xidian University, China
* Dongrui Zeng, Palo Alto Networks, Inc., Santa Clara, CA, USA
* Gang Tan, The Pennsylvania State University, University Park, PA, USA
* Siqi Ma, University of New South Wales, Australia
* Peicheng Wang, State Key Lab of ISN, School of Cyber Engineering, Xidian University, China
### Abstract
> Android apps pervasively use third-party libraries (TPL) to reuse functionalities and improve development efficiency. The insufficient knowledge of the TPL internal exposes the developers and users to severe threats of security vulnerabilities. To mitigate such threats, people have proposed diversified approaches to identifying vulnerable or even malicious TPLs. However, the rich features of different modern obfuscators, including advanced repackaging, dead code removal, and control-flow randomization, have significantly impeded the precise detection of the TPLs. In this work, we propose a general-purpose TPL detection approach, LibScan. We first fingerprint code features to build the potential class correspondence relations between the app and TPL classes. Then, we use the method-opcode similarity and call-chain-opcode similarity to improve the accuracy of detected class correspondences. Moreover, we design early-stop criteria and reuse intermediate results to improve the efficiency of LibScan. In experiments, the evaluation with ground truths demonstrated the effectiveness of LibScan and its detection steps. We also applied LibScan to detect vulnerable TPLs in the top Google Play apps and large-scale wild apps, which shows the efficiency and scalability of our approach, as well as the potential of our approach as an auxiliary tool that helps malware detection.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/wu-yafei](https://www.usenix.org/conference/usenixsecurity23/presentation/wu-yafei)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-wu-yafei.pdf](https://www.usenix.org/system/files/usenixsecurity23-wu-yafei.pdf)
## Union under Duress: Understanding Hazards of Duplicate Resource Mismediation in Android Software Supply Chain.
### Authors
* Xueqiang Wang, University of Central Florida
* Yifan Zhang, Indiana University Bloomington
* XiaoFeng Wang, Indiana University Bloomington
* Yan Jia, Nankai University
* Luyi Xing, Indiana University Bloomington
### Abstract
> Malicious third-party libraries have become a major source of security risks to the Android software supply chain. A recent study shows that a malicious library could harvest data from other libraries hosted in the same app via unauthorized API accesses. However, it is unclear whether third-party libraries could still pose a threat to other libraries after their code and APIs are thoroughly vetted for security.A third-party Android library often contains diverse resources to support its operations. These resources, along with resources from other libraries, are managed by the Android resource compiler (ARC) during the app build process. ARC needs to mediate the resources in case multiple libraries have duplicate resources.In this paper, we report a new attack surface on the Android app supply chain: duplicate resource mismediation (Duress). This attack surface provides an opportunity for attackers to contaminate security- and privacy-sensitive resources of a victim library by exploiting ARC, using duplicate resources in malicious libraries. Our attack cases demonstrate that with several effective attack strategies, an attacker can stealthily mislead the victim library and its users to expose sensitive data, and lower down the security protections, etc. Further, we conduct the first systematic study to understand the impacts of Duress risks. Our study has brought to light the pervasiveness of the Duress risks in third-party libraries: an analysis of over 23K libraries and 150K apps discovered that 18.4% libraries have sensitive resources that are exposed to Duress risks, 25.7% libraries have duplicate sensitive resources with other libraries, i.e., integration risks, and over 400 apps in the wild are affected by potential occurrences of Duress, etc. To mitigate the risks, we discuss a lightweight and compile-time resource isolation method to prevent malicious libraries from contaminating the sensitive resources of other libraries.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/wang-xueqiang-duress](https://www.usenix.org/conference/usenixsecurity23/presentation/wang-xueqiang-duress)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-wang-xueqiang-duress.pdf](https://www.usenix.org/system/files/usenixsecurity23-wang-xueqiang-duress.pdf)
## UVSCAN: Detecting Third-Party Component Usage Violations in IoT Firmware.
### Authors
* Binbin Zhao, Georgia Institute of Technology and Zhejiang University
* Shouling Ji, Zhejiang University
* Xuhong Zhang, Zhejiang University
* Yuan Tian, University of California, Los Angeles
* Qinying Wang, Zhejiang University
* Yuwen Pu, Zhejiang University
* Chenyang Lyu, Zhejiang University
* Raheem Beyah, Georgia Institute of Technology
### Abstract
> Nowadays, IoT devices integrate a wealth of third-party components (TPCs) in firmware to shorten the development cycle. TPCs usually have strict usage specifications, e.g., checking the return value of the function. Violating the usage specifications of TPCs can cause serious consequences, e.g., NULL pointer dereference. Therefore, this massive amount of TPC integrations, if not properly implemented, will lead to pervasive vulnerabilities in IoT devices. Detecting vulnerabilities automatically in TPC integration is challenging from several perspectives: (1) There is a gap between the high-level specifications from TPC documents, and the low-level implementations in the IoT firmware. (2) IoT firmware is mostly the closed-source binary, which loses a lot of information when compiling from the source code and has diverse architectures.To address these challenges, we design and implement UVScan, an automated and scalable system to detect TPC usage violations in IoT firmware. In UVScan, we first propose a novel natural language processing (NLP)-based rule extraction framework, which extracts API specifications from inconsistently formatted TPC documents. We then design a rule-driven NLP-guided binary analysis engine, which maps the logical information from the high-level TPC document to the low-level binary, and detects TPC usage violations in IoT firmware across different architectures. We evaluate UVScan from four perspectives on four popular TPCs and six ground-truth datasets. The results show that UVScan achieves more than 70% precision and recall, and has a significant performance improvement compared with even the source-level API misuse detectors. To provide an in-depth status quo understanding of the TPC usage violation problem in IoT firmware, we conduct a large-scale analysis on 4,545 firmware images and detect 27,621 usage violations. Our further case studies, the Denial-of-Service attack and the Man-In-The-Middle attack on several firmware images, demonstrate the serious risks of TPC usage violations. Currently, 206 usage violations have been confirmed by vendors as vulnerabilities, and seven of them have been assigned CVE IDs with high severity.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/zhao-binbin](https://www.usenix.org/conference/usenixsecurity23/presentation/zhao-binbin)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-zhao-binbin.pdf](https://www.usenix.org/system/files/usenixsecurity23-zhao-binbin.pdf)
## Beyond Typosquatting: An In-depth Look at Package Confusion.
### Authors
* Shradha Neupane, Worcester Polytechnic Institute
* Grant Holmes, University of Kansas
* Elizabeth Wyss, University of Kansas
* Drew Davidson, University of Kansas
* Lorenzo De Carli, University of Calgary
### Abstract
> Package confusion incidents - where a developer is misled into importing a package other than the intended one - are one of the most severe issues in supply chain security with significant security implications, especially when the wrong package has malicious functionality. While the prevalence of the issue is generally well-documented, little work has studied the range of mechanisms by which confusion in a package name could arise or be employed by an adversary. In our work, we present the first comprehensive categorization of the mechanisms used to induce confusion, and we show how this understanding can be used for detection.First, we use qualitative analysis to identify and rigorously define 13 categories of confusion mechanisms based on a dataset of 1200+ documented attacks. Results show that, while package confusion is thought to mostly exploit typing errors, in practice attackers use a variety of mechanisms, many of which work at semantic, rather than syntactic, level. Equipped with our categorization, we then define detectors for the discovered attack categories, and we evaluate them on the entire npm package set.Evaluation of a sample, performed through an online survey, identifies a subset of highly effective detection rules which (i) return high-quality matches (77% matches marked as potentially or highly confusing, and 18% highly confusing) and (ii) generate low warning overhead (1 warning per 100M+ package pairs). Comparison with state-of-the-art reveals that the large majority of such pairs are not flagged by existing tools. Thus, our work has the potential to concretely improve the identification of confusable package names in the wild.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/neupane](https://www.usenix.org/conference/usenixsecurity23/presentation/neupane)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-neupane.pdf](https://www.usenix.org/system/files/usenixsecurity23-neupane.pdf)
## SandDriller: A Fully-Automated Approach for Testing Language-Based JavaScript Sandboxes.
### Authors
* Abdullah AlHamdan, CISPA Helmholtz Center for Information Security
* Cristian-Alex, CISPA Helmholtz Center for Information Security
* ru Staicu, CISPA Helmholtz Center for Information Security
### Abstract
> Language-based isolation offers a cheap way to restrict the privileges of untrusted code. Previous work proposes a plethora of such techniques for isolating JavaScript code on the client-side, enabling the creation of web mashups. While these solutions are mostly out of fashion among practitioners, there is a growing trend to use analogous techniques for JavaScript code running outside of the browser, e.g., for protecting against supply chain attacks on the server-side. Irrespective of the use case, bugs in the implementation of language-based isolation can have devastating consequences. Hence, we propose SandDriller, the first dynamic analysis-based approach for detecting sandbox escape vulnerabilities. Our core insight is to design testing oracles based on two main objectives of language-based sandboxes: Prevent writes outside the sandbox and restrict access to privileged operations. Using instrumentation, we interpose oracle checks on all the references exchanged between the host and the guest code to detect foreign references that allow the guest code to escape the sandbox. If at run time, a foreign reference is detected by an oracle, SandDriller proceeds to synthesize an exploit for it. We apply our approach to six sandbox systems and find eight unique zero-day sandbox breakout vulnerabilities and two crashes. We believe that SandDriller can be integrated in the development process of sandboxes to detect security vulnerabilities in the pre-release phase.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/alhamdan](https://www.usenix.org/conference/usenixsecurity23/presentation/alhamdan)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-alhamdan_1.pdf](https://www.usenix.org/system/files/usenixsecurity23-alhamdan_1.pdf)
## Instructions Unclear: Undefined Behaviour in Cellular Network Specifications.
### Authors
* Daniel Klischies, Ruhr University Bochum
* Moritz Schloegel, CISPA Helmholtz Center for Information Security
* Tobias Scharnowski, CISPA Helmholtz Center for Information Security
* Mikhail Bogodukhov, Independent
* David Rupprecht, Radix Security
* Veelasha Moonsamy, Ruhr University Bochum
### Abstract
> Cellular networks are a cornerstone of modern communication and indispensable to our daily lives. Their specifications span thousands of pages, written primarily in natural language. The ensuing complexity and lack of explicitness lead to underspecification, where only subsets of possible interactions are properly specified, while other behaviour is left undefined and open to interpretation by developers. In practice, this causes weird, unintended interactions in smartphone modems implementing the specification that, in the worst case, lead to security vulnerabilities.In this work, we present the first generic approach for systematically discovering undefined behaviour in cellular specifications. Requiring solely a model of the behaviour defined in the specification, our technique extends this model to automatically reason about the presence of undefined behaviour. For each undefined behaviour, it automatically infers concrete examples as proof of existence. This not only allows improving the specification but also enables us to test smartphone modems. This way, we can verify whether an instance of undefined behaviour leads to a security vulnerability within modem firmware. With our approach, we identify 58 cases of undefined behaviour in LTE's Public Warning System, SMS, and Radio Resource Control specifications. Five of these cases resulted in previously unknown vulnerabilities that allow adversaries to read modem memory contents and perform remote Denial of Service attacks (in one case just via a single SMS) against commonly used smartphone modems. So far, two CVEs of high and one CVE of critical severity have been assigned.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/klischies](https://www.usenix.org/conference/usenixsecurity23/presentation/klischies)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-klischies.pdf](https://www.usenix.org/system/files/usenixsecurity23-klischies.pdf)
## MobileAtlas: Geographically Decoupled Measurements in Cellular Networks for Security and Privacy Research.
### Authors
* Gabriel K. Gegenhuber, University of Vienna
* Wilfried Mayer, SBA Research
* Edgar Weippl, University of Vienna
* Adrian Dabrowski, CISPA Helmholtz Center for Information Security
### Abstract
> Cellular networks are not merely data access networks to the Internet. Their distinct services and ability to form large complex compounds for roaming purposes make them an attractive research target in their own right. Their promise of providing a consistent service with comparable privacy and security across roaming partners falls apart at close inspection.  Thus, there is a need for controlled testbeds and measurement tools for cellular access networks doing justice to the technology's unique structure and global scope. Particularly, such measurements suffer from a combinatorial explosion of operators, mobile plans, and services. To cope with these challenges, we built a framework that geographically decouples the SIM from the cellular modem by selectively connecting both remotely. This allows testing any subscriber with any operator at any modem location within minutes without moving parts. The resulting GSM/UMTS/LTE measurement and testbed platform offers a controlled experimentation environment, which is scalable and cost-effective. The platform is extensible and fully open-sourced, allowing other researchers to contribute locations, SIM cards, and measurement scripts. Using the above framework, our international experiments in commercial networks revealed exploitable inconsistencies in traffic metering, leading to multiple phreaking opportunities, i.e., fare-dodging. We also expose problematic IPv6 firewall configurations, hidden SIM card communication to the home network, and fingerprint dial progress tones to track victims across different roaming networks and countries with voice calls.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/gegenhuber](https://www.usenix.org/conference/usenixsecurity23/presentation/gegenhuber)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-gegenhuber.pdf](https://www.usenix.org/system/files/usenixsecurity23-gegenhuber.pdf)
## Eavesdropping Mobile App Activity via Radio-Frequency Energy Harvesting.
### Authors
* Tao Ni, Shenzhen Research Institute, City University of Hong Kong, and Department of Computer Science, City University of Hong Kong
* Guohao Lan, Department of Software Technology, Delft University of Technology
* Jia Wang, College of Computer Science and Software Engineering, Shenzhen University
* Qingchuan Zhao, Department of Computer Science, City University of Hong Kong
* Weitao Xu, Shenzhen Research Institute, City University of Hong Kong, and Department of Computer Science, City University of Hong Kong
### Abstract
> Radio-frequency (RF) energy harvesting is a promising technology for Internet-of-Things (IoT) devices to power sensors and prolong battery life. In this paper, we present a novel side-channel attack that leverages RF energy harvesting signals to eavesdrop mobile app activities. To demonstrate this novel attack, we propose AppListener, an automated attack framework that recognizes fine-grained mobile app activities from harvested RF energy. The RF energy is harvested from a custom-built RF energy harvester which generates voltage signals from ambient Wi-Fi transmissions, and app activities are recognized from a three-tier classification algorithm. We evaluate AppListener with four mobile devices running 40 common mobile apps (e.g., YouTube, Facebook, and WhatsApp) belonging to five categories (i.e., video, music, social media, communication, and game); each category contains five application-specific activities. Experiment results show that AppListener achieves over 99% accuracy in differentiating four different mobile devices, over 98% accuracy in classifying 40 different apps, and 86.7% accuracy in recognizing five sets of application-specific activities.  Moreover, a comprehensive study is conducted to show AppListener is robust to a number of impact factors, such as distance, environment, and non-target connected devices. Practices of integrating AppListener into commercial IoT devices also demonstrate that it is easy to deploy. Finally, countermeasures are presented as the first step to defend against this novel attack.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/ni](https://www.usenix.org/conference/usenixsecurity23/presentation/ni)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-ni.pdf](https://www.usenix.org/system/files/usenixsecurity23-ni.pdf)
## Sherlock on Specs: Building LTE Conformance Tests through Automated Reasoning.
### Authors
* Yi Chen, Indiana University Bloomington
* Di Tang, Indiana University Bloomington
* Yepeng Yao, {CAS-KLONAT, BKLONSPT}, Institute of Information Engineering, CAS, and School of Cyber Security, University of Chinese Academy of Sciences
* Mingming Zha, Indiana University Bloomington
* Xiaofeng Wang, Indiana University Bloomington
* Xiaozhong Liu, Worcester Polytechnic Institute
* Haixu Tang, Indiana University Bloomington
* Baoxu Liu, {CAS-KLONAT, BKLONSPT}, Institute of Information Engineering, CAS, and School of Cyber Security, University of Chinese Academy of Sciences
### Abstract
> Conformance tests are critical for finding security weaknesses in carrier network systems. However, building a conformance test procedure from specifications is challenging, as indicated by the slow progress made by the 3GPP, particularly in developing security-related tests, even with a large amount of resources already committed. A unique challenge in building the procedure is that a testing system often cannot directly invoke the condition event in a security requirement or directly observe the occurrence of the operation expected to be triggered by the event. Addressing this issue requires an event chain to be found, which once initiated leads to a chain reaction so the testing system can either indirectly triggers the target event or indirectly observe the occurrence of the expected event. To find a solution to this problem and make progress towards a fully automated conformance test generation,  we developed a new approach called Contester , which utilizes natural language processing and machine learning to build an event dependency graph from a 3GPP specification, and further perform automated reasoning on the graph to discover the event chains for a given security requirement. Such event chains are further converted by Contester into a conformance testing procedure, which is then executed by a testing system to evaluate the compliance of user equipment (UE) with the security requirement. Our evaluation shows that given 22 security requirements from the LTE NAS specifications, Contester successfully generated over a hundred test procedures in just 25 minutes. After running these procedures on 22 popular UEs including iPhone 13, Pixel 5a and IoT devices, our approach uncovered 197 security requirement violations, with 190 never reported before, rendering these devices to serious security risks such as MITM, fake base station and reply attacks.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/chen-yi](https://www.usenix.org/conference/usenixsecurity23/presentation/chen-yi)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-chen-yi.pdf](https://www.usenix.org/system/files/usenixsecurity23-chen-yi.pdf)
## BASECOMP: A Comparative Analysis for Integrity Protection in Cellular Baseband Software.
### Authors
* Eunsoo Kim, KAIST
* Min Woo Baek, KAIST
* CheolJun Park, KAIST
* Dongkwan Kim, Samsung SDS
* Yongdae Kim, KAIST
* Insu Yun, KAIST
### Abstract
> Baseband software is an important component in cellular communication. Unfortunately, it is almost impossible to implement baseband software correctly due to the complexity and the large volume of cellular specifications. As a result, dynamic testing has been widely used to discover implementation bugs in them. However, this approach suffers from the reachability problem, resulting in many missed bugs. Recently, BaseSpec proposed a static approach for analyzing baseband. However, BaseSpec requires heavy manual analysis and is limited to message decoding, failing to support integrity protection, the most critical step in mobile communication. In this paper, we propose a novel, semi-automated approach, BASECOMP, for analyzing integrity protection. To tame the complexity of baseband firmware, BASECOMP utilizes probabilistic inference to identify the integrity protection function. In particular, BASECOMP builds a factor graph from the firmware based on specifications and discovers the most probable function for integrity protection. Then, with additional manual analysis, BASECOMP performs symbolic analysis to validate that its behavior conforms to the specification and reports any discrepancies. We applied BASECOMP to 16 firmware images from two vendors (Samsung and MediaTek) in addition to srsRAN, an open-source 4G and 5G software radio suite. As a result, we discovered 29 bugs, including a NAS AKA bypass vulnerability in Samsung which was assigned critical severity. Moreover, BASECOMP can narrow down the number of functions to be manually analyzed to 1.56 on average. This can significantly reduce manual efforts for analysis, the primary limitation of the previous static analysis approach for baseband.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/kim-eunsoo](https://www.usenix.org/conference/usenixsecurity23/presentation/kim-eunsoo)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-kim-eunsoo.pdf](https://www.usenix.org/system/files/usenixsecurity23-kim-eunsoo.pdf)
## Investigating Verification Behavior and Perceptions of Visual Digital Certificates.
### Authors
* Dañiel Gerhardt, CISPA Helmholtz Center for Information Security and Saarland University
* Alex, CISPA Helmholtz Center for Information Security and Saarland University
* er Ponticello, CISPA Helmholtz Center for Information Security and Saarland University
* Adrian Dabrowski, CISPA Helmholtz Center for Information Security
* Katharina Krombholz, CISPA Helmholtz Center for Information Security
### Abstract
> This paper presents a qualitative study to explore how individuals perceive and verify visual digital certificates with QR codes. During the COVID-19 pandemic, such certificates have been used in the EU to provide standardized proof of vaccination. We conducted semi-structured interviews with N=17 participants responsible for verifying COVID-19 certificates as part of their job. Using a two-fold thematic analysis approach, we, among other things, identified and classified multiple behavioral patterns, including inadequate reliance on visual cues as a proxy for proper digital verification.  We present design and structural recommendations based on our findings, including conceptual changes and improvements to storage and verification apps to limit shortcut opportunities. Our empirical findings are hence essential to improve the usability, robustness, and effectiveness of visual digital certificates and their verification.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/gerhardt](https://www.usenix.org/conference/usenixsecurity23/presentation/gerhardt)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-gerhardt.pdf](https://www.usenix.org/system/files/usenixsecurity23-gerhardt.pdf)
## "My Privacy for their Security": Employees' Privacy Perspectives and Expectations when using Enterprise Security Software.
### Authors
* Jonah Stegman, University of Guelph
* Patrick J. Trottier, University of Guelph
* Caroline Hillier, University of Guelph
* Hassan Khan, University of Guelph
* Mohammad Mannan, Concordia University
### Abstract
> Employees are often required to use Enterprise Security Software (“ESS”) on corporate and personal devices. ESS products collect users’ activity data including users’ location, applications used, and websites visited — operating from employees’ device to the cloud. To the best of our knowledge, the privacy implications of this data collection have yet to be explored. We conduct an online survey (n=258) and a semistructured interview (n=22) with ESS users to understand their privacy perceptions, the challenges they face when using ESS, and the ways they try to overcome those challenges. We found that while many participants reported receiving no information about what data their ESS collected, those who received some information often underestimated what was collected. Employees reported lack of communication about various data collection aspects including: the entities with access to the data and the scope of the data collected. We use the interviews to uncover several sources of misconceptions among the participants. Our findings show that while employees understand the need for data collection for security, the lack of communication and ambiguous data collection practices result in the erosion of employees’ trust on the ESS and employers. We obtain suggestions from participants on how to mitigate these misconceptions and collect feedback on our design mockups of a privacy notice and privacy indicators for ESS. Our work will benefit researchers, employers, and ESS developers to protect users’ privacy in the growing ESS market.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/stegman](https://www.usenix.org/conference/usenixsecurity23/presentation/stegman)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-stegman.pdf](https://www.usenix.org/system/files/usenixsecurity23-stegman.pdf)
## Account Security Interfaces: Important, Unintuitive, and Untrustworthy.
### Authors
* Alaa Daffalla, Cornell University
* Marina Bohuk, Cornell University
* Nicola Dell, Jacobs Institute Cornell Tech
* Rosanna Bellini, Cornell University
* Thomas Ristenpart, Cornell Tech
### Abstract
> Online services increasingly rely on user-facing interfaces to communicate important security-related account information—for example, which devices are logged into a user's account and when recent logins occurred. These are used to assess the security status of an account, which is particularly critical for at-risk users likely to be under active attack. To date, however, there has been no investigation into whether these interfaces work well. We begin to fill this gap by partnering with a clinic that supports survivors of intimate partner violence (IPV). We investigated hundreds of transcripts to identify ones capturing interactions between clinic consultants and survivors seeking to infer the security status of survivor accounts, and we performed a qualitative analysis of 28 transcripts involving 19 consultants and 22 survivors. Our findings confirm the importance of these interfaces for assessing a user's security, but we also find that these interfaces suffer from a number of limitations that cause confusion and reduce their utility.  We go on to experimentally investigate the lack of integrity of information contained in device lists and session activity logs for four major services. For all the services investigated, we show how an attacker can either hide accesses entirely or spoof access details to hide illicit logins from victims.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/daffalla](https://www.usenix.org/conference/usenixsecurity23/presentation/daffalla)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-daffalla.pdf](https://www.usenix.org/system/files/usenixsecurity23-daffalla.pdf)
## Defining "Broken": User Experiences and Remediation Tactics When Ad-Blocking or Tracking-Protection Tools Break a Website's User Experience.
### Authors
* Alex, University of Chicago and Carnegie Mellon University
* ra Nisenoff, University of Chicago and Carnegie Mellon University
* Arthur Borem, University of Chicago
* Madison Pickering, University of Chicago
* Grant Nakanishi, University of Chicago
* Maya Thumpasery, University of Chicago
* Blase Ur, University of Chicago
### Abstract
> To counteract the ads and third-party tracking ubiquitous on the web, users turn to blocking tools—ad-blocking and tracking-protection browser extensions and built-in features. Unfortunately, blocking tools can cause non-ad, non-tracking elements of a website to degrade or fail, a phenomenon termed breakage. Examples include missing images, non-functional buttons, and pages failing to load. While the literature frequently discusses breakage, prior work has not systematically mapped and disambiguated the spectrum of user experiences subsumed under breakage, nor sought to understand how users experience, prioritize, and attempt to fix breakage. We fill these gaps. First, through qualitative analysis of 18,932 extension-store reviews and GitHub issue reports for ten popular blocking tools, we developed novel taxonomies of 38 specific types of breakage and 15 associated mitigation strategies. To understand subjective experiences of breakage, we then conducted a 95-participant survey. Nearly all participants had experienced various types of breakage, and they employed an array of strategies of variable effectiveness in response to specific types of breakage in specific contexts. Unfortunately, participants rarely notified anyone who could fix the root causes. We discuss how our taxonomies and results can improve the comprehensiveness and prioritization of ongoing attempts to automatically detect and fix breakage.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/nisenoff-broken](https://www.usenix.org/conference/usenixsecurity23/presentation/nisenoff-broken)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-nisenoff-broken.pdf](https://www.usenix.org/system/files/usenixsecurity23-nisenoff-broken.pdf)
## Cryptographic Deniability: A Multi-perspective Study of User Perceptions and Expectations.
### Authors
* Tarun Kumar Yadav, Brigham Young University
* Devashish Gosain, KU Leuven
* Kent Seamons, Brigham Young University
### Abstract
> Cryptographic deniability allows a sender to deny authoring a message. However, it requires social and legal acceptance to be effective. Although popular secure messaging apps support deniability, security experts are divided on whether it should be the default property for these applications. This paper presents a multi-perspective, multi-methods study of user perceptions and expectations of deniability. The methodology includes (1) qualitative analysis of expert opinions obtained from a public forum on deniability, (2) qualitative analysis of semi-structured interviews of US participants, (3) quantitative analysis of a survey (n=664) of US participants, and (4) qualitative and quantitative analysis of US court cases with help from a legal expert to understand the legal standpoint of deniability. The results show that deniability is not socially accepted, and most users prefer non-repudiation. We found no US court cases involving WhatApp that consider deniability. Significant human-centered research is needed before deniability can adequately protect vulnerable users.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/yadav](https://www.usenix.org/conference/usenixsecurity23/presentation/yadav)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-yadav.pdf](https://www.usenix.org/system/files/usenixsecurity23-yadav.pdf)
## Silent Bugs Matter: A Study of Compiler-Introduced Security Bugs.
### Authors
* Jianhao Xu, Nanjing University
* Kangjie Lu, University of Minnesota
* Zhengjie Du, Nanjing University
* Zhu Ding, Nanjing University
* Linke Li, Nanjing University
* Qiushi Wu, University of Minnesota
* Mathias Payer, EPFL
* Bing Mao, Nanjing University
### Abstract
> Compilers assure that any produced optimized code is semantically equivalent to the original code. However, even "correct" compilers may introduce security bugs as security properties go beyond translation correctness. Security bugs introduced by such correct compiler behaviors can be disputable; compiler developers expect users to strictly follow language specifications and understand all assumptions, while compiler users may incorrectly assume that their code is secure. Such bugs are hard to find and prevent, especially when it is unclear whether they should be fixed on the compiler or user side. Nevertheless, these bugs are real and can be severe, thus should be studied carefully. We perform a comprehensive study on compiler-introduced security bugs (CISB) and their root causes. We collect a large set of CISB in the wild by manually analyzing 4,827 potential bug reports of  the most popular compilers (GCC and Clang), distilling them into a taxonomy of CISB. We further conduct a user study to understand how compiler users view compiler behaviors. Our study shows that compiler-introduced security bugs are common and may have serious security impacts. It is unrealistic to expect compiler users to understand and comply with compiler assumptions. For example, the "no-undefined-behavior" assumption has become a nightmare for users and a major cause of CISB.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/xu-jianhao](https://www.usenix.org/conference/usenixsecurity23/presentation/xu-jianhao)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-xu-jianhao.pdf](https://www.usenix.org/system/files/usenixsecurity23-xu-jianhao.pdf)
## A Bug's Life: Analyzing the Lifecycle and Mitigation Process of Content Security Policy Bugs.
### Authors
* Gertjan Franken, imec-DistriNet, KU Leuven
* Tom Van Goethem, imec-DistriNet, KU Leuven
* Lieven Desmet, imec-DistriNet, KU Leuven
* Wouter Joosen, imec-DistriNet, KU Leuven
### Abstract
> The constantly evolving Web exerts a chronic pressure on the development and maintenance of the Content Security Policy (CSP), which stands as one of the primary security policies to mitigate attacks such as cross-site scripting. Indeed, to attain comprehensiveness, the policy must account for virtually every newly introduced browser feature, and every existing browser feature must be scrutinized upon extension of CSP functionality. Unfortunately, this undertaking's complexity has already led to critical implementational shortcomings, resulting in the security subversion of all CSP-employing websites.In this paper, we present the first systematic analysis of CSP bug lifecycles, shedding new light on bug root causes. As such, we leverage our automated framework, BugHog, to evaluate the reproducibility of publicly disclosed bug proofs of concept in over 100,000 browser revisions. By considering the entire source code revision history since the introduction of CSP for Chromium and Firefox, we identified 123 unique introducing and fixing revisions for 75 CSP bugs. Our analysis shows that inconsistent handling of bugs led to the early public disclosure of three, and that the lifetime of several others could have been considerably decreased through adequate bug sharing between vendors. Finally, we propose solutions to improve current bug handling and response practices.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/franken](https://www.usenix.org/conference/usenixsecurity23/presentation/franken)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-franken.pdf](https://www.usenix.org/system/files/usenixsecurity23-franken.pdf)
## Remote Code Execution from SSTI in the Sandbox: Automatically Detecting and Exploiting Template Escape Bugs.
### Authors
* Yudi Zhao, Fudan University
* Yuan Zhang, Fudan University
* Min Yang, Fudan University
### Abstract
> Template engines are widely used in web applications to ease the development of user interfaces. The powerful capabilities provided by the template engines can be abused by attackers through server-side template injection (SSTI), enabling severe attacks on the server side, including remote code execution (RCE). Hence, modern template engines have provided a sandbox mode to prevent SSTI attacks from RCE. In this paper, we study an overlooked sandbox bypass vulnerability in template engines, called template escape, that could elevate SSTI attacks to RCE. By escaping the template rendering process, template escape bugs can be used to inject executable code on the server side. Template escape bugs are subtle to detect and exploit, due to their dependencies on the template syntax and the template rendering logic. Consequently, little knowledge is known about their prevalence and severity in the real world. To this end, we conduct the first in-depth study on template escape bugs and present TEFuzz, an automatic tool to detect and exploit such bugs. By incorporating several new techniques, TEFuzz does not need to learn the template syntax and can generate PoCs and exploits for the discovered bugs. We apply TEFuzz to seven popular PHP template engines. In all, TEFuzz discovers 135 new template escape bugs and synthesizes RCE exploits for 55 bugs. Our study shows that template escape bugs are prevalent and pose severe threats.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/zhao-yudi](https://www.usenix.org/conference/usenixsecurity23/presentation/zhao-yudi)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-zhao-yudi.pdf](https://www.usenix.org/system/files/usenixsecurity23-zhao-yudi.pdf)
## Detecting API Post-Handling Bugs Using Code and Description in Patches.
### Authors
* Miaoqian Lin, Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Kai Chen, Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Yang Xiao, Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China
### Abstract
> Program APIs must be used in accordance with their specifications. API post-handling (APH) is a common type of specification that deals with APIs' return checks, resource releases, etc. Violation of APH specifications (aka, APH bug) could cause serious security problems, including memory corruption, resource leaks, etc. API documents, as a good source of APH specifications, are often analyzed to extract specifications for APH bug detection. However, documents are not always complete, which makes many bugs fail to be detected. In this paper, we find that patches could be another good source of APH specifications. In addition to the code differences introduced by patches, patches also contain descriptions, which help to accurately extract APH specifications. In order to make bug detection accurate and efficient, we design API specification-based graph for reducing the number of paths to be analyzed and perform partial path-sensitive analysis. We implement a prototype named APHP (API Post-Handling bugs detector using Patches) for static detection of APH bugs. We evaluate APHP on four popular open-source programs, including the Linux kernel, QEMU, Git and Redis, and detect 410 new bugs, outperforming existing state-of-the-art work. 216 of the bugs have been confirmed by the maintainers, and 2 CVEs have been assigned. Some bugs have existed for more than 12 years. Till now, many submitted patches have been backported to long-term stable versions of the Linux kernel.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/lin](https://www.usenix.org/conference/usenixsecurity23/presentation/lin)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-lin.pdf](https://www.usenix.org/system/files/usenixsecurity23-lin.pdf)
## Place Your Locks Well: Understanding and Detecting Lock Misuse Bugs.
### Authors
* Yu, The Hong Kong University of Science and Technology
* ao Cai, The Hong Kong University of Science and Technology
* Peisen Yao, The Hong Kong University of Science and Technology
* Chengfeng Ye, The Hong Kong University of Science and Technology
* Charles Zhang, The Hong Kong University of Science and Technology
### Abstract
> Modern multi-threaded software systems commonly leverage locks to prevent concurrency bugs. Nevertheless, due to the complexity of writing the correct concurrent code, using locks itself is often error-prone. In this work, we investigate a general variety of lock misuses. Our characteristic study of existing CVE IDs reveals that lock misuses can inflict concurrency errors and even severe security issues, such as denial-of-service and memory corruption. To alleviate the threats, we present a practical static analysis framework, namely Lockpick, which consists of two core stages to effectively detect misused locks. More specifically, Lockpick first conducts path-sensitive typestate analysis, tracking lock-state transitions and interactions to identify sequential typestate violations. Guided by the preceding results, Lockpick then performs concurrency-aware detection to pinpoint various lock misuse errors, effectively reasoning about the thread interleavings of interest. The results are encouraging—we have used Lockpick to uncover 203 unique and confirmed lock misuses across a broad spectrum of impactful open-source systems, such as OpenSSL, the Linux kernel, PostgreSQL, MariaDB, FFmpeg, Apache HTTPd, and FreeBSD. Three  exciting results are that those confirmed lock misuses are long-latent, hiding for 7.4 years on average; in total, 16 CVE IDs have been assigned for the severe errors uncovered;  and Lockpick can flag many real bugs missed by the previous tools with significantly fewer false positives.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/cai-yuandao](https://www.usenix.org/conference/usenixsecurity23/presentation/cai-yuandao)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-cai-yuandao.pdf](https://www.usenix.org/system/files/usenixsecurity23-cai-yuandao.pdf)
## The Space of Adversarial Strategies.
### Authors
* Ryan Sheatsley, University of Wisconsin-Madison
* Blaine Hoak, University of Wisconsin-Madison
* Eric Pauley, University of Wisconsin-Madison
* Patrick McDaniel, University of Wisconsin-Madison
### Abstract
> Adversarial examples, inputs designed to induce worst-case behavior in machine learning models, have been extensively studied over the past decade. Yet, our understanding of this phenomenon stems from a rather fragmented pool of knowledge; at present, there are a handful of attacks, each with disparate assumptions in threat models and incomparable definitions of optimality. In this paper, we propose a systematic approach to characterize worst-case (i.e., optimal) adversaries. We first introduce an extensible decomposition of attacks in adversarial machine learning by atomizing attack components into surfaces and travelers. With our decomposition, we enumerate over components to create 576 attacks (568 of which were previously unexplored). Next, we propose the Pareto Ensemble Attack (PEA): a theoretical attack that upper-bounds attack performance. With our new attacks, we measure performance relative to the PEA on: both robust and non-robust models, seven datasets, and three extended &ell;p-based threat models incorporating compute costs, formalizing the Space of Adversarial Strategies. From our evaluation we find that attack performance to be highly contextual: the domain, model robustness, and threat model can have a profound influence on attack efficacy. Our investigation suggests that future studies measuring the security of machine learning should: (1) be contextualized to the domain & threat models, and (2) go beyond the handful of known attacks used today.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/sheatsley](https://www.usenix.org/conference/usenixsecurity23/presentation/sheatsley)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-sheatsley.pdf](https://www.usenix.org/system/files/usenixsecurity23-sheatsley.pdf)
## "Security is not my field, I'm a stats guy": A Qualitative Root Cause Analysis of Barriers to Adversarial Machine Learning Defenses in Industry.
### Authors
* Jaron Mink, University of Illinois at Urbana-Champaign
* Harjot Kaur, Leibniz University Hannover
* Juliane Schmüser, CISPA Helmholtz Center for Information Security
* Sascha Fahl, CISPA Helmholtz Center for Information Security
* Yasemin Acar, Paderborn University and George Washington University
### Abstract
> Adversarial machine learning (AML) has the potential to leak training data, force arbitrary classifications, and greatly degrade overall performance of machine learning models, all of which academics and companies alike consider as serious issues. Despite this, seminal work has found that most organizations insufficiently protect against such threats. While the lack of defenses to AML is most commonly attributed to missing knowledge, it is unknown why mitigations are unrealized in industry projects. To better understand the reasons behind the lack of deployed AML defenses, we conduct semi-structured interviews (n=21) with data scientists and data engineers to explore what barriers impede the effective implementation of such defenses. We find that practitioners’ ability to deploy defenses is hampered by three primary factors: a lack of institutional motivation and educational resources for these concepts, an inability to adequately assess their AML risk and make subsequent decisions, and organizational structures and goals that discourage implementation in favor of other objectives. We conclude by discussing practical recommendations for companies and practitioners to be made more aware of these risks, and better prepared to respond.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/mink](https://www.usenix.org/conference/usenixsecurity23/presentation/mink)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-mink.pdf](https://www.usenix.org/system/files/usenixsecurity23-mink.pdf)
## X-Adv: Physical Adversarial Object Attacks against X-ray Prohibited Item Detection.
### Authors
* Aishan Liu, Beihang University
* Jun Guo, Beihang University
* Jiakai Wang, Zhongguancun Laboratory
* Siyuan Liang, Chinese Academy of Sciences
* Renshuai Tao, Beihang University
* Wenbo Zhou, University of Science and Technology of China
* Cong Liu, iFLYTEK
* Xianglong Liu, Beihang University, Zhongguancun Laboratory, and Hefei Comprehensive National Science Center
* Dacheng Tao, JD Explore Academy
### Abstract
> Adversarial attacks are valuable for evaluating the robustness of deep learning models. Existing attacks are primarily conducted on the visible light spectrum (e.g., pixel-wise texture perturbation). However, attacks targeting texture-free X-ray images remain underexplored, despite the widespread application of X-ray imaging in safety-critical scenarios such as the X-ray detection of prohibited items. In this paper, we take the first step toward the study of adversarial attacks targeted at X-ray prohibited item detection, and reveal the serious threats posed by such attacks in this safety-critical scenario. Specifically, we posit that successful physical adversarial attacks in this scenario should be specially designed to circumvent the challenges posed by color/texture fading and complex overlapping. To this end, we propose X-Adv to generate physically printable metals that act as an adversarial agent capable of deceiving X-ray detectors when placed in luggage. To resolve the issues associated with color/texture fading, we develop a differentiable converter that facilitates the generation of 3D-printable objects with adversarial shapes, using the gradients of a surrogate model rather than directly generating adversarial textures. To place the printed 3D adversarial objects in luggage with complex overlapped instances, we design a policy-based reinforcement learning strategy to find locations eliciting strong attack performance in worst-case scenarios whereby the prohibited items are heavily occluded by other items. To verify the effectiveness of the proposed X-Adv, we conduct extensive experiments in both the digital and the physical world (employing a commercial X-ray security inspection system for the latter case). Furthermore, we present the physical-world X-ray adversarial attack dataset XAD. We hope this paper will draw more attention to the potential threats targeting safety-critical scenarios. Our codes and XAD dataset are available at https://github.com/DIG-Beihang/X-adv.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/liu-aishan](https://www.usenix.org/conference/usenixsecurity23/presentation/liu-aishan)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-liu-aishan.pdf](https://www.usenix.org/system/files/usenixsecurity23-liu-aishan.pdf)
## SMACK: Semantically Meaningful Adversarial Audio Attack.
### Authors
* Zhiyuan Yu, Washington University in St. Louis
* Yuanhaur Chang, Washington University in St. Louis
* Ning Zhang, Washington University in St. Louis
* Chaowei Xiao, Arizona State University
### Abstract
> Voice controllable systems rely on speech recognition and speaker identification as the key enabling technologies. While they bring revolutionary changes to our daily lives, their security has become a growing concern. Existing work has demonstrated the feasibility of using maliciously crafted perturbations to manipulate speech or speaker recognition. Although these attacks vary in targets and techniques, they all require the addition of noise perturbations. While these perturbations are generally restricted to Lp-bounded neighborhood, the added noises inevitably leave unnatural traces recognizable by humans, and can be used for defense. To address this limitation, we introduce a new class of adversarial audio attack, named Semantically Meaningful Adversarial Audio AttaCK (SMACK), where the inherent speech attributes (such as prosody) are modified such that they still semantically represent the same speech and preserves the speech quality. The efficacy of SMACK was evaluated against five transcription systems and two speaker recognition systems in a black-box manner. By manipulating semantic attributes, our adversarial audio examples are capable of evading the state-of-the-art defenses, with better speech naturalness compared to traditional Lp-bounded attacks in the human perceptual study.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/yu-zhiyuan-smack](https://www.usenix.org/conference/usenixsecurity23/presentation/yu-zhiyuan-smack)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-yu-zhiyuan-smack.pdf](https://www.usenix.org/system/files/usenixsecurity23-yu-zhiyuan-smack.pdf)
## URET: Universal Robustness Evaluation Toolkit (for Evasion).
### Authors
* Kevin Eykholt, IBM Research
* Taesung Lee, IBM Research
* Douglas Schales, IBM Research
* Jiyong Jang, IBM Research
* Ian Molloy, IBM Research
* Masha Zorin, University of Cambridge
### Abstract
> Machine learning models are known to be vulnerable to adversarial evasion attacks as illustrated by image classification models. Thoroughly understanding such attacks is critical in order to ensure the safety and robustness of critical AI tasks. However, most evasion attacks are difficult to deploy against a majority of AI systems because they have focused on image domain with only few constraints. An image is composed of homogeneous, numerical, continuous, and independent features, unlike many other input types to AI systems used in practice. Furthermore, some input types include additional semantic and functional constraints that must be observed to generate realistic adversarial inputs. In this work, we propose a new framework to enable the generation of adversarial inputs irrespective of the input type and task domain. Given an input and a set of pre-defined input transformations, our framework discovers a sequence of transformations that result in a semantically correct and functional adversarial input. We demonstrate the generality of our approach on several diverse machine learning tasks with various input representations. We also show the importance of generating adversarial examples as they enable the deployment of mitigation techniques.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/eykholt](https://www.usenix.org/conference/usenixsecurity23/presentation/eykholt)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-eykholt.pdf](https://www.usenix.org/system/files/usenixsecurity23-eykholt.pdf)
## Authenticated private information retrieval.
### Authors
* Simone Colombo, EPFL
* Kirill Nikitin, Cornell Tech
* Henry Corrigan-Gibbs, MIT
* David J. Wu, UT Austin
* Bryan Ford, EPFL
### Abstract
> This paper introduces protocols for authenticated private information retrieval. These schemes enable a client to fetch a record from a remote database server such that (a) the server does not learn which record the client reads, and (b) the client either obtains the "authentic" record or detects server misbehavior and safely aborts. Both properties are crucial for many applications. Standard private-information-retrieval schemes either do not ensure this form of output authenticity, or they require multiple database replicas with an honest majority. In contrast, we offer multi-server schemes that protect security as long as at least one server is honest. Moreover, if the client can obtain a short digest of the database out of band, then our schemes require only a single server. Performing an authenticated private PGP-public-key lookup on an OpenPGP key server's database of 3.5 million keys (3 GiB), using two non-colluding servers, takes under 1.2 core-seconds of computation, essentially matching the time taken by unauthenticated private information retrieval. Our authenticated single-server schemes are 30-100× more costly than state-of-the-art unauthenticated single-server schemes, though they achieve incomparably stronger integrity properties.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/colombo](https://www.usenix.org/conference/usenixsecurity23/presentation/colombo)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-colombo.pdf](https://www.usenix.org/system/files/usenixsecurity23-colombo.pdf)
## Don't be Dense: Efficient Keyword PIR for Sparse Databases.
### Authors
* Sarvar Patel, Google
* Joon Young Seo, Google
* Kevin Yeo, Google and Columbia University
### Abstract
> In this paper, we introduce SparsePIR, a single-server keyword private information retrieval (PIR) construction that enables querying over sparse databases. At its core, SparsePIR is based on a novel encoding algorithm that encodes sparse database entries as linear combinations while being compatible with important PIR optimizations including recursion. SparsePIR achieves response overhead that is half of state-of-the art keyword PIR schemes without requiring long-term client storage of linear-sized mappings. We also introduce two variants, SparsePIRg and SparsePIRc, that further reduces the size of the serving database at the cost of increased encoding time and small additional client storage, respectively. Our frameworks enable performing keyword PIR with, essentially, the same costs as standard PIR. Finally, we also show that SparsePIR may be used to build batch keyword PIR with halved response overhead without any client mappings.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/patel](https://www.usenix.org/conference/usenixsecurity23/presentation/patel)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-patel.pdf](https://www.usenix.org/system/files/usenixsecurity23-patel.pdf)
## GigaDORAM: Breaking the Billion Address Barrier.
### Authors
* Brett Falk, University of Pennsylvania
* Rafail Ostrovsky, University of California, Los Angeles
* Matan Shtepel, University of California, Los Angeles
* Jacob Zhang, University of California, Los Angeles
### Abstract
> We design and implement GigaDORAM, a novel 3-server Distributed Oblivious Random Access Memory (DORAM) protocol. Oblivious RAM allows a client to read and write to memory on an untrusted server, while ensuring the server itself learns nothing about the client's access pattern. Distributed Oblivious RAM (DORAM) allows a group of servers to efficiently access a secret-shared array at a secret-shared index. A recent generation of DORAM implementations (e.g. FLORAM, DuORAM) have focused on building DORAM protocols based on Function Secret-Sharing (FSS). These protocols have low communication complexity and low round complexity but linear computational complexity of the servers. Thus, they work for moderate size databases, but at a certain size these FSS-based protocols become computationally inefficient. In this work, we introduce GigaDORAM, a hierarchical-solution-based DORAM featuring poly-logarithmic computation and communication, but with an over 100× reduction in rounds per query compared to previous hierarchical DORAM protocols. In our implementation, we show that for moderate to large databases where FSS-based solutions become computation bound, our protocol is orders of magnitude more efficient than the best existing DORAM protocols. When N = 231, our DORAM is able to perform over 700 queries per second.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/falk](https://www.usenix.org/conference/usenixsecurity23/presentation/falk)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-falk.pdf](https://www.usenix.org/system/files/usenixsecurity23-falk.pdf)
## One Server for the Price of Two: Simple and Fast Single-Server Private Information Retrieval.
### Authors
* Alex, MIT
* ra Henzinger, MIT
* Matthew M. Hong, MIT
* Henry Corrigan-Gibbs, MIT
* Sarah Meiklejohn, Google
* Vinod Vaikuntanathan, MIT
### Abstract
> We present SimplePIR, the fastest single-server private information retrieval scheme known to date. SimplePIR’s security holds under the learning-with-errors assumption. To answer a client’s query, the SimplePIR server performs fewer than one 32-bit multiplication and one 32-bit addition per database byte. SimplePIR achieves 10 GB/s/core server throughput, which approaches the memory bandwidth of the machine and the performance of the fastest two-server private-information-retrieval schemes (which require non-colluding servers). SimplePIR has relatively large communication costs: to make queries to a 1 GB database, the client must download a 121 MB "hint" about the database contents; thereafter, the client may make an unbounded number of queries, each requiring 242 KB of communication. We present a second single-server scheme, DoublePIR, that shrinks the hint to 16 MB at the cost of slightly higher per-query communication (345 KB) and slightly lower throughput (7.4 GB/s/core). Finally, we apply our new private-information-retrieval schemes, together with a novel data structure for approximate set membership, to the task of private auditing in Certificate Transparency. We achieve a strictly stronger notion of privacy than Google Chrome’s current approach with 13x more communication: 16 MB of download per week, along with 1.5 KB per TLS connection.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/henzinger](https://www.usenix.org/conference/usenixsecurity23/presentation/henzinger)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-henzinger.pdf](https://www.usenix.org/system/files/usenixsecurity23-henzinger.pdf)
## Duoram: A Bandwidth-Efficient Distributed ORAM for 2- and 3-Party Computation.
### Authors
* Adithya Vadapalli, University of Waterloo
* Ryan Henry, University of Calgary
* Ian Goldberg, University of Waterloo
### Abstract
> We design, analyze, and implement Duoram, a fast and bandwidth-efficient distributed ORAM protocol suitable for secure 2- and 3-party computation settings. Following Doerner and shelat's Floram construction (CCS 2017), Duoram leverages (2,2)-distributed point functions (DPFs) to represent PIR and PIR-writing queries compactly—but with a host of innovations that yield massive asymptotic reductions in communication cost and notable speedups in practice, even for modestly sized instances.  Specifically, Duoram introduces a novel method for evaluating dot products of certain secret-shared vectors using communication that is only logarithmic in the vector length. As a result, for memories with n addressable locations, Duoram can perform a sequence of m arbitrarily interleaved reads and writes using just O(mlgn) words of communication, compared with Floram's O(m√n) words. Moreover, most of this work can occur during a data-independent preprocessing phase, leaving just O(m) words of online communication cost for the sequence—i.e., a constant online communication cost per memory access.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/vadapalli](https://www.usenix.org/conference/usenixsecurity23/presentation/vadapalli)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-vadapalli.pdf](https://www.usenix.org/system/files/usenixsecurity23-vadapalli.pdf)
## A Peek into the Metaverse: Detecting 3D Model Clones in Mobile Games.
### Authors
* Chaoshun Zuo, The Ohio State University
* Chao Wang, The Ohio State University
* Zhiqiang Lin, The Ohio State University
### Abstract
> 3D models are indispensable assets in metaverse in general and mobile games in particular. Yet, these 3D models can be readily extracted, duplicated, or cloned, a reality that poses a considerable threat. Although instances of games duplicating 3D models from other games have been documented, the pervasiveness of this issue remains unexplored. In this paper, we undertake the first systematic investigation of 3D model cloning within mobile games. However, multiple challenges have to be addressed for clone detection, including scalability, precision, and robustness. Our solution is 3DSCAN, an open source 3D Scanning tool for Clone Assessment and Notification. We have evaluated 3DSCAN with about 12.2 million static 3D models and 2.5 million animated 3D models extracted from 176K mobile games. With these 3D models, 3DSCAN determined that 63.03% of the static models are likely cloned ones (derived from 1,046,632 distinct models), and 37.07% animated 3D models are likely cloned ones (derived from 180,174 distinctive models). With a heuristic-based clone detection algorithm, 3DSCAN finally detected 5,238 mobile games likely containing unauthorized 3D model clones.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/zuo](https://www.usenix.org/conference/usenixsecurity23/presentation/zuo)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-zuo.pdf](https://www.usenix.org/system/files/usenixsecurity23-zuo.pdf)
## PATROL: Provable Defense against Adversarial Policy in Two-player Games.
### Authors
* Wenbo Guo, UC Berkeley
* Xian Wu, Northwestern University
* Lun Wang, UC Berkeley
* Xinyu Xing, Northwestern University
* Dawn Song, UC Berkeley
### Abstract
> Recent advances in deep reinforcement learning (DRL) takes artificial intelligence to the next level, from making individual decisions to accomplishing sophisticated tasks via sequential decision makings, such as defeating world-class human players in various games and making real-time trading decisions in stock markets. Following these achievements, we have recently witnessed a new attack specifically designed against DRL. Recent research shows by learning and controlling an adversarial agent/policy, an attacker could quickly discover a victim agent's weaknesses and thus force it to fail its task.Due to differences in the threat model, most existing defenses proposed for deep neural networks (DNN) cannot be migrated to train robust policies against adversarial policy attacks. In this work, we draw insights from classical game theory and propose the first provable defense against such attacks in two-player competitive games. Technically, we first model the robust policy training problem as finding the nash equilibrium (NE) point in the entire policy space. Then, we design a novel policy training method to search for the NE point in complicated DRL tasks. Finally, we theoretically prove that our proposed method could guarantee the lowerbound performance of the trained agents against arbitrary adversarial policy attacks. Through extensive evaluations, we demonstrate that our method significantly outperforms existing policy training methods in adversarial robustness and performance in non-adversarial settings.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/guo-wenbo](https://www.usenix.org/conference/usenixsecurity23/presentation/guo-wenbo)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-guo-wenbo.pdf](https://www.usenix.org/system/files/usenixsecurity23-guo-wenbo.pdf)
## The Blockchain Imitation Game.
### Authors
* Kaihua Qin, Imperial College London, RDI
* Stefanos Chaliasos, Imperial College London
* Liyi Zhou, Imperial College London, RDI
* Benjamin Livshits, Imperial College London
* Dawn Song, UC Berkeley, RDI
* Arthur Gervais, University College London, RDI
### Abstract
> The use of blockchains for automated and adversarial trading has become commonplace. However, due to the transparent nature of blockchains, an adversary is able to observe any pending, not-yet-mined transactions, along with their execution logic. This transparency further enables a new type of adversary, which copies and front-runs profitable pending transactions in real-time, yielding significant financial gains. Shedding light on such ''copy-paste'' malpractice, this paper introduces the Blockchain Imitation Game and proposes a generalized imitation attack methodology called Ape. Leveraging dynamic program analysis techniques, Ape supports the automatic synthesis of adversarial smart contracts. Over a timeframe of one year (1st of August, 2021 to 31st of July, 2022), Ape could have yielded 148.96M USD in profit on Ethereum, and 42.70M USD on BNB Smart Chain (BSC). Not only as a malicious attack, we further show the potential of transaction and contract imitation as a defensive strategy. Within one year, we find that Ape could have successfully imitated 13 and 22 known DeFi attacks on Ethereum and BSC, respectively. Our findings suggest that blockchain validators can imitate attacks in real-time to prevent intrusions in DeFi.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/qin](https://www.usenix.org/conference/usenixsecurity23/presentation/qin)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-qin.pdf](https://www.usenix.org/system/files/usenixsecurity23-qin.pdf)
## It's all in your head(set): Side-channel attacks on AR/VR systems.
### Authors
* Yicheng Zhang, University of California, Riverside
* Carter Slocum, University of California, Riverside
* Jiasi Chen, University of California, Riverside
* Nael Abu-Ghazaleh, University of California, Riverside
### Abstract
> With the increasing adoption of Augmented Reality/Virtual Reality (AR/VR) systems, security and privacy concerns attract attention from both academia and industry. This paper demonstrates that AR/VR systems are vulnerable to side-channel attacks launched from software; a malicious application without any special permissions can infer private information about user interactions, other concurrent applications, or even the surrounding world. We develop a number of side-channel attacks targeting different types of private information. Specifically, we demonstrate three attacks on the victim's interactions, successfully recovering hand gestures, voice commands made by victims, and keystrokes on a virtual keyboard, with accuracy exceeding 90%. We also demonstrate an application fingerprinting attack where the spy is able to identify an application being launched by the victim.  The final attack demonstrates that the adversary can perceive a bystander in the real-world environment and estimate the bystander's distance with Mean Absolute Error (MAE) of 10.3 cm. We believe the threats presented by our attacks are pressing; they expand our understanding of the threat model faced by these emerging systems and inform the development of new AR/VR systems that are resistant to these threats.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-yicheng](https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-yicheng)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-zhang-yicheng.pdf](https://www.usenix.org/system/files/usenixsecurity23-zhang-yicheng.pdf)
## Egg Hunt in Tesla Infotainment: A First Look at Reverse Engineering of Qt Binaries.
### Authors
* Haohuang Wen, The Ohio State University
* Zhiqiang Lin, The Ohio State University
### Abstract
> As one of the most popular C++ extensions for developing graphical user interface (GUI) based applications, Qt has been widely used in desktops, mobiles, IoTs, automobiles, etc. Although existing binary analysis platforms (e.g., angr and Ghidra) could help reverse engineer Qt binaries, they still need to address many fundamental challenges such as the recovery of control flow graphs and symbols. In this paper, we take a first look at understanding the unique challenges and opportunities in Qt binary analysis, developing enabling techniques, and demonstrating novel applications. In particular, although callbacks make control flow recovery challenging, we notice that Qt’s signal and slot mechanism can be used to recover function callbacks. More interestingly, Qt’s unique dynamic introspection can also be repurposed to recover semantic symbols. Based on these insights, we develop QtRE for function callback and semantic symbol recovery for Qt binaries. We have tested QtRE with two suites of Qt binaries: Linux KDE and the Tesla Model S firmware, where QtRE additionally recovered 10,867 callback instances and 24,973 semantic symbols from 123 binaries, which cannot be identified by existing tools. We demonstrate a novel application of using QtRE to extract hidden commands from a Tesla Model S firmware. QtRE discovered 12 hidden commands including five unknown to the public, which can potentially be exploited to manipulate vehicle settings.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/wen](https://www.usenix.org/conference/usenixsecurity23/presentation/wen)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-wen.pdf](https://www.usenix.org/system/files/usenixsecurity23-wen.pdf)
## Reusable Enclaves for Confidential Serverless Computing.
### Authors
* Shixuan Zhao, The Ohio State University
* Pinshen Xu, Southern University of Science and Technology
* Guoxing Chen, Shanghai Jiao Tong University
* Mengya Zhang, The Ohio State University
* Yinqian Zhang, Southern University of Science and Technology
* Zhiqiang Lin, The Ohio State University
### Abstract
> The recent development of Trusted Execution Environment has brought unprecedented opportunities for confidential computing within cloud-based systems. Among various popular cloud business models, serverless computing has gained dominance since its emergence, leading to a high demand for confidential serverless computing services based on trusted enclaves. However, the issue of cold start overhead significantly hinders its performance, as new enclaves need to be created to ensure a clean and verifiable execution environment. In this paper, we propose a novel approach for constructing reusable enclaves that enable rapid enclave reset and robust security with three key enabling techniques: enclave snapshot and rewinding, nested attestation, and multi-layer intra-enclave compartmentalisation. We have built a prototype system for confidential serverless computing, integrating OpenWhisk and a WebAssembly runtime, which significantly reduces the cold start overhead in an end-to-end serverless setting while imposing a reasonable performance impact on standard execution.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/zhao-shixuan](https://www.usenix.org/conference/usenixsecurity23/presentation/zhao-shixuan)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-zhao-shixuan.pdf](https://www.usenix.org/system/files/usenixsecurity23-zhao-shixuan.pdf)
## EnigMap: External-Memory Oblivious Map for Secure Enclaves.
### Authors
* Afonso Tinoco, CMU
* Sixiang Gao, CMU
* Elaine Shi, CMU
### Abstract
> Imagine that a privacy-conscious client would like to query a key-value store residing on an untrusted server equipped with a secure processor. To protect the privacy of the client's queries as well as the database, one approach is to implement an oblivious map inside a secure enclave. Indeed, earlier works demonstrated numerous applications of an enclaved-based oblivious map, including private contact discovery, key transparency, and secure outsourced databases. Our work is motivated by the observation that the previous enclave implementations of oblivious algorithms are suboptimal both asymptotically and concretely. We make the key observation that for enclave applications, the number of page swaps should be a primary performance metric. We therefore adopt techniques from the external-memory algorithms literature, and we are the first to implement such algorithms inside hardware enclaves. We also devise asymptotically better algorithms for ensuring a strong notion of obliviousness that resists cache-timing attacks. We complement our algorithmic improvements with various concrete optimizations that save constant factors in practice. The resulting system, called ENIGMAP, achieves 15× speedup over Signal's linear scan implementation, and 53× speedup over the prior best oblivious algorithm implementation, at a realistic database size of 256 million and a batch size of 1000. The speedup is asymptotical in nature and will be even greater as Signal's user base grows.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/tinoco](https://www.usenix.org/conference/usenixsecurity23/presentation/tinoco)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-tinoco.pdf](https://www.usenix.org/system/files/usenixsecurity23-tinoco.pdf)
## AEX-Notify: Thwarting Precise Single-Stepping Attacks through Interrupt Awareness for Intel SGX Enclaves.
### Authors
* Scott Constable, Intel Corporation
* Jo Van Bulck, imec-DistriNet, KU Leuven
* Xiang Cheng, Georgia Institute of Technology
* Yuan Xiao, Intel Corporation
* Cedric Xing, Intel Corporation
* Ilya Alex, Intel Corporation
* rovich, Intel Corporation
* Taesoo Kim, Georgia Institute of Technology
* Frank Piessens, imec-DistriNet, KU Leuven
* Mona Vij, Intel Corporation
* Mark Silberstein, Technion
### Abstract
> Intel® Software Guard Extensions (Intel® SGX) supports the creation of shielded enclaves within unprivileged processes. While enclaves are architecturally protected against malicious system software, Intel SGX's privileged attacker model could potentially expose enclaves to new powerful side-channel attacks. In this paper, we consider hardware-software co-design countermeasures to an important class of single-stepping attacks that use privileged timer interrupts to precisely step through enclave execution exactly one instruction at a time, as supported, e.g., by the open-source SGX-Step framework. This is a powerful deterministic attack primitive that has been employed in a broad range of high-resolution Intel SGX attacks, but so far remains unmitigated.We propose AEX-Notify, a flexible hardware ISA extension that makes enclaves interrupt aware: enclaves can register a trusted handler to be run after an interrupt or exception. AEX-Notify can be used as a building block for implementing countermeasures against different types of interrupt-based attacks in software. With our primary goal to thwart deterministic single-stepping, we first diagnose the underlying hardware behavior to determine the root cause that enables it. We then apply the learned insights to remove this root cause by building an efficient software handler and constant-time disassembler to transparently determine and atomically prefetch the working set of the next enclave application instruction.The ISA extension we propose in this paper has been incorporated into a revised version of the Intel SGX specification.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/constable](https://www.usenix.org/conference/usenixsecurity23/presentation/constable)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-constable.pdf](https://www.usenix.org/system/files/usenixsecurity23-constable.pdf)
## Controlled Data Races in Enclaves: Attacks and Detection.
### Authors
* Sanchuan Chen, Fordham University
* Zhiqiang Lin, The Ohio State University
* Yinqian Zhang, Southern University of Science and Technology
### Abstract
> This paper introduces controlled data race attacks, a new class of attacks against programs guarded by trusted execution environments such as Intel SGX. Controlled data race attacks are analog to controlled channel attacks, where the adversary controls the underlying operating system and manipulates the scheduling of enclave threads and handling of interrupts and exceptions. Controlled data race attacks are of particular interest for two reasons: First, traditionally non-deterministic data race bugs can be triggered deterministically and exploited for security violation in the context of SGX enclaves. Second, an intended single-threaded enclave can be concurrently invoked by the adversary, which triggers unique interleaving patterns that would not occur in traditional settings. To detect the controlled data race vulnerabilities in real-world enclave binaries (including the code linked with the SGX libraries), we present a lockset-based binary analysis detection algorithm. We have implemented our algorithm in a tool named SGXRacer, and evaluated it with four SGX SDKs and eight open-source SGX projects, identifying 1,780 data races originated from 476 shared variables.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/chen-sanchuan](https://www.usenix.org/conference/usenixsecurity23/presentation/chen-sanchuan)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-chen-sanchuan.pdf](https://www.usenix.org/system/files/usenixsecurity23-chen-sanchuan.pdf)
## Guarding Serverless Applications with Kalium.
### Authors
* Deepak Sirone Jegan, University of Wisconsin-Madison
* Liang Wang, Princeton University
* Siddhant Bhagat, Microsoft
* Michael Swift, University of Wisconsin-Madison
### Abstract
> As an emerging application paradigm, serverless computing attracts attention from more and more adversaries. Unfortunately, security tools for conventional web applications cannot be easily ported to serverless computing due to its distributed nature, and existing serverless security solutions focus on enforcing user specified information flow policies which are unable to detect the manipulation of the order of functions in application control flow paths. In this paper, we present Kalium, an extensible security framework that leverages local function state and global application state to enforce control-flow integrity (CFI) in serverless applications. We evaluate the performance overhead and security of Kalium using realistic open-source applications; our results show that Kalium mitigates several classes of attacks with relatively low performance overhead and outperforms the state-of-the-art serverless information flow protection systems.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/jegan](https://www.usenix.org/conference/usenixsecurity23/presentation/jegan)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-jegan.pdf](https://www.usenix.org/system/files/usenixsecurity23-jegan.pdf)
## "To Do This Properly, You Need More Resources": The Hidden Costs of Introducing Simulated Phishing Campaigns.
### Authors
* Lina Brunken, Ruhr University Bochum
* Annalina Buckmann, Ruhr University Bochum
* Jonas Hielscher, Ruhr University Bochum
* M. Angela Sasse, Ruhr University Bochum
### Abstract
> Many organizations use phishing simulation campaigns to raise and measure their employees' security awareness. They can create their own campaigns, or buy phishing-as-a-service from commercial providers; however, the evaluations of the effectiveness in reducing the vulnerability to such attacks have produced mixed results. Recently, researchers have pointed out "hidden costs" - such as reduced productivity and employee trust. What has not been investigated is the cost involved in preparing an organization for a simulated phishing campaign. We present the first case study of an organization going through the process of selecting and purchasing a phishing simulation. We document and analyze the effort of different stakeholders involved, and present reflection from semi-structured interviews with 6 key actors at the end of the procurement process. Our data analysis shows that procuring such simulations can require significant effort from different stakeholders - in our case, at least 50,000€ in person hours - and many hidden intangible costs. Evaluating if a product or service meets training requirements, is acceptable to employees, and preparing the technical infrastructure and operational processes for running such a product all require significant time and effort. The prevailing perception that phishing simulation campaigns are a quick and low-cost solution to providing security training to employees thus needs to be challenged.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/brunken](https://www.usenix.org/conference/usenixsecurity23/presentation/brunken)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-brunken.pdf](https://www.usenix.org/system/files/usenixsecurity23-brunken.pdf)
## You've Got Report: Measurement and Security Implications of DMARC Reporting.
### Authors
* Md. Ishtiaq Ashiq, Virginia Tech
* Weitong Li, Virginia Tech
* Tobias Fiebig, Max-Planck-Institut für Informatik
* Taejoong Chung, Virginia Tech
### Abstract
> Email, since its invention, has become the most widely used communication system and SMTP is the standard for email transmission on the Internet. However, SMTP lacks built-in security features, such as sender authentication, making it vulnerable to attacks, including sender spoofing. To address the threat of spoofing, several security extensions, such as SPF or DKIM, have been proposed. Domain-based Message Authentication Reporting and Conformance (DMARC) was introduced in 2012 as a way for domain name owners to publish desired actions for email receivers to take through a DNS record if SPF or DKIM validation fails. The DMARC record can also request email receivers to send machine-generated reports back to the specified addresses to aid domain name owners in detecting and evaluating the risk of spoofed emails. However, DMARC's complexity creates opportunities for mismanagement that can be exploited by attackers. This paper presents a large-scale and comprehensive measurement study of DMARC reporting deployment and management. We collected data for all second-level domains under the .com, .net, .org, and .se TLDs over 13 months to analyze deployment and management from the domain name owner's perspective. Additionally, we investigated 7 popular email hosting services and 2 open-source DMARC reporting software to understand their reporting practices. Our study reveals pervasive mismanagement and missing security considerations in DMARC reporting. For example, we found that a single email from an attacker can make a victim SMTP server receive a large number of reports with a high amplification factor (e.g., 1,460×) by exploiting misconfigured SMTP servers. Based on our findings of several operational misconfigurations for DMARC reporting, we provide recommendations for improvement.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/ashiq](https://www.usenix.org/conference/usenixsecurity23/presentation/ashiq)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-ashiq.pdf](https://www.usenix.org/system/files/usenixsecurity23-ashiq.pdf)
## Knowledge Expansion and Counterfactual Interaction for Reference-Based Phishing Detection.
### Authors
* Ruofan Liu, Shanghai Jiao Tong University and National University of Singapore
* Yun Lin, Shanghai Jiao Tong University
* Yifan Zhang, National University of Singapore
* Penn Han Lee, National University of Singapore
* Jin Song Dong, National University of Singapore
### Abstract
> Phishing attacks have been increasingly prevalent in recent years, significantly eroding societal trust. As a state-of-the-art defense solution, reference-based phishing detection excels in terms of accuracy, timeliness, and explainability. A reference-based solution detects phishing webpages by analyzing their domain-brand consistencies, utilizing a predefined reference list of domains and brand representations such as logos and screenshots. However, the predefined references have limitations in differentiating between legitimate webpages and those of unknown brands. This issue is particularly pronounced when new and emerging brands become targets of attacks. In this work, we propose DynaPhish as a remedy for reference-based phishing detection, going beyond the predefined reference list. DynaPhish assumes a runtime deployment scenario and (1) actively expands a dynamic reference list, and (2) supports the detection of brandless webpages with convincing counterfactual explanations. For the former, we propose a legitimacy-validation technique for the genuineness of the added references. For the latter, we propose a counterfactual interaction technique to verify the webpage's legitimacy even without brand information. To evaluate DynaPhish, we constructed the largest dynamic phishing dataset consisting of 6344 interactable phishing webpages, to the best of our knowledge. Our experimental results demonstrate that DynaPhish significantly improves the recall of the state-of-the-art approach by 28% while maintaining a negligible cost in precision. Our controlled wild study on the emerging webpages further shows that DynaPhish significantly (1) improves the state-of-the-art by finding on average 9 times more real-world phishing webpages and (2) discovers many unconventional brands as the phishing targets. Our code is available at https://github.com/code-philia/Dynaphish.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/liu-ruofan](https://www.usenix.org/conference/usenixsecurity23/presentation/liu-ruofan)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-liu-ruofan.pdf](https://www.usenix.org/system/files/usenixsecurity23-liu-ruofan.pdf)
## Rods with Laser Beams: Understanding Browser Fingerprinting on Phishing Pages.
### Authors
* Isk, Norton Research Group
* er Sanchez-Rola, Norton Research Group
* Leyla Bilge, Norton Research Group
* Davide Balzarotti, EURECOM
* Armin Buescher, Crosspoint Labs
* Petros Efstathopoulos, Norton Research Group
### Abstract
> Phishing is one of the most common forms of social engineering attacks and is regularly used by criminals to compromise millions of accounts every year. Numerous solutions have been proposed to detect or prevent identity thefts, but phishers have responded by improving their methods and adopting more sophisticated techniques. One of the most recent advancements is the use of browser fingerprinting. In particular, fingerprinting techniques can be used as an additional piece of information that complements the stolen credentials This is confirmed by the fact that credentials with fingerprint data are sold for higher prices in underground markets.To understand the real extent of this phenomenon, we conducted the largest study of the phishing ecosystem in the topic by analyzing more than 1.7M recent phishing pages that emerged over the course of 21 months. In our systematic study, we performed detailed measurements to estimate the prevalence of fingerprinting techniques in phishing pages.We found that more than one in four phishing pages adopt some form of fingerprinting. This seems an ever growing trend as the percentage of pages using these techniques steadily increased during the analysis period (last month doubling what detected in the first month).
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/sanchez-rola](https://www.usenix.org/conference/usenixsecurity23/presentation/sanchez-rola)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-sanchez-rola.pdf](https://www.usenix.org/system/files/usenixsecurity23-sanchez-rola.pdf)
## Content-Type: multipart/oracle - Tapping into Format Oracles in Email End-to-End Encryption.
### Authors
* Fabian Ising, Münster University of Applied Sciences and National Research Center for Applied Cybersecurity ATHENE
* Damian Poddebniak, Münster University of Applied Sciences
* Tobias Kappert, Münster University of Applied Sciences
* Christoph Saatjohann, Münster University of Applied Sciences and National Research Center for Applied Cybersecurity ATHENE
* Sebastian Schinzel, Münster University of Applied Sciences and National Research Center for Applied Cybersecurity ATHENE
### Abstract
> S/MIME and OpenPGP use cryptographic constructions repeatedly shown to be vulnerable to format oracle attacks in protocols like TLS, SSH, or IKE. However, format oracle attacks in the End-to-End Encryption (E2EE) email setting are considered impractical as victims would need to open many attacker-modified emails and communicate the decryption result to the attacker. But is this really the case? In this paper, we survey how an attacker may remotely learn the decryption state in email E2EE. We analyze the interplay of MIME and IMAP and describe side-channels emerging from network patterns that leak the decryption status in Mail User Agents (MUAs). Concretely, we introduce specific MIME trees that produce decryption-dependent network patterns when opened in a victim’s email client. We survey 19 OpenPGP- and S/MIME-enabled email clients and four cryptographic libraries and uncover a side-channel leaking the decryption status of S/MIME messages in one client. Further, we discuss why the exploitation in the other clients is impractical and show that it is due to missing feature support and implementation quirks. These unintended defenses create an unfortunate conflict between usability and security. We present more rigid countermeasures for MUA developers and the standards to prevent exploitation.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/ising](https://www.usenix.org/conference/usenixsecurity23/presentation/ising)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-ising.pdf](https://www.usenix.org/system/files/usenixsecurity23-ising.pdf)
## PET: Prevent Discovered Errors from Being Triggered in the Linux Kernel.
### Authors
* Zicheng Wang, Nanjing University
* Yueqi Chen, University of Colorado Boulder
* Qingkai Zeng, Nanjing University
### Abstract
> The Linux kernel is the backbone of modern society. When a kernel error is discovered, a quick remediation is needed. Whereas sanitizers greatly facilitate root cause diagnosis, fixing errors takes a long time, resulting in errors discovered but still exploited. In this work, we propose PET, a temporary solution to prevent discovered errors from being triggered and exploited before patches are available. Technically, PET takes a sanitizer report as the input, constructing the triggering condition that can be evaluated at runtime. If the condition is met, PET takes a series of actions to prevent error triggering. PET is designed to be extensible to various error types. In our experiment, we demonstrated its effectiveness against the five most common errors that state-of-the-art sanitizers can report. PET is lightweight with performance overhead less than 3%. Further, PET is scalable in the presence of multiple errors with acceptable memory assumption. The kernel has run stably for more than 3 months under intensive use after errors are prevented.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/wang-zicheng](https://www.usenix.org/conference/usenixsecurity23/presentation/wang-zicheng)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-wang-zicheng.pdf](https://www.usenix.org/system/files/usenixsecurity23-wang-zicheng.pdf)
## A Hybrid Alias Analysis and Its Application to Global Variable Protection in the Linux Kernel.
### Authors
* Guoren Li, University of California, Riverside
* Hang Zhang, Georgia Institute of Technology
* Jinmeng Zhou, Zhejiang University
* Wenbo Shen, Zhejiang University
* Yulei Sui, University of New South Wales
* Zhiyun Qian, University of California, Riverside
### Abstract
> Global variables in the Linux kernel have been a common target of memory corruption attacks to achieve privilege escalation. Several potential defense mechanisms can be employed to safeguard global variables. One approach involves placing global variables in read-only pages after kernel initialization (ro_after_init), while another involves employing software fault isolation (SFI) to dynamically block unintended writes to these variables. To deploy such solutions in practice, a key building block is a sound, precise, and scalable alias analysis that is capable of identifying all the pointer aliases of global variables, as any pointer alias may be used for intended writes to a global variable. Unfortunately, the two existing styles of data-flow-based (e.g., Andersen-style) alias analysis and type-based alias analysis have serious limitations in scalability and precision when applied to the Linux kernel. This paper proposes a novel and general hybrid alias analysis that unifies the two complementary approaches in a graph reachability framework using context-free-language, also known as CFL-reachability. We show our hybrid alias analysis is extremely effective, significantly and simultaneously outperforming the data-flow-based alias analysis in scalability and the type-based alias analysis in precision. Under the same time budget, our hybrid analysis finds 42% of the Linux kernel global variables protectable as ro_after_init, whereas the two separate analyses find a combined 16% only.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/li-guoren](https://www.usenix.org/conference/usenixsecurity23/presentation/li-guoren)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-li-guoren.pdf](https://www.usenix.org/system/files/usenixsecurity23-li-guoren.pdf)
## AlphaEXP: An Expert System for Identifying Security-Sensitive Kernel Objects.
### Authors
* Ruipeng Wang, National University of Defense Technology
* Kaixiang Chen, Tsinghua University
* Chao Zhang, Tsinghua University
* Zulie Pan, National University of Defense Technology
* Qianyu Li, National University of Defense Technology
* Siliang Qin, University of Chinese Academy of Sciences
* Shenglin Xu, National University of Defense Technology
* Min Zhang, National University of Defense Technology
* Yang Li, National University of Defense Technology
### Abstract
> Memory corruption vulnerabilities are often exploited to corrupt sensitive objects and launch attacks. An efficient way to mitigate such threats is identifying and protecting such sensitive objects against corruption. However, it is still an open question that what objects are security sensitive and how sensitive they are. In this paper, we present the first expert system based solution AlphaEXP to identify security sensitive objects, in a specific and important target—the Linux kernel. It works by simulating an adversary to assess whether an object could be abused to get unintended capabilities and contribute to exploitation, and marks it as sensitive if so. Specifically, AlphaEXP first constructs a knowledge graph to represent the facts of the kernel, including objects, functions, and their relationships etc. Then, it explores the knowledge graph to infer potential attack paths for given vulnerabilities, and marks objects used in the attack paths as sensitive. Lastly, it evaluates the feasibility of the attack paths in a customized emulating system, and classifies the sensitivity of objects accordingly. We have built a prototype of AlphaEXP and evaluated it on 84 synthesized representative vulnerabilities and 19 real world vulnerabilities to identify sensitive kernel objects. AlphaEXP successfully generates attack paths for most of these vulnerabilities, and finds 50 objects that could be abused to get writing capability, 81 objects with reading capability, and 112 objects with execution capability. AlphaEXP classifies them into 12 levels of sensitivity.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/wang-ruipeng](https://www.usenix.org/conference/usenixsecurity23/presentation/wang-ruipeng)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-wang-ruipeng.pdf](https://www.usenix.org/system/files/usenixsecurity23-wang-ruipeng.pdf)
## Mitigating Security Risks in Linux with KLAUS: A Method for Evaluating Patch Correctness.
### Authors
* Yuhang Wu, Northwestern University
* Zhenpeng Lin, Northwestern University
* Yueqi Chen, University of Colorado Boulder
* Dang K Le, Northwestern University
* Dongliang Mu, Huazhong University of Science and Technology
* Xinyu Xing, Northwestern University
### Abstract
> The Linux kernel's growth introduces daily bugs that are often detected and eliminated using code analyzers. However, creating accurate Linux patches remains challenging and poses security risks. To address this, we manually analyzed 182 incorrectly developed Linux kernel patches and discovered that the inaccuracies usually result from changes to variable read and write operations by the patch. Based on this finding, we created KLAUS, a new method for evaluating patch quality.KLAUS leverages abstract interpretation to extract modified read and write operations caused by the patch in the Linux kernel. It combines these alterations with branch-resolving mechanisms to guide a kernel fuzzer toward relevant code and contexts. Testing KLAUS on numerous real-world Linux kernel patches demonstrates its superior effectiveness and efficiency in detecting incorrectly developed patches. So far, KLAUS has identified and reported 30 incorrect patches to the Linux community, some of which could enable privilege escalation on Android and Ubuntu systems.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/wu-yuhang](https://www.usenix.org/conference/usenixsecurity23/presentation/wu-yuhang)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-wu-yuhang.pdf](https://www.usenix.org/system/files/usenixsecurity23-wu-yuhang.pdf)
## Detecting Union Type Confusion in Component Object Model.
### Authors
* Yuxing Zhang, East China Normal University
* Xiaogang Zhu, Swinburne University of Technology
* Daojing He, East China Normal University; Harbin Institute of Technology, Shenzhen
* Minhui Xue, CSIRO's Data61
* Shouling Ji, Zhejiang University
* Mohammad Sayad Haghighi, Swinburne University of Technology
* Sheng Wen, Swinburne University of Technology
* Zhiniang Peng, Sangfor Technologies Inc.
### Abstract
> Component Object Model (COM) is a binary-interface standard for software components introduced by Microsoft in 1993. Thirty years after its first release, COM is still the basis to support many other core technologies of Microsoft. COM developers used many unions rather than structs in the coding to conserve memory in legacy computers. However, the excessive use of union architecture will most likely introduce type confusion vulnerabilities that can be taken advantage of by 100%-reliable exploits. According to our studies, the problem of union type confusion has long been overlooked and no solutions have been developed for off-the-shelf systems that employ COM. In this paper, we propose COMFUSION, the first tool that detects union type confusion in COM. The crux is to infer union variables and their discriminants in COM binaries. This is challenging since existing type recovery techniques do not support union type in binaries. To resolve this problem, COMFUSION identifies union variables through taint propagation with the help of Microsoft Interface Definition Language (MIDL) files and then searches for union type confusion via symbolic execution. We evaluate COMFUSION on three popular releases of Windows operating system, including Windows 10 1809, Windows 10 21H2, and Windows 11 21H2. COMFUSION successfully found 36 union type confusions. Out of these, 19 type confusions have been confirmed to be capable of corrupting memory, exposing 4 confirmed CVEs.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-yuxing](https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-yuxing)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-zhang-yuxing.pdf](https://www.usenix.org/system/files/usenixsecurity23-zhang-yuxing.pdf)
## Network Detection of Interactive SSH Impostors Using Deep Learning.
### Authors
* Julien Piet, UC Berkeley and Corelight
* Aashish Sharma, Lawrence Berkeley National Laboratory
* Vern Paxson, Corelight and UC Berkeley
* David Wagner, UC Berkeley
### Abstract
> Impostors who have stolen a user's SSH login credentials can inflict significant harm to the systems to which the user has remote access. We consider the problem of identifying such imposters when they conduct interactive SSH logins by detecting discrepancies in the timing and sizes of the client-side data packets, which generally reflect the typing dynamics of the person sending keystrokes over the connection.The problem of keystroke authentication using unknown freeform text has received limited-scale study to date. We develop a supervised approach based on using a transformer (a sequence model from the ML deep learning literature) and a custom “partition layer” that, once trained, takes as input the sequence of client packet timings and lengths, plus a purported user label, and outputs a decision regarding whether the sequence indeed corresponds to that user. We evaluate the model on 5 years of labeled SSH PCAPs (spanning 3,900 users) from a large research institute. While the performance specifics vary with training levels, we find that in all cases the model can catch over 95% of (injected) imposters within the first minutes of a connection, while incurring a manageable level of false positives per day.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/piet](https://www.usenix.org/conference/usenixsecurity23/presentation/piet)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-piet.pdf](https://www.usenix.org/system/files/usenixsecurity23-piet.pdf)
## ARGUS: Context-Based Detection of Stealthy IoT Infiltration Attacks.
### Authors
* Phillip Rieger, Technical University of Darmstadt
* Marco Chilese, Technical University of Darmstadt
* Reham Mohamed, Technical University of Darmstadt
* Markus Miettinen, Technical University of Darmstadt
* Hossein Fereidooni, Technical University of Darmstadt
* Ahmad-Reza Sadeghi, Technical University of Darmstadt
### Abstract
> IoT application domains, device diversity and connectivity are rapidly growing. IoT devices control various functions in smart homes and buildings, smart cities, and smart factories, making these devices an attractive target for attackers.  On the other hand, the large variability of different application scenarios and inherent heterogeneity of devices make it very challenging to reliably detect abnormal IoT device behaviors and distinguish these from benign behaviors. Existing approaches for detecting attacks are mostly limited to attacks directly compromising individual IoT devices, or, require predefined detection policies. They cannot detect attacks that utilize the control plane of the IoT system to trigger actions in an unintended/malicious context, e.g., opening a smart lock while the smart home residents are absent. In this paper, we tackle this problem and propose ARGUS, the first self-learning intrusion detection system for detecting contextual attacks on IoT environments, in which the attacker maliciously invokes IoT device actions to reach its goals. ARGUS monitors the contextual setting based on the state and actions of IoT devices in the environment. An unsupervised Deep Neural Network (DNN) is used for modeling the typical contextual device behavior and detecting actions taking place in abnormal contextual settings. This unsupervised approach ensures that ARGUS is not restricted to detecting previously known attacks but is also able to detect new attacks. We evaluated ARGUS on heterogeneous real-world smart-home settings and achieve at least an F1-Score of 99.64% for each setup, with a false positive rate (FPR) of at most 0.03%.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/rieger](https://www.usenix.org/conference/usenixsecurity23/presentation/rieger)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-rieger.pdf](https://www.usenix.org/system/files/usenixsecurity23-rieger.pdf)
## Generative Intrusion Detection and Prevention on Data Stream.
### Authors
* HyungBin Seo, Kookmin University
* MyungKeun Yoon, Kookmin University
### Abstract
> Data arrive in a stream, for example, network packets, emails, or malicious files, and ideally they should be investigated for cybersecurity. The current best practice would be to check if each data includes any suspicious signatures, or simply strings, which were obtained a priori by elaborate manual analysis in previous cyberattack cases. Unfortunately, unknown attacks, called zero-day attacks, cannot be timely detected in this way because no signature is available yet. To tackle this problem, recent studies have presented high-speed methods that can extract frequent substrings from the data stream and use them as attack signatures because the frequently-occurred signatures are often related with attacks; unfortunately, more benign signatures are extracted than malicious ones, especially when there is no attack in most of the time. This causes both a tremendous number of false-positives and extra human interventions to remove benign signatures. In this paper, we design a new streaming algorithm that can first identify a frequent group of signatures appearing together at the same time from data streams. Using this frequent signature-group instead of frequently-occurred individual signatures, the new scheme achieves a high detection accuracy by mitigating the false-positive problem with only a small fixed amount of memory and a constant number of hash operations, which has not been achieved by any previous work. This improvement comes from a new method for summarizing similar data with a fixed amount of memory, called a minHashed virtual vector, which allows us to automatically identify a frequent group of signatures with each data read only once. We perform exhaustive experiments on different private and open datasets, to verify both the practical effectiveness and the experimental reproducibility of the new scheme.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/seo](https://www.usenix.org/conference/usenixsecurity23/presentation/seo)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-seo.pdf](https://www.usenix.org/system/files/usenixsecurity23-seo.pdf)
## xNIDS: Explaining Deep Learning-based Network Intrusion Detection Systems for Active Intrusion Responses.
### Authors
* Feng Wei, University at Buffalo
* Hongda Li, Palo Alto Networks
* Ziming Zhao, University at Buffalo
* Hongxin Hu, University at Buffalo
### Abstract
> While Deep Learning-based Network Intrusion Detection Systems (DL-NIDS) have recently been significantly explored and shown superior performance, they are insufficient to actively respond to the detected intrusions due to the semantic gap between their detection results and actionable interpretations. Furthermore, their high error costs make network operators unwilling to respond solely based on their detection results. The root cause of these drawbacks can be traced to the lack of explainability of DL-NIDS. Although some methods have been developed to explain deep learning-based systems, they are incapable of handling the history inputs and complex feature dependencies of structured data and do not perform well in explaining DL-NIDS. In this paper, we present XNIDS, a novel framework that facilitates active intrusion responses by explaining DL-NIDS. Our explanation method is highlighted by: (1) approximating and sampling around history inputs; and (2) capturing feature dependencies of structured data to achieve a high-fidelity explanation. Based on the explanation results, XNIDS can further generate actionable defense rules. We evaluate XNIDS with four state-of-the-art DL-NIDS. Our evaluation results show that XNIDS outperforms previous explanation methods in terms of fidelity, sparsity, completeness, and stability, all of which are important to active intrusion responses. Moreover, we demonstrate that XNIDS can efficiently generate practical defense rules, help understand DL-NIDS behaviors and troubleshoot detection errors
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/wei-feng](https://www.usenix.org/conference/usenixsecurity23/presentation/wei-feng)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-wei-feng.pdf](https://www.usenix.org/system/files/usenixsecurity23-wei-feng.pdf)
## PROGRAPHER: An Anomaly Detection System based on Provenance Graph Embedding.
### Authors
* Fan Yang, The Chinese University of Hong Kong
* Jiacen Xu, University of California, Irvine
* Chunlin Xiong, Sangfor Technologies Inc.
* Zhou Li, University of California, Irvine
* Kehuan Zhang, The Chinese University of Hong Kong
### Abstract
> In recent years, the Advanced Persistent Threat (APT), which involves complex and malicious actions over a long period, has become one of the biggest threats against the security of the modern computing environment. As a countermeasure, data provenance is leveraged to capture the complex relations between entities in a computing system/network, and uses such information to detect sophisticated APT attacks. Though showing promise in countering APT attacks, the existing systems still cannot achieve a good balance between efficiency, accuracy, and granularity. In this work, we design a new anomaly detection system on provenance graphs, termed PROGRAPHER. To address the problem of “dependency explosion” of provenance graphs and achieve high efficiency, PROGRAPHER extracts temporal-ordered snapshots from the ingested logs and performs detection on the snapshots. To capture the rich structural properties of a graph, whole graph embedding and sequence-based learning are applied. Finally, key indicators are extracted from the abnormal snapshots and reported to the analysts, so their workload will be greatly reduced. We evaluate PROGRAPHER on five real-world datasets. The results show that PROGRAPHER can detect standard attacks and APT attacks with high accuracy and outperform the state-of-the-art detection systems.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/yang-fan](https://www.usenix.org/conference/usenixsecurity23/presentation/yang-fan)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-yang-fan.pdf](https://www.usenix.org/system/files/usenixsecurity23-yang-fan.pdf)
## Dubhe: Succinct Zero-Knowledge Proofs for Standard AES and related Applications.
### Authors
* Changchang Ding, Indiana University Bloomington
* Yan Huang, Indiana University Bloomington
### Abstract
> We explore a new approach to construct zero-knowledge proofs by combining ideas from the succinct proof system GKR, the Fully Linear PCP (FLPCP), and MPC-in-the-Head ZKPoK. Our discovery contributes to the state-of-the-art of ZKP in two aspects:(1) Methodology: We demonstrate a way to build transparent ZK proofs from simplified variant of FLPCP and KKW. The resulting proofs are practically efficient (O(|C|)-time prover, O(log(|C|)-time verifier, O(log(|C|))-bandwidth where |C| is the number of poly- nomial gates), and work readily for circuits defined with polynomial gates over any finite field.(2) Applications: We present efficient (interactive) identification schemes, ring identification schemes, (non-interactive) digital signatures and ring signatures, all based on the standard AES ciphersuite. We also show the first practically efficient verifiable symmetric-key encryption scheme, based on counter-mode AES.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/ding-changchang](https://www.usenix.org/conference/usenixsecurity23/presentation/ding-changchang)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-ding-changchang.pdf](https://www.usenix.org/system/files/usenixsecurity23-ding-changchang.pdf)
## Curve Trees: Practical and Transparent Zero-Knowledge Accumulators.
### Authors
* Matteo Campanelli, Protocol Labs
* Mathias Hall-Andersen, Aarhus University, Denmark
* Simon Holmgaard Kamp, Aarhus University, Denmark
### Abstract
> In this work we improve upon the state of the art for practical zero-knowledge for set membership, a building block at the core of several privacy-aware applications, such as anonymous payments, credentials and whitelists. This primitive allows a user to show knowledge of an element in a large set without leaking the specific element. One of the obstacles to its deployment is efficiency. Concretely efficient solutions exist, e.g., those deployed in Zcash Sapling, but they often work at the price of a strong trust assumption: an underlying setup that must be generated by a trusted third party. To find alternative approaches we focus on a common building block: accumulators, a cryptographic data structure which compresses the underlying set. We propose novel, more efficient and fully transparent constructions (i.e., without a trusted setup) for accumulators supporting zero-knowledge proofs for set membership. Technically, we introduce new approaches inspired by "commit-and-prove" techniques to combine shallow Merkle trees and 2-cycles of elliptic curves into a highly practical construction. Our basic accumulator construction—dubbed Curve Trees—is completely transparent (does not require a trusted setup) and is based on simple and widely used assumptions (DLOG and Random Oracle Model). Ours is the first fully transparent construction that obtains concretely small proof/commitment sizes for large sets and a proving time one order of magnitude smaller than proofs over Merkle Trees with Pedersen hash. For a concrete instantiation targeting 128 bits of security we obtain: a commitment to a set of any size is 256 bits; for ∣S∣=240 a zero-knowledge membership proof is 2.9KB, its proving takes 2s and its verification 40ms on an ordinary laptop. Using our construction as a building block we can design a simple and concretely efficient anonymous cryptocurrency with full anonymity set, which we dub Vcash. Its transactions can be verified in ≈80ms or ≈5ms when batch-verifying multiple (>100) transactions; transaction sizes are 4KB. Our timings are competitive with those of the approach in Zcash Sapling and trade slightly larger proofs (transactions in Zcash Sapling are 2.8KB) for a completely transparent setup.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/campanelli](https://www.usenix.org/conference/usenixsecurity23/presentation/campanelli)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-campanelli.pdf](https://www.usenix.org/system/files/usenixsecurity23-campanelli.pdf)
## BalanceProofs: Maintainable Vector Commitments with Fast Aggregation.
### Authors
* Weijie Wang, Yale University
* Annie Ulichney, Yale University
* Charalampos Papamanthou, Yale University
### Abstract
> We present BalanceProofs, the first vector commitment that is maintainable (i.e., supporting sublinear updates) while also enjoying fast proof aggregation and verification. The basic version of BalanceProofs has O(√nlogn) update time and O(√n) query time and its constant-size aggregated proofs can be produced and verified in milliseconds. In particular, BalanceProofs improves the aggregation time and aggregation verification time of the only known maintainable and aggregatable vector commitment scheme, Hyperproofs (USENIX SECURITY 2022), by up to 1000× and up to 100× respectively. Fast verification of aggregated proofs is particularly useful for applications such as stateless cryptocurrencies (and was a major bottleneck for Hyperproofs), where an aggregated proof of balances is produced once but must be verified multiple times and by a large number of nodes. As a limitation, the updating time in BalanceProofs compared to Hyperproofs is roughly 6× slower, but always stays in the range from 10 to 18 milliseconds. We finally study useful tradeoffs in BalanceProofs between (aggregate) proof size, update time and (aggregate) proof computation and verification, by introducing a bucketing technique, and present an extensive evaluation as well as a comparison to Hyperproofs.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/wang-weijie](https://www.usenix.org/conference/usenixsecurity23/presentation/wang-weijie)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-wang-weijie.pdf](https://www.usenix.org/system/files/usenixsecurity23-wang-weijie.pdf)
## zkSaaS: Zero-Knowledge SNARKs as a Service.
### Authors
* Sanjam Garg, University of California, Berkeley, and NTT Research
* Aarushi Goel, NTT Research
* Abhishek Jain, Johns Hopkins University
* Guru-Vamsi Policharla, University of California, Berkeley
* Sruthi Sekar, University of California, Berkeley
### Abstract
> A decade of active research has led to practical constructions of zero-knowledge succinct non-interactive arguments of knowledge (zk-SNARKs) that are now being used in a wide variety of applications. Despite this astonishing progress, overheads in proof generation time remain significant.  In this work, we envision a world where consumers with low computational resources can outsource the task of proof generation to a group of untrusted servers in a privacy-preserving manner. The main requirement is that these servers should be able to collectively generate proofs at a faster speed (than the consumer). Towards this goal, we introduce a framework called zk-SNARKs-as-a-service (zkSaaS) for faster computation of zk-SNARKs. Our framework allows for distributing proof computation across multiple servers such that each server is expected to run for a shorter duration than a single prover. Moreover, the privacy of the prover's witness is ensured against any minority of colluding servers.  We design custom protocols in this framework that can be used to obtain faster runtimes for widely used zk-SNARKs, such as Groth16 [EUROCRYPT 2016], Marlin [EUROCRYPT 2020] and Plonk [EPRINT 2019]. We implement proof of concept zkSaaS for the Groth16 and Plonk provers. In comparison to generating these proofs on commodity hardware, we can not only generate proofs for a larger number of constraints (without memory exhaustion), but can also get ≈22× speed-up when run with 128 parties for 225 constraints with Groth16 and 221 gates with Plonk.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/garg](https://www.usenix.org/conference/usenixsecurity23/presentation/garg)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-garg.pdf](https://www.usenix.org/system/files/usenixsecurity23-garg.pdf)
## VeriZexe: Decentralized Private Computation with Universal Setup.
### Authors
* Alex Luoyuan Xiong, Espresso Systems, National University of Singapore
* Binyi Chen, Espresso Systems
* Zhenfei Zhang, Espresso Systems
* Benedikt Bünz, Espresso Systems, Stanford University
* Ben Fisch, Espresso Systems, Yale University
* Fern, Espresso Systems
* o Krell, Espresso Systems
* Philippe Camacho, Espresso Systems
### Abstract
> Traditional blockchain systems execute program state transitions on-chain, requiring each network node participating in state-machine replication to re-compute every step of the program when validating transactions. This limits both scalability and privacy. Recently, Bowe et al. introduced a primitive called decentralized private computation (DPC) and provided an instantiation called Zexe, which allows users to execute arbitrary computations off-chain without revealing the program logic to the network. Moreover, transaction validation takes only constant time, independent of the off-chain computation. However, Zexe required a separate trusted setup for each application, which is highly impractical. Prior attempts to remove this per-application setup incurred significant performance loss. We propose a new DPC instantiation VeriZexe that is highly efficient and requires only a single universal setup to support an arbitrary number of applications. Our benchmark improves the state-of-the-art by 9x in transaction generation time and by 3.4x in memory usage. Along the way, we also design efficient gadgets for variable-base multi-scalar multiplication and modular arithmetic within the Plonk constraint system, leading to a Plonk verifier gadget using only ∼ 21k Plonk constraints.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/xiong](https://www.usenix.org/conference/usenixsecurity23/presentation/xiong)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-xiong.pdf](https://www.usenix.org/system/files/usenixsecurity23-xiong.pdf)
## Intender: Fuzzing Intent-Based Networking with Intent-State Transition Guidance.
### Authors
* Jiwon Kim, Purdue University
* Benjamin E. Ujcich, Georgetown University
* Dave (Jing) Tian, Purdue University
### Abstract
> Intent-based networking (IBN) abstracts network configuration complexity from network operators by focusing on what operators want the network to do rather than how such configuration should be implemented. While such abstraction eases network management challenges, little attention to date has focused on IBN’s new security concerns that adversely impact an entire network’s correct operation. To motivate the prevalence of such security concerns, we systematize IBN’s security challenges by studying existing bug reports from a representative IBN implementation within the ONOS network operating system. We find that 61% of IBN-related bugs are semantic bugs that are challenging, if not impossible, to detect efficiently by state-of-the-art vulnerability discovery tools. To tackle existing limitations, we present Intender, the first semantically-aware fuzzing framework for IBN. Intender leverages network topology information and intent-operation dependencies (IOD) to efficiently generate testing inputs. Intender introduces a new feedback mechanism, intent-state transition guidance (ISTG), which traces the history of transitions in intent states. We evaluate Intender using ONOS and find 12 bugs, 11 of which were CVE-assigned security-critical vulnerabilities affecting network-wide control plane integrity and availability. Compared to state-of-the-art fuzzing tools AFL, Jazzer, Zest, and PAZZ, Intender generates up to 78.7× more valid fuzzing input, achieves up to 2.2× better coverage, and detects up to 82.6× more unique errors. Intender with IOD reduces 73.02% of redundant operations and spends 10.74% more time on valid operations. Intender with ISTG leads to 1.8× more intent-state transitions compared to code-coverage guidance.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/kim-jiwon](https://www.usenix.org/conference/usenixsecurity23/presentation/kim-jiwon)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-kim-jiwon.pdf](https://www.usenix.org/system/files/usenixsecurity23-kim-jiwon.pdf)
## Bleem: Packet Sequence Oriented Fuzzing for Protocol Implementations.
### Authors
* Zhengxiong Luo, Tsinghua University
* Junze Yu, Tsinghua University
* Feilong Zuo, Tsinghua University
* Jianzhong Liu, Tsinghua University
* Yu Jiang, Tsinghua University
* Ting Chen, University of Electronic Science and Technology of China
* Abhik Roychoudhury, National University of Singapore
* Jiaguang Sun, Tsinghua University
### Abstract
> Protocol implementations are essential components in network infrastructures. Flaws hidden in the implementations can easily render devices vulnerable to adversaries. Therefore, guaranteeing their correctness is important. However, commonly used vulnerability detection techniques, such as fuzz testing, face increasing challenges in testing these implementations due to ineffective feedback mechanisms and insufficient protocol state-space exploration techniques. This paper presents Bleem, a packet-sequence-oriented black-box fuzzer for vulnerability detection of protocol implementations. Instead of focusing on individual packet generation, Bleem generates packets on a sequence level. It provides an effective feedback mechanism by analyzing the system output sequence noninvasively, supports guided fuzzing by resorting to state-space tracking that encompasses all parties timely, and utilizes interactive trafﬁc information to generate protocol-logic-aware packet sequences. We evaluate Bleem on 15 widely-used implementations of well-known protocols (e.g., TLS and QUIC). Results show that, compared to the state-of-the-art protocol fuzzers such as Peach, Bleem achieves substantially higher branch coverage (up to 174.93% improvement) within 24 hours. Furthermore, Bleem exposed 15 security-critical vulnerabilities in prominent protocol implementations, with 10 CVEs assigned.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/luo-zhengxiong](https://www.usenix.org/conference/usenixsecurity23/presentation/luo-zhengxiong)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-luo-zhengxiong.pdf](https://www.usenix.org/system/files/usenixsecurity23-luo-zhengxiong.pdf)
## Automated Exploitable Heap Layout Generation for Heap Overflows Through Manipulation Distance-Guided Fuzzing.
### Authors
* Bin Zhang, National University of Defense Technology
* Jiongyi Chen, National University of Defense Technology
* Runhao Li, National University of Defense Technology
* Chao Feng, National University of Defense Technology
* Ruilin Li, National University of Defense Technology
* Chaojing Tang, National University of Defense Technology
### Abstract
> Generating exploitable heap layouts is a fundamental step to produce working exploits for heap overflows. For this purpose, the heap primitives identified from the target program, serving as functional units to manipulate the heap layout, are strategically leveraged to construct exploitable states. To flexibly use primitives, prior efforts only focus on particular program types or programs with dispatcher-loop structures.  Beyond that, automatically generating exploitable heap layouts is hard for general-purpose programs due to the difficulties in explicitly and flexibly using primitives. This paper presents Scatter, enabling the generation of exploitable heap layouts for heap overflows in general-purpose programs in a primitive-free manner.  At the center of Scatter is a fuzzer that is guided by a new manipulation distance which measures the distance to the corruption of a victim object in the heap layout space. To make the fuzzing-based approach practical, Scatter leverages a set of techniques to improve the efficiency and handle the side effects introduced by the heap manager's sophisticated behaviors in the real-world environment. Our evaluation demonstrates that Scatter can successfully generate a total of 126 exploitable heap layouts for 18 out of 27 heap overflows in 10 general-purpose programs.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-bin](https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-bin)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-zhang-bin.pdf](https://www.usenix.org/system/files/usenixsecurity23-zhang-bin.pdf)
## MINER: A Hybrid Data-Driven Approach for REST API Fuzzing.
### Authors
* Chenyang Lyu, Zhejiang University
* Jiacheng Xu, Zhejiang University
* Shouling Ji, Zhejiang University
* Xuhong Zhang, Zhejiang University
* Qinying Wang, Zhejiang University
* Binbin Zhao, Georgia Institute of Technology
* Gaoning Pan, Zhejiang University
* Wei Cao, Ant Group
* Peng Chen, Ant Group
* Raheem Beyah, Georgia Institute of Technology
### Abstract
> In recent years, REST API fuzzing has emerged to explore errors on a cloud service. Its performance highly depends on the sequence construction and request generation. However, existing REST API fuzzers have trouble generating long sequences with well-constructed requests to trigger hard-to-reach states in a cloud service, which limits their performance of finding deep errors and security bugs. Further, they cannot find the specific errors caused by using undefined parameters during request generation. Therefore, in this paper, we propose a novel hybrid data-driven solution, named MINER, with three new designs working together to address the above limitations. First, MINER collects the valid sequences whose requests pass the cloud service's checking as the templates, and assigns more executions to long sequence templates. Second, to improve the generation quality of requests in a sequence template, MINER creatively leverages the state-of-the-art neural network model to predict key request parameters and provide them with appropriate parameter values. Third, MINER implements a new data-driven security rule checker to capture the new kind of errors caused by undefined parameters. We evaluate MINER against the state-of-the-art fuzzer RESTler on GitLab, Bugzilla, and WordPress via 11 REST APIs. The results demonstrate that the average pass rate of MINER is 23.42% higher than RESTler. MINER finds 97.54% more unique errors than RESTler on average and 142.86% more reproducible errors after manual analysis. We have reported all the newly found errors, and 7 of them have been confirmed as logic bugs by the corresponding vendors.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/lyu](https://www.usenix.org/conference/usenixsecurity23/presentation/lyu)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-lyu.pdf](https://www.usenix.org/system/files/usenixsecurity23-lyu.pdf)
## Systematic Assessment of Fuzzers using Mutation Analysis.
### Authors
* Philipp Görz, CISPA Helmholtz Center for Information Security
* Björn Mathis, CISPA Helmholtz Center for Information Security
* Keno Hassler, CISPA Helmholtz Center for Information Security
* Emre Güler, Ruhr-Universität Bochum
* Thorsten Holz, CISPA Helmholtz Center for Information Security
* Andreas Zeller, CISPA Helmholtz Center for Information Security
* Rahul Gopinath, University of Sydney
### Abstract
> Fuzzing is an important method to discover vulnerabilities in programs. Despite considerable progress in this area in the past years, measuring and comparing the effectiveness of fuzzers is still an open research question. In software testing, the gold standard for evaluating test quality is mutation analysis, which evaluates a test's ability to detect synthetic bugs: If a set of tests fails to detect such mutations, it is expected to also fail to detect real bugs. Mutation analysis subsumes various coverage measures and provides a large and diverse set of faults that can be arbitrarily hard to trigger and detect, thus preventing the problems of saturation and overfitting. Unfortunately, the cost of traditional mutation analysis is exorbitant for fuzzing, as mutations need independent evaluation. In this paper, we apply modern mutation analysis techniques that pool multiple mutations and allow us—for the first time—to evaluate and compare fuzzers with mutation analysis. We introduce an evaluation bench for fuzzers and apply it to a number of popular fuzzers and subjects. In a comprehensive evaluation, we show how we can use it to assess fuzzer performance and measure the impact of improved techniques. The required CPU time remains manageable: 4.09 CPU years are needed to analyze a fuzzer on seven subjects and a total of 141,278 mutations. We find that today's fuzzers can detect only a small percentage of mutations, which should be seen as a challenge for future research—notably in improving (1) detecting failures beyond generic crashes and (2) triggering mutations (and thus faults).
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/gorz](https://www.usenix.org/conference/usenixsecurity23/presentation/gorz)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-gorz.pdf](https://www.usenix.org/system/files/usenixsecurity23-gorz.pdf)
## HOMESPY: The Invisible Sniffer of Infrared Remote Control of Smart TVs.
### Authors
* Kong Huang, The Chinese University of Hong Kong
* YuTong Zhou, The Chinese University of Hong Kong
* Ke Zhang, The Chinese University of Hong Kong
* Jiacen Xu, University of California, Irvine
* Jiongyi Chen, National University of Defense Technology
* Di Tang, Indiana University Bloomington
* Kehuan Zhang, The Chinese University of Hong Kong
### Abstract
> Infrared (IR) remote control is a widely used technology at home due to its simplicity and low cost. Most considered it to be "secure'' because of the line-of-sight usage within the home. In this paper, we revisit the security of IR remote control schemes and examine their security assumptions under the settings of internet-connected smart homes. We focus on two specific questions: (1) whether IR signals could be sniffed by an IoT device; and (2) what information could be leaked out through the sniffed IR control signals.  To answer these questions, we design a sniff module using a commercial-off-the-shelf IR receiver on a Raspberry Pi and show that the Infrared (IR) signal emanating from the remote control of a Smart TV can be captured by one of the nearby IoT devices, for example, a smart air-conditioner, even the signal is not aimed at the air-conditioner. The IR signal range and receiving angle are larger than most have thought.  We also developed algorithms to extract semantic information from the sniffed IR control signals, and evaluated with real-world applications. The results showed that lots of sensitive information could be leaked out through the sniffed IR control signals, including account name and password, PIN code, and even payment information.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/huang](https://www.usenix.org/conference/usenixsecurity23/presentation/huang)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-huang.pdf](https://www.usenix.org/system/files/usenixsecurity23-huang.pdf)
## Remote Attacks on Speech Recognition Systems Using Sound from Power Supply.
### Authors
* Lanqing Yang, Shanghai Jiao Tong University
* Xinqi Chen, Shanghai Jiao Tong University
* Xiangyong Jian, Shanghai Jiao Tong University
* Leping Yang, Shanghai Jiao Tong University
* Yijie Li, Shanghai Jiao Tong University
* Qianfei Ren, Shanghai Jiao Tong University
* Yi-Chao Chen, Shanghai Jiao Tong University
* Guangtao Xue, Shanghai Jiao Tong University
* Xiaoyu Ji, Zhejiang University
### Abstract
> Speech recognition (SR) systems are used on smart phones and speakers to make inquiries, compose emails, and initiate phone calls. However, they also impose a serious security risk. Researchers have demonstrated that the introduction of certain sounds can threaten the security of SR systems. Nonetheless, most of those methods require that the attacker approach to within a short distance of the victim, thereby limiting the applicability of such schemes. Other researchers have attacked SR systems remotely using peripheral devices (e.g., lasers); however, those methods require line of sight access and an always-on speaker in the vicinity of the victim. To the best of our knowledge, this paper presents the first-ever scheme, named SingAttack, in which SR systems are manipulated by human-like sounds generated in the switching mode power supply of the victim’s device. The fact that attack signals are transmitted via the power grid enables long-range attacks on existing SR systems. The proposed SingAttack system does not rely on extraneous hardware or unrealistic assumptions pertaining to device access. In experiments on ten SR systems, SingAttack achieved Mel-Cepstral Distortion of 7.8 from an attack initiated at a distance of 23m.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/yang-lanqing](https://www.usenix.org/conference/usenixsecurity23/presentation/yang-lanqing)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-yang-lanqing.pdf](https://www.usenix.org/system/files/usenixsecurity23-yang-lanqing.pdf)
## Near-Ultrasound Inaudible Trojan (Nuit): Exploiting Your Speaker to Attack Your Microphone.
### Authors
* Qi Xia, University of Texas at San Antonio
* Qian Chen, University of Texas at San Antonio
* Shouhuai Xu, University of Colorado Colorado Springs
### Abstract
> Voice Control Systems (VCSs) offer a convenient interface for issuing voice commands to smart devices. However, VCS security has yet to be adequately understood and addressed as evidenced by the presence of two classes of attacks: (i) inaudible attacks, which can be waged when the attacker and the victim are in proximity to each other; and (ii)  audible attacks, which can be waged remotely by embedding attack signals into audios. In this paper, we introduce a new class of attacks, dubbed near-ultrasound inaudible trojan (Nuit). Nuit attacks achieve the best of the two classes of attacks mentioned above: they are inaudible and can be waged remotely. Moreover, Nuit attacks can achieve end-to-end unnoticeability, which is important but has not been paid due attention in the literature. Another feature of Nuit attacks is that they exploit victim speakers to attack victim microphones and their associated VCSs, meaning the attacker does not need to use any special speaker. We demonstrate the feasibility of Nuit attacks and propose an effective defense against them.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/xia](https://www.usenix.org/conference/usenixsecurity23/presentation/xia)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-xia.pdf](https://www.usenix.org/system/files/usenixsecurity23-xia.pdf)
## Medusa Attack: Exploring Security Hazards of In-App QR Code Scanning.
### Authors
* Xing Han, University of Electronic Science and Technology of China and Shanghai Qi Zhi Institute
* Yuheng Zhang, University of Electronic Science and Technology of China and Shanghai Qi Zhi Institute
* Xue Zhang, University of Electronic Science and Technology of China and Shanghai Qi Zhi Institute
* Zeyuan Chen, G.O.S.S.I.P
* Mingzhe Wang, Xidian University
* Yiwei Zhang, Purdue University
* Siqi Ma, The University of New South Wales
* Yu Yu, Shanghai Qi Zhi Institute and Shanghai Jiao Tong University
* Elisa Bertino, Purdue University
* Juanru Li, Shanghai Qi Zhi Institute and Shanghai Jiao Tong University
### Abstract
> Smartphone users are eliminating traditional QR codes as many apps have integrated QR code scanning as a built-in functionality. With the support of embedded QR code scanning components, apps can read QR codes and immediately execute relevant activities, such as boarding a flight. Handling QR codes in such an automated manner is obviously user-friendly. However, this automation also creates an opportunity for attackers to exploit apps through malicious QR codes if the apps fail to properly check these codes.In this paper, we systematize and contextualize attacks on mobile apps that use built-in QR code readers. We label these as MEDUSA attacks, which allow attackers to remotely exploit the in-app QR code scanning of a mobile app. Through a MEDUSA attack, remote attackers can invoke a specific type of app functions – Remotely Accessible Handlers (RAHs), and perform tasks such as sending authentication tokens or making a payment. We conducted an empirical study on 800 very popular Android and iOS apps with billions of users in the two largest mobile ecosystems, the US and mainland China mobile markets, to investigate the prevalence and severity of MEDUSA attack related security vulnerabilities. Based on our proposed vulnerability detection technique, we thoroughly examined the target apps and discovered that a wide range of them are affected. Among the 377/800 apps with in-app QR code scanning functionality, we found 123 apps containing 2,872 custom RAHs that were vulnerable to the MEDUSA attack. By constructing proof-of-concept exploits to test the severity, we confirmed 46 apps with critical or high-severity vulnerabilities, which allows attackers to access sensitive local resources or remotely modify the user data.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/han-xing](https://www.usenix.org/conference/usenixsecurity23/presentation/han-xing)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-han-xing.pdf](https://www.usenix.org/system/files/usenixsecurity23-han-xing.pdf)
## Othered, Silenced and Scapegoated: Understanding the Situated Security of Marginalised Populations in Lebanon.
### Authors
* Jessica McClearn, Royal Holloway, University of London
* Rikke Bjerg Jensen, Royal Holloway, University of London
* Reem Talhouk, Northumbria University
### Abstract
> In this paper we explore the digital security experiences of marginalised populations in Lebanon such as LGBTQI+ identifying people, refugees and women. We situate our work in the post-conflict Lebanese context, which is shaped by sectarian divides, failing governance and economic collapse. We do so through an ethnographically informed study conducted in Beirut, Lebanon, in July 2022 and through interviews with 13 people with Lebanese digital and human rights expertise. Our research highlights how LGBTQI+ identifying people and refugees are scapegoated for the failings of the Lebanese government, while women who speak out against such failings are silenced. We show how government-supported incitements of violence aimed at transferring blame from the political leadership to these groups lead to amplified digital security risks for already at-risk populations. Positioning our work in broader sociological understandings of security, we discuss how the Lebanese context impacts identity and ontological security. We conclude by proposing to design for and with positive security in post-conflict settings.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/mcclearn](https://www.usenix.org/conference/usenixsecurity23/presentation/mcclearn)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-mcclearn.pdf](https://www.usenix.org/system/files/usenixsecurity23-mcclearn.pdf)
## Examining Power Dynamics and User Privacy in Smart Technology Use Among Jordanian Households.
### Authors
* Wael Albayaydh, University of Oxford
* Ivan Flechais, University of Oxford
### Abstract
> Smart technologies continue to raise concerns about privacy protection of both households and bystanders who may be targets of incidental or intentional monitoring. Domestic workers are an example of bystanders in smart homes who experience complex power dynamics and can be subjected to exploitative practices that are further facilitated through smart technology. Such power dynamics are rooted in complex social norms and customs, religious beliefs, and economics. While past research has focused on Western contexts to explore how smart technologies and power dynamics affect privacy of households and smart home bystanders, there is a limited understanding of the impact of such factors within non-Western contexts.This paper presents the findings from 30 interviews with smart device users and bystanders (households, and domestic workers), policy makers, and human and civil rights activists to explore smart home power dynamics in the Muslim Arab Middle Eastern (MAME) context of Jordan. We uncover how asymmetric socio-economic power dynamics between households and domestic workers influence smart technology privacy concerns, practices, and rights perceptions. Drawing on the findings of this study, we present some recommendations for interventions to balance asymmetric power dynamics, to improve bystanders' agency and privacy protection, and to prevent technology exploitation.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/albayaydh](https://www.usenix.org/conference/usenixsecurity23/presentation/albayaydh)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-albayaydh.pdf](https://www.usenix.org/system/files/usenixsecurity23-albayaydh.pdf)
## "If sighted people know, I should be able to know: " Privacy Perceptions of Bystanders with Visual Impairments around Camera-based Technology.
### Authors
* Yuhang Zhao, University of Wisconsin—Madison
* Yaxing Yao, University of Maryland, Baltimore County
* Jiaru Fu, University of Wisconsin—Madison
* Nihan Zhou, University of Wisconsin—Madison
### Abstract
> Camera-based technology can be privacy-invasive, especially for bystanders who can be captured by the cameras but do not have direct control or access to the devices. The privacy threats become even more significant to bystanders with visual impairments (BVI) since they cannot visually discover the use of cameras nearby and effectively avoid being captured. While some prior research has studied visually impaired people's privacy concerns as direct users of camera-based assistive technologies, no research has explored their unique privacy perceptions and needs as bystanders. We conducted an in-depth interview study with 16 visually impaired participants to understand BVI's privacy concerns, expectations, and needs in different camera usage scenarios. A preliminary survey with 90 visually impaired respondents and 96 sighted controls was conducted to compare BVI and sighted bystanders' general attitudes towards cameras and elicit camera usage scenarios for the interview study. Our research revealed BVI's unique privacy challenges and perceptions around cameras, highlighting their needs for privacy awareness and protection. We summarized design considerations for future privacy-enhancing technologies to fulfill BVI's privacy needs.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/zhao-yuhang](https://www.usenix.org/conference/usenixsecurity23/presentation/zhao-yuhang)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-zhao-yuhang.pdf](https://www.usenix.org/system/files/usenixsecurity23-zhao-yuhang.pdf)
## A Research Framework and Initial Study of Browser Security for the Visually Impaired.
### Authors
* Elaine Lau, Cal Poly, San Luis Obispo
* Zachary Peterson, Cal Poly, San Luis Obispo
### Abstract
> The growth of web-based malware and phishing attacks has catalyzed significant advances in the research and use of interstitial warning pages and modals by a browser prior to loading the content of a suspect site. These warnings commonly use visual cues to attract users' attention, including specialized iconography, color, and the placement and size of buttons to communicate the importance of the scenario. While the efficacy of visual techniques has improved safety for sighted users, these techniques are unsuitable for blind and visually impaired users. We attribute this not to a lack of interest or technical capability by browser manufactures, where universal design is a core tenet of their engineering practices, but instead a reflection of the very real dearth of research literature to inform their choices, exacerbated by a deficit of clear methodologies for conducting studies with this population. Indeed, the challenges are manifold. In this paper, we analyze and address the methodological challenges of conducting security and privacy research with a visually impaired population, and contribute a new set of methodological best practices when conducting a study of this kind. Using our methodology, we conduct a preliminary study analyzing the experiences of the visually impaired with browser security warnings, perform a thematic analysis identifying common challenges visually impaired users experience, and present some initial solutions that could improve security for this population.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/lau](https://www.usenix.org/conference/usenixsecurity23/presentation/lau)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-lau.pdf](https://www.usenix.org/system/files/usenixsecurity23-lau.pdf)
## ELASM: Error-Latency-Aware Scale Management for Fully Homomorphic Encryption.
### Authors
* Yongwoo Lee, Yonsei University
* Seonyoung Cheon, Yonsei University
* Dongkwan Kim, Yonsei University
* Dongyoon Lee, Stony Brook University
* Hanjun Kim, Yonsei University
### Abstract
> Thanks to its fixed-point arithmetic and SIMD-like vectorization, among fully homomorphic encryption (FHE) schemes that allow computation on encrypted data, RNS-CKKS is widely used for privacy-preserving machine learning services. Prior works have partly automated a daunting scale management task required for RNS-CKKS fixed-point arithmetic, yet none takes an output error into consideration, preventing users from exploring a better error-latency trade-off. This work proposes a new error- and latency-aware scale management (ELASM) scheme for the RNS-CKKS FHE scheme. By actively controlling the scale of a ciphertext, one can effectively make the impact of noise on an error smaller because an error is a scaled noise introduced by an RNS-CKKS operation. ELASM explores different scale management plans that repurpose an upscale operation as an error reduction operation, estimates the output error and latency of each plan, and iteratively finds the best plan that minimizes the error-latency cost function.  In addition, this work proposes a new scale-to-noise ratio (SNR) parameter and introduces fine-grained noise-aware waterlines (a minimum scale requirement) for different RNS-CKKS operations, opening a new opportunity to further improve an error-latency trade-off. This work implements the proposed ideas in the ELASM compiler along with a new FHE language and type system that enforces the RNS-CKKS constraints including SNR-based noise-aware waterlines. For ten machine and deep learning benchmarks, ELASM finds the better error and latency trade-offs (lower Pareto curves) than the state-of-the-art solutions such as EVA and Hecate.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/lee-yongwoo](https://www.usenix.org/conference/usenixsecurity23/presentation/lee-yongwoo)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-lee-yongwoo.pdf](https://www.usenix.org/system/files/usenixsecurity23-lee-yongwoo.pdf)
## HECO: Fully Homomorphic Encryption Compiler.
### Authors
* Alex, ETH Zurich
* er Vi, ETH Zurich
* Patrick Jattke, ETH Zurich
* Miro Haller, ETH Zurich
* Anwar Hithnawi, ETH Zurich
### Abstract
> In recent years,  Fully Homomorphic Encryption ( FHE) has undergone several breakthroughs and advancements leading to a leap in performance. Today, performance is no longer a major barrier to adoption. Instead, it is the complexity of developing an efficient FHE application that currently limits deploying FHE in practice and at scale. Several FHE compilers have emerged recently to ease FHE development. However, none of these answer how to automatically transform imperative programs to secure and efficient FHE implementations. This is a fundamental issue that needs to be addressed before we can realistically expect broader use of FHE. Automating these transformations is challenging because the restrictive set of operations in FHE and their non-intuitive performance characteristics require programs to be drastically transformed to achieve efficiency. Moreover, existing tools are monolithic and focus on individual optimizations. Therefore, they fail to fully address the needs of end-to-end FHE development. In this paper, we present HECO, a new end-to-end design for FHE compilers that takes high-level imperative programs and emits efficient and secure FHE implementations. In our design, we take a broader view of FHE development, extending the scope of optimizations beyond the cryptographic challenges existing tools focus on.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/viand](https://www.usenix.org/conference/usenixsecurity23/presentation/viand)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-viand.pdf](https://www.usenix.org/system/files/usenixsecurity23-viand.pdf)
## A Verified Confidential Computing as a Service Framework for Privacy Preservation.
### Authors
* Hongbo Chen, Indiana University Bloomington
* Haobin Hiroki Chen, Indiana University Bloomington
* Mingshen Sun, Independent Researcher
* Kang Li, CertiK
* Zhaofeng Chen, CertiK
* XiaoFeng Wang, Indiana University Bloomington
### Abstract
> As service providers are moving to the cloud, users are forced to provision sensitive data to the cloud. Confidential computing leverages hardware Trusted Execution Environment (TEE) to protect data in use, no longer requiring users' trust to the cloud. The emerging service model, Confidential Computing as a Service (CCaaS), is adopted by service providers to offer service similar to the Function-as-a-Serivce manner. However, privacy concerns are raised in CCaaS, especially in multi-user scenarios. CCaaS need to assure the data providers that the service does not leak their privacy to any unauthorized parties and clear their data after the service. To address such privacy concerns with security guarantees, we first formally define the security objective, Proof of Being Forgotten (PoBF), and prove under which security constraints PoBF can be satisfied. Then, these constraints serve as guidelines in the implementation of the PoBF-compliant Framework (PoCF). PoCF consists of a generic library for different hardware TEEs, CCaaS prototype enclaves, and a verifier to prove PoBF-compliance. PoCF leverages Rust's robust type system and security features, to construct a verified state machine with privacy-preserving contracts. Last, the experiment results show that the protections introduced by PoCF incur minor runtime performance overhead.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/chen-hongbo](https://www.usenix.org/conference/usenixsecurity23/presentation/chen-hongbo)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-chen-hongbo.pdf](https://www.usenix.org/system/files/usenixsecurity23-chen-hongbo.pdf)
## CSHER: A System for Compact Storage with HE-Retrieval.
### Authors
* Adi Akavia, University of Haifa
* Neta Oren, University of Haifa
* Boaz Sapir, Intuit Israel Inc.
* Margarita Vald, Intuit Israel Inc.
### Abstract
> Homomorphic encryption (HE) is a promising technology for protecting data in use, with considerable progress in recent years towards attaining practical runtime performance. However, the high storage overhead associated with HE remains an obstacle to its large-scale adoption. In this work we propose a new storage solution in the two-server model resolving the high storage overhead associated with HE, while preserving rigorous data confidentiality. We empirically evaluated our solution in a proof-of-concept system running on AWS EC2 instances with AWS S3 storage, demonstrating storage size with zero overhead over storing AES ciphertexts, and 10µs amortized end-to-end runtime. In addition, we performed experiments on multiple clouds, i.e., where each server resides on a different cloud, exhibiting similar results. As a central tool we introduce the first perfect secret sharing scheme with fast homomorphic reconstruction over the reals; this may be of independent interest.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/akavia](https://www.usenix.org/conference/usenixsecurity23/presentation/akavia)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-akavia.pdf](https://www.usenix.org/system/files/usenixsecurity23-akavia.pdf)
## Precise and Generalized Robustness Certification for Neural Networks.
### Authors
* Yuanyuan Yuan, The Hong Kong University of Science and Technology and ETH Zurich
* Shuai Wang, The Hong Kong University of Science and Technology
* Zhendong Su, ETH Zurich
### Abstract
> The objective of neural network (NN) robustness certification is to determine if a NN changes its predictions when mutations are made to its inputs. While most certification research studies pixel-level or a few geometrical-level and blurring operations over images, this paper proposes a novel framework, GCERT, which certifies NN robustness under a precise and unified form of diverse semantic-level image mutations. We formulate a comprehensive set of semantic-level image mutations uniformly as certain directions in the latent space of generative models. We identify two key properties, independence and continuity, that convert the latent space into a precise and analysis-friendly input space representation for certification. GCERT can be smoothly integrated with de facto complete, incomplete, or quantitative certification frameworks. With its precise input space representation, GCERT enables for the first time complete NN robustness certification with moderate cost under diverse semantic-level input mutations, such as weather-filter, style transfer, and perceptual changes (e.g., opening/closing eyes). We show that GCERT enables certifying NN robustness under various common and security-sensitive scenarios like autonomous driving.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/yuan-yuanyuan-certification](https://www.usenix.org/conference/usenixsecurity23/presentation/yuan-yuanyuan-certification)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-yuan-yuanyuan-certification.pdf](https://www.usenix.org/system/files/usenixsecurity23-yuan-yuanyuan-certification.pdf)
## DiffSmooth: Certifiably Robust Learning via Diffusion Models and Local Smoothing.
### Authors
* Jiawei Zhang, UIUC
* Zhongzhu Chen, University of Michigan, Ann Arbor
* Huan Zhang, Carnegie Mellon University
* Chaowei Xiao, Arizona State University
* Bo Li, UIUC
### Abstract
> Diffusion models have been leveraged to perform adversarial purification and thus provide both empirical and certified robustness for a standard  model. On the other hand, different robustly trained smoothed  models have been studied to improve the certified robustness. Thus, it raises a natural question: Can diffusion model be used to achieve improved certified robustness on those robustly trained smoothed models?  In this work, we first theoretically show that recovered instances by diffusion models are in the bounded neighborhood of the original instance with high probability; and the "one-shot" denoising diffusion probabilistic models (DDPM) can approximate the mean of the generated distribution of a continuous-time diffusion model, which approximates the original instance under mild conditions. Inspired by our analysis, we propose a certifiably robust pipeline DiffSmooth, which first performs adversarial purification via diffusion models and then maps the purified instances to a common region via a simple yet effective local smoothing  strategy. We conduct extensive experiments on different datasets and show that DiffSmooth achieves SOTA-certified robustness compared with eight baselines. For instance, DiffSmooth improves the SOTA-certified accuracy from 36.0% to 53.0% under &ell;2 radius 1.5 on ImageNet.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-jiawei](https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-jiawei)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-zhang-jiawei.pdf](https://www.usenix.org/system/files/usenixsecurity23-zhang-jiawei.pdf)
## HOLMES: Efficient Distribution Testing for Secure Collaborative Learning.
### Authors
* Ian Chang, UC Berkeley
* Katerina Sotiraki, UC Berkeley
* Weikeng Chen, UC Berkeley & DZK Labs
* Murat Kantarcioglu, University of Texas at Dallas & UC Berkeley
* Raluca Popa, UC Berkeley
### Abstract
> Using secure multiparty computation (MPC), organizations which own sensitive data (e.g., in healthcare, finance or law enforcement) can train machine learning models over their joint dataset without revealing their data to each other. At the same time, secure computation restricts operations on the joint dataset, which impedes computation to assess its quality. Without such an assessment, deploying a jointly trained model is potentially illegal. Regulations, such as the European Union's General Data Protection Regulation (GDPR), require organizations to be legally responsible for the errors, bias, or discrimination caused by their machine learning models. Hence, testing data quality emerges as an indispensable step in secure collaborative learning. However, performing distribution testing is prohibitively expensive using current techniques, as shown in our experiments.  We present HOLMES, a protocol for performing distribution testing efficiently. In our experiments, compared with three non-trivial baselines, HOLMES achieves a speedup of more than 10× for classical distribution tests and up to 104× for multidimensional tests. The core of HOLMES is a hybrid protocol that integrates MPC with zero-knowledge proofs and a new ZK-friendly and naturally oblivious sketching algorithm for multidimensional tests, both with significantly lower computational complexity and concrete execution costs.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/chang](https://www.usenix.org/conference/usenixsecurity23/presentation/chang)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-chang.pdf](https://www.usenix.org/system/files/usenixsecurity23-chang.pdf)
## Keep Your Friends Close, but Your Routeservers Closer: Insights into RPKI Validation in the Internet.
### Authors
* Tomas Hlavacek, Fraunhofer Institute for Secure Information Technology SIT and National Research Center for Applied Cybersecurity ATHENE
* Haya Shulman, Fraunhofer Institute for Secure Information Technology SIT, National Research Center for Applied Cybersecurity ATHENE, and Goethe-Universität Frankfurt
* Niklas Vogel, Fraunhofer Institute for Secure Information Technology SIT, National Research Center for Applied Cybersecurity ATHENE, and Goethe-Universität Frankfurt
* Michael Waidner, Fraunhofer Institute for Secure Information Technology SIT, National Research Center for Applied Cybersecurity ATHENE, and Technische Universität Darmstadt
### Abstract
> IP prefix hijacks allow adversaries to redirect and intercept traffic, posing a threat to the stability and security of the Internet. To prevent prefix hijacks, networks should deploy RPKI and filter bogus BGP announcements with invalid routes. In this work we evaluate the impact of RPKI deployments on the security and resilience of the Internet. We aim to understand which networks filter invalid routes and how effective that filtering is in blocking prefix hijacks. We extend previous data acquisition and analysis methodologies to obtain more accurate identification of networks that filter invalid routes with RPKI. We find that more than 27% of networks enforce RPKI filtering and show for the first time that deployments follow the business incentives of inter-domain routing: providers have an increased motivation to filter in order to avoid losing customers' traffic.Analyzing the effectiveness of RPKI, we find that the current trend to deploy RPKI on routeservers of Internet Exchange Points (IXPs) only provides a localized protection against hijacks but has negligible impact on preventing their spread globally. In contrast, we show that RPKI filtering in Tier-1 providers greatly benefits the security of the Internet as it limits the spread of hijacks to a localized scope. Based on our observations, we provide recommendations on the future roadmap of RPKI deployment.We make our datasets available for public use.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/hlavacek](https://www.usenix.org/conference/usenixsecurity23/presentation/hlavacek)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-hlavacek.pdf](https://www.usenix.org/system/files/usenixsecurity23-hlavacek.pdf)
## Exploring the Unknown DTLS Universe: Analysis of the DTLS Server Ecosystem on the Internet.
### Authors
* Nurullah Erinola, Ruhr University Bochum
* Marcel Maehren, Ruhr University Bochum
* Robert Merget, Technology Innovation Institute
* Juraj Somorovsky, Paderborn University
* Jörg Schwenk, Ruhr University Bochum
### Abstract
> DTLS aims to bring the same security guarantees as TLS to UDP. It is used for latency-sensitive applications such as VPN, VoIP, video conferencing, and online gaming that can suffer from the overhead of a reliable transport protocol like TCP. While researchers and developers invested significant effort in improving the security of TLS, DTLS implementations have not received the same scrutiny despite their importance and similarity. It is thus an open question whether vulnerabilities discovered in TLS have been fixed in DTLS and whether DTLS-specific features open possibilities for new attacks.To fill this gap, we extended the open-source tool TLS-Scanner with support for DTLS and implemented additional tests for DTLS-exclusive features. We evaluated twelve open-source DTLS server implementations and uncovered eleven security vulnerabilities, including a padding oracle vulnerability in PionDTLS and DoS amplification vulnerabilities in wolfSSL, Scandium, and JSSE. We then proceeded to scan publicly available servers. We discovered and analyzed more than 500,000 DTLS servers across eight ports providing detailed insights into the publicly accessible DTLS server landscape. Beyond cryptographic vulnerabilities and compatibility issues, our analysis showed that 4.4% of the evaluated servers could be used for DoS amplification attacks due to insufficient care when handling anti-DoS cookies.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/erinola](https://www.usenix.org/conference/usenixsecurity23/presentation/erinola)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-erinola.pdf](https://www.usenix.org/system/files/usenixsecurity23-erinola.pdf)
## We Really Need to Talk About Session Tickets: A Large-Scale Analysis of Cryptographic Dangers with TLS Session Tickets.
### Authors
* Sven Hebrok, Paderborn University
* Simon Nachtigall, Paderborn University and achelos GmbH
* Marcel Maehren, Ruhr University Bochum
* Nurullah Erinola, Ruhr University Bochum
* Robert Merget, Technology Innovation Institute and Ruhr University Bochum
* Juraj Somorovsky, Paderborn University
* Jörg Schwenk, Ruhr University Bochum
### Abstract
> Session tickets improve the performance of the TLS protocol. They allow abbreviating the handshake by using secrets from a previous session. To this end, the server encrypts the secrets using a Session Ticket Encryption Key (STEK) only know to the server, which the client stores as a ticket and sends back upon resumption. The standard leaves details such as data formats, encryption algorithms, and key management to the server implementation. TLS session tickets have been criticized by security experts, for undermining the security guarantees of TLS. An adversary, who can guess or compromise the STEK, can passively record and decrypt TLS sessions and may impersonate the server. Thus, weak implementations of this mechanism may completely undermine TLS security guarantees. We performed the first systematic large-scale analysis of the cryptographic pitfalls of session ticket implementations. (1) We determined the data formats and cryptographic algorithms used by 12 open-source implementations and designed online and offline tests to identify vulnerable implementations. (2) We performed several large-scale scans and collected session tickets for extended offline analyses. We found significant differences in session ticket implementations and critical security issues in the analyzed servers. Vulnerable servers used weak keys or repeating keystreams in the used tickets, allowing for session ticket decryption. Among others, our analysis revealed a widespread implemen tation flaw within the Amazon AWS ecosystem that allowed for passive traffic decryption for at least 1.9% of the Tranco Top 100k servers.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/hebrok](https://www.usenix.org/conference/usenixsecurity23/presentation/hebrok)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-hebrok.pdf](https://www.usenix.org/system/files/usenixsecurity23-hebrok.pdf)
## Extended Hell(o): A Comprehensive Large-Scale Study on Email Confidentiality and Integrity Mechanisms in the Wild.
### Authors
* Birk Blechschmidt, Saarland University
* Ben Stock, CISPA Helmholtz Center for Information Security
### Abstract
> The core specifications of electronic mail as used today date back as early as the 1970s. At that time, security did not play a significant role in developing communication protocols. These shortcomings still manifest themselves today in the prevalence of phishing and the reliance on opportunistic encryption. Besides STARTTLS, various mechanisms such as SPF, DKIM, DMARC, DANE, and MTA-STS have been proposed. However, related work has shown that not all providers support them and that misconfigurations are common. In this work, we provide a comprehensive overview of the current state of email confidentiality and integrity measures, as well as the effectiveness of their deployment. On a positive note, support for incoming TLS connections has significantly increased over the years, with over 96% of reachable MXs in the top 10 million domains allowing for explicit TLS. Notably, 30% of presented certificates are invalid, though, with the majority of issues related to the presented hostnames. In light of this, all 47 providers we tested connect to hosts with expired, self-signed, non-matching certificates, making it trivial for attackers to intercept their connections. Our analysis also shows that still only around 40% of sites specify SPF, and even high-ranked providers like t-online.de do not enforce it. Similarly, while DNS lookups are performed for both DKIM and DANE, neither mechanism is validated or enforced by all providers. In addition, we show that MTA-STS is only slowly getting traction (six providers support it) and provide the first large-scale analysis into OPENPGPKEY and SMIMEA records. All in all, this still paints a grim yet slightly improving picture for the state of email security by late 2022.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/blechschmidt](https://www.usenix.org/conference/usenixsecurity23/presentation/blechschmidt)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-blechschmidt.pdf](https://www.usenix.org/system/files/usenixsecurity23-blechschmidt.pdf)
## No Linux, No Problem: Fast and Correct Windows Binary Fuzzing via Target-embedded Snapshotting.
### Authors
* Leo Stone, Virginia Tech
* Rishi Ranjan, Virginia Tech
* Stefan Nagy, University of Utah
* Matthew Hicks, Virginia Tech
### Abstract
> Abstract—Coverage-guided fuzzing remains today's most successful approach for exposing software security vulnerabilities. Speed is paramount in fuzzing, as maintaining a high test case throughput enables more expeditious exploration of programs—leading to faster vulnerability discovery. High-performance fuzzers exploit the Linux kernel's customizability to implement process snapshotting: fuzzing-oriented execution primitives that dramatically increase fuzzing throughput. Unfortunately, such speeds remain elusive on Windows. The closed-source nature of its kernel prevents current kernel-based snapshotting techniques from being ported—severely limiting fuzzing's effectiveness on Windows programs. Thus, accelerating vetting of the Windows software ecosystem demands a fast, correct, and kernel-agnostic fuzzing execution mechanism.We propose making state snapshotting an application-level concern as opposed to a kernel-level concern via target-embedded snapshotting. Target-embedded-snapshotting com- bines binary- and library-level hooking to allow applications to snapshot themselves—while leaving both their source code and the Windows kernel untouched. Our evaluation on 10 realworld Windows binaries shows that target-embedded snapshotting overcomes the speed, correctness, and compatibility challenges of previous Windows fuzzing execution mechanisms (i.e., process creation, forkserver-based cloning, and persistent mode). The result is 7–182x increased performance.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/stone](https://www.usenix.org/conference/usenixsecurity23/presentation/stone)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-stone.pdf](https://www.usenix.org/system/files/usenixsecurity23-stone.pdf)
## DAFL: Directed Grey-box Fuzzing guided by Data Dependency.
### Authors
* Tae Eun Kim, KAIST
* Jaeseung Choi, Sogang University
* Kihong Heo, KAIST
* Sang Kil Cha, KAIST
### Abstract
> Despite growing research interest, existing directed grey-box fuzzers do not scale well with program complexity. In this paper, we identify two major scalability challenges for current directed grey-box fuzzing. Particularly, we find that traditional coverage feedback does not always provide meaningful guidance for reaching the target program point(s), and the existing seed distance mechanism does not operate well with programs with complex control structures. To address these problems, we present a novel fuzzer, named DAFL. DAFL selects code parts that are relevant to the target location and obtains coverage feedback only from those parts. Furthermore, it computes precise seed distances considering the data-flow semantics of program executions. The results are promising. Out of 41 real-world bugs, DAFL was able to find 4, 6, 9, and 5 more bugs within the given time, compared to AFL, AFLGo, WindRanger, and Beacon, respectively. Furthermore, among the cases where all fuzzers produced a median TTE, DAFL was at least 4.99 times faster on average compared to 3 state-of-the-art directed fuzzers including AFLGo, WindRanger, and Beacon.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/kim-tae-eun](https://www.usenix.org/conference/usenixsecurity23/presentation/kim-tae-eun)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-kim-tae-eun.pdf](https://www.usenix.org/system/files/usenixsecurity23-kim-tae-eun.pdf)
## DynSQL: Stateful Fuzzing for Database Management Systems with Complex and Valid SQL Query Generation.
### Authors
* Zu-Ming Jiang, ETH Zurich
* Jia-Ju Bai, Tsinghua University
* Zhendong Su, ETH Zurich
### Abstract
> Database management systems (DBMSs) are essential parts of modern software. To ensure the security of DBMSs, recent approaches apply fuzzing to testing DBMSs by automatically generating SQL queries. However, existing DBMS fuzzers are limited in generating complex and valid queries, as they heavily rely on their predefined grammar models and fixed knowledge about DBMSs, but do not capture DBMS-specific state information. As a result, these approaches miss many deep bugs in DBMSs.  In this paper, we propose a novel stateful fuzzing approach to effectively test DBMSs and find deep bugs. Our basic idea is that after DBMSs process each SQL statement, there is useful state information that can be dynamically collected to facilitate later query generation. Based on this idea, our approach performs dynamic query interaction to incrementally generate complex and valid SQL queries, using the captured state information. To further improve the validity of generated queries, our approach uses the error status of query processing to filter out invalid test cases. We implement our approach as a fully automatic fuzzing framework, DynSQL. DynSQL is evaluated on 6 widely-used DBMSs (including SQLite, MySQL, MariaDB, PostgreSQL, MonetDB, and ClickHouse) and finds 40 unique bugs. Among these bugs, 38 have been confirmed, 21 have been fixed, and 19 have been assigned with CVE IDs. In our evaluation, DynSQL outperforms other state-of-the-art DBMS fuzzers, achieving 41% higher code coverage and finding many bugs missed by other fuzzers.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/jiang-zu-ming](https://www.usenix.org/conference/usenixsecurity23/presentation/jiang-zu-ming)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-jiang-zu-ming.pdf](https://www.usenix.org/system/files/usenixsecurity23-jiang-zu-ming.pdf)
## AIFORE: Smart Fuzzing Based on Automatic Input Format Reverse Engineering.
### Authors
* Ji Shi, {CAS-KLONAT, BKLONSPT}, Institute of Information Engineering, Chinese Academy of Sciences; Institute for Network Science and Cyberspace & BNRist, Tsinghua University; Zhongguancun Lab; Singular Security Lab, Huawei Technologies; School of Cyber Security, University of Chinese Academy of Sciences
* Zhun Wang, Institute for Network Science and Cyberspace & BNRist, Tsinghua University; Zhongguancun Lab
* Zhiyao Feng, Institute for Network Science and Cyberspace & BNRist, Tsinghua University; Zhongguancun Lab; EPFL
* Yang Lan, Institute for Network Science and Cyberspace & BNRist, Tsinghua University; Zhongguancun Lab
* Shisong Qin, Institute for Network Science and Cyberspace & BNRist, Tsinghua University; Zhongguancun Lab
* Wei You, Renmin University of China
* Wei Zou, {CAS-KLONAT, BKLONSPT}, Institute of Information Engineering, Chinese Academy of Sciences; School of Cyber Security, University of Chinese Academy of Sciences
* Mathias Payer, EPFL
* Chao Zhang, Institute for Network Science and Cyberspace & BNRist, Tsinghua University; Zhongguancun Lab
### Abstract
> Knowledge of a program’s input format is essential for effective input generation in fuzzing. Automated input format reverse engineering represents an attractive but challenging approach to learning the format. In this paper, we address several challenges of automated input format reverse engineering, and present a smart fuzzing solution AIFORE which makes full use of the reversed format and benefits from it. The structures and semantics of input fields are determined by the basic blocks (BBs) that process them rather than the input specification. Therefore, we first utilize byte-level taint analysis to recognize the input bytes processed by each BB, then identify indivisible input fields that are always processed together with a minimum cluster algorithm, and learn their types with a neural network model that characterizes the behavior of BBs. Lastly, we design a new power scheduling algorithm based on the inferred format knowledge to guide smart fuzzing. We implement a prototype of AIFORE and evaluate both the accuracy of format inference and the performance of fuzzing against state-of-the-art (SOTA) format reversing solutions and fuzzers. AIFORE significantly outperforms SOTA baselines on the accuracy of field boundary and type recognition. With AIFORE, we uncovered 20 bugs in 15 programs that were missed by other fuzzers.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/shi-ji](https://www.usenix.org/conference/usenixsecurity23/presentation/shi-ji)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-shi-ji.pdf](https://www.usenix.org/system/files/usenixsecurity23-shi-ji.pdf)
## BoKASAN: Binary-only Kernel Address Sanitizer for Effective Kernel Fuzzing.
### Authors
* Mingi Cho, Yonsei University
* Dohyeon An, Yonsei University
* Hoyong Jin, Yonsei University
* Taekyoung Kwon, Yonsei University
### Abstract
> Kernel Address Sanitizer (KASAN), an invaluable tool for finding use-after-free and out-of-bounds bugs in the Linux kernel, needs the kernel source for compile-time instrumentation. To apply KASAN to closed-source systems, we should develop a binary-only KASAN, which is challenging. A technique that uses binary rewriting and processor support to run KASAN for binary modules needs a KASAN-applied kernel, thereby still the kernel source. Dynamic instrumentation offers an alternative way to it but greatly increases the performance overhead, rendering the kernel fuzzing impractical. To address these problems, we present the first practical, binary-only KASAN named BoKASAN, which conducts address sanitization through dynamic instrumentation for the entire kernel binaries efficiently. Our key idea is selective sanitization, which identifies target processes to sanitize and hooks the page fault mechanism for significantly reducing the performance overhead of dynamic instrumentation. Our key insight is that the kernel bugs are most relevant to the processes created by a fuzzer. Thus, BoKASAN deliberately sanitizes the target memory regions related to these processes and leaves the remains unsanitized for effective kernel fuzzing.  Our evaluation results show that BoKASAN is practical on closed-source systems, achieving the compiler-level performance of KASAN even on binary-only kernels and modules. Compared to KASAN on the Linux kernel, BoKASAN detected slightly more bugs in the Janus dataset and slightly fewer bugs in the Syzkaller/SyzVegas dataset; and BoKASAN found the same number of unique bugs in the 5-day fuzzing and executed the similar number of basic blocks. For binary modules on the Windows kernel and the Linux kernel, resp., BoKASAN was effective in finding bugs. An ablation result shows that selective sanitization affected these outcomes.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/cho](https://www.usenix.org/conference/usenixsecurity23/presentation/cho)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-cho.pdf](https://www.usenix.org/system/files/usenixsecurity23-cho.pdf)
## ACTOR: Action-Guided Kernel Fuzzing.
### Authors
* Marius Fleischer, University of California, Santa Barbara
* Dipanjan Das, University of California, Santa Barbara
* Priyanka Bose, University of California, Santa Barbara
* Weiheng Bai, University of Minnesota
* Kangjie Lu, University of Minnesota
* Mathias Payer, EPFL
* Christopher Kruegel, University of California, Santa Barbara
* Giovanni Vigna, University of California, Santa Barbara
### Abstract
> Fuzzing reliably and efficiently finds bugs in software, including operating system kernels. In general, higher code coverage leads to the discovery of more bugs. This is why most existing kernel fuzzers adopt strategies to generate a series of inputs that attempt to greedily maximize the amount of code that they exercise. However, simply executing code may not be sufficient to reveal bugs that require specific sequences of actions. Synthesizing inputs to trigger such bugs depends on two aspects: (i) the actions the executed code takes, and (ii) the order in which those actions are taken. An action is a high-level operation, such as a heap allocation, that is performed by the executed code and has a specific semantic meaning. ACTOR, our action-guided kernel fuzzing framework, deviates from traditional methods. Instead of focusing on code coverage optimization, our approach generates fuzzer programs (inputs) that leverage our understanding of triggered actions and their temporal relationships. Specifically, we first capture actions that potentially operate on shared data structures at different times. Then, we synthesize programs using those actions as building blocks, guided by bug templates expressed in our domain-specific language. We evaluated ACTOR on four different versions of the Linux kernel, including two well-tested and frequently updated long-term (5.4.206, 5.10.131) versions, a stable (5.19), and the latest (6.2-rc5) release. Our evaluation revealed a total of 41 previously unknown bugs, of which 9 have already been fixed. Interestingly, 15 (36.59%) of them were discovered in less than a day.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/fleischer](https://www.usenix.org/conference/usenixsecurity23/presentation/fleischer)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-fleischer.pdf](https://www.usenix.org/system/files/usenixsecurity23-fleischer.pdf)
## FirmSolo: Enabling dynamic analysis of binary Linux-based IoT kernel modules.
### Authors
* Ioannis Angelakopoulos, Boston University
* Gianluca Stringhini, Boston University
* Manuel Egele, Boston University
### Abstract
> The Linux-based firmware running on Internet of Things (IoT) devices is complex and consists of user level programs as well as kernel level code. Both components have been shown to have serious security vulnerabilities, and the risk linked to kernel vulnerabilities is particularly high, as these can lead to full system compromise. However, previous work only focuses on the user space component of embedded firmware. In this paper, we present Firmware Solution (FirmSolo), a system designed to incorporate the kernel space into firmware analysis. FirmSolo features the Kernel Configuration Reverse Engineering (K.C.R.E.) process that leverages information (i.e., exported and required symbols and version magic) from the kernel modules found in firmware images to build a kernel that can load the modules within an emulated environment. This capability allows downstream analysis to broaden their scope into code executing in privileged mode. We evaluated FirmSolo on 1,470 images containing 56,688 kernel modules where it loaded 64% of the kernel modules. To demonstrate how FirmSolo aids downstream analysis, we integrate it with two representative analysis systems; the TriforceAFL kernel fuzzer and Firmadyne, a dynamic firmware analysis tool originally devoid of kernel mode analysis capabilities. Our TriforceAFL experiments on a subset of 75 kernel modules discovered 19 previously-unknown bugs in 11 distinct proprietary modules. Through Firmadyne we confirmed the presence of these previously-unknown bugs in 84 firmware images. Furthermore, by using FirmSolo, Firmadyne confirmed a previously-known memory corruption vulnerability in five different versions of the closed-source Kcodes' NetUSB module across 15 firmware images.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/angelakopoulos](https://www.usenix.org/conference/usenixsecurity23/presentation/angelakopoulos)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-angelakopoulos.pdf](https://www.usenix.org/system/files/usenixsecurity23-angelakopoulos.pdf)
## KextFuzz: Fuzzing macOS Kernel EXTensions on Apple Silicon via Exploiting Mitigations.
### Authors
* Tingting Yin, Tsinghua University and Ant Group
* Zicong Gao, State Key Laboratory of Mathematical Engineering and Advanced Computing
* Zhenghang Xiao, Hunan University
* Zheyu Ma, Tsinghua University
* Min Zheng, Ant Group
* Chao Zhang, Tsinghua University and Zhongguancun Laboratory
### Abstract
> macOS drivers, i.e., Kernel EXTensions (kext), are attractive attack targets for adversaries. However, automatically discovering vulnerabilities in kexts is extremely challenging because kexts are mostly closed-source, and the latest macOS running on customized Apple Silicon has limited tool-chain support. Most existing static analysis and dynamic testing solutions cannot be applied to the latest macOS. In this paper, we present the first smart fuzzing solution KextFuzz to detect bugs in the latest macOS kexts running on Apple Silicon. Unlike existing driver fuzzing solutions, KextFuzz does not require source code, execution traces, hypervisors, or hardware features (e.g., coverage tracing) and thus is universal and practical. We note that macOS has deployed many mitigations, including pointer authentication, code signature, and userspace kernel layer wrappers, to thwart potential attacks. These mitigations can provide extra knowledge and resources for us to enable kernel fuzzing. KextFuzz exploits these mitigation schemes to instrument the binary for coverage tracking, test privileged kext code that is guarded and infrequently accessed, and infer the type and semantic information of the kext interfaces. KextFuzz has found 48 unique kernel bugs in the macOS kexts. Some of them could cause severe consequences like non-recoverable denial-of-service or damages.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/yin](https://www.usenix.org/conference/usenixsecurity23/presentation/yin)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-yin.pdf](https://www.usenix.org/system/files/usenixsecurity23-yin.pdf)
## Uncontained: Uncovering Container Confusion in the Linux Kernel.
### Authors
* Jakob Koschel, Vrije Universiteit Amsterdam
* Pietro Borrello, Sapienza University of Rome
* Daniele Cono D'Elia, Sapienza University of Rome
* Herbert Bos, Vrije Universiteit Amsterdam
* Cristiano Giuffrida, Vrije Universiteit Amsterdam
### Abstract
> Type confusion bugs are a common source of security problems whenever software makes use of type hierarchies, as an inadvertent downcast to an incompatible type is hard to detect at compile time and easily leads to memory corruption at runtime. Where existing research mostly studies type confusion in the context of object-oriented languages such as C++, we analyze how similar bugs affect complex C projects such as the Linux kernel. In particular, structure embedding emulates type inheritance between typed structures. Downcasting in such cases consists of determining the containing structure from the embedded one, and, like its C++ counterpart, may well lead to bad casting to an incompatible type. In this paper, we present uncontained, a systematic, two-pronged solution to discover type confusion vulnerabilities resulting from incorrect downcasting on structure embeddings—which we call container confusion. First, we design a novel sanitizer to dynamically detect such issues and evaluate it on the Linux kernel, where we find as many as 11 container confusion bugs. Using the patterns in the bugs detected by the sanitizer, we then develop a static analyzer to find similar bugs in code that dynamic analysis fails to reach and detect another 78 bugs. We reported and proposed patches for all the bugs (with 102 patches already merged and 6 CVEs assigned), cooperating with the Linux kernel maintainers towards safer design choices for container manipulation.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/koschel](https://www.usenix.org/conference/usenixsecurity23/presentation/koschel)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-koschel.pdf](https://www.usenix.org/system/files/usenixsecurity23-koschel.pdf)
## "I'm going to trust this until it burns me" Parents' Privacy Concerns and Delegation of Trust in K-8 Educational Technology.
### Authors
* Victoria Zhong, New York University
* Susan McGregor, Columbia University
* Rachel Greenstadt, New York University
### Abstract
> After COVID-19 restrictions forced an almost overnight transition to distance learning for students of all ages, education software became a target for data breaches, with incidents like the Illuminate data breach affecting millions of students nationwide and over 820,000 current and former students in New York City (NYC) alone. Despite a general return to in-person schooling, some schools continue to rely on remote-learning technologies, with NYC even using remote learning during weather-related closures or "snow days." Given the ongoing use of these classroom technologies, we sought to understand parents' awareness of their security and privacy risks. We also wanted to know what concerns parents had around their childrens' use of these tools, and what informed these concerns. To answer these questions, we interviewed 18 NYC parents with children in grades K-8. We found that though the COVID-19 pandemic was the first exposure to remote learning technologies for many children and some parents, there was insufficient guidance and training around them provided for children, parents, and educators. We also found that participating parents implicitly trusted schools and the Department of Education (DOE) to keep their children - and their children's data - safe, and therefore rarely reported privacy and security concerns about classroom technologies. At the same time, however, they described many situations that indicated privacy and security risks with respect to classroom technologies.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/zhong](https://www.usenix.org/conference/usenixsecurity23/presentation/zhong)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-zhong.pdf](https://www.usenix.org/system/files/usenixsecurity23-zhong.pdf)
## Educators' Perspectives of Using (or Not Using) Online Exam Proctoring.
### Authors
* David G. Balash, The George Washington University
* Elena Korkes, The George Washington University
* Miles Grant, The George Washington University
* Adam J. Aviv, The George Washington University
* Rahel A. Fainchtein, Georgetown University
* Micah Sherr, Georgetown University
### Abstract
> The onset of the COVID-19 pandemic changed the landscape of education and led to increased usage of remote proctoring tools that are designed to monitor students when they take assessments outside the classroom. While prior work has explored students' privacy and security concerns regarding online proctoring tools, the perspective of educators is under explored. Notably, educators are the decision makers in the classrooms and choose which remote proctoring services and the level of observations they deem appropriate. To explore how educators balance the security and privacy of  their students with the requirements of remote exams, we sent survey requests to over 3,400 instructors at a large private university that taught online classes during the 2020/21 academic year. We had n=125 responses: 21% of the educators surveyed used online exam proctoring services during the remote learning period, and of those, 35% plan to continue using the tools even when there is a full return to in-person learning. Educators who use exam proctoring services are often comfortable with their monitoring capabilities. However, educators are concerned about students sharing certain types of information with exam proctoring companies, particularly when proctoring services collect identifiable information to  validate students' identities. Our results suggest that many educators developed alternative assessments that did not require online proctoring and that those who did use online proctoring services often considered the tradeoffs between the potential risks to student privacy and the utility or necessity of exam proctoring services.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/balash](https://www.usenix.org/conference/usenixsecurity23/presentation/balash)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-balash.pdf](https://www.usenix.org/system/files/usenixsecurity23-balash.pdf)
## No more Reviewer #2: Subverting Automatic Paper-Reviewer Assignment using Adversarial Learning.
### Authors
* Thorsten Eisenhofer, Ruhr University Bochum
* Erwin Quiring, Ruhr University Bochum and International Computer Science Institute (ISCI) Berkeley
* Jonas Möller, Technische Universität Berlin
* Doreen Riepel, Ruhr University Bochum
* Thorsten Holz, CISPA Helmholtz Center for Information Security
* Konrad Rieck, Technische Universität Berlin
### Abstract
> The number of papers submitted to academic conferences is steadily rising in many scientific disciplines. To handle this growth, systems for automatic paper-reviewer assignments are increasingly used during the reviewing process. These systems use statistical topic models to characterize the content of submissions and automate the assignment to reviewers. In this paper, we show that this automation can be manipulated using adversarial learning. We propose an attack that adapts a given paper so that it misleads the assignment and selects its own reviewers. Our attack is based on a novel optimization strategy that alternates between the feature space and problem space to realize unobtrusive changes to the paper. To evaluate the feasibility of our attack, we simulate the paper-reviewer assignment of an actual security conference (IEEE S&P) with 165 reviewers on the program committee. Our results show that we can successfully select and remove reviewers without access to the assignment system. Moreover, we demonstrate that the manipulated papers remain plausible and are often indistinguishable from benign submissions.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/eisenhofer](https://www.usenix.org/conference/usenixsecurity23/presentation/eisenhofer)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-eisenhofer.pdf](https://www.usenix.org/system/files/usenixsecurity23-eisenhofer.pdf)
## A Two-Decade Retrospective Analysis of a University's Vulnerability to Attacks Exploiting Reused Passwords.
### Authors
* Alex, University of Chicago / Carnegie Mellon University
* ra Nisenoff, University of Chicago / Carnegie Mellon University
* Maximilian Golla, University of Chicago / Max Planck Institute for Security and Privacy
* Mir, University of Chicago / University of Washington
* a Wei, University of Chicago / University of Washington
* Juliette Hainline, University of Chicago
* Hayley Szymanek, University of Chicago
* Annika Braun, University of Chicago
* Annika Hildebr, University of Chicago
* t, University of Chicago
* Blair Christensen, University of Chicago
* David Langenberg, University of Chicago
* Blase Ur, University of Chicago
### Abstract
> Credential-guessing attacks often exploit passwords that were reused across a user's online accounts. To learn how organizations can better protect users, we retrospectively analyzed our university's vulnerability to credential-guessing attacks across twenty years. Given a list of university usernames, we searched for matches in both data breaches from hundreds of websites and a dozen large compilations of breaches. After cracking hashed passwords and tweaking guesses, we successfully guessed passwords for 32.0% of accounts matched to a university email address in a data breach, as well as 6.5% of accounts where the username (but not necessarily the domain) matched. Many of these accounts remained vulnerable for years after the breached data was leaked, and passwords found verbatim in breaches were nearly four times as likely to have been exploited (i.e., suspicious account activity was observed) than tweaked guesses. Over 70 different data breaches and various username-matching strategies bootstrapped correct guesses. In surveys of 40 users whose passwords we guessed, many users were unaware of the risks to their university account or that their credentials had been breached. This analysis of password reuse at our university provides pragmatic advice for organizations to protect accounts.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/nisenoff-retrospective](https://www.usenix.org/conference/usenixsecurity23/presentation/nisenoff-retrospective)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-nisenoff-retrospective.pdf](https://www.usenix.org/system/files/usenixsecurity23-nisenoff-retrospective.pdf)
## Ethical Frameworks and Computer Security Trolley Problems: Foundations for Conversations.
### Authors
* Tadayoshi Kohno, University of Washington
* Yasemin Acar, Paderborn University & George Washington University
* Wulf Loh, Universität Tübingen
### Abstract
> The computer security research community regularly tackles ethical questions. The field of ethics / moral philosophy has for centuries considered what it means to be "morally good" or at least "morally allowed / acceptable". Among philosophy's contributions are (1) frameworks for evaluating the morality of actions—including the well-established consequentialist and deontological frameworks—and (2) scenarios (like trolley problems) featuring moral dilemmas that can facilitate discussion about and intellectual inquiry into different perspectives on moral reasoning and decision-making. In a classic trolley problem, consequentialist and deontological analyses may render different outcomes. In this research, we explicitly make and explore connections between moral questions in computer security research and ethics / moral philosophy through the creation and analysis of trolley problem-like computer security-themed moral dilemmas and, in doing so, we seek to contribute to conversations among security researchers about the morality of security research-related decisions. We explicitly do not seek to define what is morally right or wrong, nor do we argue for one framework over another. Indeed, the consequentialist and deontological frameworks that we center, in addition to coming to different conclusions for our scenarios, have significant limitations. Instead, by offering our scenarios and by comparing two different approaches to ethics, we strive to contribute to how the computer security research field considers and converses about ethical questions, especially when there are different perspectives on what is morally right or acceptable. Our vision is for this work to be broadly useful to the computer security community, including to researchers as they embark on (or choose not to embark on), conduct, and write about their research, to program committees as they evaluate submissions, and to educators as they teach about computer security and ethics.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/kohno](https://www.usenix.org/conference/usenixsecurity23/presentation/kohno)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-kohno.pdf](https://www.usenix.org/system/files/usenixsecurity23-kohno.pdf)
## Catch You and I Can: Revealing Source Voiceprint Against Voice Conversion.
### Authors
* Jiangyi Deng, Zhejiang University
* Yanjiao Chen, Zhejiang University
* Yinan Zhong, Zhejiang University
* Qianhao Miao, Zhejiang University
* Xueluan Gong, Wuhan University
* Wenyuan Xu, Zhejiang University
### Abstract
> Voice conversion (VC) techniques can be abused by malicious parties to transform their audios to sound like a target speaker, making it hard for a human being or a speaker verification/identification system to trace the source speaker. In this paper, we make the first attempt to restore the source voiceprint from audios synthesized by voice conversion methods with high credit. However, unveiling the features of the source speaker from a converted audio is challenging since the voice conversion operation intends to disentangle the original features and infuse the features of the target speaker. To fulfill our goal, we develop Revelio, a representation learning model, which learns to effectively extract the voiceprint of the source speaker from converted audio samples. We equip Revelio with a carefully-designed differential rectification algorithm to eliminate the influence of the target speaker by removing the representation component that is parallel to the voiceprint of the target speaker. We have conducted extensive experiments to evaluate the capability of Revelio in restoring voiceprint from audios converted by VQVC, VQVC+, AGAIN, and BNE. The experiments verify that Revelio is able to rebuild voiceprints that can be traced to the source speaker by speaker verification and identification systems. Revelio also exhibits robust performance under inter-gender conversion, unseen languages, and telephony networks.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/deng-jiangyi-voiceprint](https://www.usenix.org/conference/usenixsecurity23/presentation/deng-jiangyi-voiceprint)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-deng-jiangyi-voiceprint.pdf](https://www.usenix.org/system/files/usenixsecurity23-deng-jiangyi-voiceprint.pdf)
## V-Cloak: Intelligibility-, Naturalness- & Timbre-Preserving Real-Time Voice Anonymization.
### Authors
* Jiangyi Deng, Zhejiang University
* Fei Teng, Zhejiang University
* Yanjiao Chen, Zhejiang University
* Xiaofu Chen, Wuhan University
* Zhaohui Wang, Wuhan University
* Wenyuan Xu, Zhejiang University
### Abstract
> Voice data generated on instant messaging or social media applications contains unique user voiceprints that may be abused by malicious adversaries for identity inference or identity theft. Existing voice anonymization techniques, e.g., signal processing and voice conversion/synthesis, suffer from degradation of perceptual quality. In this paper, we develop a voice anonymization system, named V-Cloak, which attains real-time voice anonymization while preserving the intelligibility, naturalness and timbre of the audio. Our designed anonymizer features a one-shot generative model that modulates the features of the original audio at different frequency levels. We train the anonymizer with a carefully-designed loss function. Apart from the anonymity loss, we further incorporate the intelligibility loss and the psychoacoustics-based naturalness loss. The anonymizer can realize untargeted and targeted anonymization to achieve the anonymity goals of unidentifiability and unlinkability. We have conducted extensive experiments on four datasets, i.e., LibriSpeech (English), AISHELL (Chinese), CommonVoice (French) and CommonVoice (Italian), five Automatic Speaker Verification (ASV) systems (including two DNN-based, two statistical and one commercial ASV), and eleven Automatic Speech Recognition (ASR) systems (for different languages). Experiment results confirm that V-Cloak outperforms five baselines in terms of anonymity performance. We also demonstrate that V-Cloak trained only on the VoxCeleb1 dataset against ECAPA-TDNN ASV and DeepSpeech2 ASR has transferable anonymity against other ASVs and cross-language intelligibility for other ASRs. Furthermore, we verify the robustness of V-Cloak against various de-noising techniques and adaptive attacks. Hopefully, V-Cloak may provide a cloak for us in a prism world.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/deng-jiangyi-v-cloak](https://www.usenix.org/conference/usenixsecurity23/presentation/deng-jiangyi-v-cloak)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-deng-jiangyi-v-cloak.pdf](https://www.usenix.org/system/files/usenixsecurity23-deng-jiangyi-v-cloak.pdf)
## Assessing Anonymity Techniques Employed in German Court Decisions: A De-Anonymization Experiment.
### Authors
* Dominic Deuber, Friedrich-Alexander-Universität Erlangen-Nürnberg
* Michael Keuchen, Friedrich-Alexander-Universität Erlangen-Nürnberg
* Nicolas Christin, Carnegie Mellon University
### Abstract
> Democracy requires transparency. Consequently, courts of law must publish their decisions. At the same time, the interests of the persons involved in these court decisions must be protected. For this reason, court decisions in Europe are anonymized using a variety of techniques. To understand how well these techniques protect the persons involved, we conducted an empirical experiment with 54 law students, whom we asked to de-anonymize 50 German court decisions. We found that all anonymization techniques used in these court decisions were vulnerable, most notably the use of initials. Since even supposedly secure anonymization techniques proved vulnerable, our work empirically reveals the complexity involved in the anonymization of court decisions, and thus calls for further research to increase anonymity while preserving comprehensibility. Toward that end, we provide recommendations for improving anonymization quality. Finally, we provide an empirical notion of “reasonable effort,” to flesh out the definition of anonymity in the legal context. In doing so, we bridge the gap between the technical and the legal understandings of anonymity.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/deuber](https://www.usenix.org/conference/usenixsecurity23/presentation/deuber)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-deuber.pdf](https://www.usenix.org/system/files/usenixsecurity23-deuber.pdf)
## Person Re-identification in 3D Space: A WiFi Vision-based Approach.
### Authors
* Yili Ren, Florida State University
* Yichao Wang, Florida State University
* Sheng Tan, Trinity University
* Yingying Chen, Rutgers University
* Jie Yang, Florida State University
### Abstract
> Person re-identification (Re-ID) has become increasingly important as it supports a wide range of security applications. Traditional person Re-ID mainly relies on optical camera-based systems, which incur several limitations due to the changes in the appearance of people, occlusions, and human poses. In this work, we propose a WiFi vision-based system, 3D-ID, for person Re-ID in 3D space. Our system leverages the advances of WiFi and deep learning to help WiFi devices "see'', identify, and recognize people. In particular, we leverage multiple antennas on next-generation WiFi devices and 2D AoA estimation of the signal reflections to enable WiFi to visualize a person in the physical environment. We then leverage deep learning to digitize the visualization of the person into 3D body representation and extract both the static body shape and dynamic walking patterns for person Re-ID. Our evaluation results under various indoor environments show that the 3D-ID system achieves an overall rank-1 accuracy of 85.3%. Results also show that our system is resistant to various attacks. The proposed 3D-ID is thus very promising as it could augment or complement camera-based systems.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/ren](https://www.usenix.org/conference/usenixsecurity23/presentation/ren)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-ren.pdf](https://www.usenix.org/system/files/usenixsecurity23-ren.pdf)
## In the Quest to Protect Users from Side-Channel Attacks - A User-Centred Design Space to Mitigate Thermal Attacks on Public Payment Terminals.
### Authors
* Karola Marky, Ruhr-University Bochum and University of Glasgow
* Shaun Macdonald, University of Glasgow
* Yasmeen Abdrabou, Lancaster University
* Mohamed Khamis, University of Glasgow
### Abstract
> Thermal attacks are an emerging threat that enables the reconstruction of user input after interaction with a device by analysing heat traces. There are several ways to protect users from thermal attacks that require different degrees of user involvement. In this paper, we first present a structured literature review to identify 15 protection strategies. Then, we investigate user perceptions of these strategies in an online study (N=306). Our results show that users intuitively use protection strategies that also work against other side-channel attacks. Further, users are willing to sacrifice convenience for the sake of verifying a strategy's efficacy. Yet, an ideal holistic defence from thermal attacks is one that is readily integrated into user interfaces by manufacturers in a way that the user can verify it. Further, users like resourceless strategies that fit their habits. We use the literature review and study results to identify a user-centred design space for thermal attack protection. We conclude the paper with specific recommendations for users, device manufacturers and interface providers to better protect individuals from thermal attacks.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/marky](https://www.usenix.org/conference/usenixsecurity23/presentation/marky)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-marky.pdf](https://www.usenix.org/system/files/usenixsecurity23-marky.pdf)
## Extracting Training Data from Diffusion Models.
### Authors
* Nicholas Carlini, Google
* Jamie Hayes, DeepMind
* Milad Nasr, Google
* Matthew Jagielski, Google
* Vikash Sehwag, Princeton University
* Florian Tramèr, ETH Zurich
* Borja Balle, DeepMind
* Daphne Ippolito, Google
* Eric Wallace, UC Berkeley
### Abstract
> Image diffusion models such as DALL-E 2, Imagen, and Stable Diffusion have attracted significant attention due to their ability to generate high-quality synthetic images. In this work, we show that diffusion models memorize individual images from their training data and emit them at generation time. With a generate-and-filter pipeline, we extract over a thousand training examples from state-of-the-art models, ranging from photographs of individual people to trademarked company logos. We also train hundreds of diffusion models in various settings to analyze how different modeling and data decisions affect privacy. Overall, our results show that diffusion models are much less private than prior generative models such as GANs, and that mitigating these vulnerabilities may require new advances in privacy-preserving training.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/carlini](https://www.usenix.org/conference/usenixsecurity23/presentation/carlini)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-carlini.pdf](https://www.usenix.org/system/files/usenixsecurity23-carlini.pdf)
## PCAT: Functionality and Data Stealing from Split Learning by Pseudo-Client Attack.
### Authors
* Xinben Gao, University of Science and Technology of China
* Lan Zhang, University of Science and Technology of China
### Abstract
> Split learning (SL) is a popular framework to protect a client's training data by splitting up a model among the client and the server. Previous efforts have shown that a semi-honest server can conduct a model inversion attack to recover the client's inputs and model parameters to some extent, as well as to infer the labels. However, those attacks require the knowledge of the client network structure and the performance deteriorates dramatically as the client network gets deeper (≥ 2 layers). In this work, we explore the attack on SL in a more general and challenging situation where the client model is a unknown to the server and gets more complex and deeper. Different from the conventional model inversion, we investigate the inherent privacy leakage through the server model in SL and reveal that clients' functionality and private data can be easily stolen by the server model, and a series of intermediate server models during SL can even cause more leakage. Based on the insights, we propose a new attack on SL: Pseudo-Client ATtack (PCAT). To the best of our knowledge, this is the first attack for a semi-honest server to steal clients' functionality, reconstruct private inputs and infer private labels without any knowledge about the clients' model. The only requirement for the server is a tiny dataset (about 0.1% - 5% of the private training set) for the same learning task. What's more, the attack is transparent to clients, so a server can obtain clients' privacy without taking any risk of being detected by the client. We implement PCAT on various benchmark datasets and models. Extensive experiments testify that our attack significantly outperforms the state-of-the-art attack in various conditions, including more complex models and learning tasks, even in non-i.i.d. conditions. Moreover, our functionality stealing attack is resilient to the existing defensive mechanism.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/gao](https://www.usenix.org/conference/usenixsecurity23/presentation/gao)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-gao.pdf](https://www.usenix.org/system/files/usenixsecurity23-gao.pdf)
## A Plot is Worth a Thousand Words: Model Information Stealing Attacks via Scientific Plots.
### Authors
* Boyang Zhang, CISPA Helmholtz Center for Information Security
* Xinlei He, CISPA Helmholtz Center for Information Security
* Yun Shen, NetApp
* Tianhao Wang, University of Virginia
* Yang Zhang, CISPA Helmholtz Center for Information Security
### Abstract
> Building advanced machine learning (ML) models requires expert knowledge and many trials to discover the best architecture and hyperparameter settings. Previous work demonstrates that model information can be leveraged to assist other attacks, such as membership inference, generating adversarial examples. Therefore, such information, e.g., hyperparameters, should be kept confidential. It is well known that an adversary can leverage a target ML model's output to steal the model's information. In this paper, we discover a new side channel for model information stealing attacks, i.e., models' scientific plots which are extensively used to demonstrate model performance and are easily accessible. Our attack is simple and straightforward. We leverage the shadow model training techniques to generate training data for the attack model which is essentially an image classifier. Extensive evaluation on three benchmark datasets shows that our proposed attack can effectively infer the architecture/hyperparameters of image classifiers based on convolutional neural network (CNN) given the scientific plot generated from it. We also reveal that the attack's success is mainly caused by the shape of the scientific plots, and further demonstrate that the attacks are robust in various scenarios. Given the simplicity and effectiveness of the attack method, our study indicates scientific plots indeed constitute a valid side channel for model information stealing attacks. To mitigate the attacks, we propose several defense mechanisms that can reduce the original attacks' accuracy while maintaining the plot utility. However, such defenses can still be bypassed by adaptive attacks.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-boyang](https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-boyang)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-zhang-boyang.pdf](https://www.usenix.org/system/files/usenixsecurity23-zhang-boyang.pdf)
## Beyond The Gates: An Empirical Analysis of HTTP-Managed Password Stealers and Operators.
### Authors
* Athanasios Avgetidis, Georgia Institute of Technology
* Omar Alrawi, Georgia Institute of Technology
* Kevin Valakuzhy, Georgia Institute of Technology
* Charles Lever, Georgia Institute of Technology
* Paul Burbage, MalBeacon
* Angelos D. Keromytis, Georgia Institute of Technology
* Fabian Monrose, Georgia Institute of Technology
* Manos Antonakakis, Georgia Institute of Technology
### Abstract
> Password Stealers (Stealers) are commodity malware that specialize in credential theft. This work presents a large-scale longitudinal study of Stealers and their operators. Using a commercial dataset, we characterize the activity of over 4, 586 distinct Stealer operators through their devices spanning 10 different Stealer families. Operators make heavy use of proxies, including traditional VPNs, residential proxies, mobile proxies, and the Tor network when managing their botnet. Our affiliation analysis unveils a stratified enterprise of cybercriminals for each service offering and we identify privileged operators using graph analysis. We find several Stealer-as-a-Service providers that lower the economical and technical barrier for many cybercriminals. We estimate that service providers benefit from high-profit margins (up to 98%) and a lower-bound profit estimate of $11, 000 per month. We find high-profile targeting like the Social Security Administration, the U.S. House of Representatives, and the U.S. Senate. We share our findings with law enforcement and publish six months of the dataset, analysis artifact, and code.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/avgetidis](https://www.usenix.org/conference/usenixsecurity23/presentation/avgetidis)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-avgetidis.pdf](https://www.usenix.org/system/files/usenixsecurity23-avgetidis.pdf)
## LightThief: Your Optical Communication Information is Stolen behind the Wall.
### Authors
* Xin Liu, The Ohio State University
* Wei Wang, Saint Louis University
* Guanqun Song, The Ohio State University
* Ting Zhu, The Ohio State University
### Abstract
> Optical Wireless Communication (OWC) is a viable and promising alternative to traditional Radio Frequency (RF) based communication links. Especially for the security issue, since light does not penetrate through opaque objects, OWC is considered gaining certain intrinsic security benefits. The only related work eavesdrops on OWC by detecting the electromagnetic signal leaking from an open-source research platform for OWC. However, electromagnetic compatibility (EMC) regulations require Commercial Off-The-Shelf (COTS) OWC products to minimize electromagnetic leakage, securing OWC from the previous eavesdropping. In this paper, we propose a new class of eavesdropping, LightThief, that can directly convert optical signals into RF signals without complicated baseband processing circuits and power consumption, making it lightweight, unlimited lasting, and easy to disguise. Specifically, LightThief is constructed by coupling a photodiode (PD) to an antenna. Since OWC adopts intensity modulation to transmit data, light intensity change can modify the PD impedance, causing the antenna to reflect different amounts of RF signals to enable data breaches. The attacker outside the room can then detect and decode the RF signals without resistance by EMC regulations. We demonstrate the effectiveness of our attack on a Commercial Off-The-Shelf (COTS) OWC product, which shows successful eavesdropping through physical barriers such as walls. We also discuss potential defense strategies to secure OWC systems from LightThief.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/liu-xin](https://www.usenix.org/conference/usenixsecurity23/presentation/liu-xin)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-liu-xin.pdf](https://www.usenix.org/system/files/usenixsecurity23-liu-xin.pdf)
## WaterBear: Practical Asynchronous BFT Matching Security Guarantees of Partially Synchronous BFT.
### Authors
* Haibin Zhang, Beijing Institute of Technology
* Sisi Duan, Tsinghua University, Zhongguancun Laboratory
* Boxin Zhao, Zhongguancun Laboratory
* Liehuang Zhu, Beijing Institute of Technology
### Abstract
> Asynchronous Byzantine fault-tolerant (BFT) protocols assuming no timing assumptions are inherently more robust than their partially synchronous counterparts, but typically have much weaker security guarantees.We design and implement WaterBear, a family of new and efficient asynchronous BFT protocols matching all security guarantees of partially synchronous protocols. To achieve the goal, we have developed the local coin (flipping a coin locally and independently at each replica) based BFT approach— one long deemed as being inefficient—and designed more efficient asynchronous binary agreement (ABA) protocols and their reproposable ABA (RABA) versions from local coins.We implemented in total five BFT protocols in a new golang library, including four WaterBear protocols and BEAT. Via extensive evaluation, we show that our protocols are efficient under both failure-free and failure scenarios, achieving at least comparable or superior performance to BEAT with much weaker security guarantees. Specifically, the most efficient WaterBear protocol consistently outperforms BEAT in terms of all metrics. For instance, when the number of replicas is 16, the latency of our protocol is about 1/8 of that of BEAT and the throughput of our protocol is 1.23x that of BEAT.Our work pushes the boundaries of asynchronous BFT, showing the strongest security levels that we know of and high performance can co-exist for asynchronous BFT.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-haibin](https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-haibin)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-zhang-haibin.pdf](https://www.usenix.org/system/files/usenixsecurity23-zhang-haibin.pdf)
## Practical Asynchronous High-threshold Distributed Key Generation and Distributed Polynomial Sampling.
### Authors
* Sourav Das, University of Illinois at Urbana-Champaign
* Zhuolun Xiang, Aptos
* Lefteris Kokoris-Kogias, IST Austria and Mysten Labs
* Ling Ren, University of Illinois at Urbana-Champaign
### Abstract
> Distributed Key Generation (DKG) is a technique to bootstrap threshold cryptosystems without a trusted party. DKG is an essential building block to many decentralized protocols such as randomness beacons, threshold signatures, Byzantine consensus, and multiparty computation. While significant progress has been made recently, existing asynchronous DKG constructions are inefficient when the reconstruction threshold is larger than one-third of the total nodes. In this paper, we present a simple and concretely efficient \emph{asynchronous} DKG (ADKG) protocol among n = 3t + 1 nodes that can tolerate up to t malicious nodes and support any reconstruction threshold &ell; ≥ t. Our protocol has an expected O(κn3) communication cost, where κ is the security parameter, and only assumes the hardness of the Discrete Logarithm. The core ingredient of our ADKG protocol is an asynchronous protocol to secret share a random polynomial of degree &ell; ≥ t, which has other applications, such as asynchronous proactive secret sharing and asynchronous multiparty computation. We implement our high-threshold ADKG protocol and evaluate it using a network of up to 128 geographically distributed nodes. Our evaluation shows that our high-threshold ADKG protocol reduces the running time by 90% and bandwidth usage by 80% over the state-of-the-art.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/das](https://www.usenix.org/conference/usenixsecurity23/presentation/das)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-das.pdf](https://www.usenix.org/system/files/usenixsecurity23-das.pdf)
## Efficient 3PC for Binary Circuits with Application to Maliciously-Secure DNN Inference.
### Authors
* Yun Li, Tsinghua University, Ant Group
* Yufei Duan, Tsinghua University
* Zhicong Huang, Alibaba Group
* Cheng Hong, Ant Group
* Chao Zhang, Tsinghua University
* Yifan Song, Tsinghua University
### Abstract
> In this work, we focus on maliciously secure 3PC for binary circuits with honest majority. While the state-of-the-art (Boyle et al. CCS 2019) has already achieved the same amortized communication as the best-known semi-honest protocol (Araki et al. CCS 2016), they suffer from a large computation overhead: when comparing with the best-known implementation result (Furukawa et al. Eurocrypt 2017) which requires 9× communication cost of Araki et al., the protocol by Boyle et al. is around 4.5× slower than that of Furukawa et al. In this paper, we design a maliciously secure 3PC protocol that matches the same communication as Araki et al. with comparable concrete efficiency as Furukawa et al. To obtain our result, we manage to apply the distributed zero-knowledge proofs (Boneh et al. Crypto 2019) for verifying computations over Z2 by using prime fields and explore the algebraic structure of prime fields to make the computation of our protocol friendly for native CPU computation. Experiment results show that our protocol is around 3.5× faster for AES circuits than Boyle et al. We also applied our protocol to the binary part (e.g. comparison and truncation) of secure deep neural network inference, and results show that we could reduce the time cost of achieving malicious security in the binary part by more than 67%. Besides our main contribution, we also find a hidden security issue in many of the current probabilistic truncation protocols, which may be of independent interest.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/li-yun](https://www.usenix.org/conference/usenixsecurity23/presentation/li-yun)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-li-yun.pdf](https://www.usenix.org/system/files/usenixsecurity23-li-yun.pdf)
## TVA: A multi-party computation system for secure and expressive time series analytics.
### Authors
* Muhammad Faisal, Boston University
* Jerry Zhang, University of California San Diego
* John Liagouris, Boston University
* Vasiliki Kalavri, Boston University
* Mayank Varia, Boston University
### Abstract
> We present TVA, a multi-party computation (MPC) system for secure analytics on secret-shared time series data. TVA achieves strong security guarantees in the semi-honest and malicious settings, and high expressivity by enabling complex analytics on inputs with unordered and irregular timestamps. TVA is the first system to support arbitrary composition of oblivious window operators, keyed aggregations, and multiple filter predicates, while keeping all data attributes private, including record timestamps and user-defined values in query predicates. At the core of the TVA system lie novel protocols for secure window assignment: (i) a tumbling window protocol that groups records into fixed-length time buckets and (ii) two session window protocols that identify periods of activity followed by periods of inactivity. We also contribute a new protocol for secure division with a public divisor, which may be of independent interest. We evaluate TVA on real LAN and WAN environments and show that it can efficiently compute complex window-based analytics on inputs of 222 records with modest use of resources. When compared to the state-of-the-art, TVA achieves up to 5.8× lower latency in queries with multiple filters and two orders of magnitude better performance in window aggregation.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/faisal](https://www.usenix.org/conference/usenixsecurity23/presentation/faisal)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-faisal.pdf](https://www.usenix.org/system/files/usenixsecurity23-faisal.pdf)
## Long Live The Honey Badger: Robust Asynchronous DPSS and its Applications.
### Authors
* Thomas Yurek, University of Illinois at Urbana-Champaign, NTT Research, and IC3
* Zhuolun Xiang, Aptos
* Yu Xia, MIT CSAIL and NTT Research
* Andrew Miller, University of Illinois at Urbana-Champaign and IC3
### Abstract
> Secret sharing is an essential tool for many distributed applications, including distributed key generation and multiparty computation. For many practical applications, we would like to tolerate network churn, meaning participants can dynamically enter and leave the pool of protocol participants as they please. Such protocols, called Dynamic-committee Proactive Secret Sharing (DPSS) have recently been studied; however, existing DPSS protocols do not gracefully handle faults: the presence of even one unexpectedly slow node can often slow down the whole protocol by a factor of O(n). In this work, we explore optimally fault-tolerant asynchronous DPSS that is not slowed down by crash faults and even handles byzantine faults while maintaining the same performance. We first introduce the first high-threshold DPSS, which offers favorable characteristics relative to prior non-synchronous works in the presence of faults while simultaneously supporting higher privacy thresholds. We then batch-amortize this scheme along with a parallel non-high-threshold scheme which achieves optimal bandwidth characteristics. We implement our schemes and demonstrate that they can compete with prior work in best-case performance while outperforming it in non-optimal settings.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/yurek](https://www.usenix.org/conference/usenixsecurity23/presentation/yurek)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-yurek.pdf](https://www.usenix.org/system/files/usenixsecurity23-yurek.pdf)
## Powering Privacy: On the Energy Demand and Feasibility of Anonymity Networks on Smartphones.
### Authors
* Daniel Hugenroth, University of Cambridge
* Alastair R. Beresford, University of Cambridge
### Abstract
> Many different anonymity networks have been designed and implemented over the last 20 years. These networks protect communication and metadata through multi-layered encryption and cover traffic. However, there is little research on whether such networks are actually practical on smartphones with limited battery power. This is important as these are the dominant computing devices today.Previous research suggests that cryptographic operations and background radio transmissions are the two main contributors to energy consumption when running such software on mobile devices. We develop and open-source a test setup that measures actual energy consumption, including side-effects that evade simple models. With this setup we explore the costs of cryptography, radio communication, and background operation scheduling. We find that radio communication dominates overall power consumption, while cryptographic operations (asymmetric and symmetric) are negligible for typical anonymity network workloads.We also investigate the feasibility of running anonymity networks continuously to protect the metadata of all communication. For a 12-hour usage period, a mobile Tor client on a 4G network requires an additional 4 percentage points of battery charge which appears practical. It is at least as efficient as the commercial VPN clients that we tested. However, a mix network client that continuously sends cover traffic requires up to 24 percentage points for the same period. These cost are likely to be unacceptable for many users.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/hugenroth](https://www.usenix.org/conference/usenixsecurity23/presentation/hugenroth)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-hugenroth.pdf](https://www.usenix.org/system/files/usenixsecurity23-hugenroth.pdf)
## Eye-Shield: Real-Time Protection of Mobile Device Screen Information from Shoulder Surfing.
### Authors
* Brian Jay Tang, University of Michigan
* Kang G. Shin, University of Michigan
### Abstract
> People use mobile devices ubiquitously for computing, communication, storage, web browsing, and more. As a result, the information accessed and stored within mobile devices, such as financial and health information, text messages, and emails, can often be sensitive. Despite this, people frequently use their mobile devices in public areas, becoming susceptible to a simple yet effective attack — shoulder surfing. Shoulder surfing occurs when a person near a mobile user peeks at the user's mobile device, potentially acquiring passcodes, PINs, browsing behavior, or other personal information. We propose, Eye-Shield, a solution to prevent shoulder surfers from accessing/stealing sensitive on-screen information. Eye-Shield is designed to protect all types of on-screen information in real time, without any serious impediment to users' interactions with their mobile devices. Eye-Shield generates images that appear readable at close distances, but appear blurry or pixelated at farther distances and wider angles. It is capable of protecting on-screen information from shoulder surfers, operating in real time, and being minimally intrusive to the intended users. Eye-Shield protects images and text from shoulder surfers by reducing recognition rates to 24.24% and 15.91%. Our implementations of Eye-Shield achieved high frame rates for 1440 × 3088 screen resolutions (24 FPS for Android and 43 FPS for iOS). Eye-Shield also incurs acceptable memory usage, CPU utilization, and energy overhead. Finally, our MTurk and in-person user studies indicate that Eye-Shield protects on-screen information without a large usability cost for privacy-conscious users.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/tang](https://www.usenix.org/conference/usenixsecurity23/presentation/tang)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-tang_1.pdf](https://www.usenix.org/system/files/usenixsecurity23-tang_1.pdf)
## The OK Is Not Enough: A Large Scale Study of Consent Dialogs in Smartphone Applications.
### Authors
* Simon Koch, TU Braunschweig
* Benjamin Altpeter, Datenanfragen.de e.V.
* Martin Johns, TU Braunschweig
### Abstract
> Mobile applications leaking personal information is a well established observation pre and post GDPR. The legal requirements for personal data collection in the context of tracking are specified by GDPR and the common understanding is, that tracking must be based on proper consent. Studies of the consent dialogs on websites revealed severe issues including dark patterns. However, the mobile space is currently underexplored with initial observations pointing towards a similar state of affairs. To address this research gap we analyze a subset of possible consent dialogs, namely privacy consent dialogs, in 3006 Android and 1773 iOS applications. We show that 22.3% of all apps have any form of dialog with only 11.9% giving the user some form of actionable choice, e.g., at least an accept button. However, this choice is limited as a large proportion of all such dialogs employ some form of dark pattern coercing the user to consent.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/koch](https://www.usenix.org/conference/usenixsecurity23/presentation/koch)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-koch.pdf](https://www.usenix.org/system/files/usenixsecurity23-koch.pdf)
## Notice the Imposter! A Study on User Tag Spoofing Attack in Mobile Apps.
### Authors
* Shuai Li, Fudan University
* Zhemin Yang, Fudan University
* Guangliang Yang, Fudan University
* Hange Zhang, Fudan University
* Nan Hua, Fudan University
* Yurui Huang, Fudan University
* Min Yang, Fudan University
### Abstract
> Recent years have witnessed the rapid development of mobile services, spanning almost every field. To characterize users and provide personalized and targeted services, user tag sharing, which labels users and shares their data, is becoming increasingly popular. Its security attracts more and more attention, and a series of privacy issues have been reported in several specific services. However, up to now, there still lacked a thorough and comprehensive understanding of the characteristics and security of user tag sharing.In this work, we conduct a systematic study of user tag sharing and its security. We first model user tag sharing with three phases, and discover that the privacy security issue commonly exists in practice. We generalize and formalize the privacy issue as user tag spoofing. Then, we propose a novel network-level smart fuzzing approach, called UTSFuzzer, against user tag spoofing. The key idea behind UTSFuzzer is to explore a large number of valid user tag values as input to imitate user tag spoofing against real-world mobile services. By applying UTSFuzzer on a large scale of real-world popular apps, we verify the effectiveness of UTSFuzzer and unveil that 100 mobile apps (including 115 mobile services) are vulnerable to user tag spoofing. The accumulated installations of all affected apps (users) reach more than 413 million. Additionally, UTSFuzzer shows user tag spoofing can cause serious attack efforts, including economic loss and user activity monitoring.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/li-shuai](https://www.usenix.org/conference/usenixsecurity23/presentation/li-shuai)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-li-shuai.pdf](https://www.usenix.org/system/files/usenixsecurity23-li-shuai.pdf)
## Lost in Conversion: Exploit Data Structure Conversion with Attribute Loss to Break Android Systems.
### Authors
* Rui Li, School of Cyber Science and Technology, Shandong University; Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, SDU; The Chinese University of Hong Kong
* Wenrui Diao, School of Cyber Science and Technology, Shandong University; Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, SDU
* Shishuai Yang, School of Cyber Science and Technology, Shandong University; Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, SDU
* Xiangyu Liu, Alibaba Group
* Shanqing Guo, School of Cyber Science and Technology, Shandong University; Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, SDU
* Kehuan Zhang, The Chinese University of Hong Kong
### Abstract
> Inside the operating system, the processing of configuration files tends to be complicated and involves various data operation procedures. On Android, the processing of manifest files (the principal configuration files of Android apps) correlates to multiple core system mechanisms, such as permission and component management. It is widely recognized that improperly configured manifest files can put apps at risk. Even worse, we find that vulnerable configuration data processing can be exploited by crafted manifest files to break the Android system mechanisms, even achieving privilege escalation.In this work, we systematically studied the Android manifest processing procedures and discovered a new category of vulnerabilities called the Evil Twins flaw. In brief, during the processing of twin manifest elements (with the same name but different attributes), the ill-considered data structure conversion (e.g., from List to Map without considering the duplication issue) merges them into one item with attribute loss, further resulting in system configuration inconsistency, i.e., potential security risks. To detect the Evil Twins flaw lying in the Android OS, we designed an automated analysis tool, TwinDroid, to identify the data structure conversions with attribute loss and then manually confirm the vulnerabilities. With TwinDroid, we assessed the code of AOSP Android 11 & 12. Finally, 47 suspicious methods were reported, and four vulnerabilities were identified, which can be exploited to achieve permission escalation and revoking prevention. All discovered vulnerabilities have been acknowledged by Google, and three CVE IDs have been assigned.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/li-rui](https://www.usenix.org/conference/usenixsecurity23/presentation/li-rui)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-li-rui.pdf](https://www.usenix.org/system/files/usenixsecurity23-li-rui.pdf)
## Silent Spring: Prototype Pollution Leads to Remote Code Execution in Node.js.
### Authors
* Mikhail Shcherbakov, KTH Royal Institute of Technology
* Musard Balliu, KTH Royal Institute of Technology
* Cristian-Alex, CISPA Helmholtz Center for Information Security
* ru Staicu, CISPA Helmholtz Center for Information Security
### Abstract
> Prototype pollution is a dangerous  vulnerability affecting prototype-based languages like JavaScript and the Node.js platform. It refers to the ability of an attacker to inject properties into an object's root prototype at runtime and subsequently trigger the execution of legitimate code gadgets that access these properties on the object's prototype, leading to attacks such as Denial of Service (DoS), privilege escalation, and Remote Code Execution (RCE). While there is anecdotal evidence that prototype pollution leads to RCE, current research does not tackle the challenge of gadget detection, thus only showing feasibility of DoS attacks, mainly against Node.js libraries. In this paper, we set out to study the problem in a holistic way, from the detection of prototype pollution to detection of gadgets, with the ambitious goal of finding end-to-end exploits beyond DoS, in full-fledged Node.js applications. We build the first multi-staged framework that uses multi-label static taint analysis to identify prototype pollution in Node.js libraries and applications,  as well as a hybrid approach to detect universal gadgets, notably, by analyzing the Node.js source code.  We implement our framework on top of GitHub's static analysis framework CodeQL to find 11 universal gadgets in core Node.js APIs, leading to code execution. Furthermore, we use our methodology in a study of 15 popular Node.js applications to identify prototype pollutions and gadgets. We manually exploit eight RCE vulnerabilities in three high-profile applications such as NPM CLI, Parse Server, and Rocket.Chat. Our results provide alarming evidence that prototype pollution in combination with powerful universal gadgets lead to RCE in Node.js.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/shcherbakov](https://www.usenix.org/conference/usenixsecurity23/presentation/shcherbakov)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-shcherbakov.pdf](https://www.usenix.org/system/files/usenixsecurity23-shcherbakov.pdf)
## Cookie Crumbles: Breaking and Fixing Web Session Integrity.
### Authors
* Marco Squarcina, TU Wien
* Pedro Adão, Instituto Superior Técnico, ULisboa, Instituto de Telecomunicações
* Lorenzo Veronese, TU Wien
* Matteo Maffei, TU Wien
### Abstract
> Cookies have a long history of vulnerabilities targeting their confidentiality and integrity. To address these issues, new mechanisms have been proposed and implemented in browsers and server-side applications. Notably, improvements to the Secure attribute and cookie prefixes aim to strengthen cookie integrity against network and same-site attackers, whereas SameSite cookies have been touted as the solution to CSRF. On the server, token-based protections are considered an effective defense for CSRF in the synchronizer token pattern variant. In this paper, we question the effectiveness of these protections and study the real-world security implications of cookie integrity issues, showing how security mechanisms previously considered robust can be bypassed, exposing Web applications to session integrity attacks such as session fixation and cross-origin request forgery (CORF). These flaws are not only implementation-specific bugs but are also caused by compositionality issues of security mechanisms or vulnerabilities in the standard. Our research contributed to 12 CVEs, 27 vulnerability disclosures, and updates to the cookie standard. It comprises (i) a thorough cross-browser evaluation of cookie integrity issues, that results in new attacks originating from implementation or specification inconsistencies, and (ii) a security analysis of the top 13 Web frameworks, exposing session integrity vulnerabilities in 9 of them. We discuss our responsible disclosure and propose practical mitigations.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/squarcina](https://www.usenix.org/conference/usenixsecurity23/presentation/squarcina)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-squarcina.pdf](https://www.usenix.org/system/files/usenixsecurity23-squarcina.pdf)
## Minimalist: Semi-automated Debloating of PHP Web Applications through Static Analysis.
### Authors
* Rasoul Jahanshahi, Boston University
* Babak Amin Azad, Stony Brook University
* Nick Nikiforakis, Stony Brook University
* Manuel Egele, Boston University
### Abstract
> As web applications grow more complicated and rely on third-party libraries to deliver new features to their users, they become bloated with unnecessary code. This unnecessary code increases a web application’s attack surface, which can be exploited to steal user data and compromise the underlying web server. One approach to deal with bloated code is the process of selectively removing features that users do not require – debloating. In this paper, we identify the current challenges with debloating web applications and propose a semi-automated static debloating scheme. We implement a prototype of our proposed method, called Minimalist that generates a call-graph for a given PHP web application. Minimalist performs a reachability analysis for the features users require and removes unreachable functions in the analyzed web application. Compared to prior work, Minimalist debloats web applications without relying on heavy runtime instrumentation. Furthermore, the call-graph generated by Minimalist can be reused (in combination with web server logs) to debloat different installations of the same web application. Due to the inherent complexity and highly dynamic nature of the PHP language, Minimalist cannot guarantee the soundness of its call-graph analysis. However, Minimalist follows a best-effort approach to model the majority of PHP features used by popular web applications, such as WordPress, phpMyAdmin, and others. We evaluated Minimalist on 12 versions of four popular PHP web applications with 45 recent security vulnerabilities. We show that Minimalist reduces the size of web applications in our dataset on average by 18% and removes 38% of known vulnerabilities. Our results demonstrate that the principled debloating of web applications can lead to significant security gains without relying on instrumentation mechanisms that degrade the performance of the server.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/jahanshahi](https://www.usenix.org/conference/usenixsecurity23/presentation/jahanshahi)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-jahanshahi.pdf](https://www.usenix.org/system/files/usenixsecurity23-jahanshahi.pdf)
## AnimateDead: Debloating Web Applications Using Concolic Execution.
### Authors
* Babak Amin Azad, Stony Brook University
* Rasoul Jahanshahi, Boston University
* Chris Tsoukaladelis, Stony Brook University
* Manuel Egele, Boston University
* Nick Nikiforakis, Stony Brook University
### Abstract
> Year over year, modern web applications evolve to cater to the needs of many users and support various runtime environments. The ever-growing need to appeal to as many users as possible and the reliance on third-party dependencies comes at the price of code-bloat. Previous research has highlighted the benefits of debloating mechanisms which produce smaller applications, customized to the real needs of their users with significant security improvements. Recognizing the limitations of dynamic and static debloating schemes (including high runtime overhead and lack of accuracy), we propose a hybrid approach based on concolic execution. We developed AnimateDead, a PHP emulator capable of concolic execution and designed a distributed analysis framework around it. By using the readily available web server logs as application entry points, we perform concolic reachability analysis and extract the code-coverage of target web applications in an abstract environment, which allows our results to generalize for all user inputs and database states. We demonstrate that debloating via concolic execution improves the security of web applications by shrinking the size of their code by an average of 47% and reducing critical API calls by 55%, while removing 35-65% of vulnerabilities for historic CVEs. We show that via concolic execution, we can debloat web applications with comparable security improvements of dynamic debloating schemes without suffering from the runtime overhead, and the need for a training phase. Moreover, AnimateDead-debloated web applications reduce the likelihood of breakage by allowing users to perform all actions reachable from the analyzed entry points.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/azad](https://www.usenix.org/conference/usenixsecurity23/presentation/azad)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-azad.pdf](https://www.usenix.org/system/files/usenixsecurity23-azad.pdf)
## NAUTILUS: Automated RESTful API Vulnerability Detection.
### Authors
* Gelei Deng, Nanyang Technological University
* Zhiyi Zhang, CodeSafe Team, Qi An Xin Group Corp.
* Yuekang Li, Nanyang Technological University
* Yi Liu, Nanyang Technological University
* Tianwei Zhang, Nanyang Technological University
* Yang Liu, Nanyang Technological University
* Guo Yu, China Industrial Control Systems Cyber Emergency Response Team
* Dongjin Wang, Institute of Scientific and Technical Information, China Academy of Railway Sciences
### Abstract
> RESTful APIs have become arguably the most prevalent endpoint for accessing web services. Blackbox vulnerability scanners are a popular choice for detecting vulnerabilities in web services automatically. Unfortunately, they suffer from a number of limitations in RESTful API testing. Particularly, existing tools cannot effectively obtain the relations between API operations, and they lack the awareness of the correct sequence of API operations during testing. These drawbacks hinder the tools from requesting the API operations properly to detect potential vulnerabilities. To address this challenge, we propose NAUTILUS, which includes a novel specification annotation strategy to uncover RESTful API vulnerabilities. The annotations encode the proper operation relations and parameter generation strategies for the RESTful service, which assist  NAUTILUS to generate meaningful operation sequences and thus uncover vulnerabilities that require the execution of multiple API operations in the correct sequence. We experimentally compare  NAUTILUS with four state-of-art vulnerability scanners and RESTful API testing tools on six RESTful services. Evaluation results demonstrate that  NAUTILUS can successfully detect an average of 141% more vulnerabilities, and cover 104% more API operations. We also apply NAUTILUS to nine real-world RESTful services, and detected 23 unique 0-day vulnerabilities with 12 CVE numbers, including one remote code execution vulnerability in Atlassian Confluence, and three high-risk vulnerabilities in Microsoft Azure, which can affect millions of users.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/deng-gelei](https://www.usenix.org/conference/usenixsecurity23/presentation/deng-gelei)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-deng-gelei.pdf](https://www.usenix.org/system/files/usenixsecurity23-deng-gelei.pdf)
## "Un-Equal Online Safety?" A Gender Analysis of Security and Privacy Protection Advice and Behaviour Patterns.
### Authors
* Kovila P.L. Coopamootoo, King's College London
* Magdalene Ng, University of Westminster
### Abstract
> There are indications in literature that women do not engage with security and privacy (SP) technologies, meant to keep them safe online, in the same way as men do. To better understand this gender gap, we conduct an online survey with N=604 U.K. participants, to elicit SP advice source preference and usage of SP methods and technologies. We find evidence of un-equal SP access and participation. In particular, advice from intimate and social connections (ISC) is more prevalent among women, while online content is preferred by men. ISC do not closely associate with nor predict the use of SP technologies, whereas online sources (such as online forums, reviews, specialist pages and technology adverts) and training do. Men are also more likely to use multiple advice sources, that enhances the likelihood of using SP technologies. Women are motivated to approach ISC due to their perceptions of the advisor (such as IT related expertise, experience and trustworthiness) while men approach ISC to evaluate options and seek reassurance for their own practices. This research reveals gender norms in SP practice, raises questions about the equity of online safety opportunities and makes recommendations.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/coopamootoo](https://www.usenix.org/conference/usenixsecurity23/presentation/coopamootoo)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-coopamootoo.pdf](https://www.usenix.org/system/files/usenixsecurity23-coopamootoo.pdf)
## "Millions of people are watching you": Understanding the Digital-Safety Needs and Practices of Creators.
### Authors
* Patrawat Samermit, Google
* Anna Turner, Google
* Patrick Gage Kelley, Google
* Tara Matthews, Google
* Vanessia Wu, Google
* Sunny Consolvo, Google
* Kurt Thomas, Google
### Abstract
> Online content creators—who create and share their content on platforms such as Instagram, TikTok, Twitch, and YouTube—are uniquely at-risk of increased digital-safety threats due to their public prominence, the diverse social norms of wide-ranging audiences, and their access to audience members as a valuable resource. We interviewed 23 creators to understand their digital-safety experiences. This includes the security, privacy, and abuse threats they have experienced across multiple platforms and how the threats have changed over time. We also examined the protective practices they have employed to stay safer, including tensions in how they adopt the practices. We found that creators have diverse threat models that take into consideration their emotional, physical, relational, and financial safety. Most adopted protections—including distancing from technology, moderating their communities, and seeking external or social support—only after experiencing a serious safety incident. Lessons from their experiences help us better prepare and protect creators and ensure a diversity of voices are present online.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/samermit](https://www.usenix.org/conference/usenixsecurity23/presentation/samermit)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-samermit.pdf](https://www.usenix.org/system/files/usenixsecurity23-samermit.pdf)
## How Library IT Staff Navigate Privacy and Security Challenges and Responsibilities.
### Authors
* Alan F. Luo, University of Maryland
* Noel Warford, University of Maryland
* Samuel Dooley, University of Maryland
* Rachel Greenstadt, New York University
* Michelle L. Mazurek, University of Maryland
* Nora McDonald, George Mason University
### Abstract
> Libraries provide critical IT services to patrons who lack access to computational and internet resources. We conducted 12 semi-structured interviews with library IT staff to learn about their privacy and security protocols and policies, the challenges they face implementing them, and how this relates to their patrons. We frame our findings using Sen's capabilities approach and find that library IT staff are primarily concerned with protecting their patrons' privacy from threats outside their walls—police, government authorities, and third parties. Despite their dedication to patron privacy, library IT staff frequently have to grapple with complex tradeoffs between providing easy, fluid, full-featured access to Internet technologies or third-party resources, protecting library infrastructure, and ensuring patron privacy.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/luo-alan](https://www.usenix.org/conference/usenixsecurity23/presentation/luo-alan)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-luo-alan.pdf](https://www.usenix.org/system/files/usenixsecurity23-luo-alan.pdf)
## Problematic Advertising and its Disparate Exposure on Facebook.
### Authors
* Muhammad Ali, Northeastern University
* Angelica Goetzen, Max Planck Institute for Software Systems
* Alan Mislove, Northeastern University
* Elissa M. Redmiles, Max Planck Institute for Software Systems
* Piotr Sapiezynski, Northeastern University
### Abstract
> Targeted advertising remains an important part of the free web browsing experience, where advertisers' targeting and personalization algorithms together find the most relevant audience for millions of ads every day. However, given the wide use of advertising, this also enables using ads as a vehicle for problematic content, such as scams or clickbait. Recent work that explores people's sentiments toward online ads, and the impacts of these ads on people's online experiences, has found evidence that online ads can indeed be problematic. Further, there is the potential for personalization to aid the delivery of such ads, even when the advertiser targets with low specificity. In this paper, we study Facebook -- one of the internet's largest ad platforms -- and investigate key gaps in our understanding of problematic online advertising: (a) What categories of ads do people find problematic? (b) Are there disparities in the distribution of problematic ads to viewers? and if so, (c) Who is responsible—advertisers or advertising platforms? To answer these questions, we empirically measure a diverse sample of user experiences with Facebook ads via a 3-month longitudinal panel. We categorize over 32,000 ads collected from this panel (n=132); and survey participants' sentiments toward their own ads to identify four categories of problematic ads. Statistically modeling the distribution of problematic ads across demographics, we find that older people and minority groups are especially likely to be shown such ads. Further, given that 22% of problematic ads had no specific targeting from advertisers, we infer that ad delivery algorithms (advertising platforms themselves) played a significant role in the biased distribution of these ads.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/ali](https://www.usenix.org/conference/usenixsecurity23/presentation/ali)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-ali.pdf](https://www.usenix.org/system/files/usenixsecurity23-ali.pdf)
## One Size Does not Fit All: Quantifying the Risk of Malicious App Encounters for Different Android User Profiles.
### Authors
* Savino Dambra, Norton Research Group
* Leyla Bilge, Norton Research Group
* Platon Kotzias, Norton Research Group
* Yun Shen, NetApp
* Juan Caballero, IMDEA Software Institute
### Abstract
> Previous work has investigated the particularities of security practices within specific user communities defined based on country of origin, age, prior tech abuse, and economic status. Their results highlight that current security solutions that adopt a one-size-fits-all-users approach ignore the differences and needs of particular user communities. However, those works focus on a single community or cluster users into hard-to-interpret sub-populations. In this work, we perform a large-scale quantitative analysis of the risk of encountering malware and other potentially unwanted applications (PUA) across user communities. At the core of our study is a dataset of app installation logs collected from 12M Android mobile devices. Leveraging user-installed apps, we define intuitive profiles based on users’ interests (e.g., gamers and investors), and fit a subset of 5.4M devices to those profiles. Our analysis is structured in three parts. First, we perform risk analysis on the whole population to measure how the risk of malicious app encounters is affected by different factors. Next, we create different profiles to investigate whether risk differences across users may be due to their interests. Finally, we compare a per-profile approach for classifying clean and infected devices with the classical approach that considers the whole population. We observe that features such as the diversity of the app signers and the use of alternative markets highly correlate with the risk of malicious app encounters. We also discover that some profiles such as gamers and social-media users are exposed to more than twice the risks experienced by the average users. We also show that the classification outcome has a marked accuracy improvement when using a per-profile approach to train the prediction models. Overall, our results confirm the inadequacy of one-size-fits-all protection solutions.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/dambra](https://www.usenix.org/conference/usenixsecurity23/presentation/dambra)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-dambra.pdf](https://www.usenix.org/system/files/usenixsecurity23-dambra.pdf)
## How Effective is Multiple-Vantage-Point Domain Control Validation?
### Authors
* Grace H. Cimaszewski, Princeton University
* Henry Birge-Lee, Princeton University
* Liang Wang, Princeton University
* Jennifer Rexford, Princeton University
* Prateek Mittal, Princeton University
### Abstract
> Multiple-vantage-point domain control validation (multiVA) is an emerging defense for mitigating BGP hijacks against Web PKI certificate authorities. While adoption of multiVA is growing, little work has quantified its effectiveness against BGP hijacks in the wild. We bridge the gap by presenting the first analysis framework that measures the security of multiVA deployment under a confluence of real-world routing and networking practices (namely, DNS and RPKI). Our framework accurately models the attack surface of multiVA by 1) considering attacks on DNS nameservers involved in domain validation, 2) incorporating deployed practical security techniques such as RPKI, 3) performing fine-grained Internet-scale analysis to compute resilience (i.e., how difficult it is to launch a BGP hijack against a domain and get a bogus certificate under multiVA). We apply our framework to perform a rigorous security analysis of the multiVA deployment of Let's Encrypt, compiling a dataset of 31 billion DNS queries for about 1 million domains over the course of four months. Our analysis shows that while DNS does enlarge the attack surface of multiVA, Let's Encrypt's multiVA deployment still offers an 88% median resilience against BGP hijacks, a notable improvement over the 76% resilience offered by single-vantage-point validation. RPKI, even in its current state of partial deployment, effectively mitigates BGP attacks and improves security of the deployment by 15%. Exploring over 11,000 different multiVA configurations, we find that Let's Encrypt's deployment can be further expanded to achieve a resilience of over 97% with only two additional vantage points in different public cloud providers. In addition to adding these vantage points, moving to a full quorum policy can achieve a maximal resilience of over 99%, motivating a rethinking of multiVA design parameters.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/cimaszewski](https://www.usenix.org/conference/usenixsecurity23/presentation/cimaszewski)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-cimaszewski.pdf](https://www.usenix.org/system/files/usenixsecurity23-cimaszewski.pdf)
## Bypassing Tunnels: Leaking VPN Client Traffic by Abusing Routing Tables.
### Authors
* Nian Xue, New York University
* Yashaswi Malla, New York University Abu Dhabi
* Zihang Xia, New York University Abu Dhabi
* Christina Pöpper, New York University Abu Dhabi
* Mathy Vanhoef, imec-DistriNet, KU Leuven
### Abstract
> Virtual Private Networks (VPNs) authenticate and encrypt network traffic to protect users’ security and privacy, and are used in professional and personal settings to defend against malicious actors, circumvent censorship, remotely work from home, etc. It is therefore essential that VPNs are secure. In this paper, we present two novel attacks that cause VPN clients to leak traffic outside the protected VPN tunnel. The root cause of both attacks is a widespread design flaw in how clients configure the Operating System (OS) to route all traffic through the VPN tunnel. This is typically done by updating the system’s IP routing tables such that all traffic will first pass through the VPN client. However, some routing exceptions are added to ensure the system keeps functioning properly, namely that traffic to the local network, and to the VPN server itself, is sent outside the VPN tunnel. We show that by setting up a Wi-Fi access point or by spoofing DNS responses, an adversary can manipulate these exceptions to make the victim send arbitrary traffic in plaintext outside the VPN tunnel. We confirm our findings in practice by conducting 248 experiments against 67 of the most representative VPN providers on Windows, macOS, iOS, Linux, and Android. Our experimental results reveal that a significant number (126 and 39) and proportion (64.6% and 73.6%) of free, paid, open-source, corporate, and built-in VPN clients are vulnerable to (variants of) our two attacks respectively, suffering from leaky traffic. We discuss countermeasures to mitigate the vulnerabilities and confirm the effectiveness of selected defenses in practice.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/xue](https://www.usenix.org/conference/usenixsecurity23/presentation/xue)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-xue.pdf](https://www.usenix.org/system/files/usenixsecurity23-xue.pdf)
## Back to School: On the (In)Security of Academic VPNs.
### Authors
* Ka Lok Wu, The Chinese University of Hong Kong
* Man Hong Hue, The Chinese University of Hong Kong and Georgia Institute of Technology
* Ngai Man Poon, The Chinese University of Hong Kong
* Kin Man Leung, The University of British Columbia
* Wai Yin Po, The Chinese University of Hong Kong
* Kin Ting Wong, The Chinese University of Hong Kong
* Sze Ho Hui, The Chinese University of Hong Kong
* Sze Yiu Chau, The Chinese University of Hong Kong
### Abstract
> In this paper, we investigate the security of academic VPNs around the globe, covering various protocols that are used to realize VPN services. Our study considers 3 aspects that can go wrong in a VPN setup, which include (i) the design and implementation of VPN front-ends, (ii) the client-side configurations, and (iii) the back-end configurations. For (i), we tested more than 140 front-ends, and discovered numerous design and implementation issues that enable stealthy but severe attacks, including credential theft and remote code execution. For (ii), we collected and evaluated 2097 VPN setup guides from universities, and discovered many instances of secret key leakage and lack of consideration to potential attacks, leaving many client-side setups vulnerable. Finally, for (iii), we probed more than 2000 VPN back-ends to evaluate their overall health, and uncovered some concerning configuration and maintenance issues on many of them. Our findings suggest that severe cracks exist in the VPN setups of many organizations, making them profitable targets for criminals.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/wu-ka-lok](https://www.usenix.org/conference/usenixsecurity23/presentation/wu-ka-lok)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-wu-ka-lok.pdf](https://www.usenix.org/system/files/usenixsecurity23-wu-ka-lok.pdf)
## FABRID: Flexible Attestation-Based Routing for Inter-Domain Networks.
### Authors
* Cyrill Krähenbühl, ETH Zürich
* Marc Wyss, ETH Zürich
* David Basin, ETH Zürich
* Vincent Lenders, armasuisse
* Adrian Perrig, ETH Zürich
* Martin Strohmeier, armasuisse
### Abstract
> In its current state, the Internet does not provide end users with transparency and control regarding on-path forwarding devices. In particular, the lack of network device information reduces the trustworthiness of the forwarding path and prevents end-user applications requiring specific router capabilities from reaching their full potential. Moreover, the inability to influence the traffic's forwarding path results in applications communicating over undesired routes, while alternative paths with more desirable properties remain unusable. In this work, we present FABRID, a system that enables applications to forward traffic flexibly, potentially on multiple paths selected to comply with user-defined preferences, where information about forwarding devices is exposed and transparently attested by autonomous systems (ASes). The granularity of this information is chosen by each AS individually, protecting them from leaking sensitive network details, while the secrecy and authenticity of preferences embedded within the users' packets are protected through efficient cryptographic operations. We show the viability of FABRID by deploying it on a global SCION network test bed, and we demonstrate high throughput on commodity hardware.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/krahenbuhl](https://www.usenix.org/conference/usenixsecurity23/presentation/krahenbuhl)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-krahenbuhl.pdf](https://www.usenix.org/system/files/usenixsecurity23-krahenbuhl.pdf)
## "All of them claim to be the best": Multi-perspective study of VPN users and VPN providers.
### Authors
* Reethika Ramesh, University of Michigan
* Anjali Vyas, Cornell Tech
* Roya Ensafi, University of Michigan
### Abstract
> As more users adopt VPNs for a variety of reasons, it is important to develop empirical knowledge of their needs and mental models of what a VPN offers. Moreover, studying VPN users alone is not enough because, by using a VPN, a user essentially transfers trust, say from their network provider, onto the VPN provider. To that end, we are the first to study the VPN ecosystem from both the users' and the providers' perspectives. In this paper, we conduct a quantitative survey of 1,252 VPN users in the U.S. and qualitative interviews of nine providers to answer several research questions regarding the motivations, needs, threat model, and mental model of users, and the key challenges and insights from VPN providers. We create novel insights by augmenting our multi-perspective results, and highlight cases where the user and provider perspectives are misaligned. Alarmingly, we find that users rely on and trust VPN review sites, but VPN providers shed light on how these sites are mostly motivated by money. Worryingly, we find that users have flawed mental models about the protection VPNs provide, and about data collected by VPNs. We present actionable recommendations for technologists and security and privacy advocates by identifying potential areas on which to focus efforts and improve the VPN ecosystem.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/ramesh-vpn](https://www.usenix.org/conference/usenixsecurity23/presentation/ramesh-vpn)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-ramesh-vpn.pdf](https://www.usenix.org/system/files/usenixsecurity23-ramesh-vpn.pdf)
## Greenhouse: Single-Service Rehosting of Linux-Based Firmware Binaries in User-Space Emulation.
### Authors
* Hui Jun Tay, Arizona State University
* Kyle Zeng, Arizona State University
* Jayakrishna Menon Vadayath, Arizona State University
* Arvind S Raj, Arizona State University
* Audrey Dutcher, Arizona State University
* Tejesh Reddy, Arizona State University
* Wil Gibbs, Arizona State University
* Zion Leonahenahe Basque, Arizona State University
* Fangzhou Dong, Arizona State University
* Zack Smith, Arizona State University
* Adam Doupé, Arizona State University
* Tiffany Bao, Arizona State University
* Yan Shoshitaishvili, Arizona State University
* Ruoyu Wang, Arizona State University
### Abstract
> As IoT devices grow more widespread, scaling current analysis techniques to match becomes an increasingly critical task. Part of this challenge involves not only rehosting the firmware of these embedded devices in an emulated environment, but to do so and discover real vulnerabilities. Current state-of-the-art approaches for rehosting must account for the discrepancies between emulated and physical devices, and thus generally focus on improving the emulation fidelity. However, this pursuit of fidelity ignores other potential solutions. In this paper, we propose a novel rehosting technique, user-space single-service rehosting, which emulates a single firmware service in user space. We study the rehosting process involved in hundreds of firmware samples to generalize a set of roadblocks that prevent emulation and create interventions to resolve them. Our prototype Greenhouse automatically rehosts 2,841 (39.7%) of our collected 7,140 firmware images from nine different vendors. Our approach sidesteps many of the challenges encountered by previous rehosting techniques and enables us to apply common vulnerability discovery techniques to our rehosted images such as user-space coverage-guided fuzzing. Using these techniques, we find 717 N-day vulnerabilities and 26 zero-day vulnerabilities on a subset of our rehosted firmware services.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/tay](https://www.usenix.org/conference/usenixsecurity23/presentation/tay)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-tay.pdf](https://www.usenix.org/system/files/usenixsecurity23-tay.pdf)
## FuncTeller: How Well Does eFPGA Hide Functionality?
### Authors
* Zhaokun Han, Texas A&M University
* Mohammed Shayan, The University of Texas at Dallas
* Aneesh Dixit, Texas A&M University
* Mustafa Shihab, The University of Texas at Dallas
* Yiorgos Makris, The University of Texas at Dallas
* Jeyavijayan (JV) Rajendran, Texas A&M University
### Abstract
> Hardware intellectual property (IP) piracy is an emerging threat to the global supply chain. Correspondingly, various countermeasures aim to protect hardware IPs, such as logic locking, camouflaging, and split manufacturing. However, these countermeasures cannot always guarantee IP security. A malicious attacker can access the layout/netlist of the hardware IP protected by these countermeasures and further retrieve the design. To eliminate/bypass these vulnerabilities, a recent approach redacts the design's IP to an embedded field-programmable gate array (eFPGA), disabling the attacker's access to the layout/netlist. eFPGAs can be programmed with arbitrary functionality. Without the bitstream, the attacker cannot recover the functionality of the protected IP. Consequently, state-of-the-art attacks are inapplicable to pirate the redacted hardware IP. In this paper, we challenge the assumed security of eFPGA-based redaction. We present an attack to retrieve the hardware IP with only black-box access to a programmed eFPGA. We observe the effect of modern electronic design automation (EDA) tools on practical hardware circuits and leverage the observation to guide our attack. Thus, our proposed method FuncTeller selects minterms to query, recovering the circuit function within a reasonable time. We demonstrate the effectiveness and efficiency of FuncTeller on multiple circuits, including academic benchmark circuits, Stanford MIPS processor, IBEX processor, Common Evaluation Platform GPS, and Cybersecurity Awareness Worldwide competition circuits. Our results show that FuncTeller achieves an average accuracy greater than 85% over these tested circuits retrieving the design's functionality.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/han-zhaokun](https://www.usenix.org/conference/usenixsecurity23/presentation/han-zhaokun)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-han-zhaokun.pdf](https://www.usenix.org/system/files/usenixsecurity23-han-zhaokun.pdf)
## ACFA: Secure Runtime Auditing & Guaranteed Device Healing via Active Control Flow Attestation.
### Authors
* Adam Caulfield, Rochester Institute of Technology
* Norrathep Rattanavipanon, Prince of Songkla University, Phuket Campus
* Ivan De Oliveira Nunes, Rochester Institute of Technology
### Abstract
> Embedded devices are increasingly used in a wide range of “smart” applications and spaces. At the lower-end of the scale, they are implemented under strict cost and energy budgets, using microcontroller units (MCUs) that lack security features akin to those available in general-purpose processors. In this context, Remote Attestation (RA) was proposed as an inexpensive security service that enables a verifier (Vrf) to remotely detect illegal modifications to the software binary installed on a prover MCU (Prv). Despite its effectiveness to validate Prv's binary integrity, attacks that hijack the software's control flow (potentially leading to privilege escalation or code reuse attacks) cannot be detected by classic RA.Control Flow Attestation (CFA) augments RA with information about the exact order in which instructions in the binary are executed. As such, CFA enables detection of the aforementioned control flow attacks. However, we observe that current CFA architectures cannot guarantee that Vrf ever receives control flow reports in case of attacks. In turn, while they support detection of exploits, they provide no means to pinpoint the exploit origin. Furthermore, existing CFA requires either (1) binary instrumentation, incurring significant runtime overhead and code size increase; or (2) relatively expensive hardware support, such as hash engines. In addition, current techniques are neither continuous (they are only meant to attest small and self-contained operations) nor active (once compromises are detected, they offer no secure means to remotely remediate the problem).To jointly address these challenges, we propose ACFA: a hybrid (hardware/software) architecture for Active CFA. ACFA enables continuous monitoring of all control flow transfers in the MCU and does not require binary instrumentation. It also leverages the recently proposed concept of “active roots-of-trust” to enable secure auditing of vulnerability sources and guaranteed remediation, in case of compromise detection. We provide an open-source reference implementation of ACFA on top of a commodity low-end MCU (TI MSP430) and evaluate it to demonstrate its security and cost-effectiveness.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/caulfield](https://www.usenix.org/conference/usenixsecurity23/presentation/caulfield)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-caulfield.pdf](https://www.usenix.org/system/files/usenixsecurity23-caulfield.pdf)
## Fuzz The Power: Dual-role State Guided Black-box Fuzzing for USB Power Delivery.
### Authors
* Kyungtae Kim, Purdue University
* Sungwoo Kim, Purdue University
* Kevin R. B. Butler, University of Florida
* Antonio Bianchi, Purdue University
* Rick Kennell, Purdue University
* Dave (Jing) Tian, Purdue University
### Abstract
> USB Power Delivery (USBPD) is a state-of-the-art charging protocol for advanced power supply. Thanks to its high volume of power supply, it has been widely adopted by consumer devices, such as smartphones and laptops, and has become the de facto USB charging standard in both EU and North America. Due to the low-level nature of charging and the complexity of the protocol, USBPD is often implemented as proprietary firmware running on a dedicated microcontroller unit (MCU) with a USBPD physical layer. Bugs within these implementations can not only lead to safety issues, e.g., over-charging, but also cause security issues, such as allowing attackers to reflash USBPD firmware.This paper proposes FUZZPD, the first black-box fuzzing technique with dual-role state guidance targeting off-the-shelf USBPD devices with closed-source USBPD firmware. FUZZPD only requires a physical USB Type-C connection to operate in a plug-n-fuzz fashion. To facilitate the black-box fuzzing of USBPD firmware, FUZZPD manually creates a dual-role state machine from the USBPD specification, which enables both state coverage and transitions from fuzzing inputs. FUZZPD further provides a multi-level mutation strategy, allowing for fine-grained state-aware fuzzing with intra- and inter-state mutations. We implement FUZZPD using a Chromebook as the fuzzing host and evaluate it against 12 USBPD mobile devices from 7 different vendors, 7 USB hubs from 7 different vendors, and 5 chargers from 5 different vendors. FUZZPD has found 15 unique bugs, 9 of which have been confirmed by the corresponding vendors. We additionally conduct a comparison between FUZZPD and multiple state-of-the-art black-box fuzzing techniques, demonstrating that FUZZPD achieves code coverage that is 40% to 3x higher than other solutions. We then compare FUZZPD with the USBPD compliance test suite from USBIF and show that FUZZPD can find 7 more bugs with 2x higher code coverage. FUZZPD is the first step towards secure and trustworthy USB charging.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/kim-kyungtae](https://www.usenix.org/conference/usenixsecurity23/presentation/kim-kyungtae)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-kim-kyungtae.pdf](https://www.usenix.org/system/files/usenixsecurity23-kim-kyungtae.pdf)
## The Impostor Among US(B): Off-Path Injection Attacks on USB Communications.
### Authors
* Robert Dumitru, The University of Adelaide and Defence Science and Technology Group
* Daniel Genkin, Georgia Tech
* Andrew Wabnitz, Defence Science and Technology Group
* Yuval Yarom, The University of Adelaide
### Abstract
> USB is the most prevalent peripheral interface in modern computer systems and its inherent insecurities make it an appealing attack vector. A well-known limitation of USB is that traffic is not encrypted. This allows on-path adversaries to trivially perform man-in-the-middle attacks. Off-path attacks that  compromise the confidentiality of communications have also been shown to be possible. However, so far no off-path attacks that breach USB communications integrity have been demonstrated. In this work we show that the integrity of USB communications is not guaranteed even against off-path attackers. Specifically, we design and build malicious devices that, even when placed outside of the path between a victim device and the host, can inject data to that path. Using our developed injectors we can falsify the provenance of data input as interpreted by a host computer system. By injecting on behalf of trusted victim devices we can circumvent any software-based authorisation policy defences that computer systems employ against common USB attacks. We demonstrate two concrete attacks. The first injects keystrokes allowing an attacker to execute commands. The second demonstrates file-contents replacement including during system install from a USB disk. We test the attacks on 29 USB 2.0 and USB 3.x hubs and find 14 of them to be vulnerable.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/dumitru](https://www.usenix.org/conference/usenixsecurity23/presentation/dumitru)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-dumitru.pdf](https://www.usenix.org/system/files/usenixsecurity23-dumitru.pdf)
## A comprehensive, formal and automated analysis of the EDHOC protocol.
### Authors
* Charlie Jacomme, Inria Paris
* Elise Klein, Inria Nancy and Université de Lorraine
* Steve Kremer, Inria Nancy and Université de Lorraine
* Maïwenn Racouchot, Inria Nancy and Université de Lorraine
### Abstract
> EDHOC is a key exchange proposed by IETF’s Lightweight Authenticated Key Exchange (LAKE) Working Group (WG). Its design focuses on small message sizes to be suitable for constrained IoT communication technologies. In this paper we provide an in-depth formal analysis of EDHOC–draft version 12, taking into account the different proposed authentication methods and various options. For our analysis we use the SAPIC+ protocol platform that allows to compile a single specification to 3 state-of-the-art protocol verification tools (PROVERIF, TAMARIN and DEEPSEC) and take advantage of the strengths of each of the tools. In our analysis we consider a large variety of compromise scenarios, and also exploit recent results that allow to model existing weaknesses in cryptographic primitives, relaxing the perfect cryptography assumption, common in symbolic analysis. While our analysis confirmed security for the most basic threat models, a number of weaknesses were uncovered in the current design when more advanced threat models were taken into account. These weaknesses have been acknowledged by the LAKE WG and the mitigations we propose (and prove secure) have been included in version 14 of the draft.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/jacomme](https://www.usenix.org/conference/usenixsecurity23/presentation/jacomme)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-jacomme.pdf](https://www.usenix.org/system/files/usenixsecurity23-jacomme.pdf)
## Hash Gone Bad: Automated discovery of protocol attacks that exploit hash function weaknesses.
### Authors
* Vincent Cheval, Inria Paris
* Cas Cremers, CISPA Helmholtz Center for Information Security
* Alex, CISPA Helmholtz Center for Information Security
* er Dax, CISPA Helmholtz Center for Information Security
* Lucca Hirschi, Inria & LORIA
* Charlie Jacomme, Inria Paris
* Steve Kremer, Université de Lorraine, LORIA, Inria Nancy Grand-Est
### Abstract
> Most cryptographic protocols use cryptographic hash functions as a building block. The security analyses of these protocols typically assume that the hash functions are perfect (such as in the random oracle model). However, in practice, most widely deployed hash functions are far from perfect -- and as a result, the analysis may miss attacks that exploit the gap between the model and the actual hash function used. We develop the first methodology to systematically discover attacks on security protocols that exploit weaknesses in widely deployed hash functions. We achieve this by revisiting the gap between theoretical properties of hash functions and the weaknesses of real-world hash functions, from which we develop a lattice of threat models. For all of these threat models, we develop fine-grained symbolic models. Our methodology's fine-grained models cannot be directly encoded in existing state-of-the-art analysis tools by just using their equational reasoning. We therefore develop extensions for the two leading tools, Tamarin and Proverif. In extensive case studies using our methodology, the extended tools rediscover all attacks that were previously reported for these protocols and discover several new variants.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/cheval](https://www.usenix.org/conference/usenixsecurity23/presentation/cheval)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-cheval.pdf](https://www.usenix.org/system/files/usenixsecurity23-cheval.pdf)
## How fast do you heal? A taxonomy for post-compromise security in secure-channel establishment.
### Authors
* Olivier Blazy, LIX, CNRS, Inria, École Polytechnique, Institut Polytechnique de Paris, France
* Ioana Boureanu, University of Surrey, Surrey Centre for Cyber Security, UK
* Pascal Lafourcade, LIMOS, University of Clermont Auvergne, France
* Cristina Onete, XLIM, University of Limoges, France
* Léo Robert, LIMOS, University of Clermont Auvergne, France
### Abstract
> Post-Compromise Security (PCS) is a property of secure-channel establishment schemes, which limits the security breach of an adversary that has compromised one of the endpoint to a certain number of messages, after which the channel heals. An attractive property, especially in view of Snowden’s revelation of mass-surveillance, PCS was pioneered by the Signal messaging protocol, and is present in OTR. In this paper, we introduce a framework for quantifying and comparing PCS security, with respect to a broad taxonomy of adversaries. The generality and flexibility of our approach allows us to model the healing speed of a broad class of protocols, including Signal, but also an identity-based messaging protocol named SAID, and even a composition of 5G handover protocols.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/blazy](https://www.usenix.org/conference/usenixsecurity23/presentation/blazy)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-blazy.pdf](https://www.usenix.org/system/files/usenixsecurity23-blazy.pdf)
## Automated Analysis of Protocols that use Authenticated Encryption: How Subtle AEAD Differences can impact Protocol Security.
### Authors
* Cas Cremers, CISPA Helmholtz Center for Information Security
* Alex, CISPA Helmholtz Center for Information Security and Saarland University
* er Dax, CISPA Helmholtz Center for Information Security and Saarland University
* Charlie Jacomme, Inria Paris
* Mang Zhao, CISPA Helmholtz Center for Information Security and Saarland University
### Abstract
> Many modern security protocols such as TLS, WPA2, WireGuard, and Signal use a cryptographic primitive called Authenticated Encryption (optionally with Authenticated Data), also known as an AEAD scheme. AEAD is a variant of symmetric encryption that additionally provides authentication. While authentication may seem to be a straightforward additional requirement, it has in fact turned out to be complex: many different security notions for AEADs are still being proposed, and several recent protocol-level attacks exploit subtle behaviors that differ among real-world AEAD schemes.We provide the first automated analysis method for protocols that use AEADs that can systematically find attacks that exploit the subtleties of the specific type of AEAD used. This can then be used to analyze specific protocols with a fixed AEAD choice, or to provide guidance on which AEADs might be (in)sufficient to make a protocol design secure. We develop generic symbolic AEAD models, which we instantiate for the Tamarin prover. Our approach can automatically and efficiently discover protocol attacks that could previously only be found using manual inspection, such as the Salamander attack on Facebook's message franking, and attacks on SFrame and YubiHSM. Furthermore, our analysis reveals undesirable behaviors of several other protocols based on AEAD subtleties.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/cremers-protocols](https://www.usenix.org/conference/usenixsecurity23/presentation/cremers-protocols)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-cremers-protocols.pdf](https://www.usenix.org/system/files/usenixsecurity23-cremers-protocols.pdf)
## High Recovery with Fewer Injections: Practical Binary Volumetric Injection Attacks against Dynamic Searchable Encryption.
### Authors
* Xianglong Zhang, Huazhong University of Science and Technology
* Wei Wang, Huazhong University of Science and Technology
* Peng Xu, Huazhong University of Science and Technology and Hubei Key Laboratory of Distributed System Security
* Laurence T. Yang, Huazhong University of Science and Technology and St. Francis Xavier University
* Kaitai Liang, Delft University of Technology
### Abstract
> Searchable symmetric encryption enables private queries over an encrypted database, but it can also result in information leakages. Adversaries can exploit these leakages to launch injection attacks (Zhang et al., USENIX Security'16) to recover the underlying keywords from queries. The performance of the existing injection attacks is strongly dependent on the amount of leaked information or injection. In this work, we propose two new injection attacks, namely  BVA and BVMA, by leveraging a binary volumetric approach. We enable adversaries to inject fewer files than the existing volumetric attacks by using the known keywords and reveal the queries by observing the volume of the query results. Our attacks can thwart well-studied defenses (e.g., threshold countermeasure, padding) without exploiting the distribution of target queries and client databases. We evaluate the proposed attacks empirically in real-world datasets with practical queries. The results show that our attacks can obtain a high recovery rate (> 80%) in the best-case scenario and a roughly 60% recovery even under a large-scale dataset with a small number of injections (< 20 files).
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-xianglong](https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-xianglong)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-zhang-xianglong.pdf](https://www.usenix.org/system/files/usenixsecurity23-zhang-xianglong.pdf)
## Cross Container Attacks: The Bewildered eBPF on Clouds.
### Authors
* Yi He, Tsinghua University and BNRist
* Rol, Tsinghua University and BNRist
* Guo, Tsinghua University and BNRist
* Yunlong Xing, George Mason University
* Xijia Che, Tsinghua University and BNRist
* Kun Sun, George Mason University
* Zhuotao Liu, Tsinghua University
* Ke Xu, Tsinghua University
* Qi Li, Tsinghua University
### Abstract
> The extended Berkeley Packet Filter (eBPF) provides powerful and flexible kernel interfaces to extend the kernel functions for user space programs via running bytecode directly in the kernel space. It has been widely used by cloud services to enhance container security, network management, and system observability. However, we discover that the offensive eBPF that have been extensively discussed in Linux hosts can bring new attack surfaces to containers. With eBPF tracing features, attackers can break the container's isolation and attack the host, e.g., steal sensitive data, DoS, and even escape the container. In this paper, we study the eBPF-based cross container attacks and reveal their security impacts in real world services. With eBPF attacks, we successfully compromise five online Jupyter/Interactive Shell services and the Cloud Shell of Google Cloud Platform. Furthermore, we find that the Kubernetes services offered by three leading cloud vendors can be exploited to launch cross-node attacks after the attackers escape the container via eBPF. Specifically, in Alibaba's Kubernetes services, attackers can compromise the whole cluster by abusing their over-privileged cloud metrics or management Pods. Unfortunately, the eBPF attacks on containers are seldom known and can hardly be discovered by existing intrusion detection systems. Also, the existing eBPF permission model cannot confine the eBPF and ensure secure usage in shared-kernel container environments. To this end, we propose a new eBPF permission model to counter the eBPF attacks in containers.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/he](https://www.usenix.org/conference/usenixsecurity23/presentation/he)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-he.pdf](https://www.usenix.org/system/files/usenixsecurity23-he.pdf)
## DScope: A Cloud-Native Internet Telescope.
### Authors
* Eric Pauley, University of Wisconsin–Madison
* Paul Barford, University of Wisconsin–Madison
* Patrick McDaniel, University of Wisconsin–Madison
### Abstract
> Data from Internet telescopes that monitor routed but unused IP address space has been the basis for myriad insights on malicious, unwanted, and unexpected behavior. However, service migration to cloud infrastructure and the increasing scarcity of IPv4 address space present serious challenges to traditional Internet telescopes. This paper describes DScope, a cloud-based Internet telescope designed to be scalable and interactive. We describe the design and implementation of DScope, which includes two major components. Collectors are deployed on cloud VMs, interact with incoming connection requests, and capture pcap traces. The data processing pipeline organizes, transforms, and archives the pcaps from deployed collectors for post-facto analysis. In comparing a sampling of DScope's collected traffic with that of a traditional telescope, we see a striking difference in both the quantity and phenomena of behavior targeting cloud systems, with up to 450x as much cloud-targeting as expected under random scanning. We also show that DScope's adaptive approach achieves impressive price performance: optimal yield of scanners on a given IP address is achieved in under 8 minutes of observation. Our results demonstrate that cloud-based telescopes achieve a significantly broader and more comprehensive perspective than traditional techniques.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/pauley](https://www.usenix.org/conference/usenixsecurity23/presentation/pauley)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-pauley.pdf](https://www.usenix.org/system/files/usenixsecurity23-pauley.pdf)
## Credit Karma: Understanding Security Implications of Exposed Cloud Services through Automated Capability Inference.
### Authors
* Xueqiang Wang, University of Central Florida
* Yuqiong Sun, Meta
* Susanta N, ServiceNow
* a, ServiceNow
* XiaoFeng Wang, Indiana University Bloomington
### Abstract
> The increasing popularity of mobile applications (apps) has led to a rapid increase in demand for backend services, such as notifications, data storage, authentication, etc., hosted in cloud platforms.  This has induced the attackers to consistently target such cloud services, resulting in a rise in data security incidents. In this paper, we focus on one of the main reasons why cloud services become increasingly vulnerable: (over-)privileges in cloud credentials.  We propose a systematic approach to recover cloud credentials from apps, infer their capabilities in cloud, and verify if the capabilities exceed the legitimate needs of the apps.  We further look into the security implications of the leaked capabilities, demonstrating how seemingly benevolent, unprivileged capabilities, when combined, can lead to unexpected, severe security problems.  A large-scale study of ~1.3 million apps over two types of cloud services, notification and storage, on three popular cloud platforms, AWS, Azure, and Alibaba Cloud, shows that ~27.3% of apps that use cloud services expose over-privileged cloud credentials.  Moreover, a majority of over-privileged cloud credentials (~64.8%) potentially lead to data attacks.  During the study, we also uncover new types of attacks enabled by regular cloud credentials, such as spear-phishing through push notification and targeted user data pollution. We have made responsible disclosures to both app vendors and cloud providers and start seeing the impact---over 300 app vendors already fixed the problems.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/wang-xueqiang-karma](https://www.usenix.org/conference/usenixsecurity23/presentation/wang-xueqiang-karma)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-wang-xueqiang-karma.pdf](https://www.usenix.org/system/files/usenixsecurity23-wang-xueqiang-karma.pdf)
## Detecting Multi-Step IAM Attacks in AWS Environments via Model Checking.
### Authors
* Ilia Shevrin, Citi
* Oded Margalit, Ben-Gurion University
### Abstract
> Cloud services enjoy a surging popularity among IT professionals, owing to their rapid provision of virtual infrastructure on demand. Hand-in-hand with the growing usage, there is also a growing concern about potential security vulnerabilities arising from misconfigurations, exposing resources or allowing malicious actors to escalate privileges. Model checking is a known method for verifying that a finite-state Boolean model of a system satisfies certain properties, where the model and the properties are described in formal logic. In case it doesn’t, a finite trace leading to a violating state can be generated. In this paper, we present an approach to construct a finite-state Boolean model from the Identity and Access Management (IAM) component of Amazon Web Services (AWS), and a property from an attack target, e.g., read a classified S3 bucket object. We run a model checker that detects whether some initial setup allows an attacker to escalate privileges and reach the target in one or more steps by applying IAM manipulating actions. We show that our approach can discover existing misconfigurations in real AWS environments, and that it can detect multi-step attacks in setups containing tens of AWS accounts with hundreds of resources in under a minute.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/shevrin](https://www.usenix.org/conference/usenixsecurity23/presentation/shevrin)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-shevrin.pdf](https://www.usenix.org/system/files/usenixsecurity23-shevrin.pdf)
## Remote Direct Memory Introspection.
### Authors
* Hongyi Liu, Rice University
* Jiarong Xing, Rice University
* Yibo Huang, Rice University
* Danyang Zhuo, Duke University
* Srinivas Devadas, Massachusetts Institute of Technology
* Ang Chen, Rice University
### Abstract
> Hypervisors have played a critical role in cloud security, but they introduce a large trusted computing base (TCB) and incur a heavy performance tax. As of late, hypervisor offloading has become an emerging trend, where privileged functions are sunk into specially-designed hardware devices (e.g., Amazon's Nitro, AMD's Pensando) for better security with closer-to-baremetal performance.In light of this trend, this project rearchitects a classic security task that is often relegated to the hypervisor, memory introspection, while only using widely-available devices. Remote direct memory introspection (RDMI) couples two types of commodity programmable devices in a novel defense platform. It uses RDMA NICs for efficient memory access and programmable network devices for efficient computation, both operating at ASIC speeds. RDMI also provides a declarative language for users to articulate the introspection task, and its compiler automatically lowers the task to the hardware substrate for execution. Our evaluation shows that RDMI can protect baremetal machines without requiring a hypervisor, introspecting kernel state and detecting rootkits at high frequency and zero CPU overhead.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/liu-hongyi](https://www.usenix.org/conference/usenixsecurity23/presentation/liu-hongyi)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-liu-hongyi.pdf](https://www.usenix.org/system/files/usenixsecurity23-liu-hongyi.pdf)
## Auditing Framework APIs via Inferred App-side Security Specifications.
### Authors
* Parjanya Vyas, University of Waterloo
* Asim Waheed, University of Waterloo
* Yousra Aafer, University of Waterloo
* N. Asokan, University of Waterloo
### Abstract
> In this work, we explore auditing access control implementations of Android private framework APIs by leveraging app-side security specifications. The seemingly straightforward auditing task faces significant challenges. It requires extracting unconventional security indicators and understanding their relevance to private framework APIs. More importantly, addressing these challenges requires relying on uncertain hints. We hence, introduce Bluebird, a security auditing platform for Android APIs, that mimics a human expert. Bluebird seamlessly fuses human-like understanding of app-side logic with statically-derived program semantics using probabilistic inference to detect access control gaps in private APIs.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/vyas](https://www.usenix.org/conference/usenixsecurity23/presentation/vyas)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-vyas.pdf](https://www.usenix.org/system/files/usenixsecurity23-vyas.pdf)
## WHIP: Improving Static Vulnerability Detection in Web Application by Forcing tools to Collaborate.
### Authors
* Feras Al-Kassar, EURECOM
* Luca Compagna, SAP Security Research
* Davide Balzarotti, EURECOM
### Abstract
> Improving the accuracy of static application security testing (SAST) is key to fight critical vulnerabilities and increase the security of the Web. However, even state-of-the-art commercial tools have many blind spots that limit their ability to properly analyze modern code and therefore to discover complex inter-procedural vulnerabilities.  In this paper, we present WHIP, the first approach that enables SAST tools to 'collaborate' by sharing information that can help them to overcome each other's limitations. Our technique only operates on the application source code by using different tools as oracle to search for signs of interrupted data flows. When we discover such obstacles we inject alternative paths that circumvent the piece of code that SAST tools were not able to handle correctly. We conducted extensive experiments by analyzing over 100 popular PHP projects with more than 1,000 stars on Github. Our experiments show that our approach enables two popular SAST tools to increase their coverage of the applications' source code, resulting in an increase of up to 25% in the number of high-severity alerts. We manually inspected 30% of the novel 9,226 new alerts obtained by WHIP and responsibly disclosed 35 zero days injection vulnerabilities over 14 applications.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/al-kassar](https://www.usenix.org/conference/usenixsecurity23/presentation/al-kassar)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-al-kassar.pdf](https://www.usenix.org/system/files/usenixsecurity23-al-kassar.pdf)
## SQIRL: Grey-Box Detection of SQL Injection Vulnerabilities Using Reinforcement Learning.
### Authors
* Salim Al Wahaibi, Imperial College London
* Myles Foley, Imperial College London
* Sergio Maffeis, Imperial College London
### Abstract
> Web security scanners are used to discover SQL injection vulnerabilities in deployed web applications. Scanners tend to use static rules to cover the most common injection cases, missing diversity in their payloads, leading to a high volume of requests and false negatives. Moreover, scanners often rely on the presence of error messages or other significant feedback on the target web pages, as a result of additional insecure programming practices by web developers. In this paper we develop SQIRL, a novel approach to detecting SQL injection vulnerabilities based on deep reinforcement learning, using multiple worker agents and grey-box feedback. Each worker intelligently fuzzes the input fields discovered by an automated crawling component. This approach generates a more varied set of payloads than existing scanners, leading to the discovery of more vulnerabilities. Moreover, SQIRL attempts fewer payloads, because they are generated in a targeted fashion.SQIRL finds all vulnerabilities in our microbenchmark for SQL injection, with substantially fewer requests than most of the state-of-the-art scanners compared with. It also significantly outperforms other scanners on a set of 14 production grade web applications, discovering 33 vulnerabilities, with zero false positives. We have responsibly disclosed 22 novel vulnerabilities found by SQIRL, grouped in 6 CVEs.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/al-wahaibi](https://www.usenix.org/conference/usenixsecurity23/presentation/al-wahaibi)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-al-wahaibi.pdf](https://www.usenix.org/system/files/usenixsecurity23-al-wahaibi.pdf)
## Hiding in Plain Sight: An Empirical Study of Web Application Abuse in Malware.
### Authors
* Mingxuan Yao, Georgia Institute of Technology
* Jonathan Fuller, United States Military Academy
* Ranjita Pai Kasturi, Georgia Institute of Technology
* Saumya Agarwal, Georgia Institute of Technology
* Amit Kumar Sikder, Georgia Institute of Technology
* Brendan Saltaformaggio, Georgia Institute of Technology
### Abstract
> Web applications provide a wide array of utilities that are abused by malware as a replacement for traditional attacker-controlled servers. Thwarting these Web App-Engaged (WAE) malware requires rapid collaboration between incident responders and web app providers. Unfortunately, our research found that delays in this collaboration allow WAE malware to thrive. We developed Marsea, an automated malware analysis pipeline that studies WAE malware and enables rapid remediation. Given 10K malware samples, Marsea revealed 893 WAE malware in 97 families abusing 29 web apps. Our research uncovered a 226% increase in the number of WAE malware since 2020 and that malware authors are beginning to reduce their reliance on attacker-controlled servers.  In fact, we found a 13.7% decrease in WAE malware relying on attacker-controlled  servers. To date, we have used Marsea to collaborate with the web app providers to take down 50% of the malicious web app content.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/yao-mingxuan](https://www.usenix.org/conference/usenixsecurity23/presentation/yao-mingxuan)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-yao-mingxuan.pdf](https://www.usenix.org/system/files/usenixsecurity23-yao-mingxuan.pdf)
## Bilingual Problems: Studying the Security Risks Incurred by Native Extensions in Scripting Languages.
### Authors
* Cristian-Alex, CISPA Helmholtz Center for Information Security
* ru Staicu, CISPA Helmholtz Center for Information Security
* Sazzadur Rahaman, University of Arizona
* Ágnes Kiss, CISPA Helmholtz Center for Information Security
* Michael Backes, CISPA Helmholtz Center for Information Security
### Abstract
> Scripting languages are continuously gaining popularity due to their ease of use and the flourishing software ecosystems surrounding them. These languages offer crash and memory safety by design. Thus, developers do not need to understand and prevent low-level security issues like the ones plaguing the C code. However, scripting languages often allow native extensions, a way for custom C/C++ code to be invoked directly from the high-level language. While this feature promises several benefits, such as increased performance or the reuse of legacy code, it can also break the language’s guarantees, e.g., crash safety.  In this work, we first provide a comparative analysis of the security risks of native extension APIs in three popular scripting languages. Additionally, we discuss a novel methodology for studying the misuse of the native extension API. We then perform an in-depth study of npm, an ecosystem that is most exposed to threats introduced by native extensions. We show that vulnerabilities in extensions can be exploited in their embedding library by producing reads of uninitialized memory, hard crashes, or memory leaks in 33 npm packages simply by invoking their API with well-crafted inputs. Moreover, we identify six open-source web applications in which a weak adversary can deploy such exploits remotely. Finally, we were assigned seven security advisories for the work presented in this paper, most labeled as high severity.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/staicu](https://www.usenix.org/conference/usenixsecurity23/presentation/staicu)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-staicu.pdf](https://www.usenix.org/system/files/usenixsecurity23-staicu.pdf)
## Did the Shark Eat the Watchdog in the NTP Pool? Deceiving the NTP Pool's Monitoring System.
### Authors
* Jonghoon Kwon, ETH Zürich
* Jeonggyu Song, Korea University
* Junbeom Hur, Korea University
* Adrian Perrig, ETH Zürich
### Abstract
> The NTP pool has become a critical infrastructure for modern Internet services and applications. With voluntarily joined thousands of timeservers, it supplies millions of distributed (heterogeneous) systems with time. While numerous efforts have been made to enhance NTP's accuracy, reliability, and security, unfortunately, the NTP pool attracts relatively little attention. In this paper, we provide a comprehensive analysis of NTP pool security, in particular the NTP pool monitoring system, which oversees the correctness and responsiveness of the participating servers. We first investigate strategic attacks that deceive the pool's health-check system to remove legitimate timeservers from the pool. Then, through empirical analysis using monitoring servers and timeservers injected into the pool, we demonstrate the feasibility of our approaches, show their effectiveness, and debate the implications. Finally, we discuss designing a new pool monitoring system to mitigate these attacks.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/kwon](https://www.usenix.org/conference/usenixsecurity23/presentation/kwon)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-kwon.pdf](https://www.usenix.org/system/files/usenixsecurity23-kwon.pdf)
## Device Tracking via Linux's New TCP Source Port Selection Algorithm.
### Authors
* Moshe Kol, Hebrew University of Jerusalem
* Amit Klein, Hebrew University of Jerusalem
* Yossi Gilad, Hebrew University of Jerusalem
### Abstract
> We describe a tracking technique for Linux devices, exploiting a new TCP source port generation mechanism recently introduced to the Linux kernel. This mechanism is based on an algorithm, standardized in RFC 6056, for boosting security by better randomizing port selection. Our technique detects collisions in a hash function used in the said algorithm, based on sampling TCP source ports generated in an attacker-prescribed manner. These hash collisions depend solely on a per-device key, and thus the set of collisions forms a device ID that allows tracking devices across browsers, browser privacy modes, containers, and IPv4/IPv6 networks (including some VPNs). It can distinguish among devices with identical hardware and software, and lasts until the device restarts.  We implemented this technique and then tested it using tracking servers in two different locations and with Linux devices on various networks. We also tested it on an Android device that we patched to introduce the new port selection algorithm. The tracking technique works in real-life conditions, and we report detailed findings about it, including its dwell time, scalability, and success rate in different network types. We worked with the Linux kernel team to mitigate the exploit, resulting in a security patch introduced in May 2022 to the Linux kernel, and we provide recommendations for better securing the port selection algorithm in the paper.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/kol](https://www.usenix.org/conference/usenixsecurity23/presentation/kol)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-kol.pdf](https://www.usenix.org/system/files/usenixsecurity23-kol.pdf)
## Temporal CDN-Convex Lens: A CDN-Assisted Practical Pulsing DDoS Attack.
### Authors
* Run Guo, Tsinghua University
* Jianjun Chen, Tsinghua University and Zhongguancun Laboratory
* Yihang Wang, Tsinghua University
* Keran Mu, Tsinghua University
* Baojun Liu, Tsinghua University and Zhongguancun Laboratory
* Xiang Li, Tsinghua University
* Chao Zhang, Tsinghua University and Zhongguancun Laboratory
* Haixin Duan, Tsinghua University and Zhongguancun Laboratory and QI-ANXIN Technology Research Institute
* Jianping Wu, Tsinghua University and Zhongguancun Laboratory
### Abstract
> As one cornerstone of Internet infrastructure, Content Delivery Networks (CDNs) work as a globally distributed proxy platform between clients and websites, providing the functionalities of speeding up content delivery, offloading web traffic, and DDoS protection. In this paper, however, we reveal that inherent nature of CDN forwarding network can be exploited to compromise service availability. We present a new class of pulsing denial of service attacks, named CDN-Convex attack. We explore the possibility of exploiting the CDN infrastructure as a converging lens, and concentrating low-rate attacking requests into short, high-bandwidth pulse waves, resulting in a pulsing DoS attack to saturate the targeted TCP services periodically. Through real-world experiments on five leading CDN vendors, we demonstrate that CDN-Convex is practical and flexible. We show that attackers can use it to achieve peak bandwidths over 1000 times  greater than their upload bandwidth, seriously degrading the performance and availability of target services. Following the responsible disclosure policy, we have reported our attack details to all affected CDN vendors and proposed possible mitigation solutions.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/guo-run](https://www.usenix.org/conference/usenixsecurity23/presentation/guo-run)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-guo-run.pdf](https://www.usenix.org/system/files/usenixsecurity23-guo-run.pdf)
## An Efficient Design of Intelligent Network Data Plane.
### Authors
* Guangmeng Zhou, Tsinghua University
* Zhuotao Liu, Tsinghua University and Zhongguancun Laboratory
* Chuanpu Fu, Tsinghua University
* Qi Li, Tsinghua University and Zhongguancun Laboratory
* Ke Xu, Tsinghua University and Zhongguancun Laboratory
### Abstract
> Deploying machine learning models directly on the network data plane enables intelligent traffic analysis at line-speed using data-driven models rather than predefined protocols. Such a capability, referred to as Intelligent Data Plane (IDP), may potentially transform a wide range of networking designs. The emerging programmable switches provide crucial hardware support to realize IDP. Prior art in this regard is divided into two major categories: (i) focusing on extract useful flow information from the data plane, while placing the learning-based traffic analysis on the control plane; and (ii) taking a step further to embed learning models into the data plane, while failing to use flow-level features that are critical to achieve high learning accuracies. In this paper, we propose NetBeacon to advance the state-of-the-art in both model accuracy and model deployment efficiency. In particular, NetBeacon proposes a multi-phase sequential model architecture to perform dynamic packet analysis at different phases of a flow as it proceeds, by incorporating flow-level features that are computable at line-speed to boost learning accuracies. Further, NetBeacon designs efficient model representation mechanisms to address the table entry explosion problem when deploying tree-based models on the network data plane. Finally, NetBeacon hardens its scalability for handling concurrent flows via multiple tightly-coupled designs for managing stateful storage used to store per-flow state. We implement a prototype of NetBeacon and extensively evaluate its performance over multiple traffic analysis tasks.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/zhou-guangmeng](https://www.usenix.org/conference/usenixsecurity23/presentation/zhou-guangmeng)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-zhou-guangmeng.pdf](https://www.usenix.org/system/files/usenixsecurity23-zhou-guangmeng.pdf)
## Glowing in the Dark: Uncovering IPv6 Address Discovery and Scanning Strategies in the Wild.
### Authors
* Hammas Bin Tanveer, The University of Iowa
* Rachee Singh, Microsoft and Cornell University
* Paul Pearce, Georgia Tech
* Rishab Nithyan, University of Iowa
### Abstract
> In this work we identify scanning strategies of IPv6 scanners on the Internet. We offer a unique perspective on the behavior of IPv6 scanners by conducting controlled experiments leveraging a large and unused /56 IPv6 subnet. We selectively make parts of the subnet visible to scanners by hosting applications that make direct or indirect contact with IPv6- capable servers on the Internet. By careful experiment design, we mitigate the effects of hidden variables on scans sent to our /56 subnet and establish causal relationships between IPv6 host activity types and the scanner attention they evoke. We show that IPv6 host activities e.g., Web browsing, membership in the NTP pool and Tor network, cause scanners to send a magnitude higher number of unsolicited IP scans and reverse DNS queries to our subnet than before. DNS scanners focus their scans in narrow regions of the address space where our applications are hosted whereas IP scanners broadly scan the entire subnet. Even after the host activity from our subnet subsides, we observe persistent residual scanning to portions of the address space that previously hosted applications.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/bin-tanveer](https://www.usenix.org/conference/usenixsecurity23/presentation/bin-tanveer)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-bin-tanveer.pdf](https://www.usenix.org/system/files/usenixsecurity23-bin-tanveer.pdf)
## Oops..! I Glitched It Again! How to Multi-Glitch the Glitching-Protections on ARM TrustZone-M.
### Authors
* Xhani Marvin Saß, Technical University of Darmstadt
* Richard Mitev, Technical University of Darmstadt
* Ahmad-Reza Sadeghi, Technical University of Darmstadt
### Abstract
> Voltage Fault Injection (VFI), also known as power glitching, has proven to be a severe threat to real-world systems. In VFI attacks, the adversary disturbs the power-supply of the target-device forcing the device to illegitimate behavior. Various countermeasures have been proposed to address different types of fault injection attacks at different abstraction layers, either requiring to modify the underlying hardware or software/firmware at the machine instruction level. Moreover, only recently, individual chip manufacturers have started to respond to this threat by integrating countermeasures in their products. Generally, these countermeasures aim at protecting against single fault injection (SFI) attacks, since Multiple Fault Injection (MFI) is believed to be challenging and sometimes even impractical. In this paper, we present μ-Glitch, the first Voltage Fault Injection (VFI) platform which is capable of injecting multiple, coordinated voltage faults into a target device, requiring only a single trigger signal. We provide a novel flow for Multiple Voltage Fault Injection (MVFI) attacks to significantly reduce the search complexity for fault parameters, as the search space increases exponentially with each additional fault injection. We evaluate and showcase the effectiveness and practicality of our attack platform on four real-world chips, featuring TrustZone-M:  The first two have interdependent backchecking mechanisms, while the second two have additionally integrated countermeasures against fault injection. Our evaluation revealed that μ-Glitch can successfully inject four consecutive faults within an average time of one day. Finally, we discuss potential countermeasures to mitigate VFI attacks and additionally propose two novel attack scenarios for MVFI.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/sass](https://www.usenix.org/conference/usenixsecurity23/presentation/sass)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-sass.pdf](https://www.usenix.org/system/files/usenixsecurity23-sass.pdf)
## SHELTER: Extending Arm CCA with Isolation in User Space.
### Authors
* Yiming Zhang, Southern University of Science and Technology and The Hong Kong Polytechnic University
* Yuxin Hu, Southern University of Science and Technology
* Zhenyu Ning, Hunan University and Southern University of Science and Technology
* Fengwei Zhang, Southern University of Science and Technology
* Xiapu Luo, The Hong Kong Polytechnic University
* Haoyang Huang, Southern University of Science and Technology
* Shoumeng Yan, Ant Group
* Zhengyu He, Ant Group
### Abstract
> The increasing adoption of confidential computing is providing individual users with a more seamless interaction with numerous mobile and server devices. TrustZone is a promising security technology for the use of partitioning sensitive private data into a trusted execution environment (TEE). Unfortunately, third-party developers have limited accessibility to TrustZone. This is because TEE vendors need to validate such security applications to preserve their security rigorously. Moreover, TrustZone-based systems suffer from vulnerabilities affecting Trusted App and trusted OS, possibly causing the entire system to be compromised. Advanced virtualization-based TEE introduced in the recently new concept of Confidential Compute Architecture (CCA) creates a new physical address space called Realm world for confidential computing to protect the data confidentiality and integrity. The current version of CCA primarily targets the VM level in the Realm world and does not provide user-level isolated environments. To fill up this gap, we present SHELTER, which is a complement to CCA’s primary Realm VM-style architecture. SHELTER allows third-party developers to deploy their applications with isolation in userspace. SHELTER is designed by cooperating with Arm CCA hardware primitive available in Armv9.2 to provide hardware-based isolation while removing the need for software workloads to trust their data to a Host OS, hypervisor, or privileged software (e.g., trusted OS, Secure/Realm hypervisor). We have implemented and evaluated SHELTER, and the results demonstrated that SHELTER guarantees the security of applications with a modest performance overhead (<15%) on real-world workloads.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-yiming](https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-yiming)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-zhang-yiming.pdf](https://www.usenix.org/system/files/usenixsecurity23-zhang-yiming.pdf)
## Hot Pixels: Frequency, Power, and Temperature Attacks on GPUs and Arm SoCs.
### Authors
* Hritvik Taneja, Georgia Tech
* Jason Kim, Georgia Tech
* Jie Jeff Xu, Georgia Tech
* Stephan van Schaik, University of Michigan
* Daniel Genkin, Georgia Tech
* Yuval Yarom, Ruhr University Bochum
### Abstract
> The drive to create thinner, lighter, and more energy efficient devices has resulted in modern SoCs being forced to balance a delicate tradeoff between power consumption, heat dissipation, and execution speed (i.e., frequency). While beneficial, these DVFS mechanisms have also resulted in software-visible hybrid side-channels, which use software to probe analog properties of computing devices. Such hybrid attacks are an emerging threat that can bypass countermeasures for traditional microarchitectural side-channel attacks. Given the rise in popularity of both Arm SoCs and GPUs, in this paper we investigate the susceptibility of these devices to information leakage via power, temperature and frequency, as measured via internal sensors. We demonstrate that the sensor data observed correlates with both instructions executed and data processed, allowing us to mount software-visible hybrid side-channel attacks on these devices.To demonstrate the real-world impact of this issue, we present JavaScript-based pixel stealing and history sniffing attacks on Chrome and Safari, with all side channel countermeasures enabled. Finally, we also show website fingerprinting attacks, without any elevated privileges.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/taneja](https://www.usenix.org/conference/usenixsecurity23/presentation/taneja)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-taneja.pdf](https://www.usenix.org/system/files/usenixsecurity23-taneja.pdf)
## SpectrEM: Exploiting Electromagnetic Emanations During Transient Execution.
### Authors
* Jesse De Meulemeester, COSIC, KU Leuven
* Antoon Purnal, COSIC, KU Leuven
* Lennert Wouters, COSIC, KU Leuven
* Arthur Beckers, COSIC, KU Leuven
* Ingrid Verbauwhede, COSIC, KU Leuven
### Abstract
> Modern processors implement sophisticated performance optimizations, such as out-of-order execution and speculation, that expose programs to so-called transient execution attacks. So far, such attacks rely on specific on-chip covert channels (e.g., cache timing), instilling the hope that they can be thwarted by closing or weakening these channels. In this paper, we consider the inevitable physical side effects of transient execution. We focus on electromagnetic (EM) emanations produced by the processor and develop two lightweight and accurate EM channels to extract secret bits from the transient window. We propose SpectrEM, a Spectre variant for embedded devices exposed to physical access by an attacker. While it assumes a physical adversary, it does not fundamentally require code execution, expanding its applicability in the embedded world. We evaluate SpectrEM on an Arm Cortex-A72, leaking up to 366 bits per second at a bit error rate as low as 0.008%. To our knowledge, this is the first practical demonstration of physical transient execution attacks.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/de-meulemeester](https://www.usenix.org/conference/usenixsecurity23/presentation/de-meulemeester)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-de-meulemeester.pdf](https://www.usenix.org/system/files/usenixsecurity23-de-meulemeester.pdf)
## ARMore: Pushing Love Back Into Binaries.
### Authors
* Luca Di Bartolomeo, EPFL
* Hossein Moghaddas, EPFL
* Mathias Payer, EPFL
### Abstract
> Static rewriting enables late-state code changes (e.g., to add mitigations, to remove unnecessary code, or to instrument for code coverage) at low overhead in security-critical environments. Most research on static rewriting has so far focused on the x86 architecture. However, the prevalence and proliferation of ARM-based devices along with a large amount of personal data (e.g., health and sensor data) that they process calls for efficient introspection and analysis capabilities on the ARM platform. Addressing the unique challenges on aarch64, we introduce ARMore, the first efficient, robust, and heuristic-free static binary rewriter for arbitrary aarch64 binaries that produces reassembleable assembly. The key improvements introduced by ARMore make the recovery of indirect control flow an option rather than a necessity. Instead of crashing, the cost of an uncovered target only causes the small overhead of an additional branch. ARMore can rewrite binaries from different languages and compilers (even arbitrary hand-written assembly), both on PIC and non-PIC code, with or without symbols, including exception handling for C++ and Go binaries, and also including binaries with mixed data and text. ARMore is sound as it does not rely on any assumptions about the input binary. ARMore is also efficient: it does not employ any expensive dynamic translation techniques, incurring negligible overhead (<1% in our evaluated benchmarks). Our AFL++ coverage instrumentation pass enables fuzzing of closed-source aarch64 binaries at three times the speed compared to the state-of-the-art (AFL-QEMU), and we found 58 unique crashes in closed-source software.  ARMore is the only static rewriter whose rewritten binaries correctly pass all SQLite3 and coreutils test cases and autopkgtest of 97.5% Debian packages.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/di-bartolomeo](https://www.usenix.org/conference/usenixsecurity23/presentation/di-bartolomeo)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-di-bartolomeo.pdf](https://www.usenix.org/system/files/usenixsecurity23-di-bartolomeo.pdf)
## Secure Floating-Point Training.
### Authors
* Deevashwer Rathee, University of California, Berkeley
* Anwesh Bhattacharya, Microsoft Research
* Divya Gupta, Microsoft Research
* Rahul Sharma, Microsoft Research
* Dawn Song, University of California, Berkeley
### Abstract
> Secure 2-party computation (2PC) of floating-point arithmetic is improving in performance and recent work runs deep learning algorithms with it, while being as numerically precise as commonly used machine learning (ML) frameworks like PyTorch. We find that the existing 2PC libraries for floating-point support generic computations and lack specialized support for ML training. Hence, their latency and communication costs for compound operations (e.g., dot products) are high. We provide novel specialized 2PC protocols for compound operations and prove their precision using numerical analysis. Our implementation BEACON outperforms state-of-the-art libraries for 2PC of floating-point by over $6\times$.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/rathee](https://www.usenix.org/conference/usenixsecurity23/presentation/rathee)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-rathee.pdf](https://www.usenix.org/system/files/usenixsecurity23-rathee.pdf)
## NeuroPots: Realtime Proactive Defense against Bit-Flip Attacks in Neural Networks.
### Authors
* Qi Liu, Lehigh University
* Jieming Yin, Nanjing University of Posts and Telecommunications
* Wujie Wen, Lehigh University
* Chengmo Yang, University of Delaware
* Shi Sha, Wilkes University
### Abstract
> Deep neural networks (DNNs) are becoming ubiquitous in various safety- and security-sensitive applications such as self-driving cars and financial systems. Recent studies revealed that bit-flip attacks (BFAs) can destroy DNNs' functionality via DRAM rowhammer—by precisely injecting a few bit-flips into the quantized model parameters, attackers can either degrade the model accuracy to random guessing, or misclassify certain inputs into a target class. BFAs can cause catastrophic consequences if left undetected. However, detecting BFAs is challenging because bit-flips can occur on any weights in a DNN model, leading to a large detection surface. Unlike prior works that attempt to "patch'' vulnerabilities of DNN models, our work is inspired by the idea of "honeypot''. Specifically, we propose a proactive defense concept named NeuroPots, which embeds a few "honey neurons'' as crafted vulnerabilities into the DNN model to lure the attacker into injecting faults in them, thus making detection and model recovery efficient. We utilize NeuroPots to develop a trapdoor-enabled defense framework. We design a honey neuron selection strategy, and propose two methods for embedding trapdoors into the DNN model. Furthermore, since the majority of injected bit flips will concentrate in the trapdoors, we use a checksum-based detection approach to efficiently detect faults in them, and rescue the model accuracy by "refreshing'' those faulty trapdoors. Our experiments show that trapdoor-enabled defense achieves high detection performance and effectively recovers a compromised model at a low cost across a variety of DNN models and datasets.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/liu-qi](https://www.usenix.org/conference/usenixsecurity23/presentation/liu-qi)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-liu-qi.pdf](https://www.usenix.org/system/files/usenixsecurity23-liu-qi.pdf)
## FedVal: Different good or different bad in federated learning.
### Authors
* Viktor Valadi, AI Sweden
* Xinchi Qiu, University of Cambridge
* Pedro Porto Buarque de Gusmão, University of Cambridge
* Nicholas D. Lane, University of Cambridge
* Mina Alibeigi, University of Cambridge and Zenseact AB
### Abstract
> Federated learning (FL) systems are susceptible to attacks from malicious actors who might attempt to corrupt the training model through various poisoning attacks. FL also poses new challenges in addressing group bias, such as ensuring fair performance for different demographic groups. Traditional methods used to address such biases require centralized access to the data, which FL systems do not have. In this paper, we present a novel approach FedVal for both robustness and fairness that does not require any additional information from clients that could raise privacy concerns and consequently compromise the integrity of the FL system. To this end, we propose an innovative score function based on a server-side validation method that assesses client updates and determines the optimal aggregation balance between locally-trained models. Our research shows that this approach not only provides solid protection against poisoning attacks but can also be used to reduce group bias and subsequently promote fairness while maintaining the system's capability for differential privacy. Extensive experiments on the CIFAR-10, FEMNIST, and PUMS ACSIncome datasets in different configurations demonstrate the effectiveness of our method, resulting in state-of-the-art performances. We have proven robustness in situations where 80% of participating clients are malicious. Additionally, we have shown a significant increase in accuracy for underrepresented labels from 32% to 53%, and increase in recall rate for underrepresented features from 19% to 50%.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/valadi](https://www.usenix.org/conference/usenixsecurity23/presentation/valadi)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-valadi.pdf](https://www.usenix.org/system/files/usenixsecurity23-valadi.pdf)
## Gradient Obfuscation Gives a False Sense of Security in Federated Learning.
### Authors
* Kai Yue, North Carolina State University
* Richeng Jin, Zhejiang University
* Chau-Wai Wong, North Carolina State University
* Dror Baron, North Carolina State University
* Huaiyu Dai, North Carolina State University
### Abstract
> Federated learning has been proposed as a privacy-preserving machine learning framework that enables multiple clients to collaborate without sharing raw data. However, client privacy protection is not guaranteed by design in this framework. Prior work has shown that the gradient sharing strategies in federated learning can be vulnerable to data reconstruction attacks. In practice, though, clients may not transmit raw gradients considering the high communication cost or due to privacy enhancement requirements. Empirical studies have demonstrated that gradient obfuscation, including intentional obfuscation via gradient noise injection and unintentional obfuscation via gradient compression, can provide more privacy protection against reconstruction attacks. In this work, we present a new reconstruction attack framework targeting the image classification task in federated learning. We show how commonly adopted gradient postprocessing procedures, such as gradient quantization, gradient sparsification, and gradient perturbation may give a false sense of security in federated learning. Contrary to prior studies, we argue that privacy enhancement should not be treated as a byproduct of gradient compression. Additionally, we design a new method under the proposed framework to reconstruct images at the semantic level. We quantify the semantic privacy leakage and compare it with conventional image similarity scores. Our comparisons challenge the image data leakage evaluation schemes in the literature. The results emphasize the importance of revisiting and redesigning the privacy protection mechanisms for client data in existing federated learning algorithms.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/yue](https://www.usenix.org/conference/usenixsecurity23/presentation/yue)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-yue.pdf](https://www.usenix.org/system/files/usenixsecurity23-yue.pdf)
## FreeEagle: Detecting Complex Neural Trojans in Data-Free Cases.
### Authors
* Chong Fu, Zhejiang University
* Xuhong Zhang, Zhejiang University
* Shouling Ji, Zhejiang University
* Ting Wang, Pennsylvania State University
* Peng Lin, Chinese Aeronautical Establishment
* Yanghe Feng, National University of Defense Technology
* Jianwei Yin, Zhejiang University
### Abstract
> Trojan attack on deep neural networks, also known as backdoor attack, is a typical threat to artificial intelligence. A trojaned neural network behaves normally with clean inputs. However, if the input contains a particular trigger, the trojaned model will have attacker-chosen abnormal behavior. Although many backdoor detection methods exist, most of them assume that the defender has access to a set of clean validation samples or samples with the trigger, which may not hold in some crucial real-world cases, e.g., the case where the defender is the maintainer of model-sharing platforms. Thus, in this paper, we propose FreeEagle, the first data-free backdoor detection method that can effectively detect complex backdoor attacks on deep neural networks, without relying on the access to any clean samples or samples with the trigger. The evaluation results on diverse datasets and model architectures show that FreeEagle is effective against various complex backdoor attacks, even outperforming some state-of-the-art non-data-free backdoor detection methods.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/fu-chong](https://www.usenix.org/conference/usenixsecurity23/presentation/fu-chong)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-fu-chong.pdf](https://www.usenix.org/system/files/usenixsecurity23-fu-chong.pdf)
## Prime Match: A Privacy-Preserving Inventory Matching System.
### Authors
* Antigoni Polychroniadou, J.P. Morgan
* Gilad Asharov, Bar-Ilan University
* Benjamin Diamond, J.P. Morgan
* Tucker Balch, J.P. Morgan
* Hans Buehler, J.P. Morgan
* Richard Hua, J.P. Morgan
* Suwen Gu, J.P. Morgan
* Greg Gimler, J.P. Morgan
* Manuela Veloso, J.P. Morgan
### Abstract
> Inventory matching is a standard mechanism for trading financial stocks by which buyers and sellers can be paired. In the financial world, banks often undertake the task of finding such matches between their clients. The related stocks can be traded without adversely impacting the market price for either client. If matches between clients are found, the bank can offer the trade at advantageous rates. If no match is found, the parties have to buy or sell the stock in the public market, which introduces additional costs.  A problem with the process as it is presently conducted is that the involved parties must share their order to buy or sell a particular stock, along with the intended quantity (number of shares), to the bank.  Clients worry that if this information were to “leak” somehow, then other market participants would become aware of their intentions and thus cause the price to move adversely against them before their transaction finalizes. We provide a solution that enables clients to match their orders efficiently with reduced market impact while maintaining privacy. In the case where there are no matches, no information is revealed. Our main cryptographic innovation is a two-round secure linear comparison protocol for computing the minimum between two quantities without preprocessing and with malicious security, which can be of independent interest. We report benchmarks of our Prime Match system, which runs in production and is adopted by a large bank in the US - J.P. Morgan. Prime Match is the first secure multiparty computation solution running live in the financial world.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/polychroniadou](https://www.usenix.org/conference/usenixsecurity23/presentation/polychroniadou)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-polychroniadou.pdf](https://www.usenix.org/system/files/usenixsecurity23-polychroniadou.pdf)
## Squirrel: A Scalable Secure Two-Party Computation Framework for Training Gradient Boosting Decision Tree.
### Authors
* Wen-jie Lu, Alibaba Group
* Zhicong Huang, Alibaba Group
* Qizhi Zhang, Ant Group
* Yuchen Wang, Alibaba Group
* Cheng Hong, Ant Group
### Abstract
> Gradient Boosting Decision Tree (GBDT) and its variants are widely used in industry, due to their high efficiency as well as strong interpretability. Secure multi-party computation allows multiple data owners to compute a function jointly while keeping their input private. In this work, we present Squirrel, a secure two-party GBDT training framework on a vertically split dataset, where two data owners each hold different features of the same data samples. Squirrel is private against semi-honest adversaries, and no sensitive intermediate information is revealed during the training process. Squirrel is also scalable to datasets with millions of samples even under a Wide Area Network (WAN). Squirrel achieves its high performance via several novel co-designs of the GBDT algorithms and advanced cryptography. Especially, 1) we propose a new mechanism to hide the sample distribution on each node using oblivious transfer. 2) We propose a highly optimized method for secure gradient aggregation using two lattice-based homomorphic encryption schemes. Our empirical results show that our method can be three orders of magnitude faster than the existing approaches. 3) We propose a novel protocol to evaluate the sigmoid function on secretly shared values, showing 19×-200×-fold improvements over two existing methods. Combining all these improvements, Squirrel costs less than 6 seconds per tree on a dataset with 50 thousands samples which outperforms Pivot (VLDB 2020) by more than 28×. We also show that Squirrel can scale up to datasets with more than one million samples, e.g., about 90 seconds per tree over a WAN.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/lu](https://www.usenix.org/conference/usenixsecurity23/presentation/lu)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-lu.pdf](https://www.usenix.org/system/files/usenixsecurity23-lu.pdf)
## Eos: Efficient Private Delegation of zkSNARK Provers.
### Authors
* Aless, UC Berkeley and EPFL
* ro Chiesa, UC Berkeley and EPFL
* Ryan Lehmkuhl, MIT
* Pratyush Mishra, Aleo and University of Pennsylvania
* Yinuo Zhang, UC Berkeley
### Abstract
> Succinct zero knowledge proofs (i.e. zkSNARKs) are powerful cryptographic tools that enable a prover to convince a verifier that a given statement is true without revealing any additional information. Their attractive privacy properties have led to much academic and industrial interest. Unfortunately, existing systems for generating zkSNARKs are expensive, which limits the applications in which these proofs can be used. One approach is to take advantage of powerful cloud servers to generate the proof. However, existing techniques for this (e.g., DIZK) sacrifice privacy by revealing secret information to the cloud machines. This is problematic for many applications of zkSNARKs, such as decentralized private currency and computation systems. In this work we design and implement privacy-preserving delegation protocols for zkSNARKs with universal setup. Our protocols enable a prover to outsource proof generation to a set of workers, so that if at least one worker does not collude with other workers, no private information is revealed to any worker. Our protocols achieve security against malicious workers without relying on heavyweight cryptographic tools. We implement and evaluate our delegation protocols for a state-of-the-art zkSNARK in a variety of computational and bandwidth settings, and demonstrate that our protocols are concretely efficient. When compared to local proving, using our protocols to delegate proof generation from a recent smartphone (a) reduces end-to-end latency by up to 26×, (b) lowers the delegator's active computation time by up to 1447×, and (c) enables proving up to 256× larger instances.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/chiesa](https://www.usenix.org/conference/usenixsecurity23/presentation/chiesa)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-chiesa.pdf](https://www.usenix.org/system/files/usenixsecurity23-chiesa.pdf)
## Machine-checking Multi-Round Proofs of Shuffle: Terelius-Wikstrom and Bayer-Groth.
### Authors
* Thomas Haines, Australian National University
* Rajeev Gore, Polish Academy of Science
* Mukesh Tiwari, University of Cambridge
### Abstract
> Shuffles are used in electronic voting in much the same way physical ballot boxes are used in paper systems: (encrypted) ballots are input into the shuffle and (encrypted) ballots are output in a random order, thereby breaking the link between voter identities and ballots.  To guarantee that no ballots are added, omitted or altered, zero-knowledge proofs, called proofs of shuffle, are used to provide publicly verifiable transcripts that prove that the outputs are a re-encrypted permutation of the inputs. The most prominent proofs of shuffle, in practice, are those due to Terelius and Wikstrom~(TW), and Bayer and Groth (BG).  TW is simpler whereas BG is more efficient, both in terms of bandwidth and computation. Security for the simpler (TW) proof of shuffle has already been machine-checked but several prominent vendors insist on using the more complicated BG proof of shuffle. Here, we machine-check the security of the Bayer-Groth proof of shuffle via the Coq proof-assistant. We then extract the verifier (software) required to check the transcripts produced by Bayer-Groth implementations and use it to check transcripts from the Swiss Post evoting system under development for national elections in Switzerland.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/haines](https://www.usenix.org/conference/usenixsecurity23/presentation/haines)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-haines.pdf](https://www.usenix.org/system/files/usenixsecurity23-haines.pdf)
## TAP: Transparent and Privacy-Preserving Data Services.
### Authors
* Daniel Reijsbergen, Singapore University of Technology and Design
* Aung Maw, Singapore University of Technology and Design
* Zheng Yang, Southwest University
* Tien Tuan Anh Dinh, Singapore University of Technology and Design
* Jianying Zhou, Singapore University of Technology and Design
### Abstract
> Users today expect more security from services that handle their data. In addition to traditional data privacy and integrity requirements, they expect transparency, i.e., that the service’s processing of the data is verifiable by users and trusted auditors. Our goal is to build a multi-user system that provides data privacy, integrity, and transparency for a large number of operations, while achieving practical performance. To this end, we first identify the limitations of existing approaches that use authenticated data structures. We find that they fall into two categories: 1) those that hide each user’s data from other users, but have a limited range of verifiable operations (e.g., CONIKS, Merkle2, and Proofs of Liabilities), and 2) those that support a wide range of verifiable operations, but make all data publicly visible (e.g., IntegriDB and FalconDB). We then present TAP to address the above limitations. The key component of TAP is a novel tree data structure that supports efficient result verification, and relies on independent audits that use zero-knowledge range proofs to show that the tree is constructed correctly without revealing user data. TAP supports a broad range of verifiable operations, including quantiles and sample standard deviations. We conduct a comprehensive evaluation of TAP, and compare it against two state-of-the-art baselines, namely IntegriDB and Merkle2, showing that the system is practical at scale.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/reijsbergen](https://www.usenix.org/conference/usenixsecurity23/presentation/reijsbergen)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-reijsbergen.pdf](https://www.usenix.org/system/files/usenixsecurity23-reijsbergen.pdf)
## Trojan Source: Invisible Vulnerabilities.
### Authors
* Nicholas Boucher, University of Cambridge
* Ross Anderson, University of Cambridge and University of Edinburgh
### Abstract
> We present a new type of attack in which source code is maliciously encoded so that it appears different to a compiler and to the human eye. This attack exploits subtleties in text-encoding standards such as Unicode to produce source code whose tokens are logically encoded in a different order from the one in which they are displayed, leading to vulnerabilities that cannot be perceived directly by human code reviewers. 'Trojan Source' attacks, as we call them, pose an immediate threat both to first-party software and of supply-chain compromise across the industry. We present working examples of Trojan Source attacks in C, C++, C#, JavaScript, Java, Rust, Go, Python SQL, Bash, Assembly, and Solidity. We propose definitive compiler-level defenses, and describe other mitigating controls that can be deployed in editors, repositories, and build pipelines while compilers are upgraded to block this attack. We document an industry-wide coordinated disclosure for these vulnerabilities; as they affect most compilers, editors, and repositories, the exercise teaches how different firms, open-source communities, and other stakeholders respond to vulnerability disclosure.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/boucher](https://www.usenix.org/conference/usenixsecurity23/presentation/boucher)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-boucher.pdf](https://www.usenix.org/system/files/usenixsecurity23-boucher.pdf)
## Cheesecloth: Zero-Knowledge Proofs of Real World Vulnerabilities.
### Authors
* Santiago Cuéllar, Galois, Inc.
* Bill Harris, Galois, Inc.
* James Parker, Galois, Inc.
* Stuart Pernsteiner, Galois, Inc.
* Eran Tromer, Columbia University
### Abstract
> Currently, when a security analyst discovers a vulnerability in critical software system, they must navigate a fraught dilemma: immediately disclosing the vulnerability to the public could harm the system's users; whereas disclosing the vulnerability only to the software's vendor lets the vendor disregard or deprioritize the security risk, to the detriment of unwittingly-affected users.A compelling recent line of work aims to resolve this by using Zero Knowledge (ZK) protocols that let analysts prove that they know a vulnerability in a program, without revealing the details of the vulnerability or the inputs that exploit it. In principle, this could be achieved by generic ZK techniques. In practice, ZK vulnerability proofs to date have been restricted in scope and expressibility, due to challenges related to generating proof statements that model real-world software at scale and to directly formulating violated properties.This paper presents Cheesecloth, a novel proof statement compiler, which proves practical vulnerabilities in ZK by soundly-but-aggressively preprocessing programs on public inputs, selectively revealing information about executed control segments, and formalizing information leakage using a novel storage-labeling scheme. Cheesecloth's practicality is demonstrated by generating ZK proofs of well-known vulnerabilities in (previous versions of) critical software, including the Heartbleed information leakage in OpenSSL and a memory vulnerability in the FFmpeg graphics framework.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/cuellar](https://www.usenix.org/conference/usenixsecurity23/presentation/cuellar)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-cuellar.pdf](https://www.usenix.org/system/files/usenixsecurity23-cuellar.pdf)
## V1SCAN: Discovering 1-day Vulnerabilities in Reused C/C++ Open-source Software Components Using Code Classification Techniques.
### Authors
* Seunghoon Woo, Korea University
* Eunjin Choi, Korea University
* Heejo Lee, Korea University
* Hakjoo Oh, Korea University
### Abstract
> We present V1SCAN, an effective approach for discovering 1-day vulnerabilities in reused C/C++ open-source software (OSS) components. Reusing third-party OSS has many benefits, but can put the entire software at risk owing to the vulnerabilities they propagate. In mitigation, several techniques for detecting propagated vulnerabilities, which can be classified into version- and code-based approaches, have been proposed. However, state-of-the-art techniques unfortunately produce many false positives or negatives when OSS projects are reused with code modifications. In this paper, we show that these limitations can be addressed by improving version- and code-based approaches and synergistically combining them. By classifying reused code from OSS components, V1SCAN only considers vulnerabilities contained in the target program and filters out unused vulnerable code, thereby reducing false alarms produced by version-based approaches. V1SCAN improves the coverage of code-based approaches by classifying vulnerable code and then detecting vulnerabilities propagated with code changes in various code locations. Evaluation on GitHub popular C/C++ software showed that V1SCAN outperformed state-of-the-art vulnerability detection approaches by discovering 50% more vulnerabilities than they detected. In addition, V1SCAN reduced the false positive rate of the simple integration of existing version- and code-based approaches from 71% to 4% and the false negative rate from 33% to 7%. With V1SCAN, developers can detect propagated vulnerabilities with high accuracy, maintaining a secure software supply chain.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/woo](https://www.usenix.org/conference/usenixsecurity23/presentation/woo)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-woo.pdf](https://www.usenix.org/system/files/usenixsecurity23-woo.pdf)
## VulChecker: Graph-based Vulnerability Localization in Source Code.
### Authors
* Yisroel Mirsky, Ben-Gurion University of the Negev
* George Macon, Georgia Tech Research Institute
* Michael Brown, Georgia Institute of Technology
* Carter Yagemann, Ohio State University
* Matthew Pruett, Georgia Institute of Technology
* Evan Downing, Georgia Institute of Technology
* Sukarno Mertoguno, Georgia Institute of Technology
* Wenke Lee, Georgia Institute of Technology
### Abstract
> In software development, it is critical to detect vulnerabilities in a project as early as possible. Although, deep learning has shown promise in this task, current state-of-the-art methods cannot classify and identify the line on which the vulnerability occurs. Instead, the developer is tasked with searching for an arbitrary bug in an entire function or even larger region of code. In this paper, we propose VulChecker: a tool that can precisely locate vulnerabilities in source code (down to the exact instruction) as well as classify their type (CWE). To accomplish this, we propose a new program representation, program slicing strategy, and the use of a message-passing graph neural network to utilize all of code's semantics and improve the reach between a vulnerability's root cause and manifestation points. We also propose a novel data augmentation strategy for cheaply creating strong datasets for vulnerability detection in the wild, using free synthetic samples available online. With this training strategy, VulChecker was able to identify 24 CVEs (10 from 2019 & 2020) in 19 projects taken from the wild, with nearly zero false positives compared to a commercial tool that could only detect 4. VulChecker also discovered an exploitable zero-day vulnerability, which has been reported to developers for responsible disclosure.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/mirsky](https://www.usenix.org/conference/usenixsecurity23/presentation/mirsky)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-mirsky.pdf](https://www.usenix.org/system/files/usenixsecurity23-mirsky.pdf)
## DISTDET: A Cost-Effective Distributed Cyber Threat Detection System.
### Authors
* Feng Dong, School of Cyber Science and Engineering, Huazhong University of Science and Technology / Sangfor Technologies Inc.
* Liu Wang, Beijing University of Posts and Telecommunications
* Xu Nie, Beijing University of Posts and Telecommunications
* Fei Shao, Case Western Reserve University
* Haoyu Wang, School of Cyber Science and Engineering, Huazhong University of Science and Technology
* Ding Li, Key Laboratory of High-Confidence Software Technologies (MOE), School of Computer Science, Peking University
* Xiapu Luo, The Hong Kong Polytechnic University
* Xusheng Xiao, Arizona State University
### Abstract
> Building provenance graph that considers causal relationships among software behaviors can better provide contextual information of cyber attacks, especially for advanced attacks such as Advanced Persistent Threat (APT) attacks. Despite its promises in assisting attack investigation, existing approaches that use provenance graphs to perform attack detection suffer from two fundamental limitations. First, existing approaches adopt a centralized detection architecture that sends all system auditing logs to the server for processing, incurring intolerable costs of data transmission, data storage, and computation. Second, they adopt either rule-based techniques that cannot detect unknown threats, or anomaly-detection techniques that produce numerous false alarms, failing to achieve a balance of precision and recall in APT detection. To address these fundamental challenges, we propose DISTDET, a distributed detection system that detects APT attacks by (1) performing light weight detection based on the host model built in the client side, (2) filtering false alarms based on the semantics of the alarm proprieties, and (3) deriving global models to complement the local bias of the host models. Our experiments on a large-scale industrial environment (1,130 hosts, 14 days, ∼1.6 billion events) and the DARPA TC dataset show that DISTDET is as effective as sate-of-the-art techniques in detecting attacks, while dramatically reducing network bandwidth from 11.28Mb/s to 17.08Kb/S (676.5× reduction), memory usages from 364MB to 5.523MB (66× reduction), and storage from 1.47GB to 130.34MB (11.6× reduction). By the time of this writing, DISTDET has been deployed to 50+ industry customers with 22,000+ hosts for more than 6 months, and identified over 900 real-world attacks.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/dong-feng](https://www.usenix.org/conference/usenixsecurity23/presentation/dong-feng)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-dong-feng.pdf](https://www.usenix.org/system/files/usenixsecurity23-dong-feng.pdf)
## Automated Security Analysis of Exposure Notification Systems.
### Authors
* Kevin Morio, CISPA Helmholtz Center for Information Security
* Ilkan Esiyok, CISPA Helmholtz Center for Information Security
* Dennis Jackson, Mozilla
* Robert Künnemann, CISPA Helmholtz Center for Information Security
### Abstract
> We present the first formal analysis and comparison of the security of the two most widely deployed exposure notification systems, ROBERT and the Google and Apple Exposure Notification (GAEN) framework. ROBERT is the most popular instalment of the centralised approach to exposure notification, in which the risk score is computed by a central server. GAEN, in contrast, follows the decentralised approach, where the user's phone calculates the risk. The relative merits of centralised and decentralised systems have proven to be a controversial question. The majority of the previous analyses have focused on the privacy implications of these systems, ours is the first formal analysis to evaluate the security of the deployed systems—the absence of false risk alerts. We model the French deployment of ROBERT and the most widely deployed GAEN variant, Germany's Corona-Warn-App. We isolate the precise conditions under which these systems prevent false alerts. We determine exactly how an adversary can subvert the system via network and Bluetooth sniffing, database leakage or the compromise of phones, back-end systems and health authorities. We also investigate the security of the original specification of the DP3T protocol, in order to identify gaps between the proposed scheme and its ultimate deployment.  We find a total of 27 attack patterns, including many that distinguish the centralised from the decentralised approach, as well as attacks on the authorisation procedure that differentiate all three protocols.  Our results suggest that ROBERT's centralised design is more vulnerable against both opportunistic and highly resourced attackers trying to perform mass-notification attacks.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/morio](https://www.usenix.org/conference/usenixsecurity23/presentation/morio)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-morio.pdf](https://www.usenix.org/system/files/usenixsecurity23-morio.pdf)
## Formal Analysis of SPDM: Security Protocol and Data Model version 1.2.
### Authors
* Cas Cremers, CISPA Helmholtz Center for Information Security
* Alex, CISPA Helmholtz Center for Information Security
* er Dax, CISPA Helmholtz Center for Information Security
* Aurora Naska, CISPA Helmholtz Center for Information Security
### Abstract
> DMTF is a standards organization by major industry players in IT infrastructure including AMD, Alibaba, Broadcom, Cisco, Dell, Google, Huawei, IBM, Intel, Lenovo, and NVIDIA, which aims to enable interoperability, e.g., including cloud, virtualization, network, servers and storage. It is currently standardizing a security protocol called SPDM, which aims to secure communication over the wire and to enable device attestation, notably also explicitly catering for communicating hardware components. The SPDM protocol inherits requirements and design ideas from IETF’s TLS 1.3. However, its state machines and transcript handling are substantially different and more complex. While architecture, specification, and open-source libraries of the current versions of SPDM are publicly available, these include no significant security analysis of any kind. In this work we develop the first formal models of the three modes of the SPDM protocol version 1.2.1, and formally analyze their main security properties.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/cremers-spdm](https://www.usenix.org/conference/usenixsecurity23/presentation/cremers-spdm)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-cremers-spdm.pdf](https://www.usenix.org/system/files/usenixsecurity23-cremers-spdm.pdf)
## One Size Does Not Fit All: Uncovering and Exploiting Cross Platform Discrepant APIs in WeChat.
### Authors
* Chao Wang, The Ohio State University
* Yue Zhang, The Ohio State University
* Zhiqiang Lin, The Ohio State University
### Abstract
> The past few years have witnessed a boom of mobile super apps, which are the apps offering multiple services such as e-commerce, e-learning, and e-government via miniapps executed inside. While originally designed for mobile platforms, super apps such as WeChat have also been made available on desktop platforms such as Windows. However, when running on desktop platforms, WeChat experiences differences in some behaviors, which presents opportunities for attacks (e.g., platform fingerprinting attacks). This paper thus aims to systematically identify the potential discrepancies in the APIs of WeChat across platforms and demonstrate how these differences can be exploited by remote attackers or local malicious miniapps. To this end, we present APIDIFF, an automatic tool that generates test cases for each API and identifies execution discrepancies. With APIDIFF, we have identified three sets of discrepant APIs that exhibit existence (109), permission (17), and output (22) discrepancies across platforms and devices, and provided concrete examples of their exploitation. We have responsibly disclosed these vulnerabilities to Tencent and received bug bounties for our findings. These vulnerabilities were ranked as high-severity and some have already been patched.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/wang-chao](https://www.usenix.org/conference/usenixsecurity23/presentation/wang-chao)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-wang-chao.pdf](https://www.usenix.org/system/files/usenixsecurity23-wang-chao.pdf)
## The Most Dangerous Codec in the World: Finding and Exploiting Vulnerabilities in H.264 Decoders.
### Authors
* Willy R. Vasquez, The University of Texas at Austin
* Stephen Checkoway, Oberlin College
* Hovav Shacham, The University of Texas at Austin
### Abstract
> Modern video encoding standards such as H.264 are a marvel of hidden complexity. But with hidden complexity comes hidden security risk. Decoding video in practice means interacting with dedicated hardware accelerators and the proprietary, privileged software components used to drive them. The video decoder ecosystem is obscure, opaque, diverse, highly privileged, largely untested, and highly exposed—a dangerous combination. We introduce and evaluate H26FORGE, domain-specific infrastructure for analyzing, generating, and manipulating syntactically correct but semantically spec-non-compliant video files. Using H26FORGE, we uncover insecurity in depth across the video decoder ecosystem, including kernel memory corruption bugs in iOS, memory corruption bugs in Firefox and VLC for Windows, and video accelerator and application processor kernel memory bugs in multiple Android devices.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/vasquez](https://www.usenix.org/conference/usenixsecurity23/presentation/vasquez)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-vasquez_1.pdf](https://www.usenix.org/system/files/usenixsecurity23-vasquez_1.pdf)
## Are You Spying on Me? Large-Scale Analysis on IoT Data Exposure through Companion Apps.
### Authors
* Yuhong Nan, Sun Yat-sen University
* Xueqiang Wang, University of Central Florida
* Luyi Xing, Indiana University Bloomington
* Xiaojing Liao, Indiana University Bloomington
* Ruoyu Wu, Purdue University
* Jianliang Wu, Purdue University
* Yifan Zhang, Indiana University Bloomington
* XiaoFeng Wang, Indiana University Bloomington
### Abstract
> Recent research has highlighted privacy as a primary concern for IoT device users. However, due to the challenges in conducting a large-scale study to analyze thousands of devices, there has been less study on how pervasive unauthorized data exposure has actually become on today's IoT devices and the privacy implications of such exposure.  To fill this gap, we leverage the observation that most IoT devices on the market today use their companion mobile apps as an intermediary to process, label and transmit the data they collect. As a result, the semantic information carried by these apps can be recovered and analyzed automatically to track the collection and sharing of IoT data. In this paper, we report the first of such a study, based upon a new framework IoTProfiler, which statically analyzes a large number of companion apps to infer and track the data collected by their IoT devices.  Our approach utilizes machine learning to detect the code snippet in a companion app that handles IoT data and further recovers the semantics of the data from the snippet to evaluate whether their exposure has been properly communicated to the user. By running IoTProfiler on 6,208 companion apps, our research has led to the discovery of 1,973 apps that expose user data without proper disclosure, covering IoT devices from at least 1,559 unique vendors. Our findings include highly sensitive information, such as health status and home address, and the pervasiveness of unauthorized sharing of the data to third parties, including those in different countries. Our findings highlight the urgent need to regulate today's IoT industry to protect user privacy.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/nan](https://www.usenix.org/conference/usenixsecurity23/presentation/nan)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-nan.pdf](https://www.usenix.org/system/files/usenixsecurity23-nan.pdf)
## Strategies and Vulnerabilities of Participants in Venezuelan Influence Operations.
### Authors
* Ruben Recabarren, Florida International University
* Bogdan Carbunar, Florida International University
* Nestor Hern, Florida International University
* ez, Florida International University
* Ashfaq Ali Shafin, Florida International University
### Abstract
> Studies of online influence operations, coordinated efforts to disseminate and amplify disinformation, focus on forensic analysis of social networks or of publicly available datasets of trolls and bot accounts. However, little is known about the experiences and challenges of human participants in influence operations. We conducted semi-structured interviews with 19 influence operations participants that contribute to the online image of Venezuela, to understand their incentives, capabilities, and strategies to promote content while evading detection. To validate a subset of their answers, we performed a quantitative investigation using data collected over almost four months, from Twitter accounts they control. We found diverse participants that include pro-government and opposition supporters, operatives and grassroots campaigners, and sockpuppet account owners and real users. While pro-government and opposition participants have similar goals and promotion strategies, they differ in their motivation, organization, adversaries and detection avoidance strategies. We report the Patria framework, a government platform for operatives to log activities and receive benefits. We systematize participant strategies to promote political content, and to evade and recover from Twitter penalties. We identify vulnerability points associated with these strategies, and suggest more nuanced defenses against influence operations.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/recabarren](https://www.usenix.org/conference/usenixsecurity23/presentation/recabarren)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-recabarren.pdf](https://www.usenix.org/system/files/usenixsecurity23-recabarren.pdf)
## TRIDENT: Towards Detecting and Mitigating Web-based Social Engineering Attacks.
### Authors
* Zheng Yang, Georgia Institute of Technology
* Joey Allen, Georgia Institute of Technology
* Matthew L, Georgia Institute of Technology
* en, Georgia Institute of Technology
* Roberto Perdisci, Georgia Tech and University of Georgia
* Wenke Lee, Georgia Institute of Technology
### Abstract
> As the weakest link in cybersecurity, humans have become the main target of attackers who take advantage of sophisticated web-based social engineering techniques. These attackers leverage low-tier ad networks to inject social engineering components onto web pages to lure users into websites that the attackers control for further exploitation. Most of these exploitations are Web-based Social Engineering Attacks (WSEAs), such as reward and lottery scams. Although researchers have proposed systems and tools to detect some WSEAs, these approaches are very tailored to specific scam techniques (i.e., tech support scams, survey scams) only. They were not designed to be effective against a broad set of attack techniques. With the ever-increasing diversity and sophistication of WSEAs that any user can encounter, there is an urgent need for new and more effective in-browser systems that can accurately detect generic WSEAs. To address this need, we propose TRIDENT, a novel defense system that aims to detect and block generic WSEAs in real-time. TRIDENT stops WSEAs by detecting Social Engineering Ads (SE-ads), the entry point of general web social engineering attacks distributed by low-tier ad networks at scale. Our extensive evaluation shows that TRIDENT can detect SE-ads with an accuracy of 92.63% and a false positive rate of 2.57% and is robust against evasion attempts. We also evaluated TRIDENT against the state-of-the-art ad-blocking tools. The results show that TRIDENT outperforms these tools with a 10% increase in accuracy. Additionally, TRIDENT only incurs 2.13% runtime overhead as a median rate, which is small enough to deploy in production.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/yang-zheng](https://www.usenix.org/conference/usenixsecurity23/presentation/yang-zheng)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-yang-zheng.pdf](https://www.usenix.org/system/files/usenixsecurity23-yang-zheng.pdf)
## Fact-Saboteurs: A Taxonomy of Evidence Manipulation Attacks against Fact-Verification Systems.
### Authors
* Sahar Abdelnabi, CISPA Helmholtz Center for Information Security
* Mario Fritz, CISPA Helmholtz Center for Information Security
### Abstract
> Mis- and disinformation are a substantial global threat to our security and safety. To cope with the scale of online misinformation, researchers have been working on automating fact-checking by retrieving and verifying against relevant evidence. However, despite many advances, a comprehensive evaluation of the possible attack vectors against such systems is still lacking. Particularly, the automated fact-verification process might be vulnerable to the exact disinformation campaigns it is trying to combat. In this work, we assume an adversary that automatically tampers with the online evidence in order to disrupt the fact-checking model via camouflaging the relevant evidence or planting a misleading one. We first propose an exploratory taxonomy that spans these two targets and the different threat model dimensions. Guided by this, we design and propose several potential attack methods. We show that it is possible to subtly modify claim-salient snippets in the evidence and generate diverse and claim-aligned evidence. Thus, we highly degrade the fact-checking performance under many different permutations of the taxonomy’s dimensions. The attacks are also robust against post-hoc modifications of the claim. Our analysis further hints at potential limitations in models’ inference when faced with contradicting evidence. We emphasize that these attacks can have harmful implications on the inspectable and human-in-the-loop usage scenarios of such models, and we conclude by discussing challenges and directions for future defenses.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/abdelnabi](https://www.usenix.org/conference/usenixsecurity23/presentation/abdelnabi)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-abdelnabi.pdf](https://www.usenix.org/system/files/usenixsecurity23-abdelnabi.pdf)
## Reversing, Breaking, and Fixing the French Legislative Election E-Voting Protocol.
### Authors
* Alex, Université de Lorraine, Inria, CNRS, France
* re Debant, Université de Lorraine, Inria, CNRS, France
* Lucca Hirschi, Université de Lorraine, Inria, CNRS, France
### Abstract
> We conduct a security analysis of the e-voting protocol used for the largest political election using e-voting in the world, the 2022 French legislative election for the citizens overseas. Due to a lack of system and threat model specifications, we built and contributed such specifications by studying the French legal framework and by reverse-engineering the code base accessible to the voters. Our analysis reveals that this protocol is affected by two design-level and implementation-level vulnerabilities. We show how those allow a standard voting server attacker and even more so a channel attacker to defeat the election integrity and ballot privacy due to 5 attack variants. We propose and discuss 5 fixes to prevent those attacks. Our specifications, the attacks, and the fixes were acknowledged by the relevant stakeholders during our responsible disclosure. They implemented our fixes to prevent our attacks for future elections. Beyond this protocol, we draw general lessons, recommendations, and open questions from this instructive experience where an e-voting protocol meets the real-world constraints of a large-scale, political election.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/debant](https://www.usenix.org/conference/usenixsecurity23/presentation/debant)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-debant.pdf](https://www.usenix.org/system/files/usenixsecurity23-debant.pdf)
## PROVIDENCE: a Flexible Round-by-Round Risk-Limiting Audit.
### Authors
* Oliver Broadrick, The George Washington University
* Poorvi Vora, The George Washington University
* Filip Zagórski, University of Wroclaw and Votifica
### Abstract
> A Risk-Limiting Audit (RLA) is a statistical election tabulation audit with a rigorous error guarantee. We present ballot polling RLA PROVIDENCE, an audit with the efficiency of MINERVA and flexibility of BRAVO, and prove that it is risk-limiting in the presence of an adversary who can choose subsequent round sizes given knowledge of previous samples. We describe a measure of audit workload as a function of the number of rounds, precincts touched, and ballots drawn and quantify the problem of obtaining a misleading audit sample when rounds are too small, demonstrating the importance of the resulting constraint on audit planning. We describe an approach to planning audit round schedules using these measures and present simulation results demonstrating the superiority of PROVIDENCE. We describe the use of PROVIDENCE by the Rhode Island Board of Elections in a tabulation audit of the 2021 election. Our implementation of PROVIDENCE in the open source R2B2 library has been integrated as an option in Arlo, the most commonly used RLA software.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/broadrick](https://www.usenix.org/conference/usenixsecurity23/presentation/broadrick)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-broadrick.pdf](https://www.usenix.org/system/files/usenixsecurity23-broadrick.pdf)
## NVLeak: Off-Chip Side-Channel Attacks via Non-Volatile Memory Systems.
### Authors
* Zixuan Wang, UC San Diego
* Mohammadkazem Taram, Purdue University and UC San Diego
* Daniel Moghimi, UT Austin and UC San Diego
* Steven Swanson, UC San Diego
* Dean Tullsen, UC San Diego
* Jishen Zhao, UC San Diego
### Abstract
> We study microarchitectural side-channel attacks and defenses on non-volatile RAM (NVRAM) DIMMs. In this study, we first perform reverse-engineering of NVRAMs as implemented by the Intel Optane DIMM and reveal several of its previously undocumented microarchitectural details: on-DIMM cache structures (NVCache) and wear-leveling policies. Based on these findings, we first develop cross-core and cross-VM covert channels to establish the channel capacity of these shared hardware resources. Then, we devise NVCache-based side channels under the umbrella of NVLeak. We apply NVLeak to a series of attack case studies, including compromising the privacy of databases and key-value storage backed by NVRAM and spying on the execution path of code pages when NVRAM is used as a volatile runtime memory. Our results show that side-channel attacks exploiting NVRAM are practical and defeat previously-proposed defense that only focuses on on-chip hardware resources. To fill this gap in defense, we develop system-level mitigations based on cache partitioning to prevent side-channel leakage from NVCache.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/wang-zixuan](https://www.usenix.org/conference/usenixsecurity23/presentation/wang-zixuan)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-wang-zixuan.pdf](https://www.usenix.org/system/files/usenixsecurity23-wang-zixuan.pdf)
## Cipherfix: Mitigating Ciphertext Side-Channel Attacks in Software.
### Authors
* Jan Wichelmann, University of Lübeck
* Anna Pätschke, University of Lübeck
* Luca Wilke, University of Lübeck
* Thomas Eisenbarth, University of Lübeck
### Abstract
> Trusted execution environments (TEEs) provide an environment for running workloads in the cloud without having to trust cloud service providers, by offering additional hardware-assisted security guarantees. However, main memory encryption as a key mechanism to protect against system-level attackers trying to read the TEE's content and physical, off-chip attackers, is insufficient. The recent Cipherleaks attacks infer secret data from TEE-protected implementations by analyzing ciphertext patterns exhibited due to deterministic memory encryption. The underlying vulnerability, dubbed the ciphertext side-channel, is neither protected by state-of-the-art countermeasures like constant-time code nor by hardware fixes. Thus, in this paper, we present a software-based, drop-in solution that can harden existing binaries such that they can be safely executed under TEEs vulnerable to ciphertext side-channels, without requiring recompilation. We combine taint tracking with both static and dynamic binary instrumentation to find sensitive memory locations, and mitigate the leakage by masking secret data before it gets written to memory. This way, although the memory encryption remains deterministic, we destroy any secret-dependent patterns in encrypted memory. We show that our proof-of-concept implementation protects various constant-time implementations against ciphertext side-channels with reasonable overhead.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/wichelmann](https://www.usenix.org/conference/usenixsecurity23/presentation/wichelmann)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-wichelmann.pdf](https://www.usenix.org/system/files/usenixsecurity23-wichelmann.pdf)
## Side-Channel Attacks on Optane Persistent Memory.
### Authors
* Sihang Liu, University of Virginia
* Suraaj Kanniwadi, Cornell University
* Martin Schwarzl, Graz University of Technology
* Andreas Kogler, Graz University of Technology
* Daniel Gruss, Graz University of Technology
* Samira Khan, University of Virginia
### Abstract
> There is a constant evolution of technology for cloud environments, including the development of new memory storage technology, such as persistent memory. The newly-released Intel Optane persistent memory provides high-performance, persistent, and byte-addressable access for storage-class applications in data centers. While Optane’s direct data management is fast and efficient, it is unclear whether it comes with undesirable security implications. This is problematic, as cloud tenants are physically co-located on the same hardware.  In this paper, we present the first side-channel security analysis of Intel Optane persistent memory. We reverse-engineer the internal cache hierarchy, cache sizes, associativity, replacement policies, and wear-leveling mechanism of the Optane memory. Based on this reverse-engineering, we construct four new attack primitives on Optane’s internal components. We then present four case studies using these attack primitives. First, we present local covert channels based on Optane’s internal caching. Second, we demonstrate a keystroke side-channel attack on a remote user via Intel’s Optane-optimized key-value store, pmemkv. Third, we study a fully remote covert channel through pmemkv. Fourth, we present our Note Board attack, also through pmemkv, enabling two parties to store and exchange messages covertly across long time gaps and even power cycles of the server. Finally, we discuss mitigations against our attacks.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/liu-sihang](https://www.usenix.org/conference/usenixsecurity23/presentation/liu-sihang)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-liu-sihang.pdf](https://www.usenix.org/system/files/usenixsecurity23-liu-sihang.pdf)
## Pspray: Timing Side-Channel based Linux Kernel Heap Exploitation Technique.
### Authors
* Yoochan Lee, Seoul National University
* Jinhan Kwak, Seoul National University
* Junesoo Kang, UNIST
* Yuseok Jeon, UNIST
* Byoungyoung Lee, Seoul National University
### Abstract
> The stealthiness of an attack is the most vital consideration for an attacker to reach their goals without being detected. Therefore, attackers put in a great deal of effort to increase the success rate of attacks in order not to expose information on the attacker and attack attempts resulting from failures. Exploitation of the kernel, which is a prime target for the attacker, usually takes advantage of heap-based vulnerabilities, and these exploits' success rates fortunately remain low (e.g., 56.1% on average) due to the operating principle of the default Linux kernel heap allocator, SLUB. This paper presents Pspray, a timing side-channel attack-based exploitation technique that significantly increases the success probability of exploitation. According to our evaluation, with 10 real-world vulnerabilities, Pspray significantly improves the success rate of all those vulnerabilities (e.g., from 56.1% to 97.92% on average). To prevent this exploitation technique from being abused by the attacker, we further introduce a new defense mechanism to mitigate the threat of Pspray. After applying mitigation, the overall success rate of Pspray becomes similar to that from before using Pspray with negligible performance overhead (0.25%) and memory overhead (0.52%).
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/lee-yoochan](https://www.usenix.org/conference/usenixsecurity23/presentation/lee-yoochan)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-lee-yoochan.pdf](https://www.usenix.org/system/files/usenixsecurity23-lee-yoochan.pdf)
## CipherH: Automated Detection of Ciphertext Side-channel Vulnerabilities in Cryptographic Implementations.
### Authors
* Sen Deng, Southern University of Science and Technology
* Mengyuan Li, The Ohio State University
* Yining Tang, Southern University of Science and Technology
* Shuai Wang, Hong Kong University of Science and Technology
* Shoumeng Yan, The Ant Group
* Yinqian Zhang, Southern University of Science and Technology
### Abstract
> The ciphertext side channel is a new type of side channels that exploits deterministic memory encryption of trusted execution environments (TEE). It enables the adversary with read accesses to the ciphertext of the encrypted memory, either logically or physically, to compromise cryptographic implementations protected by TEEs with high fidelity. Prior studies have concluded that the ciphertext side channel is a severe threat to not only AMD SEV-SNP, where the vulnerability was first discovered, but to all TEEs with deterministic memory encryption. In this paper, we propose CipherH, a practical framework for automating the analysis of cryptographic software and detecting program points vulnerable to ciphertext side channels. CipherH is designed to perform a practical hybrid analysis in production cryptographic software, with a speedy dynamic taint analysis to track the usage of secrets throughout the entire program and a static symbolic execution procedure on each “tainted” function to reason about ciphertext side channel vulnerabilities using symbolic constraint. Empirical evaluation has led to the discovery of over 200 vulnerable program points from the state-of-the-art RSA and ECDSA/ECDH implementations from OpenSSL, MbedTLS, and WolfSSL. Representative cases have been reported to and confirmed or patched by the developers.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/deng-sen](https://www.usenix.org/conference/usenixsecurity23/presentation/deng-sen)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-deng-sen.pdf](https://www.usenix.org/system/files/usenixsecurity23-deng-sen.pdf)
## ICSPatch: Automated Vulnerability Localization and Non-Intrusive Hotpatching in Industrial Control Systems using Data Dependence Graphs.
### Authors
* Prashant Hari Narayan Rajput, NYU Tandon School of Engineering
* Constantine Doumanidis, New York University Abu Dhabi
* Michail Maniatakos, New York University Abu Dhabi
### Abstract
> The paradigm shift of enabling extensive intercommunication between the Operational Technology (OT) and Information Technology (IT) devices allows vulnerabilities typical to the IT world to propagate to the OT side. Therefore, the security layer offered in the past by air gapping is removed, making security patching for OT devices a hard requirement. Conventional patching involves a device reboot to load the patched code in the main memory, which does not apply to OT devices controlling critical processes due to downtime, necessitating in-memory vulnerability patching. Furthermore, these control binaries are often compiled by in-house proprietary compilers, further hindering the patching process and placing reliance on OT vendors for rapid vulnerability discovery and patch development. The current state-of-the-art hotpatching approaches only focus on firmware and/or RTOS. Therefore, in this work, we develop ICSPatch, a framework to automate control logic vulnerability localization using Data Dependence Graphs (DDGs). With the help of DDGs, ICSPatch pinpoints the vulnerability in the control application. As an independent second step, ICSPatch can non-intrusively hotpatch vulnerabilities in the control application directly in the main memory of Programmable Logic Controllers while maintaining reliable continuous operation. To evaluate our framework, we test ICSPatch on a synthetic dataset of 24 vulnerable control application binaries from diverse critical infrastructure sectors. Results show that ICSPatch could successfully localize all vulnerabilities and generate patches accordingly. Furthermore, the patch added negligible latency increase in the execution cycle while maintaining correctness and protection against the vulnerability.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/rajput](https://www.usenix.org/conference/usenixsecurity23/presentation/rajput)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-rajput.pdf](https://www.usenix.org/system/files/usenixsecurity23-rajput.pdf)
## Access Denied: Assessing Physical Risks to Internet Access Networks.
### Authors
* Alex, CAIDA / UC San Diego
* er Marder, CAIDA / UC San Diego
* Zesen Zhang, UC San Diego
* Ricky Mok, CAIDA / UC San Diego
* Ramakrishna Padmanabhan, CAIDA / UC San Diego
* Bradley Huffaker, CAIDA/ UC San Diego
* Matthew Luckie, University of Waikato
* Alberto Dainotti, Georgia Tech
* kc claffy, CAIDA/ UC San Diego
* Alex C. Snoeren, UC San Diego
* Aaron Schulman, UC San Diego
### Abstract
> Regional access networks play an essential role in connecting both wireline and mobile users to the Internet. Today’s access networks support 5G cellular phones, cloud services, hospital and financial services, and remote work essential to the modern economy. Yet long-standing economic and architectural constraints produce points of limited redundancy that leave these networks exposed to targeted physical attacks resulting in widespread outages. This risk was dramatically shown in December 2020, when a bomb destroyed part of AT&T’s regional access network in Nashville, Tennessee disabling 911 emergency dispatch, air traffic control, hospital networks, and credit card processing, among other services. We combine new techniques for analyzing access-network infrastructure deployments with measurements of large-scale outages to demonstrate the feasibility and quantify potential impacts of targeted attacks. Our study yields insights into physical attack surfaces and resiliency limits of regional access networks. We analyze potential approaches to mitigate the risks we identify and discuss drawbacks identified by network operators. We hope that our empirical evaluation will inform risk assessments and operational practices, as well as motivate further analyses of this critical infrastructure.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/marder](https://www.usenix.org/conference/usenixsecurity23/presentation/marder)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-marder.pdf](https://www.usenix.org/system/files/usenixsecurity23-marder.pdf)
## ZBCAN: A Zero-Byte CAN Defense System.
### Authors
* Khaled Serag, Purdue University
* Rohit Bhatia, Purdue University
* Akram Faqih, Purdue University
* Muslum Ozgur Ozmen, Purdue University
* Vireshwar Kumar, Indian Institute of Technology, Delhi
* Z. Berkay Celik, Purdue University
* Dongyan Xu, Purdue University
### Abstract
> Controller Area Network (CAN) is a widely used network protocol. In addition to being the main communication medium for vehicles, it is also used in factories, medical equipment, elevators, and avionics. Unfortunately, CAN was designed without any security features. Consequently, it has come under scrutiny by the research community, showing its security weakness. Recent works have shown that a single compromised ECU on a CAN bus can launch a multitude of attacks ranging from message injection, to bus flooding, to attacks exploiting CAN's error-handling mechanism. Although several works have attempted to secure CAN, we argue that none of their approaches could be widely adopted for reasons inherent in their design. In this work, we introduce ZBCAN, a defense system that uses zero bytes of the CAN frame to secure against the most common CAN attacks, including message injection, impersonation, flooding, and error handling, without using encryption or MACs, while taking into consideration performance metrics such as delay, busload, and data-rate.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/serag](https://www.usenix.org/conference/usenixsecurity23/presentation/serag)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-serag.pdf](https://www.usenix.org/system/files/usenixsecurity23-serag.pdf)
## RIDAS: Real-time identification of attack sources on controller area networks.
### Authors
* Jiwoo Shin, Soongsil University
* Hyunghoon Kim, Soongsil University
* Seyoung Lee, Korea University
* Wonsuk Choi, Korea University
* Dong Hoon Lee, Korea University
* Hyo Jin Jo, Soongsil University
### Abstract
> Researchers have responded to various cyber attacks on controller area network (CAN) by studying technologies for identifying the source of an attack. However, existing attack source identification technologies have significantly lower accuracy depending on changes in vehicle environment (temperature, humidity, battery level, etc.), or have proven to be circumvented by identification-aware attackers, or do not provide real-time identification. A real-time attack node identification technology that cannot be bypassed by an attacker while not being affected by changes in the vehicle environment is an essential for developing cyber attack response technologies such as node isolation, security patch, digital forensics, etc. To meet this need, we propose a novel real-time attack node identification method, called RIDAS, which can identify the attack source by using the error handling rule of CAN. RIDAS injects bit errors into the abnormal message that have been detected by an existing intrusion detection system (IDS). The source that sent the abnormal message become the error passive state defined in CAN standard in which it cannot send consecutive messages. RIDAS then sequentially inspects all electronic control units (ECU) in the vehicle, and identifies the node in the error passive state by checking the priority reduction phenomenon that occurs in that state. Moreover, RIDAS deals with two issues, identification robustness and identification errors. Our experimental results on both a CAN bus prototype and one real vehicle have demonstrated that RIDAS can accurately identify an attack source without being affected by a vehicle's environmental change and can deal with both false positives of intrusion detection systems and RIDAS-aware attackers.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/shin](https://www.usenix.org/conference/usenixsecurity23/presentation/shin)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-shin.pdf](https://www.usenix.org/system/files/usenixsecurity23-shin.pdf)
## That Person Moves Like A Car: Misclassification Attack Detection for Autonomous Systems Using Spatiotemporal Consistency.
### Authors
* Yanmao Man, University of Arizona
* Raymond Muller, Purdue University
* Ming Li, University of Arizona
* Z. Berkay Celik, Purdue University
* Ryan Gerdes, Virginia Tech
### Abstract
> Autonomous systems commonly rely on object detection and tracking (ODT) to perceive the environment and predict the trajectory of surrounding objects for planning purposes. An ODT’s output contains object classes and tracks that are traditionally predicted independently. Recent studies have shown that ODT’s output can be falsified by various perception attacks with well-crafted noise, but existing defenses are limited to specific noise injection methods and thus fail to generalize. In this work we propose PercepGuard for the detection of misclassification attacks against perception modules regardless of attack methodologies. PercepGuard exploits the spatiotemporal properties of a detected object (inherent in the tracks), and cross-checks the consistency between the track and class predictions. To improve adversarial robustness against defense-aware (adaptive) attacks, we additionally consider context data (such as ego-vehicle velocity) for contextual consistency verification, which dramatically increases the attack difficulty. Evaluations with both real-world and simulated datasets produce a FPR of 5% and a TPR of 99% against adaptive attacks. A baseline comparison confirms the advantage of leveraging temporal features. Real-world experiments with displayed and projected adversarial patches show that PercepGuard detects 96% of the attacks on average.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/man](https://www.usenix.org/conference/usenixsecurity23/presentation/man)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-man.pdf](https://www.usenix.org/system/files/usenixsecurity23-man.pdf)
## TRust: A Compilation Framework for In-process Isolation to Protect Safe Rust against Untrusted Code.
### Authors
* Inyoung Bang, Seoul National University
* Martin Kayondo, Seoul National University
* Hyungon Moon, UNIST (Ulsan National Institute of Science and Technology)
* Yunheung Paek, Seoul National University
### Abstract
> Rust was invented to help developers build highly safe systems. It comes with a variety of programming constructs that put emphasis on safety and control of memory layout. Rust enforces strict discipline about a type system and ownership model to enable compile-time checks of all spatial and temporal safety errors. Despite this advantage in security, the restrictions imposed by Rust’s type system make it difficult or inefficient to express certain designs or computations. To ease or simplify their programming, developers thus often include untrusted code from unsafe Rust or external libraries written in other languages. Sadly, the programming practices embracing such untrusted code for flexibility or efficiency subvert the strong safety guarantees by safe Rust. This paper presents TRUST, a compilation framework which against untrusted code present in the program, provides trustworthy protection of safe Rust via in-process isolation. Its main strategy is allocating objects in an isolated memory region that is accessible to safe Rust but restricted from being written by the untrusted. To enforce this, TRUST employs software fault isolation and x86 protection keys. It can be applied directly to any Rust code without requiring manual changes. Our experiments reveal that TRUST is effective and efficient, incurring runtime overhead of only 7.55% and memory overhead of 13.30% on average when running 11 widely used crates in Rust.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/bang](https://www.usenix.org/conference/usenixsecurity23/presentation/bang)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-bang.pdf](https://www.usenix.org/system/files/usenixsecurity23-bang.pdf)
## Jinn: Hijacking Safe Programs with Trojans.
### Authors
* Komail Dharsee, University of Rochester
* John Criswell, University of Rochester
### Abstract
> Untrusted hardware supply chains enable malicious, powerful, and permanent alterations to processors known as hardware trojans. Such hardware trojans can undermine any software-enforced security policies deployed on top of the hardware. Existing defenses target a select set of hardware components, specifically those that implement hardware-enforced security mechanisms such as cryptographic cores, user/kernel privilege isolation, and memory protections. We observe that computing systems exercise general purpose processor logic to implement software-enforced security policies. This makes general purpose logic security critical since tampering with it could violate software-based security policies. Leveraging this insight, we develop a novel class of hardware trojans, which we dub Jinn trojans, that corrupt general-purpose hardware to enable flexible and powerful high level attacks. Jinn trojans deactivate compiler-based security-enforcement mechanisms, making type-safe software vulnerable to memory-safety attacks. We prototyped design-time Jinn trojans in the gem5 simulator and used them to attack programs written in Rust, inducing memory-safety vulnerabilities to launch control-flow hijacking attacks. We find that Jinn trojans can effectively compromise software-enforced security policies by compromising a single bit of architectural state with as little as 8 bits of persistent trojan-internal state. Thus, we show that Jinn trojans are effective even when planted in general purpose hardware, disjoint from any hardware-enforced security components. We show that protecting hardware-enforced security logic is insufficient to keep a system secure from hardware trojans.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/dharsee](https://www.usenix.org/conference/usenixsecurity23/presentation/dharsee)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-dharsee.pdf](https://www.usenix.org/system/files/usenixsecurity23-dharsee.pdf)
## ARGUS: A Framework for Staged Static Taint Analysis of GitHub Workflows and Actions.
### Authors
* Siddharth Muralee, Purdue University
* Igibek Koishybayev, North Carolina State University
* Aleks, North Carolina State University
* r Nahapetyan, North Carolina State University
* Greg Tystahl, North Carolina State University
* Brad Reaves, North Carolina State University
* Antonio Bianchi, Purdue University
* William Enck, North Carolina State University
* Alex, North Carolina State University
* ros Kapravelos, North Carolina State University
* Aravind Machiry, Purdue University
### Abstract
> Millions of software projects leverage automated workflows, like GitHub Actions, for performing common build and deploy tasks. While GitHub Actions have greatly improved the software build process for developers, they pose significant risks to the software supply chain by adding more dependencies and code complexity that may introduce security bugs. This paper presents ARGUS, the first static taint analysis system for identifying code injection vulnerabilities in GitHub Actions. We used ARGUS to perform a large-scale evaluation on 2,778,483 Workflows referencing 31,725 Actions and discovered critical code injection vulnerabilities in 4,307 Workflows and 80 Actions. We also directly compared ARGUS to two existing pattern-based GitHub Actions vulnerability scanners, demonstrating that our system exhibits a marked improvement in terms of vulnerability detection, with a discovery rate more than seven times (7x) higher than the state-of-the-art approaches. These results demonstrate that command injection vulnerabilities in the GitHub Actions ecosystem are not only pervasive but also require taint analysis to be detected.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/muralee](https://www.usenix.org/conference/usenixsecurity23/presentation/muralee)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-muralee.pdf](https://www.usenix.org/system/files/usenixsecurity23-muralee.pdf)
## McFIL: Model Counting Functionality-Inherent Leakage.
### Authors
* Maximilian Zinkus, Johns Hopkins University
* Yinzhi Cao, Johns Hopkins University
* Matthew D. Green, Johns Hopkins University
### Abstract
> Protecting the confidentiality of private data and using it for useful collaboration have long been at odds. Modern cryptography is bridging this gap through rapid growth in secure protocols such as multi-party computation, fully-homomorphic encryption, and zero-knowledge proofs. However, even with provable indistinguishability or zero-knowledgeness, confidentiality loss from leakage inherent to the functionality may partially or even completely compromise secret values without ever falsifying proofs of security. In this work, we describe McFIL, an algorithmic approach and accompanying software implementation which automatically quantifies intrinsic leakage for a given functionality. Extending and generalizing the Chosen-Ciphertext attack framework of Beck et al. with a practical heuristic, our approach not only quantifies but maximizes functionality-inherent leakage using Maximum Model Counting within a SAT solver. As a result, McFIL automatically derives approximately-optimal adversary inputs that, when used in secure protocols, maximize information leakage of private values.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/zinkus](https://www.usenix.org/conference/usenixsecurity23/presentation/zinkus)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-zinkus.pdf](https://www.usenix.org/system/files/usenixsecurity23-zinkus.pdf)
## Extracting Protocol Format as State Machine via Controlled Static Loop Analysis.
### Authors
* Qingkai Shi, Purdue University
* Xiangzhe Xu, Purdue University
* Xiangyu Zhang, Purdue University
### Abstract
> Reverse engineering of protocol message formats is critical for many security applications. Mainstream techniques use dynamic analysis and inherit its low-coverage problem—the inferred message formats only reflect the features of their inputs. To achieve high coverage, we choose to use static program analysis to infer message formats from the implementation of protocol parsers. In this work, we focus on a class of extremely challenging protocols whose formats can be described through constraint-enhanced regular expressions and are parsed via finite state machines. Such state machines are often implemented as complicated parsing loops, which are inherently difficult to analyze via conventional static analysis. Our new technique extracts a sound state machine by regarding each loop iteration as a state and the dependency between loop iterations as state transitions. To achieve high, i.e., path-sensitive, precision but avoid path explosion, the analysis is controlled to merge as many paths as possible based on carefully-designed rules. The evaluation results show that  we can infer a state machine and, thus, the message formats, in five minutes with over 90% precision and recall, far better than state of the art. We have also applied the state machines to enhance protocol fuzzers, which are improved by 20% to 230% in terms of coverage and detect ten more zero-days compared to baselines.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/shi-qingkai](https://www.usenix.org/conference/usenixsecurity23/presentation/shi-qingkai)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-shi-qingkai.pdf](https://www.usenix.org/system/files/usenixsecurity23-shi-qingkai.pdf)
## Isolated and Exhausted: Attacking Operating Systems via Site Isolation in the Browser.
### Authors
* Matthias Gierlings, Ruhr University Bochum
* Marcus Brinkmann, Ruhr University Bochum
* Jörg Schwenk, Ruhr University Bochum
### Abstract
> Site Isolation is a security architecture for browsers to protect against side-channel and renderer exploits by separating content from different sites at the operating system (OS) process level. By aligning web and OS security boundaries, Site Isolation promises to defend against these attack classes systematically in a streamlined architecture. However, Site Isolation is a large-scale architectural change that also makes OS resources more accessible to web attackers, and thus exposes web users to new risks at the OS level. In this paper, we present the first systematic study of OS resource exhaustion attacks based on Site Isolation, in the web attacker model, in three steps: (1) first-level resources directly accessible with Site Isolation; (2) second-level resources whose direct use is protected by the browser sandbox; (3) an advanced, real-world attack. For (1) we show how to create a fork bomb, highlighting conceptual gaps in the Site Isolation architecture. For (2) we show how to block all UDP sockets in an OS, using a variety of advanced browser features. For (3), we implement a fully working DNS Cache Poisoning attack based on Site Isolation, building on (2) and bypassing a major security feature of DNS. Our results show that the interplay between modern browser features and older OS features is increasingly problematic and needs further research.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/gierlings](https://www.usenix.org/conference/usenixsecurity23/presentation/gierlings)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-gierlings.pdf](https://www.usenix.org/system/files/usenixsecurity23-gierlings.pdf)
## Extending a Hand to Attackers: Browser Privilege Escalation Attacks via Extensions.
### Authors
* Young Min Kim, Seoul National University
* Byoungyoung Lee, Seoul National University
### Abstract
> Web browsers are attractive targets of attacks, whereby attackers can steal security- and privacy-sensitive data, such as online banking and social network credentials, from users. Thus, browsers adopt the principle of least privilege (PoLP) to minimize damage if compromised, namely, the multiprocess architecture and site isolation. We focus on browser extensions, which are third-party programs that extend the features of modern browsers (Chrome, Firefox, and Safari). The browser also applies PoLP to the extension architecture; that is, two primary extension components are separated, where one component is granted higher privilege, and the other is granted lower privilege. In this paper, we first analyze the security aspect of extensions. The analysis reveals that the current extension architecture imposes strict security requirements on extension developers, which are difficult to satisfy. In particular, 59 vulnerabilities are found in 40 extensions caused by violated requirements, allowing the attacker to perform privilege escalation attacks, including UXSS (universal cross-site scripting) and stealing passwords or cryptocurrencies in the extensions. Alarmingly, extensions are used by more than half and a third of Chrome and Firefox users, respectively. Furthermore, many extensions in which vulnerabilities are found are extremely popular and have more than 10 million users. To address the security limitations of the current extension architecture, we present FistBump, a new extension architecture to strengthen PoLP enforcement. FistBump employs strong process isolation between the webpage and content script; thus, the aforementioned security requirements are satisfied by design, thereby eliminating all the identified vulnerabilities. Moreover, FistBump’s design maintains the backward compatibility of the extensions; therefore, the extensions can run with FistBump without modification.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/kim-young-min](https://www.usenix.org/conference/usenixsecurity23/presentation/kim-young-min)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-kim-young-min.pdf](https://www.usenix.org/system/files/usenixsecurity23-kim-young-min.pdf)
## RøB: Ransomware over Modern Web Browsers.
### Authors
* Harun Oz, Cyber-Physical Systems Security Lab, Florida International University
* Ahmet Aris, Cyber-Physical Systems Security Lab, Florida International University
* Abbas Acar, Cyber-Physical Systems Security Lab, Florida International University
* Güliz Seray Tuncay, Google
* Leonardo Babun, Cyber-Physical Systems Security Lab, Florida International University
* Selcuk Uluagac, Cyber-Physical Systems Security Lab, Florida International University
### Abstract
> File System Access (FSA) API enables web applications to interact with files on the users' local devices. Even though it can be used to develop rich web applications, it greatly extends the attack surface, which can be abused by adversaries to cause significant harm. In this paper, for the first time in the literature, we extensively study this new attack vector that can be used to develop a powerful new ransomware strain over a browser. Using the FSA API and WebAssembly technology, we demonstrate this novel browser-based ransomware called RøB as a malicious web application that encrypts the user's files from the browser. We use RøB to perform impact analysis with different OSs, local directories, and antivirus solutions as well as to develop mitigation techniques against it. Our evaluations show that RøB can encrypt the victim's local files including cloud-integrated directories, external storage devices, and network-shared folders regardless of the access limitations imposed by the API. Moreover, we evaluate and show how the existing defense solutions fall short against RøB in terms of their feasibility. We propose three potential defense solutions to mitigate this new attack vector. These solutions operate at different levels (i.e., browser-level, file-system-level, and user-level) and are orthogonal to each other. Our work strives to raise awareness of the dangers of RøB-like browser-based ransomware strains and shows that the emerging API documentation (i.e., the popular FSA) can be equivocal in terms of reflecting the extent of the threat.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/oz](https://www.usenix.org/conference/usenixsecurity23/presentation/oz)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-oz.pdf](https://www.usenix.org/system/files/usenixsecurity23-oz.pdf)
## Pool-Party: Exploiting Browser Resource Pools for Web Tracking.
### Authors
* Peter Snyder, Brave Software
* Soroush Karami, University of Illinois at Chicago
* Arthur Edelstein, Brave Software
* Benjamin Livshits, Imperial College London
* Hamed Haddadi, Brave Software and Imperial College of London
### Abstract
> We identify class of covert channels in browsers that are not mitigated by current defenses, which we call “pool-party” attacks. Pool-party attacks allow sites to create covert channels by manipulating limited-but-unpartitioned resource pools. This class of attacks have been known to exist; in this work we show that they are more prevalent, more practical for exploitation, and allow exploitation in more ways, than previously identified. These covert channels have sufficient bandwidth to pass cookies and identifiers across site boundaries under practical and real-world conditions.We identify pool-party attacks in all popular browsers, and show they are practical cross-site tracking techniques (i.e., attacks take 0.6s in Chrome and Edge, and 7s in Firefox and Tor Browser).  In this paper we make the following contributions: first, we describe pool-party covert channel attacks that exploit limits in application-layer resource pools in browsers. Second, we demonstrate that pool-party attacks are practical, and can be used to track users in all popular browsers; we also share open source implementations of the attack. Third, we show that in Gecko based-browsers (including the Tor Browser) pool-party attacks can also be used for cross-profile tracking (e.g., linking user behavior across normal and private browsing sessions). Finally, we discuss possible defenses.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/snyder](https://www.usenix.org/conference/usenixsecurity23/presentation/snyder)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-snyder.pdf](https://www.usenix.org/system/files/usenixsecurity23-snyder.pdf)
## Checking Passwords on Leaky Computers: A Side Channel Analysis of Chrome's Password Leak Detect Protocol.
### Authors
* Andrew Kwong, UNC Chapel Hill
* Walter Wang, University of Michigan
* Jason Kim, Georgia Tech
* Jonathan Berger, Bar Ilan University
* Daniel Genkin, Georgia Tech
* Eyal Ronen, Tel Aviv University
* Hovav Shacham, UT Austin
* Riad Wahby, CMU
* Yuval Yarom, Ruhr University Bochum
### Abstract
> The scale and frequency of password database compromises has led to widespread and persistent credential stuffing attacks, in which attackers attempt to use credentials leaked from one service to compromise accounts with other services. In response, browser vendors have integrated password leakage detection tools, which automatically check the user's credentials against a list of compromised accounts upon each login, warning the user to change their password if a match is found. In particular, Google Chrome uses a centralized leakage detection service designed by Thomas et al. (USENIX Security '19) that aims to both preserve the user's privacy and hide the server's list of compromised credentials.In this paper, we show that Chrome's implementation of this protocol is vulnerable to several microarchitectural side-channel attacks that violate its security properties. Specifically, we demonstrate attacks against Chrome's use of the memory-hard hash function scrypt, its hash-to-elliptic curve function, and its modular inversion algorithm. While prior work discussed the theoretical possibility of side-channel attacks on scrypt, we develop new techniques that enable this attack in practice, allowing an attacker to recover the user's password with a single guess when using a dictionary attack. For modular inversion, we present a novel cryptanalysis of the Binary Extended Euclidian Algorithm (BEEA) that extracts its inputs given a single, noisy trace, thereby allowing a malicious server to learn information about a client's password.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/kwong](https://www.usenix.org/conference/usenixsecurity23/presentation/kwong)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-kwong.pdf](https://www.usenix.org/system/files/usenixsecurity23-kwong.pdf)
## Ultimate SLH: Taking Speculative Load Hardening to the Next Level.
### Authors
* Zhiyuan Zhang, The University of Adelaide
* Gilles Barthe, MPI-SP and IMDEA Software Institute
* Chitchanok Chuengsatiansup, The University of Melbourne
* Peter Schwabe, MPI-SP and Radboud University
* Yuval Yarom, The University of Adelaide
### Abstract
> In this paper we revisit the Spectre v1 vulnerability and software-only countermeasures.  Specifically, we systematically investigate the performance penalty and security properties of multiple variants of speculative load hardening (SLH). As part of this investigation we implement the "strong SLH" variant by Patrignani and Guarnieri (CCS 2021) as a compiler extension to LLVM. We show that none of the existing variants, including strong SLH, is able to protect against all Spectre v1 attacks in practice.  We do this by demonstrating, for the first time, that variable-time arithmetic instructions leak secret information even if they are executed only speculatively. We extend strong SLH to include protections also against this kind of leakage, implement the resulting full protection in LLVM, and use the SPEC2017 benchmarks to compare its performance to the existing variants of SLH and to code that uses fencing instructions to completely prevent speculative execution. We show that our proposed countermeasure offers full protection against Spectre v1 attacks at much better performance than code using fences. In fact, for several benchmarks our approach is more than twice as fast.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-zhiyuan-slh](https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-zhiyuan-slh)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-zhang-zhiyuan-slh.pdf](https://www.usenix.org/system/files/usenixsecurity23-zhang-zhiyuan-slh.pdf)
## Speculation at Fault: Modeling and Testing Microarchitectural Leakage of CPU Exceptions.
### Authors
* Jana Hofmann, Azure Research, Microsoft
* Emanuele Vannacci, Vrije Universiteit Amsterdam
* Cédric Fournet, Azure Research, Microsoft
* Boris Köpf, Azure Research, Microsoft
* Oleksii Oleksenko, Azure Research, Microsoft
### Abstract
> Microarchitectural leakage models provide effective tools to prevent vulnerabilities such as Spectre and Meltdown via secure co-design: For software, they provide a foundation for secure compilation and verification; for hardware, they provide a target specification to test and verify against. Unfortunately, existing leakage models are severely limited: None of them covers CPU exceptions, which are essential to implement security abstractions such as virtualization and memory protection, and which are the source of critical vulnerabilities such as Meltdown, MDS, and Foreshadow. In this paper, we provide the first leakage models for CPU exceptions, together with new tools for testing black-box CPUs against them. We run extensive experiments and successively refine these models, until we precisely capture the leakage for a representative subset of exceptions on four different x86 microarchitectures. In the process, we contradict, refine, and corroborate a large number of findings from prior work, and we uncover three novel transient leaks affecting stores to non-canonical addresses, stores to read-only memory, and divisions by zero.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/hofmann](https://www.usenix.org/conference/usenixsecurity23/presentation/hofmann)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-hofmann.pdf](https://www.usenix.org/system/files/usenixsecurity23-hofmann.pdf)
## ProSpeCT: Provably Secure Speculation for the Constant-Time Policy.
### Authors
* Lesly-Ann Daniel, imec-DistriNet, KU Leuven
* Marton Bognar, imec-DistriNet, KU Leuven
* Job Noorman, imec-DistriNet, KU Leuven
* Sébastien Bardin, CEA, LIST, Université Paris Saclay
* Tamara Rezk, INRIA, Université Côte d’Azur, Sophia Antipolis
* Frank Piessens, imec-DistriNet, KU Leuven
### Abstract
> We propose ProSpeCT, a generic formal processor model providing provably secure speculation for the constant-time policy. For constant-time programs under a non-speculative semantics, ProSpeCT guarantees that speculative and out-of-order execution cause no microarchitectural leaks. This guarantee is achieved by tracking secrets in the processor pipeline and ensuring that they do not influence the microarchitectural state during speculative execution. Our formalization covers a broad class of speculation mechanisms, generalizing prior work. As a result, our security proof covers all known Spectre attacks, including load value injection (LVI) attacks. In addition to the formal model, we provide a prototype hardware implementation of ProSpeCT on a RISC-V processor and show evidence of its low impact on hardware cost, performance, and required software changes. In particular, the experimental evaluation confirms our expectation that for a compliant constant-time binary, enabling ProSpeCT incurs no performance overhead.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/daniel](https://www.usenix.org/conference/usenixsecurity23/presentation/daniel)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-daniel.pdf](https://www.usenix.org/system/files/usenixsecurity23-daniel.pdf)
## Title Redacted Due to Vulnerability Embargo.
### Authors
* Daniel Moghimi, UCSD
### Abstract
> We introduce Downfall attacks, new transient execution attacks that undermine the security of computers running everywhere across the internet. We exploit the gather instruction on high-performance x86 CPUs to leak data across boundaries of user-kernel, processes, virtual machines, and trusted execution environments. We also develop practical and end-to-end attacks to steal cryptographic keys, program’s runtime data, and even data at rest (arbitrary data). Our findings, exploitation techniques, and demonstrated attacks defeat all previous defenses, calling for critical hardware fixes and security updates for widely-used client and server computers.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/moghimi](https://www.usenix.org/conference/usenixsecurity23/presentation/moghimi)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-moghimi.pdf](https://www.usenix.org/system/files/usenixsecurity23-moghimi.pdf)
## FACE-AUDITOR: Data Auditing in Facial Recognition Systems.
### Authors
* Min Chen, CISPA Helmholtz Center for Information Security
* Zhikun Zhang, CISPA Helmholtz Center for Information Security and Stanford University
* Tianhao Wang, University of Virginia
* Michael Backes, CISPA Helmholtz Center for Information Security
* Yang Zhang, CISPA Helmholtz Center for Information Security
### Abstract
> Few-shot-based facial recognition systems have gained increasing attention due to their scalability and ability to work with a few face images during the model deployment phase. However, the power of facial recognition systems enables anyone with moderate resources to canvas the Internet and build well-performed facial recognition models without people's awareness and consent. To prevent the face images from being misused, one straightforward approach is to modify the raw face images before sharing them, which inevitably destroys the semantic information and is still prone to adaptive attacks. Therefore, an auditing method that does not interfere with the facial recognition model's utility and cannot be quickly bypassed is urgently needed. In this paper, we formulate the auditing process as a user-level membership inference problem, and propose a complete toolkit FACE-AUDITOR that can carefully choose the probing set to query the few-shot-based facial recognition model and determine whether any of a user's face images is used in training the model. We further propose to use the similarity scores between the original face images as reference information to improve the auditing performance. Extensive experiments on multiple real-world face image datasets show that FACE-AUDITOR can achieve auditing accuracy of up to 99%. Finally, we show that FACE-AUDITOR is robust in the presence of several perturbation mechanisms to the training images or the target models. The source code of our experiments can be found at https://anonymous.4open.science/r/FACE-AUDITOR.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/chen-min](https://www.usenix.org/conference/usenixsecurity23/presentation/chen-min)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-chen-min.pdf](https://www.usenix.org/system/files/usenixsecurity23-chen-min.pdf)
## UnGANable: Defending Against GAN-based Face Manipulation.
### Authors
* Zheng Li, CISPA Helmholtz Center for Information Security
* Ning Yu, Salesforce Research
* Ahmed Salem, Microsoft Research
* Michael Backes, CISPA Helmholtz Center for Information Security
* Mario Fritz, CISPA Helmholtz Center for Information Security
* Yang Zhang, CISPA Helmholtz Center for Information Security
### Abstract
> Deepfakes pose severe threats of visual misinformation to our society. One representative deepfake application is face manipulation that modifies a victim's facial attributes in an image, e.g., changing her age or hair color. The state-of-the-art face manipulation techniques rely on Generative Adversarial Networks (GANs). In this paper, we propose the first defense system, namely UnGANable, against GAN-inversion-based face manipulation.  In specific, UnGANable focuses on defending GAN inversion, an essential step for face manipulation. Its core technique is to search for alternative images (called cloaked images) around the original images (called target images) in image space.  When posted online, these cloaked images can jeopardize the GAN inversion process. We consider two state-of-the-art inversion techniques including optimization-based inversion and hybrid inversion, and design five different defenses under five scenarios depending on the defender's background knowledge. Extensive experiments on four popular GAN models trained on two benchmark face datasets show that UnGANable achieves remarkable effectiveness and utility performance, and outperforms multiple baseline methods. We further investigate four adaptive adversaries to bypass UnGANable and show that some of them are slightly effective.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/li-zheng](https://www.usenix.org/conference/usenixsecurity23/presentation/li-zheng)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-li-zheng.pdf](https://www.usenix.org/system/files/usenixsecurity23-li-zheng.pdf)
## Fairness Properties of Face Recognition and Obfuscation Systems.
### Authors
* Harrison Rosenberg, University of Wisconsin–Madison
* Brian Tang, University of Michigan
* Kassem Fawaz, University of Wisconsin–Madison
* Somesh Jha, University of Wisconsin–Madison
### Abstract
> The proliferation of automated face recognition in the commercial and government sectors has caused significant privacy concerns for individuals. One approach to address these privacy concerns is to employ evasion attacks against the metric embedding networks powering face recognition systems: Face obfuscation systems generate imperceptibly perturbed images that cause face recognition systems to misidentify the user. Perturbed faces are generated on metric embedding networks, which are known to be unfair in the context of face recognition. A question of demographic fairness naturally follows: are there demographic disparities in face obfuscation system performance? We answer this question with an analytical and empirical exploration of recent face obfuscation systems. Metric embedding networks are found to be demographically aware: face embeddings are clustered by demographic. We show how this clustering behavior leads to reduced face obfuscation utility for faces in minority groups. An intuitive analytical model yields insight into these phenomena.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/rosenberg](https://www.usenix.org/conference/usenixsecurity23/presentation/rosenberg)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-rosenberg.pdf](https://www.usenix.org/system/files/usenixsecurity23-rosenberg.pdf)
## GlitchHiker: Uncovering Vulnerabilities of Image Signal Transmission with IEMI.
### Authors
* Qinhong Jiang, Zhejiang University
* Xiaoyu Ji, Zhejiang University
* Chen Yan, Zhejiang University
* Zhixin Xie, Zhejiang University
* Haina Lou, Zhejiang University
* Wenyuan Xu, Zhejiang University
### Abstract
> Cameras have evolved into one of the most important gadgets in a variety of applications. In this paper, we identify a new class of vulnerabilities involving the hitherto disregarded image signal transmission phase and explain the underlying principles of camera glitches for the first time. Based on the vulnerabilities, we design the GlitchHiker attack that can actively induce controlled glitch images of a camera at various positions, widths, and numbers using intentional electromagnetic interference (IEMI). We successfully launch the GlitchHiker attack on 8 off-the-shelf camera systems in 5 categories in their original packages at a distance of up to 30 cm. Experiments with 2 case studies involving 4 object detectors and 2 face detectors show that injecting one ribboning suffices to hide, create or alter objects and persons with a maximum success rate of 98.5% and 80.4%, respectively. Then, we discuss real-world attack scenarios and perform preliminary investigations on the feasibility of targeted attacks. Finally, we propose hardware- and software-based countermeasures.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/jiang-qinhong](https://www.usenix.org/conference/usenixsecurity23/presentation/jiang-qinhong)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-jiang-qinhong.pdf](https://www.usenix.org/system/files/usenixsecurity23-jiang-qinhong.pdf)
## (M)WAIT for It: Bridging the Gap between Microarchitectural and Architectural Side Channels.
### Authors
* Ruiyi Zhang, CISPA Helmholtz Center for Information Security
* Taehyun Kim, Independent
* Daniel Weber, CISPA Helmholtz Center for Information Security
* Michael Schwarz, CISPA Helmholtz Center for Information Security
### Abstract
> In the last years, there has been a rapid increase in microarchitectural attacks, exploiting side effects of various parts of the CPU. Most of them have in common that they rely on timing differences, requiring an architectural high-resolution timer to make microarchitectural states visible to an attacker. In this paper, we present a new primitive that converts microarchitectural states into architectural states without relying on time measurements. We exploit the unprivileged idle-loop optimization instructions umonitor and umwait introduced with the new Intel microarchitectures (Tremont and Alder Lake). Although not documented, these instructions provide architectural feedback about the transient usage of a specified memory region. In three case studies, we show the versatility of our primitive. First, with Spectral, we present a way of enabling transient-execution attacks to leak bits architecturally with up to 200 kbit/s without requiring any architectural timer. Second, we show traditional side-channel attacks without relying on an architectural timer. Finally, we demonstrate that when augmented with a coarse-grained timer, we can also mount interrupt-timing attacks, allowing us to, e.g., detect which website a user opens. Our case studies highlight that the boundary between architecture and microarchitecture becomes more and more blurry, leading to new attack variants and complicating effective countermeasures.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-ruiyi](https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-ruiyi)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-zhang-ruiyi.pdf](https://www.usenix.org/system/files/usenixsecurity23-zhang-ruiyi.pdf)
## Collide+Power: Leaking Inaccessible Data with Software-based Power Side Channels.
### Authors
* Andreas Kogler, Graz University of Technology
* Jonas Juffinger, Graz University of Technology
* Lukas Giner, Graz University of Technology
* Lukas Gerlach, CISPA Helmholtz Center for Information Security
* Martin Schwarzl, Graz University of Technology
* Michael Schwarz, CISPA Helmholtz Center for Information Security
* Daniel Gruss, Graz University of Technology
* Stefan Mangard, Graz University of Technology
### Abstract
> Differential Power Analysis (DPA) measures single-bit differences between data values used in computer systems by statistical analysis of power traces. In this paper, we show that the mere co-location of data values, e.g., attacker and victim data in the same buffers and caches, leads to power leakage in modern CPUs that depends on a combination of both values, resulting in a novel attack, Collide+Power. We systematically analyze the power leakage of the CPU's memory hierarchy to derive precise leakage models enabling practical end-to-end attacks. These attacks can be conducted in software with any signal related to power consumption, e.g., power consumption interfaces or throttling-induced timing variations. Leakage due to throttling requires 133.3 times more samples than direct power measurements. We develop a novel differential measurement technique amplifying the exploitable leakage by a factor of 8.778 on average, compared to a straightforward DPA approach. We demonstrate that Collide+Power leaks single-bit differences from the CPU's memory hierarchy with fewer than 23000 measurements. Collide+Power varies attacker-controlled data in our end-to-end DPA attacks. We present a Meltdown-style attack, leaking from attacker-chosen memory locations, and a faster MDS-style attack, which leaks 4.82 bit/h. Collide+Power is a generic attack applicable to any modern CPU, arbitrary memory locations, and victim applications and data. However, the Meltdown-style attack is not yet practical, as it is limited by the state of the art of prefetching victim data into the cache, leading to an unrealistic real-world attack runtime with throttling of more than a year for a single bit. Given the different variants and potentially more practical prefetching methods, we consider Collide+Power a relevant threat that is challenging to mitigate.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/kogler](https://www.usenix.org/conference/usenixsecurity23/presentation/kogler)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-kogler.pdf](https://www.usenix.org/system/files/usenixsecurity23-kogler.pdf)
## Inception: Exposing New Attack Surfaces with Training in Transient Execution.
### Authors
* Daniël Trujillo, ETH Zurich
* Johannes Wikner, ETH Zurich
* Kaveh Razavi, ETH Zurich
### Abstract
> To protect against transient control-flow hijacks, software relies on a secure state of microarchitectural buffers that are involved in branching decisions. To achieve this secure state, hardware and software mitigations restrict or sanitize these microarchitectural buffers when switching the security context, e.g., when a user process enters the kernel. Unfortunately, we show that these mitigations do not prevent an attacker from manipulating the state of these microarchitectural buffers in many cases of interest. In particular, we present Training in Transient Execution (TTE), a new class of transient execution attacks that enables an attacker to train a target microarchitectural buffer after switching to the victim context. To show the impact of TTE, we build an end-to-end exploit called INCEPTION that creates an infinite transient loop in hardware to train the return stack buffer with an attacker-controlled target in all existing AMD Zen microarchitectures. INCEPTION leaks arbitrary kernel memory at a rate of 39 bytes/s on AMD Zen 4 despite all mitigations against transient control-flow hijacks, including the recent Automatic IBRS.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/trujillo](https://www.usenix.org/conference/usenixsecurity23/presentation/trujillo)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-trujillo.pdf](https://www.usenix.org/system/files/usenixsecurity23-trujillo.pdf)
## BunnyHop: Exploiting the Instruction Prefetcher.
### Authors
* Zhiyuan Zhang, The University of Adelaide
* Mingtian Tao, The University of Adelaide
* Sioli O'Connell, The University of Adelaide
* Chitchanok Chuengsatiansup, The University of Melbourne
* Daniel Genkin, Georgia Tech
* Yuval Yarom, The University of Adelaide
### Abstract
> The instruction prefetcher is a microarchitectural component whose task is to bring program code into the instruction cache. To predict which code is likely to be executed, the instruction prefetcher relies on the branch predictor. In this paper we investigate the instruction prefetcher in modern Intel processors. We first propose BunnyHop, a technique that uses the instruction prefetcher to encode branch prediction information as a cache state. We show how to use BunnyHop to perform low-noise attacks on the branch predictor. Specifically, we show how to implement attacks similar to Flush+Reload and Prime+Probe on the branch predictor instead of on the data caches. We then show that BunnyHop allows using the instruction prefetcher as a confused deputy to force cache eviction within a victim. We use this to demonstrate an attack on an implementation of AES protected with both cache coloring and data prefetch.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-zhiyuan-bunnyhop](https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-zhiyuan-bunnyhop)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-zhang-zhiyuan-bunnyhop.pdf](https://www.usenix.org/system/files/usenixsecurity23-zhang-zhiyuan-bunnyhop.pdf)
## Can a Deep Learning Model for One Architecture Be Used for Others? Retargeted-Architecture Binary Code Analysis.
### Authors
* Junzhe Wang, George Mason University
* Matthew Sharp, University of South Carolina
* Chuxiong Wu, George Mason University
* Qiang Zeng, George Mason University
* Lannan Luo, George Mason University
### Abstract
> NLP-inspired deep learning for binary code analysis demonstrates notable performance. Considering the diverse Instruction Set Architectures (ISAs) on the market, it is important to be able to analyze code of various ISAs. However, training a deep learning model usually requires a large amount of data, which poses a challenge for certain ISAs such as PowerPC that suffer from the "data scarcity" issue. For instance, acquiring a large dataset of PowerPC malware proves to be challenging. Moreover, given a binary analysis task and multiple ISAs, it takes much time and effort (e.g., for data collection, labeling and cleaning, and parameter tuning) to train one model per ISA. We propose a new direction, retargeted-architecture binary code analysis, to handle the data scarcity issue and alleviate the per-ISA effort. Our idea is to transfer knowledge from one ISA to others—that is, a model, trained with rich data and much time and effort for one ISA, can perform prediction for others without any modification. We showcase the idea through two important tasks: malware detection and function similarity detection. An extensive evaluation involving four ISAs (x86, ARM, MIPS, and PowerPC) demonstrates the effectiveness of the approach and the high performance is interpreted.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/wang-junzhe](https://www.usenix.org/conference/usenixsecurity23/presentation/wang-junzhe)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-wang-junzhe.pdf](https://www.usenix.org/system/files/usenixsecurity23-wang-junzhe.pdf)
## Decompiling x86 Deep Neural Network Executables.
### Authors
* Zhibo Liu, The Hong Kong University of Science and Technology
* Yuanyuan Yuan, The Hong Kong University of Science and Technology
* Shuai Wang, The Hong Kong University of Science and Technology
* Xiaofei Xie, Singapore Management University
* Lei Ma, University of Alberta
### Abstract
> Due to their widespread use on heterogeneous hardware devices, deep learning (DL) models are compiled into executables by DL compilers to fully leverage low-level hardware primitives. This approach allows DL computations to be undertaken at low cost across a variety of computing platforms, including CPUs, GPUs, and various hardware accelerators. We present BTD (Bin to DNN), a decompiler for deep neural network (DNN) executables. BTD takes DNN executables and outputs full model specifications, including types of DNN operators, network topology, dimensions, and parameters that are (nearly) identical to those of the input models. BTD delivers a practical framework to process DNN executables compiled by different DL compilers and with full optimizations enabled on x86 platforms. It employs learning-based techniques to infer DNN operators, dynamic analysis to reveal network architectures, and symbolic execution to facilitate inferring dimensions and parameters of DNN operators. Our evaluation reveals that BTD enables accurate recovery of full specifications of complex DNNs with millions of parameters (e.g., ResNet). The recovered DNN specifications can be re-compiled into a new DNN executable exhibiting identical behavior to the input executable. We show that BTD can boost two representative attacks, adversarial example generation and knowledge stealing, against DNN executables. We also demonstrate cross-architecture legacy code reuse using BTD, and envision BTD being used for other critical downstream tasks like DNN security hardening and patching.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/liu-zhibo](https://www.usenix.org/conference/usenixsecurity23/presentation/liu-zhibo)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-liu-zhibo.pdf](https://www.usenix.org/system/files/usenixsecurity23-liu-zhibo.pdf)
## AIRS: Explanation for Deep Reinforcement Learning based Security Applications.
### Authors
* Jiahao Yu, Northwestern University
* Wenbo Guo, Purdue University
* Qi Qin, ShanghaiTech University
* Gang Wang, University of Illinois at Urbana-Champaign
* Ting Wang, The Pennsylvania State University
* Xinyu Xing, Northwestern University
### Abstract
> Recently, we have witnessed the success of deep reinforcement learning (DRL) in many security applications, ranging from malware mutation to selfish blockchain mining. Like all other machine learning methods, the lack of explainability has been limiting its broad adoption as users have difficulty establishing trust in DRL models' decisions. Over the past years, different methods have been proposed to explain DRL models but unfortunately, they are often not suitable for security applications, in which explanation fidelity, efficiency, and the capability of model debugging are largely lacking.  In this work, we propose AIRS, a general framework to explain deep reinforcement learning-based security applications. Unlike previous works that pinpoint important features to the agent's current action, our explanation is at the step level. It models the relationship between the final reward and the key steps that a DRL agent takes, and thus outputs the steps that are most critical towards the final reward the agent has gathered. Using four representative security-critical applications, we evaluate AIRS from the perspectives of explainability, fidelity, stability, and efficiency. We show that AIRS could outperform alternative explainable DRL methods. We also showcase AIRS's utility, demonstrating that our explanation could facilitate the DRL model's failure offset, help users establish trust in a model decision, and even assist the identification of inappropriate reward designs.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/yu-jiahao](https://www.usenix.org/conference/usenixsecurity23/presentation/yu-jiahao)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-yu-jiahao.pdf](https://www.usenix.org/system/files/usenixsecurity23-yu-jiahao.pdf)
## Differential Testing of Cross Deep Learning Framework APIs: Revealing Inconsistencies and Vulnerabilities.
### Authors
* Zizhuang Deng, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Guozhu Meng, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Kai Chen, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Tong Liu, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Lu Xiang, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Chunyang Chen, Monash University, Australia
### Abstract
> With the increasing adoption of deep learning (DL) in various applications, developers often reuse models by, for example, performing model conversion among frameworks to raise productivity. However, security bugs in model conversion may make models behave differently across DL frameworks, and cause unpredictable errors. Prior studies primarily focus on the security of individual DL frameworks, but few of them can cope with the inconsistencies and security bugs during cross-framework conversion. Furthermore, the impact of these issues on DL applications remains largely unexplored. To this end, we propose TENSORSCOPE, a novel approach to test cross-framework APIs for security bugs. It takes as input a number of counterpart APIs that are supposed to be equivalent in functionality, then performs differential testing to identify the inconsistencies. We design novel strategies to boost testing efficiency, including 1) joint constraint analysis to raise the quality of test cases, and 2) error-guided test case fixing to refine the constraints for input. TENSORSCOPE is extensively evaluated on 1,658 APIs of six popular DL frameworks. The results show that TENSORSCOPE is more effective than FreeFuzz and DocTer by raising 28.7% and 24.3% code coverage, respectively. We find 257 bugs including 230 new bugs, and receive 8 CVEs and $1,100+ bounty with developers' acknowledgment. Most importantly, we make the first attempt to exploit these inconsistencies to make the accuracy of three models reduced by at most 3.5%.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/deng-zizhuang](https://www.usenix.org/conference/usenixsecurity23/presentation/deng-zizhuang)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-deng-zizhuang.pdf](https://www.usenix.org/system/files/usenixsecurity23-deng-zizhuang.pdf)
## Every Signature is Broken: On the Insecurity of Microsoft Office's OOXML Signatures.
### Authors
* Simon Rohlmann, Ruhr University Bochum
* Vladislav Mladenov, Ruhr University Bochum
* Christian Mainka, Ruhr University Bochum
* Daniel Hirschberger, Ruhr University Bochum
* Jörg Schwenk, Ruhr University Bochum
### Abstract
> Microsoft Office is one of the most widely used applications for office documents. For documents of prime importance, such as contracts and invoices, the content can be signed to guarantee authenticity and integrity. Since 2019, security researchers have uncovered attacks against the integrity protection in other office standards like PDF and ODF. Since Microsoft Office documents rely on different specifications and processing rules, the existing attacks are not applicable. We are the first to provide an in-depth analysis of Office Open XML (OOXML) Signatures, the Ecma/ISO standard that all Microsoft Office applications use. Our analysis reveals major discrepancies between the structure of office documents and the way digital signatures are verified. These discrepancies lead to serious security flaws in the specification and in the implementation. As a result, we discovered five new attack classes. Each attack allows attackers to modify the content in signed documents, while the signatures are still displayed as valid. We tested the attacks against different Microsoft Office versions on Windows and macOS, as well as against OnlyOffice Desktop on Windows, macOS and Linux. All tested Office versions are vulnerable. On macOS, we could reveal a surprising result: although Microsoft Office indicates that the document is protected by a signature, the signature is not validated. The attacks’ impact is alarming: attackers can arbitrarily manipulate the displayed content of a signed document, and victims are unable to detect the tampering. Even worse, we present a universal signature forgery attack that allows the attacker to create an arbitrary document and apply a signature extracted from a different source, such as an ODF document or a SAML token. For the victim, the document is displayed as validly signed by a trusted entity. We propose countermeasures to prevent such issues in the future. During a coordinated disclosure, Microsoft acknowledged and awarded our research with a bug bounty.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/rohlmann](https://www.usenix.org/conference/usenixsecurity23/presentation/rohlmann)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-rohlmann.pdf](https://www.usenix.org/system/files/usenixsecurity23-rohlmann.pdf)
## Downgrading DNSSEC: How to Exploit Crypto Agility for Hijacking Signed Zones.
### Authors
* Elias Heftrig, ATHENE and Fraunhofer SIT
* Haya Shulman, ATHENE, Fraunhofer SIT, and Goethe-Universität Frankfurt
* Michael Waidner, ATHENE, Fraunhofer SIT, and Technische Universität Darmstadt
### Abstract
> Cryptographic algorithm agility is an important property for DNSSEC: it allows easy deployment of new algorithms if the existing ones are no longer secure. Significant operational and research efforts are dedicated to pushing the deployment of new algorithms in DNSSEC forward. Recent research shows that DNSSEC is gradually achieving algorithm agility: most DNSSEC supporting resolvers can validate a number of different algorithms and domains are increasingly signed with cryptographically strong ciphers. In this work we show for the first time that the cryptographic agility in DNSSEC, although critical for making DNS secure with strong cryptography, also introduces a severe vulnerability. We find that under certain conditions, when new, unsupported algorithms are listed in signed DNS responses, the resolvers do not validate DNSSEC. As a result, domains that deploy new ciphers, risk exposing the validating resolvers to cache poisoning attacks. We use this to develop DNSSECdowngrade attacks and experimentally and ethically evaluate our attacks against popular DNS resolver implementations, public DNS providers, and DNS resolvers used by web clients. We validate the success of DNSSEC-downgrade attacks by poisoning the resolvers: we inject fake records, in signed domains, into the caches of validating resolvers. Our evaluations showed that during 2021 major DNS providers, such as Google Public DNS and Cloudflare, as well as 35% of DNS resolvers used by the web clients were vulnerable to our attacks. After coordinated disclosure with the affected operators, that number reduced to 5.03% in 2022. We trace the factors that led to this situation and provide recommendations.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/heftrig](https://www.usenix.org/conference/usenixsecurity23/presentation/heftrig)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-heftrig.pdf](https://www.usenix.org/system/files/usenixsecurity23-heftrig.pdf)
## Security Analysis of MongoDB Queryable Encryption.
### Authors
* Zichen Gui, ETH Zurich
* Kenneth G. Paterson, ETH Zurich
* Tianxin Tang, ETH Zurich
### Abstract
> In June 2022, MongoDB released Queryable Encryption (QE), an extension of their flagship database product, enabling keyword searches to be performed over encrypted data. This is the first integration of such searchable encryption technology into a widely-used database system.We provide an independent security analysis of QE. We show that certain logs, fundamental to the operation of QE and accessible to a real-world snapshot adversary, contain statistical information about the queries and data. This information can be extracted and exploited by our new inference attacks to recover both the queries and data, assuming adversarial access to an auxiliary dataset with a similar distribution to the original data.Our analysis highlights the challenges of integrating searchable encryption technology into modern, complex database systems. In particular, our attacks stem from the interplay between QE and MongoDB's existing logging system. They show how such interactions can compromise query and data privacy.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/gui](https://www.usenix.org/conference/usenixsecurity23/presentation/gui)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-gui_1.pdf](https://www.usenix.org/system/files/usenixsecurity23-gui_1.pdf)
## All cops are broadcasting: TETRA under scrutiny.
### Authors
* Carlo Meijer, Midnight Blue
* Wouter Bokslag, Midnight Blue
* Jos Wetzels, Midnight Blue
### Abstract
> This paper presents the first public in-depth security analysis of TETRA (Terrestrial Trunked Radio): a European standard for trunked radio globally used by government agencies, police, prisons, emergency services and military operators. Additionally, it is widely deployed in industrial environments such as factory campuses, harbor container terminals and airports, as well as critical infrastructure such as SCADA telecontrol of oil rigs, pipelines, transportation and electric and water utilities. Authentication and encryption within TETRA are handled by secret, proprietary cryptographic cipher-suites. This secrecy thwarts public security assessments and independent academic scrutiny of the protection that TETRA claims to provide.The widespread adoption of TETRA, combined with the often sensitive nature of the communications, raises legitimate questions regarding its cryptographic resilience. In this light, we have set out to achieve two main goals. First, we demonstrate the feasibility of obtaining the underlying secret cryptographic primitives through reverse engineering. Second, we provide an initial assessment of the robustness of said primitives in the context of the protocols in which they are used.We present five serious security vulnerabilities pertaining to TETRA, two of which are deemed critical. Furthermore, we present descriptions and implementations of the primitives, enabling further academic scrutiny. Our findings have been validated in practice using a common-off-the-shelf radio on a TETRA network lab setup.More than a year ago, we started to communicate our preliminary findings through a coordinated disclosure process with several key stakeholders. During this process we have actively supported these stakeholders in the identification, development and deployment of possible mitigations.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/meijer](https://www.usenix.org/conference/usenixsecurity23/presentation/meijer)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-meijer.pdf](https://www.usenix.org/system/files/usenixsecurity23-meijer.pdf)
## On the Feasibility of Malware Unpacking via Hardware-assisted Loop Profiling.
### Authors
* Binlin Cheng, Shandong University & Hubei Normal University
* Erika A Leal, Tulane University
* Haotian Zhang, The University of Texas at Arlington
* Jiang Ming, Tulane University
### Abstract
> Hardware Performance Counters (HPCs) are built-in registers of modern processors to count the occurrences of various micro-architectural events. Measuring HPCs values is a cost-effective way to characterize dynamic program behaviors. Because of the ease of use and tamper-resistant advantages, using HPCs coupled with machine learning models to address security problems is on the rise in recent years. However, lately the suitability of HPCs for security has been questioned in light of the non-determinism concerns: measurement errors caused by interrupt skid and time-division multiplexing can undermine the effectiveness of using HPCs in security applications. With these cautions in mind, we explore ways to tame hardware event’s non-determinism nature for malware unpacking, which is a long-standing challenge in malware analysis. Our research is motivated by two key observations. First, the unpacking process, which involves expensive iterations of decryption or decompression, can incur identifiable deviations in hardware events. Second, loop-centric HPCs profiling can minimize the imprecisions caused by interrupt skid and time-division multiplexing. Therefore, we utilize two mechanisms offered by Intel CPUs (i.e., Precise Event-Based Sampling (PEBS) and Last Branch Record) to develop a generic, hardware-assisted unpacking technique, called LoopHPCs. It offers a new, obfuscation-resilient solution to identify the original code from multiple “written-then-executed” layers. Our controlled experiments demonstrate that LoopHPCs can obtain precise and consistent HPCs values across different Intel CPU architectures and OSs.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/cheng-binlin](https://www.usenix.org/conference/usenixsecurity23/presentation/cheng-binlin)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-cheng-binlin.pdf](https://www.usenix.org/system/files/usenixsecurity23-cheng-binlin.pdf)
## Multiview: Finding Blind Spots in Access-Deny Issues Diagnosis.
### Authors
* Bingyu Shen, University of California, San Diego
* Tianyi Shan, University of California, San Diego
* Yuanyuan Zhou, University of California, San Diego
### Abstract
> Access-deny issues are hard to fix because it implies both availability and security requirements. On one hand, system administrators (sysadmins) need to make a change quickly to enable legitimate access. On the other hand, sysadmins need to make sure the change does not allow excessive access. Fulfilling the second requirement on security is especially challenging because it highly requires the sysadmins’ knowledge of the system environments and security context. Blind spots in knowledge and system settings may hinder sysadmins from finding the solutions that align with the security context. Insecure fixes can over-grant permissions, which may only get noticed after the security vulnerability gets exploited. This paper aims to help sysadmins reduce blind spots in diagnosis by providing multiple directions to resolve access-deny issues. We propose a system, called Multiview, that automatically mutates the configurations to explore possible directions to fix the access-deny issue and lets the configuration changes on each direction grant as few permissions as possible. Multiview provides a detailed diagnosis report, including access-control configurations that are related to the denial, possible configuration changes on different directions to allow the request, as well as the impact on the access-control state of the entire system. We conducted a user study to evaluate Multiview with 20 participants on five real-world access-deny issues. Multiview can reduce the percentage of insecure fixes from 44.0% to 2.0% and reduce the diagnosis time by 62.0% on average. We also evaluated Multiview on 112 real-world failure cases from eight different systems and server applications, and it can successfully diagnose 89 of them. Multiview accurately identifies the failure-causing configurations and provides possible directions to each access-deny issue within one minute.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/shen-bingyu-multiview](https://www.usenix.org/conference/usenixsecurity23/presentation/shen-bingyu-multiview)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-shen-bingyu-multiview.pdf](https://www.usenix.org/system/files/usenixsecurity23-shen-bingyu-multiview.pdf)
## Attacks are Forwarded: Breaking the Isolation of MicroVM-based Containers Through Operation Forwarding.
### Authors
* Jietao Xiao, State Key Lab of ISN, School of Cyber Engineering, Xidian University, China
* Nanzi Yang, State Key Lab of ISN, School of Cyber Engineering, Xidian University, China
* Wenbo Shen, Zhejiang University, China
* Jinku Li, State Key Lab of ISN, School of Cyber Engineering, Xidian University, China
* Xin Guo, State Key Lab of ISN, School of Cyber Engineering, Xidian University, China
* Zhiqiang Dong, Tencent Security Yunding Lab, China
* Fei Xie, Tencent Security Yunding Lab, China
* Jianfeng Ma, State Key Lab of ISN, School of Cyber Engineering, Xidian University, China
### Abstract
> People proposed to use virtualization techniques to reinforce the isolation between containers. In the design, each container runs inside a lightweight virtual machine (called microVM). MicroVM-based containers benefit from both the security of microVM and the high efficiency of the container, and thus are widely used on the public cloud.  However, in this paper, we demonstrate a new attack surface that can be exploited to break the isolation of the microVM-based container, called operation forwarding attacks. Our key observation is that certain operations of the microVM-based container are forwarded to host system calls and host kernel functions. The attacker can leverage the operation forwarding to exploit the host kernel’s vulnerabilities and exhaust host resources. To fully understand the security risk of operation forwarding attacks, we divide the components of the microVM-based container into three layers according to their functionalities and present corresponding attacking strategies to exploit the operation forwarding of each layer. Moreover, we design eight attacks against Kata Containers and Firecracker-based containers and conduct experiments on the local environment, AWS, and Alibaba Cloud. Our results show that the attacker can trigger potential privilege escalation, downgrade 93.4% IO performance and 75.0% CPU performance of the victim container, and even crash the host. We further give security suggestions for mitigating these attacks.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/xiao-jietao](https://www.usenix.org/conference/usenixsecurity23/presentation/xiao-jietao)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-xiao-jietao.pdf](https://www.usenix.org/system/files/usenixsecurity23-xiao-jietao.pdf)
## AutoFR: Automated Filter Rule Generation for Adblocking.
### Authors
* Hieu Le, University of California, Irvine
* Salma Elmalaki, University of California, Irvine
* Athina Markopoulou, University of California, Irvine
* Zubair Shafiq, University of California, Davis
### Abstract
> Adblocking relies on filter lists, which are manually curated and maintained by a community of filter list authors. Filter list curation is a laborious process that does not scale well to a large number of sites or over time. In this paper, we introduce AutoFR, a reinforcement learning framework to fully automate the process of filter rule creation and evaluation for sites of interest. We design an algorithm based on multi-arm bandits to generate filter rules that block ads while controlling the trade-off between blocking ads and avoiding visual breakage. We test AutoFR on thousands of sites and we show that it is efficient: it takes only a few minutes to generate filter rules for a site of interest. AutoFR is effective: it generates filter rules that can block 86% of the ads, as compared to 87% by EasyList, while achieving comparable visual breakage. Furthermore, AutoFR generates filter rules that generalize well to new sites. We envision that AutoFR can assist the adblocking community in filter rule generation at scale.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/le](https://www.usenix.org/conference/usenixsecurity23/presentation/le)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-le.pdf](https://www.usenix.org/system/files/usenixsecurity23-le.pdf)
## ACORN: Input Validation for Secure Aggregation.
### Authors
### Abstract
> Secure aggregation enables a server to learn the sum of client-held vectors in a privacy-preserving way, and has been applied to distributed statistical analysis and machine learning. In this paper, we both introduce a more efficient secure aggregation protocol and extend secure aggregation by enabling input validation, in which the server can check that clients' inputs satisfy constraints such as L0, L2, and Linfinity bounds. This prevents malicious clients from gaining disproportionate influence on the aggregate statistics or machine learning model. Our new secure aggregation protocol improves the computational efficiency of the state-of-the-art protocol of Bell et al. (CCS 2020) both asymptotically and concretely: we show via experimental evaluation that it results in 2-8X speedups in client computation in practical scenarios. Likewise, our extended protocol with input validation improves on prior work by more than 30X in terms of client communication (with comparable computation costs). Compared to the base protocols without input validation, the extended protocols incur only 0.1X additional communication, and can process binary indicator vectors of length 1M, or 16-bit dense vectors of length 250K, in under 80s of computation per client.
### Links
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/bell](https://www.usenix.org/conference/usenixsecurity23/presentation/bell)