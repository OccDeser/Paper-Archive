# Asiacrypt[2020-2]
## Incrementally Aggregatable Vector Commitments and Applications to Verifiable Decentralized Storage.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2020-2].md#incrementally-aggregatable-vector-commitments-and-applications-to-verifiable-decentralized-storage)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-2].md#incrementally-aggregatable-vector-commitments-and-applications-to-verifiable-decentralized-storage)
### Authors
* Matteo Campanelli, Aarhus University, Aarhus, Denmark
* Dario Fiore, IMDEA Software Institute, Madrid, Spain
* Dimitris Kolonelos, IMDEA Software Institute, Madrid, Spain
* Dimitris Kolonelos, Universidad Politecnica de Madrid, Madrid, Spain
* Nicola Greco, Protocol Labs, San Francisco, USA
* Luca Nizzardo, Protocol Labs, San Francisco, USA
### Abstract
> Vector commitments with subvector openings (SVC) [Lai-Malavolta, Boneh-Bunz-Fisch; CRYPTO’19] allow one to open a committed vector at a set of positions with an opening of size independent of both the vector’s length and the number of opened positions.
> 
> We continue the study of SVC with two goals in mind: improving their efficiency and making them more suitable to decentralized settings. We address both problems by proposing a new notion for VC that we call incremental aggregation and that allows one to merge openings in a succinct way an unbounded number of times. We show two applications of this property. The first one is immediate and is a method to generate openings in a distributed way. The second application is an algorithm for faster generation of openings via preprocessing.
> 
> We then proceed to realize SVC with incremental aggregation. We provide two constructions in groups of unknown order that, similarly to that of Boneh et al. (which supports aggregating only once), have constant-size public parameters, commitments and openings. As an additional feature, for the first construction we propose efficient arguments of knowledge of subvector openings which immediately yields a keyless proof of storage with compact proofs.
> 
> Finally, we address a problem closely related to that of SVC: storing a file efficiently in completely decentralized networks. We introduce and construct verifiable decentralized storage (VDS), a cryptographic primitive that allows to check the integrity of a file stored by a network of nodes in a distributed and decentralized way. Our VDS constructions rely on our new vector commitment techniques.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-64834-3_1](https://doi.org/10.1007/978-3-030-64834-3_1)
## Non-committing Encryption with Constant Ciphertext Expansion from Standard Assumptions.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2020-2].md#non-committing-encryption-with-constant-ciphertext-expansion-from-standard-assumptions)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-2].md#non-committing-encryption-with-constant-ciphertext-expansion-from-standard-assumptions)
### Authors
* Yusuke Yoshida, Tokyo Institute of Technology, Tokyo, Japan
* Keisuke Tanaka, Tokyo Institute of Technology, Tokyo, Japan
* Fuyuki Kitagawa, NTT Secure Platform Laboratories, Tokyo, Japan
* Keita Xagawa, NTT Secure Platform Laboratories, Tokyo, Japan
### Abstract
> Non-committing encryption (NCE) introduced by Canetti et al. (STOC ’96) is a central tool to achieve multi-party computation protocols secure in the adaptive setting. Recently, Yoshida et al. (ASIACRYPT ’19) proposed an NCE scheme based on the hardness of the DDH problem, which has ciphertext expansion \(\mathcal {O}(\log \lambda )\) and public-key expansion \(\mathcal {O}(\lambda ^2)\).
> 
> In this work, we improve their result and propose a methodology to construct an NCE scheme that achieves constant ciphertext expansion. Our methodology can be instantiated from the DDH assumption and the LWE assumption. When instantiated from the LWE assumption, the public-key expansion is \(\lambda \cdot \mathsf {poly}(\log \lambda )\). They are the first NCE schemes satisfying constant ciphertext expansion without using iO or common reference strings.
> 
> Along the way, we define a weak notion of NCE, which satisfies only weak forms of correctness and security. We show how to amplify such a weak NCE scheme into a full-fledged one using wiretap codes with a new security property.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-64834-3_2](https://doi.org/10.1007/978-3-030-64834-3_2)
## Collusion Resistant Trace-and-Revoke for Arbitrary Identities from Standard Assumptions.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2020-2].md#collusion-resistant-trace-and-revoke-for-arbitrary-identities-from-standard-assumptions)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-2].md#collusion-resistant-trace-and-revoke-for-arbitrary-identities-from-standard-assumptions)
### Authors
* Sam Kim, Stanford University, Stanford, CA, USA
* David J. Wu, University of Virginia, Charlottesville, VA, USA
### Abstract
> A traitor tracing scheme is a multi-user public-key encryption scheme where each user in the system holds a decryption key that is associated with the user’s identity. Using the public key, a content distributor can encrypt a message to all of the users in the system. At the same time, if a malicious group of users combine their respective decryption keys to build a “pirate decoder,” there is an efficient tracing algorithm that the content distributor can use to identify at least one of the keys used to construct the decoder. A trace-and-revoke scheme is an extension of a standard traitor tracing scheme where there is an additional key-revocation mechanism that the content distributor can use to disable the decryption capabilities of compromised keys. Namely, during encryption, the content distributor can encrypt a message with respect to a list of revoked users such that only non-revoked users can decrypt the resulting ciphertext.
> 
> Trace-and-revoke schemes are challenging to construct. Existing constructions from standard assumptions can only tolerate bounded collusions (i.e., there is an a priori bound on the number of keys an adversary obtains), have system parameters that scale exponentially in the bit-length of the identities, or satisfy weaker notions of traceability that are vulnerable to certain types of “pirate evolution” attacks. In this work, we provide the first construction of a trace-and-revoke scheme that is fully collusion resistant and capable of supporting arbitrary identities (i.e., the identities can be drawn from an exponential-size space). Our scheme supports public encryption and secret tracing, and can be based on the sub-exponential hardness of the LWE problem (with a super-polynomial modulus-to-noise ratio). The ciphertext size in our construction scales logarithmically in the size of the identity space and linearly in the size of the revocation list. Our scheme leverages techniques from both combinatorial and algebraic constructions for traitor tracing.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-64834-3_3](https://doi.org/10.1007/978-3-030-64834-3_3)
## Subvert KEM to Break DEM: Practical Algorithm-Substitution Attacks on Public-Key Encryption.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2020-2].md#subvert-kem-to-break-dem-practical-algorithm-substitution-attacks-on-public-key-encryption)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-2].md#subvert-kem-to-break-dem-practical-algorithm-substitution-attacks-on-public-key-encryption)
### Authors
* Rongmao Chen, College of Computer, National University of Defense Technology, Changsha, China
* Xinyi Huang, Fujian Provincial Key Laboratory of Network Security and Cryptology, College of Mathematics and Informatics, Fujian Normal University, Fuzhou, China
* Moti Yung, Google LLC, New York, NY, USA
* Moti Yung, Columbia University, New York City, USA
### Abstract
> Motivated by the currently widespread concern about mass surveillance of encrypted communications, Bellare et al. introduced at CRYPTO 2014 the notion of Algorithm-Substitution Attack (ASA) where the legitimate encryption algorithm is replaced by a subverted one that aims to undetectably exfiltrate the secret key via ciphertexts. Practically implementable ASAs on various cryptographic primitives (Bellare et al., CRYPTO’14 & ACM CCS’15; Ateniese et al., ACM CCS’15; Berndt and Liśkiewicz, ACM CCS’17) have been constructed and analyzed, leaking the secret key successfully. Nevertheless, in spite of much progress, the practical impact of ASAs (formulated originally for symmetric key cryptography) on public-key (PKE) encryption operations remains unclear, primarily since the encryption operation of PKE does not involve the secret key, and also previously known ASAs become relatively inefficient for leaking the plaintext due to the logarithmic upper bound of exfiltration rate (Berndt and Liśkiewicz, ACM CCS’17).
> 
> In this work, we formulate a practical ASA on PKE encryption algorithm which, perhaps surprisingly, turns out to be much more efficient and robust than existing ones, showing that ASAs on PKE schemes are far more effective and dangerous than previously believed. We mainly target PKE of hybrid encryption which is the most prevalent way to employ PKE in the literature and in practice. The main strategy of our ASA is to subvert the underlying key encapsulation mechanism (KEM) so that the session key encapsulated could be efficiently extracted, which, in turn, breaks the data encapsulation mechanism (DEM) enabling us to learn the plaintext itself. Concretely, our non-black-box yet quite general attack enables recovering the plaintext from only two successive ciphertexts and minimally depends on a short state of previous internal randomness. A widely used class of KEMs is shown to be subvertible by our powerful attack.
> 
> Our attack relies on a novel identification and formalization of certain properties that yield practical ASAs on KEMs. More broadly, it points at and may shed some light on exploring structural weaknesses of other “composed cryptographic primitives,” which may make them susceptible to more dangerous ASAs with effectiveness that surpasses the known logarithmic upper bound (i.e., reviewing composition as an attack enabler).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-64834-3_4](https://doi.org/10.1007/978-3-030-64834-3_4)
## Unbounded HIBE with Tight Security.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2020-2].md#unbounded-hibe-with-tight-security)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-2].md#unbounded-hibe-with-tight-security)
### Authors
* Roman Langrehr, ETH Zurich, Zurich, Switzerland
* Jiaxin Pan, Department of Mathematical Sciences, NTNU – Norwegian University of Science and Technology, Trondheim, Norway
### Abstract
> We propose the first tightly secure and unbounded hierarchical identity-based encryption (HIBE) scheme based on standard assumptions. Our main technical contribution is a novel proof strategy that allows us to tightly randomize user secret keys for identities with arbitrary hierarchy depths using low entropy hidden in a small and hierarchy-independent master public key.
> 
> The notion of unbounded HIBE is proposed by Lewko and Waters (Eurocrypt 2011). In contrast to most HIBE schemes, an unbounded scheme does not require any maximum depth to be specified in the setup phase, and user secret keys or ciphertexts can be generated for identities of arbitrary depths with hierarchy-independent system parameters.
> 
> While all the previous unbounded HIBE schemes have security loss that grows at least linearly in the number of user secret key queries, the security loss of our scheme is only dependent on the security parameter, even in the multi-challenge setting, where an adversary can ask for multiple challenge ciphertexts. We prove the adaptive security of our scheme based on the Matrix Decisional Diffie-Hellman assumption in prime-order pairing groups, which generalizes a family of standard Diffie-Hellman assumptions such as k-Linear.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-64834-3_5](https://doi.org/10.1007/978-3-030-64834-3_5)
## Multi-client Oblivious RAM with Poly-logarithmic Communication.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2020-2].md#multi-client-oblivious-ram-with-poly-logarithmic-communication)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-2].md#multi-client-oblivious-ram-with-poly-logarithmic-communication)
### Authors
* Sherman S. M. Chow, The Chinese University of Hong Kong, Shatin, Hong Kong
* Katharina Fech, Friedrich-Alexander-Universität Erlangen-Nürnberg, Erlangen, Germany
* Russell W. F. Lai, Friedrich-Alexander-Universität Erlangen-Nürnberg, Erlangen, Germany
* Giulio Malavolta, UC Berkeley & Carnegie Mellon University, Pittsburgh, USA
### Abstract
> Oblivious RAM enables oblivious access to memory in the single-client setting, which may not be the best fit in the network setting. Multi-client oblivious RAM (MCORAM) considers a collaborative but untrusted environment, where a database owner selectively grants read access and write access to different entries of a confidential database to multiple clients. Their access pattern must remain oblivious not only to the server but also to fellow clients. This upgrade rules out many techniques for constructing ORAM, forcing us to pursue new techniques. MCORAM not only provides an alternative solution to private anonymous data access (Eurocrypt 2019) but also serves as a promising building block for equipping oblivious file systems with access control and extending other advanced cryptosystems to the multi-client setting.
> 
> Despite being a powerful object, the current state-of-the-art is unsatisfactory: The only existing scheme requires \(O(\sqrt{n})\) communication and client computation for a database of size n. Whether it is possible to reduce these complexities to \(\mathsf {polylog}(n)\), thereby matching the upper bounds for ORAM, is an open problem, i.e., can we enjoy access control and client-obliviousness under the same bounds?
> 
> Our first result answers the above question affirmatively by giving a construction from fully homomorphic encryption (FHE). Our main technical innovation is a new technique for cross-key trial evaluation of ciphertexts. We also consider the same question in the setting with N non-colluding servers, out of which at most t of them can be corrupt. We build multi-server MCORAM from distributed point functions (DPF), and propose new constructions of DPF via a virtualization technique with bootstrapping, assuming the existence of homomorphic secret sharing and pseudorandom generators in NC0, which are not known to imply FHE.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-64834-3_6](https://doi.org/10.1007/978-3-030-64834-3_6)
## Privacy-Preserving Pattern Matching on Encrypted Data.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2020-2].md#privacy-preserving-pattern-matching-on-encrypted-data)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-2].md#privacy-preserving-pattern-matching-on-encrypted-data)
### Authors
* Anis Bkakria, IMT Atlantique, Rennes, France
* Nora Cuppens, IMT Atlantique, Rennes, France
* Frédéric Cuppens, IMT Atlantique, Rennes, France
* Nora Cuppens, Polytechnique Montréal, Montréal, Canada
* Frédéric Cuppens, Polytechnique Montréal, Montréal, Canada
### Abstract
> Pattern matching is one of the most fundamental and important paradigms in several application domains such as digital forensics, cyber threat intelligence, or genomic and medical data analysis. While it is a straightforward operation when performed on plaintext data, it becomes a challenging task when the privacy of both the analyzed data and the analysis patterns must be preserved. In this paper, we propose new provably correct, secure, and relatively efficient (compared to similar existing schemes) public and private key based constructions that allow arbitrary pattern matching over encrypted data while protecting both the data to be analyzed and the patterns to be matched. That is, except the pattern provider (resp. the data owner), all other involved parties in the proposed constructions will learn nothing about the patterns to be searched (resp. the data to be inspected). Compared to existing solutions, the constructions we propose have some interesting properties: (1) the size of the ciphertext is linear to the size of plaintext and independent of the sizes and the number of the analysis patterns; (2) the sizes of the issued trapdoors are constant on the size of the data to be analyzed; and (3) the search complexity is linear on the size of the data to be inspected and is constant on the sizes of the analysis patterns. The conducted evaluations show that our constructions drastically improve the performance of the most efficient state of the art solution.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-64834-3_7](https://doi.org/10.1007/978-3-030-64834-3_7)
## Efficient Homomorphic Comparison Methods with Optimal Complexity.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2020-2].md#efficient-homomorphic-comparison-methods-with-optimal-complexity)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-2].md#efficient-homomorphic-comparison-methods-with-optimal-complexity)
### Authors
* Jung Hee Cheon, Department of Mathematical Sciences, Seoul National University, Seoul, Republic of Korea
* Dongwoo Kim, Department of Mathematical Sciences, Seoul National University, Seoul, Republic of Korea
* Duhyeong Kim, Department of Mathematical Sciences, Seoul National University, Seoul, Republic of Korea
* Jung Hee Cheon, Crypto Lab Inc., Seoul, Republic of Korea
### Abstract
> Comparison of two numbers is one of the most frequently used operations, but it has been a challenging task to efficiently compute the comparison function in homomorphic encryption (HE) which basically supports addition and multiplication. Recently, Cheon et al. (Asiacrypt 2019) introduced a new approximate representation of the comparison function with a rational function, and showed that this rational function can be evaluated by an iterative algorithm. Due to this iterative feature, their method achieves a logarithmic computational complexity compared to previous polynomial approximation methods; however, the computational complexity is still not optimal, and the algorithm is quite slow for large-bit inputs in HE implementation.
> 
> In this work, we propose new comparison methods with optimal asymptotic complexity based on composite polynomial approximation. The main idea is to systematically design a constant-degree polynomial f by identifying the core properties to make a composite polynomial \(f\circ f \circ \cdots \circ f\) get close to the sign function (equivalent to the comparison function) as the number of compositions increases. We additionally introduce an acceleration method applying a mixed polynomial composition \(f\circ \cdots \circ f\circ g \circ \cdots \circ g\) for some other polynomial g with different properties instead of \(f\circ f \circ \cdots \circ f\). Utilizing the devised polynomials f and g, our new comparison algorithms only require \(\varTheta (\log (1/\epsilon )) + \varTheta (\log \alpha )\) computational complexity to obtain an approximate comparison result of \(a,b\in [0,1]\) satisfying \(|a-b|\ge \epsilon \) within \(2^{-\alpha }\) error.
> 
> The asymptotic optimality results in substantial performance enhancement: our comparison algorithm on 16-bit encrypted integers for \(\alpha = 16\) takes 1.22 ms in amortized running time based on an approximate HE scheme HEAAN, which is 18 times faster than the previous work.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-64834-3_8](https://doi.org/10.1007/978-3-030-64834-3_8)
## Practical Exact Proofs from Lattices: New Techniques to Exploit Fully-Splitting Rings.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2020-2].md#practical-exact-proofs-from-lattices-new-techniques-to-exploit-fully-splitting-rings)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-2].md#practical-exact-proofs-from-lattices-new-techniques-to-exploit-fully-splitting-rings)
### Authors
* Muhammed F. Esgin, Monash University, Melbourne, Australia
* Muhammed F. Esgin, Data61, CSIRO, Eveleigh, Australia
* Ngoc Khanh Nguyen, IBM Research, Zurich, Switzerland
* Gregor Seiler, IBM Research, Zurich, Switzerland
* Ngoc Khanh Nguyen, ETH Zurich, Zurich, Switzerland
* Gregor Seiler, ETH Zurich, Zurich, Switzerland
### Abstract
> We propose a very fast lattice-based zero-knowledge proof system for exactly proving knowledge of a ternary solution \(\vec {s} \in \{-1,0,1\}^n\) to a linear equation \(A\vec {s}=\vec {u}\) over \(\mathbb {Z}_q\), which improves upon the protocol by Bootle, Lyubashevsky and Seiler (CRYPTO 2019) by producing proofs that are shorter by a factor of 8.
> 
> At the core lies a technique that utilizes the module-homomorphic BDLOP commitment scheme (SCN 2018) over the fully splitting cyclotomic ring \(\mathbb {Z}_q[X]/(X^d + 1)\) to prove scalar products with the NTT vector of a secret polynomial.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-64834-3_9](https://doi.org/10.1007/978-3-030-64834-3_9)
## Towards Classical Hardness of Module-LWE: The Linear Rank Case.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2020-2].md#towards-classical-hardness-of-module-lwe-the-linear-rank-case)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-2].md#towards-classical-hardness-of-module-lwe-the-linear-rank-case)
### Authors
* Katharina Boudgoust, Univ Rennes, CNRS, IRISA, Rennes, France
* Corentin Jeudy, Univ Rennes, CNRS, IRISA, Rennes, France
* Adeline Roux-Langlois, Univ Rennes, CNRS, IRISA, Rennes, France
* Weiqiang Wen, Univ Rennes, CNRS, IRISA, Rennes, France
### Abstract
> We prove that the module learning with errors (\(\mathrm {M\text {-}LWE}\)) problem with arbitrary polynomial-sized modulus p is classically at least as hard as standard worst-case lattice problems, as long as the module rank d is not smaller than the number field degree n. Previous publications only showed the hardness under quantum reductions. We achieve this result in an analogous manner as in the case of the learning with errors (\(\mathrm {LWE}\)) problem. First, we show the classical hardness of \(\mathrm {M\text {-}LWE}\) with an exponential-sized modulus. In a second step, we prove the hardness of \(\mathrm {M\text {-}LWE}\) using a binary secret. And finally, we provide a modulus reduction technique. The complete result applies to the class of power-of-two cyclotomic fields. However, several tools hold for more general classes of number fields and may be of independent interest.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-64834-3_10](https://doi.org/10.1007/978-3-030-64834-3_10)
## Lattice-Based E-Cash, Revisited.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2020-2].md#lattice-based-e-cash-revisited)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-2].md#lattice-based-e-cash-revisited)
### Authors
* Amit Deo, ENS de Lyon, Laboratoire LIP (U. Lyon, CNRS, ENSL, Inria, UCBL), Lyon, France
* Benoît Libert, ENS de Lyon, Laboratoire LIP (U. Lyon, CNRS, ENSL, Inria, UCBL), Lyon, France
* Benoît Libert, CNRS, Laboratoire LIP, Lyon, France
* Amit Deo, Inria, Lyon, France
* Khoa Nguyen, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Olivier Sanders, Orange Labs, Applied Crypto Group, Cesson-Sévigné, France
### Abstract
> Electronic cash (e-cash) was introduced 40 years ago as the digital analogue of traditional cash. It allows users to withdraw electronic coins that can be spent anonymously with merchants. As advocated by Camenisch et al. (Eurocrypt 2005), it should be possible to store the withdrawn coins compactly (i.e., with logarithmic cost in the total number of coins), which has led to the notion of compact e-cash. Many solutions were proposed for this problem but the security proofs of most of them were invalidated by a very recent paper by Bourse et al. (Asiacrypt 2019). The same paper describes a generic way of fixing existing constructions/proofs but concrete instantiations of this patch are currently unknown in some settings. In particular, compact e-cash is no longer known to exist under quantum-safe assumptions. In this work, we resolve this problem by proposing the first secure compact e-cash system based on lattices following the result from Bourse et al. Contrarily to the latter work, our construction is not only generic, but we describe two concrete instantiations. We depart from previous frameworks of e-cash systems by leveraging lossy trapdoor functions to construct our coins. The indistinguishability of lossy and injective keys allows us to avoid the very strong requirements on the involved pseudo-random functions that were necessary to instantiate the generic patch proposed by Bourse et al.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-64834-3_11](https://doi.org/10.1007/978-3-030-64834-3_11)
## Twisted-PHS: Using the Product Formula to Solve Approx-SVP in Ideal Lattices.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2020-2].md#twisted-phs-using-the-product-formula-to-solve-approx-svp-in-ideal-lattices)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-2].md#twisted-phs-using-the-product-formula-to-solve-approx-svp-in-ideal-lattices)
### Authors
* Olivier Bernard, Univ Rennes, CNRS, IRISA, Rennes, France
* Adeline Roux-Langlois, Univ Rennes, CNRS, IRISA, Rennes, France
* Olivier Bernard, Thales, Gennevilliers, Laboratoire CHiffre, Gennevilliers, France
### Abstract
> Approx-Svp is a well-known hard problem on lattices, which asks to find short vectors on a given lattice, but its variant restricted to ideal lattices (which correspond to ideals of the ring of integers \(\mathcal {O}_{K}\) of a number field K) is still not fully understood. For a long time, the best known algorithm to solve this problem on ideal lattices was the same as for arbitrary lattice. But recently, a series of works tends to show that solving this problem could be easier in ideal lattices than in arbitrary ones, in particular in the quantum setting.
> 
> Our main contribution is to propose a new “twisted” version of the PHS (by Pellet-Mary, Hanrot and Stehlé 2019) algorithm, that we call Twisted-PHS. As a minor contribution, we also propose several improvements of the PHS algorithm. On the theoretical side, we prove that our Twisted-PHS algorithm performs at least as well as the original PHS algorithm. On the practical side though, we provide a full implementation of our algorithm which suggests that much better approximation factors are achieved, and that the given lattice bases are a lot more orthogonal than the ones used in PHS. This is the first time to our knowledge that this type of algorithm is completely implemented and tested for fields of degrees up to 60.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-64834-3_12](https://doi.org/10.1007/978-3-030-64834-3_12)
## Simpler Statistically Sender Private Oblivious Transfer from Ideals of Cyclotomic Integers.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2020-2].md#simpler-statistically-sender-private-oblivious-transfer-from-ideals-of-cyclotomic-integers)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-2].md#simpler-statistically-sender-private-oblivious-transfer-from-ideals-of-cyclotomic-integers)
### Authors
* Daniele Micciancio, University of California San Diego, San Diego, USA
* Jessica Sorrell, University of California San Diego, San Diego, USA
### Abstract
> We present a two-message oblivious transfer protocol achieving statistical sender privacy and computational receiver privacy based on the RLWE assumption for cyclotomic number fields. This work improves upon prior lattice-based statistically sender-private oblivious transfer protocols by reducing the total communication between parties by a factor \(\mathcal {O}(n\log q)\) for transfer of length O(n) messages.
> 
> Prior work of Brakerski and Döttling uses transference theorems to show that either a lattice or its dual must have short vectors, the existence of which guarantees lossy encryption for encodings with respect to that lattice, and therefore statistical sender privacy. In the case of ideal lattices from embeddings of cyclotomic integers, the existence of one short vector implies the existence of many, and therefore encryption with respect to either a lattice or its dual is guaranteed to “lose” more information about the message than can be ensured in the case of general lattices. This additional structure of ideals of cyclotomic integers allows for efficiency improvements beyond those that are typical when moving from the generic to ideal lattice setting, resulting in smaller message sizes for sender and receiver, as well as a protocol that is simpler to describe and analyze.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-64834-3_13](https://doi.org/10.1007/978-3-030-64834-3_13)
## Cryptographic Group Actions and Applications.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2020-2].md#cryptographic-group-actions-and-applications)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-2].md#cryptographic-group-actions-and-applications)
### Authors
* Navid Alamati, University of Michigan, Ann Arbor, USA
* Luca De Feo, IBM Research Zürich, Rüschlikon, Switzerland
* Hart Montgomery, Fujitsu Laboratories of America, Sunnyvale, USA
* Sikhar Patranabis, ETH Zürich, Zürich, Switzerland
### Abstract
> Isogeny-based assumptions have emerged as a viable option for quantum-secure cryptography. Recent works have shown how to build efficient (public-key) primitives from isogeny-based assumptions such as CSIDH and CSI-FiSh. However, in its present form, the landscape of isogenies does not seem very amenable to realizing new cryptographic applications. Isogeny-based assumptions often have unique efficiency and security properties, which makes building new cryptographic applications from them a potentially tedious and time-consuming task.
> 
> In this work, we propose a new framework based on group actions that enables the easy usage of a variety of isogeny-based assumptions. Our framework generalizes the works of Brassard and Yung (Crypto’90) and Couveignes (Eprint’06). We provide new definitions for group actions endowed with natural hardness assumptions that model isogeny-based constructions amenable to group actions such as CSIDH and CSI-FiSh.
> 
> We demonstrate the utility of our new framework by leveraging it to construct several primitives that were not previously known from isogeny-based assumptions. These include smooth projective hashing, dual-mode PKE, two-message statistically sender-private OT, and Naor-Reingold style PRF. These primitives are useful building blocks for a wide range of cryptographic applications.
> 
> We introduce a new assumption over group actions called Linear Hidden Shift (LHS) assumption. We then present some discussions on the security of the LHS assumption and we show that it implies symmetric KDM-secure encryption, which in turn enables many other primitives that were not previously known from isogeny-based assumptions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-64834-3_14](https://doi.org/10.1007/978-3-030-64834-3_14)
## B-SIDH: Supersingular Isogeny Diffie-Hellman Using Twisted Torsion.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2020-2].md#b-sidh-supersingular-isogeny-diffie-hellman-using-twisted-torsion)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-2].md#b-sidh-supersingular-isogeny-diffie-hellman-using-twisted-torsion)
### Authors
* Craig Costello, Microsoft Research, Redmond, USA
### Abstract
> This paper explores a new way of instantiating isogeny-based cryptography in which parties can work in both the \((p+1)\)-torsion of a set of supersingular curves and in the \((p-1)\)-torsion corresponding to the set of their quadratic twists. Although the isomorphism between a given supersingular curve and its quadratic twist is not defined over \(\mathbb {F}_{p^2}\) in general, restricting operations to the x-lines of both sets of twists allows all arithmetic to be carried out over \(\mathbb {F}_{p^2}\) as usual. Furthermore, since supersingular twists always have the same \(\mathbb {F}_{p^2}\)-rational j-invariant, the SIDH protocol remains unchanged when Alice and Bob are free to work in both sets of twists.
> 
> This framework lifts the restrictions on the shapes of the underlying prime fields originally imposed by Jao and De Feo, and allows a range of new options for instantiating isogeny-based public key cryptography. These include alternatives that exploit Mersenne and Montgomery-friendly primes, as well as the possibility of significantly reducing the size of the primes in the Jao-De Feo construction at no known loss of asymptotic security. For a given target security level, the resulting public keys are smaller than the public keys of all of the key encapsulation schemes currently under consideration in the NIST post-quantum standardisation effort.
> 
> The best known attacks against the instantiations proposed in this paper are the classical path finding algorithm due to Delfs and Galbraith and its quantum adapation due to Biasse, Jao and Sankar; these run in respective time \(O(p^{1/2})\) and \(O(p^{1/4})\), and are essentially memory-free. The upshot is that removing the big-O’s and obtaining concrete security estimates is a matter of costing the circuits needed to implement the corresponding isogeny. In contrast to other post-quantum proposals, this makes the security analysis of B-SIDH rather straightforward.
> 
> Searches for friendly parameters are used to find several primes that range from 237 to 256 bits, which all offer a conjectured security comparable to the 434-bit prime used to target NIST level 1 security in the SIKE proposal. One noteworthy example is a 247-bit prime for which Alice’s secret isogeny is 7901-smooth and Bob’s secret isogeny is 7621-smooth.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-64834-3_15](https://doi.org/10.1007/978-3-030-64834-3_15)
## Calamari and Falafl: Logarithmic (Linkable) Ring Signatures from Isogenies and Lattices.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2020-2].md#calamari-and-falafl-logarithmic-linkable-ring-signatures-from-isogenies-and-lattices)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-2].md#calamari-and-falafl-logarithmic-linkable-ring-signatures-from-isogenies-and-lattices)
### Authors
* Ward Beullens, imec-COSIC, KU Leuven, Leuven, Belgium
* Shuichi Katsumata, National Institute of Advanced Industrial Science and Technology (AIST), Tokyo, Japan
* Federico Pintore, Mathematical Institute, University of Oxford, Oxford, UK
### Abstract
> We construct efficient ring signatures (RS) from isogeny and lattice assumptions. Our ring signatures are based on a logarithmic OR proof for group actions. We instantiate this group action by either the CSIDH group action or an MLWE-based group action to obtain our isogeny-based or lattice-based RS scheme, respectively. Even though the OR proof has a binary challenge space and therefore requires a number of repetitions which is linear in the security parameter, the sizes of our ring signatures are small and scale better with the ring size N than previously known post-quantum ring signatures. We also construct linkable ring signatures (LRS) that are almost as efficient as the non-linkable variants. The isogeny-based scheme produces signatures whose size is an order of magnitude smaller than all previously known logarithmic post-quantum ring signatures, but it is relatively slow (e.g. 5.5 KB signatures and 79 s signing time for rings with 8 members). In comparison, the lattice-based construction is much faster, but has larger signatures (e.g. 30 KB signatures and 90 ms signing time for the same ring size). For small ring sizes our lattice-based ring signatures are slightly larger than state-of-the-art schemes, but they are smaller for ring sizes larger than \(N \approx 1024\).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-64834-3_16](https://doi.org/10.1007/978-3-030-64834-3_16)
## Radical Isogenies.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2020-2].md#radical-isogenies)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-2].md#radical-isogenies)
### Authors
* Wouter Castryck, Imec-COSIC, Leuven, KU, Belgium
* Thomas Decru, Imec-COSIC, Leuven, KU, Belgium
* Frederik Vercauteren, Imec-COSIC, Leuven, KU, Belgium
### Abstract
> This paper introduces a new approach to computing isogenies called “radical isogenies” and a corresponding method to compute chains of N-isogenies that is very efficient for small N. The method is fully deterministic and completely avoids generating N-torsion points. It is based on explicit formulae for the coordinates of an N-torsion point \(P'\) on the codomain of a cyclic N-isogeny \(\varphi : E \rightarrow E'\), such that composing \(\varphi \) with \(E' \rightarrow E' / \langle P' \rangle \) yields a cyclic \(N^2\)-isogeny. These formulae are simple algebraic expressions in the coefficients of E, the coordinates of a generator P of \(\ker \varphi \), and an Nth root \( \root N \of {\rho } \, \), where the radicand \(\rho \) itself is given by an easily computable algebraic expression in the coefficients of E and the coordinates of P. The formulae can be iterated and are particularly useful when computing chains of N-isogenies over a finite field \(\mathbb {F}_q\) with \(\gcd (q-1, N) = 1\), where taking an Nth root is a simple exponentiation. Compared to the state-of-the-art, our method results in an order of magnitude speed-up for \(N \le 13\); for larger N, the advantage disappears due to the increasing complexity of the formulae. When applied to CSIDH, we obtain a speed-up of about \(19 \%\) over the implementation by Bernstein, De Feo, Leroux and Smith for the CSURF-512 parameters.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-64834-3_17](https://doi.org/10.1007/978-3-030-64834-3_17)
## Oblivious Pseudorandom Functions from Isogenies.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2020-2].md#oblivious-pseudorandom-functions-from-isogenies)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-2].md#oblivious-pseudorandom-functions-from-isogenies)
### Authors
* Dan Boneh, Stanford University, Stanford, CA, USA
* Dmitry Kogan, Stanford University, Stanford, CA, USA
* Katharine Woo, Stanford University, Stanford, CA, USA
* Katharine Woo, Princeton University, Princeton, NJ, USA
### Abstract
> An oblivious PRF, or OPRF, is a protocol between a client and a server, where the server has a key k for a secure pseudorandom function F, and the client has an input x for the function. At the end of the protocol the client learns F(k, x), and nothing else, and the server learns nothing. An OPRF is verifiable if the client is convinced that the server has evaluated the PRF correctly with respect to a prior commitment to k. OPRFs and verifiable OPRFs have numerous applications, such as private-set-intersection protocols, password-based key-exchange protocols, and defense against denial-of-service attacks. Existing OPRF constructions use RSA-, Diffie-Hellman-, and lattice-type assumptions. The first two are not post-quantum secure.
> 
> In this paper we construct OPRFs and verifiable OPRFs from isogenies. Our main construction uses isogenies of supersingular elliptic curves over \(\mathbb {F}_{p^{2}}\) and tries to adapt the Diffie-Hellman OPRF to that setting. However, a recent attack on supersingular-isogeny systems due to Galbraith et al. [ASIACRYPT 2016] makes this approach difficult to secure. To overcome this attack, and to validate the server’s response, we develop two new zero-knowledge protocols that convince each party that its peer has sent valid messages. With these protocols in place, we obtain an OPRF in the SIDH setting and prove its security in the UC framework.
> 
> Our second construction is an adaptation of the Naor-Reingold PRF to commutative group actions. Combining it with recent constructions of oblivious transfer from isogenies, we obtain an OPRF in the CSIDH setting.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-64834-3_18](https://doi.org/10.1007/978-3-030-64834-3_18)
## SiGamal: A Supersingular Isogeny-Based PKE and Its Application to a PRF.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2020-2].md#sigamal-a-supersingular-isogeny-based-pke-and-its-application-to-a-prf)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-2].md#sigamal-a-supersingular-isogeny-based-pke-and-its-application-to-a-prf)
### Authors
* Tomoki Moriya, Department of Mathematical Informatics, The University of Tokyo, Tokyo, Japan
* Hiroshi Onuki, Department of Mathematical Informatics, The University of Tokyo, Tokyo, Japan
* Tsuyoshi Takagi, Department of Mathematical Informatics, The University of Tokyo, Tokyo, Japan
### Abstract
> We propose two new supersingular isogeny-based public key encryptions: SiGamal and C-SiGamal. They were developed by giving an additional point of the order \(2^r\) to CSIDH. SiGamal is similar to ElGamal encryption, while C-SiGamal is a compressed version of SiGamal. We prove that SiGamal and C-SiGamal are IND-CPA secure without using hash functions under a new assumption: the P-CSSDDH assumption. This assumption comes from the expectation that no efficient algorithm can distinguish between a random point and a point that is the image of a public point under a hidden isogeny.
> 
> Next, we propose a Naor-Reingold type pseudo random function (PRF) based on SiGamal. If the P-CSSDDH assumption and the CSSDDH\(^*\) assumption, which guarantees the security of CSIDH that uses a prime p in the setting of SiGamal, hold, then our proposed function is a pseudo random function. Moreover, we estimate that the computational costs of group actions to compute our proposed PRF are about \(\sqrt{\frac{8T}{3\pi }}\) times that of the group actions in CSIDH, where T is the Hamming weight of the input of the PRF.
> 
> Finally, we experimented with group actions in SiGamal and C-SiGamal. The computational costs of group actions in SiGamal-512 with a 256-bit plaintext message space were about 2.62 times that of a group action in CSIDH-512.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-64834-3_19](https://doi.org/10.1007/978-3-030-64834-3_19)
## Estimating Quantum Speedups for Lattice Sieves.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2020-2].md#estimating-quantum-speedups-for-lattice-sieves)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-2].md#estimating-quantum-speedups-for-lattice-sieves)
### Authors
* Martin R. Albrecht, Information Security Group, Royal Holloway, University of London, Egham, UK
* Eamonn W. Postlethwaite, Information Security Group, Royal Holloway, University of London, Egham, UK
* Vlad Gheorghiu, Institute for Quantum Computing, University of Waterloo, Waterloo, Canada
* John M. Schanck, Institute for Quantum Computing, University of Waterloo, Waterloo, Canada
### Abstract
> Quantum variants of lattice sieve algorithms are routinely used to assess the security of lattice based cryptographic constructions. In this work we provide a heuristic, non-asymptotic, analysis of the cost of several algorithms for near neighbour search on high dimensional spheres. These algorithms are key components of lattice sieves. We design quantum circuits for near neighbour search algorithms and provide software that numerically optimises algorithm parameters according to various cost metrics. Using this software we estimate the cost of classical and quantum near neighbour search on spheres. For the most performant near neighbour search algorithm that we analyse we find a small quantum speedup in dimensions of cryptanalytic interest. Achieving this speedup requires several optimistic physical and algorithmic assumptions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-64834-3_20](https://doi.org/10.1007/978-3-030-64834-3_20)
## A Combinatorial Approach to Quantum Random Functions.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2020-2].md#a-combinatorial-approach-to-quantum-random-functions)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-2].md#a-combinatorial-approach-to-quantum-random-functions)
### Authors
* Nico Döttling, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Sihang Pu, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Giulio Malavolta, Max Planck Institute for Security and Privacy, Bochum, Germany
### Abstract
> Quantum pseudorandom functions (QPRFs) extend the classical security of a PRF by allowing the adversary to issue queries on input superpositions. Zhandry [Zhandry, FOCS 2012] showed a separation between the two notions and proved that common construction paradigms are also quantum secure, albeit with a new ad-hoc analysis. In this work we revisit the question of constructing QPRFs and propose a new method starting from small-domain (classical) PRFs: At the heart of our approach is a new domain-extension technique based on bipartite expanders. Interestingly, our analysis is almost entirely classical.
> 
> As a corollary of our main theorem, we obtain the first (approximate) key-homomorphic quantum PRF based on the quantum intractability of the learning with errors problem.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-64834-3_21](https://doi.org/10.1007/978-3-030-64834-3_21)
## Improved Classical and Quantum Algorithms for Subset-Sum.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2020-2].md#improved-classical-and-quantum-algorithms-for-subset-sum)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-2].md#improved-classical-and-quantum-algorithms-for-subset-sum)
### Authors
* Xavier Bonnetain, Institute for Quantum Computing, Department of Combinatorics and Optimization, University of Waterloo, Waterloo, ON, Canada
* Rémi Bricout, Sorbonne Université, Collège Doctoral, 75005, Paris, France
* Rémi Bricout, Inria, Paris, France
* André Schrottenloher, Inria, Paris, France
* Yixin Shen, Université de Paris, IRIF, CNRS, 75006, Paris, France
### Abstract
> We present new classical and quantum algorithms for solving random subset-sum instances. First, we improve over the Becker-Coron-Joux algorithm (EUROCRYPT 2011) from \( \widetilde{\mathcal {O}} \left( 2^{0.291 n} \right) \) down to \( \widetilde{\mathcal {O}} \left( 2^{0.283 n} \right) \), using more general representations with values in \(\{-1,0,1,2\}\). Next, we improve the state of the art of quantum algorithms for this problem in several directions. By combining the Howgrave-Graham-Joux algorithm (EUROCRYPT 2010) and quantum search, we devise an algorithm with asymptotic running time \( \widetilde{\mathcal {O}} \left( 2^{0.236 n} \right) \), lower than the cost of the quantum walk based on the same classical algorithm proposed by Bernstein, Jeffery, Lange and Meurer (PQCRYPTO 2013). This algorithm has the advantage of using classical memory with quantum random access, while the previously known algorithms used the quantum walk framework, and required quantum memory with quantum random access.
> 
> We also propose new quantum walks for subset-sum, performing better than the previous best time complexity of \( \widetilde{\mathcal {O}} \left( 2^{0.226 n} \right) \) given by Helm and May (TQC 2018). We combine our new techniques to reach a time \( \widetilde{\mathcal {O}} \left( 2^{0.216 n} \right) \). This time is dependent on a heuristic on quantum walk updates, formalized by Helm and May, that is also required by the previous algorithms. We show how to partially overcome this heuristic, and we obtain an algorithm with quantum time \( \widetilde{\mathcal {O}} \left( 2^{0.218 n} \right) \) requiring only the standard classical subset-sum heuristics.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-64834-3_22](https://doi.org/10.1007/978-3-030-64834-3_22)
## Security Limitations of Classical-Client Delegated Quantum Computing.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2020-2].md#security-limitations-of-classical-client-delegated-quantum-computing)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-2].md#security-limitations-of-classical-client-delegated-quantum-computing)
### Authors
* Christian Badertscher, IOHK, Zurich, Switzerland
* Alexandru Cojocaru, School of Informatics, University of Edinburgh, 10 Crichton Street, Edinburgh, EH8 9AB, UK
* Elham Kashefi, School of Informatics, University of Edinburgh, 10 Crichton Street, Edinburgh, EH8 9AB, UK
* Petros Wallden, School of Informatics, University of Edinburgh, 10 Crichton Street, Edinburgh, EH8 9AB, UK
* Léo Colisson, Laboratoire d’Informatique de Paris 6 (LIP6), Sorbonne Université, 4 Place Jussieu, 75252, Paris CEDEX 05, France
* Elham Kashefi, Laboratoire d’Informatique de Paris 6 (LIP6), Sorbonne Université, 4 Place Jussieu, 75252, Paris CEDEX 05, France
* Dominik Leichtle, Laboratoire d’Informatique de Paris 6 (LIP6), Sorbonne Université, 4 Place Jussieu, 75252, Paris CEDEX 05, France
* Atul Mantri, Joint Center for Quantum Information and Computer Science (QuICS), University of Maryland, College Park, USA
### Abstract
> Secure delegated quantum computing allows a computationally weak client to outsource an arbitrary quantum computation to an untrusted quantum server in a privacy-preserving manner. One of the promising candidates to achieve classical delegation of quantum computation is classical-client remote state preparation (\(\mathsf{RSP}_{\mathsf{CC}}\)), where a client remotely prepares a quantum state using a classical channel. However, the privacy loss incurred by employing \(\mathsf{RSP}_{\mathsf{CC}}\) as a sub-module is unclear. In this work, we investigate this question using the Constructive Cryptography framework by Maurer and Renner [MR11]. We first identify the goal of \(\mathsf{RSP}_{\mathsf{CC}}\) as the construction of ideal \(\mathsf{RSP}\) resources from classical channels and then reveal the security limitations of using \(\mathsf{RSP}_{\mathsf{CC}}\). First, we uncover a fundamental relationship between constructing ideal \(\mathsf{RSP}\) resources (from classical channels) and the task of cloning quantum states. Any classically constructed ideal \(\mathsf{RSP}\) resource must leak to the server the full classical description (possibly in an encoded form) of the generated quantum state, even if we target computational security only. As a consequence, we find that the realization of common \(\mathsf{RSP}\) resources, without weakening their guarantees drastically, is impossible due to the no-cloning theorem. Second, the above result does not rule out that a specific \(\mathsf{RSP}_{\mathsf{CC}}\) protocol can replace the quantum channel at least in some contexts, such as the Universal Blind Quantum Computing (\(\mathsf{UBQC}\)) protocol of Broadbent et al. [BFK09]. However, we show that the resulting UBQC protocol cannot maintain its proven composable security as soon as \(\mathsf{RSP}_{\mathsf{CC}}\) is used as a subroutine. Third, we show that replacing the quantum channel of the above \(\mathsf{UBQC}\) protocol by the \(\mathsf{RSP}_{\mathsf{CC}}\) protocol QFactory of Cojocaru et al. [CCKW19] preserves the weaker, game-based, security of \(\mathsf{UBQC}\).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-64834-3_23](https://doi.org/10.1007/978-3-030-64834-3_23)
## Quantum Circuit Implementations of AES with Fewer Qubits.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2020-2].md#quantum-circuit-implementations-of-aes-with-fewer-qubits)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-2].md#quantum-circuit-implementations-of-aes-with-fewer-qubits)
### Authors
* Jian Zou, Mathematics and Computer Science of Fuzhou University, Fuzhou, Fujian Province, China
* Ximeng Liu, Mathematics and Computer Science of Fuzhou University, Fuzhou, Fujian Province, China
* Jian Zou, Key Lab of Information Security of Network Systems (Fuzhou University), Fujian Province, China
* Ximeng Liu, Key Lab of Information Security of Network Systems (Fuzhou University), Fujian Province, China
* Zihao Wei, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Siwei Sun, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Zihao Wei, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Siwei Sun, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Wenling Wu, Institute of Software, Chinese Academy of Sciences, Beijing, China
### Abstract
> We propose some quantum circuit implementations of AES with the following improvements. Firstly, we propose some quantum circuits of the AES S-box and S-box\(^{-1}\), which require fewer qubits than prior work. Secondly, we reduce the number of qubits in the zig-zag method by introducing the S-box\(^{-1}\) operation in our quantum circuits of AES. Thirdly, we present a method to reduce the number of qubits in the key schedule of AES. While the previous quantum circuits of AES-128, AES-192, and AES-256 need at least 864, 896, and 1232 qubits respectively, our quantum circuit implementations of AES-128, AES-192, and AES-256 only require 512, 640, and 768 qubits respectively, where the number of qubits is reduced by more than 30%.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-64834-3_24](https://doi.org/10.1007/978-3-030-64834-3_24)
## Quantum Collision Attacks on AES-Like Hashing with Low Quantum Random Access Memories.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2020-2].md#quantum-collision-attacks-on-aes-like-hashing-with-low-quantum-random-access-memories)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-2].md#quantum-collision-attacks-on-aes-like-hashing-with-low-quantum-random-access-memories)
### Authors
* Xiaoyang Dong, Institute for Advanced Study, Beijing National Research Center for Information Science and Technology, Tsinghua University, Beijing, China
* Xiaoyun Wang, Institute for Advanced Study, Beijing National Research Center for Information Science and Technology, Tsinghua University, Beijing, China
* Siwei Sun, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Danping Shi, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Lei Hu, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Siwei Sun, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Danping Shi, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Lei Hu, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Fei Gao, State Key Laboratory of Networking and Switching Technology, Beijing University of Posts and Telecommunications, Beijing, China
* Xiaoyun Wang, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Jinan, China
### Abstract
> At EUROCRYPT 2020, Hosoyamada and Sasaki proposed the first dedicated quantum attack on hash functions—a quantum version of the rebound attack exploiting differentials whose probabilities are too low to be useful in the classical setting. This work opens up a new perspective toward the security of hash functions against quantum attacks. In particular, it tells us that the search for differentials should not stop at the classical birthday bound. Despite these interesting and promising implications, the concrete attacks described by Hosoyamada and Sasaki make use of large quantum random access memories (qRAMs), a resource whose availability in the foreseeable future is controversial even in the quantum computation community. Without large qRAMs, these attacks incur significant increases in time complexities. In this work, we reduce or even avoid the use of qRAMs by performing a quantum rebound attack based on differentials with non-full-active super S-boxes. Along the way, an MILP-based method is proposed to systematically explore the search space of useful truncated differentials with respect to rebound attacks. As a result, we obtain improved attacks on AES-MMO, AES-MP, and the first classical collision attacks on 4- and 5-round Grøstl-512. Interestingly, the use of non-full-active super S-box differentials in the analysis of AES-MMO gives rise to new difficulties in collecting enough starting points. To overcome this issue, we consider attacks involving two message blocks to gain more degrees of freedom, and we successfully compress the qRAM demand of the collision attacks on AES-MMO and AES-MP (EUROCRYPT 2020) from \(2^{48}\) to a range from \(2^{16}\) to 0, while still maintaining a comparable time complexity. To the best of our knowledge, these are the first dedicated quantum attacks on hash functions that slightly outperform Chailloux, Naya-Plasencia, and Schrottenloher’s generic quantum collision attack (ASIACRYPT 2017) in a model where large qRAMs are not available. This work demonstrates again how a clever combination of classical cryptanalytic technique and quantum computation leads to improved attacks, and shows that the direction pointed out by Hosoyamada and Sasaki deserves further investigation.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-64834-3_25](https://doi.org/10.1007/978-3-030-64834-3_25)
## Fuzzy Asymmetric Password-Authenticated Key Exchange.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2020-2].md#fuzzy-asymmetric-password-authenticated-key-exchange)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-2].md#fuzzy-asymmetric-password-authenticated-key-exchange)
### Authors
* Andreas Erwig, Technische Universität Darmstadt, Darmstadt, Germany
* Maximilian Orlt, Technische Universität Darmstadt, Darmstadt, Germany
* Siavash Riahi, Technische Universität Darmstadt, Darmstadt, Germany
* Julia Hesse, IBM Research, Zurich, Switzerland
### Abstract
> Password-Authenticated Key Exchange (PAKE) lets users with passwords exchange a cryptographic key. There have been two variants of PAKE which make it more applicable to real-world scenarios:
> 
> Asymmetric PAKE (aPAKE), which aims at protecting a client’s password even if the authentication server is untrusted, and
> 
> Fuzzy PAKE (fPAKE), which enables key agreement even if passwords of users are noisy, but “close enough”.
> 
> Supporting fuzzy password matches eases the use of higher entropy passwords and enables using biometrics and environmental readings (both of which are naturally noisy).
> 
> Until now, both variants of PAKE have been considered only in separation. In this paper, we consider both of them simultaneously. We introduce the notion of Fuzzy Asymmetric PAKE (fuzzy aPAKE), which protects against untrusted servers and supports noisy passwords. We formulate our new notion in the Universal Composability framework of Canetti (FOCS’01), which is the preferred model for password-based primitives. We then show that fuzzy aPAKE can be obtained from oblivious transfer and some variant of robust secret sharing (Cramer et al, EC’15). We achieve security against malicious parties while avoiding expensive tools such as non-interactive zero-knowledge proofs. Our construction is round-optimal, with message and password file sizes that are independent of the schemes error tolerance.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-64834-3_26](https://doi.org/10.1007/978-3-030-64834-3_26)
## Two-Pass Authenticated Key Exchange with Explicit Authentication and Tight Security.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2020-2].md#two-pass-authenticated-key-exchange-with-explicit-authentication-and-tight-security)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-2].md#two-pass-authenticated-key-exchange-with-explicit-authentication-and-tight-security)
### Authors
* Xiangyu Liu, Department of Computer Science and Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Shengli Liu, Department of Computer Science and Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Dawu Gu, Department of Computer Science and Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Xiangyu Liu, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Shengli Liu, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Shengli Liu, Westone Cryptologic Research Center, Beijing, 100070, China
* Jian Weng, College of Cyber Security, Jinan University, Guangzhou, 510632, China
### Abstract
> We propose a generic construction of 2-pass authenticated key exchange (AKE) scheme with explicit authentication from key encapsulation mechanism (KEM) and signature (SIG) schemes. We improve the security model due to Gjøsteen and Jager [Crypto2018] to a stronger one. In the strong model, if a replayed message is accepted by some user, the authentication of AKE is broken. We define a new security notion named “IND-mCPA with adaptive reveals” for KEM. When the underlying KEM has such a security and SIG has unforgeability with adaptive corruptions, our construction of AKE equipped with counters as states is secure in the strong model, and stateless AKE without counter is secure in the traditional model. We also present a KEM possessing tight “IND-mCPA security with adaptive reveals” from the Computation Diffie-Hellman assumption in the random oracle model. When the generic construction of AKE is instantiated with the KEM and the available SIG by Gjøsteen and Jager [Crypto2018], we obtain the first practical 2-pass AKE with tight security and explicit authentication. In addition, the integration of the tightly IND-mCCA secure KEM (derived from PKE by Han et al. [Crypto2019]) and the tightly secure SIG by Bader et al. [TCC2015] results in the first tightly secure 2-pass AKE with explicit authentication in the standard model.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-64834-3_27](https://doi.org/10.1007/978-3-030-64834-3_27)
