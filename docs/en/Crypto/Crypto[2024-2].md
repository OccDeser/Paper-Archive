# Crypto[2024-2]
## Advancing Scalability in Decentralized Storage: A Novel Approach to Proof-of-Replication via Polynomial Evaluation.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-2].md#advancing-scalability-in-decentralized-storage-a-novel-approach-to-proof-of-replication-via-polynomial-evaluation)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-2].md#advancing-scalability-in-decentralized-storage-a-novel-approach-to-proof-of-replication-via-polynomial-evaluation)
### Authors
* Giuseppe Ateniese, George Mason University, Fairfax, VA, USA
* Foteini Baldimtsi, George Mason University, Fairfax, VA, USA
* Danilo Francati, George Mason University, Fairfax, VA, USA
* Ioanna Karantaidou, George Mason University, Fairfax, VA, USA
* Matteo Campanelli, Matter Labs, Berlin, Germany
### Abstract
> Proof-of-Replication (PoRep) plays a pivotal role in decentralized storage networks, serving as a mechanism to verify that provers consistently store retrievable copies of specific data. While PoRep’s utility is unquestionable, its implementation in large-scale systems, such as Filecoin, has been hindered by scalability challenges. Most existing PoRep schemes, such as Fisch’s (Eurocrypt 2019), face an escalating number of challenges and growing computational overhead as the number of stored files increases. This paper introduces a novel PoRep scheme distinctively tailored for expansive decentralized storage networks. At its core, our approach hinges on polynomial evaluation, diverging from the probabilistic checking prevalent in prior works. Remarkably, our design requires only a single challenge, irrespective of the number of files, ensuring both prover’s and verifier’s run-times remain manageable even as file counts soar. Our approach introduces a paradigm shift in PoRep designs, offering a blueprint for highly scalable and efficient decentralized storage solutions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68379-4_1](https://doi.org/10.1007/978-3-031-68379-4_1)
## A Formal Treatment of End-to-End Encrypted Cloud Storage.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-2].md#a-formal-treatment-of-end-to-end-encrypted-cloud-storage)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-2].md#a-formal-treatment-of-end-to-end-encrypted-cloud-storage)
### Authors
* Matilda Backendal, Department of Computer Science, ETH Zurich, Zurich, Switzerland
* Kenneth G. Paterson, Department of Computer Science, ETH Zurich, Zurich, Switzerland
* Hannah Davis, Seagate Technology, Shakopee, MN, USA
* Felix Günther, IBM Research Europe – Zurich, Zurich, Switzerland
* Miro Haller, University of California, San Diego, La Jolla, USA
### Abstract
> Users increasingly store their data in the cloud, thereby benefiting from easy access, sharing, and redundancy. To additionally guarantee security of the outsourced data even against a server compromise, some service providers have started to offer end-to-end encrypted (E2EE) cloud storage. With this cryptographic protection, only legitimate owners can read or modify the data. However, recent attacks on the largest E2EE providers have highlighted the lack of solid foundations for this emerging type of service.
> 
> In this paper, we address this shortcoming by initiating the formal study of E2EE cloud storage. We give a formal syntax to capture the core functionality of a cloud storage system, capturing the real-world complexity of such a system’s constituent interactive protocols. We then define game-based security notions for confidentiality and integrity of a cloud storage system against a fully malicious server. We treat both selective and fully adaptive client compromises. Our notions are informed by recent attacks on E2EE cloud storage providers. In particular we show that our syntax is rich enough to capture the core functionality of MEGA and that recent attacks on it arise as violations of our security notions. Finally, we present an E2EE cloud storage system that provides all core functionalities and that is both efficient and provably secure with respect to our selective security notions. Along the way, we discuss challenges on the path towards bringing the security of cloud storage up to par with other end-to-end primitives, such as secure messaging and TLS.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68379-4_2](https://doi.org/10.1007/978-3-031-68379-4_2)
## Compact Key Storage - A Modern Approach to Key Backup and Delegation.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-2].md#compact-key-storage-a-modern-approach-to-key-backup-and-delegation)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-2].md#compact-key-storage-a-modern-approach-to-key-backup-and-delegation)
### Authors
* Yevgeniy Dodis, New York University, New York, USA
* Daniel Jost, New York University, New York, USA
* Antonio Marcedone, Zoom Video Communications, San Jose, USA
### Abstract
> End-to-End (E2E) encrypted messaging, which prevents even the service provider from learning communication contents, is gaining popularity. Since users care about maintaining access to their data even if their devices are lost or broken or just replaced, these systems are often paired with cloud backup solutions: Typically, the user will encrypt their messages with a fixed key, and upload the ciphertexts to the server. Unfortunately, this naive solution has many drawbacks. First, it often undermines the fancy security guarantees of the core application, such as forward secrecy (FS) and post-compromise security (PCS), in case the single backup key is compromised. Second, they are wasteful for backing up conversations in large groups, where many users are interested in backing up the same sequence of messages.
> 
> Instead, we formalize a new primitive called Compact Key Storage (CKS) as the “right” solution to this problem. Such CKS scheme allows a mutable set of parties to delegate to a server storage of an increasing set of keys, while each client maintains only a small state. Clients update their state as they learn new keys (maintaining PCS), or whenever they want to forget keys (achieving FS), often without the need to interact with the server. Moreover, access to the keys (or some subset of them) can be efficiently delegated to new group members, who all efficiently share the same server’s storage.
> 
> We carefully define syntax, correctness, privacy, and integrity of CKS schemes, and build two efficient schemes provably satisfying these notions. Our line scheme covers the most basic “all-or-nothing” flavor of CKS, where one wishes to compactly store and delegate the entire history of past secrets. Thus, new users enjoy the efficiency and compactness properties of the CKS only after being granted access to the entire history of keys. In contrast, our interval scheme is only slightly less efficient but allows for finer-grained access, delegation, and deletion of past keys.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68379-4_3](https://doi.org/10.1007/978-3-031-68379-4_3)
## Towards Permissionless Consensus in the Standard Model via Fine-Grained Complexity.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-2].md#towards-permissionless-consensus-in-the-standard-model-via-fine-grained-complexity)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-2].md#towards-permissionless-consensus-in-the-standard-model-via-fine-grained-complexity)
### Authors
* Marshall Ball, NYU, New York, USA
* Peter Hall, NYU, New York, USA
* Juan Garay, Texas A&M University, College Station, USA
* Aggelos Kiayias, University of Edinburgh, Edinburgh, UK
* Aggelos Kiayias, Input Output, London, UK
* Giorgos Panagiotakos, Input Output, Piraeus, Greece
### Abstract
> We investigate the feasibility of permissionless consensus (aka Byzantine agreement) under standard assumptions. A number of protocols have been proposed to achieve permissionless consensus, most notably based on the Bitcoin protocol; however, to date no protocol is known that can be provably instantiated outside of the random oracle model.
> 
> In this work, we take the first steps towards achieving permissionless consensus in the standard model. In particular, we demonstrate that worst-case conjectures in fine-grained complexity, in particular the orthogonal vectors conjecture (implied by the Strong Exponential Time Hypothesis), imply permissionless consensus in the random beacon model—a setting where a fresh random value is delivered to all parties at regular intervals. This gives a remarkable win-win result: either permissionless consensus exists relative to a random beacon, or there are non-trivial worst-case algorithmic speed-ups for a host of natural algorithmic problems (including \(\textsf{SAT}\)).
> 
> Our protocol achieves resilience against adversaries that control an inverse-polynomial fraction of the honest computational power, i.e., adversarial power \(A=T^{1-\epsilon }\) for some constant \(\epsilon >0\), where T denotes the honest computational power. This relatively low threshold is a byproduct of the slack in the fine-grained complexity conjectures.
> 
> One technical highlight is the construction of a Seeded Proof of Work: a Proof of Work where many (correlated) challenges can be derived from a single short public seed, and yet still no non-trivial amortization is possible.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68379-4_4](https://doi.org/10.1007/978-3-031-68379-4_4)
## Universal Composable Transaction Serialization with Order Fairness.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-2].md#universal-composable-transaction-serialization-with-order-fairness)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-2].md#universal-composable-transaction-serialization-with-order-fairness)
### Authors
* Michele Ciampi, University of Edinburgh, Edinburgh, UK
* Aggelos Kiayias, University of Edinburgh, Edinburgh, UK
* Yu Shen, University of Edinburgh, Edinburgh, UK
* Aggelos Kiayias, Input Output, Edinburgh, UK
### Abstract
> Order fairness in the context of distributed ledgers has received recently significant attention due to a range of attacks that exploit the reordering and adaptive injection of transactions (violating what is known as “input causality”). To address such concerns an array of definitions for order fairness has been put forth together with impossibility and feasibility results highlighting the difficulty and multifaceted nature of fairness in transaction serialization. Motivated by this we present a comprehensive modeling of order fairness capitalizing on the universal composition (UC) setting. Our results capture the different flavors of sender order fairness and input causality (which is arguably one of the most critical aspects of ledger transaction processing with respect to serialization attacks) and we parametrically illustrate what are the limits of feasibility for realistic constructions via an impossibility result. Our positive result, a novel distributed ledger protocol utilizing trusted enclaves, complements tightly our impossibility result, hence providing an optimal sender order fairness ledger construction that is also eminently practical.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68379-4_5](https://doi.org/10.1007/978-3-031-68379-4_5)
## Bare PAKE: Universally Composable Key Exchange from Just Passwords.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-2].md#bare-pake-universally-composable-key-exchange-from-just-passwords)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-2].md#bare-pake-universally-composable-key-exchange-from-just-passwords)
### Authors
* Manuel Barbosa, University of Porto (FCUP) and INESC TEC, Porto, Portugal
* Kai Gellert, University of Wuppertal, Wuppertal, Germany
* Julia Hesse, IBM Research Europe - Zurich, Rüschlikon, Switzerland
* Stanislaw Jarecki, University of California Irvine, Irvine, USA
* Manuel Barbosa, Max Planck Institute for Security and Privacy, Bochum, Germany
### Abstract
> In the past three decades, an impressive body of knowledge has been built around secure and private password authentication. In particular, secure password-authenticated key exchange (PAKE) protocols require only minimal overhead over a classical Diffie-Hellman key exchange. PAKEs are also known to fulfill strong composable security guarantees that capture many password-specific concerns such as password correlations or password mistyping, to name only a few. However, to enjoy both round-optimality and strong security, applications of PAKE protocols must provide unique session and participant identifiers. If such identifiers are not readily available, they must be agreed upon at the cost of additional communication flows, a fact which has been met with incomprehension among practitioners, and which hindered the adoption of provably secure password authentication in practice.
> 
> In this work, we resolve this issue by proposing a new paradigm for truly password-only yet securely composable PAKE, called bare PAKE. We formally prove that two prominent PAKE protocols, namely CPace and EKE, can be cast as bare PAKEs and hence do not require pre-agreement of anything else than a password. Our bare PAKE modeling further allows to investigate a novel “reusability” property of PAKEs, i.e., whether \(n^2\) pairwise keys can be exchanged from only n messages, just as the Diffie-Hellman non-interactive key exchange can do in a public-key setting. As a side contribution, this add-on property of bare PAKEs leads us to observe that some previous PAKE constructions relied on unnecessarily strong, “reusable” building blocks. By showing that “non-reusable” tools suffice for standard PAKE, we open a new path towards round-optimal post-quantum secure password-authenticated key exchange.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68379-4_6](https://doi.org/10.1007/978-3-031-68379-4_6)
## LATKE: A Framework for Constructing Identity-Binding PAKEs.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-2].md#latke-a-framework-for-constructing-identity-binding-pakes)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-2].md#latke-a-framework-for-constructing-identity-binding-pakes)
### Authors
* Jonathan Katz, Google, Washington DC, USA
* Jonathan Katz, University of Maryland, College Park, USA
* Michael Rosenberg, University of Maryland, College Park, USA
### Abstract
> Motivated by applications to the internet of things (IoT), Cremers, Naor, Paz, and Ronen (CRYPTO ’22) recently considered a setting in which multiple parties share a common password and want to be able to pairwise authenticate. They observed that using standard password-authenticated key exchange (PAKE) protocols in this setting allows for catastrophic impersonation attacks whereby compromise of a single party allows an attacker to impersonate any party to any other. To address this, they proposed the notion of identity-binding PAKE (iPAKE) and showed constructions of iPAKE protocol CHIP.
> 
> We present LATKE, a framework for iPAKE that allows us to construct protocols with features beyond what CHIP achieves. In particular, we can instantiate the components of our framework to yield an iPAKE protocol with post-quantum security and identity concealment, where one party hides its identity until it has authenticated the other. This is the first iPAKE protocol with either property.
> 
> To demonstrate the concrete efficiency of our framework, we implement various instantiations and compare the resulting protocols to CHIP when run on commodity hardware. The performance of our schemes is very close to that of CHIP, while offering stronger security properties.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68379-4_7](https://doi.org/10.1007/978-3-031-68379-4_7)
## Fine-Grained Non-interactive Key-Exchange Without Idealized Assumptions.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-2].md#fine-grained-non-interactive-key-exchange-without-idealized-assumptions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-2].md#fine-grained-non-interactive-key-exchange-without-idealized-assumptions)
### Authors
* Yuyu Wang, University of Electronic Science and Technology of China, Chengdu, China
* Chuanjie Su, University of Electronic Science and Technology of China, Chengdu, China
* Jiaxin Pan, University of Kassel, Kassel, Germany
### Abstract
> In this paper, we study multi-party non-interactive key exchange (NIKE) in the fine-grained setting. More precisely, we propose three multi-party NIKE schemes in three computation models, namely, the bounded parallel-time, bounded time, and bounded storage models. Their security is based on a very mild assumption (e.g., \(\mathsf {NC^1}\subsetneq \mathsf{\oplus L/poly}\)) or even without any complexity assumption. This improves the recent work of Afshar, Couteau, Mahmoody, and Sadeghi (EUROCRYPT 2023) that requires idealized assumptions, such as random oracles or generic groups.
> 
> Additionally, we show that all our constructions satisfy a natural desirable property that we refer to as extendability, and we give generic transformations from extendable multi-party NIKE to multi-party identity-based NIKEs in the fine-grained settings.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68379-4_8](https://doi.org/10.1007/978-3-031-68379-4_8)
## Fine-Grained Non-interactive Key Exchange, Revisited.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-2].md#fine-grained-non-interactive-key-exchange-revisited)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-2].md#fine-grained-non-interactive-key-exchange-revisited)
### Authors
* Balthazar Bauer, UVSQ, Versailles, France
* Geoffroy Couteau, CNRS, IRIF, Université Paris Cité, Paris, France
* Elahe Sadeghi, University of Texas at Austin, Austin, USA
### Abstract
> We revisit the construction of multiparty non-interactive key-exchange protocols with fine-grained security, which was recently studied in (Afshar et al., Eurocrypt 2023). Their work introduced a 4-party non-interactive key exchange with quadratic hardness, and proved it secure in Shoup’s generic group model. This positive result was complemented with a proof that n-party non-interactive key exchange with superquadratic security cannot exist in Maurer’s generic group model, for any \(n\ge 3\). Because Shoup’s model is stronger than Maurer’s model, this leaves a gap between the positive and the negative result, and their work left as an open question the goal of closing this gap, and of obtaining fine-grained non-interactive key exchange without relying on idealized models.
> 
> In this work, we make significant progress on both questions. We obtain two main results:
> 
> A 4-party non-interactive key exchange protocol with quadratic security gap, assuming the existence of exponentially secure injective pseudorandom generators, and the subexponential hardness of the computational Diffie-Hellman assumption. In addition, our scheme is conceptually simpler, and can be generalized to other settings (with more parties or from other assumptions).
> 
> Assuming the existence of non-uniformly secure injective pseudorandom generators with exponential hardness, we further show that our protocol is secure in Maurer’s model, albeit with a smaller hardness gap (up to \(N^{1.6}\)), making progress on filling the gap between the positive and the negative result of (Afshar et al., Eurocrypt 2023). Somewhat intriguingly, proving the security of our scheme in Maurer’s idealized model turns out to be significantly harder than proving its security in the standard model.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68379-4_9](https://doi.org/10.1007/978-3-031-68379-4_9)
## k-SUM in the Sparse Regime: Complexity and Applications.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-2].md#k-sum-in-the-sparse-regime-complexity-and-applications)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-2].md#k-sum-in-the-sparse-regime-complexity-and-applications)
### Authors
* Shweta Agrawal, Indian Institute of Technology Madras, Chennai, India
* Akhil Vanukuri, Indian Institute of Technology Madras, Chennai, India
* Sagnik Saha, Computer Science Department, Carnegie Mellon University, Pittsburgh, USA
* Nikolaj I. Schwartzbach, CIFRA Institute, Bocconi University, Milan, Italy
* Prashant Nalini Vasudevan, Department of Computer Science, National University of Singapore, Singapore, Singapore
### Abstract
> In the average-case k-SUM problem, given r integers chosen uniformly at random from \( \{ 0,\dots ,M-1 \}\), the objective is to find a “solution” set of k numbers that sum to 0 modulo M. In the dense regime of \(M \le r^k\), where solutions exist with high probability, the complexity of these problems is well understood. Much less is known in the sparse regime of \(M\gg r^k\), where solutions are unlikely to exist.
> 
> Motivated by applications to cryptography, we initiate the study of the sparse regime for k-SUM and its variant k-XOR, especially their planted versions, where a random solution is planted in a randomly generated instance and has to be recovered. We provide evidence for the hardness of these problems and show applications to constructing public-key encryption schemes. Our contributions are summarized below.
> 
> Complexity. We study the complexity of these problems in the sparse regime and show:
> 
> Conditional Lower Bounds: Assuming established conjectures about the hardness of average-case (non-planted) k-SUM/k-XOR when \(M = r^k\), we provide non-trivial lower bounds on the running time of algorithms for planted k-SUM when \(r^k\le M\le r^{2k}\).
> 
> Hardness Amplification: We show that for any \(M \ge r^k\), if an algorithm running in time T solves planted k-SUM/k-XOR with success probability \(\varOmega (1/\textrm{polylog}(r))\), then there is an algorithm running in time \(\widetilde{{\mathcal {O}}}(T)\) that solves it with probability \((1-o(1))\). This enables us to use even relatively mild hardness of k-SUM/k-XOR in our cryptographic constructions. Our primary technical contribution is the proof of this result, which departs significantly from existing approaches to hardness amplification.
> 
> New Reductions and Algorithms. We provide reductions for k-SUM/k-XOR from search to decision, as well as worst-case and average-case reductions to the Subset Sum problem from k-SUM. Additionally, we present a new algorithm for average-case k-XOR that is faster than known worst-case algorithms at low densities.
> 
> Applications. We show that by additionally assuming mild hardness of k-XOR, we can construct Public Key Encryption (PKE) from a weaker variant of the Learning Parity with Noise (LPN) problem than was known before. In particular, such LPN hardness does not appear to imply PKE on its own – this suggests that k-XOR/k-SUM can be used to bridge “minicrypt” and “cryptomania” in some cases. We are optimistic that this technique will find other applications in cryptography

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68379-4_10](https://doi.org/10.1007/978-3-031-68379-4_10)
## Limits of Black-Box Anamorphic Encryption.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-2].md#limits-of-black-box-anamorphic-encryption)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-2].md#limits-of-black-box-anamorphic-encryption)
### Authors
* Dario Catalano, Dipartimento di Matematica e Informatica, Università di Catania, Catania, Italy
* Francesco Migliaro, Dipartimento di Matematica e Informatica, Università di Catania, Catania, Italy
* Emanuele Giunta, IMDEA Software Institute, Madrid, Spain
* Emanuele Giunta, Universidad Politecnica de Madrid, Madrid, Spain
### Abstract
> (Receiver) Anamorphic encryption, introduced by Persiano et al. at Eurocrypt 2022, considers the question of achieving private communication in a world where secret decryption keys are under the control of a dictator. The challenge here is to be able to establish a secret communication channel to exchange covert (i.e. anamorphic) messages on top of some already deployed public key encryption scheme.
> 
> Over the last few years several works addressed this challenge by showing new constructions, refined notions and extensions. Most of these constructions, however, are either ad hoc, in the sense that they build upon specific properties of the underlying PKE, or impose severe restrictions on the size of the underlying anamorphic message space.
> 
> In this paper we consider the question of whether it is possible to have realizations of the primitive that are both generic and allow for large anamorphic message spaces. We give strong indications that, unfortunately, this is not the case.
> 
> Our first result shows that any black-box realization of the primitive, i.e. any realization that accesses the underlying PKE only via oracle calls, must have an anamorphic message space of size at most \(\textsf{poly}(\lambda )\) (\(\lambda \) security parameter).
> 
> Even worse, if one aims at stronger variants of the primitive (and, specifically, the notion of asymmetric anamorphic encryption, recently proposed by Catalano et al.) we show that such black-box realizations are plainly impossible, i.e. no matter how small the anamorphic message space is.
> 
> Finally, we show that our impossibility results are rather tight: indeed, by making more specific assumptions on the underlying PKE, it becomes possible to build generic AE where the anamorphic message space is of size \(\varOmega (2^\lambda )\).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68379-4_11](https://doi.org/10.1007/978-3-031-68379-4_11)
## Formally Verifying Kyber - Episode V: Machine-Checked IND-CCA Security and Correctness of ML-KEM in EasyCrypt.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-2].md#formally-verifying-kyber-episode-v-machine-checked-ind-cca-security-and-correctness-of-ml-kem-in-easycrypt)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-2].md#formally-verifying-kyber-episode-v-machine-checked-ind-cca-security-and-correctness-of-ml-kem-in-easycrypt)
### Authors
* José Bacelar Almeida, Universidade do Minho, Braga, Portugal
* José Bacelar Almeida, INESC TEC, Porto, Portugal
* Manuel Barbosa, INESC TEC, Porto, Portugal
* Hugo Pacheco, INESC TEC, Porto, Portugal
* Santiago Arranz Olmos, Max Planck Institute for Security and Privacy, Bochum, Germany
* Manuel Barbosa, Max Planck Institute for Security and Privacy, Bochum, Germany
* Gilles Barthe, Max Planck Institute for Security and Privacy, Bochum, Germany
* Miguel Quaresma, Max Planck Institute for Security and Privacy, Bochum, Germany
* Peter Schwabe, Max Planck Institute for Security and Privacy, Bochum, Germany
* Manuel Barbosa, University of Porto (FCUP), Porto, Portugal
* Hugo Pacheco, University of Porto (FCUP), Porto, Portugal
* Gilles Barthe, IMDEA Software Institute, Madrid, Spain
* François Dupressoir, University of Bristol, Bristol, UK
* Cameron Low, University of Bristol, Bristol, UK
* Benjamin Grégoire, Université Côte d’Azur, Inria, Nice, France
* Jean-Christophe Léchenet, Université Côte d’Azur, Inria, Nice, France
* Vincent Laporte, Université de Lorraine, CNRS, Inria, LORIA, Nancy, France
* Tiago Oliveira, SandboxAQ, Tarrytown, USA
* Peter Schwabe, Radboud University, Nijmegen, The Netherlands
* Pierre-Yves Strub, PQShield, Paris, France
### Abstract
> We present a formally verified proof of the correctness and IND-CCA security of ML-KEM, the Kyber-based Key Encapsulation Mechanism (KEM) undergoing standardization by NIST. The proof is machine-checked in EasyCrypt and it includes: 1) A formalization of the correctness (decryption failure probability) and IND-CPA security of the Kyber base public-key encryption scheme, following Bos et al. at Euro S&P 2018; 2) A formalization of the relevant variant of the Fujisaki-Okamoto transform in the Random Oracle Model (ROM), which follows closely (but not exactly) Hofheinz, Hövelmanns and Kiltz at TCC 2017; 3) A proof that the IND-CCA security of the ML-KEM specification and its correctness as a KEM follows from the previous results; 4) Two formally verified implementations of ML-KEM written in Jasmin that are provably constant-time, functionally equivalent to the ML-KEM specification and, for this reason, inherit the provable security guarantees established in the previous points. The top-level theorems give self-contained concrete bounds for the correctness and security of ML-KEM down to (a variant of) Module-LWE. We discuss how they are built modularly by leveraging various EasyCrypt features.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68379-4_12](https://doi.org/10.1007/978-3-031-68379-4_12)
## Public-Key Anamorphism in (CCA-Secure) Public-Key Encryption and Beyond.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-2].md#public-key-anamorphism-in-cca-secure-public-key-encryption-and-beyond)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-2].md#public-key-anamorphism-in-cca-secure-public-key-encryption-and-beyond)
### Authors
* Giuseppe Persiano, Università di Salerno, Fisciano, Italy
* Giuseppe Persiano, Google LLC, New York, USA
* Moti Yung, Google LLC, New York, USA
* Duong Hieu Phan, Telecom Paris, Institut Polytechnique de Paris, Paris, France
* Moti Yung, Columbia University, New York, USA
### Abstract
> The notion of (Receiver-) Anamorphic Encryption was put forth recently to show that a dictator (i.e., an overreaching government), which demands to get the receiver’s private key and even dictates messages to the sender, cannot prevent the receiver from getting an additional covert anamorphic message from a sender. The model required an initial private collaboration to share some secret. There may be settings though where an initial collaboration may be impossible or performance-wise prohibitive, or cases when we need an immediate message to be sent without private key generation (e.g., by any casual sender in need). This situation, to date, somewhat limits the applicability of anamorphic encryption. To overcome this, in this work, we put forth the new notion of “public-key anamorphic encryption,” where, without any initialization, any sender that has not coordinated in any shape or form with the receiver, can nevertheless, under the dictator control of the receiver’s private key, send the receiver an additional anamorphic secret message hidden from the dictator. We define the new notion with its unique new properties, and then prove that, quite interestingly, the known CCA-secure Koppula-Waters (KW) system is, in fact, public-key anamorphic.
> 
> We then describe how a public-key anamorphic scheme can support a new hybrid anamorphic encapsulation mode (KDEM) where the public-key anamorphic part serves a bootstrapping mechanism to activate regular anamorphic messages in the same ciphertext, thus together increasing the anamorphic channel capacity.
> 
> Looking at the state of research thus far, we observe that the initial system (Eurocrypt’22) that was shown to have regular anamorphic properties is the CCA-secure Naor-Yung (and other related schemes). Here we identify that the KW CCA-secure scheme also provides a new type of anamorphism. Thus, this situation is hinting that there may be a connection between some types of CCA-secure schemes and some type of anamorphic schemes (in spite of the fact that the goals of the two primitives are fundamentally different); this question is foundational in nature. Given this, we identify a sufficient condition for a “CCA-secure scheme which is black-box reduced from a CPA secure scheme” to directly give rise to an “anamorphic encryption scheme!” Furthermore, we identify one extra property of the reduction, that yields a public-key anamorphic scheme as defined here.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68379-4_13](https://doi.org/10.1007/978-3-031-68379-4_13)
## Provable Security Against Decryption Failure Attacks from LWE.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-2].md#provable-security-against-decryption-failure-attacks-from-lwe)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-2].md#provable-security-against-decryption-failure-attacks-from-lwe)
### Authors
* Christian Majenz, Technical University of Denmark, Kongens Lyngby, Denmark
* Fabrizio Sisinni, Technical University of Denmark, Kongens Lyngby, Denmark
### Abstract
> In a recent work, Hövelmanns, Hülsing and Majenz introduced a new security proof for the Fujisaki-Okamoto transform in the quantum-accessible random oracle model (QROM) used in post-quantum key encapsulation mechanisms. While having a smaller security loss due to decryption failures present in many constructions, it requires two new security properties of the underlying public-key encryption scheme (PKE).
> 
> In this work, we show that one of the properties, Find Failing Plaintexts - Non Generic (FFP-NG) security, is achievable using a relatively efficient LWE-based PKE that does not have perfect correctness. In particular, we show that LWE reduces to breaking FFP-NG security of the PVW scheme, when all LWE errors are discrete Gaussian distributed. The reduction has an arbitrarily small constant multiplicative loss in LWE error size. For the proof, we make use of techniques by Genise, Micciancio, Peikert and Walter to analyze marginal and conditional distributions of sums of discrete Gaussians.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68379-4_14](https://doi.org/10.1007/978-3-031-68379-4_14)
