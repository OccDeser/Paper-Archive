# ACM Conference on Computer and Communications Security 2019
## 1 Trillion Dollar Refund: How To Spoof PDF Signatures.
### Authors
* Vladislav Mladenov, Ruhr University Bochum, Bochum, Germany
* Christian Mainka, Ruhr University Bochum, Bochum, Germany
* Karsten Meyer zu Selhausen, Hackmanit GmbH, Bochum, Germany
* Martin Grothe, Ruhr University Bochum, Bochum, Germany
* Jörg Schwenk, Ruhr University Bochum, Bochum, Germany
### Abstract
> The Portable Document Format (PDF) is the de-facto standard for document exchange worldwide. To guarantee the authenticity and integrity of documents, digital signatures are used. Several public and private services ranging from governments, public enterprises, banks, and payment services rely on the security of PDF signatures. In this paper, we present the first comprehensive security evaluation on digital signatures in PDFs. We introduce three novel attack classes which bypass the cryptographic protection of digitally signed PDF files allowing an attacker to spoof the content of a signed PDF. We analyzed 22 different PDF viewers and found 21 of them to be vulnerable, including prominent and widely used applications such as Adobe Reader DC and Foxit. We additionally evaluated eight online validation services and found six to be vulnerable. A possible explanation for these results could be the absence of a standard algorithm to verify PDF signatures -- each client verifies signatures differently, and attacks can be tailored to these differences. We, therefore, propose the standardization of a secure verification algorithm, which we describe in this paper. All findings have been responsibly disclosed, and the affected vendors were supported during fixing the issues. As a result, three generic CVEs for each attack class were issued [50-52]. Our research on PDF signatures and more information is also online available at https://www.pdf-insecurity.org/.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3339812](https://doi.org/10.1145/3319535.3339812)
## Practical Decryption exFiltration: Breaking PDF Encryption.
### Authors
* Jens Müller, Ruhr University Bochum, Bochum, Germany
* Fabian Ising, Münster University of Applied Sciences, Münster, Germany
* Vladislav Mladenov, Ruhr University Bochum, Bochum, Germany
* Christian Mainka, Ruhr University Bochum, Bochum, Germany
* Sebastian Schinzel, Münster University of Applied Sciences, Münster, Germany
* Jörg Schwenk, Ruhr University Bochum, Bochum, Germany
### Abstract
> The Portable Document Format, better known as PDF, is one of the most widely used document formats worldwide, and in order to ensure information confidentiality, this file format supports document encryption. In this paper, we analyze PDF encryption and show two novel techniques for breaking the confidentiality of encrypted documents. First, we abuse the PDF feature of partially encrypted documents to wrap the encrypted part of the document within attacker-controlled content and therefore, exfiltrate the plaintext once the document is opened by a legitimate user. Second, we abuse a flaw in the PDF encryption specification to arbitrarily manipulate encrypted content. The only requirement is that a single block of known plaintext is needed, and we show that this is fulfilled by design. Our attacks allow the recovery of the entire plaintext of encrypted documents by using exfiltration channels which are based on standard compliant PDF properties. We evaluated our attacks on 27 widely used PDF viewers and found all of them to be vulnerable. We responsibly disclosed the vulnerabilities and supported the vendors in fixing the issues.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3354214](https://doi.org/10.1145/3319535.3354214)
## A Machine-Checked Proof of Security for AWS Key Management Service.
### Authors
* José Bacelar Almeida, University of Minho and INESC TEC, Braga, Portugal
* Manuel Barbosa, University of Porto (FCUP) and INESC TEC, Porto, Portugal
* Gilles Barthe, IMDEA Software Institute and MPI-SP, Madrid, Spain
* Matthew Campagna, Amazon Web Services, Seattle, WA, USA
* Ernie Cohen, Amazon Web Services, New York, NY, USA
* Benjamin Gregoire, Inria, Sophia-Antipolis, France
* Vitor Pereira, University of Porto (FCUP) and INESC TEC, Porto, Portugal
* Bernardo Portela, University of Porto (FCUP) and INESC TEC, Porto, Portugal
* Pierre-Yves Strub, École Polytechnique, Palaiseau, France
* Serdar Tasiran, Amazon Web Services, New York, NY, USA
### Abstract
> We present a machine-checked proof of security for the domain management protocol of Amazon Web Services' KMS (Key Management Service) a critical security service used throughout AWS and by AWS customers. Domain management is at the core of AWS KMS; it governs the top-level keys that anchor the security of encryption services at AWS. We show that the protocol securely implements an ideal distributed encryption mechanism under standard cryptographic assumptions. The proof is machine-checked in the EasyCrypt proof assistant and is the largest EasyCrypt development to date.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3354228](https://doi.org/10.1145/3319535.3354228)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3354228](https://dl.acm.org/doi/pdf/10.1145/3319535.3354228)
## Mitigating Leakage in Secure Cloud-Hosted Data Structures: Volume-Hiding for Multi-Maps via Hashing.
### Authors
* Sarvar Patel, Google LLC, New York, NY, USA
* Giuseppe Persiano, University of Salerno, Salerno, Italy
* Kevin Yeo, Google LLC, New York, NY, USA
* Moti Yung, Google LLC and Columbia University, New York, NY, USA
### Abstract
> Volume leakage has recently been identified as a major threat to the security of cryptographic cloud-based data structures by Kellaris *et al.* [CCS'16] (see also the attacks in Grubbs *et al.* [CCS'18] and Lacharité *et al.* [S&P'18]). In this work, we focus on volume-hiding implementations of \em encrypted multi-maps as first considered by Kamara and Moataz [Eurocrypt'19]. Encrypted multi-maps consist of outsourcing the storage of a multi-map to an untrusted server, such as a cloud storage system, while maintaining the ability to perform private queries. Volume-hiding encrypted multi-maps ensure that the number of responses (volume) for any query remains hidden from the adversarial server. As a result, volume-hiding schemes can prevent leakage attacks that leverage the adversary's knowledge of the number of query responses to compromise privacy. We present both conceptual and algorithmic contributions towards volume-hiding encrypted multi-maps. We introduce the first formal definition of volume-hiding leakage functions. In terms of design, we present the first volume-hiding encrypted multi-map dprfMM whose storage and query complexity are both asymptotically optimal. Furthermore, we experimentally show that our construction is practically efficient. Our server storage is smaller than the best previous construction while we improve query complexity by a factor of 10-16x. In addition, we introduce the notion of differentially private volume-hiding leakage functions which strikes a better, tunable balance between privacy and efficiency. To accompany our new notion, we present a differentially private volume-hiding encrypted multi-map dpMM whose query complexity is the volume of the queried key plus an additional logarithmic factor. This is a significant improvement compared to all previous volume-hiding schemes whose query overhead was the maximum volume of any key. In natural settings, our construction improves the average query overhead by a factor of 150-240x over the previous best volume-hiding construction even when considering small privacy budget of ε=0.2.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3354213](https://doi.org/10.1145/3319535.3354213)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3354213](https://dl.acm.org/doi/pdf/10.1145/3319535.3354213)
## The Next 700 Policy Miners: A Universal Method for Building Policy Miners.
### Authors
* Carlos Cotrini, ETH Zürich, Zürich, Switzerland
* Luca Corinzia, ETH Zürich, Zürich, Switzerland
* Thilo Weghorn, ETH Zürich, Zürich, Switzerland
* David Basin, ETH Zürich, Zürich, Switzerland
### Abstract
> A myriad of access control policy languages have been and continue to be proposed. The design of policy miners for each such language is a challenging task that has required specialized machine learning and combinatorial algorithms. We present an alternative method, universal access control policy mining (Unicorn). We show how this method streamlines the design of policy miners for a wide variety of policy languages including ABAC, RBAC, RBAC with user-attribute constraints, RBAC with spatio-temporal constraints, and an expressive fragment of XACML. For the latter two, there were no known policy miners until now. To design a policy miner using Unicorn, one needs a policy language and a metric quantifying how well a policy fits an assignment of permissions to users. From these, one builds the policy miner as a search algorithm that computes a policy that best fits the given permission assignment. We experimentally evaluate the policy miners built with Unicorn on logs from Amazon and access control matrices from other companies. Despite the genericity of our method, our policy miners are competitive with and sometimes even better than specialized state-of-the-art policy miners. The true positive rates of policies we mined differ by only 5% from the policies mined by the state of the art and the false positive rates are always below 5%. In the case of ABAC, it even outperforms the state of the art.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3354196](https://doi.org/10.1145/3319535.3354196)
## Oh, the Places You've Been! User Reactions to Longitudinal Transparency About Third-Party Web Tracking and Inferencing.
### Authors
* Ben Weinshel, University of Chicago, Chicago, IL, USA
* Miranda Wei, University of Chicago, Chicago, IL, USA
* Mainack Mondal, IIT Kharagpur and University of Chicago, Kharagpur, India
* Euirim Choi, University of Chicago, Chicago, IL, USA
* Shawn Shan, University of Chicago, Chicago, IL, USA
* Claire Dolin, University of Chicago, Chicago, IL, USA
* Michelle L. Mazurek, University of Maryland, College Park, MD, USA
* Blase Ur, University of Chicago, Chicago, IL, USA
### Abstract
> Internet companies track users' online activity to make inferences about their interests, which are then used to target ads and personalize their web experience. Prior work has shown that existing privacy-protective tools give users only a limited understanding and incomplete picture of online tracking. We present Tracking Transparency, a privacy-preserving browser extension that visualizes examples of long-term, longitudinal information that third-party trackers could have inferred from users' browsing. The extension uses a client-side topic modeling algorithm to categorize pages that users visit and combines this with data about the web trackers encountered over time to create these visualizations. We conduct a longitudinal field study in which 425 participants use one of six variants of our extension for a week. We find that, after using the extension, participants have more accurate perceptions of the extent of tracking and also intend to take privacy-protecting actions.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3363200](https://doi.org/10.1145/3319535.3363200)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3363200](https://dl.acm.org/doi/pdf/10.1145/3319535.3363200)
## Page Cache Attacks.
### Authors
* Daniel Gruss, Graz University of Technology, Graz, Austria
* Erik Kraft, Graz University of Technology, Graz, Austria
* Trishita Tiwari, Boston University, Boston, MA, USA
* Michael Schwarz, Graz University of Technology, Graz, Austria
* Ari Trachtenberg, Boston University, Boston, MA, USA
* Jason Hennessey, NetApp, Sunnyvale, CA, USA
* Alex Ionescu, CrowdStrike, Sunnyvale, CA, USA
* Anders Fogh, Intel Corporation, Santa Clara, CA, USA
### Abstract
> We present a new side-channel attack that targets one of the most fundamental software caches in modern computer systems: the operating system page cache. The page cache is a pure software cache that contains all disk-backed pages, including program binaries, shared libraries, and other files. On Windows, dynamic pages are also part of this cache and can be attacked as well, e.g., data, heap, and stacks. Our side channel permits unprivileged monitoring of accesses to these pages of other processes, with a spatial resolution of 4kB and a temporal resolution of 2µs on Linux (≤6.7 measurements per second), and 466ns on Windows 10 (≤223 measurements per second). We systematically analyze the side channel by demonstrating different hardware-agnostic local attacks, including a sandbox-bypassing high-speed covert channel, an ASLR break on Windows 10, and various information leakages that can be used for targeted extortion, spam campaigns, and more directly for UI redressing attacks. We also show that, as with hardware cache attacks, we can attack the generation of temporary passwords on vulnerable cryptographic implementations. Our hardware-agnostic attacks can be mitigated with our proposed security patches, but the basic side channel remains exploitable via timing measurements. We demonstrate this with a remote covert channel exfiltrating information from a colluding process through innocuous server requests.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3339809](https://doi.org/10.1145/3319535.3339809)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3339809](https://dl.acm.org/doi/pdf/10.1145/3319535.3339809)
## Hardware-Backed Heist: Extracting ECDSA Keys from Qualcomm's TrustZone.
### Authors
* Keegan Ryan, University of California, San Diego & NCC Group, La Jolla, CA, USA
### Abstract
> Trusted Execution Environments (TEEs) such as ARM TrustZone are in widespread use in both mobile and embedded devices, and they are used to protect sensitive secrets while often sharing the same computational hardware as untrusted code. Although there has been limited research in the area, the threat of microarchitectural attacks against ARM TrustZone has not been thoroughly studied. This is not the case for other TEEs, such as Intel SGX, where the security promises of the TEE have been violated numerous times by the academic community, showing that it is possible to use side-channel attacks to gain detailed insight into the microarchitectural behavior of trusted code. In this work, we show that TrustZone is susceptible to similar attacks, and we demonstrate the ability to achieve cache attacks with high temporal precision, high spatial precision, and low noise. These tools make it easy to monitor the data flow and code flow of TrustZone code with great resolution, and we apply our techniques to investigate the security of a real-world application. We examine ECDSA signing in Qualcomm's implementation of Android's hardware-backed keystore and identify a series of vulnerabilities that leak sensitive cryptographic information through shared microarchitectural structures. By using the powerful attacks developed in this paper, we are able to successfully extract this sensitive information and fully recover a 256-bit private key from Qualcomm's version of the hardware-backed keystore.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3354197](https://doi.org/10.1145/3319535.3354197)
## Neural Network Inversion in Adversarial Setting via Background Knowledge Alignment.
### Authors
* Ziqi Yang, National University of Singapore, Singapore, Singapore
* Jiyi Zhang, National University of Singapore, Singapore, Singapore
* Ee-Chien Chang, National University of Singapore, Singapore, Singapore
* Zhenkai Liang, National University of Singapore, Singapore, Singapore
### Abstract
> The wide application of deep learning technique has raised new security concerns about the training data and test data. In this work, we investigate the model inversion problem under adversarial settings, where the adversary aims at inferring information about the target model's training data and test data from the model's prediction values. We develop a solution to train a second neural network that acts as the inverse of the target model to perform the inversion. The inversion model can be trained with black-box accesses to the target model. We propose two main techniques towards training the inversion model in the adversarial settings. First, we leverage the adversary's background knowledge to compose an auxiliary set to train the inversion model, which does not require access to the original training data. Second, we design a truncation-based technique to align the inversion model to enable effective inversion of the target model from partial predictions that the adversary obtains on victim user's data. We systematically evaluate our approach in various machine learning tasks and model architectures on multiple image datasets. We also confirm our results on Amazon Rekognition, a commercial prediction API that offers "machine learning as a service". We show that even with partial knowledge about the black-box model's training data, and with only partial prediction values, our inversion approach is still able to perform accurate inversion of the target model, and outperform previous approaches.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3354261](https://doi.org/10.1145/3319535.3354261)
## MemGuard: Defending against Black-Box Membership Inference Attacks via Adversarial Examples.
### Authors
* Jinyuan Jia, Duke University, Durham, NC, USA
* Ahmed Salem, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Michael Backes, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Yang Zhang, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Neil Zhenqiang Gong, Duke University, Durham, NC, USA
### Abstract
> In a membership inference attack, an attacker aims to infer whether a data sample is in a target classifier's training dataset or not. Specifically, given a black-box access to the target classifier, the attacker trains a binary classifier, which takes a data sample's confidence score vector predicted by the target classifier as an input and predicts the data sample to be a member or non-member of the target classifier's training dataset. Membership inference attacks pose severe privacy and security threats to the training dataset. Most existing defenses leverage differential privacy when training the target classifier or regularize the training process of the target classifier. These defenses suffer from two key limitations: 1) they do not have formal utility-loss guarantees of the confidence score vectors, and 2) they achieve suboptimal privacy-utility tradeoffs. In this work, we propose MemGuard,the first defense with formal utility-loss guarantees against black-box membership inference attacks. Instead of tampering the training process of the target classifier, MemGuard adds noise to each confidence score vector predicted by the target classifier. Our key observation is that attacker uses a classifier to predict member or non-member and classifier is vulnerable to adversarial examples.Based on the observation, we propose to add a carefully crafted noise vector to a confidence score vector to turn it into an adversarial example that misleads the attacker's classifier. Specifically, MemGuard works in two phases. In Phase I, MemGuard finds a carefully crafted noise vector that can turn a confidence score vector into an adversarial example, which is likely to mislead the attacker's classifier to make a random guessing at member or non-member. We find such carefully crafted noise vector via a new method that we design to incorporate the unique utility-loss constraints on the noise vector. In Phase II, MemGuard adds the noise vector to the confidence score vector with a certain probability, which is selected to satisfy a given utility-loss budget on the confidence score vector. Our experimental results on three datasets show that MemGuard can effectively defend against membership inference attacks and achieve better privacy-utility tradeoffs than existing defenses. Our work is the first one to show that adversarial examples can be used as defensive mechanisms to defend against membership inference attacks.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3363201](https://doi.org/10.1145/3319535.3363201)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3363201](https://dl.acm.org/doi/pdf/10.1145/3319535.3363201)
## Procedural Noise Adversarial Examples for Black-Box Attacks on Deep Convolutional Networks.
### Authors
* Kenneth T. Co, Imperial College London, London, United Kingdom
* Luis Muñoz-González, Imperial College London, London, United Kingdom
* Sixte de Maupeou, Imperial College London, London, United Kingdom
* Emil C. Lupu, Imperial College London, London, United Kingdom
### Abstract
> Deep Convolutional Networks (DCNs) have been shown to be vulnerable to adversarial examples---perturbed inputs specifically designed to produce intentional errors in the learning algorithms at test time. Existing input-agnostic adversarial perturbations exhibit interesting visual patterns that are currently unexplained. In this paper, we introduce a structured approach for generating Universal Adversarial Perturbations (UAPs) with procedural noise functions. Our approach unveils the systemic vulnerability of popular DCN models like Inception v3 and YOLO v3, with single noise patterns able to fool a model on up to 90% of the dataset. Procedural noise allows us to generate a distribution of UAPs with high universal evasion rates using only a few parameters. Additionally, we propose Bayesian optimization to efficiently learn procedural noise parameters to construct inexpensive untargeted black-box attacks. We demonstrate that it can achieve an average of less than 10 queries per successful attack, a 100-fold improvement on existing methods. We further motivate the use of input-agnostic defences to increase the stability of models to adversarial perturbations. The universality of our attacks suggests that DCN models may be sensitive to aggregations of low-level class-agnostic features. These findings give insight on the nature of some universal adversarial perturbations and how they could be generated in other applications.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3345660](https://doi.org/10.1145/3319535.3345660)
## Efficient Two-Round OT Extension and Silent Non-Interactive Secure Computation.
### Authors
* Elette Boyle, IDC Herzliya, Herzliya, Israel
* Geoffroy Couteau, Karlsruhe Institute of Technology, Karlsruhe, Germany
* Niv Gilboa, Ben Gurion University, Be'er Sheva, Israel
* Yuval Ishai, Technion, Haifa, Israel
* Lisa Kohl, Karlsruhe Institute of Technology, Karlsruhe, Germany
* Peter Rindal, Visa Research, Palo Alto, CA, USA
* Peter Scholl, Aarhus University, Aarhus, Denmark
### Abstract
> We consider the problem of securely generating useful instances of two-party correlations, such as many independent copies of a random oblivious transfer (OT) correlation, using a small amount of communication. This problem is motivated by the goal of secure computation with silent preprocessing, where a low-communication input-independent setup, followed by local ("silent") computation, enables a lightweight "non-cryptographic" online phase once the inputs are known. Recent works of Boyle et al. (CCS 2018, Crypto 2019) achieve this goal with good concrete efficiency for useful kinds of two-party correlations, including OT correlations, under different variants of the Learning Parity with Noise (LPN) assumption, and using a small number of "base'' oblivious transfers. The protocols of Boyle et al. have several limitations. First, they require a large number of communication rounds. Second, they are only secure against semi-honest parties. Finally, their concrete efficiency estimates are not backed by an actual implementation. In this work we address these limitations, making three main contributions: Eliminating interaction. Under the same assumption, we obtain the first concretely efficient 2-round protocols for generating useful correlations, including OT correlations, in the semi-honest security model. This implies the first efficient 2-round OT extension protocol of any kind and, more generally, protocols for non-interactive secure computation (NISC) that are concretely efficient and have the silent preprocessing feature. Malicious security. We provide security against malicious parties without additional interaction and with only a modest overhead; prior to our work, no similar protocols were known with any number of rounds. Implementation. Finally, we implemented, optimized, and benchmarked our 2-round OT extension protocol, demonstrating that it offers a more attractive alternative to the OT extension protocol of Ishai et al. (Crypto 2003) in many realistic settings.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3354255](https://doi.org/10.1145/3319535.3354255)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3354255](https://dl.acm.org/doi/pdf/10.1145/3319535.3354255)
## Efficient Multi-Key Homomorphic Encryption with Packed Ciphertexts with Application to Oblivious Neural Network Inference.
### Authors
* Hao Chen, Microsoft Research, Redmond, WA, USA
* Wei Dai, Microsoft Research, Redmond, WA, USA
* Miran Kim, UT Health Science Center at Houston, Houston, TX, USA
* Yongsoo Song, Microsoft Research, Redmond, WA, USA
### Abstract
> Homomorphic Encryption (HE) is a cryptosystem which supports computation on encrypted data. Ló pez-Alt et al. (STOC 2012) proposed a generalized notion of HE, called Multi-Key Homomorphic Encryption (MKHE), which is capable of performing arithmetic operations on ciphertexts encrypted under different keys. In this paper, we present multi-key variants of two HE schemes with packed ciphertexts. We present new relinearization algorithms which are simpler and faster than previous method by Chen et al. (TCC 2017). We then generalize the bootstrapping techniques for HE to obtain multi-key fully homomorphic encryption schemes. We provide a proof-of-concept implementation of both MKHE schemes using Microsoft SEAL. For example, when the dimension of base ring is 8192, homomorphic multiplication between multi-key BFV (resp. CKKS) ciphertexts associated with four parties followed by a relinearization takes about 116 (resp. 67) milliseconds. Our MKHE schemes have a wide range of applications in secure computation between multiple data providers. As a benchmark, we homomorphically classify an image using a pre-trained neural network model, where input data and model are encrypted under different keys. Our implementation takes about 1.8 seconds to evaluate one convolutional layer followed by two fully connected layers on an encrypted image from the MNIST dataset.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3363207](https://doi.org/10.1145/3319535.3363207)
## Traceback for End-to-End Encrypted Messaging.
### Authors
* Nirvan Tyagi, Cornell University, Ithaca, NY, USA
* Ian Miers, Cornell Tech & University of Maryland, New York City, NY, USA
* Thomas Ristenpart, Cornell Tech, New York City, NY, USA
### Abstract
> Messaging systems are used to spread misinformation and other malicious content, often with dire consequences. End-to-end encryption improves privacy but hinders content-based moderation and, in particular, obfuscates the original source of malicious content. We introduce the idea of message traceback, a new cryptographic approach that enables platforms to simultaneously provide end-to-end encryption while also being able to track down the source of malicious content reported by users. We formalize functionality and security goals for message traceback, and detail two constructions that allow revealing a chain of forwarded messages (path traceback) or the entire forwarding tree (tree traceback). We implement and evaluate prototypes of our traceback schemes to highlight their practicality, and provide a discussion of deployment considerations.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3354243](https://doi.org/10.1145/3319535.3354243)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3354243](https://dl.acm.org/doi/pdf/10.1145/3319535.3354243)
## SICO: Surgical Interception Attacks by Manipulating BGP Communities.
### Authors
* Henry Birge-Lee, Princeton University, Princeton, NJ, USA
* Liang Wang, Princeton University, Princeton, NJ, USA
* Jennifer Rexford, Princeton University, Princeton, NJ, USA
* Prateek Mittal, Princeton University, Princeton, NJ, USA
### Abstract
> The Border Gateway Protocol (BGP) is the primary routing protocol for the Internet backbone, yet it lacks adequate security mechanisms. While simple BGP hijack attacks only involve an adversary hijacking Internet traffic destined to a victim, more complex and challenging interception attacks require that adversary intercept a victim's traffic and forward it on to the victim. If an interception attack is launched incorrectly, the adversary's attack will disrupt its route to the victim making it impossible to forward packets. To overcome these challenges, we introduce SICO attacks (Surgical Interception using COmmunities): a novel method of launching interception attacks that leverages BGP communities to scope an adversary's attack and ensure a route to the victim. We then show how SICO attacks can be targeted to specific source IP addresses for reducing attack costs. Furthermore, we ethically perform SICO attacks on the real Internet backbone to evaluate their feasibility and effectiveness. Results suggest that SICO attacks can achieve interception even when previously proposed attacks would not be feasible and outperforms them by attracting traffic from an additional 16% of Internet hosts (worst case) and 58% of Internet hosts (best case). Finally, we analyze the Internet topology to find that at least 83% of multi-homed ASes are capable of launching these attacks.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3363197](https://doi.org/10.1145/3319535.3363197)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3363197](https://dl.acm.org/doi/pdf/10.1145/3319535.3363197)
## Just the Tip of the Iceberg: Internet-Scale Exploitation of Routers for Cryptojacking.
### Authors
* Hugo L. J. Bijmans, TU Delft, Delft, Netherlands
* Tim M. Booij, TU Delft, Delft, Netherlands
* Christian Doerr, TU Delft, Delft, Netherlands
### Abstract
> The release of an efficient browser-based cryptominer, as introduced by Coinhive in 2017, has quickly spread throughout the web either as a new source of revenue for websites or exploited within the context of hacks and malicious advertisements. Several studies have analyzed the Alexa Top 1M and found 380 - 3,200 (0.038% - 0.32%) to be actively mining, with an estimated $41,000 per month revenue for the top 10 perpetrators. While placing a cryptominer on a popular website supplies considerable returns from its visitors' web browsers, it only generates revenue while a client is visiting the page. Even though large popular websites attract millions of visitors, the relatively low number of exploiting websites limits the total revenue that can be made. In this paper, we report on a new attack vector that drastically overshadows all existing cryptojacking activity discovered to date. Through a firmware vulnerability in MikroTik routers, cyber criminals are able to rewrite outgoing user traffic and embed cryptomining code in every outgoing web connection. Thus, every web page visited by any user behind an infected router would mine to profit the criminals. Based on NetFlows recorded in a Tier 1 network, semiweekly crawls and telescope traffic, we followed their activities over a period of 10 months, and report on the modus operandi and coordinating infrastructure of the perpetrators, which were during this period in control of up to 1.4M routers, approximately 70% of all MikroTik devices deployed worldwide. We observed different levels of sophistication among adversaries, ranging from individual installations to campaigns involving large numbers of routers. Our results show that cryptojacking through MITM attacks is highly lucrative, a factor of 30 more than previous attack vectors.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3354230](https://doi.org/10.1145/3319535.3354230)
## Intriguer: Field-Level Constraint Solving for Hybrid Fuzzing.
### Authors
* Mingi Cho, Yonsei University, Seoul, South Korea
* Seoyoung Kim, Yonsei University, Seoul, South Korea
* Taekyoung Kwon, Yonsei University, Seoul, South Korea
### Abstract
> Hybrid fuzzing, which combines fuzzing and concolic execution, is promising in light of the recent performance improvements in concolic engines. We have observed that there is room for further improvement: symbolic emulation is still slow, unnecessary constraints dominate solving time, resources are overly allocated, and hard-to-trigger bugs are missed. To address these problems, we present a new hybrid fuzzer named Intriguer. The key idea of Intriguer is field-level constraint solving, which optimizes symbolic execution with field-level knowledge. Intriguer performs instruction-level taint analysis and records execution traces without data transfer instructions like mov. Intriguer then reduces the execution traces for tainted instructions that accessed a wide range of input bytes, and infers input fields to build field transition trees. With these optimizations, Intriguer can efficiently perform symbolic emulation for more relevant instructions and invoke a solver for complicated constraints only. Our evaluation results indicate that Intriguer outperforms the state-of-the-art fuzzers: Intriguer found all the bugs in the LAVA-M(5h) benchmark dataset for ground truth performance, and also discovered 43 new security bugs in seven real-world programs. We reported the bugs and received 23 new CVEs.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3354249](https://doi.org/10.1145/3319535.3354249)
## Learning to Fuzz from Symbolic Execution with Application to Smart Contracts.
### Authors
* Jingxuan He, ETH Zurich, Zurich, Switzerland
* Mislav Balunović, ETH Zurich, Zurich, Switzerland
* Nodar Ambroladze, ETH Zurich, Zurich, Switzerland
* Petar Tsankov, ETH Zurich, Zurich, Switzerland
* Martin Vechev, ETH Zurich, Zurich, Switzerland
### Abstract
> Fuzzing and symbolic execution are two complementary techniques for discovering software vulnerabilities. Fuzzing is fast and scalable, but can be ineffective when it fails to randomly select the right inputs. Symbolic execution is thorough but slow and often does not scale to deep program paths with complex path conditions. In this work, we propose to learn an effective and fast fuzzer from symbolic execution, by phrasing the learning task in the framework of imitation learning. During learning, a symbolic execution expert generates a large number of quality inputs improving coverage on thousands of programs. Then, a fuzzing policy, represented with a suitable architecture of neural networks, is trained on the generated dataset. The learned policy can then be used to fuzz new programs. We instantiate our approach to the problem of fuzzing smart contracts, a domain where contracts often implement similar functionality (facilitating learning) and security is of utmost importance. We present an end-to-end system, ILF (for Imitation Learning based Fuzzer), and an extensive evaluation over >18K contracts. Our results show that ILF is effective: (i) it is fast, generating 148 transactions per second, (ii) it outperforms existing fuzzers (e.g., achieving 33% more coverage), and (iii) it detects more vulnerabilities than existing fuzzing and symbolic execution tools for Ethereum.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3363230](https://doi.org/10.1145/3319535.3363230)
## Efficient Publicly Verifiable 2PC over a Blockchain with Applications to Financially-Secure Computations.
### Authors
* Ruiyu Zhu, Indiana University, Bloomington, IN, USA
* Changchang Ding, Indiana University, Bloomington, IN, USA
* Yan Huang, Indiana University, Bloomington, IN, USA
### Abstract
> We present a new efficient two-party secure computation protocol which allows the honest party to catch dishonest behavior (if any) with a publicly-verifiable, non-repudiable proof without sacrificing the honest party's secret. Comparing to the best existing protocol of its kind, ours requires a substantially simpler judge algorithm and is able to process circuit evaluator's input-wires two orders of magnitude faster. Further, we propose an automated, decentralized judge implemented as a blockchain smart-contract. As a killer application of combining our two-party PVC protocol with our decentralized judge, we proposed the concept of financially-secure computation, which can be useful in many practical scenarios where it suffices to consider rational adversaries. We experimentally evaluated our prototype implementation, demonstrated the 2PC protocol is highly efficient and the judge is very affordable to protect users against rational attackers.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3363215](https://doi.org/10.1145/3319535.3363215)
## 5GReasoner: A Property-Directed Security and Privacy Analysis Framework for 5G Cellular Network Protocol.
### Authors
* Syed Rafiul Hussain, Purdue University, West Lafayette, IN, USA
* Mitziu Echeverria, University of Iowa, Iowa City, IA, USA
* Imtiaz Karim, Purdue University, West Lafayette, IN, USA
* Omar Chowdhury, University of Iowa, Iowa City, IA, USA
* Elisa Bertino, Purdue University, West Lafayette, IN, USA
### Abstract
> The paper proposes 5GReasoner, a framework for property-guided formal verification of control-plane protocols spanning across multiple layers of the 5G protocol stack. The underlying analysis carried out by 5GReasoner can be viewed as an instance of the model checking problem with respect to an adversarial environment. Due to an effective use of behavior-specific abstraction in our manually extracted 5G protocol, 5GReasoner's analysis generalizes prior analyses of cellular protocols by reasoning about properties not only regarding packet payload but also multi-layer protocol interactions. We instantiated 5GReasoner with two model checkers and a cryptographic protocol verifier, lazily combining them through the use of abstraction-refinement principle. Our analysis of the extracted 5G protocol model covering 6 key control-layer protocols spanning across two layers of the 5G protocol stack with 5GReasoner has identified 11 design weaknesses resulting in attacks having both security and privacy implications. Our analysis also discovered 5 previous design weaknesses that 5G inherits from 4G, and can be exploited to violate its security and privacy guarantees.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3354263](https://doi.org/10.1145/3319535.3354263)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3354263](https://dl.acm.org/doi/pdf/10.1145/3319535.3354263)
## Verified Verifiers for Verifying Elections.
### Authors
* Thomas Haines, Norwegian University of Science and Technology, Trondheim, Norway
* Rajeev Goré, Australian National University, Canberra, Australia
* Mukesh Tiwari, Australian National University, Canberra, Australia
### Abstract
> The security and trustworthiness of elections is critical to democracy; alas, securing elections is notoriously hard. Powerful cryptographic techniques for verifying the integrity of electronic voting have been developed and are in increasingly common use. The claimed security guarantees of most of these techniques have been formally proved. However, implementing the cryptographic verifiers which utilize these techniques is a technical and error prone process, and often leads to critical errors appearing in the gap between the implementation and the formally verified design. We significantly reduce the gap between theory and practice by using machine checked proofs coupled with code extraction to produce cryptographic verifiers that are themselves formally verified. We demonstrate the feasibility of our technique by producing a formally verified verifier which we use to check the 2018 International Association for Cryptologic Research (IACR) directors election.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3354247](https://doi.org/10.1145/3319535.3354247)
## Differentially Private Nonparametric Hypothesis Testing.
### Authors
* Simon Couch, Reed College, Portland, OR, USA
* Zeki Kazan, Reed College, Portland, OR, USA
* Kaiyan Shi, Reed College, Portland, OR, USA
* Andrew Bray, Reed College, Portland, OR, USA
* Adam Groce, Reed College, Portland, OR, USA
### Abstract
> Hypothesis tests are a crucial statistical tool for data mining and are the workhorse of scientific research in many fields. Here we study differentially private tests of independence between a categorical and a continuous variable. We take as our starting point traditional nonparametric tests, which require no distributional assumption (e.g., normality) about the data distribution. We present private analogues of the Kruskal-Wallis, Mann-Whitney, and Wilcoxon signed-rank tests, as well as the parametric one-sample t-test. These tests use novel test statistics developed specifically for the private setting. We compare our tests to prior work, both on parametric and nonparametric tests. We find that in all cases our new nonparametric tests achieve large improvements in statistical power, even when the assumptions of parametric tests are met.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3339821](https://doi.org/10.1145/3319535.3339821)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3339821](https://dl.acm.org/doi/pdf/10.1145/3319535.3339821)
## Fallout: Leaking Data on Meltdown-resistant CPUs.
### Authors
* Claudio Canella, Graz University of Technology, Graz, Austria
* Daniel Genkin, University of Michigan, Ann Arbor, MI, USA
* Lukas Giner, Graz University of Technology, Graz, Austria
* Daniel Gruss, Graz University of Technology, Graz, Austria
* Moritz Lipp, Graz University of Technology, Graz, Austria
* Marina Minkin, University of Michigan, Ann Arbor, MI, USA
* Daniel Moghimi, Worcester Polytechnic Institute, Worcester, MA, USA
* Frank Piessens, imec-DistriNet, KU Leuven, Leuven, Belgium
* Michael Schwarz, Graz University of Technology, Graz, Austria
* Berk Sunar, Worcester Polytechnic Institute, Worcester, MA, USA
* Jo Van Bulck, imec-DistriNet, KU Leuven, Leuven, Belgium
* Yuval Yarom, University of Adelaide & Data61, Adelaide, Australia
### Abstract
> Meltdown and Spectre enable arbitrary data leakage from memory via various side channels. Short-term software mitigations for Meltdown are only a temporary solution with a significant performance overhead. Due to hardware fixes, these mitigations are disabled on recent processors. In this paper, we show that Meltdown-like attacks are still possible on recent CPUs which are not vulnerable to Meltdown. We identify two behaviors of the store buffer, a microarchitectural resource to reduce the latency for data stores, that enable powerful attacks. The first behavior, Write Transient Forwarding forwards data from stores to subsequent loads even when the load address differs from that of the store. The second, Store-to-Leak exploits the interaction between the TLB and the store buffer to leak metadata on store addresses. Based on these, we develop multiple attacks and demonstrate data leakage, control flow recovery, and attacks on ASLR. Our paper shows that Meltdown-like attacks are still possible, and software fixes with potentially significant performance overheads are still necessary to ensure proper isolation between the kernel and user space.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3363219](https://doi.org/10.1145/3319535.3363219)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3363219](https://dl.acm.org/doi/pdf/10.1145/3319535.3363219)
## Atomic Multi-Channel Updates with Constant Collateral in Bitcoin-Compatible Payment-Channel Networks.
### Authors
* Christoph Egger, Friedrich-Alexander University Erlangen-Nuremberg, Erlangen-Nuremberg, Germany
* Pedro Moreno-Sanchez, TU Wien, Wien, Austria
* Matteo Maffei, TU Wien, Wien, Austria
### Abstract
> Current cryptocurrencies provide a heavily limited transaction throughput that is clearly insufficient to cater their growing adoption. Payment-channel networks (PCNs) have emerged as an interesting solution to the scalability issue and are currently deployed by popular cryptocurrencies such as Bitcoin and Ethereum. While PCNs do increase the transaction throughput by processing payments off-chain and using the blockchain only as a dispute arbitrator, they unfortunately require high collateral (i.e., they lock coins for a non-constant time along the payment path) and are restricted to payments in a path from sender to receiver. These issues have severe consequences in practice. The high collateral enables denial-of-service attacks that hamper the throughput and utility of the PCN. Moreover, the limited functionality hinders the applicability of current PCNs in many important application scenarios. Unfortunately, current proposals do not solve either of these issues, or they require Turing-complete language support, which severely limit their applicability. In this work, we present AMCU, the first protocol for atomic multi-channel updates and reduced collateral that is compatible with Bitcoin (and other cryptocurrencies with reduced scripting capabilities). We provide a formal model in the Universal Composability framework and show that AMCU realizes it, thus demonstrating that AMCU achieves atomicity and value privacy. Moreover, the reduced collateral mitigates the consequences of griefing attacks in PCNs while the (multi-payment) atomicity achieved by AMCU opens the door to new applications such as credit rebalancing and crowdfunding that are not possible otherwise. Moreover, our evaluation results demonstrate that AMCU has a performance in line with that of the Lightning Network (the most widely deployed PCN) and thus is ready to be deployed in practice.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3345666](https://doi.org/10.1145/3319535.3345666)
## Erlay: Efficient Transaction Relay for Bitcoin.
### Authors
* Gleb Naumenko, University of British Columbia, Vancouver, BC, Canada
* Gregory Maxwell, Independent, None, CA, USA
* Pieter Wuille, Blockstream, Mountain View, CA, USA
* Alexandra Fedorova, University of British Columbia, Vancouver, BC, Canada
* Ivan Beschastnikh, University of British Columbia, Vancouver, BC, Canada
### Abstract
> Bitcoin is a top-ranked cryptocurrency that has experienced huge growth and survived numerous attacks. The protocols making up Bitcoin must therefore accommodate the growth of the network and ensure security. Security of the Bitcoin network depends on connectivity between the nodes. Higher connectivity yields better security. In this paper we make two observations: (1) current connectivity in the Bitcoin network is too low for optimal security; (2) at the same time, increasing connectivity will substantially increase the bandwidth used by the transaction dissemination protocol, making it prohibitively expensive to operate a Bitcoin node. Half of the total bandwidth needed to operate a Bitcoin node is currently used to just announce transactions. Unlike block relay, transaction dissemination has received little attention in prior work. We propose a new transaction dissemination protocol, Erlay, that not only reduces the bandwidth consumption by 40% assuming current connectivity, but also keeps the bandwidth use almost constant as the connectivity increases. In contrast, the existing protocol increases the bandwidth consumption linearly with the number of connections. By allowing more connections at a small cost, Erlay improves the security of the Bitcoin network. And, as we demonstrate, Erlay also hardens the network against attacks that attempt to learn the origin node of a transaction. Erlay is currently being investigated by the Bitcoin community for future use with the Bitcoin protocol.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3354237](https://doi.org/10.1145/3319535.3354237)
## Power Adjusting and Bribery Racing: Novel Mining Attacks in the Bitcoin System.
### Authors
* Shang Gao, The Hong Kong Polytechnic University, Hong Kong, Hong Kong
* Zecheng Li, The Hong Kong Polytechnic University, Hong Kong, Hong Kong
* Zhe Peng, The Hong Kong Polytechnic University, Hong Kong, Hong Kong
* Bin Xiao, The Hong Kong Polytechnic University, Hong Kong, Hong Kong
### Abstract
> Mining attacks allow attackers to gain an unfair share of the mining reward by deviating from the honest mining strategy in the Bitcoin system. Among the most well-known are block withholding (BWH), fork after withholding (FAW), and selfish mining. In this paper, we propose two new strategies: power adjusting and bribery racing, and introduce two novel mining attacks, Power Adjusting Withholding (PAW) and Bribery Selfish Mining (BSM) adopting the new strategies. Both attacks can increase the reward of attackers. Furthermore, we show PAW can avoid the "miner's dilemma" in BWH attacks. BSM introduces a new "venal miner's dilemma", which results in all targets (bribes) willing to help the attacker but getting less reward finally. Quantitative analyses and simulations are conducted to verify the effectiveness of our attacks. We propose some countermeasures to mitigate the new attacks, but a practical and efficient solution remains to be an open problem.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3354203](https://doi.org/10.1145/3319535.3354203)
## Practical Fully Secure Three-Party Computation via Sublinear Distributed Zero-Knowledge Proofs.
### Authors
* Elette Boyle, IDC Herzliya, Herzliya, Israel
* Niv Gilboa, Ben-Gurion University, Beer Sheva, Israel
* Yuval Ishai, Technion, Haifa, Israel
* Ariel Nof, Bar-Ilan University, Ramat-Gan, Israel
### Abstract
> Secure multiparty computation enables a set of parties to securely carry out a joint computation on their private inputs without revealing anything but the output. A particularly motivated setting is that of three parties with a single corruption (hereafter denoted 3PC). This 3PC setting is particularly appealing for two main reasons: (1) it admits more efficient MPC protocols than in other standard settings; (2) it allows in principle to achieve full security (and fairness). Highly efficient protocols exist within this setting with security against a semi-honest</> adversary; however, a significant gap remains between these and protocols with stronger security against a malicious</> adversary. In this paper, we narrow this gap within concretely efficient protocols. More explicitly, we have the following contributions: Concretely Efficient Malicious 3PC. We present an optimized 3PC protocol for arithmetic circuits over rings with (amortized) communication of 1 ring element per multiplication gate per party, matching the best semi-honest protocols. The protocol applies also to Boolean circuits, significantly improving over previous protocols even for small circuits. Our protocol builds on recent techniques of Boneh et al. (Crypto 2019) for sublinear zero-knowledge proofs on distributed data, together with an efficient semi-honest protocol based on replicated secret sharing (Araki et al., CCS 2016). We present a concrete analysis of communication and computation costs, including several optimizations. For example, for 40-bit statistical security, and Boolean circuit with a million (nonlinear) gates, the overhead on top of the semi-honest protocol can involve less than 0.5KB of communication for the entire circuit,</> while the computational overhead is dominated by roughly 30 multiplications per gate in the field F247. In addition, we implemented and benchmarked the protocol for varied circuit sizes. Full Security. We augment the 3PC protocol to further provide full security</> (with guaranteed output delivery) while maintaining amortized 1 ring element communication per party per multiplication gate, and with hardly any impact on concrete efficiency. This is contrasted with the best previous 3PC protocols from the literature, which allow a corrupt party to mount a denial-of-service attack without being detected.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3363227](https://doi.org/10.1145/3319535.3363227)
## Post-Collusion Security and Distance Bounding.
### Authors
* Sjouke Mauw, University of Luxembourg & SnT, Esch-sur-Alzette, Luxembourg
* Zach Smith, University of Luxembourg, Esch-sur-Alzette, Luxembourg
* Jorge Toro-Pozo, ETH Zurich, Zurich, Switzerland
* Rolando Trujillo-Rasua, School of Information Technology, Deakin University, Melbourne, Australia
### Abstract
> Verification of cryptographic protocols is traditionally built upon the assumption that participants have not revealed their long-term keys. However, in some cases, participants might collude to defeat some security goals, without revealing their long-term secrets. We develop a model based on multiset rewriting to reason about collusion in security protocols. We introduce the notion of post-collusion security, which verifies security properties claimed in sessions initiated after the collusion occurred. We use post-collusion security to analyse terrorist fraud on protocols for securing physical proximity, known as distance-bounding protocols. In a terrorist fraud attack, agents collude to falsely prove proximity, whilst no further false proximity proof can be issued without further collusion. Our definitions and the Tamarin prover are used to develop a modular framework for verification of distance-bounding protocols that accounts for all types of attack from literature. We perform a survey of over 25 protocols, which include industrial protocols such as Mastercard's contactless payment PayPass and NXP's MIFARE Plus with proximity check. For the industrial protocols we confirm attacks, propose fixes, and deliver computer-verifiable security proofs of the repaired versions.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3345651](https://doi.org/10.1145/3319535.3345651)
## Moving Beyond Set-It-And-Forget-It Privacy Settings on Social Media.
### Authors
* Mainack Mondal, IIT Kharagpur & University of Chicago, Kharagpur, India
* Günce Su Yilmaz, University of Chicago, Chicago, IL, USA
* Noah Hirsch, University of Chicago, Chicago, IL, USA
* Mohammad Taha Khan, University of Illinois at Chicago, Chicago, IL, USA
* Michael Tang, University of Chicago, Chicago, IL, USA
* Christopher Tran, University of Illinois at Chicago, Chicago, IL, USA
* Chris Kanich, University of Illinois at Chicago, Chicago, IL, USA
* Blase Ur, University of Chicago, Chicago, IL, USA
* Elena Zheleva, University of Illinois at Chicago, Chicago, IL, USA
### Abstract
> When users post on social media, they protect their privacy by choosing an access control setting that is rarely revisited. Changes in users' lives and relationships, as well as social media platforms themselves, can cause mismatches between a post's active privacy setting and the desired setting. The importance of managing this setting combined with the high volume of potential friend-post pairs needing evaluation necessitate a semi-automated approach. We attack this problem through a combination of a user study and the development of automated inference of potentially mismatched privacy settings. A total of 78 Facebook users reevaluated the privacy settings for five of their Facebook posts, also indicating whether a selection of friends should be able to access each post. They also explained their decision. With this user data, we designed a classifier to identify posts with currently incorrect sharing settings. This classifier shows a 317% improvement over a baseline classifier based on friend interaction. We also find that many of the most useful features can be collected without user intervention, and we identify directions for improving the classifier's accuracy.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3354202](https://doi.org/10.1145/3319535.3354202)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3354202](https://dl.acm.org/doi/pdf/10.1145/3319535.3354202)
## Binary Control-Flow Trimming.
### Authors
* Masoud Ghaffarinia, University of Texas at Dallas, Richardson, TX, USA
* Kevin W. Hamlen, University of Texas at Dallas, Richardson, TX, USA
### Abstract
> A new method of automatically reducing the attack surfaces of binary software is introduced, affording code consumers the power to remove features that are unwanted or unused in a particular deployment context. The approach targets stripped binary native code with no source-derived metadata or symbols, can remove semantic features irrespective of whether they were intended and/or known to code developers, and anticipates consumers who can demonstrate desired features (e.g., via unit testing), but who may not know the existence of specific unwanted features, and who lack any formal specifications of the code's semantics. Through a combination of runtime tracing, machine learning, in-lined reference monitoring, and contextual control-flow integrity enforcement, it is demonstrated that automated code feature removal is nevertheless feasible under these constraints, even for complex programs such as compilers and servers. The approach additionally accommodates consumers whose demonstration of desired features is incomplete; a tunable entropy-based metric detects coverage lapses and conservatively preserves unexercised but probably desired flows. A prototype implementation for Intel x86-64 exhibits low runtime overhead for trimmed binaries (about 1.87%), and case studies show that consumer-side control-flow trimming can successfully eliminate zero-day vulnerabilities.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3345665](https://doi.org/10.1145/3319535.3345665)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3345665](https://dl.acm.org/doi/pdf/10.1145/3319535.3345665)
## Program-mandering: Quantitative Privilege Separation.
### Authors
* Shen Liu, Pennsylvania State University, University Park, PA, USA
* Dongrui Zeng, Pennsylvania State University, University Park, PA, USA
* Yongzhe Huang, Pennsylvania State University, University Park, PA, USA
* Frank Capobianco, Pennsylvania State University, University Park, PA, USA
* Stephen McCamant, University of Minnesota, Twin Cities, MN, USA
* Trent Jaeger, Pennsylvania State University, University Park, PA, USA
* Gang Tan, Pennsylvania State University, University Park, PA, USA
### Abstract
> Privilege separation is an effective technique to improve software security. However, past partitioning systems do not allow programmers to make quantitative tradeoffs between security and performance. In this paper, we describe our toolchain called PM. It can automatically find the optimal boundary in program partitioning. This is achieved by solving an integer-programming model that optimizes for a user-chosen metric while satisfying the remaining security and performance constraints on other metrics. We choose security metrics to reason about how well computed partitions enforce information flow control to: (1) protect the program from low-integrity inputs or (2) prevent leakage of program secrets. As a result, functions in the sensitive module that fall on the optimal partition boundaries automatically identify where declassification is necessary. We used PM to experiment on a set of real-world programs to protect confidentiality and integrity; results show that, with moderate user guidance, PM can find partitions that have better balance between security and performance than partitions found by a previous tool that requires manual declassification.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3354218](https://doi.org/10.1145/3319535.3354218)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3354218](https://dl.acm.org/doi/pdf/10.1145/3319535.3354218)
## Flexible Byzantine Fault Tolerance.
### Authors
* Dahlia Malkhi, Calibra, Menlo Park, CA, USA
* Kartik Nayak, Duke University, Durham, NC, USA
* Ling Ren, University of Illinois at Urbana-Champaign, Urbana, IL, USA
### Abstract
> This paper introduces Flexible BFT, a new approach for BFT consensus solution design revolving around two pillars, stronger resilience and diversity. The first pillar, stronger resilience, involves a new fault model called alive-but-corrupt faults. Alive-but-corrupt replicas may arbitrarily deviate from the protocol in an attempt to break safety of the protocol. However, if they cannot break safety, they will not try to prevent liveness of the protocol. Combining alive-but-corrupt faults into the model, Flexible BFT is resilient to higher corruption levels than possible in a pure Byzantine fault model. The second pillar, diversity, designs consensus solutions whose protocol transcript is used to draw different commit decisions under diverse beliefs. With this separation, the same Flexible BFT solution supports synchronous and asynchronous beliefs, as well as varying resilience threshold combinations of Byzantine and alive-but-corrupt faults. At a technical level, Flexible BFT achieves the above results using two new ideas. First, it introduces a synchronous BFT protocol in which only the commit step requires to know the network delay bound and thus replicas execute the protocol without any synchrony assumption. Second, it introduces a notion called Flexible Byzantine Quorums by dissecting the roles of different quorums in existing consensus protocols.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3354225](https://doi.org/10.1145/3319535.3354225)
## Distributed Vector-OLE: Improved Constructions and Implementation.
### Authors
* Phillipp Schoppmann, Humboldt-Universität zu Berlin, Berlin, Germany
* Adrià Gascón, Google, London, United Kingdom
* Leonie Reichert, Humboldt-Universität zu Berlin, Berlin, Germany
* Mariana Raykova, Google, New York, NY, USA
### Abstract
> We investigate concretely efficient protocols for distributed oblivious linear evaluation over vectors (Vector-OLE). Boyle et al. (CCS 2018) proposed a protocol for secure distributed pseudorandom Vector-OLE generation using sublinear</>communication, but they did not provide an implementation. Their construction is based on a variant of the LPN assumption and assumes a distributed key generation protocol for single-point Function Secret Sharing (FSS), as well as an efficient batching scheme to obtain multi-point FSS. We show that this requirement can be relaxed, resulting in a weaker variant of FSS, for which we give an efficient protocol. This allows us to use efficient probabilistic batch codes that were also recently used for batched PIR by Angel et al. (S&P 2018). We construct a full Vector-OLE generator from our protocols, and compare it experimentally with alternative approaches. Our implementation parallelizes very well, and has low communication overhead in practice. For generating a VOLE of size $2^20 $, our implementation only takes $0.52$s on 32 cores.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3363228](https://doi.org/10.1145/3319535.3363228)
## Houdini's Escape: Breaking the Resource Rein of Linux Control Groups.
### Authors
* Xing Gao, University of Memphis, Memphis, TN, USA
* Zhongshu Gu, IBM Research, YORKTOWN HEIGHTS, NY, USA
* Zhengfa Li, Independent Researcher, Memphis, TN, USA
* Hani Jamjoom, IBM Research, YORKTOWN HEIGHTS, NY, USA
* Cong Wang, Old Dominion University, Norfolk, VA, USA
### Abstract
> Linux Control Groups, i.e., cgroups, are the key building blocks to enable operating-system-level containerization. The cgroups mechanism partitions processes into hierarchical groups and applies different controllers to manage system resources, including CPU, memory, block I/O, etc. Newly spawned child processes automatically copy cgroups attributes from their parents to enforce resource control. Unfortunately, inherited cgroups confinement via process creation does not always guarantee consistent and fair resource accounting. In this paper, we devise a set of exploiting strategies to generate out-of-band</>workloads via de-associating processes from their original process groups. The system resources consumed by such workloads will not be charged to the appropriate cgroups. To further demonstrate the feasibility, we present five case studies within Docker containers to demonstrate how to break the resource rein of cgroups in realistic scenarios. Even worse, by exploiting those cgroups' insufficiencies in a multi-tenant container environment, an adversarial container is able to greatly amplify the amount of consumed resources, significantly slow-down other containers on the same host, and gain extra unfair advantages on the system resources. We conduct extensive experiments on both a local testbed and an Amazon EC2 cloud dedicated server. The experimental results demonstrate that a container can consume system resources (e.g., CPU) as much as $200\times$ of its limit, and reduce both computing and I/O performance of particular workloads in other co-resident containers by 95%.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3354227](https://doi.org/10.1145/3319535.3354227)
## Insecure Until Proven Updated: Analyzing AMD SEV's Remote Attestation.
### Authors
* Robert Buhren, Technische Universität Berlin, Berlin, Germany
* Christian Werling, Hasso Plattner Institute, Potsdam, Germany
* Jean-Pierre Seifert, Technische Universität Berlin, Berlin, Germany
### Abstract
> Cloud computing is one of the most prominent technologies to host Internet services that unfortunately leads to an increased risk of data theft. Customers of cloud services have to trust the cloud providers, as they control the building blocks that form the cloud. This includes the hypervisor enabling the sharing of a single hardware platform among multiple tenants. Executing in a higher-privileged CPU mode, the hypervisor has direct access to the memory of virtual machines. While data at rest can be protected using well-known disk encryption methods, data residing in main memory is still threatened by a potentially malicious cloud provider. AMD Secure Encrypted Virtualization (SEV) claims a new level of protection in such cloud scenarios. AMD SEV encrypts the main memory of virtual machines with VM-specific keys, thereby denying the higher-privileged hypervisor access to a guest's memory. To enable the cloud customer to verify the correct deployment of his virtual machine, SEV additionally introduces a remote attestation protocol. This protocol is a crucial component of the SEV technology that can prove that SEV protection is in place and that the virtual machine was not subject to manipulation. This paper analyzes the firmware components that implement the SEV remote attestation protocol on the current AMD Epyc Naples CPU series. We demonstrate that it is possible to extract critical</> CPU-specific keys that are fundamental for the security of the remote attestation protocol. Building on the extracted keys, we propose attacks that allow a malicious cloud provider a complete circumvention of the SEV protection mechanisms. Although the underlying firmware issues were already fixed by AMD, we show that the current series of AMD Epyc CPUs, i.e., the Naples series, does not prevent the installation of previous firmware versions. We show that the severity of our proposed attacks is very high as no purely software-based mitigations are possible. This effectively renders the SEV technology on current AMD Epyc CPUs useless when confronted with an untrusted cloud provider. To overcome these issues, we also propose robust changes to the SEV design that allow future generations of the SEV technology to mitigate the proposed attacks.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3354216](https://doi.org/10.1145/3319535.3354216)
## Triplet Fingerprinting: More Practical and Portable Website Fingerprinting with N-shot Learning.
### Authors
* Payap Sirinam, Navaminda Kasatriyadhiraj Royal Air Force Academy, Bangkok, Thailand
* Nate Mathews, Rochester Institute of Technology, Rochester, NY, USA
* Mohammad Saidur Rahman, Rochester Institute of Technology, Rochester, NY, USA
* Matthew Wright, Rochester Institute of Technology, Rochester, NY, USA
### Abstract
> Website Fingerprinting (WF) attacks pose a serious threat to users' online privacy, including for users of the Tor anonymity system. By exploiting recent advances in deep learning, WF attacks like Deep Fingerprinting (DF) have reached up to 98% accuracy. The DF attack, however, requires large amounts of training data that needs to be updated regularly, making it less practical for the weaker attacker model typically assumed in WF. Moreover, research on WF attacks has been criticized for not demonstrating attack effectiveness under more realistic and more challenging scenarios. Most research on WF attacks assumes that the testing and training data have similar distributions and are collected from the same type of network at about the same time. In this paper, we examine how an attacker could leverage N-shot learning---a machine learning technique requiring just a few training samples to identify a given class---to reduce the effort of gathering and training with a large WF dataset as well as mitigate the adverse effects of dealing with different network conditions. In particular, we propose a new WF attack called Triplet Fingerprinting (TF) that uses triplet networks for N-shot learning. We evaluate this attack in challenging settings such as where the training and testing data are collected multiple years apart on different networks, and we find that the TF attack remains effective in such settings with 85% accuracy or better. We also show that the TF attack is also effective in the open world and outperforms traditional transfer learning. On top of that, the attack requires only five examples to recognize a website, making it dangerous in a wide variety of scenarios where gathering and training on a complete dataset would be impractical.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3354217](https://doi.org/10.1145/3319535.3354217)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3354217](https://dl.acm.org/doi/pdf/10.1145/3319535.3354217)
## QUOTIENT: Two-Party Secure Neural Network Training and Prediction.
### Authors
* Nitin Agrawal, University of Oxford, Oxford, United Kingdom
* Ali Shahin Shamsabadi, Queen Mary University of London, London, United Kingdom
* Matt J. Kusner, University of Oxford & The Alan Turing Institute, London, United Kingdom
* Adrià Gascón, University of Warwick & The Alan Turing Institute, London, United Kingdom
### Abstract
> Recently, there has been a wealth of effort devoted to the design of secure protocols for machine learning tasks. Much of this is aimed at enabling secure prediction from highly-accurate Deep Neural Networks (DNNs). However, as DNNs are trained on data, a key question is how such models can be also trained securely. The few prior works on secure DNN training have focused either on designing custom protocols for existing training algorithms, or on developing tailored training algorithms and then applying generic secure protocols. In this work, we investigate the advantages of designing training algorithms alongside a novel secure protocol, incorporating optimizations on both fronts. We present QUOTIENT, a new method for discretized training of DNNs, along with a customized secure two-party protocol for it. QUOTIENT incorporates key components of state-of-the-art DNN training such as layer normalization and adaptive gradient methods, and improves upon the state-of-the-art in DNN training in two-party computation. Compared to prior work, we obtain an improvement of 50X in WAN time and 6% in absolute accuracy.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3339819](https://doi.org/10.1145/3319535.3339819)
## Make Some ROOM for the Zeros: Data Sparsity in Secure Distributed Machine Learning.
### Authors
* Phillipp Schoppmann, Humboldt-Universität zu Berlin, Berlin, Germany
* Adrià Gascón, The Alan Turing Institute / University of Warwick, London, United Kingdom
* Mariana Raykova, Google, New York, NY, USA
* Benny Pinkas, Bar-Ilan University, Ramat Gan, Israel
### Abstract
> Exploiting data sparsity is crucial for the scalability of many data analysis tasks. However, while there is an increasing interest in efficient secure computation protocols for distributed machine learning, data sparsity has so far not been considered in a principled way in that setting. We propose sparse data structures together with their corresponding secure computation protocols to address common data analysis tasks while utilizing data sparsity. In particular, we define a Read-Only Oblivious Map primitive (ROOM) for accessing elements in sparse structures, and present several instantiations of this primitive with different trade-offs. Then, using ROOM as a building block, we propose protocols for basic linear algebra operations such as Gather, Scatter, and multiple variants of sparse matrix multiplication. Our protocols are easily composable by using secret sharing. We leverage this, at the highest level of abstraction, to build secure protocols for non-parametric models (k-nearest neighbors and naive Bayes classification) and parametric models (logistic regression) that enable secure analysis on high-dimensional datasets. The experimental evaluation of our protocol implementations demonstrates a manyfold improvement in the efficiency over state-of-the-art techniques across all applications. Our system is designed and built mirroring the modular architecture in scientific computing and machine learning frameworks, and inspired by the Sparse BLAS standard.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3339816](https://doi.org/10.1145/3319535.3339816)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3339816](https://dl.acm.org/doi/pdf/10.1145/3319535.3339816)
## PIEs: Public Incompressible Encodings for Decentralized Storage.
### Authors
* Ethan Cecchetti, Cornell University, Ithaca, NY, USA
* Ben Fisch, Stanford University, Stanford, CA, USA
* Ian Miers, Cornell Tech, New York, NY, USA
* Ari Juels, Jacobs Institute, Cornell Tech, New York, NY, USA
### Abstract
> We present a new primitive supporting file replication in distributed storage networks (DSNs) called a Public Incompressible Encoding (PIE). PIEs operate in the challenging public DSN setting where files must be encoded and decoded with public randomness-i.e., without encryption-and retention of redundant data must be publicly verifiable. They prevent undetectable data compression, allowing DSNs to use monetary rewards or penalties in incentivizing economically rational servers to properly replicate data. Their definition also precludes critical, demonstrated attacks involving parallelism via ASICs and other custom hardware. Our PIE construction is the first to achieve experimentally validated near-optimal performance-within a factor of 4 of optimal by one metric. It also allows decoding orders of magnitude faster than encoding, unlike other comparable constructions. We achieve this high security and performance using a graph construction called a Dagwood Sandwich Graph (DSaG), built from a novel interleaving of depth-robust graphs and superconcentrators. PIEs' performance makes them appealing for DSNs, such as the proposed Filecoin system and Ethereum data sharding. Conversely, their near-optimality establishes concerning bounds on the practical financial and energy costs of DSNs allowing arbitrary data.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3354231](https://doi.org/10.1145/3319535.3354231)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3354231](https://dl.acm.org/doi/pdf/10.1145/3319535.3354231)
## Peeves: Physical Event Verification in Smart Homes.
### Authors
* Simon Birnbach, University of Oxford, Oxford, United Kingdom
* Simon Eberz, University of Oxford, Oxford, United Kingdom
* Ivan Martinovic, University of Oxford, Oxford, United Kingdom
### Abstract
> With the rising availability of smart devices (e.g., smart thermostats, lights, locks, etc.), they are increasingly combined into "smart homes". A key component of smart homes are event sensors that report physical events (such as doors opening or the light turning on) which can be triggered automatically by the system or manually by the user. However, data from these sensors are not always trustworthy. Both faults in the event sensors and involvement of active attackers can lead to reporting of events that did not physically happen (event spoofing). This is particularly critical, as smart homes can trigger event chains (e.g., turning the radiator off when a window is opened) without involvement of the user. The goal of this paper is to verify physical events using data from an ensemble of sensors (such as accelerometers or air pressure sensors) that are commonly found in smart homes. This approach both protects against event sensor faults and sophisticated attackers. In order to validate our system's performance, we set up a "smart home" in an office environment. We recognize 22 event types using 48 sensors over the course of two weeks. Using data from the physical sensors, we verify the event stream supplied by the event sensors. We consider two threat models: a zero-effort attacker who spoofs events at arbitrary times and an opportunistic attacker who has access to a live stream of sensor data to better time their attack. We achieve perfect classification for 9 out of 22 events and achieve a 0% false alarm rate at a detection rate exceeding 99.9% for 15 events. We also show that even a strong opportunistic attacker is inherently limited to spoofing few select events and that doing so involves lengthy waiting periods.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3354254](https://doi.org/10.1145/3319535.3354254)
## Balance: Dynamic Adjustment of Cryptocurrency Deposits.
### Authors
* Dominik Harz, Imperial College London, London, United Kingdom
* Lewis Gudgeon, Imperial College London, London, United Kingdom
* Arthur Gervais, Imperial College London, London, United Kingdom
* William J. Knottenbelt, Imperial College London, London, United Kingdom
### Abstract
> Financial deposits are fundamental to the security of cryptoeconomic protocols as they serve as insurance against potential misbehaviour of agents. However, protocol designers and their agents face a trade-off when choosing the deposit size. While substantial deposits might increase the protocol security, for example by minimising the impact of adversarial behaviour or risks of currency fluctuations, locked-up capital incurs opportunity costs. Moreover, some protocols require over-collateralization in anticipation of future events and malicious intentions of agents. We present Balance, an application-agnostic system that reduces over-collateralization without compromising protocol security. In Balance, malicious agents receive no additional utility for cheating once their deposits are reduced. At the same time, honest and rational agents increase their utilities for behaving honestly as their opportunity costs for the locked-up deposits are reduced. Balance is a round-based mechanism in which agents need to continuously perform desired actions. Rather than treating agents' incentives and behaviour as ancillary, we explicitly model agents' utility, proving the conditions for incentive compatibility. Balance improves social welfare given a distribution of honest, rational, and malicious agents. Further, we integrate Balance with a cross-chain interoperability protocol, XCLAIM, reducing deposits by 10% while maintaining the same utility for behaving honestly. Our implementation allows any number of agents to be maintained for at most 55,287 gas (~ USD 0.07) to update all agents' scores, and at a cost of 54,948 gas (~ USD 0.07) to update the assignment of all agents to layers.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3354221](https://doi.org/10.1145/3319535.3354221)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3354221](https://dl.acm.org/doi/pdf/10.1145/3319535.3354221)
## TokenScope: Automatically Detecting Inconsistent Behaviors of Cryptocurrency Tokens in Ethereum.
### Authors
* Ting Chen, University of Electronic Science and Technology of China, Chengdu, China
* Yufei Zhang, University of Electronic Science and Technology of China, Chengdu, China
* Zihao Li, University of Electronic Science and Technology of China, Chengdu, China
* Xiapu Luo, The Hong Kong Polytechnic University, Hong Kong, Hong Kong
* Ting Wang, Pennsylvania State University, University Park, PA, USA
* Rong Cao, University of Electronic Science and Technology of China, Chengdu, China
* Xiuzhuo Xiao, University of Electronic Science and Technology of China, Chengdu, China
* Xiaosong Zhang, University of Electronic Science and Technology of China, Chengdu, China
### Abstract
> Motivated by the success of Bitcoin, lots of cryptocurrencies have been created, the majority of which were implemented as smart contracts running on Ethereum and called tokens. To regulate the interaction between these tokens and users as well as third-party tools (e.g., wallets, exchange markets, etc.), several standards have been proposed for the implementation of token contracts. Although existing tokens involve lots of money, little is known whether or not their behaviors are consistent with the standards. Inconsistent behaviors can lead to user confusion and financial loss, because users/third-party tools interact with token contracts by invoking standard interfaces and listening to standard events. In this work, we take the first step to investigate such inconsistent token behaviors with regard to ERC-20, the most popular token standard. We propose a novel approach to automatically detect such inconsistency by contrasting the behaviors derived from three different sources, including the manipulations of core data structures recording the token holders and their shares, the actions indicated by standard interfaces, and the behaviors suggested by standard events. We implement our approach in a new tool named TokenScope and use it to inspect all transactions sent to the deployed tokens. We detected 3,259,001 transactions that trigger inconsistent behaviors, and these behaviors resulted from 7,472 tokens. By manually examining all (2,353) open-source tokens having inconsistent behaviors, we found that the precision of TokenScope is above 99.9%. Moreover, we revealed 11 major reasons behind the inconsistency, e.g., flawed tokens, standard methods missing, lack of standard events, etc. In particular, we discovered 50 unreported flawed tokens.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3345664](https://doi.org/10.1145/3319535.3345664)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3345664](https://dl.acm.org/doi/pdf/10.1145/3319535.3345664)
## Tesseract: Real-Time Cryptocurrency Exchange Using Trusted Hardware.
### Authors
* Iddo Bentov, Cornell Tech, New York, NY, USA
* Yan Ji, Cornell Tech, New York, NY, USA
* Fan Zhang, Cornell Tech, New York, NY, USA
* Lorenz Breidenbach, ETH Zürich & Cornell Tech, Zurich, Swaziland
* Philip Daian, Cornell Tech, New York, NY, USA
* Ari Juels, Cornell Tech, New York, NY, USA
### Abstract
> We propose Tesseract, a secure real-time cryptocurrency exchange service. Existing centralized exchange designs are vulnerable to theft of funds, while decentralized exchanges cannot offer real-time cross-chain trades. All currently deployed exchanges are also vulnerable to frontrunning attacks. Tesseract overcomes these flaws and achieves a best-of-both-worlds design by using a trusted execution environment. The task of committing the recent trade data to independent cryptocurrency systems presents an all-or-nothing fairness problem, to which we present ideal theoretical solutions, as well as practical solutions. Tesseract supports not only real-time cross-chain cryptocurrency trades, but also secure tokenization of assets pegged to cryptocurrencies. For instance, Tesseract-tokenized bitcoins can circulate on the Ethereum blockchain for use in smart contracts. We provide a demo implementation of Tesseract that supports Bitcoin, Ethereum, and similar cryptocurrencies.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3363221](https://doi.org/10.1145/3319535.3363221)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3363221](https://dl.acm.org/doi/pdf/10.1145/3319535.3363221)
## Efficient MPC via Program Analysis: A Framework for Efficient Optimal Mixing.
### Authors
* Muhammad Ishaq, University of Edinburgh, Edinburgh, Scotland Uk
* Ana L. Milanova, Rensselaer Polytechnic Institute, Troy, NY, USA
* Vassilis Zikas, University of Edinburgh, Edinburgh, Scotland Uk
### Abstract
> Multi-party computation (MPC) protocols have been extensively optimized in an effort to bring this technology to practice, which has already started bearing fruits. The choice of which MPC protocol to use depends on the computation we are trying to perform. Protocol mixing is an effective black-box ---with respect to the MPC protocols---approach to optimize performance. Despite, however, considerable progress in the recent years existing works are heuristic and either give no guarantee or require an exponential (brute-force) search to find the optimal assignment, a problem which was conjectured to be NP hard. We provide a theoretically founded approach to optimal (MPC) protocol assignment, i.e., optimal mixing, and prove that under mild and natural assumptions, the problem is tractable both in theory and in practice for computing best two-out-of-three combinations. Concretely, for the case of two protocols, we utilize program analysis techniques---which we tailor to MPC---to define a new integer program, which we term the Optimal Protocol Assignment (in short, OPA) problem whose solution is the optimal (mixed) protocol assignment for these two protocols. Most importantly, we prove that the solution to the linear program corresponding to the relaxation of OPA is integral, and hence is also a solution to OPA. Since linear programming can be efficiently solved, this yields the first efficient protocol mixer. We showcase the quality of our OPA solver by applying it to standard benchmarks from the mixing literature. Our OPA solver can be applied on any two-out-of-three protocol combinations to obtain a best two-out-of-three protocol assignment.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3339818](https://doi.org/10.1145/3319535.3339818)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3339818](https://dl.acm.org/doi/pdf/10.1145/3319535.3339818)
## Two-Thirds Honest-Majority MPC for Malicious Adversaries at Almost the Cost of Semi-Honest.
### Authors
* Jun Furukawa, NEC Israel Research Center, Tel Aviv, Israel
* Yehuda Lindell, Bar-Ilan University & Unbound Tech, Ramat Gan, Israel
### Abstract
> Secure multiparty computation (MPC) enables a set of parties to securely carry out a joint computation of their private inputs without revealing anything but the output. Protocols for semi-honest adversaries guarantee security as long as the corrupted parties run the specified protocol and ensure that nothing is leaked in the transcript. In contrast, protocols for malicious adversaries guarantee security in the presence of arbitrary adversaries who can run any attack strategy. Security for malicious adversaries is typically what is needed in practice (and is always preferred), but comes at a significant cost. In this paper, we present the first protocol for a two-thirds honest majority that achieves security in the presence of malicious adversariesat essentially the exact same cost as the best known protocols for semi-honest adversaries. Our construction is not a general transformation and thus it is possible that better semi-honest protocols will be constructed which do not support our transformation. Nevertheless, for the current state-of-the-art for many parties (based on Shamir sharing), our protocol invokes the best semi-honest multiplication protocol exactly once per multiplication gate (plus some additional local computation that is negligible to the overall cost). Concretely, the best version of our protocol requires each party to send on average of just 2 2/3 elements per multiplication gate (when the number of multiplication gates is at least the number of parties). This is four times faster than the previous-best protocol of Barak et al. (ACM CCS 2018) for small fields, and twice as fast as the previous-best protocol of Chida et al. (CRYPTO 2018) for large fields.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3339811](https://doi.org/10.1145/3319535.3339811)
## Signed Cryptographic Program Verification with Typed CryptoLine.
### Authors
* Yu-Fu Fu, Academia Sinica, Taipei, Taiwan Roc
* Jiaxiang Liu, Shenzhen University, Shenzhen, China
* Xiaomu Shi, Shenzhen University, Shenzhen, China
* Ming-Hsien Tsai, Academia Sinica, Taipei, Taiwan Roc
* Bow-Yaw Wang, Academia Sinica, Taipei, Taiwan Roc
* Bo-Yin Yang, Academia Sinica, Taipei, Taiwan Roc
### Abstract
> We develop an automated formal technique to specify and verify signed computation in cryptographic programs. In addition to new instructions, we introduce a type system to detect type errors in programs. A type inference algorithm is also provided to deduce types and instruction variants in cryptographic programs. In order to verify signed cryptographic C programs, we develop a translator from the GCC intermediate representation to our language. Using our technique, we have verified 82 C functions in cryptography libraries including NaCl, wolfSSL, bitcoin, OpenSSL, and BoringSSL.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3354199](https://doi.org/10.1145/3319535.3354199)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3354199](https://dl.acm.org/doi/pdf/10.1145/3319535.3354199)
## PrivDPI: Privacy-Preserving Encrypted Traffic Inspection with Reusable Obfuscated Rules.
### Authors
* Jianting Ning, Fujian Normal University & National University of Singapore, Fuzhou China & Singapore, Singapore
* Geong Sen Poh, Trustwave & NUS-Singtel Cyber Security Lab, Singapore, Singapore
* Jia-Ch'ng Loh, NUS-Singtel Cyber Security Lab, Singapore, Singapore
* Jason Chia, NUS-Singtel Cyber Security Lab, Singapore, Singapore
* Ee-Chien Chang, National University of Singapore, Singapore, Singapore
### Abstract
> Network middleboxes perform deep packet inspection (DPI) to detect anomalies and suspicious activities in network traffic. However, increasingly these traffic are encrypted and middleboxes can no longer make sense of them. A recent proposal by Sherry et al. (SIGCOMM 2015), named BlindBox, enables the middlebox to perform inspection in a privacy-preserving manner. BlindBox deploys garbled circuit to generate encrypted rules for the purpose of inspecting the encrypted traffic directly. However, the setup latency (which could be 97s on a ruleset of 3,000 as reported) and overhead size incurred by garbled circuit are high. Since communication can only be commenced after the encrypted rules being generated, such delay is intolerable in many real-time applications. In this work, we present PrivDPI, which reduces the setup delay while retaining similar privacy guarantee. Compared to BlindBox, for a ruleset of 3,000, our encrypted rule generation is 288x faster and requires 290,227x smaller overhead for the first session, and is even 1,036x faster and requires 3424,505x smaller overhead over 20 consecutive sessions. The performance gain is based on a new technique for generating encrypted rules as well as the idea of reusing intermediate results generated in previous sessions across subsequent sessions. This is in contrast to Blindbox which performs encrypted rule generation from scratch for every session. Nevertheless, PrivDPI is 6x slower in generating the encrypted traffic tokens, yet in our implementation, the token encryption rate of PrivDPI is more than 17,271 per second which is sufficient for many real-time applications. Moreover, the intermediate values generated in each session can be reused across subsequent sessions for repeated tokens, which could further speedup token encryption. Overall, our experiment shows that PrivDPI is practical and especially suitable for connections with short flows.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3354204](https://doi.org/10.1145/3319535.3354204)
## Updatable Anonymous Credentials and Applications to Incentive Systems.
### Authors
* Johannes Blömer, Paderborn University, Paderborn, Germany
* Jan Bobolz, Paderborn University, Paderborn, Germany
* Denis Diemert, Paderborn University, Paderborn, Germany
* Fabian Eidens, Paderborn University, Paderborn, Germany
### Abstract
> We introduce updatable anonymous credential systems (UACS) and use them to construct a new privacy-preserving incentive system. In a UACS, a user holding a credential certifying some attributes can interact with the corresponding issuer to update his attributes. During this, the issuer knows which update function is run, but does not learn the user's previous attributes. Hence the update process preserves anonymity of the user. One example for a class of update functions are additive updates of integer attributes, where the issuer increments an unknown integer attribute value v by some known value k. This kind of update is motivated by an application of UACS to incentive systems. Users in an incentive system can anonymously accumulate points, e.g. in a shop at checkout, and spend them later, e.g. for a discount. In this paper, we (1) formally define UACS and their security, (2) give a generic construction for UACS supporting arbitrary update functions, and (3) construct a new incentive system using UACS that is efficient while offering offline double-spending protection and partial spending.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3354223](https://doi.org/10.1145/3319535.3354223)
## Hardware-assisted Trusted Execution Environments: Look Back, Look Ahead.
### Authors
* N. Asokan, University of Waterloo, Waterloo, Canada
### Abstract
> Over the last two decades, hardware-based isolated execution environments, commonly known as "trusted execution environments" or TEEs, have become widely deployed [1,2,3,4]. However, concerns about vulnerabilities (like the Foreshadow attacks [5]), and potential for abuse have been persistent and have recently become increasingly pronounced. In this talk, I will discuss the history of (mobile) TEEs [6], what motivated their design and large-scale deployment, and how they have evolved during the last two decades. I will then discuss some of their shortcomings and potential approaches for overcoming them. I will also briefly touch on other types of hardware security primitives that are being rolled out by processor manufacturers and the opportunities they offer for securing computing
### Links
- **URL:** [https://doi.org/10.1145/3319535.3364969](https://doi.org/10.1145/3319535.3364969)
## Gollum: Modular and Greybox Exploit Generation for Heap Overflows in Interpreters.
### Authors
* Sean Heelan, University of Oxford, Oxford, United Kingdom
* Tom Melham, University of Oxford, Oxford, United Kingdom
* Daniel Kroening, University of Oxford, Oxford, United Kingdom
### Abstract
> We present the first approach to automatic exploit generation for heap overflows in interpreters. It is also the first approach to exploit generation in any class of program that integrates a solution for automatic heap layout manipulation. At the core of the approach is a novel method for discovering exploit primitives---inputs to the target program that result in a sensitive operation, such as a function call or a memory write, utilizing attacker-injected data. To produce an exploit primitive from a heap overflow vulnerability, one has to discover a target data structure to corrupt, ensure an instance of that data structure is adjacent to the source of the overflow on the heap, and ensure that the post-overflow corrupted data is used in a manner desired by the attacker. Our system addresses all three tasks in an automatic, greybox, and modular manner. Our implementation is called GOLLUM, and we demonstrate its capabilities by producing exploits from 10 unique vulnerabilities in the PHP and Python interpreters, 5 of which do not have existing public exploits.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3354224](https://doi.org/10.1145/3319535.3354224)
## SLAKE: Facilitating Slab Manipulation for Exploiting Vulnerabilities in the Linux Kernel.
### Authors
* Yueqi Chen, Pennsylvania State University, State College, PA, USA
* Xinyu Xing, Pennsylvania State University, State College, PA, USA
### Abstract
> To determine the exploitability for a kernel vulnerability, a secu- rity analyst usually has to manipulate slab and thus demonstrate the capability of obtaining the control over a program counter or performing privilege escalation. However, this is a lengthy process because (1) an analyst typically has no clue about what objects and system calls are useful for kernel exploitation and (2) he lacks the knowledge of manipulating a slab and obtaining the desired layout. In the past, researchers have proposed various techniques to facilitate exploit development. Unfortunately, none of them can be easily applied to address these challenges. On the one hand, this is because of the complexity of the Linux kernel. On the other hand, this is due to the dynamics and non-deterministic of slab variations. In this work, we tackle the challenges above from two perspectives. First, we use static and dynamic analysis techniques to explore the kernel objects, and the corresponding system calls useful for exploitation. Second, we model commonly-adopted exploitation methods and develop a technical approach to facilitate the slab layout adjustment. By extending LLVM as well as Syzkaller, we implement our techniques and name their combination after SLAKE. We evaluate SLAKE by using 27 real-world kernel vulnerabilities, demonstrating that it could not only diversify the ways to perform kernel exploitation but also sometimes escalate the exploitability of kernel vulnerabilities.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3363212](https://doi.org/10.1145/3319535.3363212)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3363212](https://dl.acm.org/doi/pdf/10.1145/3319535.3363212)
## SecTEE: A Software-based Approach to Secure Enclave Architecture Using TEE.
### Authors
* Shijun Zhao, Institute of Software Chinese Academy of Sciences, Beijing, China
* Qianying Zhang, Capital Normal University, Beijing, China
* Yu Qin, Institute of Software Chinese Academy of Sciences, Beijing, China
* Wei Feng, Institute of Software Chinese Academy of Sciences, Beijing, China
* Dengguo Feng, Institute of Software Chinese Academy of Sciences, Beijing, China
### Abstract
> Secure enclaves provide a practical solution to secure computation, and current approaches to secure enclaves are implemented by extending hardware security mechanisms to the CPU architecture. Therefore, it is hard for a platform to offer secure computation if its CPU architecture is not equipped with any secure enclave features. Unfortunately, ARM CPUs, dominating mobile devices and having increasing momentum in cloud markets, do not provide any security mechanisms achieving the security equivalent to modern secure enclave architectures. In this paper, we propose SecTEE, a software-based secure enclave architecture which is based on the CPU's isolation mechanism and does not require specialized security hardware of the CPU architecture such as memory encryption engines. SecTEE achieves a high level of security even compared with hardware-based secure enclave architectures: resistance to privileged host software attacks, lightweight physical attacks, and memory access based side-channel attacks. Besides, SecTEE provides rich trusted computing primitives for enclaves: integrity measurement, remote attestation, data sealing, secrets provisioning, and life cycle management. We implement a SecTEE prototype based on the ARM TrustZone technology, but our approach can be applied to other CPU architectures with isolation mechanisms. The evaluation results show that most overhead comes from the software encryption and the runtime overhead imposed by trusted computing primitives is acceptable.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3363205](https://doi.org/10.1145/3319535.3363205)
## A Tale of Two Worlds: Assessing the Vulnerability of Enclave Shielding Runtimes.
### Authors
* Jo Van Bulck, KU Leuven, Leuven, Belgium
* David Oswald, University of Birmingham, Birmingham, United Kingdom
* Eduard Marin, University of Birmingham, Birmingham, United Kingdom
* Abdulla Aldoseri, University of Birmingham, Birmingham, United Kingdom
* Flavio D. Garcia, University of Birmingham, Birmingham, United Kingdom
* Frank Piessens, University of Birmingham, Leuven, United Kingdom
### Abstract
> This paper analyzes the vulnerability space arising in Trusted Execution Environments (TEEs) when interfacing a trusted enclave application with untrusted, potentially malicious code. Considerable research and industry effort has gone into developing TEE runtime libraries with the purpose of transparently shielding enclave application code from an adversarial environment. However, our analysis reveals that shielding requirements are generally not well-understood in real-world TEE runtime implementations. We expose several sanitization vulnerabilities at the level of the Application Binary Interface (ABI) and the Application Programming Interface (API) that can lead to exploitable memory safety and side-channel vulnerabilities in the compiled enclave. Mitigation of these vulnerabilities is not as simple as ensuring that pointers are outside enclave memory. In fact, we demonstrate that state-of-the-art mitigation techniques such as Intel's edger8r, Microsoft's "deep copy marshalling", or even memory-safe languages like Rust fail to fully eliminate this attack surface. Our analysis reveals 35 enclave interface sanitization vulnerabilities in 8 major open-source shielding frameworks for Intel SGX, RISC-V, and Sancus TEEs. We practically exploit these vulnerabilities in several attack scenarios to leak secret keys from the enclave or enable remote code reuse. We have responsibly disclosed our findings, leading to 5 designated CVE records and numerous security patches in the vulnerable open-source projects, including the Intel SGX-SDK, Microsoft Open Enclave, Google Asylo, and the Rust compiler.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3363206](https://doi.org/10.1145/3319535.3363206)
## zkay: Specifying and Enforcing Data Privacy in Smart Contracts.
### Authors
* Samuel Steffen, ETH Zurich, Zurich, Switzerland
* Benjamin Bichsel, ETH Zurich, Zurich, Switzerland
* Mario Gersbach, ETH Zurich, Zurich, Switzerland
* Noa Melchior, ETH Zurich, Zurich, Switzerland
* Petar Tsankov, ETH Zurich, Zurich, Switzerland
* Martin Vechev, ETH Zurich, Zurich, Switzerland
### Abstract
> Privacy concerns of smart contracts are a major roadblock preventing their wider adoption. A promising approach to protect private data is hiding it with cryptographic primitives and then enforcing correctness of state updates by Non-Interactive Zero-Knowledge (NIZK) proofs. Unfortunately, NIZK statements are less expressive than smart contracts, forcing developers to keep some functionality in the contract. This results in scattered logic, split across contract code and NIZK statements, with unclear privacy guarantees. To address these problems, we present the zkay language, which introduces privacy types defining owners of private values. zkay contracts are statically type checked to (i) ensure they are realizable using NIZK proofs and (ii) prevent unintended information leaks. Moreover, the logic of zkay contracts is easy to follow by just ignoring privacy types. To enforce zkay contracts, we automatically transform them into contracts equivalent in terms of privacy and functionality, yet executable on public blockchains. We evaluated our approach on a proof-of-concept implementation generating Solidity contracts and implemented 10 interesting example contracts in zkay. Our results indicate that zkay is practical: On-chain cost for executing the transformed contracts is around 1M gas per transaction (~0.50US$) and off-chain cost is moderate.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3363222](https://doi.org/10.1145/3319535.3363222)
## Log2vec: A Heterogeneous Graph Embedding Based Approach for Detecting Cyber Threats within Enterprise.
### Authors
* Fucheng Liu, Institute of Information Engineering, CAS & School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Yu Wen, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Dongxue Zhang, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Xihe Jiang, Institute of Information Engineering, CAS & School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Xinyu Xing, The Pennsylvania State University & JD Security Research Center, University Park, PA, USA
* Dan Meng, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
### Abstract
> Conventional attacks of insider employees and emerging APT are both major threats for the organizational information system. Existing detections mainly concentrate on users' behavior and usually analyze logs recording their operations in an information system. In general, most of these methods consider sequential relationship among log entries and model users' sequential behavior. However, they ignore other relationships, inevitably leading to an unsatisfactory performance on various attack scenarios. We propose log2vec, a heterogeneous graph embedding based modularized method. First, it involves a heuristic approach that converts log entries into a heterogeneous graph in the light of diverse relationships among them. Next, it utilizes an improved graph embedding appropriate to the above heterogeneous graph, which can automatically represent each log entry into a low-dimension vector. The third component of log2vec is a practical detection algorithm capable of separating malicious and benign log entries into different clusters and identifying malicious ones. We implement a prototype of log2vec. Our evaluation demonstrates that log2vec remarkably outperforms state-of-the-art approaches, such as deep learning and hidden markov model (HMM). Besides, log2vec shows its capability to detect malicious events in various attack scenarios.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3363224](https://doi.org/10.1145/3319535.3363224)
## Privacy Aspects and Subliminal Channels in Zcash.
### Authors
* Alex Biryukov, University of Luxembourg, Esch-sur-Alzette, Luxembourg
* Daniel Feher, University of Luxembourg, Esch-sur-Alzette, Luxembourg
* Giuseppe Vitto, University of Luxembourg, Esch-sur-Alzette, Luxembourg
### Abstract
> In this paper we analyze two privacy and security issues for the privacy-oriented cryptocurrency Zcash. First we study shielded transactions and show ways to fingerprint user transactions, including active attacks. We introduce two new attacks which we call Danaan-gift attack and Dust attack. Following the recent Sapling update of Zcash protocol we study the interaction between the new and the old zk-SNARK protocols and the effects of their interaction on transaction privacy. In the second part of the paper we check for the presence of subliminal channels in the zk-SNARK protocol and in Pedersen Commitments. We show presence of efficient 70-bit channels which could be used for tagging of shielded transactions which would allow the attacker (malicious transaction verifier) to link transactions issued by a maliciously modified zk-SNARK prover, while would be indistinguishable from regular transactions for the honest verifier/user. We discuss countermeasures against both of these privacy issues.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3345663](https://doi.org/10.1145/3319535.3345663)
## Effective and Light-Weight Deobfuscation and Semantic-Aware Attack Detection for PowerShell Scripts.
### Authors
* Zhenyuan Li, Zhejiang University, Hangzhou, China
* Qi Alfred Chen, University of California, Irvine, Irvine, CA, USA
* Chunlin Xiong, Zhejiang University, Hangzhou, China
* Yan Chen, Northwestern University, Evanston, IL, USA
* Tiantian Zhu, Zhejiang University of Technology, Hangzhou, China
* Hai Yang, MagicShield Inc, Hangzhou, China
### Abstract
> In recent years, PowerShell is increasingly reported to appear in a variety of cyber attacks ranging from advanced persistent threat, ransomware, phishing emails, cryptojacking, financial threats, to fileless attacks. However, since the PowerShell language is dynamic by design and can construct script pieces at different levels, state-of-the-art static analysis based PowerShell attack detection approaches are inherently vulnerable to obfuscations. To overcome this challenge, in this paper we design the first effective and light-weight deobfuscation approach for PowerShell scripts. To address the challenge in precisely identifying the recoverable script pieces, we design a novel subtree-based deobfuscation method that performs obfuscation detection and emulation-based recovery at the level of subtrees in the abstract syntax tree of PowerShell scripts. Building upon the new deobfuscation method, we are able to further design the first semantic-aware PowerShell attack detection system. To enable semantic-based detection, we leverage the classic objective-oriented association mining algorithm and newly identify 31 semantic signatures for PowerShell attacks. We perform an evaluation on a collection of 2342 benign samples and 4141 malicious samples, and find that our deobfuscation method takes less than 0.5 seconds on average and meanwhile increases the similarity between the obfuscated and original scripts from only 0.5% to around 80%, which is thus both effective and light-weight. In addition, with our deobfuscation applied, the attack detection rates for Windows Defender and VirusTotal increase substantially from 0.3% and 2.65% to 75.0% and 90.0%, respectively. Furthermore, when our deobfuscation is applied, our semantic-aware attack detection system outperforms both Windows Defender and VirusTotal with a 92.3% true positive rate and a 0% false positive rate on average.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3363187](https://doi.org/10.1145/3319535.3363187)
## MalMax: Multi-Aspect Execution for Automated Dynamic Web Server Malware Analysis.
### Authors
* Abbas Naderi-Afooshteh, University of Virginia, Charlottesville, VA, USA
* Yonghwi Kwon, University of Virginia, Charlottesville, VA, USA
* Anh Nguyen-Tuong, University of Virginia, Charlottesville, VA, USA
* Ali Razmjoo-Qalaei, ZDResearch, Charlottesville, VA, USA
* Mohammad-Reza Zamiri-Gourabi, ZDResearch, Charlottesville, VA, USA
* Jack W. Davidson, University of Virginia, Charlottesville, VA, USA
### Abstract
> This paper presents MalMax, a novel system to detect server-side malware that routinely employ sophisticated polymorphic evasive runtime code generation techniques. When MalMax encounters an execution point that presents multiple possible execution paths (e.g., via predicates and/or dynamic code), it explores these paths through counterfactual execution of code sandboxed within an isolated execution environment. Furthermore, a unique feature of MalMax is its cooperative isolated execution model in which unresolved artifacts (e.g., variables, functions, and classes) within one execution context can be concretized using values from other execution contexts. Such cooperation dramatically amplifies the reach of counterfactual execution. As an example, for Wordpress, cooperation results in 63% additional code coverage. The combination of counterfactual execution and cooperative isolated execution enables MalMax to accurately and effectively identify malicious behavior. Using a large (1 terabyte) real-world dataset of PHP web applications collected from a commercial web hosting company, we performed an extensive evaluation of MalMax. We evaluated the effectiveness of MalMax by comparing its ability to detect malware against VirusTotal, a malware detector that aggregates many diverse scanners. Our evaluation results show that MalMax is highly effective in exposing malicious behavior in complicated polymorphic malware. MalMax was also able to identify 1,485 malware samples that are not detected by any existing state-of-the-art tool, even after 7 months in the wild.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3363199](https://doi.org/10.1145/3319535.3363199)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3363199](https://dl.acm.org/doi/pdf/10.1145/3319535.3363199)
## Where Does It Go?: Refining Indirect-Call Targets with Multi-Layer Type Analysis.
### Authors
* Kangjie Lu, University of Minnesota, Twin Cities, Minneapolis, MN, USA
* Hong Hu, Georgia Institute of Technology, Atlanta, GA, USA
### Abstract
> System software commonly uses indirect calls to realize dynamic program behaviors. However, indirect-calls also bring challenges to constructing a precise control-flow graph that is a standard pre-requisite for many static program-analysis and system-hardening techniques. Unfortunately, identifying indirect-call targets is a hard problem. In particular, modern compilers do not recognize indirect-call targets by default. Existing approaches identify indirect-call targets based on type analysis that matches the types of function pointers and the ones of address-taken functions. Such approaches, however, suffer from a high false-positive rate as many irrelevant functions may share the same types. In this paper, we propose a new approach, namely Multi-Layer Type Analysis (MLTA), to effectively refine indirect-call targets for C/C++ programs. MLTA relies on an observation that function pointers are commonly stored into objects whose types have a multi-layer type hierarchy; before indirect calls, function pointers will be loaded from objects with the same type hierarchy "layer by layer". By matching the multi-layer types of function pointers and functions, MLTA can dramatically refine indirect-call targets. MLTA is effective because multi-layer types are more restrictive than single-layer types. It does not introduce false negatives by conservatively tracking targets propagation between multi-layer types, and the layered design allows MLTA to safely fall back whenever the analysis for a layer becomes infeasible. We have implemented MLTA in a system, namely TypeDive, based on LLVM and extensively evaluated it with the Linux kernel, the FreeBSD kernel, and the Firefox browser. Evaluation results show that TypeDive can eliminate 86% to 98% more indirect-call targets than existing approaches do, without introducing new false negatives. We also demonstrate that TypeDive not only improves the scalability of static analysis but also benefits semantic-bug detection. With TypeDive, we have found 35 new deep semantic bugs in the Linux kernel.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3354244](https://doi.org/10.1145/3319535.3354244)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3354244](https://dl.acm.org/doi/pdf/10.1145/3319535.3354244)
## Succinct Arguments for Bilinear Group Arithmetic: Practical Structure-Preserving Cryptography.
### Authors
* Russell W. F. Lai, Friedrich-Alexander University Erlangen-Nuremberg, Erlangen, Germany
* Giulio Malavolta, Carnegie Mellon University, Pittsburgh, PA, USA
* Viktoria Ronge, Friedrich-Alexander University Erlangen-Nuremberg, Erlangen, Germany
### Abstract
> In their celebrated work, Groth and Sahai [EUROCRYPT'08, SICOMP' 12] constructed non-interactive zero-knowledge (NIZK) proofs for general bilinear group arithmetic relations, which spawned the entire subfield of structure-preserving cryptography. This branch of the theory of cryptography focuses on modular design of advanced cryptographic primitives. Although the proof systems of Groth and Sahai are a powerful toolkit, their efficiency hits a barrier when the size of the witness is large, as the proof size is linear in that of the witness. In this work, we revisit the problem of proving knowledge of general bilinear group arithmetic relations in zero-knowledge. Specifically, we construct a succinct zero-knowledge argument for such relations, where the communication complexity is logarithmic in the integer and source group components of the witness. Our argument has public-coin setup and verifier and can therefore be turned non-interactive using the Fiat-Shamir transformation in the random oracle model. For the special case of non-bilinear group arithmetic relations with only integer unknowns, our system can be instantiated in non-bilinear groups. In many applications, our argument system can serve as a drop-in replacement of Groth-Sahai proofs, turning existing advanced primitives in the vast literature of structure-preserving cryptography into practically efficient systems with short proofs.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3354262](https://doi.org/10.1145/3319535.3354262)
## LegoSNARK: Modular Design and Composition of Succinct Zero-Knowledge Proofs.
### Authors
* Matteo Campanelli, IMDEA Software Institute, Madrid, Spain
* Dario Fiore, IMDEA Software Institute, Madrid, Spain
* Anaïs Querol, IMDEA Software Institute & Universidad Politécnica de Madrid, Madrid, Spain
### Abstract
> We study the problem of building non-interactive proof systems modularly by linking small specialized "gadget" SNARKs in a lightweight manner. Our motivation is both theoretical and practical. On the theoretical side, modular SNARK designs would be flexible and reusable. Also, previous works (e.g., Geppetto) consider They have been successfully employed in previous works.(cite prev papers ). These approaches, however, tend to be ad-hoc and to reinventing the wheel. We propose to fill this gap. In practice, specialized SNARKs have the potential to be more efficient than general-purpose schemes, on which most existing works have focused. If a computation naturally presents different "components" (e.g. one arithmetic circuit and one boolean circuit), a general-purpose scheme would homogenize them to a single representation with a subsequent cost in performance. Through a modular approach one could instead exploit the nuances of a computation and choose the best gadget for each component. Our contribution is LegoSNARK, a "toolbox" (or framework) for commit-and-prove zkSNARKs (CP-SNARKs) that includes: 1) General composition tools: build new CP-SNARKs from proof gadgets for basic relationssimply. Formalize notion of cc-SNARK. 2) A "lifting" tool: a compiler to add commit-and-prove capabilities to a broad class of existing zkSNARKsefficiently. This makes them interoperable (linkable) within the same computation. For example, one QAP-based scheme can be used prove one component; another GKR-based scheme can be used to prove another. 3) A collection of succinct proof gadgets for a variety of relations. Additionally, through our framework and gadgets, we are able to obtain new succinct proof systems. Notably: -- LegoGro16, a commit-and-prove version of Groth16 zkSNARK, that operates over data committed with a classical Pedersen vector commitment, and that achieves a 5000× speedup in proving time. -- LegoUAC, a pairing-based SNARK for arithmetic circuits that has a universal, circuit-independent, CRS, and proving time linear in the number of circuit gates (vs. the recent scheme of Groth et al. (CRYPTO'18) with quadratic CRS and quasilinear proving time). -- LegoMM, a CP-SNARK for matrix multiplication that achieves optimal proving complexity.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3339820](https://doi.org/10.1145/3319535.3339820)
## Efficient Zero-Knowledge Arguments in the Discrete Log Setting, Revisited.
### Authors
* Max Hoffmann, Ruhr-University Bochum, Bochum, Germany
* Michael Klooß, Karlsruhe Institute of Technology, Karlsruhe, Germany
* Andy Rupp, Karlsruhe Institute of Technology, Karlsruhe, Germany
### Abstract
> Zero-knowledge arguments have become practical, and widely used, especially in the world of Blockchain, for example in Zcash. This work revisits zero-knowledge proofs in the discrete logarithm setting. First, we identify and carve out basic techniques (partly being used implicitly before) to optimise proofs in this setting. In particular, the linear combination of protocols is a useful tool to obtain zero-knowledge and/or reduce communication. With these techniques, we are able to devise zero-knowledge variants of the logarithmic communication arguments by Bootle et al. (EUROCRYPT '16) and Bünz et al. (S&P '18) thereby introducing almost no overhead. We then construct a conceptually simple commit-and-prove argument for satisfiability of a set of quadratic equations. Unlike previous work, we are not restricted to rank 1 constraint systems (R1CS). This is, to the best of our knowledge, the first work demonstrating that general quadratic constraints, not just R1CS, are a natural relation in the dlog (or ideal linear commitment) setting. This enables new possibilities for optimisation, as, eg., any degree n2 polynomial f(X) can now be "evaluated" with at most 2n quadratic constraints. Our protocols are modular. We easily construct an efficient, logarithmic size shuffle proof, which can be used in electronic voting. Additionally, we take a closer look at quantitative security measures, eg. the efficiency of an extractor. We formalise short-circuit extraction, which allows us to give tighter bounds on the efficiency of an extractor.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3354251](https://doi.org/10.1145/3319535.3354251)
## Sonic: Zero-Knowledge SNARKs from Linear-Size Universal and Updatable Structured Reference Strings.
### Authors
* Mary Maller, University College London, London, United Kingdom
* Sean Bowe, Electric Coin Company, Denver, CO, USA
* Markulf Kohlweiss, University of Edinburgh & IOHK, Edinburgh, United Kingdom
* Sarah Meiklejohn, University College London, London, United Kingdom
### Abstract
> Ever since their introduction, zero-knowledge proofs have become an important tool for addressing privacy and scalability concerns in a variety of applications. In many systems each client downloads and verifies every new proof, and so proofs must be small and cheap to verify. The most practical schemes require either a trusted setup, as in (pre-processing) zk-SNARKs, or verification complexity that scales linearly with the complexity of the relation, as in Bulletproofs. The structured reference strings required by most zk-SNARK schemes can be constructed with multi-party computation protocols, but the resulting parameters are specific to an individual relation. Groth et al. discovered a zk-SNARK protocol with a universal structured reference string that is also updatable, but the string scales quadratically in the size of the supported relations. Here we describe a zero-knowledge SNARK, Sonic, which supports a universal and continually updatable structured reference string that scales linearly in size. We also describe a generally useful technique in which untrusted "helpers" can compute advice that allows batches of proofs to be verified more efficiently. Sonic proofs are constant size, and in the "helped" batch verification context the marginal cost of verification is comparable with the most efficient SNARKs in the literature.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3339817](https://doi.org/10.1145/3319535.3339817)
## The SPHINCS+ Signature Framework.
### Authors
* Daniel J. Bernstein, University of Illinois at Chicago & Ruhr University Bochum, Chicago, IL, USA
* Andreas Hülsing, Eindhoven University of Technology, Eindhoven, Netherlands
* Stefan Kölbl, Cybercrypt, Copenhagen, Denmark
* Ruben Niederhagen, Fraunhofer SIT, Darmstadt, Darmstadt, Germany
* Joost Rijneveld, Radboud University, Nijmegen, Netherlands
* Peter Schwabe, Radboud University, Nijmegen, Netherlands
### Abstract
> We introduce SPHINCS+, a stateless hash-based signature framework. SPHINCS+ has significant advantages over the state of the art in terms of speed, signature size, and security, and is among the nine remaining signature schemes in the second round of the NIST PQC standardization project. One of our main contributions in this context is a new few-time signature scheme that we call FORS. Our second main contribution is the introduction of tweakable hash functions and a demonstration how they allow for a unified security analysis of hash-based signature schemes. We give a security reduction for SPHINCS+ using this abstraction and derive secure parameters in accordance with the resulting bound. Finally, we present speed results for our optimized implementation of SPHINCS+ and compare to SPHINCS-256, Gravity-SPHINCS, and Picnic.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3363229](https://doi.org/10.1145/3319535.3363229)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3363229](https://dl.acm.org/doi/pdf/10.1145/3319535.3363229)
## Membership Privacy for Fully Dynamic Group Signatures.
### Authors
* Michael Backes, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Lucjan Hanzlik, CISPA Helmholtz Center for Information Security & Stanford University, Saarbrücken, Germany
* Jonas Schneider-Bensch, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### Abstract
> Group signatures present a compromise between the traditional goals of digital signatures and the need for signer privacy, allowing for the creation of unforgeable signatures in the name of a group which reveal nothing about the actual signer's identity beyond their group membership. An important consideration that is absent in prevalent models is that group membership itself may be sensitive information, especially if group membership is dynamic, i.e. membership status may change over time. We address this issue by introducing formal notions of membership privacy for fully dynamic group signature schemes, which can be easily integrated into the most expressive models of group signature security to date. We then propose a generic construction for a fully dynamic group signature scheme with membership privacy that is based on signatures with flexible public key (SFPK) and signatures on equivalence classes (SPSEQ). Finally, we devise novel techniques for SFPK to construct a highly efficient standard model scheme (i.e. without random oracles) that provides shorter signatures than even the non-private state-of-the-art from standard assumptions. This shows that, although the strictly stronger security notions we introduce have been completely unexplored in the study of fully dynamic group signatures so far, they do not come at an additional cost in practice.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3354257](https://doi.org/10.1145/3319535.3354257)
## Geneva: Evolving Censorship Evasion Strategies.
### Authors
* Kevin Bock, University of Maryland, College Park, MD, USA
* George Hughey, University of Maryland, College Park, MD, USA
* Xiao Qiang, University of California, Berkeley, Berkeley, CA, USA
* Dave Levin, University of Maryland, College Park, MD, USA
### Abstract
> Researchers and censoring regimes have long engaged in a cat-and-mouse game, leading to increasingly sophisticated Internet-scale censorship techniques and methods to evade them. In this paper, we take a drastic departure from the previously manual evade-detect cycle by developing techniques to automate the discovery of censorship evasion strategies. We present Geneva, a novel genetic algorithm that evolves packet-manipulation-based censorship evasion strategies against nation-state level censors. Geneva composes, mutates, and evolves sophisticated strategies out of four basic packet manipulation primitives (drop, tamper headers, duplicate, and fragment). With experiments performed both in-lab and against several real censors (in China, India, and Kazakhstan), we demonstrate that Geneva is able to quickly and independently re-derive most strategies from prior work, and derive novel subspecies and altogether new species of packet manipulation strategies. Moreover, Geneva discovers successful strategies that prior work posited were not effective, and evolves extinct strategies into newly working variants. We analyze the novel strategies Geneva creates to infer previously unknown behavior in censors. Geneva is a first step towards automating censorship evasion; to this end, we have made our code and data publicly available.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3363189](https://doi.org/10.1145/3319535.3363189)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3363189](https://dl.acm.org/doi/pdf/10.1145/3319535.3363189)
## Conjure: Summoning Proxies from Unused Address Space.
### Authors
* Sergey Frolov, University of Colorado Boulder, Boulder, CO, USA
* Jack Wampler, University of Colorado Boulder, Boulder, CO, USA
* Sze Chuen Tan, University of Illinois at Urbana-Champaign, Urbana-Champaign, IL, USA
* J. Alex Halderman, University of Michigan, Ann Arbor, MI, USA
* Nikita Borisov, University of Illinois at Urbana-Champaign, Urbana-Champaign, IL, USA
* Eric Wustrow, University of Colorado Boulder, Boulder, CO, USA
### Abstract
> Refraction Networking (formerly known as "Decoy Routing") has emerged as a promising next-generation approach for circumventing Internet censorship. Rather than trying to hide individual circumvention proxy servers from censors, proxy functionality is implemented in the core of the network, at cooperating ISPs in friendly countries. Any connection that traverses these ISPs could be a conduit for the free flow of information, so censors cannot easily block access without also blocking many legitimate sites. While one Refraction scheme, TapDance, has recently been deployed at ISP-scale, it suffers from several problems: a limited number of "decoy" sites in realistic deployments, high technical complexity, and undesirable tradeoffs between performance and observability by the censor. These challenges may impede broader deployment and ultimately allow censors to block such techniques. We present Conjure, an improved Refraction Networking approach that overcomes these limitations by leveraging unused address space at deploying ISPs. Instead of using real websites as the decoy destinations for proxy connections, our scheme connects to IP addresses where no web server exists leveraging proxy functionality from the core of the network. These phantom hosts are difficult for a censor to distinguish from real ones, but can be used by clients as proxies. We define the Conjure protocol, analyze its security, and evaluate a prototype using an ISP testbed. Our results suggest that Conjure can be harder to block than TapDance, is simpler to maintain and deploy, and offers substantially better network performance.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3363218](https://doi.org/10.1145/3319535.3363218)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3363218](https://dl.acm.org/doi/pdf/10.1145/3319535.3363218)
## You Shall Not Join: A Measurement Study of Cryptocurrency Peer-to-Peer Bootstrapping Techniques.
### Authors
* Angelique Faye Loe, Royal Holloway, University of London, London, United Kingdom
* Elizabeth Anne Quaglia, Royal Holloway, University of London, London, United Kingdom
### Abstract
> Cryptocurrencies are digital assets which depend upon the use of distributed peer-to-peer networks. The method a new peer uses to initially join a peer-to-peer network is known as bootstrapping. The ability to bootstrap without the use of a centralized resource is an unresolved challenge. In this paper we survey the bootstrapping techniques used by 74 cryptocurrencies and find that censorship-prone methods such as DNS seeding and IP hard-coding are the most prevalent. In response to this finding, we test two other bootstrapping techniques less susceptible to censorship, Tor and ZMap, to determine if they are operationally feasible alternatives more resilient to censorship. We perform a global measurement study of DNS query responses for each the 92 DNS seeds discovered across 42 countries using the distributed RIPE Atlas network. This provides details of each cryptocurrencies' peer-to-peer network topology and also highlights instances of DNS outages and query manipulation impacting the bootstrapping process. Our study also reveals that the source code of the cryptocurrencies researched comes from only five main repositories; hence accounting for the inheritance of legacy bootstrapping methods. Finally, we discuss the implications of our findings and provide recommendations to mitigate the risks exposed.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3345649](https://doi.org/10.1145/3319535.3345649)
## SAMPL: Scalable Auditability of Monitoring Processes using Public Ledgers.
### Authors
* Gaurav Panwar, New Mexico State University, Las Cruces, NM, USA
* Roopa Vishwanathan, New Mexico State University, Las Cruces, NM, USA
* Satyajayant Misra, New Mexico State University, Las Cruces, NM, USA
* Austin Bos, New Mexico State University, Las Cruces, NM, USA
### Abstract
> Organized surveillance, especially by governments poses a major challenge to individual privacy, due to the resources governments have at their disposal, and the possibility of overreach. Given the impact of invasive monitoring, in most democratic countries, government surveillance is, in theory, monitored and subject to public oversight to guard against violations. In practice, there is a difficult fine balance between safeguarding individual's privacy rights and not diluting the efficacy of national security investigations, as exemplified by reports on government surveillance programs that have caused public controversy, and have been challenged by civil and privacy rights organizations. Surveillance is generally conducted through a mechanism where federal agencies obtain a warrant from a federal or state judge (e.g., the US FISA court, Supreme Court in Canada) to subpoena a company or service-provider (e.g., Google, Microsoft) for their customers' data. The courts provide annual statistics on the requests (accepted, rejected), while the companies provide annual transparency reports for public auditing. However, in practice, the statistical information provided by the courts and companies is at a very high level, generic, is released after-the-fact, and is inadequate for auditing the operations. Often this is attributed to the lack of scalable mechanisms for reporting and transparent auditing. In this paper, we present SAMPL, a novel auditing framework which leverages cryptographic mechanisms, such as zero knowledge proofs, Pedersen commitments, Merkle trees, and public ledgers to create a scalable mechanism for auditing electronic surveillance processes involving multiple actors. SAMPL is the first framework that can identify the actors (e.g., agencies and companies) that violate the purview of the court orders. We experimentally demonstrate the scalability for SAMPL for handling concurrent monitoring processes without undermining their secrecy and auditability.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3354219](https://doi.org/10.1145/3319535.3354219)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3354219](https://dl.acm.org/doi/pdf/10.1145/3319535.3354219)
## LibreCAN: Automated CAN Message Translator.
### Authors
* Mert D. Pesé, University of Michigan, Ann Arbor, MI, USA
* Troy Stacer, University of Michigan, Ann Arbor, MI, USA
* C. Andrés Campos, University of Michigan, Ann Arbor, MI, USA
* Eric Newberry, University of Michigan, Ann Arbor, MI, USA
* Dongyao Chen, University of Michigan, Ann Arbor, MI, USA
* Kang G. Shin, University of Michigan, Ann Arbor, MI, USA
### Abstract
> Modern Connected and Autonomous Vehicles (CAVs) are equipped with an increasing number of Electronic Control Units (ECUs), many of which produce large amounts of data. Data is exchanged between ECUs via an in-vehicle network, with the Controller Area Network (CAN) bus being the de facto standard in contemporary vehicles. Furthermore, CAVs have not only physical interfaces but also increased data connectivity to the Internet via their Telematic Control Units (TCUs), enabling remote access via mobile devices. It is also possible to tap into, and read/write data from/to the CAN bus, as data transmitted on the CAN bus is not encrypted. This naturally generates concerns about automotive cybersecurity. One commonality among most vehicular security attacks reported to date is that they ultimately require write access to the CAN bus. In order to cause targeted and intentional changes in vehicle behavior, malicious CAN injection attacks require knowledge of the CAN message format. However, since this format is proprietary to OEMs and can differ even among different models of a single make of vehicle, one must manually reverse-engineer the CAN message format of each vehicle they target --- a time-consuming and tedious process that does not scale. To mitigate this difficulty, we develop LibreCAN, which can translate most CAN messages with minimal effort. Our extensive evaluation on multiple vehicles demonstrates LibreCAN's efficiency in terms of accuracy, coverage, required manual effort and scalability to any vehicle.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3363190](https://doi.org/10.1145/3319535.3363190)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3363190](https://dl.acm.org/doi/pdf/10.1145/3319535.3363190)
## Trick or Heat?: Manipulating Critical Temperature-Based Control Systems Using Rectification Attacks.
### Authors
* Yazhou Tu, University of Louisiana at Lafayette, Lafayette, LA, USA
* Sara Rampazzi, University of Michigan, Ann Arbor, MI, USA
* Bin Hao, University of Louisiana at Lafayette, Lafayette, LA, USA
* Angel Rodriguez, University of Michigan, Ann Arbor, MI, USA
* Kevin Fu, University of Michigan, Ann Arbor, MI, USA
* Xiali Hei, University of Louisiana at Lafayette, Lafayette, LA, USA
### Abstract
> Temperature sensing and control systems are widely used in the closed-loop control of critical processes such as maintaining the thermal stability of patients, or in alarm systems for detecting temperature-related hazards. However, the security of these systems has yet to be completely explored, leaving potential attack surfaces that can be exploited to take control over critical systems. In this paper we investigate the reliability of temperature-based control systems from a security and safety perspective. We show how unexpected consequences and safety risks can be induced by physical-level attacks on analog temperature sensing components. For instance, we demonstrate that an adversary could remotely manipulate the temperature sensor measurements of an infant incubator to cause potential safety issues, without tampering with the victim system or triggering automatic temperature alarms. This attack exploits the unintended rectification effect that can be induced in operational and instrumentation amplifiers to control the sensor output, tricking the internal control loop of the victim system to heat up or cool down. Furthermore, we show how the exploit of this hardware-level vulnerability could affect different classes of analog sensors that share similar signal conditioning processes. Our experimental results indicate that conventional defenses commonly deployed in these systems are not sufficient to mitigate the threat, so we propose a prototype design of a low-cost anomaly detector for critical applications to ensure the integrity of temperature sensor signals.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3354195](https://doi.org/10.1145/3319535.3354195)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3354195](https://dl.acm.org/doi/pdf/10.1145/3319535.3354195)
## OPERA: Open Remote Attestation for Intel's Secure Enclaves.
### Authors
* Guoxing Chen, Ohio State University, Columbus, OH, USA
* Yinqian Zhang, Ohio State University, Columbus, OH, USA
* Ten-Hwang Lai, Ohio State University, Columbus, OH, USA
### Abstract
> Intel Software Guard Extensions (SGX) remote attestation enables enclaves to authenticate hardware inside which they run, and attest the integrity of their enclave memory to the remote party. To enforce direct control of attestation, Intel mandates attestation to be verified by Intel's attestation service. This Intel-centric attestation model, however, neither protects privacy nor performs efficiently when distributed and frequent attestation is required. This paper presents OPERA, an Open Platform for Enclave Remote Attestation. Without involving Intel's attestation service while conducting attestation, OPERA is unchained from Intel, although it relies on Intel to establish a chain of trust whose anchor point is the secret rooted in SGX hardware. OPERA is open, as the implementation of its attestation service is completely open, allowing any enclave developer to run her own OPERA service, and its execution is publicly verifiable and hence trustworthy; OPERA is privacy-preserving, as the attestation service does not learn which enclave is being attested or when the attestation takes place; OPERA is performant, as it does not rely on a single-point-of-verification and also reduces the latency of verification.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3354220](https://doi.org/10.1145/3319535.3354220)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3354220](https://dl.acm.org/doi/pdf/10.1145/3319535.3354220)
## Towards Memory Safe Enclave Programming with Rust-SGX.
### Authors
* Huibo Wang, Baidu X-Lab & The University of Texas at Dallas, Richardson, TX, USA
* Pei Wang, Baidu X-Lab, Sunnyvale, CA, USA
* Yu Ding, Baidu X-Lab, Sunnyvale, CA, USA
* Mingshen Sun, Baidu X-Lab, Sunnyvale, CA, USA
* Yiming Jing, Baidu X-Lab, Sunnyvale, CA, USA
* Ran Duan, Baidu X-Lab, Beijing, China
* Long Li, Baidu X-Lab, Beijing, China
* Yulong Zhang, Baidu X-Lab, Sunnyvale, CA, USA
* Tao Wei, Baidu X-Lab, Sunnyvale, CA, USA
* Zhiqiang Lin, Ohio State University, Columbus, OH, USA
### Abstract
> Intel Software Guard eXtension (SGX), a hardware supported trusted execution environment (TEE), is designed to protect security critical applications. However, it does not terminate traditional memory corruption vulnerabilities for the software running inside enclave, since enclave software is still developed with type unsafe languages such as C/C++. This paper presents RUST-SGX, an efficient and layered approach to exterminating memory corruption for software running inside SGX enclaves. The key idea is to enable the development of enclave programs with an efficient memory safe system language Rust with a RUST-SGX SDK by solving the key challenges of how to (1) make the SGX software memory safe and (2) meanwhile run as efficiently as with the SDK provided by Intel. We therefore propose to build RUST-SGX atop Intel SGX SDK, and tame unsafe components with formally proven memory safety. We have implemented RUST-SGX and tested with a series of benchmark programs. Our evaluation results show that RUST-SGX imposes little extra overhead (less than 5% with respect to the SGX specific features and services compared to software developed by Intel SGX SDK), and meanwhile have stronger memory safety.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3354241](https://doi.org/10.1145/3319535.3354241)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3354241](https://dl.acm.org/doi/pdf/10.1145/3319535.3354241)
## CHURP: Dynamic-Committee Proactive Secret Sharing.
### Authors
* Sai Krishna Deepak Maram, Cornell Tech, New York, NY, USA
* Fan Zhang, Cornell Tech, New York, NY, USA
* Lun Wang, University of California, Berkeley, Berkeley, CA, USA
* Andrew Low, University of California, Berkeley, Berkeley, CA, USA
* Yupeng Zhang, Texas A&M, College Station, TX, USA
* Ari Juels, Cornell Tech, New York, NY, USA
* Dawn Song, University of California, Berkeley, Berkeley, CA, USA
### Abstract
> We introduce CHURP (CHUrn-Robust Proactive secret sharing). CHURP enables secure secret-sharing in dynamic settings, where the committee of nodes storing a secret changes over time. Designed for blockchains, CHURP has lower communication complexity than previous schemes: $O(n)$ on-chain and $O(n^2)$ off-chain in the optimistic case of no node failures. CHURP includes several technical innovations: An efficient new proactivization scheme of independent interest, a technique (using asymmetric bivariate polynomials) for efficiently changing secret-sharing thresholds, and a hedge against setup failures in an efficient polynomial commitment scheme. We also introduce a general new technique for inexpensive off-chain communication across the peer-to-peer networks of permissionless blockchains. We formally prove the security of CHURP, report on an implementation, and present performance measurements.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3363203](https://doi.org/10.1145/3319535.3363203)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3363203](https://dl.acm.org/doi/pdf/10.1145/3319535.3363203)
## Efficient Verifiable Secret Sharing with Share Recovery in BFT Protocols.
### Authors
* Soumya Basu, Cornell University & IC3, Ithaca, NY, USA
* Alin Tomescu, Massachusetts Institute of Technology, Cambridge, MA, USA
* Ittai Abraham, VMware Research, Herzliya, Israel
* Dahlia Malkhi, Calibra, Menlo Park, CA, USA
* Michael K. Reiter, University of North Carolina at Chapel Hill & VMware Research, Chapel Hill, NC, USA
* Emin Gün Sirer, Cornell University & IC3, Ithaca, NY, USA
### Abstract
> Byzantine fault tolerant state machine replication (SMR) provides powerful integrity guarantees, but fails to provide any privacy guarantee whatsoever. A natural way to add such privacy guarantees is to secret-share state instead of fully replicating it. Such a com- bination would enable simple solutions to difficult problems, such as a fair exchange or a distributed certification authority. However, incorporating secret shared state into traditional Byzantine fault tolerant (BFT) SMR protocols presents unique challenges. BFT protocols often use a network model that has some degree of asynchrony, making verifiable secret sharing (VSS) unsuitable. However, full asynchronous VSS (AVSS) is unnecessary as well since the BFT algorithm provides a broadcast channel. We first present the VSS with share recovery problem, which is the subproblem of AVSS required to incorporate secret shared state into a BFT engine. Then, we provide the first VSS with share recovery solution, KZG-VSSR, in which a failure-free sharing incurs only a constant number of cryptographic operations per replica. Finally, we show how to efficiently integrate any instantiation of VSSR into a BFT replication protocol while incurring only constant overhead. Instantiating VSSR with prior AVSS protocols would require a quadratic communication cost for a single shared value and incur a linear overhead when incorporated into BFT replication. We demonstrate our end-to-end solution via a a private key-value store built using BFT replication and two instantiations of VSSR, KZG-VSSR and Ped-VSSR, and present its evaluation.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3354207](https://doi.org/10.1145/3319535.3354207)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3354207](https://dl.acm.org/doi/pdf/10.1145/3319535.3354207)
## Two-party Private Set Intersection with an Untrusted Third Party.
### Authors
* Phi Hung Le, George Mason University, Fairfax, VA, USA
* Samuel Ranellucci, Unbound Tech, Petach Tikva, Israel
* S. Dov Gordon, George Mason University, Fairfax, VA, USA
### Abstract
> We construct new protocols for two parties to securely compute on the items in their intersection. Our protocols make use of an untrusted third party that has no input. The use of this party allows us to construct highly efficient protocols that are secure against a single malicious corruption.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3345661](https://doi.org/10.1145/3319535.3345661)
## The Art and Craft of Fraudulent App Promotion in Google Play.
### Authors
* Mizanur Rahman, Amazon, Seattle, WA, USA
* Nestor Hernandez, Florida International University, Miami, FL, USA
* Ruben Recabarren, Florida International University, Miami, FL, USA
* Syed Ishtiaque Ahmed, University of Toronto, Toronto, Canada
* Bogdan Carbunar, Florida International University, Miami, FL, USA
### Abstract
> Black Hat App Search Optimization (ASO) in the form of fake reviews and sockpuppet accounts, is prevalent in peer-opinion sites, e.g., app stores, with negative implications on the digital and real lives of their users. To detect and filter fraud, a growing body of research has provided insights into various aspects of fraud posting activities, and made assumptions about the working procedures of the fraudsters from online data. However, such assumptions often lack empirical evidence from the actual fraud perpetrators. To address this problem, in this paper, we present results of both a qualitative study with 18 ASO workers we recruited from 5 freelancing sites, concerning activities they performed on Google Play, and a quantitative investigation with fraud-related data collected from other 39 ASO workers. We reveal findings concerning various aspects of ASO worker capabilities and behaviors, including novel insights into their working patterns, and supporting evidence for several existing assumptions. Further, we found and report participant-revealed techniques to bypass Google-imposed verifications, concrete strategies to avoid detection, and even strategies that leverage fraud detection to enhance fraud efficacy. We report a Google site vulnerability that enabled us to infer the mobile device models used to post more than 198 million reviews in Google Play, including 9,942 fake reviews. We discuss the deeper implications of our findings, including their potential use to develop the next generation fraud detection and prevention systems.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3345658](https://doi.org/10.1145/3319535.3345658)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3345658](https://dl.acm.org/doi/pdf/10.1145/3319535.3345658)
## CryptoGuard: High Precision Detection of Cryptographic Vulnerabilities in Massive-sized Java Projects.
### Authors
* Sazzadur Rahaman, Virginia Tech, Blacksburg, VA, USA
* Ya Xiao, Virginia Tech, Blacksburg, VA, USA
* Sharmin Afrose, Virginia Tech, Blacksburg, VA, USA
* Fahad Shaon, University of Texas at Dallas, Dallas, TX, USA
* Ke Tian, Virginia Tech, Blacksburg, VA, USA
* Miles Frantz, Virginia Tech, Blacksburg, VA, USA
* Murat Kantarcioglu, University of Texas at Dallas, Dallas, TX, USA
* Danfeng (Daphne) Yao, Virginia Tech, Blacksburg, VA, USA
### Abstract
> Cryptographic API misuses, such as exposed secrets, predictable random numbers, and vulnerable certificate verification, seriously threaten software security. The vision of automatically screening cryptographic API calls in massive-sized (e.g., millions of LoC) programs is not new. However, hindered by the practical difficulty of reducing false positives without compromising analysis quality, this goal has not been accomplished. CryptoGuard is a set of detection algorithms that refine program slices by identifying language-specific irrelevant elements. The refinements reduce false alerts by 76% to 80% in our experiments. Running our tool, CryptoGuard, on 46 high-impact large-scale Apache projects and 6,181 Android apps generated many security insights. Our findings helped multiple popular Apache projects to harden their code, including Spark, Ranger, and Ofbiz. We also have made progress towards the science of analysis in this space, including manually analyzing 1,295 Apache alerts, confirming 1,277 true positives (98.61% precision), and in-depth comparison with leading solutions including CrySL, SpotBugs, and Coverity.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3345659](https://doi.org/10.1145/3319535.3345659)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3345659](https://dl.acm.org/doi/pdf/10.1145/3319535.3345659)
## Certificate Transparency in the Wild: Exploring the Reliability of Monitors.
### Authors
* Bingyu Li, Chinese Academy of Sciences & University of Chinese Academy of Sciences, Beijing, China
* Jingqiang Lin, Chinese Academy of Sciences & University of Chinese Academy of Sciences, Beijing, China
* Fengjun Li, University of Kansas, Lawrence, KS, USA
* Qiongxiao Wang, Chinese Academy of Sciences, Beijing, China
* Qi Li, Tsinghua University, Beijing, China
* Jiwu Jing, University of Chinese Academy of Sciences, Beijing, China
* Congli Wang, Chinese Academy of Sciences & University of Chinese Academy of Sciences, Beijing, China
### Abstract
> To detect fraudulent TLS server certificates and improve the accountability of certification authorities (CAs), certificate transparency (CT) is proposed to record certificates in publicly-visible logs, from which the monitors fetch all certificates and watch for suspicious ones. However, if the monitors, either domain owners themselves or third-party services, fail to return a complete set of certificates issued for a domain of interest, potentially fraudulent certificates may not be detected and then the CT framework becomes less reliable. This paper presents the first systematic study on CT monitors. We analyze the data in 88 public logs and the services of 5 active third-party monitors regarding 3,000,431 certificates of 6,000 selected Alexa Top-1M websites. We find that although CT allows ordinary domain owners to act as monitors, it is impractical for them to perform reliable processing by themselves, due to the rapidly increasing volume of certificates in public logs (e.g., on average 5 million records or 28.29 GB daily for the minimal set of logs that need to be monitored). Moreover, our study discloses that (a) none of the third-party monitors guarantees to return the complete set of certificates for a domain, and (b) for some domains, even the union of the certificates returned by the five third-party monitors can probably be incomplete. As a result, the certificates accepted by CT-enabled browsers are not absolutely visible to the claimed domain owners, even when CT is adopted with well-functioning logs. The risk of invisible fraudulent certificates in public logs raises doubts on the reliability of CT in practice.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3345653](https://doi.org/10.1145/3319535.3345653)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3345653](https://dl.acm.org/doi/pdf/10.1145/3319535.3345653)
## POSTER: Detecting Audio Adversarial Example through Audio Modification.
### Authors
* Hyun Kwon, Korea Advanced Institute of Science and Technology, Daejeon, Republic of Korea
* Hyunsoo Yoon, Korea Advanced Institute of Science and Technology, Daejeon, Republic of Korea
* Ki-Woong Park, Sejong University, Seoul, Republic of Korea
### Abstract
> Deep neural networks (DNNs) perform well in the fields of image recognition, speech recognition, pattern analysis, and intrusion detection. However, DNNs are vulnerable to adversarial examples that add a small amount of noise to the original samples. These adversarial examples have mainly been studied in the field of images, but their effect on the audio field is currently of great interest. For example, adding small distortion that is difficult to identify by humans to the original sample can create audio adversarial examples that allow humans to hear without errors, but only to misunderstand the machine. Therefore, a defense method against audio adversarial examples is needed because it is a threat in this audio field. In this paper, we propose a method to detect audio adversarial examples. The key point of this method is to add a new low level distortion using audio modification, so that the classification result of the adversarial example changes sensitively. On the other hand, the original sample has little change in the classification result for low level distortion. Using this feature, we propose a method to detect audio adversarial examples. To verify the proposed method, we used the Mozilla Common Voice dataset and the DeepSpeech model as the target model. Based on the experimental results, it was found that the accuracy of the adversarial example decreased to 6.21% at approximately 12 dB. It can detect the audio adversarial example compared to the initial audio sample.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3363246](https://doi.org/10.1145/3319535.3363246)
## POSTER: Traffic Splitting to Counter Website Fingerprinting.
### Authors
* Wladimir De la Cadena, University of Luxembourg, Esch-sur-Alzette, Luxembourg
* Asya Mitseva, University of Luxembourg, Esch-sur-Alzette, Luxembourg
* Jan Pennekamp, RWTH Aachen University, Aachen, Germany
* Jens Hiller, RWTH Aachen University, Aachen, Germany
* Fabian Lanze, Huf Secure Mobile GmbH, Velbert, Germany
* Thomas Engel, University of Luxembourg, Esch-sur-Alzette, Luxembourg
* Klaus Wehrle, RWTH Aachen University, Aachen, Germany
* Andriy Panchenko, Brandenburg University of Technology, Cottbus, Germany
### Abstract
> Website fingerprinting (WFP) is a special type of traffic analysis, which aims to infer the websites visited by a user. Recent studies have shown that WFP targeting Tor users is notably more effective than previously expected. Concurrently, state-of-the-art defenses have been proven to be less effective. In response, we present a novel WFP defense that splits traffic over multiple entry nodes to limit the data a single malicious entry can use. Here, we explore several traffic-splitting strategies to distribute user traffic. We establish that our weighted random strategy dramatically reduces the accuracy from nearly 95% to less than 35% for four state-of-the-art WFP attacks without adding any artificial delays or dummy traffic.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3363249](https://doi.org/10.1145/3319535.3363249)
## Force vs. Nudge: Comparing Users' Pattern Choices on SysPal and TinPal.
### Authors
* Harshal Tupsamudre, TCS Research, Pune, India
* Sukanya Vaddepalli, TCS Research, Pune, India
* Vijayanand Banahatti, TCS Research, Pune, India
* Sachin Lodha, TCS Research, Pune, India
### Abstract
> Android's 3X3 graphical pattern lock scheme is one of the widely used authentication method on smartphone devices. However, users choose 3X3 patterns from a small subspace of all possible 389,112 patterns. The two recently proposed interfaces, SysPal by Cho et al. and TinPal by the authors, demonstrate that it is possible to influence users 3X3 pattern choices by making small modifications in the existing interface. While SysPal forces users to include one, two or three system-assigned random dots in their pattern, TinPal employs highlighting mechanism to inform users about the set of reachable dots from the current selected dot. Both interfaces improved the security of 3X3 patterns without affecting usability, but no comparison between SysPal and TinPal was presented. To address this gap, we conduct a new user study with 147 participants and collect patterns on three SysPal interfaces, 1-dot, 2-dot and 3-dot. We compare SysPal and TinPal patterns using a range of security and usability metrics including pattern length, stroke length, guessability, recall time and login attempts. Overall, we found that patterns created on TinPal were significantly longer and offered more resistance to guessing attacks.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3363250](https://doi.org/10.1145/3319535.3363250)
## Poster: A Proof-of-Stake (PoS) Blockchain Protocol using Fair and Dynamic Sharding Management.
### Authors
* Daehwa Rayer Lee, Sungkyunkwan University, Suwon, Republic of Korea
* Yunhee Jang, Sungkyunkwan University, Suwon, Republic of Korea
* Hyoungshick Kim, CSIRO Data61, Sydney, Australia
### Abstract
> Sharding-based consensus protocols were introduced to enable the parallelization of the consensus work and storage for blockchain systems. However, existing sharding-based consensus algorithms are not sufficiently designed for distributing miners and transactions to shards in a fair and secure manner, which would make the blockchain systems vulnerable to several attacks. To overcome such limitations of the existing sharding-based consensus protocols, we present a new sharding-based Proof-of-Stake (PoS) blockchain protocol using fair and dynamic sharding management. To show the security of the proposed consensus protocol, we numerically analyze attack probabilities and found that the proposed protocol is secure when the number of shards is less than or equal to 6. Moreover, the proposed protocol is approximately 186 times more efficient than Ethereum with the real parameter settings obtained by the Ethereum network.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3363254](https://doi.org/10.1145/3319535.3363254)
## Kerberoid: A Practical Android App Decompilation System with Multiple Decompilers.
### Authors
* Heejun Jang, Sungkyunkwan University, Suwon, Republic of Korea
* Beomjin Jin, Sungkyunkwan University, Suwon, Republic of Korea
* Sangwon Hyun, Myongji University, Yongin, Republic of Korea
* Hyoungshick Kim, Sungkyunkwan University and CSIRO Data61, Suwon, Republic of Korea
### Abstract
> Decompilation is frequently used to analyze binary programs. In Android, however, decompilers all perform differently with varying apps due to their own characteristics. Obviously, there is no universal solution in all conditions. Based on this observation, we present a practical Android app decompilation system (called Kerberoid) that automatically stitches the results from multiple decompilers together to maximize the coverage and the accuracy of decompiled codes. We evaluate the performance of Kerberoid with 151 Android apps in which their corresponding source codes are publicly available. Kerberoid fully recovered all functions for 17% of the apps tested and gained a similarity score over 50% for 40% of the apps tested, increased by 7% and 9%, respectively, compared with the best existing decompiler.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3363255](https://doi.org/10.1145/3319535.3363255)
## Poster: Attacking Malware Classifiers by Crafting Gradient-Attacks that Preserve Functionality.
### Authors
* Raphael Labaca-Castro, Bundeswehr University Munich, Munich, Bavaria, Germany
* Battista Biggio, University of Cagliari, Cagliari, Italy
* Gabi Dreo Rodosek, Bundeswehr University Munich, Munich, Bavaria, Germany
### Abstract
> Machine learning has proved to be a promising technology to determine whether a piece of software is malicious or benign. However, the accuracy of this approach comes sometimes at the expense of its robustness and probing these systems against adversarial examples is not always a priority. In this work, we present a gradient-based approach that can carefully generate valid executable malicious files that are classified as benign by state-of-the-art detectors. Initial results demonstrate that our approach is able to automatically find optimal adversarial examples in a more efficient way, which can provide a good support for building more robust models in the future.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3363257](https://doi.org/10.1145/3319535.3363257)
## Poster: Towards a Framework for Assessing Vulnerabilities of Brainwave Authentication Systems.
### Authors
* Karen Becker, University of Mannheim, Mannheim, Germany
* Patricia Arias-Cabarcos, University of Mannheim, Mannheim, Germany
* Thilo Habrich, University of Mannheim, Mannheim, Germany
* Christian Becker, University of Mannheim, Mannheim, Germany, Mannheim, Germany
### Abstract
> In the quest to devise new alternatives to password-based authentication, behavioral biometrics have become more and more appealing due to the improved usability that comes with their unobtrusiveness. One such type of biometric are brainwaves, which can be nowadays easily measured and used to prove a person's identity. Given the potential for this technology to be adopted in the near future, it is paramount to analyze its security implications. Furthermore, recent advances in brain computer interfaces make feasible the usage of brainwaves to prove users' identity. This work presents a comprehensive framework for assessing the vulnerabilities of brainwave authentication systems, incorporating new attack vectors that target specific features of brain biometrics. Resting on this theoretical groundwork, we analyze the existing literature on attacks and countermeasures, identifying gaps and providing a foundation for future research. Furthermore, we evaluated a subset of attacks identified through the framework and report our preliminary results.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3363260](https://doi.org/10.1145/3319535.3363260)
## Poster: Network Message Field Type Recognition.
### Authors
* Stephan Kleber, Ulm University, Ulm, Germany
* Frank Kargl, Ulm University, Ulm, Germany
### Abstract
> Existing approaches to reverse engineer network protocols based on traffic traces lack comprehensive methods to determine the data type, e. g. float, timestamp, or addresses, of segments in messages of binary protocols. We propose a novel method for the analysis of unknown protocol messages to reveal the data types contained in these messages. Therefore, we split messages into segments of bytes and interpret these as vectors of byte values. Based on the vector interpretation, we can determine similarities and characteristics of specific data types. These can be used to classify segments into clusters of the same type and to identify their data type for previously trained data types. We performed first evaluations of different applications of our method that show promising results up the a data-type-recognition precision of 100,%.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3363261](https://doi.org/10.1145/3319535.3363261)
## Poster: Towards a Data Centric Approach for the Design and Verification of Cryptographic Protocols.
### Authors
* Luca Arnaboldi, Newcastle University, Newcastle Upon Tyne, United Kingdom
* Roberto Metere, Newcastle University & The Alan Turing Institute, Newcastle Upon Tyne, United Kingdom
### Abstract
> We propose MetaCP, a Meta Cryptography Protocol verification tool, as an automated tool simplifying the design of security protocols through a graphical interface. The graphical interface can be seen as a modern editor of a non-relational database whose data are protocols. The information of protocols are stored in XML, enjoying a fixed format and syntax aiming to contain all required information to specify any kind of protocol. This XML can be seen as an almost semanticless language, where different plugins confer strict semantics modelling the protocol into a variety of back-end verification languages. In this paper, we showcase the effectiveness of this novel approach by demonstrating how easy MetaCP makes it to design and verify a protocol going from the graphical design to formally verified protocol using a Tamarin prover plugin. Whilst similar approaches have been proposed in the past, most famously the AVISPA Tool, no previous approach provides such as small learning curve and ease of use even for non security professionals, combined with the flexibility to integrate with the state of the art verification tools.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3363262](https://doi.org/10.1145/3319535.3363262)
## Poster: Towards Robust Open-World Detection of Deepfakes.
### Authors
* Saniat Javid Sohrawardi, Rochester Institute of Technology, Rochester, NY, USA
* Akash Chintha, Rochester Institute of Technology, Rochester, NY, USA
* Bao Thai, Rochester Institute of Technology, Rochester, NY, USA
* Sovantharith Seng, Rochester Institute of Technology, Rochester, NY, USA
* Andrea Hickerson, University of South Carolina, Columbia, SC, USA
* Raymond Ptucha, Rochester Institute of Technology, Rochester, NY, USA
* Matthew Wright, Rochester Institute of Technology, Rochester, NY, USA
### Abstract
> There is heightened concern over deliberately inaccurate news. Recently, so-called deepfake videos and images that are modified by or generated by artificial intelligence techniques have become more realistic and easier to create. These techniques could be used to create fake announcements from public figures or videos of events that did not happen, misleading mass audiences in dangerous ways. Although some recent research has examined accurate detection of deepfakes, those methodologies do not generalize well to real-world scenarios and are not available to the public in a usable form. In this project, we propose a system that will robustly and efficiently enable users to determine whether or not a video posted online is a deepfake. We approach the problem from the journalists' perspective and work towards developing a tool to fit seamlessly into their workflow. Results demonstrate accurate detection on both within and mismatched datasets.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3363269](https://doi.org/10.1145/3319535.3363269)
## Poster: A First Look at the Privacy Risks of Voice Assistant Apps.
### Authors
* Atsuko Natatsuka, Waseda University, Tokyo, Japan
* Ryo Iijima, Waseda University & NICT, Tokyo, Japan
* Takuya Watanabe, NTT Secure Platform Laboratories & Waseda University, Tokyo, Japan
* Mitsuaki Akiyama, NTT Secure Platform Laboratories, Tokyo, Japan
* Tetsuya Sakai, Waseda University, Tokyo, Japan
* Tatsuya Mori, Waseda University, NICT & RIKEN AIP, Tokyo, Japan
### Abstract
> In this study, we conduct the first study on the analysis of voice assistant (VA) apps. We first collect the metadata of VA apps from the VA app directory and analyze them. Next, we call VA apps by the corresponding voice commands and examine how they identify users by analyzing the responses from the apps. We found that roughly half of the VA apps performed user identification by some means. We also found that several apps aim to acquire personal information such as birth date, age, or the blood type through voice conversations. As such data will be stored in the cloud, we need to have a mechanism to ensure that an end-user can check/control the data in a usable way.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3363274](https://doi.org/10.1145/3319535.3363274)
## Poster: SDN-based System to Filter Out DRDoS Amplification Traffic in ISP Networks.
### Authors
* Priyanka Dodia, Qatar Computing Research Institute, HBKU, Doha, Qatar
* Yury Zhauniarovich, Perfect Equanimity, Minsk, Byelarus
### Abstract
> Distributed Reflected Denial of Service (DRDoS) attacks remain one of the most popular techniques to drain victim's network bandwidth. Despite the goal of disrupting network services of a particular victim, indirectly these attacks affect a large number of benign Internet citizens. In particular, the owners of services vulnerable to amplification have to waste their resources to process incoming requests. Moreover, the voluminous attack traffic generated as a result of the amplification lavishes Internet Service Provider (ISP) resources, bandwidth and money, causing Quality of Service (QoS) degradation and subscription fee increase for the customers. In this work we demonstrate a Software Defined Networking (SDN) based system to filter out garbage traffic from an ISP network. We employ a special type of a honeypot developed to collect information about ongoing DRDoS attacks. The firewall rules derived from this data are used to block incoming amplification requests from reaching amplifiers located within the provider network rescuing vulnerable services from being abused. In its turn, this prevents garbage traffic generation saving ISP's money and improving QoS.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3363277](https://doi.org/10.1145/3319535.3363277)
## Poster: Recovering the Input of Neural Networks via Single Shot Side-channel Attacks.
### Authors
* Lejla Batina, Radboud University, Nijmegen, Netherlands
* Shivam Bhasin, Nanyang Technological University, Singapore, Singapore, Singapore
* Dirmanto Jap, Nanyang Technological University, Singapore, Singapore, Singapore
* Stjepan Picek, Delft University of Technology, Delft, Netherlands
### Abstract
> The interplay between machine learning and security is becoming more prominent. New applications using machine learning also bring new security risks. Here, we show it is possible to reverse-engineer the inputs to a neural network with only a single-shot side-channel measurement assuming the attacker knows the neural network architecture being used.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3363280](https://doi.org/10.1145/3319535.3363280)
## Poster: Challenges of Accurately Measuring Churn in P2P Botnets.
### Authors
* Leon Böck, Technische Universität Darmstadt, Darmstadt, Germany
* Shankar Karuppayah, Technische Universität Darmstadt & Universiti Sains Malaysia, Darmstadt, Germany
* Kory Fong, RBC Research Institute, Toronto, ON, Canada
* Max Mühlhäuser, Technische Universität Darmstadt, Darmstadt, Germany
* Emmanouil Vasilomanolakis, Aalborg University, Aalborg, Denmark
### Abstract
> Peer-to-peer (P2P) botnets are known to be highly resilient to takedown attempts. Such attempts are usually carried out by exploiting vulnerabilities in the bots communication protocol. However, a failed takedown attempt may alert botmasters and allow them to patch their vulnerabilities to thwart subsequent attempts. As a promising solution, takedowns could be evaluated in simulation environments before attempting them in the real world. To ensure such simulations are as realistic as possible, the churn behavior of botnets must be understood and measured accurately. This paper discusses potential pitfalls when measuring churn in live P2P botnets and proposes a botnet monitoring framework for uniform data collection and churn measurement for P2P botnets.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3363281](https://doi.org/10.1145/3319535.3363281)
## Poster: Let History not Repeat Itself (this Time) - Tackling WebAuthn Developer Issues Early On.
### Authors
* Aftab Alam, Saarland University, Saarbrücken, Germany
* Katharina Krombholz, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Sven Bugiel, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### Abstract
> The FIDO2 open authentication standard, developed jointly by the FIDO Alliance and the W3C, provides end-users with the means to use public-key cryptography in addition to or even instead of text-based passwords for authentication on the web. Its WebAuthn protocol has been adopted by all major browser vendors and recently also by major service providers (e.g., Google, GitHub, Dropbox, Microsoft, and others). Thus, FIDO2 is a very strong contender for finally tackling the problem of insecure user authentication on the web. However, there remain a number of open questions to be answered for FIDO2 to succeed as expected. In this poster, we focus specifically on the critical question of how well web-service developers can securely roll out WebAuthn in their own services and which issues have to be tackled to help developers in this task. The past has unfortunately shown that software developers struggle with correctly implementing or using security-critical APIs, such as TLS/SSL, password storage, or cryptographic APIs. We report here on ongoing work that investigates potential problem areas and concrete pitfalls for adopters of WebAuthn and tries to lay out a plan of how our community can help developers. We believe that raising awareness for foreseeable developer problems and calling for action to support developers early on is critical on the path for establishing FIDO2 as a de-facto authentication solution.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3363283](https://doi.org/10.1145/3319535.3363283)
## Poster: Towards Automated Quantitative Analysis and Forecasting of Vulnerability Discoveries in Debian GNU/Linux.
### Authors
* Nikolaos Alexopoulos, Technische Universität Darmstadt, Darmstadt, Germany
* Rolf Egert, Technische Universität Darmstadt, Darmstadt, Germany
* Tim Grube, Technische Universität Darmstadt, Darmstadt, Germany
* Max Mühlhäuser, Technische Universität Darmstadt, Darmstadt, Germany
### Abstract
> Quantitative analysis and forecasting of software vulnerability discoveries is important for patching cost and time estimation, and as input to security metrics and risk assessment methodologies. However, as of now, quantitative studies (a) require considerable manual effort, (b) make use of noisy datasets, and (c) are especially challenging to reproduce. In this poster abstract we describe our ongoing work towards quantitative analysis of vulnerabilities in Debian GNU/Linux packages. We focus on the challenges of making the process as automated and reproducible as possible, while collecting good-quality data necessary for the analysis. We then state a number of interesting hypotheses that can be investigated, and present preliminary results.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3363285](https://doi.org/10.1145/3319535.3363285)
## Poster: Effective Layers in Coverage Metrics for Deep Neural Networks.
### Authors
* Leo Hyun Park, Yonsei University, Seoul, Republic of Korea
* Sangjin Oh, Yonsei University, Seoul, Republic of Korea
* Jaeuk Kim, Yonsei University, Seoul, Republic of Korea
* Soochang Chung, Yonsei University, Seoul, Republic of Korea
* Taekyoung Kwon, Yonsei University, Seoul, Republic of Korea
### Abstract
> Deep neural networks (DNNs) gained in popularity as an effective machine learning algorithm, but their high complexity leads to the lack of model interpretability and difficulty in the verification of deep learning. Fuzzing, which is an automated software testing technique, is recently applied to DNNs as an effort to address these problems by following the trend of coverage-based fuzzing. However, new coverage metrics on DNNs may bring out the question of which layer to measure the coverage in DNNs. In this poster, we empirically evaluate the performance of existing coverage metrics. By the comparative analysis of experimental results, we compile the most effective layer for each of coverage metrics and discuss a future direction of DNN fuzzing.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3363286](https://doi.org/10.1145/3319535.3363286)
## CPS-SPC 2019: Fifth Workshop on Cyber-Physical Systems Security and PrivaCy.
### Authors
* Nils Ole Tippenhauer, CISPA Helmholtz Center for Information Security, Saarbrucken, Germany
* Avishai Wool, Tel Aviv University, Tel Aviv, Israel
### Abstract
> Cyber-Physical Systems (CPS) are becoming increasingly critical for the well-being of society (e.g., electricity generation and distribution, water treatment, implantable medical devices etc. ). While the convergence of computing, communications and physical control in such systems provides benefits in terms of efficiency and convenience, the attack surface resulting from this convergence poses unique security and privacy challenges. These systems represent the new frontier for cyber risk. CPS-SPC is an annual forum in its 5th edition this year, that aims to provide a focal point for the research community to begin addressing the security and privacy challenges of CPS in a comprehensive and multidisciplinary manner and, in tandem with other efforts, build a comprehensive research road map. Related Workshop Proceedings are available in the ACM DL at: https://dl.acm.org/citation.cfm?id=3338499
### Links
- **URL:** [https://doi.org/10.1145/3319535.3353549](https://doi.org/10.1145/3319535.3353549)
## SSR'19: The 5th Conference on Security Standardisation Research.
### Authors
* Maryam Mehrnezhad, Newcastle University, Newcastle upon Tyne, United Kingdom
* Thyla van der Merwe, Mozilla, London, United Kingdom
* Feng Hao, University of Warwick, Warwick, United Kingdom
### Abstract
> The 5th conference on Security Standardisation Research (SSR'19) is in London, UK, on 11 November 2019, co-located with the ACM Conference on Computer and Communications Security 2019 (CCS'19). This conference aims to provide a preferred venue for the discussion of all topics related to security standardisation, covering both theory and practice. This year's program includes two invited keynote addresses to shed light on security standardisation from both industrial and academic perspectives, a panel discussion on blockchain standardisation and the presentation of seven original research papers selected from twenty submissions. The SSR'19 Conference Proceedings are available in the ACM DL at: https://dl.acm.org/citation.cfm?id=3338500.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3353551](https://doi.org/10.1145/3319535.3353551)
## TIS'19: Theory of Implementation Security Workshop 2019.
### Authors
* Begül Bilgin, Rambus-Cryptography Research, Rotterdam, Netherlands
* Svetla Nikova, KU Leuven, Leuven, Belgium
* Vincent Rijmen, KU Leuven, Leuven, Belgium
### Abstract
> In this workshop, we focus on physical attacks and their countermeasures. With the advent of the Internet of Things, the interest in embedded cryptographic systems and physical attacks on these systems is steadily increasing, both in academia and industry. Sophisticated security certification and evaluation methods have been established to give assurance about the security claims by independent evaluation and testing. The certification has a drawback that it is time consuming and expensive. There is a need for further developing provably secure protection methods and automated verification tools, but also improving the efficiency and quality of certification by integrating these tools and methods. All these challenges motivate even more research on the Theory of Implementation Security.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3353552](https://doi.org/10.1145/3319535.3353552)
## 18th Workshop on Privacy in the Electronic Society (WPES 2019).
### Authors
* Josep Domingo-Ferrer, Universitat Rovira i Virgili, Tarragona, Spain
### Abstract
> The 18th Workshop on Privacy in the Electronic Society (WPES 2019) was held on November 11th, 2019, in conjunction with the 26th ACM Conference on Computer and Communications Security (CCS 2019) in London, United Kingdom. The goal of WPES is to bring together privacy researchers and practitioners to discuss the privacy problems that arise in an interconnected society and solutions to those problems. The program for the workshop contains 14 full papers and 5 short papers selected from a total of 67 submissions. Specific topics covered in the program include secure computation, secure communication, mobile-device privacy, genomic data privacy, social aspects of privacy, data anonymization, and privacy-enhancing techniques for the Internet of Things, blockchain and Web.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3353555](https://doi.org/10.1145/3319535.3353555)
## ASHES 2019: 3rd Workshop on Attacks and Solutions in Hardware Security.
### Authors
* Chip Hong Chang, NTU Singapore, Singapore, Singapore
* Daniel E. Holcomb, University of Massachusetts at Amherst, Amherst, MA, USA
* Francesco Regazzoni, University of Lugano, Lugano, Switzerland
* Ulrich Rührmair, LMU Munich, Munich, Germany
* Patrick Schaumont, Virginia Tech, Blacksburg, VA, USA
### Abstract
> The workshop on "Attacks and Solutions in HardwarE Security" (ASHES) welcomes any theoretical and practical works on hardware security, including any attacks, solutions, countermeasures, proofs, classification, formalization, and implementations. Besides mainstream research, ASHES puts some focus on new and emerging scenarios: This includes the internet of things (IoT), nuclear weapons inspections, arms control, automotive security, consumer and infrastructure security, or supply chain security, among others. ASHES also welcomes dedicated works on special purpose hardware, such as lightweight, low-cost, and energy-efficient devices, or non-electronic security systems. The workshop hosts four different paper categories: Apart from regular and short papers, this includes works that systematize and structure a certain (sub-)area (so-called "Systematization of Knowledge" (SoK) papers), and so-termed "Wild-and-Crazy" (WaC) papers, which distribute seminal ideas at an early conceptual stage. This summary gives a brief overview of the third edition of the workshop, which took place at November 15, 2019 in London (UK), as a one-day post-conference satellite workshop of ACM CCS.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3353557](https://doi.org/10.1145/3319535.3353557)
## 1st Workshop on Cyber-Security Arms Race (CYSARM 2019).
### Authors
* Thanassis Giannetsos, Technical University of Denmark, Copenhagen, Denmark
* Daniele Sgandurra, Royal Holloway, University of London, London, United Kingdom
### Abstract
> The goal of CYSARM workshop is to foster collaboration among researchers and practitioners to discuss the various facets and trade-offs of cyber-security. In particular, how new technologies and algorithms might impact the cyber-security of existing or future models and systems.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3353558](https://doi.org/10.1145/3319535.3353558)
## IoT S&P 2019: 2nd Workshop on the Internet of Things Security and Privacy.
### Authors
* Peng Liu, Penn State University, Penn State, PA, USA
* Yuqing Zhang, University of Chinese Academy of Sciences, China, BeiJing, China
### Abstract
> The Second Workshop on Internet of Things Security and Privacy is held in London, UK on November 15, 2019, co-located with the ACM Conference on Computer and Communications Security (CCS). The workshop aims to address the security and privacy challenges of the emerging Internet-of-Things landscape. The workshop aims to bring together academic and industrial researchers, and to that end, we have put together an exciting program offering a mix of current and potential challenges. The workshop will also features 8 papers, 2 posters, and an invited keynote.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3353560](https://doi.org/10.1145/3319535.3353560)
## Omniring: Scaling Private Payments Without Trusted Setup.
### Authors
* Russell W. F. Lai, Friedrich-Alexander University Erlangen-Nuremberg, Erlangen, Germany
* Viktoria Ronge, Friedrich-Alexander University Erlangen-Nuremberg, Erlangen, Germany
* Tim Ruffing, Blockstream, none, Germany
* Dominique Schröder, Friedrich-Alexander University Erlangen-Nuremberg, Erlangen, Germany
* Sri Aravinda Krishnan Thyagarajan, Friedrich-Alexander University Erlangen-Nuremberg, Erlangen, Germany
* Jiafan Wang, Chinese University of Hong Kong, Hong Kong, Hong Kong
### Abstract
> Monero is the largest cryptocurrency with built-in cryptographic privacy features. The transactions are authenticated using zero-knowledge spend proofs, which provide a certain level of anonymity by hiding the source accounts from which the funds are sent among a set of other accounts. Due to its similarities to ring signatures, this core cryptographic component is called Ring Confidential Transactions (RingCT). Because of its practical relevance, several works attempt to analyze the security of RingCT. Since RingCT is rather complex, most of them are either informal, miss fundamental functionalities, or introduce undesirable trusted setup assumptions. Regarding efficiency, Monero currently deploys a scheme in which the size of the spend proof is linear in the ring size. This limits the ring size to only a few accounts, which in turn limits the acquired anonymity significantly and facilitates de-anonymization attacks. As a solution to these problems, we present the first rigorous formalization of RingCT as a cryptographic primitive. We then propose a generic construction of RingCT and prove it secure in our formal security model. By instantiating our generic construction with new efficient zero-knowledge proofs, we obtain Omniring, a fully-fledged RingCT scheme in the discrete logarithm setting that provides the highest concrete and asymptotic efficiency as of today. Omniring is the first RingCT scheme which 1) does not require a trusted setup or pairing-friendly elliptic curves, 2) has a proof size logarithmic in the size of the ring, and 3) allows to share the same ring between all source accounts in a transaction, thereby enabling significantly improved privacy level without sacrificing performance. Our zero-knowledge proofs rely on novel enhancements to the Bulletproofs framework (S&P 2018), which we believe are of independent interest.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3345655](https://doi.org/10.1145/3319535.3345655)
## WI Is Not Enough: Zero-Knowledge Contingent (Service) Payments Revisited.
### Authors
* Georg Fuchsbauer, Inria, École normale supérieure, CNRS and PSL, Paris, France
### Abstract
> While fair exchange of goods is known to be impossible without assuming a trusted party, smart contracts in cryptocurrencies forgo such parties by assuming trust in the currency system. They allow a seller to sell a digital good, which the buyer will obtain if and only if she pays. Zero-knowledge contingent payments (zkCP) show that, despite the limited expressiveness of its scripting language, this is even possible in Bitcoin by using zero-knowledge proofs. At CCS'17, Campanelli, Gennaro, Goldfeder and Nizzardo showed that the zkCP protocol was flawed, in that the buyer could obtain information about the good without paying. They proposed countermeasures to repair zkCP and moreover observed that zkCP cannot be used when a service is sold. They introduce the notion of ZK contingent payments for services and give an instantiation based on a witness-indistinguishable (WI) proof system. We show that some of their proposed countermeasures are not sufficient by presenting an attack against their fixed zkCP scheme. We also show that their realization of zkCP for services is insecure, as the buyer could learn the desired information (i.e., whether the service was provided) without paying; in particular, we show that WI of the used proof system is not enough.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3354234](https://doi.org/10.1145/3319535.3354234)
## Towards Continuous Access Control Validation and Forensics.
### Authors
* Chengcheng Xiang, University of California, San Diego, San Diego, CA, USA
* Yudong Wu, University of California, San Diego, San Diego, CA, USA
* Bingyu Shen, University of California, San Diego, San Diego, CA, USA
* Mingyao Shen, University of California, San Diego, San Diego, CA, USA
* Haochen Huang, University of California, San Diego, San Diego, CA, USA
* Tianyin Xu, University of Illinois Urbana-Champaign, Urbana, IL, USA
* Yuanyuan Zhou, University of California, San Diego, San Diego, CA, USA
* Cindy Moore, University of California, San Diego, San Diego, CA, USA
* Xinxin Jin, Whova, Inc., San Diego, CA, USA
* Tianwei Sheng, Whova, Inc., San Diego, CA, USA
### Abstract
> Access control is often reported to be "profoundly broken" in real-world practices due to prevalent policy misconfigurations introduced by system administrators (sysadmins). Given the dynamics of resource and data sharing, access control policies need to be continuously updated. Unfortunately, to err is human-sysadmins often make mistakes such as over-granting privileges when changing access control policies. With today's limited tooling support for continuous validation, such mistakes can stay unnoticed for a long time until eventually being exploited by attackers, causing catastrophic security incidents. We present P-DIFF, a practical tool for monitoring access control behavior to help sysadmins early detect unintended access control policy changes and perform postmortem forensic analysis upon security attacks. P-DIFF continuously monitors access logs and infers access control policies from them. To handle the challenge of policy evolution, we devise a novel time-changing decision tree to effectively represent access control policy changes, coupled with a new learning algorithm to infer the tree from access logs. P-DIFF provides sysadmins with the inferred policies and detected changes to assist the following two tasks: (1) validating whether the access control changes are intended or not; (2) pinpointing the historical changes responsible for a given security attack. We evaluate P-DIFF with a variety of datasets collected from five real-world systems, including two from industrial companies. P-DIFF can detect 86%-100% of access control policy changes with an average precision of 89%. For forensic analysis, P-DIFF can pinpoint the root-cause change that permits the target access in 85%-98% of the evaluated cases.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3363191](https://doi.org/10.1145/3319535.3363191)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3363191](https://dl.acm.org/doi/pdf/10.1145/3319535.3363191)
## Watching You Watch: The Tracking Ecosystem of Over-the-Top TV Streaming Devices.
### Authors
* Hooman Mohajeri Moghaddam, Princeton University, Princeton, NJ, USA
* Gunes Acar, Princeton University, Princeton, NJ, USA
* Ben Burgess, Princeton University, Princeton, NJ, USA
* Arunesh Mathur, Princeton University, Princeton, NJ, USA
* Danny Yuxing Huang, Princeton University, Princeton, NJ, USA
* Nick Feamster, Princeton University & University of Chicago, Princeton, NJ, USA
* Edward W. Felten, Princeton University, Princeton, NJ, USA
* Prateek Mittal, Princeton University, Princeton, NJ, USA
* Arvind Narayanan, Princeton University, Princeton, NJ, USA
### Abstract
> The number of Internet-connected TV devices has grown significantly in recent years, especially Over-the-Top ("OTT") streaming devices, such as Roku TV and Amazon Fire TV. OTT devices offer an alternative to multi-channel television subscription services, and are often monetized through behavioral advertising. To shed light on the privacy practices of such platforms, we developed a system that can automatically download OTT apps (also known as channels), and interact with them while intercepting the network traffic and performing best-effort TLS interception. We used this smart crawler to visit more than 2,000 channels on two popular OTT platforms, namely Roku and Amazon Fire TV. Our results show that tracking is pervasive on both OTT platforms, with traffic to known trackers present on 69% of Roku channels and 89% of Amazon Fire TV channels. We also discover widespread practice of collecting and transmitting unique identifiers, such as device IDs, serial numbers, WiFi MAC addresses and SSIDs, at times over unencrypted connections. Finally, we show that the countermeasures available on these devices, such as limiting ad tracking options and adblocking, are practically ineffective. Based on our findings, we make recommendations for researchers, regulators, policy makers, and platform/app developers.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3354198](https://doi.org/10.1145/3319535.3354198)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3354198](https://dl.acm.org/doi/pdf/10.1145/3319535.3354198)
## VoltJockey: Breaching TrustZone by Software-Controlled Voltage Manipulation over Multi-core Frequencies.
### Authors
* Pengfei Qiu, Tsinghua University & University of Maryland, Beijing, China
* Dongsheng Wang, Tsinghua University, Beijing, China
* Yongqiang Lyu, Tsinghua University, Beijing, China
* Gang Qu, University of Maryland, College Park, MD, USA
### Abstract
> ARM TrustZone builds a trusted execution environment based on the concept of hardware separation. It has been quite successful in defending against various software attacks and forcing attackers to explore vulnerabilities in interface designs and side channels. The recently reported CLKscrew attack breaks TrustZone through software by overclocking CPU to generate hardware faults. However, overclocking makes the processor run at a very high frequency, which is relatively easy to detect and prevent, for example by hardware frequency locking. In this paper, we propose an innovative software-controlled hardware fault-based attack, VoltJockey, on multi-core processors that adopt dynamic voltage and frequency scaling (DVFS) techniques for energy efficiency. Unlike CLKscrew, we manipulate the voltages rather than the frequencies via DVFS unit to generate hardware faults on the victim cores, which makes VoltJockey stealthier and harder to prevent than CLKscrew. We deliberately control the fault generation to facilitate differential fault analysis to break TrustZone. The entire attack process is based on software without any involvement of hardware. We implement VoltJockey on an ARM-based Krait processor from a commodity Android phone and demonstrate how to reveal the AES key from TrustZone and how to breach the RSA-based TrustZone authentication. These results suggest that VoltJockey has a comparable efficiency to side channels in obtaining TrustZone-guarded credentials, as well as the potential of bypassing the RSA-based verification to load untrusted applications into TrustZone. We also discuss both hardware-based and software-based countermeasures and their limitations.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3354201](https://doi.org/10.1145/3319535.3354201)
## Principled Unearthing of TCP Side Channel Vulnerabilities.
### Authors
* Yue Cao, University of California, Riverside, Riverside, CA, USA
* Zhongjie Wang, University of California, Riverside, Riverside, CA, USA
* Zhiyun Qian, University of California, Riverside, Riverside, CA, USA
* Chengyu Song, University of California, Riverside, Riverside, CA, USA
* Srikanth V. Krishnamurthy, University of California, Riverside, Riverside, CA, USA
* Paul Yu, U.S. Army Combat Capabilities Development Command Army Research Laboratory, Adelphi, MD, USA
### Abstract
> Recent work has showcased the presence of subtle TCP side channels in modern operating systems, that can be exploited by off-path adversaries to launch pernicious attacks such as hijacking a connection. Unfortunately, most work to date is on the manual discovery of such side-channels, and patching them subsequently. In this work we ask "Can we develop a principled approach that can lead to the automated discovery of such hard-to-find TCP side-channels?" We identify that the crux of why such side-channels exist is the violation of the non-interference property between simultaneous TCP connections i.e., there exist cases wherein a change in state of one connection implicitly leaks some information to a different connection (controlled possibly by an attacker). To find such non-interference property violations, we argue that model-checking is a natural fit. However, because of limitations with regards to its scalability, there exist many challenges in using model checking. Specifically, these challenges relate to (a) making the TCP code base self-contained and amenable to model checking and (b) limiting the search space of model checking and yet achieving reasonable levels of code coverage. We develop a tool that we call SCENT (for Side Channel Excavation Tool) that addresses these challenges in a mostly automated way. At the heart of SCENT is an automated downscaling component that transforms the TCP code base in a consistent way to achieve both a reduction in the state space complexity encountered by the model checker and the number and types of inputs needed for verification. Our extensive evaluations show that SCENT leads to the discovery of 12 new side channel vulnerabilities in the Linux and FreeBSD kernels. In particular, a real world validation with one class of vulnerabilities shows that an off-path attacker is able to infer whether two arbitrary hosts are communicating with each other, within slightly more than 1 minute, on average.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3354250](https://doi.org/10.1145/3319535.3354250)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3354250](https://dl.acm.org/doi/pdf/10.1145/3319535.3354250)
## Privacy Risks of Securing Machine Learning Models against Adversarial Examples.
### Authors
* Liwei Song, Princeton University, Princeton, NJ, USA
* Reza Shokri, National University of Singapore, Singapore, Singapore
* Prateek Mittal, Princeton University, Princeton, NJ, USA
### Abstract
> The arms race between attacks and defenses for machine learning models has come to a forefront in recent years, in both the security community and the privacy community. However, one big limitation of previous research is that the security domain and the privacy domain have typically been considered separately. It is thus unclear whether the defense methods in one domain will have any unexpected impact on the other domain. In this paper, we take a step towards resolving this limitation by combining the two domains. In particular, we measure the success of membership inference attacks against six state-of-the-art defense methods that mitigate the risk of adversarial examples (i.e., evasion attacks). Membership inference attacks determine whether or not an individual data record has been part of a model's training set. The accuracy of such attacks reflects the information leakage of training algorithms about individual members of the training set. Adversarial defense methods against adversarial examples influence the model's decision boundaries such that model predictions remain unchanged for a small area around each input. However, this objective is optimized on training data. Thus, individual data records in the training set have a significant influence on robust models. This makes the models more vulnerable to inference attacks. To perform the membership inference attacks, we leverage the existing inference methods that exploit model predictions. We also propose two new inference methods that exploit structural properties of robust models on adversarially perturbed data. Our experimental evaluation demonstrates that compared with the natural training (undefended) approach, adversarial defense methods can indeed increase the target model's risk against membership inference attacks. When using adversarial defenses to train the robust models, the membership inference advantage increases by up to 4.5 times compared to the naturally undefended models. Beyond revealing the privacy risks of adversarial defenses, we further investigate the factors, such as model capacity, that influence the membership information leakage.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3354211](https://doi.org/10.1145/3319535.3354211)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3354211](https://dl.acm.org/doi/pdf/10.1145/3319535.3354211)
## Updatable Oblivious Key Management for Storage Systems.
### Authors
* Stanislaw Jarecki, University of California, Irvine, Irvine, CA, USA
* Hugo Krawczyk, Algorand Foundation, New York, NY, USA
* Jason Resch, Independent, Chicago, IL, USA
### Abstract
> We introduce Oblivious Key Management Systems (KMS) as a much more secure alternative to traditional wrapping-based KMS that form the backbone of key management in large-scale data storage deployments. The new system, that builds on Oblivious Pseudorandom Functions (OPRF), hides keys and object identifiers from the KMS, offers unconditional security for key transport, provides key verifiability, reduces storage, and more. Further, we show how to provide all these features in a distributed threshold implementation that enhances protection against server compromise. We extend this system with updatable encryption capability that supports key updates (known as key rotation) so that upon the periodic change of OPRF keys by the KMS server, a very efficient update procedure allows a client of the KMS service to non-interactively update all its encrypted data to be decryptable only by the new key. This enhances security with forward and post-compromise security, namely, security against future and past compromises, respectively, of the client's OPRF keys held by the KMS. Additionally, and in contrast to traditional KMS, our solution supports public key encryption and dispenses with any interaction with the KMS for data encryption (only decryption by the client requires such communication). Our solutions build on recent work on updatable encryption but with significant enhancements applicable to the remote KMS setting. In addition to the critical security improvements, our designs are highly efficient and ready for use in practice. We report on experimental implementation and performance.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3363196](https://doi.org/10.1145/3319535.3363196)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3363196](https://dl.acm.org/doi/pdf/10.1145/3319535.3363196)
## Network Hygiene, Incentives, and Regulation: Deployment of Source Address Validation in the Internet.
### Authors
* Matthew Luckie, University of Waikato, Hamilton, New Zealand
* Robert Beverly, Naval Postgraduate School, Monterey, CA, USA
* Ryan Koga, University of California, San Diego, La Jolla, CA, USA
* Ken Keys, University of California, San Diego, La Jolla, CA, USA
* Joshua A. Kroll, Naval Postgraduate School, Monterey, CA, USA
* k claffy, University of California, San Diego, La Jolla, CA, USA
### Abstract
> The Spoofer project has collected data on the deployment and characteristics of IP source address validation on the Internet since 2005. Data from the project comes from participants who install an active probing client that runs in the background. The client automatically runs tests both periodically and when it detects a new network attachment point. We analyze the rich dataset of Spoofer tests in multiple dimensions: across time, networks, autonomous systems, countries, and by Internet protocol version. In our data for the year ending August 2019, at least a quarter of tested ASes did not filter packets with spoofed source addresses leaving their networks. We show that routers performing Network Address Translation do not always filter spoofed packets, as 6.4% of IPv4/24 tested in the year ending August 2019 did not filter. Worse, at least two thirds of tested ASes did not filter packets entering their networks with source addresses claiming to be from within their network that arrived from outside their network. We explore several approaches to encouraging remediation and the challenges of evaluating their impact. While we have been able to remediate 352 IPv4/24, we have found an order of magnitude more IPv4/24 that remains unremediated, despite myriad remediation strategies, with 21% unremediated for more than six months. Our analysis provides the most complete and confident picture of the Internet's susceptibility to date of this long-standing vulnerability. Although there is no simple solution to address the remaining long-tail of unremediated networks, we conclude with a discussion of possible non-technical interventions, and demonstrate how the platform can support evaluation of the impact of such interventions over time.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3354232](https://doi.org/10.1145/3319535.3354232)
## Security Certification in Payment Card Industry: Testbeds, Measurements, and Recommendations.
### Authors
* Sazzadur Rahaman, Virginia Tech, Blacksburg, VA, USA
* Gang Wang, University of Illinois at Urbana-Champaign, Urbana, IL, USA
* Danfeng (Daphne) Yao, Virginia Tech, Blacksburg, VA, USA
### Abstract
> The massive payment card industry (PCI) involves various entities such as merchants, issuer banks, acquirer banks, and card brands. Ensuring security for all entities that process payment card information is a challenging task. The PCI Security Standards Council requires all entities to be compliant with the PCI Data Security Standard (DSS), which specifies a series of security requirements. However, little is known regarding how well PCI DSS is enforced in practice. In this paper, we take a measurement approach to systematically evaluate the PCI DSS certification process for e-commerce websites. We develop an e-commerce web application testbed, BuggyCart, which can flexibly add or remove 35 PCI DSS related vulnerabilities. Then we use the testbed to examine the capability and limitations of PCI scanners and the rigor of the certification process. We find that there is an alarming gap between the security standard and its real-world enforcement. None of the 6 PCI scanners we tested are fully compliant with the PCI scanning guidelines, issuing certificates to merchants that still have major vulnerabilities. To further examine the compliance status of real-world e-commerce websites, we build a new lightweight scanning tool named PciCheckerLite and scan 1,203 e-commerce websites across various business sectors. The results confirm that 86% of the websites have at least one PCI DSS violation that should have disqualified them as non-compliant. Our in-depth accuracy analysis also shows that PciCheckerLite's output is more precise than w3af. We reached out to the PCI Security Council to share our research results to improve the enforcement in practice.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3363195](https://doi.org/10.1145/3319535.3363195)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3363195](https://dl.acm.org/doi/pdf/10.1145/3319535.3363195)
## Matryoshka: Fuzzing Deeply Nested Branches.
### Authors
* Peng Chen, ByteDance AI Lab, Beijing, China
* Jianzhong Liu, ShanghaiTech University, Shanghai, China
* Hao Chen, University of California, Davis, Davis, CA, USA
### Abstract
> Greybox fuzzing has made impressive progress in recent years, evolving from heuristics-based random mutation to approaches for solving individual branch constraints. However, they have difficulty solving path constraints that involve deeply nested conditional statements, which are common in image and video decoders, network packet analyzers, and checksum tools. We propose an approach for addressing this problem. First, we identify all the control flow-dependent conditional statements of the target conditional statement. Next, we select the taint flow-dependent conditional statements. Finally, we use three strategies to find an input that satisfies all conditional statements simultaneously. We implemented this approach in a tool called Matryoshka and compared its effectiveness on 13 open source programs against other state-of-the-art fuzzers. Matryoshka has significantly higher cumulative line and branch coverage than AFL, QSYM, and Angora. We manually classified the crashes found by Matryoshka into 41 unique new bugs and obtained 12 CVEs. Our evaluation also uncovered the key technique contributing to Matryoshka's impressive performance: it collects only the nesting constraints that may cause the target conditional statement unreachable, which greatly simplifies the path constraints that it has to solve.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3363225](https://doi.org/10.1145/3319535.3363225)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3363225](https://dl.acm.org/doi/pdf/10.1145/3319535.3363225)
## HyperService: Interoperability and Programmability Across Heterogeneous Blockchains.
### Authors
* Zhuotao Liu, University of Illinois at Urbana-Champaign & HyperService Consortium, Champaign, IL, USA
* Yangxi Xiang, Beijing University of Posts and Telecommunications, Beijing, China
* Jian Shi, Case Western Reserve University, Cleveland, OH, USA
* Peng Gao, University of California, Berkeley, Berkeley, CA, USA
* Haoyu Wang, Beijing University of Posts and Telecommunications, Beijing, China
* Xusheng Xiao, Case Western Reserve University & HyperService Consortium, Cleveland, OH, USA
* Bihan Wen, Nanyang Technological University, Singapore, Singapore
* Yih-Chun Hu, University of Illinois at Urbana-Champaign & HyperService Consortium, Champaign, IL, USA
### Abstract
> Blockchain interoperability, which allows state transitions across different blockchain networks, is critical functionality to facilitate major blockchain adoption. Existing interoperability protocols mostly focus on atomic token exchanges between blockchains. However, as blockchains have been upgraded from passive distributed ledgers into programmable state machines (thanks to smart contracts), the scope of blockchain interoperability goes beyond just token exchanges. In this paper, we present HyperService, the first platform that delivers interoperability and programmability across heterogeneous blockchains. HyperService is powered by two innovative designs: (i) a developer-facing programming framework that allows developers to build cross-chain applications in a unified programming model; and (ii) a secure blockchain-facing cryptography protocol that provably realizes those applications on blockchains. We implement a prototype of HyperService in approximately 35,000 lines of code to demonstrate its practicality. Our experiments show that (i) HyperService imposes reasonable latency, in order of seconds, on the end-to-end execution of cross-chain applications; (ii) the HyperService platform is scalable to continuously incorporate new large-scale production blockchains.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3355503](https://doi.org/10.1145/3319535.3355503)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3355503](https://dl.acm.org/doi/pdf/10.1145/3319535.3355503)
## MatRiCT: Efficient, Scalable and Post-Quantum Blockchain Confidential Transactions Protocol.
### Authors
* Muhammed F. Esgin, Monash University & Data61, CSIRO, Clayton, Australia
* Raymond K. Zhao, Monash University, Clayton, Australia
* Ron Steinfeld, Monash University, Clayton, Australia
* Joseph K. Liu, Monash University, Clayton, Australia
* Dongxi Liu, Data61, CSIRO, Marsfield, Australia
### Abstract
> We introduce MatRiCT, an efficient RingCT protocol for blockchain confidential transactions, whose security is based on "post-quantum'' (module) lattice assumptions. The proof length of the protocol is around two orders of magnitude shorter than the existing post-quantum proposal, and scales efficiently to large anonymity sets, unlike the existing proposal. Further, we provide the first full implementation of a post-quantum RingCT, demonstrating the practicality of our scheme. In particular, a typical transaction can be generated in a fraction of a second and verified in about 23 ms on a standard PC. Moreover, we show how our scheme can be extended to provide auditability, where a user can select a particular authority from a set of authorities to reveal her identity. The user also has the ability to select no auditing and all these auditing options may co-exist in the same environment. The key ingredients, introduced in this work, of MatRiCT are 1) the shortest to date scalable ring signature from standard lattice assumptions with no Gaussian sampling required, 2) a novel balance zero-knowledge proof and 3) a novel extractable commitment scheme from (module) lattices. We believe these ingredients to be of independent interest for other privacy-preserving applications such as secure e-voting. Despite allowing 64-bit precision for transaction amounts, our new balance proof, and thus our protocol, does not require a range proof on a wide range (such as 32- or 64-bit ranges), which has been a major obstacle against efficient lattice-based solutions. Further, we provide new formal definitions for RingCT-like protocols, where the real-world blockchain setting is captured more closely. The definitions are applicable in a generic setting, and thus are believed to contribute to the development of future confidential transaction protocols in general (not only in the lattice setting).
### Links
- **URL:** [https://doi.org/10.1145/3319535.3354200](https://doi.org/10.1145/3319535.3354200)
## Prism: Deconstructing the Blockchain to Approach Physical Limits.
### Authors
* Vivek Bagaria, Stanford University, Palo Alto, CA, USA
* Sreeram Kannan, University of Washington at Seattle, Seattle, WA, USA
* David Tse, Stanford University, Palo Alto, CA, USA
* Giulia Fanti, Carnegie Mellon University, Pittsburgh, PA, USA
* Pramod Viswanath, University of Illinois at Urbana-Champaign, Champaign, IL, USA
### Abstract
> The concept of a blockchain was invented by Satoshi Nakamoto to maintain a distributed ledger. In addition to its security, important performance measures of a blockchain protocol are its transaction throughput and confirmation latency. In a decentralized setting, these measures are limited by two underlying physical network attributes: communication capacity and speed-of-light propagation delay. In this work we introduce Prism, a new proof-of-work blockchain protocol, which can achieve 1) security against up to 50% adversarial hashing power; 2) optimal throughput up to the capacity C of the network; 3) confirmation latency for honest transactions proportional to the propagation delay D, with confirmation error probability exponentially small in the bandwidth-delay product CD; 4) eventual total ordering of all transactions. Our approach to the design of this protocol is based on deconstructing Nakamoto's blockchain into its basic functionalities and systematically scaling up these functionalities to approach their physical limits.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3363213](https://doi.org/10.1145/3319535.3363213)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3363213](https://dl.acm.org/doi/pdf/10.1145/3319535.3363213)
## Securely Sampling Biased Coins with Applications to Differential Privacy.
### Authors
* Jeffrey Champion, Northeastern University, Boston, MA, USA
* abhi shelat, Northeastern University, Boston, MA, USA
* Jonathan Ullman, Northeastern University, Boston, MA, USA
### Abstract
> We design an efficient method for sampling a large batch of d independent coins with a given bias p ∈ [0,1]. The folklore secure computation method for doing so requires O(lambda + log d) communication and computation per coin to achieve total statistical difference 2-lambda. We present an exponential improvement over the folklore method that uses just O(log(lambda+log d)) gates per coin when sampling d coins with total statistical difference 2-lambda. We present a variant of our work that also concretely beats the folklore method for lambda ≥ 60 which are parameters that are often used in practice. Our new technique relies on using specially designed oblivious data structures to achieve biased coin samples that take an expected 2 random bits to sample. Using our new sampling technique, we present an implementation of the differentially private report-noisy-max mechanism (a more practical implementation of the celebrated exponential mechanism) as a secure multi-party computation. Our benchmarks show that one can run this mechanism on a domain of size d=212 in 6 seconds and up to d=219 in 14 minutes. As far as we know, this is the first complete distributed implementation of either of these mechanisms.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3354256](https://doi.org/10.1145/3319535.3354256)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3354256](https://dl.acm.org/doi/pdf/10.1145/3319535.3354256)
## Stormy: Statistics in Tor by Measuring Securely.
### Authors
* Ryan Wails, U.S. Naval Research Laboratory, Washington, DC, USA
* Aaron Johnson, U.S. Naval Research Laboratory, Washington, DC, USA
* Daniel Starin, Perspecta Labs, Silver Spring, MD, USA
* Arkady Yerukhimovich, George Washington University, Washington, DC, USA
* S. Dov Gordon, George Mason University, Fairfax, VA, USA
### Abstract
> Tor is a tool for Internet privacy with millions of daily users. The Tor system benefits in many ways from information gathered about the operation of its network. Measurements guide operators in diagnosing problems, direct the efforts of developers, educate users about the level of privacy they obtain, and inform policymakers about Tor's impact. However, data collection and reporting can degrade user privacy, contradicting Tor's goals. Existing approaches to measuring Tor have limited capabilities and security weaknesses. We present Stormy, a general-purpose, privacy-preserving measurement system that overcomes these limitations. Stormy uses secure multiparty computation (MPC) to compute any function of the observations made by Tor relays, while keeping those observations secret. Stormy makes use of existing efficient MPC protocols that are secure in the malicious model, and in addition it includes a novel input-sharing protocol that is secure, efficient, and fault tolerant. The protocol is non-interactive, which is consistent with how relays currently submit measurements, and it allows the relays to go offline after input submission, even while ensuring that an honest relay will not have its input excluded or modified. The input-sharing protocol is compatible with MPC protocols computing on authenticated values and may be of independent interest. We show how Stormy can be deployed in two realistic models: (1) run primarily by a small set of dedicated authorities, or (2) run decentralized across the relays in the Tor network. Stormy scales efficiently to Tor's thousands of relays, tolerates network churn, and provides security depending only on either Tor's existing trust assumption that at least one authority is honest (in the first model) or the existing assumption that a large fraction of relay bandwidth is honest (in the second model). We demonstrate how to use the system to compute two broadly-applicable statistics: the median of relay inputs and the cardinality of set-union across relays. We implement Stormy and experimentally evaluate system performance. When Stormy is run among authorities we can perform 151 median computations or 533 set-union cardinalities over 7,000 relay inputs in a single day. When run among the relays themselves, Stormy can perform 36 median computations or 134 set union cardinalities per day. Thus, both deployments enable non-trivial analytics to be securely computed in the Tor network.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3345650](https://doi.org/10.1145/3319535.3345650)
## A Formal Treatment of Deterministic Wallets.
### Authors
* Poulami Das, TU Darmstadt, Darmstadt, Germany
* Sebastian Faust, TU Darmstadt, Darmstadt, Germany
* Julian Loss, Ruhr-University Bochum, Bochum, Germany
### Abstract
> In cryptocurrencies such as Bitcoin or Ethereum, users control funds via secret keys. To transfer funds from one user to another, the owner of the money signs a new transaction that transfers the funds to the new recipient. This makes secret keys a highly attractive target for attacks, and has lead to prominent examples where millions of dollars worth in cryptocurrency have been stolen. To protect against these attacks, a widely used approach are so-called hot/cold wallets. In a hot/cold wallet system, the hot wallet is permanently connected to the network, while the cold wallet stores the secret key and is kept without network connection. In this work, we propose the first comprehensive security model for hot/cold wallets and develop wallet schemes that are provable secure within these models. At the technical level our main contribution is to provide a new provably secure ECDSA-based hot/cold wallet scheme that can be integrated into legacy cryptocurrencies such as Bitcoin. Our construction and security analysis uses a modular approach, where we show how to generically build secure hot/cold wallets from signature schemes that exhibit a rerandomizing property of the keys.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3354236](https://doi.org/10.1145/3319535.3354236)
## Analyzing Subgraph Statistics from Extended Local Views with Decentralized Differential Privacy.
### Authors
* Haipei Sun, Qatar Computing Research Institute, Doha, Qatar
* Xiaokui Xiao, National University of Singapore, Singapore, Singapore
* Issa Khalil, Qatar Computing Research Institute, Doha, Qatar
* Yin Yang, Hamad Bin Khalifa University, Doha, Qatar
* Zhan Qin, Zhejiang University, Zhejiang, China
* Hui (Wendy) Wang, Stevens Institute of Technology, Hoboken, NJ, USA
* Ting Yu, Qatar Computing Research Institute, Doha, Qatar
### Abstract
> Many real-world social networks are decentralized in nature, and the only way to analyze such a network is to collect local views of the social graph from individual participants. Since local views may contain sensitive information, it is often desirable to apply differential privacy in the data collection process, which provides strong and rigorous privacy guarantees. In many practical situations, the local view of a participant contains not only her own connections, but also those of her neighbors, which are private and sensitive for the neighbors, but not directly so for the participant herself. We call such information beyond direct connections an extended local view (ELV)</>, and study two fundamental problems related to ELVs: first, how do we correctly enforce differential privacy for all participants in the presence of ELVs? Second, how can the data collector utilize ELVs to obtain accurate estimates of global graph properties? This paper points out that when collecting ELVs, it is insufficient to apply a straightforward adaptation of local differential privacy (LDP)</>, a commonly used scheme in practice, to protect the privacy of all network participants. The main problem is that an adversarial data collector can accumulate private information on a specific victim from multiple neighbors of the victim; even though the data collected from each neighbor is perturbed under LDP, their aggregate can still violate the victim's privacy. To prevent this attack, we formulate a novel decentralized differential privacy (DDP)</> scheme, which requires that each participant consider not only her own privacy, but also that of her neighbors involved in her ELV. The stringent privacy requirement of DDP, however, makes it challenging to design an effective mechanism for data collection. Towards this goal, we design a novel multi-phase framework under DDP</> that enables an analyst to accurately estimate subgraph counts, an important property of social graphs. The main idea is that instead of collecting subgraph counts directly, which would require excessively noise, the analyst first asks individuals about their respective minimum noise scale, which is private information since it depends on the local graph structure, and, thus, must be performed under DDP. For some types of subgraphs, this process is applied recursively</>, i.e., the analyst asks about the necessary noise to be injected into the private information on the minimum local noise scale required to protect subgraph counts under DDP. As case studies, we instantiate the proposed framework for three common subgraph patterns: triangles, three-hop paths, and k</>-cliques. Extensive experiments using real data demonstrate that the proposed scheme leads to accurate estimates of global subgraph counts, whereas baseline solutions fail to obtain meaningful result utility.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3354253](https://doi.org/10.1145/3319535.3354253)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3354253](https://dl.acm.org/doi/pdf/10.1145/3319535.3354253)
## How to Accurately and Privately Identify Anomalies.
### Authors
* Hafiz Asif, Rutgers University, Newark, NJ, USA
* Periklis A. Papakonstantinou, Rutgers University, Newark, NJ, USA
* Jaideep Vaidya, Rutgers University, Newark, NJ, USA
### Abstract
> Identifying anomalies in data is central to the advancement of science, national security, and finance. However, privacy concerns restrict our ability to analyze data. Can we lift these restrictions and accurately identify anomalies without hurting the privacy of those who contribute their data? We address this question for the most practically relevant case, where a record is considered anomalous relative to other records. We make four contributions. First, we introduce the notion of sensitive privacy, which conceptualizes what it means to privately identify anomalies. Sensitive privacy generalizes the important concept of differential privacy and is amenable to analysis. Importantly, sensitive privacy admits algorithmic constructions that provide strong and practically meaningful privacy and utility guarantees. Second, we show that differential privacy is inherently incapable of accurately and privately identifying anomalies; in this sense, our generalization is necessary. Third, we provide a general compiler that takes as input a differentially private mechanism (which has bad utility for anomaly identification) and transforms it into a sensitively private one. This compiler, which is mostly of theoretical importance, is shown to output a mechanism whose utility greatly improves over the utility of the input mechanism. As our fourth contribution we propose mechanisms for a popular definition of anomaly ((β,r)-anomaly) that (i) are guaranteed to be sensitively private, (ii) come with provable utility guarantees, and (iii) are empirically shown to have an overwhelmingly accurate performance over a range of datasets and evaluation criteria.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3363209](https://doi.org/10.1145/3319535.3363209)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3363209](https://dl.acm.org/doi/pdf/10.1145/3319535.3363209)
## ZombieLoad: Cross-Privilege-Boundary Data Sampling.
### Authors
* Michael Schwarz, Graz University of Technology, Graz, Austria
* Moritz Lipp, Graz University of Technology, Graz, Austria
* Daniel Moghimi, Worcester Polytechnic Institute, Worcester, MA, USA
* Jo Van Bulck, imec-DistriNet, KU Leuven, Leuven, Belgium
* Julian Stecklina, Cyberus Technology, Dresden, Germany
* Thomas Prescher, Cyberus Technology, Dresden, Germany
* Daniel Gruss, Graz University of Technology, Graz, Austria
### Abstract
> In early 2018, Meltdown first showed how to read arbitrary kernel memory from user space by exploiting side-effects from transient instructions. While this attack has been mitigated through stronger isolation boundaries between user and kernel space, Meltdown inspired an entirely new class of fault-driven transient-execution attacks. Particularly, over the past year, Meltdown-type attacks have been extended to not only leak data from the L1 cache but also from various other microarchitectural structures, including the FPU register file and store buffer. In this paper, we present the ZombieLoad attack which uncovers a novel Meltdown-type effect in the processor's fill-buffer logic. Our analysis shows that faulting load instructions (i.e., loads that have to be re-issued) may transiently dereference unauthorized destinations previously brought into the fill buffer by the current or a sibling logical CPU. In contrast to concurrent attacks on the fill buffer, we are the first to report data leakage of recently loaded and stored stale values across logical cores even on Meltdown- and MDS-resistant processors. Hence, despite Intel's claims, we show that the hardware fixes in new CPUs are not sufficient. We demonstrate ZombieLoad's effectiveness in a multitude of practical attack scenarios across CPU privilege rings, OS processes, virtual machines, and SGX enclaves. We discuss both short and long-term mitigation approaches and arrive at the conclusion that disabling hyperthreading is the only possible workaround to prevent at least the most-powerful cross-hyperthread attack scenarios on current processors, as Intel's software fixes are incomplete.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3354252](https://doi.org/10.1145/3319535.3354252)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3354252](https://dl.acm.org/doi/pdf/10.1145/3319535.3354252)
## SMoTherSpectre: Exploiting Speculative Execution through Port Contention.
### Authors
* Atri Bhattacharyya, EPFL, Lausanne, Switzerland
* Alexandra Sandulescu, IBM Research - Zurich, Zurich, Switzerland
* Matthias Neugschwandtner, IBM Research - Zurich, Zurich, Switzerland
* Alessandro Sorniotti, IBM Research - Zurich, Zurich, Switzerland
* Babak Falsafi, EPFL, Lausanne, Switzerland
* Mathias Payer, EPFL, Lausanne, Switzerland
* Anil Kurmus, IBM Research - Zurich, Zurich, Switzerland
### Abstract
> Spectre, Meltdown, and related attacks have demonstrated that kernels, hypervisors, trusted execution environments, and browsers are prone to information disclosure through micro-architectural weaknesses. However, it remains unclear as to what extent other applications, in particular those that do not load attacker-provided code, may be impacted. It also remains unclear as to what extent these attacks are reliant on cache-based side channels. We introduce SMoTherSpectre, a speculative code-reuse attack that leverages port-contention in simultaneously multi-threaded processors (SMoTher) as a side channel to leak information from a victim process. SMoTher is a fine-grained side channel that detects contention based on a single victim instruction. To discover real-world gadgets, we describe a methodology and build a tool that locates SMoTher-gadgets in popular libraries. In an evaluation on glibc, we found hundreds of gadgets that can be used to leak information. Finally, we demonstrate proof-of-concept attacks against the OpenSSH server, creating oracles for determining four host key bits, and against an application performing encryption using the OpenSSL library, creating an oracle which can differentiate a bit of the plaintext through gadgets in libcrypto and glibc.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3363194](https://doi.org/10.1145/3319535.3363194)
## (Un)informed Consent: Studying GDPR Consent Notices in the Field.
### Authors
* Christine Utz, Ruhr-Universität Bochum, Bochum, Germany
* Martin Degeling, Ruhr-Universität Bochum, Bochum, Germany
* Sascha Fahl, Ruhr-Universität Bochum, Bochum, Germany
* Florian Schaub, University of Michigan, Ann Arbor, MI, USA
* Thorsten Holz, Ruhr-Universität Bochum, Bochum, Germany
### Abstract
> Since the adoption of the General Data Protection Regulation (GDPR) in May 2018 more than 60 % of popular websites in Europe display cookie consent notices to their visitors. This has quickly led to users becoming fatigued with privacy notifications and contributed to the rise of both browser extensions that block these banners and demands for a solution that bundles consent across multiple websites or in the browser. In this work, we identify common properties of the graphical user interface of consent notices and conduct three experiments with more than 80,000 unique users on a German website to investigate the influence of notice position, type of choice, and content framing on consent. We find that users are more likely to interact with a notice shown in the lower (left) part of the screen. Given a binary choice, more users are willing to accept tracking compared to mechanisms that require them to allow cookie use for each category or company individually. We also show that the wide-spread practice of nudging has a large effect on the choices users make. Our experiments show that seemingly small implementation decisions can substantially impact whether and how people interact with consent notices. Our findings demonstrate the importance for regulation to not just require consent, but also provide clear requirements or guidance for how this consent has to be obtained in order to ensure that users can make free and informed choices.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3354212](https://doi.org/10.1145/3319535.3354212)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3354212](https://dl.acm.org/doi/pdf/10.1145/3319535.3354212)
## An In-depth Look Into SDN Topology Discovery Mechanisms: Novel Attacks and Practical Countermeasures.
### Authors
* Eduard Marin, University of Birmingham (UK) and imec-COSIC, KU Leuven (Belgium), Birmingham, United Kingdom
* Nicola Bucciol, University of Padua, Padua, Italy
* Mauro Conti, University of Padua, Padua, Italy
### Abstract
> Software-Defined Networking (SDN) is a novel network approach that has revolutionised existent network architectures by decoupling the control plane from the data plane. Researchers have shown that SDN networks are highly vulnerable to security attacks. For instance, adversaries can tamper with the controller's network topology view to hijack the hosts' location or create fake inter-switch links. These attacks can be launched for various purposes, ranging from impersonating hosts to bypassing middleboxes or intercepting network traffic. Several countermeasures have been proposed to mitigate topology attacks but to date there has been no comprehensive analysis of the level of security they offer. A critical analysis is thus an important step towards better understanding the possible limitations of the existing solutions and building stronger defences against topology attacks. In this paper, we evaluate the actual security of the existing mechanisms for network topology discovery in SDN. Our analysis reveals 6 vulnerabilities in the state-of-the-art countermeasures against topology attacks: TopoGuard,</> <>TopoGuard+,</>SPV</> and SecureBinder.</> We show that these vulnerabilities can be exploited in practice to manipulate the network topology view at the controller. Furthermore, we present 2 novel topology attacks, called Topology Freezing</> and Reverse Loop,</> that exploit vulnerabilities in the widely used Floodlight controller. We responsibly disclosed these vulnerabilities to Floodlight. While we show that it is difficult to fully eradicate these attacks, we propose fixes to mitigate them. In response to our findings, we conclude the paper by detailing practical ways of further improving the existing countermeasures.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3354194](https://doi.org/10.1145/3319535.3354194)
## Proof-Carrying Network Code.
### Authors
* Christian Skalka, University of Vermont, Burlington, VT, USA
* John Ring, University of Vermont, Burlington, VT, USA
* David Darais, University of Vermont, Burlington, VT, USA
* Minseok Kwon, Rochester Institute of Technology, Rochester, NY, USA
* Sahil Gupta, Rochester Institute of Technology, Rochester, NY, USA
* Kyle Diller, Rochester Institute of Technology, Rochester, NY, USA
* Steffen Smolka, Cornell University, Ithaca, NY, USA
* Nate Foster, Cornell University, Ithaca, NY, USA
### Abstract
> Computer networks often serve as the first line of defense against malicious attacks. Although there are a growing number of tools for defining and enforcing security policies in software-defined networks (SDNs), most assume a single point of control and are unable to handle the challenges that arise in networks with multiple administrative domains. For example, consumers may want want to allow their home IoT networks to be configured by device vendors, which raises security and privacy concerns. In this paper we propose a framework called Proof-Carrying Network Code (PCNC) for specifying and enforcing security in SDNs with interacting administrative domains. Like Proof-Carrying Authorization (PCA), PCNC provides methods for managing authorization domains, and like Proof-Carrying Code (PCC), PCNC provides methods for enforcing behavioral properties of network programs. We develop theoretical foundations for PCNC and evaluate it in simulated and real network settings, including a case study that considers security in IoT networks for home health monitoring.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3363214](https://doi.org/10.1145/3319535.3363214)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3363214](https://dl.acm.org/doi/pdf/10.1145/3319535.3363214)
## DeMiCPU: Device Fingerprinting with Magnetic Signals Radiated by CPU.
### Authors
* Yushi Cheng, Zhejiang University, Hangzhou, China
* Xiaoyu Ji, Zhejiang University, Hangzhou, China
* Juchuan Zhang, Zhejiang University, Hangzhou, China
* Wenyuan Xu, Zhejiang University, Hangzhou, China
* Yi-Chao Chen, University of Texas at Austin, Austin, TX, USA
### Abstract
> With the widespread use of smart devices, device authentication has received much attention. One popular method for device authentication is to utilize internally-measured device fingerprints, such as device ID, software or hardware-based characteristics. In this paper, we propose DeMiCPU, a stimulation-response-based device fingerprinting technique that relies on externally-measured information, i.e., magnetic induction (MI) signals emitted from the CPU module that consists of the CPU chip and its affiliated power supply circuits. The key insight of DeMiCPU is that hardware discrepancies essentially exist among CPU modules and thus the corresponding MI signals make promising device fingerprints, which are difficult to be modified or mimicked. We design a stimulation and a discrepancy extraction scheme and evaluate them with 90 mobile devices, including 70 laptops (among which 30 are of totally identical CPU and operating system) and 20 smartphones. The results show that DeMiCPU can achieve 99.1% precision and recall on average, and 98.6% precision and recall for the 30 identical devices, with a fingerprinting time of 0.6 s. In addition, the performance can be further improved to 99.9% with multi-round fingerprinting.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3339810](https://doi.org/10.1145/3319535.3339810)
## Multisketches: Practical Secure Sketches Using Off-the-Shelf Biometric Matching Algorithms.
### Authors
* Rahul Chatterjee, University of Wisconsin--Madison, Madison, WI, USA
* M. Sadegh Riazi, University of California San Diego, San Diego, CA, USA
* Tanmoy Chowdhury, George Mason University, Washington DC, DC, USA
* Emanuela Marasco, George Mason University, Washington DC, DC, USA
* Farinaz Koushanfar, University of California San Diego, San Diego, CA, USA
* Ari Juels, Cornell Tech, New York, NY, USA
### Abstract
> Biometric authentication is increasingly being used for large scale human authentication and identification, creating the risk of leaking the biometric secrets of millions of users in the case of database compromise. Powerful "fuzzy" cryptographic techniques for biometric template protection, such as secure sketches, could help in principle, but go unused in practice. This is because they would require new biometric matching algorithms with potentially much diminished accuracy. We introduce a new primitive called a multisketch that generalizes secure sketches. Multisketches can work with existing biometric matching algorithms to generate strong cryptographic keys from biometric data reliably. A multisketch works on a biometric database containing multiple biometrics --- e.g., multiple fingerprints --- of a moderately large population of users (say, thousands). It conceals the correspondence between users and their biometric templates, preventing an attacker from learning the biometric data of a user in the advent of a breach, but enabling derivation of user-specific secret keys upon successful user authentication. We design a multisketch over tenprints --- fingerprints of ten fingers --- called TenSketch. We report on a prototype implementation of TenSketch, showing its feasibility in practice. We explore several possible attacks against TenSketch database and show, via simulations with real tenprint datasets, that an attacker must perform a large amount of computation to learn any meaningful information from a stolen TenSketch database.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3363208](https://doi.org/10.1145/3319535.3363208)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3363208](https://dl.acm.org/doi/pdf/10.1145/3319535.3363208)
## 28 Blinks Later: Tackling Practical Challenges of Eye Movement Biometrics.
### Authors
* Simon Eberz, University of Oxford, Oxford, United Kingdom
* Giulio Lovisotto, University of Oxford, Oxford, United Kingdom
* Kasper B. Rasmussen, University of Oxford, Oxford, United Kingdom
* Vincent Lenders, armasuisse, Bern, Switzerland
* Ivan Martinovic, University of Oxford, Oxford, United Kingdom
### Abstract
> In this work we address three overlooked practical challenges of continuous authentication systems based on eye movement biometrics: (i) changes in lighting conditions, (ii) task dependent features and the (iii) need for an accurate calibration phase. We collect eye movement data from 22 participants. To measure the effect of the three challenges, we collect data while varying the experimental conditions: users perform four different tasks, lighting conditions change over the course of the session and we collect data related to both accurate (user-specific) and inaccurate (generic) calibrations. To address changing lighting conditions, we identify the two main sources of light, i.e., screen brightness and ambient light, and we propose a pupil diameter correction mechanism based on these. We find that such mechanism can accurately adjust for the pupil shrinking or expanding in relation to the varying amount of light reaching the eye. To account for inaccurate calibrations, we augment the previously known feature set with new features based on binocular tracking, where the left and the right eye are tracked separately. We show that these features can be extremely distinctive even when using a generic calibration. We further apply a cross-task mapping function based on population data which systematically accounts for the dependency of features to tasks (e.g., reading a text and browsing a website lead to different eye movement dynamics). Using these enhancements, even while relaxing assumptions about the experimental conditions, we show that our system achieves significantly lower error rates compared to previous work. For intra-task authentication, without user-specific calibration and in variable screen brightness and ambient lighting, we achieve an equal error rate of 3.93% with only two minutes of training data. For the same setup but with constant screen brightness (e.g., as for a reading task) we can achieve equal error rates as low as of 1.88%.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3354233](https://doi.org/10.1145/3319535.3354233)
## Velody: Nonlinear Vibration Challenge-Response for Resilient User Authentication.
### Authors
* Jingjie Li, University of Wisconsin-Madison, Madison, WI, USA
* Kassem Fawaz, University of Wisconsin-Madison, Madison, WI, USA
* Younghyun Kim, University of Wisconsin-Madison, Madison, WI, USA
### Abstract
> Biometrics have been widely adopted for enhancing user authentication, benefiting usability by exploiting pervasive and collectible unique characteristics from physiological or behavioral traits of human. However, successful attacks on "static" biometrics such as fingerprints have been reported where an adversary acquires users' biometrics stealthily and compromises non-resilient biometrics. To mitigate the vulnerabilities of static biometrics, we leverage the unique and nonlinear hand-surface vibration response and design a system called Velody to defend against various attacks including replay and synthesis. The Velody system relies on two major properties in hand-surface vibration responses: uniqueness, contributed by physiological characteristics of human hands, and nonlinearity, whose complexity prevents attackers from predicting the response to an unseen challenge. Velody employs a challenge-response protocol. By changing the vibration challenge, the system elicits input-dependent nonlinear "symptoms" and unique spectrotemporal features in the vibration response, stopping both replay and synthesis attacks. Also, a large number of disposable challenge-response pairs can be collected during enrollment passively for daily authentication sessions. We build a prototype of Velody with an off-the-shelf vibration speaker and accelerometers to verify its usability and security through a comprehensive user experiment. Our results show that Velody demonstrates both strong security and long-term consistency with a low equal error rate (EER) of 5.8% against impersonation attack while correctly rejecting all other attacks including replay and synthesis attacks using a very short vibration challenge.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3354242](https://doi.org/10.1145/3319535.3354242)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3354242](https://dl.acm.org/doi/pdf/10.1145/3319535.3354242)
## The Catcher in the Field: A Fieldprint based Spoofing Detection for Text-Independent Speaker Verification.
### Authors
* Chen Yan, Zhejiang University, Hangzhou, China
* Yan Long, Zhejiang University, Hangzhou, China
* Xiaoyu Ji, Zhejiang University, Hangzhou, China
* Wenyuan Xu, Zhejiang University, Hangzhou, China
### Abstract
> Verifying the identity of voice inputs is important as voices are increasingly used for sensitive operations. Traditional methods focus on differentiating individuals via the spectrographic features of voices (e.g., voiceprint), yet cannot cope with spoofing attacks, whereby a malicious attacker synthesizes the voice with almost the same voiceprint of a victim or simply replays it. This paper proposes CaField, a text-independent speaker verification method to detect loudspeaker-based voice spoofing attacks with the goal of achieving two seemingly conflicting requirements: usability and security. The key insight of CaField is to construct "fieldprint'' with the acoustic biometrics embedded in sound fields, i.e., a physical field of acoustic energy created as the sound propagates over the air, as analogous to "voiceprint''. We find that fieldprints can be distinctive between speakers (either humans or loudspeakers), and thus we may detect the speakers being used for spoofing attacks from the authentic users. Our evaluation on a dataset of 20 people and 8 loudspeakers shows that by relying on two on-board microphones to sample sound fields while users talk to the smartphones, CaField achieves a detection accuracy of 99.16% and an equal error rate (EER) of 0.85% across multiple sessions and various voice inputs. CaField supports low audio sample rates at 8~kHz and is robust to various factors including phone displacement, user posture, recording environment, etc.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3354248](https://doi.org/10.1145/3319535.3354248)
## Quantitative Verification of Neural Networks and Its Security Applications.
### Authors
* Teodora Baluta, National University of Singapore, Singapore, Singapore
* Shiqi Shen, National University of Singapore, Singapore, Singapore
* Shweta Shinde, University of California, Berkeley, Berkeley, CA, USA
* Kuldeep S. Meel, National University of Singapore, Singapore, Singapore
* Prateek Saxena, National University of Singapore, Singapore, Singapore
### Abstract
> Neural networks are increasingly employed in safety-critical domains. This has prompted interest in verifying or certifying logically encoded properties of neural networks. Prior work has largely focused on checking existential properties, wherein the goal is to check whether there exists any input that violates a given property of interest. However, neural network training is a stochastic process, and many questions arising in their analysis require probabilistic and quantitative reasoning, i.e., estimating how many inputs satisfy a given property. To this end, our paper proposes a novel and principled framework to quantitative verification of logical properties specified over neural networks. Our framework is the first to provide PAC-style soundness guarantees, in that its quantitative estimates are within a controllable and bounded error from the true count. We instantiate our algorithmic framework by building a prototype tool called NPAQ that enables checking rich properties over binarized neural networks. We show how emerging security analyses can utilize our framework in 3 applications: quantifying robustness to adversarial inputs, efficacy of trojan attacks, and fairness/bias of given neural networks.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3354245](https://doi.org/10.1145/3319535.3354245)
## ABS: Scanning Neural Networks for Back-doors by Artificial Brain Stimulation.
### Authors
* Yingqi Liu, Purdue University, West Lafayette, IN, USA
* Wen-Chuan Lee, Purdue University, West Lafayette, IN, USA
* Guanhong Tao, Purdue University, West Lafayette, IN, USA
* Shiqing Ma, Rutgers University, New Brunswick, NJ, USA
* Yousra Aafer, Purdue University, West Lafayette, IN, USA
* Xiangyu Zhang, Purdue University, West Lafayette, IN, USA
### Abstract
> This paper presents a technique to scan neural network based AI models to determine if they are trojaned. Pre-trained AI models may contain back-doors that are injected through training or by transforming inner neuron weights. These trojaned models operate normally when regular inputs are provided, and mis-classify to a specific output label when the input is stamped with some special pattern called trojan trigger. We develop a novel technique that analyzes inner neuron behaviors by determining how output activations change when we introduce different levels of stimulation to a neuron. The neurons that substantially elevate the activation of a particular output label regardless of the provided input is considered potentially compromised. Trojan trigger is then reverse-engineered through an optimization procedure using the stimulation analysis results, to confirm that a neuron is truly compromised. We evaluate our system ABS on 177 trojaned models that are trojaned with various attack methods that target both the input space and the feature space, and have various trojan trigger sizes and shapes, together with 144 benign models that are trained with different data and initial weight values. These models belong to 7 different model structures and 6 different datasets, including some complex ones such as ImageNet, VGG-Face and ResNet110. Our results show that ABS is highly effective, can achieve over 90% detection rate for most cases (and many 100%), when only one input sample is provided for each output label. It substantially out-performs the state-of-the-art technique Neural Cleanse that requires a lot of input samples and small trojan triggers to achieve good performance.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3363216](https://doi.org/10.1145/3319535.3363216)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3363216](https://dl.acm.org/doi/pdf/10.1145/3319535.3363216)
## Lifelong Anomaly Detection Through Unlearning.
### Authors
* Min Du, University of California, Berkeley, Berkeley, CA, USA
* Zhi Chen, University of California, Berkeley, Berkeley, CA, USA
* Chang Liu, Citadel Securities, Chicago, IL, USA
* Rajvardhan Oak, University of California, Berkeley, Berkeley, CA, USA
* Dawn Song, University of California, Berkeley, Berkeley, CA, USA
### Abstract
> Anomaly detection is essential towards ensuring system security and reliability. Powered by constantly generated system data, deep learning has been found both effective and flexible to use, with its ability to extract patterns without much domain knowledge. Existing anomaly detection research focuses on a scenario referred to as zero-positive, which means that the detection model is only trained for normal (i.e., negative) data. In a real application scenario, there may be additional manually inspected positive data provided after the system is deployed. We refer to this scenario as lifelong anomaly detection. However, we find that existing approaches are not easy to adopt such new knowledge to improve system performance. In this work, we are the first to explore the lifelong anomaly detection problem, and propose novel approaches to handle corresponding challenges. In particular, we propose a framework called unlearning, which can effectively correct the model when a false negative (or a false positive) is labeled. To this aim, we develop several novel techniques to tackle two challenges referred to as exploding loss and catastrophic forgetting. In addition, we abstract a theoretical framework based on generative models. Under this framework, our unlearning approach can be presented in a generic way to be applied to most zero-positive deep learning-based anomaly detection algorithms to turn them into corresponding lifelong anomaly detection solutions. We evaluate our approach using two state-of-the-art zero-positive deep learning anomaly detection architectures and three real-world tasks. The results show that the proposed approach is able to significantly reduce the number of false positives and false negatives through unlearning.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3363226](https://doi.org/10.1145/3319535.3363226)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3363226](https://dl.acm.org/doi/pdf/10.1145/3319535.3363226)
## Transparency Logs via Append-Only Authenticated Dictionaries.
### Authors
* Alin Tomescu, Massachusetts Institute of Technology, Cambridge, MA, USA
* Vivek Bhupatiraju, Lexington High School & MIT PRIMES, Lexington, MA, USA
* Dimitrios Papadopoulos, Hong Kong University of Science and Technology, Hong Kong, Hong Kong
* Charalampos Papamanthou, University of Maryland, College Park, DC, USA
* Nikos Triandopoulos, Stevens Institute of Technology, Hoboken, NJ, USA
* Srinivas Devadas, Massachusetts Institute of Technology, Cambridge, MA, USA
### Abstract
> Transparency logs allow users to audit a potentially malicious service, paving the way towards a more accountable Internet. For example, Certificate Transparency (CT) enables domain owners to audit Certificate Authorities (CAs) and detect impersonation attacks. Yet, to achieve their full potential, transparency logs must be bandwidth-efficient when queried by users. Specifically, everyone should be able to efficientlylook up log entries by their keyand efficiently verify that the log remainsappend-only. Unfortunately, without additional trust assumptions, current transparency logs cannot provide both small-sizedlookup proofs and small-sizedappend-only proofs. In fact, one of the proofs always requires bandwidth linear in the size of the log, making it expensive for everyone to query the log. In this paper, we address this gap with a new primitive called anappend-only authenticated dictionary (AAD). Our construction is the first to achieve (poly)logarithmic size for both proof types and helps reduce bandwidth consumption in transparency logs. This comes at the cost of increased append times and high memory usage, both of which remain to be improved to make practical deployment possible.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3345652](https://doi.org/10.1145/3319535.3345652)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3345652](https://dl.acm.org/doi/pdf/10.1145/3319535.3345652)
## pFilter: Retrofitting Legacy Applications for Data Privacy.
### Authors
* Manish Shukla, TCS Research Lab, Pune, India
* Kumar Vidhani, TCS Research Lab, Pune, India
* Gangadhara Sirigireddy, TCS Research Lab, Pune, India
* Vijayanand Banahatti, TCS Research Lab, Pune, India
* Sachin Lodha, TCS Research Lab, Pune, India
### Abstract
> Enterprise needs to process customer data for providing tailored services to them, however, the data often includes sensitive and personally identifiable information. This leads to a difficult situation wherein the enterprise has to balance the necessity to process the sensitive data with the requirement to safeguard its privacy. The problem is more prominent in legacy applications with almost no privacy controls in place. A well-studied technique to retrofit legacy application is to mask sensitive content before it is rendered on the screen using path based methods. In this work we show the gap in the existing state of art and describe a dynamic system which utilizes a context to perform locality based searching and masking of sensitive content.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3363259](https://doi.org/10.1145/3319535.3363259)
## ÆGIS: Smart Shielding of Smart Contracts.
### Authors
* Christof Ferreira Torres, University of Luxembourg, Luxembourg, Luxembourg
* Mathis Baden, University of Luxembourg, Luxembourg, Luxembourg
* Robert Norvill, University of Luxembourg, Luxembourg, Luxembourg
* Hugo Jonker, Open University of the Netherlands & Radbound University, Heerlen, Netherlands
### Abstract
> In recent years, smart contracts have suffered major exploits, losing millions of dollars. Unlike traditional programs, smart contracts cannot be updated once deployed. Though various tools were proposed to detect vulnerable smart contracts, they all fail to protect contracts that have already been deployed on the blockchain. Moreover, they focus on vulnerabilities, but do not address scams (e.g., honeypots). In this work, we introduce Æ GIS, a tool that shields smart contracts and users on the blockchain from being exploited. To this end, ÆGIS reverts transactions in real-time based on pattern matching. These patterns encode the detection of malicious transactions that trigger exploits or scams. New patterns are voted upon and stored via a smart contract, thus leveraging the benefits of tamper-resistance and transparency provided by blockchain. By allowing its protection to be updated, the smart contract acts as a smart shield.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3363263](https://doi.org/10.1145/3319535.3363263)
## Nickel to Lego: Using Foolgle</> to Create Adversarial Examples to Fool Google Cloud Speech-to-Text API.
### Authors
* Joon Kuy Han, The State University of New York, Incheon, Republic of Korea
* Hyoungshick Kim, Sungkyunkwan University & CSIRO Data61, Suwon, Republic of Korea
* Simon S. Woo, Sungkyunkwan University, Suwon, Republic of Korea
### Abstract
> Many companies offer automatic speech recognition or Speech-to-Text APIs for use in diverse applications. However, audio classification algorithms trained with deep neural networks (DNNs) can sometimes misclassify adversarial examples, posing a significant threat to critical applications. In this paper, we present a novel way to create adversarial audio examples using a genetic algorithm. Our algorithm creates adversarial examples by iteratively adding perturbations to the original audio signal. Unlike most white-box adversarial example generations, our approach does not require knowledge about the target DNN's model and parameters (black-box) and heavy computational power of GPU resources. To show the feasibility of the proposed idea, we implement a tool called, Foolgle, using a genetic algorithm that performs untargeted attacks to create adversarial audio examples and evaluate those with the state-of-the-art Google Cloud Speech-to-Text API. Our preliminary experiment results show that Foolgle deceives the API with a success probability of 86%.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3363264](https://doi.org/10.1145/3319535.3363264)
## Poster: Using Generative Adversarial Networks for Secure Pseudorandom Number Generation.
### Authors
* Rajvardhan Oak, University of California, Berkeley, Berkeley, CA, USA
* Chaitanya Rahalkar, University of Pune, Pune, India
* Dhaval Gujar, University of Pune, Pune, India
### Abstract
> Generation of secure random numbers has always been a challenging issue in design and development of secure computer systems. Random numbers have important applications in the field of cryptography where the security of the scheme relies upon the random nature of the keys. It is not practically possible to achieve true randomness in a machine, and hence we rely upon Pseudo Random Number Generators (PRNGs) to produce near-true randomness. PRNGs use a mathematical function that relies upon a seed (a preset value required by the function to generate values) and it generates numbers which satisfy certain tests for randomness and appear to be random for a user having no knowledge of the generator function. These pseudorandom functions have their drawbacks due to them being derived from a mathematical function. To generate random numbers that can never be predicted by any observer, requires a causally non-deterministic process where events are not fully determined by prior states. Due to the physical impossibility of acquiring sufficient information to predict the outcome of such an event, its outcomes are guaranteed to be random to all. Various methods to generate pseudorandomness have been employed over the years which includes using mathematical functions, keyboard typing latency of the user, network latency, memory latency etc. as sources of generating random numbers. In this work, we propose a new way of generating pseudorandom numbers using generative adversarial networks. We demonstrate that a GAN can act as a Cryptographically Secure Pseudorandom Number Generator (CPRNG) passing 97% of National Institute of Standards and Technology (NIST) tests.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3363265](https://doi.org/10.1145/3319535.3363265)
## Poster: Proofs of Retrievability with Low Server Storage.
### Authors
* Michael Hanling, United States Naval Academy, Annapolis, MD, USA
* Gaspard Anthoine, Laboratoire Jean Kuntzmann, Grenoble, France
* Jean-Guillaume Dumas, Laboratoire Jean Kuntzmann, Grenoble, France
* Aude Maignan, Laboratoire Jean Kuntzmann, Grenoble, France
* Clément Pernet, Laboratoire Jean Kuntzmann, Grenoble, France
* Daniel S. Roche, United States Naval Academy, Annapolis, MD, USA
### Abstract
> Proof of Retrievability (PoR) and Provable Data Possession (PDP) schemes have been proposed to ensure the integrity of stored data on untrusted servers. A successful PoR audit ensures, with high probability, that every piece of stored data is recoverable by the server. Most PoR schemes proposed have focused on bandwidth and computation cost, but in some deployment scenarios the size of remote storage can be the most expensive factor. We propose a simple PoR scheme which is a variant on some existing PDP work. Compared to existing audit routines, the server computation cost and bandwidth are higher, but the server storage cost is minimal. Our preliminary work indicates that deploying this scheme may be less costly in commercial cloud settings, depending on the cost structure and frequency of audits.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3363266](https://doi.org/10.1145/3319535.3363266)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3363266](https://dl.acm.org/doi/pdf/10.1145/3319535.3363266)
## Data Quality for Security Challenges: Case Studies of Phishing, Malware and Intrusion Detection Datasets.
### Authors
* Rakesh M. Verma, University of Houston, Houston, TX, USA
* Victor Zeng, University of Houston, Houston, TX, USA
* Houtan Faridi, University of Houston, Houston, TX, USA
### Abstract
> Techniques from data science are increasingly being applied by researchers to security challenges. However, challenges unique to the security domain necessitate painstaking care for the models to be valid and robust. In this paper, we explain key dimensions of data quality relevant for security, illustrate them with several popular datasets for phishing, intrusion detection and malware, indicate operational methods for assuring data quality and seek to inspire the audience to generate high quality datasets for security challenges.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3363267](https://doi.org/10.1145/3319535.3363267)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3363267](https://dl.acm.org/doi/pdf/10.1145/3319535.3363267)
## Poster: Finding JavaScript Name Conflicts on the Web.
### Authors
* Mingxue Zhang, Chinese University of Hong Kong, Sha Tin, Hong Kong
* Wei Meng, Chinese University of Hong Kong, Sha Tin, Hong Kong
* Yi Wang, Southern University of Science and Technology, Shenzhen, China
### Abstract
> Including JavaScript code from many different hosts is a popular practice in developing web applications. For example, to include a social plugin like the Facebook Like button, a web developer needs to only include a script from facebook.net in her/his web page. However, in a web browser, all the identifiers (i.e., variable names and function names) in scripts loaded in the same frame share a single global namespace. Therefore, a script can overwrite any of the global variables and/or global functions defined in another script, causing unexpected behavior. In this work, we develop a browser-based dynamic analysis framework, that monitors and records any writes to JavaScript global variables and global functions. Our tool is able to cover all the code executed in the run time. We detected 778 conflicts across the Alexa top 1K websites. Our results show that global name conflicts can indeed expose web applications to security risks.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3363268](https://doi.org/10.1145/3319535.3363268)
## Poster: Understanding User's Decision to Interact with Potential Phishing Posts on Facebook using a Vignette Study.
### Authors
* Sovantharith Seng, Rochester Institute of Technology, Rochester, NY, USA
* Huzeyfe Kocabas, Utah State University, Logan, UT, USA
* Mahdi Nasrullah Al-Ameen, Rochester Institute of Technology, Logan, UT, USA
* Matthew Wright, Rochester Institute of Technology, Rochester, NY, USA
### Abstract
> Facebook remains the largest social media platform on the Internet with over one billion active monthly users. A variety of personal and sensitive data is shared on the platform, which makes it a prime target for attackers. Increasingly, we see phishing attacks that take advantage of users' lack of security knowledge, deceiving victims by using fake or compromised accounts to share malicious posts. These attacks may slip undetected by the Facebook defense system, exposing users to potentially be phished or have their devices infected with drive-by downloads and malware. Only a few studies have been conducted to date to understand how users interact with attacks like this in Facebook. In our prior work, we conducted a study to address this challenge using a simulated interface and think-aloud protocol. In this study, we aim to make further progress in understanding the impact of different factors on users' clicking decision in social media through a vignette study that encourages participants to think about realistic scenarios that they might face.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3363270](https://doi.org/10.1145/3319535.3363270)
## Poster: Adversarial Examples for Hate Speech Classifiers.
### Authors
* Rajvardhan Oak, University of California, Berkeley, Berkeley, CA, USA
### Abstract
> With the advent of the Internet, social media platforms have become an increasingly popular medium of communication for people. Platforms like Twitter and Quora allow people to express their opinions on a large scale. These platforms are, however, plagued by the problem of hate speech and toxic content. Such content is generally sexist, homophobic or racist. Automatic text classification can filter out toxic content so some extent. In this paper, we discuss the adversarial attacks on hate speech classifiers. We demonstrate that by changing the text slightly, a classifier can be fooled to misclassifying a toxic comment as acceptable. We attack hate speech classifiers with known attacks as well as introduce four new attacks. We find that our method can degrade the performance of a Random Forest classifier by 20%. We hope that our work sheds light on the vulnerabilities of text classifiers, and opens doors for further research on this topic.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3363271](https://doi.org/10.1145/3319535.3363271)
## Poster: Evaluating Security Metrics for Website Fingerprinting.
### Authors
* Nate Mathews, Rochester Institute of Technology, Rochester, NY, USA
* Mohammad Saidur Rahman, Rochester Institute of Technology, Rochester, NY, USA
* Matthew Wright, Rochester Institute of Technology, Rochester, NY, USA
### Abstract
> The website fingerprinting attack allows a low-resource attacker to compromise the privacy guarantees provided by privacy enhancing tools such as Tor. In response, researchers have proposed defenses aimed at confusing the classification tools used by attackers. As new, more powerful attacks are frequently developed, raw attack accuracy has proven inadequate as the sole metric used to evaluate these defenses. In response, two security metrics have been proposed that allow for evaluating defenses based on hand-crafted features often used in attacks. Recent state-of-the-art attacks, however, use deep learning models capable of automatically learning abstract feature representations, and thus the proposed metrics fall short once again. In this study we examine two security metrics and (1) show how these methods can be extended to evaluate deep learning-based website fingerprinting attacks, and (2) compare the security metrics and identify their shortcomings.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3363272](https://doi.org/10.1145/3319535.3363272)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3363272](https://dl.acm.org/doi/pdf/10.1145/3319535.3363272)
## Poster: Video Fingerprinting in Tor.
### Authors
* Mohammad Saidur Rahman, Rochester Institute of Technology, Rochester, NY, USA
* Nate Matthews, Rochester Institute of Technology, Rochester, NY, USA
* Matthew Wright, Rochester Institute of Technology, Rochester, NY, USA
### Abstract
> Over 8 million users rely on the Tor network each day to protect their anonymity online. Unfortunately, Tor has been shown to be vulnerable to the website fingerprinting attack, which allows an attacker to deduce the website a user is visiting based on patterns in their traffic. The state-of-the-art attacks leverage deep learning to achieve high classification accuracy using raw packet information. Work thus far, however, has examined only one type of media delivered over the Tor network: web pages, and mostly just home pages of sites. In this work, we instead investigate the fingerprintability of video content served over Tor. We collected a large new dataset of network traces for 50 YouTube videos of similar length. Our preliminary experiments utilizing a convolutional neural network model proposed in prior works has yielded promising classification results, achieving up to 55% accuracy. This shows the potential to unmask the individual videos that users are viewing over Tor, creating further privacy challenges to consider when defending against website fingerprinting attacks.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3363273](https://doi.org/10.1145/3319535.3363273)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3363273](https://dl.acm.org/doi/pdf/10.1145/3319535.3363273)
## Poster: Directed Hybrid Fuzzing on Binary Code.
### Authors
* Juhwan Kim, Sejong University, Seoul, Republic of Korea
* Joobeom Yun, Sejong University, Seoul, Republic of Korea
### Abstract
> Hybrid fuzzers combine both fuzzing and concolic execution with the wish that the fuzzer will quickly explore input spaces and the concolic execution will solve the complex path conditions. However, existing hybrid fuzzers such as Driller cannot be effectively directed, for instance, towards unsafe system calls or suspicious locations, or towards functions in the call stack of a reported vulnerability that we wish to reproduce. In this poster, we propose DrillerGO, a directed hybrid fuzzing system, to mitigate this problem. It mainly consists of a static analysis and a dynamic analysis module. In the static analysis, it searches suspicious API call strings in the recovered control flow graph (CFG). After targeting some suspicious API call lines, it runs the concolic execution along with path guiding. The path guiding is helped by backward pathfinding, which is a novel technique to find paths backward from the target to the start of main(). Also, we will show that DrillerGo can find the crashes faster than Driller through experimental results.
### Links
- **URL:** [https://doi.org/10.1145/3319535.3363275](https://doi.org/10.1145/3319535.3363275)
