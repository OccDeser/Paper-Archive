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
> 
> In this work we propose implicit implementations, a new design of white-box implementations based on implicit functions, and we show that current generic attacks that break CEJO or self-equivalence implementations are not successful against implicit implementations. The generation and the security of implicit implementations are related to the self-equivalences of the non-linear layer of the cipher, and we propose a new method to obtain self-equivalences based on the CCZ-equivalence. We implemented this method and many other functionalities in a new open-source tool BoolCrypt, which we used to obtain for the first time affine, linear, and even quadratic self-equivalences of the permuted modular addition. Using the implicit framework and these self-equivalences, we describe for the first time a practical white-box implementation of a generic Addition-Rotation-XOR (ARX) cipher, and we provide an open-source tool to easily generate implicit implementations of ARX ciphers.

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
> The Meet-in-the-Middle approach is one of the most powerful cryptanalysis techniques, demonstrated by its applications in preimage attacks on the full MD4, MD5, Tiger, HAVAL, and Haraka-512 v2 hash functions, and key recovery of the full block cipher KTANTAN. The success relies on the separation of a primitive into two independent chunks, where each active cell of the state is used to represent only one chunk or is otherwise considered unusable once mixed. We observe that some of such cells are linearly mixed and can be as useful as the independent ones. This leads to the introduction of superposition states and a whole suite of accompanied techniques, which we incorporate into the MILP-based search framework proposed by Bao et al. at EUROCRYPT 2021 and Dong et al. at CRYPTO 2021, and find applications on a wide range of AES-like hash functions and block ciphers.

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
> The rebound attack was introduced by Mendel et al. at FSE 2009 to fulfill a heavy middle round of a differential path for free, utilizing the degree of freedom from states. The inbound phase was extended to 2 rounds by the Super-Sbox technique invented by Lamberger et al. at ASIACRYPT 2009 and Gilbert and Peyrin at FSE 2010. In ASIACRYPT 2010, Sasaki et al. further reduced the requirement of memory by introducing the non-full-active Super-Sbox. In this paper, we further develop this line of research by introducing Super-Inbound, which is able to connect multiple 1-round or 2-round (non-full-active) Super-Sbox inbound phases by utilizing fully the degrees of freedom from both states and key, yet without the use of large memory. This essentially extends the inbound phase by up to 3 rounds. We applied this technique to find classic or quantum collisions on several AES-like hash functions, and improved the attacked round number by 1 to 5 in targets including AES-128 and SKINNY hashing modes, Saturnin-Hash, and Grøstl-512. To demonstrate the correctness of our attacks, the semi-free-start collision on 6-round AES-128-MMO/MP with estimated time complexity \(2^{24}\) in classical setting was implemented and an example pair was found instantly on a standard PC.

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
> 
> We study the maximum corruption threshold t which allows for unconditional randomness extraction in our model:
> 
> With respect to feasibility, we give protocols for t corruptions and \(n=6t+1\) or \(n=5t\) parties depending on whether the adversary learns secret values forwarded to corrupted parties immediately once they are sent or only once the corrupted party is executed, respectively. Both settings are motivated by practical implementations of secret value forwarding. To design such protocols, we go beyond the committee-based approach that is sufficient for random corruptions in YOSO but turns out to be sub-optimal for chosen corruptions.
> 
> To complement our protocols, we show that low-error randomness extraction is impossible with corruption threshold t and \(n\le 4t\) parties in both settings above. This also provides a separation between chosen and random corruptions, since the latter allows for randomness extraction with close to n/2 random corruptions.

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
> 
> Prior works on NMC for polysize circuits, either required an untamperable CRS [Cheraghchi, Guruswami ITCS’14; Faust, Mukherjee, Venturi, Wichs EUROCRYPT’14] or very strong cryptographic assumptions [Ball, Dachman-Soled, Kulkarni, Lin, Malkin EUROCRYPT’18; Dachman-Soled, Komargodski, Pass CRYPTO’21]. Both of works in the latter category only achieve non-malleability with respect to efficient distinguishers and, more importantly, utilize cryptographic objects for which no provably secure instantiations are known outside the random oracle model. In this sense, none of the prior yields fully explicit codes from non-heuristic assumptions. Our assumption is not known to imply the existence of one-way functions, which suggests that cryptography is unnecessary for non-malleability against this class.
> 
> Technically, security is shown by non-deterministically reducing polynomial size tampering to split-state tampering. The technique is general enough that it allows us to construct the first seedless non-malleable extractors [Cheraghchi, Guruswami TCC’14] for sources sampled by polynomial size circuits [Trevisan, Vadhan FOCS’00] (resp. recognized by polynomial size circuits [Shaltiel CC’11]) and tampered by polynomial size circuits. Our construction is secure assuming \(\textsf{E}\) requires exponential size \(\varSigma _4\)-circuits (resp. \(\varSigma _3\)-circuits), this assumption is the state-of-the-art for extracting randomness from such sources (without non-malleability).
> 
> Several additional results are included in the full version of this paper [Eprint 2022/070]. First, we observe that non-malleable codes and non-malleable secret sharing [Goyal, Kumar STOC’18] are essentially equivalent with respect to polynomial size tampering. In more detail, assuming \(\textsf{E}\) is hard for exponential size nondeterministic circuits, any efficient secret sharing scheme can be made non-malleable against polynomial size circuit tampering.
> 
> Second, we observe that the fact that our constructions only achieve inverse polynomial (statistical) security is inherent. Extending a result from [Applebaum, Artemenko, Shaltiel, Yang CC’16] we show it is impossible to do better using black-box reductions. However, we extend the notion of relative error from [Applebaum, Artemenko, Shaltiel, Yang CC’16] to non-malleable extractors and show that they can be constructed from similar assumptions.
> 
> Third, we observe that relative-error non-malleable extractors can be utilized to render a broad class of cryptographic primitives tamper and leakage resilient, while preserving negligible security guarantees.

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
> 
> The most important parameter of LRSS and NMSS schemes is the size of each share. For LRSS, in the local leakage model (i.e., when the leakage functions on each share are independent of each other and bounded), Srinivasan and Vasudevan (CRYPTO 2019), gave a scheme for threshold access structures with share size of approximately \((3\cdot \mathsf {message \ length} \ + \mu )\), where \(\mu \) is the number of bits of leakage tolerated from every share. For the case of NMSS, the best known result (again due to the above work) has share size of \((11\cdot \mathsf {message \ length})\).
> 
> In this work, we build LRSS and NMSS schemes with much improved share size. Additionally, our LRSS scheme obtains optimal share and leakage size. In particular, we get the following results:
> 
> We build an information-theoretic LRSS scheme for threshold access structures with a share size of \((\mathsf {message \ length} \ + \mu )\).
> 
> As an application of the above result, we obtain an NMSS with a share size of \((4\cdot \mathsf {message \ length})\). Further, for the special case of sharing random messages, we obtain a share size of \((2\cdot \mathsf {message \ length})\).

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
> 
> We construct, assuming the existence of pseudorandom state generators that map a \(\lambda \)-bit seed to a \(\omega (\log \lambda )\)-qubit state, (a) statistically binding and computationally hiding commitments and (b) pseudo one-time encryption schemes. A consequence of (a) is that pseudorandom states are sufficient to construct maliciously secure multiparty computation protocols in the dishonest majority setting.
> 
> Our constructions are derived via a new notion called pseudorandom function-like states (PRFS), a generalization of pseudorandom states that parallels the classical notion of pseudorandom functions. Beyond the above two applications, we believe our notion can effectively replace pseudorandom functions in many other cryptographic applications.

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
> 
> We construct a certified everlasting zero-knowledge proof for \({\textbf {QMA}}\). For the construction, we introduce a new quantum cryptographic primitive, which we call commitment with statistical binding and certified everlasting hiding, where the hiding property becomes statistical once the receiver has issued a valid certificate that shows that the receiver has deleted the committed information. We construct commitment with statistical binding and certified everlasting hiding from quantum encryption with certified deletion by Broadbent and Islam [TCC 2020] (in a black-box way), and then combine it with the quantum sigma-protocol for \({\textbf {QMA}}\) by Broadbent and Grilo [FOCS 2020] to construct the certified everlasting zero-knowledge proof for \({\textbf {QMA}}\). Our constructions are secure in the quantum random oracle model. Commitment with statistical binding and certified everlasting hiding itself is of independent interest, and there will be many other useful applications beyond zero-knowledge.

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
> 
> An even stronger primitive is semi-quantum tokenized signatures, where the sender is classical and can delegate the generation of the token to a (possibly malicious) quantum receiver. Semi-quantum tokenized signature schemes imply a powerful version of public-key quantum money satisfying two key features:
> 
> The bank is classical and the scheme can execute on a completely classical communication network. In addition, the bank is stateless and after the creation of a banknote, does not hold any information nor trapdoors except the balance of accounts in the system. Such quantum money scheme solves the main open problem presented by Radian and Sattath (AFT 2019).
> 
> Furthermore, the classical-communication transactions between users in the system are direct and do not need to go through the bank. This enables the transactions to be both classical and private.
> 
> While fully-quantum tokenized signatures (where the sender is quantum and generates the token by itself) are known based on quantum-secure indistinguishability obfuscation and injective one-way functions, the semi-quantum version is not known under any computational assumption. In this work we construct a semi-quantum tokenized signature scheme based on quantum-secure indistinguishability obfuscation and the sub-exponential hardness of the Learning with Errors problem. In the process, we show new properties of quantum coset states and a new hardness result on indistinguishability obfuscation of classical subspace membership circuits.

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
> 
> We introduce a new generic paradigm for structure-aware PSI based on function secret-sharing (FSS). In short, if there exists compact FSS for a class of structured sets, then there exists a semi-honest PSI protocol that supports this class of input sets, with communication cost proportional only to the FSS share size. Several prior protocols for efficient (plain) PSI can be viewed as special cases of our new paradigm, with an implicit FSS for unstructured sets.
> 
> Our PSI protocol can be instantiated from a significantly weaker flavor of FSS, which has not been previously studied. We develop several improved FSS techniques that take advantage of these relaxed requirements, and which are in some cases exponentially better than existing FSS.
> 
> Finally, we explore in depth a natural application of structure-aware PSI. If Alice’s set X is the union of many radius-\(\delta \) balls in some metric space, then an intersection between X and Y corresponds to fuzzy PSI, in which the parties learn which of their points are within distance \(\delta \). In structure-aware PSI, the communication cost scales with the number of balls in Alice’s set, rather than their total volume. Our techniques lead to efficient fuzzy PSI for \(\ell _\infty \) and \(\ell _1\) metrics (and approximations of \(\ell _2\) metric) in high dimensions. We implemented this fuzzy PSI protocol for 2-dimensional \(\ell _\infty \) metrics. For reasonable input sizes, our protocol requires 45–60% less time and 85% less communication than competing approaches that simply reduce the problem to plain PSI.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_12](https://doi.org/10.1007/978-3-031-15802-5_12)
## Two-Round MPC Without Round Collapsing Revisited - Towards Efficient Malicious Protocols.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-1].md#two-round-mpc-without-round-collapsing-revisited-towards-efficient-malicious-protocols)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#two-round-mpc-without-round-collapsing-revisited-towards-efficient-malicious-protocols)
### Authors
* Huijia Lin, University of Washington, Seattle, USA
* Tianren Liu, CFCS, Peking University, Beijing, China
### Abstract
> Recent works have made exciting progress on the construction of round optimal, two-round, Multi-Party Computation (MPC) protocols. However, most proposals so far are still complex and inefficient. In this work, we improve the simplicity and efficiency of two-round MPC in the setting with dishonest majority and malicious security. Our protocols make use of the Random Oracle (\({\textsf{RO}}\)) and a generalization of the Oblivious Linear Evaluation (\(\textsf{OLE}\)) correlated randomness, called tensor \(\textsf{OLE}\), over a finite field \(\mathbb {F}\), and achieve the following:
> 
> MPC for Boolean Circuits: Our two-round, maliciously secure MPC protocols for computing Boolean circuits, has overall (asymptotic) computational cost \(O(S\cdot n^3 \cdot \log |\mathbb {F}|)\), where S is the size of the circuit computed, n the number of parties, and \(\mathbb {F}\) a field of characteristic two. The protocols also make black-box calls to a Pseudo-Random Function (PRF).
> 
> MPC for Arithmetic Branching Programs (ABPs): Our two-round, information theoretically and maliciously secure protocols for computing ABPs over a general field \(\mathbb {F}\) has overall computational cost \(O(S^{1.5}\cdot n^3\cdot \log |\mathbb {F}|)\), where S is the size of ABP computed.
> 
> Both protocols achieve security levels inverse proportional to the size of the field \(|\mathbb {F}|\).
> 
> Our construction is built upon the simple two-round MPC protocols of [Lin-Liu-Wee TCC’20], which are only semi-honest secure. Our main technical contribution lies in ensuring malicious security using simple and lightweight checks, which incur only a constant overhead over the complexity of the protocols by Lin, Liu, and Wee. In particular, in the case of computing Boolean circuits, our malicious MPC protocols have the same complexity (up to a constant overhead) as (insecurely) computing Yao’s garbled circuits in a distributed fashion.
> 
> Finally, as an additional contribution, we show how to efficiently generate tensor \(\textsf{OLE}\) correlation in fields of characteristic two using OT.

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
> 
> Making use of Galois ring extensions requires great care in order to avoid paying an extra overhead due to the use of larger rings. To address this, reverse multiplication-friendly embeddings (RMFEs) have been used in the honest majority setting (e.g. Cascudo et al., CRYPTO 2018), and more recently in the dishonest majority setting for computation over \(\mathbb {Z}_2\) (Cascudo and Gundersen, TCC 2020). We make use of the recent RMFEs over \(\mathbb {Z}_{p^k}\) from (Cramer et al., CRYPTO 2021), together with adaptations of some RMFE optimizations introduced in (Abspoel et al., ASIACRYPT 2021) in the honest majority setting, to achieve an efficient protocol that only requires in its online phase \(12.4k(n-1)\) bits of amortized communication complexity and one round of communication for each multiplication gate. We also instantiate the necessary offline phase using Oblivious Linear Evaluation (OLE) by generalizing the approach based on Oblivious Transfer (OT) proposed in MASCOT (Keller et al., CCS 2016). To this end, and as an additional contribution of potential independent interest, we present a novel technique using Multiplication-Friendly Embeddings (MFEs) to achieve OLE over Galois ring extensions using black-box access to an OLE protocol over the base ring \(\mathbb {Z}_{p^k}\) without paying a quadratic cost in terms of the extension degree. This generalizes the approach in MASCOT based on Correlated OT Extension. Finally, along the way we also identify a bug in a central proof in MASCOT, and we implicitly present a fix in our generalized proof.

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
> 
> In this work we show that indeed the t-fold parallel repetition of any \((k_1,\dots ,k_{\mu })\)-special-sound multi-round public-coin interactive proof optimally reduces the knowledge error from \(\kappa \) down to \(\kappa ^t\). At the core of our results is an alternative, in some sense more fine-grained, measure of quality of a dishonest prover than its success probability, for which we show that it characterizes when knowledge extraction is possible. This new measure then turns out to be very convenient when it comes to analyzing the parallel repetition of such interactive proofs.
> 
> While parallel repetition reduces the knowledge error, it is easily seen to increase the completeness error. For this reason, we generalize our result to the case of s-out-of-t threshold parallel repetition, where the verifier accepts if s out of t of the parallel instances are accepting. An appropriately chosen threshold s allows both the knowledge error and completeness error to be reduced simultaneously.

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
> 
> In this work, for a large class of Boolean circuits \(C=C(x,w)\), we construct succinct arguments for the language \(\{ x : \exists w\; C(x,w)=1\}\), with \(2^{-\lambda }\) soundness error, and with prover overhead \(\textrm{polylog}(\lambda )\). This result relies on the existence of (sub-exponentially secure) linear-size computable collision-resistant hash functions. The class of Boolean circuits that we can handle includes circuits with a repeated sub-structure, which arise in natural applications such as batch computation/verification, hashing and related block chain applications.
> 
> The succinct argument is obtained by constructing interactive oracle proofs for the same class of languages, with \(\textrm{polylog}(\lambda )\) prover overhead, and soundness error \(2^{-\lambda }\). Prior to our work, the best \(\textsf{IOP}\)s for Boolean circuits either had prover overhead of \(\textrm{polylog}(|C|)\) based on efficient \(\textsf{PCP}\)s due to Ben Sasson et al. (STOC, 2013) or \(\textrm{poly}(\lambda )\) due to Rothblum and Ron-Zewi (STOC, 2022).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_17](https://doi.org/10.1007/978-3-031-15802-5_17)
## Succinct Interactive Oracle Proofs: Applications and Limitations.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-1].md#succinct-interactive-oracle-proofs-applications-and-limitations)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#succinct-interactive-oracle-proofs-applications-and-limitations)
### Authors
* Shafik Nassar, Technion, Haifa, Israel
* Ron D. Rothblum, Technion, Haifa, Israel
### Abstract
> Interactive Oracle Proofs (\(\textsf{IOP}\)s) are a new type of proof-system that combines key properties of interactive proofs and \(\textsf{PCP}\)s: \(\textsf{IOP}\)s enable a verifier to be convinced of the correctness of a statement by interacting with an untrusted prover while reading just a few bits of the messages sent by the prover. \(\textsf{IOP}\)s have become very prominent in the design of efficient proof-systems in recent years.
> 
> In this work we study succinct \(\textsf{IOP}\)s, which are \(\textsf{IOP}\)s in which the communication complexity is polynomial (or even linear) in the original witness. While there are strong impossibility results for the existence of succinct \(\textsf{PCP}\)s (i.e., \(\textsf{PCP}\)s whose length is polynomial in the witness), it is known that the rich class of \(\textsf{NP}\) relations that are decidable in small space have succinct \(\textsf{IOP}\)s. In this work we show both new applications, and limitations, for succinct \(\textsf{IOP}\)s:
> 
> First, using one-way functions, we show how to compile \(\textsf{IOP}\)s into zero-knowledge proofs, while nearly preserving the proof length. This complements a recent line of work, initiated by Ben Sasson et al. (TCC, 2016B), who compile \(\textsf{IOP}\)s into super-succinct zero-knowledge arguments.
> 
> Applying the compiler to the state-of-the-art succinct \(\textsf{IOP}\)s yields zero-knowledge proofs for bounded-space \(\textsf{NP}\) relations, with communication that is nearly equal to the original witness length. This yields the shortest known zero-knowledge proofs from the minimal assumption of one-way functions.
> 
> Second, we give a barrier for obtaining succinct \(\textsf{IOP}\)s for more general \(\textsf{NP}\) relations. In particular, we show that if a language has a succinct \(\textsf{IOP}\), then it can be decided in space that is proportionate only to the witness length, after a bounded-time probabilistic preprocessing. We use this result to show that under a simple and plausible (but to the best of our knowledge, new) complexity-theoretic conjecture, there is no succinct \(\textsf{IOP}\) for \(\textsf{CSAT}\).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_18](https://doi.org/10.1007/978-3-031-15802-5_18)
## Candidate Witness Encryption from Lattice Techniques.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-1].md#candidate-witness-encryption-from-lattice-techniques)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#candidate-witness-encryption-from-lattice-techniques)
### Authors
* Rotem Tsabary, Google Research, Tel Aviv, Israel
### Abstract
> Witness encryption (WE), first introduced by Garg, Gentry, Sahai and Waters in [GGSW13], is an encryption scheme where messages are encrypted with respect to instances of an \(\textbf{NP}\) relation, such that in order to decrypt one needs to know a valid witness for the instance that is associated with the ciphertext.
> 
> Despite of significant efforts in the past decade to construct WE from standard assumptions, to the best of our knowledge all of the existing WE candidates either rely directly on iO or use techniques that also seem to imply iO in the same way that they seem to imply WE.
> 
> In this work we propose a new hardness assumption with regard to lattice trapdoors and show a witness encryption candidate which is secure under it. Contrary to previous WE candidates, our technique is trivially broken when one tries to convert it to iO, which suggests that the security relies on a different mechanism. We view the gap between WE and iO as an analogue to the gap between ABE and FE and thus potentially significant.
> 
> Intuitively, the assumption says that “the best an attacker can do with a trapdoor sample is to use it semi-honestly” – i.e. that LWE with respect to a public matrix \(\textbf{A}\), given as auxiliary information a trapdoor sample \(\textbf{K}\leftarrow \textbf{A}^{\textsf{TD}}(\mathbf {{B}})\), is as hard as LWE with respect to the public matrix \([\textbf{A}|\mathbf {{B}}]\) and no auxiliary information.
> 
> In order to formally utilize the assumption we define a notion of LWE oracles with generic distributions of public matrices and auxiliary information. This model allows to bound the hardness of LWE with respect to one distribution as a function of the hardness of LWE with respect to another distribution. Repeated arguments of this flavor can be used as a sequence of hybrids in order to gradually change the challenge that an adversary is facing while keeping track on the security loss in each step of the proof. Typically security proofs of LWE-based systems implicitly make arguments of this flavor for distributions that are indistinguishable, while our model allows to make relaxed arguments that in some cases suffice for the proof requirements.

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
> 
> We apply these results to the approximate homomorphic encryption scheme of Cheon, Kim, Kim, and Song (CKKS, Asiacrypt 2017), proving that adding Gaussian noise to the output of CKKS decryption suffices to achieve \(\textsf {IND\text {-}CPA}^{\textsf {D}}\) security. We precisely quantify how much Gaussian noise must be added by proving nearly matching upper and lower bounds, showing that one cannot hope to significantly reduce the amount of noise added in this post-processing step. As an additional contribution, we present and use a finer grained definition of bit security that distinguishes between a computational security parameter (c) and a statistical one (s). Based on our upper and lower bounds, we propose parameters for the counter-measures recently adopted by open-source libraries implementing CKKS.
> 
> Lastly, we investigate the plausible claim that smaller DP noise parameters might suffice to achieve \(\textsf {IND\text {-}CPA}^{\textsf {D}}\)-security for schemes supporting more accurate (dynamic, key dependent) estimates of ciphertext noise during decryption. Perhaps surprisingly, we show that this claim is false, and that DP mechanisms with noise parameters tailored to the error present in a given ciphertext, rather than worst-case error, are vulnerable to \(\textsf {IND\text {-}CPA}^{\textsf {D}}\) attacks.

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
> 
> 1. Formalizing Security: We provide definitions for \(\textsf{miABE}\) and \(\textsf{miPE}\) in the symmetric key setting and formalize security in the standard indistinguishability (IND) paradigm, against unbounded collusions.
> 
> 2. Two-input \({\textsf{ABE}}\) for \({\textsf{NC}}_1\) from \(\textsf{LWE}\) and Pairings: We provide the first constructions for two-input key-policy \({\textsf{ABE}}\) for \({\textsf{NC}}_1\) from \(\textsf{LWE}\) and pairings. Our construction leverages a surprising connection between techniques recently developed by Agrawal and Yamada (Eurocrypt, 2020) in the context of succinct single-input ciphertext-policy \({\textsf{ABE}}\), to the seemingly unrelated problem of two-input key-policy \({\textsf{ABE}}\). Similarly to Agrawal-Yamada, our construction is proven secure in the bilinear generic group model. By leveraging inner product functional encryption and using (a variant of) the KOALA knowledge assumption, we obtain a construction in the standard model analogously to Agrawal, Wichs and Yamada (TCC, 2020).
> 
> 3. Heuristic two-input \({\textsf{ABE}}\) for \(\textsf{P}\) from Lattices: We show that techniques developed for succinct single-input ciphertext-policy \({\textsf{ABE}}\) by Brakerski and Vaikuntanathan (ITCS 2022) can also be seen from the lens of \(\textsf{miABE}\) and obtain the first two-input key-policy \({\textsf{ABE}}\) from lattices for \(\textsf{P}\).
> 
> 4. Heuristic three-input \({\textsf{ABE}}\) and \({\textsf{PE}}\) for \({\textsf{NC}}_1\) from Pairings and Lattices: We obtain the first three-input \({\textsf{ABE}}\) for \({\textsf{NC}}_1\) by harnessing the powers of both the Agrawal-Yamada and the Brakerski-Vaikuntanathan constructions.
> 
> 5. Multi-input \({\textsf{ABE}}\) to multi-input \({\textsf{PE}}\) via Lockable Obfuscation: We provide a generic compiler that lifts multi-input \({\textsf{ABE}}\) to multi-input \({\textsf{PE}}\) by relying on the hiding properties of Lockable Obfuscation (\(\textsf{LO}\)) by Wichs-Zirdelis and Goyal-Koppula-Waters (FOCS 2018), which can be based on \(\textsf{LWE}\). Our compiler generalises such a compiler for single-input setting to the much more challenging setting of multiple inputs. By instantiating our compiler with our new two and three-input \({\textsf{ABE}}\) schemes, we obtain the first constructions of two and three-input \({\textsf{PE}}\) schemes.
> 
> Our constructions of multi-input \({\textsf{ABE}}\) provide the first improvement to the compression factor of non-trivially exponentially efficient Witness Encryption defined by Brakerski et al. (SCN 2018) without relying on compact functional encryption or indistinguishability obfuscation. We believe that the unexpected connection between succinct single-input ciphertext-policy \({\textsf{ABE}}\) and multi-input key-policy \({\textsf{ABE}}\) may lead to a new pathway for witness encryption. We remark that our constructions provide the first candidates for a nontrivial class of \({\textsf{miFE}}\) without needing \(\textsf{LPN}\) or low depth \(\textsf{PRG}\).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_21](https://doi.org/10.1007/978-3-031-15802-5_21)
## Formal Verification of Saber's Public-Key Encryption Scheme in EasyCrypt.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-1].md#formal-verification-of-sabers-public-key-encryption-scheme-in-easycrypt)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#formal-verification-of-sabers-public-key-encryption-scheme-in-easycrypt)
### Authors
* Andreas Hülsing, Eindhoven University of Technology, Eindhoven, The Netherlands
* Matthias Meijers, Eindhoven University of Technology, Eindhoven, The Netherlands
* Pierre-Yves Strub, Meta, Paris, France
### Abstract
> In this work, we consider the formal verification of the public-key encryption scheme of Saber, one of the selected few post-quantum cipher suites currently considered for potential standardization. We formally verify this public-key encryption scheme’s security and \(\delta \)-correctness properties, i.e., the properties required to transform the public-key encryption scheme into an secure and \(\delta \)-correct key encapsulation mechanism, in EasyCrypt. To this end, we initially devise hand-written proofs for these properties that are significantly more detailed and meticulous than the presently existing proofs. Subsequently, these hand-written proofs serve as a guideline for the formal verification. The results of this endeavor comprise hand-written and computer-verified proofs which demonstrate that Saber’s public-key encryption scheme indeed satisfies the desired security and correctness properties.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_22](https://doi.org/10.1007/978-3-031-15802-5_22)
## SoftSpokenOT: Quieter OT Extension from Small-Field Silent VOLE in the Minicrypt Model.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-1].md#softspokenot-quieter-ot-extension-from-small-field-silent-vole-in-the-minicrypt-model)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#softspokenot-quieter-ot-extension-from-small-field-silent-vole-in-the-minicrypt-model)
### Authors
* Lawrence Roy, Oregon State University, Corvallis, USA
### Abstract
> Given a small number of base oblivious transfers (OTs), how does one generate a large number of extended OTs as efficiently as possible? The answer has long been the seminal work of IKNP (Ishai et al., Crypto 2003) and the family of protocols it inspired, which only use Minicrypt assumptions. Recently, Boyle et al. (Crypto 2019) proposed the Silent-OT technique that improves on IKNP, but at the cost of a much stronger, non-Minicrypt assumption: the learning parity with noise (LPN) assumption. We present SoftSpokenOT, the first OT extension to improve on IKNP’s communication cost in the Minicrypt model. While IKNP requires security parameter \(\lambda \) bits of communication for each OT, SoftSpokenOT only needs \(\lambda / k\) bits, for any k, at the expense of requiring \(2^{k-1} / k\) times the computation. For small values of k, this tradeoff is favorable since IKNP-style protocols are network-bound. We implemented SoftSpokenOT and found that our protocol gives almost a \(5{\times }\) speedup over IKNP in the LAN setting.
> 
> Our technique is based on a novel silent protocol for vector oblivious linear evaluation (VOLE) over polynomial-sized fields. We created a framework to build maliciously secure \(\left( {\begin{array}{c}N\\ 1\end{array}}\right) \)-OT extension from this VOLE, revisiting and improving the existing work for each step. Along the way, we found several flaws in the existing work, including a practical attack against the consistency check of Patra et al. (NDSS 2017).

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
> 
> Motivated by the need to perform large-scale data analytics in a privacy-preserving manner, several recent works have presented generic compilers that transform algorithms in the MPC model into secure counterparts, while preserving various efficiency parameters of the original algorithms. The first paper, due to Chan et al. (ITCS ’20), focused on the honest majority setting. Later, Fernando et al. (TCC ’20) considered the dishonest majority setting. The latter work presented a compiler that transforms generic MPC algorithms into ones which are secure against semi-honest attackers that may control all but one of the parties involved. The security of their resulting algorithm relied on the existence of a PKI and also on rather strong cryptographic assumptions: indistinguishability obfuscation and the circular security of certain LWE-based encryption systems.
> 
> In this work, we focus on the dishonest majority setting, following Fernando et al. In this setting, the known compilers do not achieve the standard security notion called malicious security, where attackers can arbitrarily deviate from the prescribed protocol. In fact, we show that unless very strong setup assumptions as made (such as a programmable random oracle), it is provably impossible to withstand malicious attackers due to the stringent requirements on space and round complexity.
> 
> As our main contribution, we complement the above negative result by designing the first general compiler for malicious attackers in the dishonest majority setting. The resulting protocols withstand all-but-one corruptions. Our compiler relies on a simple PKI and a (programmable) random oracle, and is proven secure assuming LWE and SNARKs. Interestingly, even with such strong assumptions, it is rather non-trivial to obtain a secure protocol.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_24](https://doi.org/10.1007/978-3-031-15802-5_24)
## Le Mans: Dynamic and Fluid MPC for Dishonest Majority.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-1].md#le-mans-dynamic-and-fluid-mpc-for-dishonest-majority)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#le-mans-dynamic-and-fluid-mpc-for-dishonest-majority)
### Authors
* Rahul Rachuri, Department of Computer Science, Aarhus University, Aarhus, Denmark
* Peter Scholl, Department of Computer Science, Aarhus University, Aarhus, Denmark
### Abstract
> Most MPC protocols require the set of parties to be active for the entire duration of the computation. Deploying MPC for use cases such as complex and resource-intensive scientific computations increases the barrier of entry for potential participants. The model of Fluid MPC (Crypto 2021) tackles this issue by giving parties the flexibility to participate in the protocol only when their resources are free. As such, the set of parties is dynamically changing over time.
> 
> In this work, we extend Fluid MPC, which only considered an honest majority, to the setting where the majority of participants at any point in the computation may be corrupt. We do this by presenting variants of the SPDZ protocol, which support dynamic participants. Firstly, we describe a universal preprocessing for SPDZ, which allows a set of n parties to compute some correlated randomness, such that later on, any subset of the parties can use this to take part in an online secure computation. We complement this with a Dynamic SPDZ online phase, designed to work with our universal preprocessing, as well as a protocol for securely realising the preprocessing. Our preprocessing protocol is designed to efficiently use pseudorandom correlation generators, thus, the parties’ storage and communication costs can be almost independent of the function being evaluated.
> 
> We then extend this to support a fluid online phase, where the set of parties can dynamically evolve during the online phase. Our protocol achieves maximal fluidity and security with abort, similarly to the previous, honest majority construction. Achieving this requires a careful design and techniques to guarantee a small state complexity, allowing us to switch between committees efficiently.

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
> 
> We show how untrusted servers can detect messages on behalf of recipients, and summarize these into a compact encrypted digest that recipients can easily decrypt. These servers operate obliviously and do not learn anything about which messages are addressed to which recipients. Privacy, soundness, and completeness hold even if everyone but the recipient is adversarial and colluding (unlike in prior schemes).
> 
> Our starting point is an asymptotically-efficient approach, using Fully Homomorphic Encryption and homomorphically-encoded Sparse Random Linear Codes. We then address the concrete performance using bespoke tailoring of lattice-based cryptographic components, alongside various algebraic and algorithmic optimizations. This reduces the digest size to a few bits per message scanned. Concretely, the servers’ cost is \({\sim }\$1\) per million messages scanned, and the resulting digests can be decoded by recipients in under \({\sim }\)20 ms. Our schemes can thus practically attain the strongest form of receiver privacy for current applications such as privacy-preserving cryptocurrencies.

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
> 
> In this work, we develop a new Universally Composable (UC) definition \(\mathcal {F}_{\textsf{DR}}\) that we show is provably achieved by the \(\textsf{DR}\) protocol. Our definition captures not only the security and correctness guarantees of the \(\textsf{DR}\) already identified in the prior state-of-the-art analyses of Cohn-Gordon et al. and Alwen et al., but also more guarantees that are absent from one or both of these works. In particular, we construct six different modified versions of the \(\textsf{DR}\) protocol, all of which are insecure according to our definition \(\mathcal {F}_{\textsf{DR}}\), but remain secure according to one (or both) of their definitions. For example, our definition is the first to fully capture CCA-style attacks possible immediately after a compromise—attacks that, as we show, the \(\textsf{DR}\) protocol provably resists, but were not fully captured by prior definitions.
> 
> We additionally show that multiple compromises of a party in a short time interval, which the \(\textsf{DR}\) is expected to be able to withstand, as we understand from its whitepaper, nonetheless introduce a new non-trivial (albeit minor) weakness of the \(\textsf{DR}\). Since the definitions in the literature (including our \(\mathcal {F}_{\textsf{DR}}\) above) do not capture security against this more nuanced scenario, we define a new stronger definition \(\mathcal {F}_{\textsf{TR}}\) that does.
> 
> Finally, we provide a minimalistic modification to the \(\textsf{DR}\) (that we call the \(\text {Triple Ratchet}\), or \(\textsf{TR}\) for short) and show that the resulting protocol securely realizes the stronger functionality \(\mathcal {F}_{\textsf{TR}}\). Remarkably, the modification incurs no additional communication cost and virtually no additional computational cost. We also show that these techniques can be used to improve communication costs in other scenarios, e.g. practical Updatable Public Key Encryption schemes and the re-randomized TreeKEM protocol of Alwen et al. [CRYPTO 2020] for Secure Group Messaging.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_27](https://doi.org/10.1007/978-3-031-15802-5_27)
