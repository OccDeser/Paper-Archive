# Asiacrypt[2023-8]
## Oblivious Transfer from Zero-Knowledge Proofs - Or How to Achieve Round-Optimal Quantum Oblivious Transfer and Zero-Knowledge Proofs on Quantum States.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-8].md#oblivious-transfer-from-zero-knowledge-proofs-or-how-to-achieve-round-optimal-quantum-oblivious-transfer-and-zero-knowledge-proofs-on-quantum-states)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-8].md#oblivious-transfer-from-zero-knowledge-proofs-or-how-to-achieve-round-optimal-quantum-oblivious-transfer-and-zero-knowledge-proofs-on-quantum-states)
### Authors
* Léo Colisson, Centrum Wiskunde and Informatica, Amsterdam, The Netherlands
* Garazi Muguruza, Informatics Institute, University of Amsterdam, Amsterdam, The Netherlands
* Florian Speelman, Informatics Institute, University of Amsterdam, Amsterdam, The Netherlands
* Léo Colisson, QuSoft, Amsterdam, The Netherlands
* Garazi Muguruza, QuSoft, Amsterdam, The Netherlands
* Florian Speelman, QuSoft, Amsterdam, The Netherlands
### Abstract
> We provide a generic construction to turn any classical Zero-Knowledge (ZK) protocol into a composable (quantum) oblivious transfer (OT) protocol, mostly lifting the round-complexity properties and security guarantees (plain-model/statistical security/unstructured functions\(\ldots \)) of the ZK protocol to the resulting OT protocol. Such a construction is unlikely to exist classically as Cryptomania is believed to be different from Minicrypt.
> 
> In particular, by instantiating our construction using Non-Interactive ZK (NIZK), we provide the first round-optimal (2-message) quantum OT protocol secure in the random oracle model, and round-optimal extensions to string and k-out-of-n OT.
> 
> At the heart of our construction lies a new method that allows us to prove properties on a received quantum state without revealing additional information on it, even in a non-interactive way and/or with statistical guarantees when using an appropriate classical ZK protocol. We can notably prove that a state has been partially measured (with arbitrary constraints on the set of measured qubits), without revealing any additional information on this set. This notion can be seen as an analog of ZK to quantum states, and we expect it to be of independent interest as it extends complexity theory to quantum languages, as illustrated by the two new complexity classes we introduce, ZKstatesQIP and ZKstatesQMA.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8742-9_1](https://doi.org/10.1007/978-981-99-8742-9_1)
## On the (Im)plausibility of Public-Key Quantum Money from Collision-Resistant Hash Functions.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-8].md#on-the-im-plausibility-of-public-key-quantum-money-from-collision-resistant-hash-functions)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-8].md#on-the-im-plausibility-of-public-key-quantum-money-from-collision-resistant-hash-functions)
### Authors
* Prabhanjan Ananth, UCSB, Santa Barbara, USA
* Zihan Hu, Tsinghua University, Beijing, China
* Henry Yuen, Columbia University, New York, USA
### Abstract
> Public-key quantum money is a cryptographic proposal for using highly entangled quantum states as currency that is publicly verifiable yet resistant to counterfeiting due to the laws of physics. Despite significant interest, constructing provably-secure public-key quantum money schemes based on standard cryptographic assumptions has remained an elusive goal. Even proposing plausibly-secure candidate schemes has been a challenge.
> 
> These difficulties call for a deeper and systematic study of the structure of public-key quantum money schemes and the assumptions they can be based on. Motivated by this, we present the first black-box separation of quantum money and cryptographic primitives. Specifically, we show that collision-resistant hash functions cannot be used as a black-box to construct public-key quantum money schemes where the banknote verification makes classical queries to the hash function. Our result involves a novel combination of state synthesis techniques from quantum complexity theory and simulation techniques, including Zhandry’s compressed oracle technique.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8742-9_2](https://doi.org/10.1007/978-981-99-8742-9_2)
## Short Concurrent Covert Authenticated Key Exchange (Short cAKE).
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-8].md#short-concurrent-covert-authenticated-key-exchange-short-cake)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-8].md#short-concurrent-covert-authenticated-key-exchange-short-cake)
### Authors
* Karim Eldefrawy, SRI International, Menlo Park, USA
* Nicholas Genise, Duality Technologies, Hoboken, USA
* Stanislaw Jarecki, University of California, Irvine, Irvine, USA
### Abstract
> Von Ahn, Hopper and Langford introduced the notion of steganographic a.k.a. covert computation, to capture distributed computation where the attackers must not be able to distinguish honest parties from entities emitting random bitstrings. This indistinguishability should hold for the duration of the computation except for what is revealed by the intended outputs of the computed functionality. An important case of covert computation is mutually authenticated key exchange, a.k.a. mutual authentication. Mutual authentication is a fundamental primitive often preceding more complex secure protocols used for distributed computation. However, standard authentication implementations are not covert, which allows a network adversary to target or block parties who engage in authentication. Therefore, mutual authentication is one of the premier use cases of covert computation and has numerous real-world applications, e.g., for enabling authentication over steganographic channels in a network controlled by a discriminatory entity.
> 
> We improve on the state of the art in covert authentication by presenting a protocol that retains covertness and security under concurrent composition, has minimal message complexity, and reduces protocol bandwidth by an order of magnitude compared to previous constructions. To model the security of our scheme we develop a UC model which captures standard features of secure mutual authentication but extends them to covertness. We prove our construction secure in this UC model. We also provide a proof-of-concept implementation of our scheme.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8742-9_3](https://doi.org/10.1007/978-981-99-8742-9_3)
## Generalized Fuzzy Password-Authenticated Key Exchange from Error Correcting Codes.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-8].md#generalized-fuzzy-password-authenticated-key-exchange-from-error-correcting-codes)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-8].md#generalized-fuzzy-password-authenticated-key-exchange-from-error-correcting-codes)
### Authors
* Jonathan Bootle, IBM Research Europe – Zurich, Zürich, Switzerland
* Sebastian Faller, IBM Research Europe – Zurich, Zürich, Switzerland
* Julia Hesse, IBM Research Europe – Zurich, Zürich, Switzerland
* Sebastian Faller, ETH Zurich, Zürich, Switzerland
* Kristina Hostáková, ETH Zurich, Zürich, Switzerland
* Johannes Ottenhues, University of St. Gallen, St. Gallen, Switzerland
### Abstract
> Fuzzy Password-Authenticated Key Exchange (fuzzy PAKE) allows cryptographic keys to be generated from authentication data that is both fuzzy and of low entropy. The strong protection against offline attacks offered by fuzzy PAKE opens an interesting avenue towards secure biometric authentication, typo-tolerant password authentication, and automated IoT device pairing. Previous constructions of fuzzy PAKE are either based on Error Correcting Codes (ECC) or generic multi-party computation techniques such as Garbled Circuits. While ECC-based constructions are significantly more efficient, they rely on multiple special properties of error correcting codes such as maximum distance separability and smoothness.
> 
> We contribute to the line of research on fuzzy PAKE in two ways. First, we identify a subtle but devastating gap in the security analysis of the currently most efficient fuzzy PAKE construction (Dupont et al., Eurocrypt 2018), allowing a man-in-the-middle attacker to test individual password characters. Second, we provide a new fuzzy PAKE scheme based on ECC and PAKE that provides a built-in protection against individual password character guesses and requires fewer, more standard properties of the underlying ECC. Additionally, our construction offers better error correction capabilities than previous ECC-based fuzzy PAKEs.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8742-9_4](https://doi.org/10.1007/978-981-99-8742-9_4)
## A Generic Construction of Tightly Secure Password-Based Authenticated Key Exchange.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-8].md#a-generic-construction-of-tightly-secure-password-based-authenticated-key-exchange)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-8].md#a-generic-construction-of-tightly-secure-password-based-authenticated-key-exchange)
### Authors
* Jiaxin Pan, University of Kassel, Kassel, Germany
* Jiaxin Pan, Department of Mathematical Sciences, NTNU - Norwegian University of Science and Technology, Trondheim, Norway
* Runzhi Zeng, Department of Mathematical Sciences, NTNU - Norwegian University of Science and Technology, Trondheim, Norway
### Abstract
> We propose a generic construction of password-based authenticated key exchange (PAKE) from key encapsulation mechanisms (KEM). Assuming that the KEM is oneway secure against plaintext-checkable attacks (OW-PCA), we prove that our PAKE protocol is tightly secure in the Bellare-Pointcheval-Rogaway model (EUROCRYPT 2000). Our tight security proofs require ideal ciphers and random oracles. The OW-PCA security is relatively weak and can be implemented tightly with the Diffie-Hellman assumption, which generalizes the work of Liu et al. (PKC 2023), and “almost” tightly with lattice-based assumptions, which tightens the security loss of the work of Beguinet et al. (ACNS 2023) and allows more efficient practical implementation with Kyber. Beyond these, it opens an opportunity of constructing tight PAKE based on various assumptions.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8742-9_5](https://doi.org/10.1007/978-981-99-8742-9_5)
## An Efficient Strong Asymmetric PAKE Compiler Instantiable from Group Actions.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-8].md#an-efficient-strong-asymmetric-pake-compiler-instantiable-from-group-actions)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-8].md#an-efficient-strong-asymmetric-pake-compiler-instantiable-from-group-actions)
### Authors
* Ian McQuoid, Oregon State University, Corvallis, USA
* Jiayu Xu, Oregon State University, Corvallis, USA
### Abstract
> Password-authenticated key exchange (PAKE) is a class of protocols enabling two parties to convert a shared (possibly low-entropy) password into a high-entropy joint session key. Strong asymmetric PAKE (saPAKE), an extension that models the client-server setting where servers may store a client’s password for repeated authentication, was the subject of standardization efforts by the IETF in 2019–20. In this work, we present the most computationally efficient saPAKE protocol so far: a compiler from PAKE to saPAKE which costs only 2 messages and 7 group exponentiations in total (3 for client and 4 for server) when instantiated with suitable underlying PAKE protocols. In addition to being efficient, our saPAKE protocol is conceptually simple and achieves the strongest notion of universally composable (UC) security.
> 
> In addition to classical assumptions and classical PAKE, we may instantiate our PAKE-to-saPAKE compiler with cryptographic group actions, such as the isogeny-based CSIDH, and post-quantum PAKE. This yields the first saPAKE protocol from post-quantum assumptions as all previous constructions rely on cryptographic assumptions weak to Shor’s algorithm.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8742-9_6](https://doi.org/10.1007/978-981-99-8742-9_6)
## New SIDH Countermeasures for a More Efficient Key Exchange.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-8].md#new-sidh-countermeasures-for-a-more-efficient-key-exchange)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-8].md#new-sidh-countermeasures-for-a-more-efficient-key-exchange)
### Authors
* Andrea Basso, University of Bristol, Bristol, UK
* Tako Boris Fouotsa, EPFL, Lausanne, Switzerland
### Abstract
> The Supersingular Isogeny Diffie-Hellman (SIDH) protocol has been the main and most efficient isogeny-based encryption protocol, until a series of breakthroughs led to a polynomial-time key-recovery attack. While some countermeasures have been proposed, the resulting schemes are significantly slower and larger than the original SIDH.
> 
> In this work, we propose a new countermeasure technique that leads to significantly more efficient and compact protocols. To do so, we introduce the concept of artificially oriented curves, which are curves with an associated pair of subgroups. We show that this information is sufficient to build parallel isogenies and thus obtain an SIDH-like key exchange, while also revealing significantly less information compared to previous constructions.
> 
> After introducing artificially oriented curves, we formalize several related computational problems and thoroughly assess their presumed hardness. We then translate the SIDH key exchange to the artificially oriented setting, obtaining the key-exchange protocols binSIDH, or binary SIDH, and terSIDH, or ternary SIDH, which respectively rely on fixed-degree and variable-degree isogenies.
> 
> Lastly, we also provide a proof-of-concept implementation of the proposed protocols. Despite being implemented in a high-level language, terSIDH has very competitive running times, which suggests that terSIDH might be the most efficient isogeny-based encryption protocol.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8742-9_7](https://doi.org/10.1007/978-981-99-8742-9_7)
## The Indifferentiability of the Duplex and Its Practical Applications.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-8].md#the-indifferentiability-of-the-duplex-and-its-practical-applications)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-8].md#the-indifferentiability-of-the-duplex-and-its-practical-applications)
### Authors
* Jean Paul Degabriele, Cryptography Research Center, Technology Innovation Institute, Abu Dhabi, UAE
* Marc Fischlin, Cryptoplexity, Technische Universität Darmstadt, Darmstadt, Germany
* Jean Paul Degabriele, CNS, Technische Universität Darmstadt, Darmstadt, Germany
* Jérôme Govinden, CNS, Technische Universität Darmstadt, Darmstadt, Germany
### Abstract
> The Duplex construction, introduced by Bertoni et al. (SAC 2011), is the Swiss Army knife of permutation-based cryptography. It can be used to realise a variety of cryptographic objects—ranging from hash functions and MACs, to authenticated encryption and symmetric ratchets. Testament to this is the STROBE protocol framework which is a software cryptographic library based solely on the Duplex combined with a rich set of function calls. While prior works have typically focused their attention on specific uses of the Duplex, our focus here is its indifferentiability. More specifically, we consider the indifferentiability of the Duplex construction from an online random oracle—an idealisation which shares its same interface. As one of our main results we establish the indifferentiability of the Duplex from an online random oracle. However indifferentiability only holds for the standard Duplex construction and we show that the full-state variant of the Duplex cannot meet this notion. Our indifferentiability theorem provides the theoretical justification for the security of the Duplex in a variety of scenarios, amongst others, its use as a general-purpose cryptographic primitive in the STROBE framework. Next we move our attention to AEAD schemes based on the Duplex, namely SpongeWrap, which is the basis for NIST’s Lightweight Cryptography standard Ascon. We harness the power of indifferentiability by establishing that SpongeWrap offers security against key-dependent message inputs, related-key attacks, and is also committing.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8742-9_8](https://doi.org/10.1007/978-981-99-8742-9_8)
## Populating the Zoo of Rugged Pseudorandom Permutations.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-8].md#populating-the-zoo-of-rugged-pseudorandom-permutations)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-8].md#populating-the-zoo-of-rugged-pseudorandom-permutations)
### Authors
* Jean Paul Degabriele, Technology Innovation Institute, Abu Dhabi, UAE
* Vukašin Karadžić, Technische Universität Darmstadt, Darmstadt, Germany
### Abstract
> A Rugged Pseudorandom Permutation (RPRP) is a variable-input-length tweakable cipher satisfying a security notion that is intermediate between tweakable PRP and tweakable SPRP. It was introduced at CRYPTO 2022 by Degabriele and Karadžić, who additionally showed how to generically convert such a primitive into nonce-based and nonce-hiding AEAD schemes satisfying either misuse-resistance or release-of-unverified-plaintext security as well as Nonce-Set AEAD which has applications in protocols like QUIC and DTLS. Their work shows that RPRPs are powerful and versatile cryptographic primitives. However, the RPRP security notion itself can seem rather contrived, and the motivation behind it is not immediately clear. Moreover, they only provided a single RPRP construction, called UIV, which puts into question the generality of their modular approach and whether other instantiations are even possible. In this work, we address this question positively by presenting new RPRP constructions, thereby validating their modular approach and providing further justification in support of the RPRP security definition. Furthermore, we present a more refined view of their results by showing that strictly weaker RPRP variants, which we introduce, suffice for many of their transformations. From a theoretical perspective, our results show that the well-known three-round Feistel structure achieves stronger security as a permutation than a mere pseudorandom permutation—as was established in the seminal result by Luby and Rackoff. We conclude on a more practical note by showing how to extend the left domain of one RPRP construction for applications that require larger values in order to meet the desired level of security.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8742-9_9](https://doi.org/10.1007/978-981-99-8742-9_9)
## Generic Security of the SAFE API and Its Applications.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-8].md#generic-security-of-the-safe-api-and-its-applications)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-8].md#generic-security-of-the-safe-api-and-its-applications)
### Authors
* Dmitry Khovratovich, Ethereum Foundation, Luxembourg City, Luxembourg
* Mario Marhuenda Beltrán, Radboud University, Nijmegen, The Netherlands
* Bart Mennink, Radboud University, Nijmegen, The Netherlands
### Abstract
> We provide security foundations for SAFE, a recently introduced API framework for sponge-based hash functions tailored to prime-field-based protocols. SAFE aims to provide a robust and foolproof interface, has been implemented in the Neptune hash framework and some zero-knowledge proof projects, but despite its usability and applicability it currently lacks any security proof. Such a proof would not be straightforward as SAFE abuses the inner part of the sponge and fills it with protocol-specific data.
> 
> In this work we identify the SAFECore as versatile variant sponge construction underlying SAFE, we prove indifferentiability of SAFECore for all (binary and prime) fields up to around \(|\mathbb {F}_p |^{c/2}\) queries, where \(\mathbb {F}_p \) is the underlying field and c the capacity, and we apply this security result to various use cases. We show that the SAFE-based protocols of plain hashing, authenticated encryption, verifiable computation, non-interactive proofs, and commitment schemes are secure against a wide class of adversaries, including those dealing with multiple invocations of a sponge in a single application. Our results pave the way of using SAFE with the full taxonomy of hash functions, including SNARK-, lattice-, and x86-friendly hashes.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8742-9_10](https://doi.org/10.1007/978-981-99-8742-9_10)
