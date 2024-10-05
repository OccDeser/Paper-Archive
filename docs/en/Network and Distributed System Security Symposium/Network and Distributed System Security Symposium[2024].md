# Network and Distributed System Security Symposium[2024]
## Architecting Trigger-Action Platforms for Security, Performance and Functionality.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#architecting-trigger-action-platforms-for-security-performance-and-functionality)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#architecting-trigger-action-platforms-for-security-performance-and-functionality)
### Authors
* Deepak Sirone Jegan, University of Wisconsin-Madison
* Michael Swift, University of Wisconsin-Madison
* Earlence Fernandes, University of California San Diego
### Abstract
> A Trigger-action platform (TAP) is a type of distributed system that allows end-users to create programs that stitch their web-based services together to achieve useful automation. For example, a program can be triggered when a new spreadsheet row is added, it can compute on that data and invoke an action, such as sending a message on Slack. Current TAP architectures require users to place complete trust in their secure operation. Experience has shown that unconditional trust in cloud services is unwarranted --- an attacker who compromises the TAP cloud service will gain access to sensitive data and devices for millions of users. In this work, we re-architect TAPs so that users have to place minimal trust in the cloud. Specifically, we design and implement TAPDance, a TAP that guarantees confidentiality and integrity of program execution in the presence of an untrustworthy TAP service. We utilize RISC-V Keystone enclaves to enable these security guarantees while minimizing the trusted software and hardware base. Performance results indicate that TAPDance outperforms a baseline TAP implementation using Node.js with 32% lower latency and 33% higher throughput on average.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/architecting-trigger-action-platforms-for-security-performance-and-functionality/](https://www.ndss-symposium.org/ndss-paper/architecting-trigger-action-platforms-for-security-performance-and-functionality/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-34-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-34-paper.pdf)
## Attributions for ML-based ICS Anomaly Detection: From Theory to Practice.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#attributions-for-ml-based-ics-anomaly-detection-from-theory-to-practice)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#attributions-for-ml-based-ics-anomaly-detection-from-theory-to-practice)
### Authors
* Clement Fung, Carnegie Mellon University
* Eric Zeng, Carnegie Mellon University
* Lujo Bauer, Carnegie Mellon University
### Abstract
> Industrial Control Systems (ICS) govern critical infrastructure like power plants and water treatment plants. ICS can be attacked through manipulations of its sensor or actuator values, causing physical harm. A promising technique for detecting such attacks is machine-learning-based anomaly detection, but it does not identify which sensor or actuator was manipulated and makes it difficult for ICS operators to diagnose the anomaly's root cause. Prior work has proposed using attribution methods to identify what features caused an ICS anomaly-detection model to raise an alarm, but it is unclear how well these attribution methods work in practice. In this paper, we compare state-of-the-art attribution methods for the ICS domain with real attacks from multiple datasets. We find that attribution methods for ICS anomaly detection do not perform as well as suggested in prior work and identify two main reasons. First, anomaly detectors often detect attacks either immediately or significantly after the attack start; we find that attributions computed at these detection points are inaccurate. Second, attribution accuracy varies greatly across attack properties, and attribution methods struggle with attacks on categorical-valued actuators. Despite these challenges, we find that ensembles of attributions can compensate for weaknesses in individual attribution methods. Towards practical use of attributions for ICS anomaly detection, we provide recommendations for researchers and practitioners, such as the need to evaluate attributions with diverse datasets and the potential for attributions in non-real-time workflows.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/attributions-for-ml-based-ics-anomaly-detection-from-theory-to-practice/](https://www.ndss-symposium.org/ndss-paper/attributions-for-ml-based-ics-anomaly-detection-from-theory-to-practice/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-216-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-216-paper.pdf)
## Bernoulli Honeywords.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#bernoulli-honeywords)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#bernoulli-honeywords)
### Authors
* Ke Coby Wang, Duke University
* Michael K. Reiter, Duke University
### Abstract
> Decoy passwords, or "honeywords," planted in a credential database can alert a site to its breach if ever submitted in a login attempt. To be effective, some honeywords must appear at least as likely to be user-chosen passwords as the real ones, and honeywords must be very difficult to guess without having breached the database, to prevent false breach alarms. These goals have proved elusive, however, for heuristic honeyword generation algorithms. In this paper we explore an alternative strategy in which the defender treats honeyword selection as a Bernoulli process in which each possible password (except the user-chosen one) is selected as a honeyword independently with some fixed probability. We show how Bernoulli honeywords can be integrated into two existing system designs for leveraging honeywords: one based on a honeychecker that stores the secret index of the user-chosen password in the list of account passwords, and another that does not leverage secret state at all. We show that Bernoulli honeywords enable analytic derivation of false breach-detection probabilities irrespective of what information the attacker gathers about the sites' users; that their true and false breach-detection probabilities demonstrate compelling efficacy; and that Bernoulli honeywords can even enable performance improvements in modern honeyword system designs.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/bernoulli-honeywords/](https://www.ndss-symposium.org/ndss-paper/bernoulli-honeywords/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-295-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-295-paper.pdf)
## BreakSPF: How Shared Infrastructures Magnify SPF Vulnerabilities Across the Internet.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#breakspf-how-shared-infrastructures-magnify-spf-vulnerabilities-across-the-internet)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#breakspf-how-shared-infrastructures-magnify-spf-vulnerabilities-across-the-internet)
### Authors
* Chuhan Wang, Tsinghua University
* Yasuhiro Kuranaga, Tsinghua University
* Yihang Wang, Tsinghua University
* Mingming Zhang, Zhongguancun Laboratory
* Linkai Zheng, Tsinghua University
* Xiang Li, Tsinghua University
* Jianjun Chen, Tsinghua University; Zhongguancun Laboratory
* Haixin Duan, Tsinghua University; Quan Cheng Lab; Zhongguancun Laboratory
* Yanzhong Lin, Coremail Technology Co. Ltd
* Qingfeng Pan, Coremail Technology Co. Ltd
### Abstract
> Email spoofing attacks pose a severe threat to email systems by forging the sender's address to deceive email recipients. Sender Policy Framework (SPF), an email authentication protocol that verifies senders by their IP addresses, is critical for preventing email spoofing attacks. However, attackers can bypass SPF validation and launch convincing spoofing attacks that evade email authentication. This paper proposes BreakSPF, a novel attack framework that bypasses SPF validation to enable email spoofing. Attackers can actively target domains with permissive SPF configurations by utilizing cloud services, proxies, and content delivery networks (CDNs) with shared IP pools. We leverage BreakSPF to conduct a large-scale experiment evaluating the security of SPF deployment across Tranco top 1 million domain names. We uncover that 23,916 domains are vulnerable to BreakSPF attacks, including 23 domains that rank within the top 1,000 most popular domains. The results underscore the widespread SPF configuration vulnerabilities and their potential to undermine the security of email systems. Our study provides valuable insights for detecting and mitigating SPF vulnerabilities and strengthening email system security overall.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/breakspf-how-shared-infrastructures-magnify-spf-vulnerabilities-across-the-internet/](https://www.ndss-symposium.org/ndss-paper/breakspf-how-shared-infrastructures-magnify-spf-vulnerabilities-across-the-internet/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-113-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-113-paper.pdf)
## Compensating Removed Frequency Components: Thwarting Voice Spectrum Reduction Attacks.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#compensating-removed-frequency-components-thwarting-voice-spectrum-reduction-attacks)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#compensating-removed-frequency-components-thwarting-voice-spectrum-reduction-attacks)
### Authors
* Shu Wang, George Mason University
* Kun Sun, George Mason University
* Qi Li, Tsinghua University
### Abstract
> Automatic speech recognition (ASR) provides diverse audio-to-text services for humans to communicate with machines. However, recent research reveals ASR systems are vulnerable to various malicious audio attacks. In particular, by removing the non-essential frequency components, a new spectrum reduction attack can generate adversarial audios that can be perceived by humans but cannot be correctly interpreted by ASR systems. It raises a new challenge for content moderation solutions to detect harmful content in audio and video available on social media platforms. In this paper, we propose an acoustic compensation system named ACE to counter the spectrum reduction attacks over ASR systems. Our system design is based on two observations, namely, frequency component dependencies and perturbation sensitivity. First, since the Discrete Fourier Transform computation inevitably introduces spectral leakage and aliasing effects to the audio frequency spectrum, the frequency components with similar frequencies will have a high correlation. Thus, considering the intrinsic dependencies between neighboring frequency components, it is possible to recover more of the original audio by compensating for the removed components based on the remaining ones. Second, since the removed components in the spectrum reduction attacks can be regarded as an inverse of adversarial noise, the attack success rate will decrease when the adversarial audio is replayed in an over-the-air scenario. Hence, we can model the acoustic propagation process to add over-the-air perturbations into the attacked audio. We implement a prototype of ACE and the experiments show that ACE can effectively reduce up to 87.9% of ASR inference errors caused by spectrum reduction attacks. Furthermore, by analyzing the residual errors on real audio samples, we summarize six general types of ASR inference errors and investigate the error causes and potential mitigation solutions.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/compensating-removed-frequency-components-thwarting-voice-spectrum-reduction-attacks/](https://www.ndss-symposium.org/ndss-paper/compensating-removed-frequency-components-thwarting-voice-spectrum-reduction-attacks/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-150-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-150-paper.pdf)
## Compromising Industrial Processes using Web-Based Programmable Logic Controller Malware.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#compromising-industrial-processes-using-web-based-programmable-logic-controller-malware)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#compromising-industrial-processes-using-web-based-programmable-logic-controller-malware)
### Authors
* Ryan Pickren, Georgia Institute of Technology
* Tohid Shekari, Georgia Institute of Technology
* Saman Zonouz, Georgia Institute of Technology
* Raheem Beyah, Georgia Institute of Technology
### Abstract
> We present a novel approach to developing programmable logic controller (PLC) malware that proves to be more flexible, resilient, and impactful than current strategies. While previous attacks on PLCs infect either the control logic or firmware portions of PLC computation, our proposed malware exclusively infects the web application hosted by the emerging embedded web servers within the PLCs. This strategy allows the malware to stealthily attack the underlying real-world machinery using the legitimate web application program interfaces (APIs) exposed by the admin portal website. Such attacks include falsifying sensor readings, disabling safety alarms, and manipulating physical actuators. Furthermore, this approach has significant advantages over existing PLC malware techniques (control logic and firmware) such as platform independence, ease-of-deployment, and higher levels of persistence. Our research shows that the emergence of web technology in industrial control environments has introduced new security concerns that are not present in the IT domain or consumer IoT devices. Depending on the industrial process being controlled by the PLC, our attack can potentially cause catastrophic incidents or even loss of life. We verified these claims by performing a Stuxnet-style attack using a prototype implementation of this malware on a widely-used PLC model by exploiting zero-day vulnerabilities that we discovered during our research (CVE-2022-45137, CVE-2022-45138, CVE-2022-45139, and CVE-2022-45140). Our investigation reveals that every major PLC vendor (80% of global market share) produces a PLC that is vulnerable to our proposed attack vector. Lastly, we discuss potential countermeasures and mitigations.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/compromising-industrial-processes-using-web-based-programmable-logic-controller-malware/](https://www.ndss-symposium.org/ndss-paper/compromising-industrial-processes-using-web-based-programmable-logic-controller-malware/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-49-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-49-paper.pdf)
## Content Censorship in the InterPlanetary File System.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#content-censorship-in-the-interplanetary-file-system)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#content-censorship-in-the-interplanetary-file-system)
### Authors
* Srivatsan Sridhar, Stanford University
* Onur Ascigil, Lancaster University
* Navin Keizer, University College London
* François Genon, UCLouvain
* Sébastien Pierre, UCLouvain
* Yiannis Psaras, Protocol Labs
* Etienne Riviere, UCLouvain
* Michał Król, City
### Abstract
> The InterPlanetary File System (IPFS) is currently the largest decentralized storage solution in operation, with thousands of active participants and millions of daily content transfers. IPFS is used as remote data storage for numerous blockchain-based smart contracts, Non-Fungible Tokens (NFT), and decentralized applications.
> 
> We present a content censorship attack that can be executed with minimal effort and cost, and that prevents the retrieval of any chosen content in the IPFS network. The attack exploits a conceptual issue in a core component of IPFS, the Kademlia Distributed Hash Table (DHT), which is used to resolve content IDs to peer addresses. We provide efficient detection and mitigation mechanisms for this vulnerability. Our mechanisms achieve a 99.6% detection rate and mitigate 100% of the detected attacks with minimal signaling and computational overhead. We followed responsible disclosure procedures, and our countermeasures are scheduled for deployment in the future versions of IPFS.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/content-censorship-in-the-interplanetary-file-system/](https://www.ndss-symposium.org/ndss-paper/content-censorship-in-the-interplanetary-file-system/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-153-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-153-paper.pdf)
## Crafter: Facial Feature Crafting against Inversion-based Identity Theft on Deep Models.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#crafter-facial-feature-crafting-against-inversion-based-identity-theft-on-deep-models)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#crafter-facial-feature-crafting-against-inversion-based-identity-theft-on-deep-models)
### Authors
* Shiming Wang, Shanghai Jiao Tong University
* Zhe Ji, Shanghai Jiao Tong University
* Liyao Xiang, Shanghai Jiao Tong University
* Hao Zhang, Shanghai Jiao Tong University
* Xinbing Wang, Shanghai Jiao Tong University
* Chenghu Zhou, Chinese Academy of Sciences
* Bo Li, Hong Kong University of Science and Technology
### Abstract
> With the increased capabilities at the edge (e.g., mobile device) and more stringent privacy requirement, it becomes a recent trend for deep learning-enabled applications to pre-process sensitive raw data at the edge and transmit the features to the backend cloud for further processing. A typical application is to run machine learning (ML) services on facial images collected from different individuals. To prevent identity theft, conventional methods commonly rely on an adversarial game-based approach to shed the identity information from the feature. However, such methods can not defend against adaptive attacks, in which an attacker takes a countermove against a known defence strategy.
> 
> We propose Crafter, a feature crafting mechanism deployed at the edge, to protect the identity information from adaptive model inversion attacks while ensuring the ML tasks are properly carried out in the cloud. The key defence strategy is to mislead the attacker to a non-private prior from which the attacker gains little about the private identity. In this case, the crafted features act like poison training samples for attackers with adaptive model updates. Experimental results indicate that Crafter successfully defends both basic and possible adaptive attacks, which can not be achieved by state-of-the-art adversarial game-based methods.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/crafter-facial-feature-crafting-against-inversion-based-identity-theft-on-deep-models/](https://www.ndss-symposium.org/ndss-paper/crafter-facial-feature-crafting-against-inversion-based-identity-theft-on-deep-models/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-326-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-326-paper.pdf)
## CrowdGuard: Federated Backdoor Detection in Federated Learning.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#crowdguard-federated-backdoor-detection-in-federated-learning)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#crowdguard-federated-backdoor-detection-in-federated-learning)
### Authors
* Phillip Rieger, Technical University of Darmstadt
* Torsten Krauß, University of Würzburg
* Markus Miettinen, Technical University of Darmstadt
* Alexandra Dmitrienko, University of Würzburg
* Ahmad-Reza Sadeghi, Technical University of Darmstadt
### Abstract
> Federated Learning (FL) is a promising approach enabling multiple clients to train Deep Neural Networks (DNNs) collaboratively without sharing their local training data. However, FL is susceptible to backdoor (or targeted poisoning) attacks. These attacks are initiated by malicious clients who seek to compromise the learning process by introducing specific behaviors into the learned model that can be triggered by carefully crafted inputs. Existing FL safeguards have various limitations: They are restricted to specific data distributions or reduce the global model accuracy due to excluding benign models or adding noise, are vulnerable to adaptive defense-aware adversaries, or require the server to access local models, allowing data inference attacks.
> 
> This paper presents a novel defense mechanism, CrowdGuard, that effectively mitigates backdoor attacks in FL and overcomes the deficiencies of existing techniques. It leverages clients' feedback on individual models, analyzes the behavior of neurons in hidden layers, and eliminates poisoned models through an iterative pruning scheme. CrowdGuard employs a server-located stacked clustering scheme to enhance its resilience to rogue client feedback. The evaluation results demonstrate that CrowdGuard achieves a 100% True-Positive-Rate and True-Negative-Rate across various scenarios, including IID and non-IID data distributions. Additionally, CrowdGuard withstands adaptive adversaries while preserving the original performance of protected models. To ensure confidentiality, CrowdGuard uses a secure and privacy-preserving architecture leveraging Trusted Execution Environments (TEEs) on both client and server sides.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/crowdguard-federated-backdoor-detection-in-federated-learning/](https://www.ndss-symposium.org/ndss-paper/crowdguard-federated-backdoor-detection-in-federated-learning/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-233-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-233-paper.pdf)
## Eavesdropping on Black-box Mobile Devices via Audio Amplifier's EMR.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#eavesdropping-on-black-box-mobile-devices-via-audio-amplifiers-emr)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#eavesdropping-on-black-box-mobile-devices-via-audio-amplifiers-emr)
### Authors
* Huiling Chen, College of Computer Science and Electronic Engineering
### Abstract
> Audio eavesdropping poses serious threats to user privacy in daily mobile usage scenarios such as phone calls, voice messaging, and confidential meetings. Headphones are thus favored by mobile users as it provide physical sound isolation to protect audio privacy. However, our paper presents the first proof-of-concept system, Periscope, that demonstrates the vulnerabilities of headphone-plugged mobile devices. The system shows that unintentionally leaked electromagnetic radiations (EMR) from mobile devices' audio amplifiers can be exploited as an effective side-channel in recovering victim's audio sounds. Additionally, plugged headphones act as antennas that enhance the EMR strengths, making them easily measurable at long distances. Our feasibility studies and hardware analysis further reveal that EMRs are highly correlated with the device's audio inputs but suffer from signal distortions and ambient noises, making recovering audio sounds extremely challenging. To address this challenge, we develop signal processing techniques with a spectrogram clustering scheme that clears noises and distortions, enabling EMRs to be converted back to audio sounds. Our attack prototype, comparable in size to hidden voice recorders, successfully recovers victims' private audio sounds with a word error rate (WER) as low as 7.44% across 11 mobile devices and 6 headphones. The recovery results are recognizable to natural human hearing and online speech-to-text tools, and the system is robust against a wide range of attack scenario changes. We also reported the Periscope to 6 leading mobile manufacturers.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/eavesdropping-on-black-box-mobile-devices-via-audio-amplifiers-emr/](https://www.ndss-symposium.org/ndss-paper/eavesdropping-on-black-box-mobile-devices-via-audio-amplifiers-emr/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-240-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-240-paper.pdf)
## Enhance Stealthiness and Transferability of Adversarial Attacks with Class Activation Mapping Ensemble Attack.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#enhance-stealthiness-and-transferability-of-adversarial-attacks-with-class-activation-mapping-ensemble-attack)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#enhance-stealthiness-and-transferability-of-adversarial-attacks-with-class-activation-mapping-ensemble-attack)
### Authors
* Hui Xia, Ocean University of China
* Rui Zhang, Ocean University of China
* Zi Kang, Ocean University of China
* Shuliang Jiang, Ocean University of China
* Shuo Xu, Ocean University of China
### Abstract
> Although there has been extensive research on the transferability of adversarial attacks, existing methods for generating adversarial examples suffer from two significant drawbacks: poor stealthiness and low attack efficacy under low-round attacks. To address the above issues, we creatively propose an adversarial example generation method that ensembles the class activation maps of multiple models, called class activation mapping ensemble attack. We first use the class activation mapping method to discover the relationship between the decision of the Deep Neural Network and the image region. Then we calculate the class activation score for each pixel and use it as the weight for perturbation to enhance the stealthiness of adversarial examples and improve attack performance under low attack rounds. In the optimization process, we also ensemble class activation maps of multiple models to ensure the transferability of the adversarial attack algorithm. Experimental results show that our method generates adversarial examples with high perceptibility, transferability, attack performance under low-round attacks, and evasiveness. Specifically, when our attack capability is comparable to the most potent attack (VMIFGSM), our perceptibility is close to the best-performing attack (TPGD). For non-targeted attacks, our method outperforms the VMIFGSM by an average of 11.69% in attack capability against 13 target models and outperforms the TPGD by an average of 37.15%. For targeted attacks, our method achieves the fastest convergence, the most potent attack efficacy, and significantly outperforms the eight baseline methods in low-round attacks. Furthermore, our method can evade defenses and be used to assess the robustness of models.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/enhance-stealthiness-and-transferability-of-adversarial-attacks-with-class-activation-mapping-ensemble-attack/](https://www.ndss-symposium.org/ndss-paper/enhance-stealthiness-and-transferability-of-adversarial-attacks-with-class-activation-mapping-ensemble-attack/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-164-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-164-paper.pdf)
## Exploiting Sequence Number Leakage: TCP Hijacking in NAT-Enabled Wi-Fi Networks.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#exploiting-sequence-number-leakage-tcp-hijacking-in-nat-enabled-wi-fi-networks)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#exploiting-sequence-number-leakage-tcp-hijacking-in-nat-enabled-wi-fi-networks)
### Authors
* Yuxiang Yang, Tsinghua University
* Xuewei Feng, Tsinghua University
* Qi Li, Tsinghua University
* Kun Sun, George Mason University
* Ziqiang Wang, Southeast University
* Ke Xu, Tsinghua University
### Abstract
> In this paper, we uncover a new side-channel vulnerability in the widely used NAT port preservation strategy and an insufficient reverse path validation strategy of Wi-Fi routers, which allows an off-path attacker to infer if there is one victim client in the same network communicating with another host on the Internet using TCP. After detecting the presence of TCP connections between the victim client and the server, the attacker can evict the original NAT mapping and reconstruct a new mapping at the router by sending fake TCP packets due to the routers' vulnerability of disabling TCP window tracking strategy, which has been faithfully implemented in most of the routers for years. In this way, the attacker can intercept TCP packets from the server and obtain the current sequence and acknowledgment numbers, which in turn allows the attacker to forcibly close the connection, poison the traffic in plain text, or reroute the server's incoming packets to the attacker.
> 
> We test 67 widely used routers from 30 vendors and discover that 52 of them are affected by this attack. Also, we conduct an extensive measurement study on 93 real-world Wi-Fi networks. The experimental results show that 75 of these evaluated Wi-Fi networks (81%) are fully vulnerable to our attack. Our case study shows that it takes about 17.5, 19.4, and 54.5 seconds on average to terminate an SSH connection, download private files from FTP servers, and inject fake HTTP response packets with success rates of 87.4%, 82.6%, and 76.1%. We responsibly disclose the vulnerability and suggest mitigation strategies to all affected vendors and have received positive feedback, including acknowledgments, CVEs, rewards, and adoption of our suggestions.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/exploiting-sequence-number-leakage-tcp-hijacking-in-nat-enabled-wi-fi-networks/](https://www.ndss-symposium.org/ndss-paper/exploiting-sequence-number-leakage-tcp-hijacking-in-nat-enabled-wi-fi-networks/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-419-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-419-paper.pdf)
## Facilitating Non-Intrusive In-Vivo Firmware Testing with Stateless Instrumentation.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#facilitating-non-intrusive-in-vivo-firmware-testing-with-stateless-instrumentation)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#facilitating-non-intrusive-in-vivo-firmware-testing-with-stateless-instrumentation)
### Authors
* Jiameng Shi, University of Georgia
* Wenqiang Li, Independent Researcher
* Wenwen Wang, University of Georgia
* Le Guan, University of Georgia
### Abstract
> Although numerous dynamic testing techniques have been developed, they can hardly be directly applied to firmware of deeply embedded (e.g., microcontroller-based) devices due to the tremendously different runtime environment and restricted resources on these devices. This work tackles these challenges by leveraging the unique position of microcontroller devices during firmware development. That is, firmware developers have to rely on a powerful engineering workstation that connects to the target device to program and debug code. Therefore, we develop a decoupled firmware testing framework named IPEA, which shifts the overhead of resource-intensive analysis tasks from the microcontroller to the workstation. Only lightweight “needle probes” are left in the firmware to collect internal execution information without processing it. We also instantiated this framework with a sanitizer based on pointer capability (IPEA-San) and a greybox fuzzer (IPEA-Fuzz). By comparing IPEA-San with a port of AddressSanitizer for microcontrollers, we show that IPEA-San reduces memory overhead by 62.75% in real-world firmware with better detection accuracy. Combining IPEA-Fuzz with IPEA-San, we found 7 zero-day bugs in popular IoT libraries (3) and peripheral driver code (4).

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/facilitating-non-intrusive-in-vivo-firmware-testing-with-stateless-instrumentation/](https://www.ndss-symposium.org/ndss-paper/facilitating-non-intrusive-in-vivo-firmware-testing-with-stateless-instrumentation/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-116-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-116-paper.pdf)
## File Hijacking Vulnerability: The Elephant in the Room.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#file-hijacking-vulnerability-the-elephant-in-the-room)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#file-hijacking-vulnerability-the-elephant-in-the-room)
### Authors
* Chendong Yu, Institute of Information Engineering
### Abstract
> Files are a significant attack vector for security boundary violation, yet a systematic understanding of the vulnerabilities underlying these attacks is lacking. To bridge this gap, we present a comprehensive analysis of File Hijacking Vulnerabilities (FHVulns), a type of vulnerability that enables attackers to breach security boundaries through the manipulation of file content or file paths. We provide an in-depth empirical study on 268 well-documented FHVuln CVE records from January 2020 to October 2022. Our study reveals the origins and triggering mechanisms of FHVulns and highlights that existing detection techniques have overlooked the majority of FHVulns. As a result, we anticipate a significant prevalence of zero-day FHVulns in software. We developed a dynamic analysis tool, JERRY, which effectively detects FHVulns at runtime by simulating hijacking actions during program execution. We applied JERRY to 438 popular software programs from vendors including Microsoft, Google, Adobe, and Intel, and found 339 zero-day FHVulns. We reported all vulnerabilities identified by JERRY to the corresponding vendors, and as of now, 84 of them have been confirmed or fixed, with 51 CVE IDs granted and $83,400 bug bounties earned.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/file-hijacking-vulnerability-the-elephant-in-the-room/](https://www.ndss-symposium.org/ndss-paper/file-hijacking-vulnerability-the-elephant-in-the-room/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-38-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-38-paper.pdf)
## Front-running Attack in Sharded Blockchains and Fair Cross-shard Consensus.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#front-running-attack-in-sharded-blockchains-and-fair-cross-shard-consensus)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#front-running-attack-in-sharded-blockchains-and-fair-cross-shard-consensus)
### Authors
* Jianting Zhang, Purdue University
* Wuhui Chen, Sun Yat-sen University
* Sifu Luo, Sun Yat-sen University
* Tiantian Gong, Purdue University
* Zicong Hong, The Hong Kong Polytechnic University
* Aniket Kate, Purdue University
### Abstract
> Sharding is a prominent technique for scaling blockchains. By dividing the network into smaller components known as shards, a sharded blockchain can process transactions in parallel without introducing inconsistencies through the coordination of intra-shard and cross-shard consensus protocols. However, we observe a critical security issue with sharded systems: transaction ordering manipulations can occur when coordinating intra-shard and cross-shard consensus protocols, leaving the system vulnerable to attack. Specifically, we identify a novel security issue known as finalization fairness, which can be exploited through a front-running attack. This attack allows an attacker to manipulate the execution order of transactions, even if the victim's transaction has already been processed and added to the blockchain by a fair intra-shard consensus.
> 
> To address the issue, we offer Haechi, a novel cross-shard protocol that is immune to front-running attacks. Haechi introduces an ordering phase between transaction processing and execution, ensuring that the execution order of transactions is the same as the processing order and achieving finalization fairness. To accommodate different consensus speeds among shards, Haechi incorporates a finalization fairness algorithm to achieve a globally fair order with minimal performance loss. By providing a global order, Haechi ensures strong consistency among shards, enabling better parallelism in handling conflicting transactions across shards. These features make Haechi a promising solution for supporting popular smart contracts in the real world. To evaluate Haechi's performance and effectiveness in preventing the attack, we implemented the protocol using Tendermint and conducted extensive experiments on a geo-distributed AWS environment. Our results demonstrate that Haechi can effectively prevent the presented front-running attack with little performance sacrifice compared to existing cross-shard consensus protocols.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/front-running-attack-in-sharded-blockchains-and-fair-cross-shard-consensus/](https://www.ndss-symposium.org/ndss-paper/front-running-attack-in-sharded-blockchains-and-fair-cross-shard-consensus/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-197-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-197-paper.pdf)
## GhostType: The Limits of Using Contactless Electromagnetic Interference to Inject Phantom Keys into Analog Circuits of Keyboards.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#ghosttype-the-limits-of-using-contactless-electromagnetic-interference-to-inject-phantom-keys-into-analog-circuits-of-keyboards)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#ghosttype-the-limits-of-using-contactless-electromagnetic-interference-to-inject-phantom-keys-into-analog-circuits-of-keyboards)
### Authors
* Qinhong Jiang, Zhejiang University
* Yanze Ren, Zhejiang University
* Yan Long, University of Michigan
* Chen Yan, Zhejiang University
* Yumai Sun, University of Michigan
* Xiaoyu Ji, Zhejiang University
* Kevin Fu, Northeastern University
* Wenyuan Xu, Zhejiang University
### Abstract
> Keyboards are the primary peripheral input devices for various critical computer application scenarios. This paper performs a security analysis of the keyboard sensing mechanisms and uncovers a new class of vulnerabilities that can be exploited to induce phantom keys---fake keystrokes injected into keyboards' analog circuits in a contactless way using electromagnetic interference (EMI). Besides normal keystrokes, such phantom keys also include keystrokes that cannot be achieved by human operators, such as rapidly injecting over 10,000 keys per minute and injecting hidden keys that do not exist on the physical keyboard. The underlying principles of phantom key injection consist in inducing false voltages on keyboard sensing GPIO pins through EMI coupled onto matrix circuits. We investigate the voltage and timing requirements of injection signals both theoretically and empirically to establish the theory of phantom key injection. To validate the threat of keyboard sensing vulnerabilities, we design GhostType that can cause denial-of-service of the keyboard and inject random keystrokes as well as certain targeted keystrokes of the adversary's choice. We have validated GhostType on 48 of 50 off-the-shelf keyboards/keypads from 20 brands including both membrane/mechanical structures and USB/Bluetooth protocols. Some example consequences of GhostType include completely blocking keyboard operations, crashing and turning off downstream computers, and deleting files on computers. Finally, we glean lessons from our investigations and propose countermeasures including EMI shielding, phantom key detection, and keystroke scanning signal improvement.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/ghosttype-the-limits-of-using-contactless-electromagnetic-interference-to-inject-phantom-keys-into-analog-circuits-of-keyboards/](https://www.ndss-symposium.org/ndss-paper/ghosttype-the-limits-of-using-contactless-electromagnetic-interference-to-inject-phantom-keys-into-analog-circuits-of-keyboards/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-15-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-15-paper.pdf)
## GNNIC: Finding Long-Lost Sibling Functions with Abstract Similarity.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#gnnic-finding-long-lost-sibling-functions-with-abstract-similarity)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#gnnic-finding-long-lost-sibling-functions-with-abstract-similarity)
### Authors
* Qiushi Wu, University of Minnesota
* Zhongshu Gu, IBM Research
* Hani Jamjoom, IBM Research
* Kangjie Lu, University of Minnesota
### Abstract
> Generating accurate call graphs for large programs, particularly at the operating system (OS) level, poses a well-known challenge. This difficulty stems from the widespread use of indirect calls within large programs, wherein the computation of call targets is deferred until runtime to achieve program polymorphism. Consequently, compilers are unable to statically determine indirect call edges. Recent advancements have attempted to use type analysis to globally match indirect call targets in programs. However, these approaches still suffer from low precision when handling large target programs or generic types.
> 
> This paper presents GNNIC, a Graph Neural Network (GNN) based Indirect Call analyzer. GNNIC employs a technique called abstract-similarity search to accurately identify indirect call targets in large programs. The approach is based on the observation that although indirect call targets exhibit intricate polymorphic behaviors, they share common abstract characteristics, such as function descriptions, data types, and invoked function calls. We consolidate such information into a representative abstraction graph (RAG) and employ GNNs to learn function embeddings. Abstract-similarity search relies on at least one anchor target to bootstrap. Therefore, we also propose a new program analysis technique to locally identify valid targets of each indirect call. Starting from anchor targets, GNNIC can expand the search scope to find more targets of indirect calls in the whole program. The implementation of GNNIC utilizes LLVM and GNN, and we evaluated it on multiple OS kernels. The results demonstrate that GNNIC outperforms state-of-the-art type-based techniques by reducing 86% to 93% of false target functions. Moreover, the abstract similarity and precise call graphs generated by GNNIC can enhance security applications by discovering new bugs, alleviating path-explosion issues, and improving the efficiency of static program analysis. The combination of static analysis and GNNIC resulted in finding 97 new bugs in Linux and FreeBSD kernels.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/gnnic-finding-long-lost-sibling-functions-with-abstract-similarity/](https://www.ndss-symposium.org/ndss-paper/gnnic-finding-long-lost-sibling-functions-with-abstract-similarity/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-492-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-492-paper.pdf)
## HEIR: A Unified Representation for Cross-Scheme Compilation of Fully Homomorphic Computation.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#heir-a-unified-representation-for-cross-scheme-compilation-of-fully-homomorphic-computation)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#heir-a-unified-representation-for-cross-scheme-compilation-of-fully-homomorphic-computation)
### Authors
* Song Bian, Beihang University
* Zian Zhao, Beihang University
* Zhou Zhang, Beihang University
* Ran Mao, Beihang University
* Kohei Suenaga, Kyoto University
* Yier Jin, University of Science and Technology of China
* Zhenyu Guan, Beihang University
* Jianwei Liu, Beihang University
### Abstract
> We propose a new compiler framework that automates code generation over multiple fully homomorphic encryption (FHE) schemes. While it was recently shown that algorithms combining multiple FHE schemes (e.g., CKKS and TFHE) achieve high execution efficiency and task utility at the same time, developing fast cross-scheme FHE algorithms for real-world applications generally require heavy hand-tuned optimizations by cryptographic experts, resulting in either high usability costs or low computational efficiency. To solve the usability and efficiency dilemma, we design and implement HEIR, a compiler framework based on multi-level intermediate representation (IR). To achieve cross-scheme compilation of efficient FHE circuits, we develop a two-stage code-lowering structure based on our custom IR dialects. First, the plaintext program along with the associated data types are converted into FHE-friendly dialects in the transformation stage. Then, in the optimization stage, we apply FHE-specific optimizations to lower the transformed dialect into our bottom-level FHE library operators. In the experiment, we implement the entire software stack for HEIR, and demonstrate that complex end-to-end programs, such as homomorphic K-Means clustering and homomorphic data aggregation in databases, can easily be compiled to run 72~179× faster than the program generated by the state-of-the-art FHE compilers.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/heir-a-unified-representation-for-cross-scheme-compilation-of-fully-homomorphic-computation/](https://www.ndss-symposium.org/ndss-paper/heir-a-unified-representation-for-cross-scheme-compilation-of-fully-homomorphic-computation/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-67-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-67-paper.pdf)
## IDA: Hybrid Attestation with Support for Interrupts and TOCTOU.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#ida-hybrid-attestation-with-support-for-interrupts-and-toctou)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#ida-hybrid-attestation-with-support-for-interrupts-and-toctou)
### Authors
* Fatemeh Arkannezhad, UCLA
* Justin Feng, UCLA
* Nader Sehatbakhsh, UCLA
### Abstract
> Remote attestation has received much attention recently due to the proliferation of embedded and IoT devices. Among various solutions, methods based on hardware-software co-design (hybrid) are particularly popular due to their low overhead yet effective approaches. Despite their usefulness, hybrid methods still suffer from multiple limitations such as strict protections required for the attestation keys and restrictive operation and threat models such as disabling interrupts and neglecting time-of-check-time-of-use (TOCTOU) attacks.
> 
> In this paper, we propose a new hybrid attestation method called IDA, which removes the requirement for disabling interrupts and restrictive access control for the secret key and attestation code, thus improving the system's overall security and flexibility. Rather than making use of a secret key to calculate the response, IDA verifies the attestation process with trusted hardware monitoring and certifies its authenticity only if it was followed precisely. Further, to prevent TOCTOU attacks and handle interrupts, we propose IDA+, which monitors program memory between attestation requests or during interrupts and informs the verifier of changes to the program memory. We implement and evaluate IDA and IDA+ on open-source MSP430 architecture, showing a reasonable overhead in terms of runtime, memory footprint, and hardware overhead while being robust against various attack scenarios. Comparing our method with the state-of-the-art, we show that it has minimal overhead while achieving important new properties such as support for interrupts and DMA requests and detecting TOCTOU attacks.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/ida-hybrid-attestation-with-support-for-interrupts-and-toctou/](https://www.ndss-symposium.org/ndss-paper/ida-hybrid-attestation-with-support-for-interrupts-and-toctou/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-59-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-59-paper.pdf)
## Inaudible Adversarial Perturbation: Manipulating the Recognition of User Speech in Real Time.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#inaudible-adversarial-perturbation-manipulating-the-recognition-of-user-speech-in-real-time)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#inaudible-adversarial-perturbation-manipulating-the-recognition-of-user-speech-in-real-time)
### Authors
* Xinfeng Li, Zhejiang University
* Chen Yan, Zhejiang University
* Xuancun Lu, Zhejiang University
* Zihan Zeng, Zhejiang University
* Xiaoyu Ji, Zhejiang University
* Wenyuan Xu, Zhejiang University
### Abstract
> Automatic speech recognition (ASR) systems have been shown to be vulnerable to adversarial examples (AEs). Recent success all assumes that users will not notice or disrupt the attack process despite the existence of music/noise-like sounds and spontaneous responses from voice assistants. Nonetheless, in practical user-present scenarios, user awareness may nullify existing attack attempts that launch unexpected sounds or ASR usage. In this paper, we seek to bridge the gap in existing research and extend the attack to user-present scenarios. We propose VRIFLE, an inaudible adversarial perturbation (IAP) attack via ultrasound delivery that can manipulate ASRs as a user speaks. The inherent differences between audible sounds and ultrasounds make IAP delivery face unprecedented challenges such as distortion, noise, and instability. In this regard, we design a novel ultrasonic transformation model to enhance the crafted perturbation to be physically effective and even survive long-distance delivery. We further enable VRIFLE’s robustness by adopting a series of augmentation on user and real-world variations during the generation process. In this way, VRIFLE features an effective real-time manipulation of the ASR output from different distances and under any speech of users, with an alter-and-mute strategy that suppresses the impact of user disruption. Our extensive experiments in both digital and physical worlds verify VRIFLE’s effectiveness under various configurations, robustness against six kinds of defenses, and universality in a targeted manner. We also show that VRIFLE can be delivered with a portable attack device and even everyday-life loudspeakers.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/inaudible-adversarial-perturbation-manipulating-the-recognition-of-user-speech-in-real-time/](https://www.ndss-symposium.org/ndss-paper/inaudible-adversarial-perturbation-manipulating-the-recognition-of-user-speech-in-real-time/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-30-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-30-paper.pdf)
## LARMix: Latency-Aware Routing in Mix Networks.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#larmix-latency-aware-routing-in-mix-networks)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#larmix-latency-aware-routing-in-mix-networks)
### Authors
* Mahdi Rahimi, KU Leuven
* Piyush Kumar Sharma, KU Leuven
* Claudia Diaz, KU Leuven
### Abstract
> Anonymous communication systems such as mix networks achieve anonymity at the expense of latency that is introduced to alter the flow of packets and hinder their tracing. A high latency however has a negative impact on usability. In this work, we propose LARMix, a novel latency-aware routing scheme for mixnets that reduces propagation latency with a limited impact on anonymity. LARMix can achieve this while also load balancing the traffic in the network. We additionally show how a network can be configured to maximize anonymity while meeting an average end-to-end latency constraint. Lastly, we perform a security analysis studying various adversarial strategies and conclude that LARMix does not significantly increase adversarial advantage as long as the adversary is not able to selectively compromise mixnodes after the LARMix routing policy has been computed.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/larmix-latency-aware-routing-in-mix-networks/](https://www.ndss-symposium.org/ndss-paper/larmix-latency-aware-routing-in-mix-networks/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-221-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-221-paper.pdf)
## LDR: Secure and Efficient Linux Driver Runtime for Embedded TEE Systems.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#ldr-secure-and-efficient-linux-driver-runtime-for-embedded-tee-systems)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#ldr-secure-and-efficient-linux-driver-runtime-for-embedded-tee-systems)
### Authors
* Huaiyu Yan, Southeast University
* Zhen Ling, Southeast University
* Haobo Li, Southeast University
* Lan Luo, Anhui University of Technology
* Xinhui Shao, Southeast University
* Kai Dong, Southeast University
* Ping Jiang, Southeast University
* Ming Yang, Southeast University
* Junzhou Luo, Southeast University
### Abstract
> Trusted execution environments (TEEs), like TrustZone, are pervasively employed to protect security sensitive programs and data from various attacks. We target compact TEE operating systems like OP-TEE, which implement minimum TEE internal core APIs. Such a TEE OS often has poor device driver support and we want to alleviate such issue by reusing existing Linux drivers inside TEE OSes. An intuitive approach is to port all its dependency functions into the TEE OS so that the driver can directly execute inside the TEE. But this approach significantly enlarges the trusted computing base (TCB), making the TEE OS no longer compact.
> 
> In this paper, we propose a TEE driver execution environment---Linux driver runtime (LDR). A Linux driver needs two types of functions, library functions and Linux kernel subsystem functions that a compact TEE OS does not have. The LDR reuses the existing TEE OS library functions whenever possible and redirects the kernel subsystem function calls to the Linux kernel in the normal world. LDR is realized as a sandbox environment, which confines the Linux driver inside the TEE through the ARM domain access control features to address associated security issues. The sandbox mediates the driver's TEE functions calls, sanitizing arguments and return values as well as enforcing forward control flow integrity. We implement and deploy an LDR prototype on an NXP IMX6Q SABRE-SD evaluation board, adapt 6 existing Linux drivers into LDR, and evaluate their performance. The experimental results show that the LDR drivers can achieve comparable performance with their Linux counterparts with negligible overheads. We are the first to reuse functions in both the TEE OS and normal world Linux kernel to run a TEE device driver and address related security issues.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/ldr-secure-and-efficient-linux-driver-runtime-for-embedded-tee-systems/](https://www.ndss-symposium.org/ndss-paper/ldr-secure-and-efficient-linux-driver-runtime-for-embedded-tee-systems/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-9-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-9-paper.pdf)
## LiDAR Spoofing Meets the New-Gen: Capability Improvements, Broken Assumptions, and New Attack Strategies.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#lidar-spoofing-meets-the-new-gen-capability-improvements-broken-assumptions-and-new-attack-strategies)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#lidar-spoofing-meets-the-new-gen-capability-improvements-broken-assumptions-and-new-attack-strategies)
### Authors
* Takami Sato, University of California
### Abstract
> LiDAR (Light Detection And Ranging) is an indispensable sensor for precise long- and wide-range 3D sensing, which directly benefited the recent rapid deployment of autonomous driving (AD). Meanwhile, such a safety-critical application strongly motivates its security research. A recent line of research finds that one can manipulate the LiDAR point cloud and fool object detectors by firing malicious lasers against LiDAR. However, these efforts face 3 critical research gaps: (1) considering only one specific LiDAR (VLP-16); (2) assuming unvalidated attack capabilities; and (3) evaluating object detectors with limited spoofing capability modeling and setup diversity.
> 
> To fill these critical research gaps, we conduct the first large-scale measurement study on LiDAR spoofing attack capabilities on object detectors with 9 popular LiDARs, covering both first- and new-generation LiDARs, and 3 major types of object detectors trained on 5 different datasets. To facilitate the measurements, we (1) identify spoofer improvements that significantly improve the latest spoofing capability, (2) identify a new object removal attack that overcomes the applicability limitation of the latest method to new-generation LiDARs, and (3) perform novel mathematical modeling for both object injection and removal attacks based on our measurement results. Through this study, we are able to uncover a total of 15 novel findings, including not only completely new ones due to the measurement angle novelty, but also many that can directly challenge the latest understandings in this problem space. We also discuss defenses.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/lidar-spoofing-meets-the-new-gen-capability-improvements-broken-assumptions-and-new-attack-strategies/](https://www.ndss-symposium.org/ndss-paper/lidar-spoofing-meets-the-new-gen-capability-improvements-broken-assumptions-and-new-attack-strategies/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-350-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-350-paper.pdf)
## LMSanitator: Defending Prompt-Tuning Against Task-Agnostic Backdoors.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#lmsanitator-defending-prompt-tuning-against-task-agnostic-backdoors)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#lmsanitator-defending-prompt-tuning-against-task-agnostic-backdoors)
### Authors
* Chengkun Wei, Zhejiang University
* Wenlong Meng, Zhejiang University
* Zhikun Zhang, CISPA Helmholtz Center for Information Security and Stanford University
* Min Chen, CISPA Helmholtz Center for Information Security
* Minghu Zhao, Zhejiang University
* Wenjing Fang, Ant Group
* Lei Wang, Ant Group
* Zihui Zhang, Zhejiang University
* Wenzhi Chen, Zhejiang University
### Abstract
> *Prompt-tuning* has emerged as an attractive paradigm for deploying large-scale language models due to its strong downstream task performance and efficient multitask serving ability. Despite its wide adoption, we empirically show that prompt-tuning is vulnerable to downstream task-agnostic backdoors, which reside in the pretrained models and can affect arbitrary downstream tasks. The state-of-the-art backdoor detection approaches cannot defend against task-agnostic backdoors since they hardly converge in reversing the backdoor triggers. To address this issue, we propose LMSanitator, a novel approach for detecting and removing task-agnostic backdoors on Transformer models. Instead of directly inverting the triggers, LMSanitator aims to invert the *predefined attack vectors* (pretrained models' output when the input is embedded with triggers) of the task-agnostic backdoors, which achieves much better convergence performance and backdoor detection accuracy. LMSanitator further leverages prompt-tuning’s property of freezing the pretrained model to perform accurate and fast output monitoring and input purging during the inference phase. Extensive experiments on multiple language models and NLP tasks illustrate the effectiveness of LMSanitator. For instance, LMSanitator achieves 92.8% backdoor detection accuracy on 960 models and decreases the attack success rate to less than 1% in most scenarios.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/lmsanitator-defending-prompt-tuning-against-task-agnostic-backdoors/](https://www.ndss-symposium.org/ndss-paper/lmsanitator-defending-prompt-tuning-against-task-agnostic-backdoors/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-238-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-238-paper.pdf)
## Low-Quality Training Data Only? A Robust Framework for Detecting Encrypted Malicious Network Traffic.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#low-quality-training-data-only-a-robust-framework-for-detecting-encrypted-malicious-network-traffic)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#low-quality-training-data-only-a-robust-framework-for-detecting-encrypted-malicious-network-traffic)
### Authors
* Yuqi Qing, Tsinghua University
* Qilei Yin, Zhongguancun Laboratory
* Xinhao Deng, Tsinghua University
* Yihao Chen, Tsinghua University
* Zhuotao Liu, Tsinghua University
* Kun Sun, George Mason University
* Ke Xu, Tsinghua University
* Jia Zhang, Tsinghua University
* Qi Li, Tsinghua University
### Abstract
> Machine learning (ML) is promising in accurately detecting malicious flows in encrypted network traffic; however, it is challenging to collect a training dataset that contains a sufficient amount of encrypted malicious data with correct labels. When ML models are trained with low-quality training data, they suffer degraded performance. In this paper, we aim at addressing a real-world low-quality training dataset problem, namely, detecting encrypted malicious traffic generated by continuously evolving malware. We develop RAPIER that fully utilizes different distributions of normal and malicious traffic data in the feature space, where normal data is tightly distributed in a certain area and the malicious data is scattered over the entire feature space to augment training data for model training. RAPIER includes two pre-processing modules to convert traffic into feature vectors and correct label noises. We evaluate our system on two public datasets and one combined dataset. With 1000 samples and 45% noises from each dataset, our system achieves the F1 scores of 0.770, 0.776, and 0.855, respectively, achieving average improvements of 352.6%, 284.3%, and 214.9% over the existing methods, respectively. Furthermore, We evaluate RAPIER with a real-world dataset obtained from a security enterprise. RAPIER effectively achieves encrypted malicious traffic detection with the best F1 score of 0.773 and improves the F1 score of existing methods by an average of 272.5%.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/low-quality-training-data-only-a-robust-framework-for-detecting-encrypted-malicious-network-traffic/](https://www.ndss-symposium.org/ndss-paper/low-quality-training-data-only-a-robust-framework-for-detecting-encrypted-malicious-network-traffic/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-81-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-81-paper.pdf)
## MOCK: Optimizing Kernel Fuzzing Mutation with Context-aware Dependency.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#mock-optimizing-kernel-fuzzing-mutation-with-context-aware-dependency)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#mock-optimizing-kernel-fuzzing-mutation-with-context-aware-dependency)
### Authors
* Jiacheng Xu, Zhejiang University
* Xuhong Zhang, Zhejiang University
* Shouling Ji, Zhejiang University
* Yuan Tian, UCLA
* Binbin Zhao, Georgia Institute of Technology
* Qinying Wang, Zhejiang University
* Peng Cheng, Zhejiang University
* Jiming Chen, Zhejiang University
### Abstract
> Kernels are at the heart of modern operating systems, whereas their development comes with vulnerabilities. Coverage-guided fuzzing has proven to be a promising software testing technique. When applying fuzzing to kernels, the salient aspect of it is that the input is a sequence of system calls (syscalls). As kernels are complex and stateful, specific sequences of syscalls are required to build up necessary states to trigger code deep in the kernels. However, the syscall sequences generated by existing fuzzers fall short in maintaining states to sufficiently cover deep code in the kernels where vulnerabilities favor residing.
> 
> In this paper, we present a practical and effective kernel fuzzing framework, called MOCK, which is capable of learning the contextual dependencies in syscall sequences and then generating context-aware syscall sequences. To conform to the statefulness when fuzzing kernel, MOCK adaptively mutates syscall sequences in line with the calling context. MOCK integrates the context-aware dependency with (1) a customized language model-guided dependency learning algorithm, (2) a context-aware syscall sequence mutation algorithm, and (3) an adaptive task scheduling strategy to balance exploration and exploitation. Our evaluation shows that MOCK performs effectively in achieving branch coverage (up to 32% coverage growth), producing high-quality input (50% more interrelated sequences), and discovering bugs (15% more unique crashes) than the state-of-the-art kernel fuzzers. Various setups including initial seeds and a pre-trained model further boost MOCK's performance. Additionally, MOCK also discovers 15 unique bugs in the most recent Linux kernels, including two CVEs.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/mock-optimizing-kernel-fuzzing-mutation-with-context-aware-dependency/](https://www.ndss-symposium.org/ndss-paper/mock-optimizing-kernel-fuzzing-mutation-with-context-aware-dependency/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-131-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-131-paper.pdf)
## Modeling and Detecting Internet Censorship Events.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#modeling-and-detecting-internet-censorship-events)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#modeling-and-detecting-internet-censorship-events)
### Authors
* Elisa Tsai, University of Michigan
* Ram Sundara Raman, University of Michigan
* Atul Prakash, University of Michigan
* Roya Ensafi, University of Michigan
### Abstract
> Publicly accessible censorship datasets, such as OONI and Censored Planet, provide valuable resources for understanding global censorship events. However, censorship event detection in these datasets is challenging due to the overwhelming amount of data, the dynamic nature of censorship, and potentially heterogeneous blocking policies across networks in the same country. This paper presents CenDTect, an unsupervised learning system based on decision trees that overcomes the scalability issue of manual analysis and the interpretability issues of previous time-series methods. CenDTect employs iterative parallel DBSCAN to identify domains with similar blocking patterns, using an adapted cross-classification accuracy as the distance metric. The system analyzes more than 70 billion data points from Censored Planet between January 2019 and December 2022, discovering 15,360 HTTP(S) event clusters in 192 countries and 1,166 DNS event clusters in 77 countries. By evaluating CenDTect's findings with a curated list of 38 potential censorship events from news media and reports, we show how all events confirmed by the manual inspection are easy to characterize with CenDTect's output. We report more than 100 ASes in 32 countries with persistent ISP blocking. Additionally, we identify 11 temporary blocking events in clusters discovered in 2022, observed during periods of election, political unrest, protest, and war. Our approach provides informative and interpretable outputs, making censorship data more accessible to data consumers including researchers, journalists, and NGOs.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/modeling-and-detecting-internet-censorship-events/](https://www.ndss-symposium.org/ndss-paper/modeling-and-detecting-internet-censorship-events/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-409-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-409-paper.pdf)
## MPCDiff: Testing and Repairing MPC-Hardened Deep Learning Models.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#mpcdiff-testing-and-repairing-mpc-hardened-deep-learning-models)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#mpcdiff-testing-and-repairing-mpc-hardened-deep-learning-models)
### Authors
* Qi Pang, Carnegie Mellon University
* Yuanyuan Yuan, HKUST
* Shuai Wang, HKUST
### Abstract
> Secure multi-party computation (MPC) has recently become prominent as a concept to enable multiple parties to perform privacy-preserving machine learning without leaking sensitive data or details of pre-trained models to the other parties. Industry and the community have been actively developing and promoting high-quality MPC frameworks (e.g., based on TensorFlow and PyTorch) to enable the usage of MPC-hardened models, greatly easing the development cycle of integrating deep learning models with MPC primitives.
> 
> Despite the prosperous development and adoption of MPC frameworks, a principled and systematic understanding toward the correctness of those MPC frameworks does not yet exist. To fill this critical gap, this paper introduces MPCDiff, a differential testing framework to effectively uncover inputs that cause deviant outputs of MPC-hardened models and their plaintext versions. We further develop techniques to localize error-causing computation units in MPC-hardened models and automatically repair those defects.
> 
> We evaluate MPCDiff using real-world popular MPC frameworks for deep learning developed by Meta (Facebook), Alibaba Group, Cape Privacy, and OpenMined. MPCDiff successfully detected over one thousand inputs that result in largely deviant outputs. These deviation-triggering inputs are (visually) meaningful in comparison to regular inputs, indicating that our findings may cause great confusion in the daily usage of MPC frameworks. After localizing and repairing error-causing computation units, the robustness of MPC-hardened models can be notably enhanced without sacrificing accuracy and with negligible overhead.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/mpcdiff-testing-and-repairing-mpc-hardened-deep-learning-models/](https://www.ndss-symposium.org/ndss-paper/mpcdiff-testing-and-repairing-mpc-hardened-deep-learning-models/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-380-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-380-paper.pdf)
## NODLINK: An Online System for Fine-Grained APT Attack Detection and Investigation.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#nodlink-an-online-system-for-fine-grained-apt-attack-detection-and-investigation)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#nodlink-an-online-system-for-fine-grained-apt-attack-detection-and-investigation)
### Authors
* Shaofei Li, Key Laboratory of High-Confidence Software Technologies 
### Abstract
> Advanced Persistent Threats (APT) attacks have plagued modern enterprises, causing significant financial losses. To counter these attacks, researchers propose techniques that capture the complex and stealthy scenarios of APT attacks by using provenance graphs to model system entities and their dependencies. Particularly, to accelerate attack detection and reduce financial losses, online provenance-based detection systems that detect and investigate APT attacks under the constraints of timeliness and limited resources are in dire need. Unfortunately, existing online systems usually sacrifice detection granularity to reduce computational complexity and produce provenance graphs with more than 100,000 nodes, posing challenges for security admins to interpret the detection results. In this paper, we design and implement NodLink, the first online detection system that maintains high detection accuracy without sacrificing detection granularity. Our insight is that the APT attack detection process in online provenance-based detection systems can be modeled as a Steiner Tree Problem (STP), which has efficient online approximation algorithms that recover concise attack-related provenance graphs with a theoretically bounded error. To utilize the frameworks of the STP approximation algorithm for APT attack detection, we propose a novel design of in-memory cache, an efficient attack screening method, and a new STP approximation algorithm that is more efficient than the conventional one in APT attack detection while maintaining the same complexity. We evaluate NodLink in a production environment. The open-world experiment shows that NodLink outperforms two state-of-the-art (SOTA) online provenance analysis systems by achieving magnitudes higher detection and investigation accuracy while having the same or higher throughput.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/nodlink-an-online-system-for-fine-grained-apt-attack-detection-and-investigation/](https://www.ndss-symposium.org/ndss-paper/nodlink-an-online-system-for-fine-grained-apt-attack-detection-and-investigation/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-204-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-204-paper.pdf)
## On Precisely Detecting Censorship Circumvention in Real-World Networks.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#on-precisely-detecting-censorship-circumvention-in-real-world-networks)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#on-precisely-detecting-censorship-circumvention-in-real-world-networks)
### Authors
* Ryan Wails, Georgetown University
### Abstract
> The understanding of realistic censorship threats enables the development of more resilient censorship circumvention systems, which are vitally important for advancing human rights and fundamental freedoms. We argue that current state-of-the-art methods for detecting circumventing flows in Tor are unrealistic: they are overwhelmed with false positives (> 94%), even when considering conservatively high base rates (10-3). In this paper, we present a new methodology for detecting censorship circumvention in which a deep-learning flow-based classifier is combined with a host-based detection strategy that incorporates information from multiple flows over time. Using over 60,000,000 real-world network flows to over 600,000 destinations, we demonstrate how our detection methods become more precise as they temporally accumulate information, allowing us to detect circumvention servers with perfect recall and no false positives. Our evaluation considers a range of circumventing flow base rates spanning six orders of magnitude and real-world protocol distributions. Our findings suggest that future circumvention system designs need to more carefully consider host-based detection strategies, and we offer suggestions for designs that are more resistant to these attacks.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/on-precisely-detecting-censorship-circumvention-in-real-world-networks/](https://www.ndss-symposium.org/ndss-paper/on-precisely-detecting-censorship-circumvention-in-real-world-networks/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-394-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-394-paper.pdf)
## ORL-AUDITOR: Dataset Auditing in Offline Deep Reinforcement Learning.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#orl-auditor-dataset-auditing-in-offline-deep-reinforcement-learning)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#orl-auditor-dataset-auditing-in-offline-deep-reinforcement-learning)
### Authors
* Linkang Du, Zhejiang University
* Min Chen, CISPA Helmholtz Center for Information Security
* Mingyang Sun, Zhejiang University
* Shouling Ji, Zhejiang University
* Peng Cheng, Zhejiang University
* Jiming Chen, Zhejiang University
* Zhikun Zhang, CISPA Helmholtz Center for Information Security and Stanford University
### Abstract
> Data is a critical asset in AI, as high-quality datasets can significantly improve the performance of machine learning models. In safety-critical domains such as autonomous vehicles, offline deep reinforcement learning (offline DRL) is frequently used to train models on pre-collected datasets, as opposed to training these models by interacting with the real-world environment as the online DRL. To support the development of these models, many institutions make datasets publicly available with open-source licenses, but these datasets are at risk of potential misuse or infringement. Injecting watermarks to the dataset may protect the intellectual property of the data, but it cannot handle datasets that have already been published and is infeasible to be altered afterward. Other existing solutions, such as dataset inference and membership inference, do not work well in the offline DRL scenario due to the diverse model behavior characteristics and offline setting constraints.
> 
> In this paper, we advocate a new paradigm by leveraging the fact that cumulative rewards can act as a unique identifier that distinguishes DRL models trained on a specific dataset. To this end, we propose ORL-AUDITOR, which is the first trajectory-level dataset auditing mechanism for offline RL scenarios. Our experiments on multiple offline DRL models and tasks reveal the efficacy of ORL-AUDITOR, with auditing accuracy over 95% and false positive rates less than 2.88%. We also provide valuable insights into the practical implementation of ORL-AUDITOR by studying various parameter settings. Furthermore, we demonstrate the auditing capability of ORL-AUDITOR on open-source datasets from Google and DeepMind, highlighting its effectiveness in auditing published datasets. ORL-AUDITOR is open-sourced at https://github.com/link-zju/ORL-Auditor.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/orl-auditor-dataset-auditing-in-offline-deep-reinforcement-learning/](https://www.ndss-symposium.org/ndss-paper/orl-auditor-dataset-auditing-in-offline-deep-reinforcement-learning/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-184-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-184-paper.pdf)
## Overconfidence is a Dangerous Thing: Mitigating Membership Inference Attacks by Enforcing Less Confident Prediction.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#overconfidence-is-a-dangerous-thing-mitigating-membership-inference-attacks-by-enforcing-less-confident-prediction)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#overconfidence-is-a-dangerous-thing-mitigating-membership-inference-attacks-by-enforcing-less-confident-prediction)
### Authors
* Zitao Chen, University of British Columbia
* Karthik Pattabiraman, University of British Columbia
### Abstract
> Machine learning (ML) models are vulnerable to membership inference attacks (MIAs), which determine whether a given input is used for training the target model. While there have been many efforts to mitigate MIAs, they often suffer from limited privacy protection, large accuracy drop, and/or requiring additional data that may be difficult to acquire.
> 
> This work proposes a defense technique, HAMP that can achieve both strong membership privacy and high accuracy, without requiring extra data. To mitigate MIAs in different forms, we observe that they can be unified as they all exploit the ML model’s overconfidence in predicting training samples through different proxies. This motivates our design to enforce less confident prediction by the model, hence forcing the model to behave similarly on the training and testing samples. HAMP consists of a novel training framework with high-entropy soft labels and an entropy-based regularizer to constrain the model’s prediction while still achieving high accuracy. To further reduce privacy risk, HAMP uniformly modifies all the prediction outputs to become low-confidence outputs while preserving the accuracy, which effectively obscures the differences between the prediction on members and non-members.
> 
> We conduct extensive evaluation on five benchmark datasets, and show that HAMP provides consistently high accuracy and strong membership privacy. Our comparison with seven state-of- the-art defenses shows that HAMP achieves a superior privacy- utility trade off than those techniques.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/overconfidence-is-a-dangerous-thing-mitigating-membership-inference-attacks-by-enforcing-less-confident-prediction/](https://www.ndss-symposium.org/ndss-paper/overconfidence-is-a-dangerous-thing-mitigating-membership-inference-attacks-by-enforcing-less-confident-prediction/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-14-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-14-paper.pdf)
## Pisces: Private and Compliable Cryptocurrency Exchange.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#pisces-private-and-compliable-cryptocurrency-exchange)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#pisces-private-and-compliable-cryptocurrency-exchange)
### Authors
* Ya-Nan Li, The University of Sydney
* Tian Qiu, The University of Sydney
* Qiang Tang, The University of Sydney
### Abstract
> Cryptocurrency exchange platforms such as Coinbase, enable users to purchase and sell cryptocurrencies conveniently just like trading stocks/commodities. However, because of the nature of blockchain, when a user withdraws coins (i.e., transfers coins to an external on-chain account), all future transactions can be learned by the platform. This is in sharp contrast to conventional stock exchange where all external activities of users are always hidden from the platform. Since the platform knows highly sensitive user private information such as passport number, bank information etc, linking all (on-chain) transactions raises a serious privacy concern about the potential disastrous data breach in those cryptocurrency exchange platforms.
> 
> In this paper, we propose a cryptocurrency exchange that restores user anonymity for the first time. To our surprise, the seemingly well-studied privacy/anonymity problem has several new challenges in this setting. Since the public blockchain and internal transaction activities naturally provide many non-trivial leakages to the platform, internal privacy is not only useful in the usual sense but also becomes necessary for regaining the basic anonymity of user transactions. We also ensure that the user cannot double spend, and the user has to properly report accumulated profit for tax purposes, even in the private setting. We give a careful modeling and efficient construction of the system that achieves constant computation and communication overhead (with only simple cryptographic tools and rigorous security analysis); we also implement our system and evaluate its practical performance.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/pisces-private-and-compliable-cryptocurrency-exchange/](https://www.ndss-symposium.org/ndss-paper/pisces-private-and-compliable-cryptocurrency-exchange/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-220-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-220-paper.pdf)
## ShapFuzz: Efficient Fuzzing via Shapley-Guided Byte Selection.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#shapfuzz-efficient-fuzzing-via-shapley-guided-byte-selection)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#shapfuzz-efficient-fuzzing-via-shapley-guided-byte-selection)
### Authors
* Kunpeng Zhang, Shenzhen International Graduate School
### Abstract
> Mutation-based fuzzing is popular and effective in discovering unseen code and exposing bugs. However, only a few studies have concentrated on quantifying the importance of input bytes, which refers to the degree to which a byte contributes to the discovery of new code. They often focus on obtaining the relationship between input bytes and path constraints, ignoring the fact that not all constraint-related bytes can discover new code. In this paper, we conduct Shapely analysis to understand the effect of byte positions on fuzzing performance, and find that some byte positions contribute more than others and this property often holds across seeds. Based on this observation, we propose a novel fuzzing solution, ShapFuzz, to guide byte selection and mutation. Specifically, ShapFuzz updates Shapley values (importance) of bytes when each input is tested during fuzzing with a low overhead, and utilizes contextual multi-armed bandit to trade off between mutating high Shapley value bytes and low-frequently chosen bytes. We implement a prototype of this solution based on AFL++, i.e., ShapFuzz. We evaluate ShapFuzz against ten state-of-the-art fuzzers, including five byte schedule-reinforced fuzzers and five commonly used fuzzers. Compared with byte schedule-reinforced fuzzers, ShapFuzz discovers more edges and exposes more bugs than the best baseline on three different sets of initial seeds. Compared with commonly used fuzzers, ShapFuzz exposes 20 more bugs than the best comparison fuzzer, and discovers 6 more CVEs than the best baseline on MAGMA. Furthermore, ShapFuzz discovers 11 new bugs on the latest versions of programs, and 3 of them are confirmed by vendors.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/shapfuzz-efficient-fuzzing-via-shapley-guided-byte-selection/](https://www.ndss-symposium.org/ndss-paper/shapfuzz-efficient-fuzzing-via-shapley-guided-byte-selection/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-134-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-134-paper.pdf)
## SigmaDiff: Semantics-Aware Deep Graph Matching for Pseudocode Diffing.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#sigmadiff-semantics-aware-deep-graph-matching-for-pseudocode-diffing)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#sigmadiff-semantics-aware-deep-graph-matching-for-pseudocode-diffing)
### Authors
* Lian Gao, University of California Riverside
* Yu Qu, University of California Riverside
* Sheng Yu, University of California
### Abstract
> Pseudocode diffing precisely locates similar parts and captures differences between the decompiled pseudocode of two given binaries. It is particularly useful in many security scenarios such as code plagiarism detection, lineage analysis, patch, vulnerability analysis, etc. However, existing pseudocode diffing and binary diffing tools suffer from low accuracy and poor scalability, since they either rely on manually-designed heuristics (e.g., Diaphora) or heavy computations like matrix factorization (e.g., DeepBinDiff). To address the limitations, in this paper, we propose a semantics-aware, deep neural network-based model called SigmaDiff. SigmaDiff first constructs IR (Intermediate Representation) level interprocedural program dependency graphs (IPDGs). Then it uses a lightweight symbolic analysis to extract initial node features and locate training nodes for the neural network model. SigmaDiff then leverages the state-of-the-art graph matching model called Deep Graph Matching Consensus (DGMC) to match the nodes in IPDGs. SigmaDiff also introduces several important updates to the design of DGMC such as the pre-training and fine-tuning schema. Experimental results show that SigmaDiff significantly outperforms the state-of-the-art heuristic-based and deep learning-based techniques in terms of both accuracy and efficiency. It is able to precisely pinpoint eight vulnerabilities in a widely-used video conferencing application.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/sigmadiff-semantics-aware-deep-graph-matching-for-pseudocode-diffing/](https://www.ndss-symposium.org/ndss-paper/sigmadiff-semantics-aware-deep-graph-matching-for-pseudocode-diffing/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-208-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-208-paper.pdf)
## Symphony: Path Validation at Scale.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#symphony-path-validation-at-scale)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#symphony-path-validation-at-scale)
### Authors
* Anxiao He, Zhejiang University
* Jiandong Fu, Zhejiang University
* Kai Bu, Zhejiang University
* Ruiqi Zhou, Zhejiang University
* Chenlu Miao, Zhejiang University
* Kui Ren, Zhejiang University
### Abstract
> Path validation has long been explored as a fundamental solution to secure future Internet architectures. It enables end-hosts to specify forwarding paths for their traffic and to verify whether the traffic follows the specified paths. In comparison with the current Internet architecture that keeps packet forwarding uncontrolled and transparent to end-hosts, path validation benefits end-hosts with flexibility, security, and privacy. The key design enforces routers to embed their credentials into cryptographic proofs in packet headers. Such proofs require sufficiently complex computation to guarantee unforgeability. This imposes an inevitable barrier on validation efficiency for a single packet. In this paper, we propose aggregate validation to implement path validation in a group-wise way. Amortizing overhead across packets in a group, aggregate validation promises higher validation efficiency without sacrificing security. We implement aggregation validation through Symphony, with various design techniques integrated and security properties formally proved. In comparison with state-of-the-art EPIC, Symphony speeds up packet processing by 3.78 ×∼ 18.40 × and increases communication throughput by 1.13 ×∼ 6.11 ×.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/symphony-path-validation-at-scale/](https://www.ndss-symposium.org/ndss-paper/symphony-path-validation-at-scale/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-104-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-104-paper.pdf)
## The Dark Side of E-Commerce: Dropshipping Abuse as a Business Model.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#the-dark-side-of-e-commerce-dropshipping-abuse-as-a-business-model)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#the-dark-side-of-e-commerce-dropshipping-abuse-as-a-business-model)
### Authors
* Arjun Arunasalam, Purdue University
* Andrew Chu, University of Chicago
* Muslum Ozgur Ozmen, Purdue University
* Habiba Farrukh, University of California
### Abstract
> The impact of e-commerce on today’s society is a global phenomenon. Given the increased demand for online purchases of items, e-commerce platforms often defer item sales to third-party sellers. A number of these sellers are dropshippers, sellers acting as middlemen who fulfill their customers’ orders through third-party suppliers. While this allows customers to access more products on e-commerce sites, we uncover that abusive dropshippers, who exploit the standard permitted dropshipping model, exist, deceiving customers, and damaging other e-commerce sellers. In this paper, we present the first comprehensive study on the characterization of abusive dropshippers and uncover harmful strategies they use to list items and evade account suspension on e-commerce marketplaces. We crawled the web to discover online forums, instructional material, and software used by the abusive dropshipping community. We inductively code forum threads and instructional material and read software documentation, installing when possible, to create an end-to-end lifecycle of this abuse. We also identify exploitative strategies abusive dropshippers use to ensure persistence on platforms. We then interviewed six individuals experienced in e-commerce (legal consultants and sellers) and developed an understanding of how abusive dropshipping harms customers and sellers. Through this, we present five characteristics that warrant future investigation into automated detection of abusive dropshippers on e-commerce platforms. Our efforts present a comprehensive view of how abusive dropshippers operate and how sellers and consumers interact with them, providing a framework to motivate future investigations into countering these harmful operations.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/the-dark-side-of-e-commerce-dropshipping-abuse-as-a-business-model/](https://www.ndss-symposium.org/ndss-paper/the-dark-side-of-e-commerce-dropshipping-abuse-as-a-business-model/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-39-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-39-paper.pdf)
## Transpose Attack: Stealing Datasets with Bidirectional Training.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#transpose-attack-stealing-datasets-with-bidirectional-training)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#transpose-attack-stealing-datasets-with-bidirectional-training)
### Authors
* Guy Amit, Ben-Gurion University
* Moshe Levy, Ben-Gurion University
* Yisroel Mirsky, Ben-Gurion University
### Abstract
> Deep neural networks are normally executed in the forward direction. However, in this work, we identify a vulnerability that enables models to be trained in both directions and on different tasks. Adversaries can exploit this capability to hide rogue models within seemingly legitimate models. In addition, in this work we show that neural networks can be taught to systematically memorize and retrieve specific samples from datasets. Together, these findings expose a novel method in which adversaries can exfiltrate datasets from protected learning environments under the guise of legitimate models.
> 
> We focus on the data exfiltration attack and show that modern architectures can be used to secretly exfiltrate tens of thousands of samples with high fidelity, high enough to compromise data privacy and even train new models. Moreover, to mitigate this threat we propose a novel approach for detecting infected models.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/transpose-attack-stealing-datasets-with-bidirectional-training/](https://www.ndss-symposium.org/ndss-paper/transpose-attack-stealing-datasets-with-bidirectional-training/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-325-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-325-paper.pdf)
## TrustSketch: Trustworthy Sketch-based Telemetry on Cloud Hosts.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#trustsketch-trustworthy-sketch-based-telemetry-on-cloud-hosts)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#trustsketch-trustworthy-sketch-based-telemetry-on-cloud-hosts)
### Authors
* Zhuo Cheng, Carnegie Mellon University
* Maria Apostolaki, Princeton University
* Zaoxing Liu, University of Maryland
* Vyas Sekar, Carnegie Mellon University
### Abstract
> Cloud providers deploy telemetry tools in software to perform end-host network analytics. Recent efforts show that sketches, a kind of approximate data structure, are a promising basis for software-based telemetry, as they provide high fidelity for many statistics with a low resource footprint. However, an attacker can compromise sketch-based telemetry results via software vulnerabilities. Consequently, they can nullify the use of telemetry; e.g., avoiding attack detection or inducing accounting discrepancies. In this paper, we formally define the requirements for trustworthy sketch-based telemetry and show that prior work cannot meet those due to the sketch’s probabilistic nature and performance requirements. We present the design and implementation TRUSTSKETCH, a general framework for trustworthy sketch telemetry that can support a wide spectrum of sketching algorithms. We show that TRUSTSKETCH is able to detect a wide range of attacks on sketch-based telemetry in a timely fashion while incurring only minimal overhead.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/trustsketch-trustworthy-sketch-based-telemetry-on-cloud-hosts/](https://www.ndss-symposium.org/ndss-paper/trustsketch-trustworthy-sketch-based-telemetry-on-cloud-hosts/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-65-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-65-paper.pdf)
## Understanding and Analyzing Appraisal Systems in the Underground Marketplaces.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#understanding-and-analyzing-appraisal-systems-in-the-underground-marketplaces)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#understanding-and-analyzing-appraisal-systems-in-the-underground-marketplaces)
### Authors
* Zhengyi Li, Indiana University Bloomington
* Xiaojing Liao, Indiana University Bloomington
### Abstract
> An appraisal system is a feedback mechanism that has gained popularity in underground marketplaces. This system allows appraisers, who receive free samples from vendors, to provide assessments (i.e., appraisal reviews) for products in underground marketplaces. In this paper, we present the first measurement study on the appraisal system within underground marketplaces. Specifically, from 17M communication traces from eight marketplaces spanning from Feb 2006 to Mar 2023, we discover 56,229 appraisal reviews posted by 18,701 unique appraisers. We look into the appraisal review ecosystem, revealing five commonly used requirements and merits in the appraiser selection process. These findings indicate that the appraisal system is a well-established and structured process within the underground marketplace ecosystem. Furthermore, we reveal the presence of high-quality and unique cyber threat intelligence (CTI) in appraisal reviews. For example, we identify the geolocations of followers for a social booster and programming languages used for malware. Leveraging our extraction model, which integrates 41 distinct types of CTI, we capture 23,978 artifacts associated with 16,668 (50.2%) appraisal reviews. In contrast, artifacts are found in only 8.9% of listings and 2.7% of non-appraisal reviews. Our study provides valuable insights into this under-explored source of CTI, complementing existing research on threat intelligence gathering.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/understanding-and-analyzing-appraisal-systems-in-the-underground-marketplaces/](https://www.ndss-symposium.org/ndss-paper/understanding-and-analyzing-appraisal-systems-in-the-underground-marketplaces/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-187-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-187-paper.pdf)
## Unus pro omnibus: Multi-Client Searchable Encryption via Access Control.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#unus-pro-omnibus-multi-client-searchable-encryption-via-access-control)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#unus-pro-omnibus-multi-client-searchable-encryption-via-access-control)
### Authors
* Jiafan Wang, Data61
### Abstract
> Searchable encryption lets an untrusted cloud server store keyword-document tuples encrypted by writers and conduct keyword searches with tokens from readers. Multi-writer schemes naturally offer broad applicability; however, it is unclear how to achieve the distinctive features of single-writer systems, namely, optimal search traversing only the result set and forward privacy invalidating old search tokens against any new data. Cutting-edge results by Wang and Chow (Usenix Security 2022) incur extra traversal over existing keywords and weaken forward privacy that only invalidates previous-issued search tokens periodically.
> 
> We propose delegatable searchable encryption (DSE) with optimal search time for the multi-writer multi-reader setting. Beyond forward privacy, DSE supports security measures countering new integrity threats by malicious clients and keyword-guessing attacks inherent to public-key schemes. These are simultaneously made conceivable via one-time delegations of updating and/or searching power from the data owner and our tailored notion of shiftable multi-recipient counter encryption. DSE also benefits from the hybrid searchable encryption idea of Wang and Chow but at a microscopic level. Our evaluation confirms the order-of-magnitude improvement in search time over real-world datasets.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/unus-pro-omnibus-multi-client-searchable-encryption-via-access-control/](https://www.ndss-symposium.org/ndss-paper/unus-pro-omnibus-multi-client-searchable-encryption-via-access-control/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-288-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-288-paper.pdf)
## 50 Shades of Support: A Device-Centric Analysis of Android Security Updates.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#50-shades-of-support-a-device-centric-analysis-of-android-security-updates)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#50-shades-of-support-a-device-centric-analysis-of-android-security-updates)
### Authors
* Abbas Acar, Florida International University
* Güliz Seray Tuncay, Google
* Esteban Luques, Florida International University
* Harun Oz, Florida International University
* Ahmet Aris, Florida International University
* Selcuk Uluagac, Florida International University
### Abstract
> Android is by far the most popular OS with over three billion active mobile devices. As in any software, uncovering vulnerabilities on Android devices and applying timely patches are both critical. Android Open Source Project has initiated efforts to improve the traceability of security updates through Security Patch Levels assigned to devices. While this initiative provided better traceability for the vulnerabilities, it has not entirely resolved the issues related to the timeliness and availability of security updates for end users. Recent studies on Android security updates have focused on the issue of delay during the security update roll-out, largely attributing this to factors related to fragmentation. However, these studies fail to capture the entire Android ecosystem as they primarily examine flagship devices or do not paint a comprehensive picture of the Android devices’ lifecycle due to the datasets spanning over a short timeframe. To address this gap in the literature, we utilize a device-centric approach to analyze the security update behavior of Android devices. Our approach aims to understand the security update distribution behavior of Original Equipment Manufacturers (OEM) by using a representative set of devices from each OEM and characterize the complete lifecycle of an average Android device. We obtained 367K official security update records from public sources, spanning from 2014 to 2023. Our dataset contains 599 unique devices from four major OEMs that are used in 97 countries and are associated with 109 carriers. We identify significant differences in the roll-out of security updates across different OEMs, device models and types, and geographical regions across the world. Our findings show that the reasons for the delay in the roll-out of security updates are not limited to fragmentation but also involve several OEM-specific factors such as the type of support the device receives (e.g., monthly, quarterly, biannual). Our analysis also uncovers certain key issues regarding the security update distribution that can be readily addressed as well as exemplary practices that can be immediately adopted by OEMs in practice.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/50-shades-of-support-a-device-centric-analysis-of-android-security-updates/](https://www.ndss-symposium.org/ndss-paper/50-shades-of-support-a-device-centric-analysis-of-android-security-updates/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-175-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-175-paper.pdf)
## 5G-Spector: An O-RAN Compliant Layer-3 Cellular Attack Detection Service.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#5g-spector-an-o-ran-compliant-layer-3-cellular-attack-detection-service)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#5g-spector-an-o-ran-compliant-layer-3-cellular-attack-detection-service)
### Authors
* Haohuang Wen, The Ohio State University
* Phillip Porras, SRI International
* Vinod Yegneswaran, SRI International
* Ashish Gehani, SRI International
* Zhiqiang Lin, The Ohio State University
### Abstract
> Over the past several years, the mobile security community has discovered a wide variety of exploits against link and session-establishment protocols. These exploits can be implemented on software-defined radios (SDRs) that disrupt, spoof, or flood layer-3 (L3) messages to compromise security and privacy, which still apply to the latest 5G mobile network standard. Interestingly, unlike the prior generations of closed (proprietary) mobile network infrastructures, 5G networks are migrating toward a more intelligent and open-standards-based fully interoperable mobile architecture, called Open RAN or O-RAN. The implications of transitioning mobile infrastructures to a software-defined architectural abstraction are quite significant to the INFOSEC community, as it allows us to extend the mobile data plane and control plane with security-focused protocol auditing services and exploit detection. Based on this design, we present 5G-SPECTOR, the first comprehensive framework for detecting the wide spectrum of L3 protocol exploits on O-RAN. It features a novel security audit stream called MOBIFLOW that transfers fine-grained cellular network telemetry, and a programmable control-plane xApp called MOBIEXPERT. We present an extensible prototype of 5G-SPECTOR which can detect 7 types of cellular attacks in real time. We also demonstrate its scalability to 11 unknown attacks as well as 31 real-world cellular traces, with effective performance (high accuracy, no false alarms) and low (<2% CPU, <100 MB memory) overhead.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/5g-spector-an-o-ran-compliant-layer-3-cellular-attack-detection-service/](https://www.ndss-symposium.org/ndss-paper/5g-spector-an-o-ran-compliant-layer-3-cellular-attack-detection-service/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-527-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-527-paper.pdf)
## A Duty to Forget, a Right to be Assured? Exposing Vulnerabilities in Machine Unlearning Services.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#a-duty-to-forget-a-right-to-be-assured-exposing-vulnerabilities-in-machine-unlearning-services)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#a-duty-to-forget-a-right-to-be-assured-exposing-vulnerabilities-in-machine-unlearning-services)
### Authors
* Hongsheng Hu, CSIRO's Data61
* Shuo Wang, CSIRO's Data61
* Jiamin Chang, University of New South Wales
* Haonan Zhong, University of New South Wales
* Ruoxi Sun, CSIRO's Data61
* Shuang Hao, University of Texas at Dallas
* Haojin Zhu, Shanghai Jiao Tong University
* Minhui Xue, CSIRO's Data61
### Abstract
> The right to be forgotten requires the removal or "unlearning" of a user's data from machine learning models. However, in the context of Machine Learning as a Service (MLaaS), retraining a model from scratch to fulfill the unlearning request is impractical due to the lack of training data on the service provider's side (the server). Furthermore, approximate unlearning further embraces a complex trade-off between utility (model performance) and privacy (unlearning performance). In this paper, we try to explore the potential threats posed by unlearning services in MLaaS, specifically over-unlearning, where more information is unlearned than expected. We propose two strategies that leverage over-unlearning to measure the impact on the trade-off balancing, under black-box access settings, in which the existing machine unlearning attacks are not applicable. The effectiveness of these strategies is evaluated through extensive experiments on benchmark datasets, across various model architectures and representative unlearning approaches. Results indicate significant potential for both strategies to undermine model efficacy in unlearning scenarios. This study uncovers an underexplored gap between unlearning and contemporary MLaaS, highlighting the need for careful considerations in balancing data unlearning, model utility, and security.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/a-duty-to-forget-a-right-to-be-assured-exposing-vulnerabilities-in-machine-unlearning-services/](https://www.ndss-symposium.org/ndss-paper/a-duty-to-forget-a-right-to-be-assured-exposing-vulnerabilities-in-machine-unlearning-services/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-252-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-252-paper.pdf)
## A Security and Usability Analysis of Local Attacks Against FIDO2.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#a-security-and-usability-analysis-of-local-attacks-against-fido2)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#a-security-and-usability-analysis-of-local-attacks-against-fido2)
### Authors
* Tarun Kumar Yadav, Brigham Young University
* Kent Seamons, Brigham Young University
### Abstract
> The FIDO2 protocol aims to strengthen or replace password authentication using public-key cryptography. FIDO2 has primarily focused on defending against attacks from afar by remote attackers that compromise a password or attempt to phish the user. In this paper, we explore threats from local attacks on FIDO2 that have received less attention---a malicious browser extension or cross-site scripting (XSS), and attackers gaining physical access to an HSK. Our systematic analysis of current implementations of FIDO2 reveals four underlying flaws, and we demonstrate the feasibility of seven attacks that exploit those flaws. The flaws include (1) Lack of confidentiality/integrity of FIDO2 messages accessible to browser extensions, (2) Broken clone detection algorithm, (3) Potential for user misunderstanding from social engineering and notification/error messages, and (4) Cookie life cycle. We build malicious browser extensions and demonstrate the attacks on ten popular web servers that use FIDO2. We also show that many browser extensions have sufficient permissions to conduct the attacks if they were compromised. A static and dynamic analysis of current browser extensions finds no evidence of the attacks in the wild. We conducted two user studies confirming that participants do not detect the attacks with current error messages, email notifications, and UX responses to the attacks. We provide an improved clone detection algorithm and recommendations for relying parties that detect or prevent some of the attacks.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/a-security-and-usability-analysis-of-local-attacks-against-fido2/](https://www.ndss-symposium.org/ndss-paper/a-security-and-usability-analysis-of-local-attacks-against-fido2/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-327-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-327-paper.pdf)
## A Two-Layer Blockchain Sharding Protocol Leveraging Safety and Liveness for Enhanced Performance.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#a-two-layer-blockchain-sharding-protocol-leveraging-safety-and-liveness-for-enhanced-performance)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#a-two-layer-blockchain-sharding-protocol-leveraging-safety-and-liveness-for-enhanced-performance)
### Authors
* Yibin Xu, University of Copenhagen
* Jingyi Zheng, University of Copenhagen
* Boris Düdder, University of Copenhagen
* Tijs Slaats, University of Copenhagen
* Yongluan Zhou, University of Copenhagen
### Abstract
> Sharding is a critical technique that enhances the scalability of blockchain technology. However, existing protocols often assume adversarial nodes in a general term without considering the different types of attacks, which limits transaction throughput at runtime because attacks on liveness could be mitigated. There have been attempts to increase transaction throughput by separately handling the attacks; however, they have security vulnerabilities. This paper introduces Reticulum, a novel sharding protocol that overcomes these limitations and achieves enhanced scalability in a blockchain network without security vulnerabilities.
> 
> Reticulum employs a two-phase design that dynamically adjusts transaction throughput based on runtime adversarial attacks on either or both liveness and safety. It consists of ‘control’ and ‘process’ shards in two layers corresponding to the two phases. Process shards are subsets of control shards, with each process shard expected to contain at least one honest node with high confidence. Conversely, control shards are expected to have a majority of honest nodes with high confidence. Reticulum leverages unanimous voting in the first phase to involve fewer nodes in accepting/rejecting a block, allowing more parallel process shards. The control shard finalizes the decision made in the first phase and serves as a lifeline to resolve disputes when they surface.
> 
> Experiments demonstrate that the unique design of Reticulum empowers high transaction throughput and robustness in the face of different types of attacks in the network, making it superior to existing sharding protocols for blockchain networks.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/a-two-layer-blockchain-sharding-protocol-leveraging-safety-and-liveness-for-enhanced-performance/](https://www.ndss-symposium.org/ndss-paper/a-two-layer-blockchain-sharding-protocol-leveraging-safety-and-liveness-for-enhanced-performance/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-6-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-6-paper.pdf)
## A Unified Symbolic Analysis of WireGuard.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#a-unified-symbolic-analysis-of-wireguard)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#a-unified-symbolic-analysis-of-wireguard)
### Authors
* Pascal Lafourcade, Universite Clermont Auvergne
* Dhekra Mahmoud, Universite Clermont Auvergne
* Sylvain Ruhault, Agence Nationale de la Sécurité des Systèmes d'Information
### Abstract
> WireGuard is a Virtual Private Network (VPN), presented at NDSS 2017, recently integrated into the Linux Kernel and paid commercial VPNs such as NordVPN, Mullvad and ProtonVPN. It proposes a different approach from other classical VPN such as IPsec or OpenVPN because it does not let configure cryptographic algorithms. The protocol inside WireGuard is a dedicated extension of IKpsk2 protocol from Noise Framework. Different analyses of WireGuard and IKpsk2 protocols have been proposed, in both the symbolic and the computational model, with or without computer-aided proof assistants. These analyses however consider different adversarial models or refer to incomplete versions of the protocols. In this work, we propose a unified formal model of WireGuard protocol in the symbolic model. Our model uses the automatic cryptographic protocol verifiers SAPIC+, ProVerif and Tamarin. We consider a complete protocol execution, including cookie messages used for resistance against denial of service attacks. We model a precise adversary that can read or set static, ephemeral or pre-shared keys, read or set ECDH pre-computations, control key distribution. Eventually, we present our results in a unified and interpretable way, allowing comparisons with previous analyses. Finally thanks to our models, we give necessary and sufficient conditions for security properties to be compromised, we confirm a flaw on the anonymity of the communications and point an implementation choice which considerably weakens its security. We propose a remediation that we prove secure using our models.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/a-unified-symbolic-analysis-of-wireguard/](https://www.ndss-symposium.org/ndss-paper/a-unified-symbolic-analysis-of-wireguard/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-364-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-364-paper.pdf)
## AAKA: An Anti-Tracking Cellular Authentication Scheme Leveraging Anonymous Credentials.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#aaka-an-anti-tracking-cellular-authentication-scheme-leveraging-anonymous-credentials)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#aaka-an-anti-tracking-cellular-authentication-scheme-leveraging-anonymous-credentials)
### Authors
* Hexuan Yu, Virginia Polytechnic Institute and State University
* Changlai Du, Virginia Polytechnic Institute and State University
* Yang Xiao, University of Kentucky
* Angelos Keromytis, Georgia Institute of Technology
* Chonggang Wang, InterDigital
* Robert Gazda, InterDigital
* Y. Thomas Hou, Virginia Polytechnic Institute and State University
* Wenjing Lou, Virginia Polytechnic Institute and State University
### Abstract
> Mobile tracking has long been a privacy problem, where the geographic data and timestamps gathered by mobile network operators (MNOs) are used to track the locations and movements of mobile subscribers. Additionally, selling the geolocation information of subscribers has become a lucrative business. Many mobile carriers have violated user privacy agreements by selling users' location history to third parties without user consent, exacerbating privacy issues related to mobile tracking and profiling. This paper presents AAKA, an anonymous authentication and key agreement scheme designed to protect against mobile tracking by honest-but-curious MNOs. AAKA leverages anonymous credentials and introduces a novel mobile authentication protocol that allows legitimate subscribers to access the network anonymously, without revealing their unique (real) IDs. It ensures the integrity of user credentials, preventing forgery, and ensures that connections made by the same user at different times cannot be linked. While the MNO alone cannot identify or profile a user, AAKA enables identification of a user under legal intervention, such as when the MNOs collaborate with an authorized law enforcement agency. Our design is compatible with the latest cellular architecture and SIM standardized by 3GPP, meeting 3GPP's fundamental security requirements for User Equipment (UE) authentication and key agreement processes. A comprehensive security analysis demonstrates the scheme's effectiveness. The evaluation shows that the scheme is practical, with a credential presentation generation taking ~52 ms on a constrained host device equipped with a standard cellular SIM.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/aaka-an-anti-tracking-cellular-authentication-scheme-leveraging-anonymous-credentials/](https://www.ndss-symposium.org/ndss-paper/aaka-an-anti-tracking-cellular-authentication-scheme-leveraging-anonymous-credentials/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-617-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-617-paper.pdf)
## Abusing the Ethereum Smart Contract Verification Services for Fun and Profit.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#abusing-the-ethereum-smart-contract-verification-services-for-fun-and-profit)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#abusing-the-ethereum-smart-contract-verification-services-for-fun-and-profit)
### Authors
* Pengxiang Ma, Huazhong University of Science and Technology
* Ningyu He, Peking University
* Yuhua Huang, Huazhong University of Science and Technology
* Haoyu Wang, Huazhong University of Science and Technology
* Xiapu Luo, The Hong Kong Polytechnic University
### Abstract
> Smart contracts play a vital role in the Ethereum ecosystem. Due to the prevalence of kinds of security issues in smart contracts, the smart contract verification is urgently needed, which is the process of matching a smart contract’s source code to its on-chain bytecode for gaining mutual trust between smart contract developers and users. Although smart contract verification services are embedded in both popular Ethereum browsers (e.g., Etherscan and Blockscout) and official platforms (i.e., Sourcify), and gain great popularity in the ecosystem, their security and trustworthiness remain unclear. To fill the void, we present the first comprehensive security analysis of smart contract verification services in the wild. By diving into the detailed workflow of existing verifiers, we have summarized the key security properties that should be met, and observed eight types of vulnerabilities that can break the verification. Further, we propose a series of detection and exploitation methods to reveal the presence of vulnerabilities in the most popular services, and uncover 19 exploitable vulnerabilities in total. All the studied smart contract verification services can be abused to help spread malicious smart contracts, and we have already observed the presence of using this kind of tricks for scamming by attackers. It is hence urgent for our community to take actions to detect and mitigate security issues related to smart contract verification, a key component of the Ethereum smart contract ecosystem.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/abusing-the-ethereum-smart-contract-verification-services-for-fun-and-profit/](https://www.ndss-symposium.org/ndss-paper/abusing-the-ethereum-smart-contract-verification-services-for-fun-and-profit/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-992-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-992-paper.pdf)
## Acoustic Keystroke Leakage on Smart Televisions.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#acoustic-keystroke-leakage-on-smart-televisions)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#acoustic-keystroke-leakage-on-smart-televisions)
### Authors
* Tejas Kannan, University of Chicago
* Synthia Qia Wang, University of Chicago
* Max Sunog, University of Chicago
* Abraham Bueno de Mesquita, University of Chicago Laboratory Schools
* Nick Feamster, University of Chicago
* Henry Hoffmann, University of Chicago
### Abstract
> Smart Televisions (TVs) are internet-connected TVs that support video streaming applications and web browsers. Users enter information into Smart TVs through on-screen virtual keyboards. These keyboards require users to navigate between keys with directional commands from a remote controller. Given the extensive functionality of Smart TVs, users type sensitive information (e.g., passwords) into these devices, making keystroke privacy necessary. This work develops and demonstrates a new side-channel attack that exposes keystrokes from the audio of two popular Smart TVs: Apple and Samsung. This side-channel attack exploits how Smart TVs make different sounds when selecting a key, moving the cursor, and deleting a character. These properties allow an attacker to extract the number of cursor movements between selections from the TV's audio. Our attack uses this extracted information to identify the likeliest typed strings. Against realistic users, the attack finds up to 33.33% of credit card details and 60.19% of common passwords within 100 guesses. This vulnerability has been acknowledged by Samsung and highlights how Smart TVs must better protect sensitive data.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/acoustic-keystroke-leakage-on-smart-televisions/](https://www.ndss-symposium.org/ndss-paper/acoustic-keystroke-leakage-on-smart-televisions/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-72-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-72-paper.pdf)
## ActiveDaemon: Unconscious DNN Dormancy and Waking Up via User-specific Invisible Token.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#activedaemon-unconscious-dnn-dormancy-and-waking-up-via-user-specific-invisible-token)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#activedaemon-unconscious-dnn-dormancy-and-waking-up-via-user-specific-invisible-token)
### Authors
* Ge Ren, Shanghai Jiao Tong University
* Gaolei Li, Shanghai Jiao Tong University
* Shenghong Li, Shanghai Jiao Tong University
* Libo Chen, Shanghai Jiao Tong University
* Kui Ren, Zhejiang University
### Abstract
> Well-trained deep neural network (DNN) models can be treated as commodities for commercial transactions and generate significant revenues, raising the urgent need for intellectual property (IP) protection against illegitimate reproducing. Emerging studies on IP protection often aim at inserting watermarks into DNNs, allowing owners to passively verify the ownership of target models after counterfeit models appear and commercial benefits are infringed, while active authentication against unauthorized queries of DNN-based applications is still neglected. In this paper, we propose a novel approach to protect model intellectual property, called ActiveDaemon, which incorporates a built-in access control function in DNNs to safeguard against commercial piracy. Specifically, our approach enables DNNs to predict correct outputs only for authorized users with user-specific tokens while producing poor accuracy for unauthorized users. In ActiveDaemon, the user-specific tokens are generated by a specially designed U-Net style encoder-decoder network, which can map strings and input images into numerous noise images to address identity management with large-scale user capacity. Compared to existing studies, these user-specific tokens are invisible, dynamic and more perceptually concealed, enhancing the stealthiness and reliability of model IP protection. To automatically wake up the model accuracy, we utilize the data poisoning-based training technique to unconsciously embed the ActiveDaemon into the neuron's function. We conduct experiments to compare the protection performance of ActiveDaemon with four state-of-the-art approaches over four datasets. The experimental results show that ActiveDaemon can reduce the accuracy of unauthorized queries by as much as 81% with less than a 1.4% decrease in that of authorized queries. Meanwhile, our approach can also reduce the LPIPS scores of the authorized tokens to 0.0027 on CIFAR10 and 0.0368 on ImageNet.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/activedaemon-unconscious-dnn-dormancy-and-waking-up-via-user-specific-invisible-token/](https://www.ndss-symposium.org/ndss-paper/activedaemon-unconscious-dnn-dormancy-and-waking-up-via-user-specific-invisible-token/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-588-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-588-paper.pdf)
## AnonPSI: An Anonymity Assessment Framework for PSI.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#anonpsi-an-anonymity-assessment-framework-for-psi)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#anonpsi-an-anonymity-assessment-framework-for-psi)
### Authors
* Bo Jiang, TikTok Inc.
* Jian Du, TikTok Inc.
* Qiang Yan, TikTok Inc.
### Abstract
> Private Set Intersection (PSI) is a widely used protocol that enables two parties to securely compute a function over the intersected part of their shared datasets and has been a significant research focus over the years. However, recent studies have highlighted its vulnerability to Set Membership Inference Attacks (SMIA), where an adversary might deduce an individual's membership by invoking multiple PSI protocols. This presents a considerable risk, even in the most stringent versions of PSI, which only return the cardinality of the intersection. This paper explores the evaluation of anonymity within the PSI context. Initially, we highlight the reasons why existing works fall short in measuring privacy leakage, and subsequently propose two attack strategies that address these deficiencies. Furthermore, we provide theoretical guarantees on the performance of our proposed methods. In addition to these, we illustrate how the integration of auxiliary information, such as the sum of payloads associated with members of the intersection (PSI-SUM), can enhance attack efficiency. We conducted a comprehensive performance evaluation of various attack strategies proposed utilizing two real datasets. Our findings indicate that the methods we propose markedly enhance attack efficiency when contrasted with previous research endeavors. The effective attacking implies that depending solely on existing PSI protocols may not provide an adequate level of privacy assurance. It is recommended to combine privacy-enhancing technologies synergistically to enhance privacy protection even further.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/anonpsi-an-anonymity-assessment-framework-for-psi/](https://www.ndss-symposium.org/ndss-paper/anonpsi-an-anonymity-assessment-framework-for-psi/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-1279-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-1279-paper.pdf)
## Automatic Adversarial Adaption for Stealthy Poisoning Attacks in Federated Learning.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#automatic-adversarial-adaption-for-stealthy-poisoning-attacks-in-federated-learning)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#automatic-adversarial-adaption-for-stealthy-poisoning-attacks-in-federated-learning)
### Authors
* Torsten Krauß, University of Würzburg
* Jan König, University of Würzburg
* Alexandra Dmitrienko, University of Wuerzburg
* Christian Kanzow, University of Würzburg
### Abstract
> Federated Learning (FL) enables the training of machine learning models using distributed data. This approach offers benefits such as improved data privacy, reduced communication costs, and enhanced model performance through increased data diversity. However, FL systems are vulnerable to poisoning attacks, where adversaries introduce malicious updates to compromise the integrity of the aggregated model. Existing defense strategies against such attacks include filtering, influence reduction, and robust aggregation techniques. Filtering approaches have the advantage of not reducing classification accuracy, but face the challenge of adversaries adapting to the defense mechanisms. The lack of a universally accepted definition of "adaptive adversaries" in the literature complicates the assessment of detection capabilities and meaningful comparisons of FL defenses.
> 
> In this paper, we address the limitations of the commonly used definition of "adaptive attackers" proposed by Bagdasaryan et al. We propose AutoAdapt, a novel adaptation method that leverages an Augmented Lagrangian optimization technique. AutoAdapt eliminates the manual search for optimal hyper-parameters by providing a more rational alternative. It generates more effective solutions by accommodating multiple inequality constraints, allowing adaptation to valid value ranges within the defensive metrics. Our proposed method significantly enhances adversaries' capabilities and accelerates research in developing attacks and defenses. By accommodating multiple valid range constraints and adapting to diverse defense metrics, AutoAdapt challenges defenses relying on multiple metrics and expands the range of potential adversarial behaviors. Through comprehensive studies, we demonstrate the effectiveness of AutoAdapt in simultaneously adapting to multiple constraints and showcasing its power by accelerating the performance of tests by a factor of 15. Furthermore, we establish the versatility of AutoAdapt across various application scenarios, encompassing datasets, model architectures, and hyper-parameters, emphasizing its practical utility in real-world contexts. Overall, our contributions advance the evaluation of FL defenses and drive progress in this field.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/automatic-adversarial-adaption-for-stealthy-poisoning-attacks-in-federated-learning/](https://www.ndss-symposium.org/ndss-paper/automatic-adversarial-adaption-for-stealthy-poisoning-attacks-in-federated-learning/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-1366-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-1366-paper.pdf)
## Automatic Policy Synthesis and Enforcement for Protecting Untrusted Deserialization.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#automatic-policy-synthesis-and-enforcement-for-protecting-untrusted-deserialization)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#automatic-policy-synthesis-and-enforcement-for-protecting-untrusted-deserialization)
### Authors
* Quan Zhang, Tsinghua University
* Yiwen Xu, Tsinghua University
* Zijing Yin, Tsinghua University
* Chijin Zhou, Tsinghua University
* Yu Jiang, Tsinghua University
### Abstract
> Java deserialization vulnerabilities have long been a grave security concern for Java applications. By injecting malicious objects with carefully crafted structures, attackers can reuse a series of existing methods during deserialization to achieve diverse attacks like remote code execution. To mitigate such attacks, developers are encouraged to implement policies restricting the object types that applications can deserialize. However, the design of precise policies requires expertise and significant manual effort, often leading to either the absence of policy or the implementation of inadequate ones.
> 
> In this paper, we propose DeseriGuard, a tool designed to assist developers in securing their applications seamlessly against deserialization attacks. It can automatically formulate a policy based on the application's semantics and then enforce it to restrict illegal deserialization attempts. First, DeseriGuard utilizes dataflow analysis to construct a semantic-aware property tree, which records the potential structures of deserialized objects. Based on the tree, DeseriGuard identifies the types of objects that can be safely deserialized and synthesizes an allowlist policy. Then, with the Java agent, DeseriGuard can seamlessly enforce the policy during runtime to protect various deserialization procedures. In evaluation, DeseriGuard successfully blocks all deserialization attacks on 12 real-world vulnerabilities. In addition, we compare DeseriGuard's automatically synthesized policies with 109 developer-designed policies. The results demonstrate that DeseriGuard effectively restricts 99.12% more classes. Meanwhile, we test the policy-enhanced applications with their unit tests and integration tests, which demonstrate that DeseriGuard's policies will not interfere with applications' execution and induce a negligible time overhead of 2.17%.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/automatic-policy-synthesis-and-enforcement-for-protecting-untrusted-deserialization/](https://www.ndss-symposium.org/ndss-paper/automatic-policy-synthesis-and-enforcement-for-protecting-untrusted-deserialization/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-53-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-53-paper.pdf)
## Beyond the Surface: Uncovering the Unprotected Components of Android Against Overlay Attack.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#beyond-the-surface-uncovering-the-unprotected-components-of-android-against-overlay-attack)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#beyond-the-surface-uncovering-the-unprotected-components-of-android-against-overlay-attack)
### Authors
* Hao Zhou, The Hong Kong Polytechnic University
* Shuohan Wu, The Hong Kong Polytechnic University
* Chenxiong Qian, University of Hong Kong
* Xiapu Luo, The Hong Kong Polytechnic University
* Haipeng Cai, Washington State University
* Chao Zhang, Tsinghua University
### Abstract
> Overlay is a notable user interface feature in the Android system, which allows an app to draw over other apps' windows. While overlay enhances user experience and allows concurrent app interaction, it has been extensively abused for malicious purposes, such as "tapjacking", leading to so-called overlay attacks. In order to combat this threat, Google introduced a dedicated window flag SYSTEM_FLAG_HIDE_NON_SYSTEM_OVERLAY_WINDOWS to protect critical system apps' windows against overlay attacks. Unfortunately, the adequacy of such protection in the Android system remains unstudied, with a noticeable absence of clear usage guidelines.
> 
> To bridge the gap, in this paper, we conduct the first systematic study on the unprotected windows of system apps against overlay attacks. We propose a comprehensive guideline and then design and develop a new tool named OverlayChecker to identify the missing protections in Android system apps. To verify the uncovered issues, we also design and create Proof-of-Concept apps. After applying OverlayChecker to 8 commercial Android systems on 4 recently released Android versions, we totally discovered 49 vulnerable system apps' windows. We reported our findings to the mobile vendors, including Google, Samsung, Vivo, Xiaomi, and Honor. At the time of writing, 15 of them have been confirmed. 5 CVEs have been assigned, and 3 of them are rated high severity. We also received bug bounty rewards from these mobile vendors.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/beyond-the-surface-uncovering-the-unprotected-components-of-android-against-overlay-attack/](https://www.ndss-symposium.org/ndss-paper/beyond-the-surface-uncovering-the-unprotected-components-of-android-against-overlay-attack/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-35-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-35-paper.pdf)
## BGP-iSec: Improved Security of Internet Routing Against Post-ROV Attacks.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#bgp-isec-improved-security-of-internet-routing-against-post-rov-attacks)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#bgp-isec-improved-security-of-internet-routing-against-post-rov-attacks)
### Authors
* Cameron Morris, University of Connecticut
* Amir Herzberg, University of Connecticut
* Bing Wang, University of Connecticut
* Samuel Secondo, University of Connecticut
### Abstract
> We present BGP-iSec, an enhancement of the BGPsec protocol for securing BGP, the Internet's inter-domain routing protocol. BGP-iSec ensures additional and stronger security properties, compared to BGPsec, without significant extra overhead. The main improvements are: (i) Security for partial adoption: BGP-iSec provides significant security benefits for early adopters, in contrast to BGPsec, which requires universal adoption. (ii) Defense against route leakage: BGP-iSec defends against route leakage, a common cause of misrouting that is not prevented by BGPsec. (iii) Integrity of attributes: BGP-iSec ensures the integrity of revertible attributes, thereby preventing announcement manipulation attacks not prevented by BGPsec. We show that BGP-iSec achieves these goals using extensive simulations as well as security analysis. The BGP-iSec design conforms, where possible, with the BGPsec design, modifying it only where necessary to improve security. By providing stronger security guarantees, especially for partial adoption, we hope BGP-iSec will be a step towards finally protecting inter-domain routing, which remains, for many years, a vulnerability of the Internet's infrastructure.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/bgp-isec-improved-security-of-internet-routing-against-post-rov-attacks/](https://www.ndss-symposium.org/ndss-paper/bgp-isec-improved-security-of-internet-routing-against-post-rov-attacks/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-1035-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-1035-paper.pdf)
## BliMe: Verifiably Secure Outsourced Computation with Hardware-Enforced Taint Tracking.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#blime-verifiably-secure-outsourced-computation-with-hardware-enforced-taint-tracking)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#blime-verifiably-secure-outsourced-computation-with-hardware-enforced-taint-tracking)
### Authors
* Hossam ElAtali, University of Waterloo
* Lachlan J. Gunn, Aalto University
* Hans Liljestrand, University of Waterloo
* N. Asokan, University of Waterloo
### Abstract
> Outsourced computing is widely used today. However, current approaches for protecting client data in outsourced computing fall short: use of cryptographic techniques like fully-homomorphic encryption incurs substantial costs, whereas use of hardware-assisted trusted execution environments has been shown to be vulnerable to run-time and side-channel attacks.
> 
> We present BliMe, an architecture to realize efficient and secure outsourced computation. BliMe consists of a novel and minimal set of instruction set architecture (ISA) extensions implementing a taint-tracking policy to ensure the confidentiality of client data even in the presence of server vulnerabilities. To secure outsourced computation, the BliMe extensions can be used together with an attestable, fixed-function hardware security module (HSM) and an encryption engine that provides atomic decrypt-and-taint and encrypt-and-untaint operations. Clients rely on remote attestation and key agreement with the HSM to ensure that their data can be transferred securely to and from the encryption engine and will always be protected by BliMe's taint-tracking policy while at the server.
> 
> We provide an RTL implementation BliMe-BOOM based on the BOOM RISC-V core. BliMe-BOOM requires no reduction in clock frequency relative to unmodified BOOM, and has minimal power ($

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/blime-verifiably-secure-outsourced-computation-with-hardware-enforced-taint-tracking/](https://www.ndss-symposium.org/ndss-paper/blime-verifiably-secure-outsourced-computation-with-hardware-enforced-taint-tracking/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-105-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-105-paper.pdf)
## CAGE: Complementing Arm CCA with GPU Extensions.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#cage-complementing-arm-cca-with-gpu-extensions)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#cage-complementing-arm-cca-with-gpu-extensions)
### Authors
* Chenxu Wang, Southern University of Science and Technology 
* Fengwei Zhang, Southern University of Science and Technology 
* Yunjie Deng, Southern University of Science and Technology 
* Kevin Leach, Vanderbilt University
* Jiannong Cao, The Hong Kong Polytechnic University
* Zhenyu Ning, Hunan University
* Shoumeng Yan, Ant Group
* Zhengyu He, Ant…
### Abstract
> Confidential computing is an emerging technique that provides users and third-party developers with an isolated and transparent execution environment. To support this technique, Arm introduced the Confidential Computing Architecture (CCA), which creates multiple isolated address spaces, known as realms, to ensure data confidentiality and integrity in security-sensitive tasks. Arm recently proposed the concept of confidential computing on GPU hardware, which is widely used in general-purpose, high-performance, and artificial intelligence computing scenarios. However, hardware and firmware supporting confidential GPU workloads remain unavailable. Existing studies leverage Trusted Execution Environments (TEEs) to secure GPU computing on Arm- or Intel-based platforms, but they are not suitable for CCA's realm-style architecture, such as using incompatible hardware or introducing a large trusted computing base (TCB). Therefore, there is a need to complement existing Arm CCA capabilities with GPU acceleration.
> 
> To address this challenge, we present CAGE to support confidential GPU computing for Arm CCA. By leveraging the existing security features in Arm CCA, CAGE ensures data security during confidential computing on unified-memory GPUs, the mainstream accelerators in Arm devices. To adapt the GPU workflow to CCA's realm-style architecture, CAGE proposes a novel shadow task mechanism to manage confidential GPU applications flexibly. Additionally, CAGE leverages the memory isolation mechanism in Arm CCA to protect data confidentiality and integrity from the strong adversary. Based on this, CAGE also optimizes security operations in memory isolation to mitigate performance overhead. Without hardware changes, our approach uses the generic hardware security primitives in Arm CCA to defend against a privileged adversary. We present two prototypes to verify CAGE's functionality and evaluate performance, respectively. Results show that CAGE effectively provides GPU support for Arm CCA with an average of 2.45% performance overhead.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/cage-complementing-arm-cca-with-gpu-extensions/](https://www.ndss-symposium.org/ndss-paper/cage-complementing-arm-cca-with-gpu-extensions/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-763-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-763-paper.pdf)
## CamPro: Camera-based Anti-Facial Recognition.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#campro-camera-based-anti-facial-recognition)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#campro-camera-based-anti-facial-recognition)
### Authors
* Wenjun Zhu, Zhejiang University
* Yuan Sun, Zhejiang University
* Jiani Liu, Zhejiang University
* Yushi Cheng, Zhejiang University
* Xiaoyu Ji, Zhejiang University
* Wenyuan Xu, Zhejiang University
### Abstract
> The proliferation of images captured from millions of cameras and the advancement of facial recognition (FR) technology have made the abuse of FR a severe privacy threat. Existing works typically rely on obfuscation, synthesis, or adversarial examples to modify faces in images to achieve anti-facial recognition (AFR). However, the unmodified images captured by camera modules that contain sensitive personally identifiable information (PII) could still be leaked. In this paper, we propose a novel approach, ***CamPro***, to capture inborn AFR images. ***CamPro*** enables well-packed commodity camera modules to produce images that contain little PII and yet still contain enough information to support other non-sensitive vision applications, such as person detection. Specifically, ***CamPro*** tunes the configuration setup inside the camera image signal processor (ISP), i.e., color correction matrix and gamma correction, to achieve AFR, and designs an image enhancer to keep the image quality for possible human viewers. We implemented and validated ***CamPro*** on a proof-of-concept camera, and our experiments demonstrate its effectiveness on ten state-of-the-art black-box FR models. The results show that ***CamPro*** images can significantly reduce face identification accuracy to 0.3% while having little impact on the targeted non-sensitive vision application. Furthermore, we find that ***CamPro*** is resilient to adaptive attackers who have re-trained their FR models using images generated by ***CamPro***, even with full knowledge of privacy-preserving ISP parameters.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/campro-camera-based-anti-facial-recognition/](https://www.ndss-symposium.org/ndss-paper/campro-camera-based-anti-facial-recognition/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-158-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-158-paper.pdf)
## Certificate Transparency Revisited: The Public Inspections on Third-party Monitors.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#certificate-transparency-revisited-the-public-inspections-on-third-party-monitors)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#certificate-transparency-revisited-the-public-inspections-on-third-party-monitors)
### Authors
* Aozhuo Sun, Institute of Information Engineering
### Abstract
> The certificate transparency (CT) framework has been deployed to improve the accountability of the TLS certificate ecosystem. However, the current implementation of CT does not enforce or guarantee the correct behavior of third-party monitors, which are essential components of the CT framework, and raises security and reliability concerns. For example, recent studies reported that 5 popular third-party CT monitors cannot always return the complete set of certificates inquired by users, which fundamentally impairs the protection that CT aims to offer. This work revisits the CT design and proposes an additional component of the CT framework, CT watchers. A watcher acts as an inspector of third-party CT monitors to detect any misbehavior by inspecting the certificate search services of a third-party monitor and detecting any inconsistent results returned by multiple monitors. It also semi-automatically analyzes potential causes of the inconsistency, e.g., a monitor’s misconfiguration, implementation flaws, etc. We implemented a prototype of the CT watcher and conducted a 52-day trial operation and several confirmation experiments involving 8.26M unique certificates of about 6,000 domains. From the results returned by 6 active third-party monitors in the wild, the prototype detected 14 potential design or implementation issues of these monitors, demonstrating its effectiveness in public inspections on third-party monitors and the potential to improve the overall reliability of CT.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/certificate-transparency-revisited-the-public-inspections-on-third-party-monitors/](https://www.ndss-symposium.org/ndss-paper/certificate-transparency-revisited-the-public-inspections-on-third-party-monitors/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-834-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-834-paper.pdf)
## CP-IoT: A Cross-Platform Monitoring System for Smart Home.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#cp-iot-a-cross-platform-monitoring-system-for-smart-home)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#cp-iot-a-cross-platform-monitoring-system-for-smart-home)
### Authors
* Hai Lin, Tsinghua University
* Chenglong Li, Tsinghua University
* Jiahai Yang, Tsinghua University
* Zhiliang Wang, Tsinghua University
* Linna Fan, National University of Defense Technology
* Chenxin Duan, Tsinghua University
### Abstract
> Today, smart home platforms are widely used around the world and offer users automation to define their daily routines. However, individual automation rule anomalies and cross-automation threats that exist in different platforms put the smart home in danger. Recent researches focus on detecting these threats of the specific platform and can only cover limited threat plane. To solve these problems, we design a novel system called CP-IoT, which can monitor the execution behavior of the automation and discover the anomalies, as well as hidden risks among them on heterogeneous IoT platforms. Specifically, CP-IoT constructs a centralized, dynamic graph model for portraying the behavior of automation and the state transition. By analyzing two kinds of app pages with different description granularity, CP-IoT extracts the rule execution logic and collects user policy from different platforms. To detect the inconsistent behavior of an automation rule in different platforms, we propose a self-learning method for event fingerprint extraction by clustering the traffic of different platforms collected from the side channel, and an anomaly detection method by checking the rule execution behavior with its specification reflected in the graph model. To detect the cross-rule threats, we formalize each threat type as a symbolic representation and apply the searching algorithm on the graph. We validate the performance of CP-IoT on four platforms. The evaluation shows that CP-IoT can detect anomalies with high accuracy and effectively discover various types of cross-rule threats.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/cp-iot-a-cross-platform-monitoring-system-for-smart-home/](https://www.ndss-symposium.org/ndss-paper/cp-iot-a-cross-platform-monitoring-system-for-smart-home/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-3-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-3-paper.pdf)
## Decentralized Information-Flow Control for ROS2.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#decentralized-information-flow-control-for-ros2)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#decentralized-information-flow-control-for-ros2)
### Authors
* Nishit V. Pandya, Indian Institute of Science Bangalore
* Himanshu Kumar, Indian Institute of Science Bangalore
* Gokulnath M. Pillai, Indian Institute of Science Bangalore
* Vinod Ganapathy, Indian Institute of Science Bangalore
### Abstract
> ROS2 is a popular publish/subscribe based middleware that allows developers to build and deploy a wide-variety of distributed robotics applications. Unfortunately, ROS2 offers applications poor control over how their data is consumed by downstream applications.
> 
> We present Picaros, a decentralized information-flow control (DIFC) system tailored for ROS2. The decentralized and distributed architecture of ROS2 poses new challenges to building a DIFC system that prior work has not addressed. Picaros adopts a novel approach to address these challenges by casting and solving the problem of DIFC within the framework of attribute-based encryption (ABE). Picaros's design embraces the unique nature of the ROS2 platform and carefully avoids any centralized elements. This paper presents the design and implementation of Picaros and reports on our experiments that use Picaros's ABE-based approach for DIFC with ROS2 applications.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/decentralized-information-flow-control-for-ros2/](https://www.ndss-symposium.org/ndss-paper/decentralized-information-flow-control-for-ros2/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-101-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-101-paper.pdf)
## DeepGo: Predictive Directed Greybox Fuzzing.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#deepgo-predictive-directed-greybox-fuzzing)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#deepgo-predictive-directed-greybox-fuzzing)
### Authors
* Peihong Lin, National University of Defense Technology
* Pengfei Wang, National University of Defense Technology
* Xu Zhou, National University of Defense Technology
* Wei Xie, National University of Defense Technology
* Gen Zhang, National University of Defense Technology
* Kai Lu, National University of Defense Technology
### Abstract
> Directed Greybox Fuzzing (DGF) is an effective approach designed to strengthen testing vulnerable code areas via predefined target sites. The state-of-the-art DGF techniques redefine and optimize the fitness metric to reach the target sites precisely and quickly. However, optimizations for fitness metrics are mainly based on heuristic algorithms, which usually rely on historical execution information and lack foresight on paths that have not been exercised yet. Thus, those hard-to-execute paths with complex constraints would hinder DGF from reaching the targets, making DGF less efficient.
> 
> In this paper, we propose DeepGo, a predictive directed greybox fuzzer that can combine historical and predicted information to steer DGF to reach the target site via an optimal path. We first propose the path transition model, which models DGF as a process of reaching the target site through specific path transition sequences. The new seed generated by mutation would cause the path transition, and the path corresponding to the high-reward path transition sequence indicates a high likelihood of reaching the target site through it. Then, to predict the path transitions and the corresponding rewards, we use deep neural networks to construct a Virtual Ensemble Environment (VEE), which gradually imitates the path transition model and predicts the rewards of path transitions that have not been taken yet. To determine the optimal path, we develop a Reinforcement Learning for Fuzzing (RLF) model to generate the transition sequences with the highest sequence rewards. The RLF model can combine historical and predicted path transitions to generate the optimal path transition sequences, along with the policy to guide the mutation strategy of fuzzing. Finally, to exercise the high-reward path transition sequence, we propose the concept of an action group, which comprehensively optimizes the critical steps of fuzzing to realize the optimal path to reach the target efficiently. We evaluated DeepGo on 2 benchmarks consisting of 25 programs with a total of 100 target sites. The experimental results show that DeepGo achieves 3.23×, 1.72×, 1.81×, and 4.83× speedup compared to AFLGo, BEACON, WindRanger, and ParmeSan, respectively in reaching target sites, and 2.61×, 3.32×, 2.43× and 2.53× speedup in exposing known vulnerabilities.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/deepgo-predictive-directed-greybox-fuzzing/](https://www.ndss-symposium.org/ndss-paper/deepgo-predictive-directed-greybox-fuzzing/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-514-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-514-paper.pdf)
## DeGPT: Optimizing Decompiler Output with LLM.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#degpt-optimizing-decompiler-output-with-llm)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#degpt-optimizing-decompiler-output-with-llm)
### Authors
* Peiwei Hu, Institute of Information Engineering
### Abstract
> Reverse engineering is essential in malware analysis, vulnerability discovery, etc. Decompilers assist the reverse engineers by lifting the assembly to the high-level programming language, which highly boosts binary comprehension. However, decompilers suffer from problems such as meaningless variable names, redundant variables, and lacking comments describing the purpose of the code. Previous studies have shown promising performance in refining the decompiler output by training the models with huge datasets containing various decompiler outputs. However, even datasets that take much time to construct cover limited binaries in the real world. The performance degrades severely facing the binary migration.
> 
> In this paper, we present DeGPT, an end-to-end framework aiming to optimize the decompiler output to improve its readability and simplicity and further assist the reverse engineers in understanding the binaries better. The Large Language Model (LLM) can mitigate performance degradation with its extraordinary ability endowed by large model size and training set containing rich multi-modal data. However, its potential is difficult to unlock through one-shot use. Thus, we propose the three-role mechanism, which includes referee (R_ref), advisor (R_adv), and operator (R_ope), to adapt the LLM to our optimization tasks. Specifically, R_ref provides the optimization scheme for the target decompiler output, while R_adv gives the rectification measures based on the scheme, and R_ope inspects whether the optimization changes the original function semantics and concludes the final verdict about whether to accept the optimizations. We evaluate DeGPT on the datasets containing decompiler outputs of various software, such as the practical command line tools, malware, a library for audio processing, and implementations of algorithms. The experimental results show that even on the output of the current top-level decompiler (Ghidra), DeGPT can achieve 24.4% reduction in the cognitive burden of understanding the decompiler outputs and provide comments of which 62.9% can provide practical semantics for the reverse engineers to help the understanding of binaries. Our user surveys also show that the optimizations can significantly simplify the code and add helpful semantic information (variable names and comments), facilitating a quick and accurate understanding of the binary.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/degpt-optimizing-decompiler-output-with-llm/](https://www.ndss-symposium.org/ndss-paper/degpt-optimizing-decompiler-output-with-llm/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-401-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-401-paper.pdf)
## DEMASQ: Unmasking the ChatGPT Wordsmith.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#demasq-unmasking-the-chatgpt-wordsmith)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#demasq-unmasking-the-chatgpt-wordsmith)
### Authors
* Kavita Kumari, Technical University of Darmstadt
### Abstract
> The potential misuse of ChatGPT and other Large Language Models (LLMs) has raised concerns regarding the dissemination of false information, plagiarism, academic dishonesty, and fraudulent activities. Consequently, distinguishing between AI-generated and human-generated content has emerged as an intriguing research topic. However, current text detection methods lack precision and are often restricted to specific tasks or domains, making them inadequate for identifying content generated by ChatGPT. In this paper, we propose an effective ChatGPT detector named DEMASQ, which accurately identifies ChatGPT-generated content. Our method addresses two critical factors: (i) the distinct biases in text composition observed in human and machine-generated content and (ii) the alterations made by humans to evade previous detection methods. DEMASQ is an energy-based detection model that incorporates novel aspects, such as (i) optimization inspired by the Doppler effect to capture the interdependence between input text embeddings and output labels, and (ii) the use of explainable AI techniques to generate diverse perturbations. To evaluate our detector, we create a benchmark dataset comprising a mixture of prompts from both ChatGPT and humans, encompassing domains such as medical, open Q&A, finance, wiki, and Reddit. Our evaluation demonstrates that DEMASQ achieves high accuracy in identifying content generated by ChatGPT.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/demasq-unmasking-the-chatgpt-wordsmith/](https://www.ndss-symposium.org/ndss-paper/demasq-unmasking-the-chatgpt-wordsmith/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-1190-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-1190-paper.pdf)
## Detecting Voice Cloning Attacks via Timbre Watermarking.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#detecting-voice-cloning-attacks-via-timbre-watermarking)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#detecting-voice-cloning-attacks-via-timbre-watermarking)
### Authors
* Chang Liu, University of Science and Technology of China
* Jie Zhang, Nanyang Technological University
* Tianwei Zhang, Nanyang Technological University
* Xi Yang, University of Science and Technology of China
* Weiming Zhang, University of Science and Technology of China
* NengHai Yu, University of Science and Technology of China
### Abstract
> Nowadays, it is common to release audio content to the public, for social sharing or commercial purposes. However, with the rise of voice cloning technology, attackers have the potential to easily impersonate a specific person by utilizing his publicly released audio without any permission. Therefore, it becomes significant to detect any potential misuse of the released audio content and protect its timbre from being impersonated.
> 
> To this end, we introduce a novel concept, "Timbre Watermarking", which embeds watermark information into the target individual's speech, eventually defeating the voice cloning attacks. However, there are two challenges: 1) robustness: the attacker can remove the watermark with common speech preprocessing before launching voice cloning attacks; 2) generalization: there are a variety of voice cloning approaches for the attacker to choose, making it hard to build a general defense against all of them.
> 
> To address these challenges, we design an end-to-end voice cloning-resistant detection framework. The core idea of our solution is to embed the watermark into the frequency domain, which is inherently robust against common data processing methods. A repeated embedding strategy is adopted to further enhance the robustness. To acquire generalization across different voice cloning attacks, we modulate their shared process and integrate it into our framework as a distortion layer. Experiments demonstrate that the proposed timbre watermarking can defend against different voice cloning attacks, exhibit strong resistance against various adaptive attacks (e.g., reconstruction-based removal attacks, watermark overwriting attacks), and achieve practicality in real-world services such as PaddleSpeech, Voice-Cloning-App, and so-vits-svc. In addition, ablation studies are also conducted to verify the effectiveness of our design. Some audio samples are available at https://timbrewatermarking.github.io/samples.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/detecting-voice-cloning-attacks-via-timbre-watermarking/](https://www.ndss-symposium.org/ndss-paper/detecting-voice-cloning-attacks-via-timbre-watermarking/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-200-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-200-paper.pdf)
## Don't Interrupt Me - A Large-Scale Study of On-Device Permission Prompt Quieting in Chrome.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#dont-interrupt-me-a-large-scale-study-of-on-device-permission-prompt-quieting-in-chrome)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#dont-interrupt-me-a-large-scale-study-of-on-device-permission-prompt-quieting-in-chrome)
### Authors
* Marian Harbach, Google
* Igor Bilogrevic, Google
* Enrico Bacis, Google
* Serena Chen, Google
* Ravjit Uppal, Google
* Andy Paicu, Google
* Elias Klim, Google
* Meggyn Watkins, Google
* Balazs Engedy, Google
### Abstract
> A recent large-scale experiment conducted by Chrome has demonstrated that a "quieter" web permission prompt can reduce unwanted interruptions while only marginally affecting grant rates. However, the experiment and the partial roll-out were missing two important elements: (1) an effective and context-aware activation mechanism for such a quieter prompt, and (2) an analysis of user attitudes and sentiment towards such an intervention. In this paper, we address these two limitations by means of a novel ML-based activation mechanism -- and its real-world on-device deployment in Chrome -- and a large-scale user study with 13.1k participants from 156 countries. First, the telemetry-based results, computed on more than 20 million samples from Chrome users in-the-wild, indicate that the novel on-device ML-based approach is both extremely precise (>99% post-hoc precision) and has very high coverage (96% recall for notifications permission). Second, our large-scale, in-context user study shows that quieting is often perceived as helpful and does not cause high levels of unease for most respondents.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/dont-interrupt-me-a-large-scale-study-of-on-device-permission-prompt-quieting-in-chrome/](https://www.ndss-symposium.org/ndss-paper/dont-interrupt-me-a-large-scale-study-of-on-device-permission-prompt-quieting-in-chrome/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-108-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-108-paper.pdf)
## DorPatch: Distributed and Occlusion-Robust Adversarial Patch to Evade Certifiable Defenses.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#dorpatch-distributed-and-occlusion-robust-adversarial-patch-to-evade-certifiable-defenses)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#dorpatch-distributed-and-occlusion-robust-adversarial-patch-to-evade-certifiable-defenses)
### Authors
* Chaoxiang He, Huazhong University of Science and Technology
* Xiaojing Ma, Huazhong University of Science and Technology
* Bin B. Zhu, Microsoft Research
* Yimiao Zeng, Huazhong University of Science and Technology
* Hanqing Hu, Huazhong University of Science and Technology
* Xiaofan Bai, Huazhong University of Science and Technology
* Hai Jin, Huazhong University of Science and Technology
### Abstract
> Adversarial patch attacks are among the most practical adversarial attacks. Recent efforts focus on providing a certifiable guarantee on correct predictions in the presence of white-box adversarial patch attacks. In this paper, we propose DorPatch, an effective adversarial patch attack to evade both certifiably robust defenses and empirical defenses. DorPatch employs group lasso on a patch's mask, image dropout, density regularization, and structural loss to generate a fully optimized, distributed, occlusion-robust, and inconspicuous adversarial patch that can be deployed in physical-world adversarial patch attacks. Our extensive experimental evaluation with both digital-domain and physical-world tests indicates that DorPatch can effectively evade PatchCleanser, the state-of-the-art certifiable defense, and empirical defenses against adversarial patch attacks. More critically, mispredicted results of adversarially patched examples generated by DorPatch can receive certification from PatchCleanser, producing a false trust in guaranteed predictions. DorPatch achieves state-of-the-art attacking performance and perceptual quality among all adversarial patch attacks. DorPatch poses a significant threat to real-world applications of DNN models and calls for developing effective defenses to thwart the attack.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/dorpatch-distributed-and-occlusion-robust-adversarial-patch-to-evade-certifiable-defenses/](https://www.ndss-symposium.org/ndss-paper/dorpatch-distributed-and-occlusion-robust-adversarial-patch-to-evade-certifiable-defenses/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-920-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-920-paper.pdf)
## DRAINCLoG: Detecting Rogue Accounts with Illegally-obtained NFTs using Classifiers Learned on Graphs.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#drainclog-detecting-rogue-accounts-with-illegally-obtained-nfts-using-classifiers-learned-on-graphs)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#drainclog-detecting-rogue-accounts-with-illegally-obtained-nfts-using-classifiers-learned-on-graphs)
### Authors
* Hanna Kim, KAIST
* Jian Cui, Indiana University Bloomington
* Eugene Jang, S2W Inc.
* Chanhee Lee, S2W Inc.
* Yongjae Lee, S2W Inc.
* Jin-Woo Chung, S2W Inc.
* Seungwon Shin, KAIST
### Abstract
> As Non-Fungible Tokens (NFTs) continue to grow in popularity, NFT users have become targets of phishing scammers, called NFT drainers. Over the last year, $100 million worth of NFTs were stolen by drainers, and their presence remains a serious threat to the NFT trading space. However, no work has yet comprehensively investigated the behaviors of drainers in the NFT ecosystem.
> 
> In this paper, we present the first study on the trading behavior of NFT drainers and introduce the first dedicated NFT drainer detection system. We collect 127M NFT transaction data from the Ethereum blockchain and 1,135 drainer accounts from five sources for the year 2022. We find that drainers exhibit significantly different transactional and social contexts from those of regular users. With these insights, we design DRAINCLoG, an automatic drainer detection system utilizing Graph Neural Networks. This system effectively captures the multifaceted web of interactions within the NFT space through two distinct graphs: the NFT-User graph for transaction contexts and the User graph for social contexts. Evaluations using real-world NFT transaction data underscore the robustness and precision of our model. Additionally, we analyze the security of DRAINCLoG under a wide variety of evasion attacks.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/drainclog-detecting-rogue-accounts-with-illegally-obtained-nfts-using-classifiers-learned-on-graphs/](https://www.ndss-symposium.org/ndss-paper/drainclog-detecting-rogue-accounts-with-illegally-obtained-nfts-using-classifiers-learned-on-graphs/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-888-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-888-paper.pdf)
## dRR: A Decentralized, Scalable, and Auditable Architecture for RPKI Repository.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#drr-a-decentralized-scalable-and-auditable-architecture-for-rpki-repository)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#drr-a-decentralized-scalable-and-auditable-architecture-for-rpki-repository)
### Authors
* Yingying Su, Tsinghua university
* Dan Li, Tsinghua university
* Li Chen, Zhongguancun Laboratory
* Qi Li, Tsinghua university
* Sitong Ling, Tsinghua University
### Abstract
> Although Resource Public Key Infrastructure (RPKI) is critical for securing inter-domain routing, we find that its key component, the RPKI Repository, is under studied. We conduct the first data-driven analysis of the existing RPKI Repository infrastructure, including a survey of worldwide AS administrators and a large-scale measurement of the existing RPKI Repository. Based on the findings of this study, we identify three key problems. Firstly, misbehaving RPKI authorities can easily manipulate RPKI objects, and Internet Number Resources (INRs) holders and Relying Parties (RPs) can neither prevent malicious behaviors of misbehaving authorities nor hold them accountable. Secondly, RPKI Repository is sensitive to failures: An attack or downtime of any Publication Point (PP) will prevent RPs from obtaining complete RPKI object views. Finally, we identify scalability issues with the current RPKI Repository, which are expected to worsen with the further deployment of Route Origin Authorization (ROA).
> 
> To address these problems, we propose dRR, an architecture that enhances the security, robustness, and scalability of the RPKI Repository while being compatible with standard RPKI. By introducing two new entities: Certificate Servers (CSs) and Monitors, dRR forms a decentralized federation of CSs, which enables the RPKI Repository to proactively defend against malicious behavior from authorities and to tolerate PPs' failures. dRR is also scalable for future large-scale deployment. We present the design of dRR in detail and implement a prototype of dRR on a global Internet testbed spanning 15 countries. Experimental results show that, although new security features are introduced, dRR only incurs negligible latency for certificate issuance and revocation. The throughput of certificate updates achieved by dRR is 450 times higher than the current maximum RPKI certificate update frequency.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/drr-a-decentralized-scalable-and-auditable-architecture-for-rpki-repository/](https://www.ndss-symposium.org/ndss-paper/drr-a-decentralized-scalable-and-auditable-architecture-for-rpki-repository/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-368-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-368-paper.pdf)
## DynPRE: Protocol Reverse Engineering via Dynamic Inference.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#dynpre-protocol-reverse-engineering-via-dynamic-inference)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#dynpre-protocol-reverse-engineering-via-dynamic-inference)
### Authors
* Zhengxiong Luo, Tsinghua University
* Kai Liang, Central South University
* Yanyang Zhao, Tsinghua University
* Feifan Wu, Tsinghua University
* Junze Yu, Tsinghua University
* Heyuan Shi, Central South University
* Yu Jiang, Tsinghua University
### Abstract
> Automatic protocol reverse engineering is essential for various security applications. While many existing techniques achieve this task by analyzing static network traces, they face increasing challenges due to their dependence on high-quality samples. This paper introduces DynPRE, a protocol reverse engineering tool that exploits the interactive capabilities of protocol servers to obtain more semantic information and additional trafﬁc for dynamic inference. DynPRE ﬁrst processes the initial input network traces and learns the rules for interacting with the server in different contexts based on session-speciﬁc identiﬁer detection and adaptive message rewriting. It then applies exploratory request crafting to obtain semantic information and supplementary samples and performs real-time analysis. Our evaluation on 12 widely used protocols shows that DynPRE identiﬁes ﬁelds with a perfection score of 0.50 and infers message types with a V-measure of 0.94, signiﬁcantly outperforming state-of-the-art methods like Netzob, Netplier, FieldHunter, BinaryInferno, and Nemesys, which achieve average perfection and V-measure scores of (0.15, 0.72), (0.16, 0.73), (0.15, 0.83), (0.15, -), and (0.31, -), respectively. Furthermore, case studies on unknown protocols highlight the effectiveness of DynPRE in real-world applications.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/dynpre-protocol-reverse-engineering-via-dynamic-inference/](https://www.ndss-symposium.org/ndss-paper/dynpre-protocol-reverse-engineering-via-dynamic-inference/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-83-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-83-paper.pdf)
## Eavesdropping on Controller Acoustic Emanation for Keystroke Inference Attack in Virtual Reality.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#eavesdropping-on-controller-acoustic-emanation-for-keystroke-inference-attack-in-virtual-reality)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#eavesdropping-on-controller-acoustic-emanation-for-keystroke-inference-attack-in-virtual-reality)
### Authors
* Shiqing Luo, George Mason University
* Anh Nguyen, George Mason University
* Hafsa Farooq, Georgia State University
* Kun Sun, George Mason University
* Zhisheng Yan, George Mason University
### Abstract
> Understanding the vulnerability of virtual reality (VR) is crucial for protecting sensitive data and building user trust in VR ecosystems. Previous attacks have demonstrated the feasibility of inferring VR keystrokes inside head-mounted displays (HMDs) by recording side-channel signals generated during user-HMD interactions. However, these attacks are heavily constrained by the physical layout or victim pose in the attack scenario since the recording device must be strictly positioned and oriented in a particular way with respect to the victim. In this paper, we unveil a placement-flexible keystroke inference attack in VR by eavesdropping the clicking sounds of the moving hand controller during keystrokes. The malicious recording smartphone can be placed anywhere surrounding the victim, making the attack more flexible and practical to deploy in VR environments. As the first acoustic attack in VR, our system, Heimdall, overcomes unique challenges unaddressed by previous acoustic attacks on physical keyboards and touchscreens. These challenges include differentiating sounds in a 3D space, adaptive mapping between keystroke sound and key in varying recording placement, and handling occasional hand rotations. Experiments with 30 participants show that Heimdall achieves key inference accuracy of 96.51% and top-5 accuracy of 85.14%-91.22% for inferring passwords with 4-8 characters. Heimdall is also robust under various practical impacts such as smartphone-user placement, attack environments, hardware models, and victim conditions.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/eavesdropping-on-controller-acoustic-emanation-for-keystroke-inference-attack-in-virtual-reality/](https://www.ndss-symposium.org/ndss-paper/eavesdropping-on-controller-acoustic-emanation-for-keystroke-inference-attack-in-virtual-reality/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-100-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-100-paper.pdf)
## Efficient and Timely Revocation of V2X Credentials.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#efficient-and-timely-revocation-of-v2x-credentials)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#efficient-and-timely-revocation-of-v2x-credentials)
### Authors
* Gianluca Scopelliti, Ericsson & KU Leuven
* Christoph Baumann, Ericsson
* Fritz Alder, KU Leuven
* Eddy Truyen, KU Leuven
* Jan Tobias Mühlberg, Université libre de Bruxelles & KU Leuven
### Abstract
> In Intelligent Transport Systems, secure communication between vehicles, infrastructure, and other road users is critical to maintain road safety. This includes the revocation of cryptographic credentials of misbehaving or malicious vehicles in a timely manner. However, current standards are vague about how revocation should be handled, and recent surveys suggest severe limitations in the scalability and effectiveness of existing revocation schemes. In this paper, we present a formally verified mechanism for self-revocation of Vehicle-to-Everything (V2X) pseudonymous credentials, which relies on a trusted processing element in vehicles but does not require a trusted time source. Our scheme is compatible with ongoing standardization efforts and, leveraging the Tamarin prover, is the first to guarantee the actual revocation of credentials with a predictable upper bound on revocation time and in the presence of realistic attackers. We test our revocation mechanism in a virtual 5G-Edge deployment scenario where a large number of vehicles communicate with each other, simulating real-world conditions such as network malfunctions and delays. Results show that our scheme upholds formal guarantees in practice, while exhibiting low network overhead and good scalability.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/efficient-and-timely-revocation-of-v2x-credentials/](https://www.ndss-symposium.org/ndss-paper/efficient-and-timely-revocation-of-v2x-credentials/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-17-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-17-paper.pdf)
## Efficient Use-After-Free Prevention with Opportunistic Page-Level Sweeping.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#efficient-use-after-free-prevention-with-opportunistic-page-level-sweeping)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#efficient-use-after-free-prevention-with-opportunistic-page-level-sweeping)
### Authors
* Chanyoung Park, UNIST
* Hyungon Moon, UNIST
### Abstract
> Defeating use-after-free exploits presents a challenging problem, one for which a universal solution remains elusive. Recent efforts towards efficient prevention of use-after-free exploits have found that delaying the reuse of freed memory can both be effective and efficient in many cases. Previous studies have proposed two primary approaches: one where reuse is postponed until the allocator can confidently ascertain the absence of any dangling pointers to the freed memory, and another that refrains from reusing a freed heap chunk until the program's termination. We make an intriguing observation from our in-depth analysis of these two approaches and their reported performance impacts. When compared to the design that delays the reuse until the program terminates the strategy that delays the reuse just until no dangling pointer references the freed chunk suffers from a significant performance overhead for some workloads. The change in the reuse of each heap chunk affects the distribution of allocated chunks in the heap, and the performance of some benchmarks. This study proposes HushVac, an allocator that performs delayed reuse in such a way that the distribution of heap chunks becomes more friendly to such workloads. An evaluation of HushVac showed that the average performance overhead of HushVac (4.7%) was lower than that of the state-of-the-art (11.4%) when running the SPEC CPU 2006 benchmark suite. Specifically, the overhead of HushVac on the distribution-sensitive benchmark was about 35.2% while the prior work has an overhead of 110%.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/efficient-use-after-free-prevention-with-opportunistic-page-level-sweeping/](https://www.ndss-symposium.org/ndss-paper/efficient-use-after-free-prevention-with-opportunistic-page-level-sweeping/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-804-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-804-paper.pdf)
## EM Eye: Characterizing Electromagnetic Side-channel Eavesdropping on Embedded Cameras.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#em-eye-characterizing-electromagnetic-side-channel-eavesdropping-on-embedded-cameras)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#em-eye-characterizing-electromagnetic-side-channel-eavesdropping-on-embedded-cameras)
### Authors
* Yan Long, University of Michigan
* Qinhong Jiang, Zhejiang University
* Chen Yan, Zhejiang University
* Tobias Alam, University of Michigan
* Xiaoyu Ji, Zhejiang University
* Wenyuan Xu, Zhejiang University
* Kevin Fu, Northeastern University
### Abstract
> IoT devices and other embedded systems are increasingly equipped with cameras that can sense critical information in private spaces. The data security of these cameras, however, has hardly been scrutinized from the hardware design perspective. Our paper presents the first attempt to analyze the attack surface of physical-channel eavesdropping on embedded cameras. We characterize EM Eye--a vulnerability in the digital image data transmission interface that allows adversaries to reconstruct high-quality image streams from the cameras' unintentional electromagnetic emissions, even from over 2 meters away in many cases. Our evaluations of 4 popular IoT camera development platforms and 12 commercial off-the-shelf devices with cameras show that EM Eye poses threats to a wide range of devices, from smartphones to dash cams and home security cameras. By exploiting this vulnerability, adversaries may be able to visually spy on private activities in an enclosed room from the other side of a wall. We provide root cause analysis and modeling that enable system defenders to identify and simulate mitigation against this vulnerability, such as improving embedded cameras' data transmission protocols with minimum costs. We further discuss EM Eye's relationship with known computer display eavesdropping attacks to reveal the gaps that need to be addressed to protect the data confidentiality of sensing systems.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/em-eye-characterizing-electromagnetic-side-channel-eavesdropping-on-embedded-cameras/](https://www.ndss-symposium.org/ndss-paper/em-eye-characterizing-electromagnetic-side-channel-eavesdropping-on-embedded-cameras/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-552-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-552-paper.pdf)
## EnclaveFuzz: Finding Vulnerabilities in SGX Applications.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#enclavefuzz-finding-vulnerabilities-in-sgx-applications)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#enclavefuzz-finding-vulnerabilities-in-sgx-applications)
### Authors
* Liheng Chen, Institute of Information Engineering
### Abstract
> Intel's Software Guard Extensions (SGX) offers an isolated execution environment, known as an enclave, where everything outside the enclave is considered potentially malicious, including non-enclave memory region, peripherals, and the operating system. Despite its robust attack model, the code running within enclaves is still prone to common memory corruption vulnerabilities. Moreover, such an attack model may introduce new threats or amplify existing ones. For instance, any direct memory access to untrusted memory from within an enclave can lead to Time-of-Check-Time-of-Use (TOCTOU) bugs since attackers are capable of controlling the whole untrusted memory. Moreover, null-pointer dereference may have a more severe security impact since the zero page controlled by the operating system is also considered malicious. Current fuzzing solutions, such as SGXFuzz and FuzzSGX, have limitations detecting such SGX-specific vulnerabilities.
> 
> In this paper, we propose EnclaveFuzz, a multi-dimension structure-aware fuzzing framework that analyzes enclave sources to extract input structures and correlations, then generates fuzz harnesses that can produce valid inputs to pass sanity checks. To conduct multi-dimensional fuzzing, EnclaveFuzz creates data for all three input dimensions of an enclave, including both parameters and return values that enter an enclave, as well as direct untrusted memory access from within an enclave. To detect more types of vulnerabilities, we design a new sanitizer to detect both SGX-specific vulnerabilities and typical memory corruption vulnerabilities. Lastly, we provide a custom SDK to accelerate the fuzzing process and execute the enclave without the need for special hardware. To verify the effectiveness of our solution, we applied our work to test 20 real-world open-source enclaves and found 162 bugs in 14 of them.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/enclavefuzz-finding-vulnerabilities-in-sgx-applications/](https://www.ndss-symposium.org/ndss-paper/enclavefuzz-finding-vulnerabilities-in-sgx-applications/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-819-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-819-paper.pdf)
## Experimental Analyses of the Physical Surveillance Risks in Client-Side Content Scanning.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#experimental-analyses-of-the-physical-surveillance-risks-in-client-side-content-scanning)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#experimental-analyses-of-the-physical-surveillance-risks-in-client-side-content-scanning)
### Authors
* Ashish Hooda, University of Wisconsin-Madison
* Andrey Labunets, UC San Diego
* Tadayoshi Kohno, University of Washington
* Earlence Fernandes, UC San Diego
### Abstract
> Content scanning systems employ perceptual hashing algorithms to scan user content for illegal material, such as child pornography or terrorist recruitment flyers. Perceptual hashing algorithms help determine whether two images are visually similar while preserving the privacy of the input images. Several efforts from industry and academia propose scanning on client devices such as smartphones due to the impending rollout of end-to-end encryption that will make server-side scanning difficult. These proposals have met with strong criticism because of the potential for the technology to be misused for censorship. However, the risks of this technology in the context of surveillance are not well understood. Our work informs this conversation by experimentally characterizing the potential for one type of misuse --- attackers manipulating the content scanning system to perform physical surveillance on target locations. Our contributions are threefold: (1) we offer a definition of physical surveillance in the context of client-side image scanning systems; (2) we experimentally characterize this risk and create a surveillance algorithm that achieves physical surveillance rates of more than 30% by poisoning 0.2% of the perceptual hash database; (3) we experimentally study the trade-off between the robustness of client-side image scanning systems and surveillance, showing that more robust detection of illegal material leads to an increased potential for physical surveillance in most settings.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/experimental-analyses-of-the-physical-surveillance-risks-in-client-side-content-scanning/](https://www.ndss-symposium.org/ndss-paper/experimental-analyses-of-the-physical-surveillance-risks-in-client-side-content-scanning/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-1401-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-1401-paper.pdf)
## Faster and Better: Detecting Vulnerabilities in Linux-based IoT Firmware with Optimized Reaching Definition Analysis.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#faster-and-better-detecting-vulnerabilities-in-linux-based-iot-firmware-with-optimized-reaching-definition-analysis)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#faster-and-better-detecting-vulnerabilities-in-linux-based-iot-firmware-with-optimized-reaching-definition-analysis)
### Authors
* Zicong Gao, State Key Laboratory of Mathematical Engineering and Advanced Computing
* Chao Zhang, Tsinghua University
* Hangtian Liu, State Key Laboratory of Mathematical Engineering and Advanced Computing
* Wenhou Sun, Tsinghua University
* Zhizhuo Tang, State Key Laboratory of Mathematical Engineering and Advanced Computing
* Liehui Jiang, State Key Laboratory of Mathematical Engineering and Advanced Computing
* Jianjun Chen, Tsinghua…
### Abstract
> IoT devices are often found vulnerable, i.e., untrusted inputs may trigger potential vulnerabilities and flow to sensitive operations in the firmware, which could cause severe damage. As such vulnerabilities are in general taint-style, a promising solution to find them is static taint analysis. However, existing solutions have limited efficiency and effectiveness. In this paper, we propose a new efficient and effective taint analysis solution, namely HermeScan, to discover such vulnerabilities, which utilizes reaching definition analysis (RDA) to conduct taint analysis and gets much fewer false negatives, false positives, and time costs. We have implemented a prototype of HermeScan and conducted a thorough evaluation on two datasets, i.e., one 0-day dataset with 30 latest firmware and one N-day dataset with 98 older firmware, and compared with two state-of-the art (SOTA) solutions, i.e., KARONTE and SaTC. In terms of effectiveness, HermeScan, SaTC, and KARONTE find 163, 32, and 0 vulnerabilities in the 0-day dataset respectively. In terms of accuracy, the true positive rates of HermeScan, SaTC, and KARONTE are 81%, 42%, and 0% in the 0-day dataset. In terms of efficiency, HermeScan is 7.5X and 3.8X faster than SaTC and KARONTE on average in finding 0-day vulnerabilities.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/faster-and-better-detecting-vulnerabilities-in-linux-based-iot-firmware-with-optimized-reaching-definition-analysis/](https://www.ndss-symposium.org/ndss-paper/faster-and-better-detecting-vulnerabilities-in-linux-based-iot-firmware-with-optimized-reaching-definition-analysis/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-346-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-346-paper.pdf)
## Faults in Our Bus: Novel Bus Fault Attack to Break ARM TrustZone.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#faults-in-our-bus-novel-bus-fault-attack-to-break-arm-trustzone)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#faults-in-our-bus-novel-bus-fault-attack-to-break-arm-trustzone)
### Authors
* Nimish Mishra, Department of Computer Science and Engineering
### Abstract
> The ever-increasing growth of Internet-of-Things (IoT) has led to wide-scale deployment of high-frequency, highly complex Systems-on-a-Chip (SoCs), which are capable of running a full-fledged operating system (OS). The presence of OS and other software countermeasures make SoCs resilient against the traditional fault attacks that are relevant on FPGAs and microprocessors. In this work, we present the first practical implications of targeting an orthogonal aspect of SoC's architecture: the system bus. We inject electromagnetic pulses onto the system bus during the execution of instructions involving processor-memory interaction. We show how address bus faults compromise software implementations of masked implementations of ciphers, illustrated using implementations of state-of-the-art post-quantum cryptography (PQC) schemes, leaking entire secret keys with a single fault. We also demonstrate that data bus faults can be controlled and exploited to launch Differential Fault Analysis (DFA) attacks on table-based implementation of the Advanced Encryption Standard (AES). Furthermore, we demonstrate that the impact of such bus faults can be far-reaching and mislead the security guarantees of the popular and widely used ARM TrustZone. We use data-bus faults (along with loopholes in the GlobalPlatform API specification) to mislead the signature verification step to load a malicious Trusted Application (TA) inside the TrustZone. We follow this up with address bus faults to steal symmetric encryption keys of other benign TAs in the system, leading to complete breakdown of security on TrustZone. We note that since the attack relies upon loopholes in the GlobalPlatform API specification, it is portable to any TEE following this specification. To emphasize upon this portability of the attack, we demonstrate successful installation of malicious TAs on two TrustZone implementations (OP-TEE and MyTEE) on two different platforms (Raspberry Pi 3 and Raspberry Pi 4). Finally, we propose countermeasures that can be integrated into the SoC environment to defend against these attack vectors.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/faults-in-our-bus-novel-bus-fault-attack-to-break-arm-trustzone/](https://www.ndss-symposium.org/ndss-paper/faults-in-our-bus-novel-bus-fault-attack-to-break-arm-trustzone/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-499-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-499-paper.pdf)
## Flow Correlation Attacks on Tor Onion Service Sessions with Sliding Subset Sum.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#flow-correlation-attacks-on-tor-onion-service-sessions-with-sliding-subset-sum)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#flow-correlation-attacks-on-tor-onion-service-sessions-with-sliding-subset-sum)
### Authors
* Daniela Lopes, INESC-ID / IST
### Abstract
> Tor is one of the most popular anonymity networks in use today. Its ability to defend against flow correlation attacks is essential for providing strong anonymity guarantees. However, the feasibility of flow correlation attacks against Tor onion services (formerly known as "hidden services") has remained an open challenge. In this paper, we present an effective flow correlation attack that can deanonymize onion service sessions in the Tor network. Our attack is based on a novel distributed technique named Sliding Subset Sum (SUMo), which can be deployed by a group of colluding ISPs worldwide in a federated fashion. These ISPs collect Tor traffic at multiple vantage points in the network, and analyze it through a pipelined architecture based on machine learning classifiers and a novel similarity function based on the classic subset sum decision problem. These classifiers enable SUMo to deanonymize onion service sessions effectively and efficiently. We also analyze possible countermeasures that the Tor community can adopt to hinder the efficacy of these attacks.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/flow-correlation-attacks-on-tor-onion-service-sessions-with-sliding-subset-sum/](https://www.ndss-symposium.org/ndss-paper/flow-correlation-attacks-on-tor-onion-service-sessions-with-sliding-subset-sum/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-337-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-337-paper.pdf)
## FP-Fed: Privacy-Preserving Federated Detection of Browser Fingerprinting.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#fp-fed-privacy-preserving-federated-detection-of-browser-fingerprinting)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#fp-fed-privacy-preserving-federated-detection-of-browser-fingerprinting)
### Authors
* Meenatchi Sundaram Muthu Selva Annamalai, University College London
* Igor Bilogrevic, Google
* Emiliano De Cristofaro, University of California
### Abstract
> Browser fingerprinting often provides an attractive alternative to third-party cookies for tracking users across the web. In fact, the increasing restrictions on third-party cookies placed by common web browsers and recent regulations like the GDPR may accelerate the transition. To counter browser fingerprinting, previous work proposed a number of techniques to detect its prevalence and severity. However, most – if not all – of those techniques rely on 1) centralized web crawls and/or 2) computationally-intensive operations to extract and process signals (e.g., information-flow and static analysis).
> 
> To address these limitations, we present FP-Fed, the first distributed system for browser fingerprinting detection. Using FP-Fed, users collaboratively train on-device models based on their real browsing patterns, without sharing their training data with a central entity, by relying on Differentially Private Federated Learning (DP-FL). To demonstrate its feasibility and effectiveness, we evaluate FP-Fed’s performance on a set of 20k popular websites with different privacy levels, numbers of participants, and features extracted from the scripts. Our experiments show that FP-Fed achieves reasonably high detection performance and can perform both training and inference efficiently, on-device, by only relying on runtime signals extracted from the execution trace, without requiring any resource-intensive operation.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/fp-fed-privacy-preserving-federated-detection-of-browser-fingerprinting/](https://www.ndss-symposium.org/ndss-paper/fp-fed-privacy-preserving-federated-detection-of-browser-fingerprinting/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-360-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-360-paper.pdf)
## FreqFed: A Frequency Analysis-Based Approach for Mitigating Poisoning Attacks in Federated Learning.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#freqfed-a-frequency-analysis-based-approach-for-mitigating-poisoning-attacks-in-federated-learning)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#freqfed-a-frequency-analysis-based-approach-for-mitigating-poisoning-attacks-in-federated-learning)
### Authors
* Hossein Fereidooni, Technical University of Darmstadt
* Alessandro Pegoraro, Technical University of Darmstadt
* Phillip Rieger, Technical University of Darmstadt
* Alexandra Dmitrienko, University of Wuerzburg
* Ahmad-Reza Sadeghi, Technical University of Darmstadt
### Abstract
> Federated learning (FL) is a collaborative learning paradigm allowing multiple clients to jointly train a model without sharing their training data. However, FL is susceptible to poisoning attacks, in which the adversary injects manipulated model updates into the federated model aggregation process to corrupt or destroy predictions (untargeted poisoning) or implant hidden functionalities (targeted poisoning or backdoors). Existing defenses against poisoning attacks in FL have several limitations, such as relying on specific assumptions about attack types and strategies or data distributions or not sufficiently robust against advanced injection techniques and strategies and simultaneously maintaining the utility of the aggregated model.
> 
> To address the deficiencies of existing defenses, we take a generic and completely different approach to detect poisoning (targeted and untargeted) attacks. We present FreqFed, a novel aggregation mechanism that transforms the model updates (i.e., weights) into the frequency domain, where we can identify the core frequency components that inherit sufficient information about weights. This allows us to effectively filter out malicious updates during local training on the clients, regardless of attack types, strategies, and clients' data distributions. We extensively evaluate the efficiency and effectiveness of FreqFed in different application domains, including image classification, word prediction, IoT intrusion detection, and speech recognition. We demonstrate that FreqFed can mitigate poisoning attacks effectively with a negligible impact on the utility of the aggregated model.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/freqfed-a-frequency-analysis-based-approach-for-mitigating-poisoning-attacks-in-federated-learning/](https://www.ndss-symposium.org/ndss-paper/freqfed-a-frequency-analysis-based-approach-for-mitigating-poisoning-attacks-in-federated-learning/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-620-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-620-paper.pdf)
## From Hardware Fingerprint to Access Token: Enhancing the Authentication on IoT Devices.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#from-hardware-fingerprint-to-access-token-enhancing-the-authentication-on-iot-devices)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#from-hardware-fingerprint-to-access-token-enhancing-the-authentication-on-iot-devices)
### Authors
* Yue Xiao, Wuhan University
* Yi He, Tsinghua University
* Xiaoli Zhang, Zhejiang University of Technology
* Qian Wang, Wuhan University
* Renjie Xie, Tsinghua University
* Kun Sun, George Mason University
* Ke Xu, Tsinghua University
* Qi Li, Tsinghua University
### Abstract
> The proliferation of consumer IoT products in our daily lives has raised the need for secure device authentication and access control. Unfortunately, these resource-constrained devices typically use token-based authentication, which is vulnerable to token compromise attacks that allow attackers to impersonate the devices and perform malicious operations by stealing the access token. Using hardware fingerprints to secure their authentication is a promising way to mitigate these threats. However, once attackers have stolen some hardware fingerprints (e.g., via MitM attacks), they can bypass the hardware authentication by training a machine learning model to mimic fingerprints or reusing these fingerprints to craft forge requests.
> 
> In this paper, we present MCU-Token, a secure hardware fingerprinting framework for MCU-based IoT devices even if the cryptographic mechanisms (e.g., private keys) are compromised. MCU-Token can be easily integrated with various IoT devices by simply adding a short hardware fingerprint-based token to the existing payload. To prevent the reuse of this token, we propose a message mapping approach that binds the token to a specific request via generating the hardware fingerprints based on the request payload. To defeat the machine learning attacks, we mix the valid fingerprints with poisoning data so that attackers cannot train a usable model with the leaked tokens. MCU-Token can defend against armored adversary who may replay, craft, and offload the requests via MitM or use both hardware (e.g., use identical devices) and software (e.g., machine learning attacks) strategies to mimic the fingerprints. The system evaluation shows that MCU-Token can achieve high accuracy (over 97%) with a low overhead across various IoT devices and application scenarios.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/from-hardware-fingerprint-to-access-token-enhancing-the-authentication-on-iot-devices/](https://www.ndss-symposium.org/ndss-paper/from-hardware-fingerprint-to-access-token-enhancing-the-authentication-on-iot-devices/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-1231-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-1231-paper.pdf)
## From Interaction to Independence: zkSNARKs for Transparent and Non-Interactive Remote Attestation.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#from-interaction-to-independence-zksnarks-for-transparent-and-non-interactive-remote-attestation)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#from-interaction-to-independence-zksnarks-for-transparent-and-non-interactive-remote-attestation)
### Authors
* Shahriar Ebrahimi, IDEAS-NCBR
* Parisa Hassanizadeh, IDEAS-NCBR
### Abstract
> Remote attestation (RA) protocols have been widely used to evaluate the integrity of software on remote devices. Currently, the state-of-the-art RA protocols lack a crucial feature: transparency. This means that the details of the final attestation verification are not openly accessible or verifiable by the public. Furthermore, the interactivity of these protocols often limits attestation to trusted parties who possess privileged access to confidential device data, such as pre-shared keys and initial measurements. These constraints impede the widespread adoption of these protocols in various applications.
> 
> In this paper, we introduce zRA, a non-interactive, transparent, and publicly provable RA protocol based on zkSNARKs. zRA enables verification of device attestations without the need for pre-shared keys or access to confidential data, ensuring a trustless and open attestation process. This eliminates the reliance on online services or secure storage on the verifier side. Moreover, zRA does not impose any additional security assumptions beyond the fundamental cryptographic schemes and the essential trust anchor components on the prover side (i.e., ROM and MPU). The zero-knowledge attestation proofs generated by devices have constant size regardless of the network complexity and number of attestations. Moreover, these proofs do not reveal sensitive information regarding internal states of the device, allowing verification by anyone in a public and auditable manner. We conduct an extensive security analysis and demonstrate scalability of zRA compared to prior work. Our analysis suggests that zRA excels especially in peer-to-peer and Pub/Sub network structures. To validate the practicality, we implement an open-source prototype of zRA using the Circom language. We show that zRA can be securely deployed on public permissionless blockchains, serving as an archival platform for attestation data to achieve resilience against DoS attacks.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/from-interaction-to-independence-zksnarks-for-transparent-and-non-interactive-remote-attestation/](https://www.ndss-symposium.org/ndss-paper/from-interaction-to-independence-zksnarks-for-transparent-and-non-interactive-remote-attestation/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-815-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-815-paper.pdf)
## Gradient Shaping: Enhancing Backdoor Attack Against Reverse Engineering.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#gradient-shaping-enhancing-backdoor-attack-against-reverse-engineering)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#gradient-shaping-enhancing-backdoor-attack-against-reverse-engineering)
### Authors
* Rui Zhu, Indiana University Bloominton
* Di Tang, Indiana University Bloomington
* Siyuan Tang, Indiana University Bloomington
* Zihao Wang, Indiana University Bloomington
* Guanhong Tao, Purdue University
* Shiqing Ma, University of Massachusetts Amherst
* XiaoFeng Wang, Indiana University Bloomington
* Haixu Tang, Indiana University
### Abstract
> Most existing methods to detect backdoored machine learning (ML) models take one of the two approaches: trigger inversion (aka. reverse engineer) and weight analysis (aka. model diagnosis). In particular, the gradient-based trigger inversion is considered to be among the most effective backdoor detection techniques, as evidenced by the TrojAI competition, Trojan Detection Challenge and backdoorBench. However, little has been done to understand why this technique works so well and, more importantly, whether it raises the bar to the backdoor attack. In this paper, we report the first attempt to answer this question by analyzing the change rate of the backdoored model's output around its trigger-carrying inputs. Our study shows that existing attacks tend to inject the backdoor characterized by a low change rate around trigger-carrying inputs, which are easy to capture by gradient-based trigger inversion. In the meantime, we found that the low change rate is not necessary for a backdoor attack to succeed: we design a new attack enhancement method called Gradient Shaping (GRASP), which follows the opposite direction of adversarial training to reduce the change rate of a backdoored model with regard to the trigger, without undermining its backdoor effect. Also, we provide a theoretic analysis to explain the effectiveness of this new technique and the fundamental weakness of gradient-based trigger inversion. Finally, we perform both theoretical and experimental analysis, showing that the GRASP enhancement does not reduce the effectiveness of the stealthy attacks designed to evade the backdoor detection methods based on weight analysis, as well as other backdoor mitigation methods without using detection.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/gradient-shaping-enhancing-backdoor-attack-against-reverse-engineering/](https://www.ndss-symposium.org/ndss-paper/gradient-shaping-enhancing-backdoor-attack-against-reverse-engineering/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-450-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-450-paper.pdf)
## GraphGuard: Detecting and Counteracting Training Data Misuse in Graph Neural Networks.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#graphguard-detecting-and-counteracting-training-data-misuse-in-graph-neural-networks)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#graphguard-detecting-and-counteracting-training-data-misuse-in-graph-neural-networks)
### Authors
* Bang Wu, CSIRO's Data61/Monash University
* He Zhang, Monash University
* Xiangwen Yang, Monash University
* Shuo Wang, CSIRO's Data61/Shanghai Jiao Tong University
* Minhui Xue, CSIRO's Data61
* Shirui Pan, Griffith University
* Xingliang Yuan, Monash University
### Abstract
> The emergence of Graph Neural Networks (GNNs) in graph data analysis and their deployment on Machine Learning as a Service platforms have raised critical concerns about data misuse during model training. This situation is further exacerbated due to the lack of transparency in local training processes, potentially leading to the unauthorized accumulation of large volumes of graph data, thereby infringing on the intellectual property rights of data owners. Existing methodologies often address either data misuse detection or mitigation, and are primarily designed for local GNN models rather than cloud-based MLaaS platforms. These limitations call for an effective and comprehensive solution that detects and mitigates data misuse without requiring exact training data while respecting the proprietary nature of such data. This paper introduces a pioneering approach called GraphGuard, to tackle these challenges. We propose a training-data-free method that not only detects graph data misuse but also mitigates its impact via targeted unlearning, all without relying on the original training data. Our innovative misuse detection technique employs membership inference with radioactive data, enhancing the distinguishability between member and non-member data distributions. For mitigation, we utilize synthetic graphs that emulate the characteristics previously learned by the target model, enabling effective unlearning even in the absence of exact graph data. We conduct comprehensive experiments utilizing four real-world graph datasets to demonstrate the efficacy of GraphGuard in both detection and unlearning. We show that GraphGuard attains a near-perfect detection rate of approximately 100% across these datasets with various GNN models. In addition, it performs unlearning by eliminating the impact of the unlearned graph with a marginal decrease in accuracy (less than 5%).

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/graphguard-detecting-and-counteracting-training-data-misuse-in-graph-neural-networks/](https://www.ndss-symposium.org/ndss-paper/graphguard-detecting-and-counteracting-training-data-misuse-in-graph-neural-networks/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-441-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-441-paper.pdf)
## Group-based Robustness: A General Framework for Customized Robustness in the Real World.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#group-based-robustness-a-general-framework-for-customized-robustness-in-the-real-world)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#group-based-robustness-a-general-framework-for-customized-robustness-in-the-real-world)
### Authors
* Weiran Lin, Carnegie Mellon University
* Keane Lucas, Carnegie Mellon University
* Neo Eyal, Tel Aviv University
* Lujo Bauer, Carnegie Mellon University
* Michael K. Reiter, Duke University
* Mahmood Sharif, Tel Aviv University
### Abstract
> Machine-learning models are known to be vulnerable to evasion attacks that perturb model inputs to induce misclassifications. In this work, we identify real-world scenarios where the true threat cannot be assessed accurately by existing attacks. Specifically, we find that conventional metrics measuring targeted and untargeted robustness do not appropriately reflect a model's ability to withstand attacks from one set of source classes to another text set of target classes. To address the shortcomings of existing methods, we formally define a new metric, termed group-based robustness, that complements existing metrics and is better-suited for evaluating model performance in certain attack scenarios. We show empirically that group-based robustness allows us to distinguish between models' vulnerability against specific threat models in situations where traditional robustness metrics do not apply. Moreover, to measure group-based robustness efficiently and accurately, we 1) propose two loss functions and 2) identify three new attack strategies. We show empirically that with comparable success rates, finding evasive samples using our new loss functions saves computation by a factor as large as the number of targeted classes, and finding evasive samples using our new attack strategies saves time by up to 99% compared to brute-force search methods. Finally, we propose a defense method that increases group-based robustness by up to 3.52 times.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/group-based-robustness-a-general-framework-for-customized-robustness-in-the-real-world/](https://www.ndss-symposium.org/ndss-paper/group-based-robustness-a-general-framework-for-customized-robustness-in-the-real-world/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-84-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-84-paper.pdf)
## IdleLeak: Exploiting Idle State Side Effects for Information Leakage.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#idleleak-exploiting-idle-state-side-effects-for-information-leakage)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#idleleak-exploiting-idle-state-side-effects-for-information-leakage)
### Authors
* Fabian Rauscher, Graz University of Technology
* Andreas Kogler, Graz University of Technology
* Jonas Juffinger, Graz University of Technology
* Daniel Gruss, Graz University of Technology
### Abstract
> Modern processors are equipped with numerous features to regulate energy consumption according to the workload. For this purpose, software brings processor cores into idle states via dedicated instructions such as hlt. Recently, Intel introduced the C0.1 and C0.2 idle states. While idle states previously could only be reached via privileged operations, these new idle states can also be reached by an unprivileged attacker. However, the attack surface these idle states open is still unclear.
> 
> In this paper, we present IdleLeak, a novel side-channel attack exploiting the new C0.1 and C0.2 idle states in two distinct ways. Specifically, we exploit the processor idle state C0.2 to monitor system activity and for novel means of data exfiltration, and the idle state C0.1 to monitor system activity on logical sibling cores. IdleLeak still works regardless of where the victim workload is scheduled, i.e., cross-core, due to the low-level x86 design. We demonstrate that IdleLeak leaks significant information in a native keystroke-timing attack, achieving an F1 score of 90.5% and a standard error on the timing prediction of only 12 μs. We also demonstrate website- and video-fingerprinting attacks using IdleLeak traces, pre-processed with short-time Fourier transforms, and classified with convolutional neural networks. These attacks are highly practical with F1 scores of 85.2% (open-world website fingerprinting) and 81.5% (open-world video fingerprinting). We evaluate the throughput of IdleLeak side channels in both directions in covert channel scenarios, i.e., using interrupts and performance-increasing effects. With the performance-increasing effect, IdleLeak achieves a true capacity of 7.1 Mbit/s in a native and 46.3 kbit/s in a cross-VM scenario. With interrupts, IdleLeak achieves 656.37 kbit/s in a native scenario. We conclude that mitigations against IdleLeak are necessary in both personal and cloud environments when running untrusted code.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/idleleak-exploiting-idle-state-side-effects-for-information-leakage/](https://www.ndss-symposium.org/ndss-paper/idleleak-exploiting-idle-state-side-effects-for-information-leakage/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-78-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-78-paper.pdf)
## Improving the Robustness of Transformer-based Large Language Models with Dynamic Attention.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#improving-the-robustness-of-transformer-based-large-language-models-with-dynamic-attention)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#improving-the-robustness-of-transformer-based-large-language-models-with-dynamic-attention)
### Authors
* Lujia Shen, Zhejiang University
* Yuwen Pu, Zhejiang University
* Shouling Ji, Zhejiang University
* Changjiang Li, Penn State
* Xuhong Zhang, Zhejiang University
* Chunpeng Ge, Shandong University
* Ting Wang, Penn State
### Abstract
> Transformer-based models, such as BERT and GPT, have been widely adopted in natural language processing (NLP) due to their exceptional performance. However, recent studies show their vulnerability to textual adversarial attacks where the model's output can be misled by intentionally manipulating the text inputs. Despite various methods that have been proposed to enhance the model's robustness and mitigate this vulnerability, many require heavy consumption resources (e.g., adversarial training) or only provide limited protection (e.g., defensive dropout).
> 
> In this paper, we propose a novel method called dynamic attention, tailored for the transformer architecture, to enhance the inherent robustness of the model itself against various adversarial attacks. Our method requires no downstream task knowledge and does not incur additional costs. The proposed dynamic attention consists of two modules: *(i) attention rectification*, which masks or weakens the attention value of the chosen tokens, and *(ii) dynamic modeling*, which dynamically builds the set of candidate tokens. Extensive experiments demonstrate that dynamic attention significantly mitigates the impact of adversarial attacks, improving up to 33% compared to previous methods against widely used adversarial attacks. The model-level design of dynamic attention enables it to be easily combined with other defense methods (e.g., adversarial training) to further enhance the model's robustness. Furthermore, we demonstrate that dynamic attention preserves the state-of-the-art robustness space of the original model compared to other dynamic modeling methods.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/improving-the-robustness-of-transformer-based-large-language-models-with-dynamic-attention/](https://www.ndss-symposium.org/ndss-paper/improving-the-robustness-of-transformer-based-large-language-models-with-dynamic-attention/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-115-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-115-paper.pdf)
## Information Based Heavy Hitters for Real-Time DNS Data Exfiltration Detection.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#information-based-heavy-hitters-for-real-time-dns-data-exfiltration-detection)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#information-based-heavy-hitters-for-real-time-dns-data-exfiltration-detection)
### Authors
* Yarin Ozery, Ben-Gurion University of the Negev
### Abstract
> Data exfiltration over the DNS protocol and its detection have been researched extensively in recent years. Prior studies focused on offline detection methods, which although capable of detecting attacks, allow a large amount of data to be exfiltrated before the attack is detected and dealt with. In this paper, we introduce Information-based Heavy Hitters (ibHH), a real-time detection method which is based on live estimations of the amount of information transmitted to registered domains. ibHH uses constant-size memory and supports constant-time queries, which makes it suitable for deployment on recursive DNS servers to further reduce detection and response time. In our eval- uation, we compared the performance of the proposed method to that of leading state-of-the-art DNS exfiltration detection methods on real-world datasets comprising over 250 billion DNS queries. The evaluation demonstrates ibHH’s ability to successfully detect exfiltration rates as slow as 0.7B/s, with a false positive alert rate of less than 0.004, with significantly lower resource consumption compared to other methods.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/information-based-heavy-hitters-for-real-time-dns-data-exfiltration-detection/](https://www.ndss-symposium.org/ndss-paper/information-based-heavy-hitters-for-real-time-dns-data-exfiltration-detection/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-388-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-388-paper.pdf)
## Invisible Reflections: Leveraging Infrared Laser Reflections to Target Traffic Sign Perception.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#invisible-reflections-leveraging-infrared-laser-reflections-to-target-traffic-sign-perception)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#invisible-reflections-leveraging-infrared-laser-reflections-to-target-traffic-sign-perception)
### Authors
* Takami Sato, University of California Irvine
* Sri Hrushikesh Varma Bhupathiraju, University of Florida
* Michael Clifford, Toyota InfoTech Labs
* Takeshi Sugawara, The University of Electro-Communications
* Qi Alfred Chen, University of California
### Abstract
> All vehicles must follow the rules that govern traffic behavior, regardless of whether the vehicles are human-driven or Connected Autonomous Vehicles (CAVs). Road signs indicate locally active rules, such as speed limits and requirements to yield or stop. Recent research has demonstrated attacks, such as adding stickers or projected colored patches to signs, that cause CAV misinterpretation, resulting in potential safety issues. Humans can see and potentially defend against these attacks. But humans can not detect what they can not observe. We have developed an effective physical-world attack that leverages the sensitivity of filterless image sensors and the properties of Infrared Laser Reflections (ILRs), which are invisible to humans. The attack is designed to affect CAV cameras and perception, undermining traffic sign recognition by inducing misclassification. In this work, we formulate the threat model and requirements for an ILR-based traffic sign perception attack to succeed. We evaluate the effectiveness of the ILR attack with real-world experiments against two major traffic sign recognition architectures on four IR-sensitive cameras. Our black-box optimization methodology allows the attack to achieve up to a 100% attack success rate in indoor, static scenarios and a ≥80.5% attack success rate in our outdoor, moving vehicle scenarios. We find the latest state-of-the-art certifiable defense is ineffective against ILR attacks as it mis-certifies ≥33.5% of cases. To address this, we propose a detection strategy based on the physical properties of IR laser reflections which can detect 96% of ILR attacks.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/invisible-reflections-leveraging-infrared-laser-reflections-to-target-traffic-sign-perception/](https://www.ndss-symposium.org/ndss-paper/invisible-reflections-leveraging-infrared-laser-reflections-to-target-traffic-sign-perception/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-1053-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-1053-paper.pdf)
## IRRedicator: Pruning IRR with RPKI-Valid BGP Insights.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#irredicator-pruning-irr-with-rpki-valid-bgp-insights)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#irredicator-pruning-irr-with-rpki-valid-bgp-insights)
### Authors
* Minhyeok Kang, Seoul National University
* Weitong Li, Virginia Tech
* Roland van Rijswijk-Deij, University of Twente
* Ted "Taekyoung" Kwon, Seoul National University
* Taejoong Chung, Virginia Tech
### Abstract
> Border Gateway Protocol (BGP) provides a way of exchanging routing information to help routers construct their routing tables. However, due to the lack of security considerations, BGP has been suffering from vulnerabilities such as BGP hijacking attacks. To mitigate these issues, two data sources have been used, Internet Routing Registry (IRR) and Resource Public Key Infrastructure (RPKI), to provide reliable mappings between IP prefixes and their authorized Autonomous Systems (ASes). Each of the data sources, however, has its own limitations. IRR has been well-known for its stale Route objects with outdated AS information since network operators do not have enough incentives to keep them up to date, and RPKI has been slowly deployed due to its operational complexities. In this paper, we measure the prevalent inconsistencies between Route objects in IRR and ROA objects in RPKI. We next characterize inconsistent and consistent Route objects, respectively, by focusing on their BGP announcement patterns. Based on this insight, we develop a technique that identifies stale Route objects by leveraging a machine learning algorithm and evaluate its performance. From real trace-based experiments, we show that our technique can offer advantages against the status quo by reducing the percentage of potentially stale Route objects from 72% to 40% (of the whole IRR Route objects). In this way, we achieve 93% of the accuracy of validating BGP announcements while covering 87% of BGP announcements.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/irredicator-pruning-irr-with-rpki-valid-bgp-insights/](https://www.ndss-symposium.org/ndss-paper/irredicator-pruning-irr-with-rpki-valid-bgp-insights/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-524-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-524-paper.pdf)
## K-LEAK: Towards Automating the Generation of Multi-Step Infoleak Exploits against the Linux Kernel.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#k-leak-towards-automating-the-generation-of-multi-step-infoleak-exploits-against-the-linux-kernel)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#k-leak-towards-automating-the-generation-of-multi-step-infoleak-exploits-against-the-linux-kernel)
### Authors
* Zhengchuan Liang, UC Riverside
* Xiaochen Zou, UC Riverside
* Chengyu Song, UC Riverside
* Zhiyun Qian, UC Riverside
### Abstract
> The severity of information leak (infoleak for short) in OS kernels cannot be underestimated, and various exploitation techniques have been proposed to achieve infoleak in OS kernels. Among them, memory-error-based infoleak is powerful and widely used in real-world exploits. However, existing approaches to finding memory-error-based infoleak lack the systematic reasoning about its search space and do not fully explore the search space. Consequently, they fail to exploit a large number of memory errors in the kernel. According to a theoretical modeling of memory errors, the actual search space of such approach is huge, as multiple steps could be involved in the exploitation process, and virtually any memory error can be exploited to achieve infoleak. To bridge the gap between the theory and reality, we propose a framework K-LEAK to facilitate generating memory-error-based infoleak exploits in the Linux kernel. K-LEAK considers infoleak exploit generation as a data-flow search problem. By modeling unintended data flows introduced by memory errors, and how existing memory errors can create new memory errors, K-LEAK can systematically search for infoleak data-flow paths in a multi-step manner. We implement a prototype of K-LEAK and evaluate it with memory errors from syzbot and CVEs. The evaluation results demonstrate the effectiveness of K-LEAK in generating diverse infoleak exploits using various multi-step strategies.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/k-leak-towards-automating-the-generation-of-multi-step-infoleak-exploits-against-the-linux-kernel/](https://www.ndss-symposium.org/ndss-paper/k-leak-towards-automating-the-generation-of-multi-step-infoleak-exploits-against-the-linux-kernel/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-935-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-935-paper.pdf)
## Large Language Model guided Protocol Fuzzing.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#large-language-model-guided-protocol-fuzzing)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#large-language-model-guided-protocol-fuzzing)
### Authors
* Ruijie Meng, National University of Singapore
### Abstract
> How to find security flaws in a protocol implementation without a machine-readable specification of the protocol? Facing the internet, protocol implementations are particularly security-critical software systems where inputs must adhere to a specific structure and order that is often informally specified in hundreds of pages in natural language (RFC). Without some machine-readable version of that protocol, it is difficult to automatically generate valid test inputs for its implementation that follow the required structure and order. It is possible to partially alleviate this challenge using mutational fuzzing on a set of recorded message sequences as seed inputs. However, the set of available seeds is often quite limited and will hardly cover the great diversity of protocol states and input structures.
> 
> In this paper, we explore the opportunities of systematic interaction with a pre-trained large language models (LLM) which has ingested millions of pages of human-readable protocol specifications, to draw out machine-readable information about the protocol that can be used during protocol fuzzing. We use the knowledge of the LLMs about protocol message types for well-known protocols. We also checked the LLM's capability in detecting ``states" for stateful protocol implementations by generating sequences of messages and predicting response codes. Based on these observations, we have developed an LLM-guided protocol implementation fuzzing engine. Our protocol fuzzer ChatAFL constructs grammars for each message type in a protocol, and then mutates messages or predicts the next messages in a message sequence via interactions with LLMs. Experiments on a wide range of real-world protocols from ProFuzzbench show significant efficacy in state and code coverage. Our LLM-guided stateful fuzzer was compared with state-of-the-art fuzzers AFLNet and NSFuzz. ChatAFL covers 47.6% and 42.7% more state transitions, 29.6% and 25.8% more states, and 5.8% and 6.7% more code, respectively. Apart from enhanced coverage, ChatAFL discovered nine distinct and previously unknown vulnerabilities in widely-used and extensively-tested protocol implementations while AFLNet and NSFuzz only discover three and four of them, respectively.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/large-language-model-guided-protocol-fuzzing/](https://www.ndss-symposium.org/ndss-paper/large-language-model-guided-protocol-fuzzing/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-556-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-556-paper.pdf)
## Leaking the Privacy of Groups and More: Understanding Privacy Risks of Cross-App Content Sharing in Mobile Ecosystem.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#leaking-the-privacy-of-groups-and-more-understanding-privacy-risks-of-cross-app-content-sharing-in-mobile-ecosystem)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#leaking-the-privacy-of-groups-and-more-understanding-privacy-risks-of-cross-app-content-sharing-in-mobile-ecosystem)
### Authors
* Jiangrong Wu, Sun Yat-sen University
* Yuhong Nan, Sun Yat-sen University
* Luyi Xing, Indiana University Bloomington
* Jiatao Cheng, Sun Yat-sen University
* Zimin Lin, Alibaba Group
* Zibin Zheng, Sun Yat-sen University
* Min Yang, Fudan University
### Abstract
> Cross-app content sharing is one of the prominent features widely used in mobile apps. For example, a short video from one app can be shared to another (e.g., a messaging app) and further viewed by other users. In many cases, such Cross-app content sharing activities could have privacy implications for both the sharer and sharee, such as exposing app users' personal interests.
> 
> In this paper, we provide the first in-depth study on the privacy implications of Cross-app content sharing (as we call Cracs) activities in the mobile ecosystem. Our research showed that during the sharing process, the adversary can not only track and infer user interests as traditional web trackers but also cause other severe privacy implications to app users. More specifically, due to multiple privacy-intrusive designs and implementations of Cracs, an adversary can easily reveal a user's social relations to an outside party, or unnecessarily expose user identities and her associated personal data (e.g., user accounts in another app). Such privacy implications are indeed a concern for app users, as confirmed by a user study we have performed with 300 participants.
> 
> To further evaluate the impact of our identified privacy implications at large, we have designed an automatic pipeline named Shark, combined with static analysis and dynamic analysis to effectively identify whether a given app introduces unnecessary data exposure in Cracs. We analyzed 300 top downloaded apps collected from app stores in both the US and China. The analysis results showed that over 55% of the apps from China and 10% from the US are indeed problematic.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/leaking-the-privacy-of-groups-and-more-understanding-privacy-risks-of-cross-app-content-sharing-in-mobile-ecosystem/](https://www.ndss-symposium.org/ndss-paper/leaking-the-privacy-of-groups-and-more-understanding-privacy-risks-of-cross-app-content-sharing-in-mobile-ecosystem/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-138-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-138-paper.pdf)
## Like, Comment, Get Scammed: Characterizing Comment Scams on Media Platforms.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#like-comment-get-scammed-characterizing-comment-scams-on-media-platforms)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#like-comment-get-scammed-characterizing-comment-scams-on-media-platforms)
### Authors
* Xigao Li, Stony Brook University
* Amir Rahmati, Stony Brook University
* Nick Nikiforakis, Stony Brook University
### Abstract
> Given the meteoric rise of large media platforms (such as YouTube) on the web, it is no surprise that attackers seek to abuse them in order to easily reach hundreds of millions of users. Among other social-engineering attacks perpetrated on these platforms, comment scams have increased in popularity despite the presence of mechanisms that purportedly give content creators control over their channel comments. In a comment scam, attackers set up script-controlled accounts that automatically post or reply to comments on media platforms, enticing users to contact them. Through the promise of free prizes and investment opportunities, attackers aim to steal financial assets from the end users who contact them.
> 
> In this paper, we present the first systematic, large-scale study of comment scams. We design and implement an infrastructure to collect a dataset of 8.8 million comments from 20 different YouTube channels over a 6-month period. We develop filters based on textual, graphical, and temporal features of comments and identify 206K scam comments from 10K unique accounts. Using this dataset, we present our analysis of scam campaigns, comment dynamics, and evasion techniques used by scammers. Lastly, through an IRB-approved study, we interact with 50 scammers to gain insights into their social-engineering tactics and payment preferences. Using transaction records on public blockchains, we perform a quantitative analysis of the financial assets stolen by scammers, finding that just the scammers that were part of our user study have stolen funds equivalent to millions of dollars. Our study demonstrates that existing scam-detection mechanisms are insufficient for curbing abuse, pointing to the need for better comment-moderation tools as well as other changes that would make it difficult for attackers to obtain tens of thousands of accounts on these large platforms.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/like-comment-get-scammed-characterizing-comment-scams-on-media-platforms/](https://www.ndss-symposium.org/ndss-paper/like-comment-get-scammed-characterizing-comment-scams-on-media-platforms/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-60-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-60-paper.pdf)
## LoRDMA: A New Low-Rate DoS Attack in RDMA Networks.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#lordma-a-new-low-rate-dos-attack-in-rdma-networks)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#lordma-a-new-low-rate-dos-attack-in-rdma-networks)
### Authors
* Shicheng Wang, Tsinghua University
* Menghao Zhang, Beihang University & Infrawaves
* Yuying Du, Information Engineering University
* Ziteng Chen, Southeast University
* Zhiliang Wang, Tsinghua University & Zhongguancun Laboratory
* Mingwei Xu, Tsinghua University & Zhongguancun Laboratory
* Renjie Xie, Tsinghua University
* Jiahai Yang, Tsinghua University & Zhongguancun Laboratory
### Abstract
> RDMA is being widely used from private data center applications to multi-tenant clouds, which makes RDMA security gain tremendous attention. However, existing RDMA security studies mainly focus on the security of RDMA systems, and the security of the coupled traffic control mechanisms (represented by PFC and DCQCN) in RDMA networks is largely overlooked. In this paper, through extensive experiments and analysis, we demonstrate that concurrent short-duration bursts can cause drastic performance loss on flows across multiple hops via the interaction between PFC and DCQCN. And we also summarize the vulnerabilities between the performance loss and the burst peak rate, as well as the duration. Based on these vulnerabilities, we propose the LoRDMA attack, a low-rate DoS attack against RDMA traffic control mechanisms. By monitoring RTT as the feedback signal, LoRDMA can adaptively 1) coordinate the bots to different target switch ports to cover more victim flows efficiently; 2) schedule the burst parameters to cause significant performance loss efficiently. We conduct and evaluate the LoRDMA attack at both ns-3 simulations and a cloud RDMA cluster. The results show that compared to existing attacks, the LoRDMA attack achieves higher victim flow coverage and performance loss with much lower attack traffic and detectability. And the communication performance of typical distributed machine learning training applications (NCCL Tests) in the cloud RDMA cluster can be degraded from 18.23% to 56.12% under the LoRDMA attack.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/lordma-a-new-low-rate-dos-attack-in-rdma-networks/](https://www.ndss-symposium.org/ndss-paper/lordma-a-new-low-rate-dos-attack-in-rdma-networks/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-25-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-25-paper.pdf)
## MadRadar: A Black-Box Physical Layer Attack Framework on mmWave Automotive FMCW Radars.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#madradar-a-black-box-physical-layer-attack-framework-on-mmwave-automotive-fmcw-radars)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#madradar-a-black-box-physical-layer-attack-framework-on-mmwave-automotive-fmcw-radars)
### Authors
* David Hunt, Duke University
* Kristen Angell, Duke University
* Zhenzhou Qi, Duke University
* Tingjun Chen, Duke University
* Miroslav Pajic, Duke University
### Abstract
> Frequency modulated continuous wave (FMCW) millimeter-wave (mmWave) radars play a critical role in many of the advanced driver assistance systems (ADAS) featured on today's vehicles. While previous works have demonstrated (only) successful false-positive spoofing attacks against these sensors, all but one assumed that an attacker had the runtime knowledge of the victim radar's configuration. In this work, we introduce MadRadar, a general black-box radar attack framework for automotive mmWave FMCW radars capable of estimating the victim radar's configuration in real-time, and then executing an attack based on the estimates. We evaluate the impact of such attacks maliciously manipulating a victim radar's point cloud, and show the novel ability to effectively `add' (i.e., false positive attacks), `remove' (i.e., false negative attacks), or `move' (i.e., translation attacks) object detections from a victim vehicle's scene. Finally, we experimentally demonstrate the feasibility of our attacks on real-world case studies performed using a real-time physical prototype on a software-defined radio platform.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/madradar-a-black-box-physical-layer-attack-framework-on-mmwave-automotive-fmcw-radars/](https://www.ndss-symposium.org/ndss-paper/madradar-a-black-box-physical-layer-attack-framework-on-mmwave-automotive-fmcw-radars/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2024_f153_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2024_f153_paper.pdf)
## Maginot Line: Assessing a New Cross-app Threat to PII-as-Factor Authentication in Chinese Mobile Apps.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#maginot-line-assessing-a-new-cross-app-threat-to-pii-as-factor-authentication-in-chinese-mobile-apps)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#maginot-line-assessing-a-new-cross-app-threat-to-pii-as-factor-authentication-in-chinese-mobile-apps)
### Authors
* Fannv He, National Computer Network Intrusion Protection Center
### Abstract
> Authentication is one of the established practices to ensure user security. Personally identifiable information (PII), such as national identity card number (ID number) and bank card number, is used widely in China's mobile apps as an additional secret to authenticate users, i.e., PII-as-Factor Authentication (PaFA). In this paper, we found a new threat that calls on the cautiousness of PaFA: the simultaneous usages and business-related interactions of apps make the authentication strength of a target app weaker than designed. An adversary, who knows fewer authentication factors (only SMS OTP) than a PaFA system required, can break the authentication by gathering information or abusing cross-app authorization from other apps. To systematically study the potential risks, we proposed a semi-automatic system, MAGGIE, to evaluate the security of PaFA in target apps. By measuring 234 real-world apps in Chinese app markets with the help of MAGGIE, we found 75.4% of apps that deployed PaFA can be bypassed, including the popular and sensitive ones (e.g., AliPay, WeChat, UnionPay), leading to severe consequences like hijack user accounts and making unauthorized purchases. Additionally, we conducted a survey to demonstrate the practical implications of the new risk on users. Finally, we reported our findings to the vendors and provided several mitigation measures.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/maginot-line-assessing-a-new-cross-app-threat-to-pii-as-factor-authentication-in-chinese-mobile-apps/](https://www.ndss-symposium.org/ndss-paper/maginot-line-assessing-a-new-cross-app-threat-to-pii-as-factor-authentication-in-chinese-mobile-apps/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-241-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-241-paper.pdf)
## MASTERKEY: Automated Jailbreaking of Large Language Model Chatbots.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#masterkey-automated-jailbreaking-of-large-language-model-chatbots)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#masterkey-automated-jailbreaking-of-large-language-model-chatbots)
### Authors
* Gelei Deng, Nanyang Technological University
* Yi Liu, Nanyang Technological University
* Yuekang Li, University of New South Wales
* Kailong Wang, Huazhong University of Science and Technology
* Ying Zhang, Virginia Tech
* Zefeng Li, Nanyang Technological University
* Haoyu Wang, Huazhong University of Science and Technology
* Tianwei Zhang, Nanyang Technological University
* Yang Liu, Nanyang Technological University
### Abstract
> Large language models (LLMs), such as chatbots, have made significant strides in various fields but remain vulnerable to jailbreak attacks, which aim to elicit inappropriate responses. Despite efforts to identify these weaknesses, current strategies are ineffective against mainstream LLM chatbots, mainly due to undisclosed defensive measures by service providers. Our paper introduces MASTERKEY, a framework exploring the dynamics of jailbreak attacks and countermeasures. We present a novel method based on time-based characteristics to dissect LLM chatbot defenses. This technique, inspired by time-based SQL injection, uncovers the workings of these defenses and demonstrates a proof-of-concept attack on several LLM chatbots.
> 
> Additionally, MASTERKEY features an innovative approach for automatically generating jailbreak prompts that target well-defended LLM chatbots. By fine-tuning an LLM with jailbreak prompts, we create attacks with a 21.58% success rate, significantly higher than the 7.33% achieved by existing methods. We have informed service providers of these findings, highlighting the urgent need for stronger defenses. This work not only reveals vulnerabilities in LLMs but also underscores the importance of robust defenses against such attacks.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/masterkey-automated-jailbreaking-of-large-language-model-chatbots/](https://www.ndss-symposium.org/ndss-paper/masterkey-automated-jailbreaking-of-large-language-model-chatbots/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-188-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-188-paper.pdf)
## MirageFlow: A New Bandwidth Inflation Attack on Tor.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#mirageflow-a-new-bandwidth-inflation-attack-on-tor)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#mirageflow-a-new-bandwidth-inflation-attack-on-tor)
### Authors
* Christoph Sendner, University of Würzburg
* Jasper Stang, University of Würzburg
* Alexandra Dmitrienko, University of Würzburg
* Raveen Wijewickrama, University of Texas at San Antonio
* Murtuza Jadliwala, University of Texas at San Antonio
### Abstract
> The Tor network is the most prominent system for providing anonymous communication to web users, with a daily user base of 2 million users. However, since its inception, it has been constantly targeted by various traffic fingerprinting and correlation attacks aiming at deanonymizing its users. A critical requirement for these attacks is to attract as much user traffic to adversarial relays as possible, which is typically accomplished by means of bandwidth inflation attacks. This paper proposes a new inflation attack vector in Tor, referred to as MirageFlow, which enables inflation of measured bandwidth. The underlying attack technique exploits resource sharing among Tor relay nodes and employs a cluster of attacker-controlled relays with coordinated resource allocation within the cluster to deceive bandwidth measurers into believing that each relay node in the cluster possesses ample resources. We propose two attack variants, C-MirageFlow and D-MirageFlow, and test both versions in a private Tor test network. Our evaluation demonstrates that an attacker can inflate the measured bandwidth by a factor close to n using C-MirageFlow and nearly half n*N using D-MirageFlow, where n is the size of the cluster hosted on one server and N is the number of servers. Furthermore, our theoretical analysis reveals that gaining control over half of the Tor network's traffic can be achieved by employing just 10 dedicated servers with a cluster size of 109 relays running the MirageFlow attack, each with a bandwidth of 100MB/s. The problem is further exacerbated by the fact that Tor not only allows resource sharing but, according to recent reports, even promotes it.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/mirageflow-a-new-bandwidth-inflation-attack-on-tor/](https://www.ndss-symposium.org/ndss-paper/mirageflow-a-new-bandwidth-inflation-attack-on-tor/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-1133-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-1133-paper.pdf)
## Not your Type! Detecting Storage Collision Vulnerabilities in Ethereum Smart Contracts.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#not-your-type-detecting-storage-collision-vulnerabilities-in-ethereum-smart-contracts)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#not-your-type-detecting-storage-collision-vulnerabilities-in-ethereum-smart-contracts)
### Authors
* Nicola Ruaro, University of California
### Abstract
> In recent years, the Ethereum blockchain has seen significant growth and adoption. One of the key factors of its success is the possibility to run immutable programs known as smart contracts. Smart contracts allow for the automatic manipulation of digital assets and play a central role in the new decentralized finance (DeFi) ecosystem. With the growth of DeFi, the interactions between smart contracts have become increasingly complex, enabling advanced financial protocols and applications. However, bugs in smart contract interactions are also a common cause of critical vulnerabilities that result in considerable financial losses.
> 
> In this paper, we study and detect a type of cross-contract vulnerability known as a storage collision. A smart contract uses storage to persistently store its data on the blockchain. Typically, each contract has its own separate storage. However, it is also possible that two smart contracts share their storage (using a delegate call). Unfortunately, when these two contracts have different understandings of the types/semantics of their shared storage, a storage collision vulnerability can occur. This may lead to unexpected behavior such as denial of service (frozen funds), privilege escalation, and theft of financial assets.
> 
> To detect and investigate the impact of storage collision vulnerabilities at scale, we propose CRUSH, a novel analysis system that discovers these flaws and synthesizes proof-of-concept exploits. We leverage CRUSH to perform a large-scale analysis of 14,237,696 smart contracts deployed on the Ethereum blockchain since its genesis. CRUSH identifies 14,891 potentially vulnerable contracts and automatically synthesizes an end-to-end exploit for 956 of them. Our system uncovers more than $6 million of novel, previously unreported potential financial damage caused by storage collision vulnerabilities.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/not-your-type-detecting-storage-collision-vulnerabilities-in-ethereum-smart-contracts/](https://www.ndss-symposium.org/ndss-paper/not-your-type-detecting-storage-collision-vulnerabilities-in-ethereum-smart-contracts/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-713-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-713-paper.pdf)
## Parrot-Trained Adversarial Examples: Pushing the Practicality of Black-Box Audio Attacks against Speaker Recognition Models.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#parrot-trained-adversarial-examples-pushing-the-practicality-of-black-box-audio-attacks-against-speaker-recognition-models)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#parrot-trained-adversarial-examples-pushing-the-practicality-of-black-box-audio-attacks-against-speaker-recognition-models)
### Authors
* Rui Duan, University of South Florida
* Zhe Qu, Central South University
* Leah Ding, American University
* Yao Liu, University of South Florida
* Zhuo Lu, University of South Florida
### Abstract
> Audio adversarial examples (AEs) have posed significant security challenges to real-world speaker recognition systems. Most black-box attacks still require certain information from the speaker recognition model to be effective (e.g., keeping probing and requiring the knowledge of similarity scores). This work aims to push the practicality of the black-box attacks by minimizing the attacker's knowledge about a target speaker recognition model. Although it is not feasible for an attacker to succeed with completely zero knowledge, we assume that the attacker only knows a short (or a few seconds) speech sample of a target speaker. Without any probing to gain further knowledge about the target model, we propose a new mechanism, called parrot training, to generate AEs against the target model. Motivated by recent advancements in voice conversion, we propose to use the one short sentence knowledge to generate more synthetic speech samples that sound like the target speaker, called parrot speech. Then, we use these parrot speech samples to train a parrot-trained (PT) surrogate model for the attacker. Under a joint transferability and perception framework, we investigate different ways to generate AEs on the PT model (called PT-AEs) to ensure the PT-AEs can be generated with high transferability to a black-box target model with good human perceptual quality. Real-world experiments show that the resultant PT-AEs achieve the attack success rates of 45.8%-80.8% against the open-source models in the digital-line scenario and 47.9%-58.3% against smart devices, including Apple HomePod (Siri), Amazon Echo, and Google Home, in the over-the-air scenario.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/parrot-trained-adversarial-examples-pushing-the-practicality-of-black-box-audio-attacks-against-speaker-recognition-models/](https://www.ndss-symposium.org/ndss-paper/parrot-trained-adversarial-examples-pushing-the-practicality-of-black-box-audio-attacks-against-speaker-recognition-models/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-545-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-545-paper.pdf)
## Pencil: Private and Extensible Collaborative Learning without the Non-Colluding Assumption.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#pencil-private-and-extensible-collaborative-learning-without-the-non-colluding-assumption)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#pencil-private-and-extensible-collaborative-learning-without-the-non-colluding-assumption)
### Authors
* Xuanqi Liu, Tsinghua University
* Zhuotao Liu, Tsinghua University
* Qi Li, Tsinghua University
* Ke Xu, Tsinghua University
* Mingwei Xu, Tsinghua University
### Abstract
> The escalating focus on data privacy poses significant challenges for collaborative neural network training, where data ownership and model training/deployment responsibilities reside with distinct entities. Our community has made substantial contributions to addressing this challenge, proposing various approaches such as federated learning (FL) and privacy-preserving machine learning based on cryptographic constructs like homomorphic encryption (HE) and secure multiparty computation (MPC). However, FL completely overlooks model privacy, and HE has limited extensibility (confined to only one data provider). While the state-of-the-art MPC frameworks provide reasonable throughput and simultaneously ensure model/data privacy, they rely on a critical non-colluding assumption on the computing servers, and relaxing this assumption is still an open problem.
> 
> In this paper, we present Pencil, the first private training framework for collaborative learning that simultaneously offers data privacy, model privacy, and extensibility to multiple data providers, without relying on the non-colluding assumption. Our fundamental design principle is to construct the n-party collaborative training protocol based on an efficient two-party protocol, and meanwhile ensuring that switching to different data providers during model training introduces no extra cost. We introduce several novel cryptographic protocols to realize this design principle and conduct a rigorous security and privacy analysis. Our comprehensive evaluations of Pencil demonstrate that (i) models trained in plaintext and models trained privately using Pencil exhibit nearly identical test accuracies; (ii) The training overhead of Pencil is greatly reduced: Pencil achieves 10 ∼ 260× higher throughput and 2 orders of magnitude less communication than prior art; (iii) Pencil is resilient against both existing and adaptive (white-box) attacks.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/pencil-private-and-extensible-collaborative-learning-without-the-non-colluding-assumption/](https://www.ndss-symposium.org/ndss-paper/pencil-private-and-extensible-collaborative-learning-without-the-non-colluding-assumption/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-512-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-512-paper.pdf)
## Phoenix: Surviving Unpatched Vulnerabilities via Accurate and Efficient Filtering of Syscall Sequences.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#phoenix-surviving-unpatched-vulnerabilities-via-accurate-and-efficient-filtering-of-syscall-sequences)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#phoenix-surviving-unpatched-vulnerabilities-via-accurate-and-efficient-filtering-of-syscall-sequences)
### Authors
* Hugo Kermabon-Bobinnec, Concordia University
* Yosr Jarraya, Ericsson Security Research
* Lingyu Wang, Concordia University
* Suryadipta Majumdar, Concordia University
* Makan Pourzandi, Ericsson Security Research
### Abstract
> Known, but unpatched vulnerabilities represent one of the most concerning threats for businesses today. The average time-to-patch of zero-day vulnerabilities remains around 100 days in recent years. The lack of means to mitigate an unpatched vulnerability may force businesses to temporarily shut down their services, which can lead to significant financial loss. Existing solutions for filtering system calls unused by a container can effectively reduce the general attack surface, but cannot prevent a specific vulnerability that shares the same system calls with the container. On the other hand, existing provenance analysis solutions can help identify a sequence of system calls behind the vulnerability, although they do not provide a direct solution for filtering such a sequence. To bridge such a research gap, we propose Phoenix, a solution for preventing exploits of unpatched vulnerabilities by accurately and efficiently filtering sequences of system calls identified through provenance analysis. To achieve this, Phoenix cleverly combines the efficiency of Seccomp filters with the accuracy of Ptrace-based deep argument inspection, and it provides the novel capability of filtering system call sequences through a dynamic Seccomp design. Our implementation and experiments show that Phoenix can effectively mitigate real-world vulnerabilities which evade existing solutions, while introducing negligible delay (less than 4%) and less overhead (e.g., 98% less CPU consumption than existing solution).

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/phoenix-surviving-unpatched-vulnerabilities-via-accurate-and-efficient-filtering-of-syscall-sequences/](https://www.ndss-symposium.org/ndss-paper/phoenix-surviving-unpatched-vulnerabilities-via-accurate-and-efficient-filtering-of-syscall-sequences/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-582-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-582-paper.pdf)
## Powers of Tau in Asynchrony.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#powers-of-tau-in-asynchrony)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#powers-of-tau-in-asynchrony)
### Authors
* Sourav Das, University of Illinois at Urbana-Champaign
* Zhuolun Xiang, Aptos
* Ling Ren, University of Illinois at Urbana-Champaign
### Abstract
> The $q$-Strong Diffie-Hellman~($q$-SDH) parameters are foundational to efficient constructions of many cryptographic primitives such as zero-knowledge succinct non-interactive argument of knowledge, polynomial/vector commitments, verifiable secret sharing, and randomness beacon. The only existing method to generate these parameters securely is highly sequential, requires strong network synchrony assumptions, and has very high communication and computation cost. For example, to generate parameters for any given $q$, each party incurs a communication cost of $Omega(nq)$ and requires $Omega(n)$ rounds. Here $n$ is the number of parties in the secure multiparty computation protocol. Since $q$ is typically large, i.e., on the order of billions, the cost is highly prohibitive.
> 
> In this paper, we present a distributed protocol to generate $q$-SDH parameters in an asynchronous network. In a network of $n$ parties, our protocol tolerates up to one-third of malicious parties. Each party incurs a communication cost of $O(q + n^2log q)$ and the protocol finishes in $O(log q + log n)$ expected rounds. We provide a rigorous security analysis of our protocol. We implement our protocol and evaluate it with up to 128 geographically distributed parties. Our evaluation illustrates that our protocol is highly scalable and results in a 2-6$times$ better runtime and 4-13$times$ better per-party bandwidth usage compared to the state-of-the-art synchronous protocol for generating $q$-SDH parameters.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/powers-of-tau-in-asynchrony/](https://www.ndss-symposium.org/ndss-paper/powers-of-tau-in-asynchrony/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-733-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-733-paper.pdf)
## Predictive Context-sensitive Fuzzing.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#predictive-context-sensitive-fuzzing)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#predictive-context-sensitive-fuzzing)
### Authors
* Pietro Borrello, Sapienza University of Rome
* Andrea Fioraldi, EURECOM
* Daniele Cono D'Elia, Sapienza University of Rome
* Davide Balzarotti, Eurecom
* Leonardo Querzoni, Sapienza University of Rome
* Cristiano Giuffrida, Vrije Universiteit Amsterdam
### Abstract
> Coverage-guided fuzzers expose bugs by progressively mutating testcases to drive execution to new program locations. Code coverage is currently the most effective and popular exploration feedback. For several bugs, though, also how execution reaches a buggy program location may matter: for those, only tracking what code a testcase exercises may lead fuzzers to overlook interesting program states. Unfortunately, context-sensitive coverage tracking comes with an inherent state explosion problem. Existing attempts to implement context-sensitive coverage-guided fuzzers struggle with it, experiencing non-trivial issues for precision (due to coverage collisions) and performance (due to context tracking and queue/map explosion).
> 
> In this paper, we show that a much more effective approach to context-sensitive fuzzing is possible. First, we propose function cloning as a backward-compatible instrumentation primitive to enable precise (i.e., collision-free) context-sensitive coverage tracking. Then, to tame the state explosion problem, we argue to account for contextual information only when a fuzzer explores contexts selected as promising. We propose a prediction scheme to identify one pool of such contexts: we analyze the data-flow diversity of the incoming argument values at call sites, exposing to the fuzzer a contextually refined clone of the callee if the latter sees incoming abstract objects that its uses at other sites do not.
> 
> Our work shows that, by applying function cloning to program regions that we predict to benefit from context-sensitivity, we can overcome the aforementioned issues while preserving, and even improving, fuzzing effectiveness. On the FuzzBench suite, our approach largely outperforms state-of-the-art coverage-guided fuzzing embodiments, unveiling more and different bugs without incurring explosion or other apparent inefficiencies. On these heavily tested subjects, we also found 8 enduring security issues in 5 of them, with 6 CVE identifiers issued.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/predictive-context-sensitive-fuzzing/](https://www.ndss-symposium.org/ndss-paper/predictive-context-sensitive-fuzzing/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2024_f113_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2024_f113_paper.pdf)
## PrintListener: Uncovering the Vulnerability of Fingerprint Authentication via the Finger Friction Sound.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#printlistener-uncovering-the-vulnerability-of-fingerprint-authentication-via-the-finger-friction-sound)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#printlistener-uncovering-the-vulnerability-of-fingerprint-authentication-via-the-finger-friction-sound)
### Authors
* Man Zhou, Huazhong University of Science and Technology
* Shuao Su, Huazhong University of Science and Technology
* Qian Wang, Wuhan University
* Qi Li, Tsinghua University
* Yuting Zhou, Huazhong University of Science and Technology
* Xiaojing Ma, Huazhong University of Science and Technology
* Zhengxiong Li, University of Colorado Denver
### Abstract
> Fingerprint authentication has been extensively employed in contemporary identity verification systems owing to its rapidity and cost-effectiveness. Due to its widespread use, fingerprint leakage may cause sensitive information theft, huge economic and personnel losses, and even a potential compromise of national security. As a fingerprint that can coincidentally match a specific proportion of the overall fingerprint population, MasterPrint rings the alarm bells for the security of fingerprint authentication. In this paper, we propose a new side-channel attack on the minutiae-based Automatic Fingerprint Identification System (AFIS), called PrintListener, which leverages users’ fingertip swiping actions on the screen to extract fingerprint pattern features (the first-level features) and synthesizes a stronger targeted PatternMasterPrint with potential second-level features. The attack scenario of PrintListener is extensive and covert. It only needs to record users’ fingertip friction sound and can be launched by leveraging a large number of social media platforms. Extensive experimental results in real-world scenarios show that Printlistener can significantly improve the attack potency of MasterPrint.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/printlistener-uncovering-the-vulnerability-of-fingerprint-authentication-via-the-finger-friction-sound/](https://www.ndss-symposium.org/ndss-paper/printlistener-uncovering-the-vulnerability-of-fingerprint-authentication-via-the-finger-friction-sound/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-618-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-618-paper.pdf)
## PriSrv: Privacy-Enhanced and Highly Usable Service Discovery in Wireless Communications.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#prisrv-privacy-enhanced-and-highly-usable-service-discovery-in-wireless-communications)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#prisrv-privacy-enhanced-and-highly-usable-service-discovery-in-wireless-communications)
### Authors
* Yang Yang, School of Computing and Information Systems
### Abstract
> Service discovery is essential in wireless communications. However, existing service discovery protocols provide no or very limited privacy protection for service providers and clients, and they often leak sensitive information (e.g., service type, client’s identity and mobility pattern), which leads to various network-based attacks (e.g., spoofing, man-in-the-middle, identification and tracking). In this paper, we propose a private service discovery protocol, called PriSrv, which allows a service provider and a client to respectively specify a fine-grained authentication policy that the other party must satisfy before a connection is established. PriSrv consists of a private service broadcast phase and an anonymous mutual authentication phase with bilateral control, where the private information of both parties is hidden beyond the fact that a mutual match to the respective authentication policy occurred. As a core component of PriSrv, we introduce the notion of anonymous credential-based matchmaking encryption (ACME), which exerts dual-layer matching in one step to simultaneously achieve bilateral flexible policy control, selective attribute disclosure and multi-show unlinkability. As a building block of ACME, we design a fast anonymous credential (FAC) scheme to provide constant size credentials and efficient show/verification mechanisms, which is suitable for privacy-enhanced and highly usable service discovery in wireless networks.
> 
> We present a concrete PriSrv protocol that is interoperable with popular wireless communication protocols, such as Wi-Fi Extensible Authentication Protocol (EAP), mDNS, BLE and Airdrop, to offer privacy-enhanced protection. We present formal security proof of our protocol and evaluate its performance on multiple hardware platforms: desktop, laptop, mobile phone and Raspberry Pi. PriSrv accomplishes private discovery and secure connection in less than 0.973 s on the first three platforms, and in less than 2.712 s on Raspberry Pi 4B. We also implement PriSrv into IEEE 802.1X in the real network to demonstrate its practicality.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/prisrv-privacy-enhanced-and-highly-usable-service-discovery-in-wireless-communications/](https://www.ndss-symposium.org/ndss-paper/prisrv-privacy-enhanced-and-highly-usable-service-discovery-in-wireless-communications/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-174-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-174-paper.pdf)
## Private Aggregate Queries to Untrusted Databases.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#private-aggregate-queries-to-untrusted-databases)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#private-aggregate-queries-to-untrusted-databases)
### Authors
* Syed Mahbub Hafiz, University of California
### Abstract
> An essential part of ensuring privacy for internet service users is to protect what data they access so that the database host cannot infer sensitive information (e.g., political affiliation, sexual orientation, etc.) from the query pattern to exploit it or share it with third parties. Often, database users submit aggregate queries (e.g., SUM, MEAN, etc.) with searching and filtering constraints to extract statistically meaningful information from a database by seeking the privacy of its query's sensitive values and database interactions. Private information retrieval (PIR), a privacy-preserving cryptographic tool, solves a simplified version of this problem by hiding the database item that a client accesses. Most PIR protocols require the client to know the exact row index of the intended database item, which cannot support the complicated aggregation-based statistical query in a similar setting. Some works in the PIR space contain keyword searching and SQL-like queries, but most need multiple interactions between the PIR client and PIR servers. Some schemes support searching SQL-like expressive queries in a single round but fail to enable aggregate queries. These schemes are the main focus of this paper. To bridge the gap, we have built a general-purpose novel information-theoretic PIR (IT-PIR) framework that permits a user to fetch the aggregated result, hiding all sensitive sections of the complex query from the hosting PIR server in a single round of interaction. In other words, the server will not know which records contribute to the aggregation. We then evaluate the feasibility of our protocol for both benchmarking and real-world application settings. For instance, in a complex aggregate query to the Twitter microblogging database of $1$ million tweets, our protocol takes $0.014$ seconds for a PIR server to generate the result when the user is interested in one of ~$3k$ user handles. In contrast, for a much-simplified task, not an aggregate but a positional query, Goldberg's regular IT-PIR (Oakland 2007) takes $1.13$ seconds. For all possible user handles, $300k$, it takes equal time compared to the regular IT-PIR. This example shows that complicated aggregate queries through our framework do not incur additional overhead if not less, compared to the conventional query.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/private-aggregate-queries-to-untrusted-databases/](https://www.ndss-symposium.org/ndss-paper/private-aggregate-queries-to-untrusted-databases/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-1211-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-1211-paper.pdf)
## Proof of Backhaul: Trustfree Measurement of Broadband Bandwidth.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#proof-of-backhaul-trustfree-measurement-of-broadband-bandwidth)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#proof-of-backhaul-trustfree-measurement-of-broadband-bandwidth)
### Authors
* Peiyao Sheng, Kaleidoscope Blockchain Inc.
* Nikita Yadav, Indian Institute of Science
* Vishal Sevani, Kaleidoscope Blockchain Inc.
* Arun Babu, Kaleidoscope Blockchain Inc.
* Anand Svr, Kaleidoscope Blockchain Inc.
* Himanshu Tyagi, Indian Institute of Science
* Pramod Viswanath, Kaleidoscope Blockchain Inc.
### Abstract
> Recent years have seen the emergence of decentralized wireless networks consisting of nodes hosted by many individuals and small enterprises, reawakening the decades-old dream of open networking. These networks have been deployed in an organic, distributed manner and are driven by new economic models resting on performance-based incentives. A critical requirement for the incentives to scale is the ability to prove network performance in a decentralized ``trustfree" manner, i.e., a Byzantine fault tolerant network telemetry system.
> 
> In this paper, we present a Proof of Backhaul (PoB) protocol which measures the bandwidth of the (broadband) backhaul link of a wireless access point, termed prover, in a decentralized and trustfree manner. In particular, our proposed protocol is the first to satisfy the following two properties: (1) Trustfree. Bandwidth measurement is secure against Byzantine attacks by collusion of challenge servers and the prover. (2) Open. The barrier-to-entry for being a challenge server is low; there is no requirement of having a low latency and high throughput path to the measured link. At a high-level, our protocol aggregates the challenge traffic from multiple challenge servers and uses cryptographic primitives to ensure that a subset of challengers or, even challengers and provers, cannot maliciously modify results in their favor. A formal security model allows us to establish guarantees of accurate bandwidth measurement as a function of the maximum fraction of malicious actors.
> 
> We implement our protocol with challengers spread across geographical locations and release the code~cite{multichallenger-pob}. Our evaluation shows that our PoB protocol can verify backhaul bandwidth of up to 1000 Mbps with less than 10% error using measurements lasting only 100 ms. The measurement accuracy is not affected in the presence of corrupted challengers. Importantly, the basic verification protocol lends itself to a minor modification that can measure available bandwidth even in the presence of cross-traffic.
> 
> Finally, the security guarantees of our PoB protocol output are naturally composable with ``commitments" on blockchain ledgers, which are commonly used for decentralized networks.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/proof-of-backhaul-trustfree-measurement-of-broadband-bandwidth/](https://www.ndss-symposium.org/ndss-paper/proof-of-backhaul-trustfree-measurement-of-broadband-bandwidth/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-764-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-764-paper.pdf)
## QUACK: Hindering Deserialization Attacks via Static Duck Typing.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#quack-hindering-deserialization-attacks-via-static-duck-typing)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#quack-hindering-deserialization-attacks-via-static-duck-typing)
### Authors
* Yaniv David, Columbia University
* Neophytos Christou, Brown University
* Andreas D. Kellas, Columbia University
* Vasileios P. Kemerlis, Brown University
* Junfeng Yang, Columbia University
### Abstract
> Managed languages facilitate convenient ways for serializing objects, allowing applications to persist and transfer them easily, yet this feature opens them up to attacks. By manipulating serialized objects, attackers can trigger a chained execution of existing code segments, using them as gadgets to form an exploit. Protecting deserialization calls against attacks is cumbersome and tedious, leading to many developers avoiding deploying defenses properly. We present QUACK, a framework for automatically protecting applications by fixing calls to deserialization APIs. This “binding” limits the classes allowed for usage in the deserialization process, severely limiting the code available for (ab)use as part of exploits. QUACK computes the set of classes that should be allowed using a novel static duck typing inference technique. In particular, it statically collects all statements in the program code that manipulate objects after they are deserialized, and puts together a filter for the list of classes that should be available at runtime. We have implemented QUACK for PHP and evaluated it on a set of applications with known CVEs, and popular applications crawled from GitHub. QUACK managed to fix the applications in a way that prevented any attempt at automatically generating an exploit against them, by blocking, on average, 97% of the application’s code that could be used as gadgets. We submitted a sample of three fixes generated by QUACK as pull requests, and their developers merged them.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/quack-hindering-deserialization-attacks-via-static-duck-typing/](https://www.ndss-symposium.org/ndss-paper/quack-hindering-deserialization-attacks-via-static-duck-typing/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-1015-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-1015-paper.pdf)
## REPLICAWATCHER: Training-less Anomaly Detection in Containerized Microservices.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#replicawatcher-training-less-anomaly-detection-in-containerized-microservices)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#replicawatcher-training-less-anomaly-detection-in-containerized-microservices)
### Authors
* Asbat El Khairi, University of Twente
* Marco Caselli, Siemens AG
* Andreas Peter, University of Oldenburg
* Andrea Continella, University of Twente
### Abstract
> Despite its detection capabilities against previously unseen threats, anomaly detection suffers from critical limitations, which often prevent its deployment in real-world settings. In fact, anomaly-based intrusion detection systems rely on comprehensive pre-established baselines for effectively identifying suspicious activities. Unfortunately, prior research showed that these baselines age and gradually lose their effectiveness over time, especially in dynamic deployments such as microservices-based environments, where the concept of “normality” is frequently redefined due to shifting operational conditions. This scenario reinforces the need for periodic retraining to uphold optimal performance — a process that proves challenging, particularly in the context of security applications.
> 
> We propose a novel, training-less approach to monitoring microservices-based environments. Our system, REPLICAWATCHER, observes the behavior of identical container instances (i.e., replicas) and detects anomalies without requiring prior training. Our key insight is that replicas, adopted for fault tolerance or scalability reasons, execute analogous tasks and exhibit similar behavioral patterns, which allow anomalous containers to stand out as a notable deviation from their corresponding replicas, thereby serving as a crucial indicator of security threats. The results of our experimental evaluation show that our approach is resilient against normality shifts and maintains its effectiveness without the necessity for retraining. Besides, despite not relying on a training phase, REPLICAWATCHER performs comparably to state-of-the-art, training-based solutions, achieving an average precision of 91.08% and recall of 98.35%.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/replicawatcher-training-less-anomaly-detection-in-containerized-microservices/](https://www.ndss-symposium.org/ndss-paper/replicawatcher-training-less-anomaly-detection-in-containerized-microservices/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-286-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-286-paper.pdf)
## ReqsMiner: Automated Discovery of CDN Forwarding Request Inconsistencies and DoS Attacks with Grammar-based Fuzzing.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#reqsminer-automated-discovery-of-cdn-forwarding-request-inconsistencies-and-dos-attacks-with-grammar-based-fuzzing)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#reqsminer-automated-discovery-of-cdn-forwarding-request-inconsistencies-and-dos-attacks-with-grammar-based-fuzzing)
### Authors
* Linkai Zheng, Tsinghua University
* Xiang Li, Tsinghua University
* Chuhan Wang, Tsinghua University
* Run Guo, Tsinghua University
* Haixin Duan, Tsinghua University; Quancheng Laboratory
* Jianjun Chen, Tsinghua University; Zhongguancun Laboratory
* Chao Zhang, Tsinghua University; Zhongguancun Laboratory
* Kaiwen Shen, Tsinghua University
### Abstract
> Content Delivery Networks (CDNs) are ubiquitous middleboxes designed to enhance the performance of hosted websites and shield them from various attacks. Numerous notable studies show that CDNs modify a client's request when forwarding it to the original server. Multiple inconsistencies in this forwarding operation have been found to potentially result in security vulnerabilities like DoS attacks. Nonetheless, existing research lacks a systematic approach to studying CDN forwarding request inconsistencies.
> 
> In this work, we present ReqsMiner, an innovative fuzzing framework developed to discover previously unexamined inconsistencies in CDN forwarding requests. The framework uses techniques derived from reinforcement learning to generate valid test cases, even with minimal feedback, and incorporates real field values into the grammar-based fuzzer. With the help of ReqsMiner, we comprehensively test 22 major CDN providers and uncover a wealth of hitherto unstudied CDN forwarding request inconsistencies. Moreover, the application of specialized analyzers enables ReqsMiner to extend its capabilities, evolving into a framework capable of detecting specific types of attacks. By extension, our work further identifies three novel types of HTTP amplification DoS attacks and uncovers 74 new potential DoS vulnerabilities with an amplification factor that can reach up to 2,000 generally, and even 1,920,000 under specific conditions. The vulnerabilities detected were responsibly disclosed to the affected CDN vendors, and mitigation suggestions were proposed. Our work contributes to fortifying CDN security, thereby enhancing their resilience against malicious attacks and preventing misuse.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/reqsminer-automated-discovery-of-cdn-forwarding-request-inconsistencies-and-dos-attacks-with-grammar-based-fuzzing/](https://www.ndss-symposium.org/ndss-paper/reqsminer-automated-discovery-of-cdn-forwarding-request-inconsistencies-and-dos-attacks-with-grammar-based-fuzzing/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-31-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-31-paper.pdf)
## Scrappy: SeCure Rate Assuring Protocol with PrivacY.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#scrappy-secure-rate-assuring-protocol-with-privacy)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#scrappy-secure-rate-assuring-protocol-with-privacy)
### Authors
* Kosei Akama, Keio University
* Yoshimichi Nakatsuka, ETH Zurich
* Masaaki Sato, Tokai University
* Keisuke Uehara, Keio University
### Abstract
> Preventing abusive activities caused by adversaries accessing online services at a rate exceeding that expected by websites has become an ever-increasing problem. CAPTCHAs and SMS authentication are widely used to provide a solution by implementing rate limiting, although they are becoming less effective, and some are considered privacy-invasive. In light of this, many studies have proposed better rate-limiting systems that protect the privacy of legitimate users while blocking malicious actors. However, they suffer from one or more shortcomings: (1) assume trust in the underlying hardware and (2) are vulnerable to side-channel attacks. Motivated by the aforementioned issues, this paper proposes Scrappy: SeCure Rate Assuring Protocol with PrivacY. Scrappy allows clients to generate unforgeable yet unlinkable rate-assuring proofs, which provides the server with cryptographic guarantees that the client is not misbehaving. We design Scrappy using a combination of DAA and hardware security devices. Scrappy is implemented over three types of devices, including one that can immediately be deployed in the real world. Our baseline evaluation shows that the end-to-end latency of Scrappy is minimal, taking only 0.32 seconds, and uses only 679 bytes of bandwidth when transferring necessary data. We also conduct an extensive security evaluation, showing that the rate-limiting capability of Scrappy is unaffected even if the hardware security device is compromised.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/scrappy-secure-rate-assuring-protocol-with-privacy/](https://www.ndss-symposium.org/ndss-paper/scrappy-secure-rate-assuring-protocol-with-privacy/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-445-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-445-paper.pdf)
## Secret-Shared Shuffle with Malicious Security.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#secret-shared-shuffle-with-malicious-security)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#secret-shared-shuffle-with-malicious-security)
### Authors
* Xiangfu Song, National University of Singapore
* Dong Yin, Ant Group
* Jianli Bai, The University of Auckland
* Changyu Dong, Guangzhou University
* Ee-Chien Chang, National University of Singapore
### Abstract
> A secret-shared shuffle (SSS) protocol permutes a secret-shared vector using a random secret permutation. It has found numerous applications, however, it is also an expensive operation and often a performance bottleneck. Chase et al. (Asiacrypt'20) recently proposed a highly efficient semi-honest two-party SSS protocol known as the CGP protocol. It utilizes purposely designed pseudorandom correlations that facilitate a communication-efficient online shuffle phase. That said, semi-honest security is insufficient in many real-world application scenarios since shuffle is usually used for highly sensitive applications. Considering this, recent works (CANS'21, NDSS'22) attempted to enhance the CGP protocol with malicious security over authenticated secret sharings. However, we find that these attempts are flawed, and malicious adversaries can still learn private information via malicious deviations. This is demonstrated with concrete attacks proposed in this paper. Then the question is how to fill the gap and design a maliciously secure CGP shuffle protocol. We answer this question by introducing a set of lightweight correlation checks and a leakage reduction mechanism. Then we apply our techniques with authenticated secret sharings to achieve malicious security. Notably, our protocol, while increasing security, is also efficient. In the two-party setting, experiment results show that our maliciously secure protocol introduces an acceptable overhead compared to its semi-honest version and is more efficient than the state-of-the-art maliciously secure SSS protocol from the MP-SPDZ library.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/secret-shared-shuffle-with-malicious-security/](https://www.ndss-symposium.org/ndss-paper/secret-shared-shuffle-with-malicious-security/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-21-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-21-paper.pdf)
## Secure Multiparty Computation of Threshold Signatures Made More Efficient.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#secure-multiparty-computation-of-threshold-signatures-made-more-efficient)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#secure-multiparty-computation-of-threshold-signatures-made-more-efficient)
### Authors
* Harry W. H. Wong, The Chinese University of Hong Kong
* Jack P. K. Ma, The Chinese University of Hong Kong
* Sherman S. M. Chow, The Chinese University of Hong Kong
### Abstract
> Threshold signatures, notably ECDSA, are fundamental for securing decentralized applications. Their non-linear structure poses challenges in distributed signing, often tackled by pairwise multiplicative-to-additive share conversion, leading to O(n) communication and O(n2) verification costs for each of n signers. Moreover, most schemes lack robustness, necessitating a complete restart upon fault. A pioneering work by Wong et al. (NDSS '23) still requires rolling back to the preceding round to resume signing after another round to convince all other signers.
> 
> We revisit secure multiparty computation from threshold linearly homomorphic encryption (LHE). Realizing its public verifiability and fault recovery, we encompass two technical contributions to Castagnos–Laguillaumie LHE (CT-RSA '15): a 2-round robust distributed key generation (DKG) protocol in the dishonest majority setting and an accompanying zero-knowledge proof allowing extraction in an unknown-order group. We extend the DKG with dual-code-based verification (ACNS '17), upgrading its O(tn2)-cost private verifiability to an O(n2) public one.
> 
> Built on our DKG, we present the first threshold ECDSA protocol with O(1) communication and O(n) verification per-party costs while matching the lowest round complexity of nonrobust schemes (CCS '20). Empirically, we halve the computation and communication costs of the signing phase compared to state-of-the-art robust threshold ECDSA (NDSS '23). We also illustrate the versatility of our techniques with an improved threshold extension (IEEE S&P '23) of BBS+ signatures (IEEE Syst. J. '13).

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/secure-multiparty-computation-of-threshold-signatures-made-more-efficient/](https://www.ndss-symposium.org/ndss-paper/secure-multiparty-computation-of-threshold-signatures-made-more-efficient/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-601-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-601-paper.pdf)
## Security-Performance Tradeoff in DAG-based Proof-of-Work Blockchain Protocols.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#security-performance-tradeoff-in-dag-based-proof-of-work-blockchain-protocols)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#security-performance-tradeoff-in-dag-based-proof-of-work-blockchain-protocols)
### Authors
* Shichen Wu, 1. School of Cyber Science and Technology
### Abstract
> Proof-of-work (PoW) blockchain protocols based on directed acyclic graphs (DAGs) have demonstrated superior transaction confirmation performance compared to their chain-based predecessors. However, it is uncertain whether their security deteriorates in high-throughput settings similar to their predecessors, because their acceptance of simultaneous blocks and complex block dependencies presents challenges for rigorous security analysis.
> 
> We address these challenges by analyzing DAG-based protocols via a congestible blockchain model (CBM), a general model that allows case-by-case upper bounds on the block propagation delay, rather than a uniform upper bound as in most previous analyses. CBM allows us to capture two key phenomena of high-throughput settings: (1) simultaneous blocks increase each other's propagation delay, and (2) a block can be processed only after receiving all the blocks it refers to. We further devise a reasonable adversarial block propagation strategy in CBM, called the late-predecessor attack, which exploits block dependencies to delay the processing of honest blocks. We then evaluate the security and performance of Prism and OHIE, two DAG-based protocols that aim to break the security-performance tradeoff, in the presence of an attacker capable of launching the late predecessor attack. Our results show that these protocols suffer from reduced security and extended latency in high-throughput settings similar to their chain-based predecessors.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/security-performance-tradeoff-in-dag-based-proof-of-work-blockchain-protocols/](https://www.ndss-symposium.org/ndss-paper/security-performance-tradeoff-in-dag-based-proof-of-work-blockchain-protocols/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-685-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-685-paper.pdf)
## SENSE: Enhancing Microarchitectural Awareness for TEEs via Subscription-Based Notification.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#sense-enhancing-microarchitectural-awareness-for-tees-via-subscription-based-notification)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#sense-enhancing-microarchitectural-awareness-for-tees-via-subscription-based-notification)
### Authors
* Fan Sang, Georgia Institute of Technology
* Jaehyuk Lee, Georgia Institute of Technology
* Xiaokuan Zhang, George Mason University
* Meng Xu, University of Waterloo
* Scott Constable, Intel
* Yuan Xiao, Intel
* Michael Steiner, Intel
* Mona Vij, Intel
* Taesoo Kim, Georgia Institute of Technology
### Abstract
> Effectively mitigating side-channel attacks (SCAs) in Trusted Execution Environments (TEEs) remains challenging despite advances in existing defenses. Current detection-based defenses hinge on observing abnormal victim performance characteristics but struggle to detect attacks leaking smaller portions of the secret across multiple executions. Limitations of existing detection-based defenses stem from various factors, including the absence of a trusted microarchitectural data source in TEEs, low-quality available data, inflexibility of victim responses, and platform-specific constraints. We contend that the primary obstacles to effective detection techniques can be attributed to the lack of direct access to precise microarchitectural information within TEEs.
> 
> We propose SENSE, a solution that actively exposes underlying microarchitectural information to userspace TEEs. SENSE enables userspace software in TEEs to subscribe to fine-grained microarchitectural events and utilize the events as a means to contextualize the ongoing microarchitectural states. We initially demonstrate SENSE’s capability by applying it to defeat the state-of-the-art cache-based side-channel attacks. We conduct a comprehensive security analysis to ensure that SENSE does not leak more information than a system without it does. We prototype SENSE on a gem5-based emulator, and our evaluation shows that SENSE is secure, can effectively defeats cache SCAs, and incurs negligible performance overhead (1.2%) under benign situations.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/sense-enhancing-microarchitectural-awareness-for-tees-via-subscription-based-notification/](https://www.ndss-symposium.org/ndss-paper/sense-enhancing-microarchitectural-awareness-for-tees-via-subscription-based-notification/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-176-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-176-paper.pdf)
## Separation is Good: A Faster Order-Fairness Byzantine Consensus.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#separation-is-good-a-faster-order-fairness-byzantine-consensus)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#separation-is-good-a-faster-order-fairness-byzantine-consensus)
### Authors
* Ke Mu, Southern University of Science and Technology
### Abstract
> Order-fairness has been introduced recently as a new property for Byzantine Fault-Tolerant (BFT) consensus protocol to prevent unilaterally deciding the final order of transactions, which allows mitigating the threat of adversarial transaction order manipulation attacks (e.g., front-running) in blockchain networks and decentralized finance (DeFi). However, existing leader-based order-fairness protocols (which do not rely on synchronized clocks) still suffer from poor performance since they strongly couple fair ordering with consensus processes. In this paper, we propose SpeedyFair, a high-performance order-fairness consensus protocol, which is motivated by our insight that the ordering of transactions does not rely on the execution results of transactions in previous proposals (after consensus). SpeedyFair achieves its efficiency through a decoupled design that performs fair ordering individually and consecutively, separating from consensus. In addition, by decoupling fair ordering from consensus, SpeedyFair enables parallelizing the order/verify mode that was originally executed serially in the consensus process, which further speeds up the performance. We implement a prototype of SpeedyFair on the top of the Hotstuff protocol. Extensive experimental results demonstrate that SpeedyFair significantly outperforms the state-of-the-art order-fairness protocol (i.e., Themis), which achieves a throughput of 1.5×-2.45× greater than Themis while reducing latency by 35%-59%.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/separation-is-good-a-faster-order-fairness-byzantine-consensus/](https://www.ndss-symposium.org/ndss-paper/separation-is-good-a-faster-order-fairness-byzantine-consensus/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-693-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-693-paper.pdf)
## Sharing cyber threat intelligence: Does it really help?
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#sharing-cyber-threat-intelligence-does-it-really-help)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#sharing-cyber-threat-intelligence-does-it-really-help)
### Authors
* Beomjin Jin, Sungkyunkwan University
* Eunsoo Kim, Sungkyunkwan University
* Hyunwoo Lee, KENTECH
* Elisa Bertino, Purdue University
* Doowon Kim, University of Tennessee
### Abstract
> The sharing of Cyber Threat Intelligence (CTI) across organizations is gaining traction, as it can automate threat analysis and improve security awareness. However, limited empirical studies exist on the prevalent types of cybersecurity threat data and their effectiveness in mitigating cyber attacks. We propose a framework named CTI-Lense to collect and analyze the volume, timeliness, coverage, and quality of Structured Threat Information eXpression (STIX) data, a de facto standard CTI format, from a list of publicly available CTI sources. We collected about 6 million STIX data objects from October 31, 2014 to April 10, 2023 from ten data sources and analyzed their characteristics. Our analysis reveals that STIX data sharing has steadily increased in recent years, but the volume of STIX data shared is still relatively low to cover all cyber threats. Additionally, only a few types of threat data objects have been shared, with malware signatures and URLs accounting for more than 90% of the collected data. While URLs are usually shared promptly, with about 72% of URLs shared earlier than or on the same day as VirusTotal, the sharing of malware signatures is significantly slower. Furthermore, we found that 19% of the Threat actor data contained incorrect information, and only 0.09% of the Indicator data provided security rules to detect cyber attacks. Based on our findings, we recommend practical considerations for effective and scalable STIX data sharing among organizations.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/sharing-cyber-threat-intelligence-does-it-really-help/](https://www.ndss-symposium.org/ndss-paper/sharing-cyber-threat-intelligence-does-it-really-help/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-228-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-228-paper.pdf)
## SLMIA-SR: Speaker-Level Membership Inference Attacks against Speaker Recognition Systems.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#slmia-sr-speaker-level-membership-inference-attacks-against-speaker-recognition-systems)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#slmia-sr-speaker-level-membership-inference-attacks-against-speaker-recognition-systems)
### Authors
* Guangke Chen, ShanghaiTech University
* Yedi Zhang, National University of Singapore
* Fu Song, Institute of Software
### Abstract
> Membership inference attacks allow adversaries to determine whether a particular example was contained in the model's training dataset. While previous works have confirmed the feasibility of such attacks in various applications, none has focused on speaker recognition (SR), a promising voice-based biometric recognition technique. In this work, we propose SLMIA-SR, the first membership inference attack tailored to SR. In contrast to conventional example-level attack, our attack features speaker-level membership inference, i.e., determining if any voices of a given speaker, either the same as or different from the given inference voices, have been involved in the training of a model. It is particularly useful and practical since the training and inference voices are usually distinct, and it is also meaningful considering the open-set nature of SR, namely, the recognition speakers were often not present in the training data. We utilize intra-similarity and inter-dissimilarity, two training objectives of SR, to characterize the differences between training and non-training speakers and quantify them with two groups of features driven by carefully-established feature engineering to mount the attack. To improve the generalizability of our attack, we propose a novel mixing ratio training strategy to train attack models. To enhance the attack performance, we introduce voice chunk splitting to cope with the limited number of inference voices and propose to train attack models dependent on the number of inference voices. Our attack is versatile and can work in both white-box and black-box scenarios. Additionally, we propose two novel techniques to reduce the number of black-box queries while maintaining the attack performance. Extensive experiments demonstrate the effectiveness of SLMIA-SR.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/slmia-sr-speaker-level-membership-inference-attacks-against-speaker-recognition-systems/](https://www.ndss-symposium.org/ndss-paper/slmia-sr-speaker-level-membership-inference-attacks-against-speaker-recognition-systems/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-1323-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-1323-paper.pdf)
## Sneaky Spikes: Uncovering Stealthy Backdoor Attacks in Spiking Neural Networks with Neuromorphic Data.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#sneaky-spikes-uncovering-stealthy-backdoor-attacks-in-spiking-neural-networks-with-neuromorphic-data)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#sneaky-spikes-uncovering-stealthy-backdoor-attacks-in-spiking-neural-networks-with-neuromorphic-data)
### Authors
* Gorka Abad, Radboud University & Ikerlan Technology Research Centre
* Oguzhan Ersoy, Radboud University
* Stjepan Picek, Radboud University & Delft University of Technology
* Aitor Urbieta, Ikerlan Technology Research Centre
* Basque Research and Technology Alliance, BRTA
### Abstract
> Deep neural networks (DNNs) have demonstrated remarkable performance across various tasks, including image and speech recognition. However, maximizing the effectiveness of DNNs requires meticulous optimization of numerous hyperparameters and network parameters through training. Moreover, high-performance DNNs entail many parameters, which consume significant energy during training. To overcome these challenges, researchers have turned to spiking neural networks (SNNs), which offer enhanced energy efficiency and biologically plausible data processing capabilities, rendering them highly suitable for sensory data tasks, particularly in neuromorphic data. Despite their advantages, SNNs, like DNNs, are susceptible to various threats, including adversarial examples and backdoor attacks. Yet, the field of SNNs still needs to be explored in terms of understanding and countering these attacks.
> 
> This paper delves into backdoor attacks in SNNs using neuromorphic datasets and diverse triggers. Specifically, we explore backdoor triggers within neuromorphic data that can manipulate their position and color, providing a broader scope of possibilities than conventional triggers in domains like images. We present various attack strategies, achieving an attack success rate of up to 100% while maintaining a negligible impact on clean accuracy. Furthermore, we assess these attacks' stealthiness, revealing that our most potent attacks possess significant stealth capabilities.
> 
> Lastly, we adapt several state-of-the-art defenses from the image domain, evaluating their efficacy on neuromorphic data and uncovering instances where they fall short, leading to compromised performance.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/sneaky-spikes-uncovering-stealthy-backdoor-attacks-in-spiking-neural-networks-with-neuromorphic-data/](https://www.ndss-symposium.org/ndss-paper/sneaky-spikes-uncovering-stealthy-backdoor-attacks-in-spiking-neural-networks-with-neuromorphic-data/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-334-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-334-paper.pdf)
## SSL-WM: A Black-Box Watermarking Approach for Encoders Pre-trained by Self-Supervised Learning.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#ssl-wm-a-black-box-watermarking-approach-for-encoders-pre-trained-by-self-supervised-learning)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#ssl-wm-a-black-box-watermarking-approach-for-encoders-pre-trained-by-self-supervised-learning)
### Authors
* Peizhuo Lv, Institute of Information Engineering
### Abstract
> Recent years have witnessed tremendous success in Self-Supervised Learning (SSL), which has been widely utilized to facilitate various downstream tasks in Computer Vision (CV) and Natural Language Processing (NLP) domains. However, attackers may steal such SSL models and commercialize them for profit, making it crucial to verify the ownership of the SSL models. Most existing ownership protection solutions (e.g., backdoor-based watermarks) are designed for supervised learning models and cannot be used directly since they require that the models' downstream tasks and target labels be known and available during watermark embedding, which is not always possible in the domain of SSL. To address such a problem, especially when downstream tasks are diverse and unknown during watermark embedding, we propose a novel black-box watermarking solution, named SSL-WM, for verifying the ownership of SSL models. SSL-WM maps watermarked inputs of the protected encoders into an invariant representation space, which causes any downstream classifier to produce expected behavior, thus allowing the detection of embedded watermarks. We evaluate SSL-WM on numerous tasks, such as CV and NLP, using different SSL models both contrastive-based and generative-based. Experimental results demonstrate that SSL-WM can effectively verify the ownership of stolen SSL models in various downstream tasks. Furthermore, SSL-WM is robust against model fine-tuning, pruning, and input preprocessing attacks. Lastly, SSL-WM can also evade detection from evaluated watermark detection approaches, demonstrating its promising application in protecting the ownership of SSL models.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/ssl-wm-a-black-box-watermarking-approach-for-encoders-pre-trained-by-self-supervised-learning/](https://www.ndss-symposium.org/ndss-paper/ssl-wm-a-black-box-watermarking-approach-for-encoders-pre-trained-by-self-supervised-learning/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-374-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-374-paper.pdf)
## SyzBridge: Bridging the Gap in Exploitability Assessment of Linux Kernel Bugs in the Linux Ecosystem.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#syzbridge-bridging-the-gap-in-exploitability-assessment-of-linux-kernel-bugs-in-the-linux-ecosystem)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#syzbridge-bridging-the-gap-in-exploitability-assessment-of-linux-kernel-bugs-in-the-linux-ecosystem)
### Authors
* Xiaochen Zou, UC Riverside
* Yu Hao, UC Riverside
* Zheng Zhang, UC RIverside
* Juefei Pu, UC RIverside
* Weiteng Chen, Microsoft Research
### Abstract
> Continuous fuzzing has become an integral part of the Linux kernel ecosystem, discovering thousands of bugs over the past few years. Interestingly, only a tiny fraction of them were turned into real-world exploits that target downstream distributions, e.g., Ubuntu and Fedora. This contradicts the conclusions of existing exploitability assessment tools, which classify hundreds of those bugs as high-risk, implying a high likelihood of exploitability.
> 
> Our study aims to understand the gap and bridge it. Through our investigation, we realize that the current exploitability assessment tools exclusively test bug exploitability on the upstream Linux, which is for development only; in fact, we find many of them fail to reproduce directly in downstreams. Through a large-scale measurement study of 230 bugs on 43 distros (8,032 bug/distro pairs), we find that each distro only reproduces 19.1% of bugs on average by running the upstream PoCs as root user, and 0.9% without root. Remarkably, both numbers can be significantly improved by 61% and 1300% times respectively through appropriate PoC adaptations, necessitated by environment differences.
> 
> To this end, we developed SyzBridge, a fully automated system that adapts upstream PoCs to downstream kernels. We further integrate SyzBridge with SyzScope, a state-of-the-art exploitability assessment tool that can identify high-risk exploit primitives, e.g., control flow hijack. Our integrated pipeline successfully identified 53 bugs originated from syzbot that are likely exploitable on downstream distributions, surpassing the mere 5 bugs that were turned into real-world exploits among 5,000 upstream bugs from syzbot. Notably, to validate the results, we successfully exploited 5 additional bugs that were previously not known to be exploitable publicly.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/syzbridge-bridging-the-gap-in-exploitability-assessment-of-linux-kernel-bugs-in-the-linux-ecosystem/](https://www.ndss-symposium.org/ndss-paper/syzbridge-bridging-the-gap-in-exploitability-assessment-of-linux-kernel-bugs-in-the-linux-ecosystem/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-926-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-926-paper.pdf)
## TALISMAN: Tamper Analysis for Reference Monitors.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#talisman-tamper-analysis-for-reference-monitors)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#talisman-tamper-analysis-for-reference-monitors)
### Authors
* Frank Capobianco, The Pennsylvania State University
* Quan Zhou, The Pennsylvania State University
* Aditya Basu, The Pennsylvania State University
* Trent Jaeger, The Pennsylvania State University
### Abstract
> Correct access control enforcement is a critical foundation for data security. The reference monitor is the key component for enforcing access control, which is supposed to provide tamperproof mediation of all security-sensitive operations. Since reference monitors are often deployed in complex software handling a wide variety of operation requests, such as operating systems and server programs, a question is whether reference monitor implementations may have flaws that prevent them from achieving these requirements. In the past, automated analyses detected flaws in complete mediation. However, researchers have not yet developed methods to detect flaws that may tamper with the reference monitor, despite the many vulnerabilities found in such programs. In this paper, we develop TALISMAN, an automated analysis for detecting flaws that may tamper the execution of reference monitor implementations. At its core, TALISMAN implements a precise information flow integrity analysis to detect violations that may tamper the construction of authorization queries. TALISMAN applies a new, relaxed variant of noninterference that eliminates several spurious implicit flow violations. TALISMAN also provides a means to vet expected uses of untrusted data in authorization using endorsement. We apply TALISMAN on three reference monitor implementations used in the Linux Security Modules framework, SELinux, AppArmor, and Tomoyo, verifying 80% of the arguments in authorization queries generated by these LSMs. Using TALISMAN, we also found vulnerabilities in how pathnames are used in authorization by Tomoyo and AppArmor allowing adversaries to circumvent authorization. TALISMAN shows that tamper analysis of reference monitor implementations can automatically verify many cases and also enable the detection of critical flaws.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/talisman-tamper-analysis-for-reference-monitors/](https://www.ndss-symposium.org/ndss-paper/talisman-tamper-analysis-for-reference-monitors/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-1031-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-1031-paper.pdf)
## TEE-SHirT: Scalable Leakage-Free Cache Hierarchies for TEEs.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#tee-shirt-scalable-leakage-free-cache-hierarchies-for-tees)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#tee-shirt-scalable-leakage-free-cache-hierarchies-for-tees)
### Authors
* Kerem Arikan, Binghamton University
* Abraham Farrell, Binghamton University
* Williams Zhang Cen, Binghamton University
* Jack McMahon, Binghamton University
* Barry Williams, Binghamton University
* Yu David Liu, Binghamton University
* Nael Abu-Ghazaleh, University of California
### Abstract
> Protection of cache hierarchies from side-channel attacks is critical for building secure systems, particularly the ones using Trusted Execution Environments (TEEs). In this paper, we consider the problem of efficient and secure fine-grained partitioning of cache hierarchies and propose a framework, called Secure Hierarchies for TEEs (TEE-SHirT). In the context of a three-level cache system, TEE-SHirT consists of partitioned shared last-level cache, partitioned private L2 caches, and non-partitioned L1 caches that are flushed on context switches and system calls. Efficient and correct partitioning requires careful design. Towards this goal, TEE-SHirT makes three contributions: 1) we demonstrate how the hardware structures used for holding cache partitioning metadata can be effectively virtualized to avoid flushing of cache partition content on context switches and system calls; 2) we show how to support multi-threaded enclaves in TEE-SHirT, addressing the issues of coherency and consistency that arise with both intra-core and inter-core data sharing; 3) we develop a formal security model for TEE-SHirT to rigorously reason about the security of our design.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/tee-shirt-scalable-leakage-free-cache-hierarchies-for-tees/](https://www.ndss-symposium.org/ndss-paper/tee-shirt-scalable-leakage-free-cache-hierarchies-for-tees/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-390-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-390-paper.pdf)
## TextGuard: Provable Defense against Backdoor Attacks on Text Classification.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#textguard-provable-defense-against-backdoor-attacks-on-text-classification)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#textguard-provable-defense-against-backdoor-attacks-on-text-classification)
### Authors
* Hengzhi Pei, UIUC
* Jinyuan Jia, UIUC
### Abstract
> Backdoor attacks have become a major security threat for deploying machine learning models in security-critical applications. Existing research endeavors have proposed many defenses against backdoor attacks. Despite demonstrating certain empirical defense efficacy, none of these techniques could provide a formal and provable security guarantee against arbitrary attacks. As a result, they can be easily broken by strong adaptive attacks, as shown in our evaluation. In this work, we propose TextGuard, the first provable defense against backdoor attacks on text classification. In particular, TextGuard first divides the (backdoored) training data into sub-training sets, achieved by splitting each training sentence into sub-sentences. This partitioning ensures that a majority of the sub-training sets do not contain the backdoor trigger. Subsequently, a base classifier is trained from each sub-training set, and their ensemble provides the final prediction. We theoretically prove that when the length of the backdoor trigger falls within a certain threshold, TextGuard guarantees that its prediction will remain unaffected by the presence of the triggers in training and testing inputs. In our evaluation, we demonstrate the effectiveness of TextGuard on three benchmark text classification tasks, surpassing the certification accuracy of existing certified defenses against backdoor attacks. Furthermore, we propose additional strategies to enhance the empirical performance of TextGuard. Comparisons with state-of-the-art empirical defenses validate the superiority of TextGuard in countering multiple backdoor attacks. Our code and data are available at https://github.com/AI-secure/TextGuard.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/textguard-provable-defense-against-backdoor-attacks-on-text-classification/](https://www.ndss-symposium.org/ndss-paper/textguard-provable-defense-against-backdoor-attacks-on-text-classification/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-90-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-90-paper.pdf)
## The CURE to Vulnerabilities in RPKI Validation.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#the-cure-to-vulnerabilities-in-rpki-validation)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#the-cure-to-vulnerabilities-in-rpki-validation)
### Authors
* Donika Mirdita, Technische Universität Darmstadt
* Haya Schulmann, Goethe-Universität Frankfurt
* Niklas Vogel, Goethe-Universität Frankfurt
* Michael Waidner, Technische Universität Darmstadt
### Abstract
> Over recent years, the Resource Public Key Infrastructure (RPKI) has seen increasing adoption, with now 37.8% of the major networks filtering bogus BGP routes. Systems interact with the RPKI over Relying Party (RP) implementations that fetch RPKI objects and feed BGP routers with the validated prefix-ownership data. Consequently, any vulnerabilities or flaws within the RP software can substantially threaten the stability and security of Internet routing.
> 
> We uncover severe flaws in all popular RP implementations, making them susceptible to path traversal attacks, remotely triggered crashes, and inherent inconsistencies, violating RPKI standards. We report a total of 18 vulnerabilities that can be exploited to downgrade RPKI validation in border routers or, worse, enable poisoning of the validation process, resulting in malicious prefixes being wrongfully validated and legitimate RPKI-covered prefixes failing validation. Furthermore, our research discloses inconsistencies in the validation process, with two popular implementations leaving 8149 prefixes unprotected from hijacks, 6405 of which belong to Amazon.
> 
> While these findings are significant in their own right, our principal contribution lies in developing CURE, the first-of-its-kind system to systematically detect bugs, vulnerabilities, and RFC compliance issues in RP implementations via automated test generation. The statefulness of RPKI, the lack of rigorous RPKI specifications for recognizing bugs in the object suite, the complexity and diversity of RP implementations, and the inaccessibility of their critical functionalities render this a highly challenging research task. CURE is a powerful RPKI publication point emulator that enables easy and efficient fuzzing of complex RP validation pipelines. It is designed with a set of novel tech- niques, utilizing differential and stateful fuzzing. We generated over 600 million test cases and tested all popular RPs on them.
> 
> Following our disclosure, the vendors already assigned CVEs to the vulnerabilities we found. We are releasing our fuzzing system along with the CURE tool to enable the vendors improve the quality of RP implementations

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/the-cure-to-vulnerabilities-in-rpki-validation/](https://www.ndss-symposium.org/ndss-paper/the-cure-to-vulnerabilities-in-rpki-validation/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-1093-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-1093-paper.pdf)
## Timing Channels in Adaptive Neural Networks.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#timing-channels-in-adaptive-neural-networks)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#timing-channels-in-adaptive-neural-networks)
### Authors
* Ayomide Akinsanya, Stevens Institute of Technology
* Tegan Brennan, Stevens Institute of Technology
### Abstract
> Current machine learning systems offer great predictive power but also require significant computational resources. As a result, the promise of a class of optimized machine learning models, called adaptive neural networks (ADNNs), has seen recent wide appeal. These models make dynamic decisions about the amount of computation to perform based on the given input, allowing for fast predictions on ”easy” input. While various considerations of ADNNs have been extensively researched, how these input-dependent optimizations might introduce vulnerabilities has been hitherto under-explored. Our work is the first to demonstrate and evaluate timing channels due to the optimizations of ADNNs with the capacity to leak sensitive attributes about a user’s input. We empirically study six ADNNs types and demonstrate how an attacker can significantly improve their ability to infer sensitive attributes, such as class label, of another user’s input from an observed timing measurement. Our results show that timing information can increase an attacker’s probability of correctly inferring the attribute of the user’s input by up to a factor of 9.89x. Our empirical evaluation uses four different datasets, including those containing sensitive medical and demographic information, and considers leakage across a variety of sensitive attributes of the user's input. We conclude by demonstrating how timing channels can be exploited across the public internet in two fictitious web applications — Fictitious Health Company and Fictitious HR — that makes use of ADNNs for serving predictions to their clients.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/timing-channels-in-adaptive-neural-networks/](https://www.ndss-symposium.org/ndss-paper/timing-channels-in-adaptive-neural-networks/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-125-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-125-paper.pdf)
## Towards Automated Regulation Analysis for Effective Privacy Compliance.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#towards-automated-regulation-analysis-for-effective-privacy-compliance)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#towards-automated-regulation-analysis-for-effective-privacy-compliance)
### Authors
* Sunil Manandhar, IBM T.J. Watson Research Center
* Kapil Singh, IBM T.J. Watson Research Center
* Adwait Nadkarni, William & Mary
### Abstract
> Privacy regulations are being introduced and amended around the globe to effectively regulate the processing of consumer data. These regulations are often analyzed to fulfill compliance mandates and to aid the design of practical systems that improve consumer privacy. However, at present, this is done manually, making the task error-prone, while also incurring significant time, effort, and cost for companies. This paper describes the design and implementation of ARC, a framework that transforms unstructured and complex regulatory text into a structured representation, the ARC tuple(s), which can be queried to assist in the analysis and understanding of regulations. We demonstrate ARC’s effectiveness in extracting three forms of tuples with a high F-1 score (avg. 82.1% across all three) using four major privacy regulations: CCPA, GDPR, VCDPA, and PIPEDA. We then build ARCBert that identifies semantically similar phrases across regulations, enabling compliance analysts to identify common requirements. We run ARC on 16 additional privacy regulations and identify 1,556 ARC tuples and clusters of semantically similar phrases. Finally, we extend ARC to evaluate the compliance of privacy policies by comparing it against the disclosure requirements in the four regulations. Our empirical evaluation with the privacy policies of S&P 500 companies finds 476 missing disclosures, which when manually validated, result in 71.05% true positives, as well as the discovery of 288 additional missing disclosures from the partial matches identified by ARC.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/towards-automated-regulation-analysis-for-effective-privacy-compliance/](https://www.ndss-symposium.org/ndss-paper/towards-automated-regulation-analysis-for-effective-privacy-compliance/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-650-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-650-paper.pdf)
## Towards Precise Reporting of Cryptographic Misuses.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#towards-precise-reporting-of-cryptographic-misuses)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#towards-precise-reporting-of-cryptographic-misuses)
### Authors
* Yikang Chen, The Chinese University of Hong Kong
* Yibo Liu, Arizona State University
* Ka Lok Wu, The Chinese University of Hong Kong
* Duc V Le, Visa Research
* Sze Yiu Chau, The Chinese University of Hong Kong
### Abstract
> In the last decade, a series of papers were published on using static analysis to detect cryptographic API misuse. In each paper, apps are checked against a set of rules to see if violations exist. A common theme among these papers is that rule violations are plentiful, often at the scale of thousands. Interestingly, while much effort went into tackling false negatives, curiously, not much has been said on (1) whether the misuse alarms are indeed correct and meaningful, and (2) what can future work improve upon apart from finding more misuses.
> 
> In this paper, we take a deep dive into the rule violations reported by various academic papers as well as the rules, models and implementations of their detectors, in an attempt to (1) explain the gap between their misuse alarms and actual vulnerabilities, and (2) shed light on possible directions for improving the precision and usability of misuse detectors. Results of our analysis suggest that the small-scale inspections done by previous work had some unfortunate blind-spots, leaving problems in their rules, models, and implementations unnoticed, which in turn led to unnecessary overestimation of misuses (and vulnerabilities). To facilitate future research on the topic, we distill these avoidable false alarms into high-level patterns that capture their root causes, and discuss design, evaluation and reporting strategies that can improve the precision of misuse findings. Furthermore, to demonstrate the generalizability of these false alarm patterns and improvement directions, we also investigate a popular industry detector and a dynamic detector, and discuss how some of the false alarm patterns do and do not apply to them. Our findings suggest that the problem of precisely reporting cryptographic misuses still has much room for future work to improve upon.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/towards-precise-reporting-of-cryptographic-misuses/](https://www.ndss-symposium.org/ndss-paper/towards-precise-reporting-of-cryptographic-misuses/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-1032-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-1032-paper.pdf)
## Understanding Route Origin Validation (ROV) Deployment in the Real World and Why MANRS Action 1 Is Not Followed.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#understanding-route-origin-validation-rov-deployment-in-the-real-world-and-why-manrs-action-1-is-not-followed)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#understanding-route-origin-validation-rov-deployment-in-the-real-world-and-why-manrs-action-1-is-not-followed)
### Authors
* Lancheng Qin, Tsinghua University
### Abstract
> BGP hijacking is one of the most important threats to routing security. To improve the reliability and availability of inter-domain routing, a lot of work has been done to defend against BGP hijacking, and Route Origin Validation (ROV) has become the best current practice. However, although the Mutually Agreed Norms for Routing Security (MANRS) has been encouraging network operators to at least validate announcements of their customers, recent research indicates that a large number of networks still do not fully deploy ROV or propagate illegitimate announcements of their customers. To understand ROV deployment in the real world and why network operators are not following the action proposed by MANRS, we make a long-term measurement for ROV deployment and further find that many non-compliant networks may deploy ROV only at part of customer interfaces, or at provider or peer interfaces. Then, we present the first notification experiment to investigate the impact of notifications on ROV remediation. However, our analysis indicates that none of the notification treatments has a significant effect. After that, we conduct a survey among network operators and find that economical and technical problems are the two major classes of reasons for non-compliance. Seeking a realistic ROV deployment strategy, we perform large-scale simulations, and, to our surprise, find that not following MANRS Action 1 can lead to better defence of prefix hijacking. Finally, with all our findings, we provide practical recommendations and outline future directions to help promote ROV deployment.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/understanding-route-origin-validation-rov-deployment-in-the-real-world-and-why-manrs-action-1-is-not-followed/](https://www.ndss-symposium.org/ndss-paper/understanding-route-origin-validation-rov-deployment-in-the-real-world-and-why-manrs-action-1-is-not-followed/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-214-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-214-paper.pdf)
## Understanding the Implementation and Security Implications of Protective DNS Services.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#understanding-the-implementation-and-security-implications-of-protective-dns-services)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#understanding-the-implementation-and-security-implications-of-protective-dns-services)
### Authors
* Mingxuan Liu, Zhongguancun Laboratory; Tsinghua University
* Yiming Zhang, Tsinghua University
* Xiang Li, Tsinghua University
* Chaoyi Lu, Tsinghua University
* Baojun Liu, Tsinghua University
* Haixin Duan, Tsinghua University; Zhongguancun Laboratory
* Xiaofeng Zheng, Institute for Network Sciences and Cyberspace
* Tsinghua University; QiAnXin Technology Research Institute & Legendsec Information Technology, Beijing) Inc.
### Abstract
> Domain names are often registered and abused for harmful and illegal Internet activities. To mitigate such threats, as an emerging security service, Protective DNS (PDNS) blocks access to harmful content by proactively offering rewritten DNS responses, which resolve malicious domains to controlled hosts. While it has become an effective tool against cybercrime, given their implementation divergence, little has been done from the security community in understanding the deployment, operational status and security policies of PDNS services.
> 
> In this paper, we present a large-scale measurement study of the deployment and security implications of open PDNS services. We first perform empirical analysis over 28 popular PDNS providers and summarize major formats of DNS rewriting policies. Then, powered by the derived rules, we design a methodology that identifies intentional DNS rewriting enforced by open PDNS servers in the wild. Our findings are multi-faceted. On the plus side, the deployment of PDNS is now starting to scale: we identify 17,601 DNS servers (9.1% of all probed) offering such service. For DNS clients, switching from regular DNS to PDNS induces negligible query latency, despite additional steps (e.g., checking against threat intelligence and rewriting DNS response) being required from the server side. However, we also find flaws and vulnerabilities within PDNS implementation, including evasion of blocking policies and denial of service. Through responsible vulnerability disclosure, we have received 12 audit assessment results of high-risk vulnerabilities. Our study calls for proper guidance and best practices for secure PDNS operation.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/understanding-the-implementation-and-security-implications-of-protective-dns-services/](https://www.ndss-symposium.org/ndss-paper/understanding-the-implementation-and-security-implications-of-protective-dns-services/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-782-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-782-paper.pdf)
## UniID: Spoofing Face Authentication System by Universal Identity.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#uniid-spoofing-face-authentication-system-by-universal-identity)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#uniid-spoofing-face-authentication-system-by-universal-identity)
### Authors
* Zhihao Wu, Zhejiang University
* Yushi Cheng, Zhejiang University
* Shibo Zhang, Zhejiang University
* Xiaoyu Ji, Zhejiang University
* Wenyuan Xu, Zhejing University
### Abstract
> Face authentication systems are widely employed in access control systems to ensure the security of confidential facilities. Recent works have demonstrated their vulnerabilities to adversarial attacks. However, such attacks typically require adversaries to wear disguises such as glasses or hats during every authentication, which may raise suspicion and reduce their attack impacts. In this paper, we propose the UniID attack, which allows multiple adversaries to perform face spoofing attacks without any additional disguise by enabling an insider to register a universal identity into the face authentication database by wearing an adversarial patch. To achieve it, we first select appropriate adversaries through feature engineering, then generate the desired adversarial patch with a multi-target joint-optimization approach, and finally overcome practical challenges such as improving the transferability of the adversarial patch towards black-box systems and enhancing its robustness in the physical world. We implement UniID in laboratory setups and evaluate its effectiveness with six face recognition models (FaceNet, Mobile-FaceNet, ArcFace-18/50, and MagFace-18/50) and two commercial face authentication systems (ArcSoft and Face++). Simulation and real-world experimental results demonstrate that UniID can achieve a max attack success rate of 100% and 79% in 3-user scenarios under the white-box setting and black-box setting respectively, and it can be extended to more than 8 users.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/uniid-spoofing-face-authentication-system-by-universal-identity/](https://www.ndss-symposium.org/ndss-paper/uniid-spoofing-face-authentication-system-by-universal-identity/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-1036-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-1036-paper.pdf)
## Untangle: Multi-Layer Web Server Fingerprinting.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#untangle-multi-layer-web-server-fingerprinting)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#untangle-multi-layer-web-server-fingerprinting)
### Authors
* Cem Topcuoglu, Northeastern University
* Kaan Onarlioglu, Akamai Technologies
* Bahruz Jabiyev, Northeastern University
* Engin Kirda, Northeastern University
### Abstract
> Web server fingerprinting is a common activity in vulnerability management and security testing, with network scanners offering the capability for over two decades. All known fingerprinting techniques are designed for probing a single, isolated web server. However, the modern Internet is made up of complex layered architectures, where chains of CDNs, reverse proxies, and cloud services front origin servers. That renders existing fingerprinting tools and techniques utterly ineffective.
> 
> We present the first methodology that can fingerprint servers in a multi-layer architecture, by leveraging the HTTP processing discrepancies between layers. This technique is capable of detecting both the server technologies involved and their correct ordering. It is theoretically extendable to any number of layers, any server technology, deployed in any order, but of course within practical constraints. We then address those practical considerations and present a concrete implementation of the scheme in a tool called Untangle, empirically demonstrating its ability to fingerprint 3-layer architectures with high accuracy.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/untangle-multi-layer-web-server-fingerprinting/](https://www.ndss-symposium.org/ndss-paper/untangle-multi-layer-web-server-fingerprinting/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-497-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-497-paper.pdf)
## UntrustIDE: Exploiting Weaknesses in VS Code Extensions.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#untrustide-exploiting-weaknesses-in-vs-code-extensions)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#untrustide-exploiting-weaknesses-in-vs-code-extensions)
### Authors
* Elizabeth Lin, North Carolina State University
* Igibek Koishybayev, North Carolina State University
* Trevor Dunlap, North Carolina State University
* William Enck, North Carolina State University
* Alexandros Kapravelos, North Carolina State University
### Abstract
> With the rise in threats against the software supply chain, developer integrated development environments (IDEs) present an attractive target for attackers. For example, researchers have found extensions for Visual Studio Code (VS Code) that start web servers and can be exploited via JavaScript executing in a web browser on the developer's host. This paper seeks to systematically understand the landscape of vulnerabilities in VS Code's extension marketplace. We identify a set of four sources of untrusted input and three code targets that can be used for code injection and file integrity attacks and use them to design taint analysis rules in CodeQL. We then perform an ecosystem-level analysis of the VS Code extension marketplace, studying 25,402 extensions that contain code. Our results show that while vulnerabilities are not pervasive, they exist and impact millions of users. Specifically, we find 21 extensions with verified proof of concept exploits of code injection attacks impacting a total of over 6 million installations. Through this study, we demonstrate the need for greater attention to the security of IDE extensions.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/untrustide-exploiting-weaknesses-in-vs-code-extensions/](https://www.ndss-symposium.org/ndss-paper/untrustide-exploiting-weaknesses-in-vs-code-extensions/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-73-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-73-paper.pdf)
## VETEOS: Statically Vetting EOSIO Contracts for the "Groundhog Day" Vulnerabilities.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#veteos-statically-vetting-eosio-contracts-for-the-groundhog-day-vulnerabilities)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#veteos-statically-vetting-eosio-contracts-for-the-groundhog-day-vulnerabilities)
### Authors
* Levi Taiji Li, University of Utah
* Ningyu He, Peking University
* Haoyu Wang, Huazhong University of Science and Technology
* Mu Zhang, University of Utah
### Abstract
> In this paper, we propose VETEOS, a static vetting tool for the "Groundhog Day" vulnerabilities in EOSIO contracts. In a "Groundhog Day" attack, culprits leverage the distinctive rollback issue in EOSIO contracts, which allows them to persistently execute identical contract code with varying inputs. By using the information exposed in prior executions, these attackers unlawfully amass insights about the target contract, thereby figuring out a reliable method to generate unauthorized profits. To tackle this problem, we formally define this unique vulnerability as a control and data dependency problem, and develop a custom static analysis tool, VETEOS, that can precisely discover such bugs directly from EOSIO WebAssembly (WASM) bytecode. VETEOS has detected 735 new vulnerabilities in the wild and outperforms the state-of-the-art EOSIO contract analyzer.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/veteos-statically-vetting-eosio-contracts-for-the-groundhog-day-vulnerabilities/](https://www.ndss-symposium.org/ndss-paper/veteos-statically-vetting-eosio-contracts-for-the-groundhog-day-vulnerabilities/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-972-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-972-paper.pdf)
## When Cryptography Needs a Hand: Practical Post-Quantum Authentication for V2V Communications.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#when-cryptography-needs-a-hand-practical-post-quantum-authentication-for-v2v-communications)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#when-cryptography-needs-a-hand-practical-post-quantum-authentication-for-v2v-communications)
### Authors
* Geoff Twardokus, Rochester Institute of Technology
* Nina Bindel, SandboxAQ
* Hanif Rahbari, Rochester Institute of Technology
* Sarah McCarthy, University of Waterloo
### Abstract
> We tackle the atypical challenge of supporting post-quantum cryptography (PQC) and its significant overhead in safety-critical vehicle-to-vehicle (V2V) communications, dealing with strict overhead and latency restrictions within the limited radio spectrum for V2V. For example, we show that the current use of spectrum to support signature verification in V2V makes it nearly impossible to adopt PQC. Accordingly, we propose a scheduling technique for message signing certificate transmissions (which we find are currently up to 93% redundant) that learns to adaptively reduce the use of radio spectrum. In combination, we design the first integration of PQC and V2V, which satisfies the above stringent constraints given the available spectrum. Specifically, we analyze the three PQ signature algorithms selected for standardization by NIST, as well as XMSS (RFC 8391), and propose a Partially Hybrid authentication protocol—a tailored fusion of classical cryptography and PQC—for use in the V2V ecosystem during the nascent transition period we outline towards fully PQ V2V. Our provably secure protocol efficiently balances security and performance, as demonstrated experimentally with software-defined radios (USRPs), commercial V2V devices, and road traffic and V2V simulators. We show our joint transmission scheduling optimization and Partially Hybrid design are scalable and reliable under realistic conditions, adding a negligible average delay (0.39 ms per message) against the current state-of-the-art.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/when-cryptography-needs-a-hand-practical-post-quantum-authentication-for-v2v-communications/](https://www.ndss-symposium.org/ndss-paper/when-cryptography-needs-a-hand-practical-post-quantum-authentication-for-v2v-communications/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-267-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-267-paper.pdf)
## You Can Use But Cannot Recognize: Preserving Visual Privacy in Deep Neural Networks.
🌍 **[English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#you-can-use-but-cannot-recognize-preserving-visual-privacy-in-deep-neural-networks)** | [简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#you-can-use-but-cannot-recognize-preserving-visual-privacy-in-deep-neural-networks)
### Authors
* Qiushi Li, Tsinghua University
* Yan Zhang, Tsinghua University
* Ju Ren, Tsinghua University
* Qi Li, Tsinghua University
* Yaoxue Zhang, Tsinghua University
### Abstract
> Image data have been extensively used in Deep Neural Network (DNN) tasks in various scenarios, e.g., autonomous driving and medical image analysis, which incurs significant privacy concerns. Existing privacy protection techniques are unable to efficiently protect such data. For example, Differential Privacy (DP) that is an emerging technique protects data with strong privacy guarantee cannot effectively protect visual features of exposed image dataset. In this paper, we propose a novel privacy-preserving framework VisualMixer that protects the training data of visual DNN tasks by pixel shuffling, while not injecting any noises. VisualMixer utilizes a new privacy metric called Visual Feature Entropy (VFE) to effectively quantify the visual features of an image from both biological and machine vision aspects. In VisualMixer, we devise a task-agnostic image obfuscation method to protect the visual privacy of data for DNN training and inference. For each image, it determines regions for pixel shuffling in the image and the sizes of these regions according to the desired VFE. It shuffles pixels both in the spatial domain and in the chromatic channel space in the regions without injecting noises so that it can prevent visual features from being discerned and recognized, while incurring negligible accuracy loss. Extensive experiments on real-world datasets demonstrate that VisualMixer can effectively preserve the visual privacy with negligible accuracy loss, i.e., at average 2.35 percentage points of model accuracy loss, and almost no performance degradation on model training.

### Links
- **URL:** [https://www.ndss-symposium.org/ndss-paper/you-can-use-but-cannot-recognize-preserving-visual-privacy-in-deep-neural-networks/](https://www.ndss-symposium.org/ndss-paper/you-can-use-but-cannot-recognize-preserving-visual-privacy-in-deep-neural-networks/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-1361-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-1361-paper.pdf)
