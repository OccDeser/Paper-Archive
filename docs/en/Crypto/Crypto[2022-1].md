# Crypto[2022-1]
## Rotational Differential-Linear Distinguishers of ARX Ciphers with Arbitrary Output Linear Masks.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-1].md#rotational-differential-linear-distinguishers-of-arx-ciphers-with-arbitrary-output-linear-masks)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#rotational-differential-linear-distinguishers-of-arx-ciphers-with-arbitrary-output-linear-masks)
### Authors
* Zhongfeng Niu, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Yunwen Liu, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Zhongfeng Niu, School of Cryptology, University of Chinese Academy of Sciences, Beijing, China
* Siwei Sun, School of Cryptology, University of Chinese Academy of Sciences, Beijing, China
* Yunwen Liu, School of Cryptology, University of Chinese Academy of Sciences, Beijing, China
* Zhongfeng Niu, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Yunwen Liu, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Yunwen Liu, College of Liberal Arts and Science, National University of Defense Technology, Changsha, China
* Chao Li, College of Liberal Arts and Science, National University of Defense Technology, Changsha, China
* Siwei Sun, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Yunwen Liu, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
### Abstract
> The rotational differential-linear attacks, proposed at EUROCRYPT 2021, is a generalization of differential-linear attacks by replacing the differential part of the attacks with rotational differentials. At EUROCRYPT 2021, Liu et al. presented a method based on Morawiecki et al.’s technique (FSE 2013) for evaluating the rotational differential-linear correlations for the special cases where the output linear masks are unit vectors. With this method, some powerful (rotational) differential-linear distinguishers with output linear masks being unit vectors against FRIET, Xoodoo, and Alzette were discovered. However, how to compute the rotational differential-linear correlations for arbitrary output masks was left open. In this work, we partially solve this open problem by presenting an efficient algorithm for computing the (rotational) differential-linear correlation of modulo additions for arbitrary output linear masks, based on which a technique for evaluating the (rotational) differential-linear correlation of ARX ciphers is derived. We apply the technique to Alzette, SipHash, ChaCha, and SPECK. As a result, significantly improved (rotational) differential-linear distinguishers including deterministic ones are identified. All results of this work are practical and experimentally verified to confirm the validity of our methods. In addition, we try to explain the experimental distinguishers employed in FSE 2008, FSE 2016, and CRYPTO 2020 against ChaCha. The predicted correlations are close to the experimental ones.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_1](https://doi.org/10.1007/978-3-031-15802-5_1)
## Implicit White-Box Implementations: White-Boxing ARX Ciphers.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-1].md#implicit-white-box-implementations-white-boxing-arx-ciphers)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#implicit-white-box-implementations-white-boxing-arx-ciphers)
### Authors
* Adrián Ranea, imec-COSIC, KU Leuven, Leuven, Belgium
* Bart Preneel, imec-COSIC, KU Leuven, Leuven, Belgium
* Joachim Vandersmissen, Atsec Information Security, Austin, USA
### Abstract
> Since the first white-box implementation of AES published twenty years ago, no significant progress has been made in the design of secure implementations against an attacker with full control of the device. Designing white-box implementations of existing block ciphers is a challenging problem, as all proposals have been broken. Only two white-box design strategies have been published this far: the CEJO framework, which can only be applied to ciphers with small S-boxes, and self-equivalence encodings, which were only applied to AES.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_2](https://doi.org/10.1007/978-3-031-15802-5_2)
## Superposition Meet-in-the-Middle Attacks: Updates on Fundamental Security of AES-like Hashing.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-1].md#superposition-meet-in-the-middle-attacks-updates-on-fundamental-security-of-aes-like-hashing)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#superposition-meet-in-the-middle-attacks-updates-on-fundamental-security-of-aes-like-hashing)
### Authors
* Danping Shi, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Zhenzhen Bao, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Jian Guo, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Yi Tu, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Zhenzhen Bao, Institute for Network Sciences and Cyberspace, BNRist, Tsinghua University, Beijing, China
* Danping Shi, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
### Abstract
> The Meet-in-the-Middle approach is one of the most powerful cryptanalysis techniques, demonstrated by its applications in preimage attacks on the full MD4, MD5, Tiger, HAVAL, and Haraka-512 v2 hash functions, and key recovery of the full block cipher KTANTAN. The success relies on the separation of a primitive into two independent chunks, where each active cell of the state is used to represent only one chunk or is otherwise considered unusable once mixed. We observe that some of such cells are linearly mixed and can be as useful as the independent ones. This leads to the introduction of superposition states and a whole suite of accompanied techniques, which we incorporate into the MILP-based search framework proposed by Bao et al. at EUROCRYPT 2021 and Dong et al. at CRYPTO 2021, and find applications on a wide range of AES-like hash functions and block ciphers.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_3](https://doi.org/10.1007/978-3-031-15802-5_3)
## Triangulating Rebound Attack on AES-like Hashing.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-1].md#triangulating-rebound-attack-on-aes-like-hashing)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#triangulating-rebound-attack-on-aes-like-hashing)
### Authors
* Xiaoyang Dong, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, China
* Jian Guo, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Shun Li, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Phuong Pham, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Xiaoyang Dong, National Financial Cryptography Research Center, Beijing, China
* Shun Li, Department of Computer Science and Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
### Abstract
> The rebound attack was introduced by Mendel et al. at FSE 2009 to fulfill a heavy middle round of a differential path for free, utilizing the degree of freedom from states. The inbound phase was extended to 2 rounds by the Super-Sbox technique invented by Lamberger et al. at ASIACRYPT 2009 and Gilbert and Peyrin at FSE 2010. In ASIACRYPT 2010, Sasaki et al. further reduced the requirement of memory by introducing the non-full-active Super-Sbox. In this paper, we further develop this line of research by introducing Super-Inbound, which is able to connect multiple 1-round or 2-round (non-full-active) Super-Sbox inbound phases by utilizing fully the degrees of freedom from both states and key, yet without the use of large memory. This essentially extends the inbound phase by up to 3 rounds. We applied this technique to find classic or quantum collisions on several AES-like hash functions, and improved the attacked round number by 1 to 5 in targets including AES-128 and SKINNY hashing modes, Saturnin-Hash, and Grøstl-512. To demonstrate the correctness of our attacks, the semi-free-start collision on 6-round AES-128-MMO/MP with estimated time complexity \(2^{24}\) in classical setting was implemented and an example pair was found instantly on a standard PC.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_4](https://doi.org/10.1007/978-3-031-15802-5_4)
## Public Randomness Extraction with Ephemeral Roles and Worst-Case Corruptions.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-1].md#public-randomness-extraction-with-ephemeral-roles-and-worst-case-corruptions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#public-randomness-extraction-with-ephemeral-roles-and-worst-case-corruptions)
### Authors
* Jesper Buus Nielsen, Aarhus University, Aarhus, Denmark
* João Ribeiro, Carnegie Mellon University, Pittsburgh, PA, USA
* Maciej Obremski, National University of Singapore, Singapore, Singapore
### Abstract
> We distill a simple information-theoretic model for randomness extraction motivated by the task of generating publicly verifiable randomness in blockchain settings and which is closely related to You-Only-Speak-Once (YOSO) protocols (CRYPTO 2021). With the goal of avoiding denial-of-service attacks, parties speak only once and in sequence by broadcasting a public value and forwarding secret values to future parties. Additionally, an unbounded adversary can corrupt any chosen subset of at most t parties. In contrast, existing YOSO protocols only handle random corruptions. As a notable example, considering worst-case corruptions allows us to reduce trust in the role assignment mechanism, which is assumed to be perfectly random in YOSO.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_5](https://doi.org/10.1007/978-3-031-15802-5_5)
## (Nondeterministic) Hardness vs. Non-malleability.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-1].md#nondeterministic-hardness-vs-non-malleability)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#nondeterministic-hardness-vs-non-malleability)
### Authors
* Marshall Ball, New York University, New York, USA
* Dana Dachman-Soled, University of Maryland, College Park, USA
* Julian Loss, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### Abstract
> We present the first truly explicit constructions of non-malleable codes against tampering by bounded polynomial size circuits. These objects imply unproven circuit lower bounds and our construction is secure provided \(\textsf{E}\) requires exponential size nondeterministic circuits, an assumption from the derandomization literature.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_6](https://doi.org/10.1007/978-3-031-15802-5_6)
## Short Leakage Resilient and Non-malleable Secret Sharing Schemes.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-1].md#short-leakage-resilient-and-non-malleable-secret-sharing-schemes)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#short-leakage-resilient-and-non-malleable-secret-sharing-schemes)
### Authors
* Nishanth Chandran, Microsoft Research, Bengaluru, India
* Sai Lakshmi Bhavana Obbattu, Microsoft Research, Bengaluru, India
* Bhavana Kanukurthi, Department of Computer Science and Automation, Indian Institute of Science, Bengaluru, India
* Sruthi Sekar, UC Berkeley, Berkeley, CA, USA
### Abstract
> Leakage resilient secret sharing (LRSS) allows a dealer to share a secret amongst n parties such that any authorized subset of the parties can recover the secret from their shares, while an adversary that obtains shares of any unauthorized subset of parties along with bounded leakage from the other shares learns no information about the secret. Non-malleable secret sharing (NMSS) provides a guarantee that even shares that are tampered by an adversary will reconstruct to either the original message or something independent of it.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_7](https://doi.org/10.1007/978-3-031-15802-5_7)
## Cryptography from Pseudorandom Quantum States.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-1].md#cryptography-from-pseudorandom-quantum-states)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#cryptography-from-pseudorandom-quantum-states)
### Authors
* Prabhanjan Ananth, UCSB, Santa Barbara, USA
* Luowen Qian, Boston University, Boston, USA
* Henry Yuen, Columbia University, New York, USA
### Abstract
> Pseudorandom states, introduced by Ji, Liu and Song (Crypto’18), are efficiently-computable quantum states that are computationally indistinguishable from Haar-random states. One-way functions imply the existence of pseudorandom states, but Kretschmer (TQC’20) recently constructed an oracle relative to which there are no one-way functions but pseudorandom states still exist. Motivated by this, we study the intriguing possibility of basing interesting cryptographic tasks on pseudorandom states.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_8](https://doi.org/10.1007/978-3-031-15802-5_8)
## Certified Everlasting Zero-Knowledge Proof for QMA.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-1].md#certified-everlasting-zero-knowledge-proof-for-qma)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#certified-everlasting-zero-knowledge-proof-for-qma)
### Authors
* Taiga Hiroka, Yukawa Institute for Theoretical Physics, Kyoto University, Kyoto, Japan
* Tomoyuki Morimae, Yukawa Institute for Theoretical Physics, Kyoto University, Kyoto, Japan
* Takashi Yamakawa, Yukawa Institute for Theoretical Physics, Kyoto University, Kyoto, Japan
* Ryo Nishimaki, NTT Corporation, Tokyo, Japan
* Takashi Yamakawa, NTT Corporation, Tokyo, Japan
### Abstract
> In known constructions of classical zero-knowledge protocols for \({\textbf {NP}}\), either zero-knowledge or soundness holds only against computationally bounded adversaries. Indeed, achieving both statistical zero-knowledge and statistical soundness at the same time with classical verifier is impossible for \({\textbf {NP}}\) unless the polynomial-time hierarchy collapses, and it is also believed to be impossible even with a quantum verifier. In this work, we introduce a novel compromise, which we call the certified everlasting zero-knowledge proof for \({\textbf {QMA}}\). It is a computational zero-knowledge proof for \({\textbf {QMA}}\), but the verifier issues a classical certificate that shows that the verifier has deleted its quantum information. If the certificate is valid, even an unbounded malicious verifier can no longer learn anything beyond the validity of the statement.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_9](https://doi.org/10.1007/978-3-031-15802-5_9)
## Quantum Commitments and Signatures Without One-Way Functions.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-1].md#quantum-commitments-and-signatures-without-one-way-functions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#quantum-commitments-and-signatures-without-one-way-functions)
### Authors
* Tomoyuki Morimae, Yukawa Institute for Theoretical Physics, Kyoto University, Kyoto, Japan
* Takashi Yamakawa, Yukawa Institute for Theoretical Physics, Kyoto University, Kyoto, Japan
* Takashi Yamakawa, NTT Social Informatics Laboratories, Tokyo, Japan
### Abstract
> In the classical world, the existence of commitments is equivalent to the existence of one-way functions. In the quantum setting, on the other hand, commitments are not known to imply one-way functions, but all known constructions of quantum commitments use at least one-way functions. Are one-way functions really necessary for commitments in the quantum world? In this work, we show that non-interactive quantum commitments (for classical messages) with computational hiding and statistical binding exist if pseudorandom quantum states exist. Pseudorandom quantum states are sets of quantum states that are efficiently generated but their polynomially many copies are computationally indistinguishable from the same number of copies of Haar random states [Ji, Liu, and Song, CRYPTO 2018]. It is known that pseudorandom quantum states exist even if \(\textbf{BQP}=\textbf{QMA}\) (relative to a quantum oracle) [Kretschmer, TQC 2021], which means that pseudorandom quantum states can exist even if no quantum-secure classical cryptographic primitive exists. Our result therefore shows that quantum commitments can exist even if no quantum-secure classical cryptographic primitive exists. In particular, quantum commitments can exist even if no quantum-secure one-way function exists. In this work, we also consider digital signatures, which are other fundamental primitives in cryptography. We show that one-time secure digital signatures with quantum public keys exist if pseudorandom quantum states exist. In the classical setting, the existence of digital signatures is equivalent to the existence of one-way functions. Our result, on the other hand, shows that quantum signatures can exist even if no quantum-secure classical cryptographic primitive (including quantum-secure one-way functions) exists.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_10](https://doi.org/10.1007/978-3-031-15802-5_10)
## Semi-quantum Tokenized Signatures.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-1].md#semi-quantum-tokenized-signatures)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#semi-quantum-tokenized-signatures)
### Authors
* Omri Shmueli, Tel Aviv University, Tel Aviv, Israel
### Abstract
> Quantum tokenized signature schemes (Ben-David and Sattath, QCrypt 2017) allow a sender to generate and distribute quantum unclonable states which grant their holder a one-time permission to sign in the name of the sender. Such schemes are a strengthening of public-key quantum money schemes, as they imply public-key quantum money where some channels of communication in the system can be made classical.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_11](https://doi.org/10.1007/978-3-031-15802-5_11)
## Structure-Aware Private Set Intersection, with Applications to Fuzzy Matching.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-1].md#structure-aware-private-set-intersection-with-applications-to-fuzzy-matching)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#structure-aware-private-set-intersection-with-applications-to-fuzzy-matching)
### Authors
* Gayathri Garimella, Oregon State University, Corvallis, USA
* Mike Rosulek, Oregon State University, Corvallis, USA
* Jaspal Singh, Oregon State University, Corvallis, USA
### Abstract
> In two-party private set intersection (PSI), Alice holds a set X, Bob holds a set Y, and they learn (only) the contents of \(X \cap Y\). We introduce structure-aware PSI protocols, which take advantage of situations where Alice’s set X is publicly known to have a certain structure. The goal of structure-aware PSI is to have communication that scales with the description size of Alice’s set, rather its cardinality.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_12](https://doi.org/10.1007/978-3-031-15802-5_12)
## Two-Round MPC Without Round Collapsing Revisited - Towards Efficient Malicious Protocols.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-1].md#two-round-mpc-without-round-collapsing-revisited-towards-efficient-malicious-protocols)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#two-round-mpc-without-round-collapsing-revisited-towards-efficient-malicious-protocols)
### Authors
* Huijia Lin, University of Washington, Seattle, USA
* Tianren Liu, CFCS, Peking University, Beijing, China
### Abstract
> Recent works have made exciting progress on the construction of round optimal, two-round, Multi-Party Computation (MPC) protocols. However, most proposals so far are still complex and inefficient. In this work, we improve the simplicity and efficiency of two-round MPC in the setting with dishonest majority and malicious security. Our protocols make use of the Random Oracle (\({\textsf{RO}}\)) and a generalization of the Oblivious Linear Evaluation (\(\textsf{OLE}\)) correlated randomness, called tensor \(\textsf{OLE}\), over a finite field \(\mathbb {F}\), and achieve the following:

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_13](https://doi.org/10.1007/978-3-031-15802-5_13)
## More Efficient Dishonest Majority Secure Computation over $\mathbb {Z}_{2^k}$ via Galois Rings.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-1].md#more-efficient-dishonest-majority-secure-computation-over-mathbb-z-2-k-via-galois-rings)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#more-efficient-dishonest-majority-secure-computation-over-mathbb-z-2-k-via-galois-rings)
### Authors
* Daniel Escudero, J.P. Morgan AI Research, New York, USA
* Chaoping Xing, School of Electronic Information and Electrical Engineering, Shanghai Jiao Tong University, Shanghai, China
* Chen Yuan, School of Electronic Information and Electrical Engineering, Shanghai Jiao Tong University, Shanghai, China
### Abstract
> In this work we present a novel actively secure multiparty computation protocol in the dishonest majority setting, where the computation domain is a ring of the type \(\mathbb {Z}_{2^k}\). Instead of considering an “extension ring” of the form \(\mathbb {Z}_{2^{k+\kappa }}\) as in SPD\(\mathbb {Z}_{2^k}\) (Cramer et al., CRYPTO 2018) and its derivatives, we make use of an actual ring extension, or more precisely, a Galois ring extension \(\mathbb {Z}_{p^k}[\texttt{X}]/(h(\texttt{X}))\) of large enough degree, in order to ensure that the adversary cannot cheat except with negligible probability. These techniques have been used already in the context of honest majority MPC over \(\mathbb {Z}_{p^k}\), and to the best of our knowledge, our work constitutes the first study of the benefits of these tools in the dishonest majority setting.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_14](https://doi.org/10.1007/978-3-031-15802-5_14)
## Parallel Repetition of (k1, đots , kμ )-Special-Sound Multi-round Interactive Proofs.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-1].md#parallel-repetition-of-k1-ots-k-special-sound-multi-round-interactive-proofs)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#parallel-repetition-of-k1-ots-k-special-sound-multi-round-interactive-proofs)
### Authors
* Thomas Attema, CWI, Cryptology Group, Amsterdam, The Netherlands
* Serge Fehr, CWI, Cryptology Group, Amsterdam, The Netherlands
* Thomas Attema, Mathematical Institute, Leiden University, Leiden, The Netherlands
* Serge Fehr, Mathematical Institute, Leiden University, Leiden, The Netherlands
* Thomas Attema, TNO, Cyber Security and Robustness, The Hague, The Netherlands
### Abstract
> In many occasions, the knowledge error \(\kappa \) of an interactive proof is not small enough, and thus needs to be reduced. This can be done generically by repeating the interactive proof in parallel. While there have been many works studying the effect of parallel repetition on the soundness error of interactive proofs and arguments, the effect of parallel repetition on the knowledge error has largely remained unstudied. Only recently it was shown that the t-fold parallel repetition of any interactive protocol reduces the knowledge error from \(\kappa \) down to \(\kappa ^t +\nu \) for any non-negligible term \(\nu \). This generic result is suboptimal in that it does not give the knowledge error \(\kappa ^t\) that one would expect for typical protocols, and, worse, the knowledge error remains non-negligible.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_15](https://doi.org/10.1007/978-3-031-15802-5_15)
## Public-Coin 3-Round Zero-Knowledge from Learning with Errors and Keyless Multi-Collision-Resistant Hash.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-1].md#public-coin-3-round-zero-knowledge-from-learning-with-errors-and-keyless-multi-collision-resistant-hash)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#public-coin-3-round-zero-knowledge-from-learning-with-errors-and-keyless-multi-collision-resistant-hash)
### Authors
* Susumu Kiyoshima, NTT Research, Sunnyvale, CA, USA
### Abstract
> We construct a public-coin 3-round zero-knowledge argument for NP assuming (i) the sub-exponential hardness of the learning with errors (LWE) problem and (ii) the existence of keyless multi-collision-resistant hash functions against slightly super-polynomial-time adversaries. These assumptions are almost identical to those that were used recently to obtain a private-coin 3-round zero-knowledge argument [Bitansky et al., STOC 2018]. (The difference is that we assume sub-exponential hardness instead of quasi-polynomial hardness for the LWE problem.)

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_16](https://doi.org/10.1007/978-3-031-15802-5_16)
## Faster Sounder Succinct Arguments and sfIOPs.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-1].md#faster-sounder-succinct-arguments-and-sfiops)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#faster-sounder-succinct-arguments-and-sfiops)
### Authors
* Justin Holmgren, NTT Research, Sunnyvale, USA
* Ron D. Rothblum, Technion, Haifa, Israel
### Abstract
> Succinct arguments allow a prover to convince a verifier that a given statement is true, using an extremely short proof. A major bottleneck that has been the focus of a large body of work is in reducing the overhead incurred by the prover in order to prove correctness of the computation. By overhead we refer to the cost of proving correctness, divided by the cost of the original computation.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_17](https://doi.org/10.1007/978-3-031-15802-5_17)
## Succinct Interactive Oracle Proofs: Applications and Limitations.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-1].md#succinct-interactive-oracle-proofs-applications-and-limitations)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#succinct-interactive-oracle-proofs-applications-and-limitations)
### Authors
* Shafik Nassar, Technion, Haifa, Israel
* Ron D. Rothblum, Technion, Haifa, Israel
### Abstract
> Interactive Oracle Proofs (\(\textsf{IOP}\)s) are a new type of proof-system that combines key properties of interactive proofs and \(\textsf{PCP}\)s: \(\textsf{IOP}\)s enable a verifier to be convinced of the correctness of a statement by interacting with an untrusted prover while reading just a few bits of the messages sent by the prover. \(\textsf{IOP}\)s have become very prominent in the design of efficient proof-systems in recent years.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_18](https://doi.org/10.1007/978-3-031-15802-5_18)
## Candidate Witness Encryption from Lattice Techniques.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-1].md#candidate-witness-encryption-from-lattice-techniques)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#candidate-witness-encryption-from-lattice-techniques)
### Authors
* Rotem Tsabary, Google Research, Tel Aviv, Israel
### Abstract
> Witness encryption (WE), first introduced by Garg, Gentry, Sahai and Waters in [GGSW13], is an encryption scheme where messages are encrypted with respect to instances of an \(\textbf{NP}\) relation, such that in order to decrypt one needs to know a valid witness for the instance that is associated with the ciphertext.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_19](https://doi.org/10.1007/978-3-031-15802-5_19)
## Securing Approximate Homomorphic Encryption Using Differential Privacy.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-1].md#securing-approximate-homomorphic-encryption-using-differential-privacy)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#securing-approximate-homomorphic-encryption-using-differential-privacy)
### Authors
* Baiyu Li, University of California, San Diego, USA
* Daniele Micciancio, University of California, San Diego, USA
* Mark Schultz, University of California, San Diego, USA
* Jessica Sorrell, University of California, San Diego, USA
### Abstract
> Recent work of Li and Micciancio (Eurocrypt 2021) has shown that the traditional formulation of indistinguishability under chosen plaintext attack (\(\textsf {IND\text {-}CPA}\)) is not adequate to capture the security of approximate homomorphic encryption against passive adversaries, and identified a stronger \(\textsf {IND\text {-}CPA}^{\textsf {D}}\) security definition (\(\textsf {IND\text {-}CPA}\) with decryption oracles) as the appropriate security target for approximate encryption schemes. We show how to transform any approximate homomorphic encryption scheme achieving the weak \(\textsf {IND\text {-}CPA}\) security definition, into one which is provably \(\textsf {IND\text {-}CPA}^{\textsf {D}}\) secure, offering strong guarantees against realistic passive attacks. The method works by postprocessing the output of the decryption function with a mechanism satisfying an appropriate notion of differential privacy (DP), adding an amount of noise tailored to the worst-case error growth of the homomorphic computation.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_20](https://doi.org/10.1007/978-3-031-15802-5_20)
## Multi-input Attribute Based Encryption and Predicate Encryption.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-1].md#multi-input-attribute-based-encryption-and-predicate-encryption)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#multi-input-attribute-based-encryption-and-predicate-encryption)
### Authors
* Shweta Agrawal, IIT Madras, Chennai, India
* Anshu Yadav, IIT Madras, Chennai, India
* Shota Yamada, National Institute of Advanced Industrial Science and Technology (AIST), Tokyo, Japan
### Abstract
> Motivated by several new and natural applications, we initiate the study of multi-input predicate encryption (\(\textsf{miPE}\)) and further develop multi-input attribute based encryption (\(\textsf{miABE}\)). Our contributions are:

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_21](https://doi.org/10.1007/978-3-031-15802-5_21)
## Formal Verification of Saber's Public-Key Encryption Scheme in EasyCrypt.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-1].md#formal-verification-of-sabers-public-key-encryption-scheme-in-easycrypt)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#formal-verification-of-sabers-public-key-encryption-scheme-in-easycrypt)
### Authors
* Andreas Hülsing, Eindhoven University of Technology, Eindhoven, The Netherlands
* Matthias Meijers, Eindhoven University of Technology, Eindhoven, The Netherlands
* Pierre-Yves Strub, Meta, Paris, France
### Abstract
> In this work, we consider the formal verification of the public-key encryption scheme of Saber, one of the selected few post-quantum cipher suites currently considered for potential standardization. We formally verify this public-key encryption scheme’s  security and \(\delta \)-correctness properties, i.e., the properties required to transform the public-key encryption scheme into an  secure and \(\delta \)-correct key encapsulation mechanism, in EasyCrypt. To this end, we initially devise hand-written proofs for these properties that are significantly more detailed and meticulous than the presently existing proofs. Subsequently, these hand-written proofs serve as a guideline for the formal verification. The results of this endeavor comprise hand-written and computer-verified proofs which demonstrate that Saber’s public-key encryption scheme indeed satisfies the desired security and correctness properties.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_22](https://doi.org/10.1007/978-3-031-15802-5_22)
## SoftSpokenOT: Quieter OT Extension from Small-Field Silent VOLE in the Minicrypt Model.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-1].md#softspokenot-quieter-ot-extension-from-small-field-silent-vole-in-the-minicrypt-model)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#softspokenot-quieter-ot-extension-from-small-field-silent-vole-in-the-minicrypt-model)
### Authors
* Lawrence Roy, Oregon State University, Corvallis, USA
### Abstract
> Given a small number of base oblivious transfers (OTs), how does one generate a large number of extended OTs as efficiently as possible? The answer has long been the seminal work of IKNP (Ishai et al., Crypto 2003) and the family of protocols it inspired, which only use Minicrypt assumptions. Recently, Boyle et al. (Crypto 2019) proposed the Silent-OT technique that improves on IKNP, but at the cost of a much stronger, non-Minicrypt assumption: the learning parity with noise (LPN) assumption. We present SoftSpokenOT, the first OT extension to improve on IKNP’s communication cost in the Minicrypt model. While IKNP requires security parameter \(\lambda \) bits of communication for each OT, SoftSpokenOT only needs \(\lambda / k\) bits, for any k, at the expense of requiring \(2^{k-1} / k\) times the computation. For small values of k, this tradeoff is favorable since IKNP-style protocols are network-bound. We implemented SoftSpokenOT and found that our protocol gives almost a \(5{\times }\) speedup over IKNP in the LAN setting.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_23](https://doi.org/10.1007/978-3-031-15802-5_23)
## Maliciously Secure Massively Parallel Computation for All-but-One Corruptions.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-1].md#maliciously-secure-massively-parallel-computation-for-all-but-one-corruptions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#maliciously-secure-massively-parallel-computation-for-all-but-one-corruptions)
### Authors
* Rex Fernando, UCLA, Los Angeles, USA
* Yuval Gelles, Hebrew University, Jerusalem, Israel
* Ilan Komargodski, Hebrew University, Jerusalem, Israel
* Ilan Komargodski, NTT Research, Sunnyvale, USA
* Elaine Shi, Carnegie Mellon University, Pittsburgh, USA
### Abstract
> The Massive Parallel Computing (MPC) model gained wide adoption over the last decade. By now, it is widely accepted as the right model for capturing the commonly used programming paradigms (such as MapReduce, Hadoop, and Spark) that utilize parallel computation power to manipulate and analyze huge amounts of data.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_24](https://doi.org/10.1007/978-3-031-15802-5_24)
## Le Mans: Dynamic and Fluid MPC for Dishonest Majority.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-1].md#le-mans-dynamic-and-fluid-mpc-for-dishonest-majority)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#le-mans-dynamic-and-fluid-mpc-for-dishonest-majority)
### Authors
* Rahul Rachuri, Department of Computer Science, Aarhus University, Aarhus, Denmark
* Peter Scholl, Department of Computer Science, Aarhus University, Aarhus, Denmark
### Abstract
> Most MPC protocols require the set of parties to be active for the entire duration of the computation. Deploying MPC for use cases such as complex and resource-intensive scientific computations increases the barrier of entry for potential participants. The model of Fluid MPC (Crypto 2021) tackles this issue by giving parties the flexibility to participate in the protocol only when their resources are free. As such, the set of parties is dynamically changing over time.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_25](https://doi.org/10.1007/978-3-031-15802-5_25)
## Oblivious Message Retrieval.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-1].md#oblivious-message-retrieval)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#oblivious-message-retrieval)
### Authors
* Zeyu Liu, Columbia University, New York, USA
* Eran Tromer, Columbia University, New York, USA
* Eran Tromer, Tel Aviv University, Tel Aviv, Israel
### Abstract
> Anonymous message delivery systems, such as private messaging services and privacy-preserving payment systems, need a mechanism for recipients to retrieve the messages addressed to them without leaking metadata or letting their messages be linked. Recipients could download all posted messages and scan for those addressed to them, but communication and computation costs are excessive at scale.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_26](https://doi.org/10.1007/978-3-031-15802-5_26)
## A More Complete Analysis of the Signal Double Ratchet Algorithm.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-1].md#a-more-complete-analysis-of-the-signal-double-ratchet-algorithm)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#a-more-complete-analysis-of-the-signal-double-ratchet-algorithm)
### Authors
* Alexander Bienstock, New York University, New York, USA
* Jaiden Fairoze, UC Berkeley, Berkeley, USA
* Sanjam Garg, UC Berkeley, Berkeley, USA
* Sanjam Garg, NTT Research, Sunnyvale, USA
* Pratyay Mukherjee, Swirlds Labs, Dallas, USA
* Srinivasan Raghuraman, Visa Research, Palo Alto, USA
### Abstract
> Seminal works by Cohn-Gordon, Cremers, Dowling, Garratt, and Stebila [EuroS &P 2017] and Alwen, Coretti and Dodis [EUROCRYPT 2019] provided the first formal frameworks for studying the widely-used Signal Double Ratchet (\(\textsf{DR}\) for short) algorithm.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_27](https://doi.org/10.1007/978-3-031-15802-5_27)
