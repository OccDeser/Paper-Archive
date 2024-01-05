# IEEE Symposium on Security and Privacy[2021]
## Using Selective Memoization to Defeat Regular Expression Denial of Service (ReDoS).
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#using-selective-memoization-to-defeat-regular-expression-denial-of-service-redos)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#using-selective-memoization-to-defeat-regular-expression-denial-of-service-redos)
### Authors
* James C. Davis, Electrical & Computer Engineering, Purdue University
* Francisco Servant, Computer Science, Virginia Tech
* Dongyoon Lee, Computer Science, Stony Brook University
### Abstract
> Regular expressions (regexes) are a denial of service vector in most mainstream programming languages. Recent empirical work has demonstrated that up to 10% of regexes have super-linear worst-case behavior in typical regex engines. It is therefore not surprising that many web services are reportedly vulnerable to regex denial of service (ReDoS). If the time complexity of a regex engine can be reduced transparently, ReDoS vulnerabilities can be eliminated at no cost to application developers. Unfortunately, existing ReDoS defenses — replacing the regex engine, optimizing it, or replacing regexes piecemeal — struggle with soundness and compatibility. Full memoization is sound and compatible, but its space costs are too high. No effective ReDoS defense has been adopted in practice. We present techniques to provably eliminate super-linear regex behavior with low space costs for typical regexes. We propose selective memoization schemes with varying space/time tradeoffs. We then describe an encoding scheme that leverages insights about regex engine semantics to further reduce the space cost of memoization. We also consider how to safely handle extended regex features. We implemented our proposals and evaluated them on a corpus of real-world regexes. We found that selective memoization lowers the space cost of memoization by an order of magnitude for the median regex, and that run-length encoding further lowers the space cost to constant for 90% of regexes. "Those who cannot remember the past are condemned to repeat it." –George Santayana

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519427/](https://ieeexplore.ieee.org/document/9519427/)
## Co-Inflow: Coarse-grained Information Flow Control for Java-like Languages.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#co-inflow-coarse-grained-information-flow-control-for-java-like-languages)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#co-inflow-coarse-grained-information-flow-control-for-java-like-languages)
### Authors
* Jian Xiang, Harvard University
* Stephen Chong, Harvard University
### Abstract
> Coarse-grained dynamic information-flow control (IFC) is a good match for imperative object-oriented programming languages such as Java. Java language abstractions align well with coarse-grained IFC concepts, and so Java can be cleanly extended with coarse-grained dynamic IFC without requiring significantly different design patterns or excessive security annotations, and without excessive performance overhead.We present Co-Inflow: an extension of Java with coarse-grained dynamic IFC. By careful design choices and defaults, a programmer typically needs to add very few annotations to a Java program to convert it to a Co-Inflow program with relatively good precision. Additional annotations can improve precision. We achieve this tradeoff between precision and annotation burden by instantiating and specializing recent advances in coarse-grained IFC for a Java-like setting, and by using opaque labeled values: a restriction of labeled values that the Co-Inflow runtime automatically and securely creates and uses.We have captured the essence of Co-Inflow in a middle-weight imperative calculus, and proven that it provides a termination- insensitive non-interference security guarantee. We have a prototype implementation of Co-Inflow and use it to evaluate the precision, usability, and potential performance of Co-Inflow.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519397/](https://ieeexplore.ieee.org/document/9519397/)
## When Function Signature Recovery Meets Compiler Optimization.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#when-function-signature-recovery-meets-compiler-optimization)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#when-function-signature-recovery-meets-compiler-optimization)
### Authors
* Yan Lin, Singapore Management University
* Debin Gao, Singapore Management University
### Abstract
> Matching indirect function callees and callers using function signatures recovered from binary executables (number of arguments and argument types) has been proposed to construct a more fine-grained control-flow graph (CFG) to help control-flow integrity (CFI) enforcement. However, various compiler optimizations may violate calling conventions and result in unmatched function signatures. In this paper, we present eight scenarios in which compiler optimizations impact function signature recovery, and report experimental results with 1,344 real-world applications of various optimization levels. Most interestingly, our experiments show that compiler optimizations have both positive and negative impacts on function signature recovery, e.g., its elimination of redundant instructions at callers makes counting of the number of arguments more accurate, while it hurts argument type matching as the compiler chooses the most efficient (but potentially different) types at callees and callers. To better deal with these compiler optimizations, we propose a set of improved policies and report our more accurate CFG models constructed from the 1,344 applications. We additionally compare our results recovered from binary executables with those extracted from program source and reveal scenarios where compiler optimization makes the task of accurate function signature recovery undecidable.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519479/](https://ieeexplore.ieee.org/document/9519479/)
## How Did That Get In My Phone? Unwanted App Distribution on Android Devices.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#how-did-that-get-in-my-phone-unwanted-app-distribution-on-android-devices)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#how-did-that-get-in-my-phone-unwanted-app-distribution-on-android-devices)
### Authors
* Platon Kotzias, NortonLifelock Research Group
* Juan Caballero, IMDEA Software Institute
* Leyla Bilge, NortonLifelock Research Group
### Abstract
> Android is the most popular operating system with billions of active devices. Unfortunately, its popularity and openness makes it attractive for unwanted apps, i.e., malware and potentially unwanted programs (PUP). In Android, app installations typically happen via the official and alternative markets, but also via other smaller and less understood alternative distribution vectors such as Web downloads, pay-per-install (PPI) services, backup restoration, bloatware, and IM tools. This work performs a thorough investigation on unwanted app distribution by quantifying and comparing distribution through different vectors. At the core of our measurements are reputation logs of a large security vendor, which include 7.9M apps observed in 12M devices between June and September 2019. As a first step, we measure that between 10% and 24% of users devices encounter at least one unwanted app, and compare the prevalence of malware and PUP. An analysis of the who-installs-who relationships between installers and child apps reveals that the Play market is the main app distribution vector, responsible for 87% of all installs and 67% of unwanted app installs, but it also has the best defenses against unwanted apps. Alternative markets distribute instead 5.7% of all apps, but over 10% of unwanted apps. Bloatware is also a significant unwanted app distribution vector with 6% of those installs. And, backup restoration is an unintentional distribution vector that may even allow unwanted apps to survive users’ phone replacement. We estimate unwanted app distribution via PPI to be smaller than on Windows. Finally, we observe that Web downloads are rare, but provide a riskier proposition even compared to alternative markets.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519429/](https://ieeexplore.ieee.org/document/9519429/)
## Android Custom Permissions Demystified: From Privilege Escalation to Design Shortcomings.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#android-custom-permissions-demystified-from-privilege-escalation-to-design-shortcomings)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#android-custom-permissions-demystified-from-privilege-escalation-to-design-shortcomings)
### Authors
* Rui Li, School of Cyber Science and Technology, Shandong University; Ministry of Education, Key Laboratory of Cryptologic Technology and Information Security, Shandong University
* Wenrui Diao, School of Cyber Science and Technology, Shandong University; Ministry of Education, Key Laboratory of Cryptologic Technology and Information Security, Shandong University
* Zhou Li, University of California, Irvine
* Jianqi Du, School of Cyber Science and Technology, Shandong University; Ministry of Education, Key Laboratory of Cryptologic Technology and Information Security, Shandong University
* Shanqing Guo, School of Cyber Science and Technology, Shandong University; Ministry of Education, Key Laboratory of Cryptologic Technology and Information Security, Shandong University
### Abstract
> Permission is the fundamental security mechanism for protecting user data and privacy on Android. Given its importance, security researchers have studied the design and usage of permissions from various aspects. However, most of the previous research focused on the security issues of system permissions. Overlooked by many researchers, an app can use custom permissions to share its resources and capabilities with other apps. However, the security implications of using custom permissions have not been fully understood.In this paper, we systematically evaluate the design and implementation of Android custom permissions. Notably, we built an automatic fuzzing tool, called CuPerFuzzer, to detect custom permissions related vulnerabilities existing in the Android OS. CuPerFuzzer treats the operations of the permission mechanism as a black-box and executes massive targeted test cases to trigger privilege escalation. In the experiments, CuPerFuzzer discovered 2,384 effective cases with 30 critical paths successfully. Through investigating these vulnerable cases and analyzing the source code of Android OS, we further identified a series of severe design shortcomings lying in the Android permission framework, including dangling custom permission, inconsistent permission-group mapping, custom permission elevating, and inconsistent permission definition. Exploiting any of these shortcomings, a malicious app can obtain dangeroussystem permissions without user consent and further access unauthorized platform resources. On top of these observations, we propose some general design guidelines to secure custom permissions. Our findings have been acknowledged by the Android security team and rated as High severity.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519385/](https://ieeexplore.ieee.org/document/9519385/)
## Trust, But Verify: A Longitudinal Analysis Of Android OEM Compliance and Customization.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#trust-but-verify-a-longitudinal-analysis-of-android-oem-compliance-and-customization)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#trust-but-verify-a-longitudinal-analysis-of-android-oem-compliance-and-customization)
### Authors
* Andrea Possemato, IDEMIA; EURECOM
* Simone Aonzo, EURECOM
* Davide Balzarotti, EURECOM
* Yanick Fratantonio, EURECOM; Cisco Talos
### Abstract
> Nowadays, more than two billions of mobile devices run Android OS. At the core of this success are the open source nature of the Android Open Source Project and vendors’ ability to customize the code base and ship it on their own devices. While the possibility of customizations is beneficial to vendors, they can potentially lead to compatibility and security problems. To prevent these problems, Google developed a set of requirements that must be satisfied for a vendor to brand its devices as "Android," and recently introduced Project Treble as an effort to partition vendor customizations. These requirements are encoded as part of a textual document (called Compatibility Definition Document, or CDD) and various automated tests. This paper performs the first longitudinal study on Android OEM customizations. We first built a dataset of 2,907 ROMs, spanning across 42 different vendors, and covering Android versions from 1.6 to 9.0 (years 2009–2020). We then developed an analysis framework and pipeline to extract each ROM’s customization layers and evaluate it across several metrics. For example, we analyze ROMs to determine whether they are compliant with respect to the various requirements and whether their customizations negatively affect the security posture of the overall device. In the process, we focus on various aspects, ranging from security hardening of binaries, SELinux policies, Android init scripts, and kernel security hardening techniques. Our results are worrisome. We found 579 over 2,907 (~20%) of the ROMs have at least one violation for the CDD related to their Android version — incredibly, 11 of them are branded by Google itself. Some of our findings suggest that vendors often go out of their way to bypass or "comment out" safety nets added by the Android security team. In other cases, we found ROMs that modify init scripts to launch at boot outdated versions (with known CVEs and public POCs) of programs as root and reachable from a remote attacker (e.g., tcpdump ). This paper shows that Google’s efforts are not enough, and we offer several recommendations on how to improve the compliance check pipelines.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519425/](https://ieeexplore.ieee.org/document/9519425/)
## Detecting AI Trojans Using Meta Neural Analysis.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#detecting-ai-trojans-using-meta-neural-analysis)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#detecting-ai-trojans-using-meta-neural-analysis)
### Authors
* Xiaojun Xu, University of Illinois at Urbana-Champaign
* Qi Wang, University of Illinois at Urbana-Champaign
* Huichen Li, University of Illinois at Urbana-Champaign
* Nikita Borisov, University of Illinois at Urbana-Champaign
* Carl A. Gunter, University of Illinois at Urbana-Champaign
* Bo Li, University of Illinois at Urbana-Champaign
### Abstract
> In machine learning Trojan attacks, an adversary trains a corrupted model that obtains good performance on normal data but behaves maliciously on data samples with certain trigger patterns. Several approaches have been proposed to detect such attacks, but they make undesirable assumptions about the attack strategies or require direct access to the trained models, which restricts their utility in practice.This paper addresses these challenges by introducing a Meta Neural Trojan Detection (MNTD) pipeline that does not make assumptions on the attack strategies and only needs black-box access to models. The strategy is to train a meta-classifier that predicts whether a given target model is Trojaned. To train the meta-model without knowledge of the attack strategy, we introduce a technique called jumbo learning that samples a set of Trojaned models following a general distribution. We then dynamically optimize a query set together with the meta-classifier to distinguish between Trojaned and benign models.We evaluate MNTD with experiments on vision, speech, tabular data and natural language text datasets, and against different Trojan attacks such as data poisoning attack, model manipulation attack, and latent attack. We show that MNTD achieves 97% detection AUC score and significantly outperforms existing detection approaches. In addition, MNTD generalizes well and achieves high detection performance against unforeseen attacks. We also propose a robust MNTD pipeline which achieves around 90% detection AUC even when the attacker aims to evade the detection with full knowledge of the system.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519467/](https://ieeexplore.ieee.org/document/9519467/)
## Adversarial Watermarking Transformer: Towards Tracing Text Provenance with Data Hiding.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#adversarial-watermarking-transformer-towards-tracing-text-provenance-with-data-hiding)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#adversarial-watermarking-transformer-towards-tracing-text-provenance-with-data-hiding)
### Authors
* Sahar Abdelnabi, CISPA Helmholtz Center for Information Security
* Mario Fritz, CISPA Helmholtz Center for Information Security
### Abstract
> Recent advances in natural language generation have introduced powerful language models with high-quality output text. However, this raises concerns about the potential misuse of such models for malicious purposes. In this paper, we study natural language watermarking as a defense to help better mark and trace the provenance of text. We introduce the Adversarial Watermarking Transformer (AWT) with a jointly trained encoder-decoder and adversarial training that, given an input text and a binary message, generates an output text that is unobtrusively encoded with the given message. We further study different training and inference strategies to achieve minimal changes to the semantics and correctness of the input text.AWT is the first end-to-end model to hide data in text by automatically learning -without ground truth- word substitutions along with their locations in order to encode the message. We empirically show that our model is effective in largely preserving text utility and decoding the watermark while hiding its presence against adversaries. Additionally, we demonstrate that our method is robust against a range of attacks.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519400/](https://ieeexplore.ieee.org/document/9519400/)
## Machine Unlearning.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#machine-unlearning)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#machine-unlearning)
### Authors
* Lucas Bourtoule, University of Toronto; Vector Institute
* Varun Chandrasekaran, University of Wisconsin-Madison
* Christopher A. Choquette-Choo, University of Toronto; Vector Institute
* Hengrui Jia, University of Toronto; Vector Institute
* Adelin Travers, University of Toronto; Vector Institute
* Baiwu Zhang, University of Toronto; Vector Institute
* David Lie, University of Toronto
* Nicolas Papernot, University of Toronto; Vector Institute
### Abstract
> Once users have shared their data online, it is generally difficult for them to revoke access and ask for the data to be deleted. Machine learning (ML) exacerbates this problem because any model trained with said data may have memorized it, putting users at risk of a successful privacy attack exposing their information. Yet, having models unlearn is notoriously difficult.We introduce SISA training, a framework that expedites the unlearning process by strategically limiting the influence of a data point in the training procedure. While our framework is applicable to any learning algorithm, it is designed to achieve the largest improvements for stateful algorithms like stochastic gradient descent for deep neural networks. SISA training reduces the computational overhead associated with unlearning, even in the worst-case setting where unlearning requests are made uniformly across the training set. In some cases, the service provider may have a prior on the distribution of unlearning requests that will be issued by users. We may take this prior into account to partition and order data accordingly, and further decrease overhead from unlearning.Our evaluation spans several datasets from different domains, with corresponding motivations for unlearning. Under no distributional assumptions, for simple learning tasks, we observe that SISA training improves time to unlearn points from the Purchase dataset by 4.63×, and 2.45× for the SVHN dataset, over retraining from scratch. SISA training also provides a speed-up of 1.36× in retraining for complex learning tasks such as ImageNet classification; aided by transfer learning, this results in a small degradation in accuracy. Our work contributes to practical data governance in machine unlearning.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519428/](https://ieeexplore.ieee.org/document/9519428/)
## Poltergeist: Acoustic Adversarial Machine Learning against Cameras and Computer Vision.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#poltergeist-acoustic-adversarial-machine-learning-against-cameras-and-computer-vision)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#poltergeist-acoustic-adversarial-machine-learning-against-cameras-and-computer-vision)
### Authors
* Xiaoyu Ji, Ubiquitous System Security Lab (USSLAB), Zhejiang University
* Yushi Cheng, Ubiquitous System Security Lab (USSLAB), Zhejiang University
* Yuepeng Zhang, Ubiquitous System Security Lab (USSLAB), Zhejiang University
* Kai Wang, Ubiquitous System Security Lab (USSLAB), Zhejiang University
* Chen Yan, Ubiquitous System Security Lab (USSLAB), Zhejiang University
* Wenyuan Xu, Ubiquitous System Security Lab (USSLAB), Zhejiang University
* Kevin Fu, Security and Privacy Research Group (SPQR), University of Michigan
### Abstract
> Autonomous vehicles increasingly exploit computer-vision-based object detection systems to perceive environments and make critical driving decisions. To increase the quality of images, image stabilizers with inertial sensors are added to alleviate image blurring caused by camera jitters. However, such a trend opens a new attack surface. This paper identifies a system-level vulnerability resulting from the combination of the emerging image stabilizer hardware susceptible to acoustic manipulation and the object detection algorithms subject to adversarial examples. By emitting deliberately designed acoustic signals, an adversary can control the output of an inertial sensor, which triggers unnecessary motion compensation and results in a blurred image, even if the camera is stable. The blurred images can then induce object misclassification affecting safety-critical decision making. We model the feasibility of such acoustic manipulation and design an attack framework that can accomplish three types of attacks, i.e., hiding, creating, and altering objects. Evaluation results demonstrate the effectiveness of our attacks against four academic object detectors (YOLO V3/V4/V5 and Fast R-CNN), and one commercial detector (Apollo). We further introduce the concept of AMpLe attacks, a new class of system-level security vulnerabilities resulting from a combination of adversarial machine learning and physics-based injection of information-carrying signals into hardware.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519394/](https://ieeexplore.ieee.org/document/9519394/)
## Invisible for both Camera and LiDAR: Security of Multi-Sensor Fusion based Perception in Autonomous Driving Under Physical-World Attacks.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#invisible-for-both-camera-and-lidar-security-of-multi-sensor-fusion-based-perception-in-autonomous-driving-under-physical-world-attacks)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#invisible-for-both-camera-and-lidar-security-of-multi-sensor-fusion-based-perception-in-autonomous-driving-under-physical-world-attacks)
### Authors
* Yulong Cao, University of Michigan
* Ningfei Wang, University of California, Irvine
* Chaowei Xiao, NVIDIA Research; Arizona State University
* Dawei Yang, University of Michigan
* Jin Fang, Baidu Research and National Engineering Laboratory of Deep Learning Technology and Application, China
* Ruigang Yang, Arizona State University
* Qi Alfred Chen, University of California, Irvine
* Mingyan Liu, University of Michigan
* Bo Li, University of Illinois at Urbana-Champaign
### Abstract
> In Autonomous Driving (AD) systems, perception is both security and safety critical. Despite various prior studies on its security issues, all of them only consider attacks on camera-or LiDAR-based AD perception alone. However, production AD systems today predominantly adopt a Multi-Sensor Fusion (MSF) based design, which in principle can be more robust against these attacks under the assumption that not all fusion sources are (or can be) attacked at the same time. In this paper, we present the first study of security issues of MSF-based perception in AD systems. We directly challenge the basic MSF design assumption above by exploring the possibility of attacking all fusion sources simultaneously. This allows us for the first time to understand how much security guarantee MSF can fundamentally provide as a general defense strategy for AD perception.We formulate the attack as an optimization problem to generate a physically-realizable, adversarial 3D-printed object that misleads an AD system to fail in detecting it and thus crash into it. To systematically generate such a physical-world attack, we propose a novel attack pipeline that addresses two main design challenges: (1) non-differentiable target camera and LiDAR sensing systems, and (2) non-differentiable cell-level aggregated features popularly used in LiDAR-based AD perception. We evaluate our attack on MSF algorithms included in representative open-source industry-grade AD systems in real-world driving scenarios. Our results show that the attack achieves over 90% success rate across different object types and MSF algorithms. Our attack is also found stealthy, robust to victim positions, transferable across MSF algorithms, and physical-world realizable after being 3D-printed and captured by LiDAR and camera devices. To concretely assess the end-to-end safety impact, we further perform simulation evaluation and show that it can cause a 100% vehicle collision rate for an industry-grade AD system. We also evaluate and discuss defense strategies.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519442/](https://ieeexplore.ieee.org/document/9519442/)
## CANNON: Reliable and Stealthy Remote Shutdown Attacks via Unaltered Automotive Microcontrollers.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#cannon-reliable-and-stealthy-remote-shutdown-attacks-via-unaltered-automotive-microcontrollers)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#cannon-reliable-and-stealthy-remote-shutdown-attacks-via-unaltered-automotive-microcontrollers)
### Authors
* Sekar Kulandaivel, Carnegie Mellon University
* Shalabh Jain, Research and Technology Center, Robert Bosch LLC, USA
* Jorge Guajardo, Research and Technology Center, Robert Bosch LLC, USA
* Vyas Sekar, Carnegie Mellon University
### Abstract
> Electronic Control Units (ECUs) in modern vehicles have recently been targets for shutdown attacks, which can disable safety-critical vehicle functions and be used as means to launch more dangerous attacks. Existing attacks operate either by physical manipulation of the bus signals or message injection. However, we argue that these cannot simultaneously be remote, stealthy, and reliable. For instance, message injection is detected by modern Intrusion Detection System (IDS) proposals and requires strict synchronization that cannot be realized remotely. In this work, we introduce a new class of attacks that leverage the peripheral clock gating feature in modern automotive microcontroller units (MCUs). By using this capability, a remote adversary with purely software control can reliably "freeze" the output of a compromised ECU to insert arbitrary bits at any time instance. Utilizing on this insight, we develop the CANnon attack for remote shutdown. Since the CANnon attack produces error patterns indistinguishable from natural errors and does not require message insertion, detecting it with current techniques is difficult. We demonstrate this attack on two automotive MCUs used in modern passenger vehicle ECUs. We discuss potential mitigation strategies and countermeasures for such attacks.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519391/](https://ieeexplore.ieee.org/document/9519391/)
## SoK: Quantifying Cyber Risk.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#sok-quantifying-cyber-risk)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#sok-quantifying-cyber-risk)
### Authors
* Daniel W. Woods, University of Innsbruck, Innsbruck, Austria
* Rainer Böhme, University of Innsbruck, Innsbruck, Austria
### Abstract
> This paper introduces a causal model inspired by structural equation modeling that explains cyber risk outcomes in terms of latent factors measured using reflexive indicators. First, we use the model to classify empirical cyber harm studies. We discover cyber harms are not exceptional in terms of typical or extreme losses. The increasing frequency of data breaches is contested and stock market reactions to cyber incidents are becoming less damaging over time. Focusing on harms alone breeds fatalism; the causal model is most useful in evaluating the effectiveness of security interventions. We show how simple statistical relationships lead to spurious results in which more security spending or applying updates are associated with greater rates of compromise. When accounting for threat and exposure, indicators of security are shown to be important factors in explaining the variance in rates of compromise, especially when the studies use multiple indicators of the security level.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519490/](https://ieeexplore.ieee.org/document/9519490/)
## Self-Supervised Euphemism Detection and Identification for Content Moderation.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#self-supervised-euphemism-detection-and-identification-for-content-moderation)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#self-supervised-euphemism-detection-and-identification-for-content-moderation)
### Authors
* Wanzheng Zhu, University of Illinois at Urbana-Champaign
* Hongyu Gong, University of Illinois at Urbana-Champaign
* Rohan Bansal, Carnegie Mellon University
* Zachary Weinberg, University of Massachusetts, Amherst; Carnegie Mellon University
* Nicolas Christin, Carnegie Mellon University
* Giulia Fanti, Carnegie Mellon University
* Suma Bhat, University of Illinois at Urbana-Champaign
### Abstract
> Fringe groups and organizations have a long history of using euphemisms—ordinary-sounding words with a secret meaning—to conceal what they are discussing. Nowadays, one common use of euphemisms is to evade content moderation policies enforced by social media platforms. Existing tools for enforcing policy automatically rely on keyword searches for words on a "ban list", but these are notoriously imprecise: even when limited to swearwords, they can still cause embarrassing false positives [1]. When a commonly used ordinary word acquires a euphemistic meaning, adding it to a keyword-based ban list is hopeless: consider "pot" (storage container or marijuana?) or "heater" (household appliance or firearm?) The current generation of social media companies instead hire staff to check posts manually, but this is expensive, inhumane, and not much more effective. It is usually apparent to a human moderator that a word is being used euphemistically, but they may not know what the secret meaning is, and therefore whether the message violates policy. Also, when a euphemism is banned, the group that used it need only invent another one, leaving moderators one step behind.This paper will demonstrate unsupervised algorithms that, by analyzing words in their sentence-level context, can both detect words being used euphemistically, and identify the secret meaning of each word. Compared to the existing state of the art, which uses context-free word embeddings, our algorithm for detecting euphemisms achieves 30–400% higher detection accuracies of unlabeled euphemisms in a text corpus. Our algorithm for revealing euphemistic meanings of words is the first of its kind, as far as we are aware. In the arms race between content moderators and policy evaders, our algorithms may help shift the balance in the direction of the moderators.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519422/](https://ieeexplore.ieee.org/document/9519422/)
## SoK: Hate, Harassment, and the Changing Landscape of Online Abuse.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#sok-hate-harassment-and-the-changing-landscape-of-online-abuse)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#sok-hate-harassment-and-the-changing-landscape-of-online-abuse)
### Authors
* Kurt Thomas, Google
* Devdatta Akhawe, Figma, Inc
* Michael Bailey, University of Illinois, Urbana-Champaign
* Dan Boneh, Stanford
* Elie Bursztein, Google
* Sunny Consolvo, Google
* Nicola Dell, Cornell Tech
* Zakir Durumeric, Stanford
* Patrick Gage Kelley, Google
* Deepak Kumar, University of Illinois, Urbana-Champaign
* Damon McCoy, New York University
* Sarah Meiklejohn, University College London; Google
* Thomas Ristenpart, Cornell Tech
* Gianluca Stringhini, Boston University
### Abstract
> We argue that existing security, privacy, and antiabuse protections fail to address the growing threat of online hate and harassment. In order for our community to understand and address this gap, we propose a taxonomy for reasoning about online hate and harassment. Our taxonomy draws on over 150 interdisciplinary research papers that cover disparate threats ranging from intimate partner violence to coordinated mobs. In the process, we identify seven classes of attacks—such as toxic content and surveillance—that each stem from different attacker capabilities and intents. We also provide longitudinal evidence from a three-year survey that hate and harassment is a pervasive, growing experience for online users, particularly for at-risk communities like young adults and people who identify as LGBTQ+. Responding to each class of hate and harassment requires a unique strategy and we highlight five such potential research directions that ultimately empower individuals, communities, and platforms to do so.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519435/](https://ieeexplore.ieee.org/document/9519435/)
## Keep the Dirt: Tainted TreeKEM, Adaptively and Actively Secure Continuous Group Key Agreement.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#keep-the-dirt-tainted-treekem-adaptively-and-actively-secure-continuous-group-key-agreement)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#keep-the-dirt-tainted-treekem-adaptively-and-actively-secure-continuous-group-key-agreement)
### Authors
* Karen Klein, IST Austria
* Guillermo Pascual-Perez, IST Austria
* Michael Walter, IST Austria
* Chethan Kamath, Universidad Nacional del Rosario
* Margarita Capretto, Wickr Inc.
* Miguel Cueto, IST Austria
* Ilia Markov, IST Austria
* Michelle Yeo, IST Austria
* Joël Alwen, Wickr Inc.
* Krzysztof Pietrzak, IST Austria
### Abstract
> While messaging systems with strong security guarantees are widely used in practice, designing a protocol that scales efficiently to large groups and enjoys similar security guarantees remains largely open. The two existing proposals to date are ART (Cohn-Gordon et al., CCS18) and TreeKEM (IETF, The Messaging Layer Security Protocol, draft). TreeKEM is the currently considered candidate by the IETF MLS working group, but dynamic group operations (i.e. adding and removing users) can cause efficiency issues. In this paper we formalize and analyze a variant of TreeKEM which we term Tainted TreeKEM (TTKEM for short). The basic idea underlying TTKEM was suggested by Millican (MLS mailing list, February 2018). This version is more efficient than TreeKEM for some natural distributions of group operations, we quantify this through simulations.Our second contribution is two security proofs for TTKEM which establish post compromise and forward secrecy even against adaptive attackers. The security loss (to the underlying PKE) in the Random Oracle Model is a polynomial factor, and a quasipolynomial one in the Standard Model. Our proofs can be adapted to TreeKEM as well. Before our work no security proof for any TreeKEM-like protocol establishing tight security against an adversary who can adaptively choose the sequence of operations was known. We also are the first to prove (or even formalize) active security where the server can arbitrarily deviate from the protocol specification. Proving fully active security – where also the users can arbitrarily deviate – remains open.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519462/](https://ieeexplore.ieee.org/document/9519462/)
## Merkle2: A Low-Latency Transparency Log System.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#merkle2-a-low-latency-transparency-log-system)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#merkle2-a-low-latency-transparency-log-system)
### Authors
* Yuncong Hu, University of California, Berkeley
* Kian Hooshmand, University of California, Berkeley
* Harika Kalidhindi, University of California, Berkeley
* Seung Jin Yang, University of California, Berkeley
* Raluca Ada Popa, University of California, Berkeley
### Abstract
> Transparency logs are designed to help users audit untrusted servers. For example, Certificate Transparency (CT) enables users to detect when a compromised Certificate Authority (CA) has issued a fake certificate. Practical state-of-the-art transparency log systems, however, suffer from high monitoring costs when used for low-latency applications. To reduce monitoring costs, such systems often require users to wait an hour or more for their updates to take effect, inhibiting low-latency applications. We propose Merkle <sup>2</sup> , a transparency log system that supports both efficient monitoring and low-latency updates. To achieve this goal, we construct a new multi-dimensional, authenticated data structure that nests two types of Merkle trees, hence the name of our system, Merkle <sup>2</sup> . Using this data structure, we then design a transparency log system with efficient monitoring and lookup protocols that enables low-latency updates. In particular, all the operations in Merkle <sup>2</sup>  are independent of update intervals and are (poly)logarithmic to the number of entries in the log. Merkle <sup>2</sup>  not only has excellent asymptotics when compared to prior work, but is also efficient in practice. Our evaluation shows that Merkle <sup>2</sup>  propagates updates in as little as 1 second and can support 100× more users than state-of-the-art transparency logs.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519459/](https://ieeexplore.ieee.org/document/9519459/)
## Post-quantum WireGuard.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#post-quantum-wireguard)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#post-quantum-wireguard)
### Authors
* Andreas Hülsing, Eindhoven University of Technology, The Netherlands
* Kai-Chun Ning, KPN B. V., The Netherlands
* Peter Schwabe, Max Planck Institute for Security and Privacy,, Radboud University, The Netherlands
* Fiona Johanna Weber, Eindhoven University of Technology, The Netherlands
* Philip R. Zimmermann, Delft University of Technology & KPN B. V., The Netherlands
### Abstract
> In this paper we present PQ-WireGuard, a post-quantum variant of the handshake in the WireGuard VPN protocol (NDSS 2017). Unlike most previous work on post-quantum security for real-world protocols, this variant does not only consider post-quantum confidentiality (or forward secrecy) but also post-quantum authentication. To achieve this, we replace the Diffie-Hellman-based handshake by a more generic approach only using key-encapsulation mechanisms (KEMs). We establish security of PQ-WireGuard, adapting the security proofs for WireGuard in the symbolic model and in the standard model to our construction. We then instantiate this generic construction with concrete post-quantum secure KEMs, which we carefully select to achieve high security and speed. We demonstrate competitiveness of PQ-WireGuard presenting extensive bench-marking results comparing to widely deployed VPN solutions.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519445/](https://ieeexplore.ieee.org/document/9519445/)
## Invisible Probe: Timing Attacks with PCIe Congestion Side-channel.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#invisible-probe-timing-attacks-with-pcie-congestion-side-channel)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#invisible-probe-timing-attacks-with-pcie-congestion-side-channel)
### Authors
* Mingtian Tan, School of Computer Science, Fudan University
* Junpeng Wan, School of Computer Science, Fudan University
* Zhe Zhou, School of Computer Science, Fudan University
* Zhou Li, University of California, Irvine
### Abstract
> PCIe (Peripheral Component Interconnect express) protocol is the de facto protocol to bridge CPU and peripheral devices like GPU, NIC, and SSD drive. There is an increasing demand to install more peripheral devices on a single machine, but the PCIe interfaces offered by Intel CPUs are fixed. To resolve such contention, PCIe switch, PCH (Platform Controller Hub), or virtualization cards are installed on the machine to allow multiple devices to share a PCIe interface. Congestion happens when the collective PCIe traffic from the devices overwhelm the PCIe link capacity, and transmission delay is then introduced.In this work, we found the PCIe delay not only harms device performance but also leaks sensitive information about a user who uses the machine. In particular, as user’s activities might trigger data movement over PCIe (e.g., between CPU and GPU), by measuring PCIe congestion, an adversary accessing another device can infer the victim’s secret indirectly. Therefore, the delay resulted from I/O congestion can be exploited as a side-channel. We demonstrate the threat from PCIe congestion through 2 attack scenarios and 4 victim settings. Specifically, an attacker can learn the workload of a GPU in a remote server by probing a RDMA NIC that shares the same PCIe switch and measuring the delays. Based on the measurement, the attacker is able to know the keystroke timings of the victim, what webpage is rendered on the GPU, and what machine-learning model is running on the GPU. Besides, when the victim is using a low-speed device, e.g., an Ethernet NIC, an attacker controlling an NVMe SSD can launch a similar attack when they share a PCH or virtualization card. The evaluation result shows our attack can achieve high accuracy (e.g., 96.31% accuracy in inferring webpage visited by a victim).

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519482/](https://ieeexplore.ieee.org/document/9519482/)
## CacheOut: Leaking Data on Intel CPUs via Cache Evictions.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#cacheout-leaking-data-on-intel-cpus-via-cache-evictions)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#cacheout-leaking-data-on-intel-cpus-via-cache-evictions)
### Authors
* Stephan van Schaik, University of Michigan
* Marina Minkin, University of Michigan
* Andrew Kwong, University of Michigan
* Daniel Genkin, University of Michigan
* Yuval Yarom, University of Adelaide and Data61
### Abstract
> Recent transient-execution attacks, such as RIDL, Fallout, and ZombieLoad, demonstrated that attackers can leak information while it transits through microarchitectural buffers. Named Microarchitectural Data Sampling (MDS) by Intel, these attacks are likened to "drinking from the firehose", as the attacker has little control over what data is observed and from what origin. Unable to prevent the buffers from leaking, Intel issued countermeasures via microcode updates that overwrite the buffers when the CPU changes security domains.In this work we present CacheOut, a new microarchitectural attack that is capable of bypassing Intel’s buffer overwrite countermeasures. We observe that as data is being evicted from the CPU’s L1 cache, it is often transferred back to the leaky CPU buffers where it can be recovered by the attacker. CacheOut improves over previous MDS attacks by allowing the attacker to choose which data to leak from the CPU’s L1 cache, as well as which part of a cache line to leak. We demonstrate that CacheOut can leak information across multiple security boundaries, including those between processes, virtual machines, user and kernel space, and from SGX enclaves.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519461/](https://ieeexplore.ieee.org/document/9519461/)
## PLATYPUS: Software-based Power Side-Channel Attacks on x86.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#platypus-software-based-power-side-channel-attacks-on-x86)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#platypus-software-based-power-side-channel-attacks-on-x86)
### Authors
* Moritz Lipp, Graz University of Technology
* Andreas Kogler, Graz University of Technology
* David Oswald, University of Birmingham, UK
* Michael Schwarz, CISPA Helmholtz Center for Information Security
* Catherine Easdon, Graz University of Technology
* Claudio Canella, Graz University of Technology
* Daniel Gruss, Graz University of Technology
### Abstract
> Power side-channel attacks exploit variations in power consumption to extract secrets from a device, e.g., cryptographic keys. Prior attacks typically required physical access to the target device and specialized equipment such as probes and a high-resolution oscilloscope.In this paper, we present PLATYPUS attacks, which are novel software-based power side-channel attacks on Intel server, desktop, and laptop CPUs. We exploit unprivileged access to the Intel Running Average Power Limit (RAPL) interface that exposes values directly correlated with power consumption, forming a low-resolution side channel.We show that with sufficient statistical evaluation, we can observe variations in power consumption, which distinguish different instructions and different Hamming weights of operands and memory loads. This enables us to not only monitor the control flow of applications but also to infer data and extract cryptographic keys. We demonstrate how an unprivileged attacker can leak AES-NI keys from Intel SGX and the Linux kernel, break kernel address-space layout randomization (KASLR), infer secret instruction streams, and establish a timing-independent covert channel. We also present a privileged attack on mbed TLS, utilizing precise execution control to recover RSA keys from an SGX enclave. We discuss countermeasures and show that mitigating these attacks in a privileged context is not trivial.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519416/](https://ieeexplore.ieee.org/document/9519416/)
## Defensive Technology Use by Political Activists During the Sudanese Revolution.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#defensive-technology-use-by-political-activists-during-the-sudanese-revolution)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#defensive-technology-use-by-political-activists-during-the-sudanese-revolution)
### Authors
* Alaa Daffalla, Department of Electrical Engineering & Computer Science and ITTC, University of Kansas
* Lucy Simko, Paul G. Allen School of Computer Science & Engineering, University of Washington
* Tadayoshi Kohno, Paul G. Allen School of Computer Science & Engineering, University of Washington
* Alexandru G. Bardas, Department of Electrical Engineering & Computer Science and ITTC, University of Kansas
### Abstract
> Political activism is a worldwide force in geopolitical change and has, historically, helped lead to greater justice, equality, and stopping human rights abuses. A modern revolution—an extreme form of political activism—pits activists, who rely on technology for critical operational tasks, against a resource-rich government that controls the very telecommunications network they must use to operationalize, putting the technology they use under extreme stress. Our work presents insights about activists’ technological defense strategies from interviews with 13 political activists who were active during the 2018-2019 Sudanese revolution. We find that politics and society are driving factors of security and privacy behavior and app adoption. Moreover, a social media blockade can trigger a series of anti-censorship approaches at scale, while a complete internet blackout can cripple activists’ use of technology. Even though the activists’ technological defenses against the threats of surveillance, arrest and physical device seizure were low tech, they were largely sufficient against their adversary. Through these results, we surface key design principles, but we observe that the generalization of design recommendations often runs into fundamental tensions between the security and usability needs of different user groups. Thus, we provide a set of structured questions in an attempt to turn these tensions into opportunities for technology designers and policy makers.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519493/](https://ieeexplore.ieee.org/document/9519493/)
## DP-Sniper: Black-Box Discovery of Differential Privacy Violations using Classifiers.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#dp-sniper-black-box-discovery-of-differential-privacy-violations-using-classifiers)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#dp-sniper-black-box-discovery-of-differential-privacy-violations-using-classifiers)
### Authors
* Benjamin Bichsel, ETH Zurich, Switzerland
* Samuel Steffen, ETH Zurich, Switzerland
* Ilija Bogunovic, ETH Zurich, Switzerland
* Martin Vechev, ETH Zurich, Switzerland
### Abstract
> We present DP-Sniper, a practical black-box method that automatically finds violations of differential privacy.DP-Sniper is based on two key ideas: (i) training a classifier to predict if an observed output was likely generated from one of two possible inputs, and (ii) transforming this classifier into an approximately optimal attack on differential privacy.Our experimental evaluation demonstrates that DP-Sniper obtains up to 12.4 times stronger guarantees than state-of-the-art, while being 15.5 times faster. Further, we show that DP-Sniper is effective in exploiting floating-point vulnerabilities of naively implemented algorithms: it detects that a supposedly 0.1-differentially private implementation of the Laplace mechanism actually does not satisfy even 0.25-differential privacy.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519405/](https://ieeexplore.ieee.org/document/9519405/)
## Is Private Learning Possible with Instance Encoding?
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#is-private-learning-possible-with-instance-encoding)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#is-private-learning-possible-with-instance-encoding)
### Authors
* Nicholas Carlini, Google
* Samuel Deng, Columbia University
* Sanjam Garg, UC Berkeley and NTT Research
* Somesh Jha, University of Wisconsin
* Saeed Mahloujifar, Princeton University
* Mohammad Mahmoody, University of Virginia
* Abhradeep Thakurta, Google
* Florian Tramèr, Stanford University
### Abstract
> A private machine learning algorithm hides as much as possible about its training data while still preserving accuracy. In this work, we study whether a non-private learning algorithm can be made private by relying on an instance-encoding mechanism that modifies the training inputs before feeding them to a normal learner. We formalize both the notion of instance encoding and its privacy by providing two attack models. We first prove impossibility results for achieving a (stronger) model. Next, we demonstrate practical attacks in the second (weaker) attack model on InstaHide, a recent proposal by Huang, Song, Li and Arora [ICML’20] that aims to use instance encoding for privacy.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519450/](https://ieeexplore.ieee.org/document/9519450/)
## High-Frequency Trading on Decentralized On-Chain Exchanges.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#high-frequency-trading-on-decentralized-on-chain-exchanges)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#high-frequency-trading-on-decentralized-on-chain-exchanges)
### Authors
* Liyi Zhou, Imperial College, London, United Kingdom
* Kaihua Qin, Imperial College, London, United Kingdom
* Christof Ferreira Torres, University of Luxembourg, Luxembourg
* Duc V Le, Purdue University, United States
* Arthur Gervais, Imperial College, London, United Kingdom
### Abstract
> Decentralized exchanges (DEXs) allow parties to participate in financial markets while retaining full custody of their funds. However, the transparency of blockchain-based DEX in combination with the latency for transactions to be processed, makes market-manipulation feasible. For instance, adversaries could perform front-running — the practice of exploiting (typically non-public) information that may change the price of an asset for financial gain.In this work we formalize, analytically exposit and empirically evaluate an augmented variant of front-running: sandwich attacks, which involve front- and back-running victim transactions on a blockchain-based DEX. We quantify the probability of an adversarial trader being able to undertake the attack, based on the relative positioning of a transaction within a blockchain block. We find that a single adversarial trader can earn a daily revenue of over several thousand USD when performing sandwich attacks on one particular DEX — Uniswap, an exchange with over 5M USD daily trading volume by June 2020. In addition to a single-adversary game, we simulate the outcome of sandwich attacks under multiple competing adversaries, to account for the real-world trading environment.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519421/](https://ieeexplore.ieee.org/document/9519421/)
## Red Belly: A Secure, Fair and Scalable Open Blockchain.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#red-belly-a-secure-fair-and-scalable-open-blockchain)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#red-belly-a-secure-fair-and-scalable-open-blockchain)
### Authors
* Tyler Crain, University of Sydney, Australia
* Christopher Natoli, University of Sydney, Australia
* Vincent Gramoli, University of Sydney and CSIRO, Australia
### Abstract
> Blockchain has found applications to track ownership of digital assets. Yet, several blockchains were shown vulnerable to network attacks. It is thus crucial for companies to adopt secure blockchains before moving them to production. In this paper, we present Red Belly Blockchain (RBBC), the first secure blockchain whose throughput scales to hundreds of geodistributed consensus participants. To this end, we drastically revisited Byzantine Fault Tolerant (BFT) blockchains through three contributions: (i) defining the Set Byzantine Con-sensus problem of agreeing on a superblock of all proposed blocks instead of a single block; (ii) adopting a fair leaderless design to offer censorship-resistance guaranteeing the commit of correctly requested transactions; (iii) introducing sharded verification to limit the number of signature verifications without hampering security. We evaluate RBBC on up to 1000 VMs of 3 different types, spread across 4 continents, and under attacks. Although its performance is affected by attacks, RBBC scales in that its throughput increases to hundreds of consensus nodes and achieves 30k TPS throughput and 3 second latency on 1000 VMs, hence improving by 3× both the latency and the throughput of its closest competitor.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519440/](https://ieeexplore.ieee.org/document/9519440/)
## Diane: Identifying Fuzzing Triggers in Apps to Generate Under-constrained Inputs for IoT Devices.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#diane-identifying-fuzzing-triggers-in-apps-to-generate-under-constrained-inputs-for-iot-devices)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#diane-identifying-fuzzing-triggers-in-apps-to-generate-under-constrained-inputs-for-iot-devices)
### Authors
* Nilo Redini, UC Santa Barbara
* Andrea Continella, University of Twente
* Dipanjan Das, UC Santa Barbara
* Giulio De Pasquale, UC Santa Barbara
* Noah Spahn, UC Santa Barbara
* Aravind Machiry, Purdue University
* Antonio Bianchi, Purdue University
* Christopher Kruegel, UC Santa Barbara
* Giovanni Vigna, UC Santa Barbara
### Abstract
> Internet of Things (IoT) devices have rooted themselves in the everyday life of billions of people. Thus, researchers have applied automated bug finding techniques to improve their overall security. However, due to the difficulties in extracting and emulating custom firmware, black-box fuzzing is often the only viable analysis option. Unfortunately, this solution mostly produces invalid inputs, which are quickly discarded by the targeted IoT device and do not penetrate its code. Another proposed approach is to leverage the companion app (i.e., the mobile app typically used to control an IoT device) to generate well-structured fuzzing inputs. Unfortunately, the existing solutions produce fuzzing inputs that are constrained by app-side validation code, thus significantly limiting the range of discovered vulnerabilities.In this paper, we propose a novel approach that overcomes these limitations. Our key observation is that there exist functions inside the companion app that can be used to generate optimal (i.e., valid yet under-constrained) fuzzing inputs. Such functions, which we call fuzzing triggers, are executed before any data-transforming functions (e.g., network serialization), but after the input validation code. Consequently, they generate inputs that are not constrained by app-side sanitization code, and, at the same time, are not discarded by the analyzed IoT device due to their invalid format. We design and develop Diane, a tool that combines static and dynamic analysis to find fuzzing triggers in Android companion apps, and then uses them to fuzz IoT devices automatically. We use Diane to analyze 11 popular IoT devices, and identify 11 bugs, 9 of which are zero days. Our results also show that without using fuzzing triggers, it is not possible to generate bug-triggering inputs for many devices.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519432/](https://ieeexplore.ieee.org/document/9519432/)
## Data Privacy in Trigger-Action Systems.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#data-privacy-in-trigger-action-systems)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#data-privacy-in-trigger-action-systems)
### Authors
* Yunang Chen, University of Wisconsin, Madison
* Amrita Roy Chowdhury, University of Wisconsin, Madison
* Ruizhe Wang, University of Wisconsin, Madison
* Andrei Sabelfeld, Chalmers University of Technology
* Rahul Chatterjee, University of Wisconsin, Madison
* Earlence Fernandes, University of Wisconsin, Madison
### Abstract
> Trigger-action platforms (TAPs) allow users to connect independent web-based or IoT services to achieve useful automation. They provide a simple interface that helps end-users create trigger-compute-action rules that pass data between disparate Internet services. Unfortunately, TAPs introduce a large-scale security risk: if they are compromised, attackers will gain access to sensitive data for millions of users. To avoid this risk, we propose eTAP, a privacy-enhancing trigger-action platform that executes trigger-compute-action rules without accessing users’ private data in plaintext or learning anything about the results of the computation. We use garbled circuits as a primitive, and leverage the unique structure of trigger-compute-action rules to make them practical. We formally state and prove the security guarantees of our protocols. We prototyped eTAP, which supports the most commonly used operations on popular commercial TAPs like IFTTT and Zapier. Specifically, it supports Boolean, arithmetic, and string operations on private trigger data and can run 100% of the top-500 rules of IFTTT users and 93.4% of all publicly-available rules on Zapier. Based on ten existing rules that exercise a wide variety of operations, we show that eTAP has a modest performance impact: on average rule execution latency increases by 70 ms (55%) and throughput reduces by 59%.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519495/](https://ieeexplore.ieee.org/document/9519495/)
## Which Privacy and Security Attributes Most Impact Consumers' Risk Perception and Willingness to Purchase IoT Devices?
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#which-privacy-and-security-attributes-most-impact-consumers-risk-perception-and-willingness-to-purchase-iot-devices)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#which-privacy-and-security-attributes-most-impact-consumers-risk-perception-and-willingness-to-purchase-iot-devices)
### Authors
* Pardis Emami-Naeini, University of Washington
* Janarth Dheenadhayalan, Carnegie Mellon University
* Yuvraj Agarwal, Carnegie Mellon University
* Lorrie Faith Cranor, Carnegie Mellon University
### Abstract
> In prior work, researchers proposed an Internet of Things (IoT) security and privacy label akin to a food nutrition label, based on input from experts. We conducted a survey with 1,371 Mechanical Turk (MTurk) participants to test the effectiveness of each of the privacy and security attribute-value pairs proposed in that prior work along two key dimensions: ability to convey risk to consumers and impact on their willingness to purchase an IoT device. We found that the values intended to communicate increased risk were generally perceived that way by participants. For example, we found that consumers perceived more risk when a label conveyed that data would be sold to third parties than when it would not be sold at all, and that consumers were more willing to purchase devices when they knew that their data would not be retained or shared with others. However, participants’ risk perception did not always align with their willingness to purchase, sometimes due to usability concerns. Based on our findings, we propose actionable recommendations on how to more effectively present privacy and security attributes on an IoT label to better communicate risk to consumers.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519463/](https://ieeexplore.ieee.org/document/9519463/)
## An Interactive Prover for Protocol Verification in the Computational Model.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#an-interactive-prover-for-protocol-verification-in-the-computational-model)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#an-interactive-prover-for-protocol-verification-in-the-computational-model)
### Authors
* David Baelde, LMF, ENS Paris-Saclay & CNRS, Université Paris-Saclay, France
* Stéphanie Delaune, CNRS, IRISA, Univ Rennes, France
* Charlie Jacomme, CISPA Helmholtz Center for Information Security, Germany
* Adrien Koutsos, Inria, Paris, France
* Solène Moreau, CNRS, IRISA, Univ Rennes, France
### Abstract
> Given the central importance of designing secure protocols, providing solid mathematical foundations and computer-assisted methods to attest for their correctness is becoming crucial. Here, we elaborate on the formal approach introduced by Bana and Comon in [10], [11], which was originally designed to analyze protocols for a fixed number of sessions, and lacks support for proof mechanization.In this paper, we present a framework and an interactive prover allowing to mechanize proofs of security protocols for an arbitrary number of sessions in the computational model. More specifically, we develop a meta-logic as well as a proof system for deriving security properties. Proofs in our system only deal with high-level, symbolic representations of protocol executions, similar to proofs in the symbolic model, but providing security guarantees at the computational level. We have implemented our approach within a new interactive prover, the Squirrel prover, taking as input protocols specified in the applied pi-calculus, and we have performed a number of case studies covering a variety of primitives (hashes, encryption, signatures, Diffie-Hellman exponentiation) and security properties (authentication, strong secrecy, unlinkability).

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519392/](https://ieeexplore.ieee.org/document/9519392/)
## SmartPulse: Automated Checking of Temporal Properties in Smart Contracts.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#smartpulse-automated-checking-of-temporal-properties-in-smart-contracts)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#smartpulse-automated-checking-of-temporal-properties-in-smart-contracts)
### Authors
* Jon Stephens, The University of Texas, Austin
* Kostas Ferles, The University of Texas, Austin
* Benjamin Mariano, The University of Texas, Austin
* Shuvendu Lahiri, Microsoft Research
* Isil Dillig, The University of Texas, Austin
### Abstract
> Smart contracts are programs that run on the blockchain and digitally enforce the execution of contracts between parties. Because bugs in smart contracts can have serious monetary consequences, ensuring the correctness of such software is of utmost importance. In this paper, we present a novel technique, and its implementation in a tool called SMARTPULSE, for automatically verifying temporal properties in smart contracts. SMARTPULSE is the first smart contract verification tool that is capable of checking liveness properties, which ensure that "something good" will eventually happen (e.g., "I will eventually receive my refund"). We experimentally evaluate SMARTPULSE on a broad class of smart contracts and properties and show that (a) SMARTPULSE allows automatically verifying important liveness properties, (b) it is competitive with or better than state-of-the-art tools for safety verification, and (c) it can automatically generate attacks for vulnerable contracts.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519387/](https://ieeexplore.ieee.org/document/9519387/)
## An I/O Separation Model for Formal Verification of Kernel Implementations.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#an-i-o-separation-model-for-formal-verification-of-kernel-implementations)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#an-i-o-separation-model-for-formal-verification-of-kernel-implementations)
### Authors
* Miao Yu, ECE Department and CyLab, Carnegie Mellon University
* Virgil Gligor, ECE Department and CyLab, Carnegie Mellon University
* Limin Jia, ECE Department and CyLab, Carnegie Mellon University
### Abstract
> Commodity I/O hardware often fails to separate I/O transfers of isolated OS and applications code. Even when using the best I/O hardware, commodity systems sometimes trade off separation assurance for increased performance. Remarkably, device firmware need not be malicious. Instead, any malicious driver, even if isolated in its own execution domain, can manipulate its device to breach I/O separation. To prevent such vulnerabilities with high assurance, a formal I/O separation model and its use in automatic generation of secure I/O kernel code is necessary.This paper presents a formal I/O separation model, which defines a separation policy based on authorization of I/O transfers and is hardware agnostic. The model, its refinement, and instantiation in the Wimpy kernel design, are formally specified and verified in Dafny. We then specify the kernel implementation and automatically generate verified-correct assembly code that enforces the I/O separation policies. Our formal modeling enables the discovery of heretofore unknown design and implementation vulnerabilities of the original Wimpy kernel. Finally, we outline how the model can be applied to other I/O kernels and conclude with the key lessons learned.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519491/](https://ieeexplore.ieee.org/document/9519491/)
## Diogenes: Lightweight Scalable RSA Modulus Generation with a Dishonest Majority.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#diogenes-lightweight-scalable-rsa-modulus-generation-with-a-dishonest-majority)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#diogenes-lightweight-scalable-rsa-modulus-generation-with-a-dishonest-majority)
### Authors
* Megan Chen, Northeastern U. & Ligero Inc.
* Carmit Hazay, Bar-Ilan U. & Ligero Inc.
* Yuval Ishai, Technion
* Yuriy Kashnikov, Ligero Inc.
* Daniele Micciancio, UC San Diego
* Tarik Riviere, Ligero Inc.
* Abhi Shelat, Northeastern U. & Ligero Inc.
* Muthu Venkitasubramaniam, U. of Rochester & Ligero Inc.
* Ruihan Wang, Ligero Inc.
### Abstract
> In this work, we design and implement the first protocol for distributed generation of an RSA modulus that can support thousands of parties and offers security against active corruption of an arbitrary number of parties. In a nutshell, we first design a highly optimized protocol for this scale that is secure against passive corruptions, and then amplify its security to withstand active corruptions using lightweight succinct zero-knowledge proofs. Our protocol achieves security with "identifiable abort," where a corrupted party is identified whenever the protocol aborts, and supports public verifiability.Our protocol against passive corruptions extends the recent work of Chen et al. (CRYPTO 2020) that, in turn, is based on the blueprint introduced in the original work of Boneh-Franklin protocol (CRYPTO 1997, J. ACM, 2001). Specifically, we reduce the task of sampling a modulus to secure distributed multiplication, which we implement via an efficient threshold additively homomorphic encryption scheme based on the Ring-LWE assumption. This results in a protocol where the (amortized) per-party communication cost grows logarithmically in the number of parties. In order to minimize the work done by the parties, we employ a "publicly verifiable" coordinator that is connected to all parties and only performs computations on public data.We implemented both the passive and the active variants of our protocol and ran experiments using 2 to 4,000 parties. This is the first implementation of any MPC protocol that can scale to more than 1,000 parties. For generating a 2048-bit modulus among 1,000 parties, our passive protocol executed in under 6 minutes and the active variant ran in under 25 minutes.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519483/](https://ieeexplore.ieee.org/document/9519483/)
## Refresh When You Wake Up: Proactive Threshold Wallets with Offline Devices.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#refresh-when-you-wake-up-proactive-threshold-wallets-with-offline-devices)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#refresh-when-you-wake-up-proactive-threshold-wallets-with-offline-devices)
### Authors
* Yashvanth Kondi, Northeastern University
* Bernardo Magri, Concordium Blockchain Research Center, Aarhus University
* Claudio Orlandi, Aarhus University
* Omer Shlomovits, KZen Research
### Abstract
> Proactive security is the notion of defending a distributed system against an attacker who compromises different devices through its lifetime, but no more than a threshold number of them at any given time. The emergence of threshold wallets for more secure cryptocurrency custody warrants an efficient proactivization protocol tailored to this setting. While many proactivization protocols have been devised and studied in the literature, none of them have communication patterns ideal for threshold wallets. In particular a (t, n) threshold wallet is designed to have t parties jointly sign a transaction (of which only one may be honest) whereas even the best current proactivization protocols require at least an additional t−1 honest parties to come online simultaneously to refresh the system.In this work we formulate the notion of refresh with offline devices, where any t <inf>ρ</inf>  parties may proactivize the system at any time and the remaining n−t <inf>ρ</inf>  offline parties can non-interactively "catch up" at their leisure. However, many subtle issues arise in realizing this pattern. We identify that this problem is divided into two settings: (2, n) and (t, n) where t > 2. We develop novel techniques to address both settings as follows:•We show that the (2, n) setting permits a tight t <inf>ρ</inf>  for refresh. In particular we give a highly efficient t <inf>ρ</inf>  = 2 protocol to upgrade a number of standard (2, n) threshold signature schemes to proactive security with offline refresh. This protocol can augment existing implementations of threshold wallets for immediate use– we show that proactivization does not have to interfere with their native mode of operation. This technique is compatible with Schnorr, EdDSA, and with some effort even sophisticated ECDSA protocols. By implementation we show that proactivizing two different recent (2, n) ECDSA protocols incurs only 14% and 24% computational overhead respectively, less than 200 bytes, and no extra round of communication.•For the general (t, n) setting we prove that it is impossible to construct an offline refresh protocol with t <inf>ρ</inf>  < 2(t−1), i.e. tolerating a dishonest majority of online parties. Our techniques are novel in reasoning about the message complexity of proactive security, and may be of independent interest.Our results are positive for small-scale decentralization (such as 2FA with threshold wallets), and negative for large-scale distributed systems with higher thresholds. We thus initiate the study of proactive security with offline refresh, with a comprehensive treatment of the dishonest majority case.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519453/](https://ieeexplore.ieee.org/document/9519453/)
## Compact Certificates of Collective Knowledge.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#compact-certificates-of-collective-knowledge)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#compact-certificates-of-collective-knowledge)
### Authors
* Silvio Micali, Algorand; MIT CSAIL
* Leonid Reyzin, Algorand; Boston University
* Georgios Vlachos, Axelar and University of Waterloo
* Riad S. Wahby, Algorand; Stanford
* Nickolai Zeldovich, Algorand; MIT CSAIL
### Abstract
> We introduce compact certificate schemes, which allow any party to take a large number of signatures on a message M, by many signers of different weights, and compress them to a much shorter certificate. This certificate convinces the verifiers that signers with sufficient total weight signed M, even though the verifier will not see—let alone verify—all of the signatures. Thus, for example, a compact certificate can be used to prove that parties who jointly have a sufficient total account balance have attested to a given block in a blockchain.After defining compact certificates, we demonstrate an effi-cient compact certificate scheme. We then show how to implement such a scheme in a decentralized setting over an unreliable network and in the presence of adversarial parties who wish to disrupt certificate creation. Our evaluation shows that compact certificates are 50–280× smaller and 300–4000 cheaper to verify than a natural baseline approach.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519437/](https://ieeexplore.ieee.org/document/9519437/)
## One Engine to Fuzz 'em All: Generic Language Processor Testing with Semantic Validation.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#one-engine-to-fuzz-em-all-generic-language-processor-testing-with-semantic-validation)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#one-engine-to-fuzz-em-all-generic-language-processor-testing-with-semantic-validation)
### Authors
* Yongheng Chen, Georgia Institute of Technology, Pennsylvania State University
* Rui Zhong, Georgia Institute of Technology, Pennsylvania State University; UESTC
* Hong Hu, Georgia Institute of Technology, Pennsylvania State University; UESTC
* Hangfan Zhang, Georgia Institute of Technology, Pennsylvania State University; UESTC
* Yupeng Yang, UESTC
* Dinghao Wu, Georgia Institute of Technology, Pennsylvania State University; UESTC
* Wenke Lee, Georgia Institute of Technology, Pennsylvania State University
### Abstract
> Language processors, such as compilers and interpreters, are indispensable in building modern software. Errors in language processors can lead to severe consequences, like incorrect functionalities or even malicious attacks. However, it is not trivial to automatically test language processors to find bugs. Existing testing methods (or fuzzers) either fail to generate high-quality (i.e., semantically correct) test cases, or only support limited programming languages.In this paper, we propose POLYGLOT, a generic fuzzing framework that generates high-quality test cases for exploring processors of different programming languages. To achieve the generic applicability, POLYGLOT neutralizes the difference in syntax and semantics of programming languages with a uniform intermediate representation (IR). To improve the language validity, POLYGLOT performs constrained mutation and semantic validation to preserve syntactic correctness and fix semantic errors. We have applied POLYGLOT on 21 popular language processors of 9 programming languages, and identified 173 new bugs, 113 of which are fixed with 18 CVEs assigned. Our experiments show that POLYGLOT can support a wide range of programming languages, and outperforms existing fuzzers with up to 30× improvement in code coverage.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519403/](https://ieeexplore.ieee.org/document/9519403/)
## StochFuzz: Sound and Cost-effective Fuzzing of Stripped Binaries by Incremental and Stochastic Rewriting.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#stochfuzz-sound-and-cost-effective-fuzzing-of-stripped-binaries-by-incremental-and-stochastic-rewriting)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#stochfuzz-sound-and-cost-effective-fuzzing-of-stripped-binaries-by-incremental-and-stochastic-rewriting)
### Authors
* Zhuo Zhang, Purdue University
* Wei You, Renmin University of China
* Guanhong Tao, Purdue University
* Yousra Aafer, University of Waterloo
* Xuwei Liu, Purdue University
* Xiangyu Zhang, Purdue University
### Abstract
> Fuzzing stripped binaries poses many hard challenges as fuzzers require instrumenting binaries to collect runtime feedback for guiding input mutation. However, due to the lack of symbol information, correct instrumentation is difficult on stripped binaries. Existing techniques either rely on hardware and expensive dynamic binary translation engines such as QEMU, or make impractical assumptions such as binaries do not have inlined data. We observe that fuzzing is a highly repetitive procedure providing a large number of trial-and-error opportunities. As such, we propose a novel incremental and stochastic rewriting technique StochFuzz that piggy-backs on the fuzzing procedure. It generates many different versions of rewritten binaries whose validity can be approved/disapproved by numerous fuzzing runs. Probabilistic analysis is used to aggregate evidence collected through the sample runs and improve rewriting. The process eventually converges on a correctly rewritten binary. We evaluate StochFuzz on two sets of real-world programs and compare with five other baselines. The results show that StochFuzz outperforms state-of-the-art binary-only fuzzers (e.g., e9patch, ddisasm, and RetroWrite) in terms of soundness and cost-effectiveness and achieves performance comparable to source-based fuzzers. StochFuzz is publicly available [1].

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519407/](https://ieeexplore.ieee.org/document/9519407/)
## NtFuzz: Enabling Type-Aware Kernel Fuzzing on Windows with Static Binary Analysis.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#ntfuzz-enabling-type-aware-kernel-fuzzing-on-windows-with-static-binary-analysis)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#ntfuzz-enabling-type-aware-kernel-fuzzing-on-windows-with-static-binary-analysis)
### Authors
* Jaeseung Choi, KAIST
* Kangsu Kim, KAIST
* Daejin Lee, KAIST
* Sang Kil Cha, KAIST
### Abstract
> Although it is common practice for kernel fuzzers to leverage type information of system calls, current Windows kernel fuzzers do not follow the practice as most system calls are private and largely undocumented. In this paper, we present a practical static binary analyzer that automatically infers system call types on Windows at scale. We incorporate our analyzer to NtFuzz, a type-aware Windows kernel fuzzing framework. To our knowledge, this is the first practical fuzzing system that utilizes scalable binary analysis on a COTS OS. With NtFuzz, we found 11 previously unknown kernel bugs, and earned $25,000 through the bug bounty program offered by Microsoft. All these results confirm the practicality of our system as a kernel fuzzer.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519448/](https://ieeexplore.ieee.org/document/9519448/)
## Who is Real Bob? Adversarial Attacks on Speaker Recognition Systems.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#who-is-real-bob-adversarial-attacks-on-speaker-recognition-systems)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#who-is-real-bob-adversarial-attacks-on-speaker-recognition-systems)
### Authors
* Guangke Chen, ShanghaiTech University; Chinese Academy of Sciences, Shanghai Institute of Microsystem and Information Technology; University of Chinese Academy of Sciences
* Sen Chenb, College of Intelligence and Computing, Tianjin University; Nanyang Technological University
* Lingling Fan, Nanyang Technological University
* Xiaoning Du, Nanyang Technological University
* Zhe Zhao, ShanghaiTech University
* Fu Song, ShanghaiTech University; Shanghai Engineering Research Center of Intelligent Vision and Imaging
* Yang Liu, Nanyang Technological University
### Abstract
> Speaker recognition (SR) is widely used in our daily life as a biometric authentication or identification mechanism. The popularity of SR brings in serious security concerns, as demonstrated by recent adversarial attacks. However, the impacts of such threats in the practical black-box setting are still open, since current attacks consider the white-box setting only.In this paper, we conduct the first comprehensive and systematic study of the adversarial attacks on SR systems (SRSs) to understand their security weakness in the practical black-box setting. For this purpose, we propose an adversarial attack, named FAKEBOB, to craft adversarial samples. Specifically, we formulate the adversarial sample generation as an optimization problem, incorporated with the confidence of adversarial samples and maximal distortion to balance between the strength and imperceptibility of adversarial voices. One key contribution is to propose a novel algorithm to estimate the score threshold, a feature in SRSs, and use it in the optimization problem to solve the optimization problem. We demonstrate that FAKEBOB achieves 99% targeted attack success rate on both open-source and commercial systems. We further demonstrate that FAKEBOB is also effective on both open-source and commercial systems when playing over the air in the physical world. Moreover, we have conducted a human study which reveals that it is hard for human to differentiate the speakers of the original and adversarial voices. Last but not least, we show that four promising defense methods for adversarial attack from the speech recognition domain become ineffective on SRSs against FAKEBOB, which calls for more effective defense methods. We highlight that our study peeks into the security implications of adversarial attacks on SRSs, and realistically fosters to improve the security robustness of SRSs.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519486/](https://ieeexplore.ieee.org/document/9519486/)
## Hear "No Evil", See "Kenansville"*: Efficient and Transferable Black-Box Attacks on Speech Recognition and Voice Identification Systems.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#hear-no-evil-see-kenansville-efficient-and-transferable-black-box-attacks-on-speech-recognition-and-voice-identification-systems)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#hear-no-evil-see-kenansville-efficient-and-transferable-black-box-attacks-on-speech-recognition-and-voice-identification-systems)
### Authors
* Hadi Abdullah, University of Florida
* Muhammad Sajidur Rahman, University of Florida
* Washington Garcia, University of Florida
* Kevin Warren, University of Florida
* Anurag Swarnim Yadav, University of Florida
* Tom Shrimpton, University of Florida
* Patrick Traynor, University of Florida
### Abstract
> Automatic speech recognition and voice identification systems are being deployed in a wide array of applications, from providing control mechanisms to devices lacking traditional interfaces, to the automatic transcription of conversations and authentication of users. Many of these applications have significant security and privacy considerations. We develop attacks that force mistranscription and misidentification in state of the art systems, with minimal impact on human comprehension. Processing pipelines for modern systems are comprised of signal preprocessing and feature extraction steps, whose output is fed to a machine-learned model. Prior work has focused on the models, using white-box knowledge to tailor model-specific attacks. We focus on the pipeline stages before the models, which (unlike the models) are quite similar across systems. As such, our attacks are black-box, transferable, can be tuned to require zero queries to the target, and demonstrably achieve mistranscription and misidentification rates as high as 100% by modifying only a few frames of audio. We perform a study via Amazon Mechanical Turk demonstrating that there is no statistically significant difference between human perception of regular and perturbed audio. Our findings suggest that models may learn aspects of speech that are generally not perceived by human subjects, but that are crucial for model accuracy.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519472/](https://ieeexplore.ieee.org/document/9519472/)
## SoK: The Faults in our ASRs: An Overview of Attacks against Automatic Speech Recognition and Speaker Identification Systems.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#sok-the-faults-in-our-asrs-an-overview-of-attacks-against-automatic-speech-recognition-and-speaker-identification-systems)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#sok-the-faults-in-our-asrs-an-overview-of-attacks-against-automatic-speech-recognition-and-speaker-identification-systems)
### Authors
* Hadi Abdullah, University of Florida
* Kevin Warren, University of Florida
* Vincent Bindschaedler, University of Florida
* Nicolas Papernot, University of Toronto
* Patrick Traynor, University of Florida
### Abstract
> Speech and speaker recognition systems are employed in a variety of applications, from personal assistants to telephony surveillance and biometric authentication. The wide deployment of these systems has been made possible by the improved accuracy in neural networks. Like other systems based on neural networks, recent research has demonstrated that speech and speaker recognition systems are vulnerable to attacks using manipulated inputs. However, as we demonstrate in this paper, the end-to-end architecture of speech and speaker systems and the nature of their inputs make attacks and defenses against them substantially different than those in the image space. We demonstrate this first by systematizing existing research in this space and providing a taxonomy through which the community can evaluate future work. We then demonstrate experimentally that attacks against these models almost universally fail to transfer. In so doing, we argue that substantial additional work is required to provide adequate mitigations in this space.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519395/](https://ieeexplore.ieee.org/document/9519395/)
## Cross-Domain Access Control Encryption: Arbitrary-policy, Constant-size, Efficient.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#cross-domain-access-control-encryption-arbitrary-policy-constant-size-efficient)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#cross-domain-access-control-encryption-arbitrary-policy-constant-size-efficient)
### Authors
* Xiuhua Wang, The Chinese University of Hong Kong, Shatin, N.T., Hong Kong
* Sherman S. M. Chow, The Chinese University of Hong Kong, Shatin, N.T., Hong Kong
### Abstract
> Access control is a fundamental keystone in security. Damgard, Haagh, and Orlandi (TCC 2016) introduced access˚ control encryption (ACE) that enforces no-read and no-write rules without revealing the senders, receivers, or the content of the encrypted traffic. Existing designs of ACE for arbitrary policy (covering all possibilities of read/write relationship) rely on indistinguishability obfuscation or lattice-based assumptions, with either exponential-size ciphertexts or circuit realization of policy. Also, their designs mandate a private sanitizer key to remain perpetually online for sanitization. The only existing scheme that can afford a public sanitizer key supports only simple policies. To summarize, state-of-the-art ACE schemes only feature at most two of the following desirable properties: arbitrarypolicy, constant-size (ciphertext), and efficient (sanitization). This paper introduces an ACE scheme for arbitrary policy without sanitizer key, which solves the open question posed by Kim and Wu (Asiacrypt 2017). We also put forth the notion of cross-domain ACE, separating the key generator into the sender-authority and receiver-authority. Our scheme requires structure-preserving signatures, non-interactive zero-knowledge proof, and sanitizable identity-based broadcast encryption as the building blocks. It can be instantiated directly from pairing-based assumptions and features constant ciphertext size. We also prototyped our scheme and demonstrated its practical efficiency.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519503/](https://ieeexplore.ieee.org/document/9519503/)
## Lightweight Techniques for Private Heavy Hitters.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#lightweight-techniques-for-private-heavy-hitters)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#lightweight-techniques-for-private-heavy-hitters)
### Authors
* Dan Boneh, Stanford
* Elette Boyle, IDC Herzliya
* Henry Corrigan-Gibbs, EPFL and MIT CSAIL
* Niv Gilboa, Ben-Gurion University
* Yuval Ishai, Technion
### Abstract
> This paper presents a new protocol for solving the private heavy-hitters problem. In this problem, there are many clients and a small set of data-collection servers. Each client holds a private bitstring. The servers want to recover the set of all popular strings, without learning anything else about any client’s string. A web-browser vendor, for instance, can use our protocol to figure out which homepages are popular, without learning any user’s homepage. We also consider the simpler private subset-histogram problem, in which the servers want to count how many clients hold strings in a particular set without revealing this set to the clients.Our protocols use two data-collection servers and, in a protocol run, each client send sends only a single message to the servers. Our protocols protect client privacy against arbitrary misbehavior by one of the servers and our approach requires no public-key cryptography (except for secure channels), nor general-purpose multiparty computation. Instead, we rely on incremental distributed point functions, a new cryptographic tool that allows a client to succinctly secret-share the labels on the nodes of an exponentially large binary tree, provided that the tree has a single non-zero path. Along the way, we develop new general tools for providing malicious security in applications of distributed point functions.A limitation of our heavy-hitters protocol is that it reveals to the servers slightly more information than the set of popular strings itself. We precisely define and quantify this leakage and explain how to ameliorate its effects. In an experimental evaluation with two servers on opposite sides of the U.S., the servers can find the 200 most popular strings among a set of 400,000 client-held 256-bit strings in 54 minutes. Our protocols are highly parallelizable. We estimate that with 20 physical machines per logical server, our protocols could compute heavy hitters over ten million clients in just over one hour of computation.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519492/](https://ieeexplore.ieee.org/document/9519492/)
## SoK: Computer-Aided Cryptography.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#sok-computer-aided-cryptography)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#sok-computer-aided-cryptography)
### Authors
* Manuel Barbosa, University of Porto (FCUP) and INESC TEC
* Gilles Barthe, Max Planck Institute for Security & Privacy; IMDEA Software Institute
* Karthik Bhargavan, INRIA, Paris
* Bruno Blanchet, INRIA, Paris
* Cas Cremers, CISPA Helmholtz Center for Information Security
* Kevin Liao, Max Planck Institute for Security & Privacy; MIT
* Bryan Parno, Carnegie Mellon University
### Abstract
> Computer-aided cryptography is an active area of research that develops and applies formal, machine-checkable approaches to the design, analysis, and implementation of cryptography. We present a cross-cutting systematization of the computer-aided cryptography literature, focusing on three main areas: (i) design-level security (both symbolic security and computational security), (ii) functional correctness and efficiency, and (iii) implementation-level security (with a focus on digital side-channel resistance). In each area, we first clarify the role of computer-aided cryptography—how it can help and what the caveats are—in addressing current challenges. We next present a taxonomy of state-of-the-art tools, comparing their accuracy, scope, trustworthiness, and usability. Then, we highlight their main achievements, trade-offs, and research challenges. After covering the three main areas, we present two case studies. First, we study efforts in combining tools focused on different areas to consolidate the guarantees they can provide. Second, we distill the lessons learned from the computer-aided cryptography community’s involvement in the TLS 1.3 standardization effort. Finally, we conclude with recommendations to paper authors, tool developers, and standardization bodies moving forward.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519449/](https://ieeexplore.ieee.org/document/9519449/)
## ConDySTA: Context-Aware Dynamic Supplement to Static Taint Analysis.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#condysta-context-aware-dynamic-supplement-to-static-taint-analysis)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#condysta-context-aware-dynamic-supplement-to-static-taint-analysis)
### Authors
* Xueling Zhang, Department of Computer Science, University of Texas, San Antonio, Texas, USA
* Xiaoyin Wang, Department of Computer Science, University of Texas, San Antonio, Texas, USA
* Rocky Slavin, Department of Computer Science, University of Texas, San Antonio, Texas, USA
* Jianwei Niu, Department of Computer Science, University of Texas, San Antonio, Texas, USA
### Abstract
> Static taint analyses are widely-applied techniques to detect taint flows in software systems. Although they are theoretically conservative and de-signed to detect all possible taint flows, static taint analyses almost always exhibit false negatives due to a variety of implementation limitations. Dynamic programming language features, inaccessible code, and the usage of multiple programming languages in a software project are some of the major causes. To alleviate this problem, we developed a novel approach, DySTA, which uses dynamic taint analysis results as additional sources for static taint analysis. However, naïvely adding sources causes static analysis to lose context sensitivity and thus produce false positives. Thus, we developed a hybrid context matching algorithm and corresponding tool, ConDySTA, to preserve context sensitivity in DySTA. We applied REPRODROID [1], a comprehensive benchmarking framework for Android analysis tools, to evaluate ConDySTA. The results show that across 28 apps (1) ConDySTA was able to detect 12 out of 28 taint flows which were not detected by any of the six state-of-the-art static taint analyses considered in ReproDroid, and (2) ConDySTA reported no false positives, whereas nine were reported by DySTA alone. We further applied ConDySTA and FlowDroid to 100 top Android apps from Google Play, and ConDySTA was able to detect 39 additional taint flows (besides 281 taint flows found by FlowDroid) while preserving the context sensitivity of FlowDroid.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519468/](https://ieeexplore.ieee.org/document/9519468/)
## OSPREY: Recovery of Variable and Data Structure via Probabilistic Analysis for Stripped Binary.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#osprey-recovery-of-variable-and-data-structure-via-probabilistic-analysis-for-stripped-binary)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#osprey-recovery-of-variable-and-data-structure-via-probabilistic-analysis-for-stripped-binary)
### Authors
* Zhuo Zhang, Purdue University
* Yapeng Ye, Purdue University
* Wei You, Renmin University of China
* Guanhong Tao, Purdue University
* Wen-chuan Lee, Purdue University
* Yonghwi Kwon, University of Virginia
* Yousra Aafer, University of Waterloo
* Xiangyu Zhang, Purdue University
### Abstract
> Recovering variables and data structure information from stripped binary is a prominent challenge in binary program analysis. While various state-of-the-art techniques are effective in specific settings, such effectiveness may not generalize. This is mainly because the problem is inherently uncertain due to the information loss in compilation. Most existing techniques are deterministic and lack a systematic way of handling such uncertainty. We propose a novel probabilistic technique for variable and structure recovery. Random variables are introduced to denote the likelihood of an abstract memory location having various types and structural properties such as being a field of some data structure. These random variables are connected through probabilistic constraints derived through program analysis. Solving these constraints produces the posterior probabilities of the random variables, which essentially denote the recovery results. Our experiments show that our technique substantially outperforms a number of state-of-the-art systems, including IDA, Ghidra, Angr, and Howard. Our case studies demonstrate the recovered information improves binary code hardening and binary decompilation.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519451/](https://ieeexplore.ieee.org/document/9519451/)
## SoK: All You Ever Wanted to Know About x86/x64 Binary Disassembly But Were Afraid to Ask.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#sok-all-you-ever-wanted-to-know-about-x86-x64-binary-disassembly-but-were-afraid-to-ask)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#sok-all-you-ever-wanted-to-know-about-x86-x64-binary-disassembly-but-were-afraid-to-ask)
### Authors
* Chengbin Pang, Stevens Institute of Technology; Nanjing University
* Ruotong Yu, Stevens Institute of Technology
* Yaohui Chen, Facebook Inc
* Eric Koskinen, Stevens Institute of Technology
* Georgios Portokalidis, Stevens Institute of Technology
* Bing Mao, Nanjing University
* Jun Xu, Stevens Institute of Technology
### Abstract
> Disassembly of binary code is hard, but necessary for improving the security of binary software. Over the past few decades, research in binary disassembly has produced many tools and frameworks, which have been made available to researchers and security professionals. These tools employ a variety of strategies that grant them different characteristics. The lack of systematization, however, impedes new research in the area and makes selecting the right tool hard, as we do not understand the strengths and weaknesses of existing tools. In this paper, we systematize binary disassembly through the study of nine popular, open-source tools. We couple the manual examination of their code bases with the most comprehensive experimental evaluation (thus far) using 3,788 binaries. Our study yields a comprehensive description and organization of strategies for disassembly, classifying them as either algorithm or else heuristic. Meanwhile, we measure and report the impact of individual algorithms on the results of each tool. We find that while principled algorithms are used by all tools, they still heavily rely on heuristics to increase code coverage. Depending on the heuristics used, different coverage-vs-correctness trade-offs come in play, leading to tools with different strengths and weaknesses. We envision that these findings will help users pick the right tool and assist researchers in improving binary disassembly.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519438/](https://ieeexplore.ieee.org/document/9519438/)
## Learning Differentially Private Mechanisms.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#learning-differentially-private-mechanisms)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#learning-differentially-private-mechanisms)
### Authors
* Subhajit Roy, Computer Science and Engineering, Indian Institute of Technology Kanpur
* Justin Hsu, Department of Computer Sciences, University of Wisconsin–Madison
* Aws Albarghouthi, Department of Computer Sciences, University of Wisconsin–Madison
### Abstract
> Differential privacy is a formal, mathematical definition of data privacy that has gained traction in academia, industry, and government. The task of correctly constructing differentially private algorithms is non-trivial, and mistakes have been made in foundational algorithms. Currently, there is no automated support for converting an existing, non-private program into a differentially private version. In this paper, we propose a technique for automatically learning an accurate and differentially private version of a given non-private program. We show how to solve this difficult program synthesis problem via a combination of techniques: carefully picking representative example inputs, reducing the problem to continuous optimization, and mapping the results back to symbolic expressions. We demonstrate that our approach is able to learn foundational algorithms from the differential privacy literature and significantly outperforms natural program synthesis baselines.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519410/](https://ieeexplore.ieee.org/document/9519410/)
## Adversary Instantiation: Lower Bounds for Differentially Private Machine Learning.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#adversary-instantiation-lower-bounds-for-differentially-private-machine-learning)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#adversary-instantiation-lower-bounds-for-differentially-private-machine-learning)
### Authors
* Milad Nasr, University of Massachusetts, Amherst
* Shuang Songi, Google Brain
* Abhradeep Thakurta, Google Brain
* Nicolas Papernot, Google Brain
* Nicholas Carlin, Google Brain
### Abstract
> Differentially private (DP) machine learning allows us to train models on private data while limiting data leakage. DP formalizes this data leakage through a cryptographic game, where an adversary must predict if a model was trained on a dataset D, or a dataset D′ that differs in just one example. If observing the training algorithm does not meaningfully increase the adversary's odds of successfully guessing which dataset the model was trained on, then the algorithm is said to be differentially private. Hence, the purpose of privacy analysis is to upper bound the probability that any adversary could successfully guess which dataset the model was trained on.In our paper, we instantiate this hypothetical adversary in order to establish lower bounds on the probability that this distinguishing game can be won. We use this adversary to evaluate the importance of the adversary capabilities allowed in the privacy analysis of DP training algorithms.For DP-SGD, the most common method for training neural networks with differential privacy, our lower bounds are tight and match the theoretical upper bound. This implies that in order to prove better upper bounds, it will be necessary to make use of additional assumptions. Fortunately, we find that our attacks are significantly weaker when additional (realistic) restrictions are put in place on the adversary's capabilities. Thus, in the practical setting common to many real-world deployments, there is a gap between our lower bounds and the upper bounds provided by the analysis: differential privacy is conservative and adversaries may not be able to leak as much information as suggested by the theoretical bound.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519424/](https://ieeexplore.ieee.org/document/9519424/)
## Manipulation Attacks in Local Differential Privacy.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#manipulation-attacks-in-local-differential-privacy)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#manipulation-attacks-in-local-differential-privacy)
### Authors
* Albert Cheu, Khoury College of Computer Sciences, Northeastern University, Boston, Massachusetts
* Adam Smith, Department of Computer Science, Boston University, Boston, Massachusetts
* Jonathan Ullman, Khoury College of Computer Sciences, Northeastern University, Boston, Massachusetts
### Abstract
> Local differential privacy is a widely studied restriction on distributed algorithms that collect aggregates about sensitive user data, and is now deployed in several large systems. We initiate a systematic study of a fundamental limitation of locally differentially private protocols: they are highly vulnerable to adversarial manipulation. While any algorithm can be manipulated by adversaries who lie about their inputs, we show that any noninteractive locally differentially private protocol can be manipulated to a much greater extent—when the privacy level is high, or the domain size is large, a small fraction of users in the protocol can completely obscure the distribution of the honest users’ input. We also construct protocols that are optimally robust to manipulation for a variety of common tasks in local differential privacy. Finally, we give simple experiments validating our theoretical results, and demonstrating that proto-cols that are optimal without manipulation can have dramatically different levels of robustness to manipulation. Our results suggest caution when deploying local differential privacy and reinforce the importance of efficient cryptographic techniques for the distributed emulation of centrally differentially private mechanisms.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519418/](https://ieeexplore.ieee.org/document/9519418/)
## Bitcoin-Compatible Virtual Channels.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#bitcoin-compatible-virtual-channels)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#bitcoin-compatible-virtual-channels)
### Authors
* Lukas Aumayr, Department of Computer Science, TU Wien, Wien, Austria
* Matteo Maffei, Department of Computer Science, TU Wien, Wien, Austria
* Oğuzhan Ersoy, Department of Intelligent Systems, TU Delft, Delft, Netherlands
* Andreas Erwig, Department of Computer Science, TU Darmstadt, Darmstadt, Germany
* Sebastian Faust, Department of Computer Science, TU Darmstadt, Darmstadt, Germany
* Siavash Riahi, Department of Computer Science, TU Darmstadt, Darmstadt, Germany
* Kristina Hostáková, Department of Computer Science, ETH Zürich, Zürich, Switzerland
* Pedro Moreno-Sanchez, IMDEA Software Institute, Madrid, Spain
### Abstract
> Current permissionless cryptocurrencies such as Bitcoin suffer from a limited transaction rate and slow confirmation time, which hinders further adoption. Payment channels are one of the most promising solutions to address these problems, as they allow the parties of the channel to perform arbitrarily many payments in a peer-to-peer fashion while uploading only two transactions on the blockchain. This concept has been generalized into payment channel networks where a path of payment channels is used to settle the payment between two users that might not share a direct channel between them. However, this approach requires the active involvement of each user in the path, making the system less reliable (they might be offline), more expensive (they charge fees per payment), and slower (intermediaries need to be actively involved in the payment). To mitigate this issue, recent work has introduced the concept of virtual channels (IEEE S&P’19), which involve intermediaries only in the initial creation of a bridge between payer and payee, who can later on independently perform arbitrarily many off-chain transactions. Unfortunately, existing constructions are only available for Ethereum, as they rely on its account model and Turing-complete scripting language. The realization of virtual channels in other blockchain technologies with limited scripting capabilities, like Bitcoin, was so far considered an open challenge.In this work, we present the first virtual channel protocols that are built on the UTXO-model and require a scripting language supporting only a digital signature scheme and a timelock functionality, being thus backward compatible with virtually every cryptocurrency, including Bitcoin. We formalize the security properties of virtual channels as an ideal functionality in the Universal Composability framework and prove that our protocol constitutes a secure realization thereof. We have prototyped and evaluated our protocol on the Bitcoin blockchain, demonstrating its efficiency: for n sequential payments, they require an off-chain exchange of 9+2n transactions or a total of 3524+695n bytes, with no on-chain footprint in the optimistic case. This is a substantial improvement compared to routing payments in a payment channel network, which requires 8n transactions with a total of 3026n bytes to be exchanged.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519487/](https://ieeexplore.ieee.org/document/9519487/)
## On the Just-In-Time Discovery of Profit-Generating Transactions in DeFi Protocols.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#on-the-just-in-time-discovery-of-profit-generating-transactions-in-defi-protocols)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#on-the-just-in-time-discovery-of-profit-generating-transactions-in-defi-protocols)
### Authors
* Liyi Zhou, Imperial College London, United Kingdom
* Kaihua Qin, Imperial College London, United Kingdom
* Antoine Cully, Imperial College London, United Kingdom
* Benjamin Livshits, Imperial College London, United Kingdom
* Arthur Gervais, Imperial College London, United Kingdom
### Abstract
> Decentralized Finance (DeFi) is a blockchain-asset-enabled finance ecosystem with millions of daily USD transaction volume, billions of locked up USD, as well as a plethora of newly emerging protocols (for lending, staking, and exchanges). Because all transactions, user balances, and total value locked in DeFi are publicly readable, a natural question that arises is: how can we automatically craft profitable transactions across the intertwined DeFi platforms?In this paper, we investigate two methods that allow us to automatically create profitable DeFi trades, one well-suited to arbitrage and the other applicable to more complicated settings. We first adopt the Bellman-Ford-Moore algorithm with DeFiPoser-ARB and then create logical DeFi protocol models for a theorem prover in DeFiPoser-SMT. While DeFiPoser-ARB focuses on DeFi transactions that form a cycle and performs very well for arbitrage, DeFiPoser-SMT can detect more complicated profitable transactions. We estimate that DeFiPoser-ARB and DeFiPoser-SMT can generate an average weekly revenue of 191.48 ETH (76,592 USD) and 72.44 ETH (28,976 USD) respectively, with the highest transaction revenue being 81.31 ETH (32,524 USD) and 22.40 ETH (8,960 USD) respectively. We further show that DeFiPoser-SMT finds the known economic bZx attack from February 2020, which yields 0.48M USD. Our forensic investigations show that this opportunity existed for 69 days and could have yielded more revenue if exploited one day earlier. Our evaluation spans 150 days, given 96 DeFi protocol actions, and 25 assets.Looking beyond the financial gains mentioned above, forks deteriorate the blockchain consensus security, as they increase the risks of double-spending and selfish mining. We explore the implications of DeFiPoser-ARB and DeFiPoser-SMT on blockchain consensus. Specifically, we show that the trades identified by our tools exceed the Ethereum block reward by up to 874×. Given optimal adversarial strategies provided by a Markov Decision Process (MDP), we quantify the value threshold at which a profitable transaction qualifies as Miner Extractable Value (MEV) and would incentivize MEV-aware miners to fork the blockchain. For instance, we find that on Ethereum, a miner with a hash rate of 10% would fork the blockchain if an MEV opportunity exceeds 4× the block reward.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519469/](https://ieeexplore.ieee.org/document/9519469/)
## Lockable Signatures for Blockchains: Scriptless Scripts for All Signatures.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#lockable-signatures-for-blockchains-scriptless-scripts-for-all-signatures)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#lockable-signatures-for-blockchains-scriptless-scripts-for-all-signatures)
### Authors
* Sri Aravinda Krishnan Thyagarajan, Friedrich Alexander Universität Erlangen-Nürnberg
* Giulio Malavolta, Friedrich Alexander Universität Erlangen-Nürnberg
### Abstract
> Payment Channel Networks (PCNs) have given a huge boost to the scalability of blockchain-based cryptocurrencies: Beyond improving the transaction rate, PCNs enabled cheap cross-currency payments and atomic swaps. However, current PCNs proposals either heavily rely on special scripting features of the underlying blockchain (e.g. Hash Time Lock Contracts) or are tailored to a handful of digital signature schemes, such as Schnorr or ECDSA signatures. This leaves us in an unsatisfactory situation where many currencies that are being actively developed and use different signature schemes cannot enjoy the benefits of a PCN.In this work, we investigate whether we can construct PCNs assuming the minimal ability of a blockchain to verify a digital signature, for any signature scheme. In answering this question in the affirmative, we introduce the notion of lockable signatures, which constitutes the cornerstone of our PCN protocols. Our approach is generic and the PCN protocol is compatible with any digital signature scheme, thus inheriting all favorable properties of the underlying scheme that are not offered by Schnorr/ECDSA (e.g. aggregatable signatures or post-quantum security).While the usage of generic cryptographic machinery makes our generic protocol impractical, we view it as an important feasibility result as it may serve as the basis for constructing optimized protocols for specific signature schemes. To substantiate this claim, we design a highly efficient PCN protocol for the special case of Boneh-Lynn-Shacham (BLS) signatures. BLS signatures enjoy many unique features that make it a viable candidate for a blockchain, e.g. short, unique, and aggregatable signatures. Yet, prior to our work, no PCN was known to be compatible with it (without requiring an advanced scripting language). The cost of our PCN is dominated by a handful of calls to the BLS algorithms. Our concrete evaluation of these basic operations shows that users with commodity hardware can process payments with minimal overhead.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519419/](https://ieeexplore.ieee.org/document/9519419/)
## Randomized Last-Level Caches Are Still Vulnerable to Cache Side-Channel Attacks! But We Can Fix It.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#randomized-last-level-caches-are-still-vulnerable-to-cache-side-channel-attacks-but-we-can-fix-it)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#randomized-last-level-caches-are-still-vulnerable-to-cache-side-channel-attacks-but-we-can-fix-it)
### Authors
* Wei Song, State Key Laboratory of Information Security, CAS, Institute of Information Engineering, Beijing, China; School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Boya Li, State Key Laboratory of Information Security, CAS, Institute of Information Engineering, Beijing, China; School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Zihan Xue, State Key Laboratory of Information Security, CAS, Institute of Information Engineering, Beijing, China; School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Zhenzhen Li, State Key Laboratory of Information Security, CAS, Institute of Information Engineering, Beijing, China; School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Wenhao Wang, State Key Laboratory of Information Security, CAS, Institute of Information Engineering, Beijing, China; School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Peng Liu, The Pennsylvania State University, University Park, USA
### Abstract
> Cache randomization has recently been revived as a promising defense against conflict-based cache side-channel attacks. As two of the latest implementations, CEASER-S and ScatterCache both claim to thwart conflict-based cache side-channel attacks using randomized skewed caches. Unfortunately, our experiments show that an attacker can easily find a usable eviction set within the chosen remap period of CEASER-S and increasing the number of partitions without dynamic remapping, such as ScatterCache, cannot eliminate the threat. By quantitatively analyzing the access patterns left by various attacks in the LLC, we have newly discovered several problems with the hypotheses and implementations of randomized caches, which are also overlooked by the research on conflict-based cache side-channel attacks.However, cache randomization is not a false hope and it is an effective defense that should be widely adopted in future processors. The newly discovered problems are corresponding to flaws associated with the existing implementation of cache randomization and are fixable. Several new defense ideas are proposed in this paper. Our experiments show that all the newly discovered problems are fixed within the current performance budget. We also argue that randomized set-associative caches can be sufficiently strengthened and possess a better chance to be actually adopted in commercial processors than their skewed counterparts because they introduce less overhaul to the existing cache structure.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519409/](https://ieeexplore.ieee.org/document/9519409/)
## Bomberman: Defining and Defeating Hardware Ticking Timebombs at Design-time.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#bomberman-defining-and-defeating-hardware-ticking-timebombs-at-design-time)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#bomberman-defining-and-defeating-hardware-ticking-timebombs-at-design-time)
### Authors
* Timothy Trippel, Computer Science Ȗ Engineering, University of Michigan, Ann Arbor, MI
* Kang G. Shin, Computer Science Ȗ Engineering, University of Michigan, Ann Arbor, MI
* Kevin B. Bush, Cyber-Physical Systems, MIT Lincoln Laboratory, Lexington, MA
* Matthew Hicks, Computer Science, Virginia Tech, Blacksburg, VA
### Abstract
> To cope with ever-increasing design complexities, integrated circuit designers increase both the size of their design teams and their reliance on third-party intellectual property (IP). Both come at the expense of trust: it is computationally infeasible to exhaustively verify that a design is free of all possible malicious modifications (i.e., hardware Trojans). Making matters worse, unlike software, hardware modifications are permanent: there is no "patching" mechanism for hardware; and powerful: they serve as a foothold for subverting software that sits above.To counter this threat, prior work uses both static and dynamic analysis techniques to verify hardware designs are Trojan-free. Unfortunately, researchers continue to reveal weaknesses in these "one-size-fits-all", heuristic-based approaches. Instead of attempting to detect all possible hardware Trojans, we take the first step in addressing the hardware Trojan threat in a divide-and-conquer fashion: defining and eliminating Ticking Timebomb Trojans (TTTs), forcing attackers to implement larger Trojan designs detectable via existing verification and side-channel defenses. Like many system-level software defenses (e.g., Address Space Layout Randomization (ASLR) and Data Execution Prevention (DEP)), our goal is to systematically constrict the hardware attacker’s design space.First, we construct a definition of TTTs derived from their functional behavior. Next, we translate this definition into fundamental components required to realize TTT behavior in hardware. Using these components, we expand the set of all known TTTs to a total of six variants—including unseen variants. Leveraging our definition, we design and implement a TTT-specific dynamic verification toolchain extension, called Bomber-man. Using four real-world hardware designs, we demonstrate Bomberman’s ability to detect all TTT variants, where previous defenses fail, with <1.2% false positives.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519417/](https://ieeexplore.ieee.org/document/9519417/)
## Systematic Analysis of Randomization-based Protected Cache Architectures.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#systematic-analysis-of-randomization-based-protected-cache-architectures)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#systematic-analysis-of-randomization-based-protected-cache-architectures)
### Authors
* Antoon Purnal, Imec-COSIC, KU Leuven
* Lukas Giner, Graz University of Technology
* Daniel Gruss, Graz University of Technology
* Ingrid Verbauwhede, Imec-COSIC, KU Leuven
### Abstract
> Recent secure cache designs aim to mitigate side-channel attacks by randomizing the mapping from memory addresses to cache sets. As vendors investigate deployment of these caches, it is crucial to understand their actual security.In this paper, we consolidate existing randomization-based secure caches into a generic cache model. We then comprehensively analyze the security of existing designs, including CEASER-S and SCATTERCACHE, by mapping them to instances of this model. We tailor cache attacks for randomized caches using a novel PRIME+PRUNE+PROBE technique, and optimize it using burst accesses, bootstrapping, and multi-step profiling. PRIME+ PRUNE+PROBE constructs probabilistic but reliable eviction sets, enabling attacks previously assumed to be computationally infeasible. We also simulate an end-to-end attack, leaking secrets from a vulnerable AES implementation. Finally, a case study of CEASER-S reveals that cryptographic weaknesses in the randomization algorithm can lead to a complete security subversion.Our systematic analysis yields more realistic and comparable security levels for randomized caches. As we quantify how design parameters influence the security level, our work leads to important conclusions for future work on secure cache designs.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519494/](https://ieeexplore.ieee.org/document/9519494/)
## SiRnn: A Math Library for Secure RNN Inference.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#sirnn-a-math-library-for-secure-rnn-inference)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#sirnn-a-math-library-for-secure-rnn-inference)
### Authors
* Deevashwer Rathee, Microsoft Research
* Mayank Rathee, Microsoft Research
* Rahul Kranti Kiran Goli, Microsoft Research
* Divya Gupta, Microsoft Research
* Rahul Sharma, Microsoft Research
* Nishanth Chandran, Microsoft Research
* Aseem Rastogi, Microsoft Research
### Abstract
> Complex machine learning (ML) inference algorithms like recurrent neural networks (RNNs) use standard functions from math libraries like exponentiation, sigmoid, tanh, and reciprocal of square root. Although prior work on secure 2-party inference provides specialized protocols for convolutional neural networks (CNNs), existing secure implementations of these math operators rely on generic 2-party computation (2PC) protocols that suffer from high communication. We provide new specialized 2PC protocols for math functions that crucially rely on lookup-tables and mixed-bitwidths to address this performance overhead; our protocols for math functions communicate up to 423× less data than prior work. Furthermore, our math implementations are numerically precise, which ensures that the secure implementations preserve model accuracy of cleartext. We build on top of our novel protocols to build SiRnn, a library for end-to-end secure 2-party DNN inference, that provides the first secure implementations of an RNN operating on time series sensor data, an RNN operating on speech data, and a state-of-the-art ML architecture that combines CNNs and RNNs for identifying all heads present in images. Our evaluation shows that SiRnn achieves up to three orders of magnitude of performance improvement when compared to inference of these models using an existing state-of-the-art 2PC framework.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519413/](https://ieeexplore.ieee.org/document/9519413/)
## CryptGPU: Fast Privacy-Preserving Machine Learning on the GPU.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#cryptgpu-fast-privacy-preserving-machine-learning-on-the-gpu)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#cryptgpu-fast-privacy-preserving-machine-learning-on-the-gpu)
### Authors
* Sijun Tan, University of Virginia
* Brian Knott, Facebook AI Research
* Yuan Tian, University of Virginia
* David J. Wu, University of Virginia
### Abstract
> We introduce CryptGPU, a system for privacy-preserving machine learning that implements all operations on the GPU (graphics processing unit). Just as GPUs played a pivotal role in the success of modern deep learning, they are also essential for realizing scalable privacy-preserving deep learning. In this work, we start by introducing a new interface to losslessly embed cryptographic operations over secret-shared values (in a discrete domain) into floating-point operations that can be processed by highly-optimized CUDA kernels for linear algebra. We then identify a sequence of "GPU-friendly" cryptographic protocols to enable privacy-preserving evaluation of both linear and non-linear operations on the GPU. Our microbenchmarks indicate that our private GPU-based convolution protocol is over 150× faster than the analogous CPU-based protocol; for non-linear operations like the ReLU activation function, our GPU-based protocol is around 10× faster than its CPU analog. With CryptGPU, we support private inference and training on convolutional neural networks with over 60 million parameters as well as handle large datasets like ImageNet. Compared to the previous state-of-the-art, our protocols achieve a 2× to 8× improvement in private inference for large networks and datasets. For private training, we achieve a 6× to 36× improvement over prior state-of-the-art. Our work not only showcases the viability of performing secure multiparty computation (MPC) entirely on the GPU to newly enable fast privacy-preserving machine learning, but also highlights the importance of designing new MPC primitives that can take full advantage of the GPU’s computing capabilities.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519386/](https://ieeexplore.ieee.org/document/9519386/)
## Proof-of-Learning: Definitions and Practice.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#proof-of-learning-definitions-and-practice)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#proof-of-learning-definitions-and-practice)
### Authors
* Hengrui Jia, University of Toronto and Vector Institute
* Mohammad Yaghini, University of Toronto and Vector Institute
* Christopher A. Choquette-Choo, University of Toronto and Vector Institute
* Natalie Dullerud, University of Toronto and Vector Institute
* Anvith Thudi, University of Toronto and Vector Institute
* Varun Chandrasekaran, University of Wisconsin-Madison
* Nicolas Papernot, University of Toronto and Vector Institute
### Abstract
> Training machine learning (ML) models typically involves expensive iterative optimization. Once the model’s final parameters are released, there is currently no mechanism for the entity which trained the model to prove that these parameters were indeed the result of this optimization procedure. Such a mechanism would support security of ML applications in several ways. For instance, it would simplify ownership resolution when multiple parties contest ownership of a specific model. It would also facilitate the distributed training across untrusted workers where Byzantine workers might otherwise mount a denial-ofservice by returning incorrect model updates.In this paper, we remediate this problem by introducing the concept of proof-of-learning in ML. Inspired by research on both proof-of-work and verified computations, we observe how a seminal training algorithm, stochastic gradient descent, accumulates secret information due to its stochasticity. This produces a natural construction for a proof-of-learning which demonstrates that a party has expended the compute require to obtain a set of model parameters correctly. In particular, our analyses and experiments show that an adversary seeking to illegitimately manufacture a proof-of-learning needs to perform at least as much work than is needed for gradient descent itself.We also instantiate a concrete proof-of-learning mechanism in both of the scenarios described above. In model ownership resolution, it protects the intellectual property of models released publicly. In distributed training, it preserves availability of the training procedure. Our empirical evaluation validates that our proof-of-learning mechanism is robust to variance induced by the hardware (e.g., ML accelerators) and software stacks.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519402/](https://ieeexplore.ieee.org/document/9519402/)
## PEGASUS: Bridging Polynomial and Non-polynomial Evaluations in Homomorphic Encryption.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#pegasus-bridging-polynomial-and-non-polynomial-evaluations-in-homomorphic-encryption)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#pegasus-bridging-polynomial-and-non-polynomial-evaluations-in-homomorphic-encryption)
### Authors
* Wen-jie Lu, Gemini Lab, Alibaba Group
* Zhicong Huang, Gemini Lab, Alibaba Group
* Cheng Hong, Gemini Lab, Alibaba Group
* Yiping Ma, University of Pennsylvania
* Hunter Qu, Gemini Lab, Alibaba Group
### Abstract
> Homomorphic encryption (HE) is considered as one of the most important primitives for privacy-preserving applications. However, an efficient approach to evaluate both polynomial and non-polynomial functions on encrypted data is still absent, which hinders the deployment of HE to real-life applications. To address this issue, we propose a practical framework PEGASUS. PEGASUS can efficiently switch back and forth between a packed CKKS ciphertext and FHEW ciphertexts without decryption, allowing us to evaluate arithmetic functions efficiently on the CKKS side, and to evaluate look-up tables on FHEW ciphertexts. Our FHEW → CKKS conversion algorithm is more practical than the existing methods. We improve the computational complexity from linear to sublinear. Moreover, the size of our conversion key is significantly smaller, e.g., reduced from 80 gigabytes to 12 megabytes. We present extensive benchmarks of PEGASUS, including sigmoid/ReLU/min/max/division, sorting and max-pooling. To further demonstrate the capability of PEGASUS, we developed two more applications. The first one is a private decision tree evaluation whose communication cost is about two orders of magnitude smaller than the previous HE-based approaches. The second one is a secure K-means clustering that is able to run on thousands of encrypted samples in minutes that outperforms the best existing system by 14 × – 20×. To the best of our knowledge, this is the first work that supports practical K-means clustering using HE in a single server setting.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519408/](https://ieeexplore.ieee.org/document/9519408/)
## Wolverine: Fast, Scalable, and Communication-Efficient Zero-Knowledge Proofs for Boolean and Arithmetic Circuits.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#wolverine-fast-scalable-and-communication-efficient-zero-knowledge-proofs-for-boolean-and-arithmetic-circuits)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#wolverine-fast-scalable-and-communication-efficient-zero-knowledge-proofs-for-boolean-and-arithmetic-circuits)
### Authors
* Chenkai Weng, Northwestern University
* Kang Yang, State Key Laboratory of Cryptology
* Jonathan Katz, University of Maryland
* Xiao Wang, Northwestern University
### Abstract
> Efficient zero-knowledge (ZK) proofs for arbitrary boolean or arithmetic circuits have recently attracted much attention. Existing solutions suffer from either significant prover overhead (i.e., high memory usage) or relatively high communication complexity (at least κ bits per gate, for computational security parameter κ). In this paper, we propose a new protocol for constant-round interactive ZK proofs that simultaneously allows for an efficient prover with asymptotically optimal memory usage and significantly lower communication compared to protocols with similar memory efficiency. Specifically:•The prover in our ZK protocol has linear running time and, perhaps more importantly, memory usage linear in the memory needed to evaluate the circuit non-cryptographically. This allows our proof system to scale easily to very large circuits.•for statistical security parameter ρ = 40, our ZK protocol communicates roughly 9 bits/gate for boolean circuits and 2–4 field elements/gate for arithmetic circuits over large fields.Using 5 threads, 400 MB of memory, and a 200 Mbps network to evaluate a circuit with hundreds of billions of gates, our implementation (ρ = 40, κ = 128) runs at a rate of 0.45 μs/gate in the boolean case, and 1.6 μs/gate for an arithmetic circuit over a 61-bit field.We also present an improved subfield Vector Oblivious Linear Evaluation (sVOLE) protocol with malicious security that is of independent interest.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519498/](https://ieeexplore.ieee.org/document/9519498/)
## SoK: Fully Homomorphic Encryption Compilers.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#sok-fully-homomorphic-encryption-compilers)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#sok-fully-homomorphic-encryption-compilers)
### Authors
* Alexander Viand, ETH Zurich
* Patrick Jattke, ETH Zurich
* Anwar Hithnawi, ETH Zurich
### Abstract
> Fully Homomorphic Encryption (FHE) allows a third party to perform arbitrary computations on encrypted data, learning neither the inputs nor the computation results. Hence, it provides resilience in situations where computations are carried out by an untrusted or potentially compromised party. This powerful concept was first conceived by Rivest et al. in the 1970s. However, it remained unrealized until Craig Gentry presented the first feasible FHE scheme in 2009.The advent of the massive collection of sensitive data in cloud services, coupled with a plague of data breaches, moved highly regulated businesses to increasingly demand confidential and secure computing solutions. This demand, in turn, has led to a recent surge in the development of FHE tools. To understand the landscape of recent FHE tool developments, we conduct an extensive survey and experimental evaluation to explore the current state of the art and identify areas for future development.In this paper, we survey, evaluate, and systematize FHE tools and compilers. We perform experiments to evaluate these tools’ performance and usability aspects on a variety of applications. We conclude with recommendations for developers intending to develop FHE-based applications and a discussion on future directions for FHE tools development.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519484/](https://ieeexplore.ieee.org/document/9519484/)
## CrawlPhish: Large-scale Analysis of Client-side Cloaking Techniques in Phishing.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#crawlphish-large-scale-analysis-of-client-side-cloaking-techniques-in-phishing)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#crawlphish-large-scale-analysis-of-client-side-cloaking-techniques-in-phishing)
### Authors
* Penghui Zhang, Arizona State University
* Adam Oest, Arizona State University; PayPal, Inc.
* Haehyun Cho, Arizona State University
* Zhibo Sun, Arizona State University
* RC Johnson, PayPal, Inc.
* Brad Wardman, PayPal, Inc.
* Shaown Sarker, North Carolina State University
* Alexandros Kapravelos, North Carolina State University
* Tiffany Bao, Arizona State University
* Ruoyu Wang, Arizona State University
* Yan Shoshitaishvili, Arizona State University
* Adam Doupé, Arizona State University
* Gail-Joon Ahn, Arizona State University; Samsung Research
### Abstract
> Phishing is a critical threat to Internet users. Although an extensive ecosystem serves to protect users, phishing websites are growing in sophistication, and they can slip past the ecosystem’s detection systems—and subsequently cause real-world damage—with the help of evasion techniques. Sophisticated client-side evasion techniques, known as cloaking, leverage JavaScript to enable complex interactions between potential victims and the phishing website, and can thus be particularly effective in slowing or entirely preventing automated mitigations. Yet, neither the prevalence nor the impact of client-side cloaking has been studied.In this paper, we present CrawlPhish, a framework for automatically detecting and categorizing client-side cloaking used by known phishing websites. We deploy CrawlPhish over 14 months between 2018 and 2019 to collect and thoroughly analyze a dataset of 112,005 phishing websites in the wild. By adapting state-of-the-art static and dynamic code analysis, we find that 35,067 of these websites have 1,128 distinct implementations of client-side cloaking techniques. Moreover, we find that attackers’ use of cloaking grew from 23.32% initially to 33.70% by the end of our data collection period. Detection of cloaking by our framework exhibited low false-positive and false-negative rates of 1.45% and 1.75%, respectively. We analyze the semantics of the techniques we detected and propose a taxonomy of eight types of evasion across three high-level categories: User Interaction, Fingerprinting, and Bot Behavior.Using 150 artificial phishing websites, we empirically show that each category of evasion technique is effective in avoiding browser-based phishing detection (a key ecosystem defense). Additionally, through a user study, we verify that the techniques generally do not discourage victim visits. Therefore, we propose ways in which our methodology can be used to not only improve the ecosystem’s ability to mitigate phishing websites with client-side cloaking, but also continuously identify emerging cloaking techniques as they are launched by attackers.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519414/](https://ieeexplore.ieee.org/document/9519414/)
## Black Widow: Blackbox Data-driven Web Scanning.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#black-widow-blackbox-data-driven-web-scanning)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#black-widow-blackbox-data-driven-web-scanning)
### Authors
* Benjamin Eriksson, Chalmers University of Technology
* Giancarlo Pellegrino, CISPA Helmholtz Center for Information Security
* Andrei Sabelfeld, Chalmers University of Technology
### Abstract
> Modern web applications are an integral part of our digital lives. As we put more trust in web applications, the need for security increases. At the same time, detecting vulnerabilities in web applications has become increasingly hard, due to the complexity, dynamism, and reliance on third-party components. Blackbox vulnerability scanning is especially challenging because (i) for deep penetration of web applications scanners need to exercise such browsing behavior as user interaction and asynchrony, and (ii) for detection of nontrivial injection attacks, such as stored cross-site scripting (XSS), scanners need to discover inter-page data dependencies.This paper illuminates key challenges for crawling and scanning the modern web. Based on these challenges we identify three core pillars for deep crawling and scanning: navigation modeling, traversing, and tracking inter-state dependencies. While prior efforts are largely limited to the separate pillars, we suggest an approach that leverages all three. We develop Black Widow, a blackbox data-driven approach to web crawling and scanning. We demonstrate the effectiveness of the crawling by code coverage improvements ranging from 63% to 280% compared to other crawlers across all applications. Further, we demonstrate the effectiveness of the web vulnerability scanning by featuring no false positives and finding more cross-site scripting vulnerabilities than previous methods. In older applications, used in previous research, we find vulnerabilities that the other methods miss. We also find new vulnerabili-ties in production software, including HotCRP, osCommerce, PrestaShop and WordPress.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519452/](https://ieeexplore.ieee.org/document/9519452/)
## Fingerprinting the Fingerprinters: Learning to Detect Browser Fingerprinting Behaviors.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#fingerprinting-the-fingerprinters-learning-to-detect-browser-fingerprinting-behaviors)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#fingerprinting-the-fingerprinters-learning-to-detect-browser-fingerprinting-behaviors)
### Authors
* Umar Iqbal, The University of Iowa
* Steven Englehardt, Mozilla Corporation
* Zubair Shafiq, University of California, Davis
### Abstract
> Browser fingerprinting is an invasive and opaque stateless tracking technique. Browser vendors, academics, and standards bodies have long struggled to provide meaningful protections against browser fingerprinting that are both accurate and do not degrade user experience. We propose FP-Inspector, a machine learning based syntactic-semantic approach to accurately detect browser fingerprinting. We show that FP-Inspector performs well, allowing us to detect 26% more fingerprinting scripts than the state-of-the-art. We show that an API-level fingerprinting countermeasure, built upon FP-Inspector, helps reduce website breakage by a factor of 2. We use FP-Inspector to perform a measurement study of browser fingerprinting on top-100K websites. We find that browser fingerprinting is now present on more than 10% of the top-100K websites and over a quarter of the top-10K websites. We also discover previously unreported uses of JavaScript APIs by fingerprinting scripts suggesting that they are looking to exploit APIs in new and unexpected ways.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519502/](https://ieeexplore.ieee.org/document/9519502/)
## A Security Model and Fully Verified Implementation for the IETF QUIC Record Layer.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#a-security-model-and-fully-verified-implementation-for-the-ietf-quic-record-layer)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#a-security-model-and-fully-verified-implementation-for-the-ietf-quic-record-layer)
### Authors
* Antoine Delignat-Lavaud, Microsoft Research
* Cédric Fournet, Microsoft Research
* Bryan Parno, Carnegie Mellon University
* Jonathan Protzenko, Microsoft Research
* Tahina Ramananandro, Microsoft Research
* Jay Bosamiya, Carnegie Mellon University
* Joseph Lallemand, INRIA Nancy Grand-Est
* Itsaka Rakotonirina, INRIA Nancy Grand-Est
* Yi Zhou, Carnegie Mellon University
### Abstract
> Drawing on earlier protocol-verification work, we investigate the security of the QUIC record layer, as standardized by the IETF in draft version 30. This version features major differences compared to Google’s original protocol and early IETF drafts. It serves as a useful test case for our verification methodology and toolchain, while also, hopefully, drawing attention to a little studied yet crucially important emerging standard.We model QUIC packet and header encryption, which uses a custom construction for privacy. To capture its goals, we propose a security definition for authenticated encryption with semi-implicit nonces. We show that QUIC uses an instance of a generic construction parameterized by a standard AEAD-secure scheme and a PRF-secure cipher. We formalize and verify the security of this construction in F. The proof uncovers interesting limitations of nonce confidentiality, due to the malleability of short headers and the ability to choose the number of least significant bits included in the packet counter. We propose improvements that simplify the proof and increase robustness against strong attacker models. In addition to the verified security model, we also give a concrete functional specification for the record layer, and prove that it satisfies important functionality properties (such as the correct successful decryption of encrypted packets) after fixing more errors in the draft. We then provide a high-performance implementation of the record layer that we prove to be memory safe, correct with respect to our concrete specification (inheriting its functional correctness properties), and secure with respect to our verified model. To evaluate this component, we develop a provably-safe implementation of the rest of the QUIC protocol. Our record layer achieves nearly 2 GB/s throughput, and our QUIC implementation’s performance is within 21% of an unverified baseline.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519466/](https://ieeexplore.ieee.org/document/9519466/)
## Cross Layer Attacks and How to Use Them (for DNS Cache Poisoning, Device Tracking and More).
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#cross-layer-attacks-and-how-to-use-them-for-dns-cache-poisoning-device-tracking-and-more)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#cross-layer-attacks-and-how-to-use-them-for-dns-cache-poisoning-device-tracking-and-more)
### Authors
* Amit Klein, Bar-Ilan University, Israel
### Abstract
> We analyze the prandom pseudo random number generator (PRNG) in use in the Linux kernel (which is the kernel of the Linux operating system, as well as of Android) and demonstrate that this PRNG is weak. The prandom PRNG is in use by many "consumers" in the Linux kernel. We focused on three consumers at the network level – the UDP source port generation algorithm, the IPv6 flow label generation algorithm and the IPv4 ID generation algorithm. The flawed prandom PRNG is shared by all these consumers, which enables us to mount "cross layer attacks" against the Linux kernel. In these attacks, we infer the internal state of the prandom PRNG from one OSI layer, and use it to either predict the values of the PRNG employed by the other OSI layer, or to correlate it to an internal state of the PRNG inferred from the other protocol.Using this approach we can mount a very efficient DNS cache poisoning attack against Linux. We collect TCP/IPv6 flow label values, or UDP source ports, or TCP/IPv4 IP ID values, reconstruct the internal PRNG state, then predict an outbound DNS query UDP source port, which speeds up the attack by a factor of x3000 to x6000. This attack works remotely, but can also be mounted locally, across Linux users and across containers, and (depending on the stub resolver) can poison the cache with an arbitrary DNS record. Additionally, we can identify and track Linux and Android devices – we collect TCP/IPv6 flow label values and/or UDP source port values and/or TCP/IPv4 ID fields, reconstruct the PRNG internal state and correlate this new state to previously extracted PRNG states to identify the same device.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519455/](https://ieeexplore.ieee.org/document/9519455/)
## Bookworm Game: Automatic Discovery of LTE Vulnerabilities Through Documentation Analysis.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#bookworm-game-automatic-discovery-of-lte-vulnerabilities-through-documentation-analysis)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#bookworm-game-automatic-discovery-of-lte-vulnerabilities-through-documentation-analysis)
### Authors
* Yi Chen, Indiana University, Bloomington
* Yepeng Yao, CAS-KLONAT Key Laboratory of Network Assessment Technology, CAS, BKLONSPT Beijing Key Laboratory of Network Security and Protection Technology, SKLOIS State Key Laboratory of Information Security, IIE, CAS, Institute of Information Engineering, CAS; School of Cyber Security, University of Chinese Academy of Sciences
* XiaoFeng Wang, Indiana University, Bloomington
* Dandan Xu, CAS-KLONAT Key Laboratory of Network Assessment Technology, CAS, BKLONSPT Beijing Key Laboratory of Network Security and Protection Technology, SKLOIS State Key Laboratory of Information Security, IIE, CAS, Institute of Information Engineering, CAS; School of Cyber Security, University of Chinese Academy of Sciences
* Chang Yue, CAS-KLONAT Key Laboratory of Network Assessment Technology, CAS, BKLONSPT Beijing Key Laboratory of Network Security and Protection Technology, SKLOIS State Key Laboratory of Information Security, IIE, CAS, Institute of Information Engineering, CAS; School of Cyber Security, University of Chinese Academy of Sciences
* Xiaozhong Liu, Indiana University, Bloomington
* Kai Chen, CAS-KLONAT Key Laboratory of Network Assessment Technology, CAS, BKLONSPT Beijing Key Laboratory of Network Security and Protection Technology, SKLOIS State Key Laboratory of Information Security, IIE, CAS, Institute of Information Engineering, CAS; School of Cyber Security, University of Chinese Academy of Sciences
* Haixu Tang, Indiana University, Bloomington
* Baoxu Liu, CAS-KLONAT Key Laboratory of Network Assessment Technology, CAS, BKLONSPT Beijing Key Laboratory of Network Security and Protection Technology, SKLOIS State Key Laboratory of Information Security, IIE, CAS, Institute of Information Engineering, CAS; School of Cyber Security, University of Chinese Academy of Sciences
### Abstract
> In the past decade, the security of cellular networks has been increasingly under scrutiny, leading to the discovery of numerous vulnerabilities that expose the network and its users to a wide range of security risks, from denial of service to information leak. However, most of these findings have been made through ad-hoc manual analysis, which is inadequate for fundamentally enhancing the security assurance of a system as complex as the cellular network. An important observation is that the massive amount of technical documentation of cellular network can provide key insights into the protection it puts in place and help identify potential security flaws. Particularly, we found that such documentation often contains hazard indicators (HIs) – the statement that describes a risky operation (e.g., abort an ongoing procedure) when a certain event happens at a state, which can guide a test on the system to find out whether the operation can indeed be triggered by an unauthorized party to cause harm to the cellular core or legitimate users’ equipment. Based upon this observation, we present in this paper a new framework that makes the first step toward intelligent and systematic security analysis of cellular networks. Our approach, called Atomic, utilizes natural-language processing and machine learning techniques to scan a large amount of LTE documentation for HIs. The HIs discovered are further parsed and analyzed to recover state and event information for generating test cases. These test cases are further utilized to automatically construct tests in an LTE simulation environment, which runs the tests to detect the vulnerabilities in the LTE that allow the risky operations to happen without proper protection. In our research, we implemented Atomic and ran it on the LTE NAS specification, including 549 pages with 13,598 sentences and 283,850 words. In less than 5 hours, our prototype reported 42 vulnerabilities from 192 HIs discovered, including 10 never reported before, under two threat models. All these vulnerabilities have been confirmed through end-to-end attacks, which lead to unauthorized disruption of the LTE service a legitimate user’s equipment receives. We reported our findings to authorized parties and received their confirmation that these vulnerabilities indeed exist in major commercial carriers and $2,000 USD reward from Google.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519388/](https://ieeexplore.ieee.org/document/9519388/)
## SGUARD: Towards Fixing Vulnerable Smart Contracts Automatically.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#sguard-towards-fixing-vulnerable-smart-contracts-automatically)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#sguard-towards-fixing-vulnerable-smart-contracts-automatically)
### Authors
* Tai D. Nguyen, Singapore Management University, Singapore
* Long H. Pham, Singapore Management University, Singapore
* Jun Sun, Singapore Management University, Singapore
### Abstract
> Smart contracts are distributed, self-enforcing programs executing on top of blockchain networks. They have the potential to revolutionize many industries such as financial institutes and supply chains. However, smart contracts are subject to code-based vulnerabilities, which casts a shadow on its applications. As smart contracts are unpatchable (due to the immutability of blockchain), it is essential that smart contracts are guaranteed to be free of vulnerabilities. Unfortunately, smart contract languages such as Solidity are Turing-complete, which implies that verifying them statically is infeasible. Thus, alternative approaches must be developed to provide the guarantee. In this work, we develop an approach which automatically transforms smart contracts so that they are provably free of 4 common kinds of vulnerabilities. The key idea is to apply run-time verification in an efficient and provably correct manner. Experiment results with 5000 smart contracts show that our approach incurs minor run-time overhead in terms of time (i.e., 14.79%) and gas (i.e., 0.79%).

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519444/](https://ieeexplore.ieee.org/document/9519444/)
## MAD-HTLC: Because HTLC is Crazy-Cheap to Attack.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#mad-htlc-because-htlc-is-crazy-cheap-to-attack)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#mad-htlc-because-htlc-is-crazy-cheap-to-attack)
### Authors
* Itay Tsabary, Technion, IC3
* Matan Yechieli, Technion, IC3
* Alex Manuskin, ZenGo-X
* Ittay Eyal, Technion, IC3
### Abstract
> Smart Contracts and transactions allow users to implement elaborate constructions on cryptocurrency blockchains like Bitcoin and Ethereum. Many of these constructions, including operational payment channels and atomic swaps, use a building block called Hashed Time-Locked Contract (HTLC).In this work, we distill from HTLC a specification (HTLC-Spec), and present an implementation called Mutual-Assured-Destruction Hashed Time-Locked Contract (MAD-HTLC). MAD-HTLC employs a novel approach of utilizing the existing blockchain operators, called miners, as part of the design. If a user misbehaves, MAD-HTLC incentivizes the miners to confiscate all her funds. We prove MAD-HTLC’s security using the UC framework and game-theoretic analysis. We demonstrate MAD-HTLC’s efficacy and analyze its overhead by instantiating it on Bitcoin’s and Ethereum’s operational blockchains.Notably, current miner software makes only little effort to optimize revenue, since the advantage is relatively small. However, as the demand grows and other revenue components shrink, miners are more motivated to fully optimize their fund intake. By patching the standard Bitcoin client, we demonstrate such optimization is easy to implement, making the miners natural enforcers of MAD-HTLC.Finally, we extend previous results regarding HTLC vulnerability to bribery attacks. An attacker can incentivize miners to prefer her transactions by offering high transaction fees. We demonstrate this attack can be easily implemented by patching the Bitcoin client, and use game-theoretic tools to qualitatively tighten the known cost bound of such bribery attacks in presence of rational miners. We identify bribe opportunities occurring on the Bitcoin and Ethereum main networks where a few dollars bribe could yield tens of thousands of dollars in reward (e.g., $2 for over $25K).

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519476/](https://ieeexplore.ieee.org/document/9519476/)
## Compositional Security for Reentrant Applications.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#compositional-security-for-reentrant-applications)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#compositional-security-for-reentrant-applications)
### Authors
* Ethan Cecchetti, Cornell University
* Siqiu Yao, Cornell University
* Haobin Ni, Cornell University
* Andrew C. Myers, Cornell University
### Abstract
> The disastrous vulnerabilities in smart contracts sharply remind us of our ignorance: we do not know how to write code that is secure in composition with malicious code. Information flow control has long been proposed as a way to achieve compositional security, offering strong guarantees even when combining software from different trust domains. Unfortunately, this appealing story breaks down in the presence of reentrancy attacks. We formalize a general definition of reentrancy and introduce a security condition that allows software modules like smart contracts to protect their key invariants while retaining the expressive power of safe forms of reentrancy. We present a security type system that provably enforces secure information flow; in conjunction with run-time mechanisms, it enforces secure reentrancy even in the presence of unknown code; and it helps locate and correct recent high-profile vulnerabilities.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519436/](https://ieeexplore.ieee.org/document/9519436/)
## HackEd: A Pedagogical Analysis of Online Vulnerability Discovery Exercises.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#hacked-a-pedagogical-analysis-of-online-vulnerability-discovery-exercises)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#hacked-a-pedagogical-analysis-of-online-vulnerability-discovery-exercises)
### Authors
* Daniel Votipka, Tufts University
* Eric Zhang, University of Maryland
* Michelle L. Mazurek, University of Maryland
### Abstract
> Hacking exercises are a common tool for security education, but there is limited investigation of how they teach security concepts and whether they follow pedagogical best practices. This paper enumerates the pedagogical practices of 31 popular online hacking exercises. Specifically, we derive a set of pedagogical dimensions from the general learning sciences and educational literature, tailored to hacking exercises, and review whether and how each exercise implements each pedagogical dimension. In addition, we interview the organizers of 15 exercises to understand challenges and tradeoffs that may occur when choosing whether and how to implement each dimension.We found hacking exercises generally were tailored to students’ prior security experience and support learning by limiting extraneous load and establishing helpful online communities. Conversely, few exercises explicitly provide overarching conceptual structure or direct support for metacognition to help students transfer learned knowledge to new contexts. Immediate and tailored feedback and secure development practice were also uncommon. Additionally, we observed a tradeoff between providing realistic challenges and burdening students with extraneous cognitive load, with benefits and drawbacks at any point on this axis. Based on our results, we make suggestions for exercise improvement and future work to support organizers.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519464/](https://ieeexplore.ieee.org/document/9519464/)
## DifuzzRTL: Differential Fuzz Testing to Find CPU Bugs.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#difuzzrtl-differential-fuzz-testing-to-find-cpu-bugs)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#difuzzrtl-differential-fuzz-testing-to-find-cpu-bugs)
### Authors
* Jaewon Hur, Department of Electrical and Computer Engineering, Seoul National University
* Suhwan Song, Department of Electrical and Computer Engineering, Seoul National University
* Dongup Kwon, Department of Electrical and Computer Engineering, Seoul National University
* Eunjin Baek, Department of Electrical and Computer Engineering, Seoul National University
* Jangwoo Kim, Department of Electrical and Computer Engineering, Seoul National University
* Byoungyoung Lee, Department of Electrical and Computer Engineering, Seoul National University
### Abstract
> Security bugs in CPUs have critical security impacts to all the computation related hardware and software components as it is the core of the computation. In spite of the fact that architecture and security communities have explored a vast number of static or dynamic analysis techniques to automatically identify such bugs, the problem remains unsolved and challenging largely due to the complex nature of CPU RTL designs.This paper proposes DIFUZZRTL, an RTL fuzzer to automatically discover unknown bugs in CPU RTLs. DIFUZZRTL develops a register-coverage guided fuzzing technique, which efficiently yet correctly identifies a state transition in the finite state machine of RTL designs. DIFUZZRTL also develops several new techniques in consideration of unique RTL design characteristics, including cycle-sensitive register coverage guiding, asynchronous interrupt events handling, a unified CPU input format with Tilelink protocols, and drop-in-replacement designs to support various CPU RTLs. We implemented DIFUZZRTL, and performed the evaluation with three real-world open source CPU RTLs: OpenRISC Mor1kx Cappuccino, RISC-V Rocket Core, and RISC-V Boom Core. During the evaluation, DIFUZZRTL identified 16 new bugs from these CPU RTLs, all of which were confirmed by the respective development communities and vendors. Six of those are assigned with CVE numbers, and to the best of our knowledge, we reported the first and the only CVE of RISC-V cores, demonstrating its strong practical impacts to the security community.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519470/](https://ieeexplore.ieee.org/document/9519470/)
## When LoRa Meets EMR: Electromagnetic Covert Channels Can Be Super Resilient.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#when-lora-meets-emr-electromagnetic-covert-channels-can-be-super-resilient)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#when-lora-meets-emr-electromagnetic-covert-channels-can-be-super-resilient)
### Authors
* Cheng Shen, Peking University
* Tian Liu, Peking University
* Jun Huang, Massachusetts Institute of Technology
* Rui Tan, Nanyang Technological University
### Abstract
> Due to the low power of electromagnetic radiation (EMR), EM convert channel has been widely considered as a short-range attack that can be easily mitigated by shielding. This paper overturns this common belief by demonstrating how covert EM signals leaked from typical laptops, desktops and servers are decoded from hundreds of meters away, or penetrate aggressive shield previously considered as sufficient to ensure emission security. We achieve this by designing EMLoRa – a super resilient EM covert channel that exploits memory as a LoRa-like radio. EMLoRa represents the first attempt of designing an EM covert channel using state-of-the-art spread spectrum technology. It tackles a set of unique challenges, such as handling complex spectral characteristics of EMR, tolerating signal distortions caused by CPU contention, and preventing adversarial detectors from demodulating covert signals. Experiment results show that EMLoRa boosts communication range by 20x and improves attenuation resilience by up to 53 dB when compared with prior EM covert channels at the same bit rate. By achieving this, EMLoRa allows an attacker to circumvent security perimeter, breach Faraday cage, and localize air-gapped devices in a wide area using just a small number of inexpensive sensors. To countermeasure EMLoRa, we further explore the feasibility of uncovering EMLoRa's signal using energy- and CNN-based detectors. Experiments show that both detectors suffer limited range, allowing EMLoRa to gain a significant range advantage. Our results call for further research on the countermeasure against spread spectrum-based EM covert channels.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519447/](https://ieeexplore.ieee.org/document/9519447/)
## Linking Bluetooth LE & Classic and Implications for Privacy-Preserving Bluetooth-Based Protocols.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#linking-bluetooth-le-classic-and-implications-for-privacy-preserving-bluetooth-based-protocols)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#linking-bluetooth-le-classic-and-implications-for-privacy-preserving-bluetooth-based-protocols)
### Authors
* Norbert Ludant, Northeastern University, Boston, USA
* Tien D. Vo-Huu, Northeastern University, Boston, USA
* Sashank Narain, University of Massachusetts Lowell, Lowell, USA
* Guevara Noubir, Northeastern University, Boston, USA
### Abstract
> Bluetooth Low Energy advertisements are increasingly used for proximity privacy-preserving protocols. We investigate information leakage from BLE advertisements. Our analysis, among other things, reveals that the design of today’s Bluetooth chips enables the linking of BLE advertisements to Bluetooth Classic (BTC) frames, and to a globally unique identifier (BDADDR). We demonstrate that the inference of the BDADDR from BLE advertisements is robust achieving over 90% reliability across apps, mobile devices, density of devices, and tens of meters away from the victims. We discuss the implications of current chipsets vulnerability on privacy-preserving protocols. The attack, for instance, reveals the BDADDR of devices of infected users of contact-tracing apps. We also discuss how the vulnerability can lead to de-anonymization of victims. Furthermore, current mobile devices do not allow selective disabling of BTC independently of BLE which renders simple countermeasures impractical. We developed several mitigations for the Android OS and the Bluetooth stack and demonstrate their efficacy.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519441/](https://ieeexplore.ieee.org/document/9519441/)
## Method Confusion Attack on Bluetooth Pairing.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#method-confusion-attack-on-bluetooth-pairing)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#method-confusion-attack-on-bluetooth-pairing)
### Authors
* Maximilian von Tschirschnitz, Technical University of Munich
* Ludwig Peuckert, Technical University of Munich
* Fabian Franzen, Technical University of Munich
* Jens Grossklags, Technical University of Munich
### Abstract
> Bluetooth provides encryption, authentication, and integrity protection of its connections. These protection mechanisms require that Bluetooth devices initially establish trust on first use through a process called pairing. Throughout this process, multiple alternative pairing methods are supported.In this paper, we describe a design flaw in the pairing mechanism of Bluetooth. This flaw permits two devices to perform pairing using differing methods. While successfully interacting with each other, the devices are not aware of the Method Confusion. We explain how an attacker can cause and abuse this Method Confusion to mount a Method Confusion Attack. In contrast to other attacks targeting the pairing method, our attack applies even in Bluetooth’s highest security mode and cannot be mitigated in the protocol. Through the Method Confusion Attack, an adversary can infiltrate the secured connection between the victims and intercept all traffic.Our attack is successful in practically relevant scenarios. We implemented it as an end-to-end Proof of Concept for Bluetooth Low Energy and tested it with off-the-shelf smartphones, a smartwatch and a banking device. Furthermore, we performed a user study where none of the 40 participants noticed the ongoing attack, and 37 (92.5%) of the users completed the pairing process. Finally, we propose changes to the Bluetooth specification that immunize it against our attack.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519477/](https://ieeexplore.ieee.org/document/9519477/)
## CanDID: Can-Do Decentralized Identity with Legacy Compatibility, Sybil-Resistance, and Accountability.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#candid-can-do-decentralized-identity-with-legacy-compatibility-sybil-resistance-and-accountability)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#candid-can-do-decentralized-identity-with-legacy-compatibility-sybil-resistance-and-accountability)
### Authors
* Deepak Maram, Cornell Tech; IC3, The Initiative for CryptoCurrencies & Contracts
* Harjasleen Malvai, Cornell University; IC3, The Initiative for CryptoCurrencies & Contracts
* Fan Zhang, Cornell Tech; IC3, The Initiative for CryptoCurrencies & Contracts
* Nerla Jean-Louis, UIUC; IC3, The Initiative for CryptoCurrencies & Contracts
* Alexander Frolov, Cornell University; IC3, The Initiative for CryptoCurrencies & Contracts
* Tyler Kell, Cornell Tech; IC3, The Initiative for CryptoCurrencies & Contracts
* Tyrone Lobban, J. P. Morgan
* Christine Moy, J. P. Morgan
* Ari Juels, Cornell Tech; IC3, The Initiative for CryptoCurrencies & Contracts
* Andrew Miller, UIUC; IC3, The Initiative for CryptoCurrencies & Contracts
### Abstract
> We present CanDID, a platform for practical, user-friendly realization of decentralized identity, the idea of empowering end users with management of their own credentials.While decentralized identity promises to give users greater control over their private data, it burdens users with management of private keys, creating a significant risk of key loss. Existing and proposed approaches also presume the spontaneous availability of a credential-issuance ecosystem, creating a bootstrapping problem. They also omit essential functionality, like resistance to Sybil attacks and the ability to detect misbehaving or sanctioned users while preserving user privacy.CanDID addresses these challenges by issuing credentials in a user-friendly way that draws securely and privately on data from existing, unmodified web service providers. Such legacy compatibility similarly enables CanDID users to leverage their existing online accounts for recovery of lost keys. Using a decentralized committee of nodes, CanDID provides strong confidentiality for user’s keys, real-world identities, and data, yet prevents users from spawning multiple identities and allows identification (and blacklisting) of sanctioned users.We present the CanDID architecture and report on experiments demonstrating its practical performance.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519473/](https://ieeexplore.ieee.org/document/9519473/)
## They Would do Better if They Worked Together: The Case of Interaction Problems Between Password Managers and Websites.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#they-would-do-better-if-they-worked-together-the-case-of-interaction-problems-between-password-managers-and-websites)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#they-would-do-better-if-they-worked-together-the-case-of-interaction-problems-between-password-managers-and-websites)
### Authors
* Nicolas Huaman, CISPA Helmholtz Center for Information Security; Leibniz University Hannover
* Sabrina Amft, Leibniz University Hannover
* Marten Oltrogge, CISPA Helmholtz Center for Information Security
* Yasemin Acar, Max Planck Institute for Security and Privacy; Leibniz University Hannover
* Sascha Fahl, CISPA Helmholtz Center for Information Security; Leibniz University Hannover
### Abstract
> Password managers are tools to support users with the secure generation and storage of credentials and logins used in online accounts. Previous work illustrated that building password managers means facing various security and usability challenges. For strong security and good usability, the interaction between password managers and websites needs to be smooth and effortless. However, user reviews for popular password managers suggest interaction problems for some websites. Therefore, to the best of our knowledge, this work is the first to systematically identify these interaction problems and investigate how 15 desktop password managers, including the ten most popular ones, are affected. We use a qualitative analysis approach to identify 39 interaction problems from 2,947 user reviews and 372 GitHub issues for 30 password managers. Next, we implement minimal working examples (MWEs) for all interaction problems we found and evaluate them for all password managers in 585 test cases.Our results illustrate that a) password managers struggle to correctly implement authentication features such as HTTP Basic Authentication and modern standards such as the autocomplete-attribute and b) websites fail to implement clean and well-structured authentication forms. We conclude that some of our findings can be addressed by either PWM providers or web-developers by adhering to already existing standards, recommendations and best practices, while other cases are currently almost impossible to implement securely and require further research.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519389/](https://ieeexplore.ieee.org/document/9519389/)
## Improving Password Guessing via Representation Learning.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#improving-password-guessing-via-representation-learning)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#improving-password-guessing-via-representation-learning)
### Authors
* Dario Pasquini, Stevens Institute of Technology; Sapienza University of Rome; Institute of Applied Computing CNR
* Ankit Gangwal, Stevens Institute of Technology; University of Padua
* Giuseppe Ateniese, Stevens Institute of Technology
* Massimo Bernaschi, Institute of Applied Computing CNR
* Mauro Conti, University of Padua
### Abstract
> Learning useful representations from unstructured data is one of the core challenges, as well as a driving force, of modern data-driven approaches. Deep learning has demonstrated the broad advantages of learning and harnessing such representations.In this paper, we introduce a deep generative model representation learning approach for password guessing. We show that an abstract password representation naturally offers compelling and versatile properties that open new directions in the extensively studied, and yet presently active, password guessing field. These properties can establish novel password generation techniques that are neither feasible nor practical with the existing probabilistic and non-probabilistic approaches. Based on these properties, we introduce: (1) A general framework for conditional password guessing that can generate passwords with arbitrary biases; and (2) an Expectation Maximization-inspired framework that can dynamically adapt the estimated password distribution to match the distribution of the attacked password set.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519399/](https://ieeexplore.ieee.org/document/9519399/)
## ARBITRAR: User-Guided API Misuse Detection.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#arbitrar-user-guided-api-misuse-detection)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#arbitrar-user-guided-api-misuse-detection)
### Authors
* Ziyang Li, University of Pennsylvania
* Aravind Machiry, Purdue University
* Binghong Chen, Georgia Institute of Technology
* Mayur Naik, University of Pennsylvania
* Ke Wang, Visa Research
* Le Song, Georgia Institute of Technology
### Abstract
> Software APIs exhibit rich diversity and complexity which not only renders them a common source of programming errors but also hinders program analysis tools for checking them. Such tools either expect a precise API specification, which requires program analysis expertise, or presume that correct API usages follow simple idioms that can be automatically mined from code, which suffers from poor accuracy. We propose a new approach that allows regular programmers to find API misuses. Our approach interacts with the user to classify valid and invalid usages of each target API method. It minimizes user burden by employing an active learning algorithm that ranks API usages by their likelihood of being invalid. We implemented our approach in a tool called ARBITRAR for C/C++ programs, and applied it to check the uses of 18 API methods in 21 large real-world programs, including OpenSSL and Linux Kernel. Within just 3 rounds of user interaction on average per API method, ARBITRAR found 40 new bugs, with patches accepted for 18 of them. Moreover, ARBITRAR finds all known bugs reported by a state-of-the-art tool APISAN in a benchmark suite comprising 92 bugs with a false positive rate of only 51.5% compared to APISAN’s 87.9%.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519443/](https://ieeexplore.ieee.org/document/9519443/)
## Compositional Non-Interference for Fine-Grained Concurrent Programs.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#compositional-non-interference-for-fine-grained-concurrent-programs)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#compositional-non-interference-for-fine-grained-concurrent-programs)
### Authors
* Dan Frumin, Radboud University
* Robbert Krebbers, Delft University of Technology
* Lars Birkedal, Aarhus University
### Abstract
> Non-interference is a program property that ensures the absence of information leaks. In the context of programming languages, there exist two common approaches for establishing non-interference: type systems and program logics. Type systems provide strong automation (by means of type checking), but they are inherently restrictive in the kind of programs they support. Program logics support challenging programs, but they typically require significant human assistance, and cannot handle modules or higher-order programs.To connect these two approaches, we present SeLoC—a separation logic for non-interference, on top of which we build a type system using the technique of logical relations. By building a type system on top of separation logic, we can compositionally verify programs that consist of typed and untyped parts. The former parts are verified through type checking, while the latter parts are verified through manual proof.The core technical contribution of SeLoC is a relational form of weakest preconditions that can track information flow using separation logic resources. SeLoC is fully machine-checked, and built on top of the Iris framework for concurrent separation logic in Coq. The integration with Iris provides seamless support for fine-grained concurrency, which was beyond the reach of prior type systems and program logics for non-interference.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519454/](https://ieeexplore.ieee.org/document/9519454/)
## SoK: Security and Privacy in the Age of Commercial Drones.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#sok-security-and-privacy-in-the-age-of-commercial-drones)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#sok-security-and-privacy-in-the-age-of-commercial-drones)
### Authors
* Ben Nassi, Software and Information Systems Engineering, Ben-Gurion University of the Negev
* Ron Bitton, Software and Information Systems Engineering, Ben-Gurion University of the Negev
* Ryusuke Masuoka, Fujitsu System Integration Laboratories
* Asaf Shabtai, Software and Information Systems Engineering, Ben-Gurion University of the Negev
* Yuval Elovici, Software and Information Systems Engineering, Ben-Gurion University of the Negev
### Abstract
> As the number of drones increases and the era in which they begin to fill the skies approaches, an important question needs to be answered: From a security and privacy perspective, are society and drones really prepared to handle the challenges that a large volume of flights will create? In this paper, we investigate security and privacy in the age of commercial drones. First, we focus on the research question: Are drones and their ecosystems protected against attacks performed by malicious entities? We list a drone’s targets, present a methodology for reviewing attack and countermeasure methods, perform a comprehensive review, analyze scientific gaps, present conclusions, and discuss future research directions. Then, we focus on the research question: Is society protected against attacks conducted using drones? We list targets within society, profile the adversaries, review threats, present a methodology for reviewing countermeasures, perform a comprehensive review, analyze scientific gaps, present conclusions, and discuss future research directions. Finally, we focus on the primary research question: From the security and privacy perspective, are society and drones prepared to take their relationship one step further? Our analysis reveals that the technological means required to protect drones and society from one another has not yet been developed, and there is a tradeoff between the security and privacy of drones and that of society. That is, the level of security and privacy cannot be optimized concurrently for both entities, because the security and privacy of drones cannot be optimized without decreasing the security and privacy of society, and vice versa.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519393/](https://ieeexplore.ieee.org/document/9519393/)
## A First Look at Zoombombing.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#a-first-look-at-zoombombing)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#a-first-look-at-zoombombing)
### Authors
* Chen Ling, Boston University
* Utkucan Balcı, Binghamton University
* Jeremy Blackburn, Binghamton University
* Gianluca Stringhini, Boston University
### Abstract
> Online meeting tools like Zoom and Google Meet have become central to our professional, educational, and personal lives. This has opened up new opportunities for large scale harassment. In particular, a phenomenon known as zoombombing has emerged, in which aggressors join online meetings with the goal of disrupting them and harassing their participants. In this paper, we conduct the first data-driven analysis of calls for zoombombing attacks on social media. We identify ten popular online meeting tools and extract posts containing meeting invitations to these platforms on a mainstream social network, Twitter, and on a fringe community known for organizing coordinated attacks against online users, 4chan. We then perform manual annotation to identify posts that are calling for zoombombing attacks, and apply thematic analysis to develop a codebook to better characterize the discussion surrounding calls for zoombombing. During the first seven months of 2020, we identify over 200 calls for zoombombing between Twitter and 4chan, and analyze these calls both quantitatively and qualitatively. Our findings indicate that the vast majority of calls for zoombombing are not made by attackers stumbling upon meeting invitations or bruteforcing their meeting ID, but rather by insiders who have legitimate access to these meetings, particularly students in high school and college classes. This has important security implications because it makes common protections against zoombombing, e.g., password protection, ineffective. We also find instances of insiders instructing attackers to adopt the names of legitimate participants in the class to avoid detection, making countermeasures like setting up a waiting room and vetting participants less effective. Based on these observations, we argue that the only effective defense against zoombombing is creating unique join links for each participant.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519457/](https://ieeexplore.ieee.org/document/9519457/)
## Revealer: Detecting and Exploiting Regular Expression Denial-of-Service Vulnerabilities.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#revealer-detecting-and-exploiting-regular-expression-denial-of-service-vulnerabilities)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#revealer-detecting-and-exploiting-regular-expression-denial-of-service-vulnerabilities)
### Authors
* Yinxi Liu, Chinese University of Hong Kong
* Mingxue Zhang, Chinese University of Hong Kong
* Wei Meng, Chinese University of Hong Kong
### Abstract
> Regular expression Denial-of-Service (ReDoS) is a class of algorithmic complexity attacks. Attackers can craft particular strings to trigger the worst-case super-linear matching time of some vulnerable regular expressions (regex) with extended features that are commonly supported by popular programming languages. ReDoS attacks can severely degrade the performance of web applications, which extensively employ regexes in their server-side logic. Nevertheless, the characteristics of vulnerable regexes with extended features remain understudied, making it difficult to mitigate or even detect such vulnerabilities.In this paper, we aim to model vulnerable regex patterns generated by popular regex engines and craft attack strings accordingly. Our characterization fully supports the analysis of regexes with any extended feature. We develop Revealer to detect vulnerable structures presented in any given regex and generate attack strings to exploit the corresponding vulnerabilities. Revealer takes a hybrid approach. It first statically locates potential vulnerable structures of a regex, then dynamically verifies whether the vulnerabilities can be triggered or not, and finally crafts attack strings that can lead to recursive backtracking. By combining both static analysis and dynamic analysis, Revealer can accurately and efficiently generate exploits in a limited amount of time. It can further offer mitigation suggestions based on the structural information it identifies.We implemented a prototype of Revealer for Java. We evaluated Revealer over a dataset with 29,088 regexes, and compared it with three state-of-the-art tools. The evaluation shows that Revealer considerably outperformed all the existing tools—Revealer can detect all 237 vulnerabilities that can be detected by any other tool, find 213 new vulnerabilities, and beat the best tool by 140.64%. We further demonstrate that Revealer successfully detected 45 vulnerable regexes in popular real-world applications. Our evaluation demonstrates that Revealer is both effective and efficient in detecting and exploiting ReDoS vulnerabilities.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519406/](https://ieeexplore.ieee.org/document/9519406/)
## Breaking the Specification: PDF Certification.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#breaking-the-specification-pdf-certification)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#breaking-the-specification-pdf-certification)
### Authors
* Simon Rohlmann, Ruhr University Bochum
* Vladislav Mladenov, Ruhr University Bochum
* Christian Mainka, Ruhr University Bochum
* Jörg Schwenk, Ruhr University Bochum
### Abstract
> The Portable Document Format (PDF) is the de-facto standard for document exchange. The PDF specification defines two different types of digital signatures to guarantee the authenticity and integrity of documents: approval signatures and certification signatures. Approval signatures testify one specific state of the PDF document. Their security has been investigated at CCS’19. Certification signatures are more powerful and flexible. They cover more complex workflows, such as signing contracts by multiple parties. To achieve this goal, users can make specific changes to a signed document without invalidating the signature.This paper presents the first comprehensive security evaluation on certification signatures in PDFs. We describe two novel attack classes – Evil Annotation and Sneaky Signature attacks which abuse flaws in the current PDF specification. Both attack classes allow an attacker to significantly alter a certified document’s visible content without raising any warnings. Our practical evaluation shows that an attacker could change the visible content in 15 of 26 viewer applications by using Evil Annotation attacks and in 8 applications using Sneaky Signature by using PDF specification compliant exploits. We improved both attacks’ stealthiness with applications’ implementation issues and found only two applications secure to all attacks. On top, we show how to gain high privileged JavaScript execution in Adobe.We responsibly disclosed these issues and supported the vendors to fix the vulnerabilities. We also propose concrete countermeasures and improvements to the current specification to fix the issues.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519390/](https://ieeexplore.ieee.org/document/9519390/)
## Response-Hiding Encrypted Ranges: Revisiting Security via Parametrized Leakage-Abuse Attacks.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#response-hiding-encrypted-ranges-revisiting-security-via-parametrized-leakage-abuse-attacks)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#response-hiding-encrypted-ranges-revisiting-security-via-parametrized-leakage-abuse-attacks)
### Authors
* Evgenios M. Kornaropoulos, UC Berkeley
* Charalampos Papamanthou, University of Maryland
* Roberto Tamassia, Brown University
### Abstract
> Despite a growing body of work on leakage-abuse attacks for encrypted databases, attacks on practical response-hiding constructions are yet to appear. Response-hiding constructions are superior in that they nullify access-pattern based attacks by revealing only the search token and the result size of each query. Response-hiding schemes are vulnerable to existing volume attacks, which are, however, based on strong assumptions such as the uniform query assumption or the dense database assumption. More crucially, these attacks only apply to schemes that cannot be deployed in practice (ones with quadratic storage and increased leakage) while practical response-hiding schemes (Demertzis et al. [SIGMOD’16] and Faber et al. [ESORICS’15]) have linear storage and less leakage. Due to these shortcomings, the value of existing volume attacks on response-hiding schemes is unclear.In this work, we close the aforementioned gap by introducing a parametrized leakage-abuse attack that applies to practical response-hiding structured encryption schemes. The use of non-parametric estimation techniques makes our attack agnostic to both the data and the query distribution. At the very core of our technique lies the newly defined concept of a counting function with respect to a range scheme. We propose a two-phase framework to approximate the counting function for any range scheme. By simply switching one counting function for another, i.e., the so-called "parameter" of our modular attack, an adversary can attack different encrypted range schemes. We propose a constrained optimization formulation for the attack algorithm that is based on the counting functions. We demonstrate the effectiveness of our leakage-abuse attack on synthetic and real-world data under various scenarios.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519465/](https://ieeexplore.ieee.org/document/9519465/)
## A Decentralized and Encrypted National Gun Registry.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#a-decentralized-and-encrypted-national-gun-registry)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#a-decentralized-and-encrypted-national-gun-registry)
### Authors
* Seny Kamara, Brown University, Providence, USA
* Tarik Moataz, Aroki Systems, Providence, USA
* Andrew Park, Brown University, Providence, USA
* Lucy Qin, Brown University, Providence, USA
### Abstract
> Gun violence results in a significant number of deaths in the United States. Starting in the 1960’s, the US Congress passed a series of gun control laws to regulate the sale and use of firearms. One of the most important but politically fraught gun control measures is a national gun registry. A US Senate office is currently drafting legislation that proposes the creation of a voluntary national gun registration system. At a high level, the bill envisions a decentralized system where local county officials would control and manage the registration data of their constituents. These local databases could then be queried by other officials and law enforcement to trace guns. Due to the sensitive nature of this data, however, these databases should guarantee the confidentiality of the data.In this work, we translate the high-level vision of the proposed legislation into technical requirements and design a crypto- graphic protocol that meets them. Roughly speaking, the protocol can be viewed as a decentralized system of locally-managed end-to-end encrypted databases. Our design relies on various cryptographic building blocks including structured encryption, secure multi-party computation and secret sharing. We propose a formal security definition and prove that our design meets it. We implemented our protocol and evaluated its performance empirically at the scale it would have to run if it were deployed in the United States. Our results show that a decentralized and end-to-end encrypted national gun registry is not only possible in theory but feasible in practice.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519474/](https://ieeexplore.ieee.org/document/9519474/)
## Zero Knowledge for Everything and Everyone: Fast ZK Processor with Cached ORAM for ANSI C Programs.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#zero-knowledge-for-everything-and-everyone-fast-zk-processor-with-cached-oram-for-ansi-c-programs)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#zero-knowledge-for-everything-and-everyone-fast-zk-processor-with-cached-oram-for-ansi-c-programs)
### Authors
* David Heath, Georgia Institute of Technology
* Yibin Yang, Georgia Institute of Technology
* David Devecsery, Georgia Institute of Technology
* Vladimir Kolesnikov, Georgia Institute of Technology
### Abstract
> We build a complete and efficient ZK toolchain that handles proof statements encoded as arbitrary ANSI C programs.Zero-Knowledge (ZK) proofs are foundational in cryptography. Recent ZK research has focused intensely on non-interactive proofs of small statements, useful in blockchain scenarios. We instead target large statements that are useful, e.g., in proving properties of programs.Recent work (Heath and Kolesnikov, CCS 2020 [HK20a]) designed an efficient proof-of-concept ZK machine (ZKM). Their machine executes arbitrary programs over a minimal instruction set, authenticating in ZK the program execution. In this work, we significantly extend this research thrust, both in terms of efficiency and generality. Our contributions include:• A rich and performance-oriented architecture for representing arbitrary ZK proofs as programs.• A complete compiler toolchain providing full support for ANSI C95 programs. We ran off-the-shelf buggy versions of the Linux programs sed and gzip, proving in ZK that each program has a bug. To our knowledge, this is the first ZK system capable of executing standard Linux programs.• Improved ZK oblivious RAM (ORAM). [HK20a] introduced an efficient ZK-specific ORAM BubbleRAM that consumes O(log <sup>2</sup>  n) communication per access. We extend BubbleRAM with multi-level caching, decreasing communication to O(log n) per access. This introduces the possibility of a cache miss, which we handle cheaply. Our experiments show that cache misses are rare; in isolation, i.e., ignoring other processor costs, BubbleCache improves communication over BubbleRAM by more than 8×. Using BubbleCache improves our processor’s total communication (including costs of cache misses) by ≈ 25-30%.• Numerous low-level optimizations, resulting in a CPU that is both more expressive and ≈ 5.5× faster than [HK20a]’s.• Attention to user experience. Our engineer-facing ZK instrumentation and extensions are minimal and easy to use.Put together, our system is efficient and general, and can run many standard Linux programs. The resultant machine runs at up to 11KHz on a 1Gbps LAN and supports MBs of RAM.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519401/](https://ieeexplore.ieee.org/document/9519401/)
## Survivalism: Systematic Analysis of Windows Malware Living-Off-The-Land.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#survivalism-systematic-analysis-of-windows-malware-living-off-the-land)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#survivalism-systematic-analysis-of-windows-malware-living-off-the-land)
### Authors
* Frederick Barr-Smith, Oxford University
* Xabier Ugarte-Pedrero, Cisco Systems
* Mariano Graziano, Cisco Systems
* Riccardo Spolaor, Oxford University
* Ivan Martinovic, Oxford University
### Abstract
> As malware detection algorithms and methods become more sophisticated, malware authors adopt equally sophisticated evasion mechanisms to defeat them. Anecdotal evidence claims Living-Off-The-Land (LotL) techniques are one of the major evasion techniques used in many malware attacks. These techniques leverage binaries already present in the system to conduct malicious actions. We present the first large-scale systematic investigation of the use of these techniques by malware on Windows systems.In this paper, we analyse how common the use of these native system binaries is across several malware datasets, containing a total of 31,805,549 samples. We identify an average 9.41% prevalence. Our results show that the use of LotL techniques is prolific, particularly in Advanced Persistent Threat (APT) malware samples where the prevalence is 26.26%, over twice that of commodity malware.To illustrate the evasive potential of LotL techniques, we test the usage of LotL techniques against several fully patched Windows systems in a local sandboxed environment and show that there is a generalised detection gap in 10 of the most popular anti-virus products.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519480/](https://ieeexplore.ieee.org/document/9519480/)
## Runtime Recovery of Web Applications under Zero-Day ReDoS Attacks.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#runtime-recovery-of-web-applications-under-zero-day-redos-attacks)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#runtime-recovery-of-web-applications-under-zero-day-redos-attacks)
### Authors
* Zhihao Bai, Johns Hopkins University
* Ke Wang, Peking University
* Hang Zhu, Johns Hopkins University
* Yinzhi Cao, Johns Hopkins University
* Xin Jin, Peking University
### Abstract
> Regular expression denial of service (ReDoS)— which exploits the super-linear running time of matching regular expressions against carefully crafted inputs—is an emerging class of DoS attacks to web services. One challenging question for a victim web service under ReDoS attacks is how to quickly recover its normal operation after ReDoS attacks, especially these zero-day ones exploiting previously unknown vulnerabilities.In this paper, we present RegexNet, the first payload-based, automated, reactive ReDoS recovery system for web services. RegexNet adopts a learning model, which is updated constantly in a feedback loop during runtime, to classify payloads of upcoming requests including the request contents and database query responses. If detected as a cause leading to ReDoS, RegexNet migrates those requests to a sandbox and isolates their execution for a fast, first-measure recovery.We have implemented a RegexNet prototype and integrated it with HAProxy and Node.js. Evaluation results show that RegexNet is effective in recovering the performance of web services against zero-day ReDoS attacks, responsive on reacting to attacks in sub-minute, and resilient to different ReDoS attack types including adaptive ones that are designed to evade RegexNet on purpose.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519496/](https://ieeexplore.ieee.org/document/9519496/)
## Good Bot, Bad Bot: Characterizing Automated Browsing Activity.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#good-bot-bad-bot-characterizing-automated-browsing-activity)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#good-bot-bad-bot-characterizing-automated-browsing-activity)
### Authors
* Xigao Li, Stony Brook University
* Babak Amin Azad, Stony Brook University
* Amir Rahmati, Stony Brook University
* Nick Nikiforakis, Stony Brook University
### Abstract
> As the web keeps increasing in size, the number of vulnerable and poorly-managed websites increases commensurately. Attackers rely on armies of malicious bots to discover these vulnerable websites, compromising their servers, and exfiltrating sensitive user data. It is, therefore, crucial for the security of the web to understand the population and behavior of malicious bots.In this paper, we report on the design, implementation, and results of Aristaeus, a system for deploying large numbers of "honeysites", i.e., websites that exist for the sole purpose of attracting and recording bot traffic. Through a seven-month-long experiment with 100 dedicated honeysites, Aristaeus recorded 26.4 million requests sent by more than 287K unique IP addresses, with 76,396 of them belonging to clearly malicious bots. By analyzing the type of requests and payloads that these bots send, we discover that the average honeysite received more than 37K requests each month, with more than 50% of these requests attempting to brute-force credentials, fingerprint the deployed web applications, and exploit large numbers of different vulnerabilities. By comparing the declared identity of these bots with their TLS handshakes and HTTP headers, we uncover that more than 86.2% of bots are claiming to be Mozilla Firefox and Google Chrome, yet are built on simple HTTP libraries and command-line tools.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519384/](https://ieeexplore.ieee.org/document/9519384/)
## Trouble Over-The-Air: An Analysis of FOTA Apps in the Android Ecosystem.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#trouble-over-the-air-an-analysis-of-fota-apps-in-the-android-ecosystem)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#trouble-over-the-air-an-analysis-of-fota-apps-in-the-android-ecosystem)
### Authors
* Eduardo Blázquez, Universidad Carlos III de Madrid
* Sergio Pastrana, Universidad Carlos III de Madrid
* Álvaro Feal, IMDEA Networks Institute; Universidad Carlos III de Madrid
* Julien Gamba, IMDEA Networks Institute; Universidad Carlos III de Madrid
* Platon Kotzias, NortonLifelock Research Group
* Narseo Vallina-Rodriguez, IMDEA Networks Institute; ICSI
* Juan Tapiador, Universidad Carlos III de Madrid
### Abstract
> Android firmware updates are typically managed by the so-called FOTA (Firmware Over-the-Air) apps. Such apps are highly privileged and play a critical role in maintaining devices secured and updated. The Android operating system offers standard mechanisms—available to Original Equipment Manufacturers (OEMs)—to implement their own FOTA apps but such vendor-specific implementations could be a source of security and privacy issues due to poor software engineering practices. This paper performs the first large-scale and systematic analysis of the FOTA ecosystem through a dataset of 2,013 FOTA apps detected with a tool designed for this purpose over 422,121 pre-installed apps. We classify the different stakeholders developing and deploying FOTA apps on the Android update ecosystem, showing that 43% of FOTA apps are developed by third parties. We report that some devices can have as many as 5 apps implementing FOTA capabilities. By means of static analysis of the code of FOTA apps, we show that some apps present behaviors that can be considered privacy intrusive, such as the collection of sensitive user data (e.g., geolocation linked to unique hardware identifiers), and a significant presence of third-party trackers. We also discover implementation issues leading to critical vulnerabilities, such as the use of public AOSP test keys both for signing FOTA apps and for update verification, thus allowing any update signed with the same key to be installed. Finally, we study telemetry data collected from real devices by a commercial security tool. We demonstrate that FOTA apps are responsible for the installation of non-system apps (e.g., entertainment apps and games), including malware and Potentially Unwanted Programs (PUP). Our findings suggest that FOTA development practices are misaligned with Google’s recommendations.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519485/](https://ieeexplore.ieee.org/document/9519485/)
## Doing good by fighting fraud: Ethical anti-fraud systems for mobile payments.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#doing-good-by-fighting-fraud-ethical-anti-fraud-systems-for-mobile-payments)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#doing-good-by-fighting-fraud-ethical-anti-fraud-systems-for-mobile-payments)
### Authors
* Zainul Abi Din, University of California, Davis
* Hari Venugopalan, University of California, Davis
* Henry Lin, Bouncer Technologies
* Adam Wushensky, Bouncer Technologies
* Steven Liu, Bouncer Technologies
* Samuel T. King, University of California, Davis; Bouncer Technologies
### Abstract
> App builders commonly use security challenges, a form of step-up authentication, to add security to their apps. However, the ethical implications of this type of architecture has not been studied previously.In this paper, we present a large-scale measurement study of running an existing anti-fraud security challenge, Boxer, in real apps running on mobile devices. We find that although Boxer does work well overall, it is unable to scan effectively on devices that run its machine learning models at less than one frame per second (FPS), blocking users who use inexpensive devices.With the insights from our study, we design Daredevil, a new anti-fraud system for scanning payment cards that works well across the broad range of performance characteristics and hardware configurations found on modern mobile devices. Daredevil reduces the number of devices that run at less than one FPS by an order of magnitude compared to Boxer, providing a more equitable system for fighting fraud.In total, we collect data from 5,085,444 real devices spread across 496 real apps running production software and interacting with real users.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519475/](https://ieeexplore.ieee.org/document/9519475/)
## Happer: Unpacking Android Apps via a Hardware-Assisted Approach.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#happer-unpacking-android-apps-via-a-hardware-assisted-approach)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#happer-unpacking-android-apps-via-a-hardware-assisted-approach)
### Authors
* Lei Xue, The Hong Kong Polytechnic University
* Hao Zhou, The Hong Kong Polytechnic University
* Xiapu Luo, The Hong Kong Polytechnic University
* Yajin Zhou, Zhejiang University
* Yang Shi, Tongji University
* Guofei Gu, Texas A&M University
* Fengwei Zhang, Southern University of Science and Technology
* Man Ho Au, The University of Hong Kong
### Abstract
> Malware authors are abusing packers (or runtime-based obfuscators) to protect malicious apps from being analyzed. Although many unpacking tools have been proposed, they can be easily impeded by the anti-analysis methods adopted by the packers, and they fail to effectively collect the hidden Dex data due to the evolving protection strategies of packers. Consequently, many packing behaviors are unknown to analysts and packed malware can circumvent the inspection. To fill the gap, in this paper, we propose a novel hardware-assisted approach that first monitors the packing behaviors and then selects the proper approach to unpack the packed apps. Moreover, we develop a prototype named Happerwith a domain-specific language named behavior description language (BDL) for the ease of extending Happerafter tackling several technical challenges. We conduct extensive experiments with 12 commercial Android packers and more than 24k Android apps to evaluate Happer. The results show that Happerobserved 27 packing behaviors, 17 of which have not been elaborated by previous studies. Based on the observed packing behaviors, Happeradopted proper approaches to collect all the hidden Dex data and assembled them to valid Dex files.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519458/](https://ieeexplore.ieee.org/document/9519458/)
## The Provable Security of Ed25519: Theory and Practice.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#the-provable-security-of-ed25519-theory-and-practice)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#the-provable-security-of-ed25519-theory-and-practice)
### Authors
* Jacqueline Brendel, CISPA Helmholtz Center for Information Security
* Cas Cremers, CISPA Helmholtz Center for Information Security
* Dennis Jackson, Department of Computer Science, ETH Zurich
* Mang Zhao, CISPA Helmholtz Center for Information Security
### Abstract
> A standard requirement for a signature scheme is that it is existentially unforgeable under chosen message attacks (EUF-CMA), alongside other properties of interest such as strong unforgeability (SUF-CMA), and resilience against key substitution attacks.Remarkably, no detailed proofs have ever been given for these security properties for EdDSA, and in particular its Ed25519 instantiations. Ed25519 is one of the most efficient and widely used signature schemes, and different instantiations of Ed25519 are used in protocols such as TLS 1.3, SSH, Tor, ZCash, and WhatsApp/Signal. The differences between these instantiations are subtle, and only supported by informal arguments, with many works assuming results can be directly transferred from Schnorr signatures. Similarly, several proofs of protocol security simply assume that Ed25519 satisfies properties such as EUF-CMA or SUF-CMA.In this work we provide the first detailed analysis and security proofs of Ed25519 signature schemes. While the design of the schemes follows the well-established Fiat-Shamir paradigm, which should guarantee existential unforgeability, there are many side cases and encoding details that complicate the proofs, and all other security properties needed to be proven independently.Our work provides scientific rationale for choosing among several Ed25519 variants and understanding their properties, fills a much needed proof gap in modern protocol proofs that use these signatures, and supports further standardisation efforts.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519456/](https://ieeexplore.ieee.org/document/9519456/)
## Epochal Signatures for Deniable Group Chats.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#epochal-signatures-for-deniable-group-chats)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#epochal-signatures-for-deniable-group-chats)
### Authors
* Andreas Hülsing, TU Eindhoven
* Fiona Johanna Weber, TU Eindhoven
### Abstract
> In this work we take a formal look at deniability in group chat applications and introduce the concept of "epochal signatures" that allows to turn many secure group chat protocols into deniable ones. Intuitively, the transform works for protocols that use signatures for authentication and that become deniable if the signatures are removed. In contrast to previous proposals that use signatures for entity authentication, like mpOTR (CCS’09), our construction does not require pairwise key establishment of participants and allows to add and remove participants without requiring to re-initialize the chat. These properties allow the deployment in protocols that are also designed to scale to very large groups. Finally, we construct a practical epochal signature scheme from generic primitives and prove it secure.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519499/](https://ieeexplore.ieee.org/document/9519499/)
## BUFFing signature schemes beyond unforgeability and the case of post-quantum signatures.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#buffing-signature-schemes-beyond-unforgeability-and-the-case-of-post-quantum-signatures)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#buffing-signature-schemes-beyond-unforgeability-and-the-case-of-post-quantum-signatures)
### Authors
* Cas Cremers, CISPA Helmholtz Center for Information Security, Germany
* Samed Düzlü, QPC, Technische Universität Darmstadt, Germany
* Rune Fiedler, Cryptoplexity, Technische Universität Darmstadt, Germany
* Marc Fischlin, Cryptoplexity, Technische Universität Darmstadt, Germany
* Christian Janson, Cryptoplexity, Technische Universität Darmstadt, Germany
### Abstract
> Modern digital signature schemes can provide more guarantees than the standard notion of (strong) unforgeability, such as offering security even in the presence of maliciously generated keys, or requiring to know a message to produce a signature for it. The use of signature schemes that lack these properties has previously enabled attacks on real-world protocols. In this work we revisit several of these notions beyond unforgeability, establish relations among them, provide the first formal definition of non re-signability, and a transformation that can provide these properties for a given signature scheme in a provable and efficient way.Our results are not only relevant for established schemes: for example, the ongoing NIST PQC competition towards standardizing post-quantum signature schemes has six finalists in its third round. We perform an in-depth analysis of the candidates with respect to their security properties beyond unforgeability. We show that many of them do not yet offer these stronger guarantees, which implies that the security guarantees of these post-quantum schemes are not strictly stronger than, but instead incomparable to, classical signature schemes. We show how applying our transformation would efficiently solve this, paving the way for the standardized schemes to provide these additional guarantees and thereby making them harder to misuse.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519420/](https://ieeexplore.ieee.org/document/9519420/)
## Detecting Filter List Evasion with Event-Loop-Turn Granularity JavaScript Signatures.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#detecting-filter-list-evasion-with-event-loop-turn-granularity-javascript-signatures)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#detecting-filter-list-evasion-with-event-loop-turn-granularity-javascript-signatures)
### Authors
* Quan Chen, North Carolina State University
* Peter Snyder, Brave Software
* Ben Livshits, Brave Software
* Alexandros Kapravelos, North Carolina State University
### Abstract
> Content blocking is an important part of a per-formant, user-serving, privacy respecting web. Current content blockers work by building trust labels over URLs. While useful, this approach has many well understood shortcomings. Attackers may avoid detection by changing URLs or domains, bundling unwanted code with benign code, or inlining code in pages.The common flaw in existing approaches is that they evaluate code based on its delivery mechanism, not its behavior. In this work we address this problem by building a system for generating signatures of the privacy-and-security relevant behavior of executed JavaScript. Our system uses as the unit of analysis each script’s behavior during each turn on the JavaScript event loop. Focusing on event loop turns allows us to build highly identifying signatures for JavaScript code that are robust against code obfuscation, code bundling, URL modification, and other common evasions, as well as handle unique aspects of web applications.This work makes the following contributions to the problem of measuring and improving content blocking on the web: First, we design and implement a novel system to build per-event-loop-turn signatures of JavaScript behavior through deep instrumentation of the Blink and V8 runtimes. Second, we apply these signatures to measure how much privacy-and-security harming code is missed by current content blockers, by using EasyList and EasyPrivacy as ground truth and finding scripts that have the same privacy and security harming patterns. We build 1,995,444 signatures of privacy-and-security relevant behaviors from 11,212 unique scripts blocked by filter lists, and find 3,589 unique scripts hosting known harmful code, but missed by filter lists, affecting 12.48% of websites measured. Third, we provide a taxonomy of ways scripts avoid detection and quantify the occurrence of each. Finally, we present defenses against these evasions, in the form of filter list additions where possible, and through a proposed, signature based system in other cases.As part of this work, we share the implementation of our signature-generation system, the data gathered by applying that system to the Alexa 100K, and 586 AdBlock Plus compatible filter list rules to block instances of currently blocked code being moved to new URLs.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519497/](https://ieeexplore.ieee.org/document/9519497/)
## Reading Between the Lines: An Extensive Evaluation of the Security and Privacy Implications of EPUB Reading Systems.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#reading-between-the-lines-an-extensive-evaluation-of-the-security-and-privacy-implications-of-epub-reading-systems)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#reading-between-the-lines-an-extensive-evaluation-of-the-security-and-privacy-implications-of-epub-reading-systems)
### Authors
* Gertjan Franken, imec-DistriNet, KU Leuven, Leuven, Belgium
* Tom Van Goethem, imec-DistriNet, KU Leuven, Leuven, Belgium
* Wouter Joosen, imec-DistriNet, KU Leuven, Leuven, Belgium
### Abstract
> In recent years, e-books have proven to be a very appealing alternative to physical books; nowadays, almost every written book is published in an electronic format next to its physical copy. In an attempt to promote consensus and to offer an alternative to emerging proprietary e-book formats, the Open eBook format was introduced, now known as the EPUB format. Building on existing web functionalities, this open format relies primarily on XHTML and CSS to construct e-books. As such, browser engines are often employed to render the contents of EPUBs. However, this implies that reading systems may face similar vulnerabilities as web browsers.In this paper, we report on a semi-automated evaluation of the security and privacy aspects of EPUB reading systems. This evaluation, which was performed on 97 EPUB reading systems covering seven platforms and five physical reading devices, revealed that almost none of the JavaScript-supporting reading systems sufficiently adhere to the EPUB specification’s security recommendations. Furthermore, our results indicate that 16 reading systems even allow an EPUB to leak information about the user’s file system, and in eight cases extract file contents. In addition to the semi-automated evaluation, we demonstrate that an attacker can launch even more potent attacks that may lead to a full compromise of a user’s system, by exploiting aspects specific to the implementation of reading systems used by millions of users. Finally, we investigate the root cause of the identified security and privacy issues, uncovering several flaws in both the implementation of EPUB reading system, as well as shortcomings of the EPUB specification.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519412/](https://ieeexplore.ieee.org/document/9519412/)
## Did you mix me? Formally Verifying Verifiable Mix Nets in Electronic Voting.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#did-you-mix-me-formally-verifying-verifiable-mix-nets-in-electronic-voting)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#did-you-mix-me-formally-verifying-verifiable-mix-nets-in-electronic-voting)
### Authors
* Thomas Haines, Dept of Mathematical Sciences, Norwegian University of Science and Technology
* Rajeev Goré, Research School of Computer Science, The Australian National University
* Bhavesh Sharma, Research School of Computer Science, The Australian National University
### Abstract
> Verifiable mix nets, and specifically proofs of (correct) shuffle, are a fundamental building block in numerous applications: these zero-knowledge proofs allow the prover to produce a public transcript which can be perused by the verifier to confirm the purported shuffle. They are particularly vital to verifiable electronic voting, where they underpin almost all voting schemes with non-trivial tallying methods. These complicated pieces of cryptography are a prime location for critical errors which might allow undetected modification of the outcome.The best solution to preventing these errors is to machine-check the cryptographic properties of the design and implementation of the mix net. Particularly crucial for the integrity of the outcome is the soundness of the design and implementation of the verifier (software). Unfortunately, several different encryption schemes are used in many different slight variations which makes it infeasible to machine-check every single case individually. However, a particular optimised variant of the Terelius-Wikström mix net is, and has been, widely deployed in elections including national elections in Norway, Estonia and Switzerland, albeit with many slight variations and several different encryption schemes.In this work, we develop the logical theory and formal methods tools to machine-check the design and implementation of all these variants of Terelius-Wikström mix nets, for all the different encryption schemes used; resulting in provably correct mix nets for all these different variations. We do this carefully to ensure that we can extract a formally verified implementation of the verifier (software) which is compatible with existing deployed implementations of the Terelius-Wikström mix net. This gives us provably correct implementations of the verifiers for more than half of the national elections which have used verifiable mix nets.Our implementation of a proof of correct shuffle is the first to be machine-checked to be cryptographically correct and able to verify proof transcripts from national elections. We demonstrate the practicality of our implementation by verifying transcripts produced by the Verificatum mix net system and the CHVote e-voting system from Switzerland.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519460/](https://ieeexplore.ieee.org/document/9519460/)
## The EMV Standard: Break, Fix, Verify.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#the-emv-standard-break-fix-verify)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#the-emv-standard-break-fix-verify)
### Authors
* David Basin, Department of Computer Science, ETH Zurich
* Ralf Sasse, Department of Computer Science, ETH Zurich
* Jorge Toro-Pozo, Department of Computer Science, ETH Zurich
### Abstract
> EMV is the international protocol standard for smartcard payment and is used in over 9 billion cards worldwide. Despite the standard’s advertised security, various issues have been previously uncovered, deriving from logical flaws that are hard to spot in EMV’s lengthy and complex specification, running over 2,000 pages.We formalize a comprehensive symbolic model of EMV in Tamarin, a state-of-the-art protocol verifier. Our model is the first that supports a fine-grained analysis of all relevant security guarantees that EMV is intended to offer. We use our model to automatically identify flaws that lead to two critical attacks: one that defrauds the cardholder and a second that defrauds the merchant. First, criminals can use a victim’s Visa contactless card to make payments for amounts that require cardholder verification, without knowledge of the card’s PIN. We built a proof-of-concept Android application and successfully demonstrated this attack on real-world payment terminals. Second, criminals can trick the terminal into accepting an unauthentic offline transaction, which the issuing bank should later decline, after the criminal has walked away with the goods. This attack is possible for implementations following the standard, although we did not test it on actual terminals for ethical reasons. Finally, we propose and verify improvements to the standard that prevent these attacks, as well as any other attacks that violate the considered security properties. The proposed improvements can be easily implemented in the terminals and do not affect the cards in circulation.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519404/](https://ieeexplore.ieee.org/document/9519404/)
## A Secure and Formally Verified Linux KVM Hypervisor.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#a-secure-and-formally-verified-linux-kvm-hypervisor)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#a-secure-and-formally-verified-linux-kvm-hypervisor)
### Authors
* Shih-Wei Li, Department of Computer Science, Columbia University
* Xupeng Li, Department of Computer Science, Columbia University
* Ronghui Gu, Department of Computer Science, Columbia University
* Jason Nieh, Department of Computer Science, Columbia University
* John Zhuang Hui, Department of Computer Science, Columbia University
### Abstract
> Commodity hypervisors are widely deployed to support virtual machines (VMs) on multiprocessor hardware. Their growing complexity poses a security risk. To enable formal verification over such a large codebase, we introduce microverification, a new approach that decomposes a commodity hypervisor into a small core and a set of untrusted services so that we can prove security properties of the entire hypervisor by verifying the core alone. To verify the multiprocessor hypervisor core, we introduce security-preserving layers to modularize the proof without hiding information leakage so we can prove each layer of the implementation refines its specification, and the top layer specification is refined by all layers of the core implementation. To verify commodity hypervisor features that require dynamically changing information flow, we introduce data oracles to mask intentional information flow. We can then prove noninterference at the top layer specification and guarantee the resulting security properties hold for the entire hypervisor implementation. Using microverification, we retrofitted the Linux KVM hypervisor with only modest modifications to its codebase. Using Coq, we proved that the hypervisor protects the confidentiality and integrity of VM data, while retaining KVM’s functionality and performance. Our work is the first machine-checked security proof for a commodity multiprocessor hypervisor.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519433/](https://ieeexplore.ieee.org/document/9519433/)
## Many-out-of-Many Proofs and Applications to Anonymous Zether.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#many-out-of-many-proofs-and-applications-to-anonymous-zether)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#many-out-of-many-proofs-and-applications-to-anonymous-zether)
### Authors
* Benjamin E. Diamond, J.P. Morgan AI Research, New York, United States
### Abstract
> Anonymous Zether, proposed by Bünz, Agrawal, Zamani, and Boneh (FC’20), is a private payment design whose wallets demand little bandwidth and need not remain online; this unique property makes it a compelling choice for resource-constrained devices. In this work, we describe an efficient construction of Anonymous Zether. Our protocol features proofs which grow only logarithmically in the size of the "anonymity sets" used, improving upon the linear growth attained by prior efforts. It also features competitive transaction sizes in practice (on the order of 3 kilobytes).Our central tool is a new family of extensions to Groth and Kohlweiss’s one-out-of-many proofs (Eurocrypt 2015), which efficiently prove statements about many messages among a list of commitments. These extensions prove knowledge of a secret subset of a public list, and assert that the commitments in the subset satisfy certain properties (expressed as linear equations). Remarkably, our communication remains logarithmic; our computation increases only by a logarithmic multiplicative factor. This technique is likely to be of independent interest.We present an open-source, Ethereum-based implementation of our Anonymous Zether construction.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519471/](https://ieeexplore.ieee.org/document/9519471/)
## On the Anonymity Guarantees of Anonymous Proof-of-Stake Protocols.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#on-the-anonymity-guarantees-of-anonymous-proof-of-stake-protocols)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#on-the-anonymity-guarantees-of-anonymous-proof-of-stake-protocols)
### Authors
* Markulf Kohlweiss, University of Edinburgh
* Varun Madathil, North Carolina State University
* Kartik Nayak, Duke University
* Alessandra Scafuro, North Carolina State University
### Abstract
> In proof-of-stake (PoS) blockchains, stakeholders that extend the chain are selected according to the amount of stake they own. In S&P 2019 the "Ouroboros Crypsinous" system of Kerber et al. (and concurrently Ganesh et al. in EUROCRYPT 2019) presented a mechanism that hides the identity of the stakeholder when adding blocks, hence preserving anonymity of stakeholders both during payment and mining in the Ouroboros blockchain. They focus on anonymizing the messages of the blockchain protocol, but suggest that potential identity leaks from the network-layer can be removed as well by employing anonymous broadcast channels.In this work we show that this intuition is flawed. Even ideal anonymous broadcast channels do not suffice to protect the identity of the stakeholder who proposes a block.We make the following contributions. First, we show a formal network-attack against Ouroboros Crypsinous, where the adversary can leverage network delays to distinguish who is the stakeholder that added a block on the blockchain. Second, we abstract the above attack and show that whenever the adversary has control over the network delay – within the synchrony bound – loss of anonymity is inherent for any protocol that provides liveness guarantees. We do so, by first proving that it is impossible to devise a (deterministic) state-machine replication protocol that achieves basic liveness guarantees and better than (1−2f) anonymity at the same time (where f is the fraction of corrupted parties). We then connect this result to the PoS setting by presenting the tagging and reverse tagging attack that allows an adversary, across several executions of the PoS protocol, to learn the stake of a target node, by simply delaying messages for the target. We demonstrate that our assumption on the delaying power of the adversary is realistic by describing how our attack could be mounted over the Zcash blockchain network (even when Tor is used). We conclude by suggesting approaches that can mitigate such attacks.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519415/](https://ieeexplore.ieee.org/document/9519415/)
## A2L: Anonymous Atomic Locks for Scalability in Payment Channel Hubs.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#a2l-anonymous-atomic-locks-for-scalability-in-payment-channel-hubs)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#a2l-anonymous-atomic-locks-for-scalability-in-payment-channel-hubs)
### Authors
* Erkan Tairi, TU Wien
* Pedro Moreno-Sanchez, IMDEA Software Institute
* Matteo Maffei, TU Wien
### Abstract
> Payment channel hubs (PCHs) constitute a promising solution to the inherent scalability problem of blockchain technologies, allowing for off-chain payments between sender and receiver through an intermediary, called the tumbler. While state-of-the-art PCHs provide security and privacy guarantees against a malicious tumbler, they do so by relying on the scripting-based functionality available only at few cryptocurrencies, and they thus fall short of fundamental properties such as backwards compatibility and efficiency.In this work, we present the first PCH protocol to achieve all aforementioned properties. Our PCH builds upon A <sup>2</sup> L, a novel cryptographic primitive that realizes a three-party protocol for conditional transactions, where the tumbler pays the receiver only if the latter solves a cryptographic challenge with the help of the sender, which implies the sender has paid the tumbler. We prove the security and privacy guarantees of A <sup>2</sup> L (which carry over to our PCH construction) in the Universal Composability framework and present a provably secure instantiation based on adaptor signatures and randomizable puzzles. We implemented A <sup>2</sup> L and compared it to TumbleBit, the state-of-the-art Bitcoin-compatible PCH. Asymptotically, A <sup>2</sup> L has a communication complexity that is constant, as opposed to linear in the security parameter like in TumbleBit. In practice, A <sup>2</sup> L requires ~33x less bandwidth than TumleBit, while retaining the computational cost (or providing 2x speedup with a preprocessing technique). This demonstrates that A <sup>2</sup> L (and thus our PCH construction) is ready to be deployed today.In theory, we demonstrate for the first time that it is possible to design a secure and privacy-preserving PCH while requiring only digital signatures and timelock functionality from the underlying scripting language. In practice, this result makes our PCH backwards compatible with virtually all cryptocurrencies available today, even those offering a highly restricted form of scripting language such as Ripple or Stellar. The practical appealing of our construction has resulted in a proof-of-concept implementation in the COMIT Network, a blockchain technology focused on cross-currency payments.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519431/](https://ieeexplore.ieee.org/document/9519431/)
## CrossTalk: Speculative Data Leaks Across Cores Are Real.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#crosstalk-speculative-data-leaks-across-cores-are-real)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#crosstalk-speculative-data-leaks-across-cores-are-real)
### Authors
* Hany Ragab, Department of Computer Science, Vrije Universiteit, Amsterdam, The Netherlands
* Alyssa Milburn, Department of Computer Science, Vrije Universiteit, Amsterdam, The Netherlands
* Kaveh Razavi, D-ITET ETH Zurich, Switzerland
* Herbert Bos, Department of Computer Science, Vrije Universiteit, Amsterdam, The Netherlands
* Cristiano Giuffrida, Department of Computer Science, Vrije Universiteit, Amsterdam, The Netherlands
### Abstract
> Recent transient execution attacks have demonstrated that attackers may leak sensitive information across security boundaries on a shared CPU core. Up until now, it seemed possible to prevent this by isolating potential victims and attackers on separate cores. In this paper, we show that the situation is more serious, as transient execution attacks can leak data across different cores on many modern Intel CPUs.We do so by investigating the behavior of x86 instructions, and in particular, we focus on complex microcoded instructions which perform offcore requests. Combined with transient execution vulnerabilities such as Micro-architectural Data Sampling (MDS), these operations can reveal internal CPU state. Using performance counters, we build a profiler, CROSSTALK, to examine the number and nature of such operations for many x86 instructions, and find that some instructions read data from a staging buffer which is shared between all CPU cores.To demonstrate the security impact of this behavior, we present the first cross-core attack using transient execution, showing that even the seemingly-innocuous CPUID instruction can be used by attackers to sample the entire staging buffer containing sensitive data – most importantly, output from the hardware random number generator (RNG) – across cores. We show that this can be exploited in practice to attack SGX enclaves running on a completely different core, where an attacker can control leakage using practical performance degradation attacks, and demonstrate that we can successfully determine enclave private keys. Since existing mitigations which rely on spatial or temporal partitioning are largely ineffective to prevent our proposed attack, we also discuss potential new mitigation techniques.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519489/](https://ieeexplore.ieee.org/document/9519489/)
## Hardware-Software Contracts for Secure Speculation.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#hardware-software-contracts-for-secure-speculation)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#hardware-software-contracts-for-secure-speculation)
### Authors
* Marco Guarnieri, IMDEA Software Institute
* Boris Köpf, Microsoft Research
* Jan Reineke, Saarland University
* Pepe Vila, IMDEA Software Institute
### Abstract
> Since the discovery of Spectre, a large number of hardware mechanisms for secure speculation has been proposed. Intuitively, more defensive mechanisms are less efficient but can securely execute a larger class of programs, while more permissive mechanisms may offer more performance but require more defensive programming. Unfortunately, there are no hardware-software contracts that would turn this intuition into a basis for principled co-design.In this paper, we put forward a framework for specifying such contracts, and we demonstrate its expressiveness and flexibility.On the hardware side, we use the framework to provide the first formalization and comparison of the security guarantees provided by a representative class of mechanisms for secure speculation.On the software side, we use the framework to characterize program properties that guarantee secure co-design in two scenarios traditionally investigated in isolation: (1) ensuring that a benign program does not leak information while computing on confidential data, and (2) ensuring that a potentially malicious program cannot read outside of its designated sandbox. Finally, we show how the properties corresponding to both scenarios can be checked based on existing tools for software verification, and we use them to validate our findings on executable code.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519500/](https://ieeexplore.ieee.org/document/9519500/)
## High-Assurance Cryptography in the Spectre Era.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#high-assurance-cryptography-in-the-spectre-era)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#high-assurance-cryptography-in-the-spectre-era)
### Authors
* Gilles Barthe, MPI-SP; IMDEA Software Institute
* Sunjay Cauligi, UC San Diego
* Benjamin Grégoire, INRIA Sophia Antipolis
* Adrien Koutsos, MPI-SP; INRIA Paris
* Kevin Liao, MPI-SP; MIT
* Tiago Oliveira, University of Porto (FCUP) and INESC TEC
* Swarn Priya, Purdue University
* Tamara Rezk, INRIA Sophia Antipolis
* Peter Schwabe, MPI-SP
### Abstract
> High-assurance cryptography leverages methods from program verification and cryptography engineering to deliver efficient cryptographic software with machine-checked proofs of memory safety, functional correctness, provable security, and absence of timing leaks. Traditionally, these guarantees are established under a sequential execution semantics. However, this semantics is not aligned with the behavior of modern processors that make use of speculative execution to improve performance. This mismatch, combined with the high-profile Spectre-style attacks that exploit speculative execution, naturally casts doubts on the robustness of high-assurance cryptography guarantees. In this paper, we dispel these doubts by showing that the benefits of high-assurance cryptography extend to speculative execution, costing only a modest performance overhead. We build atop the Jasmin verification framework an end-to-end approach for proving properties of cryptographic software under speculative execution, and validate our approach experimentally with efficient, functionally correct assembly implementations of ChaCha20 and Poly1305, which are secure against both traditional timing and speculative execution attacks.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519434/](https://ieeexplore.ieee.org/document/9519434/)
## A Novel Dynamic Analysis Infrastructure to Instrument Untrusted Execution Flow Across User-Kernel Spaces.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#a-novel-dynamic-analysis-infrastructure-to-instrument-untrusted-execution-flow-across-user-kernel-spaces)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#a-novel-dynamic-analysis-infrastructure-to-instrument-untrusted-execution-flow-across-user-kernel-spaces)
### Authors
* Jiaqi Hong, School of Information Systems, Singapore Management University
* Xuhua Ding, School of Information Systems, Singapore Management University
### Abstract
> Code instrumentation and hardware based event trapping are two primary approaches used in dynamic malware analysis systems. In this paper, we propose a new approach called Execution Flow Instrumentation (EFI) where the analyzer execution flow is interleaved with the target flow in user- and kernel-mode, at junctures flexibly chosen by the analyzer at runtime. We also propose OASIS as the system infrastructure to realize EFI with virtues of the current two approaches, however without their drawbacks. Despite being securely and transparently isolated from the target, the analyzer introspects and controls it in the same native way as instrumentation code. We have implemented a prototype of OASIS and rigorously evaluated it with various experiments including performance and anti-analysis benchmark tests. We have also conducted two EFI case studies. The first is a cross-space control flow tracer and the second includes two EFI tools working in tandem with Google Syzkaller. One tool makes a dynamic postmortem analysis according to a kernel crash report; and the other explores the behavior of a malicious kernel space device driver which evades Syzkaller logging. The studies show that EFI analyzers are well-suited for fine-grained on-demand dynamic analysis upon a malicious thread in user or kernel mode. It is easy to develop agile EFI tools as they are user-space programs.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519439/](https://ieeexplore.ieee.org/document/9519439/)
## DynPTA: Combining Static and Dynamic Analysis for Practical Selective Data Protection.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#dynpta-combining-static-and-dynamic-analysis-for-practical-selective-data-protection)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#dynpta-combining-static-and-dynamic-analysis-for-practical-selective-data-protection)
### Authors
* Tapti Palit, Stony Brook University
* Jarin Firose Moon, Stony Brook University
* Fabian Monrose, UNC Chapel Hill
* Michalis Polychronakis, Stony Brook University
### Abstract
> As control flow hijacking attacks become more challenging due to the deployment of various exploit mitigation technologies, the leakage of sensitive process data through the exploitation of memory disclosure vulnerabilities is becoming an increasingly important threat. To make matters worse, recently introduced transient execution attacks provide a new avenue for leaking confidential process data. As a response, various approaches for selectively protecting subsets of critical in-memory data have been proposed, which though either require a significant code refactoring effort, or do not scale for large applications.In this paper we present DynPTA, a selective data protection approach that combines static analysis with scoped dynamic data flow tracking (DFT) to keep a subset of manually annotated sensitive data always encrypted in memory. DynPTA ameliorates the inherent overapproximation of pointer analysis—a significant challenge that has prevented previous approaches from supporting large applications—by relying on lightweight label lookups to determine if potentially sensitive data is actually sensitive. Labeled objects are tracked only within the subset of value flows that may carry potentially sensitive data, requiring only a fraction of the program’s code to be instrumented for DFT. We experimentally evaluated DynPTA with real-world applications and demonstrate that it can prevent memory disclosure (Heartbleed) and transient execution (Spectre) attacks from leaking the protected data, while incurring a modest runtime overhead of up to 19.2% when protecting the private TLS key of Nginx with OpenSSL.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519446/](https://ieeexplore.ieee.org/document/9519446/)
## DICE: Automatic Emulation of DMA Input Channels for Dynamic Firmware Analysis.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#dice-automatic-emulation-of-dma-input-channels-for-dynamic-firmware-analysis)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#dice-automatic-emulation-of-dma-input-channels-for-dynamic-firmware-analysis)
### Authors
* Alejandro Mera, Khoury College of Computer Sciences, Northeastern University, Boston, USA
* Bo Feng, Khoury College of Computer Sciences, Northeastern University, Boston, USA
* Long Lu, Khoury College of Computer Sciences, Northeastern University, Boston, USA
* Engin Kirda, Khoury College of Computer Sciences, Northeastern University, Boston, USA
### Abstract
> Microcontroller-based embedded devices are at the core of Internet-of-Things (IoT) and Cyber-Physical Systems (CPS). The security of these devices is of paramount importance. Among the approaches to securing embedded devices, dynamic firmware analysis (e.g., vulnerability detection) gained great attention lately, thanks to its offline nature and low false-positive rates. However, regardless of the analysis and emulation techniques used, existing dynamic firmware analyzers share a major limitation, namely the inability to handle firmware using DMA (Direct Memory Access). It severely limits the types of devices supported and firmware code coverage.We present DICE, a drop-in solution for firmware analyzers to emulate DMA input channels and generate or manipulate DMA inputs (from peripherals to firmware). DICE is designed to be hardware-independent (i.e., no actual peripherals or DMA controllers needed) and compatible with common MCU firmware (i.e., no firmware-specific DMA usages assumed) and embedded architectures. The high-level idea behind DICE is the identification and emulation of the abstract DMA input channels, rather than the highly diverse peripherals and controllers. DICE identifies DMA input channels as the firmware writes the source and destination DMA transfer pointers into the DMA controller. Then DICE manipulates the input transferred through DMA on behalf of the firmware analyzer. DICE does not require firmware source code or additional features from firmware analyzers.We integrated DICE to the recently proposed firmware analyzer P <sup>2</sup> IM (for ARM Cortex-M architecture) and a PIC32 emulator (for MIPS M4K/M-Class architecture). We evaluated it on 83 benchmarks and sample firmware, representing 9 different DMA controllers from 5 different vendors. DICE detected 33 out of 37 DMA input channels, with 0 false positives. It correctly supplied DMA inputs to 21 out of 22 DMA buffers that firmware actually use, which previous firmware analyzers cannot achieve due to the lack of DMA emulation. DICE’s overhead is fairly low, it adds 3.4% on average to P <sup>2</sup> IM execution time. We also fuzz-tested 7 real-world firmware using DICE and compared the results with the original P <sup>2</sup> IM. DICE uncovered tremendously more execution paths (as much as 79X) and found 5 unique previously-unknown bugs that are unreachable without DMA emulation. All our source code and dataset are publicly available.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519398/](https://ieeexplore.ieee.org/document/9519398/)
## Real-World Snapshots vs. Theory: Questioning the t-Probing Security Model.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#real-world-snapshots-vs-theory-questioning-the-t-probing-security-model)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#real-world-snapshots-vs-theory-questioning-the-t-probing-security-model)
### Authors
* Thilo Krachenfels, Chair of Security in Telecommunications, Technische Universität Berlin, Germany
* Fatemeh Ganji, Department of Electrical and Computer Engineering, Worcester Polytechnic Institute, USA
* Amir Moradi, Horst Görtz Institute for IT-Security, Ruhr-Universität Bochum, Germany
* Shahin Tajik, Department of Electrical and Computer Engineering, Worcester Polytechnic Institute, USA
* Jean-Pierre Seifert, Chair of Security in Telecommunications, Technische Universität Berlin, Germany
### Abstract
> Due to its sound theoretical basis and practical efficiency, masking has become the most prominent countermeasure to protect cryptographic implementations against physical side-channel attacks (SCAs). The core idea of masking is to randomly split every sensitive intermediate variable during computation into at least t+1 shares, where t denotes the maximum number of shares that are allowed to be observed by an adversary without learning any sensitive information. In other words, it is assumed that the adversary is bounded either by the possessed number of probes (e.g., microprobe needles) or by the order of statistical analyses while conducting higher-order SCA attacks (e.g., differential power analysis). Such bounded models are employed to prove the SCA security of the corresponding implementations. Consequently, it is believed that given a sufficiently large number of shares, the vast majority of known SCA attacks are mitigated.In this work, we present a novel laser-assisted SCA technique, called Laser Logic State Imaging (LLSI), which offers an unlimited number of contactless probes, and therefore, violates the probing security model assumption. This technique enables us to take snapshots of hardware implementations, i.e., extract the logical state of all registers at any arbitrary clock cycle with a single measurement. To validate this, we mount our attack on masked AES hardware implementations and practically demonstrate the extraction of the full-length key in two different scenarios. First, we assume that the location of the registers (key and/or state) is known, and hence, their content can be directly read by a single snapshot. Second, we consider an implementation with unknown register locations, where we make use of multiple snapshots and a SAT solver to reveal the secrets.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519478/](https://ieeexplore.ieee.org/document/9519478/)
## CRYLOGGER: Detecting Crypto Misuses Dynamically.
🌍 **[English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#crylogger-detecting-crypto-misuses-dynamically)** | [简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#crylogger-detecting-crypto-misuses-dynamically)
### Authors
* Luca Piccolboni, Columbia University, New York, NY, USA
* Giuseppe Di Guglielmo, Columbia University, New York, NY, USA
* Luca P. Carloni, Columbia University, New York, NY, USA
* Simha Sethumadhavan, Columbia University, New York, NY, USA
### Abstract
> Cryptographic (crypto) algorithms are the essential ingredients of all secure systems: crypto hash functions and encryption algorithms, for example, can guarantee properties such as integrity and confidentiality. Developers, however, can misuse the application programming interfaces (API) of such algorithms by using constant keys and weak passwords. This paper presents CRYLOGGER, the first open-source tool to detect crypto misuses dynamically. CRYLOGGER logs the parameters that are passed to the crypto APIs during the execution and checks their legitimacy offline by using a list of crypto rules. We compared CRYLOGGER with CryptoGuard, one of the most effective static tools to detect crypto misuses. We show that our tool complements the results of CryptoGuard, making the case for combining static and dynamic approaches. We analyzed 1780 popular Android apps downloaded from the Google Play Store to show that CRYLOGGER can detect crypto misuses on thousands of apps dynamically and automatically. We reverse-engineered 28 Android apps and confirmed the issues flagged by CRYLOGGER. We also disclosed the most critical vulnerabilities to app developers and collected their feedback.

### Links
- **URL:** [https://ieeexplore.ieee.org/document/9519501/](https://ieeexplore.ieee.org/document/9519501/)
