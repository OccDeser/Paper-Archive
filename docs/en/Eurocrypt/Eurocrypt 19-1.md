# Eurocrypt 19-1
## Compact Adaptively Secure ABE for \mathsf NC^1 from k-Lin.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2019-1.md#compact-adaptively-secure-abe-for-mathsf-nc-1-from-k-lin)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2019-1.md#compact-adaptively-secure-abe-for-mathsf-nc-1-from-k-lin)
### Authors
* Lucas Kowalczyk, Columbia University, New York, USA
* Hoeteck Wee, CNRS, ENS, PSL, Paris, France
### Abstract
> We present compact attribute-based encryption (ABE) schemes for \(\mathsf {NC^1}\) that are adaptively secure under the k-Lin assumption with polynomial security loss. Our KP-ABE scheme achieves ciphertext size that is linear in the attribute length and independent of the policy size even in the many-use setting, and we achieve an analogous efficiency guarantee for CP-ABE. This resolves the central open problem posed by Lewko and Waters (CRYPTO 2011). Previous adaptively secure constructions either impose an attribute “one-use restriction” (or the ciphertext size grows with the policy size), or require q-type assumptions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_1](https://doi.org/10.1007/978-3-030-17653-2_1)
## Unbounded Dynamic Predicate Compositions in Attribute-Based Encryption.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2019-1.md#unbounded-dynamic-predicate-compositions-in-attribute-based-encryption)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2019-1.md#unbounded-dynamic-predicate-compositions-in-attribute-based-encryption)
### Authors
* Nuttapong Attrapadung, National Institute of Advanced Industrial Science and Technology (AIST), Tokyo, Japan
### Abstract
> We present several transformations that combine a set of attribute-based encryption (ABE) schemes for simpler predicates into a new ABE scheme for more expressive composed predicates. Previous proposals for predicate compositions of this kind, the most recent one being that of Ambrona et al. at Crypto’17, can be considered static (or partially dynamic), meaning that the policy (or its structure) that specifies a composition must be fixed at the setup. Contrastingly, our transformations are dynamic and unbounded: they allow a user to specify an arbitrary and unbounded-size composition policy right into his/her own key or ciphertext. We propose transformations for three classes of composition policies, namely, the classes of any monotone span programs, any branching programs, and any deterministic finite automata. These generalized policies are defined over arbitrary predicates, hence admitting modular compositions. One application from modularity is a new kind of ABE for which policies can be “nested” over ciphertext and key policies. As another application, we achieve the first fully secure completely unbounded key-policy ABE for non-monotone span programs, in a modular and clean manner, under the q-ratio assumption. Our transformations work inside a generic framework for ABE called symbolic pair encoding, proposed by Agrawal and Chase at Eurocrypt’17. At the core of our transformations, we observe and exploit an unbounded nature of the symbolic property so as to achieve unbounded-size policy compositions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_2](https://doi.org/10.1007/978-3-030-17653-2_2)
## (R)CCA Secure Updatable Encryption with Integrity Protection.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2019-1.md#r-cca-secure-updatable-encryption-with-integrity-protection)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2019-1.md#r-cca-secure-updatable-encryption-with-integrity-protection)
### Authors
* Michael Klooß, Karlsruhe Institute for Technology, Karlsruhe, Germany
* Andy Rupp, Karlsruhe Institute for Technology, Karlsruhe, Germany
* Anja Lehmann, IBM Research – Zurich, Rüschlikon, Switzerland
### Abstract
> An updatable encryption scheme allows a data host to update ciphertexts of a client from an old to a new key, given so-called update tokens from the client. Rotation of the encryption key is a common requirement in practice in order to mitigate the impact of key compromises over time. There are two incarnations of updatable encryption: One is ciphertext-dependent, i.e. the data owner has to (partially) download all of his data and derive a dedicated token per ciphertext. Everspaugh et al. (CRYPTO’17) proposed CCA and CTXT secure schemes in this setting. The other, more convenient variant is ciphertext-independent, i.e., it allows a single token to update all ciphertexts. However, so far, the broader functionality of tokens in this setting comes at the price of considerably weaker security: the existing schemes by Boneh et al. (CRYPTO’13) and Lehmann and Tackmann (EUROCRYPT’18) only achieve CPA security and provide no integrity protection. Arguably, when targeting the scenario of outsourcing data to an untrusted host, plaintext integrity should be a minimal security requirement. Otherwise, the data host may alter or inject ciphertexts arbitrarily. Indeed, the schemes from BLMR13 and LT18 suffer from this weakness, and even EPRS17 only provides integrity against adversaries which cannot arbitrarily inject ciphertexts. In this work, we provide the first ciphertext-independent updatable encryption schemes with security beyond CPA, in particular providing strong integrity protection. Our constructions and security proofs of updatable encryption schemes are surprisingly modular. We give a generic transformation that allows key-rotation and confidentiality/integrity of the scheme to be treated almost separately, i.e., security of the updatable scheme is derived from simple properties of its static building blocks. An interesting side effect of our generic approach is that it immediately implies the unlinkability of ciphertext updates that was introduced as an essential additional property of updatable encryption by EPRS17 and LT18.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_3](https://doi.org/10.1007/978-3-030-17653-2_3)
## Aurora: Transparent Succinct Arguments for R1CS.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2019-1.md#aurora-transparent-succinct-arguments-for-r1cs)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2019-1.md#aurora-transparent-succinct-arguments-for-r1cs)
### Authors
* Eli Ben-Sasson, Technion/STARKWare, Haifa, Israel
* Michael Riabzev, Technion/STARKWare, Haifa, Israel
* Alessandro Chiesa, UC Berkeley, Berkeley, USA
* Nicholas Spooner, UC Berkeley, Berkeley, USA
* Nicholas P. Ward, UC Berkeley, Berkeley, USA
* Madars Virza, MIT Media Lab, Cambridge, USA
### Abstract
> We design, implement, and evaluate a zero knowledge succinct non-interactive argument (SNARG) for Rank-1 Constraint Satisfaction (R1CS), a widely-deployed NP language undergoing standardization. Our SNARG has a transparent setup, is plausibly post-quantum secure, and uses lightweight cryptography. A proof attesting to the satisfiability of n constraints has size \(O(\log ^2 n)\); it can be produced with \(O(n \log n)\) field operations and verified with O(n). At 128 bits of security, proofs are less than \({250}\,\mathrm{kB}\) even for several million constraints, more than \(10{\times }\) shorter than prior SNARGs with similar features.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_4](https://doi.org/10.1007/978-3-030-17653-2_4)
## The Double Ratchet: Security Notions, Proofs, and Modularization for the Signal Protocol.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2019-1.md#the-double-ratchet-security-notions-proofs-and-modularization-for-the-signal-protocol)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2019-1.md#the-double-ratchet-security-notions-proofs-and-modularization-for-the-signal-protocol)
### Authors
* Sandro Coretti, New York University, New York, USA
* Yevgeniy Dodis, New York University, New York, USA
* Joël Alwen, Wickr Inc., San Francisco, USA
### Abstract
> Signal is a famous secure messaging protocol used by billions of people, by virtue of many secure text messaging applications including Signal itself, WhatsApp, Facebook Messenger, Skype, and Google Allo. At its core it uses the concept of “double ratcheting,” where every message is encrypted and authenticated using a fresh symmetric key; it has many attractive properties, such as forward security, post-compromise security, and “immediate (no-delay) decryption,” which had never been achieved in combination by prior messaging protocols.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_5](https://doi.org/10.1007/978-3-030-17653-2_5)
## Efficient Ratcheting: Almost-Optimal Guarantees for Secure Messaging.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2019-1.md#efficient-ratcheting-almost-optimal-guarantees-for-secure-messaging)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2019-1.md#efficient-ratcheting-almost-optimal-guarantees-for-secure-messaging)
### Authors
* Daniel Jost, Department of Computer Science, ETH Zurich, 8092, Zurich, Switzerland
* Ueli Maurer, Department of Computer Science, ETH Zurich, 8092, Zurich, Switzerland
* Marta Mularczyk, Department of Computer Science, ETH Zurich, 8092, Zurich, Switzerland
### Abstract
> In the era of mass surveillance and information breaches, privacy of Internet communication, and messaging in particular, is a growing concern. As secure messaging protocols are executed on the not-so-secure end-user devices, and because their sessions are long-lived, they aim to guarantee strong security even if secret states and local randomness can be exposed.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_6](https://doi.org/10.1007/978-3-030-17653-2_6)
## Indistinguishability Obfuscation Without Multilinear Maps: New Methods for Bootstrapping and Instantiation.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2019-1.md#indistinguishability-obfuscation-without-multilinear-maps-new-methods-for-bootstrapping-and-instantiation)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2019-1.md#indistinguishability-obfuscation-without-multilinear-maps-new-methods-for-bootstrapping-and-instantiation)
### Authors
* Shweta Agrawal, IIT Madras, Chennai, India
### Abstract
> Constructing indistinguishability obfuscation (\(\mathsf{iO}\)) [17] is a central open question in cryptography. We provide new methods to make progress towards this goal. Our contributions may be summarized as follows:

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_7](https://doi.org/10.1007/978-3-030-17653-2_7)
## Sum-of-Squares Meets Program Obfuscation, Revisited.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2019-1.md#sum-of-squares-meets-program-obfuscation-revisited)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2019-1.md#sum-of-squares-meets-program-obfuscation-revisited)
### Authors
* Boaz Barak, Harvard University, Cambridge, USA
* Samuel B. Hopkins, University of California, Berkeley, USA
* Aayush Jain, University of California, Los Angeles, USA
* Amit Sahai, University of California, Los Angeles, USA
* Pravesh Kothari, Princeton University and the Institute for Advanced Study, Princeton, USA
### Abstract
> We develop attacks on the security of variants of pseudo-random generators computed by quadratic polynomials. In particular we give a general condition for breaking the one-way property of mappings where every output is a quadratic polynomial (over the reals) of the input. As a corollary, we break the degree-2 candidates for security assumptions recently proposed for constructing indistinguishability obfuscation by Ananth, Jain and Sahai (ePrint 2018) and Agrawal (ePrint 2018). We present conjectures that would imply our attacks extend to a wider variety of instances, and in particular offer experimental evidence that they break assumption of Lin-Matt (ePrint 2018).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_8](https://doi.org/10.1007/978-3-030-17653-2_8)
## How to Leverage Hardness of Constant-Degree Expanding Polynomials over \mathbb R R to build i풪 i O.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2019-1.md#how-to-leverage-hardness-of-constant-degree-expanding-polynomials-over-mathbb-r-r-to-build-i-i-o)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2019-1.md#how-to-leverage-hardness-of-constant-degree-expanding-polynomials-over-mathbb-r-r-to-build-i-i-o)
### Authors
* Aayush Jain, UCLA, Los Angeles, USA
* Amit Sahai, UCLA, Los Angeles, USA
* Huijia Lin, University of Washington, Seattle, USA
* Christian Matt, Concordium, Zurich, Switzerland
### Abstract
> In this work, we introduce and construct D-restricted Functional Encryption (FE) for any constant \(D \ge 3\), based only on the SXDH assumption over bilinear groups. This generalizes the notion of 3-restricted FE recently introduced and constructed by Ananth et al. (ePrint 2018) in the generic bilinear group model.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_9](https://doi.org/10.1007/978-3-030-17653-2_9)
## XOR-Counts and Lightweight Multiplication with Fixed Elements in Binary Finite Fields.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2019-1.md#xor-counts-and-lightweight-multiplication-with-fixed-elements-in-binary-finite-fields)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2019-1.md#xor-counts-and-lightweight-multiplication-with-fixed-elements-in-binary-finite-fields)
### Authors
* Lukas Kölsch, University of Rostock, Rostock, Germany
### Abstract
> XOR-metrics measure the efficiency of certain arithmetic operations in binary finite fields. We prove some new results about two different XOR-metrics that have been used in the past. In particular, we disprove a conjecture from [10]. We consider implementations of multiplication with one fixed element in a binary finite field. Here we achieve a complete characterization of all elements whose multiplication matrix can be implemented using exactly 2 XOR-operations, confirming a conjecture from [2]. Further, we provide new results and examples in more general cases, showing that significant improvements in implementations are possible.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_10](https://doi.org/10.1007/978-3-030-17653-2_10)
## DLCT: A New Tool for Differential-Linear Cryptanalysis.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2019-1.md#dlct-a-new-tool-for-differential-linear-cryptanalysis)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2019-1.md#dlct-a-new-tool-for-differential-linear-cryptanalysis)
### Authors
* Achiya Bar-On, Department of Mathematics, Bar-Ilan University, Ramat Gan, Israel
* Nathan Keller, Department of Mathematics, Bar-Ilan University, Ramat Gan, Israel
* Ariel Weizman, Department of Mathematics, Bar-Ilan University, Ramat Gan, Israel
* Orr Dunkelman, Computer Science Department, University of Haifa, Haifa, Israel
### Abstract
> Differential cryptanalysis and linear cryptanalysis are the two best-known techniques for cryptanalysis of block ciphers. In 1994, Langford and Hellman introduced the differential-linear (DL) attack based on dividing the attacked cipher E into two subciphers \(E_0\) and \(E_1\) and combining a differential characteristic for \(E_0\) with a linear approximation for \(E_1\) into an attack on the entire cipher E. The DL technique was used to mount the best known attacks against numerous ciphers, including the AES finalist Serpent, ICEPOLE, COCONUT98, Chaskey, CTC2, and 8-round DES.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_11](https://doi.org/10.1007/978-3-030-17653-2_11)
## Linear Equivalence of Block Ciphers with Partial Non-Linear Layers: Application to LowMC.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2019-1.md#linear-equivalence-of-block-ciphers-with-partial-non-linear-layers-application-to-lowmc)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2019-1.md#linear-equivalence-of-block-ciphers-with-partial-non-linear-layers-application-to-lowmc)
### Authors
* Itai Dinur, Department of Computer Science, Ben-Gurion University, Beersheba, Israel
* Daniel Kales, Graz University of Technology, Graz, Austria
* Sebastian Ramacher, Graz University of Technology, Graz, Austria
* Christian Rechberger, Graz University of Technology, Graz, Austria
* Angela Promitzer, Graz, Austria
### Abstract
> \(\textsc {LowMC}\) is a block cipher family designed in 2015 by Albrecht et al. It is optimized for practical instantiations of multi-party computation, fully homomorphic encryption, and zero-knowledge proofs. \(\textsc {LowMC}\) is used in the \(\textsc {Picnic}\) signature scheme, submitted to NIST’s post-quantum standardization project and is a substantial building block in other novel post-quantum cryptosystems. Many \(\textsc {LowMC}\) instances use a relatively recent design strategy (initiated by Gérard et al. at CHES 2013) of applying the non-linear layer to only a part of the state in each round, where the shortage of non-linear operations is partially compensated by heavy linear algebra. Since the high linear algebra complexity has been a bottleneck in several applications, one of the open questions raised by the designers was to reduce it, without introducing additional non-linear operations (or compromising security).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_12](https://doi.org/10.1007/978-3-030-17653-2_12)
## Distributed Differential Privacy via Shuffling.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2019-1.md#distributed-differential-privacy-via-shuffling)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2019-1.md#distributed-differential-privacy-via-shuffling)
### Authors
* Albert Cheu, Khoury College of Computer Sciences, Northeastern University, Boston, USA
* Jonathan Ullman, Khoury College of Computer Sciences, Northeastern University, Boston, USA
* Adam Smith, Computer Science Department, Boston University, Boston, USA
* David Zeber, Mozilla Foundation, Mountain View, USA
* Maxim Zhilyaev, Mountain View, USA
### Abstract
> We consider the problem of designing scalable, robust protocols for computing statistics about sensitive data. Specifically, we look at how best to design differentially private protocols in a distributed setting, where each user holds a private datum. The literature has mostly considered two models: the “central” model, in which a trusted server collects users’ data in the clear, which allows greater accuracy; and the “local” model, in which users individually randomize their data, and need not trust the server, but accuracy is limited. Attempts to achieve the accuracy of the central model without a trusted server have so far focused on variants of cryptographic multiparty computation (MPC), which limits scalability.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_13](https://doi.org/10.1007/978-3-030-17653-2_13)
## Lower Bounds for Differentially Private RAMs.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2019-1.md#lower-bounds-for-differentially-private-rams)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2019-1.md#lower-bounds-for-differentially-private-rams)
### Authors
* Giuseppe Persiano, Google LLC, Mountain View, USA
* Kevin Yeo, Google LLC, Mountain View, USA
* Giuseppe Persiano, Università di Salerno, Salerno, Italy
### Abstract
> In this work, we study privacy-preserving storage primitives that are suitable for use in data analysis on outsourced databases within the differential privacy framework. The goal in differentially private data analysis is to disclose global properties of a group without compromising any individual’s privacy. Typically, differentially private adversaries only ever learn global properties. For the case of outsourced databases, the adversary also views the patterns of access to data. Oblivious RAM (ORAM) can be used to hide access patterns but ORAM might be excessive as in some settings it could be sufficient to be compatible with differential privacy and only protect the privacy of individual accesses.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_14](https://doi.org/10.1007/978-3-030-17653-2_14)
## Beyond Birthday Bound Secure MAC in Faulty Nonce Model.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2019-1.md#beyond-birthday-bound-secure-mac-in-faulty-nonce-model)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2019-1.md#beyond-birthday-bound-secure-mac-in-faulty-nonce-model)
### Authors
* Avijit Dutta, Indian Statistical Institute, Kolkata, India
* Mridul Nandi, Indian Statistical Institute, Kolkata, India
* Suprita Talnikar, Indian Statistical Institute, Kolkata, India
### Abstract
> Encrypt-then-MAC (EtM) is a popular mode for authenticated encryption (AE). Unfortunately, almost all designs following the EtM paradigm, including the AE suites for TLS, are vulnerable against nonce misuse. A single repetition of the nonce value reveals the hash key, leading to a universal forgery attack. There are only two authenticated encryption schemes following the EtM paradigm which can resist nonce misuse attacks, the GCM-RUP (CRYPTO-17) and the \(\mathsf {GCM/2}^{+} \) (INSCRYPT-12). However, they are secure only up to the birthday bound in the nonce respecting setting, resulting in a restriction on the data limit for a single key. In this paper we show that nEHtM, a nonce-based variant of EHtM (FSE-10) constructed using a block cipher, has a beyond birthday bound (BBB) unforgeable security that gracefully degrades under nonce misuse. We combine nEHtM with the CENC (FSE-06) mode of encryption using the EtM paradigm to realize a nonce-based AE, CWC+. CWC+ is very close (requiring only a few more xor operations) to the CWC AE scheme (FSE-04) and it not only provides BBB security but also gracefully degrading security on nonce misuse.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_15](https://doi.org/10.1007/978-3-030-17653-2_15)
## Tight Time-Memory Trade-Offs for Symmetric Encryption.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2019-1.md#tight-time-memory-trade-offs-for-symmetric-encryption)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2019-1.md#tight-time-memory-trade-offs-for-symmetric-encryption)
### Authors
* Joseph Jaeger, University of California, San Diego, La Jolla, USA
* Stefano Tessaro, University of Washington, Seattle, USA
### Abstract
> Concrete security proofs give upper bounds on the attacker’s advantage as a function of its time/query complexity. Cryptanalysis suggests however that other resource limitations – most notably, the attacker’s memory – could make the achievable advantage smaller, and thus these proven bounds too pessimistic. Yet, handling memory limitations has eluded existing security proofs.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_16](https://doi.org/10.1007/978-3-030-17653-2_16)
## Non-Malleable Codes Against Bounded Polynomial Time Tampering.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2019-1.md#non-malleable-codes-against-bounded-polynomial-time-tampering)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2019-1.md#non-malleable-codes-against-bounded-polynomial-time-tampering)
### Authors
* Marshall Ball, Columbia University, New York, USA
* Tal Malkin, Columbia University, New York, USA
* Dana Dachman-Soled, University of Maryland, College Park, USA
* Mukul Kulkarni, University of Maryland, College Park, USA
* Huijia Lin, University of Washington, Seattle, USA
### Abstract
> We construct efficient non-malleable codes (NMC) that are (computationally) secure against tampering by functions computable in any fixed polynomial time. Our construction is in the plain (no-CRS) model and requires the assumptions that (1) \(\mathbf {E}\) is hard for \(\mathbf {NP}\) circuits of some exponential \(2^{\beta n}\) (\(\beta >0\)) size (widely used in the derandomization literature), (2) sub-exponential trapdoor permutations exist, and (3) \(\mathbf {P}\)-certificates with sub-exponential soundness exist.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_17](https://doi.org/10.1007/978-3-030-17653-2_17)
## Continuous Non-Malleable Codes in the 8-Split-State Model.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2019-1.md#continuous-non-malleable-codes-in-the-8-split-state-model)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2019-1.md#continuous-non-malleable-codes-in-the-8-split-state-model)
### Authors
* Divesh Aggarwal, National University of Singapore, Singapore, Singapore
* Maciej Obremski, National University of Singapore, Singapore, Singapore
* Erick Purwanto, National University of Singapore, Singapore, Singapore
* Nico Döttling, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Jesper Buus Nielsen, Aarhus University, Aarhus, Denmark
### Abstract
> Non-malleable codes (NMCs), introduced by Dziembowski, Pietrzak and Wichs [20], provide a useful message integrity guarantee in situations where traditional error-correction (and even error-detection) is impossible; for example, when the attacker can completely overwrite the encoded message. NMCs have emerged as a fundamental object at the intersection of coding theory and cryptography. In particular, progress in the study of non-malleable codes and the related notion of non-malleable extractors has led to new insights and progress on even more fundamental problems like the construction of multi-source randomness extractors. A large body of the recent work has focused on various constructions of non-malleable codes in the split-state model. Many variants of NMCs have been introduced in the literature, e.g., strong NMCs, super strong NMCs and continuous NMCs. The most general, and hence also the most useful notion among these is that of continuous non-malleable codes, that allows for continuous tampering by the adversary. We present the first efficient information-theoretically secure continuously non-malleable code in the constant split-state model. We believe that our main technical result could be of independent interest and some of the ideas could in future be used to make progress on other related questions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_18](https://doi.org/10.1007/978-3-030-17653-2_18)
## Correlated-Source Extractors and Cryptography with Correlated-Random Tapes.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2019-1.md#correlated-source-extractors-and-cryptography-with-correlated-random-tapes)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2019-1.md#correlated-source-extractors-and-cryptography-with-correlated-random-tapes)
### Authors
* Vipul Goyal, Carnegie Mellon University, Pittsburgh, USA
* Yifan Song, Carnegie Mellon University, Pittsburgh, USA
### Abstract
> In this paper, we consider the setting where a party uses correlated random tapes across multiple executions of a cryptographic algorithm. We ask if the security properties could still be preserved in such a setting. As examples, we introduce the notion of correlated-tape zero knowledge, and, correlated-tape multi-party computation, where, the zero-knowledge property, and, the ideal/real model security must still be preserved even if a party uses correlated random tapes in multiple executions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_19](https://doi.org/10.1007/978-3-030-17653-2_19)
## Revisiting Non-Malleable Secret Sharing.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2019-1.md#revisiting-non-malleable-secret-sharing)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2019-1.md#revisiting-non-malleable-secret-sharing)
### Authors
* Saikrishna Badrinarayanan, UCLA, Los Angeles, USA
* Akshayaram Srinivasan, UC Berkeley, Berkeley, USA
### Abstract
> A threshold secret sharing scheme (with threshold t) allows a dealer to share a secret among a set of parties such that any group of t or more parties can recover the secret and no group of at most \(t-1\) parties learn any information about the secret. A non-malleable threshold secret sharing scheme, introduced in the recent work of Goyal and Kumar (STOC’18), additionally protects a threshold secret sharing scheme when its shares are subject to tampering attacks. Specifically, it guarantees that the reconstructed secret from the tampered shares is either the original secret or something that is unrelated to the original secret.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_20](https://doi.org/10.1007/978-3-030-17653-2_20)
## Multi-party Virtual State Channels.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2019-1.md#multi-party-virtual-state-channels)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2019-1.md#multi-party-virtual-state-channels)
### Authors
* Stefan Dziembowski, University of Warsaw, Warsaw, Poland
* Lisa Eckey, Technische Universität Darmstadt, Darmstadt, Germany
* Sebastian Faust, Technische Universität Darmstadt, Darmstadt, Germany
* Julia Hesse, Technische Universität Darmstadt, Darmstadt, Germany
* Kristina Hostáková, Technische Universität Darmstadt, Darmstadt, Germany
### Abstract
> Smart contracts are self-executing agreements written in program code and are envisioned to be one of the main applications of blockchain technology. While they are supported by prominent cryptocurrencies such as Ethereum, their further adoption is hindered by fundamental scalability challenges. For instance, in Ethereum contract execution suffers from a latency of more than 15 s, and the total number of contracts that can be executed per second is very limited. State channel networks are one of the core primitives aiming to address these challenges. They form a second layer over the slow and expensive blockchain, thereby enabling instantaneous contract processing at negligible costs.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_21](https://doi.org/10.1007/978-3-030-17653-2_21)
## Aggregate Cash Systems: A Cryptographic Investigation of Mimblewimble.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2019-1.md#aggregate-cash-systems-a-cryptographic-investigation-of-mimblewimble)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2019-1.md#aggregate-cash-systems-a-cryptographic-investigation-of-mimblewimble)
### Authors
* Georg Fuchsbauer, Inria, Paris, France
* Michele Orrù, Inria, Paris, France
* Georg Fuchsbauer, École normale supérieure, CNRS, PSL, Paris, France
* Michele Orrù, École normale supérieure, CNRS, PSL, Paris, France
* Yannick Seurin, ANSSI, Paris, France
### Abstract
> Mimblewimble is an electronic cash system proposed by an anonymous author in 2016. It combines several privacy-enhancing techniques initially envisioned for Bitcoin, such as Confidential Transactions (Maxwell, 2015), non-interactive merging of transactions (Saxena, Misra, Dhar, 2014), and cut-through of transaction inputs and outputs (Maxwell, 2013). As a remarkable consequence, coins can be deleted once they have been spent while maintaining public verifiability of the ledger, which is not possible in Bitcoin. This results in tremendous space savings for the ledger and efficiency gains for new users, who must verify their view of the system.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_22](https://doi.org/10.1007/978-3-030-17653-2_22)
## Proof-of-Stake Protocols for Privacy-Aware Blockchains.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2019-1.md#proof-of-stake-protocols-for-privacy-aware-blockchains)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2019-1.md#proof-of-stake-protocols-for-privacy-aware-blockchains)
### Authors
* Chaya Ganesh, Department of Computer Science, DIGIT, Aarhus University, Aarhus, Denmark
* Claudio Orlandi, Department of Computer Science, DIGIT, Aarhus University, Aarhus, Denmark
* Daniel Tschudi, Department of Computer Science, DIGIT, Aarhus University, Aarhus, Denmark
* Daniel Tschudi, Concordium, Aarhus, Denmark
### Abstract
> Proof-of-stake (PoS) protocols are emerging as one of the most promising alternative to the wasteful proof-of-work (PoW) protocols for consensus in Blockchains (or distributed ledgers). However, current PoS protocols inherently disclose both the identity and the wealth of the stakeholders, and thus seem incompatible with privacy-preserving cryptocurrencies (such as ZCash, Monero, etc.). In this paper we initiate the formal study for PoS protocols with privacy properties. Our results include:

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_23](https://doi.org/10.1007/978-3-030-17653-2_23)
## Consensus Through Herding.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2019-1.md#consensus-through-herding)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2019-1.md#consensus-through-herding)
### Authors
* T.-H. Hubert Chan, The University of Hong Kong, Lung Fu Shan, Hong Kong
* Rafael Pass, Cornell and Thunder Research, New York, USA
* Elaine Shi, Cornell and Thunder Research, New York, USA
### Abstract
> State Machine Replication (SMR) is an important abstraction for a set of nodes to agree on an ever-growing, linearly-ordered log of transactions. In decentralized cryptocurrency applications, we would like to design SMR protocols that (1) resist adaptive corruptions; and (2) achieve small bandwidth and small confirmation time. All past approaches towards constructing SMR fail to achieve either small confirmation time or small bandwidth under adaptive corruptions (without resorting to strong assumptions such as the erasure model or proof-of-work).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_24](https://doi.org/10.1007/978-3-030-17653-2_24)
